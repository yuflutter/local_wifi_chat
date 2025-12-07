(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-utils.js', './ktor-ktor-client-core.js', './ktor-ktor-http.js', './ktor-ktor-serialization.js', './ktor-ktor-io.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-serialization.js'), require('./ktor-ktor-io.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-serialization' was not found. Please, check whether 'ktor-ktor-serialization' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    root['ktor-ktor-client-content-negotiation'] = factory(typeof this['ktor-ktor-client-content-negotiation'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-utils'], this['ktor-ktor-client-core'], this['ktor-ktor-http'], this['ktor-ktor-serialization'], this['ktor-ktor-io']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.gb;
  var classMeta = kotlin_kotlin.$_$.x9;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var VOID = kotlin_kotlin.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.i;
  var contentType = kotlin_io_ktor_ktor_http.$_$.d1;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.f;
  var plus = kotlin_kotlin.$_$.v7;
  var toMutableSet = kotlin_kotlin.$_$.q8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var toString = kotlin_kotlin.$_$.lb;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Collection = kotlin_kotlin.$_$.m5;
  var isInterface = kotlin_kotlin.$_$.ta;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.o;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.b1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Unit = kotlin_kotlin.$_$.ye;
  var charset = kotlin_io_ktor_ktor_http.$_$.z;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.f;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.aa;
  var joinToString = kotlin_kotlin.$_$.h7;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.d1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.fe;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.r9;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.v4;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.r;
  var getKClass = kotlin_kotlin.$_$.e;
  var setOf = kotlin_kotlin.$_$.e8;
  var endsWith = kotlin_kotlin.$_$.kc;
  var startsWith = kotlin_kotlin.$_$.cd;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConverterRegistration, 'ConverterRegistration', classMeta);
  setMetadataFor(ContentNegotiation$Config$defaultMatcher$1, VOID, classMeta);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda_1, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Config, 'Config', classMeta, VOID, [Configuration], Config);
  setMetadataFor(Plugin, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor($convertRequestCOROUTINE$0, '$convertRequestCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($convertResponseCOROUTINE$1, '$convertResponseCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ContentNegotiation, 'ContentNegotiation', classMeta, VOID, VOID, VOID, VOID, VOID, [2, 5]);
  setMetadataFor(ContentConverterException, 'ContentConverterException', classMeta, Exception);
  setMetadataFor(JsonContentTypeMatcher, 'JsonContentTypeMatcher', objectMeta);
  //endregion
  function get_LOGGER() {
    _init_properties_ContentNegotiation_kt__o183go();
    return LOGGER;
  }
  var LOGGER;
  function get_DefaultCommonIgnoredTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.z5i_1 = converter;
    this.a5j_1 = contentTypeToSend;
    this.b5j_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.c5j_1 = $pattern;
  }
  protoOf(ContentNegotiation$Config$defaultMatcher$1).d5j = function (contentType) {
    return contentType.v1u(this.c5j_1);
  };
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.m5j_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda).a4m = function ($this$intercept, it, $completion) {
    var tmp = this.b4m($this$intercept, it, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).fh = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.a4m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            this.pb_1 = 1;
            suspendResult = this.m5j_1.t5j(this.n5j_1.f1s_1, this.n5j_1.i1r(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p5j_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.p5j_1 == null) {
              return Unit_instance;
            } else {
              tmp_1 = this.p5j_1;
            }

            tmp_0.q5j_1 = tmp_1;
            this.pb_1 = 2;
            suspendResult = this.n5j_1.j1r(this.q5j_1, this);
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
  protoOf(ContentNegotiation$Plugin$install$slambda).b4m = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.m5j_1, completion);
    i.n5j_1 = $this$intercept;
    i.o5j_1 = it;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.a4m($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.c5k_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda_1).u4m = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.v4m($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).fh = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.u4m(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            this.f5k_1 = this.e5k_1.de();
            this.g5k_1 = this.e5k_1.ee();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.d5k_1.f1s_1.h4m());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              this.d5k_1;
              get_LOGGER().a1t('Response doesn\'t have "Content-Type" header, skipping ContentNegotiation plugin');
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.h5k_1 = tmp_1;
            this.i5k_1 = suitableCharset(this.d5k_1.f1s_1.q4p().d1z());
            this.pb_1 = 1;
            suspendResult = this.c5k_1.m5k(this.d5k_1.f1s_1.q4p().s4p(), this.f5k_1, this.g5k_1, this.h5k_1, this.i5k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j5k_1 = suspendResult;
            var tmp_2 = this;
            var tmp_3;
            if (this.j5k_1 == null) {
              return Unit_instance;
            } else {
              tmp_3 = this.j5k_1;
            }

            tmp_2.k5k_1 = tmp_3;
            this.l5k_1 = new HttpResponseContainer(this.f5k_1, this.k5k_1);
            this.pb_1 = 2;
            suspendResult = this.d5k_1.j1r(this.l5k_1, this);
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
  protoOf(ContentNegotiation$Plugin$install$slambda_1).v4m = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.c5k_1, completion);
    i.d5k_1 = $this$intercept;
    i.e5k_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.u4m($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.n5k_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o5k_1 = ArrayList_init_$Create$();
  }
  protoOf(Config).s25 = function (contentType, converter, configuration) {
    var matcher = contentType.equals(Application_getInstance().o1t_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
    this.p5k(contentType, converter, matcher, configuration);
  };
  protoOf(Config).p5k = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.o5k_1.r(registration);
  };
  function Plugin() {
    Plugin_instance = this;
    this.q5k_1 = new AttributeKey('ContentNegotiation');
  }
  protoOf(Plugin).p2 = function () {
    return this.q5k_1;
  };
  protoOf(Plugin).r5k = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    return new ContentNegotiation(config.o5k_1, config.n5k_1);
  };
  protoOf(Plugin).l4o = function (block) {
    return this.r5k(block);
  };
  protoOf(Plugin).s5k = function (plugin, scope) {
    var tmp = Phases_getInstance().f4u_1;
    scope.g4l_1.j1s(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().g4o_1;
    scope.h4l_1.j1s(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  protoOf(Plugin).m4o = function (plugin, scope) {
    return this.s5k(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda(it) {
    return toString(it.z5i_1);
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b5l_1 = _this__u8e3s4;
    this.c5l_1 = request;
    this.d5l_1 = body;
  }
  protoOf($convertRequestCOROUTINE$0).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 7;
            var tmp0_iterator = this.b5l_1.r5j_1.u();
            while (tmp0_iterator.v()) {
              var element = tmp0_iterator.x();
              get_LOGGER().a1t('Adding Accept=' + element.a5j_1.r1u_1 + ' header for ' + this.c5l_1.g4n_1);
              accept(this.c5l_1, element.a5j_1);
            }

            var tmp_0;
            var tmp_1 = this.d5l_1;
            if (tmp_1 instanceof OutgoingContent) {
              tmp_0 = true;
            } else {
              var tmp$ret$0;
              l$ret$1: do {
                var this_0 = this.b5l_1.s5j_1;
                var tmp_2;
                if (isInterface(this_0, Collection)) {
                  tmp_2 = this_0.c1();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = this_0.u();
                while (tmp0_iterator_0.v()) {
                  var element_0 = tmp0_iterator_0.x();
                  if (element_0.c7(this.d5l_1)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            }

            if (tmp_0) {
              get_LOGGER().a1t('Body type ' + getKClassFromExpression(this.d5l_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.c5l_1.g4n_1 + '.'));
              return null;
            }

            var tmp_3 = this;
            var tmp0_elvis_lhs = contentType_0(this.c5l_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              this.b5l_1;
              get_LOGGER().a1t("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.c5l_1.g4n_1 + '.');
              return null;
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.e5l_1 = tmp_4;
            var tmp_5 = this.d5l_1;
            if (tmp_5 instanceof Unit) {
              get_LOGGER().a1t('Sending empty body for ' + this.c5l_1.g4n_1);
              this.c5l_1.i4n_1.t1p(HttpHeaders_getInstance().s1v_1);
              return EmptyContent_getInstance();
            }

            var tmp_6 = this;
            var this_1 = this.b5l_1.r5j_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator_1 = this_1.u();
            while (tmp0_iterator_1.v()) {
              var element_1 = tmp0_iterator_1.x();
              if (element_1.b5j_1.d5j(this.e5l_1)) {
                destination.r(element_1);
              }
            }

            var tmp_7;
            if (!destination.c1()) {
              tmp_7 = destination;
            } else {
              tmp_7 = null;
            }

            var tmp1_elvis_lhs = tmp_7;
            var tmp_8;
            if (tmp1_elvis_lhs == null) {
              this.b5l_1;
              get_LOGGER().a1t('None of the registered converters match request Content-Type=' + this.e5l_1 + '. ' + ('Skipping ContentNegotiation for ' + this.c5l_1.g4n_1 + '.'));
              return null;
            } else {
              tmp_8 = tmp1_elvis_lhs;
            }

            tmp_6.f5l_1 = tmp_8;
            if (this.c5l_1.k59() == null) {
              get_LOGGER().a1t('Request has unknown body type. Skipping ContentNegotiation for ' + this.c5l_1.g4n_1 + '.');
              return null;
            }

            this.c5l_1.i4n_1.t1p(HttpHeaders_getInstance().s1v_1);
            this.pb_1 = 1;
            continue $sm;
          case 1:
            var tmp_9 = this;
            tmp_9.h5l_1 = this.f5l_1;
            this.i5l_1 = this.h5l_1.u();
            this.pb_1 = 2;
            continue $sm;
          case 2:
            if (!this.i5l_1.v()) {
              this.pb_1 = 5;
              continue $sm;
            }

            this.j5l_1 = this.i5l_1.x();
            var tmp_10 = this;
            tmp_10.k5l_1 = this.j5l_1;
            this.pb_1 = 3;
            var tmp0_elvis_lhs_0 = charset(this.e5l_1);
            var tmp_11 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().s1j_1 : tmp0_elvis_lhs_0;
            var tmp_12 = ensureNotNull(this.c5l_1.k59());
            var this_2 = this.d5l_1;
            var tmp_13;
            if (!equals(this_2, NullBody_instance)) {
              tmp_13 = this_2;
            } else {
              tmp_13 = null;
            }

            suspendResult = this.k5l_1.z5i_1.v25(this.e5l_1, tmp_11, tmp_12, tmp_13, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().a1t('Converted request body using ' + this.k5l_1.z5i_1 + ' for ' + this.c5l_1.g4n_1);
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.g5l_1 = result_0;
              this.pb_1 = 6;
              continue $sm;
            } else {
              this.pb_1 = 4;
              continue $sm;
            }

          case 4:
            this.pb_1 = 2;
            continue $sm;
          case 5:
            this.g5l_1 = null;
            if (false) {
              this.pb_1 = 1;
              continue $sm;
            }

            this.pb_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.g5l_1;
            var tmp_14;
            if (tmp2_elvis_lhs == null) {
              var tmp_15 = "Can't convert " + toString(this.d5l_1) + ' with contentType ' + this.e5l_1 + ' using converters ';
              throw new ContentConverterException(tmp_15 + joinToString(this.f5l_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$convertRequest$lambda));
            } else {
              tmp_14 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_14;
            return serializedContent;
          case 7:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 7) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  function $convertResponseCOROUTINE$1(_this__u8e3s4, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t5l_1 = _this__u8e3s4;
    this.u5l_1 = requestUrl;
    this.v5l_1 = info;
    this.w5l_1 = body;
    this.x5l_1 = responseContentType;
    this.y5l_1 = charset;
  }
  protoOf($convertResponseCOROUTINE$1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            var tmp_0 = this.w5l_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().a1t('Response body is already transformed. Skipping ContentNegotiation for ' + this.u5l_1 + '.');
              return null;
            }

            if (this.t5l_1.s5j_1.a1(this.v5l_1.v1s_1)) {
              get_LOGGER().a1t('Response body type ' + this.v5l_1.v1s_1 + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.u5l_1 + '.'));
              return null;
            }

            var tmp_1 = this;
            var this_0 = this.t5l_1.r5j_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.u();
            while (tmp0_iterator.v()) {
              var element = tmp0_iterator.x();
              if (element.b5j_1.d5j(this.x5l_1)) {
                destination.r(element);
              }
            }

            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
            var tmp0_iterator_0 = destination.u();
            while (tmp0_iterator_0.v()) {
              var item = tmp0_iterator_0.x();
              destination_0.r(item.z5i_1);
            }

            var tmp_2;
            if (!destination_0.c1()) {
              tmp_2 = destination_0;
            } else {
              tmp_2 = null;
            }

            var tmp0_elvis_lhs = tmp_2;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              this.t5l_1;
              get_LOGGER().a1t('None of the registered converters match response with Content-Type=' + this.x5l_1 + '. ' + ('Skipping ContentNegotiation for ' + this.u5l_1 + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.z5l_1 = tmp_3;
            this.pb_1 = 1;
            suspendResult = deserialize(this.z5l_1, this.w5l_1, this.v5l_1, this.y5l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().a1t('Response body was converted to ' + getKClassFromExpression(result) + ' for ' + this.u5l_1 + '.');
            }

            return result;
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
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.r5j_1 = registrations;
    this.s5j_1 = ignoredTypes;
  }
  protoOf(ContentNegotiation).t5j = function (request, body, $completion) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ContentNegotiation).m5k = function (requestUrl, info, body, responseContentType, charset, $completion) {
    var tmp = new $convertResponseCOROUTINE$1(this, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().g8(), PrimitiveClasses_getInstance().c8(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
  }
  protoOf(JsonContentTypeMatcher).d5j = function (contentType) {
    if (contentType.v1u(Application_getInstance().o1t_1)) {
      return true;
    }
    var value = contentType.u1u().toString();
    return startsWith(value, 'application/') ? endsWith(value, '+json') : false;
  };
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
    if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
    }
  }
  //region block: post-declaration
  protoOf(Config).t25 = register$default;
  //endregion
  //region block: init
  JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation.js.map
