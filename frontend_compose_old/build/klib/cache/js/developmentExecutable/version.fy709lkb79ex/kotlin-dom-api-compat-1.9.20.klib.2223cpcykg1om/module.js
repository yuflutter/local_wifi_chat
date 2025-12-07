(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    root.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.ih;
  //endregion
  //region block: pre-declaration
  //endregion
  function clear(_this__u8e3s4) {
    while (_this__u8e3s4.hasChildNodes()) {
      _this__u8e3s4.removeChild(ensureNotNull(_this__u8e3s4.firstChild));
    }
  }
  function set(_this__u8e3s4, index, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[index] = value;
  }
  function set_0(_this__u8e3s4, index, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[index] = value;
  }
  function get(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function get_0(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function get_ARRAYBUFFER(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'arraybuffer';
  }
  function get_1(_this__u8e3s4, key) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[key];
  }
  function set_1(_this__u8e3s4, key, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[key] = value;
  }
  function get_FOLLOW(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'follow';
  }
  function get_MANUAL(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'manual';
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = clear;
  //endregion
  return _;
}));
