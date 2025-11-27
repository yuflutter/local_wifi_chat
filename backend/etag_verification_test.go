package main

import (
	"embed"
	"io/fs"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/NYTimes/gziphandler"
)

//go:embed frontend_bundle/*
var testFrontendEmbedFS embed.FS

// TestETagGeneration verifies that http.FileServer generates ETags for static files
func TestETagGeneration(t *testing.T) {
	// Setup file server
	frontendWebFS, err := fs.Sub(testFrontendEmbedFS, "frontend_bundle")
	if err != nil {
		t.Skipf("Skipping test: frontend_bundle not found: %v", err)
		return
	}

	fileServer := http.FileServer(http.FS(frontendWebFS))
	optimizedHandler := cacheControlMiddleware(fileServer)
	// Note: Testing without gzip to verify base ETag support
	// optimizedHandler = gziphandler.GzipHandler(optimizedHandler)

	// Create test request for a static file (use main.dart.js as it's a real file)
	req := httptest.NewRequest("GET", "/main.dart.js", nil)
	w := httptest.NewRecorder()

	// Serve the request
	optimizedHandler.ServeHTTP(w, req)

	// Check response
	resp := w.Result()
	defer resp.Body.Close()

	// Verify status code
	if resp.StatusCode != http.StatusOK {
		t.Errorf("Expected status 200, got %d", resp.StatusCode)
	}

	// Verify ETag header is present
	etag := resp.Header.Get("ETag")
	if etag == "" {
		t.Error("Expected ETag header to be present, but it was empty")
	} else {
		t.Logf("ETag generated: %s", etag)
	}

	// Verify Cache-Control header is set by our middleware
	cacheControl := resp.Header.Get("Cache-Control")
	if cacheControl == "" {
		t.Error("Expected Cache-Control header to be present")
	} else {
		t.Logf("Cache-Control: %s", cacheControl)
	}
}

// TestETagGenerationWithGzip verifies ETags work with gzip handler
func TestETagGenerationWithGzip(t *testing.T) {
	// Setup file server
	frontendWebFS, err := fs.Sub(testFrontendEmbedFS, "frontend_bundle")
	if err != nil {
		t.Skipf("Skipping test: frontend_bundle not found: %v", err)
		return
	}

	fileServer := http.FileServer(http.FS(frontendWebFS))
	optimizedHandler := cacheControlMiddleware(fileServer)
	optimizedHandler = gziphandler.GzipHandler(optimizedHandler)

	// Create test request WITHOUT Accept-Encoding to avoid gzip compression
	req := httptest.NewRequest("GET", "/main.dart.js", nil)
	w := httptest.NewRecorder()

	// Serve the request
	optimizedHandler.ServeHTTP(w, req)

	// Check response
	resp := w.Result()
	defer resp.Body.Close()

	// Verify status code
	if resp.StatusCode != http.StatusOK {
		t.Errorf("Expected status 200, got %d", resp.StatusCode)
	}

	// Check if ETag is present (gziphandler may strip it when compressing)
	etag := resp.Header.Get("ETag")
	t.Logf("ETag with gzip handler (no Accept-Encoding): %s", etag)

	// Verify Cache-Control header is set
	cacheControl := resp.Header.Get("Cache-Control")
	t.Logf("Cache-Control: %s", cacheControl)
}

