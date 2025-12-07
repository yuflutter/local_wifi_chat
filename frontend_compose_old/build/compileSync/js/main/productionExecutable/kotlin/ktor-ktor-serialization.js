(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-serialization'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-serialization'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-serialization'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-serialization'.");
    }
    root['ktor-ktor-serialization'] = factory(typeof this['ktor-ktor-serialization'] === 'undefined' ? {} : this['ktor-ktor-serialization'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-io'], this['ktor-ktor-http'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Exception = kotlin_kotlin.$_$.fe;
  var VOID = kotlin_kotlin.$_$.g;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.o1;
  var captureStack = kotlin_kotlin.$_$.r9;
  var protoOf = kotlin_kotlin.$_$.gb;
  var classMeta = kotlin_kotlin.$_$.x9;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.f;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.g1;
  var Companion_instance = kotlin_io_ktor_ktor_io.$_$.e;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var isInterface = kotlin_kotlin.$_$.ta;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ContentConvertException, 'ContentConvertException', classMeta, Exception);
  setMetadataFor(JsonConvertException, 'JsonConvertException', classMeta, ContentConvertException);
  function register$default(contentType, converter, configuration, $super) {
    var tmp;
    if (configuration === VOID) {
      tmp = Configuration$register$lambda;
    } else {
      tmp = configuration;
    }
    configuration = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.s25(contentType, converter, configuration);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.s25.call(this, contentType, converter, configuration);
    }
    return tmp_0;
  }
  setMetadataFor(Configuration, 'Configuration', interfaceMeta);
  function serialize(contentType, charset, typeInfo, value, $completion) {
    return this.v25(contentType, charset, typeInfo, value, $completion);
  }
  function serializeNullable(contentType, charset, typeInfo, value, $completion) {
    return this.u25(contentType, charset, typeInfo, ensureNotNull(value), $completion);
  }
  setMetadataFor(ContentConverter, 'ContentConverter', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$o$collect$slambda, 'deserialize$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$slambda, 'deserialize$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($deserializeCOROUTINE$0, '$deserializeCOROUTINE$0', classMeta, CoroutineImpl);
  //endregion
  function ContentConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  function JsonConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  function Configuration$register$lambda($this$null) {
    return Unit_instance;
  }
  function Configuration() {
  }
  function ContentConverter() {
  }
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().s1j_1 : defaultCharset;
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().s1j_1 : defaultCharset;
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.g1o(HttpHeaders_getInstance().b1v_1)).u();
    while (tmp0_iterator.v()) {
      var charset = tmp0_iterator.x().de();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_instance.v1m(charset))
        return Companion_instance.u1m(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.j26_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).d11 = function (value, $completion) {
    return this.j26_1(value, $completion);
  };
  function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    this.s26_1 = $$this$unsafeFlow;
    this.t26_1 = $charset;
    this.u26_1 = $typeInfo;
    this.v26_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$o$collect$slambda).b27 = function (value, $completion) {
    var tmp = this.c27(value, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(deserialize$o$collect$slambda).nc = function (p1, $completion) {
    return this.b27((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$o$collect$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            var tmp_0 = this;
            tmp_0.x26_1 = this.s26_1;
            var tmp_1 = this;
            tmp_1.y26_1 = this.w26_1;
            var tmp_2 = this;
            tmp_2.z26_1 = this.y26_1;
            this.pb_1 = 1;
            suspendResult = this.z26_1.w25(this.t26_1, this.u26_1, this.v26_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a27_1 = suspendResult;
            this.pb_1 = 2;
            suspendResult = this.x26_1.d11(this.a27_1, this);
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
  protoOf(deserialize$o$collect$slambda).c27 = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.s26_1, this.t26_1, this.u26_1, this.v26_1, completion);
    i.w26_1 = value;
    return i;
  };
  function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $completion) {
      return i.b27(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l27_1 = _this__u8e3s4;
    this.m27_1 = collector;
  }
  protoOf($collectCOROUTINE$1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            var tmp_0 = this;
            tmp_0.n27_1 = this.m27_1;
            this.pb_1 = 1;
            var tmp_1 = deserialize$o$collect$slambda_0(this.n27_1, this.l27_1.p27_1, this.l27_1.q27_1, this.l27_1.r27_1, null);
            suspendResult = this.l27_1.o27_1.e11(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function _no_name_provided__qut3iv($this, $charset, $typeInfo, $body) {
    this.o27_1 = $this;
    this.p27_1 = $charset;
    this.q27_1 = $typeInfo;
    this.r27_1 = $body;
  }
  protoOf(_no_name_provided__qut3iv).s27 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(_no_name_provided__qut3iv).e11 = function (collector, $completion) {
    return this.s27(collector, $completion);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.b28_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$slambda).d28 = function (it, $completion) {
    var tmp = this.e28(it, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(deserialize$slambda).nc = function (p1, $completion) {
    return this.d28((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        if (tmp === 0) {
          this.qb_1 = 1;
          return !(this.c28_1 == null) ? true : this.b28_1.w19();
        } else if (tmp === 1) {
          throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(deserialize$slambda).e28 = function (it, completion) {
    var i = new deserialize$slambda(this.b28_1, completion);
    i.c28_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $completion) {
      return i.d28(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f26_1 = _this__u8e3s4;
    this.g26_1 = body;
    this.h26_1 = typeInfo;
    this.i26_1 = charset;
  }
  protoOf($deserializeCOROUTINE$0).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            var this_0 = asFlow(this.f26_1);
            var tmp_0 = new _no_name_provided__qut3iv(this_0, this.i26_1, this.h26_1, this.g26_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.g26_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1;
            if (!(result == null)) {
              tmp_1 = result;
            } else {
              if (!this.g26_1.w19()) {
                tmp_1 = this.g26_1;
              } else {
                var tmp0_safe_receiver = this.h26_1.x1s_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r7()) === true) {
                  tmp_1 = NullBody_instance;
                } else {
                  throw new ContentConvertException('No suitable converter found for ' + this.h26_1);
                }
              }
            }

            return tmp_1;
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = Configuration;
  _.$_$.d = ContentConverter;
  _.$_$.e = JsonConvertException;
  _.$_$.f = suitableCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization.js.map
