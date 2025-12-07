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
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var protoOf = kotlin_kotlin.$_$.gb;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var objectCreate = kotlin_kotlin.$_$.eb;
  var captureStack = kotlin_kotlin.$_$.r9;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.p1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ge;
  var classMeta = kotlin_kotlin.$_$.x9;
  var VOID = kotlin_kotlin.$_$.g;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.h2;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.g2;
  var RuntimeException = kotlin_kotlin.$_$.me;
  var Long = kotlin_kotlin.$_$.ie;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var indexOf = kotlin_kotlin.$_$.pc;
  var charSequenceLength = kotlin_kotlin.$_$.v9;
  var charSequenceGet = kotlin_kotlin.$_$.u9;
  var numberToLong = kotlin_kotlin.$_$.db;
  var numberToInt = kotlin_kotlin.$_$.cb;
  var toLong = kotlin_kotlin.$_$.jb;
  var equals = kotlin_kotlin.$_$.aa;
  var Comparable = kotlin_kotlin.$_$.ae;
  //endregion
  //region block: pre-declaration
  setMetadataFor(System, 'System', objectMeta);
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
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Instant_0, 'Instant', classMeta, VOID, [Comparable], VOID, VOID, {0: InstantIso8601Serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(LocalDate_0, 'LocalDate', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalDateIso8601Serializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(LocalDateTime_0, 'LocalDateTime', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalDateTimeIso8601Serializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(LocalTime_0, 'LocalTime', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalTimeIso8601Serializer_getInstance});
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(TimeZone, 'TimeZone', classMeta, VOID, VOID, VOID, VOID, {0: TimeZoneSerializer_getInstance});
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FixedOffsetTimeZone, 'FixedOffsetTimeZone', classMeta, TimeZone, VOID, VOID, VOID, {0: FixedOffsetTimeZoneSerializer_getInstance});
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(UtcOffset, 'UtcOffset', classMeta, VOID, VOID, VOID, VOID, {0: UtcOffsetSerializer_getInstance});
  //endregion
  function System() {
  }
  protoOf(System).k36 = function () {
    return Companion_getInstance().k36();
  };
  var System_instance;
  function System_getInstance() {
    return System_instance;
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
  function DateTimeFormatException_init_$Init$_0(cause, $this) {
    IllegalArgumentException_init_$Init$_0(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(cause) {
    var tmp = DateTimeFormatException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
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
  function IllegalTimeZoneException_init_$Init$_0(cause, $this) {
    IllegalArgumentException_init_$Init$_0(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_0(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_0(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_0);
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
  function DateTimeArithmeticException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
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
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.p36_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).f28 = function () {
    return this.p36_1;
  };
  protoOf(InstantIso8601Serializer).h28 = function (decoder) {
    return Companion_getInstance().h1t(decoder.b2b());
  };
  protoOf(InstantIso8601Serializer).q36 = function (encoder, value) {
    encoder.i2c(value.toString());
  };
  protoOf(InstantIso8601Serializer).g28 = function (encoder, value) {
    return this.q36(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.r36_1 = PrimitiveSerialDescriptor('LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).f28 = function () {
    return this.r36_1;
  };
  protoOf(LocalDateIso8601Serializer).h28 = function (decoder) {
    return Companion_getInstance_0().h1t(decoder.b2b());
  };
  protoOf(LocalDateIso8601Serializer).u36 = function (encoder, value) {
    encoder.i2c(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).g28 = function (encoder, value) {
    return this.u36(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.v36_1 = PrimitiveSerialDescriptor('LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).f28 = function () {
    return this.v36_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).h28 = function (decoder) {
    return Companion_getInstance_1().h1t(decoder.b2b());
  };
  protoOf(LocalDateTimeIso8601Serializer).y36 = function (encoder, value) {
    encoder.i2c(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).g28 = function (encoder, value) {
    return this.y36(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.z36_1 = PrimitiveSerialDescriptor('LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).f28 = function () {
    return this.z36_1;
  };
  protoOf(LocalTimeIso8601Serializer).h28 = function (decoder) {
    return Companion_getInstance_2().h1t(decoder.b2b());
  };
  protoOf(LocalTimeIso8601Serializer).c37 = function (encoder, value) {
    encoder.i2c(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).g28 = function (encoder, value) {
    return this.c37(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.d37_1 = PrimitiveSerialDescriptor('TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).f28 = function () {
    return this.d37_1;
  };
  protoOf(TimeZoneSerializer).h28 = function (decoder) {
    return Companion_getInstance_3().f37(decoder.b2b());
  };
  protoOf(TimeZoneSerializer).g37 = function (encoder, value) {
    encoder.i2c(value.i37());
  };
  protoOf(TimeZoneSerializer).g28 = function (encoder, value) {
    return this.g37(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.j37_1 = PrimitiveSerialDescriptor('FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).f28 = function () {
    return this.j37_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).h28 = function (decoder) {
    var zone = Companion_getInstance_3().f37(decoder.b2b());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).k37 = function (encoder, value) {
    encoder.i2c(value.i37());
  };
  protoOf(FixedOffsetTimeZoneSerializer).g28 = function (encoder, value) {
    return this.k37(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.l37_1 = PrimitiveSerialDescriptor('UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).f28 = function () {
    return this.l37_1;
  };
  protoOf(UtcOffsetSerializer).h28 = function (decoder) {
    return Companion_getInstance_5().h1t(decoder.b2b());
  };
  protoOf(UtcOffsetSerializer).n37 = function (encoder, value) {
    encoder.i2c(value.toString());
  };
  protoOf(UtcOffsetSerializer).g28 = function (encoder, value) {
    return this.n37(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
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
  function Companion() {
    Companion_instance = this;
    this.l36_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.m36_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.n36_1 = new Instant_0(Instant.MIN);
    this.o36_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion).k36 = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion).h1t = function (isoString) {
    var tmp;
    try {
      tmp = new Instant_0(OffsetDateTime.parse(fixOffsetRepresentation(this, isoString)).toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Instant_0(value) {
    Companion_getInstance();
    this.o37_1 = value;
  }
  protoOf(Instant_0).p37 = function () {
    return numberToLong(this.o37_1.epochSecond());
  };
  protoOf(Instant_0).q37 = function () {
    return numberToInt(this.o37_1.nano());
  };
  protoOf(Instant_0).r37 = function () {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.p37();
    var other = get_MILLIS_PER_ONE();
    var this_1 = this_0.o9(toLong(other));
    var other_0 = this.q37() / get_NANOS_PER_MILLI() | 0;
    return this_1.ta(toLong(other_0));
  };
  protoOf(Instant_0).s37 = function (other) {
    return numberToInt(this.o37_1.compareTo(other.o37_1));
  };
  protoOf(Instant_0).d = function (other) {
    return this.s37(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals(this.o37_1, other.o37_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return numberToInt(this.o37_1.hashCode());
  };
  protoOf(Instant_0).toString = function () {
    return this.o37_1.toString();
  };
  function isJodaDateTimeException(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == 'DateTimeParseException';
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.s36_1 = new LocalDate_0(LocalDate.MIN);
    this.t36_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_0).h1t = function (isoString) {
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
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LocalDate_0(value) {
    Companion_getInstance_0();
    this.t37_1 = value;
  }
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = equals(this.t37_1, other.t37_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return numberToInt(this.t37_1.hashCode());
  };
  protoOf(LocalDate_0).toString = function () {
    return this.t37_1.toString();
  };
  protoOf(LocalDate_0).u37 = function (other) {
    return numberToInt(this.t37_1.compareTo(other.t37_1));
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.u37(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.w36_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.x36_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_1).h1t = function (isoString) {
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
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_1();
    this.v37_1 = value;
  }
  protoOf(LocalDateTime_0).w37 = function () {
    return new LocalDate_0(this.v37_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).x37 = function () {
    return new LocalTime_0(this.v37_1.toLocalTime());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = equals(this.v37_1, other.v37_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return numberToInt(this.v37_1.hashCode());
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.v37_1.toString();
  };
  protoOf(LocalDateTime_0).y37 = function (other) {
    return numberToInt(this.v37_1.compareTo(other.v37_1));
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.y37(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.a37_1 = new LocalTime_0(LocalTime.MIN);
    this.b37_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_2).h1t = function (isoString) {
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
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function LocalTime_0(value) {
    Companion_getInstance_2();
    this.z37_1 = value;
  }
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = equals(this.z37_1, other.z37_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return numberToInt(this.z37_1.hashCode());
  };
  protoOf(LocalTime_0).toString = function () {
    return this.z37_1.toString();
  };
  protoOf(LocalTime_0).a38 = function (other) {
    return numberToInt(this.z37_1.compareTo(other.z37_1));
  };
  protoOf(LocalTime_0).d = function (other) {
    return this.a38(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
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
  function Companion_3() {
    Companion_instance_3 = this;
    this.e37_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_3).b38 = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_3).f37 = function (zoneId) {
    var tmp;
    try {
      tmp = ofZone(this, ZoneId.of(zoneId));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_3();
    this.h37_1 = zoneId;
  }
  protoOf(TimeZone).i37 = function () {
    return this.h37_1.id();
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = equals(this.h37_1, other.h37_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return numberToInt(this.h37_1.hashCode());
  };
  protoOf(TimeZone).toString = function () {
    return this.h37_1.toString();
  };
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalDateTime.ofInstant(_this__u8e3s4.o37_1, timeZone.h37_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDateTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.c38_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.e38_1 = offset;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.m37_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_5).h1t = function (offsetString) {
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
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_5();
    this.c38_1 = zoneOffset;
  }
  protoOf(UtcOffset).hashCode = function () {
    return numberToInt(this.c38_1.hashCode());
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = equals(this.c38_1, other.c38_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.c38_1.toString();
  };
  //region block: init
  System_instance = new System();
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  NANOS_PER_MILLI = 1000000;
  MILLIS_PER_ONE = 1000;
  Companion_instance_4 = new Companion_4();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InstantIso8601Serializer_getInstance;
  _.$_$.b = System_instance;
  _.$_$.c = Companion_getInstance_3;
  _.$_$.d = toLocalDateTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-js-ir.js.map
