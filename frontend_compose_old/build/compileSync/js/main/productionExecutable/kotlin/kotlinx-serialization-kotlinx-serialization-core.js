(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.gb;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var VOID = kotlin_kotlin.$_$.g;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.u4;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var emptyList = kotlin_kotlin.$_$.t6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.j;
  var lazy = kotlin_kotlin.$_$.kf;
  var classMeta = kotlin_kotlin.$_$.x9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.zb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var objectCreate = kotlin_kotlin.$_$.eb;
  var captureStack = kotlin_kotlin.$_$.r9;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.s1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.u1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ge;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var KClass = kotlin_kotlin.$_$.wb;
  var isInterface = kotlin_kotlin.$_$.ta;
  var Triple = kotlin_kotlin.$_$.pe;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.ke;
  var Entry = kotlin_kotlin.$_$.s5;
  var LinkedHashMap = kotlin_kotlin.$_$.p5;
  var MutableMap = kotlin_kotlin.$_$.w5;
  var Map = kotlin_kotlin.$_$.t5;
  var HashMap = kotlin_kotlin.$_$.n5;
  var LinkedHashSet = kotlin_kotlin.$_$.q5;
  var MutableSet = kotlin_kotlin.$_$.x5;
  var Set = kotlin_kotlin.$_$.z5;
  var HashSet = kotlin_kotlin.$_$.o5;
  var ArrayList = kotlin_kotlin.$_$.l5;
  var MutableList = kotlin_kotlin.$_$.u5;
  var List = kotlin_kotlin.$_$.r5;
  var Collection = kotlin_kotlin.$_$.m5;
  var copyToArray = kotlin_kotlin.$_$.q6;
  var toString = kotlin_kotlin.$_$.lb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.a3;
  var Result = kotlin_kotlin.$_$.le;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var equals = kotlin_kotlin.$_$.aa;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var isBlank = kotlin_kotlin.$_$.qc;
  var toList = kotlin_kotlin.$_$.n8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var toHashSet = kotlin_kotlin.$_$.j8;
  var toBooleanArray = kotlin_kotlin.$_$.i8;
  var withIndex = kotlin_kotlin.$_$.t8;
  var to = kotlin_kotlin.$_$.vf;
  var toMap = kotlin_kotlin.$_$.o8;
  var lazy_0 = kotlin_kotlin.$_$.lf;
  var contentEquals = kotlin_kotlin.$_$.f6;
  var until = kotlin_kotlin.$_$.vb;
  var joinToString = kotlin_kotlin.$_$.h7;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var Long = kotlin_kotlin.$_$.ie;
  var Char = kotlin_kotlin.$_$.zd;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.p2;
  var Duration = kotlin_kotlin.$_$.xd;
  var Companion_getInstance = kotlin_kotlin.$_$.w4;
  var toIntOrNull = kotlin_kotlin.$_$.kd;
  var hashCode = kotlin_kotlin.$_$.ia;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var isArray = kotlin_kotlin.$_$.la;
  var arrayIterator = kotlin_kotlin.$_$.p9;
  var asList = kotlin_kotlin.$_$.c6;
  var step = kotlin_kotlin.$_$.ub;
  var getValue = kotlin_kotlin.$_$.e7;
  var longArray = kotlin_kotlin.$_$.ya;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.y4;
  var get_lastIndex = kotlin_kotlin.$_$.k7;
  var countTrailingZeroBits = kotlin_kotlin.$_$.df;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.s;
  var KTypeParameter = kotlin_kotlin.$_$.ac;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var booleanArray = kotlin_kotlin.$_$.q9;
  var emptyMap = kotlin_kotlin.$_$.u6;
  var contentHashCode = kotlin_kotlin.$_$.g6;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.x4;
  var isCharArray = kotlin_kotlin.$_$.oa;
  var charArray = kotlin_kotlin.$_$.t9;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.q4;
  var isDoubleArray = kotlin_kotlin.$_$.qa;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.r4;
  var isFloatArray = kotlin_kotlin.$_$.ra;
  var isLongArray = kotlin_kotlin.$_$.ua;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.c5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.b4;
  var ULongArray = kotlin_kotlin.$_$.ue;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.x3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.u3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.z3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.v3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.s4;
  var isIntArray = kotlin_kotlin.$_$.sa;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.b5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.s3;
  var UIntArray = kotlin_kotlin.$_$.se;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.o3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.q3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.m3;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.t4;
  var isShortArray = kotlin_kotlin.$_$.va;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.d5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.k4;
  var UShortArray = kotlin_kotlin.$_$.we;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.g4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.d4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.i4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.e4;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.p4;
  var isByteArray = kotlin_kotlin.$_$.na;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.a5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.j3;
  var UByteArray = kotlin_kotlin.$_$.qe;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.g3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.h3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d3;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.o4;
  var isBooleanArray = kotlin_kotlin.$_$.ma;
  var coerceAtLeast = kotlin_kotlin.$_$.ob;
  var copyOf = kotlin_kotlin.$_$.k6;
  var copyOf_0 = kotlin_kotlin.$_$.m6;
  var copyOf_1 = kotlin_kotlin.$_$.n6;
  var copyOf_2 = kotlin_kotlin.$_$.i6;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.c4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.y3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.a4;
  var copyOf_3 = kotlin_kotlin.$_$.p6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.t3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.p3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.r3;
  var copyOf_4 = kotlin_kotlin.$_$.h6;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.l4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.h4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.j4;
  var copyOf_5 = kotlin_kotlin.$_$.l6;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.k3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.f3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.i3;
  var copyOf_6 = kotlin_kotlin.$_$.j6;
  var Unit = kotlin_kotlin.$_$.ye;
  var trimIndent = kotlin_kotlin.$_$.ud;
  var equals_0 = kotlin_kotlin.$_$.lc;
  var charSequenceLength = kotlin_kotlin.$_$.v9;
  var charSequenceGet = kotlin_kotlin.$_$.u9;
  var toString_0 = kotlin_kotlin.$_$.x2;
  var titlecase = kotlin_kotlin.$_$.fd;
  var isLowerCase = kotlin_kotlin.$_$.tc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.v4;
  var ULong = kotlin_kotlin.$_$.ve;
  var UInt = kotlin_kotlin.$_$.te;
  var UShort = kotlin_kotlin.$_$.xe;
  var UByte = kotlin_kotlin.$_$.re;
  var mapOf = kotlin_kotlin.$_$.s7;
  var lastOrNull = kotlin_kotlin.$_$.n7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.l7;
  var get_js = kotlin_kotlin.$_$.xa;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.g7;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var get_indices_0 = kotlin_kotlin.$_$.f7;
  var Companion_instance = kotlin_kotlin.$_$.z4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.y2;
  var createFailure = kotlin_kotlin.$_$.ef;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(StringFormat, 'StringFormat', interfaceMeta);
  setMetadataFor(BinaryFormat, 'BinaryFormat', interfaceMeta);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.h28(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.r2b(descriptor, index, deserializer, previousValue) : $super.r2b.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.f2b(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.g28(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.f28().i29();
    if (isNullabilitySupported) {
      return this.v2c(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.z2b();
    } else {
      this.y2c();
      this.v2c(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.v2q(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.q28('type', serializer_1(StringCompanionObject_instance).f28());
      $this$buildSerialDescriptor.q28('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.r28_1.b7() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.k28_1 = this$0.s28_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.r28_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.r28_1 = baseClass;
    this.s28_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t28_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).u28 = function () {
    return this.r28_1;
  };
  protoOf(PolymorphicSerializer).f28 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.t28_1;
    descriptor$factory();
    return this_0.q2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.r28_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.x28(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.u28());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.w28(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.u28());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.f28();
    }, null);
  }
  function SealedClassSerializer() {
  }
  function StringFormat() {
  }
  function BinaryFormat() {
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.n() === 1 ? "Field '" + missingFields.g1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.d29_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.u();
      while (tmp0_iterator.v()) {
        var item = tmp0_iterator.x();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.r(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.u();
      while (tmp0_iterator_0.v()) {
        var item_0 = tmp0_iterator_0.x();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.r(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.g1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.g1(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.g1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.g1(0), serializers.g1(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.g1(0), serializers.g1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.g1(0), serializers.g1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.g1(0), serializers.g1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.g1(0), serializers.g1(1), serializers.g1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.g1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.r7();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.q7();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.u();
    while (tmp0_iterator.v()) {
      var item = tmp0_iterator.x();
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var value = item.gg_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          var message = 'Star projections in type arguments are not allowed, but had ' + type;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      var tmp$ret$2 = tmp$ret$1;
      destination.r(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.c1()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_0 = null;
      } else {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_2;
    if (typeArguments.c1()) {
      tmp_2 = _this__u8e3s4.f29(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var serializers = tmp_3;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.e29(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_2;
    var tmp_4;
    if (contextualSerializer == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_4 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_4;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.g1(0).p7();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().g29(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().g29(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().h29(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().h29(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.g1(0).p7();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.g1(0).p7();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.f28().i29()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.j29_1 = original;
    this.k29_1 = kClass;
    this.l29_1 = this.j29_1.m29() + '<' + this.k29_1.b7() + '>';
  }
  protoOf(ContextDescriptor).n29 = function () {
    return this.j29_1.n29();
  };
  protoOf(ContextDescriptor).o29 = function () {
    return this.j29_1.o29();
  };
  protoOf(ContextDescriptor).p29 = function () {
    return this.j29_1.p29();
  };
  protoOf(ContextDescriptor).i29 = function () {
    return this.j29_1.i29();
  };
  protoOf(ContextDescriptor).q29 = function () {
    return this.j29_1.q29();
  };
  protoOf(ContextDescriptor).r29 = function (index) {
    return this.j29_1.r29(index);
  };
  protoOf(ContextDescriptor).s29 = function (index) {
    return this.j29_1.s29(index);
  };
  protoOf(ContextDescriptor).t29 = function (name) {
    return this.j29_1.t29(name);
  };
  protoOf(ContextDescriptor).u29 = function (index) {
    return this.j29_1.u29(index);
  };
  protoOf(ContextDescriptor).v29 = function (index) {
    return this.j29_1.v29(index);
  };
  protoOf(ContextDescriptor).m29 = function () {
    return this.l29_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.j29_1, another.j29_1) ? another.k29_1.equals(this.k29_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.k29_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.l29_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.k29_1 + ', original: ' + this.j29_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.f29(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.f28();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.k29_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.w29_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.a2a_1 = $this_elementDescriptors;
    this.z29_1 = $this_elementDescriptors.o29();
  }
  protoOf(elementDescriptors$1$1).v = function () {
    return this.z29_1 > 0;
  };
  protoOf(elementDescriptors$1$1).x = function () {
    var tmp = this.a2a_1.o29();
    var tmp1 = this.z29_1;
    this.z29_1 = tmp1 - 1 | 0;
    return this.a2a_1.s29(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.b2a_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).u = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.b2a_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.l28_1.n(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.i28_1 = serialName;
    this.j28_1 = false;
    this.k28_1 = emptyList();
    this.l28_1 = ArrayList_init_$Create$_0();
    this.m28_1 = HashSet_init_$Create$();
    this.n28_1 = ArrayList_init_$Create$_0();
    this.o28_1 = ArrayList_init_$Create$_0();
    this.p28_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).c2a = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.m28_1.r(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.i28_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.l28_1.r(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.n28_1.r(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.o28_1.r(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.p28_1.r(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).q28 = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.c2a(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.c2a.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.l28_1.n(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.o2a_1;
    _hashCode$factory();
    return this_0.q2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.n2a_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.u29(it) + ': ' + this$0.s29(it).m29();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.d2a_1 = serialName;
    this.e2a_1 = kind;
    this.f2a_1 = elementsCount;
    this.g2a_1 = builder.k28_1;
    this.h2a_1 = toHashSet(builder.l28_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.l28_1;
    tmp.i2a_1 = copyToArray(this_0);
    this.j2a_1 = compactArray(builder.n28_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.o28_1;
    tmp_0.k2a_1 = copyToArray(this_1);
    this.l2a_1 = toBooleanArray(builder.p28_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.i2a_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.u();
    while (tmp0_iterator.v()) {
      var item = tmp0_iterator.x();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.td_1, item.sd_1);
      destination.r(tmp$ret$2);
    }
    tmp_1.m2a_1 = toMap(destination);
    this.n2a_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.o2a_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).m29 = function () {
    return this.d2a_1;
  };
  protoOf(SerialDescriptorImpl).q29 = function () {
    return this.e2a_1;
  };
  protoOf(SerialDescriptorImpl).o29 = function () {
    return this.f2a_1;
  };
  protoOf(SerialDescriptorImpl).n29 = function () {
    return this.g2a_1;
  };
  protoOf(SerialDescriptorImpl).p2a = function () {
    return this.h2a_1;
  };
  protoOf(SerialDescriptorImpl).u29 = function (index) {
    return getChecked(this.i2a_1, index);
  };
  protoOf(SerialDescriptorImpl).t29 = function (name) {
    var tmp0_elvis_lhs = this.m2a_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).r29 = function (index) {
    return getChecked(this.k2a_1, index);
  };
  protoOf(SerialDescriptorImpl).s29 = function (index) {
    return getChecked(this.j2a_1, index);
  };
  protoOf(SerialDescriptorImpl).v29 = function (index) {
    return getChecked_0(this.l2a_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m29() === other.m29())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.n2a_1, other.n2a_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.o29() === other.o29())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.o29();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s29(index).m29() === other.s29(index).m29())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s29(index).q29(), other.s29(index).q29())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.f2a_1);
    var tmp_0 = this.d2a_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).b7());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).q2a = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).r2a = function () {
    return true;
  };
  protoOf(AbstractDecoder).s2a = function () {
    return null;
  };
  protoOf(AbstractDecoder).t2a = function () {
    var tmp = this.q2a();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).u2a = function () {
    var tmp = this.q2a();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v2a = function () {
    var tmp = this.q2a();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w2a = function () {
    var tmp = this.q2a();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x2a = function () {
    var tmp = this.q2a();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y2a = function () {
    var tmp = this.q2a();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).z2a = function () {
    var tmp = this.q2a();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a2b = function () {
    var tmp = this.q2a();
    return tmp instanceof Char ? tmp.y9_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).b2b = function () {
    var tmp = this.q2a();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).c2b = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).d2b = function (deserializer, previousValue) {
    return this.e2b(deserializer);
  };
  protoOf(AbstractDecoder).f2b = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).g2b = function (descriptor) {
  };
  protoOf(AbstractDecoder).h2b = function (descriptor, index) {
    return this.t2a();
  };
  protoOf(AbstractDecoder).i2b = function (descriptor, index) {
    return this.u2a();
  };
  protoOf(AbstractDecoder).j2b = function (descriptor, index) {
    return this.v2a();
  };
  protoOf(AbstractDecoder).k2b = function (descriptor, index) {
    return this.w2a();
  };
  protoOf(AbstractDecoder).l2b = function (descriptor, index) {
    return this.x2a();
  };
  protoOf(AbstractDecoder).m2b = function (descriptor, index) {
    return this.y2a();
  };
  protoOf(AbstractDecoder).n2b = function (descriptor, index) {
    return this.z2a();
  };
  protoOf(AbstractDecoder).o2b = function (descriptor, index) {
    return this.a2b();
  };
  protoOf(AbstractDecoder).p2b = function (descriptor, index) {
    return this.b2b();
  };
  protoOf(AbstractDecoder).q2b = function (descriptor, index) {
    return this.c2b(descriptor.s29(index));
  };
  protoOf(AbstractDecoder).r2b = function (descriptor, index, deserializer, previousValue) {
    return this.d2b(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).t2b = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.f28().i29();
    return (isNullabilitySupported ? true : this.r2a()) ? this.d2b(deserializer, previousValue) : this.s2a();
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).f2b = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).g2b = function (descriptor) {
  };
  protoOf(AbstractEncoder).x2b = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).y2b = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).z2b = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).a2c = function (value) {
    return this.y2b(value);
  };
  protoOf(AbstractEncoder).b2c = function (value) {
    return this.y2b(value);
  };
  protoOf(AbstractEncoder).c2c = function (value) {
    return this.y2b(value);
  };
  protoOf(AbstractEncoder).d2c = function (value) {
    return this.y2b(value);
  };
  protoOf(AbstractEncoder).e2c = function (value) {
    return this.y2b(value);
  };
  protoOf(AbstractEncoder).f2c = function (value) {
    return this.y2b(value);
  };
  protoOf(AbstractEncoder).g2c = function (value) {
    return this.y2b(value);
  };
  protoOf(AbstractEncoder).h2c = function (value) {
    return this.y2b(new Char(value));
  };
  protoOf(AbstractEncoder).i2c = function (value) {
    return this.y2b(value);
  };
  protoOf(AbstractEncoder).j2c = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).k2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.a2c(value);
    }
  };
  protoOf(AbstractEncoder).l2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.b2c(value);
    }
  };
  protoOf(AbstractEncoder).m2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.c2c(value);
    }
  };
  protoOf(AbstractEncoder).n2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.d2c(value);
    }
  };
  protoOf(AbstractEncoder).o2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.e2c(value);
    }
  };
  protoOf(AbstractEncoder).p2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.f2c(value);
    }
  };
  protoOf(AbstractEncoder).q2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.g2c(value);
    }
  };
  protoOf(AbstractEncoder).r2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.h2c(value);
    }
  };
  protoOf(AbstractEncoder).s2c = function (descriptor, index, value) {
    if (this.x2b(descriptor, index)) {
      this.i2c(value);
    }
  };
  protoOf(AbstractEncoder).t2c = function (descriptor, index) {
    return this.x2b(descriptor, index) ? this.j2c(descriptor.s29(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).u2c = function (descriptor, index, serializer, value) {
    if (this.x2b(descriptor, index)) {
      this.v2c(serializer, value);
    }
  };
  protoOf(AbstractEncoder).w2c = function (descriptor, index, serializer, value) {
    if (this.x2b(descriptor, index)) {
      this.x2c(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    this.b2d_1 = -1;
    this.c2d_1 = -3;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    return Companion_instance_0;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.p2b($this.f28(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.s2b($this.f28(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).v28 = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.f28();
    var composite = encoder.f2b(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.s2c(this.f28(), 0, actualSerializer.f28().m29());
    var tmp = this.f28();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.u2c(tmp, 1, tmp$ret$0, value);
    composite.g2b(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).g28 = function (encoder, value) {
    return this.v28(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).h28 = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.f28();
    var composite = decoder.f2b(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.u2b()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.v2b(this.f28());
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.p2b(this.f28(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var value_0 = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (value_0 == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = value_0;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.s2b(this.f28(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var value_1 = value;
        // Inline function 'kotlin.contracts.contract' call
        if (value_1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.g2b(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).w28 = function (decoder, klassName) {
    return decoder.a29().d2d(this.u28(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).x28 = function (encoder, value) {
    return encoder.a29().e2d(this.u28(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.b7();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.b7() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.b7() + "' has to be sealed and '@Serializable'.\n") + ("Alternatively, register the serializer for '" + subClassName + "' explicitly in a corresponding SerializersModule."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.f2d_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).f28 = function () {
    return this.f2d_1;
  };
  protoOf(NothingSerializer_0).g2d = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).g28 = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.g2d(encoder, tmp);
  };
  protoOf(NothingSerializer_0).h28 = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.h2d_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).f28 = function () {
    return this.h2d_1;
  };
  protoOf(DurationSerializer).i2d = function (encoder, value) {
    encoder.i2c(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).g28 = function (encoder, value) {
    return this.i2d(encoder, value instanceof Duration ? value.vg_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).j2d = function (decoder) {
    return Companion_getInstance().ug(decoder.b2b());
  };
  protoOf(DurationSerializer).h28 = function (decoder) {
    return new Duration(this.j2d(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).m29 = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).m29 = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).m29 = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).m29 = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.m2d_1 = elementDescriptor;
    this.n2d_1 = 1;
  }
  protoOf(ListLikeDescriptor).q29 = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).o29 = function () {
    return this.n2d_1;
  };
  protoOf(ListLikeDescriptor).u29 = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).t29 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).v29 = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.m29() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).r29 = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.m29() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).s29 = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.m29() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.m2d_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.m2d_1, other.m2d_1) ? this.m29() === other.m29() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.m2d_1), 31) + getStringHashCode(this.m29()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.m29() + '(' + this.m2d_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.s2d_1 = serialName;
    this.t2d_1 = keyDescriptor;
    this.u2d_1 = valueDescriptor;
    this.v2d_1 = 2;
  }
  protoOf(MapLikeDescriptor).m29 = function () {
    return this.s2d_1;
  };
  protoOf(MapLikeDescriptor).q29 = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).o29 = function () {
    return this.v2d_1;
  };
  protoOf(MapLikeDescriptor).u29 = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).t29 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).v29 = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.m29() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).r29 = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.m29() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).s29 = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.m29() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.t2d_1;
        break;
      case 1:
        tmp = this.u2d_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.m29() === other.m29()))
      return false;
    if (!equals(this.t2d_1, other.t2d_1))
      return false;
    if (!equals(this.u2d_1, other.u2d_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.m29());
    result = imul(31, result) + hashCode(this.t2d_1) | 0;
    result = imul(31, result) + hashCode(this.u2d_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.m29() + '(' + this.t2d_1 + ', ' + this.u2d_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.a2e_1 = primitive.m29() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).m29 = function () {
    return this.a2e_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.c2e_1 = new ArrayListClassDesc(element.f28());
  }
  protoOf(ArrayListSerializer).f28 = function () {
    return this.c2e_1;
  };
  protoOf(ArrayListSerializer).d2e = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).e2e = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(ArrayListSerializer).f2e = function (_this__u8e3s4) {
    return this.e2e(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).g2e = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).h2e = function (_this__u8e3s4) {
    return this.g2e(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).i2e = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).j2e = function (_this__u8e3s4) {
    return this.i2e((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).k2e = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e3(size);
  };
  protoOf(ArrayListSerializer).l2e = function (_this__u8e3s4, size) {
    return this.k2e(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).m2e = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v1(index, element);
  };
  protoOf(ArrayListSerializer).n2e = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.m2e(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.y2e_1 = new HashSetClassDesc(eSerializer.f28());
  }
  protoOf(HashSetSerializer).f28 = function () {
    return this.y2e_1;
  };
  protoOf(HashSetSerializer).d2e = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).z2e = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(HashSetSerializer).f2e = function (_this__u8e3s4) {
    return this.z2e(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).a2f = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).h2e = function (_this__u8e3s4) {
    return this.a2f(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).b2f = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).j2e = function (_this__u8e3s4) {
    return this.b2f((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).c2f = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).l2e = function (_this__u8e3s4, size) {
    return this.c2f(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).d2f = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.r(element);
  };
  protoOf(HashSetSerializer).n2e = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.d2f(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.f2f_1 = new LinkedHashSetClassDesc(eSerializer.f28());
  }
  protoOf(LinkedHashSetSerializer).f28 = function () {
    return this.f2f_1;
  };
  protoOf(LinkedHashSetSerializer).d2e = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).g2f = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(LinkedHashSetSerializer).f2e = function (_this__u8e3s4) {
    return this.g2f(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).h2f = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).h2e = function (_this__u8e3s4) {
    return this.h2f(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).b2f = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).j2e = function (_this__u8e3s4) {
    return this.b2f((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).i2f = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).l2e = function (_this__u8e3s4, size) {
    return this.i2f(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).j2f = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.r(element);
  };
  protoOf(LinkedHashSetSerializer).n2e = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.j2f(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.m2f_1 = new HashMapClassDesc(kSerializer.f28(), vSerializer.f28());
  }
  protoOf(HashMapSerializer).f28 = function () {
    return this.m2f_1;
  };
  protoOf(HashMapSerializer).n2f = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(HashMapSerializer).o2f = function (_this__u8e3s4) {
    return this.n2f((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).p2f = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.m2().u();
  };
  protoOf(HashMapSerializer).q2f = function (_this__u8e3s4) {
    return this.p2f((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).d2e = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).r2f = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.n(), 2);
  };
  protoOf(HashMapSerializer).f2e = function (_this__u8e3s4) {
    return this.r2f(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).s2f = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).h2e = function (_this__u8e3s4) {
    return this.s2f(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).t2f = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).j2e = function (_this__u8e3s4) {
    return this.t2f((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).u2f = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).l2e = function (_this__u8e3s4, size) {
    return this.u2f(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.b2g_1 = new LinkedHashMapClassDesc(kSerializer.f28(), vSerializer.f28());
  }
  protoOf(LinkedHashMapSerializer).f28 = function () {
    return this.b2g_1;
  };
  protoOf(LinkedHashMapSerializer).n2f = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(LinkedHashMapSerializer).o2f = function (_this__u8e3s4) {
    return this.n2f((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).p2f = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.m2().u();
  };
  protoOf(LinkedHashMapSerializer).q2f = function (_this__u8e3s4) {
    return this.p2f((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).d2e = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).c2g = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.n(), 2);
  };
  protoOf(LinkedHashMapSerializer).f2e = function (_this__u8e3s4) {
    return this.c2g(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).d2g = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).h2e = function (_this__u8e3s4) {
    return this.d2g(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).t2f = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).j2e = function (_this__u8e3s4) {
    return this.t2f((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).e2g = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).l2e = function (_this__u8e3s4, size) {
    return this.e2g(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.g2g_1 = kClass;
    this.h2g_1 = new ArrayClassDesc(eSerializer.f28());
  }
  protoOf(ReferenceArraySerializer).f28 = function () {
    return this.h2g_1;
  };
  protoOf(ReferenceArraySerializer).i2g = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).o2f = function (_this__u8e3s4) {
    return this.i2g((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).j2g = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).q2f = function (_this__u8e3s4) {
    return this.j2g((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).d2e = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).k2g = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(ReferenceArraySerializer).f2e = function (_this__u8e3s4) {
    return this.k2g(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).l2g = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.g2g_1);
  };
  protoOf(ReferenceArraySerializer).h2e = function (_this__u8e3s4) {
    return this.l2g(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).m2g = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).j2e = function (_this__u8e3s4) {
    return this.m2g((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).n2g = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e3(size);
  };
  protoOf(ReferenceArraySerializer).l2e = function (_this__u8e3s4, size) {
    return this.n2g(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).o2g = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v1(index, element);
  };
  protoOf(ReferenceArraySerializer).n2e = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.o2g(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).p2e = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  protoOf(CollectionSerializer).o2f = function (_this__u8e3s4) {
    return this.p2e((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).q2e = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(CollectionSerializer).q2f = function (_this__u8e3s4) {
    return this.q2e((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.v2f_1 = keySerializer;
    this.w2f_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).x2f = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.y2f(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).t2e = function (decoder, builder, startIndex, size) {
    return this.x2f(decoder, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).y2f = function (decoder, index, builder, checkIndex) {
    var key = decoder.s2b(this.f28(), index, this.v2f_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.v2b(this.f28());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.u2(key)) {
      var tmp_2 = this.w2f_1.f28().q29();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.r2b(this.f28(), vIndex, this.w2f_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.s2b(this.f28(), vIndex, this.w2f_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.n2(key, value);
  };
  protoOf(MapLikeSerializer).u2e = function (decoder, index, builder, checkIndex) {
    return this.y2f(decoder, index, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).s2e = function (encoder, value) {
    var size = this.o2f(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.f28();
    var composite = encoder.z2c(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.q2f(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.q2();
      var tmp = this.f28();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.u2c(tmp, tmp0, this.v2f_1, k);
      var tmp_0 = this.f28();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.u2c(tmp_0, tmp1, this.w2f_1, v);
    }
    composite.g2b(descriptor);
  };
  protoOf(MapLikeSerializer).g28 = function (encoder, value) {
    return this.s2e(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.r2e_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).s2e = function (encoder, value) {
    var size = this.o2f(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.f28();
    var composite = encoder.z2c(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.q2f(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.u2c(this.f28(), index, this.r2e_1, iterator.x());
      }
       while (inductionVariable < size);
    composite.g2b(descriptor);
  };
  protoOf(CollectionLikeSerializer).g28 = function (encoder, value) {
    return this.s2e(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).t2e = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.u2e(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).u2e = function (decoder, index, builder, checkIndex) {
    this.n2e(builder, index, decoder.s2b(this.f28(), index, this.r2e_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.w2b($this.f28());
    $this.l2e(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).w2e = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.j2e(previous);
    var builder = tmp1_elvis_lhs == null ? this.d2e() : tmp1_elvis_lhs;
    var startIndex = this.f2e(builder);
    var compositeDecoder = decoder.f2b(this.f28());
    if (compositeDecoder.u2b()) {
      this.t2e(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.v2b(this.f28());
        if (index === -1)
          break $l$loop;
        this.v2e(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.g2b(this.f28());
    return this.h2e(builder);
  };
  protoOf(AbstractCollectionSerializer).h28 = function (decoder) {
    return this.w2e(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).v2e = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.u2e(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.u2e.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.q2g_1 = new PrimitiveArrayDescriptor(primitiveSerializer.f28());
  }
  protoOf(PrimitiveArraySerializer).f28 = function () {
    return this.q2g_1;
  };
  protoOf(PrimitiveArraySerializer).r2g = function (_this__u8e3s4) {
    return _this__u8e3s4.s2g();
  };
  protoOf(PrimitiveArraySerializer).f2e = function (_this__u8e3s4) {
    return this.r2g(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).t2g = function (_this__u8e3s4) {
    return _this__u8e3s4.w1c();
  };
  protoOf(PrimitiveArraySerializer).h2e = function (_this__u8e3s4) {
    return this.t2g(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).u2g = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e3(size);
  };
  protoOf(PrimitiveArraySerializer).l2e = function (_this__u8e3s4, size) {
    return this.u2g(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).v2g = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).q2f = function (_this__u8e3s4) {
    return this.v2g((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).w2g = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).n2e = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.w2g(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).d2e = function () {
    return this.j2e(this.x2g());
  };
  protoOf(PrimitiveArraySerializer).a2h = function (encoder, value) {
    var size = this.o2f(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.q2g_1;
    var composite = encoder.z2c(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.z2g(composite, value, size);
    composite.g2b(descriptor);
  };
  protoOf(PrimitiveArraySerializer).g28 = function (encoder, value) {
    return this.a2h(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).s2e = function (encoder, value) {
    return this.a2h(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).h28 = function (decoder) {
    return this.w2e(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).b2h = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.s2g() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.e3(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.e3.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.c2h_1 = longArray(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).ab(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.g2h_1[slot] = $this.g2h_1[slot].eb((new Long(1, 0)).ab(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.g2h_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.g2h_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.za());
          slotMarks = slotMarks.eb((new Long(1, 0)).ab(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.e2h_1($this.d2h_1, index)) {
            $this.g2h_1[slot] = slotMarks;
            return index;
          }
        }
        $this.g2h_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.d2h_1 = descriptor;
    this.e2h_1 = readIfAbsent;
    var elementsCount = this.d2h_1.o29();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).ab(elementsCount);
      }
      tmp.f2h_1 = tmp_0;
      this.g2h_1 = Companion_getInstance_7().c2h_1;
    } else {
      this.f2h_1 = new Long(0, 0);
      this.g2h_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).h2h = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.f2h_1 = this.f2h_1.eb((new Long(1, 0)).ab(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).i2h = function () {
    var elementsCount = this.d2h_1.o29();
    while (!this.f2h_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.f2h_1.za());
      this.f2h_1 = this.f2h_1.eb((new Long(1, 0)).ab(index));
      if (this.e2h_1(this.d2h_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.v2h_1 = true;
  }
  protoOf(InlineClassDescriptor).p29 = function () {
    return this.v2h_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m29() === other.m29())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.v2h_1 ? contentEquals(this.i2i(), other.i2i()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.o29() === other.o29())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.o29();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s29(index).m29() === other.s29(index).m29())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s29(index).q29(), other.s29(index).q29())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.k2i_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).l2i = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.k2i_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).f28 = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).g28 = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).h28 = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.n2i_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).a29 = function () {
    return this.n2i_1;
  };
  protoOf(NoOpEncoder).y2b = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).z2b = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).a2c = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).b2c = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).c2c = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).d2c = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).e2c = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).f2c = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).g2c = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).h2c = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).i2c = function (value) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.o2i_1 = OBJECT_getInstance();
    this.p2i_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).q29 = function () {
    return this.o2i_1;
  };
  protoOf(NothingSerialDescriptor).m29 = function () {
    return this.p2i_1;
  };
  protoOf(NothingSerialDescriptor).o29 = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).u29 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).t29 = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).v29 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).s29 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).r29 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.p2i_1) + imul(31, this.o2i_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.q2i_1 = serializer;
    this.r2i_1 = new SerialDescriptorForNullable(this.q2i_1.f28());
  }
  protoOf(NullableSerializer).f28 = function () {
    return this.r2i_1;
  };
  protoOf(NullableSerializer).s2i = function (encoder, value) {
    if (!(value == null)) {
      encoder.y2c();
      encoder.v2c(this.q2i_1, value);
    } else {
      encoder.z2b();
    }
  };
  protoOf(NullableSerializer).g28 = function (encoder, value) {
    return this.s2i(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).h28 = function (decoder) {
    return decoder.r2a() ? decoder.e2b(this.q2i_1) : decoder.s2a();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.q2i_1, other.q2i_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.q2i_1);
  };
  function SerialDescriptorForNullable(original) {
    this.w29_1 = original;
    this.x29_1 = this.w29_1.m29() + '?';
    this.y29_1 = cachedSerialNames(this.w29_1);
  }
  protoOf(SerialDescriptorForNullable).n29 = function () {
    return this.w29_1.n29();
  };
  protoOf(SerialDescriptorForNullable).o29 = function () {
    return this.w29_1.o29();
  };
  protoOf(SerialDescriptorForNullable).p29 = function () {
    return this.w29_1.p29();
  };
  protoOf(SerialDescriptorForNullable).q29 = function () {
    return this.w29_1.q29();
  };
  protoOf(SerialDescriptorForNullable).r29 = function (index) {
    return this.w29_1.r29(index);
  };
  protoOf(SerialDescriptorForNullable).s29 = function (index) {
    return this.w29_1.s29(index);
  };
  protoOf(SerialDescriptorForNullable).t29 = function (name) {
    return this.w29_1.t29(name);
  };
  protoOf(SerialDescriptorForNullable).u29 = function (index) {
    return this.w29_1.u29(index);
  };
  protoOf(SerialDescriptorForNullable).v29 = function (index) {
    return this.w29_1.v29(index);
  };
  protoOf(SerialDescriptorForNullable).m29 = function () {
    return this.x29_1;
  };
  protoOf(SerialDescriptorForNullable).p2a = function () {
    return this.y29_1;
  };
  protoOf(SerialDescriptorForNullable).i29 = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.w29_1, other.w29_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.w29_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.w29_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.k28_1 = this$0.u2i_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.t2i_1 = objectInstance;
    this.u2i_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v2i_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).f28 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.v2i_1;
    descriptor$factory_0();
    return this_0.q2();
  };
  protoOf(ObjectSerializer).v28 = function (encoder, value) {
    encoder.f2b(this.f28()).g2b(this.f28());
  };
  protoOf(ObjectSerializer).g28 = function (encoder, value) {
    return this.v28(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).h28 = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.f28();
    var composite = decoder.f2b(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.u2b()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.v2b(this.f28());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.g2b(descriptor);
    return this.t2i_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.f28();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.p2a();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.o29());
    var inductionVariable = 0;
    var last = _this__u8e3s4.o29();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.u29(i);
        result.r(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.p7();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var message = 'Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        var message_0 = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.b7();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.c1())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.u29(i);
          missingFields.r(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.m29());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.f2i_1;
    childSerializers$factory();
    return this_0.q2();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.h2i_1;
    _hashCode$factory_0();
    return this_0.q2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.a2i_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.a2i_1[i];
        indices.n2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.x2h_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2i();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.x2h_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2i();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.f28();
          destination.r(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.i2i());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.u29(i) + ': ' + this$0.s29(i).m29();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.w2h_1 = serialName;
    this.x2h_1 = generatedSerializer;
    this.y2h_1 = elementsCount;
    this.z2h_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.y2h_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.a2i_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.y2h_1;
    tmp_3.b2i_1 = fillArrayVal(Array(size), null);
    this.c2i_1 = null;
    this.d2i_1 = booleanArray(this.y2h_1);
    this.e2i_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.f2i_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.g2i_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.h2i_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).m29 = function () {
    return this.w2h_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).o29 = function () {
    return this.y2h_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).q29 = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).n29 = function () {
    var tmp0_elvis_lhs = this.c2i_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).p2a = function () {
    return this.e2i_1.k2();
  };
  protoOf(PluginGeneratedSerialDescriptor).i2i = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.g2i_1;
    typeParameterDescriptors$factory();
    return this_0.q2();
  };
  protoOf(PluginGeneratedSerialDescriptor).j2i = function (name, isOptional) {
    this.z2h_1 = this.z2h_1 + 1 | 0;
    this.a2i_1[this.z2h_1] = name;
    this.d2i_1[this.z2h_1] = isOptional;
    this.b2i_1[this.z2h_1] = null;
    if (this.z2h_1 === (this.y2h_1 - 1 | 0)) {
      this.e2i_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).s29 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).f28();
  };
  protoOf(PluginGeneratedSerialDescriptor).v29 = function (index) {
    return getChecked_0(this.d2i_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).r29 = function (index) {
    var tmp0_elvis_lhs = getChecked(this.b2i_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).u29 = function (index) {
    return getChecked(this.a2i_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).t29 = function (name) {
    var tmp0_elvis_lhs = this.e2i_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m29() === other.m29())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.i2i(), other.i2i())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.o29() === other.o29())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.o29();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s29(index).m29() === other.s29(index).m29())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s29(index).q29(), other.s29(index).q29())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.y2h_1);
    var tmp_0 = this.m29() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.m29());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.m29();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.u();
    while (tmp0_iterator_0.v()) {
      var element_0 = tmp0_iterator_0.x();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.q29();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.i2i();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).z2i = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.z2i((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).a2j = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.a2j((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).x2g = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).b2j = function (decoder, index, builder, checkIndex) {
    builder.e2j(decoder.o2b(this.q2g_1, index));
  };
  protoOf(CharArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.b2j(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.b2j(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).f2j = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.r2c(this.q2g_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).z2g = function (encoder, content, size) {
    return this.f2j(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).i2j = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.i2j((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).j2j = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.j2j((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).x2g = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).k2j = function (decoder, index, builder, checkIndex) {
    builder.n2j(decoder.n2b(this.q2g_1, index));
  };
  protoOf(DoubleArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.k2j(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.k2j(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).o2j = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q2c(this.q2g_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).z2g = function (encoder, content, size) {
    return this.o2j(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).r2j = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.r2j((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).s2j = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.s2j((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).x2g = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).t2j = function (decoder, index, builder, checkIndex) {
    builder.w2j(decoder.m2b(this.q2g_1, index));
  };
  protoOf(FloatArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.t2j(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.t2j(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).x2j = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p2c(this.q2g_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).z2g = function (encoder, content, size) {
    return this.x2j(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).a2k = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.a2k((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).b2k = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.b2k((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).x2g = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).c2k = function (decoder, index, builder, checkIndex) {
    builder.f2k(decoder.l2b(this.q2g_1, index));
  };
  protoOf(LongArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.c2k(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.c2k(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).g2k = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o2c(this.q2g_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).z2g = function (encoder, content, size) {
    return this.g2k(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).j2k = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.j2k(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ui_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).k2k = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.k2k(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ui_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).l2k = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).x2g = function () {
    return new ULongArray(this.l2k());
  };
  protoOf(ULongArraySerializer_0).m2k = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.q2b(this.q2g_1, index).x2a();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.p2k(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.m2k(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.m2k(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).q2k = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2c(this.q2g_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.e2c(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).z2g = function (encoder, content, size) {
    return this.q2k(encoder, content instanceof ULongArray ? content.ui_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).t2k = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.t2k((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).u2k = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.u2k((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).x2g = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).v2k = function (decoder, index, builder, checkIndex) {
    builder.y2k(decoder.k2b(this.q2g_1, index));
  };
  protoOf(IntArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.v2k(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.v2k(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).z2k = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.n2c(this.q2g_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).z2g = function (encoder, content, size) {
    return this.z2k(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).c2l = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.c2l(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.ii_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).d2l = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.d2l(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.ii_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).e2l = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).x2g = function () {
    return new UIntArray(this.e2l());
  };
  protoOf(UIntArraySerializer_0).f2l = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.q2b(this.q2g_1, index).w2a();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.i2l(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.f2l(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.f2l(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).j2l = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2c(this.q2g_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.d2c(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).z2g = function (encoder, content, size) {
    return this.j2l(encoder, content instanceof UIntArray ? content.ii_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).m2l = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.m2l((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).n2l = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.n2l((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).x2g = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).o2l = function (decoder, index, builder, checkIndex) {
    builder.r2l(decoder.j2b(this.q2g_1, index));
  };
  protoOf(ShortArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.o2l(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.o2l(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).s2l = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.m2c(this.q2g_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).z2g = function (encoder, content, size) {
    return this.s2l(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).v2l = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.v2l(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.gj_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).w2l = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.w2l(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.gj_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).x2l = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).x2g = function () {
    return new UShortArray(this.x2l());
  };
  protoOf(UShortArraySerializer_0).y2l = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.q2b(this.q2g_1, index).v2a();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.b2m(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.y2l(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.y2l(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).c2m = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2c(this.q2g_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.c2c(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).z2g = function (encoder, content, size) {
    return this.c2m(encoder, content instanceof UShortArray ? content.gj_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).f2m = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.f2m((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).g2m = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.g2m((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).x2g = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).h2m = function (decoder, index, builder, checkIndex) {
    builder.k2m(decoder.i2b(this.q2g_1, index));
  };
  protoOf(ByteArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.h2m(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.h2m(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).l2m = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.l2c(this.q2g_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).z2g = function (encoder, content, size) {
    return this.l2m(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).o2m = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.o2m(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.wh_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p2m = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.p2m(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.wh_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).q2m = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).x2g = function () {
    return new UByteArray(this.q2m());
  };
  protoOf(UByteArraySerializer_0).r2m = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.q2b(this.q2g_1, index).u2a();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.u2m(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.r2m(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.r2m(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).v2m = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2c(this.q2g_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.b2c(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).z2g = function (encoder, content, size) {
    return this.v2m(encoder, content instanceof UByteArray ? content.wh_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).y2m = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).o2f = function (_this__u8e3s4) {
    return this.y2m((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).z2m = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).j2e = function (_this__u8e3s4) {
    return this.z2m((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).x2g = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).a2n = function (decoder, index, builder, checkIndex) {
    builder.d2n(decoder.h2b(this.q2g_1, index));
  };
  protoOf(BooleanArraySerializer_0).u2e = function (decoder, index, builder, checkIndex) {
    return this.a2n(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).y2g = function (decoder, index, builder, checkIndex) {
    return this.a2n(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).e2n = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.k2c(this.q2g_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).z2g = function (encoder, content, size) {
    return this.e2n(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c2j_1 = bufferWithData;
    this.d2j_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(CharArrayBuilder).s2g = function () {
    return this.d2j_1;
  };
  protoOf(CharArrayBuilder).e3 = function (requiredCapacity) {
    if (this.c2j_1.length < requiredCapacity)
      this.c2j_1 = copyOf(this.c2j_1, coerceAtLeast(requiredCapacity, imul(this.c2j_1.length, 2)));
  };
  protoOf(CharArrayBuilder).e2j = function (c) {
    this.b2h();
    var tmp = this.c2j_1;
    var tmp1 = this.d2j_1;
    this.d2j_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).w1c = function () {
    return copyOf(this.c2j_1, this.d2j_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l2j_1 = bufferWithData;
    this.m2j_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(DoubleArrayBuilder).s2g = function () {
    return this.m2j_1;
  };
  protoOf(DoubleArrayBuilder).e3 = function (requiredCapacity) {
    if (this.l2j_1.length < requiredCapacity)
      this.l2j_1 = copyOf_0(this.l2j_1, coerceAtLeast(requiredCapacity, imul(this.l2j_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).n2j = function (c) {
    this.b2h();
    var tmp = this.l2j_1;
    var tmp1 = this.m2j_1;
    this.m2j_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).w1c = function () {
    return copyOf_0(this.l2j_1, this.m2j_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u2j_1 = bufferWithData;
    this.v2j_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(FloatArrayBuilder).s2g = function () {
    return this.v2j_1;
  };
  protoOf(FloatArrayBuilder).e3 = function (requiredCapacity) {
    if (this.u2j_1.length < requiredCapacity)
      this.u2j_1 = copyOf_1(this.u2j_1, coerceAtLeast(requiredCapacity, imul(this.u2j_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).w2j = function (c) {
    this.b2h();
    var tmp = this.u2j_1;
    var tmp1 = this.v2j_1;
    this.v2j_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).w1c = function () {
    return copyOf_1(this.u2j_1, this.v2j_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d2k_1 = bufferWithData;
    this.e2k_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(LongArrayBuilder).s2g = function () {
    return this.e2k_1;
  };
  protoOf(LongArrayBuilder).e3 = function (requiredCapacity) {
    if (this.d2k_1.length < requiredCapacity)
      this.d2k_1 = copyOf_2(this.d2k_1, coerceAtLeast(requiredCapacity, imul(this.d2k_1.length, 2)));
  };
  protoOf(LongArrayBuilder).f2k = function (c) {
    this.b2h();
    var tmp = this.d2k_1;
    var tmp1 = this.e2k_1;
    this.e2k_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).w1c = function () {
    return copyOf_2(this.d2k_1, this.e2k_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n2k_1 = bufferWithData;
    this.o2k_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.e3(10);
  }
  protoOf(ULongArrayBuilder).s2g = function () {
    return this.o2k_1;
  };
  protoOf(ULongArrayBuilder).e3 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.n2k_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.n2k_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.n2k_1), 2));
      tmp.n2k_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).p2k = function (c) {
    this.b2h();
    var tmp = this.n2k_1;
    var tmp1 = this.o2k_1;
    this.o2k_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).f2n = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.n2k_1;
    var newSize = this.o2k_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).w1c = function () {
    return new ULongArray(this.f2n());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w2k_1 = bufferWithData;
    this.x2k_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(IntArrayBuilder).s2g = function () {
    return this.x2k_1;
  };
  protoOf(IntArrayBuilder).e3 = function (requiredCapacity) {
    if (this.w2k_1.length < requiredCapacity)
      this.w2k_1 = copyOf_3(this.w2k_1, coerceAtLeast(requiredCapacity, imul(this.w2k_1.length, 2)));
  };
  protoOf(IntArrayBuilder).y2k = function (c) {
    this.b2h();
    var tmp = this.w2k_1;
    var tmp1 = this.x2k_1;
    this.x2k_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).w1c = function () {
    return copyOf_3(this.w2k_1, this.x2k_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g2l_1 = bufferWithData;
    this.h2l_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.e3(10);
  }
  protoOf(UIntArrayBuilder).s2g = function () {
    return this.h2l_1;
  };
  protoOf(UIntArrayBuilder).e3 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.g2l_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.g2l_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.g2l_1), 2));
      tmp.g2l_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).i2l = function (c) {
    this.b2h();
    var tmp = this.g2l_1;
    var tmp1 = this.h2l_1;
    this.h2l_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).g2n = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.g2l_1;
    var newSize = this.h2l_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).w1c = function () {
    return new UIntArray(this.g2n());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p2l_1 = bufferWithData;
    this.q2l_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(ShortArrayBuilder).s2g = function () {
    return this.q2l_1;
  };
  protoOf(ShortArrayBuilder).e3 = function (requiredCapacity) {
    if (this.p2l_1.length < requiredCapacity)
      this.p2l_1 = copyOf_4(this.p2l_1, coerceAtLeast(requiredCapacity, imul(this.p2l_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).r2l = function (c) {
    this.b2h();
    var tmp = this.p2l_1;
    var tmp1 = this.q2l_1;
    this.q2l_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).w1c = function () {
    return copyOf_4(this.p2l_1, this.q2l_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z2l_1 = bufferWithData;
    this.a2m_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.e3(10);
  }
  protoOf(UShortArrayBuilder).s2g = function () {
    return this.a2m_1;
  };
  protoOf(UShortArrayBuilder).e3 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.z2l_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.z2l_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.z2l_1), 2));
      tmp.z2l_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).b2m = function (c) {
    this.b2h();
    var tmp = this.z2l_1;
    var tmp1 = this.a2m_1;
    this.a2m_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).h2n = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.z2l_1;
    var newSize = this.a2m_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).w1c = function () {
    return new UShortArray(this.h2n());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i2m_1 = bufferWithData;
    this.j2m_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(ByteArrayBuilder).s2g = function () {
    return this.j2m_1;
  };
  protoOf(ByteArrayBuilder).e3 = function (requiredCapacity) {
    if (this.i2m_1.length < requiredCapacity)
      this.i2m_1 = copyOf_5(this.i2m_1, coerceAtLeast(requiredCapacity, imul(this.i2m_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).k2m = function (c) {
    this.b2h();
    var tmp = this.i2m_1;
    var tmp1 = this.j2m_1;
    this.j2m_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).w1c = function () {
    return copyOf_5(this.i2m_1, this.j2m_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s2m_1 = bufferWithData;
    this.t2m_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.e3(10);
  }
  protoOf(UByteArrayBuilder).s2g = function () {
    return this.t2m_1;
  };
  protoOf(UByteArrayBuilder).e3 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.s2m_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.s2m_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.s2m_1), 2));
      tmp.s2m_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).u2m = function (c) {
    this.b2h();
    var tmp = this.s2m_1;
    var tmp1 = this.t2m_1;
    this.t2m_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).i2n = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.s2m_1;
    var newSize = this.t2m_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).w1c = function () {
    return new UByteArray(this.i2n());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b2n_1 = bufferWithData;
    this.c2n_1 = bufferWithData.length;
    this.e3(10);
  }
  protoOf(BooleanArrayBuilder).s2g = function () {
    return this.c2n_1;
  };
  protoOf(BooleanArrayBuilder).e3 = function (requiredCapacity) {
    if (this.b2n_1.length < requiredCapacity)
      this.b2n_1 = copyOf_6(this.b2n_1, coerceAtLeast(requiredCapacity, imul(this.b2n_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).d2n = function (c) {
    this.b2h();
    var tmp = this.b2n_1;
    var tmp1 = this.c2n_1;
    this.c2n_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).w1c = function () {
    return copyOf_6(this.b2n_1, this.c2n_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().x2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.j2n_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).f28 = function () {
    return this.j2n_1;
  };
  protoOf(StringSerializer).k2n = function (encoder, value) {
    return encoder.i2c(value);
  };
  protoOf(StringSerializer).g28 = function (encoder, value) {
    return this.k2n(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).h28 = function (decoder) {
    return decoder.b2b();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.l2n_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).f28 = function () {
    return this.l2n_1;
  };
  protoOf(CharSerializer).m2n = function (encoder, value) {
    return encoder.h2c(value);
  };
  protoOf(CharSerializer).g28 = function (encoder, value) {
    return this.m2n(encoder, value instanceof Char ? value.y9_1 : THROW_CCE());
  };
  protoOf(CharSerializer).n2n = function (decoder) {
    return decoder.a2b();
  };
  protoOf(CharSerializer).h28 = function (decoder) {
    return new Char(this.n2n(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.o2n_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).f28 = function () {
    return this.o2n_1;
  };
  protoOf(DoubleSerializer).p2n = function (encoder, value) {
    return encoder.g2c(value);
  };
  protoOf(DoubleSerializer).g28 = function (encoder, value) {
    return this.p2n(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).h28 = function (decoder) {
    return decoder.z2a();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.q2n_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).f28 = function () {
    return this.q2n_1;
  };
  protoOf(FloatSerializer).r2n = function (encoder, value) {
    return encoder.f2c(value);
  };
  protoOf(FloatSerializer).g28 = function (encoder, value) {
    return this.r2n(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).h28 = function (decoder) {
    return decoder.y2a();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.s2n_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).f28 = function () {
    return this.s2n_1;
  };
  protoOf(LongSerializer).t2n = function (encoder, value) {
    return encoder.e2c(value);
  };
  protoOf(LongSerializer).g28 = function (encoder, value) {
    return this.t2n(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).h28 = function (decoder) {
    return decoder.x2a();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.u2n_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).f28 = function () {
    return this.u2n_1;
  };
  protoOf(IntSerializer).v2n = function (encoder, value) {
    return encoder.d2c(value);
  };
  protoOf(IntSerializer).g28 = function (encoder, value) {
    return this.v2n(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).h28 = function (decoder) {
    return decoder.w2a();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.w2n_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).f28 = function () {
    return this.w2n_1;
  };
  protoOf(ShortSerializer).x2n = function (encoder, value) {
    return encoder.c2c(value);
  };
  protoOf(ShortSerializer).g28 = function (encoder, value) {
    return this.x2n(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).h28 = function (decoder) {
    return decoder.v2a();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.y2n_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).f28 = function () {
    return this.y2n_1;
  };
  protoOf(ByteSerializer).z2n = function (encoder, value) {
    return encoder.b2c(value);
  };
  protoOf(ByteSerializer).g28 = function (encoder, value) {
    return this.z2n(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).h28 = function (decoder) {
    return decoder.u2a();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.a2o_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).f28 = function () {
    return this.a2o_1;
  };
  protoOf(BooleanSerializer).b2o = function (encoder, value) {
    return encoder.a2c(value);
  };
  protoOf(BooleanSerializer).g28 = function (encoder, value) {
    return this.b2o(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).h28 = function (decoder) {
    return decoder.t2a();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.c2o_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).f28 = function () {
    return this.c2o_1.f28();
  };
  protoOf(UnitSerializer).d2o = function (decoder) {
    this.c2o_1.h28(decoder);
  };
  protoOf(UnitSerializer).h28 = function (decoder) {
    this.d2o(decoder);
    return Unit_instance;
  };
  protoOf(UnitSerializer).e2o = function (encoder, value) {
    this.c2o_1.v28(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).g28 = function (encoder, value) {
    return this.e2o(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.f2o_1 = serialName;
    this.g2o_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).m29 = function () {
    return this.f2o_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).q29 = function () {
    return this.g2o_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).o29 = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).u29 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).t29 = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).v29 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).s29 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).r29 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.f2o_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.f2o_1 === other.f2o_1 ? equals(this.g2o_1, other.g2o_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.f2o_1) + imul(31, this.g2o_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().k2();
    var tmp0_iterator = keys.u();
    while (tmp0_iterator.v()) {
      var primitive = tmp0_iterator.x();
      var simpleName = capitalize(ensureNotNull(primitive.b7()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().c8(), serializer_1(StringCompanionObject_instance)), to(getKClass(Char), serializer_2(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().f8(), CharArraySerializer()), to(PrimitiveClasses_getInstance().a8(), serializer_3(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().l8(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().z7(), serializer_4(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().k8(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().j8(), LongArraySerializer()), to(getKClass(ULong), serializer_6(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().y7(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().i8(), IntArraySerializer()), to(getKClass(UInt), serializer_8(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().x7(), serializer_9(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().h8(), ShortArraySerializer()), to(getKClass(UShort), serializer_10(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().w7(), serializer_11(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().g8(), ByteArraySerializer()), to(getKClass(UByte), serializer_12(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().v7(), serializer_13(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().e8(), BooleanArraySerializer()), to(getKClass(Unit), serializer_14(Unit_instance)), to(PrimitiveClasses_getInstance().u7(), NothingSerializer()), to(getKClass(Duration), serializer_15(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).j2o = function (_this__u8e3s4, index) {
    return this.l2o(this.k2o(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).l2o = function (nestedName) {
    var tmp0_elvis_lhs = this.o2o();
    return this.p2o(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).k2o = function (descriptor, index) {
    return descriptor.u29(index);
  };
  protoOf(NamedValueDecoder).p2o = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.c2p(tag);
    var r = block();
    if (!$this.n2o_1) {
      $this.d2p();
    }
    $this.n2o_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.d2b($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.r2a() ? this$0.d2b($deserializer, $previousValue) : this$0.s2a();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.m2o_1 = ArrayList_init_$Create$_0();
    this.n2o_1 = false;
  }
  protoOf(TaggedDecoder).a29 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).q2o = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).r2o = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).s2o = function (tag) {
    var tmp = this.q2o(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t2o = function (tag) {
    var tmp = this.q2o(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u2o = function (tag) {
    var tmp = this.q2o(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v2o = function (tag) {
    var tmp = this.q2o(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w2o = function (tag) {
    var tmp = this.q2o(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x2o = function (tag) {
    var tmp = this.q2o(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y2o = function (tag) {
    var tmp = this.q2o(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z2o = function (tag) {
    var tmp = this.q2o(tag);
    return tmp instanceof Char ? tmp.y9_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).a2p = function (tag) {
    var tmp = this.q2o(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b2p = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.c2p(tag);
    return this;
  };
  protoOf(TaggedDecoder).d2b = function (deserializer, previousValue) {
    return this.e2b(deserializer);
  };
  protoOf(TaggedDecoder).c2b = function (descriptor) {
    return this.b2p(this.d2p(), descriptor);
  };
  protoOf(TaggedDecoder).r2a = function () {
    var tmp0_elvis_lhs = this.o2o();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.r2o(currentTag);
  };
  protoOf(TaggedDecoder).s2a = function () {
    return null;
  };
  protoOf(TaggedDecoder).t2a = function () {
    return this.s2o(this.d2p());
  };
  protoOf(TaggedDecoder).u2a = function () {
    return this.t2o(this.d2p());
  };
  protoOf(TaggedDecoder).v2a = function () {
    return this.u2o(this.d2p());
  };
  protoOf(TaggedDecoder).w2a = function () {
    return this.v2o(this.d2p());
  };
  protoOf(TaggedDecoder).x2a = function () {
    return this.w2o(this.d2p());
  };
  protoOf(TaggedDecoder).y2a = function () {
    return this.x2o(this.d2p());
  };
  protoOf(TaggedDecoder).z2a = function () {
    return this.y2o(this.d2p());
  };
  protoOf(TaggedDecoder).a2b = function () {
    return this.z2o(this.d2p());
  };
  protoOf(TaggedDecoder).b2b = function () {
    return this.a2p(this.d2p());
  };
  protoOf(TaggedDecoder).f2b = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).g2b = function (descriptor) {
  };
  protoOf(TaggedDecoder).h2b = function (descriptor, index) {
    return this.s2o(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).i2b = function (descriptor, index) {
    return this.t2o(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).j2b = function (descriptor, index) {
    return this.u2o(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).k2b = function (descriptor, index) {
    return this.v2o(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).l2b = function (descriptor, index) {
    return this.w2o(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).m2b = function (descriptor, index) {
    return this.x2o(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).n2b = function (descriptor, index) {
    return this.y2o(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).o2b = function (descriptor, index) {
    return this.z2o(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).p2b = function (descriptor, index) {
    return this.a2p(this.j2o(descriptor, index));
  };
  protoOf(TaggedDecoder).q2b = function (descriptor, index) {
    return this.b2p(this.j2o(descriptor, index), descriptor.s29(index));
  };
  protoOf(TaggedDecoder).r2b = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.j2o(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).t2b = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.j2o(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).o2o = function () {
    return lastOrNull(this.m2o_1);
  };
  protoOf(TaggedDecoder).c2p = function (name) {
    this.m2o_1.r(name);
  };
  protoOf(TaggedDecoder).d2p = function () {
    var r = this.m2o_1.i1(get_lastIndex_0(this.m2o_1));
    this.n2o_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.e2p_1 = key;
    this.f2p_1 = value;
  }
  protoOf(MapEntry).p2 = function () {
    return this.e2p_1;
  };
  protoOf(MapEntry).q2 = function () {
    return this.f2p_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.e2p_1 + ', value=' + this.f2p_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.e2p_1 == null ? 0 : hashCode(this.e2p_1);
    result = imul(result, 31) + (this.f2p_1 == null ? 0 : hashCode(this.f2p_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.e2p_1, tmp0_other_with_cast.e2p_1))
      return false;
    if (!equals(this.f2p_1, tmp0_other_with_cast.f2p_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.q28('key', $keySerializer.f28());
      $this$buildSerialDescriptor.q28('value', $valueSerializer.f28());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.i2p_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).f28 = function () {
    return this.i2p_1;
  };
  protoOf(MapEntrySerializer_0).j2p = function (_this__u8e3s4) {
    return _this__u8e3s4.p2();
  };
  protoOf(MapEntrySerializer_0).k2p = function (_this__u8e3s4) {
    return this.j2p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).l2p = function (_this__u8e3s4) {
    return _this__u8e3s4.q2();
  };
  protoOf(MapEntrySerializer_0).m2p = function (_this__u8e3s4) {
    return this.l2p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).n2p = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.q28('first', $keySerializer.f28());
      $this$buildClassSerialDescriptor.q28('second', $valueSerializer.f28());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.t2p_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).f28 = function () {
    return this.t2p_1;
  };
  protoOf(PairSerializer_0).u2p = function (_this__u8e3s4) {
    return _this__u8e3s4.be_1;
  };
  protoOf(PairSerializer_0).k2p = function (_this__u8e3s4) {
    return this.u2p(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).v2p = function (_this__u8e3s4) {
    return _this__u8e3s4.ce_1;
  };
  protoOf(PairSerializer_0).m2p = function (_this__u8e3s4) {
    return this.v2p(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).n2p = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.s2b($this.z2p_1, 0, $this.w2p_1);
    var b = composite.s2b($this.z2p_1, 1, $this.x2p_1);
    var c = composite.s2b($this.z2p_1, 2, $this.y2p_1);
    composite.g2b($this.z2p_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.v2b($this.z2p_1);
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.s2b($this.z2p_1, 0, $this.w2p_1);
        } else {
          if (index === 1) {
            b = composite.s2b($this.z2p_1, 1, $this.x2p_1);
          } else {
            if (index === 2) {
              c = composite.s2b($this.z2p_1, 2, $this.y2p_1);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.g2b($this.z2p_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.q28('first', this$0.w2p_1.f28());
      $this$buildClassSerialDescriptor.q28('second', this$0.x2p_1.f28());
      $this$buildClassSerialDescriptor.q28('third', this$0.y2p_1.f28());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.w2p_1 = aSerializer;
    this.x2p_1 = bSerializer;
    this.y2p_1 = cSerializer;
    var tmp = this;
    tmp.z2p_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).f28 = function () {
    return this.z2p_1;
  };
  protoOf(TripleSerializer_0).a2q = function (encoder, value) {
    var structuredEncoder = encoder.f2b(this.z2p_1);
    structuredEncoder.u2c(this.z2p_1, 0, this.w2p_1, value.kh_1);
    structuredEncoder.u2c(this.z2p_1, 1, this.x2p_1, value.lh_1);
    structuredEncoder.u2c(this.z2p_1, 2, this.y2p_1, value.mh_1);
    structuredEncoder.g2b(this.z2p_1);
  };
  protoOf(TripleSerializer_0).g28 = function (encoder, value) {
    return this.a2q(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).h28 = function (decoder) {
    var composite = decoder.f2b(this.z2p_1);
    if (composite.u2b()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.o2p_1 = keySerializer;
    this.p2p_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).q2p = function (encoder, value) {
    var structuredEncoder = encoder.f2b(this.f28());
    structuredEncoder.u2c(this.f28(), 0, this.o2p_1, this.k2p(value));
    structuredEncoder.u2c(this.f28(), 1, this.p2p_1, this.m2p(value));
    structuredEncoder.g2b(this.f28());
  };
  protoOf(KeyValueSerializer).g28 = function (encoder, value) {
    return this.q2p(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).h28 = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.f28();
    var composite = decoder.f2b(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.u2b()) {
        var key = composite.s2b(this.f28(), 0, this.o2p_1);
        var value = composite.s2b(this.f28(), 1, this.p2p_1);
        tmp$ret$0 = this.n2p(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.v2b(this.f28());
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.s2b(this.f28(), 0, this.o2p_1);
          } else {
            if (idx === 1) {
              value_0 = composite.s2b(this.f28(), 1, this.p2p_1);
            } else {
              throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
            }
          }
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.n2p(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.g2b(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.b2q_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).f28 = function () {
    return this.b2q_1;
  };
  protoOf(ULongSerializer).c2q = function (encoder, value) {
    var tmp = encoder.j2c(this.b2q_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.e2c(tmp$ret$0);
  };
  protoOf(ULongSerializer).g28 = function (encoder, value) {
    return this.c2q(encoder, value instanceof ULong ? value.pi_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).d2q = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.c2b(this.b2q_1).x2a();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).h28 = function (decoder) {
    return new ULong(this.d2q(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.e2q_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).f28 = function () {
    return this.e2q_1;
  };
  protoOf(UIntSerializer).f2q = function (encoder, value) {
    var tmp = encoder.j2c(this.e2q_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.d2c(tmp$ret$0);
  };
  protoOf(UIntSerializer).g28 = function (encoder, value) {
    return this.f2q(encoder, value instanceof UInt ? value.di_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).g2q = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.c2b(this.e2q_1).w2a();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).h28 = function (decoder) {
    return new UInt(this.g2q(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.h2q_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_9(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).f28 = function () {
    return this.h2q_1;
  };
  protoOf(UShortSerializer).i2q = function (encoder, value) {
    var tmp = encoder.j2c(this.h2q_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.c2c(tmp$ret$0);
  };
  protoOf(UShortSerializer).g28 = function (encoder, value) {
    return this.i2q(encoder, value instanceof UShort ? value.bj_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).j2q = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.c2b(this.h2q_1).v2a();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).h28 = function (decoder) {
    return new UShort(this.j2q(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.k2q_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_11(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).f28 = function () {
    return this.k2q_1;
  };
  protoOf(UByteSerializer).l2q = function (encoder, value) {
    var tmp = encoder.j2c(this.k2q_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.b2c(tmp$ret$0);
  };
  protoOf(UByteSerializer).g28 = function (encoder, value) {
    return this.l2q(encoder, value instanceof UByte ? value.rh_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).m2q = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.c2b(this.k2q_1).u2a();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).h28 = function (decoder) {
    return new UByte(this.m2q(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).f29 = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.e29(kClass, typeArgumentsSerializers) : $super.e29.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.o2q_1 = class2ContextualFactory;
    this.p2q_1 = polyBase2Serializers;
    this.q2q_1 = polyBase2DefaultSerializerProvider;
    this.r2q_1 = polyBase2NamedSerializers;
    this.s2q_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).e2d = function (baseClass, value) {
    if (!baseClass.c7(value))
      return null;
    var tmp0_safe_receiver = this.p2q_1.x2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.q2q_1.x2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).d2d = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.r2q_1.x2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).x2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.s2q_1.x2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).e29 = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.o2q_1.x2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2q(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).n2q = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.o2q_1.m2().u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.q2();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.w2q_1;
        collector.x2q(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.v2q(kclass, serial.u2q_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.p2q_1.m2().u();
    while (tmp0_iterator_0.v()) {
      var element_0 = tmp0_iterator_0.x();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.p2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.q2();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.m2().u();
      while (tmp0_iterator_1.v()) {
        var element_1 = tmp0_iterator_1.x();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.p2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.q2();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.y2q(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.q2q_1.m2().u();
    while (tmp0_iterator_2.v()) {
      var element_2 = tmp0_iterator_2.x();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.p2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.q2();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.z2q(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.s2q_1.m2().u();
    while (tmp0_iterator_3.v()) {
      var element_3 = tmp0_iterator_3.x();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.p2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.q2();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.a2r(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.b2r_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.b2r_1.equals(tmp0_other_with_cast.b2r_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.b2r_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.b2r_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().u7()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().b8());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.w2i(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.c2r_1 = $factory;
  }
  protoOf(createCache$1).g29 = function (key) {
    return this.c2r_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.d2r_1 = $factory;
  }
  protoOf(createParametrizedCache$1).h29 = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.d2r_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).i29 = get_isNullable;
  protoOf(SerialDescriptorImpl).p29 = get_isInline;
  protoOf(AbstractDecoder).s2b = decodeSerializableElement$default;
  protoOf(AbstractDecoder).e2b = decodeSerializableValue;
  protoOf(AbstractDecoder).u2b = decodeSequentially;
  protoOf(AbstractDecoder).w2b = decodeCollectionSize;
  protoOf(AbstractEncoder).y2c = encodeNotNullMark;
  protoOf(AbstractEncoder).z2c = beginCollection;
  protoOf(AbstractEncoder).v2c = encodeSerializableValue;
  protoOf(AbstractEncoder).x2c = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).a2d = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).i29 = get_isNullable;
  protoOf(ListLikeDescriptor).p29 = get_isInline;
  protoOf(ListLikeDescriptor).n29 = get_annotations;
  protoOf(MapLikeDescriptor).i29 = get_isNullable;
  protoOf(MapLikeDescriptor).p29 = get_isInline;
  protoOf(MapLikeDescriptor).n29 = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).i29 = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).p29 = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).m2i = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).i29 = get_isNullable;
  protoOf(NothingSerialDescriptor).p29 = get_isInline;
  protoOf(NothingSerialDescriptor).n29 = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).i29 = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).p29 = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).n29 = get_annotations;
  protoOf(TaggedDecoder).s2b = decodeSerializableElement$default;
  protoOf(TaggedDecoder).e2b = decodeSerializableValue;
  protoOf(TaggedDecoder).u2b = decodeSequentially;
  protoOf(TaggedDecoder).w2b = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = SEALED_getInstance;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CONTEXTUAL_getInstance;
  _.$_$.g = ENUM_getInstance;
  _.$_$.h = CLASS_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = Companion_instance_0;
  _.$_$.l = StringSerializer_getInstance;
  _.$_$.m = ListSerializer;
  _.$_$.n = MapSerializer;
  _.$_$.o = SetSerializer;
  _.$_$.p = get_nullable;
  _.$_$.q = serializer_1;
  _.$_$.r = serializer_10;
  _.$_$.s = serializer_8;
  _.$_$.t = serializer_12;
  _.$_$.u = serializer_6;
  _.$_$.v = PolymorphicKind;
  _.$_$.w = PrimitiveKind;
  _.$_$.x = PrimitiveSerialDescriptor;
  _.$_$.y = get_annotations;
  _.$_$.z = get_isInline;
  _.$_$.a1 = get_isNullable;
  _.$_$.b1 = SerialDescriptor;
  _.$_$.c1 = ENUM;
  _.$_$.d1 = buildSerialDescriptor;
  _.$_$.e1 = getContextualDescriptor;
  _.$_$.f1 = AbstractDecoder;
  _.$_$.g1 = AbstractEncoder;
  _.$_$.h1 = CompositeDecoder;
  _.$_$.i1 = CompositeEncoder;
  _.$_$.j1 = Decoder;
  _.$_$.k1 = Encoder;
  _.$_$.l1 = AbstractPolymorphicSerializer;
  _.$_$.m1 = ElementMarker;
  _.$_$.n1 = typeParametersSerializers;
  _.$_$.o1 = GeneratedSerializer;
  _.$_$.p1 = InlinePrimitiveDescriptor;
  _.$_$.q1 = NamedValueDecoder;
  _.$_$.r1 = PluginGeneratedSerialDescriptor;
  _.$_$.s1 = SerializerFactory;
  _.$_$.t1 = jsonCachedSerialNames;
  _.$_$.u1 = throwMissingFieldException;
  _.$_$.v1 = EmptySerializersModule_0;
  _.$_$.w1 = contextual;
  _.$_$.x1 = SerializersModuleCollector;
  _.$_$.y1 = BinaryFormat;
  _.$_$.z1 = DeserializationStrategy;
  _.$_$.a2 = KSerializer;
  _.$_$.b2 = MissingFieldException;
  _.$_$.c2 = SealedClassSerializer;
  _.$_$.d2 = SerializationException;
  _.$_$.e2 = StringFormat;
  _.$_$.f2 = findPolymorphicSerializer;
  _.$_$.g2 = serializerOrNull_0;
  _.$_$.h2 = serializer_0;
  _.$_$.i2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
