import 'dart:async';
import 'dart:developer' as dev;
import 'package:flutter/foundation.dart';

enum _FetchMode { first, next, refresh }

/// A rich model, that implements CRUD
abstract class AbstractCrudModel<T, Tnew, Tfilter extends AbstractFetchFilter> with ChangeNotifier {
  final AbstractCrudRepository<T, Tnew, Tfilter> repository;
  final Tfilter fetchFilter;
  final int fetchBatchLimit;
  final Duration? refreshEvery;
  bool Function(T)? filterFunction;
  int Function(T, T)? sortFunction;

  List<T> _all = const [];
  List<T> _displayed = [];

  bool _isLoading = false;
  bool _hasMoreOlder = true;
  Object? _fetchError;
  StackTrace? _fetchErrorStack;
  bool _scrollToTop = false;
  bool _scrollToBottom = false;

  Timer? _refreshTimer;

  AbstractCrudModel({
    required this.repository,
    required this.fetchFilter,
    this.fetchBatchLimit = 100,
    this.refreshEvery = const Duration(seconds: 20),
    this.filterFunction,
    this.sortFunction,
  }) {
    dev.log('new AbstractCrudModel');
  }

  List<T> get displayed => _displayed;
  bool get isLoading => _isLoading;
  bool get hasMore => _hasMoreOlder;
  Object? get fetchError => _fetchError;
  StackTrace? get fetchErrorStack => _fetchErrorStack;
  bool get isFetchError => (_fetchError != null);

  void doScrollToTop() {
    _scrollToTop = true;
    notifyListeners();
  }

  bool get scrollToTop {
    final current = _scrollToTop;
    _scrollToTop = false;
    return current;
  }

  void doScrollToBottom() {
    _scrollToBottom = true;
    notifyListeners();
  }

  bool get scrollToBottom {
    final current = _scrollToBottom;
    _scrollToBottom = false;
    return current;
  }

  /// It is assumed that the backend returns a list sorted in reverse order -
  /// the latest (  up-to-date) entries arrive first, and the earlier ones arrive at the asynchronously loaded tail.
  /// This order of extracting lists from the backend is typical for messengers.
  Future<void> _fetch({required _FetchMode fetchMode}) async {
    if (_isLoading) return;
    try {
      _refreshTimer?.cancel();
      _fetchError = null;
      _fetchErrorStack = null;
      _isLoading = true;
      notifyListeners();
      switch (fetchMode) {
        case _FetchMode.first:
          fetchFilter
            ..olderThan = null
            ..newerThan = null
            ..limit = fetchBatchLimit;
          final batch = await repository.fetch(fetchFilter: fetchFilter);
          _all = batch;
          _hasMoreOlder = (batch.length == fetchBatchLimit);

        case _FetchMode.next:
          fetchFilter
            ..olderThan = (_all.isNotEmpty) ? _all.last : null
            ..newerThan = null
            ..limit = fetchBatchLimit;
          final batch = await repository.fetch(fetchFilter: fetchFilter);
          _all.addAll(batch);
          _hasMoreOlder = (batch.length == fetchBatchLimit);

        case _FetchMode.refresh:
          fetchFilter
            ..olderThan = null
            ..newerThan = (_all.isNotEmpty) ? _all.first : null
            ..limit = null; // there is no limit for new entries
          final batch = await repository.fetch(fetchFilter: fetchFilter);
          _all.insertAll(0, batch);
        // _hasMoreOlder is left unchanged
      }
      _displayed = (filterFunction != null) ? _all.where(filterFunction!).toList() : List.from(_all);
      if (sortFunction != null) _displayed.sort(sortFunction);
      _isLoading = false;
      notifyListeners();
      if (refreshEvery != null) {
        _refreshTimer = Timer.periodic(refreshEvery!, (_) => fetchRefresh());
      }
    } catch (e, s) {
      _isLoading = false;
      _fetchError = e;
      _fetchErrorStack = s;
      notifyListeners();
    }
  }

  Future<void> fetchFirst() => _fetch(fetchMode: _FetchMode.first);

  Future<void> fetchNext() => _fetch(fetchMode: _FetchMode.next);

  Future<void> fetchRefresh() => _fetch(fetchMode: _FetchMode.refresh);

  // The backend can return a new object with all fields (including the key)
  Future<T?> addNew(Tnew newObject) {
    return repository.addNew(newObject);
  }

  Future<void> delete(T object) {
    return repository.delete(object);
  }

  @override
  void dispose() {
    _refreshTimer?.cancel();
    super.dispose();
  }
}

abstract class AbstractFetchFilter<T> {
  T? olderThan;
  T? newerThan;
  int? limit;

  String toQueryValue(dynamic value) => (value == null)
      ? ''
      : (value is DateTime)
      ? value.toUtc().toIso8601String()
      : value.toString();

  Map<String, String> toUriParams();
}

abstract class AbstractCrudRepository<T, Tnew, Tfilter extends AbstractFetchFilter> {
  Future<List<T>> fetch({required Tfilter fetchFilter});
  Future<T?> addNew(Tnew newObject);
  Future<void> delete(T object);
}
