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
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var Enum = kotlin_kotlin.$_$.de;
  var protoOf = kotlin_kotlin.$_$.gb;
  var classMeta = kotlin_kotlin.$_$.x9;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var Long = kotlin_kotlin.$_$.ie;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.mf;
  var VOID = kotlin_kotlin.$_$.g;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var KMutableProperty0 = kotlin_kotlin.$_$.xb;
  var THROW_ISE = kotlin_kotlin.$_$.oe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ea;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var isInterface = kotlin_kotlin.$_$.ta;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var getKClass = kotlin_kotlin.$_$.e;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.n1;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var equals = kotlin_kotlin.$_$.aa;
  var KMutableProperty1 = kotlin_kotlin.$_$.yb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var append = kotlin_kotlin.$_$.ec;
  var append_0 = kotlin_kotlin.$_$.dc;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var hashCode = kotlin_kotlin.$_$.ia;
  var extendThrowable = kotlin_kotlin.$_$.ba;
  var captureStack = kotlin_kotlin.$_$.r9;
  var toString = kotlin_kotlin.$_$.lb;
  var stackTraceToString = kotlin_kotlin.$_$.rf;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var removeLast = kotlin_kotlin.$_$.b8;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.s;
  var appendPathSegments = kotlin_io_ktor_ktor_http.$_$.v;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.f;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.h1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.f;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var JsType_instance = kotlin_io_ktor_ktor_utils.$_$.b;
  var List = kotlin_kotlin.$_$.r5;
  var arrayOf = kotlin_kotlin.$_$.bf;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.v4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.o;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var contentType = kotlin_io_ktor_ktor_http.$_$.c1;
  var header = kotlin_io_ktor_ktor_client_core.$_$.h;
  var Unit = kotlin_kotlin.$_$.ye;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var firstOrNull = kotlin_kotlin.$_$.z6;
  var lastOrNull = kotlin_kotlin.$_$.n7;
  var plus = kotlin_kotlin.$_$.x7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var objectCreate = kotlin_kotlin.$_$.eb;
  var getBooleanHashCode = kotlin_kotlin.$_$.da;
  var emptyList = kotlin_kotlin.$_$.t6;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var isBlank = kotlin_kotlin.$_$.qc;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var overflow = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var Color_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var fontWeight = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var textAlign = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var marginBottom = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var marginLeft = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.n4;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var flex = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var overflowY = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var marginTop = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var reversed = kotlin_kotlin.$_$.c8;
  var placeholder = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var placeholder_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var rows = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var TextArea$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var Companion_instance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var StyleSheetBuilderImpl = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var Pre$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var enumEntries = kotlin_kotlin.$_$.m9;
  var get_vw = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Flavors, 'Flavors', classMeta, Enum);
  setMetadataFor(BuildInfo, 'BuildInfo', objectMeta);
  setMetadataFor(AppConfig, 'AppConfig', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(DebugAppConfig, 'DebugAppConfig', classMeta, AppConfig, VOID, DebugAppConfig, VOID, VOID, [0]);
  setMetadataFor(ProdAppConfig, 'ProdAppConfig', classMeta, AppConfig, VOID, ProdAppConfig, VOID, VOID, [0]);
  setMetadataFor($initAppCOROUTINE$0, '$initAppCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(Loading, 'Loading', objectMeta);
  setMetadataFor(Error_0, 'Error', classMeta);
  setMetadataFor(Success, 'Success', objectMeta);
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(App$composable$slambda, 'App$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(UserSession, 'UserSession', classMeta, VOID, VOID, UserSession, VOID, VOID, [0]);
  setMetadataFor(StateWithSideEffect, 'StateWithSideEffect', classMeta);
  setMetadataFor(DI, 'DI', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(LogType, 'LogType', classMeta, Enum);
  setMetadataFor(LogEntry, 'LogEntry', classMeta);
  setMetadataFor(HumanErrorInfo, 'HumanErrorInfo', classMeta, Error);
  setMetadataFor(Logger, 'Logger', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(InMemoryLogger, 'InMemoryLogger', classMeta, Logger, VOID, InMemoryLogger, VOID, VOID, [0]);
  setMetadataFor($checkAndLogResponseCOROUTINE$1, '$checkAndLogResponseCOROUTINE$1', classMeta, CoroutineImpl);
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
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (i instanceof AppConfig) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
      }
      tmp = tmp$ret$0.v5m();
    } else {
      tmp = limit;
    }
    limit = tmp;
    return $super === VOID ? this.a5t(olderThan, newerThan, limit, $completion) : $super.a5t.call(this, olderThan, newerThan, limit, $completion);
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
  setMetadataFor(MessageListWidget$composable$slambda$slambda, 'MessageListWidget$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageListWidget$composable$slambda, 'MessageListWidget$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageListWidget$composable$slambda_1, 'MessageListWidget$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageListWidget$composable$slambda_3, 'MessageListWidget$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(MessageListWidget$composable$lambda$lambda$slambda, 'MessageListWidget$composable$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta);
  setMetadataFor(ComposableSingletons$NewMessageFormKt, 'ComposableSingletons$NewMessageFormKt', objectMeta);
  setMetadataFor(NewMessageForm$composable$lambda$slambda, 'NewMessageForm$composable$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta);
  setMetadataFor(ComposableSingletons$EmptyPageKt, 'ComposableSingletons$EmptyPageKt', objectMeta);
  setMetadataFor(ComposableSingletons$ErrorWidgetsKt, 'ComposableSingletons$ErrorWidgetsKt', objectMeta);
  setMetadataFor(SnackBarHost$composable$slambda, 'SnackBarHost$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta);
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
  var Flavors_entriesInitialized;
  function Flavors_initEntries() {
    if (Flavors_entriesInitialized)
      return Unit_instance;
    Flavors_entriesInitialized = true;
    Flavors_Debug_instance = new Flavors('Debug', 0);
    Flavors_Prod_instance = new Flavors('Prod', 1);
  }
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
      flavor = Flavors_Prod_getInstance();
    }
  }
  function BuildInfo() {
    this.a5m_1 = '1.0.0';
    this.b5m_1 = '2025-11-30 18:26:54';
    this.c5m_1 = 0;
  }
  var BuildInfo_instance;
  function BuildInfo_getInstance() {
    return BuildInfo_instance;
  }
  function initApp($completion) {
    var tmp = new $initAppCOROUTINE$0($completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function AppConfig() {
    this.l5m_1 = 'messages';
    this.m5m_1 = 'Local WiFi Chat';
    this.n5m_1 = 10;
    this.o5m_1 = new Long(3000, 0);
    this.p5m_1 = 'userHash';
    this.q5m_1 = 'userName';
    this.r5m_1 = 'X-User-Hash';
    this.s5m_1 = 0;
  }
  protoOf(AppConfig).u5m = function () {
    var tmp;
    switch (get_flavor().l9_1) {
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
  protoOf(AppConfig).v5m = function () {
    return this.n5m_1;
  };
  protoOf(AppConfig).w5m = function () {
    return this.o5m_1;
  };
  protoOf(AppConfig).x5m = function ($completion) {
    return Unit_instance;
  };
  function DebugAppConfig() {
    AppConfig.call(this);
    this.g5n_1 = 'http://localhost:9090/api';
    this.h5n_1 = 5;
    this.i5n_1 = 0;
  }
  protoOf(DebugAppConfig).t5m = function () {
    return this.g5n_1;
  };
  protoOf(DebugAppConfig).v5m = function () {
    return this.h5n_1;
  };
  protoOf(DebugAppConfig).x5m = function ($completion) {
    return delay(new Long(1000, 0), $completion);
  };
  function ProdAppConfig() {
    AppConfig.call(this);
    this.r5n_1 = '/api';
    this.s5n_1 = 0;
  }
  protoOf(ProdAppConfig).t5m = function () {
    return this.r5n_1;
  };
  function $initAppCOROUTINE$0(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($initAppCOROUTINE$0).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 4;
            this.pb_1 = 1;
            suspendResult = DI_getInstance().v5n(new InMemoryLogger(100), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.pb_1 = 2;
            suspendResult = DI_getInstance().v5n(get_flavor().equals(Flavors_Debug_getInstance()) ? new DebugAppConfig() : new ProdAppConfig(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.pb_1 = 3;
            suspendResult = DI_getInstance().v5n(new UserSession(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            DI_getInstance().w5n(new MessageRepository());
            return Unit_instance;
          case 4:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 4) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  function main() {
    renderComposable$composable('root', ComposableSingletons$MainKt_getInstance().x5n_1);
  }
  function Loading() {
    this.y5n_1 = 0;
  }
  var Loading_instance;
  function Loading_getInstance() {
    return Loading_instance;
  }
  function Error_0(error) {
    this.z5n_1 = error;
    this.a5o_1 = 0;
  }
  protoOf(Error_0).toString = function () {
    return 'Error(error=' + this.z5n_1 + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return this.z5n_1.hashCode();
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!this.z5n_1.equals(tmp0_other_with_cast.z5n_1))
      return false;
    return true;
  };
  function Success() {
    this.b5o_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    return Success_instance;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-1521502105, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:15)');
      }
      App$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.x5n_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1521502105, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function App$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(1949839329);
    sourceInformation($composer_0, 'C(App$composable)');
    if (!($changed === 0) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(1949839329, $changed, -1, 'App$composable (Main.kt:26)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'App$composable.<anonymous>' call
        var value = mutableStateOf(Loading_instance);
        $composer_1.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.y3a();
      var initState$delegate = tmp0;
      $composer_0.x3a(-1817629737);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.k3b(initState$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.i3b();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'App$composable.<anonymous>' call
        var value_0 = App$composable$slambda_0(initState$delegate, null);
        this_0.j3b(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.y3a();
      LaunchedEffect$composable(Unit_instance, tmpCache, $composer_0, 6);
      var v = App$composable$lambda(initState$delegate);
      if (v instanceof Loading) {
        $composer_0.x3a(-577603969);
        WaitingWidget$composable($composer_0, 0);
        $composer_0.y3a();
      } else {
        if (v instanceof Error_0) {
          $composer_0.x3a(-577603923);
          ErrorWidget$composable(v.z5n_1, $composer_0, 0);
          $composer_0.y3a();
        } else {
          if (v instanceof Success) {
            $composer_0.x3a(-577603870);
            HomePage$composable($composer_0, 0);
            $composer_0.y3a();
          } else {
            $composer_0.x3a(-577603854);
            $composer_0.y3a();
          }
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(App$composable$lambda_1($changed));
    }
  }
  function App$composable$lambda($initState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('initState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $initState$delegate.q2();
  }
  function App$composable$lambda_0($initState$delegate, value) {
    getLocalDelegateReference('initState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $initState$delegate.b13(value);
  }
  function App$composable$slambda($initState$delegate, resultContinuation) {
    this.k5o_1 = $initState$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$composable$slambda).c1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.d1g($this$LaunchedEffect, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(App$composable$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$composable$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            this.qb_1 = 2;
            this.pb_1 = 1;
            suspendResult = initApp(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            App$composable$lambda_0(this.k5o_1, Success_instance);
            this.qb_1 = 3;
            this.pb_1 = 4;
            continue $sm;
          case 2:
            this.qb_1 = 3;
            var tmp_0 = this.sb_1;
            if (tmp_0 instanceof Error) {
              var e = this.sb_1;
              App$composable$lambda_0(this.k5o_1, new Error_0(get_log().o5o(e)));
              this.pb_1 = 4;
              continue $sm;
            } else {
              throw this.sb_1;
            }

          case 3:
            throw this.sb_1;
          case 4:
            this.qb_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.qb_1 === 3) {
          throw e_0;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(App$composable$slambda).d1g = function ($this$LaunchedEffect, completion) {
    var i = new App$composable$slambda(this.k5o_1, completion);
    i.l5o_1 = $this$LaunchedEffect;
    return i;
  };
  function App$composable$slambda_0($initState$delegate, resultContinuation) {
    var i = new App$composable$slambda($initState$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.c1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$composable$lambda_1($$changed) {
    return function ($composer, $force) {
      App$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function UserSession$userName$delegate$lambda(it) {
    // Inline function 'org.w3c.dom.set' call
    var this_0 = localStorage;
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().t5n_1.u();
      while (tmp0_iterator.v()) {
        var i = tmp0_iterator.x();
        if (i instanceof AppConfig) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
    }
    // Inline function 'kotlin.js.asDynamic' call
    this_0[tmp$ret$0.q5m_1] = it;
    return Unit_instance;
  }
  function UserSession() {
    this.p5o_1 = '';
    var tmp = this;
    tmp.q5o_1 = new StateWithSideEffect('', UserSession$userName$delegate$lambda);
    this.r5o_1 = 8;
  }
  protoOf(UserSession).s5o = function (_set____db54di) {
    return this.q5o_1.w5o(this, userName$factory(), _set____db54di);
  };
  protoOf(UserSession).x5o = function () {
    return this.q5o_1.y5o(this, userName$factory_0());
  };
  protoOf(UserSession).x5m = function ($completion) {
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().t5n_1.u();
      while (tmp0_iterator.v()) {
        var i = tmp0_iterator.x();
        if (i instanceof AppConfig) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
    }
    var config = tmp$ret$0;
    var tmp = this;
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = localStorage[config.p5m_1];
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'UserSession.init.<anonymous>' call
      var newHash = System_instance.k36().r37().toString();
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage[config.p5m_1] = newHash;
      tmp_0 = newHash;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.p5o_1 = tmp_0;
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp1_elvis_lhs = localStorage[config.q5m_1];
    this.s5o(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    return Unit_instance;
  };
  function StateWithSideEffect(initialValue, onValueChange) {
    this.t5o_1 = onValueChange;
    this.u5o_1 = mutableStateOf(initialValue);
    this.v5o_1 = 8;
  }
  protoOf(StateWithSideEffect).y5o = function (thisRef, property) {
    return this.u5o_1.q2();
  };
  protoOf(StateWithSideEffect).w5o = function (thisRef, property, value) {
    var oldValue = this.u5o_1.q2();
    this.u5o_1.b13(value);
    if (!equals(oldValue, value)) {
      this.t5o_1(value);
    }
  };
  function userName$factory() {
    return getPropertyCallableRef('userName', 1, KMutableProperty1, function (receiver) {
      return receiver.x5o();
    }, function (receiver, value) {
      return receiver.s5o(value);
    });
  }
  function userName$factory_0() {
    return getPropertyCallableRef('userName', 1, KMutableProperty1, function (receiver) {
      return receiver.x5o();
    }, function (receiver, value) {
      return receiver.s5o(value);
    });
  }
  function DI() {
    DI_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t5n_1 = ArrayList_init_$Create$();
    this.u5n_1 = 8;
  }
  protoOf(DI).w5n = function (instance) {
    return this.t5n_1.v1(0, instance);
  };
  protoOf(DI).v5n = function (instance, $completion) {
    this.w5n(instance);
    return instance.x5m($completion);
  };
  var DI_instance;
  function DI_getInstance() {
    if (DI_instance == null)
      new DI();
    return DI_instance;
  }
  var LogType_INFO_instance;
  var LogType_API_instance;
  var LogType_ERROR_instance;
  var LogType_entriesInitialized;
  function LogType_initEntries() {
    if (LogType_entriesInitialized)
      return Unit_instance;
    LogType_entriesInitialized = true;
    LogType_INFO_instance = new LogType('INFO', 0);
    LogType_API_instance = new LogType('API', 1);
    LogType_ERROR_instance = new LogType('ERROR', 2);
  }
  function LogType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogEntry(type, title, text, details, time) {
    time = time === VOID ? System_instance.k36() : time;
    this.z5o_1 = type;
    this.a5p_1 = title;
    this.b5p_1 = text;
    this.c5p_1 = details;
    this.d5p_1 = time;
    this.e5p_1 = 0;
  }
  protoOf(LogEntry).toString = function () {
    var buf = StringBuilder_init_$Create$();
    if (!(this.a5p_1 == null)) {
      append(buf, [this.a5p_1, '\t\t', toHumanTime(this.d5p_1), '\n']);
    }
    buf.x5(this.b5p_1);
    if (!(this.c5p_1 == null)) {
      append_0(buf, ['\n', this.c5p_1]);
    }
    return buf.toString();
  };
  protoOf(LogEntry).hashCode = function () {
    var result = this.z5o_1.hashCode();
    result = imul(result, 31) + (this.a5p_1 == null ? 0 : getStringHashCode(this.a5p_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.b5p_1) | 0;
    result = imul(result, 31) + (this.c5p_1 == null ? 0 : hashCode(this.c5p_1)) | 0;
    result = imul(result, 31) + this.d5p_1.hashCode() | 0;
    return result;
  };
  protoOf(LogEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LogEntry))
      return false;
    var tmp0_other_with_cast = other instanceof LogEntry ? other : THROW_CCE();
    if (!this.z5o_1.equals(tmp0_other_with_cast.z5o_1))
      return false;
    if (!(this.a5p_1 == tmp0_other_with_cast.a5p_1))
      return false;
    if (!(this.b5p_1 === tmp0_other_with_cast.b5p_1))
      return false;
    if (!equals(this.c5p_1, tmp0_other_with_cast.c5p_1))
      return false;
    if (!this.d5p_1.equals(tmp0_other_with_cast.d5p_1))
      return false;
    return true;
  };
  function HumanErrorInfo(title, text, details, time) {
    details = details === VOID ? null : details;
    time = time === VOID ? System_instance.k36() : time;
    extendThrowable(this);
    captureStack(this, HumanErrorInfo);
    this.f5p_1 = title;
    this.g5p_1 = text;
    this.h5p_1 = details;
    this.i5p_1 = time;
    this.j5p_1 = 0;
  }
  protoOf(HumanErrorInfo).toString = function () {
    return 'HumanErrorInfo(title=' + this.f5p_1 + ', text=' + this.g5p_1 + ', details=' + this.h5p_1 + ', time=' + this.i5p_1 + ')';
  };
  protoOf(HumanErrorInfo).hashCode = function () {
    var result = getStringHashCode(this.f5p_1);
    result = imul(result, 31) + getStringHashCode(this.g5p_1) | 0;
    result = imul(result, 31) + (this.h5p_1 == null ? 0 : getStringHashCode(this.h5p_1)) | 0;
    result = imul(result, 31) + this.i5p_1.hashCode() | 0;
    return result;
  };
  protoOf(HumanErrorInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HumanErrorInfo))
      return false;
    var tmp0_other_with_cast = other instanceof HumanErrorInfo ? other : THROW_CCE();
    if (!(this.f5p_1 === tmp0_other_with_cast.f5p_1))
      return false;
    if (!(this.g5p_1 === tmp0_other_with_cast.g5p_1))
      return false;
    if (!(this.h5p_1 == tmp0_other_with_cast.h5p_1))
      return false;
    if (!this.i5p_1.equals(tmp0_other_with_cast.i5p_1))
      return false;
    return true;
  };
  function Logger() {
    this.m5o_1 = 0;
    this.n5o_1 = 8;
  }
  protoOf(Logger).k5p = function (title, text, details) {
    return this.l5p(new LogEntry(LogType_INFO_getInstance(), title, text, details));
  };
  protoOf(Logger).m5p = function (title, text, details, $super) {
    details = details === VOID ? null : details;
    var tmp;
    if ($super === VOID) {
      this.k5p(title, text, details);
      tmp = Unit_instance;
    } else {
      tmp = $super.k5p.call(this, title, text, details);
    }
    return tmp;
  };
  protoOf(Logger).n5p = function (protocol, url, reqData) {
    var tmp = LogType_API_getInstance();
    this.m5o_1 = this.m5o_1 + 1 | 0;
    this.l5p(new LogEntry(tmp, 'API-' + this.m5o_1 + ' >>>', protocol + ': ' + url, reqData));
    return this.m5o_1;
  };
  protoOf(Logger).o5p = function (protocol, url, reqData, $super) {
    reqData = reqData === VOID ? null : reqData;
    return $super === VOID ? this.n5p(protocol, url, reqData) : $super.n5p.call(this, protocol, url, reqData);
  };
  protoOf(Logger).p5p = function (reqNum, resStatus, resData) {
    return this.l5p(new LogEntry(LogType_API_getInstance(), 'API-' + reqNum + ' <<<', toString(resStatus), resData));
  };
  protoOf(Logger).q5p = function (error, title, text) {
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
    buf.x5(stackTraceToString(error));
    if (!(error.cause == null)) {
      append(buf, ['\n', stackTraceToString(ensureNotNull(error.cause))]);
    }
    var newText = buf.toString();
    var logEntry = new LogEntry(LogType_ERROR_getInstance(), newTitle, newText, error);
    this.l5p(logEntry);
    return new HumanErrorInfo(newTitle, newText, null, logEntry.d5p_1);
  };
  protoOf(Logger).o5o = function (error, title, text, $super) {
    title = title === VOID ? null : title;
    text = text === VOID ? null : text;
    return $super === VOID ? this.q5p(error, title, text) : $super.q5p.call(this, error, title, text);
  };
  function InMemoryLogger(storeUpToEntries) {
    storeUpToEntries = storeUpToEntries === VOID ? 100 : storeUpToEntries;
    Logger.call(this);
    this.t5p_1 = storeUpToEntries;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u5p_1 = ArrayList_init_$Create$();
    this.v5p_1 = 8;
  }
  protoOf(InMemoryLogger).l5p = function (entry) {
    if (entry.z5o_1.equals(LogType_ERROR_getInstance())) {
      console.error(entry.c5p_1);
    } else {
      console.log(entry.toString());
    }
    this.u5p_1.v1(0, entry);
    if (this.u5p_1.n() > this.t5p_1) {
      removeLast(this.u5p_1);
    }
  };
  protoOf(InMemoryLogger).x5m = function ($completion) {
    return Unit_instance;
  };
  function get_log() {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().t5n_1.u();
      while (tmp0_iterator.v()) {
        var i = tmp0_iterator.x();
        if (i instanceof Logger) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(Logger).b7() + ' is not found in global DI');
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
    $this$Json.s2w_1 = true;
    $this$Json.q2w_1 = true;
    $this$Json.t2w_1 = true;
    return Unit_instance;
  }
  function appJsonPretty$lambda($this$Json) {
    _init_properties_json_kt__3xrlns();
    $this$Json.s2w_1 = true;
    $this$Json.q2w_1 = true;
    $this$Json.t2w_1 = true;
    $this$Json.v2w_1 = true;
    return Unit_instance;
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
    var zone = Companion_getInstance_0().b38();
    var local = toLocalDateTime(instant, zone);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'core.toHumanTime.<anonymous>' call
    this_0.w5(local.w37());
    this_0.x5(' ');
    this_0.w5(local.x37());
    this_0.x5(' ');
    return this_0.toString();
  }
  function urlOf(path) {
    // Inline function 'kotlin.also' call
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().t5n_1.u();
      while (tmp0_iterator.v()) {
        var i = tmp0_iterator.x();
        if (i instanceof AppConfig) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
    }
    var tmp$ret$1 = tmp$ret$0;
    var this_0 = URLBuilder(tmp$ret$1.t5m());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'data.urlOf.<anonymous>' call
    appendPathSegments(this_0, [path]);
    return this_0;
  }
  function ApiClient$http$lambda($this$HttpClient) {
    var tmp = Plugin_getInstance();
    $this$HttpClient.n4o(tmp, ApiClient$http$lambda$lambda);
    return Unit_instance;
  }
  function ApiClient$http$lambda$lambda($this$install) {
    json($this$install, get_appJson());
    return Unit_instance;
  }
  function $checkAndLogResponseCOROUTINE$1(_this__u8e3s4, reqNum, response, reqLogFun, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e5q_1 = _this__u8e3s4;
    this.f5q_1 = reqNum;
    this.g5q_1 = response;
    this.h5q_1 = reqLogFun;
  }
  protoOf($checkAndLogResponseCOROUTINE$1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 4;
            if (!!(this.f5q_1 == null ? this.h5q_1 == null : false)) {
              var message = '\u0415\u0441\u043B\u0438 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u043D\u043E\u043C\u0435\u0440 \u043B\u043E\u0433\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430, \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043B\u043E\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!this.g5q_1.t4p().equals(Companion_getInstance_1().y1z_1)) {
              this.pb_1 = 3;
              suspendResult = bodyAsText(this.g5q_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(this.f5q_1 == null)) {
                this.i5q_1 = get_log();
                this.j5q_1 = this.g5q_1.t4p();
                this.pb_1 = 1;
                suspendResult = bodyAsText(this.g5q_1, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.pb_1 = 2;
                continue $sm;
              }
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.i5q_1.p5p(this.f5q_1, this.j5q_1, ARGUMENT);
            this.pb_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            var errorBody = suspendResult;
            var tmp_0 = get_log();
            var tmp0_elvis_lhs = this.f5q_1;
            tmp_0.p5p(tmp0_elvis_lhs == null ? ensureNotNull(this.h5q_1)() : tmp0_elvis_lhs, this.g5q_1.t4p(), errorBody);
            throw Exception_init_$Create$('API error: ' + this.g5q_1.t4p() + '\n' + errorBody);
          case 4:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 4) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  function ApiClient() {
    var tmp = this;
    tmp.k5q_1 = HttpClient(ApiClient$http$lambda);
    this.l5q_1 = 0;
  }
  protoOf(ApiClient).m5q = function (reqNum, response, reqLogFun, $completion) {
    var tmp = new $checkAndLogResponseCOROUTINE$1(this, reqNum, response, reqLogFun, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ApiClient).n5q = function (reqNum, response, reqLogFun, $completion, $super) {
    reqLogFun = reqLogFun === VOID ? null : reqLogFun;
    return $super === VOID ? this.m5q(reqNum, response, reqLogFun, $completion) : $super.m5q.call(this, reqNum, response, reqLogFun, $completion);
  };
  function MessageRepository$fetchMessages$lambda($url) {
    return function () {
      return get_log().o5p('GET', '' + $url);
    };
  }
  function $fetchMessagesCOROUTINE$2(_this__u8e3s4, olderThan, newerThan, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w5q_1 = _this__u8e3s4;
    this.x5q_1 = olderThan;
    this.y5q_1 = newerThan;
    this.z5q_1 = limit;
  }
  protoOf($fetchMessagesCOROUTINE$2).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 9;
            this.qb_1 = 8;
            if (!!(!(this.x5q_1 == null) ? !(this.y5q_1 == null) : false)) {
              var message = '\u041D\u0435\u043B\u044C\u0437\u044F \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C olderThan \u0438 newerThan \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = DI_getInstance().t5n_1.u();
              while (tmp0_iterator.v()) {
                var i = tmp0_iterator.x();
                if (i instanceof AppConfig) {
                  tmp$ret$0 = i;
                  break l$ret$1;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
            }
             while (false);
            tmp_0.a5r_1 = urlOf(tmp$ret$0.l5m_1);
            if (this.x5q_1 == null)
              null;
            else {
              this.a5r_1.n22_1.r1p('olderThan', this.x5q_1.t5r_1.toString());
            }

            if (this.y5q_1 == null)
              null;
            else {
              this.a5r_1.n22_1.r1p('newerThan', this.y5q_1.t5r_1.toString());
            }

            this.a5r_1.n22_1.r1p('limit', this.z5q_1.toString());
            this.pb_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.c5r_1 = this.w5q_1.x5r_1;
            var tmp_2 = this;
            tmp_2.d5r_1 = this.a5r_1.w1c();
            var tmp_3 = this;
            tmp_3.e5r_1 = !(this.y5q_1 == null);
            var tmp_4 = this;
            tmp_4.f5r_1 = MessageRepository$fetchMessages$lambda(this.d5r_1);
            this.qb_1 = 5;
            this.g5r_1 = !this.e5r_1 ? this.f5r_1() : null;
            var tmp_5 = this;
            tmp_5.h5r_1 = this.c5r_1.k5q_1;
            var tmp_6 = this;
            tmp_6.i5r_1 = this.d5r_1;
            var tmp_7 = this;
            tmp_7.j5r_1 = this.h5r_1;
            var tmp_8 = this;
            tmp_8.k5r_1 = this.j5r_1;
            var tmp_9 = this;
            var this_0 = new HttpRequestBuilder();
            takeFrom(this_0.g4n_1, this.i5r_1);
            tmp_9.l5r_1 = this_0;
            this.l5r_1.h4n_1 = Companion_getInstance_2().e1z_1;
            var tmp_10 = this;
            tmp_10.m5r_1 = this.k5r_1;
            var tmp_11 = this;
            tmp_11.n5r_1 = this.l5r_1;
            this.pb_1 = 2;
            suspendResult = (new HttpStatement(this.n5r_1, this.m5r_1)).q5d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o5r_1 = suspendResult;
            this.pb_1 = 3;
            suspendResult = this.c5r_1.m5q(this.g5r_1, this.o5r_1, this.f5r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_12 = this;
            tmp_12.p5r_1 = this.o5r_1;
            this.pb_1 = 4;
            var tmp_13 = this.p5r_1.o4q();
            var tmp_14 = JsType_instance;
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

            suspendResult = tmp_13.r4p(typeInfoImpl(tmp_14, tmp_15, tmp_16), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_18 = this;
            tmp_18.b5r_1 = (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
            this.pb_1 = 7;
            continue $sm;
          case 5:
            this.qb_1 = 8;
            var tmp_19 = this.sb_1;
            if (tmp_19 instanceof Error) {
              var e = this.sb_1;
              this.f5r_1();
              throw get_log().o5o(e);
            } else {
              throw this.sb_1;
            }

          case 6:
            this.qb_1 = 8;
            if (false) {
              this.pb_1 = 1;
              continue $sm;
            }

            this.pb_1 = 7;
            continue $sm;
          case 7:
            var batch = this.b5r_1;
            return new MessageList(batch, batch.n() === this.z5q_1);
          case 8:
            this.qb_1 = 9;
            var tmp_20 = this.sb_1;
            if (tmp_20 instanceof HumanErrorInfo) {
              var e_0 = this.sb_1;
              return Companion_instance_5.z5r(e_0);
            } else {
              throw this.sb_1;
            }

          case 9:
            throw this.sb_1;
          case 10:
            this.qb_1 = 9;
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.qb_1 === 9) {
          throw e_1;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e_1;
        }
      }
     while (true);
  };
  function $addNewMessageCOROUTINE$3(_this__u8e3s4, newMessage, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i5s_1 = _this__u8e3s4;
    this.j5s_1 = newMessage;
  }
  protoOf($addNewMessageCOROUTINE$3).bc = function () {
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
            var tmp_0 = this;
            tmp_0.l5s_1 = this.i5s_1.x5r_1;
            var tmp_1 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = DI_getInstance().t5n_1.u();
              while (tmp0_iterator.v()) {
                var i = tmp0_iterator.x();
                if (i instanceof AppConfig) {
                  tmp$ret$0 = i;
                  break l$ret$1;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
            }
             while (false);
            tmp_1.m5s_1 = urlOf(tmp$ret$0.l5m_1).w1c();
            var tmp_2 = this;
            tmp_2.n5s_1 = this.j5s_1;
            var tmp_3 = this;
            tmp_3.o5s_1 = null;
            this.qb_1 = 5;
            var tmp_4 = this;
            var this_0 = get_appJsonPretty();
            var value = this.n5s_1;
            var this_1 = this_0.a29();
            var this_2 = serializer(this_1, createKType(getKClass(NewMessage), arrayOf([]), false));
            tmp_4.p5s_1 = this_0.y28(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value);
            this.q5s_1 = get_log().n5p('POST', '' + this.m5s_1, this.p5s_1);
            var tmp_5 = this;
            tmp_5.r5s_1 = this.l5s_1.k5q_1;
            var tmp_6 = this;
            tmp_6.s5s_1 = this.m5s_1;
            var tmp_7 = this;
            tmp_7.t5s_1 = this.r5s_1;
            var tmp_8 = this;
            tmp_8.u5s_1 = this.t5s_1;
            var tmp_9 = this;
            var this_3 = new HttpRequestBuilder();
            takeFrom(this_3.g4n_1, this.s5s_1);
            var body = this.p5s_1;
            if (body == null) {
              this_3.j4n_1 = NullBody_instance;
              var tmp_10 = JsType_instance;
              var tmp_11 = PrimitiveClasses_getInstance().c8();
              var tmp_12;
              try {
                tmp_12 = createKType(PrimitiveClasses_getInstance().c8(), arrayOf([]), false);
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
              this_3.f4t(typeInfoImpl(tmp_10, tmp_11, tmp_12));
            } else {
              if (body instanceof OutgoingContent) {
                this_3.j4n_1 = body;
                this_3.f4t(null);
              } else {
                this_3.j4n_1 = body;
                var tmp_14 = JsType_instance;
                var tmp_15 = PrimitiveClasses_getInstance().c8();
                var tmp_16;
                try {
                  tmp_16 = createKType(PrimitiveClasses_getInstance().c8(), arrayOf([]), false);
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
                this_3.f4t(typeInfoImpl(tmp_14, tmp_15, tmp_16));
              }
            }

            contentType(this_3, Application_getInstance().o1t_1);
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_iterator_0 = DI_getInstance().t5n_1.u();
              while (tmp0_iterator_0.v()) {
                var i_0 = tmp0_iterator_0.x();
                if (i_0 instanceof AppConfig) {
                  tmp$ret$2 = i_0;
                  break l$ret$3;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
            }
             while (false);
            var tmp_18 = tmp$ret$2.r5m_1;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp0_iterator_1 = DI_getInstance().t5n_1.u();
              while (tmp0_iterator_1.v()) {
                var i_1 = tmp0_iterator_1.x();
                if (i_1 instanceof UserSession) {
                  tmp$ret$4 = i_1;
                  break l$ret$5;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).b7() + ' is not found in global DI');
            }
             while (false);
            header(this_3, tmp_18, tmp$ret$4.p5o_1);
            var tmp0_safe_receiver = this.o5s_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_iterator_2 = tmp0_safe_receiver.m2().u();
              while (tmp0_iterator_2.v()) {
                var element = tmp0_iterator_2.x();
                var key = element.p2();
                var value_0 = element.q2();
                header(this_3, key, value_0);
              }
            }

            tmp_9.v5s_1 = this_3;
            this.v5s_1.h4n_1 = Companion_getInstance_2().f1z_1;
            var tmp_19 = this;
            tmp_19.w5s_1 = this.u5s_1;
            var tmp_20 = this;
            tmp_20.x5s_1 = this.v5s_1;
            this.pb_1 = 2;
            suspendResult = (new HttpStatement(this.x5s_1, this.w5s_1)).q5d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y5s_1 = suspendResult;
            this.pb_1 = 3;
            suspendResult = this.l5s_1.n5q(this.q5s_1, this.y5s_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_21 = this;
            tmp_21.z5s_1 = this.y5s_1;
            this.pb_1 = 4;
            var tmp_22 = this.z5s_1.o4q();
            var tmp_23 = JsType_instance;
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

            suspendResult = tmp_22.r4p(typeInfoImpl(tmp_23, tmp_24, tmp_25), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_27 = this;
            tmp_27.k5s_1 = suspendResult instanceof Unit ? suspendResult : THROW_CCE();
            this.qb_1 = 6;
            this.pb_1 = 8;
            continue $sm;
          case 5:
            this.qb_1 = 6;
            var tmp_28 = this.sb_1;
            if (tmp_28 instanceof Error) {
              var e = this.sb_1;
              throw get_log().o5o(e);
            } else {
              throw this.sb_1;
            }

          case 6:
            throw this.sb_1;
          case 7:
            this.qb_1 = 6;
            if (false) {
              this.pb_1 = 1;
              continue $sm;
            }

            this.pb_1 = 8;
            continue $sm;
          case 8:
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.qb_1 === 6) {
          throw e_0;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e_0;
        }
      }
     while (true);
  };
  function MessageRepository() {
    this.x5r_1 = new ApiClient();
    this.y5r_1 = 0;
  }
  protoOf(MessageRepository).a5t = function (olderThan, newerThan, limit, $completion) {
    var tmp = new $fetchMessagesCOROUTINE$2(this, olderThan, newerThan, limit, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(MessageRepository).c5t = function (newMessage, $completion) {
    var tmp = new $addNewMessageCOROUTINE$3(this, newMessage, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  function get_LocalChatModel() {
    _init_properties_ChatModel_kt__34bpoh();
    return LocalChatModel;
  }
  var LocalChatModel;
  function ChatModel() {
    this.d5t_1 = new MessageListModel();
    this.e5t_1 = new NewMessageModel(this.d5t_1);
    this.f5t_1 = 0;
  }
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
  var FetchMode_entriesInitialized;
  function FetchMode_initEntries() {
    if (FetchMode_entriesInitialized)
      return Unit_instance;
    FetchMode_entriesInitialized = true;
    FetchMode_TOP_instance = new FetchMode('TOP', 0);
    FetchMode_OLDER_instance = new FetchMode('OLDER', 1);
    FetchMode_NEWER_instance = new FetchMode('NEWER', 2);
  }
  function FetchMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function fetch($this, fetchMode, $completion) {
    var tmp = new $fetchCOROUTINE$4($this, fetchMode, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function $fetchCOROUTINE$4(_this__u8e3s4, fetchMode, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5t_1 = _this__u8e3s4;
    this.p5t_1 = fetchMode;
  }
  protoOf($fetchCOROUTINE$4).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 9;
            this.o5t_1.z5t(true);
            this.o5t_1.a5u(false);
            this.pb_1 = 1;
            continue $sm;
          case 1:
            this.qb_1 = 7;
            this.qb_1 = 6;
            this.r5t_1 = this.p5t_1;
            this.s5t_1 = this.r5t_1.l9_1;
            if (this.s5t_1 === 0) {
              this.pb_1 = 4;
              suspendResult = this.o5t_1.t5t_1.b5t(VOID, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.s5t_1 === 1) {
                this.pb_1 = 3;
                suspendResult = this.o5t_1.t5t_1.b5t(lastOrNull(this.o5t_1.er().b5u_1), VOID, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.s5t_1 === 2) {
                  this.pb_1 = 2;
                  suspendResult = this.o5t_1.t5t_1.b5t(VOID, firstOrNull(this.o5t_1.er().b5u_1), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.pb_1 = 5;
                  continue $sm;
                }
              }
            }

          case 2:
            var bath = suspendResult;
            if (!bath.b5u_1.c1()) {
              get_log().m5p(null, 'Batch of newer loaded: ' + bath.b5u_1.n() + ' items');
              this.o5t_1.f5u(true);
            }

            this.o5t_1.g5u(new MessageList(plus(bath.b5u_1, this.o5t_1.er().b5u_1), this.o5t_1.er().c5u_1, bath.d5u_1));
            this.pb_1 = 5;
            continue $sm;
          case 3:
            var bath_0 = suspendResult;
            if (!bath_0.b5u_1.c1()) {
              get_log().m5p(null, 'Batch of older loaded: ' + bath_0.b5u_1.n() + ' items');
            }

            this.o5t_1.g5u(new MessageList(plus(this.o5t_1.er().b5u_1, bath_0.b5u_1), bath_0.c5u_1, bath_0.d5u_1));
            this.pb_1 = 5;
            continue $sm;
          case 4:
            var bath_1 = suspendResult;
            get_log().m5p(null, 'Top batch loaded: ' + bath_1.b5u_1.n() + ' items');
            this.o5t_1.g5u(bath_1);
            this.o5t_1.a5u(true);
            this.pb_1 = 5;
            continue $sm;
          case 5:
            this.q5t_1 = Unit_instance;
            this.qb_1 = 9;
            this.pb_1 = 8;
            continue $sm;
          case 6:
            this.qb_1 = 7;
            var tmp_0 = this.sb_1;
            if (tmp_0 instanceof Error) {
              var e = this.sb_1;
              var tmp_1 = this;
              throw e;
            } else {
              throw this.sb_1;
            }

          case 7:
            this.qb_1 = 9;
            var t = this.sb_1;
            this.o5t_1.z5t(false);
            throw t;
          case 8:
            this.o5t_1.z5t(false);
            return Unit_instance;
          case 9:
            throw this.sb_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.qb_1 === 9) {
          throw e_0;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e_0;
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
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (isInterface(i, AbstractMessageRepository)) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AbstractMessageRepository).b7() + ' is not found in global DI');
      }
      tmp = tmp$ret$0;
    } else {
      tmp = repository;
    }
    repository = tmp;
    this.t5t_1 = repository;
    this.u5t_1 = mutableStateOf(Companion_instance_5.h5u());
    this.v5t_1 = mutableStateOf(false);
    this.w5t_1 = mutableStateOf(false);
    this.x5t_1 = mutableStateOf(false);
    this.y5t_1 = 8;
  }
  protoOf(MessageListModel).g5u = function (_set____db54di) {
    var this_0 = this.u5t_1;
    list$factory();
    return this_0.b13(_set____db54di);
  };
  protoOf(MessageListModel).er = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.u5t_1;
    list$factory_0();
    return this_0.q2();
  };
  protoOf(MessageListModel).f5u = function (_set____db54di) {
    var this_0 = this.v5t_1;
    isNewerUnread$factory();
    return this_0.b13(_set____db54di);
  };
  protoOf(MessageListModel).i5u = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.v5t_1;
    isNewerUnread$factory_0();
    return this_0.q2();
  };
  protoOf(MessageListModel).a5u = function (_set____db54di) {
    var this_0 = this.w5t_1;
    forceScrollToTop$factory();
    return this_0.b13(_set____db54di);
  };
  protoOf(MessageListModel).j5u = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.w5t_1;
    forceScrollToTop$factory_0();
    return this_0.q2();
  };
  protoOf(MessageListModel).z5t = function (_set____db54di) {
    var this_0 = this.x5t_1;
    isLoading$factory();
    return this_0.b13(_set____db54di);
  };
  protoOf(MessageListModel).k5u = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.x5t_1;
    isLoading$factory_0();
    return this_0.q2();
  };
  protoOf(MessageListModel).l5u = function ($completion) {
    return fetch(this, FetchMode_TOP_getInstance(), $completion);
  };
  protoOf(MessageListModel).m5u = function ($completion) {
    return fetch(this, FetchMode_OLDER_getInstance(), $completion);
  };
  protoOf(MessageListModel).n5u = function ($completion) {
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
      return receiver.er();
    }, function (receiver, value) {
      return receiver.g5u(value);
    });
  }
  function list$factory_0() {
    return getPropertyCallableRef('list', 1, KMutableProperty1, function (receiver) {
      return receiver.er();
    }, function (receiver, value) {
      return receiver.g5u(value);
    });
  }
  function isNewerUnread$factory() {
    return getPropertyCallableRef('isNewerUnread', 1, KMutableProperty1, function (receiver) {
      return receiver.i5u();
    }, function (receiver, value) {
      return receiver.f5u(value);
    });
  }
  function isNewerUnread$factory_0() {
    return getPropertyCallableRef('isNewerUnread', 1, KMutableProperty1, function (receiver) {
      return receiver.i5u();
    }, function (receiver, value) {
      return receiver.f5u(value);
    });
  }
  function forceScrollToTop$factory() {
    return getPropertyCallableRef('forceScrollToTop', 1, KMutableProperty1, function (receiver) {
      return receiver.j5u();
    }, function (receiver, value) {
      return receiver.a5u(value);
    });
  }
  function forceScrollToTop$factory_0() {
    return getPropertyCallableRef('forceScrollToTop', 1, KMutableProperty1, function (receiver) {
      return receiver.j5u();
    }, function (receiver, value) {
      return receiver.a5u(value);
    });
  }
  function isLoading$factory() {
    return getPropertyCallableRef('isLoading', 1, KMutableProperty1, function (receiver) {
      return receiver.k5u();
    }, function (receiver, value) {
      return receiver.z5t(value);
    });
  }
  function isLoading$factory_0() {
    return getPropertyCallableRef('isLoading', 1, KMutableProperty1, function (receiver) {
      return receiver.k5u();
    }, function (receiver, value) {
      return receiver.z5t(value);
    });
  }
  function Companion() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function $serializer() {
    $serializer_instance = this;
    this.p5u_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('features.text_chat.model.Message', this, 5);
    tmp0_serialDesc.j2i('userHash', false);
    tmp0_serialDesc.j2i('userName', false);
    tmp0_serialDesc.j2i('text', false);
    tmp0_serialDesc.j2i('createdAt', false);
    tmp0_serialDesc.j2i('lastModifiedAt', true);
    this.o5u_1 = tmp0_serialDesc;
  }
  protoOf($serializer).f28 = function () {
    return this.o5u_1;
  };
  protoOf($serializer).l2i = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), InstantIso8601Serializer_getInstance(), get_nullable(InstantIso8601Serializer_getInstance())];
  };
  protoOf($serializer).h28 = function (decoder) {
    var tmp0_desc = this.o5u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp11_input = decoder.f2b(tmp0_desc);
    if (tmp11_input.u2b()) {
      tmp4_local0 = tmp11_input.p2b(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.p2b(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.p2b(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.r2b(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.t2b(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.v2b(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.p2b(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.p2b(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.p2b(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.r2b(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.t2b(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.g2b(tmp0_desc);
    return Message_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer).q5u = function (encoder, value) {
    var tmp0_desc = this.o5u_1;
    var tmp1_output = encoder.f2b(tmp0_desc);
    tmp1_output.s2c(tmp0_desc, 0, value.q5r_1);
    tmp1_output.s2c(tmp0_desc, 1, value.r5r_1);
    tmp1_output.s2c(tmp0_desc, 2, value.s5r_1);
    tmp1_output.u2c(tmp0_desc, 3, InstantIso8601Serializer_getInstance(), value.t5r_1);
    if (tmp1_output.a2d(tmp0_desc, 4) ? true : !(value.u5r_1 == null)) {
      tmp1_output.w2c(tmp0_desc, 4, InstantIso8601Serializer_getInstance(), value.u5r_1);
    }
    tmp1_output.g2b(tmp0_desc);
  };
  protoOf($serializer).g28 = function (encoder, value) {
    return this.q5u(encoder, value instanceof Message ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Message_init_$Init$(seen1, userHash, userName, text, createdAt, lastModifiedAt, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance().o5u_1);
    }
    $this.q5r_1 = userHash;
    $this.r5r_1 = userName;
    $this.s5r_1 = text;
    $this.t5r_1 = createdAt;
    if (0 === (seen1 & 16))
      $this.u5r_1 = null;
    else
      $this.u5r_1 = lastModifiedAt;
    var tmp = $this;
    // Inline function 'core.di' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'core.DI.get' call
      var tmp0_iterator = DI_getInstance().t5n_1.u();
      while (tmp0_iterator.v()) {
        var i = tmp0_iterator.x();
        if (i instanceof UserSession) {
          tmp$ret$0 = i;
          break $l$block;
        }
      }
      throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).b7() + ' is not found in global DI');
    }
    var tmp$ret$1 = tmp$ret$0;
    tmp.v5r_1 = $this.q5r_1 === tmp$ret$1.p5o_1;
    $this.w5r_1 = 0;
    return $this;
  }
  function Message_init_$Create$(seen1, userHash, userName, text, createdAt, lastModifiedAt, serializationConstructorMarker) {
    return Message_init_$Init$(seen1, userHash, userName, text, createdAt, lastModifiedAt, serializationConstructorMarker, objectCreate(protoOf(Message)));
  }
  function Message(userHash, userName, text, createdAt, lastModifiedAt, isMine) {
    lastModifiedAt = lastModifiedAt === VOID ? null : lastModifiedAt;
    var tmp;
    if (isMine === VOID) {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (i instanceof UserSession) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).b7() + ' is not found in global DI');
      }
      tmp = userHash === tmp$ret$0.p5o_1;
    } else {
      tmp = isMine;
    }
    isMine = tmp;
    this.q5r_1 = userHash;
    this.r5r_1 = userName;
    this.s5r_1 = text;
    this.t5r_1 = createdAt;
    this.u5r_1 = lastModifiedAt;
    this.v5r_1 = isMine;
    this.w5r_1 = 0;
  }
  protoOf(Message).toString = function () {
    return 'Message(userHash=' + this.q5r_1 + ', userName=' + this.r5r_1 + ', text=' + this.s5r_1 + ', createdAt=' + this.t5r_1 + ', lastModifiedAt=' + this.u5r_1 + ', isMine=' + this.v5r_1 + ')';
  };
  protoOf(Message).hashCode = function () {
    var result = getStringHashCode(this.q5r_1);
    result = imul(result, 31) + getStringHashCode(this.r5r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s5r_1) | 0;
    result = imul(result, 31) + this.t5r_1.hashCode() | 0;
    result = imul(result, 31) + (this.u5r_1 == null ? 0 : this.u5r_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v5r_1) | 0;
    return result;
  };
  protoOf(Message).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Message))
      return false;
    var tmp0_other_with_cast = other instanceof Message ? other : THROW_CCE();
    if (!(this.q5r_1 === tmp0_other_with_cast.q5r_1))
      return false;
    if (!(this.r5r_1 === tmp0_other_with_cast.r5r_1))
      return false;
    if (!(this.s5r_1 === tmp0_other_with_cast.s5r_1))
      return false;
    if (!this.t5r_1.equals(tmp0_other_with_cast.t5r_1))
      return false;
    if (!equals(this.u5r_1, tmp0_other_with_cast.u5r_1))
      return false;
    if (!(this.v5r_1 === tmp0_other_with_cast.v5r_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).z5r = function (error) {
    return new MessageList(emptyList(), false, error);
  };
  protoOf(Companion_0).h5u = function (error, $super) {
    error = error === VOID ? null : error;
    return $super === VOID ? this.z5r(error) : $super.z5r.call(this, error);
  };
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function MessageList(all, isOlderAvailable, error) {
    error = error === VOID ? null : error;
    this.b5u_1 = all;
    this.c5u_1 = isOlderAvailable;
    this.d5u_1 = error;
    this.e5u_1 = 8;
  }
  protoOf(MessageList).toString = function () {
    return 'MessageList(all=' + this.b5u_1 + ', isOlderAvailable=' + this.c5u_1 + ', error=' + this.d5u_1 + ')';
  };
  protoOf(MessageList).hashCode = function () {
    var result = hashCode(this.b5u_1);
    result = imul(result, 31) + getBooleanHashCode(this.c5u_1) | 0;
    result = imul(result, 31) + (this.d5u_1 == null ? 0 : this.d5u_1.hashCode()) | 0;
    return result;
  };
  protoOf(MessageList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MessageList))
      return false;
    var tmp0_other_with_cast = other instanceof MessageList ? other : THROW_CCE();
    if (!equals(this.b5u_1, tmp0_other_with_cast.b5u_1))
      return false;
    if (!(this.c5u_1 === tmp0_other_with_cast.c5u_1))
      return false;
    if (!equals(this.d5u_1, tmp0_other_with_cast.d5u_1))
      return false;
    return true;
  };
  function Companion_1() {
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    this.s5u_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('features.text_chat.model.NewMessage', this, 2);
    tmp0_serialDesc.j2i('userName', true);
    tmp0_serialDesc.j2i('text', true);
    this.r5u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).f28 = function () {
    return this.r5u_1;
  };
  protoOf($serializer_0).l2i = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_0).h28 = function (decoder) {
    var tmp0_desc = this.r5u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp8_input = decoder.f2b(tmp0_desc);
    if (tmp8_input.u2b()) {
      tmp4_local0 = tmp8_input.p2b(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.p2b(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.v2b(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.p2b(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.p2b(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.g2b(tmp0_desc);
    return NewMessage_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).t5u = function (encoder, value) {
    var tmp0_desc = this.r5u_1;
    var tmp1_output = encoder.f2b(tmp0_desc);
    var tmp;
    if (tmp1_output.a2d(tmp0_desc, 0)) {
      tmp = true;
    } else {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (i instanceof UserSession) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).b7() + ' is not found in global DI');
      }
      var tmp$ret$1 = tmp$ret$0;
      tmp = !(value.u5u_1 === tmp$ret$1.x5o());
    }
    if (tmp) {
      tmp1_output.s2c(tmp0_desc, 0, value.u5u_1);
    }
    if (tmp1_output.a2d(tmp0_desc, 1) ? true : !(value.v5u_1 === '')) {
      tmp1_output.s2c(tmp0_desc, 1, value.v5u_1);
    }
    tmp1_output.g2b(tmp0_desc);
  };
  protoOf($serializer_0).g28 = function (encoder, value) {
    return this.t5u(encoder, value instanceof NewMessage ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function NewMessage_init_$Init$(seen1, userName, text, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_0().r5u_1);
    }
    if (0 === (seen1 & 1)) {
      var tmp = $this;
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (i instanceof UserSession) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).b7() + ' is not found in global DI');
      }
      tmp.u5u_1 = tmp$ret$0.x5o();
    } else
      $this.u5u_1 = userName;
    if (0 === (seen1 & 2))
      $this.v5u_1 = '';
    else
      $this.v5u_1 = text;
    $this.w5u_1 = '' + getKClassFromExpression(Companion_instance_6).b7() + ' is not validated!';
    $this.x5u_1 = 0;
    return $this;
  }
  function NewMessage_init_$Create$(seen1, userName, text, serializationConstructorMarker) {
    return NewMessage_init_$Init$(seen1, userName, text, serializationConstructorMarker, objectCreate(protoOf(NewMessage)));
  }
  function NewMessage(userName, text, validationError) {
    var tmp;
    if (userName === VOID) {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (i instanceof UserSession) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).b7() + ' is not found in global DI');
      }
      tmp = tmp$ret$0.x5o();
    } else {
      tmp = userName;
    }
    userName = tmp;
    text = text === VOID ? '' : text;
    validationError = validationError === VOID ? '' + getKClassFromExpression(Companion_instance_6).b7() + ' is not validated!' : validationError;
    this.u5u_1 = userName;
    this.v5u_1 = text;
    this.w5u_1 = validationError;
    this.x5u_1 = 0;
  }
  protoOf(NewMessage).y5u = function () {
    var errs = '';
    if (isBlank(this.u5u_1))
      errs = errs + '\nEnter your name';
    if (isBlank(this.v5u_1))
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
  protoOf(NewMessage).z5u = function (userName, text, validationError) {
    return new NewMessage(userName, text, validationError);
  };
  protoOf(NewMessage).a5v = function (userName, text, validationError, $super) {
    userName = userName === VOID ? this.u5u_1 : userName;
    text = text === VOID ? this.v5u_1 : text;
    validationError = validationError === VOID ? this.w5u_1 : validationError;
    return $super === VOID ? this.z5u(userName, text, validationError) : $super.z5u.call(this, userName, text, validationError);
  };
  protoOf(NewMessage).toString = function () {
    return 'NewMessage(userName=' + this.u5u_1 + ', text=' + this.v5u_1 + ', validationError=' + this.w5u_1 + ')';
  };
  protoOf(NewMessage).hashCode = function () {
    var result = getStringHashCode(this.u5u_1);
    result = imul(result, 31) + getStringHashCode(this.v5u_1) | 0;
    result = imul(result, 31) + (this.w5u_1 == null ? 0 : getStringHashCode(this.w5u_1)) | 0;
    return result;
  };
  protoOf(NewMessage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NewMessage))
      return false;
    var tmp0_other_with_cast = other instanceof NewMessage ? other : THROW_CCE();
    if (!(this.u5u_1 === tmp0_other_with_cast.u5u_1))
      return false;
    if (!(this.v5u_1 === tmp0_other_with_cast.v5u_1))
      return false;
    if (!(this.w5u_1 == tmp0_other_with_cast.w5u_1))
      return false;
    return true;
  };
  function AbstractMessageRepository() {
  }
  function $addCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j5v_1 = _this__u8e3s4;
  }
  protoOf($addCOROUTINE$5).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            this.pb_1 = 1;
            suspendResult = this.j5v_1.l5v_1.c5t(this.j5v_1.rk(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = DI_getInstance().t5n_1.u();
              while (tmp0_iterator.v()) {
                var i = tmp0_iterator.x();
                if (i instanceof UserSession) {
                  tmp$ret$0 = i;
                  break l$ret$1;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(UserSession).b7() + ' is not found in global DI');
            }
             while (false);
            tmp$ret$0.s5o(this.j5v_1.rk().u5u_1);
            this.pb_1 = 2;
            suspendResult = this.j5v_1.k5v_1.n5u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j5v_1.o5v(new NewMessage());
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
  function NewMessageModel(messageListModel, repository) {
    var tmp;
    if (repository === VOID) {
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (isInterface(i, AbstractMessageRepository)) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AbstractMessageRepository).b7() + ' is not found in global DI');
      }
      tmp = tmp$ret$0;
    } else {
      tmp = repository;
    }
    repository = tmp;
    this.k5v_1 = messageListModel;
    this.l5v_1 = repository;
    this.m5v_1 = mutableStateOf(new NewMessage());
    this.n5v_1 = 0;
  }
  protoOf(NewMessageModel).o5v = function (_set____db54di) {
    var this_0 = this.m5v_1;
    state$factory();
    return this_0.b13(_set____db54di);
  };
  protoOf(NewMessageModel).rk = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.m5v_1;
    state$factory_0();
    return this_0.q2();
  };
  protoOf(NewMessageModel).p5v = function (v) {
    this.o5v(this.rk().a5v(v));
  };
  protoOf(NewMessageModel).q5v = function (v) {
    this.o5v(this.rk().a5v(VOID, v));
  };
  protoOf(NewMessageModel).r5v = function ($completion) {
    var tmp = new $addCOROUTINE$5(this, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  function state$factory() {
    return getPropertyCallableRef('state', 1, KMutableProperty1, function (receiver) {
      return receiver.rk();
    }, function (receiver, value) {
      return receiver.o5v(value);
    });
  }
  function state$factory_0() {
    return getPropertyCallableRef('state', 1, KMutableProperty1, function (receiver) {
      return receiver.rk();
    }, function (receiver, value) {
      return receiver.o5v(value);
    });
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$ChatPageKt$lambda_1$lambda_ro3j2z($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(644840026, $changed, -1, 'ComposableSingletons$ChatPageKt.lambda-1.<anonymous> (ChatPage.kt:50)');
      }
      // Inline function 'core.di' call
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (i instanceof AppConfig) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
      }
      var tmp$ret$1 = tmp$ret$0;
      Text$composable(tmp$ret$1.m5m_1, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ChatPageKt() {
    ComposableSingletons$ChatPageKt_instance = this;
    var tmp = this;
    tmp.s5v_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(644840026, false, ComposableSingletons$ChatPageKt$lambda_1$lambda_ro3j2z));
  }
  var ComposableSingletons$ChatPageKt_instance;
  function ComposableSingletons$ChatPageKt_getInstance() {
    if (ComposableSingletons$ChatPageKt_instance == null)
      new ComposableSingletons$ChatPageKt();
    return ComposableSingletons$ChatPageKt_instance;
  }
  function ChatPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(378206855);
    sourceInformation($composer_0, 'C(ChatPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(378206855, $changed, -1, 'ChatPage$composable (ChatPage.kt:26)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'ChatPage$composable.<anonymous>' call
        var value = new ChatModel();
        $composer_1.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.y3a();
      var chatModel = tmp0;
      var tmp_1 = [get_LocalChatModel().n3p(chatModel)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ChatPage$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1650778072, true, ChatPage$composable$lambda(chatModel));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.x3a(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.i3b();
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'ChatPage$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_2.j3b(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_2.y3a();
      CompositionLocalProvider$composable(tmp_1, tmp0_0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(ChatPage$composable$lambda_0($changed));
    }
  }
  function ChatPage$composable$lambda$lambda($this$Div) {
    $this$Div.q48(ChatPage$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ChatPage$composable$lambda$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.r4f('height', '100%');
    overflow($this$style, 'hidden');
    return Unit_instance;
  }
  function ChatPage$composable$lambda$lambda$lambda_0($this$Div) {
    $this$Div.q48(ChatPage$composable$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ChatPage$composable$lambda$lambda$lambda$lambda($this$style) {
    padding($this$style, [get_px(16)]);
    backgroundColor($this$style, Color('#2196F3'));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    fontSize($this$style, get_px(20));
    fontWeight($this$style, '600');
    textAlign($this$style, 'center');
    $this$style.r4f('flex-shrink', '0');
    return Unit_instance;
  }
  function ChatPage$composable$lambda$lambda_0($chatModel) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(8800825, $changed, -1, 'ChatPage$composable.<anonymous>.<anonymous> (ChatPage.kt:39)');
        }
        $composer_0.x3a(1856957395);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'ChatPage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ChatPage$composable$lambda$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        Div$composable(tmpCache, ComposableSingletons$ChatPageKt_getInstance().s5v_1, $composer_0, 48, 0);
        MessageListWidget$composable($chatModel.d5t_1, $composer_0, 0);
        NewMessageForm$composable($chatModel.e5t_1, $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ChatPage$composable$lambda($chatModel) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(1650778072, $changed, -1, 'ChatPage$composable.<anonymous> (ChatPage.kt:30)');
        }
        $composer_0.x3a(1856957135);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'ChatPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = ChatPage$composable$lambda$lambda;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ChatPage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 8800825, true, ChatPage$composable$lambda$lambda_0($chatModel));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'ChatPage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.t3k(p0, p1);
    };
  }
  function ChatPage$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      ChatPage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MessageListTile$composable(message, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(1375339268);
    sourceInformation($composer_0, 'C(MessageListTile$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(message) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(1375339268, $dirty, -1, 'features.text_chat.view.MessageListTile$composable (MessageListTile.kt:9)');
      }
      $composer_0.x3a(79151186);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.k3b(message);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i3b();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>' call
        var value = MessageListTile$composable$lambda(message);
        this_0.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 554519066, true, MessageListTile$composable$lambda_0(message));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i3b();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.j3b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.y3a();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(MessageListTile$composable$lambda_1(message, $changed));
    }
  }
  function MessageListTile$composable$lambda$lambda($message) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      var tmp;
      if ($message.v5r_1) {
        // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
        // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = 'flex-end';
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
        // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = 'flex-start';
      }
      alignItems($this$style, tmp);
      marginBottom($this$style, get_px(8));
      return Unit_instance;
    };
  }
  function MessageListTile$composable$lambda($message) {
    return function ($this$Div) {
      $this$Div.q48(MessageListTile$composable$lambda$lambda($message));
      return Unit_instance;
    };
  }
  function MessageListTile$composable$lambda$lambda_0($this$Div) {
    $this$Div.q48(MessageListTile$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function MessageListTile$composable$lambda$lambda$lambda($this$style) {
    fontSize($this$style, get_px(12));
    color($this$style, Color('#666'));
    marginBottom($this$style, get_px(4));
    marginLeft($this$style, get_px(8));
    return Unit_instance;
  }
  function MessageListTile$composable$lambda$lambda_1($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(778027136, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous> (MessageListTile.kt:27)');
        }
        Text$composable($message.r5r_1, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda$lambda$lambda_0($message) {
    return function ($this$style) {
      maxWidth($this$style, get_percent(70));
      $this$style.r4f('padding', '12px 16px');
      $this$style.r4f('border-radius', '16px');
      var tmp;
      if ($message.v5r_1) {
        tmp = Color('#DCF8C6');
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Color.white' call
        tmp = Color('white');
      }
      backgroundColor($this$style, tmp);
      $this$style.r4f('box-shadow', '0 1px 2px rgba(0,0,0,0.1)');
      $this$style.r4f('word-wrap', 'break-word');
      return Unit_instance;
    };
  }
  function MessageListTile$composable$lambda$lambda_2($message) {
    return function ($this$Div) {
      $this$Div.q48(MessageListTile$composable$lambda$lambda$lambda_0($message));
      return Unit_instance;
    };
  }
  function MessageListTile$composable$lambda$lambda$lambda_1($this$Div) {
    $this$Div.q48(MessageListTile$composable$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function MessageListTile$composable$lambda$lambda$lambda$lambda($this$style) {
    fontSize($this$style, get_px(15));
    color($this$style, Color('#000'));
    marginBottom($this$style, get_px(4));
    return Unit_instance;
  }
  function MessageListTile$composable$lambda$lambda$lambda_2($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(1581520156, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous> (MessageListTile.kt:47)');
        }
        Text$composable($message.s5r_1, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda$lambda$lambda_3($this$Div) {
    $this$Div.q48(MessageListTile$composable$lambda$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function MessageListTile$composable$lambda$lambda$lambda$lambda_0($this$style) {
    fontSize($this$style, get_px(11));
    color($this$style, Color('#666'));
    textAlign($this$style, 'right');
    return Unit_instance;
  }
  function MessageListTile$composable$lambda$lambda$lambda_4($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(2134167877, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous> (MessageListTile.kt:56)');
        }
        Text$composable(toHumanTime($message.t5r_1), $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda$lambda_3($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(1586304187, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous> (MessageListTile.kt:40)');
        }
        $composer_0.x3a(79152174);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = MessageListTile$composable$lambda$lambda$lambda_1;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 1581520156, true, MessageListTile$composable$lambda$lambda$lambda_2($message));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.x3a(79152416);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.i3b();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = MessageListTile$composable$lambda$lambda$lambda_3;
          $composer_0.j3b(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 2134167877, true, MessageListTile$composable$lambda$lambda$lambda_4($message));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.x3a(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.k3b(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.i3b();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_5(dispatchReceiver_0);
          $composer_2.j3b(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.y3a();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda_0($message) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(554519066, $changed, -1, 'features.text_chat.view.MessageListTile$composable.<anonymous> (MessageListTile.kt:18)');
        }
        $composer_0.x3a(-954241310);
        if (!$message.v5r_1) {
          $composer_0.x3a(79151477);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.i3b();
          var tmp_0;
          if (false ? true : it === Companion_getInstance().s3a_1) {
            // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value = MessageListTile$composable$lambda$lambda_0;
            $composer_0.j3b(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          $composer_0.y3a();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_2 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_2, 778027136, true, MessageListTile$composable$lambda$lambda_1($message));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.x3a(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.k3b(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_1.i3b();
          var tmp_3;
          if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
            // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
            $composer_1.j3b(value_0);
            tmp_3 = value_0;
          } else {
            tmp_3 = it_0;
          }
          var tmp_4 = tmp_3;
          var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_1.y3a();
          Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        }
        $composer_0.y3a();
        $composer_0.x3a(79151766);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.k3b($message);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.i3b();
        var tmp_5;
        if (invalid_0 ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = MessageListTile$composable$lambda$lambda_2($message);
          $composer_0.j3b(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 1586304187, true, MessageListTile$composable$lambda$lambda_3($message));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.x3a(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_2.k3b(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.i3b();
        var tmp_8;
        if (invalid_1 ? true : it_2 === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.MessageListTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_6(dispatchReceiver_0);
          $composer_2.j3b(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.y3a();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function MessageListTile$composable$lambda_1($message, $$changed) {
    return function ($composer, $force) {
      MessageListTile$composable($message, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$MessageListWidgetKt$lambda_1$lambda_eloi67($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-332725969, $changed, -1, 'features.text_chat.view.ComposableSingletons$MessageListWidgetKt.lambda-1.<anonymous> (MessageListWidget.kt:147)');
      }
      Text$composable('No messages', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$MessageListWidgetKt$lambda_2$lambda_rlt2qq($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-1645838170, $changed, -1, 'features.text_chat.view.ComposableSingletons$MessageListWidgetKt.lambda-2.<anonymous> (MessageListWidget.kt:199)');
      }
      Text$composable('\u21D3', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MessageListWidgetKt() {
    ComposableSingletons$MessageListWidgetKt_instance = this;
    var tmp = this;
    tmp.t5v_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-332725969, false, ComposableSingletons$MessageListWidgetKt$lambda_1$lambda_eloi67));
    var tmp_0 = this;
    tmp_0.u5v_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1645838170, false, ComposableSingletons$MessageListWidgetKt$lambda_2$lambda_rlt2qq));
  }
  var ComposableSingletons$MessageListWidgetKt_instance;
  function ComposableSingletons$MessageListWidgetKt_getInstance() {
    if (ComposableSingletons$MessageListWidgetKt_instance == null)
      new ComposableSingletons$MessageListWidgetKt();
    return ComposableSingletons$MessageListWidgetKt_instance;
  }
  function MessageListWidget$composable(model, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-636098429);
    sourceInformation($composer_0, 'C(MessageListWidget$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(model) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-636098429, $dirty, -1, 'features.text_chat.view.MessageListWidget$composable (MessageListWidget.kt:28)');
      }
      var list = model.er();
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_1 = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = $composer_1;
      $composer_2.x3a(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = MessageListWidget$composable$lambda_7;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.x3a(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_3.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_3.y3a();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.f3q_1;
      $composer_2.y3a();
      var coroutineScope = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.x3a(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_4.i3b();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_0 = mutableStateOf(null);
        $composer_4.j3b(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_4.y3a();
      var scrollArea$delegate = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.x3a(547886695);
      sourceInformation($composer_5, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_5.i3b();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_1 = mutableStateOf(null);
        $composer_5.j3b(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_5.y3a();
      var topSentinel$delegate = tmp0_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_0;
      $composer_6.x3a(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_6.i3b();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_2 = mutableStateOf(true);
        $composer_6.j3b(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_3 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_6.y3a();
      var isAtBottom$delegate = tmp0_3;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_7 = $composer_0;
      $composer_7.x3a(547886695);
      sourceInformation($composer_7, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_7.i3b();
      var tmp_7;
      if (false ? true : it_3 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_3 = mutableStateOf(null);
        $composer_7.j3b(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_4 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_7.y3a();
      var savedDistanceFromBottom$delegate = tmp0_4;
      $composer_0.x3a(-538333854);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.k3b(model);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_0.i3b();
      var tmp_9;
      if (invalid ? true : it_4 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_4 = MessageListWidget$composable$slambda_0(model, null);
        this_0.j3b(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmpCache = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.y3a();
      LaunchedEffect$composable(Unit_instance, tmpCache, $composer_0, 6);
      $composer_0.x3a(-538333626);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid_0 = $composer_0.k3b(list);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_1.i3b();
      var tmp_11;
      if (invalid_0 ? true : it_5 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_5 = MessageListWidget$composable$slambda_2(list, null);
        this_1.j3b(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmpCache_0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.y3a();
      LaunchedEffect$composable(list.d5u_1, tmpCache_0, $composer_0, 0);
      var tmp_13 = list.b5u_1.n();
      $composer_0.x3a(-538333379);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid_1 = !!(!!(!!(!!($composer_0.k3b(scrollArea$delegate) | $composer_0.k3b(savedDistanceFromBottom$delegate)) | $composer_0.k3b(list)) | $composer_0.k3b(model)) | $composer_0.k3b(isAtBottom$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = this_2.i3b();
      var tmp_14;
      if (invalid_1 ? true : it_6 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_6 = MessageListWidget$composable$slambda_4(list, model, scrollArea$delegate, savedDistanceFromBottom$delegate, isAtBottom$delegate, null);
        this_2.j3b(value_6);
        tmp_14 = value_6;
      } else {
        tmp_14 = it_6;
      }
      var tmp_15 = tmp_14;
      var tmpCache_1 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      $composer_0.y3a();
      LaunchedEffect$composable(tmp_13, tmpCache_1, $composer_0, 0);
      var tmp_16 = MessageListWidget$composable$lambda_1(topSentinel$delegate);
      DisposableEffect$composable(tmp_16, list.c5u_1, MessageListWidget$composable$lambda_8(topSentinel$delegate, list, coroutineScope, scrollArea$delegate, savedDistanceFromBottom$delegate, model), $composer_0, 0);
      var tmp_17 = MessageListWidget$composable$lambda(scrollArea$delegate);
      $composer_0.x3a(-538331199);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid_2 = !!(!!($composer_0.k3b(scrollArea$delegate) | $composer_0.k3b(isAtBottom$delegate)) | $composer_0.k3b(model));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = this_3.i3b();
      var tmp_18;
      if (invalid_2 ? true : it_7 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_7 = MessageListWidget$composable$lambda_9(scrollArea$delegate, model, isAtBottom$delegate);
        this_3.j3b(value_7);
        tmp_18 = value_7;
      } else {
        tmp_18 = it_7;
      }
      var tmp_19 = tmp_18;
      var tmpCache_2 = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
      $composer_0.y3a();
      DisposableEffect$composable_0(tmp_17, tmpCache_2, $composer_0, 0);
      $composer_0.x3a(-538330591);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      var invalid_3 = $composer_0.k3b(scrollArea$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = this_4.i3b();
      var tmp_20;
      if (invalid_3 ? true : it_8 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
        var value_8 = MessageListWidget$composable$lambda_10(scrollArea$delegate);
        this_4.j3b(value_8);
        tmp_20 = value_8;
      } else {
        tmp_20 = it_8;
      }
      var tmp_21 = tmp_20;
      var tmpCache_3 = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>' call
      var tmp_22 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_22, 183460309, true, MessageListWidget$composable$lambda_11(list, topSentinel$delegate, model, scrollArea$delegate, isAtBottom$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_8 = $composer_0;
      $composer_8.x3a(-838505973);
      sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = $composer_8.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_8.i3b();
      var tmp_23;
      if (invalid_4 ? true : it_9 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>' call
        var value_9 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_8.j3b(value_9);
        tmp_23 = value_9;
      } else {
        tmp_23 = it_9;
      }
      var tmp_24 = tmp_23;
      var tmp0_5 = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      $composer_8.y3a();
      Div$composable(tmpCache_3, tmp0_5, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(MessageListWidget$composable$lambda_12(model, $changed));
    }
  }
  function MessageListWidget$composable$lambda($scrollArea$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scrollArea', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scrollArea$delegate.q2();
  }
  function MessageListWidget$composable$lambda_0($scrollArea$delegate, value) {
    getLocalDelegateReference('scrollArea', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scrollArea$delegate.b13(value);
  }
  function MessageListWidget$composable$lambda_1($topSentinel$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('topSentinel', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $topSentinel$delegate.q2();
  }
  function MessageListWidget$composable$lambda_2($topSentinel$delegate, value) {
    getLocalDelegateReference('topSentinel', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $topSentinel$delegate.b13(value);
  }
  function MessageListWidget$composable$lambda_3($isAtBottom$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isAtBottom', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isAtBottom$delegate.q2();
  }
  function MessageListWidget$composable$lambda_4($isAtBottom$delegate, value) {
    getLocalDelegateReference('isAtBottom', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isAtBottom$delegate.b13(value);
  }
  function MessageListWidget$composable$lambda_5($savedDistanceFromBottom$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('savedDistanceFromBottom', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $savedDistanceFromBottom$delegate.q2();
  }
  function MessageListWidget$composable$lambda_6($savedDistanceFromBottom$delegate, value) {
    getLocalDelegateReference('savedDistanceFromBottom', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $savedDistanceFromBottom$delegate.b13(value);
  }
  function MessageListWidget$composable$lambda_7() {
    return EmptyCoroutineContext_getInstance();
  }
  function MessageListWidget$composable$slambda$slambda($model, resultContinuation) {
    this.d5w_1 = $model;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$slambda$slambda).c1g = function ($this$launch, $completion) {
    var tmp = this.d1g($this$launch, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(MessageListWidget$composable$slambda$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$slambda$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 4;
            this.pb_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.pb_1 = 5;
              continue $sm;
            }

            this.pb_1 = 2;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = DI_getInstance().t5n_1.u();
              while (tmp0_iterator.v()) {
                var i = tmp0_iterator.x();
                if (i instanceof AppConfig) {
                  tmp$ret$0 = i;
                  break l$ret$1;
                }
              }
              throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
            }
             while (false);
            suspendResult = delay(tmp$ret$0.w5m(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.pb_1 = 3;
            suspendResult = this.d5w_1.n5u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.pb_1 = 1;
            continue $sm;
          case 4:
            throw this.sb_1;
          case 5:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 4) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  protoOf(MessageListWidget$composable$slambda$slambda).d1g = function ($this$launch, completion) {
    var i = new MessageListWidget$composable$slambda$slambda(this.d5w_1, completion);
    i.e5w_1 = $this$launch;
    return i;
  };
  function MessageListWidget$composable$slambda$slambda_0($model, resultContinuation) {
    var i = new MessageListWidget$composable$slambda$slambda($model, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.c1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MessageListWidget$composable$slambda($model, resultContinuation) {
    this.n5w_1 = $model;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$slambda).c1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.d1g($this$LaunchedEffect, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(MessageListWidget$composable$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            suspendResult = this.n5w_1.l5u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            launch(this.o5w_1, VOID, VOID, MessageListWidget$composable$slambda$slambda_0(this.n5w_1, null));
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
  protoOf(MessageListWidget$composable$slambda).d1g = function ($this$LaunchedEffect, completion) {
    var i = new MessageListWidget$composable$slambda(this.n5w_1, completion);
    i.o5w_1 = $this$LaunchedEffect;
    return i;
  };
  function MessageListWidget$composable$slambda_0($model, resultContinuation) {
    var i = new MessageListWidget$composable$slambda($model, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.c1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MessageListWidget$composable$slambda_1($list, resultContinuation) {
    this.x5w_1 = $list;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$slambda_1).c1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.d1g($this$LaunchedEffect, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(MessageListWidget$composable$slambda_1).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$slambda_1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        if (tmp === 0) {
          this.qb_1 = 1;
          if (!(this.x5w_1.d5u_1 == null)) {
            showErrorSnackBar(this.x5w_1.d5u_1);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MessageListWidget$composable$slambda_1).d1g = function ($this$LaunchedEffect, completion) {
    var i = new MessageListWidget$composable$slambda_1(this.x5w_1, completion);
    i.y5w_1 = $this$LaunchedEffect;
    return i;
  };
  function MessageListWidget$composable$slambda_2($list, resultContinuation) {
    var i = new MessageListWidget$composable$slambda_1($list, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.c1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MessageListWidget$composable$slambda_3($list, $model, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $isAtBottom$delegate, resultContinuation) {
    this.h5x_1 = $list;
    this.i5x_1 = $model;
    this.j5x_1 = $scrollArea$delegate;
    this.k5x_1 = $savedDistanceFromBottom$delegate;
    this.l5x_1 = $isAtBottom$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$slambda_3).c1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.d1g($this$LaunchedEffect, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(MessageListWidget$composable$slambda_3).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$slambda_3).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        if (tmp === 0) {
          this.qb_1 = 1;
          var tmp0_safe_receiver = MessageListWidget$composable$lambda(this.j5x_1);
          if (tmp0_safe_receiver == null)
            null;
          else {
            if (!(MessageListWidget$composable$lambda_5(this.k5x_1) == null)) {
              var scrollTop = (tmp0_safe_receiver.scrollHeight - tmp0_safe_receiver.clientHeight | 0) - ensureNotNull(MessageListWidget$composable$lambda_5(this.k5x_1));
              if (scrollTop > 0.0) {
                tmp0_safe_receiver.scrollTop = scrollTop;
              }
              MessageListWidget$composable$lambda_6(this.k5x_1, null);
            } else {
              var tmp_0;
              if (!this.h5x_1.b5u_1.c1()) {
                tmp_0 = this.i5x_1.j5u() ? true : MessageListWidget$composable$lambda_3(this.l5x_1);
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                tmp0_safe_receiver.scrollTop = tmp0_safe_receiver.scrollHeight;
              }
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MessageListWidget$composable$slambda_3).d1g = function ($this$LaunchedEffect, completion) {
    var i = new MessageListWidget$composable$slambda_3(this.h5x_1, this.i5x_1, this.j5x_1, this.k5x_1, this.l5x_1, completion);
    i.m5x_1 = $this$LaunchedEffect;
    return i;
  };
  function MessageListWidget$composable$slambda_4($list, $model, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $isAtBottom$delegate, resultContinuation) {
    var i = new MessageListWidget$composable$slambda_3($list, $model, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $isAtBottom$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.c1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).jn = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>' call
  };
  function MessageListWidget$composable$lambda$lambda$slambda($model, resultContinuation) {
    this.v5x_1 = $model;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).c1g = function ($this$launch, $completion) {
    var tmp = this.d1g($this$launch, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            suspendResult = this.v5x_1.m5u(this);
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
  protoOf(MessageListWidget$composable$lambda$lambda$slambda).d1g = function ($this$launch, completion) {
    var i = new MessageListWidget$composable$lambda$lambda$slambda(this.v5x_1, completion);
    i.w5x_1 = $this$launch;
    return i;
  };
  function MessageListWidget$composable$lambda$lambda$slambda_0($model, resultContinuation) {
    var i = new MessageListWidget$composable$lambda$lambda$slambda($model, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.c1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MessageListWidget$composable$lambda$lambda($list, $coroutineScope, $scrollArea$delegate, $savedDistanceFromBottom$delegate, $model) {
    return function (it) {
      var tmp;
      if ($list.c5u_1) {
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_0($sentinel, $handleVisible, $observer) {
    this.x5x_1 = $sentinel;
    this.y5x_1 = $handleVisible;
    this.z5x_1 = $observer;
  }
  protoOf(_no_name_provided__qut3iv_0).jn = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>' call
    this.x5x_1.removeEventListener('sentinelVisible', this.y5x_1);
    this.z5x_1.disconnect();
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
  protoOf(_no_name_provided__qut3iv_1).jn = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
  };
  function MessageListWidget$composable$lambda$lambda_0($area, $model, $isAtBottom$delegate) {
    return function (it) {
      var distanceFromBottom = $area.scrollHeight - $area.scrollTop - $area.clientHeight;
      MessageListWidget$composable$lambda_4($isAtBottom$delegate, distanceFromBottom < 50.0);
      var tmp;
      if (MessageListWidget$composable$lambda_3($isAtBottom$delegate)) {
        $model.f5u(false);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_2($area, $handleScroll) {
    this.a5y_1 = $area;
    this.b5y_1 = $handleScroll;
  }
  protoOf(_no_name_provided__qut3iv_2).jn = function () {
    // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.a5y_1.removeEventListener('scroll', this.b5y_1);
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
    $this$style.r4f('position', 'relative');
    flex($this$style, 1);
    overflowY($this$style, 'auto');
    padding($this$style, [get_px(16)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.r4f('gap', '12px');
    return Unit_instance;
  }
  function _no_name_provided__qut3iv_3() {
  }
  protoOf(_no_name_provided__qut3iv_3).jn = function () {
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
      $this$Div.q48(MessageListWidget$composable$lambda$lambda_1);
      $this$Div.r48(MessageListWidget$composable$lambda$lambda_2($scrollArea$delegate));
      return Unit_instance;
    };
  }
  function MessageListWidget$composable$lambda$lambda_3($this$Div) {
    $this$Div.q48(MessageListWidget$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function MessageListWidget$composable$lambda$lambda$lambda($this$style) {
    textAlign($this$style, 'center');
    color($this$style, Color('#999'));
    marginTop($this$style, get_px(32));
    return Unit_instance;
  }
  function MessageListWidget$composable$lambda$lambda$lambda_0($this$style) {
    $this$style.r4f('height', '1px');
    $this$style.r4f('width', '100%');
    return Unit_instance;
  }
  function _no_name_provided__qut3iv_4() {
  }
  protoOf(_no_name_provided__qut3iv_4).jn = function () {
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
      $this$Div.q48(MessageListWidget$composable$lambda$lambda$lambda_0);
      $this$Div.r48(MessageListWidget$composable$lambda$lambda$lambda_1($topSentinel$delegate));
      return Unit_instance;
    };
  }
  function MessageListWidget$composable$lambda$lambda$lambda_2($this$style) {
    width($this$style, get_px(50));
    height($this$style, get_px(50));
    $this$style.r4f('min-width', '50px');
    $this$style.r4f('min-height', '50px');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Sticky' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    position($this$style, 'sticky');
    $this$style.r4f('bottom', '0px');
    $this$style.r4f('left', 'calc(100% - 50px)');
    $this$style.r4f('margin-top', 'auto');
    $this$style.r4f('border-radius', '50%');
    $this$style.r4f('background-color', '#007bff');
    $this$style.r4f('box-shadow', '0 2px 8px rgba(0,0,0,0.2)');
    $this$style.r4f('cursor', 'pointer');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    $this$style.r4f('align-items', 'center');
    $this$style.r4f('justify-content', 'center');
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$8 = Color('white');
    color($this$style, tmp$ret$8);
    $this$style.r4f('font-size', '24px');
    $this$style.r4f('transition', 'all 0.2s');
    $this$style.r4f('z-index', '100');
    $this$style.r4f('pointer-events', 'auto');
    $this$style.r4f('flex-shrink', '0');
    return Unit_instance;
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
      return Unit_instance;
    };
  }
  function MessageListWidget$composable$lambda$lambda_5($scrollArea$delegate) {
    return function ($this$Div) {
      $this$Div.q48(MessageListWidget$composable$lambda$lambda$lambda_2);
      $this$Div.k48(MessageListWidget$composable$lambda$lambda$lambda_3($scrollArea$delegate));
      return Unit_instance;
    };
  }
  function MessageListWidget$composable$lambda_11($list, $topSentinel$delegate, $model, $scrollArea$delegate, $isAtBottom$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(183460309, $changed, -1, 'features.text_chat.view.MessageListWidget$composable.<anonymous> (MessageListWidget.kt:139)');
        }
        if ($list.b5u_1.c1()) {
          $composer_0.x3a(826361217);
          $composer_0.x3a(-538330177);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.i3b();
          var tmp_0;
          if (false ? true : it === Companion_getInstance().s3a_1) {
            // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value = MessageListWidget$composable$lambda$lambda_3;
            $composer_0.j3b(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          $composer_0.y3a();
          Div$composable(tmpCache, ComposableSingletons$MessageListWidgetKt_getInstance().t5v_1, $composer_0, 48, 0);
          $composer_0.y3a();
        } else {
          $composer_0.x3a(826361479);
          $composer_0.x3a(-538329843);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_0.k3b($topSentinel$delegate);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.i3b();
          var tmp_2;
          if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
            // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = MessageListWidget$composable$lambda$lambda_4($topSentinel$delegate);
            $composer_0.j3b(value_0);
            tmp_2 = value_0;
          } else {
            tmp_2 = it_0;
          }
          var tmp_3 = tmp_2;
          var tmpCache_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_0.y3a();
          Div$composable(tmpCache_0, null, $composer_0, 0, 2);
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = reversed($list.b5u_1).u();
          while (tmp0_iterator.v()) {
            var element = tmp0_iterator.x();
            // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
            MessageListTile$composable(element, $composer_0, 0);
          }
          $composer_0.y3a();
        }
        if ($model.i5u() ? !MessageListWidget$composable$lambda_3($isAtBottom$delegate) : false) {
          $composer_0.x3a(-538329329);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = $composer_0.k3b($scrollArea$delegate);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_0.i3b();
          var tmp_4;
          if (invalid_0 ? true : it_1 === Companion_getInstance().s3a_1) {
            // Inline function 'features.text_chat.view.MessageListWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = MessageListWidget$composable$lambda$lambda_5($scrollArea$delegate);
            $composer_0.j3b(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmpCache_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_0.y3a();
          Div$composable(tmpCache_1, ComposableSingletons$MessageListWidgetKt_getInstance().u5v_1, $composer_0, 48, 0);
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function MessageListWidget$composable$lambda_12($model, $$changed) {
    return function ($composer, $force) {
      MessageListWidget$composable($model, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$NewMessageFormKt$lambda_1$lambda_65i0ch($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(131405154, $changed, -1, 'features.text_chat.view.ComposableSingletons$NewMessageFormKt.lambda-1.<anonymous> (NewMessageForm.kt:154)');
      }
      Text$composable('\u27A4', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$NewMessageFormKt() {
    ComposableSingletons$NewMessageFormKt_instance = this;
    var tmp = this;
    tmp.c5y_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(131405154, false, ComposableSingletons$NewMessageFormKt$lambda_1$lambda_65i0ch));
  }
  var ComposableSingletons$NewMessageFormKt_instance;
  function ComposableSingletons$NewMessageFormKt_getInstance() {
    if (ComposableSingletons$NewMessageFormKt_instance == null)
      new ComposableSingletons$NewMessageFormKt();
    return ComposableSingletons$NewMessageFormKt_instance;
  }
  function NewMessageForm$composable(model, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-403958327);
    sourceInformation($composer_0, 'C(NewMessageForm$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(model) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-403958327, $dirty, -1, 'features.text_chat.view.NewMessageForm$composable (NewMessageForm.kt:38)');
      }
      var newMessage = model.rk();
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_1 = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = $composer_1;
      $composer_2.x3a(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = NewMessageForm$composable$lambda_1;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.x3a(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_3.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_3.y3a();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.f3q_1;
      $composer_2.y3a();
      var scope = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.x3a(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_4.i3b();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>' call
        var value_0 = mutableStateOf(null);
        $composer_4.j3b(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_4.y3a();
      var textAreaElement$delegate = tmp0_1;
      var validateAndSend = NewMessageForm$composable$lambda_2(scope, newMessage, model, textAreaElement$delegate);
      $composer_0.x3a(182465159);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_0.i3b();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>' call
        var value_1 = NewMessageForm$composable$lambda_3;
        this_0.j3b(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmpCache = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, -990907833, true, NewMessageForm$composable$lambda_4(newMessage, model, textAreaElement$delegate, validateAndSend));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.x3a(-838505973);
      sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_5.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_5.i3b();
      var tmp_6;
      if (invalid ? true : it_2 === Companion_getInstance().s3a_1) {
        // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_5.j3b(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp0_2 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_5.y3a();
      Div$composable(tmpCache, tmp0_2, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(NewMessageForm$composable$lambda_5(model, $changed));
    }
  }
  function NewMessageForm$composable$lambda($textAreaElement$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('textAreaElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $textAreaElement$delegate.q2();
  }
  function NewMessageForm$composable$lambda_0($textAreaElement$delegate, value) {
    getLocalDelegateReference('textAreaElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $textAreaElement$delegate.b13(value);
  }
  function NewMessageForm$composable$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function NewMessageForm$composable$lambda$slambda($newMessage, $model, $textAreaElement$delegate, resultContinuation) {
    this.l5y_1 = $newMessage;
    this.m5y_1 = $model;
    this.n5y_1 = $textAreaElement$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NewMessageForm$composable$lambda$slambda).c1g = function ($this$launch, $completion) {
    var tmp = this.d1g($this$launch, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(NewMessageForm$composable$lambda$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NewMessageForm$composable$lambda$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 5;
            this.p5y_1 = this.l5y_1.y5u();
            if (!(this.p5y_1 == null)) {
              this.pb_1 = 4;
              continue $sm;
            } else {
              this.qb_1 = 2;
              this.pb_1 = 1;
              suspendResult = this.m5y_1.r5v(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = NewMessageForm$composable$lambda(this.n5y_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.style;
            if (tmp1_safe_receiver != null) {
              tmp1_safe_receiver.height = '44px';
            }

            this.qb_1 = 5;
            this.pb_1 = 3;
            continue $sm;
          case 2:
            this.qb_1 = 5;
            var tmp_0 = this.sb_1;
            if (tmp_0 instanceof Error) {
              var e = this.sb_1;
              var errorInfo = get_log().o5o(e);
              showErrorSnackBar(errorInfo);
              this.pb_1 = 3;
              continue $sm;
            } else {
              throw this.sb_1;
            }

          case 3:
            this.qb_1 = 5;
            this.pb_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.sb_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.qb_1 === 5) {
          throw e_0;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(NewMessageForm$composable$lambda$slambda).d1g = function ($this$launch, completion) {
    var i = new NewMessageForm$composable$lambda$slambda(this.l5y_1, this.m5y_1, this.n5y_1, completion);
    i.o5y_1 = $this$launch;
    return i;
  };
  function NewMessageForm$composable$lambda$slambda_0($newMessage, $model, $textAreaElement$delegate, resultContinuation) {
    var i = new NewMessageForm$composable$lambda$slambda($newMessage, $model, $textAreaElement$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.c1g($this$launch, $completion);
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
    $this$Div.q48(NewMessageForm$composable$lambda$lambda);
    return Unit_instance;
  }
  function NewMessageForm$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    backgroundColor($this$style, tmp$ret$0);
    $this$style.r4f('border-top', '1px solid #e0e0e0');
    padding($this$style, [get_px(12)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.r4f('gap', '8px');
    $this$style.r4f('flex-shrink', '0');
    return Unit_instance;
  }
  function NewMessageForm$composable$lambda$lambda$lambda($model) {
    return function (event) {
      $model.p5v(event.k4h_1.value);
      return Unit_instance;
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda_0($this$style) {
    padding($this$style, [get_px(12)]);
    $this$style.r4f('border', '1px solid #ddd');
    $this$style.r4f('border-radius', '8px');
    fontSize($this$style, get_px(14));
    width($this$style, get_percent(100));
    $this$style.r4f('box-sizing', 'border-box');
    return Unit_instance;
  }
  function NewMessageForm$composable$lambda$lambda_0($newMessage, $model) {
    return function ($this$Input) {
      $this$Input.b4f($newMessage.u5u_1);
      placeholder($this$Input, 'Your name');
      $this$Input.c4f(NewMessageForm$composable$lambda$lambda$lambda($model));
      $this$Input.q48(NewMessageForm$composable$lambda$lambda$lambda_0);
      return Unit_instance;
    };
  }
  function NewMessageForm$composable$lambda$lambda_1($this$Div) {
    $this$Div.q48(NewMessageForm$composable$lambda$lambda$lambda_1);
    return Unit_instance;
  }
  function NewMessageForm$composable$lambda$lambda$lambda_1($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    $this$style.r4f('gap', '8px');
    return Unit_instance;
  }
  function _no_name_provided__qut3iv_5() {
  }
  protoOf(_no_name_provided__qut3iv_5).jn = function () {
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
      var target = event.k4h_1;
      $model.q5v(target.value);
      target.style.height = 'auto';
      var scrollHeight = target.scrollHeight;
      var lineHeight = 20;
      var maxHeight = imul(lineHeight, 5) + 24 | 0;
      var tmp = target.style;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp.height = '' + Math.min(scrollHeight, maxHeight) + 'px';
      return Unit_instance;
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_1($validateAndSend) {
    return function (event) {
      var tmp;
      if (event.f4j_1 === 'Enter' ? !event.k4j_1 : false) {
        event.v4h();
        $validateAndSend();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_2($this$style) {
    $this$style.r4f('flex', '1');
    padding($this$style, [get_px(12)]);
    $this$style.r4f('border', '1px solid #ddd');
    $this$style.r4f('border-radius', '8px');
    fontSize($this$style, get_px(14));
    $this$style.r4f('resize', 'none');
    $this$style.r4f('overflow-y', 'auto');
    $this$style.r4f('min-height', '44px');
    $this$style.r4f('max-height', '124px');
    $this$style.r4f('line-height', '20px');
    $this$style.r4f('font-family', 'inherit');
    return Unit_instance;
  }
  function NewMessageForm$composable$lambda$lambda$lambda_2($newMessage, $textAreaElement$delegate, $model, $validateAndSend) {
    return function ($this$TextArea) {
      $this$TextArea.b4f($newMessage.v5u_1);
      placeholder_0($this$TextArea, 'Enter message text...');
      rows($this$TextArea, 1);
      $this$TextArea.h4f(NewMessageForm$composable$lambda$lambda$lambda$lambda($textAreaElement$delegate));
      $this$TextArea.i4f(NewMessageForm$composable$lambda$lambda$lambda$lambda_0($model));
      $this$TextArea.l48(NewMessageForm$composable$lambda$lambda$lambda$lambda_1($validateAndSend));
      $this$TextArea.q48(NewMessageForm$composable$lambda$lambda$lambda$lambda_2);
      return Unit_instance;
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_3($validateAndSend) {
    return function (it) {
      $validateAndSend();
      return Unit_instance;
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda$lambda_4($newMessage) {
    return function ($this$style) {
      $this$style.r4f('padding', '12px 24px');
      backgroundColor($this$style, $newMessage.w5u_1 == null ? Color('#2196F3') : Color('#ccc'));
      // Inline function 'org.jetbrains.compose.web.css.Color.white' call
      var tmp$ret$0 = Color('white');
      color($this$style, tmp$ret$0);
      $this$style.r4f('border', '0');
      $this$style.r4f('border-radius', '8px');
      fontSize($this$style, get_px(14));
      $this$style.r4f('font-weight', '600');
      return Unit_instance;
    };
  }
  function NewMessageForm$composable$lambda$lambda$lambda_3($validateAndSend, $newMessage) {
    return function ($this$Button) {
      $this$Button.k48(NewMessageForm$composable$lambda$lambda$lambda$lambda_3($validateAndSend));
      $this$Button.q48(NewMessageForm$composable$lambda$lambda$lambda$lambda_4($newMessage));
      return Unit_instance;
    };
  }
  function NewMessageForm$composable$lambda$lambda_2($newMessage, $textAreaElement$delegate, $model, $validateAndSend) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-1766096856, $changed, -1, 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous> (NewMessageForm.kt:95)');
        }
        $composer_0.x3a(182466212);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!(!!($composer_0.k3b($newMessage) | $composer_0.k3b($textAreaElement$delegate)) | $composer_0.k3b($model)) | $composer_0.m3b($validateAndSend));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = NewMessageForm$composable$lambda$lambda$lambda_2($newMessage, $textAreaElement$delegate, $model, $validateAndSend);
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        TextArea$composable(null, tmpCache, $composer_0, 0, 1);
        $composer_0.x3a(182467836);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.m3b($validateAndSend) | $composer_0.k3b($newMessage));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.i3b();
        var tmp_2;
        if (invalid_0 ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = NewMessageForm$composable$lambda$lambda$lambda_3($validateAndSend, $newMessage);
          $composer_0.j3b(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmpCache_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.y3a();
        Button$composable(tmpCache_0, ComposableSingletons$NewMessageFormKt_getInstance().c5y_1, $composer_0, 48, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function NewMessageForm$composable$lambda_4($newMessage, $model, $textAreaElement$delegate, $validateAndSend) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-990907833, $changed, -1, 'features.text_chat.view.NewMessageForm$composable.<anonymous> (NewMessageForm.kt:72)');
        }
        var tmp_0 = Text_getInstance();
        $composer_0.x3a(182465513);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.k3b($newMessage) | $composer_0.k3b($model));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = NewMessageForm$composable$lambda$lambda_0($newMessage, $model);
          $composer_0.j3b(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.y3a();
        Input$composable(tmp_0, tmpCache, $composer_0, 6);
        $composer_0.x3a(182466060);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.i3b();
        var tmp_3;
        if (false ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = NewMessageForm$composable$lambda$lambda_1;
          $composer_0.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmpCache_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, -1766096856, true, NewMessageForm$composable$lambda$lambda_2($newMessage, $textAreaElement$delegate, $model, $validateAndSend));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.i3b();
        var tmp_6;
        if (invalid_0 ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'features.text_chat.view.NewMessageForm$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_12(dispatchReceiver);
          $composer_1.j3b(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache_0, tmp0, $composer_0, 48, 0);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function NewMessageForm$composable$lambda_5($model, $$changed) {
    return function ($composer, $force) {
      NewMessageForm$composable($model, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$EmptyPageKt$lambda_1$lambda_5p8566($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-283855530, $changed, -1, 'ComposableSingletons$EmptyPageKt.lambda-1.<anonymous> (EmptyPage.kt:40)');
      }
      Text$composable('\u042D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u0430', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$EmptyPageKt() {
    ComposableSingletons$EmptyPageKt_instance = this;
    var tmp = this;
    tmp.q5y_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-283855530, false, ComposableSingletons$EmptyPageKt$lambda_1$lambda_5p8566));
  }
  var ComposableSingletons$EmptyPageKt_instance;
  function ComposableSingletons$EmptyPageKt_getInstance() {
    if (ComposableSingletons$EmptyPageKt_instance == null)
      new ComposableSingletons$EmptyPageKt();
    return ComposableSingletons$EmptyPageKt_instance;
  }
  function EmptyPage$composable(title, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(434379590);
    sourceInformation($composer_0, 'C(EmptyPage$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(title) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(434379590, $dirty, -1, 'EmptyPage$composable (EmptyPage.kt:6)');
      }
      $composer_0.x3a(-868727742);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'EmptyPage$composable.<anonymous>' call
        var value = EmptyPage$composable$lambda;
        this_0.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'EmptyPage$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -99265332, true, EmptyPage$composable$lambda_0(title));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i3b();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.j3b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.y3a();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(EmptyPage$composable$lambda_1(title, $changed));
    }
  }
  function EmptyPage$composable$lambda($this$Div) {
    $this$Div.q48(EmptyPage$composable$lambda$lambda);
    return Unit_instance;
  }
  function EmptyPage$composable$lambda$lambda($this$style) {
    height($this$style, get_percent(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    flex($this$style, 1);
    return Unit_instance;
  }
  function EmptyPage$composable$lambda$lambda_0($this$Div) {
    $this$Div.q48(EmptyPage$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function EmptyPage$composable$lambda$lambda$lambda($this$style) {
    padding($this$style, [get_px(16)]);
    backgroundColor($this$style, Color('#2196F3'));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    fontSize($this$style, get_px(20));
    fontWeight($this$style, '600');
    textAlign($this$style, 'center');
    return Unit_instance;
  }
  function EmptyPage$composable$lambda$lambda_1($title) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-1741242579, $changed, -1, 'EmptyPage$composable.<anonymous>.<anonymous> (EmptyPage.kt:26)');
        }
        Text$composable($title, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function EmptyPage$composable$lambda$lambda_2($this$Div) {
    $this$Div.q48(EmptyPage$composable$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function EmptyPage$composable$lambda$lambda$lambda_0($this$style) {
    flex($this$style, 1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    color($this$style, Color('#999'));
    fontSize($this$style, get_px(16));
    return Unit_instance;
  }
  function EmptyPage$composable$lambda_0($title) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-99265332, $changed, -1, 'EmptyPage$composable.<anonymous> (EmptyPage.kt:16)');
        }
        $composer_0.x3a(-868727533);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = EmptyPage$composable$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1741242579, true, EmptyPage$composable$lambda$lambda_1($title));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.x3a(-868727192);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.i3b();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'EmptyPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = EmptyPage$composable$lambda$lambda_2;
          $composer_0.j3b(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.y3a();
        Div$composable(tmpCache_0, ComposableSingletons$EmptyPageKt_getInstance().q5y_1, $composer_0, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function EmptyPage$composable$lambda_1($title, $$changed) {
    return function ($composer, $force) {
      EmptyPage$composable($title, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_snackBarState() {
    _init_properties_ErrorWidgets_kt__isina1();
    return snackBarState;
  }
  var snackBarState;
  function showErrorSnackBar(errorInfo) {
    _init_properties_ErrorWidgets_kt__isina1();
    get_snackBarState().b13(errorInfo);
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$ErrorWidgetsKt$lambda_1$lambda_arahlx($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-227956946, $changed, -1, 'view.ComposableSingletons$ErrorWidgetsKt.lambda-1.<anonymous> (ErrorWidgets.kt:49)');
      }
      Text$composable('\u26A0\uFE0F', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$ErrorWidgetsKt$lambda_2$lambda_i2bzga($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(384073164, $changed, -1, 'view.ComposableSingletons$ErrorWidgetsKt.lambda-2.<anonymous> (ErrorWidgets.kt:162)');
      }
      Text$composable('\u26A0\uFE0F', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ErrorWidgetsKt() {
    ComposableSingletons$ErrorWidgetsKt_instance = this;
    var tmp = this;
    tmp.r5y_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-227956946, false, ComposableSingletons$ErrorWidgetsKt$lambda_1$lambda_arahlx));
    var tmp_0 = this;
    tmp_0.s5y_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(384073164, false, ComposableSingletons$ErrorWidgetsKt$lambda_2$lambda_i2bzga));
  }
  var ComposableSingletons$ErrorWidgetsKt_instance;
  function ComposableSingletons$ErrorWidgetsKt_getInstance() {
    if (ComposableSingletons$ErrorWidgetsKt_instance == null)
      new ComposableSingletons$ErrorWidgetsKt();
    return ComposableSingletons$ErrorWidgetsKt_instance;
  }
  function ErrorWidget$composable(errorInfo, $composer, $changed) {
    _init_properties_ErrorWidgets_kt__isina1();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(1051885405);
    sourceInformation($composer_0, 'C(ErrorWidget$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(errorInfo) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(1051885405, $dirty, -1, 'view.ErrorWidget$composable (ErrorWidgets.kt:16)');
      }
      $composer_0.x3a(469040024);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'view.ErrorWidget$composable.<anonymous>' call
        var value = ErrorWidget$composable$lambda;
        this_0.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.ErrorWidget$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 713376274, true, ErrorWidget$composable$lambda_0(errorInfo));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i3b();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.j3b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.y3a();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(ErrorWidget$composable$lambda_1(errorInfo, $changed));
    }
  }
  function SnackBarHost$composable($composer, $changed) {
    _init_properties_ErrorWidgets_kt__isina1();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(759070614);
    sourceInformation($composer_0, 'C(SnackBarHost$composable)');
    if (!($changed === 0) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(759070614, $changed, -1, 'view.SnackBarHost$composable (ErrorWidgets.kt:90)');
      }
      var errorInfo = get_snackBarState().q2();
      if (!(errorInfo == null)) {
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.i3b();
        var tmp;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value = mutableStateOf(100);
          $composer_1.j3b(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_1.y3a();
        var offsetY$delegate = tmp0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.x3a(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.i3b();
        var tmp_1;
        if (false ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_0 = mutableStateOf(false);
          $composer_2.j3b(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_2.y3a();
        var isDragging$delegate = tmp0_0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.x3a(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.i3b();
        var tmp_3;
        if (false ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_1 = mutableStateOf(0);
          $composer_3.j3b(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp0_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_3.y3a();
        var startY$delegate = tmp0_1;
        $composer_0.x3a(469042612);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        var invalid = $composer_0.k3b(offsetY$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = this_0.i3b();
        var tmp_5;
        if (invalid ? true : it_2 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_2 = SnackBarHost$composable$slambda_0(offsetY$delegate, null);
          this_0.j3b(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmpCache = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.y3a();
        LaunchedEffect$composable(errorInfo, tmpCache, $composer_0, 0);
        $composer_0.x3a(469042698);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = this_1.i3b();
        var tmp_7;
        if (false ? true : it_3 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_3 = SnackBarHost$composable$lambda_5;
          this_1.j3b(value_3);
          tmp_7 = value_3;
        } else {
          tmp_7 = it_3;
        }
        var tmp_8 = tmp_7;
        var tmpCache_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.y3a();
        Div$composable(tmpCache_0, null, $composer_0, 0, 2);
        $composer_0.x3a(469043234);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid_0 = !!(!!($composer_0.k3b(offsetY$delegate) | $composer_0.k3b(isDragging$delegate)) | $composer_0.k3b(startY$delegate));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = this_2.i3b();
        var tmp_9;
        if (invalid_0 ? true : it_4 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_4 = SnackBarHost$composable$lambda_6(offsetY$delegate, isDragging$delegate, startY$delegate);
          this_2.j3b(value_4);
          tmp_9 = value_4;
        } else {
          tmp_9 = it_4;
        }
        var tmp_10 = tmp_9;
        var tmpCache_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.SnackBarHost$composable.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_11, 691533416, true, SnackBarHost$composable$lambda_7(errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.x3a(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_4.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_5 = $composer_4.i3b();
        var tmp_12;
        if (invalid_1 ? true : it_5 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>' call
          var value_5 = ComposableLambda$invoke$ref_27(dispatchReceiver);
          $composer_4.j3b(value_5);
          tmp_12 = value_5;
        } else {
          tmp_12 = it_5;
        }
        var tmp_13 = tmp_12;
        var tmp0_2 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_4.y3a();
        Div$composable(tmpCache_1, tmp0_2, $composer_0, 48, 0);
        var tmp_14 = SnackBarHost$composable$lambda_1(isDragging$delegate);
        $composer_0.x3a(469045774);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_3 = $composer_0;
        var invalid_2 = !!(!!($composer_0.k3b(isDragging$delegate) | $composer_0.k3b(startY$delegate)) | $composer_0.k3b(offsetY$delegate));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_6 = this_3.i3b();
        var tmp_15;
        if (invalid_2 ? true : it_6 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>' call
          var value_6 = SnackBarHost$composable$lambda_8(isDragging$delegate, startY$delegate, offsetY$delegate);
          this_3.j3b(value_6);
          tmp_15 = value_6;
        } else {
          tmp_15 = it_6;
        }
        var tmp_16 = tmp_15;
        var tmpCache_2 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        $composer_0.y3a();
        DisposableEffect$composable_0(tmp_14, tmpCache_2, $composer_0, 0);
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable' call
        var applyAttrs = null;
        var $composer_5 = $composer_0;
        $composer_5.x3a(1760347178);
        sourceInformation($composer_5, 'CC(Style$composable)');
        if (!((1 & 1) === 0))
          applyAttrs = null;
        var builder = new StyleSheetBuilderImpl();
        // Inline function 'view.SnackBarHost$composable.<anonymous>' call
        Style$composable(applyAttrs, builder.j4g(), $composer_5, 14 & 0, 0);
        $composer_5.y3a();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(SnackBarHost$composable$lambda_9($changed));
    }
  }
  function SnackBarHost$composable$lambda($offsetY$delegate) {
    _init_properties_ErrorWidgets_kt__isina1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('offsetY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offsetY$delegate.q2();
  }
  function SnackBarHost$composable$lambda_0($offsetY$delegate, value) {
    _init_properties_ErrorWidgets_kt__isina1();
    getLocalDelegateReference('offsetY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offsetY$delegate.b13(value);
  }
  function SnackBarHost$composable$lambda_1($isDragging$delegate) {
    _init_properties_ErrorWidgets_kt__isina1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isDragging', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isDragging$delegate.q2();
  }
  function SnackBarHost$composable$lambda_2($isDragging$delegate, value) {
    _init_properties_ErrorWidgets_kt__isina1();
    getLocalDelegateReference('isDragging', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isDragging$delegate.b13(value);
  }
  function SnackBarHost$composable$lambda_3($startY$delegate) {
    _init_properties_ErrorWidgets_kt__isina1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('startY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $startY$delegate.q2();
  }
  function SnackBarHost$composable$lambda_4($startY$delegate, value) {
    _init_properties_ErrorWidgets_kt__isina1();
    getLocalDelegateReference('startY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $startY$delegate.b13(value);
  }
  function ErrorWidget$composable$lambda($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.q48(ErrorWidget$composable$lambda$lambda);
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.r4f('align-items', 'center');
    $this$style.r4f('justify-content', 'center');
    $this$style.r4f('flex', '1');
    padding($this$style, [get_px(24)]);
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda_0($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.q48(ErrorWidget$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    backgroundColor($this$style, Color('#ffebee'));
    $this$style.r4f('border-left', '4px solid #f44336');
    $this$style.r4f('border-radius', '8px');
    padding($this$style, [get_px(24)]);
    $this$style.r4f('box-shadow', '0 2px 8px rgba(0,0,0,0.1)');
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda$lambda_0($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.q48(ErrorWidget$composable$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(20));
    color($this$style, Color('#c62828'));
    $this$style.r4f('font-weight', '600');
    $this$style.r4f('margin-bottom', '12px');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    $this$style.r4f('align-items', 'center');
    $this$style.r4f('gap', '8px');
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda_0($this$Span) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Span.q48(ErrorWidget$composable$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(24));
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda$lambda_1($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(569139792, $changed, -1, 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:48)');
        }
        $composer_0.x3a(469041101);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ErrorWidget$composable$lambda$lambda$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        Span$composable(tmpCache, ComposableSingletons$ErrorWidgetsKt_getInstance().r5y_1, $composer_0, 48, 0);
        Text$composable($errorInfo.f5p_1, $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda$lambda$lambda_2($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.q48(ErrorWidget$composable$lambda$lambda$lambda$lambda_1);
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda_1($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(14));
    color($this$style, Color('#666'));
    $this$style.r4f('line-height', '1.6');
    $this$style.r4f('margin-top', '8px');
    backgroundColor($this$style, Color('#fff'));
    padding($this$style, [get_px(12)]);
    $this$style.r4f('border-radius', '4px');
    $this$style.r4f('font-family', 'monospace');
    $this$style.r4f('word-break', 'break-word');
    return Unit_instance;
  }
  function ErrorWidget$composable$lambda$lambda$lambda$lambda_2($errorInfo) {
    return function ($this$Pre, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(1214875672, $changed, -1, 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:67)');
        }
        Text$composable($errorInfo.g5p_1, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda$lambda$lambda_3($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
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
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.i3b();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
          $composer_1.j3b(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.y3a();
        Pre$composable(null, tmp0, $composer_0, 48, 1);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda$lambda_1($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-1769127663, $changed, -1, 'view.ErrorWidget$composable.<anonymous>.<anonymous> (ErrorWidgets.kt:37)');
        }
        $composer_0.x3a(469040690);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ErrorWidget$composable$lambda$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 569139792, true, ErrorWidget$composable$lambda$lambda$lambda_1($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_19(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.x3a(469041251);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.i3b();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ErrorWidget$composable$lambda$lambda$lambda_2;
          $composer_0.j3b(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -1519252281, true, ErrorWidget$composable$lambda$lambda$lambda_3($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.x3a(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.k3b(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.i3b();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance().s3a_1) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
          $composer_2.j3b(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.y3a();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda_0($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(713376274, $changed, -1, 'view.ErrorWidget$composable.<anonymous> (ErrorWidgets.kt:27)');
        }
        $composer_0.x3a(469040317);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = ErrorWidget$composable$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1769127663, true, ErrorWidget$composable$lambda$lambda_1($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'view.ErrorWidget$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_22(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ErrorWidget$composable$lambda_1($errorInfo, $$changed) {
    return function ($composer, $force) {
      ErrorWidget$composable($errorInfo, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SnackBarHost$composable$slambda($offsetY$delegate, resultContinuation) {
    this.b5z_1 = $offsetY$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnackBarHost$composable$slambda).c1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.d1g($this$LaunchedEffect, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(SnackBarHost$composable$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnackBarHost$composable$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        if (tmp === 0) {
          this.qb_1 = 1;
          SnackBarHost$composable$lambda_0(this.b5z_1, 0);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SnackBarHost$composable$slambda).d1g = function ($this$LaunchedEffect, completion) {
    var i = new SnackBarHost$composable$slambda(this.b5z_1, completion);
    i.c5z_1 = $this$LaunchedEffect;
    return i;
  };
  function SnackBarHost$composable$slambda_0($offsetY$delegate, resultContinuation) {
    var i = new SnackBarHost$composable$slambda($offsetY$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.c1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnackBarHost$composable$lambda_5($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.q48(SnackBarHost$composable$lambda$lambda);
    $this$Div.k48(SnackBarHost$composable$lambda$lambda_0);
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$style.r4f('position', 'fixed');
    $this$style.r4f('top', '0');
    $this$style.r4f('left', '0');
    $this$style.r4f('right', '0');
    $this$style.r4f('bottom', '0');
    backgroundColor($this$style, Color('rgba(0, 0, 0, 0.5)'));
    $this$style.r4f('z-index', '1000');
    $this$style.r4f('animation', 'fadeIn 0.3s ease-out');
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda_0(it) {
    _init_properties_ErrorWidgets_kt__isina1();
    get_snackBarState().b13(null);
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda_1($offsetY$delegate, $isDragging$delegate) {
    return function ($this$style) {
      $this$style.r4f('position', 'fixed');
      $this$style.r4f('bottom', '' + SnackBarHost$composable$lambda($offsetY$delegate) + 'px');
      $this$style.r4f('left', '16px');
      $this$style.r4f('right', '16px');
      $this$style.r4f('z-index', '1001');
      $this$style.r4f('margin', '0 auto');
      $this$style.r4f('transition', SnackBarHost$composable$lambda_1($isDragging$delegate) ? 'none' : 'bottom 0.3s ease-out');
      $this$style.r4f('touch-action', 'none');
      $this$style.r4f('user-select', 'none');
      return Unit_instance;
    };
  }
  function SnackBarHost$composable$lambda$lambda_2($isDragging$delegate, $startY$delegate) {
    return function (event) {
      SnackBarHost$composable$lambda_2($isDragging$delegate, true);
      SnackBarHost$composable$lambda_4($startY$delegate, event.d4k_1);
      event.v4h();
      return Unit_instance;
    };
  }
  function SnackBarHost$composable$lambda_6($offsetY$delegate, $isDragging$delegate, $startY$delegate) {
    return function ($this$Div) {
      $this$Div.q48(SnackBarHost$composable$lambda$lambda_1($offsetY$delegate, $isDragging$delegate));
      $this$Div.m48(SnackBarHost$composable$lambda$lambda_2($isDragging$delegate, $startY$delegate));
      return Unit_instance;
    };
  }
  function SnackBarHost$composable$lambda$lambda_3($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.q48(SnackBarHost$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    backgroundColor($this$style, Color('#f44336'));
    $this$style.r4f('border-radius', '12px');
    padding($this$style, [get_px(20)]);
    $this$style.r4f('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda$lambda_0($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.q48(SnackBarHost$composable$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(18));
    $this$style.r4f('font-weight', '600');
    $this$style.r4f('margin-bottom', '8px');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    $this$style.r4f('align-items', 'center');
    $this$style.r4f('gap', '8px');
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda$lambda$lambda_0($this$Span) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Span.q48(SnackBarHost$composable$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda$lambda$lambda$lambda($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(20));
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda$lambda_1($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(409785962, $changed, -1, 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:161)');
        }
        $composer_0.x3a(469044776);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SnackBarHost$composable$lambda$lambda$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        Span$composable(tmpCache, ComposableSingletons$ErrorWidgetsKt_getInstance().s5y_1, $composer_0, 48, 0);
        Text$composable($errorInfo.f5p_1, $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function SnackBarHost$composable$lambda$lambda$lambda_2($this$Div) {
    _init_properties_ErrorWidgets_kt__isina1();
    $this$Div.q48(SnackBarHost$composable$lambda$lambda$lambda$lambda_1);
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda$lambda$lambda_1($this$style) {
    _init_properties_ErrorWidgets_kt__isina1();
    fontSize($this$style, get_px(14));
    $this$style.r4f('line-height', '1.5');
    $this$style.r4f('opacity', '0.95');
    $this$style.r4f('max-height', '200px');
    $this$style.r4f('overflow-y', 'auto');
    backgroundColor($this$style, Color('rgba(0, 0, 0, 0.2)'));
    padding($this$style, [get_px(12)]);
    $this$style.r4f('border-radius', '8px');
    $this$style.r4f('font-family', 'monospace');
    $this$style.r4f('word-break', 'break-word');
    return Unit_instance;
  }
  function SnackBarHost$composable$lambda$lambda$lambda_3($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-488865517, $changed, -1, 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous> (ErrorWidgets.kt:182)');
        }
        Text$composable($errorInfo.g5p_1, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function SnackBarHost$composable$lambda$lambda_4($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(1858378633, $changed, -1, 'view.SnackBarHost$composable.<anonymous>.<anonymous> (ErrorWidgets.kt:151)');
        }
        $composer_0.x3a(469044370);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SnackBarHost$composable$lambda$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 409785962, true, SnackBarHost$composable$lambda$lambda$lambda_1($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.x3a(469044979);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.i3b();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = SnackBarHost$composable$lambda$lambda$lambda_2;
          $composer_0.j3b(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -488865517, true, SnackBarHost$composable$lambda$lambda$lambda_3($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.x3a(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.k3b(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.i3b();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_25(dispatchReceiver_0);
          $composer_2.j3b(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.y3a();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function SnackBarHost$composable$lambda_7($errorInfo) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(691533416, $changed, -1, 'view.SnackBarHost$composable.<anonymous> (ErrorWidgets.kt:141)');
        }
        $composer_0.x3a(469044005);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = SnackBarHost$composable$lambda$lambda_3;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 1858378633, true, SnackBarHost$composable$lambda$lambda_4($errorInfo));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_26(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SnackBarHost$composable$lambda$lambda_6($isDragging$delegate, $offsetY$delegate) {
    return function (it) {
      SnackBarHost$composable$lambda_2($isDragging$delegate, false);
      var tmp;
      if (SnackBarHost$composable$lambda($offsetY$delegate) > 100) {
        get_snackBarState().b13(null);
        tmp = Unit_instance;
      } else {
        SnackBarHost$composable$lambda_0($offsetY$delegate, 0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_6($moveHandler, $upHandler) {
    this.d5z_1 = $moveHandler;
    this.e5z_1 = $upHandler;
  }
  protoOf(_no_name_provided__qut3iv_6).jn = function () {
    // Inline function 'view.SnackBarHost$composable.<anonymous>.<anonymous>.<anonymous>' call
    window.removeEventListener('mousemove', this.d5z_1);
    window.removeEventListener('mouseup', this.e5z_1);
  };
  function _no_name_provided__qut3iv_7() {
  }
  protoOf(_no_name_provided__qut3iv_7).jn = function () {
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
      return Unit_instance;
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
  function values() {
    return [Page_Chat_getInstance(), Page_Audio_getInstance(), Page_Devices_getInstance(), Page_Settings_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Page_entriesInitialized;
  function Page_initEntries() {
    if (Page_entriesInitialized)
      return Unit_instance;
    Page_entriesInitialized = true;
    Page_Chat_instance = new Page('Chat', 0, 'Chat');
    Page_Audio_instance = new Page('Audio', 1, 'Audio');
    Page_Devices_instance = new Page('Devices', 2, 'Devices');
    Page_Settings_instance = new Page('Settings', 3, 'Info');
  }
  var $ENTRIES;
  function Page(name, ordinal, title) {
    Enum.call(this, name, ordinal);
    this.h5z_1 = title;
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-278071881);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-278071881, $changed, -1, 'view.HomePage$composable (HomePage.kt:20)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'view.HomePage$composable.<anonymous>' call
        var value = mutableStateOf(Page_Chat_getInstance());
        $composer_1.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.y3a();
      var currentPage$delegate = tmp0;
      $composer_0.x3a(-1071068059);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.i3b();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'view.HomePage$composable.<anonymous>' call
        var value_0 = HomePage$composable$lambda_1;
        this_0.j3b(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.HomePage$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 968191092, true, HomePage$composable$lambda_2(currentPage$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.x3a(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.i3b();
      var tmp_4;
      if (invalid ? true : it_1 === Companion_getInstance().s3a_1) {
        // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_29(dispatchReceiver);
        $composer_2.j3b(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_2.y3a();
      Div$composable(tmpCache, tmp0_0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(HomePage$composable$lambda_3($changed));
    }
  }
  function AppBottomNavigation$composable(currentPage, onPageSelected, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-1665661809);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(currentPage) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m3b(onPageSelected) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-1665661809, $dirty, -1, 'view.AppBottomNavigation$composable (HomePage.kt:68)');
      }
      $composer_0.x3a(-1071066720);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'view.AppBottomNavigation$composable.<anonymous>' call
        var value = AppBottomNavigation$composable$lambda;
        this_0.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.AppBottomNavigation$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -2110428404, true, AppBottomNavigation$composable$lambda_0(currentPage, onPageSelected));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i3b();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'view.AppBottomNavigation$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_30(dispatchReceiver);
        $composer_1.j3b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.y3a();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(AppBottomNavigation$composable$lambda_1(currentPage, onPageSelected, $changed));
    }
  }
  function NavButton$composable(title, isSelected, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(754170621);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l3b(isSelected) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m3b(onClick) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(754170621, $dirty, -1, 'view.NavButton$composable (HomePage.kt:97)');
      }
      $composer_0.x3a(-1071065875);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!($composer_0.m3b(onClick) | $composer_0.l3b(isSelected));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i3b();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'view.NavButton$composable.<anonymous>' call
        var value = NavButton$composable$lambda(onClick, isSelected);
        this_0.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.NavButton$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1898186581, true, NavButton$composable$lambda_0(title));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i3b();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'view.NavButton$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_31(dispatchReceiver);
        $composer_1.j3b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.y3a();
      Button$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(NavButton$composable$lambda_1(title, isSelected, onClick, $changed));
    }
  }
  function HomePage$composable$lambda($currentPage$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currentPage$delegate.q2();
  }
  function HomePage$composable$lambda_0($currentPage$delegate, value) {
    getLocalDelegateReference('currentPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currentPage$delegate.b13(value);
  }
  function HomePage$composable$lambda_1($this$Div) {
    $this$Div.q48(HomePage$composable$lambda$lambda);
    return Unit_instance;
  }
  function HomePage$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    $this$style.r4f('height', '100dvh');
    $this$style.r4f('min-height', '100vh');
    $this$style.r4f('min-height', '-webkit-fill-available');
    width($this$style, get_vw(100));
    margin($this$style, [get_px(0)]);
    padding($this$style, [get_px(0)]);
    fontFamily($this$style, ['system-ui', '-apple-system', 'sans-serif']);
    backgroundColor($this$style, Color('#f5f5f5'));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = 'relative';
    position($this$style, tmp$ret$11);
    $this$style.r4f('box-sizing', 'border-box');
    return Unit_instance;
  }
  function HomePage$composable$lambda$lambda_0($this$Div) {
    $this$Div.q48(HomePage$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function HomePage$composable$lambda$lambda$lambda($this$style) {
    $this$style.r4f('flex', '1');
    $this$style.r4f('overflow', 'hidden');
    $this$style.r4f('box-sizing', 'border-box');
    return Unit_instance;
  }
  function HomePage$composable$lambda$lambda_1($currentPage$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(560278549, $changed, -1, 'view.HomePage$composable.<anonymous>.<anonymous> (HomePage.kt:47)');
        }
        switch (HomePage$composable$lambda($currentPage$delegate).l9_1) {
          case 0:
            $composer_0.x3a(1645156134);
            ChatPage$composable($composer_0, 0);
            $composer_0.y3a();
            break;
          case 1:
            $composer_0.x3a(1645156175);
            EmptyPage$composable('Audio-room', $composer_0, 6);
            $composer_0.y3a();
            break;
          case 2:
            $composer_0.x3a(1645156231);
            EmptyPage$composable('Devices', $composer_0, 6);
            $composer_0.y3a();
            break;
          case 3:
            $composer_0.x3a(1645156285);
            InfoPage$composable($composer_0, 0);
            $composer_0.y3a();
            break;
          default:
            $composer_0.x3a(1645156309);
            $composer_0.y3a();
            break;
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function HomePage$composable$lambda$lambda_2($currentPage$delegate) {
    return function (it) {
      HomePage$composable$lambda_0($currentPage$delegate, it);
      return Unit_instance;
    };
  }
  function HomePage$composable$lambda_2($currentPage$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(968191092, $changed, -1, 'view.HomePage$composable.<anonymous> (HomePage.kt:40)');
        }
        $composer_0.x3a(-1071067432);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = HomePage$composable$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 560278549, true, HomePage$composable$lambda$lambda_1($currentPage$delegate));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        var tmp_5 = HomePage$composable$lambda($currentPage$delegate);
        $composer_0.x3a(-1071066899);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.k3b($currentPage$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.i3b();
        var tmp_6;
        if (invalid_0 ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'view.HomePage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = HomePage$composable$lambda$lambda_2($currentPage$delegate);
          $composer_0.j3b(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmpCache_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.y3a();
        AppBottomNavigation$composable(tmp_5, tmpCache_0, $composer_0, 0);
        SnackBarHost$composable($composer_0, 0);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function HomePage$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AppBottomNavigation$composable$lambda($this$Div) {
    $this$Div.q48(AppBottomNavigation$composable$lambda$lambda);
    return Unit_instance;
  }
  function AppBottomNavigation$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'space-around';
    justifyContent($this$style, tmp$ret$7);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$12 = Color('white');
    backgroundColor($this$style, tmp$ret$12);
    $this$style.r4f('border-top', '1px solid #e0e0e0');
    padding($this$style, [get_px(12)]);
    $this$style.r4f('padding-bottom', 'calc(12px + env(safe-area-inset-bottom))');
    $this$style.r4f('box-shadow', '0 -2px 10px rgba(0,0,0,0.1)');
    $this$style.r4f('flex-shrink', '0');
    return Unit_instance;
  }
  function AppBottomNavigation$composable$lambda$lambda_0($onPageSelected, $screen) {
    return function () {
      $onPageSelected($screen);
      return Unit_instance;
    };
  }
  function AppBottomNavigation$composable$lambda_0($currentPage, $onPageSelected) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-2110428404, $changed, -1, 'view.AppBottomNavigation$composable.<anonymous> (HomePage.kt:82)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries().u();
        while (tmp0_iterator.v()) {
          var element = tmp0_iterator.x();
          // Inline function 'view.AppBottomNavigation$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = $currentPage.equals(element);
          $composer_0.x3a(-1071066053);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_0.m3b($onPageSelected) | $composer_0.k3b(element));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.i3b();
          var tmp_1;
          if (invalid ? true : it === Companion_getInstance().s3a_1) {
            // Inline function 'view.AppBottomNavigation$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = AppBottomNavigation$composable$lambda$lambda_0($onPageSelected, element);
            $composer_0.j3b(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.y3a();
          NavButton$composable(element.h5z_1, tmp_0, tmpCache, $composer_0, 0);
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function AppBottomNavigation$composable$lambda_1($currentPage, $onPageSelected, $$changed) {
    return function ($composer, $force) {
      AppBottomNavigation$composable($currentPage, $onPageSelected, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavButton$composable$lambda$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_instance;
    };
  }
  function NavButton$composable$lambda$lambda_0($isSelected) {
    return function ($this$style) {
      $this$style.r4f('flex', '1');
      $this$style.r4f('padding', '12px 8px');
      $this$style.r4f('border', '0');
      var tmp;
      if ($isSelected) {
        tmp = Color('#2196F3');
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Color.transparent' call
        tmp = Color('transparent');
      }
      backgroundColor($this$style, tmp);
      var tmp_0;
      if ($isSelected) {
        // Inline function 'org.jetbrains.compose.web.css.Color.white' call
        tmp_0 = Color('white');
      } else {
        tmp_0 = Color('#666');
      }
      color($this$style, tmp_0);
      fontSize($this$style, get_px(14));
      $this$style.r4f('font-weight', $isSelected ? '600' : 'normal');
      $this$style.r4f('border-radius', '8px');
      $this$style.r4f('cursor', 'pointer');
      $this$style.r4f('transition', 'all 0.2s');
      return Unit_instance;
    };
  }
  function NavButton$composable$lambda($onClick, $isSelected) {
    return function ($this$Button) {
      $this$Button.k48(NavButton$composable$lambda$lambda($onClick));
      $this$Button.q48(NavButton$composable$lambda$lambda_0($isSelected));
      return Unit_instance;
    };
  }
  function NavButton$composable$lambda_0($title) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-1898186581, $changed, -1, 'view.NavButton$composable.<anonymous> (HomePage.kt:113)');
        }
        Text$composable($title, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function NavButton$composable$lambda_1($title, $isSelected, $onClick, $$changed) {
    return function ($composer, $force) {
      NavButton$composable($title, $isSelected, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$InfoPageKt$lambda_1$lambda_a31gx($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(1817582005, $changed, -1, 'view.ComposableSingletons$InfoPageKt.lambda-1.<anonymous> (InfoPage.kt:34)');
      }
      Text$composable('Info', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$InfoPageKt() {
    ComposableSingletons$InfoPageKt_instance = this;
    var tmp = this;
    tmp.i5z_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(1817582005, false, ComposableSingletons$InfoPageKt$lambda_1$lambda_a31gx));
  }
  var ComposableSingletons$InfoPageKt_instance;
  function ComposableSingletons$InfoPageKt_getInstance() {
    if (ComposableSingletons$InfoPageKt_instance == null)
      new ComposableSingletons$InfoPageKt();
    return ComposableSingletons$InfoPageKt_instance;
  }
  function InfoPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-342551482);
    sourceInformation($composer_0, 'C(InfoPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-342551482, $changed, -1, 'view.InfoPage$composable (InfoPage.kt:13)');
      }
      var tmp$ret$0;
      $l$block: {
        // Inline function 'core.DI.get' call
        var tmp0_iterator = DI_getInstance().t5n_1.u();
        while (tmp0_iterator.v()) {
          var i = tmp0_iterator.x();
          if (i instanceof AppConfig) {
            tmp$ret$0 = i;
            break $l$block;
          }
        }
        throw Exception_init_$Create$('Instance of ' + getKClass(AppConfig).b7() + ' is not found in global DI');
      }
      var config = tmp$ret$0;
      $composer_0.x3a(1510204447);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'view.InfoPage$composable.<anonymous>' call
        var value = InfoPage$composable$lambda;
        this_0.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.InfoPage$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -2069472748, true, InfoPage$composable$lambda_0(config));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i3b();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.j3b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.y3a();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(InfoPage$composable$lambda_1($changed));
    }
  }
  function InfoItem$composable(label, value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-1112297506);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(label) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.k3b(value) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-1112297506, $dirty, -1, 'view.InfoItem$composable (InfoPage.kt:58)');
      }
      $composer_0.x3a(1510205631);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'view.InfoItem$composable.<anonymous>' call
        var value_0 = InfoItem$composable$lambda;
        this_0.j3b(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'view.InfoItem$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1658016636, true, InfoItem$composable$lambda_0(label, value));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.x3a(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i3b();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_37(dispatchReceiver);
        $composer_1.j3b(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.y3a();
      Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(InfoItem$composable$lambda_1(label, value, $changed));
    }
  }
  function InfoPage$composable$lambda($this$Div) {
    $this$Div.q48(InfoPage$composable$lambda$lambda);
    return Unit_instance;
  }
  function InfoPage$composable$lambda$lambda($this$style) {
    height($this$style, get_percent(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    flex($this$style, 1);
    return Unit_instance;
  }
  function InfoPage$composable$lambda$lambda_0($this$Div) {
    $this$Div.q48(InfoPage$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function InfoPage$composable$lambda$lambda$lambda($this$style) {
    padding($this$style, [get_px(16)]);
    backgroundColor($this$style, Color('#2196F3'));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    fontSize($this$style, get_px(20));
    fontWeight($this$style, '600');
    textAlign($this$style, 'center');
    return Unit_instance;
  }
  function InfoPage$composable$lambda$lambda_1($this$Div) {
    $this$Div.q48(InfoPage$composable$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function InfoPage$composable$lambda$lambda$lambda_0($this$style) {
    flex($this$style, 1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    $this$style.r4f('gap', '16px');
    padding($this$style, [get_px(24)]);
    return Unit_instance;
  }
  function InfoPage$composable$lambda$lambda_2($config) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-1442775266, $changed, -1, 'view.InfoPage$composable.<anonymous>.<anonymous> (InfoPage.kt:49)');
        }
        InfoItem$composable('App', $config.m5m_1, $composer_0, 6);
        InfoItem$composable('Version', '1.0.0', $composer_0, 54);
        InfoItem$composable('Build Time', '2025-11-30 18:26:54', $composer_0, 54);
        InfoItem$composable('Flavor', $config.u5m(), $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function InfoPage$composable$lambda_0($config) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-2069472748, $changed, -1, 'view.InfoPage$composable.<anonymous> (InfoPage.kt:24)');
        }
        $composer_0.x3a(1510204656);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = InfoPage$composable$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        Div$composable(tmpCache, ComposableSingletons$InfoPageKt_getInstance().i5z_1, $composer_0, 48, 0);
        $composer_0.x3a(1510204998);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.i3b();
        var tmp_2;
        if (false ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = InfoPage$composable$lambda$lambda_1;
          $composer_0.j3b(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmpCache_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, -1442775266, true, InfoPage$composable$lambda$lambda_2($config));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.i3b();
        var tmp_5;
        if (invalid ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'view.InfoPage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_33(dispatchReceiver);
          $composer_1.j3b(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache_0, tmp0, $composer_0, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function InfoPage$composable$lambda_1($$changed) {
    return function ($composer, $force) {
      InfoPage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function InfoItem$composable$lambda($this$Div) {
    $this$Div.q48(InfoItem$composable$lambda$lambda);
    return Unit_instance;
  }
  function InfoItem$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    $this$style.r4f('gap', '4px');
    return Unit_instance;
  }
  function InfoItem$composable$lambda$lambda_0($this$Div) {
    $this$Div.q48(InfoItem$composable$lambda$lambda$lambda);
    return Unit_instance;
  }
  function InfoItem$composable$lambda$lambda$lambda($this$style) {
    color($this$style, Color('#666'));
    fontSize($this$style, get_px(14));
    return Unit_instance;
  }
  function InfoItem$composable$lambda$lambda_1($label) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(896385403, $changed, -1, 'view.InfoItem$composable.<anonymous>.<anonymous> (InfoPage.kt:73)');
        }
        Text$composable($label, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function InfoItem$composable$lambda$lambda_2($this$Div) {
    $this$Div.q48(InfoItem$composable$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function InfoItem$composable$lambda$lambda$lambda_0($this$style) {
    color($this$style, Color('#333'));
    fontSize($this$style, get_px(18));
    fontWeight($this$style, '600');
    return Unit_instance;
  }
  function InfoItem$composable$lambda$lambda_3($value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(89566898, $changed, -1, 'view.InfoItem$composable.<anonymous>.<anonymous> (InfoPage.kt:82)');
        }
        Text$composable($value, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function InfoItem$composable$lambda_0($label, $value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(1658016636, $changed, -1, 'view.InfoItem$composable.<anonymous> (InfoPage.kt:67)');
        }
        $composer_0.x3a(1510205844);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i3b();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().s3a_1) {
          // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = InfoItem$composable$lambda$lambda_0;
          $composer_0.j3b(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 896385403, true, InfoItem$composable$lambda$lambda_1($label));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.x3a(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.k3b(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i3b();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
          // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_35(dispatchReceiver);
          $composer_1.j3b(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.y3a();
        Div$composable(tmpCache, tmp0, $composer_0, 48, 0);
        $composer_0.x3a(1510206008);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.i3b();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance().s3a_1) {
          // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = InfoItem$composable$lambda$lambda_2;
          $composer_0.j3b(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.y3a();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 89566898, true, InfoItem$composable$lambda$lambda_3($value));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.x3a(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.k3b(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.i3b();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance().s3a_1) {
          // Inline function 'view.InfoItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_36(dispatchReceiver_0);
          $composer_2.j3b(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.y3a();
        Div$composable(tmpCache_0, tmp0_0, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.c3b();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function InfoItem$composable$lambda_1($label, $value, $$changed) {
    return function ($composer, $force) {
      InfoItem$composable($label, $value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_1$lambda_cx2zg6($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(759498811, $changed, -1, 'view.ComposableSingletons$WaitingWidgetsKt.lambda-1.<anonymous> (WaitingWidgets.kt:37)');
      }
      Text$composable('\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda_taelgr($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-2108139643, $changed, -1, 'view.ComposableSingletons$WaitingWidgetsKt.lambda-2.<anonymous> (WaitingWidgets.kt:20)');
      }
      $composer_0.x3a(-1102438948);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'view.ComposableSingletons$WaitingWidgetsKt.lambda-2.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda_am3cs6;
        $composer_0.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      Div$composable(tmpCache, null, $composer_0, 0, 2);
      $composer_0.x3a(-1102438600);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.i3b();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'view.ComposableSingletons$WaitingWidgetsKt.lambda-2.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda_am3cs6_0;
        $composer_0.j3b(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.y3a();
      Div$composable(tmpCache_0, ComposableSingletons$WaitingWidgetsKt_getInstance().j5z_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda_am3cs6($this$Div) {
    $this$Div.q48(ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda$lambda_aa05n);
    return Unit_instance;
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda$lambda_aa05n($this$style) {
    width($this$style, get_px(48));
    height($this$style, get_px(48));
    $this$style.r4f('border', '4px solid #e0e0e0');
    $this$style.r4f('border-top', '4px solid #2196F3');
    $this$style.r4f('border-radius', '50%');
    $this$style.r4f('animation', 'spin 1s linear infinite');
    return Unit_instance;
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda_am3cs6_0($this$Div) {
    $this$Div.q48(ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda$lambda_aa05n_0);
    return Unit_instance;
  }
  function ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda$lambda$lambda_aa05n_0($this$style) {
    fontSize($this$style, get_px(18));
    color($this$style, Color('#666'));
    $this$style.r4f('font-weight', '500');
    return Unit_instance;
  }
  function ComposableSingletons$WaitingWidgetsKt() {
    ComposableSingletons$WaitingWidgetsKt_instance = this;
    var tmp = this;
    tmp.j5z_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(759498811, false, ComposableSingletons$WaitingWidgetsKt$lambda_1$lambda_cx2zg6));
    var tmp_0 = this;
    tmp_0.k5z_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-2108139643, false, ComposableSingletons$WaitingWidgetsKt$lambda_2$lambda_taelgr));
  }
  var ComposableSingletons$WaitingWidgetsKt_instance;
  function ComposableSingletons$WaitingWidgetsKt_getInstance() {
    if (ComposableSingletons$WaitingWidgetsKt_instance == null)
      new ComposableSingletons$WaitingWidgetsKt();
    return ComposableSingletons$WaitingWidgetsKt_instance;
  }
  function WaitingWidget$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-1204093592);
    sourceInformation($composer_0, 'C(WaitingWidget$composable)');
    if (!($changed === 0) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-1204093592, $changed, -1, 'view.WaitingWidget$composable (WaitingWidgets.kt:7)');
      }
      $composer_0.x3a(-1102439303);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'view.WaitingWidget$composable.<anonymous>' call
        var value = WaitingWidget$composable$lambda;
        this_0.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.y3a();
      Div$composable(tmpCache, ComposableSingletons$WaitingWidgetsKt_getInstance().k5z_1, $composer_0, 48, 0);
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable' call
      var applyAttrs = null;
      var $composer_1 = $composer_0;
      $composer_1.x3a(1760347178);
      sourceInformation($composer_1, 'CC(Style$composable)');
      if (!((1 & 1) === 0))
        applyAttrs = null;
      var builder = new StyleSheetBuilderImpl();
      // Inline function 'view.WaitingWidget$composable.<anonymous>' call
      Style$composable(applyAttrs, builder.j4g(), $composer_1, 14 & 0, 0);
      $composer_1.y3a();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(WaitingWidget$composable$lambda_0($changed));
    }
  }
  function WaitingWidget$composable$lambda($this$Div) {
    $this$Div.q48(WaitingWidget$composable$lambda$lambda);
    return Unit_instance;
  }
  function WaitingWidget$composable$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    height($this$style, get_vh(100));
    width($this$style, get_vw(100));
    $this$style.r4f('align-items', 'center');
    $this$style.r4f('justify-content', 'center');
    $this$style.r4f('flex', '1');
    $this$style.r4f('gap', '16px');
    return Unit_instance;
  }
  function WaitingWidget$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      WaitingWidget$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MessageRepository).b5t = fetchMessages$default;
  protoOf($serializer).m2i = typeParametersSerializers;
  protoOf($serializer_0).m2i = typeParametersSerializers;
  //endregion
  //region block: init
  BuildInfo_instance = new BuildInfo();
  Loading_instance = new Loading();
  Success_instance = new Success();
  Companion_instance_4 = new Companion();
  Companion_instance_5 = new Companion_0();
  Companion_instance_6 = new Companion_1();
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=local-wifi-chat-frontend.js.map
