(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['@js-joda/core'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var OffsetDateTime = $module$_js_joda_core_gcv2k.OffsetDateTime;
  var Duration = $module$_js_joda_core_gcv2k.Duration;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var protoOf = kotlin_kotlin.$_$.rc;
  var objectMeta = kotlin_kotlin.$_$.qc;
  var setMetadataFor = kotlin_kotlin.$_$.sc;
  var VOID = kotlin_kotlin.$_$.g;
  var interfaceMeta = kotlin_kotlin.$_$.vb;
  var toString = kotlin_kotlin.$_$.wc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var asList = kotlin_kotlin.$_$.y6;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.pc;
  var captureStack = kotlin_kotlin.$_$.cb;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.u1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.a2;
  var IllegalArgumentException = kotlin_kotlin.$_$.hg;
  var classMeta = kotlin_kotlin.$_$.ib;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.p2;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.q2;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.o2;
  var RuntimeException_init_$Init$_2 = kotlin_kotlin.$_$.r2;
  var RuntimeException = kotlin_kotlin.$_$.ng;
  var Long = kotlin_kotlin.$_$.jg;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var THROW_CCE = kotlin_kotlin.$_$.og;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var THROW_IAE = kotlin_kotlin.$_$.pg;
  var Unit_getInstance = kotlin_kotlin.$_$.t5;
  var Enum = kotlin_kotlin.$_$.eg;
  var numberToInt = kotlin_kotlin.$_$.nc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d3;
  var indexOf = kotlin_kotlin.$_$.ge;
  var charSequenceLength = kotlin_kotlin.$_$.gb;
  var charSequenceGet = kotlin_kotlin.$_$.fb;
  var toLong = kotlin_kotlin.$_$.uc;
  var ArithmeticException = kotlin_kotlin.$_$.xf;
  var numberToLong = kotlin_kotlin.$_$.oc;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.x2;
  var _Duration___get_nanosecondsComponent__impl__nh19kq = kotlin_kotlin.$_$.z2;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.y2;
  var numberToDouble = kotlin_kotlin.$_$.mc;
  var Duration__unaryMinus_impl_x2k1y0 = kotlin_kotlin.$_$.c3;
  var Companion_getInstance = kotlin_kotlin.$_$.l5;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.j;
  var toDuration = kotlin_kotlin.$_$.vf;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.i;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.a3;
  var equals = kotlin_kotlin.$_$.lb;
  var Comparable = kotlin_kotlin.$_$.ag;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var toSet = kotlin_kotlin.$_$.w9;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.k1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Clock_0, 'Clock', interfaceMeta);
  setMetadataFor(System, 'System', objectMeta, VOID, [Clock_0]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(DateTimeFormatException, 'DateTimeFormatException', classMeta, IllegalArgumentException, VOID, DateTimeFormatException_init_$Create$);
  setMetadataFor(IllegalTimeZoneException, 'IllegalTimeZoneException', classMeta, IllegalArgumentException, VOID, IllegalTimeZoneException_init_$Create$);
  setMetadataFor(DateTimeArithmeticException, 'DateTimeArithmeticException', classMeta, RuntimeException, VOID, DateTimeArithmeticException_init_$Create$);
  setMetadataFor(InstantIso8601Serializer, 'InstantIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalDateIso8601Serializer, 'LocalDateIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalDateTimeIso8601Serializer, 'LocalDateTimeIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalTimeIso8601Serializer, 'LocalTimeIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(TimeZoneSerializer, 'TimeZoneSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FixedOffsetTimeZoneSerializer, 'FixedOffsetTimeZoneSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UtcOffsetSerializer, 'UtcOffsetSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DayOfWeek_0, 'DayOfWeek', classMeta, Enum);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Instant_0, 'Instant', classMeta, VOID, [Comparable], VOID, VOID, {0: InstantIso8601Serializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(LocalDate_0, 'LocalDate', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalDateIso8601Serializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(LocalDateTime_0, 'LocalDateTime', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalDateTimeIso8601Serializer_getInstance});
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(LocalTime_0, 'LocalTime', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalTimeIso8601Serializer_getInstance});
  setMetadataFor(Month_0, 'Month', classMeta, Enum);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(TimeZone, 'TimeZone', classMeta, VOID, VOID, VOID, VOID, {0: TimeZoneSerializer_getInstance});
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(FixedOffsetTimeZone, 'FixedOffsetTimeZone', classMeta, TimeZone, VOID, VOID, VOID, {0: FixedOffsetTimeZoneSerializer_getInstance});
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(UtcOffset, 'UtcOffset', classMeta, VOID, VOID, VOID, VOID, {0: UtcOffsetSerializer_getInstance});
  //endregion
  function System() {
    System_instance = this;
  }
  protoOf(System).now_2cba_k$ = function () {
    return Companion_getInstance_1().now_2cba_k$();
  };
  var System_instance;
  function System_getInstance() {
    if (System_instance == null)
      new System();
    return System_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Clock_0() {
  }
  function get_allDaysOfWeek() {
    _init_properties_DayOfWeek_kt__jlq111();
    return allDaysOfWeek;
  }
  var allDaysOfWeek;
  function DayOfWeek(isoDayNumber) {
    _init_properties_DayOfWeek_kt__jlq111();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_allDaysOfWeek().get_c1px32_k$(isoDayNumber - 1 | 0);
  }
  var properties_initialized_DayOfWeek_kt_chtv49;
  function _init_properties_DayOfWeek_kt__jlq111() {
    if (!properties_initialized_DayOfWeek_kt_chtv49) {
      properties_initialized_DayOfWeek_kt_chtv49 = true;
      allDaysOfWeek = asList(values());
    }
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function IllegalTimeZoneException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$() {
    var tmp = IllegalTimeZoneException_init_$Init$(objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_0(message) {
    var tmp = IllegalTimeZoneException_init_$Init$_0(message, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_0);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_1(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_1(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_1);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_2(message, cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_2(message, cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_2);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(message) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(message, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_1(cause, $this) {
    RuntimeException_init_$Init$_1(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_1(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_1);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_2(message, cause, $this) {
    RuntimeException_init_$Init$_2(message, cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_2(message, cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_2);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function get_allMonths() {
    _init_properties_Month_kt__aau5fy();
    return allMonths;
  }
  var allMonths;
  function get_number(_this__u8e3s4) {
    _init_properties_Month_kt__aau5fy();
    return _this__u8e3s4.get_ordinal_ip24qg_k$() + 1 | 0;
  }
  function Month(number) {
    _init_properties_Month_kt__aau5fy();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= number ? number <= 12 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_allMonths().get_c1px32_k$(number - 1 | 0);
  }
  var properties_initialized_Month_kt_gieo9c;
  function _init_properties_Month_kt__aau5fy() {
    if (!properties_initialized_Month_kt_gieo9c) {
      properties_initialized_Month_kt_gieo9c = true;
      allMonths = asList(values_0());
    }
  }
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  function get_NANOS_PER_MILLI() {
    return NANOS_PER_MILLI;
  }
  var NANOS_PER_MILLI;
  function get_MILLIS_PER_ONE() {
    return MILLIS_PER_ONE;
  }
  var MILLIS_PER_ONE;
  function get_NANOS_PER_ONE() {
    return NANOS_PER_ONE;
  }
  var NANOS_PER_ONE;
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(InstantIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_1().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(InstantIso8601Serializer).serialize_1cezrs_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(InstantIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_1cezrs_k$(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_2().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateIso8601Serializer).serialize_4wlsk8_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_4wlsk8_k$(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_3().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateTimeIso8601Serializer).serialize_d9j408_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_d9j408_k$(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalTimeIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_4().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_401kjc_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_401kjc_k$(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(TimeZoneSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_5().of_5gnbr7_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(TimeZoneSerializer).serialize_pkxsts_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.get_id_kntnx8_k$());
  };
  protoOf(TimeZoneSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_pkxsts_k$(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).deserialize_sy6x50_k$ = function (decoder) {
    var zone = Companion_getInstance_5().of_5gnbr7_k$(decoder.decodeString_x3hxsx_k$());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).serialize_sozlhl_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.get_id_kntnx8_k$());
  };
  protoOf(FixedOffsetTimeZoneSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_sozlhl_k$(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UtcOffsetSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_7().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(UtcOffsetSerializer).serialize_2fqg06_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(UtcOffsetSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_2fqg06_k$(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'MONDAY':
        return DayOfWeek_MONDAY_getInstance();
      case 'TUESDAY':
        return DayOfWeek_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return DayOfWeek_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return DayOfWeek_THURSDAY_getInstance();
      case 'FRIDAY':
        return DayOfWeek_FRIDAY_getInstance();
      case 'SATURDAY':
        return DayOfWeek_SATURDAY_getInstance();
      case 'SUNDAY':
        return DayOfWeek_SUNDAY_getInstance();
      default:
        DayOfWeek_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_getInstance();
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toDayOfWeek(_this__u8e3s4) {
    return DayOfWeek(numberToInt(_this__u8e3s4.value()));
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function fixOffsetRepresentation($this, isoString) {
    var time = indexOf(isoString, _Char___init__impl__6a9atx(84), VOID, true);
    if (time === -1)
      return isoString;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable = charSequenceLength(isoString) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlinx.datetime.Companion.fixOffsetRepresentation.<anonymous>' call
          var c = charSequenceGet(isoString, index);
          if (c === _Char___init__impl__6a9atx(43) ? true : c === _Char___init__impl__6a9atx(45)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    var offset = tmp$ret$1;
    if (offset < time)
      return isoString;
    var separator = indexOf(isoString, _Char___init__impl__6a9atx(58), offset);
    return !(separator === -1) ? isoString : isoString + ':00';
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.DISTANT_PAST_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.DISTANT_FUTURE_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.MIN_1 = new Instant_0(Instant.MIN);
    this.MAX_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_0).now_2cba_k$ = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion_0).fromEpochMilliseconds_e2resj_k$ = function (epochMilliseconds) {
    var tmp;
    try {
      // Inline function 'kotlin.Long.div' call
      var other = get_MILLIS_PER_ONE();
      var tmp_0 = epochMilliseconds.div_jun7gj_k$(toLong(other));
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_MILLIS_PER_ONE();
      var this_0 = epochMilliseconds.rem_bsnl9o_k$(toLong(other_0));
      var other_1 = get_NANOS_PER_MILLI();
      var tmp$ret$2 = this_0.times_nfzjiw_k$(toLong(other_1));
      tmp = this.fromEpochSeconds_labkcg_k$(tmp_0, tmp$ret$2);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_1 = epochMilliseconds.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(Companion_0).parse_pc1q8p_k$ = function (isoString) {
    var tmp;
    try {
      tmp = new Instant_0(OffsetDateTime.parse(fixOffsetRepresentation(this, isoString)).toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_0).fromEpochSeconds_labkcg_k$ = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlin.floorDiv' call
      var other = toLong(get_NANOS_PER_ONE());
      var q = nanosecondAdjustment.div_jun7gj_k$(other);
      if (nanosecondAdjustment.xor_qzz94j_k$(other).compareTo_9jj042_k$(new Long(0, 0)) < 0 ? !q.times_nfzjiw_k$(other).equals(nanosecondAdjustment) : false) {
        q = q.dec_24n6_k$();
      }
      var tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      // Inline function 'kotlin.mod' call
      var other_0 = toLong(get_NANOS_PER_ONE());
      var r = nanosecondAdjustment.rem_bsnl9o_k$(other_0);
      var nos = r.plus_r93sks_k$(other_0.and_4spn93_k$(r.xor_qzz94j_k$(other_0).and_4spn93_k$(r.or_v7fvkl_k$(r.unaryMinus_6uz0qp_k$())).shr_9fl3wl_k$(63))).toInt_1tsl84_k$();
      tmp = new Instant_0(Instant.ofEpochSecond(secs, nos));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (!isJodaDateTimeException(e)) {
          tmp_1 = !(e instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw e;
        tmp_0 = epochSeconds.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_0).fromEpochSeconds$default_ryd2jg_k$ = function (epochSeconds, nanosecondAdjustment, $super) {
    nanosecondAdjustment = nanosecondAdjustment === VOID ? new Long(0, 0) : nanosecondAdjustment;
    return $super === VOID ? this.fromEpochSeconds_labkcg_k$(epochSeconds, nanosecondAdjustment) : $super.fromEpochSeconds_labkcg_k$.call(this, epochSeconds, nanosecondAdjustment);
  };
  protoOf(Companion_0).fromEpochSeconds_idu11y_k$ = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      tmp = new Instant_0(Instant.ofEpochSecond(epochSeconds, nanosecondAdjustment));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = epochSeconds.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_0).get_DISTANT_PAST_yzdqbd_k$ = function () {
    return this.DISTANT_PAST_1;
  };
  protoOf(Companion_0).get_DISTANT_FUTURE_gftwmi_k$ = function () {
    return this.DISTANT_FUTURE_1;
  };
  protoOf(Companion_0).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_0).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return InstantIso8601Serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Instant_0(value) {
    Companion_getInstance_1();
    this.value_1 = value;
  }
  protoOf(Instant_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Instant_0).get_epochSeconds_w76ght_k$ = function () {
    return numberToLong(this.value_1.epochSecond());
  };
  protoOf(Instant_0).get_nanosecondsOfSecond_n2ey8j_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(Instant_0).toEpochMilliseconds_82cfls_k$ = function () {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.get_epochSeconds_w76ght_k$();
    var other = get_MILLIS_PER_ONE();
    var this_1 = this_0.times_nfzjiw_k$(toLong(other));
    var other_0 = this.get_nanosecondsOfSecond_n2ey8j_k$() / get_NANOS_PER_MILLI() | 0;
    return this_1.plus_r93sks_k$(toLong(other_0));
  };
  protoOf(Instant_0).plus_oeswd1_k$ = function (duration) {
    // Inline function 'kotlin.time.Duration.toComponents' call
    // Inline function 'kotlin.contracts.contract' call
    var seconds = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var nanoseconds = _Duration___get_nanosecondsComponent__impl__nh19kq(duration);
    var tmp;
    try {
      tmp = new Instant_0(this.plusFix_2a4tar_k$(seconds.toDouble_ygsx0s_k$(), nanoseconds));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = Duration__isPositive_impl_tvkkt2(duration) ? Companion_getInstance_1().MAX_1 : Companion_getInstance_1().MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).plusFix_2a4tar_k$ = function (seconds, nanos) {
    var newSeconds = numberToDouble(this.value_1.epochSecond()) + seconds;
    var newNanos = numberToDouble(this.value_1.nano()) + nanos;
    return Instant.ofEpochSecond(newSeconds, newNanos);
  };
  protoOf(Instant_0).minus_j7epkb_k$ = function (duration) {
    return this.plus_oeswd1_k$(Duration__unaryMinus_impl_x2k1y0(duration));
  };
  protoOf(Instant_0).minus_mev7kl_k$ = function (other) {
    var diff = Duration.between(other.value_1, this.value_1);
    // Inline function 'kotlin.time.Companion.seconds' call
    Companion_getInstance();
    var this_0 = numberToDouble(diff.seconds());
    var tmp = toDuration(this_0, DurationUnit_SECONDS_getInstance());
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    Companion_getInstance();
    var this_1 = numberToDouble(diff.nano());
    var tmp$ret$1 = toDuration(this_1, DurationUnit_NANOSECONDS_getInstance());
    return Duration__plus_impl_yu9v8f(tmp, tmp$ret$1);
  };
  protoOf(Instant_0).compareTo_rgp57f_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  protoOf(Instant_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_rgp57f_k$(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  protoOf(Instant_0).toString = function () {
    return this.value_1.toString();
  };
  function isJodaDateTimeException(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == 'DateTimeParseException';
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.MIN_1 = new LocalDate_0(LocalDate.MIN);
    this.MAX_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_1).parse_pc1q8p_k$ = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalDate.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDate_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_1).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_1).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_1).fromEpochDays_msuzxa_k$ = function (epochDays) {
    var tmp;
    try {
      tmp = new LocalDate_0(LocalDate.ofEpochDay(epochDays));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return LocalDateIso8601Serializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
    var tmp;
    try {
      tmp = LocalDate.of(year, monthNumber, dayOfMonth);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDate_0.call($this, tmp);
    return $this;
  }
  function LocalDate_init_$Create$(year, monthNumber, dayOfMonth) {
    return LocalDate_init_$Init$(year, monthNumber, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_init_$Init$_0(year, month, dayOfMonth, $this) {
    LocalDate_init_$Init$(year, get_number(month), dayOfMonth, $this);
    return $this;
  }
  function LocalDate_init_$Create$_0(year, month, dayOfMonth) {
    return LocalDate_init_$Init$_0(year, month, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_0(value) {
    Companion_getInstance_2();
    this.value_1 = value;
  }
  protoOf(LocalDate_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalDate_0).get_year_woy26e_k$ = function () {
    return numberToInt(this.value_1.year());
  };
  protoOf(LocalDate_0).get_monthNumber_nb47ls_k$ = function () {
    return numberToInt(this.value_1.monthValue());
  };
  protoOf(LocalDate_0).get_month_ivc8d3_k$ = function () {
    return toMonth(this.value_1.month());
  };
  protoOf(LocalDate_0).get_dayOfMonth_vblo3a_k$ = function () {
    return numberToInt(this.value_1.dayOfMonth());
  };
  protoOf(LocalDate_0).get_dayOfWeek_3kfgci_k$ = function () {
    return toDayOfWeek(this.value_1.dayOfWeek());
  };
  protoOf(LocalDate_0).get_dayOfYear_3ke6gp_k$ = function () {
    return numberToInt(this.value_1.dayOfYear());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  protoOf(LocalDate_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalDate_0).compareTo_phv9sr_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  protoOf(LocalDate_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_phv9sr_k$(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).toEpochDays_tp9eth_k$ = function () {
    return numberToInt(this.value_1.toEpochDay());
  };
  function LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      tmp = LocalDateTime.of(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDateTime_0.call($this, tmp);
    return $this;
  }
  function LocalDateTime_init_$Create$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime_0)));
  }
  function LocalDateTime_init_$Init$_0(year, month, dayOfMonth, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    LocalDateTime_init_$Init$(year, get_number(month), dayOfMonth, hour, minute, second, nanosecond, $this);
    return $this;
  }
  function LocalDateTime_init_$Create$_0(year, month, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$_0(year, month, dayOfMonth, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime_0)));
  }
  function LocalDateTime_init_$Init$_1(date, time, $this) {
    LocalDateTime_0.call($this, LocalDateTime.of(date.get_value_j01efc_k$(), time.get_value_j01efc_k$()));
    return $this;
  }
  function LocalDateTime_init_$Create$_1(date, time) {
    return LocalDateTime_init_$Init$_1(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.MIN_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.MAX_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_2).parse_pc1q8p_k$ = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalDateTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDateTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_2).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_2).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return LocalDateTimeIso8601Serializer_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_3();
    this.value_1 = value;
  }
  protoOf(LocalDateTime_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalDateTime_0).get_year_woy26e_k$ = function () {
    return numberToInt(this.value_1.year());
  };
  protoOf(LocalDateTime_0).get_monthNumber_nb47ls_k$ = function () {
    return numberToInt(this.value_1.monthValue());
  };
  protoOf(LocalDateTime_0).get_month_ivc8d3_k$ = function () {
    return toMonth(this.value_1.month());
  };
  protoOf(LocalDateTime_0).get_dayOfMonth_vblo3a_k$ = function () {
    return numberToInt(this.value_1.dayOfMonth());
  };
  protoOf(LocalDateTime_0).get_dayOfWeek_3kfgci_k$ = function () {
    return toDayOfWeek(this.value_1.dayOfWeek());
  };
  protoOf(LocalDateTime_0).get_dayOfYear_3ke6gp_k$ = function () {
    return numberToInt(this.value_1.dayOfYear());
  };
  protoOf(LocalDateTime_0).get_hour_wonfal_k$ = function () {
    return numberToInt(this.value_1.hour());
  };
  protoOf(LocalDateTime_0).get_minute_gnc10d_k$ = function () {
    return numberToInt(this.value_1.minute());
  };
  protoOf(LocalDateTime_0).get_second_jf7fjx_k$ = function () {
    return numberToInt(this.value_1.second());
  };
  protoOf(LocalDateTime_0).get_nanosecond_fws9td_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(LocalDateTime_0).get_date_wokkxj_k$ = function () {
    return new LocalDate_0(this.value_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).get_time_wouyhi_k$ = function () {
    return new LocalTime_0(this.value_1.toLocalTime());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalDateTime_0).compareTo_fh2md_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  protoOf(LocalDateTime_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_fh2md_k$(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      tmp = LocalTime.of(hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.MIN_1 = new LocalTime_0(LocalTime.MIN);
    this.MAX_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_3).parse_pc1q8p_k$ = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_3).fromSecondOfDay_ahegcx_k$ = function (secondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalTime.ofSecondOfDay(secondOfDay, 0);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_3).fromMillisecondOfDay_pjhtva_k$ = function (millisecondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalTime.ofNanoOfDay(millisecondOfDay * 1000000.0);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_3).fromNanosecondOfDay_iksazp_k$ = function (nanosecondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalTime.ofNanoOfDay(nanosecondOfDay.toDouble_ygsx0s_k$());
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_3).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_3).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return LocalTimeIso8601Serializer_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function LocalTime_0(value) {
    Companion_getInstance_4();
    this.value_1 = value;
  }
  protoOf(LocalTime_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalTime_0).get_hour_wonfal_k$ = function () {
    return numberToInt(this.value_1.hour());
  };
  protoOf(LocalTime_0).get_minute_gnc10d_k$ = function () {
    return numberToInt(this.value_1.minute());
  };
  protoOf(LocalTime_0).get_second_jf7fjx_k$ = function () {
    return numberToInt(this.value_1.second());
  };
  protoOf(LocalTime_0).get_nanosecond_fws9td_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(LocalTime_0).toSecondOfDay_a2clsa_k$ = function () {
    return numberToInt(this.value_1.toSecondOfDay());
  };
  protoOf(LocalTime_0).toMillisecondOfDay_936hwh_k$ = function () {
    return numberToInt(numberToDouble(this.value_1.toNanoOfDay()) / get_NANOS_PER_MILLI());
  };
  protoOf(LocalTime_0).toNanosecondOfDay_dywvsy_k$ = function () {
    return numberToLong(this.value_1.toNanoOfDay());
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  protoOf(LocalTime_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalTime_0).compareTo_ax7xad_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  protoOf(LocalTime_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_ax7xad_k$(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
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
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'JANUARY':
        return Month_JANUARY_getInstance();
      case 'FEBRUARY':
        return Month_FEBRUARY_getInstance();
      case 'MARCH':
        return Month_MARCH_getInstance();
      case 'APRIL':
        return Month_APRIL_getInstance();
      case 'MAY':
        return Month_MAY_getInstance();
      case 'JUNE':
        return Month_JUNE_getInstance();
      case 'JULY':
        return Month_JULY_getInstance();
      case 'AUGUST':
        return Month_AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month_SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month_OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month_NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month_DECEMBER_getInstance();
      default:
        Month_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month_0('JANUARY', 0);
    Month_FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month_MARCH_instance = new Month_0('MARCH', 2);
    Month_APRIL_instance = new Month_0('APRIL', 3);
    Month_MAY_instance = new Month_0('MAY', 4);
    Month_JUNE_instance = new Month_0('JUNE', 5);
    Month_JULY_instance = new Month_0('JULY', 6);
    Month_AUGUST_instance = new Month_0('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month_0('DECEMBER', 11);
  }
  function Month_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toMonth(_this__u8e3s4) {
    return Month(numberToInt(_this__u8e3s4.value()));
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
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.UTC_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_4).currentSystemDefault_9rduv_k$ = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_4).get_UTC_18jizp_k$ = function () {
    return this.UTC_1;
  };
  protoOf(Companion_4).of_5gnbr7_k$ = function (zoneId) {
    var tmp;
    try {
      tmp = ofZone(this, ZoneId.of(zoneId));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_4).get_availableZoneIds_kceyfo_k$ = function () {
    return toSet(ZoneId.getAvailableZoneIds());
  };
  protoOf(Companion_4).serializer_9w0wvi_k$ = function () {
    return TimeZoneSerializer_getInstance();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_5();
    this.zoneId_1 = zoneId;
  }
  protoOf(TimeZone).get_zoneId_mw7isw_k$ = function () {
    return this.zoneId_1;
  };
  protoOf(TimeZone).get_id_kntnx8_k$ = function () {
    return this.zoneId_1.id();
  };
  protoOf(TimeZone).toLocalDateTime_szu0i4_k$ = function (_this__u8e3s4) {
    return toLocalDateTime(_this__u8e3s4, this);
  };
  protoOf(TimeZone).toInstant_o48wgh_k$ = function (_this__u8e3s4) {
    return toInstant(_this__u8e3s4, this);
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = equals(this.zoneId_1, other.zoneId_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return numberToInt(this.zoneId_1.hashCode());
  };
  protoOf(TimeZone).toString = function () {
    return this.zoneId_1.toString();
  };
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalDateTime.ofInstant(_this__u8e3s4.get_value_j01efc_k$(), timeZone.zoneId_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDateTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function toInstant(_this__u8e3s4, timeZone) {
    // Inline function 'kotlin.let' call
    var this_0 = _this__u8e3s4.get_value_j01efc_k$().atZone(timeZone.zoneId_1).toInstant();
    // Inline function 'kotlin.contracts.contract' call
    return new Instant_0(this_0);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.get_zoneOffset_xw9ey0_k$());
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).serializer_9w0wvi_k$ = function () {
    return FixedOffsetTimeZoneSerializer_getInstance();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    Companion_getInstance_6();
    TimeZone.call(this, zoneId);
    this.offset_1 = offset;
  }
  protoOf(FixedOffsetTimeZone).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(FixedOffsetTimeZone).get_totalSeconds_oq5924_k$ = function () {
    return this.offset_1.get_totalSeconds_oq5924_k$();
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.ZERO_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_6).get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(Companion_6).parse_pc1q8p_k$ = function (offsetString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = ZoneOffset.of(offsetString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new UtcOffset(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_6).serializer_9w0wvi_k$ = function () {
    return UtcOffsetSerializer_getInstance();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_7();
    this.zoneOffset_1 = zoneOffset;
  }
  protoOf(UtcOffset).get_zoneOffset_xw9ey0_k$ = function () {
    return this.zoneOffset_1;
  };
  protoOf(UtcOffset).get_totalSeconds_oq5924_k$ = function () {
    return numberToInt(this.zoneOffset_1.totalSeconds());
  };
  protoOf(UtcOffset).hashCode = function () {
    return numberToInt(this.zoneOffset_1.hashCode());
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = equals(this.zoneOffset_1, other.zoneOffset_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.zoneOffset_1.toString();
  };
  function safeAdd(a, b) {
    var sum = a.plus_r93sks_k$(b);
    if (a.xor_qzz94j_k$(sum).compareTo_9jj042_k$(new Long(0, 0)) < 0 ? a.xor_qzz94j_k$(b).compareTo_9jj042_k$(new Long(0, 0)) >= 0 : false) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  //region block: init
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  NANOS_PER_MILLI = 1000000;
  MILLIS_PER_ONE = 1000;
  NANOS_PER_ONE = 1000000000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InstantIso8601Serializer_getInstance;
  _.$_$.b = System_getInstance;
  _.$_$.c = Companion_getInstance_5;
  _.$_$.d = toLocalDateTime;
  //endregion
  return _;
}));
