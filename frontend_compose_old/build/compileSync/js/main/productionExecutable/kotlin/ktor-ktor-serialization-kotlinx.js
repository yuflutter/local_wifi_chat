(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-http.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-io.js', './ktor-ktor-serialization.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-http.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-serialization.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-serialization' was not found. Please, check whether 'ktor-ktor-serialization' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    root['ktor-ktor-serialization-kotlinx'] = factory(typeof this['ktor-ktor-serialization-kotlinx'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['ktor-ktor-http'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-io'], this['ktor-ktor-serialization']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.gb;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var VOID = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var isInterface = kotlin_kotlin.$_$.ta;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var classMeta = kotlin_kotlin.$_$.x9;
  var toString = kotlin_kotlin.$_$.lb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.i;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.k1;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.p;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.o;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var discard = kotlin_io_ktor_ktor_io.$_$.t;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.u;
  var readText = kotlin_io_ktor_ktor_io.$_$.w;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.d;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var Map = kotlin_kotlin.$_$.t5;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Set = kotlin_kotlin.$_$.z5;
  var firstOrNull_0 = kotlin_kotlin.$_$.b7;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.u4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var isArray = kotlin_kotlin.$_$.la;
  var List = kotlin_kotlin.$_$.r5;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var filterNotNull = kotlin_kotlin.$_$.y6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var singleOrNull = kotlin_kotlin.$_$.f8;
  var Collection = kotlin_kotlin.$_$.m5;
  var emptyList = kotlin_kotlin.$_$.t6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KotlinxSerializationExtension, 'KotlinxSerializationExtension', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(KotlinxSerializationConverter$serializeNullable$o$collect$slambda, 'KotlinxSerializationConverter$serializeNullable$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$2, '$collectCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(KotlinxSerializationConverter$deserialize$o$collect$slambda, 'KotlinxSerializationConverter$deserialize$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$3, '$collectCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(KotlinxSerializationConverter$serializeNullable$slambda, 'KotlinxSerializationConverter$serializeNullable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(KotlinxSerializationConverter$deserialize$slambda, 'KotlinxSerializationConverter$deserialize$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($serializeNullableCOROUTINE$0, '$serializeNullableCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($deserializeCOROUTINE$1, '$deserializeCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(KotlinxSerializationConverter, 'KotlinxSerializationConverter', classMeta, VOID, [ContentConverter], VOID, VOID, VOID, [4, 3]);
  //endregion
  function KotlinxSerializationExtension() {
  }
  function extensions(format) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = get_providers();
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'io.ktor.serialization.kotlinx.extensions.<anonymous>' call
      var tmp0_safe_receiver = element.f2r(format);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.r(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function serialization(_this__u8e3s4, contentType, format) {
    _this__u8e3s4.t25(contentType, new KotlinxSerializationConverter(format));
  }
  function KotlinxSerializationConverter$serializeNullable$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    this.o2r_1 = $$this$unsafeFlow;
    this.p2r_1 = $contentType;
    this.q2r_1 = $charset;
    this.r2r_1 = $typeInfo;
    this.s2r_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).y2r = function (value, $completion) {
    var tmp = this.z2r(value, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).nc = function (p1, $completion) {
    return this.y2r((!(p1 == null) ? isInterface(p1, KotlinxSerializationExtension) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            var tmp_0 = this;
            tmp_0.u2r_1 = this.o2r_1;
            var tmp_1 = this;
            tmp_1.v2r_1 = this.t2r_1;
            var tmp_2 = this;
            tmp_2.w2r_1 = this.v2r_1;
            this.pb_1 = 1;
            suspendResult = this.w2r_1.e2r(this.p2r_1, this.q2r_1, this.r2r_1, this.s2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x2r_1 = suspendResult;
            this.pb_1 = 2;
            suspendResult = this.u2r_1.d11(this.x2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 3) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).z2r = function (value, completion) {
    var i = new KotlinxSerializationConverter$serializeNullable$o$collect$slambda(this.o2r_1, this.p2r_1, this.q2r_1, this.r2r_1, this.s2r_1, completion);
    i.t2r_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$serializeNullable$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    var i = new KotlinxSerializationConverter$serializeNullable$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
    var l = function (value, $completion) {
      return i.y2r(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i2s_1 = _this__u8e3s4;
    this.j2s_1 = collector;
  }
  protoOf($collectCOROUTINE$2).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            var tmp_0 = this;
            tmp_0.k2s_1 = this.j2s_1;
            this.pb_1 = 1;
            var tmp_1 = KotlinxSerializationConverter$serializeNullable$o$collect$slambda_0(this.k2s_1, this.i2s_1.m2s_1, this.i2s_1.n2s_1, this.i2s_1.o2s_1, this.i2s_1.p2s_1, null);
            suspendResult = this.i2s_1.l2s_1.e11(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    this.y2s_1 = $$this$unsafeFlow;
    this.z2s_1 = $charset;
    this.a2t_1 = $typeInfo;
    this.b2t_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).y2r = function (value, $completion) {
    var tmp = this.z2r(value, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).nc = function (p1, $completion) {
    return this.y2r((!(p1 == null) ? isInterface(p1, KotlinxSerializationExtension) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            var tmp_0 = this;
            tmp_0.d2t_1 = this.y2s_1;
            var tmp_1 = this;
            tmp_1.e2t_1 = this.c2t_1;
            var tmp_2 = this;
            tmp_2.f2t_1 = this.e2t_1;
            this.pb_1 = 1;
            suspendResult = this.f2t_1.w25(this.z2s_1, this.a2t_1, this.b2t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g2t_1 = suspendResult;
            this.pb_1 = 2;
            suspendResult = this.d2t_1.d11(this.g2t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 3) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).z2r = function (value, completion) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.y2s_1, this.z2s_1, this.a2t_1, this.b2t_1, completion);
    i.c2t_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
    var l = function (value, $completion) {
      return i.y2r(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p2t_1 = _this__u8e3s4;
    this.q2t_1 = collector;
  }
  protoOf($collectCOROUTINE$3).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            var tmp_0 = this;
            tmp_0.r2t_1 = this.q2t_1;
            this.pb_1 = 1;
            var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.r2t_1, this.p2t_1.t2t_1, this.p2t_1.u2t_1, this.p2t_1.v2t_1, null);
            suspendResult = this.p2t_1.s2t_1.e11(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp;
    if (isInterface(format, StringFormat)) {
      var content = format.y28(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(format, BinaryFormat)) {
        var content_0 = format.b29(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        var message = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.w2t_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).d11 = function (value, $completion) {
    return this.w2t_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.x2t_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).d11 = function (value, $completion) {
    return this.x2t_1(value, $completion);
  };
  function _no_name_provided__qut3iv($this, $contentType, $charset, $typeInfo, $value) {
    this.l2s_1 = $this;
    this.m2s_1 = $contentType;
    this.n2s_1 = $charset;
    this.o2s_1 = $typeInfo;
    this.p2s_1 = $value;
  }
  protoOf(_no_name_provided__qut3iv).y2t = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(_no_name_provided__qut3iv).e11 = function (collector, $completion) {
    return this.y2t(collector, $completion);
  };
  function KotlinxSerializationConverter$serializeNullable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).i2u = function (it, $completion) {
    var tmp = this.j2u(it, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).nc = function (p1, $completion) {
    return this.i2u((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        if (tmp === 0) {
          this.qb_1 = 1;
          return !(this.h2u_1 == null);
        } else if (tmp === 1) {
          throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).j2u = function (it, completion) {
    var i = new KotlinxSerializationConverter$serializeNullable$slambda(completion);
    i.h2u_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$serializeNullable$slambda_0(resultContinuation) {
    var i = new KotlinxSerializationConverter$serializeNullable$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.i2u(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0($this, $charset, $typeInfo, $content) {
    this.s2t_1 = $this;
    this.t2t_1 = $charset;
    this.u2t_1 = $typeInfo;
    this.v2t_1 = $content;
  }
  protoOf(_no_name_provided__qut3iv_0).s27 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(_no_name_provided__qut3iv_0).e11 = function (collector, $completion) {
    return this.s27(collector, $completion);
  };
  function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
    this.s2u_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$slambda).d28 = function (it, $completion) {
    var tmp = this.e28(it, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).nc = function (p1, $completion) {
    return this.d28((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        if (tmp === 0) {
          this.qb_1 = 1;
          return !(this.t2u_1 == null) ? true : this.s2u_1.w19();
        } else if (tmp === 1) {
          throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).e28 = function (it, completion) {
    var i = new KotlinxSerializationConverter$deserialize$slambda(this.s2u_1, completion);
    i.t2u_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
    var l = function (it, $completion) {
      return i.d28(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $serializeNullableCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2v_1 = _this__u8e3s4;
    this.d2v_1 = contentType;
    this.e2v_1 = charset;
    this.f2v_1 = typeInfo;
    this.g2v_1 = value;
  }
  protoOf($serializeNullableCOROUTINE$0).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            var this_0 = asFlow(this.c2v_1.i2v_1);
            var tmp_0 = new _no_name_provided__qut3iv(this_0, this.d2v_1, this.e2v_1, this.f2v_1, this.g2v_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$serializeNullable$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var fromExtension = suspendResult;
            if (!(fromExtension == null))
              return fromExtension;
            var tmp_1;
            try {
              tmp_1 = serializerForTypeInfo(this.c2v_1.h2v_1.a29(), this.f2v_1);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof SerializationException) {
                var cause = $p;
                tmp_2 = guessSerializer(this.g2v_1, this.c2v_1.h2v_1.a29());
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var serializer = tmp_1;
            return serializeContent(this.c2v_1, serializer, this.c2v_1.h2v_1, this.g2v_1, this.d2v_1, this.e2v_1);
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
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2v_1 = _this__u8e3s4;
    this.s2v_1 = charset;
    this.t2v_1 = typeInfo;
    this.u2v_1 = content;
  }
  protoOf($deserializeCOROUTINE$1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 5;
            this.pb_1 = 1;
            var this_0 = asFlow(this.r2v_1.i2v_1);
            var tmp_0 = new _no_name_provided__qut3iv_0(this_0, this.s2v_1, this.t2v_1, this.u2v_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.u2v_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v2v_1 = suspendResult;
            var tmp_1;
            if (!this.r2v_1.i2v_1.c1()) {
              tmp_1 = !(this.v2v_1 == null) ? true : this.u2v_1.w19();
            } else {
              tmp_1 = false;
            }

            if (tmp_1)
              return this.v2v_1;
            this.w2v_1 = serializerForTypeInfo(this.r2v_1.h2v_1.a29(), this.t2v_1);
            this.pb_1 = 2;
            suspendResult = this.u2v_1.b1f(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var contentPacket = suspendResult;
            this.qb_1 = 3;
            var tmp0_subject = this.r2v_1.h2v_1;
            var tmp_2;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_2 = this.r2v_1.h2v_1.z28(this.w2v_1, readText(contentPacket, this.s2v_1));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_2 = this.r2v_1.h2v_1.c29(this.w2v_1, readBytes(contentPacket));
              } else {
                discard(contentPacket);
                var message = 'Unsupported format ' + this.r2v_1.h2v_1;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            return tmp_2;
          case 3:
            this.qb_1 = 5;
            var tmp_3 = this.sb_1;
            if (tmp_3 instanceof Error) {
              var cause = this.sb_1;
              throw new JsonConvertException('Illegal input: ' + cause.message, cause);
            } else {
              throw this.sb_1;
            }

          case 4:
            this.qb_1 = 5;
            return Unit_instance;
          case 5:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 5) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter(format) {
    this.h2v_1 = format;
    this.i2v_1 = extensions(this.h2v_1);
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.h2v_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.h2v_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      var message = 'Only binary and string formats are supported, ' + this.h2v_1 + ' is not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(KotlinxSerializationConverter).x2v = function (contentType, charset, typeInfo, value, $completion) {
    return this.y2v(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).u25 = function (contentType, charset, typeInfo, value, $completion) {
    return this.x2v(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).y2v = function (contentType, charset, typeInfo, value, $completion) {
    var tmp = new $serializeNullableCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(KotlinxSerializationConverter).v25 = function (contentType, charset, typeInfo, value, $completion) {
    return this.y2v(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).w25 = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
    var module_0 = _this__u8e3s4;
    var tmp0_safe_receiver = typeInfo.x1s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.serialization.kotlinx.serializerForTypeInfo.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.q7().c1()) {
        tmp_0 = null;
      } else {
        tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
      }
      tmp = tmp_0;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.f29(typeInfo.v1s_1);
      tmp_1 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_1;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.v1s_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp;
    if (value == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_instance));
    } else {
      if (!(value == null) ? isInterface(value, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(value == null) ? isArray(value) : false) {
          var tmp1_safe_receiver = firstOrNull_0(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
            tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
        } else {
          if (!(value == null) ? isInterface(value, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(value == null) ? isInterface(value, Map) : false) {
              var keySerializer = elementSerializer(value.k2(), module_0);
              var valueSerializer = elementSerializer(value.l2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.f29(getKClassFromExpression(value));
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_1 = tmp;
    return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.x1s_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r7()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    // Inline function 'kotlin.collections.distinctBy' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = filterNotNull(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.u();
    while (tmp0_iterator.v()) {
      var item = tmp0_iterator.x();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      var tmp$ret$0 = guessSerializer(item, module_0);
      destination.r(tmp$ret$0);
    }
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator_0 = destination.u();
    while (tmp0_iterator_0.v()) {
      var e = tmp0_iterator_0.x();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      var key = e.f28().m29();
      if (set.r(key)) {
        list.r(e);
      }
    }
    var serializers = list;
    if (serializers.n() > 1) {
      // Inline function 'kotlin.error' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.u();
      while (tmp0_iterator_1.v()) {
        var item_0 = tmp0_iterator_1.x();
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        var tmp$ret$5 = item_0.f28().m29();
        destination_0.r(tmp$ret$5);
      }
      var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + destination_0);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
    if (selected.f28().i29()) {
      return selected;
    }
    if (!isInterface(selected, KSerializer))
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.c1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.u();
      while (tmp0_iterator_2.v()) {
        var element = tmp0_iterator_2.x();
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        if (element == null) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  function get_providers() {
    return emptyList();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx.js.map
