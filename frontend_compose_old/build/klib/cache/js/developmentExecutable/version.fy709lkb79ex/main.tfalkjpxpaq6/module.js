(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './html-internal-html-core-runtime.js', './compose-multiplatform-core-runtime.js', './Kotlin-DateTime-library-kotlinx-datetime-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json.js', './ktor-ktor-http.js', './ktor-ktor-client-content-negotiation.js', './ktor-ktor-serialization-kotlinx-json.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-core.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-runtime.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-content-negotiation.js'), require('./ktor-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'ktor-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-content-negotiation' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'ktor-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example:local-wifi-chat-frontend'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.example:local-wifi-chat-frontend'.");
    }
    root['com.example:local-wifi-chat-frontend'] = factory(typeof this['com.example:local-wifi-chat-frontend'] === 'undefined' ? {} : this['com.example:local-wifi-chat-frontend'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['html-internal-html-core-runtime'], this['compose-multiplatform-core-runtime'], this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json'], this['ktor-ktor-http'], this['ktor-ktor-client-content-negotiation'], this['ktor-ktor-serialization-kotlinx-json'], this['ktor-ktor-client-core'], this['ktor-ktor-utils'], this['kotlinx-serialization-kotlinx-serialization-core'], this['html-html-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_IAE = kotlin_kotlin.$_$.pg;
  var enumEntries = kotlin_kotlin.$_$.xa;
  var Unit_getInstance = kotlin_kotlin.$_$.t5;
  var Enum = kotlin_kotlin.$_$.eg;
  var protoOf = kotlin_kotlin.$_$.rc;
  var classMeta = kotlin_kotlin.$_$.ib;
  var setMetadataFor = kotlin_kotlin.$_$.sc;
  var objectMeta = kotlin_kotlin.$_$.qc;
  var Long = kotlin_kotlin.$_$.jg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ph;
  var VOID = kotlin_kotlin.$_$.g;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.sa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ca;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.og;
  var interfaceMeta = kotlin_kotlin.$_$.vb;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var KMutableProperty0 = kotlin_kotlin.$_$.id;
  var THROW_ISE = kotlin_kotlin.$_$.qg;
  var getLocalDelegateReference = kotlin_kotlin.$_$.pb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.ec;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var SuspendFunction1 = kotlin_kotlin.$_$.ta;
  var getKClass = kotlin_kotlin.$_$.e;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.s1;
  var System_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var equals = kotlin_kotlin.$_$.lb;
  var KMutableProperty1 = kotlin_kotlin.$_$.jd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.rb;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var println = kotlin_kotlin.$_$.ya;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var append = kotlin_kotlin.$_$.ud;
  var append_0 = kotlin_kotlin.$_$.td;
  var getStringHashCode = kotlin_kotlin.$_$.sb;
  var hashCode = kotlin_kotlin.$_$.tb;
  var extendThrowable = kotlin_kotlin.$_$.mb;
  var captureStack = kotlin_kotlin.$_$.cb;
  var toString = kotlin_kotlin.$_$.wc;
  var stackTraceToString = kotlin_kotlin.$_$.uh;
  var ensureNotNull = kotlin_kotlin.$_$.ih;
  var removeLast = kotlin_kotlin.$_$.c9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var toList = kotlin_kotlin.$_$.p9;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.v;
  var appendPathSegments = kotlin_io_ktor_ktor_http.$_$.y;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.l;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.k1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.f;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.k;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.b;
  var List = kotlin_kotlin.$_$.j6;
  var arrayOf = kotlin_kotlin.$_$.dh;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j5;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.o;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var contentType = kotlin_io_ktor_ktor_http.$_$.f1;
  var header = kotlin_io_ktor_ktor_client_core.$_$.i;
  var Unit = kotlin_kotlin.$_$.ah;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.y7;
  var lastOrNull = kotlin_kotlin.$_$.n8;
  var plus = kotlin_kotlin.$_$.x8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.pc;
  var getBooleanHashCode = kotlin_kotlin.$_$.ob;
  var emptyList = kotlin_kotlin.$_$.r7;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var isBlank = kotlin_kotlin.$_$.he;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var overflow = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var fontWeight = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var textAlign = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var marginBottom = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var marginLeft = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a5;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var flex = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var overflowY = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var marginTop = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var reversed = kotlin_kotlin.$_$.d9;
  var placeholder = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var placeholder_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var rows = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var TextArea$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var StyleSheetBuilderImpl = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var Pre$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var get_vw = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Flavors, 'Flavors', classMeta, Enum);
  setMetadataFor(BuildInfo, 'BuildInfo', objectMeta);
  setMetadataFor(Initializable, 'Initializable', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AppConfig, 'AppConfig', classMeta, VOID, [Initializable], VOID, VOID, VOID, [0]);
  setMetadataFor(DebugAppConfig, 'DebugAppConfig', classMeta, AppConfig, VOID, DebugAppConfig, VOID, VOID, [0]);
  setMetadataFor(ProdAppConfig, 'ProdAppConfig', classMeta, AppConfig, VOID, ProdAppConfig, VOID, VOID, [0]);
  setMetadataFor($initAppCOROUTINE$0, '$initAppCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(InitState, 'InitState', interfaceMeta);
  setMetadataFor(Loading, 'Loading', objectMeta, VOID, [InitState]);
  setMetadataFor(Error_0, 'Error', classMeta, VOID, [InitState]);
  setMetadataFor(Success, 'Success', objectMeta, VOID, [InitState]);
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(App$composable$slambda, 'App$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(UserSession, 'UserSession', classMeta, VOID, [Initializable], UserSession, VOID, VOID, [0]);
  setMetadataFor(StateWithSideEffect, 'StateWithSideEffect', classMeta);
  setMetadataFor(DI$putAndInitAll$slambda$slambda$slambda, 'DI$putAndInitAll$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(DI$putAndInitAll$slambda$slambda, 'DI$putAndInitAll$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(DI$putAndInitAll$slambda, 'DI$putAndInitAll$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(DI, 'DI', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractUserSession, 'AbstractUserSession', classMeta);
  setMetadataFor(MyUserSession, 'MyUserSession', classMeta, AbstractUserSession, VOID, MyUserSession);
  setMetadataFor(LogType, 'LogType', classMeta, Enum);
  setMetadataFor(LogEntry, 'LogEntry', classMeta);
  setMetadataFor(HumanErrorInfo, 'HumanErrorInfo', classMeta, Error);
  setMetadataFor(Logger, 'Logger', classMeta, VOID, [Initializable], VOID, VOID, VOID, [0]);
  setMetadataFor(InMemoryLogger, 'InMemoryLogger', classMeta, Logger, VOID, InMemoryLogger, VOID, VOID, [0]);
  setMetadataFor($checkAndLogResponseCOROUTINE$0, '$checkAndLogResponseCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ApiClient, 'ApiClient', classMeta, VOID, VOID, ApiClient, VOID, VOID, [3]);
  setMetadataFor($fetchMessagesCOROUTINE$2, '$fetchMessagesCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($addNewMessageCOROUTINE$3, '$addNewMessageCOROUTINE$3', classMeta, CoroutineImpl);
  function fetchMessages$default(olderThan, newerThan, limit, $completion, $super) {
    olderThan = olderThan === VOID ? null : olderThan;
    newerThan = newerThan === VOID ? null : newerThan;
    var tmp;
    if (limit === VOID) {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (i instanceof AppConfig) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      tmp = tmp$ret$0.get_fetchBatchSize_7tdtqi_k$();
    } else {
      tmp = limit;
    }
    limit = tmp;
    return $super === VOID ? this.fetchMessages_1oofi7_k$(olderThan, newerThan, limit, $completion) : $super.fetchMessages_1oofi7_k$.call(this, olderThan, newerThan, limit, $completion);
  }
  setMetadataFor(AbstractMessageRepository, 'AbstractMessageRepository', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(MessageRepository, 'MessageRepository', classMeta, VOID, [AbstractMessageRepository], MessageRepository, VOID, VOID, [3, 1]);
  setMetadataFor(ChatModel, 'ChatModel', classMeta, VOID, VOID, ChatModel);
  setMetadataFor(FetchMode, 'FetchMode', classMeta, Enum);
  setMetadataFor($fetchCOROUTINE$4, '$fetchCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MessageListModel, 'MessageListModel', classMeta, VOID, VOID, MessageListModel, VOID, VOID, [0, 1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Message, 'Message', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(MessageList, 'MessageList', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NewMessage, 'NewMessage', classMeta, VOID, VOID, NewMessage, VOID, {0: $serializer_getInstance_0});
  setMetadataFor($addCOROUTINE$5, '$addCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(NewMessageModel, 'NewMessageModel', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ComposableSingletons$ChatPageKt, 'ComposableSingletons$ChatPageKt', objectMeta);
  setMetadataFor(ComposableSingletons$MessageListWidgetKt, 'ComposableSingletons$MessageListWidgetKt', objectMeta);
  setMetadataFor(MessageListWidget$composable$slambda$slambda, 'MessageListWidget$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MessageListWidget$composable$slambda, 'MessageListWidget$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MessageListWidget$composable$slambda_1, 'MessageListWidget$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MessageListWidget$composable$slambda_3, 'MessageListWidget$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(MessageListWidget$composable$lambda$lambda$slambda, 'MessageListWidget$composable$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(ComposableSingletons$NewMessageFormKt, 'ComposableSingletons$NewMessageFormKt', objectMeta);
  setMetadataFor(NewMessageForm$composable$lambda$slambda, 'NewMessageForm$composable$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(ComposableSingletons$EmptyPageKt, 'ComposableSingletons$EmptyPageKt', objectMeta);
  setMetadataFor(ComposableSingletons$ErrorWidgetsKt, 'ComposableSingletons$ErrorWidgetsKt', objectMeta);
  setMetadataFor(SnackBarHost$composable$slambda, 'SnackBarHost$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(Page, 'Page', classMeta, Enum);
  setMetadataFor(ComposableSingletons$InfoPageKt, 'ComposableSingletons$InfoPageKt', objectMeta);
  setMetadataFor(ComposableSingletons$WaitingWidgetsKt, 'ComposableSingletons$WaitingWidgetsKt', objectMeta);
  //endregion
  function get_flavor() {
    _init_properties_AppFlavor_kt__ftrtm5();
    return flavor;
  }
  var flavor;
  var Flavors_Debug_instance;
  var Flavors_Prod_instance;
  function values() {
    return [Flavors_Debug_getInstance(), Flavors_Prod_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Debug':
        return Flavors_Debug_getInstance();
      case 'Prod':
        return Flavors_Prod_getInstance();
      default:
        Flavors_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Flavors_entriesInitialized;
  function Flavors_initEntries() {
    if (Flavors_entriesInitialized)
      return Unit_getInstance();
    Flavors_entriesInitialized = true;
    Flavors_Debug_instance = new Flavors('Debug', 0);
    Flavors_Prod_instance = new Flavors('Prod', 1);
  }
  var $ENTRIES;
  function Flavors(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Flavors_Debug_getInstance() {
    Flavors_initEntries();
    return Flavors_Debug_instance;
  }
  function Flavors_Prod_getInstance() {
    Flavors_initEntries();
    return Flavors_Prod_instance;
  }
  var properties_initialized_AppFlavor_kt_qkud67;
  function _init_properties_AppFlavor_kt__ftrtm5() {
    if (!properties_initialized_AppFlavor_kt_qkud67) {
      properties_initialized_AppFlavor_kt_qkud67 = true;
      flavor = Flavors_Debug_getInstance();
    }
  }
  function get_$stableprop() {
    return 0;
  }
  function BuildInfo() {
    BuildInfo_instance = this;
    this.VERSION_1 = '1.0.0';
    this.BUILD_TIME_1 = '2025-12-01 08:27:42';
    this.$stable_1 = 0;
  }
  protoOf(BuildInfo).get_VERSION_iyczin_k$ = function () {
    return this.VERSION_1;
  };
  protoOf(BuildInfo).get_BUILD_TIME_jfwz89_k$ = function () {
    return this.BUILD_TIME_1;
  };
  var BuildInfo_instance;
  function BuildInfo_getInstance() {
    if (BuildInfo_instance == null)
      new BuildInfo();
    return BuildInfo_instance;
  }
  function initApp($completion) {
    var tmp = new $initAppCOROUTINE$0($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_$stableprop_0() {
    return 0;
  }
  function AppConfig() {
    this.textChatUrl_1 = 'messages';
    this.appName_1 = 'Local WiFi Chat';
    this.fetchBatchSize_1 = 10;
    this.fetchRefreshPeriodMs_1 = new Long(3000, 0);
    this.userHashStorageKey_1 = 'userHash';
    this.userNameStorageKey_1 = 'userName';
    this.userHashHeaderKey_1 = 'X-User-Hash';
    this.$stable_1 = 0;
  }
  protoOf(AppConfig).get_textChatUrl_c8636p_k$ = function () {
    return this.textChatUrl_1;
  };
  protoOf(AppConfig).get_appName_bv95lp_k$ = function () {
    return this.appName_1;
  };
  protoOf(AppConfig).get_flavorName_7op61e_k$ = function () {
    var tmp;
    switch (get_flavor().get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = 'Debug';
        break;
      case 1:
        tmp = 'Production';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(AppConfig).get_fetchBatchSize_7tdtqi_k$ = function () {
    return this.fetchBatchSize_1;
  };
  protoOf(AppConfig).get_fetchRefreshPeriodMs_da0vin_k$ = function () {
    return this.fetchRefreshPeriodMs_1;
  };
  protoOf(AppConfig).get_userHashStorageKey_3bfzui_k$ = function () {
    return this.userHashStorageKey_1;
  };
  protoOf(AppConfig).get_userNameStorageKey_mv1ber_k$ = function () {
    return this.userNameStorageKey_1;
  };
  protoOf(AppConfig).get_userHashHeaderKey_ppue7k_k$ = function () {
    return this.userHashHeaderKey_1;
  };
  protoOf(AppConfig).init_59613b_k$ = function ($completion) {
    return Unit_getInstance();
  };
  function get_$stableprop_1() {
    return 0;
  }
  function DebugAppConfig() {
    AppConfig.call(this);
    this.apiUrl_1 = 'http://localhost:9090/api';
    this.fetchBatchSize_2 = 5;
    this.$stable_2 = 0;
  }
  protoOf(DebugAppConfig).get_apiUrl_b2j9q6_k$ = function () {
    return this.apiUrl_1;
  };
  protoOf(DebugAppConfig).get_fetchBatchSize_7tdtqi_k$ = function () {
    return this.fetchBatchSize_2;
  };
  protoOf(DebugAppConfig).init_59613b_k$ = function ($completion) {
    return delay(new Long(1000, 0), $completion);
  };
  function get_$stableprop_2() {
    return 0;
  }
  function ProdAppConfig() {
    AppConfig.call(this);
    this.apiUrl_1 = '/api';
    this.$stable_2 = 0;
  }
  protoOf(ProdAppConfig).get_apiUrl_b2j9q6_k$ = function () {
    return this.apiUrl_1;
  };
  function $initAppCOROUTINE$0(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($initAppCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            suspendResult = DI_getInstance().putAndInit_cx7zvq_k$(new InMemoryLogger(100), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = DI_getInstance().putAndInit_cx7zvq_k$(get_flavor().equals(Flavors_Debug_getInstance()) ? new DebugAppConfig() : new ProdAppConfig(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = DI_getInstance().putAndInit_cx7zvq_k$(new UserSession(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            DI_getInstance().put_h5n6td_k$(new MessageRepository());
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function main() {
    renderComposable$composable('root', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
  }
  function get_$stableprop_3() {
    return 0;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function Loading() {
    Loading_instance = this;
    this.$stable_1 = 0;
  }
  var Loading_instance;
  function Loading_getInstance() {
    if (Loading_instance == null)
      new Loading();
    return Loading_instance;
  }
  function Error_0(error) {
    this.error_1 = error;
    this.$stable_1 = 0;
  }
  protoOf(Error_0).get_error_iqzvfj_k$ = function () {
    return this.error_1;
  };
  protoOf(Error_0).component1_7eebsc_k$ = function () {
    return this.error_1;
  };
  protoOf(Error_0).copy_cmb8ug_k$ = function (error) {
    return new Error_0(error);
  };
  protoOf(Error_0).copy$default_qrb032_k$ = function (error, $super) {
    error = error === VOID ? this.error_1 : error;
    return $super === VOID ? this.copy_cmb8ug_k$(error) : $super.copy_cmb8ug_k$.call(this, error);
  };
  protoOf(Error_0).toString = function () {
    return 'Error(error=' + this.error_1 + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return this.error_1.hashCode();
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!this.error_1.equals(tmp0_other_with_cast.error_1))
      return false;
    return true;
  };
  function Success() {
    Success_instance = this;
    this.$stable_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function InitState() {
  }
  function App() {
    illegalDecoyCallException('App');
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1521502105, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:15)');
      }
      App$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1521502105, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function App$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1949839329);
    sourceInformation($composer_0, 'C(App$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1949839329, $changed, -1, 'App$composable (Main.kt:26)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'App$composable.<anonymous>' call
        var value = mutableStateOf(Loading_getInstance());
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var initState$delegate = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(-1817629737);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(initState$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'App$composable.<anonymous>' call
        var value_0 = App$composable$slambda_0(initState$delegate, null);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect$composable(Unit_getInstance(), tmpCache, $composer_0, 6);
      var v = App$composable$lambda(initState$delegate);
      if (v instanceof Loading) {
        $composer_0.startReplaceableGroup_ip860b_k$(-577603969);
        WaitingWidget$composable($composer_0, 0);
        $composer_0.endReplaceableGroup_ern0ak_k$();
      } else {
        if (v instanceof Error_0) {
          $composer_0.startReplaceableGroup_ip860b_k$(-577603923);
          ErrorWidget$composable(v.error_1, $composer_0, 0);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          if (v instanceof Success) {
            $composer_0.startReplaceableGroup_ip860b_k$(-577603870);
            HomePage$composable($composer_0, 0);
            $composer_0.endReplaceableGroup_ern0ak_k$();
          } else {
            $composer_0.startReplaceableGroup_ip860b_k$(-577603854);
            $composer_0.endReplaceableGroup_ern0ak_k$();
          }
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(App$composable$lambda_1($changed));
    }
  }
  function App$composable$lambda($initState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('initState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $initState$delegate.get_value_j01efc_k$();
  }
  function App$composable$lambda_0($initState$delegate, value) {
    getLocalDelegateReference('initState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $initState$delegate.set_value_v1vabv_k$(value);
  }
  function App$composable$slambda($initState$delegate, resultContinuation) {
    this.$initState$delegate_1 = $initState$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = initApp(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            App$composable$lambda_0(this.$initState$delegate_1, Success_getInstance());
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              App$composable$lambda_0(this.$initState$delegate_1, new Error_0(get_log().error$default_p5m9yz_k$(e)));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(App$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new App$composable$slambda(this.$initState$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(App$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$composable$slambda_0($initState$delegate, resultContinuation) {
    var i = new App$composable$slambda($initState$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$composable$lambda_1($$changed) {
    return function ($composer, $force) {
      App$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_$stableprop_6() {
    return 8;
  }
  function UserSession$userName$delegate$lambda(it) {
    // Inline function 'org.w3c.dom.set' call
    var this_0 = localStorage;
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var i = tmp0_iterator.next_20eer_k$();
        if (i instanceof AppConfig) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_0[tmp$ret$0.get_userNameStorageKey_mv1ber_k$()] = it;
    return Unit_getInstance();
  }
  function UserSession() {
    this.userHash_1 = '';
    var tmp = this;
    tmp.userName$delegate_1 = new StateWithSideEffect('', UserSession$userName$delegate$lambda);
    this.$stable_1 = 8;
  }
  protoOf(UserSession).set_userHash_o5ptcc_k$ = function (_set____db54di) {
    this.userHash_1 = _set____db54di;
  };
  protoOf(UserSession).get_userHash_ytaw5e_k$ = function () {
    return this.userHash_1;
  };
  protoOf(UserSession).set_userName_6tcal3_k$ = function (_set____db54di) {
    return this.userName$delegate_1.setValue_ttauxt_k$(this, userName$factory(), _set____db54di);
  };
  protoOf(UserSession).get_userName_ytepxb_k$ = function () {
    return this.userName$delegate_1.getValue_fbnwi2_k$(this, userName$factory_0());
  };
  protoOf(UserSession).init_59613b_k$ = function ($completion) {
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var i = tmp0_iterator.next_20eer_k$();
        if (i instanceof AppConfig) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
    }
    var config = tmp$ret$0;
    var tmp = this;
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = localStorage[config.get_userHashStorageKey_3bfzui_k$()];
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'UserSession.init.<anonymous>' call
      var newHash = System_getInstance().now_2cba_k$().toEpochMilliseconds_82cfls_k$().toString();
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage[config.get_userHashStorageKey_3bfzui_k$()] = newHash;
      tmp_0 = newHash;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.userHash_1 = tmp_0;
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp1_elvis_lhs = localStorage[config.get_userNameStorageKey_mv1ber_k$()];
    this.set_userName_6tcal3_k$(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    return Unit_getInstance();
  };
  function _get_onValueChange__6iztw1($this) {
    return $this.onValueChange_1;
  }
  function _set_state__ks53v8($this, _set____db54di) {
    $this.state_1 = _set____db54di;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function get_$stableprop_7() {
    return 8;
  }
  function StateWithSideEffect(initialValue, onValueChange) {
    this.onValueChange_1 = onValueChange;
    this.state_1 = mutableStateOf(initialValue);
    this.$stable_1 = 8;
  }
  protoOf(StateWithSideEffect).getValue_fbnwi2_k$ = function (thisRef, property) {
    return this.state_1.get_value_j01efc_k$();
  };
  protoOf(StateWithSideEffect).setValue_ttauxt_k$ = function (thisRef, property, value) {
    var oldValue = this.state_1.get_value_j01efc_k$();
    this.state_1.set_value_v1vabv_k$(value);
    if (!equals(oldValue, value)) {
      this.onValueChange_1(value);
    }
  };
  function userName$factory() {
    return getPropertyCallableRef('userName', 1, KMutableProperty1, function (receiver) {
      return receiver.get_userName_ytepxb_k$();
    }, function (receiver, value) {
      return receiver.set_userName_6tcal3_k$(value);
    });
  }
  function userName$factory_0() {
    return getPropertyCallableRef('userName', 1, KMutableProperty1, function (receiver) {
      return receiver.get_userName_ytepxb_k$();
    }, function (receiver, value) {
      return receiver.set_userName_6tcal3_k$(value);
    });
  }
  function DI$putAndInitAll$slambda$slambda$slambda($it, resultContinuation) {
    this.$it_1 = $it;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DI$putAndInitAll$slambda$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DI$putAndInitAll$slambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DI$putAndInitAll$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = DI_getInstance().putAndInit_cx7zvq_k$(this.$it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(DI$putAndInitAll$slambda$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new DI$putAndInitAll$slambda$slambda$slambda(this.$it_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DI$putAndInitAll$slambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DI$putAndInitAll$slambda$slambda$slambda_0($it, resultContinuation) {
    var i = new DI$putAndInitAll$slambda$slambda$slambda($it, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DI$putAndInitAll$slambda$slambda($instances, resultContinuation) {
    this.$instances_1 = $instances;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DI$putAndInitAll$slambda$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DI$putAndInitAll$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DI$putAndInitAll$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_iterator = this.$instances_1.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            launch(this.$this$coroutineScope_1, VOID, VOID, DI$putAndInitAll$slambda$slambda$slambda_0(element, null));
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DI$putAndInitAll$slambda$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new DI$putAndInitAll$slambda$slambda(this.$instances_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(DI$putAndInitAll$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DI$putAndInitAll$slambda$slambda_0($instances, resultContinuation) {
    var i = new DI$putAndInitAll$slambda$slambda($instances, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_$stableprop_8() {
    return 8;
  }
  function DI$putAndInitAll$slambda($instances, resultContinuation) {
    this.$instances_1 = $instances;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DI$putAndInitAll$slambda).invoke_d9fzmj_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DI$putAndInitAll$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DI$putAndInitAll$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(DI$putAndInitAll$slambda$slambda_0(this.$instances_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(DI$putAndInitAll$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new DI$putAndInitAll$slambda(this.$instances_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(DI$putAndInitAll$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DI$putAndInitAll$slambda_0($instances, resultContinuation) {
    var i = new DI$putAndInitAll$slambda($instances, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d9fzmj_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DI() {
    DI_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.instances_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(DI).get_instances_8zuh1x_k$ = function () {
    return this.instances_1;
  };
  protoOf(DI).put_h5n6td_k$ = function (instance) {
    return this.instances_1.add_dl6gt3_k$(0, instance);
  };
  protoOf(DI).putAll_bx9laf_k$ = function (instances) {
    var tmp0_iterator = instances.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'core.DI.putAll.<anonymous>' call
      DI_getInstance().put_h5n6td_k$(element);
    }
    return Unit_getInstance();
  };
  protoOf(DI).putAndInit_cx7zvq_k$ = function (instance, $completion) {
    this.put_h5n6td_k$(instance);
    return instance.init_59613b_k$($completion);
  };
  protoOf(DI).putAndInitAll_fpvgcp_k$ = function (instances, $completion) {
    var tmp = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    return withContext(tmp, DI$putAndInitAll$slambda_0(instances, null), $completion);
  };
  var DI_instance;
  function DI_getInstance() {
    if (DI_instance == null)
      new DI();
    return DI_instance;
  }
  function Initializable() {
  }
  function AbstractUserSession() {
  }
  function MyUserSession() {
    AbstractUserSession.call(this);
  }
  function exampleOfUseDI() {
    DI_getInstance().put_h5n6td_k$(new MyUserSession());
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().instances_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var i = tmp0_iterator.next_20eer_k$();
        if (i instanceof AbstractUserSession) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(AbstractUserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
    }
    var tmp$ret$1 = tmp$ret$0;
    println(tmp$ret$1);
    // Inline function 'core.di' call
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator_0 = DI_getInstance().instances_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var i_0 = tmp0_iterator_0.next_20eer_k$();
        if (i_0 instanceof MyUserSession) {
          tmp$ret$2 = i_0;
          break $l$block_0;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(MyUserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
    }
    var tmp$ret$3 = tmp$ret$2;
    println(tmp$ret$3);
  }
  var LogType_INFO_instance;
  var LogType_API_instance;
  var LogType_ERROR_instance;
  function values_0() {
    return [LogType_INFO_getInstance(), LogType_API_getInstance(), LogType_ERROR_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'INFO':
        return LogType_INFO_getInstance();
      case 'API':
        return LogType_API_getInstance();
      case 'ERROR':
        return LogType_ERROR_getInstance();
      default:
        LogType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var LogType_entriesInitialized;
  function LogType_initEntries() {
    if (LogType_entriesInitialized)
      return Unit_getInstance();
    LogType_entriesInitialized = true;
    LogType_INFO_instance = new LogType('INFO', 0);
    LogType_API_instance = new LogType('API', 1);
    LogType_ERROR_instance = new LogType('ERROR', 2);
  }
  var $ENTRIES_0;
  function LogType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_$stableprop_9() {
    return 0;
  }
  function LogEntry(type, title, text, details, time) {
    time = time === VOID ? System_getInstance().now_2cba_k$() : time;
    this.type_1 = type;
    this.title_1 = title;
    this.text_1 = text;
    this.details_1 = details;
    this.time_1 = time;
    this.$stable_1 = 0;
  }
  protoOf(LogEntry).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LogEntry).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LogEntry).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(LogEntry).get_details_r0zbrt_k$ = function () {
    return this.details_1;
  };
  protoOf(LogEntry).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(LogEntry).toString = function () {
    var buf = StringBuilder_init_$Create$();
    if (!(this.title_1 == null)) {
      append(buf, [this.title_1, '\t\t', toHumanTime(this.time_1), '\n']);
    }
    buf.append_22ad7x_k$(this.text_1);
    if (!(this.details_1 == null)) {
      append_0(buf, ['\n', this.details_1]);
    }
    return buf.toString();
  };
  protoOf(LogEntry).component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  protoOf(LogEntry).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(LogEntry).component3_7eebsa_k$ = function () {
    return this.text_1;
  };
  protoOf(LogEntry).component4_7eebs9_k$ = function () {
    return this.details_1;
  };
  protoOf(LogEntry).component5_7eebs8_k$ = function () {
    return this.time_1;
  };
  protoOf(LogEntry).copy_jpfeee_k$ = function (type, title, text, details, time) {
    return new LogEntry(type, title, text, details, time);
  };
  protoOf(LogEntry).copy$default_l8yuvf_k$ = function (type, title, text, details, time, $super) {
    type = type === VOID ? this.type_1 : type;
    title = title === VOID ? this.title_1 : title;
    text = text === VOID ? this.text_1 : text;
    details = details === VOID ? this.details_1 : details;
    time = time === VOID ? this.time_1 : time;
    return $super === VOID ? this.copy_jpfeee_k$(type, title, text, details, time) : $super.copy_jpfeee_k$.call(this, type, title, text, details, time);
  };
  protoOf(LogEntry).hashCode = function () {
    var result = this.type_1.hashCode();
    result = imul(result, 31) + (this.title_1 == null ? 0 : getStringHashCode(this.title_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.text_1) | 0;
    result = imul(result, 31) + (this.details_1 == null ? 0 : hashCode(this.details_1)) | 0;
    result = imul(result, 31) + this.time_1.hashCode() | 0;
    return result;
  };
  protoOf(LogEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LogEntry))
      return false;
    var tmp0_other_with_cast = other instanceof LogEntry ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!(this.title_1 == tmp0_other_with_cast.title_1))
      return false;
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!equals(this.details_1, tmp0_other_with_cast.details_1))
      return false;
    if (!this.time_1.equals(tmp0_other_with_cast.time_1))
      return false;
    return true;
  };
  function get_$stableprop_10() {
    return 0;
  }
  function HumanErrorInfo(title, text, details, time) {
    details = details === VOID ? null : details;
    time = time === VOID ? System_getInstance().now_2cba_k$() : time;
    extendThrowable(this);
    captureStack(this, HumanErrorInfo);
    this.title_1 = title;
    this.text_1 = text;
    this.details_1 = details;
    this.time_1 = time;
    this.$stable_1 = 0;
  }
  protoOf(HumanErrorInfo).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(HumanErrorInfo).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(HumanErrorInfo).get_details_r0zbrt_k$ = function () {
    return this.details_1;
  };
  protoOf(HumanErrorInfo).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(HumanErrorInfo).component1_7eebsc_k$ = function () {
    return this.title_1;
  };
  protoOf(HumanErrorInfo).component2_7eebsb_k$ = function () {
    return this.text_1;
  };
  protoOf(HumanErrorInfo).component3_7eebsa_k$ = function () {
    return this.details_1;
  };
  protoOf(HumanErrorInfo).component4_7eebs9_k$ = function () {
    return this.time_1;
  };
  protoOf(HumanErrorInfo).copy_vlvpqh_k$ = function (title, text, details, time) {
    return new HumanErrorInfo(title, text, details, time);
  };
  protoOf(HumanErrorInfo).copy$default_5ejbgq_k$ = function (title, text, details, time, $super) {
    title = title === VOID ? this.title_1 : title;
    text = text === VOID ? this.text_1 : text;
    details = details === VOID ? this.details_1 : details;
    time = time === VOID ? this.time_1 : time;
    return $super === VOID ? this.copy_vlvpqh_k$(title, text, details, time) : $super.copy_vlvpqh_k$.call(this, title, text, details, time);
  };
  protoOf(HumanErrorInfo).toString = function () {
    return 'HumanErrorInfo(title=' + this.title_1 + ', text=' + this.text_1 + ', details=' + this.details_1 + ', time=' + this.time_1 + ')';
  };
  protoOf(HumanErrorInfo).hashCode = function () {
    var result = getStringHashCode(this.title_1);
    result = imul(result, 31) + getStringHashCode(this.text_1) | 0;
    result = imul(result, 31) + (this.details_1 == null ? 0 : getStringHashCode(this.details_1)) | 0;
    result = imul(result, 31) + this.time_1.hashCode() | 0;
    return result;
  };
  protoOf(HumanErrorInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HumanErrorInfo))
      return false;
    var tmp0_other_with_cast = other instanceof HumanErrorInfo ? other : THROW_CCE();
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!(this.details_1 == tmp0_other_with_cast.details_1))
      return false;
    if (!this.time_1.equals(tmp0_other_with_cast.time_1))
      return false;
    return true;
  };
  function _set_apiRequestCounter__xpabni($this, _set____db54di) {
    $this.apiRequestCounter_1 = _set____db54di;
  }
  function _get_apiRequestCounter__bzhfd6($this) {
    return $this.apiRequestCounter_1;
  }
  function get_$stableprop_11() {
    return 8;
  }
  function Logger() {
    this.apiRequestCounter_1 = 0;
    this.$stable_1 = 8;
  }
  protoOf(Logger).info_ne9f18_k$ = function (title, text, details) {
    return this.log_fau2y8_k$(new LogEntry(LogType_INFO_getInstance(), title, text, details));
  };
  protoOf(Logger).info$default_de1flv_k$ = function (title, text, details, $super) {
    details = details === VOID ? null : details;
    var tmp;
    if ($super === VOID) {
      this.info_ne9f18_k$(title, text, details);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.info_ne9f18_k$.call(this, title, text, details);
    }
    return tmp;
  };
  protoOf(Logger).apiReq_z512jf_k$ = function (protocol, url, reqData) {
    var tmp = LogType_API_getInstance();
    this.apiRequestCounter_1 = this.apiRequestCounter_1 + 1 | 0;
    this.log_fau2y8_k$(new LogEntry(tmp, 'API-' + this.apiRequestCounter_1 + ' >>>', protocol + ': ' + url, reqData));
    return this.apiRequestCounter_1;
  };
  protoOf(Logger).apiReq$default_1a94m6_k$ = function (protocol, url, reqData, $super) {
    reqData = reqData === VOID ? null : reqData;
    return $super === VOID ? this.apiReq_z512jf_k$(protocol, url, reqData) : $super.apiReq_z512jf_k$.call(this, protocol, url, reqData);
  };
  protoOf(Logger).apiRes_hpp8jh_k$ = function (reqNum, resStatus, resData) {
    return this.log_fau2y8_k$(new LogEntry(LogType_API_getInstance(), 'API-' + reqNum + ' <<<', toString(resStatus), resData));
  };
  protoOf(Logger).apiRes$default_fph48a_k$ = function (reqNum, resStatus, resData, $super) {
    resData = resData === VOID ? null : resData;
    var tmp;
    if ($super === VOID) {
      this.apiRes_hpp8jh_k$(reqNum, resStatus, resData);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.apiRes_hpp8jh_k$.call(this, reqNum, resStatus, resData);
    }
    return tmp;
  };
  protoOf(Logger).error_llb02d_k$ = function (error, title, text) {
    var tmp1_elvis_lhs = title == null ? text : title;
    var tmp3_elvis_lhs = tmp1_elvis_lhs == null ? error.message : tmp1_elvis_lhs;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      var tmp2_safe_receiver = error.cause;
      tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.message;
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var tmp4_elvis_lhs = tmp;
    var newTitle = tmp4_elvis_lhs == null ? error.toString() : tmp4_elvis_lhs;
    var buf = StringBuilder_init_$Create$();
    buf.append_22ad7x_k$(stackTraceToString(error));
    if (!(error.cause == null)) {
      append(buf, ['\n', stackTraceToString(ensureNotNull(error.cause))]);
    }
    var newText = buf.toString();
    var logEntry = new LogEntry(LogType_ERROR_getInstance(), newTitle, newText, error);
    this.log_fau2y8_k$(logEntry);
    return new HumanErrorInfo(newTitle, newText, null, logEntry.time_1);
  };
  protoOf(Logger).error$default_p5m9yz_k$ = function (error, title, text, $super) {
    title = title === VOID ? null : title;
    text = text === VOID ? null : text;
    return $super === VOID ? this.error_llb02d_k$(error, title, text) : $super.error_llb02d_k$.call(this, error, title, text);
  };
  function _get_storeUpToEntries__yiu8gi($this) {
    return $this.storeUpToEntries_1;
  }
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function get_$stableprop_12() {
    return 8;
  }
  function InMemoryLogger(storeUpToEntries) {
    storeUpToEntries = storeUpToEntries === VOID ? 100 : storeUpToEntries;
    Logger.call(this);
    this.storeUpToEntries_1 = storeUpToEntries;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.entries_1 = ArrayList_init_$Create$();
    this.$stable_2 = 8;
  }
  protoOf(InMemoryLogger).log_fau2y8_k$ = function (entry) {
    if (entry.type_1.equals(LogType_ERROR_getInstance())) {
      console.error(entry.details_1);
    } else {
      console.log(entry.toString());
    }
    this.entries_1.add_dl6gt3_k$(0, entry);
    if (this.entries_1.get_size_woubt6_k$() > this.storeUpToEntries_1) {
      removeLast(this.entries_1);
    }
  };
  protoOf(InMemoryLogger).getAll_knua39_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.entries_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'core.InMemoryLogger.getAll.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return toList(destination);
  };
  protoOf(InMemoryLogger).init_59613b_k$ = function ($completion) {
    return Unit_getInstance();
  };
  function get_log() {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var i = tmp0_iterator.next_20eer_k$();
        if (i instanceof Logger) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(Logger).get_simpleName_r6f8py_k$() + ' is not found in global DI');
    }
    return tmp$ret$0;
  }
  function LogType_INFO_getInstance() {
    LogType_initEntries();
    return LogType_INFO_instance;
  }
  function LogType_API_getInstance() {
    LogType_initEntries();
    return LogType_API_instance;
  }
  function LogType_ERROR_getInstance() {
    LogType_initEntries();
    return LogType_ERROR_instance;
  }
  function get_appJson() {
    _init_properties_json_kt__3xrlns();
    return appJson;
  }
  var appJson;
  function get_appJsonPretty() {
    _init_properties_json_kt__3xrlns();
    return appJsonPretty;
  }
  var appJsonPretty;
  function appJson$lambda($this$Json) {
    _init_properties_json_kt__3xrlns();
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    $this$Json.set_encodeDefaults_c5evsg_k$(true);
    $this$Json.set_isLenient_kuajk5_k$(true);
    return Unit_getInstance();
  }
  function appJsonPretty$lambda($this$Json) {
    _init_properties_json_kt__3xrlns();
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    $this$Json.set_encodeDefaults_c5evsg_k$(true);
    $this$Json.set_isLenient_kuajk5_k$(true);
    $this$Json.set_prettyPrint_v2gnff_k$(true);
    return Unit_getInstance();
  }
  var properties_initialized_json_kt_otgzg6;
  function _init_properties_json_kt__3xrlns() {
    if (!properties_initialized_json_kt_otgzg6) {
      properties_initialized_json_kt_otgzg6 = true;
      appJson = Json(VOID, appJson$lambda);
      appJsonPretty = Json(VOID, appJsonPretty$lambda);
    }
  }
  function toHumanTime(instant) {
    var zone = Companion_getInstance_0().currentSystemDefault_9rduv_k$();
    var local = toLocalDateTime(instant, zone);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'core.toHumanTime.<anonymous>' call
    this_0.append_t8pm91_k$(local.get_date_wokkxj_k$());
    this_0.append_22ad7x_k$(' ');
    this_0.append_t8pm91_k$(local.get_time_wouyhi_k$());
    this_0.append_22ad7x_k$(' ');
    return this_0.toString();
  }
  function urlOf(path) {
    // Inline function 'kotlin.also' call
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var i = tmp0_iterator.next_20eer_k$();
        if (i instanceof AppConfig) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
    }
    var tmp$ret$1 = tmp$ret$0;
    var this_0 = URLBuilder(tmp$ret$1.get_apiUrl_b2j9q6_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'data.urlOf.<anonymous>' call
    appendPathSegments(this_0, [path]);
    return this_0;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function ApiClient$http$lambda($this$HttpClient) {
    var tmp = Plugin_getInstance();
    $this$HttpClient.install_6m4asv_k$(tmp, ApiClient$http$lambda$lambda);
    return Unit_getInstance();
  }
  function ApiClient$http$lambda$lambda($this$install) {
    json($this$install, get_appJson());
    return Unit_getInstance();
  }
  function $checkAndLogResponseCOROUTINE$0(_this__u8e3s4, reqNum, response, reqLogFun, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.reqNum_1 = reqNum;
    this.response_1 = response;
    this.reqLogFun_1 = reqLogFun;
  }
  protoOf($checkAndLogResponseCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (!!(this.reqNum_1 == null ? this.reqLogFun_1 == null : false)) {
              var message = '\u0415\u0441\u043B\u0438 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u043D\u043E\u043C\u0435\u0440 \u043B\u043E\u0433\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430, \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043B\u043E\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!this.response_1.get_status_jnf6d7_k$().equals(Companion_getInstance_1().get_OK_kntokb_k$())) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = bodyAsText(this.response_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(this.reqNum_1 == null)) {
                this.ARGUMENT0__1 = get_log();
                this.ARGUMENT1__1 = this.response_1.get_status_jnf6d7_k$();
                this.set_state_rjd8d0_k$(1);
                suspendResult = bodyAsText(this.response_1, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(2);
                continue $sm;
              }
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.ARGUMENT0__1.apiRes_hpp8jh_k$(this.reqNum_1, this.ARGUMENT1__1, ARGUMENT);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            var errorBody = suspendResult;
            var tmp_0 = get_log();
            var tmp0_elvis_lhs = this.reqNum_1;
            tmp_0.apiRes_hpp8jh_k$(tmp0_elvis_lhs == null ? ensureNotNull(this.reqLogFun_1)() : tmp0_elvis_lhs, this.response_1.get_status_jnf6d7_k$(), errorBody);
            throw Exception_init_$Create$('API error: ' + this.response_1.get_status_jnf6d7_k$() + '\n' + errorBody);
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ApiClient() {
    var tmp = this;
    tmp.http_1 = HttpClient(ApiClient$http$lambda);
    this.$stable_1 = 0;
  }
  protoOf(ApiClient).get_http_woniz5_k$ = function () {
    return this.http_1;
  };
  protoOf(ApiClient).checkAndLogResponse_hn54oh_k$ = function (reqNum, response, reqLogFun, $completion) {
    var tmp = new $checkAndLogResponseCOROUTINE$0(this, reqNum, response, reqLogFun, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ApiClient).checkAndLogResponse$default_9lbrjc_k$ = function (reqNum, response, reqLogFun, $completion, $super) {
    reqLogFun = reqLogFun === VOID ? null : reqLogFun;
    return $super === VOID ? this.checkAndLogResponse_hn54oh_k$(reqNum, response, reqLogFun, $completion) : $super.checkAndLogResponse_hn54oh_k$.call(this, reqNum, response, reqLogFun, $completion);
  };
  function _get_api__e65b5j($this) {
    return $this.api_1;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function MessageRepository$fetchMessages$lambda($url) {
    return function () {
      return get_log().apiReq$default_1a94m6_k$('GET', '' + $url);
    };
  }
  function $fetchMessagesCOROUTINE$2(_this__u8e3s4, olderThan, newerThan, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.olderThan_1 = olderThan;
    this.newerThan_1 = newerThan;
    this.limit_1 = limit;
  }
  protoOf($fetchMessagesCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.set_exceptionState_fex74n_k$(8);
            if (!!(!(this.olderThan_1 == null) ? !(this.newerThan_1 == null) : false)) {
              var message = '\u041D\u0435\u043B\u044C\u0437\u044F \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C olderThan \u0438 newerThan \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var i = tmp0_iterator.next_20eer_k$();
                if (i instanceof AppConfig) {
                  tmp$ret$0 = i;
                  break l$ret$1;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
            }
             while (false);
            tmp_0.url0__1 = urlOf(tmp$ret$0.get_textChatUrl_c8636p_k$());
            if (this.olderThan_1 == null)
              null;
            else {
              this.url0__1.get_parameters_cl4rkd_k$().append_rhug0a_k$('olderThan', this.olderThan_1.get_createdAt_ierzpu_k$().toString());
            }

            if (this.newerThan_1 == null)
              null;
            else {
              this.url0__1.get_parameters_cl4rkd_k$().append_rhug0a_k$('newerThan', this.newerThan_1.get_createdAt_ierzpu_k$().toString());
            }

            this.url0__1.get_parameters_cl4rkd_k$().append_rhug0a_k$('limit', this.limit_1.toString());
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.this2__1 = this._this__u8e3s4__1.api_1;
            var tmp_2 = this;
            tmp_2.url3__1 = this.url0__1.build_1k0s4u_k$();
            var tmp_3 = this;
            tmp_3.noLog4__1 = !(this.newerThan_1 == null);
            var tmp_4 = this;
            tmp_4.reqLogFunc5__1 = MessageRepository$fetchMessages$lambda(this.url3__1);
            this.set_exceptionState_fex74n_k$(5);
            this.reqNum6__1 = !this.noLog4__1 ? this.reqLogFunc5__1() : null;
            var tmp_5 = this;
            tmp_5.this7__1 = this.this2__1.get_http_woniz5_k$();
            var tmp_6 = this;
            tmp_6.url8__1 = this.url3__1;
            var tmp_7 = this;
            tmp_7.this9__1 = this.this7__1;
            var tmp_8 = this;
            tmp_8.this10__1 = this.this9__1;
            var tmp_9 = this;
            var this_0 = new HttpRequestBuilder();
            takeFrom(this_0.get_url_18iuii_k$(), this.url8__1);
            tmp_9.builder11__1 = this_0;
            this.builder11__1.set_method_hoo95u_k$(Companion_getInstance_2().get_Get_18jsxf_k$());
            var tmp_10 = this;
            tmp_10.this12__1 = this.this10__1;
            var tmp_11 = this;
            tmp_11.builder13__1 = this.builder11__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpStatement(this.builder13__1, this.this12__1)).execute_rsj18j_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response14__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.this2__1.checkAndLogResponse_hn54oh_k$(this.reqNum6__1, this.response14__1, this.reqLogFunc5__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_12 = this;
            tmp_12.this15__1 = this.response14__1;
            this.set_state_rjd8d0_k$(4);
            var tmp_13 = this.this15__1.get_call_wojxrb_k$();
            var tmp_14 = JsType_getInstance();
            var tmp_15 = getKClass(List);
            var tmp_16;
            try {
              tmp_16 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Message), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_17;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_17 = null;
              } else {
                throw $p;
              }
              tmp_16 = tmp_17;
            }

            suspendResult = tmp_13.bodyNullable_wn8z59_k$(typeInfoImpl(tmp_14, tmp_15, tmp_16), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_18 = this;
            tmp_18.tmp$ret$21__1 = (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_19 = this.get_exception_x0n6w6_k$();
            if (tmp_19 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              this.reqLogFunc5__1();
              throw get_log().error$default_p5m9yz_k$(e);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            this.set_exceptionState_fex74n_k$(8);
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            var batch = this.tmp$ret$21__1;
            return new MessageList(batch, batch.get_size_woubt6_k$() === this.limit_1);
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_20 = this.get_exception_x0n6w6_k$();
            if (tmp_20 instanceof HumanErrorInfo) {
              var e_0 = this.get_exception_x0n6w6_k$();
              return Companion_getInstance_9().empty_bydp6p_k$(e_0);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 9:
            throw this.get_exception_x0n6w6_k$();
          case 10:
            this.set_exceptionState_fex74n_k$(9);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $addNewMessageCOROUTINE$3(_this__u8e3s4, newMessage, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.newMessage_1 = newMessage;
  }
  protoOf($addNewMessageCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this1__1 = this._this__u8e3s4__1.api_1;
            var tmp_1 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var i = tmp0_iterator.next_20eer_k$();
                if (i instanceof AppConfig) {
                  tmp$ret$0 = i;
                  break l$ret$1;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
            }
             while (false);
            tmp_1.url2__1 = urlOf(tmp$ret$0.get_textChatUrl_c8636p_k$()).build_1k0s4u_k$();
            var tmp_2 = this;
            tmp_2.requestObject3__1 = this.newMessage_1;
            var tmp_3 = this;
            tmp_3.headersMap4__1 = null;
            this.set_exceptionState_fex74n_k$(5);
            var tmp_4 = this;
            var this_0 = get_appJsonPretty();
            var value = this.requestObject3__1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(NewMessage), arrayOf([]), false));
            tmp_4.reqBodyText5__1 = this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value);
            this.reqNum6__1 = get_log().apiReq_z512jf_k$('POST', '' + this.url2__1, this.reqBodyText5__1);
            var tmp_5 = this;
            tmp_5.this7__1 = this.this1__1.get_http_woniz5_k$();
            var tmp_6 = this;
            tmp_6.url8__1 = this.url2__1;
            var tmp_7 = this;
            tmp_7.this9__1 = this.this7__1;
            var tmp_8 = this;
            tmp_8.this10__1 = this.this9__1;
            var tmp_9 = this;
            var this_3 = new HttpRequestBuilder();
            takeFrom(this_3.get_url_18iuii_k$(), this.url8__1);
            var body = this.reqBodyText5__1;
            if (body == null) {
              this_3.set_body_slfhxt_k$(NullBody_getInstance());
              var tmp_10 = JsType_getInstance();
              var tmp_11 = PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$();
              var tmp_12;
              try {
                tmp_12 = createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false);
              } catch ($p) {
                var tmp_13;
                if ($p instanceof Error) {
                  var cause = $p;
                  tmp_13 = null;
                } else {
                  throw $p;
                }
                tmp_12 = tmp_13;
              }
              this_3.set_bodyType_8pgqkl_k$(typeInfoImpl(tmp_10, tmp_11, tmp_12));
            } else {
              if (body instanceof OutgoingContent) {
                this_3.set_body_slfhxt_k$(body);
                this_3.set_bodyType_8pgqkl_k$(null);
              } else {
                this_3.set_body_slfhxt_k$(body);
                var tmp_14 = JsType_getInstance();
                var tmp_15 = PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$();
                var tmp_16;
                try {
                  tmp_16 = createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_17;
                  if ($p instanceof Error) {
                    var cause_0 = $p;
                    tmp_17 = null;
                  } else {
                    throw $p;
                  }
                  tmp_16 = tmp_17;
                }
                this_3.set_bodyType_8pgqkl_k$(typeInfoImpl(tmp_14, tmp_15, tmp_16));
              }
            }

            contentType(this_3, Application_getInstance().get_Json_wo4ci9_k$());
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_iterator_0 = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
              while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                var i_0 = tmp0_iterator_0.next_20eer_k$();
                if (i_0 instanceof AppConfig) {
                  tmp$ret$2 = i_0;
                  break l$ret$3;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
            }
             while (false);
            var tmp_18 = tmp$ret$2.get_userHashHeaderKey_ppue7k_k$();
            var tmp$ret$4;
            l$ret$5: do {
              var tmp0_iterator_1 = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
              while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                var i_1 = tmp0_iterator_1.next_20eer_k$();
                if (i_1 instanceof UserSession) {
                  tmp$ret$4 = i_1;
                  break l$ret$5;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
            }
             while (false);
            header(this_3, tmp_18, tmp$ret$4.get_userHash_ytaw5e_k$());
            var tmp0_safe_receiver = this.headersMap4__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_iterator_2 = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator_2.next_20eer_k$();
                var key = element.get_key_18j28a_k$();
                var value_0 = element.get_value_j01efc_k$();
                header(this_3, key, value_0);
              }
            }

            tmp_9.builder11__1 = this_3;
            this.builder11__1.set_method_hoo95u_k$(Companion_getInstance_2().get_Post_wo83k9_k$());
            var tmp_19 = this;
            tmp_19.this12__1 = this.this10__1;
            var tmp_20 = this;
            tmp_20.builder13__1 = this.builder11__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpStatement(this.builder13__1, this.this12__1)).execute_rsj18j_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response14__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.this1__1.checkAndLogResponse$default_9lbrjc_k$(this.reqNum6__1, this.response14__1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_21 = this;
            tmp_21.this15__1 = this.response14__1;
            this.set_state_rjd8d0_k$(4);
            var tmp_22 = this.this15__1.get_call_wojxrb_k$();
            var tmp_23 = JsType_getInstance();
            var tmp_24 = getKClass(Unit);
            var tmp_25;
            try {
              tmp_25 = createKType(getKClass(Unit), arrayOf([]), false);
            } catch ($p) {
              var tmp_26;
              if ($p instanceof Error) {
                var cause_1 = $p;
                tmp_26 = null;
              } else {
                throw $p;
              }
              tmp_25 = tmp_26;
            }

            suspendResult = tmp_22.bodyNullable_wn8z59_k$(typeInfoImpl(tmp_23, tmp_24, tmp_25), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_27 = this;
            tmp_27.tmp$ret$60__1 = suspendResult instanceof Unit ? suspendResult : THROW_CCE();
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_28 = this.get_exception_x0n6w6_k$();
            if (tmp_28 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              throw get_log().error$default_p5m9yz_k$(e);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
          case 7:
            this.set_exceptionState_fex74n_k$(6);
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function MessageRepository() {
    this.api_1 = new ApiClient();
    this.$stable_1 = 0;
  }
  protoOf(MessageRepository).fetchMessages_1oofi7_k$ = function (olderThan, newerThan, limit, $completion) {
    var tmp = new $fetchMessagesCOROUTINE$2(this, olderThan, newerThan, limit, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MessageRepository).addNewMessage_aeoktd_k$ = function (newMessage, $completion) {
    var tmp = new $addNewMessageCOROUTINE$3(this, newMessage, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function get_LocalChatModel() {
    _init_properties_ChatModel_kt__34bpoh();
    return LocalChatModel;
  }
  var LocalChatModel;
  function get_$stableprop_15() {
    return 0;
  }
  function ChatModel() {
    this.messageListModel_1 = new MessageListModel();
    this.newMessageModel_1 = new NewMessageModel(this.messageListModel_1);
    this.$stable_1 = 0;
  }
  protoOf(ChatModel).get_messageListModel_cn8b4j_k$ = function () {
    return this.messageListModel_1;
  };
  protoOf(ChatModel).get_newMessageModel_81blc7_k$ = function () {
    return this.newMessageModel_1;
  };
  function LocalChatModel$lambda() {
    _init_properties_ChatModel_kt__34bpoh();
    var message = 'ChatModel not provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var properties_initialized_ChatModel_kt_vrtkw1;
  function _init_properties_ChatModel_kt__34bpoh() {
    if (!properties_initialized_ChatModel_kt_vrtkw1) {
      properties_initialized_ChatModel_kt_vrtkw1 = true;
      LocalChatModel = compositionLocalOf(VOID, LocalChatModel$lambda);
    }
  }
  var FetchMode_TOP_instance;
  var FetchMode_OLDER_instance;
  var FetchMode_NEWER_instance;
  function values_1() {
    return [FetchMode_TOP_getInstance(), FetchMode_OLDER_getInstance(), FetchMode_NEWER_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'TOP':
        return FetchMode_TOP_getInstance();
      case 'OLDER':
        return FetchMode_OLDER_getInstance();
      case 'NEWER':
        return FetchMode_NEWER_getInstance();
      default:
        FetchMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var FetchMode_entriesInitialized;
  function FetchMode_initEntries() {
    if (FetchMode_entriesInitialized)
      return Unit_getInstance();
    FetchMode_entriesInitialized = true;
    FetchMode_TOP_instance = new FetchMode('TOP', 0);
    FetchMode_OLDER_instance = new FetchMode('OLDER', 1);
    FetchMode_NEWER_instance = new FetchMode('NEWER', 2);
  }
  var $ENTRIES_1;
  function FetchMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function fetch($this, fetchMode, $completion) {
    var tmp = new $fetchCOROUTINE$4($this, fetchMode, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_$stableprop_16() {
    return 8;
  }
  function $fetchCOROUTINE$4(_this__u8e3s4, fetchMode, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fetchMode_1 = fetchMode;
  }
  protoOf($fetchCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this._this__u8e3s4__1.set_isLoading_r5ibvk_k$(true);
            this._this__u8e3s4__1.set_forceScrollToTop_9osthy_k$(false);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(7);
            this.set_exceptionState_fex74n_k$(6);
            this.tmp0_subject1__1 = this.fetchMode_1;
            this.tmp02__1 = this.tmp0_subject1__1.get_ordinal_ip24qg_k$();
            if (this.tmp02__1 === 0) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = this._this__u8e3s4__1.repository_1.fetchMessages$default_10tx46_k$(VOID, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.tmp02__1 === 1) {
                this.set_state_rjd8d0_k$(3);
                suspendResult = this._this__u8e3s4__1.repository_1.fetchMessages$default_10tx46_k$(lastOrNull(this._this__u8e3s4__1.get_list_wopuqv_k$().get_all_18j9hk_k$()), VOID, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.tmp02__1 === 2) {
                  this.set_state_rjd8d0_k$(2);
                  suspendResult = this._this__u8e3s4__1.repository_1.fetchMessages$default_10tx46_k$(VOID, firstOrNull(this._this__u8e3s4__1.get_list_wopuqv_k$().get_all_18j9hk_k$()), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_rjd8d0_k$(5);
                  continue $sm;
                }
              }
            }

          case 2:
            var bath = suspendResult;
            if (!bath.get_all_18j9hk_k$().isEmpty_y1axqb_k$()) {
              get_log().info$default_de1flv_k$(null, 'Batch of newer loaded: ' + bath.get_all_18j9hk_k$().get_size_woubt6_k$() + ' items');
              this._this__u8e3s4__1.set_isNewerUnread_5txdmo_k$(true);
            }

            this._this__u8e3s4__1.set_list_4y1onb_k$(new MessageList(plus(bath.get_all_18j9hk_k$(), this._this__u8e3s4__1.get_list_wopuqv_k$().get_all_18j9hk_k$()), this._this__u8e3s4__1.get_list_wopuqv_k$().get_isOlderAvailable_qt2aaw_k$(), bath.get_error_iqzvfj_k$()));
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 3:
            var bath_0 = suspendResult;
            if (!bath_0.get_all_18j9hk_k$().isEmpty_y1axqb_k$()) {
              get_log().info$default_de1flv_k$(null, 'Batch of older loaded: ' + bath_0.get_all_18j9hk_k$().get_size_woubt6_k$() + ' items');
            }

            this._this__u8e3s4__1.set_list_4y1onb_k$(new MessageList(plus(this._this__u8e3s4__1.get_list_wopuqv_k$().get_all_18j9hk_k$(), bath_0.get_all_18j9hk_k$()), bath_0.get_isOlderAvailable_qt2aaw_k$(), bath_0.get_error_iqzvfj_k$()));
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 4:
            var bath_1 = suspendResult;
            get_log().info$default_de1flv_k$(null, 'Top batch loaded: ' + bath_1.get_all_18j9hk_k$().get_size_woubt6_k$() + ' items');
            this._this__u8e3s4__1.set_list_4y1onb_k$(bath_1);
            this._this__u8e3s4__1.set_forceScrollToTop_9osthy_k$(true);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.tmp$ret$00__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            this.set_exceptionState_fex74n_k$(9);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.set_isLoading_r5ibvk_k$(false);
            throw t;
          case 8:
            this._this__u8e3s4__1.set_isLoading_r5ibvk_k$(false);
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function MessageListModel(repository) {
    var tmp;
    if (repository === VOID) {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (isInterface(i, AbstractMessageRepository)) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AbstractMessageRepository).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      tmp = tmp$ret$0;
    } else {
      tmp = repository;
    }
    repository = tmp;
    this.repository_1 = repository;
    this.list$delegate_1 = mutableStateOf(Companion_getInstance_9().empty$default_yx77wa_k$());
    this.isNewerUnread$delegate_1 = mutableStateOf(false);
    this.forceScrollToTop$delegate_1 = mutableStateOf(false);
    this.isLoading$delegate_1 = mutableStateOf(false);
    this.$stable_1 = 8;
  }
  protoOf(MessageListModel).get_repository_c37cur_k$ = function () {
    return this.repository_1;
  };
  protoOf(MessageListModel).set_list_4y1onb_k$ = function (_set____db54di) {
    var this_0 = this.list$delegate_1;
    list$factory();
    return this_0.set_value_v1vabv_k$(_set____db54di);
  };
  protoOf(MessageListModel).get_list_wopuqv_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.list$delegate_1;
    list$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MessageListModel).set_isNewerUnread_5txdmo_k$ = function (_set____db54di) {
    var this_0 = this.isNewerUnread$delegate_1;
    isNewerUnread$factory();
    return this_0.set_value_v1vabv_k$(_set____db54di);
  };
  protoOf(MessageListModel).get_isNewerUnread_4iuz6x_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isNewerUnread$delegate_1;
    isNewerUnread$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MessageListModel).set_forceScrollToTop_9osthy_k$ = function (_set____db54di) {
    var this_0 = this.forceScrollToTop$delegate_1;
    forceScrollToTop$factory();
    return this_0.set_value_v1vabv_k$(_set____db54di);
  };
  protoOf(MessageListModel).get_forceScrollToTop_763p5h_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.forceScrollToTop$delegate_1;
    forceScrollToTop$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MessageListModel).set_isLoading_r5ibvk_k$ = function (_set____db54di) {
    var this_0 = this.isLoading$delegate_1;
    isLoading$factory();
    return this_0.set_value_v1vabv_k$(_set____db54di);
  };
  protoOf(MessageListModel).get_isLoading_4hrqbt_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isLoading$delegate_1;
    isLoading$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MessageListModel).fetchTop_6u7ds4_k$ = function ($completion) {
    return fetch(this, FetchMode_TOP_getInstance(), $completion);
  };
  protoOf(MessageListModel).fetchOlder_lksf31_k$ = function ($completion) {
    return fetch(this, FetchMode_OLDER_getInstance(), $completion);
  };
  protoOf(MessageListModel).fetchNewer_k2yfpg_k$ = function ($completion) {
    return fetch(this, FetchMode_NEWER_getInstance(), $completion);
  };
  function FetchMode_TOP_getInstance() {
    FetchMode_initEntries();
    return FetchMode_TOP_instance;
  }
  function FetchMode_OLDER_getInstance() {
    FetchMode_initEntries();
    return FetchMode_OLDER_instance;
  }
  function FetchMode_NEWER_getInstance() {
    FetchMode_initEntries();
    return FetchMode_NEWER_instance;
  }
  function list$factory() {
    return getPropertyCallableRef('list', 1, KMutableProperty1, function (receiver) {
      return receiver.get_list_wopuqv_k$();
    }, function (receiver, value) {
      return receiver.set_list_4y1onb_k$(value);
    });
  }
  function list$factory_0() {
    return getPropertyCallableRef('list', 1, KMutableProperty1, function (receiver) {
      return receiver.get_list_wopuqv_k$();
    }, function (receiver, value) {
      return receiver.set_list_4y1onb_k$(value);
    });
  }
  function isNewerUnread$factory() {
    return getPropertyCallableRef('isNewerUnread', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isNewerUnread_4iuz6x_k$();
    }, function (receiver, value) {
      return receiver.set_isNewerUnread_5txdmo_k$(value);
    });
  }
  function isNewerUnread$factory_0() {
    return getPropertyCallableRef('isNewerUnread', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isNewerUnread_4iuz6x_k$();
    }, function (receiver, value) {
      return receiver.set_isNewerUnread_5txdmo_k$(value);
    });
  }
  function forceScrollToTop$factory() {
    return getPropertyCallableRef('forceScrollToTop', 1, KMutableProperty1, function (receiver) {
      return receiver.get_forceScrollToTop_763p5h_k$();
    }, function (receiver, value) {
      return receiver.set_forceScrollToTop_9osthy_k$(value);
    });
  }
  function forceScrollToTop$factory_0() {
    return getPropertyCallableRef('forceScrollToTop', 1, KMutableProperty1, function (receiver) {
      return receiver.get_forceScrollToTop_763p5h_k$();
    }, function (receiver, value) {
      return receiver.set_forceScrollToTop_9osthy_k$(value);
    });
  }
  function isLoading$factory() {
    return getPropertyCallableRef('isLoading', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isLoading_4hrqbt_k$();
    }, function (receiver, value) {
      return receiver.set_isLoading_r5ibvk_k$(value);
    });
  }
  function isLoading$factory_0() {
    return getPropertyCallableRef('isLoading', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isLoading_4hrqbt_k$();
    }, function (receiver, value) {
      return receiver.set_isLoading_r5ibvk_k$(value);
    });
  }
  function get_$stableprop_17() {
    return 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('features.text_chat.model.Message', this, 5);
    tmp0_serialDesc.addElement_5pzumi_k$('userHash', false);
    tmp0_serialDesc.addElement_5pzumi_k$('userName', false);
    tmp0_serialDesc.addElement_5pzumi_k$('text', false);
    tmp0_serialDesc.addElement_5pzumi_k$('createdAt', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lastModifiedAt', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), InstantIso8601Serializer_getInstance(), get_nullable(InstantIso8601Serializer_getInstance())];
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp11_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp11_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Message_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer).serialize_jk7ruf_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.userHash_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.userName_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.text_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), value.createdAt_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.lastModifiedAt_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), value.lastModifiedAt_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_jk7ruf_k$(encoder, value instanceof Message ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Message_init_$Init$(seen1, userHash, userName, text, createdAt, lastModifiedAt, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance().descriptor_1);
    }
    $this.userHash_1 = userHash;
    $this.userName_1 = userName;
    $this.text_1 = text;
    $this.createdAt_1 = createdAt;
    if (0 === (seen1 & 16))
      $this.lastModifiedAt_1 = null;
    else
      $this.lastModifiedAt_1 = lastModifiedAt;
    var tmp = $this;
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var i = tmp0_iterator.next_20eer_k$();
        if (i instanceof UserSession) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
    }
    var tmp$ret$1 = tmp$ret$0;
    tmp.isMine_1 = $this.userHash_1 === tmp$ret$1.get_userHash_ytaw5e_k$();
    $this.$stable_1 = 0;
    return $this;
  }
  function Message_init_$Create$(seen1, userHash, userName, text, createdAt, lastModifiedAt, serializationConstructorMarker) {
    return Message_init_$Init$(seen1, userHash, userName, text, createdAt, lastModifiedAt, serializationConstructorMarker, objectCreate(protoOf(Message)));
  }
  function get_$stableprop_18() {
    return 0;
  }
  function Message(userHash, userName, text, createdAt, lastModifiedAt, isMine) {
    Companion_getInstance_8();
    lastModifiedAt = lastModifiedAt === VOID ? null : lastModifiedAt;
    var tmp;
    if (isMine === VOID) {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (i instanceof UserSession) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      tmp = userHash === tmp$ret$0.get_userHash_ytaw5e_k$();
    } else {
      tmp = isMine;
    }
    isMine = tmp;
    this.userHash_1 = userHash;
    this.userName_1 = userName;
    this.text_1 = text;
    this.createdAt_1 = createdAt;
    this.lastModifiedAt_1 = lastModifiedAt;
    this.isMine_1 = isMine;
    this.$stable_1 = 0;
  }
  protoOf(Message).get_userHash_ytaw5e_k$ = function () {
    return this.userHash_1;
  };
  protoOf(Message).get_userName_ytepxb_k$ = function () {
    return this.userName_1;
  };
  protoOf(Message).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(Message).get_createdAt_ierzpu_k$ = function () {
    return this.createdAt_1;
  };
  protoOf(Message).get_lastModifiedAt_eex2at_k$ = function () {
    return this.lastModifiedAt_1;
  };
  protoOf(Message).get_isMine_ew25ra_k$ = function () {
    return this.isMine_1;
  };
  protoOf(Message).component1_7eebsc_k$ = function () {
    return this.userHash_1;
  };
  protoOf(Message).component2_7eebsb_k$ = function () {
    return this.userName_1;
  };
  protoOf(Message).component3_7eebsa_k$ = function () {
    return this.text_1;
  };
  protoOf(Message).component4_7eebs9_k$ = function () {
    return this.createdAt_1;
  };
  protoOf(Message).component5_7eebs8_k$ = function () {
    return this.lastModifiedAt_1;
  };
  protoOf(Message).component6_7eebs7_k$ = function () {
    return this.isMine_1;
  };
  protoOf(Message).copy_8k1end_k$ = function (userHash, userName, text, createdAt, lastModifiedAt, isMine) {
    return new Message(userHash, userName, text, createdAt, lastModifiedAt, isMine);
  };
  protoOf(Message).copy$default_zbdoq3_k$ = function (userHash, userName, text, createdAt, lastModifiedAt, isMine, $super) {
    userHash = userHash === VOID ? this.userHash_1 : userHash;
    userName = userName === VOID ? this.userName_1 : userName;
    text = text === VOID ? this.text_1 : text;
    createdAt = createdAt === VOID ? this.createdAt_1 : createdAt;
    lastModifiedAt = lastModifiedAt === VOID ? this.lastModifiedAt_1 : lastModifiedAt;
    isMine = isMine === VOID ? this.isMine_1 : isMine;
    return $super === VOID ? this.copy_8k1end_k$(userHash, userName, text, createdAt, lastModifiedAt, isMine) : $super.copy_8k1end_k$.call(this, userHash, userName, text, createdAt, lastModifiedAt, isMine);
  };
  protoOf(Message).toString = function () {
    return 'Message(userHash=' + this.userHash_1 + ', userName=' + this.userName_1 + ', text=' + this.text_1 + ', createdAt=' + this.createdAt_1 + ', lastModifiedAt=' + this.lastModifiedAt_1 + ', isMine=' + this.isMine_1 + ')';
  };
  protoOf(Message).hashCode = function () {
    var result = getStringHashCode(this.userHash_1);
    result = imul(result, 31) + getStringHashCode(this.userName_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.text_1) | 0;
    result = imul(result, 31) + this.createdAt_1.hashCode() | 0;
    result = imul(result, 31) + (this.lastModifiedAt_1 == null ? 0 : this.lastModifiedAt_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isMine_1) | 0;
    return result;
  };
  protoOf(Message).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Message))
      return false;
    var tmp0_other_with_cast = other instanceof Message ? other : THROW_CCE();
    if (!(this.userHash_1 === tmp0_other_with_cast.userHash_1))
      return false;
    if (!(this.userName_1 === tmp0_other_with_cast.userName_1))
      return false;
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!this.createdAt_1.equals(tmp0_other_with_cast.createdAt_1))
      return false;
    if (!equals(this.lastModifiedAt_1, tmp0_other_with_cast.lastModifiedAt_1))
      return false;
    if (!(this.isMine_1 === tmp0_other_with_cast.isMine_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).empty_bydp6p_k$ = function (error) {
    return new MessageList(emptyList(), false, error);
  };
  protoOf(Companion_0).empty$default_yx77wa_k$ = function (error, $super) {
    error = error === VOID ? null : error;
    return $super === VOID ? this.empty_bydp6p_k$(error) : $super.empty_bydp6p_k$.call(this, error);
  };
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_19() {
    return 8;
  }
  function MessageList(all, isOlderAvailable, error) {
    Companion_getInstance_9();
    error = error === VOID ? null : error;
    this.all_1 = all;
    this.isOlderAvailable_1 = isOlderAvailable;
    this.error_1 = error;
    this.$stable_1 = 8;
  }
  protoOf(MessageList).get_all_18j9hk_k$ = function () {
    return this.all_1;
  };
  protoOf(MessageList).get_isOlderAvailable_qt2aaw_k$ = function () {
    return this.isOlderAvailable_1;
  };
  protoOf(MessageList).get_error_iqzvfj_k$ = function () {
    return this.error_1;
  };
  protoOf(MessageList).component1_7eebsc_k$ = function () {
    return this.all_1;
  };
  protoOf(MessageList).component2_7eebsb_k$ = function () {
    return this.isOlderAvailable_1;
  };
  protoOf(MessageList).component3_7eebsa_k$ = function () {
    return this.error_1;
  };
  protoOf(MessageList).copy_jd58xk_k$ = function (all, isOlderAvailable, error) {
    return new MessageList(all, isOlderAvailable, error);
  };
  protoOf(MessageList).copy$default_yq659n_k$ = function (all, isOlderAvailable, error, $super) {
    all = all === VOID ? this.all_1 : all;
    isOlderAvailable = isOlderAvailable === VOID ? this.isOlderAvailable_1 : isOlderAvailable;
    error = error === VOID ? this.error_1 : error;
    return $super === VOID ? this.copy_jd58xk_k$(all, isOlderAvailable, error) : $super.copy_jd58xk_k$.call(this, all, isOlderAvailable, error);
  };
  protoOf(MessageList).toString = function () {
    return 'MessageList(all=' + this.all_1 + ', isOlderAvailable=' + this.isOlderAvailable_1 + ', error=' + this.error_1 + ')';
  };
  protoOf(MessageList).hashCode = function () {
    var result = hashCode(this.all_1);
    result = imul(result, 31) + getBooleanHashCode(this.isOlderAvailable_1) | 0;
    result = imul(result, 31) + (this.error_1 == null ? 0 : this.error_1.hashCode()) | 0;
    return result;
  };
  protoOf(MessageList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MessageList))
      return false;
    var tmp0_other_with_cast = other instanceof MessageList ? other : THROW_CCE();
    if (!equals(this.all_1, tmp0_other_with_cast.all_1))
      return false;
    if (!(this.isOlderAvailable_1 === tmp0_other_with_cast.isOlderAvailable_1))
      return false;
    if (!equals(this.error_1, tmp0_other_with_cast.error_1))
      return false;
    return true;
  };
  function get_$stableprop_20() {
    return 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('features.text_chat.model.NewMessage', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('userName', true);
    tmp0_serialDesc.addElement_5pzumi_k$('text', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return NewMessage_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).serialize_c7yyf5_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0)) {
      tmp = true;
    } else {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (i instanceof UserSession) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      var tmp$ret$1 = tmp$ret$0;
      tmp = !(value.userName_1 === tmp$ret$1.get_userName_ytepxb_k$());
    }
    if (tmp) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.userName_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.text_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.text_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_c7yyf5_k$(encoder, value instanceof NewMessage ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function NewMessage_init_$Init$(seen1, userName, text, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_0().descriptor_1);
    }
    if (0 === (seen1 & 1)) {
      var tmp = $this;
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (i instanceof UserSession) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      tmp.userName_1 = tmp$ret$0.get_userName_ytepxb_k$();
    } else
      $this.userName_1 = userName;
    if (0 === (seen1 & 2))
      $this.text_1 = '';
    else
      $this.text_1 = text;
    $this.validationError_1 = '' + getKClassFromExpression(Companion_getInstance_10()).get_simpleName_r6f8py_k$() + ' is not validated!';
    $this.$stable_1 = 0;
    return $this;
  }
  function NewMessage_init_$Create$(seen1, userName, text, serializationConstructorMarker) {
    return NewMessage_init_$Init$(seen1, userName, text, serializationConstructorMarker, objectCreate(protoOf(NewMessage)));
  }
  function get_$stableprop_21() {
    return 0;
  }
  function NewMessage(userName, text, validationError) {
    Companion_getInstance_10();
    var tmp;
    if (userName === VOID) {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (i instanceof UserSession) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      tmp = tmp$ret$0.get_userName_ytepxb_k$();
    } else {
      tmp = userName;
    }
    userName = tmp;
    text = text === VOID ? '' : text;
    validationError = validationError === VOID ? '' + getKClassFromExpression(Companion_getInstance_10()).get_simpleName_r6f8py_k$() + ' is not validated!' : validationError;
    this.userName_1 = userName;
    this.text_1 = text;
    this.validationError_1 = validationError;
    this.$stable_1 = 0;
  }
  protoOf(NewMessage).get_userName_ytepxb_k$ = function () {
    return this.userName_1;
  };
  protoOf(NewMessage).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(NewMessage).get_validationError_wuqxga_k$ = function () {
    return this.validationError_1;
  };
  protoOf(NewMessage).validate_ni6t4a_k$ = function () {
    var errs = '';
    if (isBlank(this.userName_1))
      errs = errs + '\nEnter your name';
    if (isBlank(this.text_1))
      errs = errs + '\nEnter message text';
    var tmp;
    if (isBlank(errs)) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = errs.substring(1);
    }
    return tmp;
  };
  protoOf(NewMessage).component1_7eebsc_k$ = function () {
    return this.userName_1;
  };
  protoOf(NewMessage).component2_7eebsb_k$ = function () {
    return this.text_1;
  };
  protoOf(NewMessage).component3_7eebsa_k$ = function () {
    return this.validationError_1;
  };
  protoOf(NewMessage).copy_fqvatu_k$ = function (userName, text, validationError) {
    return new NewMessage(userName, text, validationError);
  };
  protoOf(NewMessage).copy$default_yutjxp_k$ = function (userName, text, validationError, $super) {
    userName = userName === VOID ? this.userName_1 : userName;
    text = text === VOID ? this.text_1 : text;
    validationError = validationError === VOID ? this.validationError_1 : validationError;
    return $super === VOID ? this.copy_fqvatu_k$(userName, text, validationError) : $super.copy_fqvatu_k$.call(this, userName, text, validationError);
  };
  protoOf(NewMessage).toString = function () {
    return 'NewMessage(userName=' + this.userName_1 + ', text=' + this.text_1 + ', validationError=' + this.validationError_1 + ')';
  };
  protoOf(NewMessage).hashCode = function () {
    var result = getStringHashCode(this.userName_1);
    result = imul(result, 31) + getStringHashCode(this.text_1) | 0;
    result = imul(result, 31) + (this.validationError_1 == null ? 0 : getStringHashCode(this.validationError_1)) | 0;
    return result;
  };
  protoOf(NewMessage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NewMessage))
      return false;
    var tmp0_other_with_cast = other instanceof NewMessage ? other : THROW_CCE();
    if (!(this.userName_1 === tmp0_other_with_cast.userName_1))
      return false;
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!(this.validationError_1 == tmp0_other_with_cast.validationError_1))
      return false;
    return true;
  };
  function AbstractMessageRepository() {
  }
  function get_$stableprop_22() {
    return 0;
  }
  function $addCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($addCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.repository_1.addNewMessage_aeoktd_k$(this._this__u8e3s4__1.get_state_iypx7s_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var i = tmp0_iterator.next_20eer_k$();
                if (i instanceof UserSession) {
                  tmp$ret$0 = i;
                  break l$ret$1;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).get_simpleName_r6f8py_k$() + ' is not found in global DI');
            }
             while (false);
            tmp$ret$0.set_userName_6tcal3_k$(this._this__u8e3s4__1.get_state_iypx7s_k$().get_userName_ytepxb_k$());
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.messageListModel_1.fetchNewer_k2yfpg_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this._this__u8e3s4__1.set_state_2k1wxy_k$(new NewMessage());
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function NewMessageModel(messageListModel, repository) {
    var tmp;
    if (repository === VOID) {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (isInterface(i, AbstractMessageRepository)) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AbstractMessageRepository).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      tmp = tmp$ret$0;
    } else {
      tmp = repository;
    }
    repository = tmp;
    this.messageListModel_1 = messageListModel;
    this.repository_1 = repository;
    this.state$delegate_1 = mutableStateOf(new NewMessage());
    this.$stable_1 = 0;
  }
  protoOf(NewMessageModel).get_messageListModel_cn8b4j_k$ = function () {
    return this.messageListModel_1;
  };
  protoOf(NewMessageModel).get_repository_c37cur_k$ = function () {
    return this.repository_1;
  };
  protoOf(NewMessageModel).set_state_2k1wxy_k$ = function (_set____db54di) {
    var this_0 = this.state$delegate_1;
    state$factory();
    return this_0.set_value_v1vabv_k$(_set____db54di);
  };
  protoOf(NewMessageModel).get_state_iypx7s_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.state$delegate_1;
    state$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(NewMessageModel).setUserName_4t0c36_k$ = function (v) {
    this.set_state_2k1wxy_k$(this.get_state_iypx7s_k$().copy$default_yutjxp_k$(v));
  };
  protoOf(NewMessageModel).setText_kc4w4b_k$ = function (v) {
    this.set_state_2k1wxy_k$(this.get_state_iypx7s_k$().copy$default_yutjxp_k$(VOID, v));
  };
  protoOf(NewMessageModel).validate_ni6t4a_k$ = function () {
    var err = this.get_state_iypx7s_k$().validate_ni6t4a_k$();
    this.set_state_2k1wxy_k$(this.get_state_iypx7s_k$().copy$default_yutjxp_k$(VOID, VOID, err));
    return err;
  };
  protoOf(NewMessageModel).add_i1pys6_k$ = function ($completion) {
    var tmp = new $addCOROUTINE$5(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function state$factory() {
    return getPropertyCallableRef('state', 1, KMutableProperty1, function (receiver) {
      return receiver.get_state_iypx7s_k$();
    }, function (receiver, value) {
      return receiver.set_state_2k1wxy_k$(value);
    });
  }
  function state$factory_0() {
    return getPropertyCallableRef('state', 1, KMutableProperty1, function (receiver) {
      return receiver.get_state_iypx7s_k$();
    }, function (receiver, value) {
      return receiver.set_state_2k1wxy_k$(value);
    });
  }
  function ChatPage() {
    illegalDecoyCallException('ChatPage');
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ChatPageKt$lambda_1$lambda_ro3j2z($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(644840026, $changed, -1, 'ComposableSingletons$ChatPageKt.lambda-1.<anonymous> (ChatPage.kt:50)');
      }
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (i instanceof AppConfig) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      var tmp$ret$1 = tmp$ret$0;
      Text$composable(tmp$ret$1.get_appName_bv95lp_k$(), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ChatPageKt() {
    ComposableSingletons$ChatPageKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(644840026, false, ComposableSingletons$ChatPageKt$lambda_1$lambda_ro3j2z));
  }
  protoOf(ComposableSingletons$ChatPageKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$ChatPageKt_instance;
  function ComposableSingletons$ChatPageKt_getInstance() {
    if (ComposableSingletons$ChatPageKt_instance == null)
      new ComposableSingletons$ChatPageKt();
    return ComposableSingletons$ChatPageKt_instance;
  }
  function ChatPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(378206855);
    sourceInformation($composer_0, 'C(ChatPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(378206855, $changed, -1, 'ChatPage$composable (ChatPage.kt:26)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ChatPage$composable.<anonymous>' call
        var value = new ChatModel();
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var chatModel = tmp0;
      var tmp_1 = [get_LocalChatModel().provides_3agxel_k$(chatModel)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ChatPage$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1650778072, true, ChatPage$composable$lambda(chatModel));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ChatPage$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      CompositionLocalProvider$composable(tmp_1, tmp0_0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ChatPage$composable$lambda_0($changed));
    }
  }
  function ChatPage$composable$lambda$lambda($this$Div) {
    $this$Div.style_xwwy6r_k$(ChatPage$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ChatPage$composable$lambda$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.property_wcrait_k$('height', '100%');
    overflow($this$style, 'hidden');
    return Unit_getInstance();
  }
  function ChatPage$composable$lambda$lambda$lambda_0($this$Div) {
    $this$Div.style_xwwy6r_k$(ChatPage$composable$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ChatPage$composable$lambda$lambda$lambda$lambda($this$style) {
    padding($this$style, [get_px(16)]);
    backgroundColor($this$style, Color('#2196F3'));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    fontSize($this$style, get_px(20));
    fontWeight($this$style, '600');
    textAlign($this$style, 'center');
    $this$style.property_wcrait_k$('flex-shrink', '0');
    return Unit_getInstance();
  }
  function ChatPage$composable$lambda$lambda_0($chatModel) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(8800825, $changed, -1, 'ChatPage$composable.<anonymous>.<anonymous> (ChatPage.kt:39)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(1856957395);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'ChatPage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ChatPage$composable$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, ComposableSingletons$ChatPageKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        MessageListWidget$composable($chatModel.get_messageListModel_cn8b4j_k$(), $composer_0, 0);
        NewMessageForm$composable($chatModel.get_newMessageModel_81blc7_k$(), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ChatPage$composable$lambda($chatModel) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1650778072, $changed, -1, 'ChatPage$composable.<anonymous> (ChatPage.kt:30)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(1856957135);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'ChatPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = ChatPage$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ChatPage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 8800825, true, ChatPage$composable$lambda$lambda_0($chatModel));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'ChatPage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ChatPage$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      ChatPage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MessageListTile(message) {
    illegalDecoyCallException('MessageListTile');
  }
  function MessageListTile$composable(message, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1375339268);
    sourceInformation($composer_0, 'C(MessageListTile$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(message) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1375339268, $dirty, -1, 'features.text_chat.view.MessageListTile$composable (MessageListTile.kt:9)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(79151186);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(message);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>' call
        var value = MessageListTile$composable$lambda(message);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 554519066, true, MessageListTile$composable$lambda_0(message));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MessageListTile$composable$lambda_1(message, $changed));
    }
  }
  function MessageListTile$composable$lambda$lambda($message) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_4();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      var tmp;
      if ($message.get_isMine_ew25ra_k$()) {
        // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
        Companion_getInstance_5();
        // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = 'flex-end';
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
        Companion_getInstance_5();
        // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = 'flex-start';
      }
      alignItems($this$style, tmp);
      marginBottom($this$style, get_px(8));
      return Unit_getInstance();
    };
  }
  function MessageListTile$composable$lambda($message) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(MessageListTile$composable$lambda$lambda($message));
      return Unit_getInstance();
    };
  }
  function MessageListTile$composable$lambda$lambda_0($this$Div) {
    $this$Div.style_xwwy6r_k$(MessageListTile$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function MessageListTile$composable$lambda$lambda$lambda($this$style) {
    fontSize($this$style, get_px(12));
    color($this$style, Color('#666'));
    marginBottom($this$style, get_px(4));
    marginLeft($this$style, get_px(8));
    return Unit_getInstance();
  }
  function MessageListTile$composable$lambda$lambda_1($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(778027136, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous> (MessageListTile.kt:27)');
        }
        Text$composable($message.get_userName_ytepxb_k$(), $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda$lambda$lambda_0($message) {
    return function ($this$style) {
      maxWidth($this$style, get_percent(70));
      $this$style.property_wcrait_k$('padding', '12px 16px');
      $this$style.property_wcrait_k$('border-radius', '16px');
      var tmp;
      if ($message.get_isMine_ew25ra_k$()) {
        tmp = Color('#DCF8C6');
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Color.white' call
        Color_getInstance();
        tmp = Color('white');
      }
      backgroundColor($this$style, tmp);
      $this$style.property_wcrait_k$('box-shadow', '0 1px 2px rgba(0,0,0,0.1)');
      $this$style.property_wcrait_k$('word-wrap', 'break-word');
      return Unit_getInstance();
    };
  }
  function MessageListTile$composable$lambda$lambda_2($message) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(MessageListTile$composable$lambda$lambda$lambda_0($message));
      return Unit_getInstance();
    };
  }
  function MessageListTile$composable$lambda$lambda$lambda_1($this$Div) {
    $this$Div.style_xwwy6r_k$(MessageListTile$composable$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function MessageListTile$composable$lambda$lambda$lambda$lambda($this$style) {
    fontSize($this$style, get_px(15));
    color($this$style, Color('#000'));
    marginBottom($this$style, get_px(4));
    return Unit_getInstance();
  }
  function MessageListTile$composable$lambda$lambda$lambda_2($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1581520156, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous> (MessageListTile.kt:47)');
        }
        Text$composable($message.get_text_wouvsm_k$(), $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda$lambda$lambda_3($this$Div) {
    $this$Div.style_xwwy6r_k$(MessageListTile$composable$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function MessageListTile$composable$lambda$lambda$lambda$lambda_0($this$style) {
    fontSize($this$style, get_px(11));
    color($this$style, Color('#666'));
    textAlign($this$style, 'right');
    return Unit_getInstance();
  }
  function MessageListTile$composable$lambda$lambda$lambda_4($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2134167877, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous> (MessageListTile.kt:56)');
        }
        Text$composable(toHumanTime($message.get_createdAt_ierzpu_k$()), $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda$lambda_3($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1586304187, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous> (MessageListTile.kt:40)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(79152174);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = MessageListTile$composable$lambda$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 1581520156, true, MessageListTile$composable$lambda$lambda$lambda_2($message));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(79152416);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = MessageListTile$composable$lambda$lambda$lambda_3;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 2134167877, true, MessageListTile$composable$lambda$lambda$lambda_4($message));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_5(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda_0($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(554519066, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous> (MessageListTile.kt:18)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-954241310);
        if (!$message.get_isMine_ew25ra_k$()) {
          $composer_0.startReplaceableGroup_ip860b_k$(79151477);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_0;
          if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value = MessageListTile$composable$lambda$lambda_0;
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_2 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_2, 778027136, true, MessageListTile$composable$lambda$lambda_1($message));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_1.rememberedValue_4dg93v_k$();
          var tmp_3;
          if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
            $composer_1.updateRememberedValue_l1wh71_k$(value_0);
            tmp_3 = value_0;
          } else {
            tmp_3 = it_0;
          }
          var tmp_4 = tmp_3;
          var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_1.endReplaceableGroup_ern0ak_k$();
          Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        $composer_0.startReplaceableGroup_ip860b_k$(79151766);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changed_ga7h3f_k$($message);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = MessageListTile$composable$lambda$lambda_2($message);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 1586304187, true, MessageListTile$composable$lambda$lambda_3($message));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_1 ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_6(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda_1($message, $$changed) {
    return function ($composer, $force) {
      MessageListTile$composable($message, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MessageListWidget(model) {
    illegalDecoyCallException('MessageListWidget');
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MessageListWidgetKt$lambda_1$lambda_eloi67($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-332725969, $changed, -1, 'features.text_chat.view.ComposableSingletons$MessageListWidgetKt.lambda-1.<anonymous> (MessageListWidget.kt:147)');
      }
      Text$composable('No messages', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MessageListWidgetKt$lambda_2$lambda_rlt2qq($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1645838170, $changed, -1, 'features.text_chat.view.ComposableSingletons$MessageListWidgetKt.lambda-2.<anonymous> (MessageListWidget.kt:199)');
      }
      Text$composable('\u21D3', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MessageListWidgetKt() {
    ComposableSingletons$MessageListWidgetKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-332725969, false, ComposableSingletons$MessageListWidgetKt$lambda_1$lambda_eloi67));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1645838170, false, ComposableSingletons$MessageListWidgetKt$lambda_2$lambda_rlt2qq));
  }
  protoOf(ComposableSingletons$MessageListWidgetKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MessageListWidgetKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$MessageListWidgetKt_instance;
  function ComposableSingletons$MessageListWidgetKt_getInstance() {
    if (ComposableSingletons$MessageListWidgetKt_instance == null)
      new ComposableSingletons$MessageListWidgetKt();
    return ComposableSingletons$MessageListWidgetKt_instance;
  }
  function MessageListWidget$composable(model, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-636098429);
    sourceInformation($composer_0, 'C(MessageListWidget$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(model) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-636098429, $dirty, -1, 'features.text_chat.view.MessageListWidget$composable (MessageListWidget.kt:28)');
      }
      var list = model.get_list_wopuqv_k$();
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_1 = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = MessageListWidget$composable$lambda_7;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_3.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      var coroutineScope = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_4.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_0 = mutableStateOf(null);
        $composer_4.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_4.endReplaceableGroup_ern0ak_k$();
      var scrollArea$delegate = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_5, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_1 = mutableStateOf(null);
        $composer_5.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_5.endReplaceableGroup_ern0ak_k$();
      var topSentinel$delegate = tmp0_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_0;
      $composer_6.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_6.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_2 = mutableStateOf(true);
        $composer_6.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_3 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_6.endReplaceableGroup_ern0ak_k$();
      var isAtBottom$delegate = tmp0_3;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_7 = $composer_0;
      $composer_7.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_7, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_7.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false ? true : it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_3 = mutableStateOf(null);
        $composer_7.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_4 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_7.endReplaceableGroup_ern0ak_k$();
      var savedDistanceFromBottom$delegate = tmp0_4;
      $composer_0.startReplaceableGroup_ip860b_k$(-538333854);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(model);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_0.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid ? true : it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_4 = MessageListWidget$composable$slambda_0(model, null);
        this_0.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmpCache = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect$composable(Unit_getInstance(), tmpCache, $composer_0, 6);
      var tmp_11 = list.get_error_iqzvfj_k$();
      $composer_0.startReplaceableGroup_ip860b_k$(-538333626);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid_0 = $composer_0.changed_ga7h3f_k$(list);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_1.rememberedValue_4dg93v_k$();
      var tmp_12;
      if (invalid_0 ? true : it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_5 = MessageListWidget$composable$slambda_2(list, null);
        this_1.updateRememberedValue_l1wh71_k$(value_5);
        tmp_12 = value_5;
      } else {
        tmp_12 = it_5;
      }
      var tmp_13 = tmp_12;
      var tmpCache_0 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect$composable(tmp_11, tmpCache_0, $composer_0, 0);
      var tmp_14 = list.get_all_18j9hk_k$().get_size_woubt6_k$();
      $composer_0.startReplaceableGroup_ip860b_k$(-538333379);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid_1 = !!(!!(!!(!!($composer_0.changed_ga7h3f_k$(scrollArea$delegate) | $composer_0.changed_ga7h3f_k$(savedDistanceFromBottom$delegate)) | $composer_0.changed_ga7h3f_k$(list)) | $composer_0.changed_ga7h3f_k$(model)) | $composer_0.changed_ga7h3f_k$(isAtBottom$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = this_2.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (invalid_1 ? true : it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_6 = MessageListWidget$composable$slambda_4(list, model, scrollArea$delegate, savedDistanceFromBottom$delegate, isAtBottom$delegate, null);
        this_2.updateRememberedValue_l1wh71_k$(value_6);
        tmp_15 = value_6;
      } else {
        tmp_15 = it_6;
      }
      var tmp_16 = tmp_15;
      var tmpCache_1 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect$composable(tmp_14, tmpCache_1, $composer_0, 0);
      var tmp_17 = MessageListWidget$composable$lambda_1(topSentinel$delegate);
      var tmp_18 = list.get_isOlderAvailable_qt2aaw_k$();
      DisposableEffect$composable(tmp_17, tmp_18, MessageListWidget$composable$lambda_8(topSentinel$delegate, list, coroutineScope, scrollArea$delegate, savedDistanceFromBottom$delegate, model), $composer_0, 0);
      var tmp_19 = MessageListWidget$composable$lambda(scrollArea$delegate);
      $composer_0.startReplaceableGroup_ip860b_k$(-538331199);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid_2 = !!(!!($composer_0.changed_ga7h3f_k$(scrollArea$delegate) | $composer_0.changed_ga7h3f_k$(isAtBottom$delegate)) | $composer_0.changed_ga7h3f_k$(model));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = this_3.rememberedValue_4dg93v_k$();
      var tmp_20;
      if (invalid_2 ? true : it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_7 = MessageListWidget$composable$lambda_9(scrollArea$delegate, model, isAtBottom$delegate);
        this_3.updateRememberedValue_l1wh71_k$(value_7);
        tmp_20 = value_7;
      } else {
        tmp_20 = it_7;
      }
      var tmp_21 = tmp_20;
      var tmpCache_2 = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      DisposableEffect$composable_0(tmp_19, tmpCache_2, $composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-538330591);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      var invalid_3 = $composer_0.changed_ga7h3f_k$(scrollArea$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = this_4.rememberedValue_4dg93v_k$();
      var tmp_22;
      if (invalid_3 ? true : it_8 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_8 = MessageListWidget$composable$lambda_10(scrollArea$delegate);
        this_4.updateRememberedValue_l1wh71_k$(value_8);
        tmp_22 = value_8;
      } else {
        tmp_22 = it_8;
      }
      var tmp_23 = tmp_22;
      var tmpCache_3 = (tmp_23 == null ? true : !(tmp_23 == null)) ? tmp_23 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
      var tmp_24 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_24, 183460309, true, MessageListWidget$composable$lambda_11(list, topSentinel$delegate, model, scrollArea$delegate, isAtBottom$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_8 = $composer_0;
      $composer_8.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = $composer_8.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_8.rememberedValue_4dg93v_k$();
      var tmp_25;
      if (invalid_4 ? true : it_9 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>' call
        var value_9 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_8.updateRememberedValue_l1wh71_k$(value_9);
        tmp_25 = value_9;
      } else {
        tmp_25 = it_9;
      }
      var tmp_26 = tmp_25;
      var tmp0_5 = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
      $composer_8.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache_3, tmp0_5, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MessageListWidget$composable$lambda_12(model, $changed));
    }
  }
  function MessageListWidget$composable$lambda($scrollArea$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scrollArea', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scrollArea$delegate.get_value_j01efc_k$();
  }
  function MessageListWidget$composable$lambda_0($scrollArea$delegate, value) {
    getLocalDelegateReference('scrollArea', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scrollArea$delegate.set_value_v1vabv_k$(value);
  }
  function MessageListWidget$composable$lambda_1($topSentinel$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('topSentinel', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $topSentinel$delegate.get_value_j01efc_k$();
  }
  function MessageListWidget$composable$lambda_2($topSentinel$delegate, value) {
    getLocalDelegateReference('topSentinel', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $topSentinel$delegate.set_value_v1vabv_k$(value);
  }
  function MessageListWidget$composable$lambda_3($isAtBottom$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isAtBottom', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isAtBottom$delegate.get_value_j01efc_k$();
  }
  function MessageListWidget$composable$lambda_4($isAtBottom$delegate, value) {
    getLocalDelegateReference('isAtBottom', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isAtBottom$delegate.set_value_v1vabv_k$(value);
  }
  function MessageListWidget$composable$lambda_5($savedDistanceFromBottom$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('savedDistanceFromBottom', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $savedDistanceFromBottom$delegate.get_value_j01efc_k$();
  }
  function MessageListWidget$composable$lambda_6($savedDistanceFromBottom$delegate, value) {
    getLocalDelegateReference('savedDistanceFromBottom', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $savedDistanceFromBottom$delegate.set_value_v1vabv_k$(value);
  }
  function MessageListWidget$composable$lambda_7() {
    return EmptyCoroutineContext_getInstance();
  }
  function MessageListWidget$composable$slambda$slambda($model, resultContinuation) {
    this.$model_1 = $model;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MessageListWidget$composable$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var i = tmp0_iterator.next_20eer_k$();
                if (i instanceof AppConfig) {
                  tmp$ret$0 = i;
                  break l$ret$1;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
            }
             while (false);
            suspendResult = delay(tmp$ret$0.get_fetchRefreshPeriodMs_da0vin_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.$model_1.fetchNewer_k2yfpg_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MessageListWidget$composable$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MessageListWidget$composable$slambda$slambda(this.$model_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MessageListWidget$composable$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MessageListWidget$composable$slambda$slambda_0($model, resultContinuation) {
    var i = new MessageListWidget$composable$slambda$slambda($model, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MessageListWidget$composable$slambda($model, resultContinuation) {
    this.$model_1 = $model;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MessageListWidget$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$model_1.fetchTop_6u7ds4_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            launch(this.$this$LaunchedEffect_1, VOID, VOID, MessageListWidget$composable$slambda$slambda_0(this.$model_1, null));
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MessageListWidget$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new MessageListWidget$composable$slambda(this.$model_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(MessageListWidget$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MessageListWidget$composable$slambda_0($model, resultContinuation) {
    var i = new MessageListWidget$composable$slambda($model, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MessageListWidget$composable$slambda_1($list, resultContinuation) {
    this.$list_1 = $list;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MessageListWidget$composable$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (!(this.$list_1.get_error_iqzvfj_k$() == null)) {
            showErrorSnackBar(this.$list_1.get_error_iqzvfj_k$());
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MessageListWidget$composable$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new MessageListWidget$composable$slambda_1(this.$list_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(MessageListWidget$composable$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MessageListWidget$composable$slambda_2($list, resultContinuation) {
    var i = new MessageListWidget$composable$slambda_1($list, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MessageListWidget$composable$slambda_3($list, $model, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $isAtBottom$delegate, resultContinuation) {
    this.$list_1 = $list;
    this.$model_1 = $model;
    this.$scrollArea$delegate_1 = $scrollArea$delegate;
    this.$savedDistanceFromBottom$delegate_1 = $savedDistanceFromBottom$delegate;
    this.$isAtBottom$delegate_1 = $isAtBottom$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$slambda_3).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MessageListWidget$composable$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_safe_receiver = MessageListWidget$composable$lambda(this.$scrollArea$delegate_1);
          if (tmp0_safe_receiver == null)
            null;
          else {
            if (!(MessageListWidget$composable$lambda_5(this.$savedDistanceFromBottom$delegate_1) == null)) {
              var scrollTop = (tmp0_safe_receiver.scrollHeight - tmp0_safe_receiver.clientHeight | 0) - ensureNotNull(MessageListWidget$composable$lambda_5(this.$savedDistanceFromBottom$delegate_1));
              if (scrollTop > 0.0) {
                tmp0_safe_receiver.scrollTop = scrollTop;
              }
              MessageListWidget$composable$lambda_6(this.$savedDistanceFromBottom$delegate_1, null);
            } else {
              var tmp_0;
              if (!this.$list_1.get_all_18j9hk_k$().isEmpty_y1axqb_k$()) {
                tmp_0 = this.$model_1.get_forceScrollToTop_763p5h_k$() ? true : MessageListWidget$composable$lambda_3(this.$isAtBottom$delegate_1);
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                tmp0_safe_receiver.scrollTop = tmp0_safe_receiver.scrollHeight;
              }
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MessageListWidget$composable$slambda_3).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new MessageListWidget$composable$slambda_3(this.$list_1, this.$model_1, this.$scrollArea$delegate_1, this.$savedDistanceFromBottom$delegate_1, this.$isAtBottom$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(MessageListWidget$composable$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MessageListWidget$composable$slambda_4($list, $model, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $isAtBottom$delegate, resultContinuation) {
    var i = new MessageListWidget$composable$slambda_3($list, $model, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $isAtBottom$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>' call
  };
  function MessageListWidget$composable$lambda$lambda$slambda($model, resultContinuation) {
    this.$model_1 = $model;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$model_1.fetchOlder_lksf31_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MessageListWidget$composable$lambda$lambda$slambda(this.$model_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MessageListWidget$composable$lambda$lambda$slambda_0($model, resultContinuation) {
    var i = new MessageListWidget$composable$lambda$lambda$slambda($model, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MessageListWidget$composable$lambda$lambda($list, $coroutineScope, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $model) {
    return function (it) {
      var tmp;
      if ($list.get_isOlderAvailable_qt2aaw_k$()) {
        console.log('Top sentinel visible, loading next batch...');
        var tmp0_safe_receiver = MessageListWidget$composable$lambda($scrollArea$delegate);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          MessageListWidget$composable$lambda_6($savedDistanceFromBottom$delegate, tmp0_safe_receiver.scrollHeight - tmp0_safe_receiver.scrollTop - tmp0_safe_receiver.clientHeight);
        }
        launch($coroutineScope, VOID, VOID, MessageListWidget$composable$lambda$lambda$slambda_0($model, null));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0($sentinel, $handleVisible, $observer) {
    this.$sentinel_1 = $sentinel;
    this.$handleVisible_1 = $handleVisible;
    this.$observer_1 = $observer;
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3nnxhr_k$ = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>' call
    this.$sentinel_1.removeEventListener('sentinelVisible', this.$handleVisible_1);
    this.$observer_1.disconnect();
  };
  function MessageListWidget$composable$lambda_8($topSentinel$delegate, $list, $coroutineScope, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $model) {
    return function ($this$DisposableEffect) {
      var tmp0_elvis_lhs = MessageListWidget$composable$lambda_1($topSentinel$delegate);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
        return new _no_name_provided__qut3iv();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var sentinel = tmp;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            sentinel.dispatchEvent(new CustomEvent('sentinelVisible'));
          }
        });
      }, {threshold: 0.1});
      var handleVisible = MessageListWidget$composable$lambda$lambda($list, $coroutineScope, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $model);
      sentinel.addEventListener('sentinelVisible', handleVisible);
      observer.observe(sentinel);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0(sentinel, handleVisible, observer);
    };
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).dispose_3nnxhr_k$ = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
  };
  function MessageListWidget$composable$lambda$lambda_0($area, $model, $isAtBottom$delegate) {
    return function (it) {
      var distanceFromBottom = $area.scrollHeight - $area.scrollTop - $area.clientHeight;
      MessageListWidget$composable$lambda_4($isAtBottom$delegate, distanceFromBottom < 50.0);
      var tmp;
      if (MessageListWidget$composable$lambda_3($isAtBottom$delegate)) {
        $model.set_isNewerUnread_5txdmo_k$(false);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_2($area, $handleScroll) {
    this.$area_1 = $area;
    this.$handleScroll_1 = $handleScroll;
  }
  protoOf(_no_name_provided__qut3iv_2).dispose_3nnxhr_k$ = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.$area_1.removeEventListener('scroll', this.$handleScroll_1);
  };
  function MessageListWidget$composable$lambda_9($scrollArea$delegate, $model, $isAtBottom$delegate) {
    return function ($this$DisposableEffect) {
      var tmp0_elvis_lhs = MessageListWidget$composable$lambda($scrollArea$delegate);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
        return new _no_name_provided__qut3iv_1();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var area = tmp;
      var handleScroll = MessageListWidget$composable$lambda$lambda_0(area, $model, $isAtBottom$delegate);
      area.addEventListener('scroll', handleScroll);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_2(area, handleScroll);
    };
  }
  function MessageListWidget$composable$lambda$lambda_1($this$style) {
    $this$style.property_wcrait_k$('position', 'relative');
    flex($this$style, 1);
    overflowY($this$style, 'auto');
    padding($this$style, [get_px(16)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.property_wcrait_k$('gap', '12px');
    return Unit_getInstance();
  }
  function _no_name_provided__qut3iv_3() {
  }
  protoOf(_no_name_provided__qut3iv_3).dispose_3nnxhr_k$ = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function MessageListWidget$composable$lambda$lambda_2($scrollArea$delegate) {
    return function ($this$ref, e) {
      MessageListWidget$composable$lambda_0($scrollArea$delegate, e);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_3();
    };
  }
  function MessageListWidget$composable$lambda_10($scrollArea$delegate) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(MessageListWidget$composable$lambda$lambda_1);
      $this$Div.ref_o4g25g_k$(MessageListWidget$composable$lambda$lambda_2($scrollArea$delegate));
      return Unit_getInstance();
    };
  }
  function MessageListWidget$composable$lambda$lambda_3($this$Div) {
    $this$Div.style_xwwy6r_k$(MessageListWidget$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function MessageListWidget$composable$lambda$lambda$lambda($this$style) {
    textAlign($this$style, 'center');
    color($this$style, Color('#999'));
    marginTop($this$style, get_px(32));
    return Unit_getInstance();
  }
  function MessageListWidget$composable$lambda$lambda$lambda_0($this$style) {
    $this$style.property_wcrait_k$('height', '1px');
    $this$style.property_wcrait_k$('width', '100%');
    return Unit_getInstance();
  }
  function _no_name_provided__qut3iv_4() {
  }
  protoOf(_no_name_provided__qut3iv_4).dispose_3nnxhr_k$ = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function MessageListWidget$composable$lambda$lambda$lambda_1($topSentinel$delegate) {
    return function ($this$ref, e) {
      MessageListWidget$composable$lambda_2($topSentinel$delegate, e);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_4();
    };
  }
  function MessageListWidget$composable$lambda$lambda_4($topSentinel$delegate) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(MessageListWidget$composable$lambda$lambda$lambda_0);
      $this$Div.ref_o4g25g_k$(MessageListWidget$composable$lambda$lambda$lambda_1($topSentinel$delegate));
      return Unit_getInstance();
    };
  }
  function MessageListWidget$composable$lambda$lambda$lambda_2($this$style) {
    width($this$style, get_px(50));
    height($this$style, get_px(50));
    $this$style.property_wcrait_k$('min-width', '50px');
    $this$style.property_wcrait_k$('min-height', '50px');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Sticky' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    position($this$style, 'sticky');
    $this$style.property_wcrait_k$('bottom', '0px');
    $this$style.property_wcrait_k$('left', 'calc(100% - 50px)');
    $this$style.property_wcrait_k$('margin-top', 'auto');
    $this$style.property_wcrait_k$('border-radius', '50%');
    $this$style.property_wcrait_k$('background-color', '#007bff');
    $this$style.property_wcrait_k$('box-shadow', '0 2px 8px rgba(0,0,0,0.2)');
    $this$style.property_wcrait_k$('cursor', 'pointer');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    $this$style.property_wcrait_k$('align-items', 'center');
    $this$style.property_wcrait_k$('justify-content', 'center');
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$8 = Color('white');
    color($this$style, tmp$ret$8);
    $this$style.property_wcrait_k$('font-size', '24px');
    $this$style.property_wcrait_k$('transition', 'all 0.2s');
    $this$style.property_wcrait_k$('z-index', '100');
    $this$style.property_wcrait_k$('pointer-events', 'auto');
    $this$style.property_wcrait_k$('flex-shrink', '0');
    return Unit_getInstance();
  }
  function MessageListWidget$composable$lambda$lambda$lambda_3($scrollArea$delegate) {
    return function (it) {
      var tmp0_safe_receiver = MessageListWidget$composable$lambda($scrollArea$delegate);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.scrollTop = tmp0_safe_receiver.scrollHeight;
      }
      return Unit_getInstance();
    };
  }
  function MessageListWidget$composable$lambda$lambda_5($scrollArea$delegate) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(MessageListWidget$composable$lambda$lambda$lambda_2);
      $this$Div.onClick_q9cds6_k$(MessageListWidget$composable$lambda$lambda$lambda_3($scrollArea$delegate));
      return Unit_getInstance();
    };
  }
  function MessageListWidget$composable$lambda_11($list, $topSentinel$delegate, $model, $scrollArea$delegate, $isAtBottom$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(183460309, $changed, -1, 'features.text_chat.view.MessageListWidget$composable.<anonymous> (MessageListWidget.kt:139)');
        }
        if ($list.get_all_18j9hk_k$().isEmpty_y1axqb_k$()) {
          $composer_0.startReplaceableGroup_ip860b_k$(826361217);
          $composer_0.startReplaceableGroup_ip860b_k$(-538330177);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_0;
          if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value = MessageListWidget$composable$lambda$lambda_3;
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          Div$composable(tmpCache, ComposableSingletons$MessageListWidgetKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(826361479);
          $composer_0.startReplaceableGroup_ip860b_k$(-538329843);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_0.changed_ga7h3f_k$($topSentinel$delegate);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_2;
          if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = MessageListWidget$composable$lambda$lambda_4($topSentinel$delegate);
            $composer_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp_2 = value_0;
          } else {
            tmp_2 = it_0;
          }
          var tmp_3 = tmp_2;
          var tmpCache_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          Div$composable(tmpCache_0, null, $composer_0, 0, 2);
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = reversed($list.get_all_18j9hk_k$()).iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
            MessageListTile$composable(element, $composer_0, 0);
          }
          $composer_0.endReplaceableGroup_ern0ak_k$();
        }
        if ($model.get_isNewerUnread_4iuz6x_k$() ? !MessageListWidget$composable$lambda_3($isAtBottom$delegate) : false) {
          $composer_0.startReplaceableGroup_ip860b_k$(-538329329);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = $composer_0.changed_ga7h3f_k$($scrollArea$delegate);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_4;
          if (invalid_0 ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = MessageListWidget$composable$lambda$lambda_5($scrollArea$delegate);
            $composer_0.updateRememberedValue_l1wh71_k$(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmpCache_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          Div$composable(tmpCache_1, ComposableSingletons$MessageListWidgetKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MessageListWidget$composable$lambda_12($model, $$changed) {
    return function ($composer, $force) {
      MessageListWidget$composable($model, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NewMessageForm(model) {
    illegalDecoyCallException('NewMessageForm');
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NewMessageFormKt$lambda_1$lambda_65i0ch($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(131405154, $changed, -1, 'features.text_chat.view.ComposableSingletons$NewMessageFormKt.lambda-1.<anonymous> (NewMessageForm.kt:154)');
      }
      Text$composable('\u27A4', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NewMessageFormKt() {
    ComposableSingletons$NewMessageFormKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(131405154, false, ComposableSingletons$NewMessageFormKt$lambda_1$lambda_65i0ch));
  }
  protoOf(ComposableSingletons$NewMessageFormKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$NewMessageFormKt_instance;
  function ComposableSingletons$NewMessageFormKt_getInstance() {
    if (ComposableSingletons$NewMessageFormKt_instance == null)
      new ComposableSingletons$NewMessageFormKt();
    return ComposableSingletons$NewMessageFormKt_instance;
  }
  function NewMessageForm$composable(model, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-403958327);
    sourceInformation($composer_0, 'C(NewMessageForm$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(model) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-403958327, $dirty, -1, 'features.text_chat.view.NewMessageForm$composable (NewMessageForm.kt:38)');
      }
      var newMessage = model.get_state_iypx7s_k$();
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_1 = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = NewMessageForm$composable$lambda_1;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_3.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      var scope = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_4.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>' call
        var value_0 = mutableStateOf(null);
        $composer_4.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_4.endReplaceableGroup_ern0ak_k$();
      var textAreaElement$delegate = tmp0_1;
      var validateAndSend = NewMessageForm$composable$lambda_2(scope, newMessage, model, textAreaElement$delegate);
      $composer_0.startReplaceableGroup_ip860b_k$(182465159);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>' call
        var value_1 = NewMessageForm$composable$lambda_3;
        this_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmpCache = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, -990907833, true, NewMessageForm$composable$lambda_4(newMessage, model, textAreaElement$delegate, validateAndSend));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_5.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_5.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp0_2 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_5.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, tmp0_2, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NewMessageForm$composable$lambda_5(model, $changed));
    }
  }
  function NewMessageForm$composable$lambda($textAreaElement$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('textAreaElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $textAreaElement$delegate.get_value_j01efc_k$();
  }
  function NewMessageForm$composable$lambda_0($textAreaElement$delegate, value) {
    getLocalDelegateReference('textAreaElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $textAreaElement$delegate.set_value_v1vabv_k$(value);
  }
  function NewMessageForm$composable$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function NewMessageForm$composable$lambda$slambda($newMessage, $model, $textAreaElement$delegate, resultContinuation) {
    this.$newMessage_1 = $newMessage;
    this.$model_1 = $model;
    this.$textAreaElement$delegate_1 = $textAreaElement$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NewMessageForm$composable$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NewMessageForm$composable$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NewMessageForm$composable$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.errors0__1 = this.$newMessage_1.validate_ni6t4a_k$();
            if (!(this.errors0__1 == null)) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_exceptionState_fex74n_k$(2);
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$model_1.add_i1pys6_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = NewMessageForm$composable$lambda(this.$textAreaElement$delegate_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.style;
            if (tmp1_safe_receiver != null) {
              tmp1_safe_receiver.height = '44px';
            }

            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var errorInfo = get_log().error$default_p5m9yz_k$(e);
              showErrorSnackBar(errorInfo);
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(NewMessageForm$composable$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new NewMessageForm$composable$lambda$slambda(this.$newMessage_1, this.$model_1, this.$textAreaElement$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(NewMessageForm$composable$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function NewMessageForm$composable$lambda$slambda_0($newMessage, $model, $textAreaElement$delegate, resultContinuation) {
    var i = new NewMessageForm$composable$lambda$slambda($newMessage, $model, $textAreaElement$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NewMessageForm$composable$lambda_2($scope, $newMessage, $model, $textAreaElement$delegate) {
    return function () {
      return launch($scope, VOID, VOID, NewMessageForm$composable$lambda$slambda_0($newMessage, $model, $textAreaElement$delegate, null));
    };
  }
  function NewMessageForm$composable$lambda_3($this$Div) {
    $this$Div.style_xwwy6r_k$(NewMessageForm$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function NewMessageForm$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$0 = Color('white');
    backgroundColor($this$style, tmp$ret$0);
    $this$style.property_wcrait_k$('border-top', '1px solid #e0e0e0');
    padding($this$style, [get_px(12)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.property_wcrait_k$('gap', '8px');
    $this$style.property_wcrait_k$('flex-shrink', '0');
    return Unit_getInstance();
  }
  function NewMessageForm$composable$lambda$lambda$lambda($model) {
    return function (event) {
      $model.setUserName_4t0c36_k$(event.get_target_juba8q_k$().value);
      return Unit_getInstance();
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda_0($this$style) {
    padding($this$style, [get_px(12)]);
    $this$style.property_wcrait_k$('border', '1px solid #ddd');
    $this$style.property_wcrait_k$('border-radius', '8px');
    fontSize($this$style, get_px(14));
    width($this$style, get_percent(100));
    $this$style.property_wcrait_k$('box-sizing', 'border-box');
    return Unit_getInstance();
  }
  function NewMessageForm$composable$lambda$lambda_0($newMessage, $model) {
    return function ($this$Input) {
      $this$Input.value_hphtnt_k$($newMessage.get_userName_ytepxb_k$());
      placeholder($this$Input, 'Your name');
      $this$Input.onInput_qzb0am_k$(NewMessageForm$composable$lambda$lambda$lambda($model));
      $this$Input.style_xwwy6r_k$(NewMessageForm$composable$lambda$lambda$lambda_0);
      return Unit_getInstance();
    };
  }
  function NewMessageForm$composable$lambda$lambda_1($this$Div) {
    $this$Div.style_xwwy6r_k$(NewMessageForm$composable$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function NewMessageForm$composable$lambda$lambda$lambda_1($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    $this$style.property_wcrait_k$('gap', '8px');
    return Unit_getInstance();
  }
  function _no_name_provided__qut3iv_5() {
  }
  protoOf(_no_name_provided__qut3iv_5).dispose_3nnxhr_k$ = function () {
    // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function NewMessageForm$composable$lambda$lambda$lambda$lambda($textAreaElement$delegate) {
    return function ($this$ref, element) {
      NewMessageForm$composable$lambda_0($textAreaElement$delegate, element);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_5();
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_0($model) {
    return function (event) {
      var target = event.get_target_juba8q_k$();
      $model.setText_kc4w4b_k$(target.value);
      target.style.height = 'auto';
      var scrollHeight = target.scrollHeight;
      var lineHeight = 20;
      var maxHeight = imul(lineHeight, 5) + 24 | 0;
      var tmp = target.style;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp.height = '' + Math.min(scrollHeight, maxHeight) + 'px';
      return Unit_getInstance();
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_1($validateAndSend) {
    return function (event) {
      var tmp;
      if (event.get_key_18j28a_k$() === 'Enter' ? !event.get_shiftKey_ujdkqu_k$() : false) {
        event.preventDefault_xs6po9_k$();
        $validateAndSend();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_2($this$style) {
    $this$style.property_wcrait_k$('flex', '1');
    padding($this$style, [get_px(12)]);
    $this$style.property_wcrait_k$('border', '1px solid #ddd');
    $this$style.property_wcrait_k$('border-radius', '8px');
    fontSize($this$style, get_px(14));
    $this$style.property_wcrait_k$('resize', 'none');
    $this$style.property_wcrait_k$('overflow-y', 'auto');
    $this$style.property_wcrait_k$('min-height', '44px');
    $this$style.property_wcrait_k$('max-height', '124px');
    $this$style.property_wcrait_k$('line-height', '20px');
    $this$style.property_wcrait_k$('font-family', 'inherit');
    return Unit_getInstance();
  }
  function NewMessageForm$composable$lambda$lambda$lambda_2($newMessage, $textAreaElement$delegate, $model, $validateAndSend) {
    return function ($this$TextArea) {
      $this$TextArea.value_hphtnt_k$($newMessage.get_text_wouvsm_k$());
      placeholder_0($this$TextArea, 'Enter message text...');
      rows($this$TextArea, 1);
      $this$TextArea.ref_e2flww_k$(NewMessageForm$composable$lambda$lambda$lambda$lambda($textAreaElement$delegate));
      $this$TextArea.onInput_cld1rf_k$(NewMessageForm$composable$lambda$lambda$lambda$lambda_0($model));
      $this$TextArea.onKeyDown_2pa1il_k$(NewMessageForm$composable$lambda$lambda$lambda$lambda_1($validateAndSend));
      $this$TextArea.style_xwwy6r_k$(NewMessageForm$composable$lambda$lambda$lambda$lambda_2);
      return Unit_getInstance();
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_3($validateAndSend) {
    return function (it) {
      $validateAndSend();
      return Unit_getInstance();
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_4($newMessage) {
    return function ($this$style) {
      $this$style.property_wcrait_k$('padding', '12px 24px');
      backgroundColor($this$style, $newMessage.get_validationError_wuqxga_k$() == null ? Color('#2196F3') : Color('#ccc'));
      // Inline function 'org.jetbrains.compose.web.css.Color.white' call
      Color_getInstance();
      var tmp$ret$0 = Color('white');
      color($this$style, tmp$ret$0);
      $this$style.property_wcrait_k$('border', '0');
      $this$style.property_wcrait_k$('border-radius', '8px');
      fontSize($this$style, get_px(14));
      $this$style.property_wcrait_k$('font-weight', '600');
      return Unit_getInstance();
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda_3($validateAndSend, $newMessage) {
    return function ($this$Button) {
      $this$Button.onClick_q9cds6_k$(NewMessageForm$composable$lambda$lambda$lambda$lambda_3($validateAndSend));
      $this$Button.style_xwwy6r_k$(NewMessageForm$composable$lambda$lambda$lambda$lambda_4($newMessage));
      return Unit_getInstance();
    };
  }
  function NewMessageForm$composable$lambda$lambda_2($newMessage, $textAreaElement$delegate, $model, $validateAndSend) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1766096856, $changed, -1, 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous> (NewMessageForm.kt:95)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(182466212);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!(!!($composer_0.changed_ga7h3f_k$($newMessage) | $composer_0.changed_ga7h3f_k$($textAreaElement$delegate)) | $composer_0.changed_ga7h3f_k$($model)) | $composer_0.changedInstance_s1wkiy_k$($validateAndSend));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = NewMessageForm$composable$lambda$lambda$lambda_2($newMessage, $textAreaElement$delegate, $model, $validateAndSend);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        TextArea$composable(null, tmpCache, $composer_0, 0, 1);
        $composer_0.startReplaceableGroup_ip860b_k$(182467836);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.changedInstance_s1wkiy_k$($validateAndSend) | $composer_0.changed_ga7h3f_k$($newMessage));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = NewMessageForm$composable$lambda$lambda$lambda_3($validateAndSend, $newMessage);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmpCache_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Button$composable(tmpCache_0, ComposableSingletons$NewMessageFormKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NewMessageForm$composable$lambda_4($newMessage, $model, $textAreaElement$delegate, $validateAndSend) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-990907833, $changed, -1, 'features.text_chat.view.NewMessageForm$composable.<anonymous> (NewMessageForm.kt:72)');
        }
        var tmp_0 = Text_getInstance();
        $composer_0.startReplaceableGroup_ip860b_k$(182465513);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changed_ga7h3f_k$($newMessage) | $composer_0.changed_ga7h3f_k$($model));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = NewMessageForm$composable$lambda$lambda_0($newMessage, $model);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Input$composable(tmp_0, tmpCache, $composer_0, 6);
        $composer_0.startReplaceableGroup_ip860b_k$(182466060);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = NewMessageForm$composable$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmpCache_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, -1766096856, true, NewMessageForm$composable$lambda$lambda_2($newMessage, $textAreaElement$delegate, $model, $validateAndSend));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_12(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, tmp0, $composer_0, 48, 0);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NewMessageForm$composable$lambda_5($model, $$changed) {
    return function ($composer, $force) {
      NewMessageForm$composable($model, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EmptyPage(title) {
    illegalDecoyCallException('EmptyPage');
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$EmptyPageKt$lambda_1$lambda_5p8566($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-283855530, $changed, -1, 'ComposableSingletons$EmptyPageKt.lambda-1.<anonymous> (EmptyPage.kt:40)');
      }
      Text$composable('\u042D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u0430', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$EmptyPageKt() {
    ComposableSingletons$EmptyPageKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-283855530, false, ComposableSingletons$EmptyPageKt$lambda_1$lambda_5p8566));
  }
  protoOf(ComposableSingletons$EmptyPageKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$EmptyPageKt_instance;
  function ComposableSingletons$EmptyPageKt_getInstance() {
    if (ComposableSingletons$EmptyPageKt_instance == null)
      new ComposableSingletons$EmptyPageKt();
    return ComposableSingletons$EmptyPageKt_instance;
  }
  function EmptyPage$composable(title, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(434379590);
    sourceInformation($composer_0, 'C(EmptyPage$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(434379590, $dirty, -1, 'EmptyPage$composable (EmptyPage.kt:6)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-868727742);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'EmptyPage$composable.<anonymous>' call
        var value = EmptyPage$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'EmptyPage$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -99265332, true, EmptyPage$composable$lambda_0(title));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(EmptyPage$composable$lambda_1(title, $changed));
    }
  }
  function EmptyPage$composable$lambda($this$Div) {
    $this$Div.style_xwwy6r_k$(EmptyPage$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function EmptyPage$composable$lambda$lambda($this$style) {
    height($this$style, get_percent(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    flex($this$style, 1);
    return Unit_getInstance();
  }
  function EmptyPage$composable$lambda$lambda_0($this$Div) {
    $this$Div.style_xwwy6r_k$(EmptyPage$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function EmptyPage$composable$lambda$lambda$lambda($this$style) {
    padding($this$style, [get_px(16)]);
    backgroundColor($this$style, Color('#2196F3'));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    fontSize($this$style, get_px(20));
    fontWeight($this$style, '600');
    textAlign($this$style, 'center');
    return Unit_getInstance();
  }
  function EmptyPage$composable$lambda$lambda_1($title) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1741242579, $changed, -1, 'EmptyPage$composable.<anonymous>.<anonymous> (EmptyPage.kt:26)');
        }
        Text$composable($title, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function EmptyPage$composable$lambda$lambda_2($this$Div) {
    $this$Div.style_xwwy6r_k$(EmptyPage$composable$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function EmptyPage$composable$lambda$lambda$lambda_0($this$style) {
    flex($this$style, 1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    color($this$style, Color('#999'));
    fontSize($this$style, get_px(16));
    return Unit_getInstance();
  }
  function EmptyPage$composable$lambda_0($title) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-99265332, $changed, -1, 'EmptyPage$composable.<anonymous> (EmptyPage.kt:16)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-868727533);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = EmptyPage$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1741242579, true, EmptyPage$composable$lambda$lambda_1($title));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-868727192);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = EmptyPage$composable$lambda$lambda_2;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, ComposableSingletons$EmptyPageKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function EmptyPage$composable$lambda_1($title, $$changed) {
    return function ($composer, $force) {
      EmptyPage$composable($title, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_snackBarState() {
    _init_properties_ErrorWidgets_kt__isina1();
    return snackBarState;
  }
  var snackBarState;
  function ErrorWidget(errorInfo) {
    _init_properties_ErrorWidgets_kt__isina1();
    illegalDecoyCallException('ErrorWidget');
  }
  function showErrorSnackBar(errorInfo) {
    _init_properties_ErrorWidgets_kt__isina1();
    get_snackBarState().set_value_v1vabv_k$(errorInfo);
  }
  function SnackBarHost() {
    _init_properties_ErrorWidgets_kt__isina1();
    illegalDecoyCallException('SnackBarHost');
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ErrorWidgetsKt$lambda_1$lambda_arahlx($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-227956946, $changed, -1, 'view.ComposableSingletons$ErrorWidgetsKt.lambda-1.<anonymous> (ErrorWidgets.kt:49)');
      }
      Text$composable('\u26A0\uFE0F', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ErrorWidgetsKt$lambda_2$lambda_i2bzga($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(384073164, $changed, -1, 'view.ComposableSingletons$ErrorWidgetsKt.lambda-2.<anonymous> (ErrorWidgets.kt:162)');
      }
      Text$composable('\u26A0\uFE0F', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ErrorWidgetsKt() {
    ComposableSingletons$ErrorWidgetsKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-227956946, false, ComposableSingletons$ErrorWidgetsKt$lambda_1$lambda_arahlx));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(384073164, false, ComposableSingletons$ErrorWidgetsKt$lambda_2$lambda_i2bzga));
  }
  protoOf(ComposableSingletons$ErrorWidgetsKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ErrorWidgetsKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$ErrorWidgetsKt_instance;
  function ComposableSingletons$ErrorWidgetsKt_getInstance() {
    if (ComposableSingletons$ErrorWidgetsKt_instance == null)
      new ComposableSingletons$ErrorWidgetsKt();
    return ComposableSingletons$ErrorWidgetsKt_instance;
  }
  function ErrorWidget$composable(errorInfo, $composer, $changed) {
    _init_properties_ErrorWidgets_kt__isina1();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1051885405);
    sourceInformation($composer_0, 'C(ErrorWidget$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(errorInfo) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1051885405, $dirty, -1, 'view.ErrorWidget$composable (ErrorWidgets.kt:16)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(469040024);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.ErrorWidget$composable.<anonymous>' call
        var value = ErrorWidget$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.ErrorWidget$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 713376274, true, ErrorWidget$composable$lambda_0(errorInfo));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ErrorWidget$composable$lambda_1(errorInfo, $changed));
    }
  }
  function SnackBarHost$composable($composer, $changed) {
    _init_properties_ErrorWidgets_kt__isina1();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(759070614);
    sourceInformation($composer_0, 'C(SnackBarHost$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(759070614, $changed, -1, 'view.SnackBarHost$composable (ErrorWidgets.kt:90)');
      }
      var errorInfo = get_snackBarState().get_value_j01efc_k$();
      if (!(errorInfo == null)) {
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value = mutableStateOf(100);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var offsetY$delegate = tmp0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_0 = mutableStateOf(false);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        var isDragging$delegate = tmp0_0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_ip860b_k$(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_1 = mutableStateOf(0);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp0_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_3.endReplaceableGroup_ern0ak_k$();
        var startY$delegate = tmp0_1;
        $composer_0.startReplaceableGroup_ip860b_k$(469042612);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        var invalid = $composer_0.changed_ga7h3f_k$(offsetY$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = this_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_2 = SnackBarHost$composable$slambda_0(offsetY$delegate, null);
          this_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmpCache = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        LaunchedEffect$composable(errorInfo, tmpCache, $composer_0, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(469042698);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = this_1.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (false ? true : it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_3 = SnackBarHost$composable$lambda_5;
          this_1.updateRememberedValue_l1wh71_k$(value_3);
          tmp_7 = value_3;
        } else {
          tmp_7 = it_3;
        }
        var tmp_8 = tmp_7;
        var tmpCache_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, null, $composer_0, 0, 2);
        $composer_0.startReplaceableGroup_ip860b_k$(469043234);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid_0 = !!(!!($composer_0.changed_ga7h3f_k$(offsetY$delegate) | $composer_0.changed_ga7h3f_k$(isDragging$delegate)) | $composer_0.changed_ga7h3f_k$(startY$delegate));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = this_2.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid_0 ? true : it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_4 = SnackBarHost$composable$lambda_6(offsetY$delegate, isDragging$delegate, startY$delegate);
          this_2.updateRememberedValue_l1wh71_k$(value_4);
          tmp_9 = value_4;
        } else {
          tmp_9 = it_4;
        }
        var tmp_10 = tmp_9;
        var tmpCache_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.SnackBarHost$composable.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_11, 691533416, true, SnackBarHost$composable$lambda_7(errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_4.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_5 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_12;
        if (invalid_1 ? true : it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>' call
          var value_5 = ComposableLambda$invoke$ref_27(dispatchReceiver);
          $composer_4.updateRememberedValue_l1wh71_k$(value_5);
          tmp_12 = value_5;
        } else {
          tmp_12 = it_5;
        }
        var tmp_13 = tmp_12;
        var tmp0_2 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_4.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_1, tmp0_2, $composer_0, 48, 0);
        var tmp_14 = SnackBarHost$composable$lambda_1(isDragging$delegate);
        $composer_0.startReplaceableGroup_ip860b_k$(469045774);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_3 = $composer_0;
        var invalid_2 = !!(!!($composer_0.changed_ga7h3f_k$(isDragging$delegate) | $composer_0.changed_ga7h3f_k$(startY$delegate)) | $composer_0.changed_ga7h3f_k$(offsetY$delegate));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_6 = this_3.rememberedValue_4dg93v_k$();
        var tmp_15;
        if (invalid_2 ? true : it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_6 = SnackBarHost$composable$lambda_8(isDragging$delegate, startY$delegate, offsetY$delegate);
          this_3.updateRememberedValue_l1wh71_k$(value_6);
          tmp_15 = value_6;
        } else {
          tmp_15 = it_6;
        }
        var tmp_16 = tmp_15;
        var tmpCache_2 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        DisposableEffect$composable_0(tmp_14, tmpCache_2, $composer_0, 0);
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable' call
        var applyAttrs = null;
        var $composer_5 = $composer_0;
        $composer_5.startReplaceableGroup_ip860b_k$(1760347178);
        sourceInformation($composer_5, 'CC(Style$composable)');
        if (!((1 & 1) === 0))
          applyAttrs = null;
        var builder = new StyleSheetBuilderImpl();
        // Inline function 'view.SnackBarHost$composable.<anonymous>' call
        Style$composable(applyAttrs, builder.get_cssRules_jdoznh_k$(), $composer_5, 14 & 0, 0);
        $composer_5.endReplaceableGroup_ern0ak_k$();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SnackBarHost$composable$lambda_9($changed));
    }
  }
  function SnackBarHost$composable$lambda($offsetY$delegate) {
    _init_properties_ErrorWidgets_kt__isina1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('offsetY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offsetY$delegate.get_value_j01efc_k$();
  }
  function SnackBarHost$composable$lambda_0($offsetY$delegate, value) {
    _init_properties_ErrorWidgets_kt__isina1();
    getLocalDelegateReference('offsetY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offsetY$delegate.set_value_v1vabv_k$(value);
  }
  function SnackBarHost$composable$lambda_1($isDragging$delegate) {
    _init_properties_ErrorWidgets_kt__isina1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isDragging', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isDragging$delegate.get_value_j01efc_k$();
  }
  function SnackBarHost$composable$lambda_2($isDragging$delegate, value) {
    _init_properties_ErrorWidgets_kt__isina1();
    getLocalDelegateReference('isDragging', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isDragging$delegate.set_value_v1vabv_k$(value);
  }
  function SnackBarHost$composable$lambda_3($startY$delegate) {
    _init_properties_ErrorWidgets_kt__isina1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('startY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $startY$delegate.get_value_j01efc_k$();
  }
  function SnackBarHost$composable$lambda_4($startY$delegate, value) {
    _init_properties_ErrorWidgets_kt__isina1();
    getLocalDelegateReference('startY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $startY$delegate.set_value_v1vabv_k$(value);
  }
  function ErrorWidget$composable$lambda($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.style_xwwy6r_k$(ErrorWidget$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.property_wcrait_k$('align-items', 'center');
    $this$style.property_wcrait_k$('justify-content', 'center');
    $this$style.property_wcrait_k$('flex', '1');
    padding($this$style, [get_px(24)]);
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda_0($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.style_xwwy6r_k$(ErrorWidget$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    backgroundColor($this$style, Color('#ffebee'));
    $this$style.property_wcrait_k$('border-left', '4px solid #f44336');
    $this$style.property_wcrait_k$('border-radius', '8px');
    padding($this$style, [get_px(24)]);
    $this$style.property_wcrait_k$('box-shadow', '0 2px 8px rgba(0,0,0,0.1)');
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda$lambda_0($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.style_xwwy6r_k$(ErrorWidget$composable$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(20));
    color($this$style, Color('#c62828'));
    $this$style.property_wcrait_k$('font-weight', '600');
    $this$style.property_wcrait_k$('margin-bottom', '12px');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    $this$style.property_wcrait_k$('align-items', 'center');
    $this$style.property_wcrait_k$('gap', '8px');
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda_0($this$Span) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Span.style_xwwy6r_k$(ErrorWidget$composable$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(24));
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda$lambda_1($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(569139792, $changed, -1, 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:48)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(469041101);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ErrorWidget$composable$lambda$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Span$composable(tmpCache, ComposableSingletons$ErrorWidgetsKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        Text$composable($errorInfo.get_title_iz32un_k$(), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda$lambda$lambda_2($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.style_xwwy6r_k$(ErrorWidget$composable$lambda$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda_1($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(14));
    color($this$style, Color('#666'));
    $this$style.property_wcrait_k$('line-height', '1.6');
    $this$style.property_wcrait_k$('margin-top', '8px');
    backgroundColor($this$style, Color('#fff'));
    padding($this$style, [get_px(12)]);
    $this$style.property_wcrait_k$('border-radius', '4px');
    $this$style.property_wcrait_k$('font-family', 'monospace');
    $this$style.property_wcrait_k$('word-break', 'break-word');
    return Unit_getInstance();
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda_2($errorInfo) {
    return function ($this$Pre, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1214875672, $changed, -1, 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:67)');
        }
        Text$composable($errorInfo.get_text_wouvsm_k$(), $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda$lambda$lambda_3($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1519252281, $changed, -1, 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:66)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1214875672, true, ErrorWidget$composable$lambda$lambda$lambda$lambda_2($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Pre$composable(null, tmp0, $composer_0, 48, 1);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda$lambda_1($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1769127663, $changed, -1, 'view.ErrorWidget$composable.<anonymous>.<anonymous> (ErrorWidgets.kt:37)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(469040690);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ErrorWidget$composable$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 569139792, true, ErrorWidget$composable$lambda$lambda$lambda_1($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_19(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(469041251);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ErrorWidget$composable$lambda$lambda$lambda_2;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -1519252281, true, ErrorWidget$composable$lambda$lambda$lambda_3($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda_0($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(713376274, $changed, -1, 'view.ErrorWidget$composable.<anonymous> (ErrorWidgets.kt:27)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(469040317);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = ErrorWidget$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1769127663, true, ErrorWidget$composable$lambda$lambda_1($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_22(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda_1($errorInfo, $$changed) {
    return function ($composer, $force) {
      ErrorWidget$composable($errorInfo, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SnackBarHost$composable$slambda($offsetY$delegate, resultContinuation) {
    this.$offsetY$delegate_1 = $offsetY$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnackBarHost$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SnackBarHost$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnackBarHost$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          SnackBarHost$composable$lambda_0(this.$offsetY$delegate_1, 0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SnackBarHost$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new SnackBarHost$composable$slambda(this.$offsetY$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(SnackBarHost$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SnackBarHost$composable$slambda_0($offsetY$delegate, resultContinuation) {
    var i = new SnackBarHost$composable$slambda($offsetY$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnackBarHost$composable$lambda_5($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.style_xwwy6r_k$(SnackBarHost$composable$lambda$lambda);
    $this$Div.onClick_q9cds6_k$(SnackBarHost$composable$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$style.property_wcrait_k$('position', 'fixed');
    $this$style.property_wcrait_k$('top', '0');
    $this$style.property_wcrait_k$('left', '0');
    $this$style.property_wcrait_k$('right', '0');
    $this$style.property_wcrait_k$('bottom', '0');
    backgroundColor($this$style, Color('rgba(0, 0, 0, 0.5)'));
    $this$style.property_wcrait_k$('z-index', '1000');
    $this$style.property_wcrait_k$('animation', 'fadeIn 0.3s ease-out');
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda_0(it) {
    _init_properties_ErrorWidgets_kt__isina1();
    get_snackBarState().set_value_v1vabv_k$(null);
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda_1($offsetY$delegate, $isDragging$delegate) {
    return function ($this$style) {
      $this$style.property_wcrait_k$('position', 'fixed');
      $this$style.property_wcrait_k$('bottom', '' + SnackBarHost$composable$lambda($offsetY$delegate) + 'px');
      $this$style.property_wcrait_k$('left', '16px');
      $this$style.property_wcrait_k$('right', '16px');
      $this$style.property_wcrait_k$('z-index', '1001');
      $this$style.property_wcrait_k$('margin', '0 auto');
      $this$style.property_wcrait_k$('transition', SnackBarHost$composable$lambda_1($isDragging$delegate) ? 'none' : 'bottom 0.3s ease-out');
      $this$style.property_wcrait_k$('touch-action', 'none');
      $this$style.property_wcrait_k$('user-select', 'none');
      return Unit_getInstance();
    };
  }
  function SnackBarHost$composable$lambda$lambda_2($isDragging$delegate, $startY$delegate) {
    return function (event) {
      SnackBarHost$composable$lambda_2($isDragging$delegate, true);
      SnackBarHost$composable$lambda_4($startY$delegate, event.get_clientY_fhxblx_k$());
      event.preventDefault_xs6po9_k$();
      return Unit_getInstance();
    };
  }
  function SnackBarHost$composable$lambda_6($offsetY$delegate, $isDragging$delegate, $startY$delegate) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(SnackBarHost$composable$lambda$lambda_1($offsetY$delegate, $isDragging$delegate));
      $this$Div.onMouseDown_hebxzb_k$(SnackBarHost$composable$lambda$lambda_2($isDragging$delegate, $startY$delegate));
      return Unit_getInstance();
    };
  }
  function SnackBarHost$composable$lambda$lambda_3($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.style_xwwy6r_k$(SnackBarHost$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    backgroundColor($this$style, Color('#f44336'));
    $this$style.property_wcrait_k$('border-radius', '12px');
    padding($this$style, [get_px(20)]);
    $this$style.property_wcrait_k$('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda$lambda_0($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.style_xwwy6r_k$(SnackBarHost$composable$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(18));
    $this$style.property_wcrait_k$('font-weight', '600');
    $this$style.property_wcrait_k$('margin-bottom', '8px');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    $this$style.property_wcrait_k$('align-items', 'center');
    $this$style.property_wcrait_k$('gap', '8px');
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda$lambda$lambda_0($this$Span) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Span.style_xwwy6r_k$(SnackBarHost$composable$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(20));
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda$lambda_1($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(409785962, $changed, -1, 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:161)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(469044776);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SnackBarHost$composable$lambda$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Span$composable(tmpCache, ComposableSingletons$ErrorWidgetsKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
        Text$composable($errorInfo.get_title_iz32un_k$(), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SnackBarHost$composable$lambda$lambda$lambda_2($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.style_xwwy6r_k$(SnackBarHost$composable$lambda$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda$lambda$lambda_1($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(14));
    $this$style.property_wcrait_k$('line-height', '1.5');
    $this$style.property_wcrait_k$('opacity', '0.95');
    $this$style.property_wcrait_k$('max-height', '200px');
    $this$style.property_wcrait_k$('overflow-y', 'auto');
    backgroundColor($this$style, Color('rgba(0, 0, 0, 0.2)'));
    padding($this$style, [get_px(12)]);
    $this$style.property_wcrait_k$('border-radius', '8px');
    $this$style.property_wcrait_k$('font-family', 'monospace');
    $this$style.property_wcrait_k$('word-break', 'break-word');
    return Unit_getInstance();
  }
  function SnackBarHost$composable$lambda$lambda$lambda_3($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-488865517, $changed, -1, 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:182)');
        }
        Text$composable($errorInfo.get_text_wouvsm_k$(), $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SnackBarHost$composable$lambda$lambda_4($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1858378633, $changed, -1, 'view.SnackBarHost$composable.<anonymous>.<anonymous> (ErrorWidgets.kt:151)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(469044370);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SnackBarHost$composable$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 409785962, true, SnackBarHost$composable$lambda$lambda$lambda_1($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(469044979);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = SnackBarHost$composable$lambda$lambda$lambda_2;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -488865517, true, SnackBarHost$composable$lambda$lambda$lambda_3($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_25(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SnackBarHost$composable$lambda_7($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(691533416, $changed, -1, 'view.SnackBarHost$composable.<anonymous> (ErrorWidgets.kt:141)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(469044005);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = SnackBarHost$composable$lambda$lambda_3;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 1858378633, true, SnackBarHost$composable$lambda$lambda_4($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_26(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SnackBarHost$composable$lambda$lambda_5($startY$delegate, $offsetY$delegate) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var mouseEvent = event;
      var delta = SnackBarHost$composable$lambda_3($startY$delegate) - mouseEvent.clientY | 0;
      var tmp;
      if (delta < 0) {
        SnackBarHost$composable$lambda_0($offsetY$delegate, -delta | 0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SnackBarHost$composable$lambda$lambda_6($isDragging$delegate, $offsetY$delegate) {
    return function (it) {
      SnackBarHost$composable$lambda_2($isDragging$delegate, false);
      var tmp;
      if (SnackBarHost$composable$lambda($offsetY$delegate) > 100) {
        get_snackBarState().set_value_v1vabv_k$(null);
        tmp = Unit_getInstance();
      } else {
        SnackBarHost$composable$lambda_0($offsetY$delegate, 0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_6($moveHandler, $upHandler) {
    this.$moveHandler_1 = $moveHandler;
    this.$upHandler_1 = $upHandler;
  }
  protoOf(_no_name_provided__qut3iv_6).dispose_3nnxhr_k$ = function () {
    // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>' call
    window.removeEventListener('mousemove', this.$moveHandler_1);
    window.removeEventListener('mouseup', this.$upHandler_1);
  };
  function _no_name_provided__qut3iv_7() {
  }
  protoOf(_no_name_provided__qut3iv_7).dispose_3nnxhr_k$ = function () {
    // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>' call
  };
  function SnackBarHost$composable$lambda_8($isDragging$delegate, $startY$delegate, $offsetY$delegate) {
    return function ($this$DisposableEffect) {
      var tmp;
      if (SnackBarHost$composable$lambda_1($isDragging$delegate)) {
        var moveHandler = SnackBarHost$composable$lambda$lambda_5($startY$delegate, $offsetY$delegate);
        var upHandler = SnackBarHost$composable$lambda$lambda_6($isDragging$delegate, $offsetY$delegate);
        window.addEventListener('mousemove', moveHandler);
        window.addEventListener('mouseup', upHandler);
        // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
        tmp = new _no_name_provided__qut3iv_6(moveHandler, upHandler);
      } else {
        // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
        tmp = new _no_name_provided__qut3iv_7();
      }
      return tmp;
    };
  }
  function SnackBarHost$composable$lambda_9($$changed) {
    return function ($composer, $force) {
      SnackBarHost$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_ErrorWidgets_kt_aqn355;
  function _init_properties_ErrorWidgets_kt__isina1() {
    if (!properties_initialized_ErrorWidgets_kt_aqn355) {
      properties_initialized_ErrorWidgets_kt_aqn355 = true;
      snackBarState = mutableStateOf(null);
    }
  }
  var Page_Chat_instance;
  var Page_Audio_instance;
  var Page_Devices_instance;
  var Page_Settings_instance;
  function values_2() {
    return [Page_Chat_getInstance(), Page_Audio_getInstance(), Page_Devices_getInstance(), Page_Settings_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Chat':
        return Page_Chat_getInstance();
      case 'Audio':
        return Page_Audio_getInstance();
      case 'Devices':
        return Page_Devices_getInstance();
      case 'Settings':
        return Page_Settings_getInstance();
      default:
        Page_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Page_entriesInitialized;
  function Page_initEntries() {
    if (Page_entriesInitialized)
      return Unit_getInstance();
    Page_entriesInitialized = true;
    Page_Chat_instance = new Page('Chat', 0, 'Chat');
    Page_Audio_instance = new Page('Audio', 1, 'Audio');
    Page_Devices_instance = new Page('Devices', 2, 'Devices');
    Page_Settings_instance = new Page('Settings', 3, 'Info');
  }
  var $ENTRIES_2;
  function Page(name, ordinal, title) {
    Enum.call(this, name, ordinal);
    this.title_1 = title;
  }
  protoOf(Page).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  function HomePage() {
    illegalDecoyCallException('HomePage');
  }
  function AppBottomNavigation(currentPage, onPageSelected) {
    illegalDecoyCallException('AppBottomNavigation');
  }
  function NavButton(title, isSelected, onClick) {
    illegalDecoyCallException('NavButton');
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-278071881);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-278071881, $changed, -1, 'view.HomePage$composable (HomePage.kt:20)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.HomePage$composable.<anonymous>' call
        var value = mutableStateOf(Page_Chat_getInstance());
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var currentPage$delegate = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(-1071068059);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.HomePage$composable.<anonymous>' call
        var value_0 = HomePage$composable$lambda_1;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.HomePage$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 968191092, true, HomePage$composable$lambda_2(currentPage$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_29(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, tmp0_0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$composable$lambda_3($changed));
    }
  }
  function AppBottomNavigation$composable(currentPage, onPageSelected, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1665661809);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(currentPage) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onPageSelected) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1665661809, $dirty, -1, 'view.AppBottomNavigation$composable (HomePage.kt:68)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1071066720);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.AppBottomNavigation$composable.<anonymous>' call
        var value = AppBottomNavigation$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.AppBottomNavigation$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -2110428404, true, AppBottomNavigation$composable$lambda_0(currentPage, onPageSelected));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.AppBottomNavigation$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_30(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppBottomNavigation$composable$lambda_1(currentPage, onPageSelected, $changed));
    }
  }
  function NavButton$composable(title, isSelected, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(754170621);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(isSelected) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(754170621, $dirty, -1, 'view.NavButton$composable (HomePage.kt:97)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1071065875);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!($composer_0.changedInstance_s1wkiy_k$(onClick) | $composer_0.changed_jpyyrz_k$(isSelected));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.NavButton$composable.<anonymous>' call
        var value = NavButton$composable$lambda(onClick, isSelected);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.NavButton$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1898186581, true, NavButton$composable$lambda_0(title));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.NavButton$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_31(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Button$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavButton$composable$lambda_1(title, isSelected, onClick, $changed));
    }
  }
  function HomePage$composable$lambda($currentPage$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currentPage$delegate.get_value_j01efc_k$();
  }
  function HomePage$composable$lambda_0($currentPage$delegate, value) {
    getLocalDelegateReference('currentPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currentPage$delegate.set_value_v1vabv_k$(value);
  }
  function HomePage$composable$lambda_1($this$Div) {
    $this$Div.style_xwwy6r_k$(HomePage$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function HomePage$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.property_wcrait_k$('height', '100dvh');
    $this$style.property_wcrait_k$('min-height', '100vh');
    $this$style.property_wcrait_k$('min-height', '-webkit-fill-available');
    width($this$style, get_vw(100));
    margin($this$style, [get_px(0)]);
    padding($this$style, [get_px(0)]);
    fontFamily($this$style, ['system-ui', '-apple-system', 'sans-serif']);
    backgroundColor($this$style, Color('#f5f5f5'));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = 'relative';
    position($this$style, tmp$ret$11);
    $this$style.property_wcrait_k$('box-sizing', 'border-box');
    return Unit_getInstance();
  }
  function HomePage$composable$lambda$lambda_0($this$Div) {
    $this$Div.style_xwwy6r_k$(HomePage$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function HomePage$composable$lambda$lambda$lambda($this$style) {
    $this$style.property_wcrait_k$('flex', '1');
    $this$style.property_wcrait_k$('overflow', 'hidden');
    $this$style.property_wcrait_k$('box-sizing', 'border-box');
    return Unit_getInstance();
  }
  function HomePage$composable$lambda$lambda_1($currentPage$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(560278549, $changed, -1, 'view.HomePage$composable.<anonymous>.<anonymous> (HomePage.kt:47)');
        }
        switch (HomePage$composable$lambda($currentPage$delegate).get_ordinal_ip24qg_k$()) {
          case 0:
            $composer_0.startReplaceableGroup_ip860b_k$(1645156134);
            ChatPage$composable($composer_0, 0);
            $composer_0.endReplaceableGroup_ern0ak_k$();
            break;
          case 1:
            $composer_0.startReplaceableGroup_ip860b_k$(1645156175);
            EmptyPage$composable('Audio-room', $composer_0, 6);
            $composer_0.endReplaceableGroup_ern0ak_k$();
            break;
          case 2:
            $composer_0.startReplaceableGroup_ip860b_k$(1645156231);
            EmptyPage$composable('Devices', $composer_0, 6);
            $composer_0.endReplaceableGroup_ern0ak_k$();
            break;
          case 3:
            $composer_0.startReplaceableGroup_ip860b_k$(1645156285);
            InfoPage$composable($composer_0, 0);
            $composer_0.endReplaceableGroup_ern0ak_k$();
            break;
          default:
            $composer_0.startReplaceableGroup_ip860b_k$(1645156309);
            $composer_0.endReplaceableGroup_ern0ak_k$();
            break;
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomePage$composable$lambda$lambda_2($currentPage$delegate) {
    return function (it) {
      HomePage$composable$lambda_0($currentPage$delegate, it);
      return Unit_getInstance();
    };
  }
  function HomePage$composable$lambda_2($currentPage$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(968191092, $changed, -1, 'view.HomePage$composable.<anonymous> (HomePage.kt:40)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-1071067432);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = HomePage$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 560278549, true, HomePage$composable$lambda$lambda_1($currentPage$delegate));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        var tmp_5 = HomePage$composable$lambda($currentPage$delegate);
        $composer_0.startReplaceableGroup_ip860b_k$(-1071066899);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changed_ga7h3f_k$($currentPage$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = HomePage$composable$lambda$lambda_2($currentPage$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmpCache_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        AppBottomNavigation$composable(tmp_5, tmpCache_0, $composer_0, 0);
        SnackBarHost$composable($composer_0, 0);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomePage$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AppBottomNavigation$composable$lambda($this$Div) {
    $this$Div.style_xwwy6r_k$(AppBottomNavigation$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function AppBottomNavigation$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'space-around';
    justifyContent($this$style, tmp$ret$7);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$12 = Color('white');
    backgroundColor($this$style, tmp$ret$12);
    $this$style.property_wcrait_k$('border-top', '1px solid #e0e0e0');
    padding($this$style, [get_px(12)]);
    $this$style.property_wcrait_k$('padding-bottom', 'calc(12px + env(safe-area-inset-bottom))');
    $this$style.property_wcrait_k$('box-shadow', '0 -2px 10px rgba(0,0,0,0.1)');
    $this$style.property_wcrait_k$('flex-shrink', '0');
    return Unit_getInstance();
  }
  function AppBottomNavigation$composable$lambda$lambda_0($onPageSelected, $screen) {
    return function () {
      $onPageSelected($screen);
      return Unit_getInstance();
    };
  }
  function AppBottomNavigation$composable$lambda_0($currentPage, $onPageSelected) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-2110428404, $changed, -1, 'view.AppBottomNavigation$composable.<anonymous> (HomePage.kt:82)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries_2().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'view.AppBottomNavigation$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = $currentPage.equals(element);
          $composer_0.startReplaceableGroup_ip860b_k$(-1071066053);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_0.changedInstance_s1wkiy_k$($onPageSelected) | $composer_0.changed_ga7h3f_k$(element));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'view.AppBottomNavigation$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = AppBottomNavigation$composable$lambda$lambda_0($onPageSelected, element);
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          NavButton$composable(element.title_1, tmp_0, tmpCache, $composer_0, 0);
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppBottomNavigation$composable$lambda_1($currentPage, $onPageSelected, $$changed) {
    return function ($composer, $force) {
      AppBottomNavigation$composable($currentPage, $onPageSelected, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavButton$composable$lambda$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function NavButton$composable$lambda$lambda_0($isSelected) {
    return function ($this$style) {
      $this$style.property_wcrait_k$('flex', '1');
      $this$style.property_wcrait_k$('padding', '12px 8px');
      $this$style.property_wcrait_k$('border', '0');
      var tmp;
      if ($isSelected) {
        tmp = Color('#2196F3');
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Color.transparent' call
        Color_getInstance();
        tmp = Color('transparent');
      }
      backgroundColor($this$style, tmp);
      var tmp_0;
      if ($isSelected) {
        // Inline function 'org.jetbrains.compose.web.css.Color.white' call
        Color_getInstance();
        tmp_0 = Color('white');
      } else {
        tmp_0 = Color('#666');
      }
      color($this$style, tmp_0);
      fontSize($this$style, get_px(14));
      $this$style.property_wcrait_k$('font-weight', $isSelected ? '600' : 'normal');
      $this$style.property_wcrait_k$('border-radius', '8px');
      $this$style.property_wcrait_k$('cursor', 'pointer');
      $this$style.property_wcrait_k$('transition', 'all 0.2s');
      return Unit_getInstance();
    };
  }
  function NavButton$composable$lambda($onClick, $isSelected) {
    return function ($this$Button) {
      $this$Button.onClick_q9cds6_k$(NavButton$composable$lambda$lambda($onClick));
      $this$Button.style_xwwy6r_k$(NavButton$composable$lambda$lambda_0($isSelected));
      return Unit_getInstance();
    };
  }
  function NavButton$composable$lambda_0($title) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1898186581, $changed, -1, 'view.NavButton$composable.<anonymous> (HomePage.kt:113)');
        }
        Text$composable($title, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NavButton$composable$lambda_1($title, $isSelected, $onClick, $$changed) {
    return function ($composer, $force) {
      NavButton$composable($title, $isSelected, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Page_Chat_getInstance() {
    Page_initEntries();
    return Page_Chat_instance;
  }
  function Page_Audio_getInstance() {
    Page_initEntries();
    return Page_Audio_instance;
  }
  function Page_Devices_getInstance() {
    Page_initEntries();
    return Page_Devices_instance;
  }
  function Page_Settings_getInstance() {
    Page_initEntries();
    return Page_Settings_instance;
  }
  function InfoPage() {
    illegalDecoyCallException('InfoPage');
  }
  function InfoItem(label, value) {
    illegalDecoyCallException('InfoItem');
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$InfoPageKt$lambda_1$lambda_a31gx($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1817582005, $changed, -1, 'view.ComposableSingletons$InfoPageKt.lambda-1.<anonymous> (InfoPage.kt:34)');
      }
      Text$composable('Info', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$InfoPageKt() {
    ComposableSingletons$InfoPageKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(1817582005, false, ComposableSingletons$InfoPageKt$lambda_1$lambda_a31gx));
  }
  protoOf(ComposableSingletons$InfoPageKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$InfoPageKt_instance;
  function ComposableSingletons$InfoPageKt_getInstance() {
    if (ComposableSingletons$InfoPageKt_instance == null)
      new ComposableSingletons$InfoPageKt();
    return ComposableSingletons$InfoPageKt_instance;
  }
  function InfoPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-342551482);
    sourceInformation($composer_0, 'C(InfoPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-342551482, $changed, -1, 'view.InfoPage$composable (InfoPage.kt:13)');
      }
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().get_instances_8zuh1x_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var i = tmp0_iterator.next_20eer_k$();
          if (i instanceof AppConfig) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).get_simpleName_r6f8py_k$() + ' is not found in global DI');
      }
      var config = tmp$ret$0;
      $composer_0.startReplaceableGroup_ip860b_k$(1510204447);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.InfoPage$composable.<anonymous>' call
        var value = InfoPage$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.InfoPage$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -2069472748, true, InfoPage$composable$lambda_0(config));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(InfoPage$composable$lambda_1($changed));
    }
  }
  function InfoItem$composable(label, value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1112297506);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1112297506, $dirty, -1, 'view.InfoItem$composable (InfoPage.kt:58)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1510205631);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.InfoItem$composable.<anonymous>' call
        var value_0 = InfoItem$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.InfoItem$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1658016636, true, InfoItem$composable$lambda_0(label, value));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_37(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(InfoItem$composable$lambda_1(label, value, $changed));
    }
  }
  function InfoPage$composable$lambda($this$Div) {
    $this$Div.style_xwwy6r_k$(InfoPage$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function InfoPage$composable$lambda$lambda($this$style) {
    height($this$style, get_percent(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    flex($this$style, 1);
    return Unit_getInstance();
  }
  function InfoPage$composable$lambda$lambda_0($this$Div) {
    $this$Div.style_xwwy6r_k$(InfoPage$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function InfoPage$composable$lambda$lambda$lambda($this$style) {
    padding($this$style, [get_px(16)]);
    backgroundColor($this$style, Color('#2196F3'));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    fontSize($this$style, get_px(20));
    fontWeight($this$style, '600');
    textAlign($this$style, 'center');
    return Unit_getInstance();
  }
  function InfoPage$composable$lambda$lambda_1($this$Div) {
    $this$Div.style_xwwy6r_k$(InfoPage$composable$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function InfoPage$composable$lambda$lambda$lambda_0($this$style) {
    flex($this$style, 1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    $this$style.property_wcrait_k$('gap', '16px');
    padding($this$style, [get_px(24)]);
    return Unit_getInstance();
  }
  function InfoPage$composable$lambda$lambda_2($config) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1442775266, $changed, -1, 'view.InfoPage$composable.<anonymous>.<anonymous> (InfoPage.kt:49)');
        }
        InfoItem$composable('App', $config.get_appName_bv95lp_k$(), $composer_0, 6);
        InfoItem$composable('Version', BuildInfo_getInstance().get_VERSION_iyczin_k$(), $composer_0, 54);
        InfoItem$composable('Build Time', BuildInfo_getInstance().get_BUILD_TIME_jfwz89_k$(), $composer_0, 54);
        InfoItem$composable('Flavor', $config.get_flavorName_7op61e_k$(), $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function InfoPage$composable$lambda_0($config) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-2069472748, $changed, -1, 'view.InfoPage$composable.<anonymous> (InfoPage.kt:24)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(1510204656);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = InfoPage$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, ComposableSingletons$InfoPageKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(1510204998);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = InfoPage$composable$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmpCache_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, -1442775266, true, InfoPage$composable$lambda$lambda_2($config));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_33(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, tmp0, $composer_0, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function InfoPage$composable$lambda_1($$changed) {
    return function ($composer, $force) {
      InfoPage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function InfoItem$composable$lambda($this$Div) {
    $this$Div.style_xwwy6r_k$(InfoItem$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function InfoItem$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    $this$style.property_wcrait_k$('gap', '4px');
    return Unit_getInstance();
  }
  function InfoItem$composable$lambda$lambda_0($this$Div) {
    $this$Div.style_xwwy6r_k$(InfoItem$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function InfoItem$composable$lambda$lambda$lambda($this$style) {
    color($this$style, Color('#666'));
    fontSize($this$style, get_px(14));
    return Unit_getInstance();
  }
  function InfoItem$composable$lambda$lambda_1($label) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(896385403, $changed, -1, 'view.InfoItem$composable.<anonymous>.<anonymous> (InfoPage.kt:73)');
        }
        Text$composable($label, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function InfoItem$composable$lambda$lambda_2($this$Div) {
    $this$Div.style_xwwy6r_k$(InfoItem$composable$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function InfoItem$composable$lambda$lambda$lambda_0($this$style) {
    color($this$style, Color('#333'));
    fontSize($this$style, get_px(18));
    fontWeight($this$style, '600');
    return Unit_getInstance();
  }
  function InfoItem$composable$lambda$lambda_3($value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(89566898, $changed, -1, 'view.InfoItem$composable.<anonymous>.<anonymous> (InfoPage.kt:82)');
        }
        Text$composable($value, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function InfoItem$composable$lambda_0($label, $value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1658016636, $changed, -1, 'view.InfoItem$composable.<anonymous> (InfoPage.kt:67)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(1510205844);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = InfoItem$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 896385403, true, InfoItem$composable$lambda$lambda_1($label));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_35(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(1510206008);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = InfoItem$composable$lambda$lambda_2;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 89566898, true, InfoItem$composable$lambda$lambda_3($value));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_36(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function InfoItem$composable$lambda_1($label, $value, $$changed) {
    return function ($composer, $force) {
      InfoItem$composable($label, $value, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function WaitingWidget() {
    illegalDecoyCallException('WaitingWidget');
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_1$lambda_cx2zg6($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(759498811, $changed, -1, 'view.ComposableSingletons$WaitingWidgetsKt.lambda-1.<anonymous> (WaitingWidgets.kt:37)');
      }
      Text$composable('\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda_taelgr($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2108139643, $changed, -1, 'view.ComposableSingletons$WaitingWidgetsKt.lambda-2.<anonymous> (WaitingWidgets.kt:20)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1102438948);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.ComposableSingletons$WaitingWidgetsKt.lambda-2.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda_am3cs6;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, null, $composer_0, 0, 2);
      $composer_0.startReplaceableGroup_ip860b_k$(-1102438600);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.ComposableSingletons$WaitingWidgetsKt.lambda-2.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda_am3cs6_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache_0, ComposableSingletons$WaitingWidgetsKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda_am3cs6($this$Div) {
    $this$Div.style_xwwy6r_k$(ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda$lambda_aa05n);
    return Unit_getInstance();
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda$lambda_aa05n($this$style) {
    width($this$style, get_px(48));
    height($this$style, get_px(48));
    $this$style.property_wcrait_k$('border', '4px solid #e0e0e0');
    $this$style.property_wcrait_k$('border-top', '4px solid #2196F3');
    $this$style.property_wcrait_k$('border-radius', '50%');
    $this$style.property_wcrait_k$('animation', 'spin 1s linear infinite');
    return Unit_getInstance();
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda_am3cs6_0($this$Div) {
    $this$Div.style_xwwy6r_k$(ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda$lambda_aa05n_0);
    return Unit_getInstance();
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda$lambda_aa05n_0($this$style) {
    fontSize($this$style, get_px(18));
    color($this$style, Color('#666'));
    $this$style.property_wcrait_k$('font-weight', '500');
    return Unit_getInstance();
  }
  function ComposableSingletons$WaitingWidgetsKt() {
    ComposableSingletons$WaitingWidgetsKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(759498811, false, ComposableSingletons$WaitingWidgetsKt$lambda_1$lambda_cx2zg6));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-2108139643, false, ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda_taelgr));
  }
  protoOf(ComposableSingletons$WaitingWidgetsKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$WaitingWidgetsKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$WaitingWidgetsKt_instance;
  function ComposableSingletons$WaitingWidgetsKt_getInstance() {
    if (ComposableSingletons$WaitingWidgetsKt_instance == null)
      new ComposableSingletons$WaitingWidgetsKt();
    return ComposableSingletons$WaitingWidgetsKt_instance;
  }
  function WaitingWidget$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1204093592);
    sourceInformation($composer_0, 'C(WaitingWidget$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1204093592, $changed, -1, 'view.WaitingWidget$composable (WaitingWidgets.kt:7)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1102439303);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'view.WaitingWidget$composable.<anonymous>' call
        var value = WaitingWidget$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmpCache, ComposableSingletons$WaitingWidgetsKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable' call
      var applyAttrs = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1760347178);
      sourceInformation($composer_1, 'CC(Style$composable)');
      if (!((1 & 1) === 0))
        applyAttrs = null;
      var builder = new StyleSheetBuilderImpl();
      // Inline function 'view.WaitingWidget$composable.<anonymous>' call
      Style$composable(applyAttrs, builder.get_cssRules_jdoznh_k$(), $composer_1, 14 & 0, 0);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(WaitingWidget$composable$lambda_0($changed));
    }
  }
  function WaitingWidget$composable$lambda($this$Div) {
    $this$Div.style_xwwy6r_k$(WaitingWidget$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function WaitingWidget$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    height($this$style, get_vh(100));
    width($this$style, get_vw(100));
    $this$style.property_wcrait_k$('align-items', 'center');
    $this$style.property_wcrait_k$('justify-content', 'center');
    $this$style.property_wcrait_k$('flex', '1');
    $this$style.property_wcrait_k$('gap', '16px');
    return Unit_getInstance();
  }
  function WaitingWidget$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      WaitingWidget$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(MessageRepository).fetchMessages$default_10tx46_k$ = fetchMessages$default;
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  main();
  return _;
}));
