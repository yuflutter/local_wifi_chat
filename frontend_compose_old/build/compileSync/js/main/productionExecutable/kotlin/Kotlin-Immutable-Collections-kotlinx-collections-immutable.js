(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Kotlin-Immutable-Collections-kotlinx-collections-immutable'] = factory(typeof this['Kotlin-Immutable-Collections-kotlinx-collections-immutable'] === 'undefined' ? {} : this['Kotlin-Immutable-Collections-kotlinx-collections-immutable']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-Immutable-Collections-kotlinx-collections-immutable.js.map