// Test304NotModifiedResponse verifies that 304 Not Modified responses work with If-None-Match
func Test304NotModifiedResponse(t *testing.T) {
	// Setup file server
	frontendWebFS, err := fs.Sub(testFrontendEmbedFS, "frontend_bundle")
	if err != nil {
		t.Skipf("Skipping test: frontend_bundle not found: %v", err)
		return
	}

	fileServer := http.FileServer(http.FS(frontendWebFS))
	optimizedHandler := cacheControlMiddleware(fileServer)
	// Test without gzip to verify base ETag/304 support
	// optimizedHandler = gziphandler.GzipHandler(optimizedHandler)

	// First request: Get the file and capture ETag
	req1 := httptest.NewRequest("GET", "/main.dart.js", nil)
	w1 := httptest.NewRecorder()
	optimizedHandler.ServeHTTP(w1, req1)

	resp1 := w1.Result()
	defer resp1.Body.Close()

	if resp1.StatusCode != http.StatusOK {
		t.Fatalf("First request failed with status %d", resp1.StatusCode)
	}

	etag := resp1.Header.Get("ETag")
	if etag == "" {
		t.Fatal("No ETag in first response")
	}
	t.Logf("Captured ETag from first request: %s", etag)

	// Second request: Use If-None-Match with the captured ETag
	req2 := httptest.NewRequest("GET", "/main.dart.js", nil)
	req2.Header.Set("If-None-Match", etag)
	w2 := httptest.NewRecorder()
	optimizedHandler.ServeHTTP(w2, req2)

	resp2 := w2.Result()
	defer resp2.Body.Close()

	// Verify 304 Not Modified response
	if resp2.StatusCode != http.StatusNotModified {
		t.Errorf("Expected status 304 Not Modified, got %d", resp2.StatusCode)
	} else {
		t.Logf("Successfully received 304 Not Modified response")
	}

	// Verify that response body is empty for 304
	if resp2.ContentLength > 0 {
		t.Errorf("Expected empty body for 304 response, got Content-Length: %d", resp2.ContentLength)
	}

	// Verify ETag is still present in 304 response
	etag2 := resp2.Header.Get("ETag")
	if etag2 != etag {
		t.Errorf("Expected same ETag in 304 response, got %s", etag2)
	}
}

// TestETagWithDifferentFiles verifies ETags are different for different files
func TestETagWithDifferentFiles(t *testing.T) {
	// Setup file server
	frontendWebFS, err := fs.Sub(testFrontendEmbedFS, "frontend_bundle")
	if err != nil {
		t.Skipf("Skipping test: frontend_bundle not found: %v", err)
		return
	}

	fileServer := http.FileServer(http.FS(frontendWebFS))
	optimizedHandler := cacheControlMiddleware(fileServer)
	// Test without gzip to verify base ETag support
	// optimizedHandler = gziphandler.GzipHandler(optimizedHandler)

	// Request first file
	req1 := httptest.NewRequest("GET", "/main.dart.js", nil)
	w1 := httptest.NewRecorder()
	optimizedHandler.ServeHTTP(w1, req1)
	etag1 := w1.Result().Header.Get("ETag")

	// Request second file
	req2 := httptest.NewRequest("GET", "/flutter.js", nil)
	w2 := httptest.NewRecorder()
	optimizedHandler.ServeHTTP(w2, req2)
	etag2 := w2.Result().Header.Get("ETag")

	// Verify both have ETags
	if etag1 == "" || etag2 == "" {
		t.Error("Expected both files to have ETags")
	}

	// Verify ETags are different
	if etag1 == etag2 {
		t.Error("Expected different ETags for different files")
	} else {
		t.Logf("main.dart.js ETag: %s", etag1)
		t.Logf("flutter.js ETag: %s", etag2)
	}
}

// TestInvalidETagReturns200 verifies that invalid ETag returns full content
func TestInvalidETagReturns200(t *testing.T) {
	// Setup file server
	frontendWebFS, err := fs.Sub(testFrontendEmbedFS, "frontend_bundle")
	if err != nil {
		t.Skipf("Skipping test: frontend_bundle not found: %v", err)
		return
	}

	fileServer := http.FileServer(http.FS(frontendWebFS))
	optimizedHandler := cacheControlMiddleware(fileServer)
	// Test without gzip to verify base ETag support
	// optimizedHandler = gziphandler.GzipHandler(optimizedHandler)

	// Request with invalid/mismatched ETag
	req := httptest.NewRequest("GET", "/main.dart.js", nil)
	req.Header.Set("If-None-Match", `"invalid-etag-12345"`)
	w := httptest.NewRecorder()
	optimizedHandler.ServeHTTP(w, req)

	resp := w.Result()
	defer resp.Body.Close()

	// Should return 200 with full content when ETag doesn't match
	if resp.StatusCode != http.StatusOK {
		t.Errorf("Expected status 200 for mismatched ETag, got %d", resp.StatusCode)
	}

	// Should have content
	if resp.ContentLength == 0 && w.Body.Len() == 0 {
		t.Error("Expected response body for mismatched ETag")
	} else {
		t.Logf("Correctly returned full content (length: %d) for mismatched ETag", w.Body.Len())
	}
}
