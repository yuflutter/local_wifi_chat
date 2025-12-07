(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var protoOf = kotlin_kotlin.$_$.gb;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var classMeta = kotlin_kotlin.$_$.x9;
  var VOID = kotlin_kotlin.$_$.g;
  var toString = kotlin_kotlin.$_$.lb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var charSequenceLength = kotlin_kotlin.$_$.v9;
  var charSequenceGet = kotlin_kotlin.$_$.u9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var equals = kotlin_kotlin.$_$.aa;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var hashCode = kotlin_kotlin.$_$.ia;
  var joinToString = kotlin_kotlin.$_$.h7;
  var Map = kotlin_kotlin.$_$.t5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.j;
  var lazy = kotlin_kotlin.$_$.kf;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getBooleanHashCode = kotlin_kotlin.$_$.da;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var List = kotlin_kotlin.$_$.r5;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.s4;
  var numberRangeToNumber = kotlin_kotlin.$_$.za;
  var ClosedRange = kotlin_kotlin.$_$.nb;
  var isInterface = kotlin_kotlin.$_$.ta;
  var contains = kotlin_kotlin.$_$.sb;
  var toDouble = kotlin_kotlin.$_$.jd;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.u4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var toLongOrNull = kotlin_kotlin.$_$.md;
  var toULongOrNull = kotlin_kotlin.$_$.rd;
  var ULong = kotlin_kotlin.$_$.ve;
  var Companion_getInstance = kotlin_kotlin.$_$.c5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.v3;
  var toDoubleOrNull = kotlin_kotlin.$_$.id;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.gd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var lazy_0 = kotlin_kotlin.$_$.lf;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.zb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong = kotlin_kotlin.$_$.jb;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.n3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.u3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.w3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.e3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.d4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.f4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.r9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.w9;
  var coerceAtLeast = kotlin_kotlin.$_$.ob;
  var coerceAtMost = kotlin_kotlin.$_$.qb;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var singleOrNull = kotlin_kotlin.$_$.f8;
  var emptyMap = kotlin_kotlin.$_$.u6;
  var getValue = kotlin_kotlin.$_$.e7;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var copyOf = kotlin_kotlin.$_$.o6;
  var copyOf_0 = kotlin_kotlin.$_$.p6;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.be;
  var invoke = kotlin_kotlin.$_$.gf;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ce;
  var Unit = kotlin_kotlin.$_$.ye;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var contains_0 = kotlin_kotlin.$_$.gc;
  var plus = kotlin_kotlin.$_$.nf;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ge;
  var isFinite = kotlin_kotlin.$_$.if;
  var isFinite_0 = kotlin_kotlin.$_$.hf;
  var toUInt = kotlin_kotlin.$_$.qd;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.m3;
  var toULong = kotlin_kotlin.$_$.sd;
  var toUByte = kotlin_kotlin.$_$.pd;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d3;
  var toUShort = kotlin_kotlin.$_$.td;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.e4;
  var objectCreate = kotlin_kotlin.$_$.eb;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var toString_0 = kotlin_kotlin.$_$.x2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b5;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.a5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.d5;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var setOf = kotlin_kotlin.$_$.e8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.w2;
  var numberToChar = kotlin_kotlin.$_$.ab;
  var equals_0 = kotlin_kotlin.$_$.lc;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.p4;
  var toByte = kotlin_kotlin.$_$.ib;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.t4;
  var toShort = kotlin_kotlin.$_$.kb;
  var single = kotlin_kotlin.$_$.ad;
  var Char = kotlin_kotlin.$_$.zd;
  var emptySet = kotlin_kotlin.$_$.v6;
  var plus_0 = kotlin_kotlin.$_$.v7;
  var toInt = kotlin_kotlin.$_$.ld;
  var toList = kotlin_kotlin.$_$.m8;
  var Enum = kotlin_kotlin.$_$.de;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.mf;
  var last = kotlin_kotlin.$_$.o7;
  var removeLast = kotlin_kotlin.$_$.b8;
  var lastIndexOf = kotlin_kotlin.$_$.xc;
  var Long = kotlin_kotlin.$_$.ie;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.s2;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.y4;
  var numberToLong = kotlin_kotlin.$_$.db;
  var charArray = kotlin_kotlin.$_$.t9;
  var indexOf = kotlin_kotlin.$_$.pc;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta, VOID, [StringFormat]);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, VOID, VOID, JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.z2v_1 = configuration;
    this.a2w_1 = serializersModule;
    this.b2w_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).a29 = function () {
    return this.a2w_1;
  };
  protoOf(Json).y28 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.iq();
    }
  };
  protoOf(Json).z28 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.f28(), null);
    var result = input.e2b(deserializer);
    lexer.p2w();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.w1c();
    return new JsonImpl(conf, builder.e2x_1);
  }
  function JsonBuilder(json) {
    this.q2w_1 = json.z2v_1.f2x_1;
    this.r2w_1 = json.z2v_1.k2x_1;
    this.s2w_1 = json.z2v_1.g2x_1;
    this.t2w_1 = json.z2v_1.h2x_1;
    this.u2w_1 = json.z2v_1.i2x_1;
    this.v2w_1 = json.z2v_1.j2x_1;
    this.w2w_1 = json.z2v_1.l2x_1;
    this.x2w_1 = json.z2v_1.m2x_1;
    this.y2w_1 = json.z2v_1.n2x_1;
    this.z2w_1 = json.z2v_1.o2x_1;
    this.a2x_1 = json.z2v_1.p2x_1;
    this.b2x_1 = json.z2v_1.q2x_1;
    this.c2x_1 = json.z2v_1.r2x_1;
    this.d2x_1 = json.z2v_1.s2x_1;
    this.e2x_1 = json.a29();
  }
  protoOf(JsonBuilder).w1c = function () {
    if (this.y2w_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.z2w_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.v2w_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.w2w_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.w2w_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.w2w_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.w2w_1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.q2w_1, this.s2w_1, this.t2w_1, this.u2w_1, this.v2w_1, this.r2w_1, this.w2w_1, this.x2w_1, this.y2w_1, this.z2w_1, this.a2x_1, this.b2x_1, this.c2x_1, this.d2x_1);
  };
  function validateConfiguration($this) {
    if (equals($this.a29(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.z2v_1.n2x_1, $this.z2v_1.o2x_1);
    $this.a29().n2q(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    this.f2x_1 = encodeDefaults;
    this.g2x_1 = ignoreUnknownKeys;
    this.h2x_1 = isLenient;
    this.i2x_1 = allowStructuredMapKeys;
    this.j2x_1 = prettyPrint;
    this.k2x_1 = explicitNulls;
    this.l2x_1 = prettyPrintIndent;
    this.m2x_1 = coerceInputValues;
    this.n2x_1 = useArrayPolymorphism;
    this.o2x_1 = classDiscriminator;
    this.p2x_1 = allowSpecialFloatingPointValues;
    this.q2x_1 = useAlternativeNames;
    this.r2x_1 = namingStrategy;
    this.s2x_1 = decodeEnumsCaseInsensitive;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.f2x_1 + ', ignoreUnknownKeys=' + this.g2x_1 + ', isLenient=' + this.h2x_1 + ', ' + ('allowStructuredMapKeys=' + this.i2x_1 + ', prettyPrint=' + this.j2x_1 + ', explicitNulls=' + this.k2x_1 + ', ') + ("prettyPrintIndent='" + this.l2x_1 + "', coerceInputValues=" + this.m2x_1 + ', useArrayPolymorphism=' + this.n2x_1 + ', ') + ("classDiscriminator='" + this.o2x_1 + "', allowSpecialFloatingPointValues=" + this.p2x_1 + ', useAlternativeNames=' + this.q2x_1 + ', ') + ('namingStrategy=' + this.r2x_1 + ', decodeEnumsCaseInsensitive=' + this.s2x_1 + ')');
  };
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.p2();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.q2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.y5(_Char___init__impl__6a9atx(58));
    this_0.w5(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.v2x_1 = content;
  }
  protoOf(JsonObject).m2 = function () {
    return this.v2x_1.m2();
  };
  protoOf(JsonObject).k2 = function () {
    return this.v2x_1.k2();
  };
  protoOf(JsonObject).n = function () {
    return this.v2x_1.n();
  };
  protoOf(JsonObject).l2 = function () {
    return this.v2x_1.l2();
  };
  protoOf(JsonObject).f1o = function (key) {
    return this.v2x_1.u2(key);
  };
  protoOf(JsonObject).u2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.f1o((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).g1o = function (key) {
    return this.v2x_1.x2(key);
  };
  protoOf(JsonObject).x2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.g1o((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).c1 = function () {
    return this.v2x_1.c1();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.v2x_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.v2x_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.v2x_1.m2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.x2x_1.q2();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.w2x_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.x2x_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).y2x = function () {
    return this.w2x_1;
  };
  protoOf(JsonNull).z2x = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).w2i = function (typeParamsSerializers) {
    return this.z2x();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.y2x();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.a2y_1 = isString;
    this.b2y_1 = coerceToInlineType;
    this.c2y_1 = toString(body);
    if (!(this.b2y_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.b2y_1.p29()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).y2x = function () {
    return this.c2y_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.a2y_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.c2y_1);
      tmp = this_0.toString();
    } else {
      tmp = this.c2y_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.a2y_1 === other.a2y_1))
      return false;
    if (!(this.c2y_1 === other.c2y_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.a2y_1);
    result = imul(31, result) + getStringHashCode(this.c2y_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.d2y_1 = content;
  }
  protoOf(JsonArray).n = function () {
    return this.d2y_1.n();
  };
  protoOf(JsonArray).e2y = function (element) {
    return this.d2y_1.a1(element);
  };
  protoOf(JsonArray).a1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.e2y(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).f2y = function (elements) {
    return this.d2y_1.b1(elements);
  };
  protoOf(JsonArray).b1 = function (elements) {
    return this.f2y(elements);
  };
  protoOf(JsonArray).g1 = function (index) {
    return this.d2y_1.g1(index);
  };
  protoOf(JsonArray).g2y = function (element) {
    return this.d2y_1.x1(element);
  };
  protoOf(JsonArray).x1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.g2y(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).c1 = function () {
    return this.d2y_1.c1();
  };
  protoOf(JsonArray).u = function () {
    return this.d2y_1.u();
  };
  protoOf(JsonArray).z1 = function (index) {
    return this.d2y_1.z1(index);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.d2y_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.d2y_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.d2y_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.y2x());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.y2x())).h2y();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(IntCompanionObject_instance.MIN_VALUE, IntCompanionObject_instance.MAX_VALUE);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.y2x() + ' is not an Int');
    return result.w9();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.y2x())).h2y();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.y2x();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.y2x());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.y2x();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.q28('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.q28('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.q28('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.q28('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.q28('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().i2y_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().j2y_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().k2y_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().l2y_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().m2y_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.n2y_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).f28 = function () {
    return this.n2y_1;
  };
  protoOf(JsonElementSerializer).o2y = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.v2c(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.v2c(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.v2c(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).g28 = function (encoder, value) {
    return this.o2y(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).h28 = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.u2x();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.p2y_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).f28();
    this.q2y_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).n29 = function () {
    return this.p2y_1.n29();
  };
  protoOf(JsonObjectDescriptor).o29 = function () {
    return this.p2y_1.o29();
  };
  protoOf(JsonObjectDescriptor).p29 = function () {
    return this.p2y_1.p29();
  };
  protoOf(JsonObjectDescriptor).i29 = function () {
    return this.p2y_1.i29();
  };
  protoOf(JsonObjectDescriptor).q29 = function () {
    return this.p2y_1.q29();
  };
  protoOf(JsonObjectDescriptor).r29 = function (index) {
    return this.p2y_1.r29(index);
  };
  protoOf(JsonObjectDescriptor).s29 = function (index) {
    return this.p2y_1.s29(index);
  };
  protoOf(JsonObjectDescriptor).t29 = function (name) {
    return this.p2y_1.t29(name);
  };
  protoOf(JsonObjectDescriptor).u29 = function (index) {
    return this.p2y_1.u29(index);
  };
  protoOf(JsonObjectDescriptor).v29 = function (index) {
    return this.p2y_1.v29(index);
  };
  protoOf(JsonObjectDescriptor).m29 = function () {
    return this.q2y_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.l2y_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).f28 = function () {
    return this.l2y_1;
  };
  protoOf(JsonObjectSerializer).r2y = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).g28(encoder, value);
  };
  protoOf(JsonObjectSerializer).g28 = function (encoder, value) {
    return this.r2y(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).h28 = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).h28(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.s2y_1 = ListSerializer(JsonElementSerializer_getInstance()).f28();
    this.t2y_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).n29 = function () {
    return this.s2y_1.n29();
  };
  protoOf(JsonArrayDescriptor).o29 = function () {
    return this.s2y_1.o29();
  };
  protoOf(JsonArrayDescriptor).p29 = function () {
    return this.s2y_1.p29();
  };
  protoOf(JsonArrayDescriptor).i29 = function () {
    return this.s2y_1.i29();
  };
  protoOf(JsonArrayDescriptor).q29 = function () {
    return this.s2y_1.q29();
  };
  protoOf(JsonArrayDescriptor).r29 = function (index) {
    return this.s2y_1.r29(index);
  };
  protoOf(JsonArrayDescriptor).s29 = function (index) {
    return this.s2y_1.s29(index);
  };
  protoOf(JsonArrayDescriptor).t29 = function (name) {
    return this.s2y_1.t29(name);
  };
  protoOf(JsonArrayDescriptor).u29 = function (index) {
    return this.s2y_1.u29(index);
  };
  protoOf(JsonArrayDescriptor).v29 = function (index) {
    return this.s2y_1.v29(index);
  };
  protoOf(JsonArrayDescriptor).m29 = function () {
    return this.t2y_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.m2y_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).f28 = function () {
    return this.m2y_1;
  };
  protoOf(JsonArraySerializer).u2y = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).g28(encoder, value);
  };
  protoOf(JsonArraySerializer).g28 = function (encoder, value) {
    return this.u2y(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).h28 = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).h28(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.i2y_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).f28 = function () {
    return this.i2y_1;
  };
  protoOf(JsonPrimitiveSerializer).v2y = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.v2c(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.v2c(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).g28 = function (encoder, value) {
    return this.v2y(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).h28 = function (decoder) {
    var result = asJsonDecoder(decoder).u2x();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.j2y_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).f28 = function () {
    return this.j2y_1;
  };
  protoOf(JsonNullSerializer).w2y = function (encoder, value) {
    verify(encoder);
    encoder.z2b();
  };
  protoOf(JsonNullSerializer).g28 = function (encoder, value) {
    return this.w2y(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).h28 = function (decoder) {
    verify_0(decoder);
    if (decoder.r2a()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.s2a();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.k2y_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).f28 = function () {
    return this.k2y_1;
  };
  protoOf(JsonLiteralSerializer).x2y = function (encoder, value) {
    verify(encoder);
    if (value.a2y_1) {
      return encoder.i2c(value.c2y_1);
    }
    if (!(value.b2y_1 == null)) {
      return encoder.j2c(value.b2y_1).i2c(value.c2y_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.c2y_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.e2c(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.c2y_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).pi_1;
      var tmp_1 = encoder.j2c(serializer_0(Companion_getInstance()).f28());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.e2c(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.c2y_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.g2c(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.c2y_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.a2c(tmp3_safe_receiver);
    }
    encoder.i2c(value.c2y_1);
  };
  protoOf(JsonLiteralSerializer).g28 = function (encoder, value) {
    return this.x2y(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).h28 = function (decoder) {
    var result = asJsonDecoder(decoder).u2x();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.y2y_1;
    original$factory();
    return this_0.q2();
  }
  function defer$1($deferred) {
    this.y2y_1 = lazy_0($deferred);
  }
  protoOf(defer$1).m29 = function () {
    return _get_original__l7ku1m(this).m29();
  };
  protoOf(defer$1).q29 = function () {
    return _get_original__l7ku1m(this).q29();
  };
  protoOf(defer$1).o29 = function () {
    return _get_original__l7ku1m(this).o29();
  };
  protoOf(defer$1).u29 = function (index) {
    return _get_original__l7ku1m(this).u29(index);
  };
  protoOf(defer$1).t29 = function (name) {
    return _get_original__l7ku1m(this).t29(name);
  };
  protoOf(defer$1).r29 = function (index) {
    return _get_original__l7ku1m(this).r29(index);
  };
  protoOf(defer$1).s29 = function (index) {
    return _get_original__l7ku1m(this).s29(index);
  };
  protoOf(defer$1).v29 = function (index) {
    return _get_original__l7ku1m(this).v29(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.z2y_1 = writer;
    this.a2z_1 = true;
  }
  protoOf(Composer).b2z = function () {
    this.a2z_1 = true;
  };
  protoOf(Composer).c2z = function () {
    return Unit_instance;
  };
  protoOf(Composer).d2z = function () {
    this.a2z_1 = false;
  };
  protoOf(Composer).e2z = function () {
    return Unit_instance;
  };
  protoOf(Composer).f2z = function (v) {
    return this.z2y_1.g2z(v);
  };
  protoOf(Composer).h2z = function (v) {
    return this.z2y_1.i2z(v);
  };
  protoOf(Composer).j2z = function (v) {
    return this.z2y_1.i2z(v.toString());
  };
  protoOf(Composer).k2z = function (v) {
    return this.z2y_1.i2z(v.toString());
  };
  protoOf(Composer).l2z = function (v) {
    return this.z2y_1.m2z(toLong(v));
  };
  protoOf(Composer).n2z = function (v) {
    return this.z2y_1.m2z(toLong(v));
  };
  protoOf(Composer).o2z = function (v) {
    return this.z2y_1.m2z(toLong(v));
  };
  protoOf(Composer).p2z = function (v) {
    return this.z2y_1.m2z(v);
  };
  protoOf(Composer).q2z = function (v) {
    return this.z2y_1.i2z(v.toString());
  };
  protoOf(Composer).r2z = function (value) {
    return this.z2y_1.s2z(value);
  };
  function Composer_0(sb, json) {
    return json.z2v_1.j2x_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.v2z_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).o2z = function (v) {
    if (this.v2z_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.r2z(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.h2z(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).p2z = function (v) {
    if (this.v2z_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.r2z(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.h2z(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).l2z = function (v) {
    if (this.v2z_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.r2z(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.h2z(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).n2z = function (v) {
    if (this.v2z_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.r2z(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.h2z(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.y2z_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).r2z = function (value) {
    if (this.y2z_1) {
      protoOf(Composer).r2z.call(this, value);
    } else {
      protoOf(Composer).h2z.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.b30_1 = json;
    this.c30_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).b2z = function () {
    this.a2z_1 = true;
    this.c30_1 = this.c30_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).c2z = function () {
    this.c30_1 = this.c30_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).d2z = function () {
    this.a2z_1 = false;
    this.h2z('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.c30_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.h2z(this.b30_1.z2v_1.l2x_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).e2z = function () {
    this.f2z(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.e30_1 = !descriptor.v29(index) ? descriptor.s29(index).i29() : false;
    return $this.e30_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.d30_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.e30_1 = false;
  }
  protoOf(JsonElementMarker).h2h = function (index) {
    this.d30_1.h2h(index);
  };
  protoOf(JsonElementMarker).i2h = function () {
    return this.d30_1.i2h();
  };
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.f30('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.m29() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.q29() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.t29(name);
    if (!(index === -3))
      return index;
    if (!json.z2v_1.q2x_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.u29(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.q29(), CLASS_getInstance()) ? json.z2v_1.r2x_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.h30(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.z2v_1.s2x_1 ? equals(descriptor.q29(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.h30(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.o29();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.r29(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.u();
        while (tmp0_iterator.v()) {
          var element = tmp0_iterator.x();
          if (element instanceof JsonNames) {
            destination.r(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i30_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp2_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp2_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.u29(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.j30(_this__u8e3s4, i, _this__u8e3s4.u29(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.c1()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.q29(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).u2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.u29(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.u29(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.n2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.o29();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.u29(tmp_2);
        tmp_1[tmp_2] = $strategy.j30($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.m30_1, 2);
    $this.k30_1 = copyOf($this.k30_1, newSize);
    $this.l30_1 = copyOf_0($this.l30_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.k30_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.l30_1 = tmp_2;
    this.m30_1 = -1;
  }
  protoOf(JsonPath).n30 = function (sd) {
    this.m30_1 = this.m30_1 + 1 | 0;
    var depth = this.m30_1;
    if (depth === this.k30_1.length) {
      resize(this);
    }
    this.k30_1[depth] = sd;
  };
  protoOf(JsonPath).o30 = function (index) {
    this.l30_1[this.m30_1] = index;
  };
  protoOf(JsonPath).p30 = function (key) {
    var tmp;
    if (!(this.l30_1[this.m30_1] === -2)) {
      this.m30_1 = this.m30_1 + 1 | 0;
      tmp = this.m30_1 === this.k30_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.k30_1[this.m30_1] = key;
    this.l30_1[this.m30_1] = -2;
  };
  protoOf(JsonPath).q30 = function () {
    if (this.l30_1[this.m30_1] === -2) {
      this.k30_1[this.m30_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).r30 = function () {
    var depth = this.m30_1;
    if (this.l30_1[depth] === -2) {
      this.l30_1[depth] = -1;
      this.m30_1 = this.m30_1 - 1 | 0;
    }
    if (!(this.m30_1 === -1)) {
      this.m30_1 = this.m30_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).s30 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.x5('$');
    // Inline function 'kotlin.repeat' call
    var times = this.m30_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.k30_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.q29(), LIST_getInstance())) {
            if (!(this.l30_1[index] === -1)) {
              this_0.x5('[');
              this_0.w5(this.l30_1[index]);
              this_0.x5(']');
            }
          } else {
            var idx = this.l30_1[index];
            if (idx >= 0) {
              this_0.x5('.');
              this_0.x5(element.u29(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.x5('[');
            this_0.x5("'");
            this_0.w5(element);
            this_0.x5("'");
            this_0.x5(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.s30();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = values().length;
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.v2c(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.b31_1.e31(get_TC_BEGIN_OBJ());
    if ($this.b31_1.f31() === get_TC_COMMA()) {
      $this.b31_1.f30('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.b31_1.g31()) {
      var key = $this.c31_1 ? $this.b31_1.i31() : $this.b31_1.h31();
      $this.b31_1.e31(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.j31();
      // Inline function 'kotlin.collections.set' call
      result.n2(key, element);
      lastToken = $this.b31_1.k31();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.b31_1.f30('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.b31_1.e31(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.b31_1.f30('Unexpected trailing comma');
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function readArray($this) {
    var lastToken = $this.b31_1.k31();
    if ($this.b31_1.f31() === get_TC_COMMA()) {
      $this.b31_1.f30('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.b31_1.g31()) {
      var element = $this.j31();
      result.r(element);
      lastToken = $this.b31_1.k31();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.b31_1;
        var condition = lastToken === get_TC_END_LIST();
        var position = this_0.l2w_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.f30(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.b31_1.e31(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.b31_1.f30('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.c31_1 ? true : !isString) {
      tmp = $this.b31_1.i31();
    } else {
      tmp = $this.b31_1.h31();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.h32_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).m32 = function ($this$$receiver, it, $completion) {
    var tmp = this.n32($this$$receiver, it, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).fh = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.m32(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            this.k32_1 = this.h32_1.b31_1.f31();
            if (this.k32_1 === get_TC_STRING()) {
              this.l32_1 = readValue(this.h32_1, true);
              this.pb_1 = 2;
              continue $sm;
            } else {
              if (this.k32_1 === get_TC_OTHER()) {
                this.l32_1 = readValue(this.h32_1, false);
                this.pb_1 = 2;
                continue $sm;
              } else {
                if (this.k32_1 === get_TC_BEGIN_OBJ()) {
                  this.pb_1 = 1;
                  suspendResult = readObject_0(this.i32_1, this.h32_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.k32_1 === get_TC_BEGIN_LIST()) {
                    this.l32_1 = readArray(this.h32_1);
                    this.pb_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.h32_1.b31_1.f30("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.l32_1 = suspendResult;
            this.pb_1 = 2;
            continue $sm;
          case 2:
            return this.l32_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).n32 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.h32_1, completion);
    i.i32_1 = $this$$receiver;
    i.j32_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.m32($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t31_1 = _this__u8e3s4;
    this.u31_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 5;
            var tmp_0 = this;
            tmp_0.v31_1 = this.t31_1;
            this.w31_1 = this.v31_1.b31_1.e31(get_TC_BEGIN_OBJ());
            if (this.v31_1.b31_1.f31() === get_TC_COMMA()) {
              this.v31_1.b31_1.f30('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.x31_1 = LinkedHashMap_init_$Create$();
            this.pb_1 = 1;
            continue $sm;
          case 1:
            if (!this.v31_1.b31_1.g31()) {
              this.pb_1 = 4;
              continue $sm;
            }

            this.y31_1 = this.v31_1.c31_1 ? this.v31_1.b31_1.i31() : this.v31_1.b31_1.h31();
            this.v31_1.b31_1.e31(get_TC_COLON());
            this.pb_1 = 2;
            suspendResult = this.u31_1.xg(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.x31_1;
            var key = this.y31_1;
            this_0.n2(key, element);
            this.w31_1 = this.v31_1.b31_1.k31();
            var tmp0_subject = this.w31_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.pb_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.pb_1 = 4;
                continue $sm;
              } else {
                this.v31_1.b31_1.f30('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.pb_1 = 1;
            continue $sm;
          case 4:
            if (this.w31_1 === get_TC_BEGIN_OBJ()) {
              this.v31_1.b31_1.e31(get_TC_END_OBJ());
            } else if (this.w31_1 === get_TC_COMMA()) {
              this.v31_1.b31_1.f30('Unexpected trailing comma');
            }

            return new JsonObject(this.x31_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.b31_1 = lexer;
    this.c31_1 = configuration.h2x_1;
    this.d31_1 = 0;
  }
  protoOf(JsonTreeReader).j31 = function () {
    var token = this.b31_1.f31();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.d31_1 = this.d31_1 + 1 | 0;
      if (this.d31_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.d31_1 = this.d31_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.b31_1.f30('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.n29().u();
    while (tmp0_iterator.v()) {
      var annotation = tmp0_iterator.x();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.o32_1;
    }
    return json.z2v_1.o2x_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.t2x().z2v_1.n2x_1;
    }
    if (tmp) {
      return deserializer.h28(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.f28(), _this__u8e3s4.t2x());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.u2x();
    var descriptor = deserializer.f28();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.m29() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.g1o(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y2x();
    var tmp2_elvis_lhs = deserializer.w28(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.t2x();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.f28()).a1(classDiscriminator)) {
      var baseName = serializer.f28().m29();
      var actualName = actualSerializer.f28().m29();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.q29();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.b7() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.p32_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.b7() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.o29();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.u29(i);
        if (name === $this.q32_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.p32_1 = useArrayPolymorphism;
    this.q32_1 = discriminator;
  }
  protoOf(PolymorphismValidator).v2q = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).y2q = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.f28();
    checkKind_0(this, descriptor, actualClass);
    if (!this.p32_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).z2q = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).a2r = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.g30_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).r32 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.g30_1;
    var value_0 = this_0.x2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.n2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.n2(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).h30 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.s32(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.r32(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).s32 = function (descriptor, key) {
    var tmp0_safe_receiver = this.g30_1.x2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.x2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.t32_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.t32_1 === unknownKey) {
      _this__u8e3s4.t32_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.v2b(descriptor);
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.f2w_1.f31() === get_TC_COMMA()) {
      $this.f2w_1.f30('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.h2w_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.h2w_1 === -1)) {
        hasComma = $this.f2w_1.v32();
      }
    } else {
      $this.f2w_1.u32(get_COLON());
    }
    var tmp;
    if ($this.f2w_1.g31()) {
      if (decodingKey) {
        if ($this.h2w_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.f2w_1;
          var condition = !hasComma;
          var position = this_0.l2w_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected trailing comma';
            this_0.f30(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.f2w_1;
          var condition_0 = hasComma;
          var position_0 = this_1.l2w_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.f30(tmp$ret$1, position_0);
          }
        }
      }
      $this.h2w_1 = $this.h2w_1 + 1 | 0;
      tmp = $this.h2w_1;
    } else {
      if (hasComma) {
        $this.f2w_1.f30("Expected '}', but had ',' instead");
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.d2w_1;
      var elementDescriptor = descriptor.s29(index);
      var tmp;
      if (!elementDescriptor.i29()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.f2w_1.w32(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.q29(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.i29()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.f2w_1.w32(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.f2w_1.x32($this.j2w_1.h2x_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.f2w_1.h31();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.f2w_1.v32();
    while ($this.f2w_1.g31()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.f2w_1.u32(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.d2w_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.j2w_1.m2x_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.f2w_1.v32();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.k2w_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.h2h(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.f2w_1.f30('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.k2w_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i2h();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.j2w_1.g2x_1 ? true : trySkip($this.i2w_1, $this, key)) {
      $this.f2w_1.z32($this.j2w_1.h2x_1);
    } else {
      $this.f2w_1.y32(key);
    }
    return $this.f2w_1.v32();
  }
  function decodeListIndex($this) {
    var hasComma = $this.f2w_1.v32();
    var tmp;
    if ($this.f2w_1.g31()) {
      if (!($this.h2w_1 === -1) ? !hasComma : false) {
        $this.f2w_1.f30('Expected end of the array or comma');
      }
      $this.h2w_1 = $this.h2w_1 + 1 | 0;
      tmp = $this.h2w_1;
    } else {
      if (hasComma) {
        $this.f2w_1.f30('Unexpected trailing comma');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.j2w_1.h2x_1) {
      tmp = $this.f2w_1.b33();
    } else {
      tmp = $this.f2w_1.a33();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.d2w_1 = json;
    this.e2w_1 = mode;
    this.f2w_1 = lexer;
    this.g2w_1 = this.d2w_1.a29();
    this.h2w_1 = -1;
    this.i2w_1 = discriminatorHolder;
    this.j2w_1 = this.d2w_1.z2v_1;
    this.k2w_1 = this.j2w_1.k2x_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).t2x = function () {
    return this.d2w_1;
  };
  protoOf(StreamingJsonDecoder).a29 = function () {
    return this.g2w_1;
  };
  protoOf(StreamingJsonDecoder).u2x = function () {
    return (new JsonTreeReader(this.d2w_1.z2v_1, this.f2w_1)).j31();
  };
  protoOf(StreamingJsonDecoder).e2b = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.d2w_1.z2v_1.n2x_1;
      }
      if (tmp) {
        return deserializer.h28(this);
      }
      var discriminator = classDiscriminator(deserializer.f28(), this.d2w_1);
      var type = this.f2w_1.c33(discriminator, this.j2w_1.h2x_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.w28(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.i2w_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.h28(this);
      var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.d29_1, plus(e.message, ' at path: ') + this.f2w_1.m2w_1.s30(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).f2b = function (descriptor) {
    var newMode = switchMode(this.d2w_1, descriptor);
    this.f2w_1.m2w_1.n30(descriptor);
    this.f2w_1.u32(newMode.f33_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.l9_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.d2w_1, newMode, this.f2w_1, descriptor, this.i2w_1);
        break;
      default:
        var tmp_0;
        if (this.e2w_1.equals(newMode) ? this.d2w_1.z2v_1.k2x_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.d2w_1, newMode, this.f2w_1, descriptor, this.i2w_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).g2b = function (descriptor) {
    if (this.d2w_1.z2v_1.g2x_1 ? descriptor.o29() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.f2w_1.u32(this.e2w_1.g33_1);
    this.f2w_1.m2w_1.r30();
  };
  protoOf(StreamingJsonDecoder).r2a = function () {
    var tmp;
    var tmp0_safe_receiver = this.k2w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e30_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.f2w_1.h33();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).s2a = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).r2b = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.e2w_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.f2w_1.m2w_1.q30();
    }
    var value = protoOf(AbstractDecoder).r2b.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.f2w_1.m2w_1.p30(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).v2b = function (descriptor) {
    var index;
    switch (this.e2w_1.l9_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.e2w_1.equals(WriteMode_MAP_getInstance())) {
      this.f2w_1.m2w_1.o30(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).t2a = function () {
    var tmp;
    if (this.j2w_1.h2x_1) {
      tmp = this.f2w_1.j33();
    } else {
      tmp = this.f2w_1.i33();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).u2a = function () {
    var value = this.f2w_1.h2y();
    if (!value.equals(toLong(value.gb()))) {
      this.f2w_1.f30("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.gb();
  };
  protoOf(StreamingJsonDecoder).v2a = function () {
    var value = this.f2w_1.h2y();
    if (!value.equals(toLong(value.hb()))) {
      this.f2w_1.f30("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.hb();
  };
  protoOf(StreamingJsonDecoder).w2a = function () {
    var value = this.f2w_1.h2y();
    if (!value.equals(toLong(value.w9()))) {
      this.f2w_1.f30("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.w9();
  };
  protoOf(StreamingJsonDecoder).x2a = function () {
    return this.f2w_1.h2y();
  };
  protoOf(StreamingJsonDecoder).y2a = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.f2w_1;
      var input = this_0.i31();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.f30("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.d2w_1.z2v_1.p2x_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.f2w_1, result);
  };
  protoOf(StreamingJsonDecoder).z2a = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.f2w_1;
      var input = this_0.i31();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.f30("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.d2w_1.z2v_1.p2x_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.f2w_1, result);
  };
  protoOf(StreamingJsonDecoder).a2b = function () {
    var string = this.f2w_1.i31();
    if (!(string.length === 1)) {
      this.f2w_1.f30("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).b2b = function () {
    var tmp;
    if (this.j2w_1.h2x_1) {
      tmp = this.f2w_1.b33();
    } else {
      tmp = this.f2w_1.h31();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).c2b = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.f2w_1, this.d2w_1) : protoOf(AbstractDecoder).c2b.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.k33_1 = lexer;
    this.l33_1 = json.a29();
  }
  protoOf(JsonDecoderForUnsignedTypes).a29 = function () {
    return this.l33_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).v2b = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).w2a = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.k33_1;
      var input = this_0.i31();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_1 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.f30("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).x2a = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.k33_1;
      var input = this_0.i31();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_1 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.f30("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).u2a = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.k33_1;
      var input = this_0.i31();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_1 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.f30("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v2a = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.k33_1;
      var input = this_0.i31();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_1 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.f30("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.t30_1.d2z();
    $this.i2c(ensureNotNull($this.a31_1));
    $this.t30_1.f2z(get_COLON());
    $this.t30_1.e2z();
    $this.i2c(descriptor.m29());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.t30_1 = composer;
    this.u30_1 = json;
    this.v30_1 = mode;
    this.w30_1 = modeReuseCache;
    this.x30_1 = this.u30_1.a29();
    this.y30_1 = this.u30_1.z2v_1;
    this.z30_1 = false;
    this.a31_1 = null;
    var i = this.v30_1.l9_1;
    if (!(this.w30_1 == null)) {
      if (!(this.w30_1[i] === null) ? true : !(this.w30_1[i] === this)) {
        this.w30_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).t2x = function () {
    return this.u30_1;
  };
  protoOf(StreamingJsonEncoder).a29 = function () {
    return this.x30_1;
  };
  protoOf(StreamingJsonEncoder).a2d = function (descriptor, index) {
    return this.y30_1.f2x_1;
  };
  protoOf(StreamingJsonEncoder).v2c = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.t2x().z2v_1.n2x_1;
      }
      if (tmp) {
        serializer.g28(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.f28(), this.t2x());
      var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.f28().q29());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.a31_1 = baseClassDiscriminator;
      actualSerializer.g28(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).f2b = function (descriptor) {
    var newMode = switchMode(this.u30_1, descriptor);
    if (!(newMode.f33_1 === get_INVALID())) {
      this.t30_1.f2z(newMode.f33_1);
      this.t30_1.b2z();
    }
    if (!(this.a31_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.a31_1 = null;
    }
    if (this.v30_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.w30_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.l9_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.t30_1, this.u30_1, newMode, this.w30_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).g2b = function (descriptor) {
    if (!(this.v30_1.g33_1 === get_INVALID())) {
      this.t30_1.c2z();
      this.t30_1.d2z();
      this.t30_1.f2z(this.v30_1.g33_1);
    }
  };
  protoOf(StreamingJsonEncoder).x2b = function (descriptor, index) {
    switch (this.v30_1.l9_1) {
      case 1:
        if (!this.t30_1.a2z_1) {
          this.t30_1.f2z(get_COMMA());
        }

        this.t30_1.d2z();
        break;
      case 2:
        if (!this.t30_1.a2z_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.t30_1.f2z(get_COMMA());
            this.t30_1.d2z();
            tmp_0 = true;
          } else {
            this.t30_1.f2z(get_COLON());
            this.t30_1.e2z();
            tmp_0 = false;
          }
          tmp.z30_1 = tmp_0;
        } else {
          this.z30_1 = true;
          this.t30_1.d2z();
        }

        break;
      case 3:
        if (index === 0)
          this.z30_1 = true;
        if (index === 1) {
          this.t30_1.f2z(get_COMMA());
          this.t30_1.e2z();
          this.z30_1 = false;
        }

        break;
      default:
        if (!this.t30_1.a2z_1) {
          this.t30_1.f2z(get_COMMA());
        }

        this.t30_1.d2z();
        this.i2c(getJsonElementName(descriptor, this.u30_1, index));
        this.t30_1.f2z(get_COLON());
        this.t30_1.e2z();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).w2c = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.y30_1.k2x_1) {
      protoOf(AbstractEncoder).w2c.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).j2c = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.t30_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.t30_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.t30_1.z2y_1, this.z30_1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.u30_1, this.v30_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.t30_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.t30_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.t30_1.z2y_1, this.z30_1);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.u30_1, this.v30_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).j2c.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).z2b = function () {
    this.t30_1.h2z(get_NULL());
  };
  protoOf(StreamingJsonEncoder).a2c = function (value) {
    if (this.z30_1) {
      this.i2c(value.toString());
    } else {
      this.t30_1.q2z(value);
    }
  };
  protoOf(StreamingJsonEncoder).b2c = function (value) {
    if (this.z30_1) {
      this.i2c(value.toString());
    } else {
      this.t30_1.l2z(value);
    }
  };
  protoOf(StreamingJsonEncoder).c2c = function (value) {
    if (this.z30_1) {
      this.i2c(value.toString());
    } else {
      this.t30_1.n2z(value);
    }
  };
  protoOf(StreamingJsonEncoder).d2c = function (value) {
    if (this.z30_1) {
      this.i2c(value.toString());
    } else {
      this.t30_1.o2z(value);
    }
  };
  protoOf(StreamingJsonEncoder).e2c = function (value) {
    if (this.z30_1) {
      this.i2c(value.toString());
    } else {
      this.t30_1.p2z(value);
    }
  };
  protoOf(StreamingJsonEncoder).f2c = function (value) {
    if (this.z30_1) {
      this.i2c(value.toString());
    } else {
      this.t30_1.j2z(value);
    }
    if (!this.y30_1.p2x_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.t30_1.z2y_1));
    }
  };
  protoOf(StreamingJsonEncoder).g2c = function (value) {
    if (this.z30_1) {
      this.i2c(value.toString());
    } else {
      this.t30_1.k2z(value);
    }
    if (!this.y30_1.p2x_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.t30_1.z2y_1));
    }
  };
  protoOf(StreamingJsonEncoder).h2c = function (value) {
    this.i2c(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).i2c = function (value) {
    return this.t30_1.r2z(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.p29() ? get_unsignedNumberDescriptors().a1(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.p29() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).f28(), serializer_0(Companion_getInstance()).f28(), serializer_2(Companion_getInstance_1()).f28(), serializer_3(Companion_getInstance_2()).f28()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.y5(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.n8(value, lastPos, i);
          _this__u8e3s4.x5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.n8(value, lastPos, value.length);
    } else {
      _this__u8e3s4.x5(value);
    }
    _this__u8e3s4.y5(get_STRING());
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.r33()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.o33_1 = json;
    this.p33_1 = value;
    this.q33_1 = this.t2x().z2v_1;
  }
  protoOf(AbstractJsonTreeDecoder).t2x = function () {
    return this.o33_1;
  };
  protoOf(AbstractJsonTreeDecoder).q2 = function () {
    return this.p33_1;
  };
  protoOf(AbstractJsonTreeDecoder).a29 = function () {
    return this.t2x().a29();
  };
  protoOf(AbstractJsonTreeDecoder).r33 = function () {
    var tmp0_safe_receiver = this.o2o();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.s33(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.q2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).u2x = function () {
    return this.r33();
  };
  protoOf(AbstractJsonTreeDecoder).e2b = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).p2o = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).f2b = function (descriptor) {
    var currentObject = this.r33();
    var tmp0_subject = descriptor.q29();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.t2x();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.m29() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.t2x();
        var keyDescriptor = carrierDescriptor(descriptor.s29(0), this_0.a29());
        var keyKind = keyDescriptor.q29();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.t2x();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.m29() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.z2v_1.i2x_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.t2x();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.m29() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.t2x();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.m29() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).g2b = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).r2a = function () {
    var tmp = this.r33();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).t33 = function (tag) {
    var currentElement = this.s33(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.r33()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).u33 = function (tag) {
    return !(this.s33(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).r2o = function (tag) {
    return this.u33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v33 = function (tag) {
    var value = this.t33(tag);
    if (!this.t2x().z2v_1.h2x_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.a2y_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(this.r33()));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp0_elvis_lhs_0 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).s2o = function (tag) {
    return this.v33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w33 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.t33(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ByteCompanionObject_instance.MIN_VALUE;
        if (result <= ByteCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).t2o = function (tag) {
    return this.w33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x33 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.t33(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ShortCompanionObject_instance.MIN_VALUE;
        if (result <= ShortCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).u2o = function (tag) {
    return this.x33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y33 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.t33(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).v2o = function (tag) {
    return this.y33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z33 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.t33(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).w2o = function (tag) {
    return this.z33((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a34 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.t33(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.t2x().z2v_1.p2x_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.r33()));
  };
  protoOf(AbstractJsonTreeDecoder).x2o = function (tag) {
    return this.a34((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b34 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.t33(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.t2x().z2v_1.p2x_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.r33()));
  };
  protoOf(AbstractJsonTreeDecoder).y2o = function (tag) {
    return this.b34((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c34 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.t33(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(this_0.y2x());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).z2o = function (tag) {
    return this.c34((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d34 = function (tag) {
    var value = this.t33(tag);
    if (!this.t2x().z2v_1.h2x_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.a2y_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.r33()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.r33()));
    return value.y2x();
  };
  protoOf(AbstractJsonTreeDecoder).a2p = function (tag) {
    return this.d34((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e34 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.t33(tag).y2x()), this.t2x()) : protoOf(NamedValueDecoder).b2p.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).b2p = function (tag, inlineDescriptor) {
    return this.e34((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).c2b = function (descriptor) {
    return !(this.o2o() == null) ? protoOf(NamedValueDecoder).c2b.call(this, descriptor) : (new JsonPrimitiveDecoder(this.t2x(), this.q2())).c2b(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.t2x();
      var elementDescriptor = descriptor.s29(index);
      var tmp;
      if (!elementDescriptor.i29()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.s33(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.q29(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.i29()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.s33(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.s33(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.o34_1 = (!$this.t2x().z2v_1.k2x_1 ? !descriptor.v29(index) : false) ? descriptor.s29(index).i29() : false;
    return $this.o34_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.k34_1 = value;
    this.l34_1 = polyDiscriminator;
    this.m34_1 = polyDescriptor;
    this.n34_1 = 0;
    this.o34_1 = false;
  }
  protoOf(JsonTreeDecoder).q2 = function () {
    return this.k34_1;
  };
  protoOf(JsonTreeDecoder).v2b = function (descriptor) {
    while (this.n34_1 < descriptor.o29()) {
      var tmp1 = this.n34_1;
      this.n34_1 = tmp1 + 1 | 0;
      var name = this.j2o(descriptor, tmp1);
      var index = this.n34_1 - 1 | 0;
      this.o34_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.q2();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.q33_1.m2x_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).r2a = function () {
    return !this.o34_1 ? protoOf(AbstractJsonTreeDecoder).r2a.call(this) : false;
  };
  protoOf(JsonTreeDecoder).k2o = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.t2x());
    var baseName = descriptor.u29(index);
    if (strategy == null) {
      if (!this.q33_1.q2x_1)
        return baseName;
      if (this.q2().k2().a1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.t2x(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.q2().k2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.x2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.j30(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).s33 = function (tag) {
    return getValue(this.q2(), tag);
  };
  protoOf(JsonTreeDecoder).f2b = function (descriptor) {
    if (descriptor === this.m34_1) {
      var tmp = this.t2x();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r33();
      var descriptor_0 = this.m34_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.m29() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.l34_1, this.m34_1);
    }
    return protoOf(AbstractJsonTreeDecoder).f2b.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).g2b = function (descriptor) {
    var tmp;
    if (this.q33_1.g2x_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.q29();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.t2x());
    var tmp_1;
    if (strategy == null ? !this.q33_1.q2x_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.t2x(), descriptor).k2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.t2x()).s32(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.q2().k2().u();
    while (tmp1_iterator.v()) {
      var key = tmp1_iterator.x();
      if (!names.a1(key) ? !(key === this.l34_1) : false) {
        throw UnknownKeyException(key, this.q2().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.u34_1 = value;
    this.v34_1 = this.u34_1.n();
    this.w34_1 = -1;
  }
  protoOf(JsonTreeListDecoder).q2 = function () {
    return this.u34_1;
  };
  protoOf(JsonTreeListDecoder).k2o = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).s33 = function (tag) {
    return this.u34_1.g1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).v2b = function (descriptor) {
    while (this.w34_1 < (this.v34_1 - 1 | 0)) {
      this.w34_1 = this.w34_1 + 1 | 0;
      return this.w34_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.c35_1 = value;
    this.c2p(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).q2 = function () {
    return this.c35_1;
  };
  protoOf(JsonPrimitiveDecoder).v2b = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).s33 = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.c35_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.n35_1 = value;
    this.o35_1 = toList(this.n35_1.k2());
    this.p35_1 = imul(this.o35_1.n(), 2);
    this.q35_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).q2 = function () {
    return this.n35_1;
  };
  protoOf(JsonTreeMapDecoder).k2o = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.o35_1.g1(i);
  };
  protoOf(JsonTreeMapDecoder).v2b = function (descriptor) {
    while (this.q35_1 < (this.p35_1 - 1 | 0)) {
      this.q35_1 = this.q35_1 + 1 | 0;
      return this.q35_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).s33 = function (tag) {
    return (this.q35_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.n35_1, tag);
  };
  protoOf(JsonTreeMapDecoder).g2b = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.f28())).e2b(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.f33_1 = begin;
    this.g33_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.q29();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.s29(0), _this__u8e3s4.a29());
          var keyKind = keyDescriptor.q29();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.z2v_1.i2x_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.q29(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.p29()) {
      tmp = carrierDescriptor(_this__u8e3s4.s29(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.r35(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.r35(lastPosition, currentPosition);
    var result = $this.o2w_1.toString();
    $this.o2w_1.s8(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.n2w_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.n2w_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.s35(), $this.l2w_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.t35(currentPosition);
    if (currentPosition === -1) {
      $this.f30('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.s35();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.s35(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.f30("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.o2w_1.y5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.l2w_1 = startPos;
      $this.u35();
      if (($this.l2w_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.f30('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.l2w_1);
    }
    $this.o2w_1.y5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.f30("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.t35(start);
    if (current >= charSequenceLength($this.s35()) ? true : current === -1) {
      $this.f30('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.s35();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var this_0 = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp1_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp1_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.f30("Expected valid boolean literal prefix, but had '" + $this.i31() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.s35()) - current | 0) < literalSuffix.length) {
      $this.f30('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.s35(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.f30("Expected valid boolean literal prefix, but had '" + $this.i31() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.l2w_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.y6();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.y6();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.l2w_1 = 0;
    this.m2w_1 = new JsonPath();
    this.n2w_1 = null;
    this.o2w_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).u35 = function () {
  };
  protoOf(AbstractJsonLexer).v35 = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).p2w = function () {
    var nextToken = this.k31();
    if (!(nextToken === 10)) {
      this.f30('Expected EOF after parsing, but had ' + toString_0(charSequenceGet(this.s35(), this.l2w_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).e31 = function (expected) {
    var token = this.k31();
    if (!(token === expected)) {
      this.w35(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).u32 = function (expected) {
    this.u35();
    var source = this.s35();
    var cpos = this.l2w_1;
    $l$loop_0: while (true) {
      cpos = this.t35(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.l2w_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.x35(expected);
    }
    this.l2w_1 = cpos;
    this.x35(expected);
  };
  protoOf(AbstractJsonLexer).x35 = function (expected) {
    if (this.l2w_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.l2w_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.l2w_1 = this.l2w_1 - 1 | 0;
          tmp$ret$1 = this.i31();
          break $l$block;
        }finally {
          this.l2w_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.y35("Expected string literal but 'null' literal was found", this.l2w_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
      }
    }
    this.w35(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).z35 = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.l2w_1 - 1 | 0 : this.l2w_1;
    var s = (this.l2w_1 === charSequenceLength(this.s35()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.s35(), position));
    this.f30('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).w35 = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.z35(expectedToken, wasConsumed) : $super.z35.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).f31 = function () {
    var source = this.s35();
    var cpos = this.l2w_1;
    $l$loop_0: while (true) {
      cpos = this.t35(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.l2w_1 = cpos;
      return charToTokenClass(ch);
    }
    this.l2w_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).w32 = function (doConsume) {
    var current = this.a36();
    current = this.t35(current);
    var len = charSequenceLength(this.s35()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.s35(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.s35(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.l2w_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).h33 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.w32(doConsume) : $super.w32.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).a36 = function () {
    var current = this.l2w_1;
    $l$loop_0: while (true) {
      current = this.t35(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.s35(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.l2w_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).x32 = function (isLenient) {
    var token = this.f31();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.i31();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.h31();
    }
    var string = tmp;
    this.n2w_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).b36 = function () {
    this.n2w_1 = null;
  };
  protoOf(AbstractJsonLexer).c36 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.s35();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).h31 = function () {
    if (!(this.n2w_1 == null)) {
      return takePeeked(this);
    }
    return this.a33();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.t35(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.f30('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.r35(lastPosition, currentPosition);
          currentPosition = this.t35(currentPosition);
          if (currentPosition === -1) {
            this.f30('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.c36(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.l2w_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).b33 = function () {
    var result = this.i31();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.f30("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).i31 = function () {
    if (!(this.n2w_1 == null)) {
      return takePeeked(this);
    }
    var current = this.a36();
    if (current >= charSequenceLength(this.s35()) ? true : current === -1) {
      this.f30('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.s35(), current));
    if (token === 1) {
      return this.h31();
    }
    if (!(token === 0)) {
      this.f30('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.s35(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.s35(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.s35())) {
        usedAppend = true;
        this.r35(this.l2w_1, current);
        var eof = this.t35(current);
        if (eof === -1) {
          this.l2w_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.c36(this.l2w_1, current);
    } else {
      tmp = decodedString(this, this.l2w_1, current);
    }
    var result = tmp;
    this.l2w_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).r35 = function (fromIndex, toIndex) {
    this.o2w_1.n8(this.s35(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).z32 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.f31();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.i31();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.f31();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.i31();
        } else {
          this.a33();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.r(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.l2w_1, 'found ] instead of } at path: ' + this.m2w_1, this.s35());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.l2w_1, 'found } instead of ] at path: ' + this.m2w_1, this.s35());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.f30('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.k31();
      if (tokenStack.n() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.s35() + "', currentPosition=" + this.l2w_1 + ')';
  };
  protoOf(AbstractJsonLexer).y32 = function (key) {
    var processed = this.c36(0, this.l2w_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.y35("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).y35 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.m2w_1.s30() + hintMessage, this.s35());
  };
  protoOf(AbstractJsonLexer).f30 = function (message, position, hint, $super) {
    position = position === VOID ? this.l2w_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.y35(message, position, hint) : $super.y35.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).h2y = function () {
    var current = this.a36();
    current = this.t35(current);
    if (current >= charSequenceLength(this.s35()) ? true : current === -1) {
      this.f30('EOF');
    }
    var tmp;
    if (charSequenceGet(this.s35(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.s35())) {
        this.f30('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.s35()))) {
      var ch = charSequenceGet(this.s35(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.f30('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.f30("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.f30("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.f30("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.f30("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.o9(toLong(10)).ta(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.o9(toLong(10)).ua(toLong(digit));
      if (accumulator.p9(new Long(0, 0)) > 0) {
        this.f30('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.f30('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.f30('EOF');
      }
      if (!(charSequenceGet(this.s35(), current) === _Char___init__impl__6a9atx(34))) {
        this.f30('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.l2w_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.y6() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_3();
      if (doubleAccumulator > (new Long(-1, 2147483647)).y6()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_3();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).y6();
      }
      if (tmp_0) {
        this.f30('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.f30("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_3();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.ya();
      } else {
        this.f30('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).i33 = function () {
    return consumeBoolean(this, this.a36());
  };
  protoOf(AbstractJsonLexer).j33 = function () {
    var current = this.a36();
    if (current === charSequenceLength(this.s35())) {
      this.f30('EOF');
    }
    var tmp;
    if (charSequenceGet(this.s35(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.l2w_1 === charSequenceLength(this.s35())) {
        this.f30('EOF');
      }
      if (!(charSequenceGet(this.s35(), this.l2w_1) === _Char___init__impl__6a9atx(34))) {
        this.f30('Expected closing quotation mark');
      }
      this.l2w_1 = this.l2w_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().e36_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().d36_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.d36_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.e36_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.d36_1 = charArray(117);
    this.e36_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.j36_1 = source;
  }
  protoOf(StringJsonLexer).s35 = function () {
    return this.j36_1;
  };
  protoOf(StringJsonLexer).t35 = function (position) {
    return position < this.j36_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).k31 = function () {
    var source = this.j36_1;
    $l$loop: while (!(this.l2w_1 === -1) ? this.l2w_1 < source.length : false) {
      var tmp1 = this.l2w_1;
      this.l2w_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).v32 = function () {
    var current = this.a36();
    if (current === this.j36_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.j36_1, current) === _Char___init__impl__6a9atx(44)) {
      this.l2w_1 = this.l2w_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).g31 = function () {
    var current = this.l2w_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.j36_1.length) {
      var c = charSequenceGet(this.j36_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.l2w_1 = current;
      return this.v35(c);
    }
    this.l2w_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).a36 = function () {
    var current = this.l2w_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.j36_1.length) {
      var c = charSequenceGet(this.j36_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.l2w_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).u32 = function (expected) {
    if (this.l2w_1 === -1) {
      this.x35(expected);
    }
    var source = this.j36_1;
    $l$loop: while (this.l2w_1 < source.length) {
      var tmp1 = this.l2w_1;
      this.l2w_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.x35(expected);
    }
    this.l2w_1 = -1;
    this.x35(expected);
  };
  protoOf(StringJsonLexer).a33 = function () {
    this.u32(get_STRING());
    var current = this.l2w_1;
    var closingQuote = indexOf(this.j36_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.i31();
      this.z35(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.j36_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.j36_1, this.l2w_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.l2w_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.j36_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).c33 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.l2w_1;
    try {
      if (!(this.k31() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.x32(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.b36();
      if (!(this.k31() === get_TC_COLON()))
        return null;
      return this.x32(isLenient);
    }finally {
      this.l2w_1 = positionSnapshot;
      this.b36();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.b2w_1;
  }
  function JsonToStringWriter() {
    this.c2w_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).m2z = function (value) {
    this.c2w_1.w5(value);
  };
  protoOf(JsonToStringWriter).g2z = function (char) {
    this.c2w_1.y5(char);
  };
  protoOf(JsonToStringWriter).i2z = function (text) {
    this.c2w_1.x5(text);
  };
  protoOf(JsonToStringWriter).s2z = function (text) {
    printQuoted(this.c2w_1, text);
  };
  protoOf(JsonToStringWriter).iq = function () {
    this.c2w_1.t8();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.c2w_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).i29 = get_isNullable;
  protoOf(defer$1).p29 = get_isInline;
  protoOf(defer$1).n29 = get_annotations;
  protoOf(PolymorphismValidator).x2q = contextual;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  PRIMITIVE_TAG = 'primitive';
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_OTHER = 0;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
