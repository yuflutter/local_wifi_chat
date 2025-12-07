(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-utils'.");
    }
    root['ktor-ktor-utils'] = factory(typeof this['ktor-ktor-utils'] === 'undefined' ? {} : this['ktor-ktor-utils'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-io'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var protoOf = kotlin_kotlin.$_$.gb;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var classMeta = kotlin_kotlin.$_$.x9;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var VOID = kotlin_kotlin.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.u;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var equals = kotlin_kotlin.$_$.aa;
  var hashCode = kotlin_kotlin.$_$.ia;
  var MutableMap = kotlin_kotlin.$_$.w5;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var Entry = kotlin_kotlin.$_$.s5;
  var isInterface = kotlin_kotlin.$_$.ta;
  var MutableEntry = kotlin_kotlin.$_$.v5;
  var charArray = kotlin_kotlin.$_$.t9;
  var charSequenceGet = kotlin_kotlin.$_$.u9;
  var toString = kotlin_kotlin.$_$.x2;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.z8;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Element = kotlin_kotlin.$_$.i9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Set = kotlin_kotlin.$_$.z5;
  var toString_0 = kotlin_kotlin.$_$.lb;
  var MutableSet = kotlin_kotlin.$_$.x5;
  var Enum = kotlin_kotlin.$_$.de;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var firstOrNull = kotlin_kotlin.$_$.z6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var emptyMap = kotlin_kotlin.$_$.u6;
  var getBooleanHashCode = kotlin_kotlin.$_$.da;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var get_lastIndex = kotlin_kotlin.$_$.wc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.u2;
  var equals_0 = kotlin_kotlin.$_$.lc;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var Long = kotlin_kotlin.$_$.ie;
  var Comparable = kotlin_kotlin.$_$.ae;
  var isSuspendFunction = kotlin_kotlin.$_$.wa;
  var MutableList = kotlin_kotlin.$_$.u5;
  var objectCreate = kotlin_kotlin.$_$.eb;
  var ArrayList = kotlin_kotlin.$_$.l5;
  var emptyList = kotlin_kotlin.$_$.t6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.l7;
  var last = kotlin_kotlin.$_$.o7;
  var mutableListOf = kotlin_kotlin.$_$.t7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var extendThrowable = kotlin_kotlin.$_$.ba;
  var captureStack = kotlin_kotlin.$_$.r9;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Companion_instance = kotlin_kotlin.$_$.z4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.y2;
  var createFailure = kotlin_kotlin.$_$.ef;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.z2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.a3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.s4;
  var Continuation = kotlin_kotlin.$_$.e9;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var intercepted = kotlin_kotlin.$_$.y8;
  var toList = kotlin_kotlin.$_$.m8;
  var isNaN_0 = kotlin_kotlin.$_$.jf;
  var numberToLong = kotlin_kotlin.$_$.db;
  var IllegalStateException = kotlin_kotlin.$_$.he;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.mf;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AttributeKey, 'AttributeKey', classMeta);
  function get(key) {
    var tmp0_elvis_lhs = this.n1n(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  setMetadataFor(Attributes, 'Attributes', interfaceMeta);
  setMetadataFor($toByteArrayCOROUTINE$0, '$toByteArrayCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(CaseInsensitiveMap, 'CaseInsensitiveMap', classMeta, VOID, [MutableMap], CaseInsensitiveMap);
  setMetadataFor(Entry_0, 'Entry', classMeta, VOID, [MutableEntry]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(DelegatingMutableSet$iterator$1, VOID, classMeta);
  setMetadataFor(DelegatingMutableSet, 'DelegatingMutableSet', classMeta, VOID, [MutableSet]);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(PlatformUtils, 'PlatformUtils', objectMeta);
  function get_0(name) {
    var tmp0_safe_receiver = this.h1p(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_iterator = this.j1p().u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.q2();
      body(k, v);
    }
    return Unit_instance;
  }
  setMetadataFor(StringValues, 'StringValues', interfaceMeta);
  setMetadataFor(StringValuesBuilderImpl, 'StringValuesBuilderImpl', classMeta, VOID, VOID, StringValuesBuilderImpl);
  setMetadataFor(StringValuesImpl, 'StringValuesImpl', classMeta, VOID, [StringValues], StringValuesImpl);
  setMetadataFor(CaseInsensitiveString, 'CaseInsensitiveString', classMeta);
  setMetadataFor(CopyOnWriteHashMap, 'CopyOnWriteHashMap', classMeta, VOID, VOID, CopyOnWriteHashMap);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(GMTDate, 'GMTDate', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(WeekDay, 'WeekDay', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Month, 'Month', classMeta, Enum);
  setMetadataFor($proceedLoopCOROUTINE$1, '$proceedLoopCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(PipelineContext, 'PipelineContext', classMeta, VOID, [CoroutineScope], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(DebugPipelineContext, 'DebugPipelineContext', classMeta, PipelineContext, VOID, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(PhaseContent, 'PhaseContent', classMeta);
  setMetadataFor(Pipeline, 'Pipeline', classMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(PipelinePhase, 'PipelinePhase', classMeta);
  setMetadataFor(InvalidPhaseException, 'InvalidPhaseException', classMeta, Error);
  setMetadataFor(PipelinePhaseRelation, 'PipelinePhaseRelation', classMeta);
  setMetadataFor(After, 'After', classMeta, PipelinePhaseRelation);
  setMetadataFor(Before, 'Before', classMeta, PipelinePhaseRelation);
  setMetadataFor(Last, 'Last', objectMeta, PipelinePhaseRelation);
  setMetadataFor(SuspendFunctionGun$continuation$1, VOID, classMeta, VOID, [Continuation]);
  setMetadataFor(SuspendFunctionGun, 'SuspendFunctionGun', classMeta, PipelineContext, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(TypeInfo, 'TypeInfo', classMeta);
  setMetadataFor(AttributesJs, 'AttributesJs', classMeta, VOID, [Attributes], AttributesJs);
  setMetadataFor(InvalidTimestampException, 'InvalidTimestampException', classMeta, IllegalStateException);
  setMetadataFor(KtorSimpleLogger$1, VOID, classMeta);
  setMetadataFor(LogLevel, 'LogLevel', classMeta, Enum);
  setMetadataFor(JsType, 'JsType', objectMeta);
  //endregion
  function AttributeKey(name) {
    this.l1n_1 = name;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.l1n_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.l1n_1;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof AttributeKey))
      THROW_CCE();
    if (!(this.l1n_1 === other.l1n_1))
      return false;
    return true;
  };
  protoOf(AttributeKey).hashCode = function () {
    return getStringHashCode(this.l1n_1);
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = other.s1n().u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.p1n(element instanceof AttributeKey ? element : THROW_CCE(), other.m1n(element));
    }
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1o_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$0).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            suspendResult = this.b1o_1.b1f(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
          case 2:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 2) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.c1o_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.p2().c1o_1, $this$$receiver.q2());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.p2()), $this$$receiver.q2());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e1o_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CaseInsensitiveMap).n = function () {
    return this.e1o_1.n();
  };
  protoOf(CaseInsensitiveMap).f1o = function (key) {
    return this.e1o_1.u2(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).u2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.f1o((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).g1o = function (key) {
    return this.e1o_1.x2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).x2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.g1o((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).c1 = function () {
    return this.e1o_1.c1();
  };
  protoOf(CaseInsensitiveMap).z = function () {
    this.e1o_1.z();
  };
  protoOf(CaseInsensitiveMap).h1o = function (key, value) {
    return this.e1o_1.n2(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).n2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.h1o(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).i1o = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = from.m2().u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var value = element.q2();
      this.h1o(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).o2 = function (from) {
    return this.i1o(from);
  };
  protoOf(CaseInsensitiveMap).j1o = function (key) {
    return this.e1o_1.r2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.j1o((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).k2 = function () {
    var tmp = this.e1o_1.k2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).m2 = function () {
    var tmp = this.e1o_1.m2();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).l2 = function () {
    return this.e1o_1.l2();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.e1o_1, this.e1o_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.e1o_1);
  };
  function Entry_0(key, value) {
    this.k1o_1 = key;
    this.l1o_1 = value;
  }
  protoOf(Entry_0).p2 = function () {
    return this.k1o_1;
  };
  protoOf(Entry_0).q2 = function () {
    return this.l1o_1;
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.k1o_1)) | 0) + hashCode(ensureNotNull(this.l1o_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.p2(), this.k1o_1) ? equals(other.q2(), this.l1o_1) : false;
  };
  protoOf(Entry_0).toString = function () {
    return '' + this.k1o_1 + '=' + this.l1o_1;
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = toString(_this__u8e3s4).toLowerCase();
    return charSequenceGet(tmp$ret$2, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.ze(tmp$ret$0);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).jq = function (context, exception) {
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    return Unit_instance;
  };
  function DelegatingMutableSet$iterator$1(this$0) {
    this.o1o_1 = this$0;
    this.n1o_1 = this$0.p1o_1.u();
  }
  protoOf(DelegatingMutableSet$iterator$1).v = function () {
    return this.n1o_1.v();
  };
  protoOf(DelegatingMutableSet$iterator$1).x = function () {
    return this.o1o_1.q1o_1(this.n1o_1.x());
  };
  protoOf(DelegatingMutableSet$iterator$1).w = function () {
    return this.n1o_1.w();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.p1o_1 = delegate;
    this.q1o_1 = convertTo;
    this.r1o_1 = convert;
    this.s1o_1 = this.p1o_1.n();
  }
  protoOf(DelegatingMutableSet).t1o = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.u();
    while (tmp0_iterator.v()) {
      var item = tmp0_iterator.x();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      var tmp$ret$0 = this.r1o_1(item);
      destination.r(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).u1o = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.u();
    while (tmp0_iterator.v()) {
      var item = tmp0_iterator.x();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      var tmp$ret$0 = this.q1o_1(item);
      destination.r(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).n = function () {
    return this.s1o_1;
  };
  protoOf(DelegatingMutableSet).v1o = function (element) {
    return this.p1o_1.r(this.r1o_1(element));
  };
  protoOf(DelegatingMutableSet).r = function (element) {
    return this.v1o((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).w1o = function (elements) {
    return this.p1o_1.y(this.t1o(elements));
  };
  protoOf(DelegatingMutableSet).y = function (elements) {
    return this.w1o(elements);
  };
  protoOf(DelegatingMutableSet).z = function () {
    this.p1o_1.z();
  };
  protoOf(DelegatingMutableSet).x1o = function (element) {
    return this.p1o_1.s(this.r1o_1(element));
  };
  protoOf(DelegatingMutableSet).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.x1o((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).y1o = function (element) {
    return this.p1o_1.a1(this.r1o_1(element));
  };
  protoOf(DelegatingMutableSet).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.y1o((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).z1o = function (elements) {
    return this.p1o_1.b1(this.t1o(elements));
  };
  protoOf(DelegatingMutableSet).b1 = function (elements) {
    return this.z1o(elements);
  };
  protoOf(DelegatingMutableSet).c1 = function () {
    return this.p1o_1.c1();
  };
  protoOf(DelegatingMutableSet).u = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.p1o_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.u1o(this.p1o_1);
    var tmp_0;
    if (other.b1(elements)) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp_0 = elements.b1(other);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString_0(this.u1o(this.p1o_1));
  };
  var Platform_Jvm_instance;
  var Platform_Native_instance;
  var Platform_Browser_instance;
  var Platform_Node_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
    Platform_entriesInitialized = true;
    Platform_Jvm_instance = new Platform('Jvm', 0);
    Platform_Native_instance = new Platform('Native', 1);
    Platform_Browser_instance = new Platform('Browser', 2);
    Platform_Node_instance = new Platform('Node', 3);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    this.a1p_1 = get_platform(this).equals(Platform_Browser_getInstance());
    this.b1p_1 = get_platform(this).equals(Platform_Node_getInstance());
    this.c1p_1 = get_platform(this).equals(Platform_Jvm_getInstance());
    this.d1p_1 = get_platform(this).equals(Platform_Native_getInstance());
    this.e1p_1 = get_isDevelopmentMode(this);
    this.f1p_1 = get_isNewMemoryModel(this);
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function Platform_Jvm_getInstance() {
    Platform_initEntries();
    return Platform_Jvm_instance;
  }
  function Platform_Native_getInstance() {
    Platform_initEntries();
    return Platform_Native_instance;
  }
  function Platform_Browser_getInstance() {
    Platform_initEntries();
    return Platform_Browser_instance;
  }
  function Platform_Node_getInstance() {
    Platform_initEntries();
    return Platform_Node_instance;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.m1p_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.n1p(name);
      // Inline function 'kotlin.collections.set' call
      $this.m1p_1.n2(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.o1p(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.l1p_1 = caseInsensitiveName;
    this.m1p_1 = this.l1p_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).g1p = function () {
    return this.l1p_1;
  };
  protoOf(StringValuesBuilderImpl).h1p = function (name) {
    return this.m1p_1.x2(name);
  };
  protoOf(StringValuesBuilderImpl).i1p = function () {
    return this.m1p_1.k2();
  };
  protoOf(StringValuesBuilderImpl).c1 = function () {
    return this.m1p_1.c1();
  };
  protoOf(StringValuesBuilderImpl).j1p = function () {
    return unmodifiable(this.m1p_1.m2());
  };
  protoOf(StringValuesBuilderImpl).p1p = function (name, value) {
    this.q1p(value);
    var list = ensureListForKey(this, name);
    list.z();
    list.r(value);
  };
  protoOf(StringValuesBuilderImpl).g1o = function (name) {
    var tmp0_safe_receiver = this.h1p(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).r1p = function (name, value) {
    this.q1p(value);
    ensureListForKey(this, name).r(value);
  };
  protoOf(StringValuesBuilderImpl).s1p = function (stringValues) {
    stringValues.k1p(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).o1p = function (name, values) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var list = ensureListForKey(this, name);
    var tmp0_iterator = values.u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.q1p(element);
      list.r(element);
    }
  };
  protoOf(StringValuesBuilderImpl).t1p = function (name) {
    this.m1p_1.r2(name);
  };
  protoOf(StringValuesBuilderImpl).z = function () {
    this.m1p_1.z();
  };
  protoOf(StringValuesBuilderImpl).n1p = function (name) {
  };
  protoOf(StringValuesBuilderImpl).q1p = function (value) {
  };
  function listForKey($this, name) {
    return $this.v1p_1.x2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.u1p_1 = caseInsensitiveName;
    var tmp;
    if (this.u1p_1) {
      tmp = caseInsensitiveMap();
    } else {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = values.m2().u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var value = element.q2();
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = value.n();
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          var tmp$ret$4 = value.g1(index);
          list.r(tmp$ret$4);
        }
         while (inductionVariable < size);
      newMap.n2(key, list);
    }
    this.v1p_1 = newMap;
  }
  protoOf(StringValuesImpl).g1p = function () {
    return this.u1p_1;
  };
  protoOf(StringValuesImpl).g1o = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).h1p = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).i1p = function () {
    return unmodifiable(this.v1p_1.k2());
  };
  protoOf(StringValuesImpl).c1 = function () {
    return this.v1p_1.c1();
  };
  protoOf(StringValuesImpl).j1p = function () {
    return unmodifiable(this.v1p_1.m2());
  };
  protoOf(StringValuesImpl).k1p = function (body) {
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.v1p_1.m2().u();
    while (tmp0_iterator.v()) {
      var tmp1_loop_parameter = tmp0_iterator.x();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.p2();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.q2();
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.u1p_1 + ') ' + this.j1p();
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.u1p_1 === other.g1p()))
      return false;
    return entriesEquals(this.j1p(), other.j1p());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.j1p(), imul(31, getBooleanHashCode(this.u1p_1)));
  };
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = builder.j1p().u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var values = element.q2();
      _this__u8e3s4.o1p(name, values);
    }
    return _this__u8e3s4;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var it = charSequenceGet(_this__u8e3s4, index);
          if (!(toLowerCasePreservingASCII(it) === it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    this_0.n8(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.y5(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    return this_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= ch ? ch <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= ch ? ch <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString(ch).toLowerCase();
      tmp = charSequenceGet(tmp$ret$2, 0);
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.c1o_1 = content;
    var tmp = this;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.c1o_1.toLowerCase();
    tmp.d1o_1 = getStringHashCode(tmp$ret$1);
  }
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1o_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.c1o_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.d1o_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.c1o_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.w1p_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).x1p = function (key) {
    return this.w1p_1.kotlinx$atomicfu$value.x2(key);
  };
  function Companion() {
    Companion_instance_0 = this;
    this.y1p_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance();
    this.z1p_1 = seconds;
    this.a1q_1 = minutes;
    this.b1q_1 = hours;
    this.c1q_1 = dayOfWeek;
    this.d1q_1 = dayOfMonth;
    this.e1q_1 = dayOfYear;
    this.f1q_1 = month;
    this.g1q_1 = year;
    this.h1q_1 = timestamp;
  }
  protoOf(GMTDate).i1q = function (other) {
    return this.h1q_1.p9(other.h1q_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.i1q(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.z1p_1 + ', minutes=' + this.a1q_1 + ', hours=' + this.b1q_1 + ', dayOfWeek=' + this.c1q_1 + ', dayOfMonth=' + this.d1q_1 + ', dayOfYear=' + this.e1q_1 + ', month=' + this.f1q_1 + ', year=' + this.g1q_1 + ', timestamp=' + this.h1q_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.z1p_1;
    result = imul(result, 31) + this.a1q_1 | 0;
    result = imul(result, 31) + this.b1q_1 | 0;
    result = imul(result, 31) + this.c1q_1.hashCode() | 0;
    result = imul(result, 31) + this.d1q_1 | 0;
    result = imul(result, 31) + this.e1q_1 | 0;
    result = imul(result, 31) + this.f1q_1.hashCode() | 0;
    result = imul(result, 31) + this.g1q_1 | 0;
    result = imul(result, 31) + this.h1q_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.z1p_1 === tmp0_other_with_cast.z1p_1))
      return false;
    if (!(this.a1q_1 === tmp0_other_with_cast.a1q_1))
      return false;
    if (!(this.b1q_1 === tmp0_other_with_cast.b1q_1))
      return false;
    if (!this.c1q_1.equals(tmp0_other_with_cast.c1q_1))
      return false;
    if (!(this.d1q_1 === tmp0_other_with_cast.d1q_1))
      return false;
    if (!(this.e1q_1 === tmp0_other_with_cast.e1q_1))
      return false;
    if (!this.f1q_1.equals(tmp0_other_with_cast.f1q_1))
      return false;
    if (!(this.g1q_1 === tmp0_other_with_cast.g1q_1))
      return false;
    if (!this.h1q_1.equals(tmp0_other_with_cast.h1q_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).j1q = function (ordinal) {
    return values()[ordinal];
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_instance;
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.m1q_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
  }
  protoOf(Companion_1).j1q = function (ordinal) {
    return values_0()[ordinal];
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.p1q_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y1q_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 6;
            this.pb_1 = 1;
            continue $sm;
          case 1:
            this.z1q_1 = this.y1q_1.g1r_1;
            if (this.z1q_1 === -1) {
              this.pb_1 = 5;
              continue $sm;
            } else {
              this.pb_1 = 2;
              continue $sm;
            }

          case 2:
            this.a1r_1 = this.y1q_1.d1r_1;
            if (this.z1q_1 >= this.a1r_1.n()) {
              this.y1q_1.h1r();
              this.pb_1 = 5;
              continue $sm;
            } else {
              this.pb_1 = 3;
              continue $sm;
            }

          case 3:
            this.b1r_1 = this.a1r_1.g1(this.z1q_1);
            this.y1q_1.g1r_1 = this.z1q_1 + 1 | 0;
            this.pb_1 = 4;
            var tmp_0 = this.b1r_1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this.y1q_1, this.y1q_1.f1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.pb_1 = 1;
            continue $sm;
          case 5:
            return this.y1q_1.f1r_1;
          case 6:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 6) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.d1r_1 = interceptors;
    this.e1r_1 = coroutineContext;
    this.f1r_1 = subject;
    this.g1r_1 = 0;
  }
  protoOf(DebugPipelineContext).wj = function () {
    return this.e1r_1;
  };
  protoOf(DebugPipelineContext).i1r = function () {
    return this.f1r_1;
  };
  protoOf(DebugPipelineContext).h1r = function () {
    this.g1r_1 = -1;
  };
  protoOf(DebugPipelineContext).j1r = function (subject, $completion) {
    this.f1r_1 = subject;
    return this.k1r($completion);
  };
  protoOf(DebugPipelineContext).k1r = function ($completion) {
    var index = this.g1r_1;
    if (index < 0)
      return this.f1r_1;
    if (index >= this.d1r_1.n()) {
      this.h1r();
      return this.f1r_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).l1r = function (initial, $completion) {
    this.g1r_1 = 0;
    this.f1r_1 = initial;
    return this.k1r($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_2().m1r_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_2().m1r_1.c1()) {
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copyInterceptors($this) {
    $this.p1r_1 = $this.r1r();
    $this.q1r_1 = false;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m1r_1 = ArrayList_init_$Create$_0();
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_2();
    this.n1r_1 = phase;
    this.o1r_1 = relation;
    this.p1r_1 = interceptors;
    this.q1r_1 = true;
  }
  protoOf(PhaseContent).v18 = function () {
    return this.p1r_1.c1();
  };
  protoOf(PhaseContent).n = function () {
    return this.p1r_1.n();
  };
  protoOf(PhaseContent).s1r = function (interceptor) {
    if (this.q1r_1) {
      copyInterceptors(this);
    }
    this.p1r_1.r(interceptor);
  };
  protoOf(PhaseContent).t1r = function (destination) {
    var interceptors = this.p1r_1;
    if (destination instanceof ArrayList) {
      destination.e3(destination.n() + interceptors.n() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.n();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.r(interceptors.g1(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).u1r = function () {
    this.q1r_1 = true;
    return this.p1r_1;
  };
  protoOf(PhaseContent).r1r = function () {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    this_0.y(this.p1r_1);
    return this_0;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.n1r_1.v1r_1 + '`, ' + this.n() + ' handlers';
  };
  function _set_interceptors__wod97b($this, value) {
    $this.a1s_1.kotlinx$atomicfu$value = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.a1s_1.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.d1s());
  }
  function findPhase($this, phase) {
    var phasesList = $this.y1r_1;
    var inductionVariable = 0;
    var last = phasesList.n();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.g1(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.o(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.n1r_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.y1r_1;
    var inductionVariable = 0;
    var last = phasesList.n();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.g1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.n1r_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.y1r_1;
    var inductionVariable = 0;
    var last = phasesList.n();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.g1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.n1r_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.z1r_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.y1r_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.g1(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.v18())
            continue $l$loop_0;
          var interceptors = phaseContent.u1r();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.g1(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.t1r(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.b1s_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.b1s_1 = false;
    $this.c1s_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.b1s_1 = false;
    $this.c1s_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.u1r());
    $this.b1s_1 = false;
    $this.c1s_1 = phaseContent.n1r_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.y1r_1.c1() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.b1s_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.c1s_1, phase)) {
      currentInterceptors.r(block);
      return true;
    }
    if (equals(phase, last($this.y1r_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.y1r_1)) {
      ensureNotNull(findPhase($this, phase)).s1r(block);
      currentInterceptors.r(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.w1r_1 = AttributesJsFn(true);
    this.x1r_1 = false;
    this.y1r_1 = mutableListOf(phases.slice());
    this.z1r_1 = 0;
    this.a1s_1 = atomic$ref$1(null);
    this.b1s_1 = false;
    this.c1s_1 = null;
  }
  protoOf(Pipeline).d1s = function () {
    return this.x1r_1;
  };
  protoOf(Pipeline).e1s = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.s6();
    return createContext(this, context, subject, tmp$ret$0).l1r(subject, $completion);
  };
  protoOf(Pipeline).g1s = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.y1r_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.y1r_1.g1(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o1r_1;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.h1s_1;
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.y1r_1.v1(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).i1s = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.y1r_1.v1(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).j1s = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block !== 'function')
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.z1r_1 = this.z1r_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.s1r(block);
    this.z1r_1 = this.z1r_1 + 1 | 0;
    resetInterceptorsList(this);
    this.k1s();
  };
  protoOf(Pipeline).k1s = function () {
  };
  function PipelineContext(context) {
    this.f1s_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() ? true : debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.v1r_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.v1r_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.h1s_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.l1s_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _ = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.s1s_1;
      if (currentIndex === $this.n1s_1.n()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.p1s_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.s1s_1 = currentIndex + 1 | 0;
      var next = $this.n1s_1.g1(currentIndex);
      try {
        var result = next($this, $this.p1s_1, $this.o1s_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.r1s_1 < 0) {
      // Inline function 'kotlin.error' call
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var next = ensureNotNull($this.q1s_1[$this.r1s_1]);
    var tmp1 = $this.r1s_1;
    $this.r1s_1 = tmp1 - 1 | 0;
    $this.q1s_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.t6(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.t6(tmp$ret$0);
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.r1s_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp1 = $this.r1s_1;
    $this.r1s_1 = tmp1 - 1 | 0;
    $this.q1s_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    $this.r1s_1 = $this.r1s_1 + 1 | 0;
    $this.q1s_1[$this.r1s_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.u1s_1 = this$0;
    this.t1s_1 = IntCompanionObject_instance.MIN_VALUE;
  }
  protoOf(SuspendFunctionGun$continuation$1).s6 = function () {
    var tmp0_safe_receiver = this.u1s_1.q1s_1[this.u1s_1.r1s_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s6();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var message = 'Not started';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SuspendFunctionGun$continuation$1).me = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      resumeRootWith(this.u1s_1, tmp$ret$0);
      return Unit_instance;
    }
    loop(this.u1s_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).t6 = function (result) {
    return this.me(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.n1s_1 = blocks;
    var tmp = this;
    tmp.o1s_1 = new SuspendFunctionGun$continuation$1(this);
    this.p1s_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.n1s_1.n();
    tmp_0.q1s_1 = fillArrayVal(Array(size), null);
    this.r1s_1 = -1;
    this.s1s_1 = 0;
  }
  protoOf(SuspendFunctionGun).wj = function () {
    return this.o1s_1.s6();
  };
  protoOf(SuspendFunctionGun).i1r = function () {
    return this.p1s_1;
  };
  protoOf(SuspendFunctionGun).k1r = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      if (this.s1s_1 === this.n1s_1.n()) {
        tmp$ret$0 = this.p1s_1;
        break $l$block_0;
      }
      addContinuation(this, intercepted($completion));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.p1s_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).j1r = function (subject, $completion) {
    this.p1s_1 = subject;
    return this.k1r($completion);
  };
  protoOf(SuspendFunctionGun).l1r = function (initial, $completion) {
    this.s1s_1 = 0;
    if (this.s1s_1 === this.n1s_1.n())
      return initial;
    this.p1s_1 = initial;
    if (this.r1s_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.k1r($completion);
  };
  function TypeInfo(type, reifiedType, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.v1s_1 = type;
    this.w1s_1 = reifiedType;
    this.x1s_1 = kotlinType;
  }
  protoOf(TypeInfo).toString = function () {
    return 'TypeInfo(type=' + this.v1s_1 + ', reifiedType=' + this.w1s_1 + ', kotlinType=' + this.x1s_1 + ')';
  };
  protoOf(TypeInfo).hashCode = function () {
    var result = this.v1s_1.hashCode();
    result = imul(result, 31) + hashCode(this.w1s_1) | 0;
    result = imul(result, 31) + (this.x1s_1 == null ? 0 : hashCode(this.x1s_1)) | 0;
    return result;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.v1s_1.equals(tmp0_other_with_cast.v1s_1))
      return false;
    if (!equals(this.w1s_1, tmp0_other_with_cast.w1s_1))
      return false;
    if (!equals(this.x1s_1, tmp0_other_with_cast.x1s_1))
      return false;
    return true;
  };
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.y1s_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).n1n = function (key) {
    var tmp = this.y1s_1.x2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).o1n = function (key) {
    return this.y1s_1.u2(key);
  };
  protoOf(AttributesJs).p1n = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.y1s_1.n2(key, value);
  };
  protoOf(AttributesJs).q1n = function (key) {
    this.y1s_1.r2(key);
  };
  protoOf(AttributesJs).r1n = function (key, block) {
    var tmp0_safe_receiver = this.y1s_1.x2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.y1s_1.n2(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).s1n = function () {
    return toList(this.y1s_1.k2());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get_platform(_this__u8e3s4) {
    var tmp = typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
    var hasNodeApi = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    return hasNodeApi ? Platform_Node_getInstance() : Platform_Browser_getInstance();
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function get_isNewMemoryModel(_this__u8e3s4) {
    return true;
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp1_safe_receiver = timestamp == null ? null : timestamp.y6();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp = new Date(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_instance_1.j1q((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_2.j1q(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().b1p_1) {
      case true:
        // Inline function 'kotlin.Result.getOrNull' call

        // Inline function 'kotlin.runCatching' call

        var tmp_1;
        try {
          // Inline function 'kotlin.Companion.success' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var tmp_2 = process.env.KTOR_LOG_LEVEL;
          var value = (tmp_2 == null ? true : typeof tmp_2 === 'string') ? tmp_2 : THROW_CCE();
          tmp_1 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_1 = tmp_3;
        }

        var this_0 = tmp_1;
        var tmp_4;
        if (_Result___get_isFailure__impl__jpiriv(this_0)) {
          tmp_4 = null;
        } else {
          var tmp_5 = _Result___get_value__impl__bjfvqg(this_0);
          tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        }

        var tmp1_safe_receiver = tmp_4;
        var tmp_6;
        if (tmp1_safe_receiver == null) {
          tmp_6 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var tmp$ret$6;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var indexedObject = values_1();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var element = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>.<anonymous>' call
              if (element.k9_1 === tmp1_safe_receiver) {
                tmp$ret$6 = element;
                break $l$block;
              }
            }
            tmp$ret$6 = null;
          }
          tmp_6 = tmp$ret$6;
        }

        var tmp2_elvis_lhs = tmp_6;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.z1s_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).a1t = function (message) {
    if (this.z1s_1.m9(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_1() {
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_instance;
    LogLevel_entriesInitialized = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.c7(_this__u8e3s4);
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
  }
  var JsType_instance;
  function JsType_getInstance() {
    return JsType_instance;
  }
  //region block: post-declaration
  protoOf(AttributesJs).m1n = get;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  DISABLE_SFG = false;
  JsType_instance = new JsType();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = JsType_instance;
  _.$_$.c = PlatformUtils_getInstance;
  _.$_$.d = CopyOnWriteHashMap;
  _.$_$.e = GMTDate_0;
  _.$_$.f = KtorSimpleLogger;
  _.$_$.g = PipelineContext;
  _.$_$.h = PipelinePhase;
  _.$_$.i = Pipeline;
  _.$_$.j = instanceOf;
  _.$_$.k = typeInfoImpl;
  _.$_$.l = AttributeKey;
  _.$_$.m = AttributesJsFn;
  _.$_$.n = SilentSupervisor;
  _.$_$.o = forEach;
  _.$_$.p = get_0;
  _.$_$.q = StringValuesBuilderImpl;
  _.$_$.r = StringValuesImpl;
  _.$_$.s = StringValues;
  _.$_$.t = appendAll;
  _.$_$.u = isLowerCase;
  _.$_$.v = get_platform;
  _.$_$.w = putAll;
  _.$_$.x = toCharArray;
  _.$_$.y = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
