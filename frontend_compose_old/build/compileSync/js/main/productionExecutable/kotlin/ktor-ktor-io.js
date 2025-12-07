(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './88b0986a7186d029-atomicfu-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-io'.");
    }
    root['ktor-ktor-io'] = factory(typeof this['ktor-ktor-io'] === 'undefined' ? {} : this['ktor-ktor-io'], this['kotlin-kotlin-stdlib'], this['88b0986a7186d029-atomicfu-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var toString = kotlin_kotlin.$_$.lb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var toLong = kotlin_kotlin.$_$.jb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var protoOf = kotlin_kotlin.$_$.gb;
  var classMeta = kotlin_kotlin.$_$.x9;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var Long = kotlin_kotlin.$_$.ie;
  var VOID = kotlin_kotlin.$_$.g;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.a1;
  var captureStack = kotlin_kotlin.$_$.r9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.n4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var isInterface = kotlin_kotlin.$_$.ta;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var equals = kotlin_kotlin.$_$.aa;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.s4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var charSequenceLength = kotlin_kotlin.$_$.v9;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var hashCode = kotlin_kotlin.$_$.ia;
  var toString_0 = kotlin_kotlin.$_$.od;
  var objectCreate = kotlin_kotlin.$_$.eb;
  var Exception = kotlin_kotlin.$_$.fe;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.m1;
  var numberToChar = kotlin_kotlin.$_$.ab;
  var coerceAtLeast = kotlin_kotlin.$_$.ob;
  var coerceAtMost = kotlin_kotlin.$_$.qb;
  var Companion_getInstance = kotlin_kotlin.$_$.y4;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.w2;
  var toByte = kotlin_kotlin.$_$.ib;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.e4;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n2;
  var toShort = kotlin_kotlin.$_$.kb;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.d4;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d5;
  var charSequenceGet = kotlin_kotlin.$_$.u9;
  var isLowSurrogate = kotlin_kotlin.$_$.sc;
  var isHighSurrogate = kotlin_kotlin.$_$.rc;
  var Job_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var coerceAtMost_0 = kotlin_kotlin.$_$.pb;
  var lazy = kotlin_kotlin.$_$.lf;
  var KProperty1 = kotlin_kotlin.$_$.zb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var replace = kotlin_kotlin.$_$.zc;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var extendThrowable = kotlin_kotlin.$_$.ba;
  var charSequenceSubSequence = kotlin_kotlin.$_$.w9;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.b2;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.o1;
  var isCharSequence = kotlin_kotlin.$_$.pa;
  var trim = kotlin_kotlin.$_$.wd;
  var decodeToString = kotlin_kotlin.$_$.ic;
  var setOf = kotlin_kotlin.$_$.e8;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  //endregion
  //region block: pre-declaration
  setMetadataFor($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0, '$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitAtLeastNBytesAvailableForReadCOROUTINE$1, '$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($writeFullyCOROUTINE$9, '$writeFullyCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor($writeFullyCOROUTINE$10, '$writeFullyCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor($readRemainingCOROUTINE$26, '$readRemainingCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor($readRemainingSuspendCOROUTINE$27, '$readRemainingSuspendCOROUTINE$27', classMeta, CoroutineImpl);
  setMetadataFor($readAvailableCOROUTINE$30, '$readAvailableCOROUTINE$30', classMeta, CoroutineImpl);
  setMetadataFor($readAvailableCOROUTINE$33, '$readAvailableCOROUTINE$33', classMeta, CoroutineImpl);
  setMetadataFor($awaitInternalAtLeast1COROUTINE$38, '$awaitInternalAtLeast1COROUTINE$38', classMeta, CoroutineImpl);
  setMetadataFor($awaitSuspendCOROUTINE$39, '$awaitSuspendCOROUTINE$39', classMeta, CoroutineImpl);
  function readRemaining$default(limit, $completion, $super) {
    var tmp;
    if (limit === VOID) {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = limit;
    }
    limit = tmp;
    return $super === VOID ? this.a1f(limit, $completion) : $super.a1f.call(this, limit, $completion);
  }
  setMetadataFor(ByteReadChannel_1, 'ByteReadChannel', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [3, 1, 2, 0, 5]);
  setMetadataFor(ByteChannelSequentialBase, 'ByteChannelSequentialBase', classMeta, VOID, [ByteReadChannel_1], VOID, VOID, VOID, [1, 3, 0, 2, 5]);
  setMetadataFor(ClosedWriteChannelException, 'ClosedWriteChannelException', classMeta, CancellationException);
  setMetadataFor(CloseElement, 'CloseElement', classMeta);
  setMetadataFor(WriterScope, 'WriterScope', interfaceMeta, VOID, [CoroutineScope]);
  setMetadataFor(ChannelJob, 'ChannelJob', classMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(ChannelScope, 'ChannelScope', classMeta, VOID, [CoroutineScope, WriterScope]);
  setMetadataFor(launchChannel$slambda, 'launchChannel$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Buffer, 'Buffer', classMeta);
  setMetadataFor(InsufficientSpaceException, 'InsufficientSpaceException', classMeta, Exception, VOID, InsufficientSpaceException);
  setMetadataFor(DefaultPool, 'DefaultPool', classMeta);
  setMetadataFor(DefaultBufferPool, 'DefaultBufferPool', classMeta, DefaultPool, VOID, DefaultBufferPool);
  setMetadataFor(Output, 'Output', classMeta);
  setMetadataFor(BytePacketBuilder, 'BytePacketBuilder', classMeta, Output, VOID, BytePacketBuilder);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Input, 'Input', classMeta);
  setMetadataFor(ByteReadPacket, 'ByteReadPacket', classMeta, Input);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ChunkBuffer$Companion$EmptyPool$1, VOID, classMeta);
  setMetadataFor(NoPoolImpl, 'NoPoolImpl', classMeta);
  setMetadataFor(ChunkBuffer$Companion$NoPool$1, VOID, classMeta, NoPoolImpl);
  setMetadataFor(ChunkBuffer$Companion$NoPoolManuallyManaged$1, VOID, classMeta, NoPoolImpl);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ChunkBuffer, 'ChunkBuffer', classMeta, Buffer);
  setMetadataFor(MalformedUTF8InputException, 'MalformedUTF8InputException', classMeta, Exception);
  setMetadataFor($sleepCOROUTINE$52, '$sleepCOROUTINE$52', classMeta, CoroutineImpl);
  setMetadataFor($trySuspendCOROUTINE$53, '$trySuspendCOROUTINE$53', classMeta, CoroutineImpl);
  setMetadataFor(AwaitingSlot, 'AwaitingSlot', classMeta, VOID, VOID, AwaitingSlot, VOID, VOID, [1]);
  setMetadataFor($copyToSequentialImplCOROUTINE$54, '$copyToSequentialImplCOROUTINE$54', classMeta, CoroutineImpl);
  setMetadataFor($copyToTailCOROUTINE$55, '$copyToTailCOROUTINE$55', classMeta, CoroutineImpl);
  setMetadataFor(ByteArrayPool$1, VOID, classMeta, DefaultPool);
  setMetadataFor(ByteChannelJS, 'ByteChannelJS', classMeta, ByteChannelSequentialBase, VOID, VOID, VOID, VOID, [3, 1, 0, 2, 5]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(DefaultAllocator, 'DefaultAllocator', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Memory, 'Memory', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Charset, 'Charset', classMeta);
  setMetadataFor(Charsets, 'Charsets', objectMeta);
  setMetadataFor(MalformedInputException, 'MalformedInputException', classMeta, Error);
  setMetadataFor(CharsetDecoder, 'CharsetDecoder', classMeta);
  setMetadataFor(CharsetEncoder, 'CharsetEncoder', classMeta);
  setMetadataFor(CharsetImpl, 'CharsetImpl', classMeta, Charset);
  setMetadataFor(CharsetEncoderImpl, 'CharsetEncoderImpl', classMeta, CharsetEncoder);
  setMetadataFor(CharsetDecoderImpl, 'CharsetDecoderImpl', classMeta, CharsetDecoder);
  setMetadataFor(DecodeBufferResult, 'DecodeBufferResult', classMeta);
  setMetadataFor(IOException, 'IOException', classMeta, Exception);
  setMetadataFor(EOFException, 'EOFException', classMeta, IOException);
  setMetadataFor(toKtor$1, VOID, classMeta);
  setMetadataFor(TextDecoderFallback, 'TextDecoderFallback', classMeta);
  //endregion
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.c18_1.kotlinx$atomicfu$value;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k18_1) == null);
  }
  function flushImpl($this) {
    if ($this.d18_1.v18()) {
      $this.h18_1.m18();
      return false;
    }
    flushWrittenBytes($this);
    $this.h18_1.m18();
    return true;
  }
  function flushWrittenBytes($this) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.i18_1;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.flushWrittenBytes.<anonymous>' call
    var size = $this.d18_1.n();
    var buffer = ensureNotNull($this.d18_1.e19());
    $this.j18_1.f19(buffer);
    $this.a18_1.atomicfu$addAndGet(size);
  }
  function ensureNotClosed($this) {
    if ($this.h19()) {
      var tmp0_elvis_lhs = $this.g19();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.g19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.g19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      closeable.iq();
      throw tmp0_safe_receiver;
    }
  }
  function readRemainingSuspend($this, builder, limit, $completion) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function addBytesRead($this, count) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(count >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message = "Can't read negative amount of bytes: " + count;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    $this.b18_1.atomicfu$getAndAdd(-count | 0);
    $this.y17_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    $this.a18_1.atomicfu$getAndAdd(-count | 0);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.b18_1.kotlinx$atomicfu$value >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message_0 = 'Readable bytes count is negative: ' + $this.u19() + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.u19() >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message_1 = 'Readable bytes count is negative: ' + $this.u19() + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function addBytesWritten($this, count) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(count >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      var message = "Can't write negative amount of bytes: " + count;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.plusAssign' call
    $this.b18_1.atomicfu$getAndAdd(count);
    $this.z17_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.b18_1.kotlinx$atomicfu$value >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      var message_0 = 'Readable bytes count is negative: ' + $this.b18_1.kotlinx$atomicfu$value + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.v19() < $count ? !this$0.h19() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.u19() < $count ? !this$0.w19() : false;
    };
  }
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1a_1 = _this__u8e3s4;
    this.g1a_1 = count;
  }
  protoOf($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0).bc = function () {
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
            if (!(this.f1a_1.v19() < this.g1a_1 ? !this.f1a_1.h19() : false)) {
              this.pb_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.f1a_1)) {
              this.pb_1 = 2;
              suspendResult = this.f1a_1.h18_1.h1a(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.f1a_1, this.g1a_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pb_1 = 3;
              continue $sm;
            }

          case 2:
            this.pb_1 = 3;
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
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1a_1 = _this__u8e3s4;
    this.r1a_1 = count;
  }
  protoOf($awaitAtLeastNBytesAvailableForReadCOROUTINE$1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            this.pb_1 = 1;
            continue $sm;
          case 1:
            if (!(this.q1a_1.u19() < this.r1a_1 ? !this.q1a_1.w19() : false)) {
              this.pb_1 = 4;
              continue $sm;
            }

            this.pb_1 = 2;
            suspendResult = this.q1a_1.h18_1.h1a(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.q1a_1, this.r1a_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.pb_1 = 1;
            continue $sm;
          case 3:
            throw this.sb_1;
          case 4:
            return Unit_instance;
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
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1b_1 = _this__u8e3s4;
    this.b1b_1 = src;
  }
  protoOf($writeFullyCOROUTINE$9).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            suspendResult = this.a1b_1.c1b(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = this.b1b_1;
            var count = this_0.f1b_1 - this_0.e1b_1 | 0;
            writeFully_2(this.a1b_1.d18_1, this.b1b_1);
            this.a1b_1.j1b(count);
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
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1b_1 = _this__u8e3s4;
    this.t1b_1 = src;
    this.u1b_1 = offset;
    this.v1b_1 = length;
  }
  protoOf($writeFullyCOROUTINE$10).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 4;
            this.w1b_1 = this.u1b_1;
            this.x1b_1 = this.u1b_1 + this.v1b_1 | 0;
            this.pb_1 = 1;
            continue $sm;
          case 1:
            if (!(this.w1b_1 < this.x1b_1)) {
              this.pb_1 = 3;
              continue $sm;
            }

            this.pb_1 = 2;
            suspendResult = this.s1b_1.c1b(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var a = this.s1b_1.v19();
            var b = this.x1b_1 - this.w1b_1 | 0;
            var bytesCount = Math.min(a, b);
            writeFully_3(this.s1b_1.d18_1, this.t1b_1, this.w1b_1, bytesCount);
            this.w1b_1 = this.w1b_1 + bytesCount | 0;
            this.s1b_1.j1b(bytesCount);
            this.pb_1 = 1;
            continue $sm;
          case 3:
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
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1c_1 = _this__u8e3s4;
    this.h1c_1 = limit;
  }
  protoOf($readRemainingCOROUTINE$26).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            ensureNotFailed(this.g1c_1);
            this.i1c_1 = new BytePacketBuilder();
            var tmp_0 = this;
            var a = this.h1c_1;
            var b = this.g1c_1.e18_1.t1c();
            tmp_0.j1c_1 = a.p9(b) <= 0 ? a : b;
            this.i1c_1.u1c(this.g1c_1.e18_1, this.j1c_1);
            this.g1c_1.v1c(this.j1c_1.w9());
            var tmp_1 = this;
            var this_0 = this.h1c_1;
            var other = this.i1c_1.n();
            tmp_1.k1c_1 = this_0.ua(toLong(other));
            if (this.k1c_1.equals(new Long(0, 0)) ? true : this.g1c_1.w19()) {
              var tmp_2 = this;
              ensureNotFailed_0(this.g1c_1, this.i1c_1);
              tmp_2.l1c_1 = this.i1c_1.w1c();
              this.pb_1 = 2;
              continue $sm;
            } else {
              this.pb_1 = 1;
              suspendResult = readRemainingSuspend(this.g1c_1, this.i1c_1, this.h1c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l1c_1 = suspendResult;
            this.pb_1 = 2;
            continue $sm;
          case 2:
            return this.l1c_1;
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
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q19_1 = _this__u8e3s4;
    this.r19_1 = builder;
    this.s19_1 = limit;
  }
  protoOf($readRemainingSuspendCOROUTINE$27).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 5;
            this.pb_1 = 1;
            continue $sm;
          case 1:
            if (!(toLong(this.r19_1.n()).p9(this.s19_1) < 0)) {
              this.pb_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var this_0 = this.s19_1;
            var other = this.r19_1.n();
            var a = this_0.ua(toLong(other));
            var b = this.q19_1.e18_1.t1c();
            tmp_0.t19_1 = a.p9(b) <= 0 ? a : b;
            this.r19_1.u1c(this.q19_1.e18_1, this.t19_1);
            this.q19_1.v1c(this.t19_1.w9());
            ensureNotFailed_0(this.q19_1, this.r19_1);
            if (this.q19_1.w19() ? true : this.r19_1.n() === this.s19_1.w9()) {
              this.pb_1 = 4;
              continue $sm;
            } else {
              this.pb_1 = 2;
              continue $sm;
            }

          case 2:
            this.pb_1 = 3;
            suspendResult = this.q19_1.x1c(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.pb_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.q19_1, this.r19_1);
            return this.r19_1.w1c();
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
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1d_1 = _this__u8e3s4;
    this.h1d_1 = dst;
  }
  protoOf($readAvailableCOROUTINE$30).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            var tmp0_safe_receiver = this.g1d_1.g19();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            if (this.g1d_1.h19() ? this.g1d_1.u19() === 0 : false)
              return -1;
            var this_0 = this.h1d_1;
            if ((this_0.h1b_1 - this_0.f1b_1 | 0) === 0)
              return 0;
            if (this.g1d_1.u19() === 0) {
              this.pb_1 = 1;
              suspendResult = this.g1d_1.x1c(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pb_1 = 2;
              continue $sm;
            }

          case 1:
            this.pb_1 = 2;
            continue $sm;
          case 2:
            if (!this.g1d_1.e18_1.j1d()) {
              this.g1d_1.i1d();
            }

            var this_1 = this.h1d_1;
            var a = toLong(this_1.h1b_1 - this_1.f1b_1 | 0);
            var b = this.g1d_1.e18_1.t1c();
            var size = (a.p9(b) <= 0 ? a : b).w9();
            readFully_2(this.g1d_1.e18_1, this.h1d_1, size);
            this.g1d_1.v1c(size);
            return size;
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
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1d_1 = _this__u8e3s4;
    this.t1d_1 = dst;
    this.u1d_1 = offset;
    this.v1d_1 = length;
  }
  protoOf($readAvailableCOROUTINE$33).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            var tmp0_safe_receiver = this.s1d_1.g19();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            if (this.s1d_1.h19() ? this.s1d_1.u19() === 0 : false)
              return -1;
            if (this.v1d_1 === 0)
              return 0;
            if (this.s1d_1.u19() === 0) {
              this.pb_1 = 1;
              suspendResult = this.s1d_1.x1c(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pb_1 = 2;
              continue $sm;
            }

          case 1:
            this.pb_1 = 2;
            continue $sm;
          case 2:
            if (!this.s1d_1.e18_1.j1d()) {
              this.s1d_1.i1d();
            }

            var a = toLong(this.v1d_1);
            var b = this.s1d_1.e18_1.t1c();
            var size = (a.p9(b) <= 0 ? a : b).w9();
            readFully_1(this.s1d_1.e18_1, this.t1d_1, this.u1d_1, size);
            this.s1d_1.v1c(size);
            return size;
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
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1e_1 = _this__u8e3s4;
  }
  protoOf($awaitInternalAtLeast1COROUTINE$38).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            if (!this.e1e_1.e18_1.g1e()) {
              var tmp_0 = this;
              tmp_0.f1e_1 = true;
              this.pb_1 = 3;
              continue $sm;
            } else {
              this.pb_1 = 1;
              suspendResult = this.e1e_1.x1c(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.f1e_1 = suspendResult;
            this.pb_1 = 3;
            continue $sm;
          case 2:
            throw this.sb_1;
          case 3:
            return this.f1e_1;
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
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1e_1 = _this__u8e3s4;
    this.q1e_1 = atLeast;
  }
  protoOf($awaitSuspendCOROUTINE$39).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            if (!(this.q1e_1 >= 0)) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.pb_1 = 1;
            suspendResult = this.p1e_1.r1e(this.q1e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p1e_1.i1d();
            var tmp0_safe_receiver = this.p1e_1.g19();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return !this.p1e_1.w19() ? this.p1e_1.u19() >= this.q1e_1 : false;
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
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    pool = pool === VOID ? Companion_getInstance_4().w1e() : pool;
    this.w17_1 = autoFlush;
    this.x17_1 = atomic$ref$1(Companion_getInstance_4().t1e_1);
    this.y17_1 = atomic$long$1(new Long(0, 0));
    this.z17_1 = atomic$long$1(new Long(0, 0));
    this.a18_1 = atomic$int$1(0);
    this.b18_1 = atomic$int$1(0);
    this.c18_1 = atomic$ref$1(null);
    this.d18_1 = new BytePacketBuilder(pool);
    this.e18_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.f18_1 = atomic$int$1(0);
    this.g18_1 = atomic$ref$1(Companion_getInstance_4().t1e_1);
    this.h18_1 = new AwaitingSlot();
    this.i18_1 = new Object();
    this.j18_1 = new BytePacketBuilder();
    var count = remainingAll(initial).w9();
    this.j1b(count);
    this.a18_1.atomicfu$addAndGet(count);
  }
  protoOf(ByteChannelSequentialBase).x1e = function () {
    return this.w17_1;
  };
  protoOf(ByteChannelSequentialBase).h19 = function () {
    return !(this.c18_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannelSequentialBase).u19 = function () {
    return this.a18_1.kotlinx$atomicfu$value;
  };
  protoOf(ByteChannelSequentialBase).v19 = function () {
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = 4088 - this.b18_1.kotlinx$atomicfu$value | 0;
    return Math.max(0, b);
  };
  protoOf(ByteChannelSequentialBase).w19 = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.h19() ? this.b18_1.kotlinx$atomicfu$value === 0 : false;
  };
  protoOf(ByteChannelSequentialBase).g19 = function () {
    var tmp0_safe_receiver = this.c18_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k18_1;
  };
  protoOf(ByteChannelSequentialBase).c1b = function (count, $completion) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).r1e = function (count, $completion) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).p6 = function () {
    flushImpl(this);
  };
  protoOf(ByteChannelSequentialBase).i1d = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i18_1;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.prepareFlushedBytes.<anonymous>' call
    unsafeAppend(this.e18_1, this.j18_1);
  };
  protoOf(ByteChannelSequentialBase).y1e = function (src, $completion) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).z1e = function (src, offset, length, $completion) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).v1c = function (count) {
    addBytesRead(this, count);
    this.h18_1.m18();
  };
  protoOf(ByteChannelSequentialBase).a1f = function (limit, $completion) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).c1f = function (dst, $completion) {
    return this.d1f(dst instanceof Buffer ? dst : THROW_CCE(), $completion);
  };
  protoOf(ByteChannelSequentialBase).d1f = function (dst, $completion) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).e1f = function (dst, offset, length, $completion) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).f1f = function ($completion) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).x1c = function (atLeast, $completion) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(ByteChannelSequentialBase).dn = function (cause) {
    if (!(this.g19() == null) ? true : this.h19()) {
      return false;
    }
    return this.lz(cause == null ? CancellationException_init_$Create$('Channel cancelled') : cause);
  };
  protoOf(ByteChannelSequentialBase).lz = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.c18_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.e18_1.iq();
      this.d18_1.iq();
      this.j18_1.iq();
    } else {
      this.p6();
      this.d18_1.iq();
    }
    this.h18_1.g1f(cause);
    return true;
  };
  protoOf(ByteChannelSequentialBase).h1f = function (dst, limit) {
    var size = this.e18_1.t1c();
    var tmp;
    if (size.p9(limit) <= 0) {
      dst.d18_1.i1f(this.e18_1);
      dst.j1b(size.w9());
      this.v1c(size.w9());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  protoOf(ByteChannelSequentialBase).j1b = function (count) {
    addBytesWritten(this, count);
    if (this.h19()) {
      this.d18_1.iq();
      ensureNotClosed(this);
    }
    if (this.x1e() ? true : this.v19() === 0) {
      this.p6();
    }
  };
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.dn(null);
  }
  function readAvailable(_this__u8e3s4, dst, $completion) {
    return _this__u8e3s4.e1f(dst, 0, dst.length, $completion);
  }
  function close(_this__u8e3s4) {
    return _this__u8e3s4.lz(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  function writeFully(_this__u8e3s4, src, $completion) {
    return _this__u8e3s4.z1e(src, 0, src.length, $completion);
  }
  function get_CLOSED_SUCCESS() {
    _init_properties_CloseElement_kt__5e72ik();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.k18_1 = cause;
  }
  var properties_initialized_CloseElement_kt_clkism;
  function _init_properties_CloseElement_kt__5e72ik() {
    if (!properties_initialized_CloseElement_kt_clkism) {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel(autoFlush), true, block);
  }
  function WriterScope() {
  }
  function ChannelJob(delegate, channel) {
    this.k1f_1 = delegate;
    this.l1f_1 = channel;
  }
  protoOf(ChannelJob).yv = function () {
    return this.l1f_1;
  };
  protoOf(ChannelJob).xj = function () {
    return this.k1f_1.xj();
  };
  protoOf(ChannelJob).p2 = function () {
    return this.k1f_1.p2();
  };
  protoOf(ChannelJob).qk = function () {
    return this.k1f_1.qk();
  };
  protoOf(ChannelJob).kl = function (child) {
    return this.k1f_1.kl(child);
  };
  protoOf(ChannelJob).dl = function (cause) {
    this.k1f_1.dl(cause);
  };
  protoOf(ChannelJob).ye = function (initial, operation) {
    return this.k1f_1.ye(initial, operation);
  };
  protoOf(ChannelJob).wb = function (key) {
    return this.k1f_1.wb(key);
  };
  protoOf(ChannelJob).vk = function () {
    return this.k1f_1.vk();
  };
  protoOf(ChannelJob).zk = function (onCancelling, invokeImmediately, handler) {
    return this.k1f_1.zk(onCancelling, invokeImmediately, handler);
  };
  protoOf(ChannelJob).yk = function (handler) {
    return this.k1f_1.yk(handler);
  };
  protoOf(ChannelJob).xe = function (key) {
    return this.k1f_1.xe(key);
  };
  protoOf(ChannelJob).ze = function (context) {
    return this.k1f_1.ze(context);
  };
  protoOf(ChannelJob).tk = function () {
    return this.k1f_1.tk();
  };
  protoOf(ChannelJob).toString = function () {
    return 'ChannelJob[' + this.k1f_1 + ']';
  };
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.wj().wb(Key_getInstance());
    var job = launch(_this__u8e3s4, context, VOID, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null));
    job.yk(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ChannelScope(delegate, channel) {
    this.m1f_1 = channel;
    this.n1f_1 = delegate;
  }
  protoOf(ChannelScope).yv = function () {
    return this.m1f_1;
  };
  protoOf(ChannelScope).wj = function () {
    return this.n1f_1.wj();
  };
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.w1f_1 = $attachJob;
    this.x1f_1 = $channel;
    this.y1f_1 = $block;
    this.z1f_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchChannel$slambda).c1g = function ($this$launch, $completion) {
    var tmp = this.d1g($this$launch, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(launchChannel$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchChannel$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            if (this.w1f_1) {
              this.x1f_1.j1f(ensureNotNull(this.a1g_1.wj().wb(Key_instance)));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.a1g_1, this.x1f_1);
            tmp_0.b1g_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.qb_1 = 2;
            this.pb_1 = 1;
            suspendResult = this.y1f_1(this.b1g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.qb_1 = 3;
            this.pb_1 = 4;
            continue $sm;
          case 2:
            this.qb_1 = 3;
            var tmp_2 = this.sb_1;
            if (tmp_2 instanceof Error) {
              var cause = this.sb_1;
              if (!equals(this.z1f_1, Dispatchers_getInstance().iv_1) ? !(this.z1f_1 == null) : false) {
                throw cause;
              }
              this.x1f_1.dn(cause);
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
  protoOf(launchChannel$slambda).d1g = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.w1f_1, this.x1f_1, this.y1f_1, this.z1f_1, completion);
    i.a1g_1 = $this$launch;
    return i;
  };
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.c1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.lz(cause);
      return Unit_instance;
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? IntCompanionObject_instance.MAX_VALUE : max;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(max);
    var b = sizeEstimate(input);
    var capacity = (a.p9(b) <= 0 ? a : b).w9();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.charsets.encodeToImpl.<anonymous>' call
        var view = tail;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var before = view.h1b_1 - view.f1b_1 | 0;
        var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, view);
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(rc >= 0)) {
          // Inline function 'kotlin.check.<anonymous>' call
          var message = 'Check failed.';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        start = start + rc | 0;
        var tmp = bytesWritten;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        bytesWritten = tmp + (before - (view.h1b_1 - view.f1b_1 | 0) | 0) | 0;
        size = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(destination, size, tail);
      }
    }finally {
      destination.e1g();
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.t1c();
    } else {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = _this__u8e3s4.t1c();
      var b = new Long(16, 0);
      tmp = a.p9(b) >= 0 ? a : b;
    }
    return tmp;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(dst, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.charsets.encodeCompleteImpl.<anonymous>' call
        var view = tail;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var before = view.h1b_1 - view.f1b_1 | 0;
        if (encodeComplete(_this__u8e3s4, view)) {
          size = 0;
        } else {
          size = size + 1 | 0;
        }
        var tmp = bytesWritten;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        bytesWritten = tmp + (before - (view.h1b_1 - view.f1b_1 | 0) | 0) | 0;
        if (!(size > 0))
          break $l$loop;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }finally {
      dst.e1g();
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
        encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
        tmp$ret$0 = builder.w1c();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.iq();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  function Companion() {
    this.f1g_1 = 8;
  }
  protoOf(Companion).g1g = function () {
    return Companion_getInstance_4().t1e_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    return Companion_instance;
  }
  function Buffer(memory) {
    this.d1b_1 = memory;
    this.e1b_1 = 0;
    this.f1b_1 = 0;
    this.g1b_1 = 0;
    var tmp = this;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    tmp.h1b_1 = this.d1b_1.h1g_1.byteLength;
    var tmp_0 = this;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    tmp_0.i1b_1 = this.d1b_1.h1g_1.byteLength;
  }
  protoOf(Buffer).i1g = function (count) {
    if (count === 0)
      return Unit_instance;
    var newReadPosition = this.e1b_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.f1b_1) {
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var tmp$ret$1 = this.f1b_1 - this.e1b_1 | 0;
      discardFailed(count, tmp$ret$1);
    }
    this.e1b_1 = newReadPosition;
  };
  protoOf(Buffer).j1g = function (count) {
    var newWritePosition = this.f1b_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.h1b_1) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp$ret$0 = this.h1b_1 - this.f1b_1 | 0;
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.f1b_1 = newWritePosition;
  };
  protoOf(Buffer).k1g = function (position) {
    var limit = this.h1b_1;
    if (position < this.f1b_1) {
      var tmp = position - this.f1b_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp$ret$0 = this.h1b_1 - this.f1b_1 | 0;
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.f1b_1 = position;
        return false;
      }
      var tmp_0 = position - this.f1b_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp$ret$1 = this.h1b_1 - this.f1b_1 | 0;
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.f1b_1 = position;
    return true;
  };
  protoOf(Buffer).l1g = function (position) {
    if (position < 0 ? true : position > this.f1b_1) {
      var tmp = position - this.e1b_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var tmp$ret$0 = this.f1b_1 - this.e1b_1 | 0;
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.e1b_1 === position)) {
      this.e1b_1 = position;
    }
  };
  protoOf(Buffer).m1g = function (count) {
    var newReadPosition = this.e1b_1 - count | 0;
    if (newReadPosition < this.g1b_1) {
      rewindFailed(count, this.e1b_1 - this.g1b_1 | 0);
    }
    this.e1b_1 = newReadPosition;
  };
  protoOf(Buffer).n1g = function (startGap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startGap >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveStartGap.<anonymous>' call
      var message = "startGap shouldn't be negative: " + startGap;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.e1b_1 >= startGap) {
      this.g1b_1 = startGap;
      return Unit_instance;
    }
    if (this.e1b_1 === this.f1b_1) {
      if (startGap > this.h1b_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.f1b_1 = startGap;
      this.e1b_1 = startGap;
      this.g1b_1 = startGap;
      return Unit_instance;
    }
    startGapReservationFailed(this, startGap);
  };
  protoOf(Buffer).o1g = function (endGap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(endGap >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveEndGap.<anonymous>' call
      var message = "endGap shouldn't be negative: " + endGap;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newLimit = this.i1b_1 - endGap | 0;
    if (newLimit >= this.f1b_1) {
      this.h1b_1 = newLimit;
      return Unit_instance;
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.g1b_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.e1b_1 === this.f1b_1) {
      this.h1b_1 = newLimit;
      this.e1b_1 = newLimit;
      this.f1b_1 = newLimit;
      return Unit_instance;
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  protoOf(Buffer).p1g = function () {
    this.g1b_1 = 0;
    this.e1b_1 = 0;
    var capacity = this.i1b_1;
    this.f1b_1 = capacity;
  };
  protoOf(Buffer).q1g = function () {
    this.r1g(this.i1b_1 - this.g1b_1 | 0);
  };
  protoOf(Buffer).r1g = function (limit) {
    var startGap = this.g1b_1;
    this.e1b_1 = startGap;
    this.f1b_1 = startGap;
    this.h1b_1 = limit;
  };
  protoOf(Buffer).s1g = function () {
    this.t1g(0);
    this.u1g();
  };
  protoOf(Buffer).u1g = function () {
    this.h1b_1 = this.i1b_1;
  };
  protoOf(Buffer).t1g = function (newReadPosition) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newReadPosition >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      var message = "newReadPosition shouldn't be negative: " + newReadPosition;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newReadPosition <= this.e1b_1)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      var message_0 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.e1b_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.e1b_1 = newReadPosition;
    if (this.g1b_1 > newReadPosition) {
      this.g1b_1 = newReadPosition;
    }
  };
  protoOf(Buffer).v1g = function (copy) {
    copy.h1b_1 = this.h1b_1;
    copy.g1b_1 = this.g1b_1;
    copy.e1b_1 = this.e1b_1;
    copy.f1b_1 = this.f1b_1;
  };
  protoOf(Buffer).w1g = function () {
    var readPosition = this.e1b_1;
    if (readPosition === this.f1b_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.e1b_1 = readPosition + 1 | 0;
    // Inline function 'io.ktor.utils.io.bits.get' call
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    return this.d1b_1.h1g_1.getInt8(readPosition);
  };
  protoOf(Buffer).x1g = function (value) {
    var writePosition = this.f1b_1;
    if (writePosition === this.h1b_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    // Inline function 'io.ktor.utils.io.bits.set' call
    this.d1b_1.h1g_1.setInt8(writePosition, value);
    this.f1b_1 = writePosition + 1 | 0;
  };
  protoOf(Buffer).y1g = function () {
    this.s1g();
    this.q1g();
  };
  protoOf(Buffer).toString = function () {
    var tmp = 'Buffer[0x' + toString_0(hashCode(this), 16) + ']';
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp_0 = this.f1b_1 - this.e1b_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var tmp_1 = this.h1b_1 - this.f1b_1 | 0;
    var tmp_2 = this.g1b_1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    return tmp + ('(' + tmp_0 + ' used, ' + tmp_1 + ' free, ' + (tmp_2 + (this.i1b_1 - this.h1b_1 | 0) | 0) + ' reserved of ' + this.i1b_1 + ')');
  };
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.i1b_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.i1b_1);
    }
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    var tmp$ret$0 = _this__u8e3s4.i1b_1 - _this__u8e3s4.h1b_1 | 0;
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp$ret$0 = _this__u8e3s4.f1b_1 - _this__u8e3s4.e1b_1 | 0;
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.e1b_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.i1b_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.g1b_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp$ret$0 = _this__u8e3s4.f1b_1 - _this__u8e3s4.e1b_1 | 0;
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.e1b_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, objectCreate(protoOf(InsufficientSpaceException)));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    message = message === VOID ? 'Not enough free space' : message;
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.t1g(_this__u8e3s4.e1b_1 - size | 0);
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var a = other.f1b_1 - other.e1b_1 | 0;
    var size = Math.min(a, maxSize);
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    if ((_this__u8e3s4.h1b_1 - _this__u8e3s4.f1b_1 | 0) <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>' call
    var dst = _this__u8e3s4.d1b_1;
    var dstOffset = _this__u8e3s4.f1b_1;
    _this__u8e3s4.h1b_1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>.<anonymous>' call
    var src = other.d1b_1;
    var srcOffset = other.e1b_1;
    other.f1b_1;
    src.z1g(dst, srcOffset, size, dstOffset);
    var rc = size;
    other.i1g(rc);
    var rc_0 = rc;
    _this__u8e3s4.j1g(rc_0);
    return rc_0;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var tmp = _this__u8e3s4.h1b_1 - _this__u8e3s4.f1b_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    if ((tmp + (_this__u8e3s4.i1b_1 - _this__u8e3s4.h1b_1 | 0) | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.f1b_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.h1b_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.u1g();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = other.f1b_1 - other.e1b_1 | 0;
    var readPosition = _this__u8e3s4.e1b_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.d1b_1.z1g(_this__u8e3s4.d1b_1, other.e1b_1, size, newReadPosition);
    other.i1g(size);
    _this__u8e3s4.t1g(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    _init_properties_BufferFactory_kt__uj6b48();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    bufferSize = bufferSize === VOID ? 4096 : bufferSize;
    capacity = capacity === VOID ? 1000 : capacity;
    allocator = allocator === VOID ? DefaultAllocator_instance : allocator;
    DefaultPool.call(this, capacity);
    this.d1h_1 = bufferSize;
    this.e1h_1 = allocator;
  }
  protoOf(DefaultBufferPool).f1h = function () {
    return new ChunkBuffer(this.e1h_1.g1h(this.d1h_1), null, this);
  };
  protoOf(DefaultBufferPool).h1h = function (instance) {
    this.e1h_1.i1h(instance.d1b_1);
    protoOf(DefaultPool).m1h.call(this, instance);
    instance.x1h();
  };
  protoOf(DefaultBufferPool).m1h = function (instance) {
    return this.h1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(DefaultBufferPool).y1h = function (instance) {
    protoOf(DefaultPool).z1h.call(this, instance);
    // Inline function 'kotlin.check' call
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var this_0 = instance.d1b_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!toLong(this_0.h1g_1.byteLength).equals(toLong(this.d1h_1))) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var this_1 = instance.d1b_1;
      var tmp$ret$1 = toLong(this_1.h1g_1.byteLength);
      var message = 'Buffer size mismatch. Expected: ' + this.d1h_1 + ', actual: ' + tmp$ret$1.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(instance === Companion_getInstance_4().t1e_1)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_0 = "ChunkBuffer.Empty couldn't be recycled";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(instance === Companion_instance.g1g())) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_1 = "Empty instance couldn't be recycled";
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.a1i() === 0)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_2 = 'Unable to clear buffer: it is still in use.';
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.cx() == null)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_3 = "Recycled instance shouldn't be a part of a chain.";
      throw IllegalStateException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.w1h_1 == null)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_4 = "Recycled instance shouldn't be a view or another buffer.";
      throw IllegalStateException_init_$Create$(toString(message_4));
    }
  };
  protoOf(DefaultBufferPool).z1h = function (instance) {
    return this.y1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(DefaultBufferPool).b1i = function (instance) {
    // Inline function 'kotlin.apply' call
    var this_0 = protoOf(DefaultPool).c1i.call(this, instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.clearInstance.<anonymous>' call
    this_0.d1i();
    this_0.y1g();
    return this_0;
  };
  protoOf(DefaultBufferPool).c1i = function (instance) {
    return this.b1i(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function _init_properties_BufferFactory_kt__uj6b48() {
    if (!properties_initialized_BufferFactory_kt_q9tgbq) {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = new DefaultBufferPool();
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? source.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    var name = 'byte array';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var memory = _this__u8e3s4.d1b_1;
    var start = _this__u8e3s4.f1b_1;
    var writeRemaining = _this__u8e3s4.h1b_1 - start | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$(name, length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeByteArray' call
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    of(Companion_getInstance_6(), source, offset, length).z1g(memory, 0, length, start);
    var rc = length;
    _this__u8e3s4.j1g(rc);
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var message = "length shouldn't be negative: " + length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (src.f1b_1 - src.e1b_1 | 0))) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var message_0 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + (src.f1b_1 - src.e1b_1 | 0);
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (_this__u8e3s4.h1b_1 - _this__u8e3s4.f1b_1 | 0))) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var message_1 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + (_this__u8e3s4.h1b_1 - _this__u8e3s4.f1b_1 | 0);
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    var name = 'buffer readable content';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var memory = _this__u8e3s4.d1b_1;
    var start = _this__u8e3s4.f1b_1;
    var writeRemaining = _this__u8e3s4.h1b_1 - start | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$(name, length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    src.d1b_1.z1g(memory, src.e1b_1, length, start);
    src.i1g(length);
    var rc = length;
    _this__u8e3s4.j1g(rc);
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? destination.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    var name = 'byte array';
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var memory = _this__u8e3s4.d1b_1;
    var start = _this__u8e3s4.e1b_1;
    if ((_this__u8e3s4.f1b_1 - start | 0) < length) {
      throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + length + '.');
    }
    copyTo_1(memory, destination, start, length, offset);
    value = Unit_instance;
    var rc = length;
    _this__u8e3s4.i1g(rc);
  }
  function readFully_0(_this__u8e3s4, dst, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = dst.h1b_1 - dst.f1b_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (dst.h1b_1 - dst.f1b_1 | 0))) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'io.ktor.utils.io.core.readExact' call
    var name = 'buffer content';
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var memory = _this__u8e3s4.d1b_1;
    var start = _this__u8e3s4.e1b_1;
    if ((_this__u8e3s4.f1b_1 - start | 0) < length) {
      throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + length + '.');
    }
    memory.z1g(dst.d1b_1, start, length, dst.f1b_1);
    dst.j1g(length);
    value = Unit_instance;
    var rc = length;
    _this__u8e3s4.i1g(rc);
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    var name = 'short integer';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var memory = _this__u8e3s4.d1b_1;
    var start = _this__u8e3s4.f1b_1;
    var writeRemaining = _this__u8e3s4.h1b_1 - start | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_$Create$(name, 2, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
    memory.h1g_1.setInt16(start, value, false);
    var rc = 2;
    _this__u8e3s4.j1g(rc);
    return Unit_instance;
  }
  function readShort(_this__u8e3s4) {
    // Inline function 'io.ktor.utils.io.core.readExact' call
    var name = 'short integer';
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var memory = _this__u8e3s4.d1b_1;
    var start = _this__u8e3s4.e1b_1;
    if ((_this__u8e3s4.f1b_1 - start | 0) < 2) {
      throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + 2 + '.');
    }
    // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
    value = memory.h1g_1.getInt16(start, false);
    var rc = 2;
    _this__u8e3s4.i1g(rc);
    return value;
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp0_elvis_lhs = $this.cx();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        $this = next;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.g1i();
      current.h1i(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var this_0 = $this;
        var tmp$ret$0 = this_0.f1b_1 - this_0.e1b_1 | 0;
        var rem = toLong(tmp$ret$0).ta(n_0);
        var tmp0_elvis_lhs = $this.cx();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return rem;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        $this = next;
        n_0 = rem;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function BytePacketBuilder(pool) {
    pool = pool === VOID ? Companion_getInstance_4().w1e() : pool;
    Output.call(this, pool);
  }
  protoOf(BytePacketBuilder).n = function () {
    return this.i1i();
  };
  protoOf(BytePacketBuilder).v18 = function () {
    return this.i1i() === 0;
  };
  protoOf(BytePacketBuilder).j1i = function () {
  };
  protoOf(BytePacketBuilder).k1i = function (source, offset, length) {
  };
  protoOf(BytePacketBuilder).y5 = function (value) {
    var tmp = protoOf(Output).y5.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).m8 = function (value) {
    var tmp = protoOf(Output).m8.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).n8 = function (value, startIndex, endIndex) {
    var tmp = protoOf(Output).n8.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).w1c = function () {
    var size = this.n();
    var head = this.e19();
    return head == null ? Companion_getInstance_2().l1i_1 : new ByteReadPacket(head, toLong(size), this.w18_1);
  };
  protoOf(BytePacketBuilder).toString = function () {
    return 'BytePacketBuilder[0x' + hashCode(this) + ']';
  };
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, objectCreate(protoOf(ByteReadPacket)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.l1i_1 = new ByteReadPacket(Companion_getInstance_4().t1e_1, new Long(0, 0), Companion_getInstance_4().s1e_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.s1i();
  }
  protoOf(ByteReadPacket).a1j = function () {
    return null;
  };
  protoOf(ByteReadPacket).b1j = function (destination, offset, length) {
    return 0;
  };
  protoOf(ByteReadPacket).toString = function () {
    return 'ByteReadPacket[' + hashCode(this) + ']';
  };
  function _set__head__b4pap2($this, newHead) {
    $this.n1c_1 = newHead;
    $this.o1c_1 = newHead.d1b_1;
    $this.p1c_1 = newHead.e1b_1;
    $this.q1c_1 = newHead.f1b_1;
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.g1e())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>' call
          var buffer = current;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII' call
            // Inline function 'io.ktor.utils.io.core.read' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
            var memory = buffer.d1b_1;
            var start = buffer.e1b_1;
            var endExclusive = buffer.f1b_1;
            var inductionVariable = start;
            if (inductionVariable < endExclusive)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'io.ktor.utils.io.bits.get' call
                // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                var codepoint = memory.h1g_1.getInt8(index) & 255;
                var tmp_0;
                if ((codepoint & 128) === 128) {
                  tmp_0 = true;
                } else {
                  // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>.<anonymous>' call
                  var it = numberToChar(codepoint);
                  var tmp_1;
                  if (copied === max) {
                    tmp_1 = false;
                  } else {
                    out.y5(it);
                    copied = copied + 1 | 0;
                    tmp_1 = true;
                  }
                  tmp_0 = !tmp_1;
                }
                if (tmp_0) {
                  buffer.i1g(index - start | 0);
                  tmp$ret$4 = false;
                  break $l$block_0;
                }
              }
               while (inductionVariable < endExclusive);
            var rc = endExclusive - start | 0;
            buffer.i1g(rc);
            tmp$ret$4 = true;
          }
          var rc_0 = tmp$ret$4;
          var tmp_2;
          if (rc_0) {
            tmp_2 = true;
          } else if (copied === max) {
            tmp_2 = false;
          } else {
            utf8 = true;
            tmp_2 = false;
          }
          if (!tmp_2) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var this_0 = current;
          var before = this_0.f1b_1 - this_0.e1b_1 | 0;
          var after;
          if (before >= size) {
            try {
              // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>' call
              var buffer = current;
              var tmp$ret$5;
              $l$block_3: {
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8' call
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
                var memory = buffer.d1b_1;
                var start = buffer.e1b_1;
                var endExclusive = buffer.f1b_1;
                var inductionVariable = start;
                if (inductionVariable < endExclusive)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    // Inline function 'io.ktor.utils.io.bits.get' call
                    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                    var v = memory.h1g_1.getInt8(index) & 255;
                    if ((v & 128) === 0) {
                      if (!(byteCount === 0)) {
                        malformedByteCount(byteCount);
                      }
                      // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                      var it = numberToChar(v);
                      var tmp_0;
                      if (copied === max) {
                        tmp_0 = false;
                      } else {
                        out.y5(it);
                        copied = copied + 1 | 0;
                        tmp_0 = true;
                      }
                      if (!tmp_0) {
                        buffer.i1g(index - start | 0);
                        tmp$ret$5 = -1;
                        break $l$block_3;
                      }
                    } else if (byteCount === 0) {
                      var mask = 128;
                      value = v;
                      var inductionVariable_0 = 1;
                      if (inductionVariable_0 <= 6)
                        $l$loop: do {
                          var i = inductionVariable_0;
                          inductionVariable_0 = inductionVariable_0 + 1 | 0;
                          if (!((value & mask) === 0)) {
                            value = value & ~mask;
                            mask = mask >> 1;
                            byteCount = byteCount + 1 | 0;
                          } else {
                            break $l$loop;
                          }
                        }
                         while (inductionVariable_0 <= 6);
                      lastByteCount = byteCount;
                      byteCount = byteCount - 1 | 0;
                      if (lastByteCount > (endExclusive - index | 0)) {
                        buffer.i1g(index - start | 0);
                        tmp$ret$5 = lastByteCount;
                        break $l$block_3;
                      }
                    } else {
                      value = value << 6 | v & 127;
                      byteCount = byteCount - 1 | 0;
                      if (byteCount === 0) {
                        if (isBmpCodePoint(value)) {
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var it_0 = numberToChar(value);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.y5(it_0);
                            copied = copied + 1 | 0;
                            tmp_1 = true;
                          }
                          if (!tmp_1) {
                            buffer.i1g(((index - start | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        } else if (!isValidCodePoint(value)) {
                          malformedCodePoint(value);
                        } else {
                          var tmp_2;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var it_1 = numberToChar(highSurrogate(value));
                          var tmp_3;
                          if (copied === max) {
                            tmp_3 = false;
                          } else {
                            out.y5(it_1);
                            copied = copied + 1 | 0;
                            tmp_3 = true;
                          }
                          if (!tmp_3) {
                            tmp_2 = true;
                          } else {
                            // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                            var it_2 = numberToChar(lowSurrogate(value));
                            var tmp_4;
                            if (copied === max) {
                              tmp_4 = false;
                            } else {
                              out.y5(it_2);
                              copied = copied + 1 | 0;
                              tmp_4 = true;
                            }
                            tmp_2 = !tmp_4;
                          }
                          if (tmp_2) {
                            buffer.i1g(((index - start | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        }
                        value = 0;
                      }
                    }
                  }
                   while (inductionVariable < endExclusive);
                var rc = endExclusive - start | 0;
                buffer.i1g(rc);
                tmp$ret$5 = 0;
              }
              var size_0 = tmp$ret$5;
              size = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
            }finally {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var this_1 = current;
              after = this_1.f1b_1 - this_1.e1b_1 | 0;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var this_2 = current;
              var tmp_7 = this_2.i1b_1 - this_2.h1b_1 | 0;
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    $l$1: do {
      $l$0: do {
        if (n_0.equals(new Long(0, 0)))
          return skipped_0;
        var tmp0_elvis_lhs = $this_0.o1j(1);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return skipped_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var current = tmp;
        // Inline function 'kotlin.comparisons.minOf' call
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var tmp$ret$0 = current.f1b_1 - current.e1b_1 | 0;
        var a = toLong(tmp$ret$0);
        var b = n_0;
        var size = (a.p9(b) <= 0 ? a : b).w9();
        current.i1g(size);
        var tmp1_this = $this_0;
        tmp1_this.p1c_1 = tmp1_this.p1c_1 + size | 0;
        afterRead($this_0, current);
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        $this_0 = $this_0;
        n_0 = n_0.ua(toLong(size));
        skipped_0 = skipped_0.ta(toLong(size));
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function discardAsMuchAsPossible_0($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.o1j(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      // Inline function 'kotlin.comparisons.minOf' call
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var a = current.f1b_1 - current.e1b_1 | 0;
      var b = currentCount;
      var size = Math.min(a, b);
      current.i1g(size);
      $this.p1c_1 = $this.p1c_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.s1c_1 ? current.cx() == null : false) {
      $this.p1c_1 = current.e1b_1;
      $this.q1c_1 = current.f1b_1;
      $this.c1j(new Long(0, 0));
      return Unit_instance;
    }
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = current.f1b_1 - current.e1b_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    var b = 8 - (current.i1b_1 - current.h1b_1 | 0) | 0;
    var overrun = Math.min(size, b);
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.m1c_1.e1i();
      new_0.o1g(8);
      new_0.q1j(current.g1i());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.h1i($this.m1c_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.m1c_1.e1i();
    var chunk2 = $this.m1c_1.e1i();
    chunk1.o1g(8);
    chunk2.o1g(8);
    chunk1.q1j(chunk2);
    chunk2.q1j(current.g1i());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.c1j(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$1: do {
      $l$0: do {
        if (current_0 === empty_0) {
          return doFill($this_0);
        }
        var next = current_0.g1i();
        current_0.h1i($this_0.m1c_1);
        var tmp;
        if (next == null) {
          _set__head__b4pap2($this_0, empty_0);
          $this_0.c1j(new Long(0, 0));
          $this_0 = $this_0;
          current_0 = empty_0;
          empty_0 = empty_0;
          continue $l$0;
        } else {
          // Inline function 'io.ktor.utils.io.core.canRead' call
          if (next.f1b_1 > next.e1b_1) {
            _set__head__b4pap2($this_0, next);
            var tmp0_this = $this_0;
            // Inline function 'kotlin.Long.minus' call
            var this_0 = tmp0_this.r1c_1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var other = next.f1b_1 - next.e1b_1 | 0;
            var tmp$ret$2 = this_0.ua(toLong(other));
            tmp0_this.c1j(tmp$ret$2);
            tmp = next;
          } else {
            $this_0 = $this_0;
            current_0 = next;
            empty_0 = empty_0;
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function doFill($this) {
    if ($this.s1c_1)
      return null;
    var chunk = $this.a1j();
    if (chunk == null) {
      $this.s1c_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.n1c_1);
    if (tail === Companion_getInstance_4().t1e_1) {
      _set__head__b4pap2($this, chunk);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!$this.r1c_1.equals(new Long(0, 0))) {
        throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
      }
      var tmp0_safe_receiver = chunk.cx();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.c1j(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.q1j(chunk);
      $this.c1j($this.r1c_1.ta(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$1: do {
      $l$0: do {
        // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
        var this_0 = $this_0;
        var headSize = this_0.q1c_1 - this_0.p1c_1 | 0;
        if (headSize >= minSize_0)
          return head_0;
        var tmp0_elvis_lhs = head_0.cx();
        var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_0) : tmp0_elvis_lhs;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var next = tmp;
        if (headSize === 0) {
          if (!(head_0 === Companion_getInstance_4().t1e_1)) {
            $this_0.p1j(head_0);
          }
          $this_0 = $this_0;
          minSize_0 = minSize_0;
          head_0 = next;
          continue $l$0;
        } else {
          var desiredExtraBytes = minSize_0 - headSize | 0;
          var copied = writeBufferAppend(head_0, next, desiredExtraBytes);
          $this_0.q1c_1 = head_0.f1b_1;
          var tmp2_this = $this_0;
          // Inline function 'kotlin.Long.minus' call
          var tmp$ret$1 = tmp2_this.r1c_1.ua(toLong(copied));
          tmp2_this.c1j(tmp$ret$1);
          // Inline function 'io.ktor.utils.io.core.canRead' call
          if (!(next.f1b_1 > next.e1b_1)) {
            head_0.q1j(null);
            head_0.q1j(next.g1i());
            next.h1i($this_0.m1c_1);
          } else {
            next.n1g(copied);
          }
        }
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var this_1 = head_0;
        if ((this_1.f1b_1 - this_1.e1b_1 | 0) >= minSize_0)
          return head_0;
        var tmp_0 = minSize_0;
        if (tmp_0 > 8) {
          minSizeIsTooBig($this_0, minSize_0);
        }
        $this_0 = $this_0;
        minSize_0 = minSize_0;
        head_0 = head_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function minSizeIsTooBig($this, minSize) {
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    if ((head.f1b_1 - head.e1b_1 | 0) === 0) {
      $this.p1j(head);
    }
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    head = head === VOID ? Companion_getInstance_4().t1e_1 : head;
    remaining = remaining === VOID ? remainingAll(head) : remaining;
    pool = pool === VOID ? Companion_getInstance_4().w1e() : pool;
    this.m1c_1 = pool;
    this.n1c_1 = head;
    this.o1c_1 = head.d1b_1;
    this.p1c_1 = head.e1b_1;
    this.q1c_1 = head.f1b_1;
    var tmp = this;
    // Inline function 'kotlin.Long.minus' call
    var other = this.q1c_1 - this.p1c_1 | 0;
    tmp.r1c_1 = remaining.ua(toLong(other));
    this.s1c_1 = false;
  }
  protoOf(Input).g1e = function () {
    var tmp;
    var tmp_0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    if ((this.q1c_1 - this.p1c_1 | 0) === 0) {
      tmp_0 = this.r1c_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.s1c_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Input).m1i = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.n1c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.<get-head>.<anonymous>' call
    this_0.l1g(this.p1c_1);
    return this_0;
  };
  protoOf(Input).c1j = function (newValue) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newValue.p9(new Long(0, 0)) >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Input.<set-tailRemaining>.<anonymous>' call
      var message = "tailRemaining shouldn't be negative: " + newValue.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.r1c_1 = newValue;
  };
  protoOf(Input).t1c = function () {
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    var tmp$ret$0 = this.q1c_1 - this.p1c_1 | 0;
    return toLong(tmp$ret$0).ta(this.r1c_1);
  };
  protoOf(Input).j1d = function () {
    return !(this.p1c_1 === this.q1c_1) ? true : !this.r1c_1.equals(new Long(0, 0));
  };
  protoOf(Input).iq = function () {
    var head = this.m1i();
    var empty = Companion_getInstance_4().t1e_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.c1j(new Long(0, 0));
      releaseAll(head, this.m1c_1);
    }
  };
  protoOf(Input).e19 = function () {
    var head = this.m1i();
    var empty = Companion_getInstance_4().t1e_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.c1j(new Long(0, 0));
    return head;
  };
  protoOf(Input).d1j = function () {
    var head = this.m1i();
    var next = head.cx();
    var empty = Companion_getInstance_4().t1e_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.c1j(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      // Inline function 'kotlin.Long.minus' call
      var this_0 = this.r1c_1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var other = next.f1b_1 - next.e1b_1 | 0;
      var tmp$ret$1 = this_0.ua(toLong(other));
      this.c1j(tmp$ret$1);
    }
    head.q1j(null);
    return head;
  };
  protoOf(Input).e1j = function (chain) {
    if (chain === Companion_getInstance_4().t1e_1)
      return Unit_instance;
    var size = remainingAll(chain);
    if (this.n1c_1 === Companion_getInstance_4().t1e_1) {
      _set__head__b4pap2(this, chain);
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      var other = this.q1c_1 - this.p1c_1 | 0;
      var tmp$ret$1 = size.ua(toLong(other));
      this.c1j(tmp$ret$1);
    } else {
      findTail(this.n1c_1).q1j(chain);
      this.c1j(this.r1c_1.ta(size));
    }
  };
  protoOf(Input).f1j = function (chain) {
    var tail = findTail(this.m1i());
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = chain.f1b_1 - chain.e1b_1 | 0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = (tail.h1b_1 - tail.f1b_1 | 0) < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.m1i() === tail) {
      this.q1c_1 = tail.f1b_1;
    } else {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = this.r1c_1.ta(toLong(size));
      this.c1j(tmp$ret$2);
    }
    return true;
  };
  protoOf(Input).g1j = function (n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Input.discard.<anonymous>' call
      var message = 'Negative discard is not allowed: ' + n;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return discardAsMuchAsPossible_0(this, n, 0);
  };
  protoOf(Input).i1g = function (n) {
    if (!(this.g1j(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  protoOf(Input).h1j = function (n) {
    if (n.p9(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  protoOf(Input).i1j = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.g1e() : false)
      return '';
    var remaining = this.t1c();
    if (remaining.p9(new Long(0, 0)) > 0 ? toLong(max).p9(remaining) >= 0 : false)
      return readTextExactBytes(this, remaining.w9());
    // Inline function 'kotlin.text.buildString' call
    var capacity = coerceAtMost(coerceAtLeast(min, 16), max);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.readText.<anonymous>' call
    readASCII(this, this_0, min, max);
    return this_0.toString();
  };
  protoOf(Input).j1j = function (min, max, $super) {
    min = min === VOID ? 0 : min;
    max = max === VOID ? IntCompanionObject_instance.MAX_VALUE : max;
    return $super === VOID ? this.i1j(min, max) : $super.i1j.call(this, min, max);
  };
  protoOf(Input).k1j = function (minSize) {
    return prepareReadLoop(this, minSize, this.m1i());
  };
  protoOf(Input).l1j = function (current) {
    return this.m1j(current);
  };
  protoOf(Input).m1j = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().t1e_1);
  };
  protoOf(Input).n1j = function (current) {
    var tmp0_elvis_lhs = current.cx();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var remaining = current.f1b_1 - current.e1b_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    var b = 8 - (current.i1b_1 - current.h1b_1 | 0) | 0;
    var overrunSize = Math.min(remaining, b);
    if (next.g1b_1 < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.u1g();
      this.q1c_1 = current.f1b_1;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = this.r1c_1.ta(toLong(overrunSize));
      this.c1j(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      // Inline function 'kotlin.Long.minus' call
      var this_0 = this.r1c_1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var other = (next.f1b_1 - next.e1b_1 | 0) - overrunSize | 0;
      var tmp$ret$5 = this_0.ua(toLong(other));
      this.c1j(tmp$ret$5);
      current.g1i();
      current.h1i(this.m1c_1);
    }
  };
  protoOf(Input).a1j = function () {
    var buffer = this.m1c_1.e1i();
    try {
      buffer.o1g(8);
      var tmp = buffer.f1b_1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp$ret$0 = buffer.h1b_1 - buffer.f1b_1 | 0;
      var copied = this.b1j(buffer.d1b_1, tmp, tmp$ret$0);
      if (copied === 0) {
        this.s1c_1 = true;
        // Inline function 'io.ktor.utils.io.core.canRead' call
        if (!(buffer.f1b_1 > buffer.e1b_1)) {
          buffer.h1i(this.m1c_1);
          return null;
        }
      }
      buffer.j1g(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        buffer.h1i(this.m1c_1);
        throw t;
      } else {
        throw $p;
      }
    }
  };
  protoOf(Input).s1i = function () {
    if (!this.s1c_1) {
      this.s1c_1 = true;
    }
  };
  protoOf(Input).o1j = function (minSize) {
    var head = this.m1i();
    if ((this.q1c_1 - this.p1c_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  protoOf(Input).p1j = function (head) {
    var tmp0_elvis_lhs = head.g1i();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().t1e_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    // Inline function 'kotlin.Long.minus' call
    var this_0 = this.r1c_1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var other = next.f1b_1 - next.e1b_1 | 0;
    var tmp$ret$1 = this_0.ua(toLong(other));
    this.c1j(tmp$ret$1);
    head.h1i(this.m1c_1);
    return next;
  };
  function discard(_this__u8e3s4) {
    Companion_getInstance();
    return _this__u8e3s4.h1j(new Long(-1, 2147483647));
  }
  function readFully_1(_this__u8e3s4, dst, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? dst.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var buffer = current;
          // Inline function 'kotlin.comparisons.minOf' call
          var a = remaining;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var b = buffer.f1b_1 - buffer.e1b_1 | 0;
          var count = Math.min(a, b);
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var dstOffset_0 = dstOffset;
          readFully(buffer, dst, dstOffset_0, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          if (!(remaining > 0)) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    var this_0 = remaining;
    if (this_0 > 0) {
      prematureEndOfStream(this_0);
    }
  }
  function readFully_2(_this__u8e3s4, dst, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = dst.h1b_1 - dst.f1b_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var current = tmp_0;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var buffer = current;
          // Inline function 'kotlin.comparisons.minOf' call
          var a = remaining;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var b = buffer.f1b_1 - buffer.e1b_1 | 0;
          var count = Math.min(a, b);
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          readFully_0(buffer, dst, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          if (!(remaining > 0)) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var next = tmp_1;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    var this_0 = remaining;
    if (this_0 > 0) {
      prematureEndOfStream(this_0);
    }
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.readPrimitive' call
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      if ((_this__u8e3s4.q1c_1 - _this__u8e3s4.p1c_1 | 0) > 2) {
        var index = _this__u8e3s4.p1c_1;
        _this__u8e3s4.p1c_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
        // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
        tmp$ret$3 = _this__u8e3s4.o1c_1.h1g_1.getInt16(index, false);
        break $l$block;
      }
      // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
      tmp$ret$3 = readShortFallback(_this__u8e3s4);
    }
    return tmp$ret$3;
  }
  function readShortFallback(_this__u8e3s4) {
    // Inline function 'io.ktor.utils.io.core.readPrimitiveFallback' call
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    // Inline function 'io.ktor.utils.io.core.readShortFallback.<anonymous>' call
    var value = readShort(head);
    completeReadHead(_this__u8e3s4, head);
    return value;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.e19();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      // Inline function 'io.ktor.utils.io.core.forEachChunk' call
      // Inline function 'kotlin.contracts.contract' call
      var current = oldTail;
      $l$loop: do {
        // Inline function 'io.ktor.utils.io.core.Output.flushChain.<anonymous>' call
        var chunk = current;
        var tmp_0 = chunk.e1b_1;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var tmp$ret$0 = chunk.f1b_1 - chunk.e1b_1 | 0;
        $this.k1i(chunk.d1b_1, tmp_0, tmp$ret$0);
        var tmp0_elvis_lhs_0 = current.cx();
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$loop;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        current = tmp_1;
      }
       while (true);
    }finally {
      releaseAll(oldTail, $this.w18_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.w18_1.e1i();
    new_0.o1g(8);
    $this.n1i(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.y18_1;
    if (_tail == null) {
      $this.x18_1 = head;
      $this.d19_1 = 0;
    } else {
      _tail.q1j(head);
      var tailPosition = $this.a19_1;
      _tail.k1g(tailPosition);
      $this.d19_1 = $this.d19_1 + (tailPosition - $this.c19_1 | 0) | 0;
    }
    $this.y18_1 = newTail;
    $this.d19_1 = $this.d19_1 + chainedSizeDelta | 0;
    $this.z18_1 = newTail.d1b_1;
    $this.a19_1 = newTail.f1b_1;
    $this.c19_1 = newTail.e1b_1;
    $this.b19_1 = newTail.h1b_1;
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).x1g(v);
    $this.a19_1 = $this.a19_1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.Output.write' call
      var buffer = $this.q1i(3);
      try {
        // Inline function 'io.ktor.utils.io.core.Output.appendCharFallback.<anonymous>' call
        // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
        var this_0 = buffer.d1b_1;
        var offset = buffer.f1b_1;
        // Inline function 'kotlin.code' call
        var v = Char__toInt_impl_vasixd(c);
        var tmp;
        if (0 <= v ? v <= 127 : false) {
          // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
          var value = toByte(v);
          this_0.h1g_1.setInt8(offset, value);
          tmp = 1;
        } else if (128 <= v ? v <= 2047 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var value_0 = toByte(192 | v >> 6 & 31);
          this_0.h1g_1.setInt8(offset, value_0);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index = offset + 1 | 0;
          var value_1 = toByte(128 | v & 63);
          this_0.h1g_1.setInt8(index, value_1);
          tmp = 2;
        } else if (2048 <= v ? v <= 65535 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var value_2 = toByte(224 | v >> 12 & 15);
          this_0.h1g_1.setInt8(offset, value_2);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_0 = offset + 1 | 0;
          var value_3 = toByte(128 | v >> 6 & 63);
          this_0.h1g_1.setInt8(index_0, value_3);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_1 = offset + 2 | 0;
          var value_4 = toByte(128 | v & 63);
          this_0.h1g_1.setInt8(index_1, value_4);
          tmp = 3;
        } else if (65536 <= v ? v <= 1114111 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var value_5 = toByte(240 | v >> 18 & 7);
          this_0.h1g_1.setInt8(offset, value_5);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_2 = offset + 1 | 0;
          var value_6 = toByte(128 | v >> 12 & 63);
          this_0.h1g_1.setInt8(index_2, value_6);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_3 = offset + 2 | 0;
          var value_7 = toByte(128 | v >> 6 & 63);
          this_0.h1g_1.setInt8(index_3, value_7);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_4 = offset + 3 | 0;
          var value_8 = toByte(128 | v & 63);
          this_0.h1g_1.setInt8(index_4, value_8);
          tmp = 4;
        } else {
          malformedCodePoint(v);
        }
        var size = tmp;
        buffer.j1g(size);
        var result = size;
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(result >= 0)) {
          // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
          var message = "The returned value shouldn't be negative";
          throw IllegalStateException_init_$Create$(toString(message));
        }
        break $l$block;
      }finally {
        $this.e1g();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.k1g($this.a19_1);
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var lastSize = tail.f1b_1 - tail.e1b_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var nextSize = foreignStolen.f1b_1 - foreignStolen.e1b_1 | 0;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      var tmp_1 = tail.i1b_1 - tail.h1b_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp_0 = nextSize <= (tmp_1 + (tail.h1b_1 - tail.f1b_1 | 0) | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.g1b_1 : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.o1i(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp_3 = tail.h1b_1 - tail.f1b_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      var tmp$ret$5 = tail.i1b_1 - tail.h1b_1 | 0;
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.e1g();
      var tmp0_safe_receiver = foreignStolen.g1i();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this.o1i(tmp0_safe_receiver);
      }
      foreignStolen.h1i(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.x18_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "head should't be null since it is already handled in the fast-path";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.x18_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.cx());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.q1j(foreignStolen);
    }
    tail.h1i($this.w18_1);
    $this.y18_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.w18_1 = pool;
    this.x18_1 = null;
    this.y18_1 = null;
    this.z18_1 = Companion_getInstance_6().r1j_1;
    this.a19_1 = 0;
    this.b19_1 = 0;
    this.c19_1 = 0;
    this.d19_1 = 0;
  }
  protoOf(Output).i1i = function () {
    return this.d19_1 + (this.a19_1 - this.c19_1 | 0) | 0;
  };
  protoOf(Output).m1i = function () {
    var tmp0_elvis_lhs = this.x18_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().t1e_1 : tmp0_elvis_lhs;
  };
  protoOf(Output).p6 = function () {
    flushChain(this);
  };
  protoOf(Output).e19 = function () {
    var tmp0_elvis_lhs = this.x18_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.y18_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.k1g(this.a19_1);
    this.x18_1 = null;
    this.y18_1 = null;
    this.a19_1 = 0;
    this.b19_1 = 0;
    this.c19_1 = 0;
    this.d19_1 = 0;
    this.z18_1 = Companion_getInstance_6().r1j_1;
    return head;
  };
  protoOf(Output).n1i = function (buffer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(buffer.cx() == null)) {
      // Inline function 'io.ktor.utils.io.core.Output.appendSingleChunk.<anonymous>' call
      var message = 'It should be a single buffer chunk.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  protoOf(Output).o1i = function (head) {
    var tail = findTail(head);
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    // Inline function 'kotlin.Long.minus' call
    var this_0 = remainingAll(head);
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var other = tail.f1b_1 - tail.e1b_1 | 0;
    var this_1 = this_0.ua(toLong(other));
    var name = 'total size increase';
    if (this_1.p9(toLong(IntCompanionObject_instance.MAX_VALUE)) >= 0) {
      failLongToIntConversion(this_1, name);
    }
    var chainedSizeDelta = this_1.w9();
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  protoOf(Output).x1g = function (v) {
    var index = this.a19_1;
    if (index < this.b19_1) {
      this.a19_1 = index + 1 | 0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      this.z18_1.h1g_1.setInt8(index, v);
      return Unit_instance;
    }
    return writeByteFallback(this, v);
  };
  protoOf(Output).p1i = function () {
    try {
      this.p6();
    }finally {
      this.j1i();
    }
  };
  protoOf(Output).y5 = function (value) {
    var tailPosition = this.a19_1;
    if ((this.b19_1 - tailPosition | 0) >= 3) {
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var this_0 = this.z18_1;
      // Inline function 'kotlin.code' call
      var v = Char__toInt_impl_vasixd(value);
      var tmp;
      if (0 <= v ? v <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var value_0 = toByte(v);
        this_0.h1g_1.setInt8(tailPosition, value_0);
        tmp = 1;
      } else if (128 <= v ? v <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_1 = toByte(192 | v >> 6 & 31);
        this_0.h1g_1.setInt8(tailPosition, value_1);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index = tailPosition + 1 | 0;
        var value_2 = toByte(128 | v & 63);
        this_0.h1g_1.setInt8(index, value_2);
        tmp = 2;
      } else if (2048 <= v ? v <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_3 = toByte(224 | v >> 12 & 15);
        this_0.h1g_1.setInt8(tailPosition, value_3);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_0 = tailPosition + 1 | 0;
        var value_4 = toByte(128 | v >> 6 & 63);
        this_0.h1g_1.setInt8(index_0, value_4);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_1 = tailPosition + 2 | 0;
        var value_5 = toByte(128 | v & 63);
        this_0.h1g_1.setInt8(index_1, value_5);
        tmp = 3;
      } else if (65536 <= v ? v <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_6 = toByte(240 | v >> 18 & 7);
        this_0.h1g_1.setInt8(tailPosition, value_6);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_2 = tailPosition + 1 | 0;
        var value_7 = toByte(128 | v >> 12 & 63);
        this_0.h1g_1.setInt8(index_2, value_7);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_3 = tailPosition + 2 | 0;
        var value_8 = toByte(128 | v >> 6 & 63);
        this_0.h1g_1.setInt8(index_3, value_8);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_4 = tailPosition + 3 | 0;
        var value_9 = toByte(128 | v & 63);
        this_0.h1g_1.setInt8(index_4, value_9);
        tmp = 4;
      } else {
        malformedCodePoint(v);
      }
      var size = tmp;
      this.a19_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  protoOf(Output).m8 = function (value) {
    if (value == null) {
      this.n8('null', 0, 4);
    } else {
      this.n8(value, 0, charSequenceLength(value));
    }
    return this;
  };
  protoOf(Output).n8 = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.n8('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().s1j_1);
    return this;
  };
  protoOf(Output).i1f = function (packet) {
    var foreignStolen = packet.e19();
    if (foreignStolen == null) {
      packet.iq();
      return Unit_instance;
    }
    var tail = this.y18_1;
    if (tail == null) {
      this.o1i(foreignStolen);
      return Unit_instance;
    }
    writePacketMerging(this, tail, foreignStolen, packet.m1c_1);
  };
  protoOf(Output).f19 = function (chunkBuffer) {
    var _tail = this.y18_1;
    if (_tail == null) {
      this.o1i(chunkBuffer);
      return Unit_instance;
    }
    writePacketMerging(this, _tail, chunkBuffer, this.w18_1);
  };
  protoOf(Output).u1c = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.p9(new Long(0, 0)) > 0) {
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      var tmp$ret$0 = p.q1c_1 - p.p1c_1 | 0;
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.p9(remaining) <= 0) {
        remaining = remaining.ua(headRemaining);
        var tmp0_elvis_lhs = p.d1j();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.n1i(tmp);
      } else {
        // Inline function 'io.ktor.utils.io.core.read' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_elvis_lhs_0 = p.o1j(1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          prematureEndOfStream(1);
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var buffer = tmp_0;
        var positionBefore = buffer.e1b_1;
        try {
          // Inline function 'io.ktor.utils.io.core.Output.writePacket.<anonymous>' call
          writeFully_2(this, buffer, remaining.w9());
        }finally {
          var positionAfter = buffer.e1b_1;
          if (positionAfter < positionBefore) {
            throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
          }
          if (positionAfter === buffer.f1b_1) {
            p.m1j(buffer);
          } else {
            p.p1c_1 = positionAfter;
          }
        }
        break $l$loop;
      }
    }
  };
  protoOf(Output).iq = function () {
    this.p1i();
  };
  protoOf(Output).q1i = function (n) {
    // Inline function 'io.ktor.utils.io.core.Output.tailRemaining' call
    if ((this.b19_1 - this.a19_1 | 0) >= n) {
      var tmp0_safe_receiver = this.y18_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.k1g(this.a19_1);
        return tmp0_safe_receiver;
      }
    }
    return appendNewChunk(this);
  };
  protoOf(Output).e1g = function () {
    var tmp0_safe_receiver = this.y18_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.a19_1 = tmp0_safe_receiver.f1b_1;
    }
  };
  protoOf(Output).r1i = function () {
    var head = this.m1i();
    if (!(head === Companion_getInstance_4().t1e_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(head.cx() == null)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      head.q1g();
      head.o1g(8);
      this.a19_1 = head.f1b_1;
      this.c19_1 = this.a19_1;
      this.b19_1 = head.h1b_1;
    }
  };
  function writeFully_2(_this__u8e3s4, src, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp = src.f1b_1 - src.e1b_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = 0;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var buffer = tail;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = remaining;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var b = buffer.h1b_1 - buffer.f1b_1 | 0;
        var size = Math.min(a, b);
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        writeFully_1(buffer, src, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        if (!(remaining > 0))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.e1g();
    }
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? src.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var buffer = tail;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = remaining;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var b = buffer.h1b_1 - buffer.f1b_1 | 0;
        var size = Math.min(a, b);
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var currentOffset_0 = currentOffset;
        writeFully_0(buffer, src, currentOffset_0, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        if (!(remaining > 0))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.e1g();
    }
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.writePrimitiveTemplate' call
      var index = _this__u8e3s4.a19_1;
      if ((_this__u8e3s4.b19_1 - index | 0) > 2) {
        _this__u8e3s4.a19_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
        // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
        _this__u8e3s4.z18_1.h1g_1.setInt16(index, value, false);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writeShortFallback(_this__u8e3s4, value) {
    // Inline function 'io.ktor.utils.io.core.writePrimitiveFallbackTemplate' call
    var tail = _this__u8e3s4.q1i(2);
    // Inline function 'io.ktor.utils.io.core.writeShortFallback.<anonymous>' call
    writeShort(tail, value);
    _this__u8e3s4.e1g();
    if (!true) {
      // Inline function 'io.ktor.utils.io.bits.highByte' call
      var tmp$ret$1 = toByte(value >>> 8 | 0);
      _this__u8e3s4.x1g(tmp$ret$1);
      // Inline function 'io.ktor.utils.io.bits.lowByte' call
      var tmp$ret$2 = toByte(value & 255);
      _this__u8e3s4.x1g(tmp$ret$2);
    }
  }
  function readText(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().s1j_1 : charset;
    max = max === VOID ? IntCompanionObject_instance.MAX_VALUE : max;
    return decode(charset.v1j(), _this__u8e3s4, max);
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (n === VOID) {
      // Inline function 'io.ktor.utils.io.core.coerceAtMostMaxIntOrFail' call
      var this_0 = _this__u8e3s4.t1c();
      var message = 'Unable to convert to a ByteArray: packet is too big';
      if (this_0.p9(toLong(IntCompanionObject_instance.MAX_VALUE)) > 0)
        throw IllegalArgumentException_init_$Create$(message);
      tmp = this_0.w9();
    } else {
      tmp = n;
    }
    n = tmp;
    var tmp_0;
    if (!(n === 0)) {
      // Inline function 'kotlin.also' call
      var this_1 = new Int8Array(n);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytes.<anonymous>' call
      readFully_1(_this__u8e3s4, this_1, 0, n);
      tmp_0 = this_1;
    } else {
      tmp_0 = get_EmptyByteArray();
    }
    return tmp_0;
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    charset = charset === VOID ? Charsets_getInstance().s1j_1 : charset;
    return decodeExactBytes(charset.v1j(), _this__u8e3s4, bytesCount);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().s1j_1 : charset;
    if (charset === Charsets_getInstance().s1j_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.w1j(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeTextUtf8.<anonymous>' call
        var buffer = tail;
        var memory = buffer.d1b_1;
        var dstOffset = buffer.f1b_1;
        var dstLimit = buffer.h1b_1;
        var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
        var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
        var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
        var tmp = index;
        // Inline function 'kotlin.UShort.toInt' call
        index = tmp + (_UShort___get_data__impl__g0245(characters) & 65535) | 0;
        // Inline function 'kotlin.UShort.toInt' call
        var tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
        buffer.j1g(tmp$ret$1);
        var tmp_0;
        var tmp_1;
        // Inline function 'kotlin.UShort.toInt' call
        if ((_UShort___get_data__impl__g0245(characters) & 65535) === 0) {
          tmp_1 = index < toIndex;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = 8;
        } else {
          if (index < toIndex) {
            tmp_0 = 1;
          } else {
            tmp_0 = 0;
          }
        }
        size = tmp_0;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.e1g();
    }
  }
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  protoOf(ChunkBuffer$Companion$EmptyPool$1).e1i = function () {
    return Companion_getInstance_4().t1e_1;
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).x1j = function (instance) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance === Companion_getInstance_4().t1e_1)) {
      // Inline function 'io.ktor.utils.io.core.internal.<no name provided>.recycle.<anonymous>' call
      var message = 'Only ChunkBuffer.Empty instance could be recycled.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).f1i = function (instance) {
    return this.x1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  protoOf(ChunkBuffer$Companion$NoPool$1).e1i = function () {
    return new ChunkBuffer(DefaultAllocator_instance.g1h(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  protoOf(ChunkBuffer$Companion$NoPool$1).x1j = function (instance) {
    DefaultAllocator_instance.i1h(instance.d1b_1);
  };
  protoOf(ChunkBuffer$Companion$NoPool$1).f1i = function (instance) {
    return this.x1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).e1i = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).x1j = function (instance) {
  };
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).f1i = function (instance) {
    return this.x1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function appendNext($this, chunk) {
    if (!$this.u1h_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.s1e_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.t1e_1 = new ChunkBuffer(Companion_getInstance_6().r1j_1, null, this.s1e_1);
    var tmp_0 = this;
    tmp_0.u1e_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_1 = this;
    tmp_1.v1e_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  protoOf(Companion_2).w1e = function () {
    return get_DefaultChunkedBufferPool();
  };
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.t1h_1 = parentPool;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(origin === this)) {
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.<anonymous>' call
      var message = "A chunk couldn't be a view of itself.";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.u1h_1 = atomic$ref$1(null);
    this.v1h_1 = atomic$int$1(1);
    this.w1h_1 = origin;
  }
  protoOf(ChunkBuffer).q1j = function (newValue) {
    if (newValue == null) {
      this.g1i();
    } else {
      appendNext(this, newValue);
    }
  };
  protoOf(ChunkBuffer).cx = function () {
    return this.u1h_1.kotlinx$atomicfu$value;
  };
  protoOf(ChunkBuffer).a1i = function () {
    return this.v1h_1.kotlinx$atomicfu$value;
  };
  protoOf(ChunkBuffer).g1i = function () {
    return this.u1h_1.atomicfu$getAndSet(null);
  };
  protoOf(ChunkBuffer).y1j = function () {
    // Inline function 'kotlin.let' call
    var tmp0_elvis_lhs = this.w1h_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>' call
    var newOrigin = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    newOrigin.z1j();
    // Inline function 'kotlin.also' call
    var this_0 = new ChunkBuffer(this.d1b_1, newOrigin, this.t1h_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>.<anonymous>' call
    this.v1g(this_0);
    return this_0;
  };
  protoOf(ChunkBuffer).h1i = function (pool) {
    if (this.a1k()) {
      var origin = this.w1h_1;
      if (!(origin == null)) {
        this.x1h();
        origin.h1i(pool);
      } else {
        var tmp0_elvis_lhs = this.t1h_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.f1i(this);
      }
    }
  };
  protoOf(ChunkBuffer).x1h = function () {
    if (!this.v1h_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.g1i();
    this.w1h_1 = null;
  };
  protoOf(ChunkBuffer).z1j = function () {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.v1h_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.acquire.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
        var upd = cur + 1 | 0;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(ChunkBuffer).d1i = function () {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.v1h_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.unpark.<anonymous>' call
        if (cur < 0) {
          throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
        }
        var upd = 1;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(ChunkBuffer).a1k = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var this_0 = this.v1h_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.release.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
        var upd = cur - 1 | 0;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  protoOf(ChunkBuffer).y1g = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1h_1 == null)) {
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.reset.<anonymous>' call
      var message = 'Unable to reset buffer with origin';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    protoOf(Buffer).y1g.call(this);
    this.u1h_1.kotlinx$atomicfu$value = null;
  };
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.a1i() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    // Inline function 'kotlin.UShort.toInt' call
    var tmp = (_UShort___get_data__impl__g0245(characters) & 65535) << 16;
    // Inline function 'kotlin.UShort.toInt' call
    var tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    return _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    // Inline function 'kotlin.toUShort' call
    // Inline function 'io.ktor.utils.io.bits.highShort' call
    var this_0 = _EncodeResult___get_value__impl__h0r466($this);
    var this_1 = toShort(this_0 >>> 16 | 0);
    return _UShort___init__impl__jigrne(this_1);
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    // Inline function 'kotlin.toUShort' call
    // Inline function 'io.ktor.utils.io.bits.lowShort' call
    var this_0 = _EncodeResult___get_value__impl__h0r466($this);
    var this_1 = toShort(this_0 & 65535);
    return _UShort___init__impl__jigrne(this_1);
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + value.toString() + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var this_0 = _UShort___init__impl__jigrne(-1);
    var b = from + (_UShort___get_data__impl__g0245(this_0) & 65535) | 0;
    var lastCharIndex = Math.min(to, b);
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var this_1 = _UShort___init__impl__jigrne(-1);
    var tmp$ret$2 = _UShort___get_data__impl__g0245(this_1) & 65535;
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        // Inline function 'kotlin.toUShort' call
        var this_2 = index - from | 0;
        var tmp = _UShort___init__impl__jigrne(toShort(this_2));
        // Inline function 'kotlin.toUShort' call
        var this_3 = resultPosition - dstOffset | 0;
        var tmp$ret$4 = _UShort___init__impl__jigrne(toShort(this_3));
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      // Inline function 'kotlin.code' call
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var this_4 = charSequenceGet(text, tmp0);
      var character = Char__toInt_impl_vasixd(this_4) & 65535;
      if ((character & 65408) === 0) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp1 = resultPosition;
        resultPosition = tmp1 + 1 | 0;
        var value = toByte(character);
        _this__u8e3s4.h1g_1.setInt8(tmp1, value);
      } else {
        break $l$loop;
      }
    }
     while (true);
    index = index - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        // Inline function 'kotlin.code' call
        tmp = Char__toInt_impl_vasixd(character);
      }
      var codepoint = tmp;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var offset = resultPosition;
      var tmp_1;
      if (0 <= codepoint ? codepoint <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var value = toByte(codepoint);
        _this__u8e3s4.h1g_1.setInt8(offset, value);
        tmp_1 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_0 = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.h1g_1.setInt8(offset, value_0);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_0 = offset + 1 | 0;
        var value_1 = toByte(128 | codepoint & 63);
        _this__u8e3s4.h1g_1.setInt8(index_0, value_1);
        tmp_1 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_2 = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.h1g_1.setInt8(offset, value_2);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_1 = offset + 1 | 0;
        var value_3 = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.h1g_1.setInt8(index_1, value_3);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_2 = offset + 2 | 0;
        var value_4 = toByte(128 | codepoint & 63);
        _this__u8e3s4.h1g_1.setInt8(index_2, value_4);
        tmp_1 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_5 = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.h1g_1.setInt8(offset, value_5);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_3 = offset + 1 | 0;
        var value_6 = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.h1g_1.setInt8(index_3, value_6);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_4 = offset + 2 | 0;
        var value_7 = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.h1g_1.setInt8(index_4, value_7);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_5 = offset + 3 | 0;
        var value_8 = toByte(128 | codepoint & 63);
        _this__u8e3s4.h1g_1.setInt8(index_5, value_8);
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      var size = tmp_1;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    // Inline function 'kotlin.toUShort' call
    var this_0 = index - from | 0;
    var tmp_2 = _UShort___init__impl__jigrne(toShort(this_0));
    // Inline function 'kotlin.toUShort' call
    var this_1 = resultPosition - dstOffset | 0;
    var tmp$ret$12 = _UShort___init__impl__jigrne(toShort(this_1));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    // Inline function 'kotlin.code' call
    var highValue = Char__toInt_impl_vasixd(high) - 55232 | 0;
    // Inline function 'kotlin.code' call
    var lowValue = Char__toInt_impl_vasixd(low) - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        // Inline function 'kotlin.code' call
        tmp = Char__toInt_impl_vasixd(character);
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      // Inline function 'io.ktor.utils.io.core.internal.charactersSize' call
      var tmp_1;
      if (1 <= codepoint ? codepoint <= 127 : false) {
        tmp_1 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        tmp_1 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        tmp_1 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      if (tmp_1 > freeSpace) {
        index = index - 1 | 0;
        break $l$loop_0;
      }
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var offset = resultPosition;
      var tmp_2;
      if (0 <= codepoint ? codepoint <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var value = toByte(codepoint);
        _this__u8e3s4.h1g_1.setInt8(offset, value);
        tmp_2 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_0 = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.h1g_1.setInt8(offset, value_0);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_0 = offset + 1 | 0;
        var value_1 = toByte(128 | codepoint & 63);
        _this__u8e3s4.h1g_1.setInt8(index_0, value_1);
        tmp_2 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_2 = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.h1g_1.setInt8(offset, value_2);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_1 = offset + 1 | 0;
        var value_3 = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.h1g_1.setInt8(index_1, value_3);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_2 = offset + 2 | 0;
        var value_4 = toByte(128 | codepoint & 63);
        _this__u8e3s4.h1g_1.setInt8(index_2, value_4);
        tmp_2 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_5 = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.h1g_1.setInt8(offset, value_5);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_3 = offset + 1 | 0;
        var value_6 = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.h1g_1.setInt8(index_3, value_6);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_4 = offset + 2 | 0;
        var value_7 = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.h1g_1.setInt8(index_4, value_7);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_5 = offset + 3 | 0;
        var value_8 = toByte(128 | codepoint & 63);
        _this__u8e3s4.h1g_1.setInt8(index_5, value_8);
        tmp_2 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      var size = tmp_2;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    // Inline function 'kotlin.toUShort' call
    var this_0 = index - from | 0;
    var tmp_3 = _UShort___init__impl__jigrne(toShort(this_0));
    // Inline function 'kotlin.toUShort' call
    var this_1 = resultPosition - dstOffset | 0;
    var tmp$ret$13 = _UShort___init__impl__jigrne(toShort(this_1));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function get_EmptyByteArray() {
    _init_properties_Unsafe_kt__orlvcq();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (current === _this__u8e3s4)
      return Unit_instance;
    else {
      // Inline function 'io.ktor.utils.io.core.canRead' call
      if (!(current.f1b_1 > current.e1b_1)) {
        _this__u8e3s4.m1j(current);
      } else {
        // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
        var tmp = current.i1b_1 - current.h1b_1 | 0;
        if (tmp < 8) {
          _this__u8e3s4.n1j(current);
        } else {
          _this__u8e3s4.p1c_1 = current.e1b_1;
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    _init_properties_Unsafe_kt__orlvcq();
    return _this__u8e3s4.k1j(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.j1d() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.l1j(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    _init_properties_Unsafe_kt__orlvcq();
    var builderSize = builder.n();
    var tmp0_elvis_lhs = builder.e19();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.cx() == null : false) ? _this__u8e3s4.f1j(builderHead) : false) {
      builder.r1i();
      return builderSize;
    }
    _this__u8e3s4.e1j(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (!(current == null)) {
      _this__u8e3s4.e1g();
    }
    return _this__u8e3s4.q1i(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function _init_properties_Unsafe_kt__orlvcq() {
    if (!properties_initialized_Unsafe_kt_o5mw48) {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $completion) {
    var tmp = new $trySuspendCOROUTINE$53($this, sleepCondition, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function $sleepCOROUTINE$52(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1k_1 = _this__u8e3s4;
    this.w1k_1 = sleepCondition;
  }
  protoOf($sleepCOROUTINE$52).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            this.pb_1 = 1;
            suspendResult = trySuspend(this.v1k_1, this.w1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_instance;
            } else {
              this.pb_1 = 2;
              continue $sm;
            }

          case 2:
            this.v1k_1.m18();
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
  function $trySuspendCOROUTINE$53(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1k_1 = _this__u8e3s4;
    this.k1k_1 = sleepCondition;
  }
  protoOf($trySuspendCOROUTINE$53).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            this.l1k_1 = false;
            this.m1k_1 = Job_0();
            if (this.j1k_1.l18_1.atomicfu$compareAndSet(null, this.m1k_1) ? this.k1k_1() : false) {
              this.l1k_1 = true;
              this.pb_1 = 1;
              suspendResult = this.m1k_1.cq(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pb_1 = 2;
              continue $sm;
            }

          case 1:
            this.pb_1 = 2;
            continue $sm;
          case 2:
            return this.l1k_1;
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
  function AwaitingSlot() {
    this.l18_1 = atomic$ref$1(null);
  }
  protoOf(AwaitingSlot).h1a = function (sleepCondition, $completion) {
    var tmp = new $sleepCOROUTINE$52(this, sleepCondition, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(AwaitingSlot).m18 = function () {
    var tmp0_safe_receiver = this.l18_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.aq();
  };
  protoOf(AwaitingSlot).g1f = function (cause) {
    var tmp0_elvis_lhs = this.l18_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.zp(cause);
    } else {
      continuation.aq();
    }
  };
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $completion) {
    var tmp = new $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $completion) {
    var tmp = new $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1l_1 = _this__u8e3s4;
    this.g1l_1 = dst;
    this.h1l_1 = limit;
  }
  protoOf($copyToSequentialImplCOROUTINE$54).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 10;
            if (!!(this.f1l_1 === this.g1l_1)) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.f1l_1.g19() == null)) {
              this.g1l_1.lz(this.f1l_1.g19());
              return new Long(0, 0);
            }

            this.i1l_1 = this.h1l_1;
            this.pb_1 = 1;
            continue $sm;
          case 1:
            if (!(this.i1l_1.p9(new Long(0, 0)) > 0)) {
              this.pb_1 = 9;
              continue $sm;
            }

            this.pb_1 = 2;
            suspendResult = this.f1l_1.f1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j1l_1 = suspendResult;
            if (!this.j1l_1) {
              this.pb_1 = 9;
              continue $sm;
            } else {
              this.pb_1 = 3;
              continue $sm;
            }

          case 3:
            this.k1l_1 = this.f1l_1.h1f(this.g1l_1, this.i1l_1);
            if (this.k1l_1.equals(new Long(0, 0))) {
              this.pb_1 = 6;
              suspendResult = copyToTail(this.f1l_1, this.g1l_1, this.i1l_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.g1l_1.v19() === 0) {
                this.pb_1 = 4;
                suspendResult = this.g1l_1.c1b(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.pb_1 = 5;
                continue $sm;
              }
            }

          case 4:
            this.pb_1 = 5;
            continue $sm;
          case 5:
            this.l1l_1 = this.k1l_1;
            this.pb_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.pb_1 = 9;
              continue $sm;
            } else {
              this.pb_1 = 7;
              continue $sm;
            }

          case 7:
            this.l1l_1 = tail;
            this.pb_1 = 8;
            continue $sm;
          case 8:
            var copied = this.l1l_1;
            this.i1l_1 = this.i1l_1.ua(copied);
            if (copied.p9(new Long(0, 0)) > 0) {
              this.g1l_1.p6();
            }

            this.pb_1 = 1;
            continue $sm;
          case 9:
            return this.h1l_1.ua(this.i1l_1);
          case 10:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 10) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  function $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1l_1 = _this__u8e3s4;
    this.v1l_1 = dst;
    this.w1l_1 = limit;
  }
  protoOf($copyToTailCOROUTINE$55).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 9;
            this.x1l_1 = Companion_getInstance_4().w1e().e1i();
            this.pb_1 = 1;
            continue $sm;
          case 1:
            this.pb_1 = 2;
            continue $sm;
          case 2:
            this.qb_1 = 8;
            this.x1l_1.r1g(coerceAtMost_0(this.w1l_1, toLong(this.x1l_1.i1b_1)).w9());
            this.pb_1 = 3;
            suspendResult = this.u1l_1.c1f(this.x1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.z1l_1 = suspendResult;
            if (this.z1l_1 === -1) {
              this.x1l_1.h1i(Companion_getInstance_4().w1e());
              this.y1l_1 = new Long(0, 0);
              this.qb_1 = 9;
              this.pb_1 = 6;
              continue $sm;
            } else {
              this.pb_1 = 4;
              continue $sm;
            }

          case 4:
            this.pb_1 = 5;
            suspendResult = this.v1l_1.y1e(this.x1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.y1l_1 = toLong(this.z1l_1);
            this.qb_1 = 9;
            this.pb_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.y1l_1;
            this.x1l_1.h1i(Companion_getInstance_4().w1e());
            return tmp_1;
          case 7:
            this.x1l_1.h1i(Companion_getInstance_4().w1e());
            return Unit_instance;
          case 8:
            this.qb_1 = 9;
            var t = this.sb_1;
            this.x1l_1.h1i(Companion_getInstance_4().w1e());
            throw t;
          case 9:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 9) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).f1h = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).f1i = function (instance) {
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    return new ByteChannelJS(Companion_getInstance_4().t1e_1, autoFlush);
  }
  function copyTo(_this__u8e3s4, dst, limit, $completion) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    return copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $completion);
  }
  function ByteReadChannel_0(content, offset, length) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (content.length === 0)
      return Companion_getInstance_5().g1g();
    var head = Companion_getInstance_4().w1e().e1i();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.o1g(8);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = end - start | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var this_0 = tail;
      var b = this_0.h1b_1 - this_0.f1b_1 | 0;
      var size = Math.min(a, b);
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().w1e().e1i();
      current.q1j(tail);
    }
    // Inline function 'kotlin.apply' call
    var this_1 = new ByteChannelJS(head, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    close(this_1);
    return this_1;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.s1m_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.dn(unwrapCancellationException(cause));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase.call(this, initial, autoFlush);
    this.s1m_1 = null;
  }
  protoOf(ByteChannelJS).j1f = function (job) {
    var tmp0_safe_receiver = this.s1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.el();
    }
    this.s1m_1 = job;
    job.al(true, VOID, ByteChannelJS$attachJob$lambda(this));
  };
  protoOf(ByteChannelJS).toString = function () {
    return 'ByteChannel[' + this.s1m_1 + ', ' + hashCode(this) + ']';
  };
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    // Inline function 'kotlin.apply' call
    var this_0 = new ByteChannelJS(Companion_getInstance_4().t1e_1, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Companion.Empty$delegate.<anonymous>.<anonymous>' call
    this_0.lz(null);
    return this_0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.d1m_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda);
  }
  protoOf(Companion_3).g1g = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.d1m_1;
    Empty$factory();
    return this_0.q2();
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
  }
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.g1g();
    }, null);
  }
  function DefaultAllocator() {
  }
  protoOf(DefaultAllocator).g1h = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  protoOf(DefaultAllocator).i1h = function (instance) {
  };
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    return DefaultAllocator_instance;
  }
  function of(_this__u8e3s4, array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length - offset | 0 : length;
    // Inline function 'kotlin.js.asDynamic' call
    var typedArray = array;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? view.byteLength : length;
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.byteLength - offset | 0 : length;
    return new Memory(new DataView(buffer, offset, length));
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.r1j_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.h1g_1 = view;
  }
  protoOf(Memory).t1m = function (offset, length) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      var message = "offset shouldn't be negative: " + offset;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      var message_0 = "length shouldn't be negative: " + length;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = toLong(offset + length | 0);
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var tmp$ret$2 = toLong(this.h1g_1.byteLength);
    if (tmp.p9(tmp$ret$2) > 0) {
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var tmp$ret$3 = toLong(this.h1g_1.byteLength);
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + tmp$ret$3.toString());
    }
    return new Memory(new DataView(this.h1g_1.buffer, this.h1g_1.byteOffset + offset | 0, length));
  };
  protoOf(Memory).z1g = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.h1g_1.buffer, this.h1g_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.h1g_1.buffer, destination.h1g_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  function copyTo_0(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_2(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    // Inline function 'kotlin.js.asDynamic' call
    var to = destination;
    var from = new Int8Array(_this__u8e3s4.h1g_1.buffer, _this__u8e3s4.h1g_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.h1g_1.buffer, destination.h1g_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function Companion_5() {
  }
  protoOf(Companion_5).u1m = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().s1j_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call

        var it = replace(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_2;
        if (it === 'iso-8859-1') {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_2 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_1 = tmp_2;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().t1j_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  protoOf(Companion_5).v1m = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'io.ktor.utils.io.charsets.Companion.isSupported.<anonymous>' call

            var it = replace(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
            var tmp_2;
            if (it === 'iso-8859-1') {
              tmp_2 = true;
            } else {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp_2 = it.toLowerCase() === 'iso-8859-1';
            }

            tmp_1 = tmp_2;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    return Companion_instance_5;
  }
  function Charset(_name) {
    this.u1j_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    if (!(this.u1j_1 === other.u1j_1))
      return false;
    return true;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.u1j_1);
  };
  protoOf(Charset).toString = function () {
    return this.u1j_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.u1j_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.s1j_1 = new CharsetImpl('UTF-8');
    this.t1j_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    extendThrowable(this, message);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.w1m_1 = _charset;
  }
  function encodeToByteArray(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.x1m_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.z1m_1 = name;
  }
  protoOf(CharsetImpl).w1j = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).v1j = function () {
    return new CharsetDecoderImpl(this);
  };
  protoOf(CharsetImpl).toString = function () {
    return 'CharsetImpl(name=' + this.z1m_1 + ')';
  };
  protoOf(CharsetImpl).hashCode = function () {
    return getStringHashCode(this.z1m_1);
  };
  protoOf(CharsetImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.z1m_1 === tmp0_other_with_cast.z1m_1))
      return false;
    return true;
  };
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().w1e().e1i();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var tmp$ret$0 = single.f1b_1 - single.e1b_1 | 0;
        var result = new Int8Array(tmp$ret$0);
        // Inline function 'io.ktor.utils.io.core.readFully' call
        var length = result.length - 0 | 0;
        readFully(single instanceof Buffer ? single : THROW_CCE(), result, 0, length);
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.buildPacket' call
        // Inline function 'kotlin.contracts.contract' call
        var builder = new BytePacketBuilder();
        try {
          // Inline function 'io.ktor.utils.io.charsets.encodeToByteArrayImpl1.<anonymous>' call
          builder.n1i(single.y1j());
          encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
          tmp$ret$1 = builder.w1c();
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            builder.iq();
            throw t;
          } else {
            throw $p;
          }
        }
      }
      return readBytes(tmp$ret$1);
    }finally {
      single.h1i(Companion_getInstance_4().w1e());
    }
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.b1n_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.b1n_1 + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.b1n_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.b1n_1.equals(tmp0_other_with_cast.b1n_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.d1n_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.d1n_1 + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.d1n_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.d1n_1.equals(tmp0_other_with_cast.d1n_1))
      return false;
    return true;
  };
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(fromIndex <= toIndex)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (get_charset(_this__u8e3s4).equals(Charsets_getInstance().t1j_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(get_charset(_this__u8e3s4) === Charsets_getInstance().s1j_1)) {
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var dstRemaining = dst.h1b_1 - dst.f1b_1 | 0;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      // Inline function 'kotlin.comparisons.minOf' call
      var a = toIndex - start | 0;
      var b = dstRemaining / 6 | 0;
      var tmp$ret$3 = Math.min(a, b);
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      // Inline function 'kotlin.text.substring' call
      var startIndex = start;
      var tmp$ret$4 = toString(charSequenceSubSequence(input, startIndex, endIndexExclusive));
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully_4(dst, array1);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.x1m_1;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var charactersCopied = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var this_0 = current;
          var before = this_0.f1b_1 - this_0.e1b_1 | 0;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var buffer = current;
                var rem = max - charactersCopied | 0;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var bufferSize = buffer.f1b_1 - buffer.e1b_1 | 0;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var memory = buffer.d1b_1;
                var start = buffer.e1b_1;
                var endExclusive = buffer.f1b_1;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var view = new Int8Array(memory.h1g_1.buffer, memory.h1g_1.byteOffset + start | 0, endExclusive - start | 0);
                $l$block_2: {
                  // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                  try {
                    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp$ret$4;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.e1n(view, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t = $p;
                          var tmp0_elvis_lhs_0 = t.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    break $l$block_2;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var t_0 = $p;
                      var tmp0_elvis_lhs_1 = t_0.message;
                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                    } else {
                      throw $p;
                    }
                  }
                }
                var decodedText = tmp$ret$4;
                dst.m8(decodedText);
                charactersCopied = charactersCopied + decodedText.length | 0;
                var rc = view.byteLength;
                buffer.i1g(rc);
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.f1n();
                  } catch ($p) {
                    var tmp_2;
                    var _ = $p;
                    tmp_2 = '';
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  // Inline function 'kotlin.text.isNotEmpty' call
                  if (charSequenceLength(tail) > 0) {
                    buffer.m1g(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var this_1 = current;
              after = this_1.f1b_1 - this_1.e1b_1 | 0;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var this_2 = current;
              var tmp_5 = this_2.i1b_1 - this_2.h1b_1 | 0;
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      $l$block_3: {
        // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var this_3 = current_0;
            var before_0 = this_3.f1b_1 - this_3.e1b_1 | 0;
            var after_0;
            if (before_0 >= size_1) {
              try {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.read' call
                var this_4 = current_0;
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var memory_0 = this_4.d1b_1;
                var start_0 = this_4.e1b_1;
                var endExclusive_0 = this_4.f1b_1;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var view_0 = new Int8Array(memory_0.h1g_1.buffer, memory_0.h1g_1.byteOffset + start_0 | 0, endExclusive_0 - start_0 | 0);
                var result = decodeBufferImpl(view_0, decoder, max - charactersCopied | 0);
                dst.m8(result.g1n_1);
                charactersCopied = charactersCopied + result.g1n_1.length | 0;
                var rc_0 = result.h1n_1;
                this_4.i1g(rc_0);
                var rc_1 = rc_0;
                if (rc_1 > 0)
                  size_0 = 1;
                else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                  size_0 = 0;
                else {
                  size_0 = size_0 + 1 | 0;
                }
                size_1 = size_0;
              }finally {
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var this_5 = current_0;
                after_0 = this_5.f1b_1 - this_5.e1b_1 | 0;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                var this_6 = current_0;
                var tmp_10 = this_6.i1b_1 - this_6.h1b_1 | 0;
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    if ((input.q1c_1 - input.p1c_1 | 0) >= inputLength) {
      var decoder = Decoder(get_charset_0(_this__u8e3s4).u1j_1, true);
      var head = input.m1i();
      var view = input.o1c_1.h1g_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'io.ktor.utils.io.js.decodeWrap' call
        try {
          // Inline function 'io.ktor.utils.io.charsets.decodeExactBytes.<anonymous>' call
          var subView = (head.e1b_1 === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.e1b_1 | 0, inputLength);
          tmp$ret$2 = decoder.i1n(subView);
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            var tmp0_elvis_lhs = t.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.i1g(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.w1m_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    $l$block_4: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>' call
        $l$block: {
          // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          var size = 6;
          try {
            $l$loop: do {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var this_0 = current;
              var before = this_0.f1b_1 - this_0.e1b_1 | 0;
              var after;
              if (before >= size) {
                try {
                  // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                  var buffer = current;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var chunkSize = buffer.f1b_1 - buffer.e1b_1 | 0;
                  // Inline function 'kotlin.comparisons.minOf' call
                  var b = inputRemaining;
                  var size_0 = Math.min(chunkSize, b);
                  var tmp_0;
                  if (buffer.e1b_1 === 0 ? buffer.d1b_1.h1g_1.byteLength === size_0 : false) {
                    var tmp$ret$4;
                    $l$block_0: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var buffer_0 = buffer.d1b_1.h1g_1;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.e1n(buffer_0, decodeOptions(true));
                        break $l$block_0;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t = $p;
                          var tmp0_elvis_lhs_0 = t.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$4;
                  } else {
                    var tmp$ret$6;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var buffer_1 = new Int8Array(buffer.d1b_1.h1g_1.buffer, buffer.d1b_1.h1g_1.byteOffset + buffer.e1b_1 | 0, size_0);
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$6 = decoder.e1n(buffer_1, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t_0 = $p;
                          var tmp0_elvis_lhs_1 = t_0.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$6;
                  }
                  var text = tmp_0;
                  sb.x5(text);
                  buffer.i1g(size_0);
                  inputRemaining = inputRemaining - size_0 | 0;
                  size = inputRemaining > 0 ? 6 : 0;
                }finally {
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var this_1 = current;
                  after = this_1.f1b_1 - this_1.e1b_1 | 0;
                }
              } else {
                after = before;
              }
              release = false;
              var tmp_1;
              if (after === 0) {
                tmp_1 = prepareReadNextHead(input, current);
              } else {
                var tmp_2;
                if (after < size) {
                  tmp_2 = true;
                } else {
                  // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                  var this_2 = current;
                  var tmp_3 = this_2.i1b_1 - this_2.h1b_1 | 0;
                  tmp_2 = tmp_3 < 8;
                }
                if (tmp_2) {
                  completeReadHead(input, current);
                  tmp_1 = prepareReadFirstHead(input, size);
                } else {
                  tmp_1 = current;
                }
              }
              var tmp1_elvis_lhs = tmp_1;
              var tmp_4;
              if (tmp1_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_4 = tmp1_elvis_lhs;
              }
              var next = tmp_4;
              current = next;
              release = true;
            }
             while (size > 0);
          }finally {
            if (release) {
              completeReadHead(input, current);
            }
          }
        }
        if (inputRemaining > 0) {
          $l$block_2: {
            // Inline function 'io.ktor.utils.io.core.takeWhile' call
            var release_0 = true;
            var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
            var tmp_5;
            if (tmp0_elvis_lhs_2 == null) {
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs_2;
            }
            var current_0 = tmp_5;
            try {
              $l$loop_1: do {
                // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                var buffer_2 = current_0;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var chunkSize_0 = buffer_2.f1b_1 - buffer_2.e1b_1 | 0;
                // Inline function 'kotlin.comparisons.minOf' call
                var b_0 = inputRemaining;
                var size_1 = Math.min(chunkSize_0, b_0);
                var tmp_6;
                if (buffer_2.e1b_1 === 0 ? buffer_2.d1b_1.h1g_1.byteLength === size_1 : false) {
                  tmp_6 = decoder.i1n(buffer_2.d1b_1.h1g_1);
                } else {
                  var tmp$ret$14;
                  $l$block_3: {
                    // Inline function 'io.ktor.utils.io.js.decodeStream' call
                    var buffer_3 = new Int8Array(buffer_2.d1b_1.h1g_1.buffer, buffer_2.d1b_1.h1g_1.byteOffset + buffer_2.e1b_1 | 0, size_1);
                    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                    try {
                      tmp$ret$14 = decoder.e1n(buffer_3, decodeOptions(true));
                      break $l$block_3;
                    } catch ($p) {
                      if ($p instanceof Error) {
                        var t_1 = $p;
                        var tmp0_elvis_lhs_3 = t_1.message;
                        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                      } else {
                        throw $p;
                      }
                    }
                  }
                  tmp_6 = tmp$ret$14;
                }
                var text_0 = tmp_6;
                sb.x5(text_0);
                buffer_2.i1g(size_1);
                inputRemaining = inputRemaining - size_1 | 0;
                if (!true) {
                  break $l$loop_1;
                }
                release_0 = false;
                var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                var tmp_7;
                if (tmp1_elvis_lhs_0 == null) {
                  break $l$loop_1;
                } else {
                  tmp_7 = tmp1_elvis_lhs_0;
                }
                var next_0 = tmp_7;
                current_0 = next_0;
                release_0 = true;
              }
               while (true);
            }finally {
              if (release_0) {
                completeReadHead(input, current_0);
              }
            }
          }
        }
        sb.x5(decoder.f1n());
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var t_2 = $p;
          var tmp0_elvis_lhs_4 = t_2.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.g1n_1 = charactersDecoded;
    this.h1n_1 = bytesConsumed;
  }
  protoOf(DecodeBufferResult).toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.g1n_1 + ', bytesConsumed=' + this.h1n_1 + ')';
  };
  protoOf(DecodeBufferResult).hashCode = function () {
    var result = getStringHashCode(this.g1n_1);
    result = imul(result, 31) + this.h1n_1 | 0;
    return result;
  };
  protoOf(DecodeBufferResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.g1n_1 === tmp0_other_with_cast.g1n_1))
      return false;
    if (!(this.h1n_1 === tmp0_other_with_cast.h1n_1))
      return false;
    return true;
  };
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.i1n(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
      var _ = $p;
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_instance.MAX_VALUE : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.i1n(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
        var _ = $p;
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.i1n(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
        var __0 = $p;
      }
      sizeInBytes = sizeInBytes - 1 | 0;
    }
    $l$block: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        // Inline function 'io.ktor.utils.io.charsets.decodeBufferImplSlow.<anonymous>' call
        nativeDecoder.i1n(_this__u8e3s4);
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          var tmp0_elvis_lhs = t.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    // Inline function 'io.ktor.utils.io.core.writeDirect' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var memory = dst.d1b_1;
    var start = dst.f1b_1;
    var endExclusive = dst.h1b_1;
    // Inline function 'io.ktor.utils.io.charsets.encodeISO88591.<anonymous>' call
    var view = memory.t1m(start, endExclusive - start | 0).h1g_1;
    var i8 = new Int8Array(view.buffer, view.byteOffset, view.byteLength);
    var writeIndex = 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        i8[tmp1] = toByte(character);
      }
       while (inductionVariable < toIndex);
    var rc = writeIndex;
    dst.j1g(rc);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? src.byteLength - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    var memory = _this__u8e3s4.d1b_1;
    var dstOffset = _this__u8e3s4.f1b_1;
    if ((_this__u8e3s4.h1b_1 - dstOffset | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_0(src, memory, offset, length, dstOffset);
    var rc = length;
    _this__u8e3s4.j1g(rc);
  }
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    charset = charset === VOID ? Charsets_getInstance().s1j_1 : charset;
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    // Inline function 'kotlin.js.asDynamic' call
    var i8 = bytes;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var view = new ChunkBuffer(of_1(Companion_getInstance_6(), buffer), null, Companion_getInstance_4().u1e_1);
    view.p1g();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().v1e_1);
    return decode(charset.v1j(), packet, IntCompanionObject_instance.MAX_VALUE);
  }
  function checkIndices(offset, length, bytes) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((offset + length | 0) <= bytes.length)) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeOptions(stream) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.decodeOptions.<anonymous>' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    this_0.stream = stream;
    return this_0;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.textDecoderOptions.<anonymous>' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.j1n_1 = $this_toKtor;
  }
  protoOf(toKtor$1).f1n = function () {
    return this.j1n_1.decode();
  };
  protoOf(toKtor$1).i1n = function (buffer) {
    return this.j1n_1.decode(buffer);
  };
  protoOf(toKtor$1).e1n = function (buffer, options) {
    return this.j1n_1.decode(buffer, options);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.k1n_1 = fatal;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_ENCODING_ALIASES().a1(requestedEncoding)) {
      // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.<anonymous>' call
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(TextDecoderFallback).f1n = function () {
    return '';
  };
  protoOf(TextDecoderFallback).i1n = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>' call
        var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
        var inductionVariable = 0;
        var last = bytes.length;
        if (inductionVariable < last)
          $l$loop: do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var byte = bytes[index];
            var point = toCodePoint(byte);
            if (point < 0) {
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!!this.k1n_1) {
                // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
                var message = 'Invalid character: ' + point;
                throw IllegalStateException_init_$Create$(toString(message));
              }
              writeFully_3(builder, get_REPLACEMENT());
              continue $l$loop;
            }
            if (point > 255) {
              builder.x1g(toByte(point >> 8));
            }
            builder.x1g(toByte(point & 255));
          }
           while (inductionVariable < last);
        tmp$ret$3 = builder.w1c();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.iq();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return decodeToString(readBytes(tmp$ret$3));
  };
  protoOf(TextDecoderFallback).e1n = function (buffer, options) {
    return this.i1n(buffer);
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function _init_properties_TextDecoderFallback_kt__nrrftl() {
    if (!properties_initialized_TextDecoderFallback_kt_7y92ax) {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.j1h_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.j1h_1;
    tmp.k1h_1 = fillArrayVal(Array(size), null);
    this.l1h_1 = 0;
  }
  protoOf(DefaultPool).m1h = function (instance) {
  };
  protoOf(DefaultPool).c1i = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).z1h = function (instance) {
  };
  protoOf(DefaultPool).e1i = function () {
    if (this.l1h_1 === 0)
      return this.f1h();
    this.l1h_1 = this.l1h_1 - 1 | 0;
    var idx = this.l1h_1;
    var tmp = this.k1h_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.k1h_1[idx] = null;
    return this.c1i(instance);
  };
  protoOf(DefaultPool).f1i = function (instance) {
    this.z1h(instance);
    if (this.l1h_1 === this.j1h_1) {
      this.m1h(instance);
    } else {
      var tmp1 = this.l1h_1;
      this.l1h_1 = tmp1 + 1 | 0;
      this.k1h_1[tmp1] = instance;
    }
  };
  //region block: post-declaration
  protoOf(ByteChannelSequentialBase).b1f = readRemaining$default;
  protoOf(ChannelJob).el = cancel$default;
  protoOf(ChannelJob).al = invokeOnCompletion$default;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  DEFAULT_BUFFER_SIZE = 4096;
  Companion_instance_1 = new Companion_1();
  DefaultAllocator_instance = new DefaultAllocator();
  Companion_instance_5 = new Companion_5();
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = readAvailable;
  _.$_$.c = writeFully;
  _.$_$.d = IOException_init_$Init$;
  _.$_$.e = Companion_instance_5;
  _.$_$.f = Charsets_getInstance;
  _.$_$.g = Companion_getInstance_5;
  _.$_$.h = MalformedInputException;
  _.$_$.i = decode;
  _.$_$.j = encodeToByteArray;
  _.$_$.k = encode;
  _.$_$.l = get_name;
  _.$_$.m = completeReadHead;
  _.$_$.n = prepareReadFirstHead;
  _.$_$.o = prepareReadNextHead;
  _.$_$.p = BytePacketBuilder;
  _.$_$.q = ByteReadPacket;
  _.$_$.r = Input;
  _.$_$.s = String_0;
  _.$_$.t = discard;
  _.$_$.u = readBytes;
  _.$_$.v = readShort_0;
  _.$_$.w = readText;
  _.$_$.x = writeFully_3;
  _.$_$.y = writeShort_0;
  _.$_$.z = writeText;
  _.$_$.a1 = IOException;
  _.$_$.b1 = get_ByteArrayPool;
  _.$_$.c1 = ByteReadChannel;
  _.$_$.d1 = ByteReadChannel_1;
  _.$_$.e1 = WriterScope;
  _.$_$.f1 = cancel;
  _.$_$.g1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
