(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    root['compose-multiplatform-core-runtime'] = factory(typeof this['compose-multiplatform-core-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.gb;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var toString = kotlin_kotlin.$_$.lb;
  var classMeta = kotlin_kotlin.$_$.x9;
  var VOID = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var Companion_instance = kotlin_kotlin.$_$.z4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.y2;
  var createFailure = kotlin_kotlin.$_$.ef;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.tf;
  var intercepted = kotlin_kotlin.$_$.y8;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var get = kotlin_kotlin.$_$.g9;
  var fold = kotlin_kotlin.$_$.f9;
  var minusKey = kotlin_kotlin.$_$.h9;
  var plus = kotlin_kotlin.$_$.j9;
  var isInterface = kotlin_kotlin.$_$.ta;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var Enum = kotlin_kotlin.$_$.de;
  var IllegalStateException = kotlin_kotlin.$_$.he;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.r9;
  var defineProp = kotlin_kotlin.$_$.z9;
  var equals = kotlin_kotlin.$_$.aa;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var fill = kotlin_kotlin.$_$.w6;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var rotateLeft = kotlin_kotlin.$_$.pf;
  var hashCode = kotlin_kotlin.$_$.ia;
  var emptyList = kotlin_kotlin.$_$.t6;
  var toMutableList = kotlin_kotlin.$_$.p8;
  var rotateRight = kotlin_kotlin.$_$.qf;
  var sortWith = kotlin_kotlin.$_$.g8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var to = kotlin_kotlin.$_$.vf;
  var plus_0 = kotlin_kotlin.$_$.y7;
  var compareValues = kotlin_kotlin.$_$.u8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var lazy = kotlin_kotlin.$_$.lf;
  var firstOrNull = kotlin_kotlin.$_$.a7;
  var compareTo = kotlin_kotlin.$_$.y9;
  var KProperty1 = kotlin_kotlin.$_$.zb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var isArray = kotlin_kotlin.$_$.la;
  var Set = kotlin_kotlin.$_$.z5;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var plus_1 = kotlin_kotlin.$_$.u7;
  var Exception = kotlin_kotlin.$_$.fe;
  var Map = kotlin_kotlin.$_$.t5;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var toString_0 = kotlin_kotlin.$_$.uf;
  var Element = kotlin_kotlin.$_$.i9;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var Collection = kotlin_kotlin.$_$.m5;
  var addAll = kotlin_kotlin.$_$.a6;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var toList = kotlin_kotlin.$_$.m8;
  var flatten = kotlin_kotlin.$_$.d7;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var addSuppressed = kotlin_kotlin.$_$.af;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var returnIfSuspended = kotlin_kotlin.$_$.k;
  var Long = kotlin_kotlin.$_$.ie;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var removeFirst = kotlin_kotlin.$_$.a8;
  var arrayCopy = kotlin_kotlin.$_$.b6;
  var fill_0 = kotlin_kotlin.$_$.x6;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.s4;
  var first = kotlin_kotlin.$_$.c7;
  var last = kotlin_kotlin.$_$.o7;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var copyOf = kotlin_kotlin.$_$.p6;
  var joinToString = kotlin_kotlin.$_$.h7;
  var copyOf_0 = kotlin_kotlin.$_$.o6;
  var RandomAccess = kotlin_kotlin.$_$.y5;
  var AbstractMap = kotlin_kotlin.$_$.g5;
  var AbstractMutableMap = kotlin_kotlin.$_$.i5;
  var MutableMap = kotlin_kotlin.$_$.w5;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var MutableEntry = kotlin_kotlin.$_$.v5;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var AbstractMutableSet = kotlin_kotlin.$_$.j5;
  var MutableSet = kotlin_kotlin.$_$.x5;
  var AbstractMutableCollection = kotlin_kotlin.$_$.h5;
  var Entry = kotlin_kotlin.$_$.s5;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var AbstractSet = kotlin_kotlin.$_$.k5;
  var AbstractCollection = kotlin_kotlin.$_$.f5;
  var objectCreate = kotlin_kotlin.$_$.eb;
  var until = kotlin_kotlin.$_$.vb;
  var step = kotlin_kotlin.$_$.ub;
  var countOneBits = kotlin_kotlin.$_$.cf;
  var takeLowestOneBit = kotlin_kotlin.$_$.sf;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var longArray = kotlin_kotlin.$_$.ya;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Char = kotlin_kotlin.$_$.zd;
  var isCharSequence = kotlin_kotlin.$_$.pa;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var singleOrNull = kotlin_kotlin.$_$.f8;
  var contains = kotlin_kotlin.$_$.e6;
  var plus_2 = kotlin_kotlin.$_$.x7;
  var primitiveArrayConcat = kotlin_kotlin.$_$.f;
  var SequenceScope = kotlin_kotlin.$_$.bc;
  var intArrayIterator = kotlin_kotlin.$_$.ja;
  var Companion_getInstance = kotlin_kotlin.$_$.y4;
  var toIntArray = kotlin_kotlin.$_$.k8;
  var sequence = kotlin_kotlin.$_$.cc;
  var anyToString = kotlin_kotlin.$_$.o9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d6;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.h;
  var toDuration = kotlin_kotlin.$_$.yd;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.o2;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.e1;
  var println = kotlin_kotlin.$_$.n9;
  var printStackTrace = kotlin_kotlin.$_$.of;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_instance_0;
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], BroadcastFrameClock, VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function changed(value) {
    return this.l3b(value);
  }
  function changedInstance(value) {
    return this.k3b(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta, VOID, VOID, DisposableEffectScope);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(CompositionScopedCoroutineScopeCanceller, 'CompositionScopedCoroutineScopeCanceller', classMeta, VOID, [RememberObserver]);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException, VOID, LeftCompositionCancellationException);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$1, '$awaitWorkAvailableCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta, VOID, VOID, SlotTable);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta, VOID, VOID, PrioritySet);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta, VOID, VOID, SnapshotThreadLocal);
  setMetadataFor(IntStack, 'IntStack', classMeta, VOID, VOID, IntStack);
  setMetadataFor(Stack, 'Stack', classMeta, VOID, VOID, Stack);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta, VOID, VOID, IdentityArrayIntMap);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta, VOID, VOID, IdentityArrayMap);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set], IdentityArraySet);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta, VOID, VOID, IdentityScopeMap);
  setMetadataFor(MutableVector, 'MutableVector', classMeta, VOID, [RandomAccess]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [MutableSet, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [Collection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeKeysIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeValuesIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeEntriesIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Collection, Set]);
  setMetadataFor(Links, 'Links', classMeta, VOID, VOID, Links_init_$Create$);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta, VOID, VOID, MutabilityOwnership);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta, VOID, VOID, DeltaCounter);
  setMetadataFor(Builder, 'Builder', classMeta, PersistentHashMapBuilder, [PersistentHashMapBuilder, MutableMap]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta, VOID, VOID, SnapshotDoubleIndexHeap);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta, VOID, VOID, SnapshotWeakSet);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$4, '$withFrameNanosCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], MonotonicClockImpl, VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta, VOID, VOID, IntMap);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.o38_1 = applier;
    this.p38_1 = offset;
    this.q38_1 = 0;
  }
  protoOf(OffsetApplier).f38 = function () {
    return this.o38_1.f38();
  };
  protoOf(OffsetApplier).i38 = function (node) {
    this.q38_1 = this.q38_1 + 1 | 0;
    this.o38_1.i38(node);
  };
  protoOf(OffsetApplier).j38 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.q38_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.q38_1 = this.q38_1 - 1 | 0;
    this.o38_1.j38();
  };
  protoOf(OffsetApplier).k38 = function (index, instance) {
    this.o38_1.k38(index + (this.q38_1 === 0 ? this.p38_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).l38 = function (index, instance) {
    this.o38_1.l38(index + (this.q38_1 === 0 ? this.p38_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).m38 = function (index, count) {
    this.o38_1.m38(index + (this.q38_1 === 0 ? this.p38_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).n38 = function (from, to, count) {
    var effectiveOffset = this.q38_1 === 0 ? this.p38_1 : 0;
    this.o38_1.n38(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.r38_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s38_1 = ArrayList_init_$Create$();
    this.t38_1 = this.r38_1;
    this.u38_1 = 8;
  }
  protoOf(AbstractApplier).v38 = function (_set____db54di) {
    this.t38_1 = _set____db54di;
  };
  protoOf(AbstractApplier).f38 = function () {
    return this.t38_1;
  };
  protoOf(AbstractApplier).w38 = function (node) {
    this.s38_1.r(this.f38());
    this.v38(node);
  };
  protoOf(AbstractApplier).i38 = function (node) {
    return this.w38((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).j38 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.s38_1.c1()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.v38(this.s38_1.i1(this.s38_1.n() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.x38_1 = onFrame;
    this.y38_1 = continuation;
  }
  protoOf(FrameAwaiter).z38 = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.x38_1(timeNanos);
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
    var tmp$ret$3 = tmp;
    this.y38_1.t6(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b39_1;
    if (!($this.c39_1 == null))
      return Unit_instance;
    $this.c39_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.d39_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.g1(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.y38_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.t6(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.d39_1.z();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.b39_1;
      var tmp = this$0.d39_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.s(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.a39_1 = onNewAwaiters;
    this.b39_1 = createSynchronizedObject();
    this.c39_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d39_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e39_1 = ArrayList_init_$Create$();
    this.f39_1 = 8;
  }
  protoOf(BroadcastFrameClock).g39 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b39_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.d39_1.c1();
  };
  protoOf(BroadcastFrameClock).h39 = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b39_1;
    var toResume = this.d39_1;
    this.d39_1 = this.e39_1;
    this.e39_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.g1(i).z38(timeNanos);
      }
       while (inductionVariable < last);
    toResume.z();
  };
  protoOf(BroadcastFrameClock).i39 = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.wo();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.b39_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.c39_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.t6(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.d39_1.c1();
      var tmp = this.d39_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.r(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.fn(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.a39_1 == null) : false) {
        try {
          this.a39_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.xl();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.h3a();
    while (tmp0_iterator.v()) {
      var slot = tmp0_iterator.x();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.i3a(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.j3a(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.iq();
      }
    }
    _this__u8e3s4.r3a();
  }
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.s3a_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.r3b_1 = compositionLocal;
    this.s3b_1 = value;
    this.t3b_1 = canOverride;
    this.u3b_1 = 0;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.b3b(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) ? it.v3b() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w3b(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x3b();
    }
  }
  function MovableContent() {
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.y3b_1 = content;
    this.z3b_1 = parameter;
    this.a3c_1 = composition;
    this.b3c_1 = slotTable;
    this.c3c_1 = anchor;
    this.d3c_1 = invalidations;
    this.e3c_1 = locals;
    this.f3c_1 = 8;
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.g3c_1 = message;
  }
  protoOf(ComposeRuntimeError).w6 = function () {
    return this.g3c_1;
  };
  function startRoot($this) {
    $this.o3d_1 = $this.j3c_1.r3e();
    startGroup($this, 100);
    $this.i3c_1.t3e();
    $this.b3d_1 = $this.i3c_1.u3e();
    $this.e3d_1.x3e(asInt($this.d3d_1));
    $this.d3d_1 = $this.k3b($this.b3d_1);
    $this.s3d_1 = null;
    if (!$this.w3c_1) {
      $this.w3c_1 = $this.i3c_1.y3e();
    }
    var tmp0_safe_receiver = read($this.b3d_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.r($this.j3c_1);
      $this.i3c_1.z3e(tmp0_safe_receiver);
    }
    startGroup($this, $this.i3c_1.a3f());
  }
  function endRoot($this) {
    endGroup($this);
    $this.i3c_1.b3f();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.o3d_1.p1i();
    $this.x3c_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.o3c_1.z();
    $this.r3c_1.z();
    $this.t3c_1.z();
    $this.a3d_1.z();
    $this.e3d_1.z();
    $this.c3d_1.z();
    if (!$this.o3d_1.h3f_1) {
      $this.o3d_1.p1i();
    }
    if (!$this.q3d_1.f3a_1) {
      $this.q3d_1.p1i();
    }
    $this.v3d_1.z();
    createFreshInsertTable($this);
    $this.x3d_1 = 0;
    $this.h3d_1 = 0;
    $this.y3c_1 = false;
    $this.w3d_1 = false;
    $this.f3d_1 = false;
    $this.m3d_1 = false;
    $this.x3c_1 = false;
    $this.g3d_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_1().q3f_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_1().q3f_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.s3c_1 = $this.s3c_1 + $this.o3d_1.t3f() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.s3d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.o3d_1.k3f_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.w3d_1 ? $this.r3d_1 : false) {
      var current = $this.q3d_1.e3a_1;
      while (current > 0) {
        if ($this.q3d_1.w3f(current) === 202 ? equals($this.q3d_1.v3f(current), get_compositionLocalMap()) : false) {
          var tmp = $this.q3d_1.u3f(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.s3d_1 = providers;
          return providers;
        }
        current = $this.q3d_1.x3f(current);
      }
    }
    if ($this.o3d_1.n() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.o3d_1.w3f(current_0) === 202 ? equals($this.o3d_1.v3f(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.c3d_1.g1(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.o3d_1.u3f(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.s3d_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.o3d_1.x3f(current_0);
      }
    }
    $this.s3d_1 = $this.b3d_1;
    return $this.b3d_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = parentScope.d2e();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    this_0.o2(currentProviders);
    var providerScope = this_0.w1c();
    startGroup_0($this, 204, get_providerMaps());
    $this.k3b(providerScope);
    $this.k3b(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function ensureWriter($this) {
    if ($this.q3d_1.f3a_1) {
      $this.q3d_1 = $this.p3d_1.y3f();
      $this.q3d_1.c3b();
      $this.r3d_1 = false;
      $this.s3d_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.q3d_1.f3a_1);
    $this.p3d_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.p3d_1.y3f();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.p1i();
    tmp.q3d_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.o3d_1.d3b();
    } else {
      if (!(data == null) ? !($this.o3d_1.z3f() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.o3d_1.a3g();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().q3f_1));
    if ($this.w3d_1) {
      $this.o3d_1.b3g();
      var startIndex = $this.q3d_1.d3a_1;
      if (isNode) {
        $this.q3d_1.e3g(key, Companion_getInstance_0().s3a_1);
      } else if (!(data == null)) {
        var tmp = $this.q3d_1;
        tmp.d3g(key, objectKey == null ? Companion_getInstance_0().s3a_1 : objectKey, data);
      } else {
        var tmp_0 = $this.q3d_1;
        tmp_0.c3g(key, objectKey == null ? Companion_getInstance_0().s3a_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.p3c_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.l3g(insertKeyInfo, $this.q3c_1 - tmp2_safe_receiver.g3g_1 | 0);
        tmp2_safe_receiver.m3g(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().r3f_1))) {
      tmp_1 = $this.f3d_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.p3c_1 == null) {
      var slotKey = $this.o3d_1.n3g();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.o3d_1.p3g()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.p3c_1 = new Pending($this.o3d_1.o3g(), $this.q3c_1);
      }
    }
    var pending = $this.p3c_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.q3g(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.m3g(keyInfo);
        var location = keyInfo.v3g_1;
        $this.q3c_1 = pending.y3g(keyInfo) + pending.g3g_1 | 0;
        var relativePosition = pending.z3g(keyInfo);
        var currentRelativePosition = relativePosition - pending.h3g_1 | 0;
        pending.a3h(relativePosition, pending.h3g_1);
        recordReaderMoving($this, location);
        $this.o3d_1.b3h(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.o3d_1.b3g();
        $this.w3d_1 = true;
        $this.s3d_1 = null;
        ensureWriter($this);
        $this.q3d_1.r3g();
        var startIndex_0 = $this.q3d_1.d3a_1;
        if (isNode) {
          $this.q3d_1.e3g(key, Companion_getInstance_0().s3a_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.q3d_1;
          tmp_2.d3g(key, objectKey == null ? Companion_getInstance_0().s3a_1 : objectKey, data);
        } else {
          var tmp_3 = $this.q3d_1;
          tmp_3.c3g(key, objectKey == null ? Companion_getInstance_0().s3a_1 : objectKey);
        }
        $this.u3d_1 = $this.q3d_1.s3g(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.l3g(insertKeyInfo_0, $this.q3c_1 - pending.g3g_1 | 0);
        pending.m3g(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.q3c_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.o3c_1.c3h($this.p3c_1);
    $this.p3c_1 = newPending;
    $this.r3c_1.x3e($this.q3c_1);
    if (isNode)
      $this.q3c_1 = 0;
    $this.t3c_1.x3e($this.s3c_1);
    $this.s3c_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.o3c_1.d3h();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.h3g_1 = previousPending.h3g_1 + 1 | 0;
    }
    $this.p3c_1 = previousPending;
    $this.q3c_1 = $this.r3c_1.d3h() + expectedNodeCount | 0;
    $this.s3c_1 = $this.t3c_1.d3h() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.w3d_1) {
      var parent = $this.q3d_1.e3a_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.q3d_1.w3f(parent), $this.q3d_1.v3f(parent), $this.q3d_1.u3f(parent));
    } else {
      var parent_0 = $this.o3d_1.k3f_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.o3d_1.w3f(parent_0), $this.o3d_1.v3f(parent_0), $this.o3d_1.u3f(parent_0));
    }
    var expectedNodeCount = $this.s3c_1;
    var pending = $this.p3c_1;
    if (!(pending == null) ? pending.f3g_1.n() > 0 : false) {
      var previous = pending.f3g_1;
      var current = pending.e3h();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.n();
      var previousIndex = 0;
      var previousEnd = previous.n();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.g1(previousIndex);
        if (!usedKeys.a1(previousInfo)) {
          var deleteOffset = pending.y3g(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.g3g_1 | 0, previousInfo.w3g_1);
          pending.f3h(previousInfo.v3g_1, 0);
          recordReaderMoving($this, previousInfo.v3g_1);
          $this.o3d_1.b3h(previousInfo.v3g_1);
          recordDelete($this);
          $this.o3d_1.t3f();
          removeRange($this.z3c_1, previousInfo.v3g_1, previousInfo.v3g_1 + $this.o3d_1.g3h(previousInfo.v3g_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.a1(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.g1(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.y3g(currentInfo);
            placedKeys.r(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.h3h(currentInfo);
              recordMoveNode($this, nodePosition + pending.g3g_1 | 0, nodeOffset + pending.g3g_1 | 0, updatedCount);
              pending.i3h(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.h3h(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.n() > 0) {
        recordReaderMoving($this, $this.o3d_1.j3h());
        $this.o3d_1.c3b();
      }
    }
    var removeIndex = $this.q3c_1;
    while (!$this.o3d_1.k3h()) {
      var startSlot = $this.o3d_1.i3f_1;
      recordDelete($this);
      var nodesToRemove = $this.o3d_1.t3f();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.z3c_1, startSlot, $this.o3d_1.i3f_1);
    }
    var inserting = $this.w3d_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.o3d_1.m3h();
      var parentGroup = $this.q3d_1.e3a_1;
      $this.q3d_1.n3h();
      if (!$this.o3d_1.p3h()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.q3d_1.o3h();
        $this.q3d_1.p1i();
        recordInsert($this, $this.u3d_1);
        $this.w3d_1 = false;
        if (!$this.j3c_1.v18()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.o3d_1.k3f_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.o3d_1.l3h();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.m3d_1;
    $this.m3d_1 = true;
    var recomposed = false;
    var parent = $this.o3d_1.k3f_1;
    var end = parent + $this.o3d_1.g3h(parent) | 0;
    var recomposeIndex = $this.q3c_1;
    var recomposeCompoundKey = $this.x3d_1;
    var oldGroupNodeCount = $this.s3c_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.z3c_1, $this.o3d_1.i3f_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.r3h_1;
      removeLocation($this.z3c_1, location);
      if (firstInRange_0.w3h()) {
        recomposed = true;
        $this.o3d_1.b3h(location);
        var newGroup = $this.o3d_1.i3f_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.q3c_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.x3d_1 = compoundKeyOf($this, $this.o3d_1.x3f(newGroup), parent, recomposeCompoundKey);
        $this.s3d_1 = null;
        firstInRange_0.q3h_1.u3h($this);
        $this.s3d_1 = null;
        $this.o3d_1.v3h(parent);
      } else {
        $this.l3d_1.c3h(firstInRange_0.q3h_1);
        firstInRange_0.q3h_1.t3h();
        $this.l3d_1.d3h();
      }
      firstInRange_0 = firstInRange($this.z3c_1, $this.o3d_1.i3f_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.o3d_1.c3b();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.q3c_1 = recomposeIndex + parentGroupNodes | 0;
      $this.s3c_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.x3d_1 = recomposeCompoundKey;
    $this.m3d_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.o3c_1.n() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.o3c_1.x3h(pendingIndex);
            if (!(pending == null) ? pending.f3h(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.o3d_1.k3f_1;
        } else {
          if ($this.o3d_1.y3h(current))
            break $l$loop_0;
          current = $this.o3d_1.x3f(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.o3d_1.x3f(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.o3d_1.y3h(anchorGroup)) {
      anchorGroup = $this.o3d_1.x3f(anchorGroup);
    }
    var index = $this.o3d_1.y3h(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.o3d_1.z3h(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.o3d_1.g3h(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.v3c_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.x2(group);
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.u3c_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.o3d_1.z3h(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.v3c_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.v3c_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.n2(group, count);
      } else {
        var tmp1_elvis_lhs = $this.u3c_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.o3d_1.n());
          fill(newCounts_0, -1);
          $this.u3c_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.u3c_1 = null;
    $this.v3c_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.o3d_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.y3h(current)) {
        recordUp($this);
      }
      current = reader.x3f(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.o3d_1.x3f(group), nearestCommonRoot);
      if ($this.o3d_1.y3h(group)) {
        recordDown($this, nodeAt($this.o3d_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.o3d_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.o3d_1.x3f(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.a3i(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.v3f(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.l9_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.w3f(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.u3f(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_0().s3a_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.s3c_1 = $this.o3d_1.b3i();
    $this.o3d_1.c3b();
  }
  function addRecomposeScope($this) {
    if ($this.w3d_1) {
      var tmp = $this.n3c_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.l3d_1.c3h(scope);
      $this.c3i(scope);
      scope.e3i($this.i3d_1);
    } else {
      var invalidation = removeLocation($this.z3c_1, $this.o3d_1.k3f_1);
      var slot = $this.o3d_1.x();
      var tmp_0;
      if (equals(slot, Companion_getInstance_0().s3a_1)) {
        var tmp_1 = $this.n3c_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.c3i(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.d3i(!(invalidation == null));
      $this.l3d_1.c3h(scope_0);
      scope_0.e3i($this.i3d_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.f3i(get_movableContentKey(), content);
    $this.k3b(parameter);
    var savedCompoundKeyHash = $this.x3d_1;
    try {
      $this.x3d_1 = get_movableContentKey();
      if ($this.w3d_1) {
        $this.q3d_1.g3i();
      }
      var providersChanged = $this.w3d_1 ? false : !equals($this.o3d_1.z3f(), locals);
      if (providersChanged) {
        $this.c3d_1.h3i($this.o3d_1.i3f_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_1().q3f_1, locals);
      if ($this.w3d_1 ? !force : false) {
        $this.r3d_1 = true;
        $this.s3d_1 = null;
        var anchor = $this.q3d_1.s3g($this.q3d_1.x3f($this.q3d_1.e3a_1));
        var reference = new MovableContentStateReference(content, parameter, $this.n3c_1, $this.p3d_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.i3c_1.i3i(reference);
      } else {
        var savedProvidersInvalid = $this.d3d_1;
        $this.d3d_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.d3d_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.x3d_1 = savedCompoundKeyHash;
      $this.j3i();
    }
  }
  function insertMovableContentGuarded($this, references) {
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var newChanges = $this.m3c_1;
      var savedChanges = $this.l3c_1;
      try {
        $this.l3c_1 = newChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.g1(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.de();
            var from = item.ee();
            var anchor = to.c3c_1;
            var location = to.b3c_1.k3i(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.b3c_1;
              if (equals(toSlotTable, $this.p3d_1)) {
                createFreshInsertTable($this);
              }
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var reader = to.b3c_1.r3e();
              var tmp;
              try {
                reader.b3h(location);
                $this.a3e_1 = location;
                // Inline function 'kotlin.collections.mutableListOf' call
                var offsetChanges = ArrayList_init_$Create$();
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, reader, to));
                var tmp_0;
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!offsetChanges.c1()) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_instance;
                }
                tmp = tmp_0;
              }finally {
                reader.p1i();
              }
            } else {
              var resolvedState = $this.i3c_1.l3i(from);
              var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.m3i_1;
              var fromTable = tmp1_elvis_lhs == null ? from.b3c_1 : tmp1_elvis_lhs;
              var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.m3i_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.s3g(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.c3c_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!nodesToInsert.c1()) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.b3c_1, $this.j3c_1)) {
                  var group = $this.j3c_1.k3i(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.n() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var reader_0 = fromTable.r3e();
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.o3d_1;
                  var savedCountOverrides = $this.u3c_1;
                  $this.u3c_1 = null;
                  try {
                    $this.o3d_1 = reader_0;
                    var newLocation = fromTable.k3i(fromAnchor);
                    reader_0.b3h(newLocation);
                    $this.a3e_1 = newLocation;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    var offsetChanges_0 = ArrayList_init_$Create$();
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.l3c_1;
                      try {
                        $this.l3c_1 = offsetChanges_0;
                        var tmp_2 = reader_0.i3f_1;
                        var tmp_3 = from.d3c_1;
                        recomposeMovableContent($this, from.a3c_1, to.a3c_1, tmp_2, tmp_3, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.l3c_1 = savedChanges_0;
                      }
                    }
                    var tmp_4;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    if (!offsetChanges_0.c1()) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_4 = Unit_instance;
                    }
                    tmp$ret$9 = tmp_4;
                    break $l$block_0;
                  }finally {
                    $this.o3d_1 = savedReader;
                    $this.u3c_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                reader_0.p1i();
              }
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.a3e_1 = 0;
        break $l$block_1;
      }finally {
        $this.l3c_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.c3e_1;
    var savedIsComposing = $this.m3d_1;
    var savedNodeIndex = $this.q3c_1;
    try {
      $this.c3e_1 = false;
      $this.m3d_1 = true;
      $this.q3c_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.g1(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.de();
          var instances = item.ee();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.q3i_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.p3i_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.o3i(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.o3i(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.r3i(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.c3e_1 = savedImplicitRootStart;
      $this.m3d_1 = savedIsComposing;
      $this.q3c_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.s3i(_this__u8e3s4.k3f_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.s3i(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.y3c_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.y3c_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.y3c_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.l3c_1.r(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.y3d_1;
    if (count > 0) {
      $this.y3d_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.z3d_1.t3i()) {
      realizeDowns($this, $this.z3d_1.g3());
      $this.z3d_1.z();
    }
  }
  function recordDown($this, node) {
    $this.z3d_1.c3h(node);
  }
  function recordUp($this) {
    if ($this.z3d_1.t3i()) {
      $this.z3d_1.d3h();
    } else {
      $this.y3d_1 = $this.y3d_1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.o3d_1.k3f_1 : $this.o3d_1.i3f_1;
    var distance = location - $this.a3e_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.a3e_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.v3d_1.c1()) {
      var insertTable = $this.p3d_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.v3d_1);
      $this.v3d_1.z();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.p3d_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.v3d_1.r(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.e3e_1.c3h(change);
  }
  function registerInsertUpFixup($this) {
    $this.v3d_1.r($this.e3e_1.d3h());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.o3d_1.i3f_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    $this.a3e_1 = $this.a3e_1 + $this.o3d_1.u3i() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.y3f();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.r3g();
      writer.c3g(get_movableContentKey(), reference.y3b_1);
      writer.g3i();
      writer.v3i(reference.z3b_1);
      var anchors = slots.w3i(reference.c3c_1, 1, writer);
      writer.t3f();
      writer.n3h();
      writer.o3h();
      tmp = anchors;
    }finally {
      writer.p1i();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.y3i(slotTable, anchors_0)) {
      var composition = $this.n3c_1;
      var movableContentRecomposeScopeOwner = new ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.y3f();
      var tmp_0;
      try {
        Companion_instance_2.x3i(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.p1i();
      }
    }
    $this.i3c_1.z3i(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.j3c_1.a3j()) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var changes = ArrayList_init_$Create$();
      $this.t3d_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.j3c_1.r3e();
      var tmp;
      try {
        $this.o3d_1 = reader;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.l3c_1;
          try {
            $this.l3c_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.b3e_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_instance;
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.l3c_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        reader.p1i();
      }
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.o3d_1.i3f_1 - $this.a3e_1 | 0;
    $this.a3e_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.o3d_1.n() > 0) {
      var reader = $this.o3d_1;
      var location = reader.k3f_1;
      if (!($this.d3e_1.b3j(-2) === location)) {
        if (!$this.b3e_1 ? $this.c3e_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.b3e_1 = true;
        }
        if (location > 0) {
          var anchor = reader.s3g(location);
          $this.d3e_1.x3e(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.o3d_1.k3f_1;
    var currentStartedGroup = $this.d3e_1.b3j(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if ($this.d3e_1.b3j(-1) === location) {
      $this.d3e_1.d3h();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.b3e_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.b3e_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.o3c_1.c1()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.d3e_1.c1()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message_0 = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.p3c_1 = null;
    $this.q3c_1 = 0;
    $this.s3c_1 = 0;
    $this.a3e_1 = 0;
    $this.x3d_1 = 0;
    $this.y3c_1 = false;
    $this.b3e_1 = false;
    $this.d3e_1.z();
    $this.l3d_1.z();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if ($this.f3e_1 === nodeIndex) {
        $this.i3e_1 = $this.i3e_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.f3e_1 = nodeIndex;
        $this.i3e_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.i3e_1 > 0 ? $this.g3e_1 === (from - $this.i3e_1 | 0) : false) ? $this.h3e_1 === (to - $this.i3e_1 | 0) : false) {
        $this.i3e_1 = $this.i3e_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.g3e_1 = from;
        $this.h3e_1 = to;
        $this.i3e_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.i3e_1;
    $this.i3e_1 = 0;
    if (count > 0) {
      if ($this.f3e_1 >= 0) {
        var removeIndex = $this.f3e_1;
        $this.f3e_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.g3e_1;
        $this.g3e_1 = -1;
        var to = $this.h3e_1;
        $this.h3e_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().s3a_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.l9_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var this_0 = $this.x3d_1;
    tmp.x3d_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().s3a_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.l9_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var this_0 = $this.x3d_1 ^ groupKey;
    tmp.x3d_1 = rotateRight(this_0, 3);
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.m3d_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.c3j(sectionName);
      try {
        $this.i3d_1 = currentSnapshot().i37();
        $this.c3d_1.z();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.k3j_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.i3j_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.j3j_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.m3a_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l3j_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.z3c_1.r(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var this_0 = $this.z3c_1;
        if (this_0.n() > 1) {
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(this_0, tmp$ret$1);
        }
        $this.q3c_1 = 0;
        var complete = false;
        $this.m3d_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.m3j();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.c3i((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.k3d_1;
          var observers = derivedStateObservers_0();
          try {
            observers.r3j(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, content);
              endGroup($this);
            } else if ((($this.x3c_1 ? true : $this.d3d_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_0().s3a_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.s3j();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$2 = observers.p3j_1 - 1 | 0;
            observers.i1(tmp$ret$2);
          }
          endRoot($this);
          complete = true;
          tmp_3 = Unit_instance;
        }finally {
          $this.m3d_1 = false;
          $this.z3c_1.z();
          if (!complete) {
            abortRoot($this);
          }
        }
        break $l$block;
      }finally {
        Trace_instance.t3j(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.u3j_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).b9 = function (a, b) {
    return this.u3j_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.b9(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.v3j(index)) {
      slots.c3b();
      if (slots.y3h(slots.e3a_1)) {
        applier.j38();
      }
      slots.n3h();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.d3a_1;
    var current = slots.e3a_1;
    while (current >= 0 ? !slots.y3h(current) : false) {
      current = slots.x3f(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.w3j(original, current)) {
        if (slots.y3h(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.y3h(current) ? 1 : slots.z3h(current)) | 0;
        current = current + slots.g3h(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.k3i(anchor);
    runtimeCheck(slots.d3a_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.d3a_1 < destination) {
      if (slots.y3j(destination)) {
        if (slots.x3j()) {
          applier.i38(slots.s3i(slots.d3a_1));
          nodeIndex = 0;
        }
        slots.a3g();
      } else
        nodeIndex = nodeIndex + slots.t3f() | 0;
    }
    runtimeCheck(slots.d3a_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.o3d_1.l3k(group)) {
      var key = this$0.o3d_1.w3f(group);
      var objectKey = this$0.o3d_1.v3f(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.o3d_1.a3k(group, 0);
        var anchor = this$0.o3d_1.s3g(group);
        var end = group + this$0.o3d_1.g3h(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.z3c_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.n());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.g1(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.q3h_1, item.s3h_1);
            target.r(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.n3c_1, this$0.j3c_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.i3c_1.k3k(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.o3d_1.y3h(group) ? 1 : this$0.o3d_1.z3h(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.o3d_1.z3h(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.o3d_1.a3k(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.b3k_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.g3k_1.u();
            while (tmp0_iterator.v()) {
              var element_0 = tmp0_iterator.x();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.i3c_1.j3k(element_0.n3c_1);
            }
          }
          tmp_0 = this$0.o3d_1.z3h(group);
        } else {
          tmp_0 = this$0.o3d_1.z3h(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.o3d_1.z3j(group)) {
      var size = this$0.o3d_1.g3h(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.o3d_1.y3h(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.o3d_1.s3i(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.o3d_1.g3h(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.o3d_1.z3h(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.m3k_1 = this$0;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.n3k($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.k38($insertIndex, node);
      applier.i38(node);
      return Unit_instance;
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.o3k($groupAnchor);
      applier.j38();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.l38($insertIndex, nodeToInsert);
      return Unit_instance;
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.f38();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).j39();
    return Unit_instance;
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.f38();
      $block((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE(), $value);
      return Unit_instance;
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.p3k($value);
      return Unit_instance;
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.p3k($value);
        tmp = Unit_instance;
      }
      var previous = slots.q3k($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.j3a(previous);
        tmp_0 = Unit_instance;
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          previous.iq();
          tmp_0 = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.x3a(-948105361);
      sourceInformation($composer_0, 'C1996@73844L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-948105361, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1995)');
        tmp = Unit_instance;
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.y3a();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.r3k($data);
      return Unit_instance;
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.s3k($currentRelativePosition);
      return Unit_instance;
    };
  }
  function ComposerImpl$endRestartGroup$lambda($this, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $this(this$0.n3c_1);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.t3k(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112623L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.u3k_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (!isInterface(applier, Applier))
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $reader, $to) {
    return function () {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var this_0 = this$0;
        var newChanges = $offsetChanges;
        var savedChanges = this_0.l3c_1;
        try {
          this_0.l3c_1 = newChanges;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var this_1 = this$0;
            var reader = $reader;
            var savedReader = this_1.o3d_1;
            var savedCountOverrides = this_1.u3c_1;
            this_1.u3c_1 = null;
            try {
              this_1.o3d_1 = reader;
              invokeMovableContentLambda(this$0, $to.y3b_1, $to.e3c_1, $to.z3b_1, true);
              break $l$block;
            }finally {
              this_1.o3d_1 = savedReader;
              this_1.u3c_1 = savedCountOverrides;
            }
          }
          break $l$block_0;
        }finally {
          this_0.l3c_1 = savedChanges;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      var this_0 = $offsetChanges;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.g1(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      var this_0 = $nodesToInsert;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.g1(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!isInterface(applier, Applier))
            THROW_CCE();
          applier.l38(base + index | 0, item);
          applier.k38(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.i3c_1.l3i($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.v3k(1, state.m3i_1, 2);
      var tmp_0 = Companion_instance_2;
      var tmp_1 = $to.a3c_1;
      tmp_0.x3i(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.y3b_1, $to.e3c_1, $to.z3b_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      var this_0 = $offsetChanges;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.g1(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (!isInterface(applier, Applier))
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.n3h();
    return Unit_instance;
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var times = $count;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < times) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.j38();
        }
         while (inductionVariable < times);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.i38($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.w3k($distance);
      return Unit_instance;
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.r3g();
      slots.y3k($insertTable, $anchor.x3k($insertTable), false);
      slots.o3h();
      return Unit_instance;
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer = $insertTable.y3f();
      var tmp;
      try {
        var this_0 = $fixups;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.n() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.g1(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, writer, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }finally {
        writer.p1i();
      }
      slots.r3g();
      slots.y3k($insertTable, $anchor.x3k($insertTable), false);
      slots.o3h();
      return Unit_instance;
    };
  }
  function ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.z3k_1 = $composition;
    this.a3l_1 = $reference;
  }
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).b3l = function (scope, instance) {
    var tmp = this.z3k_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3l(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.a3l_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.d3c_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        this_0.c3l(this_0);
        tmp_2 = this_0;
      }
      tmp_0.d3c_1 = plus_0(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).d3l = function (scope) {
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).e3l = function (value) {
  };
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.f3l($anchor);
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.m38($removeIndex, $count);
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.n38($from, $to, $count);
      return Unit_instance;
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp = a.r3h_1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp$ret$1 = b.r3h_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.h3c_1 = applier;
    this.i3c_1 = parentContext;
    this.j3c_1 = slotTable;
    this.k3c_1 = abandonSet;
    this.l3c_1 = changes;
    this.m3c_1 = lateChanges;
    this.n3c_1 = composition;
    this.o3c_1 = new Stack();
    this.p3c_1 = null;
    this.q3c_1 = 0;
    this.r3c_1 = new IntStack();
    this.s3c_1 = 0;
    this.t3c_1 = new IntStack();
    this.u3c_1 = null;
    this.v3c_1 = null;
    this.w3c_1 = false;
    this.x3c_1 = false;
    this.y3c_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z3c_1 = ArrayList_init_$Create$();
    this.a3d_1 = new IntStack();
    this.b3d_1 = persistentCompositionLocalHashMapOf();
    this.c3d_1 = new IntMap();
    this.d3d_1 = false;
    this.e3d_1 = new IntStack();
    this.f3d_1 = false;
    this.g3d_1 = -1;
    this.h3d_1 = 0;
    this.i3d_1 = 0;
    this.j3d_1 = true;
    var tmp_0 = this;
    tmp_0.k3d_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.l3d_1 = new Stack();
    this.m3d_1 = false;
    this.n3d_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.j3c_1.r3e();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.p1i();
    tmp_1.o3d_1 = this_0;
    this.p3d_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.p3d_1.y3f();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.p1i();
    tmp_2.q3d_1 = this_1;
    this.r3d_1 = false;
    this.s3d_1 = null;
    this.t3d_1 = null;
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.p3d_1.r3e();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.s3g(0);
    }finally {
      reader.p1i();
    }
    tmp_3.u3d_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_5.v3d_1 = ArrayList_init_$Create$();
    this.w3d_1 = false;
    this.x3d_1 = 0;
    this.y3d_1 = 0;
    this.z3d_1 = new Stack();
    this.a3e_1 = 0;
    this.b3e_1 = false;
    this.c3e_1 = true;
    this.d3e_1 = new IntStack();
    this.e3e_1 = new Stack();
    this.f3e_1 = -1;
    this.g3e_1 = -1;
    this.h3e_1 = -1;
    this.i3e_1 = 0;
  }
  protoOf(ComposerImpl).t3a = function () {
    return this.h3c_1;
  };
  protoOf(ComposerImpl).g3l = function () {
    return this.h3d_1 > 0;
  };
  protoOf(ComposerImpl).q3b = function () {
    return this.i3c_1.h3l();
  };
  protoOf(ComposerImpl).x3a = function (key) {
    return start(this, key, null, Companion_getInstance_1().q3f_1, null);
  };
  protoOf(ComposerImpl).y3a = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).f3i = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_1().q3f_1, null);
  };
  protoOf(ComposerImpl).j3i = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).i3l = function () {
    createFreshInsertTable(this);
    this.c3d_1.z();
  };
  protoOf(ComposerImpl).u3a = function () {
    return this.w3d_1;
  };
  protoOf(ComposerImpl).v3a = function () {
    var tmp;
    var tmp_0;
    if ((!this.w3d_1 ? !this.f3d_1 : false) ? !this.d3d_1 : false) {
      var tmp0_safe_receiver = this.j3l();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3l()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.x3c_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).d3b = function () {
    start(this, 125, null, Companion_getInstance_1().r3f_1, null);
    this.y3c_1 = true;
  };
  protoOf(ComposerImpl).e3b = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.w3d_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.r3c_1.l3l();
    var groupAnchor = this.q3d_1.s3g(this.q3d_1.e3a_1);
    this.s3c_1 = this.s3c_1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).f3b = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.w3d_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.o3d_1, this);
    recordDown(this, node);
    var tmp;
    if (this.f3d_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).g3b = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).h3b = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.w3d_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).m3j = function () {
    var tmp;
    if (this.w3d_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().s3a_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.o3d_1.x();
      tmp = this.f3d_1 ? Companion_getInstance_0().s3a_1 : it;
    }
    return tmp;
  };
  protoOf(ComposerImpl).k3b = function (value) {
    var tmp;
    if (!equals(this.m3j(), value)) {
      this.c3i(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).m3b = function (value) {
    var tmp;
    if (!(this.m3j() === value)) {
      this.c3i(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).l3b = function (value) {
    var next = this.m3j();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.c3i(value);
    return true;
  };
  protoOf(ComposerImpl).c3i = function (value) {
    if (this.w3d_1) {
      this.q3d_1.v3i(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.k3c_1.r(value);
      }
    } else {
      var groupSlotIndex = this.o3d_1.m3l() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.k3c_1.r(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).o3b = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.w3d_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.r3d_1 = true;
    } else {
      var tmp = this.o3d_1.n3l(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.o3d_1.n3l(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentCompositionLocalMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.v3a() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.w3d_1 : false) {
      this.c3d_1.h3i(this.o3d_1.i3f_1, providers);
    }
    this.e3d_1.x3e(asInt(this.d3d_1));
    this.d3d_1 = invalid;
    this.s3d_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().q3f_1, providers);
  };
  protoOf(ComposerImpl).p3b = function () {
    endGroup(this);
    endGroup(this);
    this.d3d_1 = asBool(this.e3d_1.d3h());
    this.s3d_1 = null;
  };
  protoOf(ComposerImpl).j3l = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.l3d_1;
    return (this.h3d_1 === 0 ? it.t3i() : false) ? it.l3l() : null;
  };
  protoOf(ComposerImpl).o3i = function (scope, instance) {
    var tmp0_elvis_lhs = scope.m3a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.o3d_1.c3f_1;
    var location = anchor.x3k(slotTable);
    if (this.m3d_1 ? location >= this.o3d_1.i3f_1 : false) {
      insertIfMissing(this.z3c_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).s3j = function () {
    if (this.z3c_1.c1()) {
      skipGroup(this);
    } else {
      var reader = this.o3d_1;
      var key = reader.n3g();
      var dataKey = reader.p3g();
      var aux = reader.z3f();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.x3j(), null);
      recomposeToGroupEnd(this);
      reader.l3h();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).c3b = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.s3c_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.j3l();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o3l();
    }
    if (this.z3c_1.c1()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).z3a = function (key) {
    start(this, key, null, Companion_getInstance_1().q3f_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).a3b = function () {
    var scope = this.l3d_1.t3i() ? this.l3d_1.d3h() : null;
    if (scope != null) {
      scope.d3i(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.p3l(this.i3d_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
    }
    var tmp;
    if ((!(scope == null) ? !scope.r3l() : false) ? scope.e3h() ? true : this.w3c_1 : false) {
      if (scope.m3a_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.w3d_1) {
          tmp_1 = this.q3d_1.s3g(this.q3d_1.e3a_1);
        } else {
          tmp_1 = this.o3d_1.s3g(this.o3d_1.k3f_1);
        }
        tmp_0.m3a_1 = tmp_1;
      }
      scope.q3l(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).s3l = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).b3b = function (sourceInformation) {
    if (this.w3d_1 ? this.j3d_1 : false) {
      this.q3d_1.t3l(sourceInformation);
    }
  };
  protoOf(ComposerImpl).u3l = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.m3d_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.m3d_1 = true;
    try {
      block();
    }finally {
      this.m3d_1 = false;
    }
  };
  protoOf(ComposerImpl).v3l = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l3c_1.c1()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.t3i()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.z3c_1.c1();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.x3c_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      // Inline function 'kotlin.collections.isNotEmpty' call
      return !this.l3c_1.c1();
    }
    return false;
  };
  protoOf(ComposerImpl).w3a = function () {
    return this.j3l();
  };
  protoOf(ComposerImpl).i3b = function () {
    return this.m3j();
  };
  protoOf(ComposerImpl).j3b = function (value) {
    return this.c3i(value);
  };
  protoOf(ComposerImpl).n3b = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.w3l(true);
    }
  };
  protoOf(ComposerImpl).x3l = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l3c_1.c1()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function MovableContentState(slotTable) {
    this.m3i_1 = slotTable;
    this.n3i_1 = 8;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.f3g_1.n();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.f3g_1.g1(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.f3g_1 = keyInfos;
    this.g3g_1 = startIndex;
    this.h3g_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.g3g_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i3g_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.f3g_1.n();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.f3g_1.g1(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.v3g_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.w3g_1);
        result.n2(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.w3g_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.j3g_1 = result;
    var tmp_1 = this;
    tmp_1.k3g_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).y3l = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.k3g_1;
    keyMap$factory();
    return this_0.q2();
  };
  protoOf(Pending).q3g = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.y3l(), joinedKey);
  };
  protoOf(Pending).m3g = function (keyInfo) {
    return this.i3g_1.r(keyInfo);
  };
  protoOf(Pending).e3h = function () {
    return this.i3g_1;
  };
  protoOf(Pending).a3h = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.j3g_1.l2().u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.z3l_1;
        if (position === from)
          element.z3l_1 = to;
        else if (to <= position ? position < from : false)
          element.z3l_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.j3g_1.l2().u();
      while (tmp0_iterator_0.v()) {
        var element_0 = tmp0_iterator_0.x();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.z3l_1;
        if (position_0 === from)
          element_0.z3l_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.z3l_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).i3h = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.j3g_1.l2().u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.a3m_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.a3m_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.a3m_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.j3g_1.l2().u();
      while (tmp0_iterator_0.v()) {
        var element_0 = tmp0_iterator_0.x();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.a3m_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.a3m_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.a3m_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).l3g = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.j3g_1;
    var key = keyInfo.v3g_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.n2(key, value);
  };
  protoOf(Pending).f3h = function (group, newCount) {
    var groupInfo = this.j3g_1.x2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.a3m_1;
      var difference = newCount - groupInfo.b3m_1 | 0;
      groupInfo.b3m_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.j3g_1.l2().u();
        while (tmp0_iterator.v()) {
          var element = tmp0_iterator.x();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.a3m_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.a3m_1 + difference | 0;
            if (newIndex >= 0)
              element.a3m_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).z3g = function (keyInfo) {
    var tmp0_safe_receiver = this.j3g_1.x2(keyInfo.v3g_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3l_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).y3g = function (keyInfo) {
    var tmp0_safe_receiver = this.j3g_1.x2(keyInfo.v3g_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a3m_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).h3h = function (keyInfo) {
    var tmp0_safe_receiver = this.j3g_1.x2(keyInfo.v3g_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3m_1;
    return tmp1_elvis_lhs == null ? keyInfo.w3g_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.q3h_1 = scope;
    this.r3h_1 = location;
    this.s3h_1 = instances;
  }
  protoOf(Invalidation).w3h = function () {
    return this.q3h_1.c3m(this.s3h_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.q3f_1 = _GroupKind___init__impl__iwqg06(0);
    this.r3f_1 = _GroupKind___init__impl__iwqg06(1);
    this.s3f_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.n()) {
      var validation = _this__u8e3s4.g1(index);
      if (validation.r3h_1 < end) {
        _this__u8e3s4.i1(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.n()) {
      var firstInvalidation = _this__u8e3s4.g1(index);
      if (firstInvalidation.r3h_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.i1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.x3f(a) === b)
      return b;
    if (_this__u8e3s4.x3f(b) === a)
      return a;
    if (_this__u8e3s4.x3f(a) === _this__u8e3s4.x3f(b))
      return _this__u8e3s4.x3f(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.x3f(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.x3f(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.x3f(currentA);
      currentB = _this__u8e3s4.x3f(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        this_0.c3l(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.v1(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.g1(index).s3h_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.g1(index).s3h_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.c3l(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.r3e();
    var tmp;
    try {
      var index = _this__u8e3s4.k3i(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.p1i();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.n()) {
      var invalidation = _this__u8e3s4.g1(index);
      if (invalidation.r3h_1 < end) {
        result.r(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.z3l_1 = slotIndex;
    this.a3m_1 = nodeIndex;
    this.b3m_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.x2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.n2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.r(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.u3g_1 == null) ? new JoinedKey(_this__u8e3s4.t3g_1, _this__u8e3s4.u3g_1) : _this__u8e3s4.t3g_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.x2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.n() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.g1(mid);
      var cmp = compareTo(midVal.r3h_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.x3f(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.x2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.s(value);
      var tmp_0;
      if (tmp0_safe_receiver.c1()) {
        _this__u8e3s4.r2(key);
        tmp_0 = Unit_instance;
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    var tmp;
    if ($this$with.u3a() ? true : !equals($this$with.i3b(), value)) {
      $this$with.j3b(value);
      _Updater___get_composer__impl__9ty7av($this).h3b(value, block);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.y3h(group)) {
      result.r($reader.s3i(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.g3h(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.g3h(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_instance;
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.c3b();
    return Unit_instance;
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.n3h();
    return Unit_instance;
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.d3m(0);
    return Unit_instance;
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.y1g();
    return Unit_instance;
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.y3l();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.u3m_1.g3l();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.g3m_1.b3n(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.g3m_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.g3m_1.b3n(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.g3m_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = $this.k3m_1;
    var index = find_2(this_0, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.q3i_1;
      var inductionVariable = 0;
      var last = this_1.p3i_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          if (!$this.p3m_1.i3n(value, scope) ? !scope.d3n(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (scope.c3n() ? !forgetConditionalScopes : false) {
              $this.l3m_1.r(scope);
            } else {
              if (set == null)
                set = HashSet_init_$Create$();
              var tmp0_safe_receiver = set;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver.r(scope);
            }
          }
        }
         while (inductionVariable < last);
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = null;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.q3i_1;
      var inductionVariable = 0;
      var last = values.p3i_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.d3n(null);
          } else {
            invalidated = addPendingInvalidationsLocked(invalidated, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var this_0 = $this.m3m_1;
            var index = find_2(this_0, value);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var this_1 = scopeSetAt(this_0, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_1 = this_1.q3i_1;
              var inductionVariable_0 = 0;
              var last_0 = this_1.p3i_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  var tmp_0 = values_1[i_0];
                  var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                  invalidated = addPendingInvalidationsLocked(invalidated, $this, it, forgetConditionalScopes);
                }
                 while (inductionVariable_0 < last_0);
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.d3n(null);
        } else {
          invalidated = addPendingInvalidationsLocked(invalidated, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var this_2 = $this.m3m_1;
          var index_0 = find_2(this_2, element);
          if (index_0 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var this_3 = scopeSetAt(this_2, index_0);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = this_3.q3i_1;
            var inductionVariable_1 = 0;
            var last_1 = this_3.p3i_1;
            if (inductionVariable_1 < last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var tmp_1 = values_2[i_1];
                var it_0 = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
                invalidated = addPendingInvalidationsLocked(invalidated, $this, it_0, forgetConditionalScopes);
              }
               while (inductionVariable_1 < last_1);
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.l3m_1.c1();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var this_4 = $this.k3m_1;
      var valueOrder = this_4.e3n_1;
      var scopeSets = this_4.g3n_1;
      var values_3 = this_4.f3n_1;
      var destinationIndex = 0;
      var inductionVariable_2 = 0;
      var last_2 = this_4.h3n_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var valueIndex = valueOrder[i_2];
          var set = ensureNotNull(scopeSets[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var values_4 = set.q3i_1;
          var size = set.p3i_1;
          var destinationIndex_0 = 0;
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < size)
            do {
              var i_3 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              var tmp_3 = values_4[i_3];
              var item = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_4;
              if ($this.l3m_1.a1(item)) {
                tmp_4 = true;
              } else {
                var tmp0_safe_receiver = invalidated;
                var tmp_5;
                if (tmp0_safe_receiver == null) {
                  tmp_5 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp_5 = tmp0_safe_receiver.a1(item);
                }
                tmp_4 = tmp_5 === true;
              }
              if (!tmp_4) {
                if (!(destinationIndex_0 === i_3)) {
                  values_4[destinationIndex_0] = item;
                }
                destinationIndex_0 = destinationIndex_0 + 1 | 0;
              }
            }
             while (inductionVariable_3 < size);
          var inductionVariable_4 = destinationIndex_0;
          if (inductionVariable_4 < size)
            do {
              var i_4 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              values_4[i_4] = null;
            }
             while (inductionVariable_4 < size);
          set.p3i_1 = destinationIndex_0;
          if (set.p3i_1 > 0) {
            if (!(destinationIndex === i_2)) {
              var destinationKeyOrder = valueOrder[destinationIndex];
              valueOrder[destinationIndex] = valueIndex;
              valueOrder[i_2] = destinationKeyOrder;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable_2 < last_2);
      var inductionVariable_5 = destinationIndex;
      var last_3 = this_4.h3n_1;
      if (inductionVariable_5 < last_3)
        do {
          var i_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          values_3[valueOrder[i_5]] = null;
        }
         while (inductionVariable_5 < last_3);
      this_4.h3n_1 = destinationIndex;
      $this.l3m_1.z();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_0 = invalidated;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var this_5 = $this.k3m_1;
        var valueOrder_0 = this_5.e3n_1;
        var scopeSets_0 = this_5.g3n_1;
        var values_5 = this_5.f3n_1;
        var destinationIndex_1 = 0;
        var inductionVariable_6 = 0;
        var last_4 = this_5.h3n_1;
        if (inductionVariable_6 < last_4)
          do {
            var i_6 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var valueIndex_0 = valueOrder_0[i_6];
            var set_0 = ensureNotNull(scopeSets_0[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var values_6 = set_0.q3i_1;
            var size_0 = set_0.p3i_1;
            var destinationIndex_2 = 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < size_0)
              do {
                var i_7 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                var tmp_6 = values_6[i_7];
                var item_0 = !(tmp_6 == null) ? tmp_6 : THROW_CCE();
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                if (!tmp0_safe_receiver_0.a1(item_0)) {
                  if (!(destinationIndex_2 === i_7)) {
                    values_6[destinationIndex_2] = item_0;
                  }
                  destinationIndex_2 = destinationIndex_2 + 1 | 0;
                }
              }
               while (inductionVariable_7 < size_0);
            var inductionVariable_8 = destinationIndex_2;
            if (inductionVariable_8 < size_0)
              do {
                var i_8 = inductionVariable_8;
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                values_6[i_8] = null;
              }
               while (inductionVariable_8 < size_0);
            set_0.p3i_1 = destinationIndex_2;
            if (set_0.p3i_1 > 0) {
              if (!(destinationIndex_1 === i_6)) {
                var destinationKeyOrder_0 = valueOrder_0[destinationIndex_1];
                valueOrder_0[destinationIndex_1] = valueIndex_0;
                valueOrder_0[i_6] = destinationKeyOrder_0;
              }
              destinationIndex_1 = destinationIndex_1 + 1 | 0;
            }
          }
           while (inductionVariable_6 < last_4);
        var inductionVariable_9 = destinationIndex_1;
        var last_5 = this_5.h3n_1;
        if (inductionVariable_9 < last_5)
          do {
            var i_9 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            values_5[valueOrder_0[i_9]] = null;
          }
           while (inductionVariable_9 < last_5);
        this_5.h3n_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var this_0 = $this.m3m_1;
    var valueOrder = this_0.e3n_1;
    var scopeSets = this_0.g3n_1;
    var values = this_0.f3n_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this_0.h3n_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var values_0 = set.q3i_1;
        var size = set.p3i_1;
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = values_0[i_0];
            var item = !(tmp == null) ? tmp : THROW_CCE();
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            if (!!$this.k3m_1.j3n(item)) {
              if (!(destinationIndex_0 === i_0)) {
                values_0[destinationIndex_0] = item;
              }
              destinationIndex_0 = destinationIndex_0 + 1 | 0;
            }
          }
           while (inductionVariable_0 < size);
        var inductionVariable_1 = destinationIndex_0;
        if (inductionVariable_1 < size)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            values_0[i_1] = null;
          }
           while (inductionVariable_1 < size);
        set.p3i_1 = destinationIndex_0;
        if (set.p3i_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_0 = this_0.h3n_1;
    if (inductionVariable_2 < last_0)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        values[valueOrder[i_2]] = null;
      }
       while (inductionVariable_2 < last_0);
    this_0.h3n_1 = destinationIndex;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.l3m_1.c1()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.l3m_1.u();
      while (iter.v()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.x().c3n()) {
          iter.w();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = $this.k3m_1;
    var index = find_2(this_0, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.q3i_1;
      var inductionVariable = 0;
      var last = this_1.p3i_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          if (scope.d3n(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.p3m_1.k3n(value, scope);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.i3m_1);
    try {
      if (changes.c1())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.c3j(sectionName);
        try {
          $this.f3m_1.g38();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.j3m_1.y3f();
          var tmp;
          try {
            var applier = $this.f3m_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.n() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.g1(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, writer, manager);
              }
               while (inductionVariable <= last);
            changes.z();
            tmp = Unit_instance;
          }finally {
            writer.p1i();
          }
          $this.f3m_1.h38();
          break $l$block;
        }finally {
          Trace_instance.t3j(token);
        }
      }
      manager.r3n();
      manager.s3n();
      if ($this.r3m_1) {
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.c3j(sectionName_0);
          try {
            $this.r3m_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var this_0 = $this.k3m_1;
            var valueOrder = this_0.e3n_1;
            var scopeSets = this_0.g3n_1;
            var values = this_0.f3n_1;
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = this_0.h3n_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = valueOrder[i];
                var set = ensureNotNull(scopeSets[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var values_0 = set.q3i_1;
                var size = set.p3i_1;
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < size)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = values_0[i_0];
                    var item_0 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    if (!!item_0.t3n()) {
                      if (!(destinationIndex_0 === i_0)) {
                        values_0[destinationIndex_0] = item_0;
                      }
                      destinationIndex_0 = destinationIndex_0 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < size);
                var inductionVariable_2 = destinationIndex_0;
                if (inductionVariable_2 < size)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    values_0[i_1] = null;
                  }
                   while (inductionVariable_2 < size);
                set.p3i_1 = destinationIndex_0;
                if (set.p3i_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = valueOrder[destinationIndex];
                    valueOrder[destinationIndex] = valueIndex;
                    valueOrder[i] = destinationKeyOrder;
                  }
                  destinationIndex = destinationIndex + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_1 = this_0.h3n_1;
            if (inductionVariable_3 < last_1)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                values[valueOrder[i_2]] = null;
              }
               while (inductionVariable_3 < last_1);
            this_0.h3n_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            break $l$block_0;
          }finally {
            Trace_instance.t3j(token_0);
          }
        }
      }
    }finally {
      if ($this.o3m_1.c1()) {
        manager.u3n();
      }
    }
  }
  function abandonChanges($this) {
    $this.g3m_1.v3n(null);
    $this.n3m_1.z();
    $this.o3m_1.z();
    $this.i3m_1.z();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.w3n() ? $this.u3m_1.o3i(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.h3m_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.s3m_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.j3m_1.x3n($this.t3m_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.q3m_1.y3n(scope, null);
      } else {
        addValue($this.q3m_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.e3m_1.z3n($this);
    return $this.w3n() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.q3m_1;
    $this.q3m_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.l3n_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m3n_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n3n_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.o3n_1 = ArrayList_init_$Create$();
    this.p3n_1 = null;
    this.q3n_1 = null;
  }
  protoOf(RememberEventDispatcher).p3k = function (instance) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var index = this.n3n_1.y1(instance);
    var tmp;
    if (index >= 0) {
      this.n3n_1.i1(index);
      tmp = this.l3n_1.s(instance);
    } else {
      tmp = this.m3n_1.r(instance);
    }
  };
  protoOf(RememberEventDispatcher).j3a = function (instance) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var index = this.m3n_1.y1(instance);
    var tmp;
    if (index >= 0) {
      this.m3n_1.i1(index);
      tmp = this.l3n_1.s(instance);
    } else {
      tmp = this.n3n_1.r(instance);
    }
  };
  protoOf(RememberEventDispatcher).i3a = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.q3n_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.q3n_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.r(instance);
  };
  protoOf(RememberEventDispatcher).r3n = function () {
    var deactivating = this.p3n_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(deactivating == null ? true : deactivating.c1())) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:deactivations';
        var token = Trace_instance.c3j(sectionName);
        try {
          var inductionVariable = deactivating.n() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.g1(i);
              instance.k39();
            }
             while (0 <= inductionVariable);
            tmp = Unit_instance;
          }
          break $l$block;
        }finally {
          Trace_instance.t3j(token);
        }
      }
      deactivating.z();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n3n_1.c1()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onForgotten';
        var token_0 = Trace_instance.c3j(sectionName_0);
        try {
          var inductionVariable_0 = this.n3n_1.n() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = this.n3n_1.g1(i_0);
              if (!this.l3n_1.a1(instance_0)) {
                instance_0.a3o();
              }
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_instance;
          }
          break $l$block_0;
        }finally {
          Trace_instance.t3j(token_0);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m3n_1.c1()) {
      $l$block_1: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_1 = 'Compose:onRemembered';
        var token_1 = Trace_instance.c3j(sectionName_1);
        try {
          var this_0 = this.m3n_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_1 = 0;
          var last = this_0.n() - 1 | 0;
          var tmp_1;
          if (inductionVariable_1 <= last) {
            do {
              var index = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var item = this_0.g1(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.l3n_1.s(item);
              item.b3o();
            }
             while (inductionVariable_1 <= last);
            tmp_1 = Unit_instance;
          }
          break $l$block_1;
        }finally {
          Trace_instance.t3j(token_1);
        }
      }
    }
    var releasing = this.q3n_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(releasing == null ? true : releasing.c1())) {
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_2 = 'Compose:releases';
        var token_2 = Trace_instance.c3j(sectionName_2);
        try {
          var inductionVariable_2 = releasing.n() - 1 | 0;
          var tmp_2;
          if (0 <= inductionVariable_2) {
            do {
              var i_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + -1 | 0;
              var instance_1 = releasing.g1(i_1);
              instance_1.l39();
            }
             while (0 <= inductionVariable_2);
            tmp_2 = Unit_instance;
          }
          break $l$block_2;
        }finally {
          Trace_instance.t3j(token_2);
        }
      }
      releasing.z();
    }
  };
  protoOf(RememberEventDispatcher).s3n = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.o3n_1.c1()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.c3j(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.o3n_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.n() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.g1(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.o3n_1.z();
          break $l$block;
        }finally {
          Trace_instance.t3j(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).u3n = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.l3n_1.c1()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.c3j(sectionName);
        try {
          var iterator = this.l3n_1.u();
          while (iterator.v()) {
            var instance = iterator.x();
            iterator.w();
            instance.c3o();
          }
          break $l$block;
        }finally {
          Trace_instance.t3j(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.e3m_1 = parent;
    this.f3m_1 = applier;
    this.g3m_1 = new AtomicReference(null);
    this.h3m_1 = createSynchronizedObject();
    this.i3m_1 = HashSet_init_$Create$();
    this.j3m_1 = new SlotTable();
    this.k3m_1 = new IdentityScopeMap();
    this.l3m_1 = HashSet_init_$Create$();
    this.m3m_1 = new IdentityScopeMap();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n3m_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.o3m_1 = ArrayList_init_$Create$();
    this.p3m_1 = new IdentityScopeMap();
    this.q3m_1 = new IdentityArrayMap();
    this.r3m_1 = false;
    this.s3m_1 = null;
    this.t3m_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.f3m_1, this.e3m_1, this.j3m_1, this.i3m_1, this.n3m_1, this.o3m_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.e3m_1.d3o(this_0);
    tmp_1.u3m_1 = this_0;
    this.v3m_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.e3m_1;
    tmp_2.w3m_1 = tmp_3 instanceof Recomposer;
    this.x3m_1 = false;
    this.y3m_1 = ComposableSingletons$CompositionKt_getInstance().e3o_1;
  }
  protoOf(CompositionImpl).w3n = function () {
    return this.u3m_1.m3d_1;
  };
  protoOf(CompositionImpl).g3o = function () {
    return this.x3m_1;
  };
  protoOf(CompositionImpl).h3o = function (values) {
    $l$loop: while (true) {
      var old = this.g3m_1.br();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_1((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + this.g3m_1;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.g3m_1.i3o(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.h3m_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).j3o = function (values) {
    var tmp0_iterator = values.u();
    while (tmp0_iterator.v()) {
      var value = tmp0_iterator.x();
      if (this.k3m_1.j3n(value) ? true : this.m3m_1.j3n(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).u3l = function (block) {
    return this.u3m_1.u3l(block);
  };
  protoOf(CompositionImpl).e3l = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.u3m_1.j3l();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.w3l(true);
        var alreadyRead = tmp0_safe_receiver.k3o(value);
        var tmp;
        if (!alreadyRead) {
          this.k3m_1.k3n(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.m3m_1.l3o(value);
            var indexedObject = value.m3o().n3o();
            var inductionVariable = 0;
            var last = indexedObject.length;
            $l$loop: while (inductionVariable < last) {
              var dependency = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (dependency == null)
                break $l$loop;
              this.m3m_1.k3n(dependency, value);
            }
            tmp_0 = Unit_instance;
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).o3o = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h3m_1;
    invalidateScopeOfLocked(this, value);
    var this_0 = this.m3m_1;
    var index = find_2(this_0, value);
    var tmp;
    if (index >= 0) {
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.q3i_1;
      var inductionVariable = 0;
      var last = this_1.p3i_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          invalidateScopeOfLocked(this, it);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CompositionImpl).p3o = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h3m_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.also' call
          var this_0 = this.u3m_1.v3l(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.q3m_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.i3m_1.c1();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.i3m_1)).u3n();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).q3o = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.g1(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.be_1.a3c_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.u3m_1.s3l(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.i3m_1.c1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.i3m_1)).u3n();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).r3o = function (state) {
    var manager = new RememberEventDispatcher(this.i3m_1);
    var slotTable = state.m3i_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.y3f();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.p1i();
    }
    manager.r3n();
  };
  protoOf(CompositionImpl).s3o = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h3m_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.n3m_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.i3m_1.c1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.i3m_1)).u3n();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).t3o = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h3m_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.o3m_1.c1()) {
          applyChangesInLocked(this, this.o3m_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.i3m_1.c1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.i3m_1)).u3n();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).i3l = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h3m_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>.<anonymous>' call
        this.u3m_1.i3l();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.i3m_1.c1()) {
          (new RememberEventDispatcher(this.i3m_1)).u3n();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.i3m_1.c1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.i3m_1)).u3n();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).u3o = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h3m_1;
    var indexedObject = this.j3m_1.l3e_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.v3o();
      }
    }
  };
  protoOf(CompositionImpl).r3i = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.s3m_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.t3m_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.s3m_1 = null;
        this.t3m_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).b3l = function (scope, instance) {
    if (scope.w3o()) {
      scope.q3l(true);
    }
    var anchor = scope.m3a_1;
    if (anchor == null ? true : !anchor.t3n())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.j3m_1.x3o(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.h3m_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.s3m_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.y3o())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).d3l = function (scope) {
    this.r3m_1 = true;
  };
  protoOf(CompositionImpl).z3o = function (instance, scope) {
    this.k3m_1.i3n(instance, scope);
  };
  protoOf(CompositionImpl).a3p = function (state) {
    if (!this.k3m_1.j3n(state)) {
      this.m3m_1.l3o(state);
    }
  };
  protoOf(CompositionImpl).b3p = function (set__$_ezb9bk) {
    this.y3m_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).c3p = function (content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.x3m_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.b3p(content);
    this.e3m_1.d3p(this, this.y3m_1);
  };
  protoOf(CompositionImpl).e3p = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent$composable.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.h3m_1;
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.u3m_1.x3l(invalidations, content);
          tmp_1 = Unit_instance;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.q3m_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.i3m_1.c1();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.i3m_1)).u3n();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.t3k(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:506)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.t3k(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:597)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.e3o_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.f3o_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.g3p(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.f3p(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.c3l(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.c3l(value);
      _this__u8e3s4.y3n(key, this_0);
    }
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
    this.s3e_1 = 0;
  }
  protoOf(CompositionContext).z3e = function (table) {
  };
  protoOf(CompositionContext).d3o = function (composer) {
  };
  protoOf(CompositionContext).u3e = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).t3e = function () {
  };
  protoOf(CompositionContext).b3f = function () {
  };
  protoOf(CompositionContext).l3i = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.h3p_1 = new LazyValueHolder(defaultFactory);
    this.i3p_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.m3p_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).n3p = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).j3p = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.x3a(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.y3a();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@10002L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.o3b(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.p3b();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.v3p_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).j3p = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.x3a(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    // Inline function 'kotlin.apply' call
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
    if (false ? true : it === Companion_getInstance_0().s3a_1) {
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      var value_0 = mutableStateOf(value, this.v3p_1);
      $composer_1.j3b(value_0);
      tmp = value_0;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.y3a();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp0.b13(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.y3a();
    return tmp0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.h3p_1.q2();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.u2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.x2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.x3a(-2040419351);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):CompositionLocalMap.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-2040419351, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (CompositionLocalMap.kt:91)');
    }
    var result = persistentCompositionLocalHashMapOf();
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = result.d2e();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var provided = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.x3a(1391435594);
      sourceInformation($composer_0, '*101@4372L24');
      if (provided.t3b_1 ? true : !contains_0(parentScope, provided.r3b_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.r3b_1;
        var key = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var value = provided.r3b_1.j3p(provided.s3b_1, $composer_0, 0);
        this_0.n2(key, value);
      }
      $composer_0.y3a();
    }
    var tmp0 = this_0.w1c();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.y3a();
    return tmp0;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().br();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().a3q(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.b3q_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.x3a(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)337@14241L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:332)');
    }
    var applyContext = $composer_0.q3b();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.x3a(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.k3b(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.i3b();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().s3a_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.j3b(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.y3a();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.y3a();
  }
  function DisposableEffect$composable(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.x3a(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.x3a(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.k3b(key1) | $composer_1.k3b(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.i3b();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().s3a_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.j3b(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.y3a();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.y3a();
  }
  function DisposableEffect$composable_0(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.x3a(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.x3a(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.k3b(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.i3b();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().s3a_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.j3b(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.y3a();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.y3a();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.c3q_1 = task;
    this.d3q_1 = CoroutineScope(parentCoroutineContext);
    this.e3q_1 = null;
  }
  protoOf(LaunchedEffectImpl).b3o = function () {
    var tmp0_safe_receiver = this.e3q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.e3q_1 = launch(this.d3q_1, VOID, VOID, this.c3q_1);
  };
  protoOf(LaunchedEffectImpl).a3o = function () {
    var tmp0_safe_receiver = this.e3q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dl(new LeftCompositionCancellationException());
    }
    this.e3q_1 = null;
  };
  protoOf(LaunchedEffectImpl).c3o = function () {
    var tmp0_safe_receiver = this.e3q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dl(new LeftCompositionCancellationException());
    }
    this.e3q_1 = null;
  };
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.f3q_1 = coroutineScope;
  }
  protoOf(CompositionScopedCoroutineScopeCanceller).b3o = function () {
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).a3o = function () {
    cancel_0(this.f3q_1, new LeftCompositionCancellationException());
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).c3o = function () {
    cancel_0(this.f3q_1, new LeftCompositionCancellationException());
  };
  function createCompositionCoroutineScope(coroutineContext, composer) {
    _init_properties_Effects_kt__be5lps();
    var tmp;
    if (!(coroutineContext.wb(Key_instance) == null)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Job();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      this_0.zp(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp = CoroutineScope(this_0);
    } else {
      var applyContext = composer.q3b();
      tmp = CoroutineScope(applyContext.ze(Job(applyContext.wb(Key_instance))).ze(coroutineContext));
    }
    return tmp;
  }
  function DisposableEffectImpl(effect) {
    this.g3q_1 = effect;
    this.h3q_1 = null;
  }
  protoOf(DisposableEffectImpl).b3o = function () {
    this.h3q_1 = this.g3q_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).a3o = function () {
    var tmp0_safe_receiver = this.h3q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.jn();
    }
    this.h3q_1 = null;
  };
  protoOf(DisposableEffectImpl).c3o = function () {
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.l9_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.i3q_1 = left;
    this.j3q_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.i3q_1), 31) + hashCodeOf(this, this.j3q_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.i3q_1) + ', right=' + toString_0(this.j3q_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.i3q_1, tmp0_other_with_cast.i3q_1))
      return false;
    if (!equals(this.j3q_1, tmp0_other_with_cast.j3q_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.wb(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.k3q_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.k3q_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.k3q_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.k3q_1 === tmp0_other_with_cast.k3q_1))
      return false;
    return true;
  };
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.k3a_1 = $this.k3a_1 | 32;
    } else {
      $this.k3a_1 = $this.k3a_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.k3a_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.k3a_1 = $this.k3a_1 | 16;
    } else {
      $this.k3a_1 = $this.k3a_1 & -17;
    }
  }
  function Companion_1() {
  }
  protoOf(Companion_1).x3i = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.c1()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.g1(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.l3q(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.m3q(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).y3i = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.c1()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.g1(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.x3o(item)) {
              var tmp_1 = slots.n3q(slots.k3i(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.o3a_1 === $token ? equals($instances, this$0.p3a_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var this_0 = $instances;
        var keys = this_0.p3q_1;
        var values = this_0.q3q_1;
        var size = this_0.o3q_1;
        var destinationIndex = 0;
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = keys[i];
            var key = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
            var value = values[i];
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.also' call
            var this_1 = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (this_1) {
              composition.z3o(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.a3p(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.q3a_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.r3q(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.k3j_1 === 0) {
                    this$0.q3a_1 = null;
                    tmp_3 = Unit_instance;
                  }
                  tmp_2 = Unit_instance;
                }
              }
            }
            if (!this_1) {
              if (!(destinationIndex === i)) {
                keys[destinationIndex] = key;
                values[destinationIndex] = value;
              }
              destinationIndex = destinationIndex + 1 | 0;
            }
          }
           while (inductionVariable < size);
        var inductionVariable_0 = destinationIndex;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            keys[i_0] = null;
          }
           while (inductionVariable_0 < size);
        this_0.o3q_1 = destinationIndex;
        var tmp_4;
        if ($instances.o3q_1 === 0) {
          this$0.p3a_1 = null;
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.k3a_1 = 0;
    this.l3a_1 = owner;
    this.m3a_1 = null;
    this.n3a_1 = null;
    this.o3a_1 = 0;
    this.p3a_1 = null;
    this.q3a_1 = null;
  }
  protoOf(RecomposeScopeImpl).t3n = function () {
    var tmp;
    if (!(this.l3a_1 == null)) {
      var tmp0_safe_receiver = this.m3a_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3n();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).y3o = function () {
    return !(this.n3a_1 == null);
  };
  protoOf(RecomposeScopeImpl).w3l = function (value) {
    if (value) {
      this.k3a_1 = this.k3a_1 | 1;
    } else {
      this.k3a_1 = this.k3a_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).e3h = function () {
    return !((this.k3a_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).w3o = function () {
    return !((this.k3a_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).q3l = function (value) {
    if (value) {
      this.k3a_1 = this.k3a_1 | 4;
    } else {
      this.k3a_1 = this.k3a_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).d3i = function (value) {
    if (value) {
      this.k3a_1 = this.k3a_1 | 8;
    } else {
      this.k3a_1 = this.k3a_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).k3l = function () {
    return !((this.k3a_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).u3h = function (composer) {
    var tmp0_safe_receiver = this.n3a_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).d3n = function (value) {
    var tmp0_safe_receiver = this.l3a_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3l(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).iq = function () {
    var tmp0_safe_receiver = this.l3a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d3l(this);
    }
    this.l3a_1 = null;
    this.p3a_1 = null;
    this.q3a_1 = null;
  };
  protoOf(RecomposeScopeImpl).m3q = function (owner) {
    this.l3a_1 = owner;
  };
  protoOf(RecomposeScopeImpl).v3o = function () {
    var tmp0_safe_receiver = this.l3a_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.b3l(this, null);
  };
  protoOf(RecomposeScopeImpl).r3p = function (block) {
    this.n3a_1 = block;
  };
  protoOf(RecomposeScopeImpl).r3l = function () {
    return !((this.k3a_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).e3i = function (token) {
    this.o3a_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).o3l = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).k3o = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.p3a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.p3a_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.s3q(instance, this.o3a_1);
    if (token === this.o3a_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.q3a_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.q3a_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.y3n(instance, instance.m3o().t3q());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).c3n = function () {
    return !(this.q3a_1 == null);
  };
  protoOf(RecomposeScopeImpl).c3m = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.q3a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.t3i()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.c1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.u();
        while (tmp0_iterator.v()) {
          var element = tmp0_iterator.x();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.x3p();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.u3q(element.m3o().t3q(), trackedDependencies.f3p(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).t3h = function () {
    var tmp0_safe_receiver = this.l3a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.p3a_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var keys = tmp0_safe_receiver_0.p3q_1;
          var values = tmp0_safe_receiver_0.q3q_1;
          var size = tmp0_safe_receiver_0.o3q_1;
          var inductionVariable = 0;
          var tmp_1;
          if (inductionVariable < size) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              var value = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
              values[i];
              tmp0_safe_receiver.e3l(value);
            }
             while (inductionVariable < size);
            tmp_1 = Unit_instance;
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).p3l = function (token) {
    var tmp0_safe_receiver = this.p3a_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.r3l()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var keys = tmp0_safe_receiver.p3q_1;
          var values = tmp0_safe_receiver.q3q_1;
          var size = tmp0_safe_receiver.o3q_1;
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              !(tmp_2 == null) || THROW_CCE();
              if (!(values[i] === token)) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < size);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.v3q_1.q2();
      var new_0 = old.r(info);
      if (old === new_0 ? true : $this.v3q_1.c13(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.v3q_1.q2();
      var new_0 = old.s(info);
      if (old === new_0 ? true : $this.v3q_1.c13(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.z();
    toInsert.z();
    toApply.z();
    toLateApply.z();
    toComplete.z();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.z();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.a3r_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.h3r_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.g1(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.r(item);
      }
       while (inductionVariable <= last);
    this$0.h3r_1.z();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.c3j(sectionName);
          try {
            this$0.z3q_1.h39(frameTime);
            Companion_instance_9.w3r();
            break $l$block;
          }finally {
            Trace_instance.t3j(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.c3j(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.a3r_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.f3r_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.n() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.g1(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.r(item);
            }
             while (inductionVariable <= last);
          this$0.f3r_1.z();
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.c1()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.c1();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.n() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.g1(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.c3l(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.r(tmp0_safe_receiver);
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.z();
            }
            if (modifiedValues.t3i()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.a3r_1;
              var this_2 = this$0.d3r_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.n() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.g1(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.x3r(item_1) ? item_1.j3o(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.r(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_instance;
              }
            }
            if ($toRecompose.c1()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.c1()) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var this_3 = $toLateApply;
                  var elements = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll(this_3, elements);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.c1()) {
            var tmp0_this = this$0;
            tmp0_this.y3q_1 = tmp0_this.y3q_1.wa();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.n() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.g1(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.r(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.n() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.g1(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.s3o();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.z();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.c1()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.u();
              while (tmp0_iterator.v()) {
                var element = tmp0_iterator.x();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.t3o();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.z();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.c1()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.u();
              while (tmp0_iterator_0.v()) {
                var element_0 = tmp0_iterator_0.x();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.i3l();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.z();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.a3r_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_9.y3r();
          this$0.l3r_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.t3j(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.a3r_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.r3r_1.q2().m9(State_Idle_getInstance()) >= 0) {
        this$0.e3r_1.z3r(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.t6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.i3s_1 = $block;
    this.j3s_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).c1g = function ($this$coroutineScope, $completion) {
    var tmp = this.d1g($this$coroutineScope, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            suspendResult = this.i3s_1(this.k3s_1, this.j3s_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).d1g = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.i3s_1, this.j3s_1, completion);
    i.k3s_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.c1g($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.q3r_1 ? $this.z3q_1.g39() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.r3r_1.q2().m9(State_ShuttingDown_getInstance()) <= 0) {
      $this.d3r_1.z();
      $this.e3r_1 = new IdentityArraySet();
      $this.f3r_1.z();
      $this.g3r_1.z();
      $this.h3r_1.z();
      $this.k3r_1 = null;
      var tmp0_safe_receiver = $this.m3r_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.en();
      $this.m3r_1 = null;
      $this.p3r_1 = null;
      return null;
    }
    var tmp;
    if (!($this.p3r_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.b3r_1 == null) {
        $this.e3r_1 = new IdentityArraySet();
        $this.f3r_1.z();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.f3r_1.c1()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.e3r_1.t3i();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.g3r_1.c1();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.h3r_1.c1();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.n3r_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.r3r_1.b13(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.m3r_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.m3r_1 = null;
      tmp_5 = this_0;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.o3r_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.s3r_1.bq().u();
        while (tmp0_iterator.v()) {
          var element = tmp0_iterator.x();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.xj()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.l3s_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.m3s_1 = recoverable;
    this.n3s_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.e3r_1.c1())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.e3r_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.e3r_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = toMutableList($this.d3r_1);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.g1(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.h3o(changes);
            if ($this.r3r_1.q2().m9(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.e3r_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.a3r_1;
        $this.e3r_1.z3r(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.c3r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.r3r_1.q2().m9(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.b3r_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.b3r_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().w3q_1.br()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.a3r_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.g3r_1.z();
      $this.f3r_1.z();
      $this.e3r_1 = new IdentityArraySet();
      $this.h3r_1.z();
      $this.i3r_1.z();
      $this.j3r_1.z();
      $this.p3r_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.k3r_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.k3r_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.a1(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.r(failedInitialComposition);
        }
        // Inline function 'kotlin.collections.minusAssign' call
        $this.d3r_1.s(failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.e3r_1.t3i()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.f3r_1.c1();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.s6();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.z3q_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.h3r_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.g1(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.a3c_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.c1()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.w3n() ? true : composition.g3o()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.l3r_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_9.x3s(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.y3s();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.t3i()) === true) {
              composition.u3l(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.p3o();
            break $l$block;
          }finally {
            snapshot.z3s(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.n());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.g1(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.a3c_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.x2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.n2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.r(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.m2().u();
    while (tmp0_iterator.v()) {
      var tmp1_loop_parameter = tmp0_iterator.x();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.p2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.q2();
      runtimeCheck(!composition.w3n());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_9.x3s(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y3s();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.a3r_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.n());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.n() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.g1(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.i3r_1, item_0.y3b_1));
                  target.r(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.q3o(pairs);
              break $l$block;
            }finally {
              snapshot.z3s(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.k2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.i3r_1.c1()) {
      var references = flatten($this.i3r_1.l2());
      $this.i3r_1.z();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.n());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.g1(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.j3r_1.x2(item));
          target.r(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.j3r_1.z();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.g1(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.de();
        var state = item_0.ee();
        if (!(state == null)) {
          reference.a3c_1.r3o(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.p3t();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.jn();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.f3r_1.c1()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.v3q_1 = MutableStateFlow(persistentSetOf());
    this.w3q_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.z();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.a3r_1;
    var iterator = this$0.h3r_1.u();
    while (iterator.v()) {
      var value = iterator.x();
      if (equals(value.a3c_1, $composition)) {
        toInsert.r(value);
        iterator.w();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.a3r_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.r3r_1.q2().m9(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.c3r_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.t6(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.a3r_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.c3r_1 = tmp_0;
      this$0.r3r_1.b13(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.a3r_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.b3r_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.r3r_1.b13(State_ShuttingDown_getInstance());
        if (!this$0.o3r_1) {
          runnerJob.dl(cancellation);
        } else if (!(this$0.m3r_1 == null)) {
          continuationToResume = this$0.m3r_1;
        }
        this$0.m3r_1 = null;
        tmp = runnerJob.yk(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.c3r_1 = cancellation;
        this$0.r3r_1.b13(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.t6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.y3t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).g3u = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.h3u($this$recompositionRunner, parentFrameClock, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).fh = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.g3u(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 6;
            var tmp_0 = this;
            tmp_0.b3u_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.c3u_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.d3u_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.e3u_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.f3u_1 = LinkedHashSet_init_$Create$();
            this.pb_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.y3t_1)) {
              this.pb_1 = 5;
              continue $sm;
            }

            this.pb_1 = 2;
            suspendResult = awaitWorkAvailable(this.y3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.y3t_1)) {
              this.pb_1 = 1;
              continue $sm;
            } else {
              this.pb_1 = 3;
              continue $sm;
            }

          case 3:
            this.pb_1 = 4;
            suspendResult = this.a3u_1.i39(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.y3t_1, this.b3u_1, this.c3u_1, this.d3u_1, this.e3u_1, this.f3u_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.y3t_1);
            this.pb_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 6) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).h3u = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.y3t_1, completion);
    i.z3t_1 = $this$recompositionRunner;
    i.a3u_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.g3u($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.q3u_1 = this$0;
    this.r3u_1 = $block;
    this.s3u_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).c1g = function ($this$withContext, $completion) {
    var tmp = this.d1g($this$withContext, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(Recomposer$recompositionRunner$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 5;
            this.u3u_1 = get_job(this.t3u_1.wj());
            registerRunnerJob(this.q3u_1, this.u3u_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_9;
            tmp_0.v3u_1 = tmp_1.x3u(Recomposer$recompositionRunner$slambda$lambda(this.q3u_1));
            addRunning(Companion_getInstance_3(), this.q3u_1.u3r_1);
            this.pb_1 = 1;
            continue $sm;
          case 1:
            this.qb_1 = 4;
            this.q3u_1.a3r_1;
            var this_0 = toMutableList(this.q3u_1.d3r_1);
            var inductionVariable = 0;
            var last = this_0.n() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.g1(index);
                item.u3o();
              }
               while (inductionVariable <= last);
            this.pb_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.r3u_1, this.s3u_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w3u_1 = suspendResult;
            this.qb_1 = 5;
            this.pb_1 = 3;
            continue $sm;
          case 3:
            this.v3u_1.jn();
            this.q3u_1.a3r_1;
            if (this.q3u_1.b3r_1 === this.u3u_1) {
              this.q3u_1.b3r_1 = null;
            }

            deriveStateLocked(this.q3u_1);
            removeRunning(Companion_getInstance_3(), this.q3u_1.u3r_1);
            return Unit_instance;
          case 4:
            this.qb_1 = 5;
            var t = this.sb_1;
            this.v3u_1.jn();
            this.q3u_1.a3r_1;
            if (this.q3u_1.b3r_1 === this.u3u_1) {
              this.q3u_1.b3r_1 = null;
            }

            deriveStateLocked(this.q3u_1);
            removeRunning(Companion_getInstance_3(), this.q3u_1.u3r_1);
            throw t;
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
  protoOf(Recomposer$recompositionRunner$slambda).d1g = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.q3u_1, this.r3u_1, this.s3u_1, completion);
    i.t3u_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.c1g($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.q3i_1;
      var inductionVariable = 0;
      var last = this_0.p3i_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.o3o(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.e3l(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.o3o(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.c3l(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w3s_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.w3s_1)) {
              this.pb_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.wo();
              this.w3s_1.a3r_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.w3s_1)) {
                tmp_0 = cancellable;
              } else {
                this.w3s_1.m3r_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.t6(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.xl(), this);
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.y3q_1 = new Long(0, 0);
    var tmp = this;
    tmp.z3q_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.a3r_1 = createSynchronizedObject();
    this.b3r_1 = null;
    this.c3r_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.d3r_1 = ArrayList_init_$Create$();
    this.e3r_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.f3r_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.g3r_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.h3r_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.i3r_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.j3r_1 = LinkedHashMap_init_$Create$();
    this.k3r_1 = null;
    this.l3r_1 = null;
    this.m3r_1 = null;
    this.n3r_1 = 0;
    this.o3r_1 = false;
    this.p3r_1 = null;
    this.q3r_1 = false;
    this.r3r_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.wb(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.yk(Recomposer$effectJob$lambda(this));
    tmp_6.s3r_1 = this_0;
    this.t3r_1 = effectCoroutineContext.ze(this.z3q_1).ze(this.s3r_1);
    this.u3r_1 = new RecomposerInfoImpl(this);
    this.v3r_1 = 8;
  }
  protoOf(Recomposer).h3l = function () {
    return this.t3r_1;
  };
  protoOf(Recomposer).y3u = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).a3f = function () {
    return 1000;
  };
  protoOf(Recomposer).y3e = function () {
    return false;
  };
  protoOf(Recomposer).z3e = function (table) {
  };
  protoOf(Recomposer).z3n = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.f3r_1.a1(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.f3r_1.r(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.t6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).i3i = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.h3r_1.r(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.t6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).k3k = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.i3r_1, reference.y3b_1, reference);
  };
  protoOf(Recomposer).z3i = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a3r_1;
    this.j3r_1.n2(reference, data);
  };
  protoOf(Recomposer).j3k = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.l3r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.l3r_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.r(composition);
  };
  protoOf(Recomposer).l3i = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a3r_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.j3r_1.r2(reference);
  };
  protoOf(Recomposer).d3p = function (composition, content) {
    var composerWasComposing = composition.w3n();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_9.x3s(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y3s();
            try {
              composition.e3p(content);
              break $l$block;
            }finally {
              snapshot.z3s(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_9.y3r();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a3r_1;
    var tmp;
    if (this.r3r_1.q2().m9(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.d3r_1.a1(composition)) {
        this.d3r_1.r(composition);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.s3o();
      composition.t3o();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_9.y3r();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.x2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.c1()) {
        _this__u8e3s4.r2(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.x2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.n2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.r(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.g3h(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.d3a_1);
    if (fromWriter.q39_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.v39_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.n39_1;
    var currentGroup = toWriter.d3a_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.n39_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.o39_1;
    var currentSlot = toWriter.t39_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.o39_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.e3a_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.x39_1;
    var slotsGapLen = toWriter.w39_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.v39_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.x39_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.p39_1, fromIndex, fromWriter.n());
    var endAnchors = locationOf(fromWriter.p39_1, sourceGroupsEnd, fromWriter.n());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.p39_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.g1(anchorIndex);
          sourceAnchor.l3j_1 = sourceAnchor.l3j_1 + anchorDelta | 0;
          anchors.r(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.p39_1, toWriter.d3a_1, toWriter.n());
      toWriter.p39_1.f3(insertLocation, anchors);
      sourceAnchors.b2(startAnchors, endAnchors).z();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.x3f(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.a3g();
        fromWriter.w3k(parentGroup - fromWriter.d3a_1 | 0);
        fromWriter.a3g();
      }
      fromWriter.w3k(fromIndex - fromWriter.d3a_1 | 0);
      var anchorsRemoved = fromWriter.r3a();
      if (needsStartGroups) {
        fromWriter.c3b();
        fromWriter.n3h();
        fromWriter.c3b();
        fromWriter.n3h();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.z39_1 = toWriter.z39_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.d3a_1 = currentGroup + groupsToMove | 0;
      toWriter.t39_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.y39_1 > 0;
    $this.c3a_1.x3e($this.z39_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.d3a_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_0().s3a_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_0().s3a_1) : false;
      initGroup($this.n39_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.e3a_1, $this.t39_1);
      $this.u39_1 = $this.t39_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.o39_1;
        var currentSlot = $this.t39_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.t39_1 = currentSlot;
      }
      $this.z39_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.e3a_1 = current;
      $this.d3a_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.e3a_1;
      $this.a3a_1.x3e(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.d3a_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_0().s3a_1)) {
        if (isNode) {
          $this.z3u(aux);
        } else {
          $this.r3k(aux);
        }
      }
      $this.t39_1 = slotIndex($this.n39_1, $this, currentGroupAddress);
      $this.u39_1 = dataIndex_0($this.n39_1, $this, groupIndexToAddress($this, $this.d3a_1 + 1 | 0));
      $this.z39_1 = nodeCount($this.n39_1, currentGroupAddress);
      $this.e3a_1 = currentGroup;
      $this.d3a_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.n39_1, currentGroupAddress) | 0;
    }
    tmp.s39_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.n39_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.n39_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.g3a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.t3i()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.b3v(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.g3a_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.g3a_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.c3v(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.n39_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.n39_1, groupAddress, containsAnyMarks);
      var parent = $this.x3f(group);
      if (parent >= 0) {
        set.c3v(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.g3h(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.n39_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.g3h(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.b3a_1.x3e((_get_capacity__a9k9f3($this) - $this.r39_1 | 0) - $this.s39_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.r39_1 | 0) - $this.b3a_1.d3h() | 0;
    $this.s39_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.q39_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.n39_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.n39_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.r39_1;
    var gapStart = $this.q39_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.p39_1.c1()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.n39_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.n39_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.n39_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.q39_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.w39_1;
    var gapStart = $this.v39_1;
    var slotsGapOwner = $this.x39_1;
    if (!(gapStart === index)) {
      var slots = $this.o39_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.n();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.o39_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.q39_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.n39_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.n39_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.r39_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.n39_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.n39_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.q39_1)
            updateAddress_0 = updateAddress_0 + $this.r39_1 | 0;
        }
      }
      $this.x39_1 = newSlotsGapOwner;
    }
    $this.v39_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.v39_1;
    var slotsGapEnd = slotsGapStart + $this.w39_1 | 0;
    fill_0($this.o39_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.d3a_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.q39_1;
      var gapLen = $this.r39_1;
      var oldCapacity = $this.n39_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.n39_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.n39_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.s39_1;
      if (currentEnd >= gapStart)
        $this.s39_1 = currentEnd + size | 0;
      $this.q39_1 = gapStart + size | 0;
      $this.r39_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.x39_1 < gapStart ? 0 : $this.v39_1, $this.w39_1, $this.o39_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.n39_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.x39_1;
      if (slotsGapOwner >= gapStart) {
        $this.x39_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.t39_1, group);
      var gapStart = $this.v39_1;
      var gapLen = $this.w39_1;
      if (gapLen < size) {
        var slots = $this.o39_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.o39_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.u39_1;
      if (currentDataEnd >= gapStart)
        $this.u39_1 = currentDataEnd + size | 0;
      $this.v39_1 = gapStart + size | 0;
      $this.w39_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.p39_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.c1())
        anchorsRemoved = removeAnchors($this, start, len);
      $this.q39_1 = start;
      var previousGapLen = $this.r39_1;
      var newGapLen = previousGapLen + len | 0;
      $this.r39_1 = newGapLen;
      var slotsGapOwner = $this.x39_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.x39_1 = Math.max(start, b);
      }
      if ($this.s39_1 >= $this.q39_1) {
        $this.s39_1 = $this.s39_1 - len | 0;
      }
      if (containsGroupMark($this, $this.e3a_1)) {
        updateContainsMark($this, $this.e3a_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.w39_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.v39_1 = start;
      $this.w39_1 = gapLen + len | 0;
      fill_0($this.o39_1, null, start, start + len | 0);
      var currentDataEnd = $this.u39_1;
      if (currentDataEnd >= start)
        $this.u39_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.n39_1.length ? isNode($this.n39_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.o39_1[dataIndexToDataAddress($this, nodeIndex($this.n39_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.r39_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.p39_1, previousGapStart, size);
      $l$loop_0: while (index < $this.p39_1.n()) {
        var anchor = $this.p39_1.g1(index);
        var location = anchor.l3j_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.l3j_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.p39_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.p39_1.n()) {
        var anchor_0 = $this.p39_1.g1(index_0);
        var location_0 = anchor_0.l3j_1;
        if (location_0 >= 0) {
          anchor_0.l3j_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.r39_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.p39_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.p39_1.n() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.p39_1.g1(index);
      var location = $this.k3i(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.l3j_1 = IntCompanionObject_instance.MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.p39_1.b2(removeAnchorStart, removeAnchorEnd).z();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.n();
    var index = locationOf($this.p39_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.p39_1.n()) {
        var anchor = $this.p39_1.g1(index);
        var location = $this.k3i(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.r(anchor);
          $this.p39_1.i1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.g1(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.k3i(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.q39_1) {
          item.l3j_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.l3j_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.p39_1, newAnchorIndex, groupsSize);
        $this.p39_1.v1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.n39_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.q39_1 ? index : index + $this.r39_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.v39_1 ? dataIndex : dataIndex + $this.w39_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.n39_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.o39_1.length - $this.w39_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.w39_1, $this.o39_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.o39_1.length - $this.w39_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.w39_1, $this.o39_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.v39_1, $this.w39_1, $this.o39_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.n() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.n() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.e3v_1 = $end;
    this.f3v_1 = this$0;
    this.d3v_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).v = function () {
    return this.d3v_1 < this.e3v_1;
  };
  protoOf(SlotWriter$groupSlots$1).x = function () {
    var tmp;
    if (this.v()) {
      var tmp_0 = this.f3v_1.o39_1;
      var tmp1 = this.d3v_1;
      this.d3v_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.f3v_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.m39_1 = table;
    this.n39_1 = this.m39_1.j3e_1;
    this.o39_1 = this.m39_1.l3e_1;
    this.p39_1 = this.m39_1.q3e_1;
    this.q39_1 = this.m39_1.k3e_1;
    this.r39_1 = (this.n39_1.length / 5 | 0) - this.m39_1.k3e_1 | 0;
    this.s39_1 = this.m39_1.k3e_1;
    this.t39_1 = 0;
    this.u39_1 = 0;
    this.v39_1 = this.m39_1.m3e_1;
    this.w39_1 = this.o39_1.length - this.m39_1.m3e_1 | 0;
    this.x39_1 = this.m39_1.k3e_1;
    this.y39_1 = 0;
    this.z39_1 = 0;
    this.a3a_1 = new IntStack();
    this.b3a_1 = new IntStack();
    this.c3a_1 = new IntStack();
    this.d3a_1 = 0;
    this.e3a_1 = -1;
    this.f3a_1 = false;
    this.g3a_1 = null;
  }
  protoOf(SlotWriter).x3j = function () {
    return this.d3a_1 < this.s39_1 ? isNode(this.n39_1, groupIndexToAddress(this, this.d3a_1)) : false;
  };
  protoOf(SlotWriter).y3h = function (index) {
    return isNode(this.n39_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).z3h = function (index) {
    return nodeCount(this.n39_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).w3f = function (index) {
    return key(this.n39_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).v3f = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.n39_1, address) ? this.o39_1[objectKeyIndex(this.n39_1, address)] : null;
  };
  protoOf(SlotWriter).g3h = function (index) {
    return groupSize(this.n39_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).u3f = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.n39_1, address) ? this.o39_1[auxIndex(this.n39_1, this, address)] : Companion_getInstance_0().s3a_1;
  };
  protoOf(SlotWriter).v3j = function (index) {
    return (index > this.e3a_1 ? index < this.s39_1 : false) ? true : this.e3a_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).y3j = function (index) {
    return this.w3j(index, this.d3a_1);
  };
  protoOf(SlotWriter).w3j = function (index, group) {
    var tmp;
    if (group === this.e3a_1) {
      tmp = this.s39_1;
    } else if (group > this.a3a_1.b3j(0)) {
      tmp = group + this.g3h(group) | 0;
    } else {
      var openIndex = this.a3a_1.g3v(group);
      tmp = openIndex < 0 ? group + this.g3h(group) | 0 : (_get_capacity__a9k9f3(this) - this.r39_1 | 0) - this.b3a_1.x3h(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).s3i = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.n39_1, address) ? this.o39_1[dataIndexToDataAddress(this, nodeIndex(this.n39_1, this, address))] : null;
  };
  protoOf(SlotWriter).o3k = function (anchor) {
    return this.s3i(anchor.h3v(this));
  };
  protoOf(SlotWriter).x3f = function (index) {
    return parent(this.n39_1, this, index);
  };
  protoOf(SlotWriter).p1i = function () {
    this.f3a_1 = true;
    if (this.a3a_1.c1()) {
      moveGroupGapTo(this, this.n());
      moveSlotGapTo(this, this.o39_1.length - this.w39_1 | 0, this.q39_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.m39_1.i3v(this, this.n39_1, this.q39_1, this.o39_1, this.v39_1, this.p39_1);
  };
  protoOf(SlotWriter).y1g = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y39_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.d3a_1 = 0;
    this.s39_1 = _get_capacity__a9k9f3(this) - this.r39_1 | 0;
    this.t39_1 = 0;
    this.u39_1 = 0;
    this.z39_1 = 0;
  };
  protoOf(SlotWriter).v3i = function (value) {
    var result = this.j3v();
    this.k3v(value);
    return result;
  };
  protoOf(SlotWriter).r3k = function (value) {
    var address = groupIndexToAddress(this, this.d3a_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.n39_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.o39_1[dataIndexToDataAddress(this, auxIndex(this.n39_1, this, address))] = value;
  };
  protoOf(SlotWriter).t3l = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y39_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message = 'Cannot insert auxiliary data when not inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.e3a_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!hasAux(this.n39_1, parentGroupAddress)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message_0 = 'Group already has auxiliary data';
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.n39_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.t39_1 > auxIndex_0) {
      var slotsToMove = this.t39_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slotsToMove < 3)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        var message_1 = 'Moving more than two slot not supported';
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.o39_1[auxAddress + 2 | 0] = this.o39_1[auxAddress + 1 | 0];
      }
      this.o39_1[auxAddress + 1 | 0] = this.o39_1[auxAddress];
    }
    addAux(this.n39_1, parentGroupAddress);
    this.o39_1[auxAddress] = value;
    this.t39_1 = this.t39_1 + 1 | 0;
  };
  protoOf(SlotWriter).z3u = function (value) {
    return updateNodeOfGroup(this, this.d3a_1, value);
  };
  protoOf(SlotWriter).n3k = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.h3v(this), value);
  };
  protoOf(SlotWriter).k3v = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.t39_1 <= this.u39_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.o39_1[dataIndexToDataAddress(this, this.t39_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).q3k = function (index, value) {
    var address = groupIndexToAddress(this, this.d3a_1);
    var slotsStart = slotIndex(this.n39_1, this, address);
    var slotsEnd = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, this.d3a_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + this.d3a_1;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.o39_1[slotAddress];
    this.o39_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).j3v = function () {
    if (this.y39_1 > 0) {
      insertSlots(this, 1, this.e3a_1);
    }
    var tmp = this.o39_1;
    var tmp1 = this.t39_1;
    this.t39_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).l3q = function (anchor, index) {
    return this.n3q(this.k3i(anchor), index);
  };
  protoOf(SlotWriter).n3q = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.n39_1, this, address);
    var slotsEnd = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_0().s3a_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.o39_1[slotAddress];
  };
  protoOf(SlotWriter).w3k = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y39_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.d3a_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.e3a_1 ? index <= this.s39_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.e3a_1 + '-' + this.s39_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.d3a_1 = index;
    var newSlot = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, index));
    this.t39_1 = newSlot;
    this.u39_1 = newSlot;
  };
  protoOf(SlotWriter).c3b = function () {
    var newGroup = this.s39_1;
    this.d3a_1 = newGroup;
    this.t39_1 = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).r3g = function () {
    var tmp1 = this.y39_1;
    this.y39_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).o3h = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y39_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y39_1 = this.y39_1 - 1 | 0;
    if (this.y39_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.c3a_1.n() === this.a3a_1.n())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).a3g = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y39_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_0().s3a_1, false, Companion_getInstance_0().s3a_1);
  };
  protoOf(SlotWriter).c3g = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_0().s3a_1);
  };
  protoOf(SlotWriter).e3g = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_0().s3a_1);
  };
  protoOf(SlotWriter).d3g = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).n3h = function () {
    var inserting = this.y39_1 > 0;
    var currentGroup = this.d3a_1;
    var currentGroupEnd = this.s39_1;
    var groupIndex = this.e3a_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.z39_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.n39_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.n39_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.n39_1, groupAddress, newNodes);
      this.z39_1 = this.c3a_1.d3h() + (isNode_0 ? 1 : newNodes) | 0;
      this.e3a_1 = parent(this.n39_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.n39_1, groupAddress);
      var oldNodes = nodeCount(this.n39_1, groupAddress);
      updateGroupSize(this.n39_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.n39_1, groupAddress, newNodes);
      var newParent = this.a3a_1.d3h();
      restoreCurrentGroupEnd(this);
      this.e3a_1 = newParent;
      var groupParent = parent(this.n39_1, this, groupIndex);
      this.z39_1 = this.c3a_1.d3h();
      if (groupParent === newParent) {
        this.z39_1 = this.z39_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.n39_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.n39_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.n39_1, currentAddress, nodeCount(this.n39_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.n39_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.n39_1, this, current);
          }
        }
        this.z39_1 = this.z39_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).d3m = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y39_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.e3a_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.s39_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.d3a_1;
      var oldCurrentSlot = this.t39_1;
      var oldCurrentSlotEnd = this.u39_1;
      this.d3a_1 = index;
      this.a3g();
      this.d3a_1 = oldCurrent;
      this.t39_1 = oldCurrentSlot;
      this.u39_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).f3l = function (anchor) {
    return this.d3m(anchor.h3v(this));
  };
  protoOf(SlotWriter).t3f = function () {
    var groupAddress = groupIndexToAddress(this, this.d3a_1);
    var newGroup = this.d3a_1 + groupSize(this.n39_1, groupAddress) | 0;
    this.d3a_1 = newGroup;
    this.t39_1 = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.n39_1, groupAddress) ? 1 : nodeCount(this.n39_1, groupAddress);
  };
  protoOf(SlotWriter).r3a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y39_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.d3a_1;
    var oldSlot = this.t39_1;
    var count = this.t3f();
    var tmp0_safe_receiver = this.g3a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.t3i() ? tmp0_safe_receiver.l3l() >= oldGroup : false) {
        tmp0_safe_receiver.b3v();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.d3a_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.t39_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.d3a_1 = oldGroup;
    this.t39_1 = oldSlot;
    this.z39_1 = this.z39_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).h3a = function () {
    var start = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, this.d3a_1));
    var end = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, this.d3a_1 + this.g3h(this.d3a_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).s3k = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y39_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.d3a_1;
    var parent = this.e3a_1;
    var parentEnd = this.s39_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.n39_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.n39_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.t39_1;
    var dataStart = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.n39_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.d3a_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.n39_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.o39_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.v39_1;
    var slotsGapLen = this.w39_1;
    var slotsCapacity = this.o39_1.length;
    var slotsGapOwner = this.x39_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.s39_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).w3i = function (anchor, offset, writer) {
    runtimeCheck(writer.y39_1 > 0);
    runtimeCheck(this.y39_1 === 0);
    runtimeCheck(anchor.t3n());
    var location = this.k3i(anchor) + offset | 0;
    var currentGroup = this.d3a_1;
    runtimeCheck(currentGroup <= location ? location < this.s39_1 : false);
    var parent = this.x3f(location);
    var size = this.g3h(location);
    var nodes = this.y3h(location) ? 1 : this.z3h(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.n39_1, currentAddress, groupSize(this.n39_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.n39_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.n39_1, currentAddress, nodeCount(this.n39_1, currentAddress) - nodes | 0);
        }
      }
      current = this.x3f(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.z39_1 >= nodes);
      this.z39_1 = this.z39_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).y3k = function (table, index, removeSourceGroup) {
    runtimeCheck(this.y39_1 > 0);
    if (((index === 0 ? this.d3a_1 === 0 : false) ? this.m39_1.k3e_1 === 0 : false) ? groupSize(table.j3e_1, index) === table.k3e_1 : false) {
      var myGroups = this.n39_1;
      var mySlots = this.o39_1;
      var myAnchors = this.p39_1;
      var groups = table.j3e_1;
      var groupsSize = table.k3e_1;
      var slots = table.l3e_1;
      var slotsSize = table.m3e_1;
      this.n39_1 = groups;
      this.o39_1 = slots;
      this.p39_1 = table.q3e_1;
      this.q39_1 = groupsSize;
      this.r39_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.v39_1 = slotsSize;
      this.w39_1 = slots.length - slotsSize | 0;
      this.x39_1 = groupsSize;
      table.l3v(myGroups, 0, mySlots, 0, myAnchors);
      return this.p39_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.y3f();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.p1i();
    }
    return tmp;
  };
  protoOf(SlotWriter).v3k = function (offset, table, index) {
    runtimeCheck(this.y39_1 <= 0 ? this.g3h(this.d3a_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.d3a_1;
    var previousCurrentSlot = this.t39_1;
    var previousCurrentSlotEnd = this.u39_1;
    this.w3k(offset);
    this.a3g();
    this.r3g();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.y3f();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.p1i();
    }
    var anchors = tmp;
    this.o3h();
    this.n3h();
    this.d3a_1 = previousCurrentGroup;
    this.t39_1 = previousCurrentSlot;
    this.u39_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).s3g = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.p39_1;
    var effectiveSize = this.n();
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.q39_1 ? index : -(this.n() - index | 0) | 0);
      this_0.v1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.g1(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).m3v = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.n39_1, groupAddress)) {
      updateMark(this.n39_1, groupAddress, true);
      if (!containsMark(this.n39_1, groupAddress)) {
        updateContainsMark(this, this.x3f(group));
      }
    }
  };
  protoOf(SlotWriter).g3i = function (group, $super) {
    group = group === VOID ? this.e3a_1 : group;
    var tmp;
    if ($super === VOID) {
      this.m3v(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.m3v.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).k3i = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.l3j_1;
    return it < 0 ? this.n() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.d3a_1 + ' end=' + this.s39_1 + ' size = ' + this.n() + ' ' + ('gap=' + this.q39_1 + '-' + (this.q39_1 + this.r39_1 | 0) + ')');
  };
  protoOf(SlotWriter).n = function () {
    return _get_capacity__a9k9f3(this) - this.r39_1 | 0;
  };
  function Anchor(loc) {
    this.l3j_1 = loc;
  }
  protoOf(Anchor).t3n = function () {
    return !(this.l3j_1 === IntCompanionObject_instance.MIN_VALUE);
  };
  protoOf(Anchor).x3k = function (slots) {
    return slots.k3i(this);
  };
  protoOf(Anchor).h3v = function (writer) {
    return writer.k3i(this);
  };
  function SlotTable() {
    this.j3e_1 = new Int32Array(0);
    this.k3e_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.l3e_1 = tmp_1;
    this.m3e_1 = 0;
    this.n3e_1 = 0;
    this.o3e_1 = false;
    this.p3e_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.q3e_1 = ArrayList_init_$Create$();
  }
  protoOf(SlotTable).v18 = function () {
    return this.k3e_1 === 0;
  };
  protoOf(SlotTable).r3e = function () {
    if (this.o3e_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.n3e_1 = this.n3e_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).y3f = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o3e_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.n3e_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.o3e_1 = true;
    this.p3e_1 = this.p3e_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).s3g = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o3e_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead ';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.k3e_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.q3e_1;
    var effectiveSize = this.k3e_1;
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.v1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.g1(location);
    }
    return tmp;
  };
  protoOf(SlotTable).k3i = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o3e_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.t3n()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.l3j_1;
  };
  protoOf(SlotTable).x3o = function (anchor) {
    var tmp;
    if (anchor.t3n()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$mbvawc(this.q3e_1, anchor.l3j_1, this.k3e_1);
      tmp = it >= 0 ? equals(this.q3e_1.g1(it), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).x3n = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o3e_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.k3e_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.x3o(anchor)) {
      var containsUpper = groupIndex + groupSize(this.j3e_1, groupIndex) | 0;
      var containsArg = anchor.l3j_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).n3v = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.c3f_1 === this ? this.n3e_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.n3e_1 = this.n3e_1 - 1 | 0;
  };
  protoOf(SlotTable).i3v = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.m39_1 === this ? this.o3e_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.o3e_1 = false;
    this.l3v(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).l3v = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.j3e_1 = groups;
    this.k3e_1 = groupsSize;
    this.l3e_1 = slots;
    this.m3e_1 = slotsSize;
    this.q3e_1 = anchors;
  };
  protoOf(SlotTable).a3j = function () {
    return this.k3e_1 > 0 ? containsMark(this.j3e_1, 0) : false;
  };
  protoOf(SlotTable).n3q = function (group, slotIndex) {
    var start = slotAnchor(this.j3e_1, group);
    var end = (group + 1 | 0) < this.k3e_1 ? dataAnchor(this.j3e_1, group + 1 | 0) : this.l3e_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.l3e_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_0().s3a_1;
    }
    return tmp;
  };
  protoOf(SlotTable).u = function () {
    return new GroupIterator(this, 0, this.k3e_1);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.a3v_1 = list;
  }
  protoOf(PrioritySet).c3v = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.a3v_1.c1()) {
      tmp = this.a3v_1.g1(0) === value ? true : this.a3v_1.g1(this.a3v_1.n() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.a3v_1.n();
    this.a3v_1.r(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.a3v_1.g1(parent);
      if (value > parentValue) {
        this.a3v_1.o(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.a3v_1.o(index, value);
  };
  protoOf(PrioritySet).t3i = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.a3v_1.c1();
  };
  protoOf(PrioritySet).l3l = function () {
    return first(this.a3v_1);
  };
  protoOf(PrioritySet).b3v = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a3v_1.n() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.a3v_1.g1(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.a3v_1.c1()) {
        tmp = this.a3v_1.g1(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.a3v_1.o(0, last(this.a3v_1));
      this.a3v_1.i1(this.a3v_1.n() - 1 | 0);
      var index = 0;
      var size = this.a3v_1.n();
      var max = this.a3v_1.n() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.a3v_1.g1(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.a3v_1.g1(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.a3v_1.g1(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.a3v_1.o(index, rightValue);
              this.a3v_1.o(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.a3v_1.o(index, leftValue);
          this.a3v_1.o(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$mbvawc(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.f3f_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().s3a_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.f3f_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().s3a_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.f3f_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.c3f_1 = table;
    this.d3f_1 = this.c3f_1.j3e_1;
    this.e3f_1 = this.c3f_1.k3e_1;
    this.f3f_1 = this.c3f_1.l3e_1;
    this.g3f_1 = this.c3f_1.m3e_1;
    this.h3f_1 = false;
    this.i3f_1 = 0;
    this.j3f_1 = this.e3f_1;
    this.k3f_1 = -1;
    this.l3f_1 = 0;
    this.m3f_1 = 0;
    this.n3f_1 = 0;
  }
  protoOf(SlotReader).n = function () {
    return this.e3f_1;
  };
  protoOf(SlotReader).x3f = function (index) {
    return parentAnchor(this.d3f_1, index);
  };
  protoOf(SlotReader).x3j = function () {
    return isNode(this.d3f_1, this.i3f_1);
  };
  protoOf(SlotReader).y3h = function (index) {
    return isNode(this.d3f_1, index);
  };
  protoOf(SlotReader).z3h = function (index) {
    return nodeCount(this.d3f_1, index);
  };
  protoOf(SlotReader).s3i = function (index) {
    return isNode(this.d3f_1, index) ? node(this.d3f_1, this, index) : null;
  };
  protoOf(SlotReader).k3h = function () {
    return this.p3h() ? true : this.i3f_1 === this.j3f_1;
  };
  protoOf(SlotReader).p3h = function () {
    return this.l3f_1 > 0;
  };
  protoOf(SlotReader).u3i = function () {
    return groupSize(this.d3f_1, this.i3f_1);
  };
  protoOf(SlotReader).g3h = function (index) {
    return groupSize(this.d3f_1, index);
  };
  protoOf(SlotReader).j3h = function () {
    return this.j3f_1;
  };
  protoOf(SlotReader).n3g = function () {
    var tmp;
    if (this.i3f_1 < this.j3f_1) {
      tmp = key(this.d3f_1, this.i3f_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).w3f = function (index) {
    return key(this.d3f_1, index);
  };
  protoOf(SlotReader).m3l = function () {
    return this.m3f_1 - slotAnchor(this.d3f_1, this.k3f_1) | 0;
  };
  protoOf(SlotReader).a3i = function (index) {
    return hasObjectKey(this.d3f_1, index);
  };
  protoOf(SlotReader).p3g = function () {
    return this.i3f_1 < this.j3f_1 ? objectKey(this.d3f_1, this, this.i3f_1) : null;
  };
  protoOf(SlotReader).v3f = function (index) {
    return objectKey(this.d3f_1, this, index);
  };
  protoOf(SlotReader).z3f = function () {
    return this.i3f_1 < this.j3f_1 ? aux(this.d3f_1, this, this.i3f_1) : 0;
  };
  protoOf(SlotReader).u3f = function (index) {
    return aux(this.d3f_1, this, index);
  };
  protoOf(SlotReader).l3k = function (index) {
    return hasMark(this.d3f_1, index);
  };
  protoOf(SlotReader).z3j = function (index) {
    return containsMark(this.d3f_1, index);
  };
  protoOf(SlotReader).b3i = function () {
    return this.k3f_1 >= 0 ? nodeCount(this.d3f_1, this.k3f_1) : 0;
  };
  protoOf(SlotReader).n3l = function (index) {
    return this.a3k(this.i3f_1, index);
  };
  protoOf(SlotReader).a3k = function (group, index) {
    var start = slotAnchor(this.d3f_1, group);
    var next = group + 1 | 0;
    var end = next < this.e3f_1 ? dataAnchor(this.d3f_1, next) : this.g3f_1;
    var address = start + index | 0;
    return address < end ? this.f3f_1[address] : Companion_getInstance_0().s3a_1;
  };
  protoOf(SlotReader).x = function () {
    if (this.l3f_1 > 0 ? true : this.m3f_1 >= this.n3f_1)
      return Companion_getInstance_0().s3a_1;
    var tmp1 = this.m3f_1;
    this.m3f_1 = tmp1 + 1 | 0;
    return this.f3f_1[tmp1];
  };
  protoOf(SlotReader).b3g = function () {
    this.l3f_1 = this.l3f_1 + 1 | 0;
  };
  protoOf(SlotReader).m3h = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.l3f_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.l3f_1 = this.l3f_1 - 1 | 0;
  };
  protoOf(SlotReader).p1i = function () {
    this.h3f_1 = true;
    this.c3f_1.n3v(this);
  };
  protoOf(SlotReader).a3g = function () {
    if (this.l3f_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.d3f_1, this.i3f_1) === this.k3f_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.k3f_1 = this.i3f_1;
      this.j3f_1 = this.i3f_1 + groupSize(this.d3f_1, this.i3f_1) | 0;
      var tmp1 = this.i3f_1;
      this.i3f_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.m3f_1 = slotAnchor(this.d3f_1, current);
      this.n3f_1 = current >= (this.e3f_1 - 1 | 0) ? this.g3f_1 : dataAnchor(this.d3f_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).d3b = function () {
    if (this.l3f_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.d3f_1, this.i3f_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.a3g();
    }
  };
  protoOf(SlotReader).t3f = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.l3f_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.d3f_1, this.i3f_1) ? 1 : nodeCount(this.d3f_1, this.i3f_1);
    this.i3f_1 = this.i3f_1 + groupSize(this.d3f_1, this.i3f_1) | 0;
    return count;
  };
  protoOf(SlotReader).c3b = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.l3f_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.i3f_1 = this.j3f_1;
  };
  protoOf(SlotReader).b3h = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.l3f_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.i3f_1 = index;
    var parent = index < this.e3f_1 ? parentAnchor(this.d3f_1, index) : -1;
    this.k3f_1 = parent;
    if (parent < 0)
      this.j3f_1 = this.e3f_1;
    else
      this.j3f_1 = parent + groupSize(this.d3f_1, parent) | 0;
    this.m3f_1 = 0;
    this.n3f_1 = 0;
  };
  protoOf(SlotReader).v3h = function (index) {
    var newCurrentEnd = index + groupSize(this.d3f_1, index) | 0;
    var current = this.i3f_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.k3f_1 = index;
    this.j3f_1 = newCurrentEnd;
    this.m3f_1 = 0;
    this.n3f_1 = 0;
  };
  protoOf(SlotReader).l3h = function () {
    if (this.l3f_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.i3f_1 === this.j3f_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.d3f_1, this.k3f_1);
      this.k3f_1 = parent;
      this.j3f_1 = parent < 0 ? this.e3f_1 : parent + groupSize(this.d3f_1, parent) | 0;
    }
  };
  protoOf(SlotReader).o3g = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.l3f_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.i3f_1;
    while (childIndex < this.j3f_1) {
      var tmp = key(this.d3f_1, childIndex);
      var tmp_0 = objectKey(this.d3f_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.d3f_1, childIndex) ? 1 : nodeCount(this.d3f_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.r(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.d3f_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.i3f_1 + ', key=' + this.n3g() + ', ' + ('parent=' + this.k3f_1 + ', end=' + this.j3f_1 + ')');
  };
  protoOf(SlotReader).s3g = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.c3f_1.q3e_1;
    var effectiveSize = this.e3f_1;
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.v1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.g1(location);
    }
    return tmp;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.n() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.g1(mid).l3j_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.o3v_1.p3e_1 === $this.r3v_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.o3v_1 = table;
    this.p3v_1 = end;
    this.q3v_1 = start;
    this.r3v_1 = this.o3v_1.p3e_1;
    if (this.o3v_1.o3e_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).v = function () {
    return this.q3v_1 < this.p3v_1;
  };
  protoOf(GroupIterator).x = function () {
    validateRead(this);
    var group = this.q3v_1;
    this.q3v_1 = this.q3v_1 + groupSize(this.o3v_1.j3e_1, group) | 0;
    return new SlotTableGroup(this.o3v_1, group, this.r3v_1);
  };
  function validateRead_0($this) {
    if (!($this.s3v_1.p3e_1 === $this.u3v_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.p3e_1 : version;
    this.s3v_1 = table;
    this.t3v_1 = group;
    this.u3v_1 = version;
  }
  protoOf(SlotTableGroup).u = function () {
    validateRead_0(this);
    return new GroupIterator(this.s3v_1, this.t3v_1 + 1 | 0, this.t3v_1 + groupSize(this.s3v_1.j3e_1, this.t3v_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.t3g_1 = key;
    this.u3g_1 = objectKey;
    this.v3g_1 = location;
    this.w3g_1 = nodes;
    this.x3g_1 = index;
  }
  function search$accessor$mbvawc(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).w3v = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).u3q = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.w3v(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.a3w_1 = myValue;
  }
  protoOf(StateStateRecord).b3w = function (value) {
    var tmp = this;
    tmp.a3w_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).a3w_1;
  };
  protoOf(StateStateRecord).c3w = function () {
    return new StateStateRecord(this.a3w_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.d3w_1 = policy;
    this.e3w_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).x3p = function () {
    return this.d3w_1;
  };
  protoOf(SnapshotMutableStateImpl).b13 = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.e3w_1;
    var it = current(this_0);
    var tmp;
    if (!this.x3p().u3q(it.a3w_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.e3w_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_9.f38();
      overwritableRecord(this_1, this, snapshot, it).a3w_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).q2 = function () {
    return readable_0(this.e3w_1, this).a3w_1;
  };
  protoOf(SnapshotMutableStateImpl).f3w = function () {
    return this.e3w_1;
  };
  protoOf(SnapshotMutableStateImpl).g3w = function (value) {
    var tmp = this;
    tmp.e3w_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).h3w = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.x3p().u3q(currentRecord.a3w_1, appliedRecord.a3w_1)) {
      tmp = current;
    } else {
      var merged = this.x3p().v3v(previousRecord.a3w_1, currentRecord.a3w_1, appliedRecord.a3w_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.c3w();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).a3w_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.e3w_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(this_0).a3w_1 + ')@' + hashCode(this);
  };
  function SnapshotThreadLocal() {
    this.y3p_1 = new AtomicReference(get_emptyThreadMap());
    this.z3p_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).br = function () {
    var tmp = this.y3p_1.br().l3w(getCurrentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).a3q = function (value) {
    var key = getCurrentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z3p_1;
    var current = this.y3p_1.br();
    if (current.m3w(key, value))
      return Unit_instance;
    this.y3p_1.v3n(current.n3w(key, value));
  };
  function IntStack() {
    this.v3e_1 = new Int32Array(10);
    this.w3e_1 = 0;
  }
  protoOf(IntStack).n = function () {
    return this.w3e_1;
  };
  protoOf(IntStack).x3e = function (value) {
    if (this.w3e_1 >= this.v3e_1.length) {
      this.v3e_1 = copyOf(this.v3e_1, imul(this.v3e_1.length, 2));
    }
    var tmp = this.v3e_1;
    var tmp1 = this.w3e_1;
    this.w3e_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).d3h = function () {
    var tmp = this.v3e_1;
    this.w3e_1 = this.w3e_1 - 1 | 0;
    return tmp[this.w3e_1];
  };
  protoOf(IntStack).b3j = function (default_0) {
    return this.w3e_1 > 0 ? this.l3l() : default_0;
  };
  protoOf(IntStack).l3l = function () {
    return this.v3e_1[this.w3e_1 - 1 | 0];
  };
  protoOf(IntStack).x3h = function (index) {
    return this.v3e_1[index];
  };
  protoOf(IntStack).c1 = function () {
    return this.w3e_1 === 0;
  };
  protoOf(IntStack).z = function () {
    this.w3e_1 = 0;
  };
  protoOf(IntStack).g3v = function (value) {
    var inductionVariable = 0;
    var last = this.w3e_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.v3e_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.o3f_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).n = function () {
    return this.o3f_1.n();
  };
  protoOf(Stack).c3h = function (value) {
    return this.o3f_1.r(value);
  };
  protoOf(Stack).d3h = function () {
    return this.o3f_1.i1(this.n() - 1 | 0);
  };
  protoOf(Stack).l3l = function () {
    return this.o3f_1.g1(this.n() - 1 | 0);
  };
  protoOf(Stack).x3h = function (index) {
    return this.o3f_1.g1(index);
  };
  protoOf(Stack).c1 = function () {
    return this.o3f_1.c1();
  };
  protoOf(Stack).t3i = function () {
    return !this.c1();
  };
  protoOf(Stack).z = function () {
    return this.o3f_1.z();
  };
  protoOf(Stack).g3 = function () {
    var tmp = 0;
    var tmp_0 = this.o3f_1.n();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.o3f_1.g1(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.w3p_1;
    current$factory();
    return this_0.q2();
  }
  function LazyValueHolder(valueProducer) {
    this.w3p_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).q2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.o3w_1 = value;
  }
  protoOf(StaticValueHolder).q2 = function () {
    return this.o3w_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.o3w_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.o3w_1 == null ? 0 : hashCode(this.o3w_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.o3w_1, tmp0_other_with_cast.o3w_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.o3q_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    var keys = $this.p3q_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = keys[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var keys = $this.p3q_1;
    var size = $this.o3q_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = keys[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = keys[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.o3q_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.p3q_1 = fillArrayVal(Array(4), null);
    this.q3q_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).s3q = function (key, value) {
    var values = this.q3q_1;
    var index;
    if (this.o3q_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = values[index];
        values[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var keys = this.p3q_1;
    var size = this.o3q_1;
    if (size === keys.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(keys.length, 2);
      var newKeys = fillArrayVal(Array(size_0), null);
      var newValues = new Int32Array(imul(keys.length, 2));
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, newKeys, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newValues, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(keys, newKeys, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newValues, 0, 0, insertIndex);
      this.p3q_1 = newKeys;
      this.q3q_1 = newValues;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(keys, keys, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, values, destinationOffset_2, insertIndex, size);
    }
    this.p3q_1[insertIndex] = key;
    this.q3q_1[insertIndex] = value;
    this.o3q_1 = this.o3q_1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.k3j_1 - 1 | 0;
    var keys = $this.i3j_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var keys = $this.i3j_1;
    var size = $this.k3j_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.i3j_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.j3j_1 = fillArrayVal(Array(capacity), null);
    this.k3j_1 = 0;
  }
  protoOf(IdentityArrayMap).t3i = function () {
    return this.k3j_1 > 0;
  };
  protoOf(IdentityArrayMap).g3p = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).f3p = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.j3j_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).y3n = function (key, value) {
    var keys = this.i3j_1;
    var values = this.j3j_1;
    var size = this.k3j_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = imul(size, 2);
        tmp = fillArrayVal(Array(size_0), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, destinationOffset, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.i3j_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_1 = imul(size, 2);
        tmp_0 = fillArrayVal(Array(size_1), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, destValues, destinationOffset_0, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.j3j_1 = destValues;
      this.k3j_1 = this.k3j_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).r3q = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.j3j_1[index];
      var size = this.k3j_1;
      var keys = this.i3j_1;
      var values = this.j3j_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(keys, keys, index, startIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex_0 = index + 1 | 0;
      arrayCopy(values, values, index, startIndex_0, size);
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.k3j_1 = newSize;
      return (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return null;
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.p3i_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.q3i_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var values = $this.q3i_1;
    var size = $this.p3i_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.q3w_1 = this$0;
    this.p3w_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).v = function () {
    return this.p3w_1 < this.q3w_1.p3i_1;
  };
  protoOf(IdentityArraySet$iterator$1).x = function () {
    var tmp = this.q3w_1.q3i_1;
    var tmp1 = this.p3w_1;
    this.p3w_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.p3i_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.q3i_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).n = function () {
    return this.p3i_1;
  };
  protoOf(IdentityArraySet).x3r = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).a1 = function (element) {
    if (!!(element == null))
      return false;
    return this.x3r(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).c3l = function (value) {
    var index;
    var size = this.p3i_1;
    var values = this.q3i_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(size_0), null);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.q3i_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.q3i_1[insertIndex] = value;
    this.p3i_1 = this.p3i_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).z3r = function (collection) {
    if (collection.c1())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.u();
      while (tmp0_iterator.v()) {
        var value = tmp0_iterator.x();
        this.c3l(value);
      }
    } else {
      var thisValues = this.q3i_1;
      var otherValues = collection.q3i_1;
      var thisSize = this.p3i_1;
      var otherSize = collection.p3i_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.q3i_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.p3i_1 = this.p3i_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var size = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(size), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, startIndex, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.q3i_1 = newArray;
        this.p3i_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).c1 = function () {
    return this.p3i_1 === 0;
  };
  protoOf(IdentityArraySet).t3i = function () {
    return this.p3i_1 > 0;
  };
  protoOf(IdentityArraySet).r3w = function (value) {
    var index = find_1(this, value);
    var values = this.q3i_1;
    var size = this.p3i_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.p3i_1 = this.p3i_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).rd = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.c1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.x3r(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).b1 = function (elements) {
    return this.rd(elements);
  };
  protoOf(IdentityArraySet).u = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.g3n_1[$this.e3n_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var size = $this.h3n_1;
    var valueOrder = $this.e3n_1;
    var values = $this.f3n_1;
    var scopeSets = $this.g3n_1;
    var index;
    if (size > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size < valueOrder.length) {
      var valueIndex = valueOrder[size];
      values[valueIndex] = value;
      var tmp0_elvis_lhs = scopeSets[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        scopeSets[valueIndex] = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < size) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = insertIndex + 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = valueOrder;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, valueOrder, destinationOffset, insertIndex, size);
      }
      valueOrder[insertIndex] = valueIndex;
      $this.h3n_1 = $this.h3n_1 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul(valueOrder.length, 2);
    var valueIndex_0 = size;
    var newScopeSets = copyOf_0(scopeSets, newSize);
    var scopeSet_0 = new IdentityArraySet();
    newScopeSets[valueIndex_0] = scopeSet_0;
    var newValues = copyOf_0(values, newSize);
    newValues[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = size + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < size) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, newKeyOrder, destinationOffset_0, insertIndex, size);
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_2, newKeyOrder, 0, 0, insertIndex);
    }
    $this.g3n_1 = newScopeSets;
    $this.f3n_1 = newValues;
    $this.e3n_1 = newKeyOrder;
    $this.h3n_1 = $this.h3n_1 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.h3n_1 - 1 | 0;
    var values = $this.f3n_1;
    var valueOrder = $this.e3n_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midValue = values[valueOrder[mid]];
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var values = $this.f3n_1;
    var valueOrder = $this.e3n_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[valueOrder[i]];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.h3n_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[valueOrder[i_0]];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.h3n_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(50);
    while (tmp_0 < 50) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.e3n_1 = tmp_1;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.f3n_1 = fillArrayVal(Array(50), null);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.g3n_1 = fillArrayVal(Array(50), null);
    this.h3n_1 = 0;
  }
  protoOf(IdentityScopeMap).k3n = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.c3l(scope);
  };
  protoOf(IdentityScopeMap).j3n = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).i3n = function (value, scope) {
    var index = find_2(this, value);
    var valueOrder = this.e3n_1;
    var scopeSets = this.g3n_1;
    var values = this.f3n_1;
    var size = this.h3n_1;
    if (index >= 0) {
      var valueOrderIndex = valueOrder[index];
      var tmp0_elvis_lhs = scopeSets[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.r3w(scope);
      if (set.p3i_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = size;
        if (startIndex < endIndex) {
          // Inline function 'kotlin.collections.copyInto' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = valueOrder;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, valueOrder, index, startIndex, endIndex);
        }
        var newSize = size - 1 | 0;
        valueOrder[newSize] = valueOrderIndex;
        values[valueOrderIndex] = null;
        this.h3n_1 = newSize;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).l3o = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = this.e3n_1;
    var scopeSets = this.g3n_1;
    var values = this.f3n_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.h3n_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.r3w(scope);
        if (set.p3i_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.h3n_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        values[valueOrder[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.h3n_1 = destinationIndex;
  };
  function MutableVector(content, size) {
    this.n3j_1 = content;
    this.o3j_1 = null;
    this.p3j_1 = size;
    this.q3j_1 = 8;
  }
  protoOf(MutableVector).r3j = function (element) {
    this.e3(this.p3j_1 + 1 | 0);
    this.n3j_1[this.p3j_1] = element;
    this.p3j_1 = this.p3j_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).e3 = function (capacity) {
    var oldContent = this.n3j_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.n3j_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).i1 = function (index) {
    var content = this.n3j_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.p3j_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.p3j_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.p3j_1 = this.p3j_1 - 1 | 0;
    content[this.p3j_1] = null;
    return item;
  };
  function persistentSetOf() {
    return Companion_getInstance_7().t3w();
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_4() {
    Companion_instance_5 = this;
    this.u3w_1 = new PersistentHashMap(Companion_getInstance_6().v3w_1, 0);
  }
  protoOf(Companion_4).w3w = function () {
    var tmp = this.u3w_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_5();
    AbstractMap.call(this);
    this.z3w_1 = node;
    this.a3x_1 = size;
  }
  protoOf(PersistentHashMap).n = function () {
    return this.a3x_1;
  };
  protoOf(PersistentHashMap).k2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).l2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).m2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).u2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.z3w_1.f3x(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).x2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.z3w_1.g3x(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).n2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.z3w_1.h3x(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.i3x_1, this.n() + newNodeResult.j3x_1 | 0);
  };
  protoOf(PersistentHashMap).r2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.z3w_1.k3x(tmp$ret$0, key, 0);
    if (this.z3w_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_5().w3w();
    }
    return new PersistentHashMap(newNode, this.n() - 1 | 0);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.p3x_1 = map;
    this.q3x_1 = new MutabilityOwnership();
    this.r3x_1 = this.p3x_1.z3w_1;
    this.s3x_1 = null;
    this.t3x_1 = 0;
    this.u3x_1 = this.p3x_1.n();
  }
  protoOf(PersistentHashMapBuilder).v3x = function (value) {
    this.u3x_1 = value;
    this.t3x_1 = this.t3x_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).n = function () {
    return this.u3x_1;
  };
  protoOf(PersistentHashMapBuilder).w1c = function () {
    var tmp = this;
    var tmp_0;
    if (this.r3x_1 === this.p3x_1.z3w_1) {
      tmp_0 = this.p3x_1;
    } else {
      this.q3x_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.r3x_1, this.n());
    }
    tmp.p3x_1 = tmp_0;
    return this.p3x_1;
  };
  protoOf(PersistentHashMapBuilder).m2 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).k2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).l2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).u2 = function (key) {
    var tmp = this.r3x_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.f3x(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).x2 = function (key) {
    var tmp = this.r3x_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.g3x(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).n2 = function (key, value) {
    this.s3x_1 = null;
    var tmp = this;
    var tmp_0 = this.r3x_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.r3x_1 = tmp_0.w3x(tmp$ret$0, key, value, 0, this);
    return this.s3x_1;
  };
  protoOf(PersistentHashMapBuilder).o2 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1c();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.n();
      var tmp_0 = this;
      var tmp_1 = this.r3x_1;
      var tmp_2 = map.z3w_1;
      tmp_0.r3x_1 = tmp_1.x3x(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.n() | 0) - intersectionCounter.y3x_1 | 0;
      if (!(oldSize === newSize)) {
        this.v3x(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).o2.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).r2 = function (key) {
    this.s3x_1 = null;
    var tmp = this;
    var tmp_0 = this.r3x_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.z3x(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_6().v3w_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.r3x_1 = tmp_1;
    return this.s3x_1;
  };
  protoOf(PersistentHashMapBuilder).a3y = function (key, value) {
    var oldSize = this.n();
    var tmp = this;
    var tmp_0 = this.r3x_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.b3y(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_6().v3w_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.r3x_1 = tmp_1;
    return !(oldSize === this.n());
  };
  protoOf(PersistentHashMapBuilder).z = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_6().v3w_1;
    tmp.r3x_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.v3x(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.c3y_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).v = function () {
    return this.c3y_1.v();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).x = function () {
    return this.c3y_1.x();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).w = function () {
    return this.c3y_1.w();
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.d3y_1[pathIndex].r3y(node.e3x_1, node.e3x_1.length, 0);
      while (!equals($this.d3y_1[pathIndex].n3y(), key)) {
        $this.d3y_1[pathIndex].s3y();
      }
      $this.e3y_1 = pathIndex;
      return Unit_instance;
    }
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (node.v3y(keyPositionMask)) {
      var keyIndex = node.t3y(keyPositionMask);
      $this.d3y_1[pathIndex].r3y(node.e3x_1, imul(get_ENTRY_SIZE(), node.u3y()), keyIndex);
      $this.e3y_1 = pathIndex;
      return Unit_instance;
    }
    var nodeIndex = node.w3y(keyPositionMask);
    var targetNode = node.x3y(nodeIndex);
    $this.d3y_1[pathIndex].r3y(node.e3x_1, imul(get_ENTRY_SIZE(), node.u3y()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.l3y_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification($this) {
    if (!($this.j3y_1.t3x_1 === $this.m3y_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.r3x_1, path);
    this.j3y_1 = builder;
    this.k3y_1 = null;
    this.l3y_1 = false;
    this.m3y_1 = this.j3y_1.t3x_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).x = function () {
    checkForComodification(this);
    this.k3y_1 = this.n3y();
    this.l3y_1 = true;
    return protoOf(PersistentHashMapBaseIterator).x.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).w = function () {
    checkNextWasInvoked(this);
    if (this.v()) {
      var currentKey = this.n3y();
      // Inline function 'kotlin.collections.remove' call
      var this_0 = this.j3y_1;
      var key = this.k3y_1;
      (isInterface(this_0, MutableMap) ? this_0 : THROW_CCE()).r2(key);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.j3y_1.r3x_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.remove' call
      var this_1 = this.j3y_1;
      var key_0 = this.k3y_1;
      (isInterface(this_1, MutableMap) ? this_1 : THROW_CCE()).r2(key_0);
    }
    this.k3y_1 = null;
    this.l3y_1 = false;
    this.m3y_1 = this.j3y_1.t3x_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.b3z_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).x = function () {
    assert(this.c3z());
    this.q3y_1 = this.q3y_1 + 2 | 0;
    var tmp = this.o3y_1[this.q3y_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.o3y_1[this.q3y_1 - 1 | 0];
    return new MutableMapEntry(this.b3z_1, tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.j3z_1 = parentIterator;
    this.k3z_1 = value;
  }
  protoOf(MutableMapEntry).q2 = function () {
    return this.k3z_1;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.n3z_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).o3z = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).r = function (element) {
    return this.o3z((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).z = function () {
    this.n3z_1.z();
  };
  protoOf(PersistentHashMapBuilderEntries).u = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.n3z_1);
  };
  protoOf(PersistentHashMapBuilderEntries).e4 = function (element) {
    return this.n3z_1.a3y(element.p2(), element.q2());
  };
  protoOf(PersistentHashMapBuilderEntries).n = function () {
    return this.n3z_1.n();
  };
  protoOf(PersistentHashMapBuilderEntries).d4 = function (element) {
    var tmp0_safe_receiver = this.n3z_1.x2(element.p2());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp = equals(tmp0_safe_receiver, element.q2());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.q2() == null ? this.n3z_1.u2(element.p2()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.p3z_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).i4 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).r = function (element) {
    return this.i4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).z = function () {
    this.p3z_1.z();
  };
  protoOf(PersistentHashMapBuilderKeys).u = function () {
    return new PersistentHashMapBuilderKeysIterator(this.p3z_1);
  };
  protoOf(PersistentHashMapBuilderKeys).r2 = function (element) {
    if (this.p3z_1.u2(element)) {
      this.p3z_1.r2(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).n = function () {
    return this.p3z_1.n();
  };
  protoOf(PersistentHashMapBuilderKeys).n3 = function (element) {
    return this.p3z_1.u2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.q3z_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).n = function () {
    return this.q3z_1.n();
  };
  protoOf(PersistentHashMapBuilderValues).r3 = function (element) {
    return this.q3z_1.v2(element);
  };
  protoOf(PersistentHashMapBuilderValues).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).s3 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).r = function (element) {
    return this.s3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).u = function () {
    return new PersistentHashMapBuilderValuesIterator(this.q3z_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).a4 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.d4(element);
  };
  protoOf(AbstractMapBuilderEntries).a1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.a4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(AbstractMapBuilderEntries).c4 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.e4(element);
  };
  protoOf(AbstractMapBuilderEntries).s = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.c4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.d3y_1[pathIndex].c3z()) {
      return pathIndex;
    }
    if ($this.d3y_1[pathIndex].e3z()) {
      var node = $this.d3y_1[pathIndex].f3z();
      if (pathIndex === 6) {
        $this.d3y_1[pathIndex + 1 | 0].d3z(node.e3x_1, node.e3x_1.length);
      } else {
        $this.d3y_1[pathIndex + 1 | 0].d3z(node.e3x_1, imul(get_ENTRY_SIZE(), node.u3y()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.d3y_1[$this.e3y_1].c3z()) {
      return Unit_instance;
    }
    var inductionVariable = $this.e3y_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.d3y_1[i].e3z() : false) {
          $this.d3y_1[i].g3z();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.e3y_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.d3y_1[i - 1 | 0].g3z();
        }
        $this.d3y_1[i].d3z(Companion_getInstance_6().v3w_1.e3x_1, 0);
      }
       while (0 <= inductionVariable);
    $this.f3y_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.v())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.d3y_1 = path;
    this.e3y_1 = 0;
    this.f3y_1 = true;
    this.d3y_1[0].d3z(node.e3x_1, imul(get_ENTRY_SIZE(), node.u3y()));
    this.e3y_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).n3y = function () {
    checkHasNext(this);
    return this.d3y_1[this.e3y_1].n3y();
  };
  protoOf(PersistentHashMapBaseIterator).v = function () {
    return this.f3y_1;
  };
  protoOf(PersistentHashMapBaseIterator).x = function () {
    checkHasNext(this);
    var result = this.d3y_1[this.e3y_1].x();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.o3y_1 = Companion_getInstance_6().v3w_1.e3x_1;
    this.p3y_1 = 0;
    this.q3y_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).r3y = function (buffer, dataSize, index) {
    this.o3y_1 = buffer;
    this.p3y_1 = dataSize;
    this.q3y_1 = index;
  };
  protoOf(TrieNodeBaseIterator).d3z = function (buffer, dataSize) {
    this.r3y(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).c3z = function () {
    return this.q3y_1 < this.p3y_1;
  };
  protoOf(TrieNodeBaseIterator).n3y = function () {
    assert(this.c3z());
    var tmp = this.o3y_1[this.q3y_1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).s3y = function () {
    assert(this.c3z());
    this.q3y_1 = this.q3y_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).e3z = function () {
    assert(this.q3y_1 >= this.p3y_1);
    return this.q3y_1 < this.o3y_1.length;
  };
  protoOf(TrieNodeBaseIterator).f3z = function () {
    assert(this.e3z());
    var tmp = this.o3y_1[this.q3y_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).g3z = function () {
    assert(this.e3z());
    this.q3y_1 = this.q3y_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).v = function () {
    return this.c3z();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).x = function () {
    assert(this.c3z());
    this.q3y_1 = this.q3y_1 + 2 | 0;
    var tmp = this.o3y_1[this.q3y_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).x = function () {
    assert(this.c3z());
    this.q3y_1 = this.q3y_1 + 2 | 0;
    var tmp = this.o3y_1[this.q3y_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).x = function () {
    assert(this.c3z());
    this.q3y_1 = this.q3y_1 + 2 | 0;
    var tmp = this.o3y_1[this.q3y_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.o3y_1[this.q3y_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.l3z_1 = key;
    this.m3z_1 = value;
  }
  protoOf(MapEntry).p2 = function () {
    return this.l3z_1;
  };
  protoOf(MapEntry).q2 = function () {
    return this.m3z_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.p2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.q2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.p2(), this.p2()) ? equals(tmp0_safe_receiver.q2(), this.q2()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.p2()) + '=' + toString_0(this.q2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.a40_1 = map;
  }
  protoOf(PersistentHashMapKeys).n = function () {
    return this.a40_1.n();
  };
  protoOf(PersistentHashMapKeys).n3 = function (element) {
    return this.a40_1.u2(element);
  };
  protoOf(PersistentHashMapKeys).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).u = function () {
    return new PersistentHashMapKeysIterator(this.a40_1.z3w_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.b40_1 = map;
  }
  protoOf(PersistentHashMapValues).n = function () {
    return this.b40_1.n();
  };
  protoOf(PersistentHashMapValues).r3 = function (element) {
    return this.b40_1.v2(element);
  };
  protoOf(PersistentHashMapValues).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).u = function () {
    return new PersistentHashMapValuesIterator(this.b40_1.z3w_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.c40_1 = map;
  }
  protoOf(PersistentHashMapEntries).n = function () {
    return this.c40_1.n();
  };
  protoOf(PersistentHashMapEntries).d40 = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.c40_1.x2(element.p2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.q2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.q2() == null ? this.c40_1.u2(element.p2()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).a1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.d40((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).u = function () {
    return new PersistentHashMapEntriesIterator(this.c40_1.z3w_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.i3x_1 = node;
    this.j3x_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.c3x_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.e3x_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.e3x_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.t3y(positionMask);
    var newBuffer = insertEntryAtIndex($this.e3x_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.b3x_1 | positionMask, $this.c3x_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.t3y(positionMask);
    if ($this.d3x_1 === owner) {
      $this.e3x_1 = insertEntryAtIndex($this.e3x_1, keyIndex, key, value);
      $this.b3x_1 = $this.b3x_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.e3x_1, keyIndex, key, value);
    return new TrieNode($this.b3x_1 | positionMask, $this.c3x_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.e3x_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.b3x_1, $this.c3x_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.d3x_1 === mutator.q3x_1) {
      $this.e3x_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.t3x_1 = mutator.t3x_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.e3x_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.b3x_1, $this.c3x_1, newBuffer, mutator.q3x_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.e3x_1;
    if (newNodeBuffer.length === 2 ? newNode.c3x_1 === 0 : false) {
      if ($this.e3x_1.length === 1) {
        newNode.b3x_1 = $this.c3x_1;
        return newNode;
      }
      var keyIndex = $this.t3y(positionMask);
      var newBuffer = replaceNodeWithEntry($this.e3x_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.b3x_1 ^ positionMask, $this.c3x_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.e3x_1, $this.e3x_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.b3x_1, $this.c3x_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.e3x_1.length === 1 ? newNode.e3x_1.length === 2 : false) ? newNode.c3x_1 === 0 : false) {
      newNode.b3x_1 = $this.c3x_1;
      return newNode;
    }
    if ($this.d3x_1 === owner) {
      $this.e3x_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.e3x_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.b3x_1, $this.c3x_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.e3x_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.e3x_1, nodeIndex);
    return TrieNode_init_$Create$($this.b3x_1, $this.c3x_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.e3x_1.length === 1)
      return null;
    if ($this.d3x_1 === owner) {
      $this.e3x_1 = removeNodeAtIndex_0($this.e3x_1, nodeIndex);
      $this.c3x_1 = $this.c3x_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.e3x_1, nodeIndex);
    return new TrieNode($this.b3x_1, $this.c3x_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.w3y(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.e3x_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.b3x_1 ^ positionMask, $this.c3x_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.d3x_1 === owner) {
      $this.e3x_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.b3x_1 = $this.b3x_1 ^ positionMask;
      $this.c3x_1 = $this.c3x_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.b3x_1 ^ positionMask, $this.c3x_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment(keyHash1, shift);
    var setBit2 = indexSegment(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.e3x_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.e3x_1, keyIndex);
    return TrieNode_init_$Create$($this.b3x_1 ^ positionMask, $this.c3x_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.n();
    mutator.v3x(tmp1 - 1 | 0);
    mutator.s3x_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.e3x_1.length === 2)
      return null;
    if ($this.d3x_1 === mutator.q3x_1) {
      $this.e3x_1 = removeEntryAtIndex_0($this.e3x_1, keyIndex);
      $this.b3x_1 = $this.b3x_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.e3x_1, keyIndex);
    return new TrieNode($this.b3x_1 ^ positionMask, $this.c3x_1, newBuffer, mutator.q3x_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.e3x_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.e3x_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.n();
    mutator.v3x(tmp1 - 1 | 0);
    mutator.s3x_1 = valueAtKeyIndex($this, i);
    if ($this.e3x_1.length === 2)
      return null;
    if ($this.d3x_1 === mutator.q3x_1) {
      $this.e3x_1 = removeEntryAtIndex_0($this.e3x_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.e3x_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.q3x_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.e3x_1.length), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.e3x_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.e3x_1.length), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.e3x_1.length), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.e3x_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.e3x_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.e3x_1.length), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.s3x_1 = valueAtKeyIndex($this, i);
          if ($this.d3x_1 === mutator.q3x_1) {
            $this.e3x_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.t3x_1 = mutator.t3x_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.e3x_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.q3x_1);
        }
      }
       while (!(i === last));
    var tmp4 = mutator.n();
    mutator.v3x(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.e3x_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.q3x_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.e3x_1.length), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.e3x_1.length), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.e3x_1.length), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.c3x_1 === 0);
    assert($this.b3x_1 === 0);
    assert(otherNode.c3x_1 === 0);
    assert(otherNode.b3x_1 === 0);
    var tempBuffer = copyOf_0($this.e3x_1, $this.e3x_1.length + otherNode.e3x_1.length | 0);
    var i = $this.e3x_1.length;
    var progression = step(until(0, otherNode.e3x_1.length), 2);
    var inductionVariable = progression.s9_1;
    var last = progression.t9_1;
    var step_0 = progression.u9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.e3x_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.e3x_1[j];
          tempBuffer[i + 1 | 0] = otherNode.e3x_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.y3x_1 = intersectionCounter.y3x_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.e3x_1.length ? $this : newSize === otherNode.e3x_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.x3y($this.w3y(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.x3y(otherNode.w3y(positionMask));
        tmp_0 = targetNode.x3x(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.v3y(positionMask)) {
        var keyIndex = otherNode.t3y(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.n();
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var this_0 = targetNode.w3x(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.n() === oldSize) {
          intersectionCounter.y3x_1 = intersectionCounter.y3x_1 + 1 | 0;
        }
        tmp_0 = this_0;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.x3y(otherNode.w3y(positionMask));
      var tmp_1;
      if ($this.v3y(positionMask)) {
        var keyIndex_0 = $this.t3y(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        var tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.f3x(tmp$ret$2, key_0, shift + 5 | 0)) {
          intersectionCounter.y3x_1 = intersectionCounter.y3x_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          var tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.w3x(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.t3y(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.t3y(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      var tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.q3x_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.c3x_1 === 0)
      return $this.e3x_1.length / 2 | 0;
    var numValues = countOneBits($this.b3x_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.e3x_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.x3y(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.c3x_1 === otherNode.c3x_1))
      return false;
    if (!($this.b3x_1 === otherNode.b3x_1))
      return false;
    var inductionVariable = 0;
    var last = $this.e3x_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.e3x_1[i] === otherNode.e3x_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.d3x_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.v3w_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_6();
    this.b3x_1 = dataMap;
    this.c3x_1 = nodeMap;
    this.d3x_1 = ownedBy;
    this.e3x_1 = buffer;
  }
  protoOf(TrieNode).u3y = function () {
    return countOneBits(this.b3x_1);
  };
  protoOf(TrieNode).v3y = function (positionMask) {
    return !((this.b3x_1 & positionMask) === 0);
  };
  protoOf(TrieNode).t3y = function (positionMask) {
    return imul(2, countOneBits(this.b3x_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).w3y = function (positionMask) {
    return (this.e3x_1.length - 1 | 0) - countOneBits(this.c3x_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).x3y = function (nodeIndex) {
    var tmp = this.e3x_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).f3x = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.v3y(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.t3y(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.x3y(this.w3y(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.f3x(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).g3x = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.v3y(keyPositionMask)) {
      var keyIndex = this.t3y(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.x3y(this.w3y(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.g3x(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).x3x = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.e40(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.q3x_1);
    }
    var newNodeMap = this.c3x_1 | otherNode.c3x_1;
    var newDataMap = (this.b3x_1 ^ otherNode.b3x_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.b3x_1 & otherNode.b3x_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var leftKey = keyAtIndex(this, this.t3y(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.t3y(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((newNodeMap & newDataMap) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.d3x_1, mutator.q3x_1) ? this.b3x_1 === newDataMap : false) ? this.c3x_1 === newNodeMap : false) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = fillArrayVal(Array(size), null);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_1 = index_0;
      var newNodeIndex = (mutableNode.e3x_1.length - 1 | 0) - index_1 | 0;
      mutableNode.e3x_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_2 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_3 = index_2;
      var newKeyIndex = imul(index_3, 2);
      if (!otherNode.v3y(bit_1)) {
        var oldKeyIndex = this.t3y(bit_1);
        mutableNode.e3x_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.e3x_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.t3y(bit_1);
        mutableNode.e3x_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.e3x_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.v3y(bit_1)) {
          intersectionCounter.y3x_1 = intersectionCounter.y3x_1 + 1 | 0;
        }
      }
      index_2 = index_2 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).h3x = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.v3y(keyPositionMask)) {
      var keyIndex = this.t3y(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.w3y(keyPositionMask);
      var targetNode = this.x3y(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.h3x(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.i3x_1;
      tmp_2.i3x_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).w3x = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.v3y(keyPositionMask)) {
      var keyIndex = this.t3y(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.s3x_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.n();
      mutator.v3x(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.q3x_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.w3y(keyPositionMask);
      var targetNode = this.x3y(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.w3x(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.q3x_1);
    }
    var tmp3 = mutator.n();
    mutator.v3x(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.q3x_1);
  };
  protoOf(TrieNode).k3x = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.v3y(keyPositionMask)) {
      var keyIndex = this.t3y(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.w3y(keyPositionMask);
      var targetNode = this.x3y(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.k3x(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).z3x = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.v3y(keyPositionMask)) {
      var keyIndex = this.t3y(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.w3y(keyPositionMask);
      var targetNode = this.x3y(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.z3x(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.q3x_1);
    }
    return this;
  };
  protoOf(TrieNode).b3y = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.v3y(keyPositionMask)) {
      var keyIndex = this.t3y(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.w3y(keyPositionMask);
      var targetNode = this.x3y(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.b3y(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.q3x_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.s3w_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_5().w3w());
  }
  protoOf(Companion_6).t3w = function () {
    return this.s3w_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_7();
    AbstractSet.call(this);
    this.f40_1 = firstElement;
    this.g40_1 = lastElement;
    this.h40_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).n = function () {
    return this.h40_1.n();
  };
  protoOf(PersistentOrderedSet).a1 = function (element) {
    return this.h40_1.u2(element);
  };
  protoOf(PersistentOrderedSet).r = function (element) {
    if (this.h40_1.u2(element)) {
      return this;
    }
    if (this.c1()) {
      var newMap = this.h40_1.n2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.g40_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.h40_1.x2(lastElement));
    var newMap_0 = this.h40_1.n2(lastElement, lastLinks.k40(element)).n2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.f40_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).s = function (element) {
    var tmp0_elvis_lhs = this.h40_1.x2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.h40_1.r2(element);
    if (links.l40()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.i40_1;
      var tmp$ret$0 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).x2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.i40_1;
      newMap = tmp_0.n2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.k40(links.j40_1));
    }
    if (links.n40()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.j40_1;
      var tmp$ret$1 = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).x2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.j40_1;
      newMap = tmp_2.n2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.m40(links.i40_1));
    }
    var newFirstElement = !links.l40() ? links.j40_1 : this.f40_1;
    var newLastElement = !links.n40() ? links.i40_1 : this.g40_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).u = function () {
    return new PersistentOrderedSetIterator(this.f40_1, this.h40_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.i40_1 = previous;
    this.j40_1 = next;
  }
  protoOf(Links).k40 = function (newNext) {
    return new Links(this.i40_1, newNext);
  };
  protoOf(Links).m40 = function (newPrevious) {
    return new Links(newPrevious, this.j40_1);
  };
  protoOf(Links).n40 = function () {
    return !(this.j40_1 === EndOfChain_instance);
  };
  protoOf(Links).l40 = function () {
    return !(this.i40_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.v())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.o40_1 = nextElement;
    this.p40_1 = map;
    this.q40_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).v = function () {
    return this.q40_1 < this.p40_1.n();
  };
  protoOf(PersistentOrderedSetIterator).x = function () {
    checkHasNext_0(this);
    var tmp = this.o40_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.q40_1 = this.q40_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.p40_1.x2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.o40_1 = tmp_1.j40_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.y3x_1 = count;
  }
  protoOf(DeltaCounter).e40 = function (that) {
    this.y3x_1 = this.y3x_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.y3x_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.y3x_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.y3x_1 === tmp0_other_with_cast.y3x_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    this_0.w40(block);
    return this_0;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.t3n() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.m3a_1, other.m3a_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.x3a(key);
    var slot = composer.i3b();
    var tmp;
    if (slot === Companion_getInstance_0().s3a_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.j3b(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.w40(block);
    composer.y3a();
    return result;
  }
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.h41_1 = map;
    this.i41_1 = 8;
  }
  protoOf(Builder).w1c = function () {
    var tmp = this;
    var tmp_0;
    if (this.r3x_1 === this.h41_1.z3w_1) {
      tmp_0 = this.h41_1;
    } else {
      this.q3x_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.r3x_1, this.n());
    }
    tmp.h41_1 = tmp_0;
    return this.h41_1;
  };
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_6().v3w_1;
    tmp.j41_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_8();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).m2 = function () {
    return protoOf(PersistentHashMap).m2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).d2e = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_8().j41_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.i3w_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.j3w_1[0].equals(key) ? 0 : $this.j3w_1[0].p9(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.j3w_1[mid];
      var comparison = midVal.ua(key);
      if (comparison.p9(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.p9(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.i3w_1 = size;
    this.j3w_1 = keys;
    this.k3w_1 = values;
  }
  protoOf(ThreadMap).l3w = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.k3w_1[index] : null;
  };
  protoOf(ThreadMap).m3w = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.k3w_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).n3w = function (key, value) {
    var size = this.i3w_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.k3w_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.j3w_1[source];
        var oldValue = this.k3w_1[source];
        if (oldKey.p9(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.j3w_1[source];
          var oldValue_0 = this.k3w_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (!properties_initialized_ThreadMap_kt_kd2vq6) {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.m8(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.g1(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.m8(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.m8(truncated);
    }
    buffer.m8(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.m8(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.m8(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.y5(element.y9_1);
        } else {
          _this__u8e3s4.m8(toString_0(element));
        }
      }
    }
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.n());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g1(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.r(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.o41_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).jn = function () {
    return this.o41_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.p41_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).jn = function () {
    return this.p41_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      get_applyObservers().s($observer);
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      get_globalWriteObservers().s($observer);
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_8() {
  }
  protoOf(Companion_8).f38 = function () {
    return currentSnapshot();
  };
  protoOf(Companion_8).x3s = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q41(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_8).x3u = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    get_applyObservers().r(observer);
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_8).r41 = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    get_globalWriteObservers().r(observer);
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_8).y3r = function () {
    return currentSnapshot().y3r();
  };
  protoOf(Companion_8).w3r = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().br().s41();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3i()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function Snapshot(id, invalid) {
    this.d3j_1 = invalid;
    this.e3j_1 = id;
    this.f3j_1 = false;
    this.g3j_1 = !(id === 0) ? trackPinning(id, this.t41()) : -1;
    this.h3j_1 = 8;
  }
  protoOf(Snapshot).u41 = function (_set____db54di) {
    this.d3j_1 = _set____db54di;
  };
  protoOf(Snapshot).t41 = function () {
    return this.d3j_1;
  };
  protoOf(Snapshot).v41 = function (_set____db54di) {
    this.e3j_1 = _set____db54di;
  };
  protoOf(Snapshot).i37 = function () {
    return this.e3j_1;
  };
  protoOf(Snapshot).w41 = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).x41 = function () {
    return 0;
  };
  protoOf(Snapshot).jn = function () {
    this.f3j_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.z41();
  };
  protoOf(Snapshot).y3s = function () {
    var previous = get_threadSnapshot().br();
    get_threadSnapshot().a3q(this);
    return previous;
  };
  protoOf(Snapshot).z3s = function (snapshot) {
    get_threadSnapshot().a3q(snapshot);
  };
  protoOf(Snapshot).d42 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.e42();
    this.f42();
  };
  protoOf(Snapshot).e42 = function () {
    set_openSnapshots(get_openSnapshots().k42(this.i37()));
  };
  protoOf(Snapshot).f42 = function () {
    this.z41();
  };
  protoOf(Snapshot).l42 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.f3j_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).z41 = function () {
    if (this.g3j_1 >= 0) {
      releasePinningLocked(this.g3j_1);
      this.g3j_1 = -1;
    }
  };
  protoOf(Snapshot).m42 = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.g3j_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.g3j_1 = -1;
    return this_0;
  };
  function StateObject() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.g1(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!get_globalWriteObservers().c1()) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$6 = tmp_0;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).q41 = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).y3r = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).c43 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).d43 = function (snapshot) {
    return this.c43(snapshot);
  };
  protoOf(GlobalSnapshot).e43 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).f43 = function (snapshot) {
    return this.e43(snapshot);
  };
  protoOf(GlobalSnapshot).p3t = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).jn = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.z41();
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.n43(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().t43(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().u43(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().br();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().br() : tmp0_elvis_lhs;
  }
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.n3t_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.n3t_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.g3j_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.s41();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.m43(null);
      var id = $this.i37();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.q3i_1;
      var inductionVariable = 0;
      var last = modified.p3i_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).f3w();
          while (!(current == null)) {
            if (current.v43_1 === id ? true : contains($this.k3t_1, current.v43_1)) {
              current.v43_1 = 0;
            }
            current = current.w43_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.d42();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.l3t_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.l3t_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.y43_1 = new Int32Array(0);
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_10();
    Snapshot.call(this, id, invalid);
    this.f3t_1 = readObserver;
    this.g3t_1 = writeObserver;
    this.h3t_1 = 0;
    this.i3t_1 = null;
    this.j3t_1 = null;
    this.k3t_1 = Companion_getInstance_11().z43_1;
    this.l3t_1 = Companion_getInstance_10().y43_1;
    this.m3t_1 = 1;
    this.n3t_1 = false;
    this.o3t_1 = 8;
  }
  protoOf(MutableSnapshot).a42 = function () {
    return this.f3t_1;
  };
  protoOf(MutableSnapshot).b42 = function () {
    return this.g3t_1;
  };
  protoOf(MutableSnapshot).q41 = function (readObserver, writeObserver) {
    this.l42();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.i43(this.i37());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().a44(newId));
    var currentInvalid = this.t41();
    this.u41(currentInvalid.a44(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.i37() + 1 | 0, newId), mergedReadObserver(readObserver, this.a42()), mergedWriteObserver(writeObserver, this.b42()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.n3t_1 ? !this.f3j_1 : false) {
      var previousId = this.i37();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.v41(tmp0_0);
      set_openSnapshots(get_openSnapshots().a44(this.i37()));
      this.u41(addRange(this.t41(), previousId + 1 | 0, this.i37()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).p3t = function () {
    var modified = this.s41();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().br(), this, get_openSnapshots().k42(get_currentGlobalSnapshot().br().i37())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.p3i_1 === 0) {
      this.e42();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().br();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.s41();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.c1())) {
        observers = toMutableList(get_applyObservers());
        globalModified = previousModified;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().br();
      var result = this.g43(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().k42(previousGlobalSnapshot_0.i37()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.e42();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.s41();
      this.m43(null);
      previousGlobalSnapshot_0.m43(null);
      observers = toMutableList(get_applyObservers());
      globalModified = previousModified_0;
      tmp = Unit_instance;
    }
    this.n3t_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : this_0.c1())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.g1(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.c1())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.n() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.g1(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.f42();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.q3i_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.p3i_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.q3i_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.p3i_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var it_0 = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(it_0);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.j3t_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.n() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.g1(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.j3t_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).y41 = function () {
    return false;
  };
  protoOf(MutableSnapshot).jn = function () {
    if (!this.f3j_1) {
      protoOf(Snapshot).jn.call(this);
      this.d43(this);
    }
  };
  protoOf(MutableSnapshot).f43 = function (snapshot) {
    this.m3t_1 = this.m3t_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).d43 = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.m3t_1 > 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.m3t_1 = this.m3t_1 - 1 | 0;
    if (this.m3t_1 === 0) {
      if (!this.n3t_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).y3r = function () {
    if (this.n3t_1 ? true : this.f3j_1)
      return Unit_instance;
    this.h43();
  };
  protoOf(MutableSnapshot).e42 = function () {
    set_openSnapshots(get_openSnapshots().k42(this.i37()).b44(this.k3t_1));
  };
  protoOf(MutableSnapshot).f42 = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).f42.call(this);
  };
  protoOf(MutableSnapshot).g43 = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.t41().a44(this.i37()).c44(this.k3t_1);
    var modified = ensureNotNull(this.s41());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.q3i_1;
    var inductionVariable = 0;
    var last = modified.p3i_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.f3w();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.i37(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.i37(), this.t41());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.x2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.h3w(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_0;
                  tmp_4 = this_0;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.r(to(state, current.c3w()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_1 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = this_1;
                  tmp_5 = this_1;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.r(state);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_2 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_2;
                  tmp_6 = this_2;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.r(!equals(merged, previous) ? to(state, merged) : to(state, previous.c3w()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.h43();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.n() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.g1(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.de();
          var stateRecord = item.ee();
          stateRecord.v43_1 = this.i37();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.w43_1 = state_0.f3w();
          state_0.g3w(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_instance;
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.n() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.g1(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.r3w(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.j3t_1;
      this.j3t_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).h43 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.i43(this.i37());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.n3t_1 ? !this.f3j_1 : false) {
      var previousId = this.i37();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.v41(tmp0);
      set_openSnapshots(get_openSnapshots().a44(this.i37()));
      this.u41(addRange(this.t41(), previousId + 1 | 0, this.i37()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).i43 = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.k3t_1 = this.k3t_1.a44(id);
  };
  protoOf(MutableSnapshot).j43 = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.l3t_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.l3t_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).k43 = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.l3t_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.l3t_1 = tmp_0;
  };
  protoOf(MutableSnapshot).l43 = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.k3t_1 = this.k3t_1.c44(snapshots);
  };
  protoOf(MutableSnapshot).c42 = function (state) {
    var tmp0_elvis_lhs = this.s41();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.m43(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.c3l(state);
  };
  protoOf(MutableSnapshot).w41 = function (_set____db54di) {
    this.h3t_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).x41 = function () {
    return this.h3t_1;
  };
  protoOf(MutableSnapshot).m43 = function (_set____db54di) {
    this.i3t_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).s41 = function () {
    return this.i3t_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.e44_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.g44_1 = snapshot;
    this.h44_1 = 8;
  }
  function SnapshotApplyResult() {
    this.i44_1 = 0;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().br();
    modified = previousGlobalSnapshot.s41();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().t43(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
        var observers = toMutableList(get_applyObservers());
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.n() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.g1(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().t43(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.q3i_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.p3i_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var it = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function StateRecord() {
    this.v43_1 = currentSnapshot().i37();
    this.w43_1 = null;
    this.x43_1 = 8;
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function deactivate($this) {
    if (!$this.a45_1) {
      $this.a45_1 = true;
      $this.z44_1.d43($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.z44_1 = parent;
    this.a45_1 = false;
    this.z44_1.f43(this);
  }
  protoOf(NestedMutableSnapshot).jn = function () {
    if (!this.f3j_1) {
      protoOf(MutableSnapshot).jn.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).p3t = function () {
    if (this.z44_1.n3t_1 ? true : this.z44_1.f3j_1)
      return new Failure(this);
    var modified = this.s41();
    var id = this.i37();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.z44_1, this, this.z44_1.t41()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null ? true : modified.p3i_1 === 0) {
      this.d42();
    } else {
      var result = this.g43(this.z44_1.i37(), optimisticMerges_0, this.z44_1.t41());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.z44_1.s41();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.z3r(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.z44_1.m43(modified);
        this.m43(null);
      }
    }
    if (this.z44_1.i37() < id) {
      this.z44_1.h43();
    }
    this.z44_1.u41(this.z44_1.t41().k42(id).b44(this.k3t_1));
    this.z44_1.i43(id);
    this.z44_1.j43(this.m42());
    this.z44_1.l43(this.k3t_1);
    this.z44_1.k43(this.l3t_1);
    this.n3t_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.a44(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.s41();
    var id = currentSnapshot.i37();
    if (modified == null)
      return null;
    var start = applyingSnapshot.t41().a44(applyingSnapshot.i37()).c44(applyingSnapshot.k3t_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.q3i_1;
    var inductionVariable = 0;
    var last = modified.p3i_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.f3w();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.i37(), applyingSnapshot.t41());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.h3w(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var this_0 = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = this_0;
                tmp_3 = this_0;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.n2(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().g1(snapshot.i37())) {
      // Inline function 'kotlin.error' call
      var message = 'Snapshot is not open';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().k42(previousGlobalSnapshot.i37()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().k42(previousGlobalSnapshot.i37()));
    get_currentGlobalSnapshot().v3n(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.jn();
    set_openSnapshots(get_openSnapshots().a44(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.b45_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.d45_1[i];
        var value = entry == null ? null : entry.br();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.d45_1[currentUsed] = entry;
            this_0.c45_1[currentUsed] = this_0.c45_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.d45_1[i_0] = null;
        this_0.c45_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.b45_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().c3l(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.v43_1 < current.v43_1 ? current : candidate;
      }
      current = current.w43_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.f3w();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().f45(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.v43_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.v43_1 < validRecord.v43_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.f3w();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.v43_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.v43_1 < current_0.v43_1)
                    youngest = current_0;
                  current_0 = current_0.w43_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.v43_1 = 0;
            recordToOverwrite.b3w(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.w43_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.v43_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.g1(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_9.f38();
    var tmp0_safe_receiver = snapshot.a42();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.i37(), snapshot.t41());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_9.f38();
      var tmp_0 = state.f3w();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.i37(), syncSnapshot.t41());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_9.f38();
    var tmp0_elvis_lhs = readable(r, snapshot.i37(), snapshot.t41());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_9.f38();
      tmp = readable(r, syncSnapshot.i37(), syncSnapshot.t41());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.w41(snapshot.x41() + 1 | 0);
    var tmp1_safe_receiver = snapshot.b42();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.y41()) {
      snapshot.c42(state);
    }
    var id = snapshot.i37();
    if (candidate.v43_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.v43_1 = id;
    snapshot.c42(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.v43_1 = IntCompanionObject_instance.MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.c3w();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.v43_1 = IntCompanionObject_instance.MAX_VALUE;
      this_0.w43_1 = state.f3w();
      state.g3w(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.f3w();
    var validRecord = null;
    var reuseLimit = get_pinningTable().f45(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_11().z43_1;
    while (!(current == null)) {
      var currentId = current.v43_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.v43_1 < validRecord.v43_1 ? current : validRecord;
        }
      }
      current = current.w43_1;
    }
    return null;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().a44(result.i37()));
      return result;
    };
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_11().z43_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      // Inline function 'kotlin.collections.mutableListOf' call
      applyObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.mutableListOf' call
      globalWriteObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_11().z43_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().a44(this_0.i37()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().br();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.p43_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.p43_1;
    var half = $this.o43_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.o43_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap($this, a, b) {
    var values = $this.p43_1;
    var index = $this.q43_1;
    var handles = $this.r43_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.p43_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.p43_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.q43_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.p43_1 = newValues;
    $this.q43_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.r43_1.length;
    if ($this.s43_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.r43_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.r43_1 = newHandles;
    }
    var handle = $this.s43_1;
    $this.s43_1 = $this.r43_1[$this.s43_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.r43_1[handle] = $this.s43_1;
    $this.s43_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.o43_1 = 0;
    this.p43_1 = new Int32Array(16);
    this.q43_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.r43_1 = tmp_1;
    this.s43_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).f45 = function (default_0) {
    return this.o43_1 > 0 ? this.p43_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).t43 = function (value) {
    ensure(this, this.o43_1 + 1 | 0);
    var tmp1 = this.o43_1;
    this.o43_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.p43_1[i] = value;
    this.q43_1[i] = handle;
    this.r43_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).u43 = function (handle) {
    var i = this.r43_1[handle];
    swap(this, i, this.o43_1 - 1 | 0);
    this.o43_1 = this.o43_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    this.z43_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.o45_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).x45 = function ($this$sequence, $completion) {
    var tmp = this.y45($this$sequence, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(SnapshotIdSet$iterator$slambda).nc = function (p1, $completion) {
    return this.x45(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 15;
            this.q45_1 = this.o45_1.j42_1;
            if (!(this.q45_1 == null)) {
              this.r45_1 = intArrayIterator(this.q45_1);
              this.pb_1 = 1;
              continue $sm;
            } else {
              this.pb_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.r45_1.v()) {
              this.pb_1 = 3;
              continue $sm;
            }

            this.s45_1 = this.r45_1.x();
            this.pb_1 = 2;
            suspendResult = this.p45_1.he(this.s45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.pb_1 = 1;
            continue $sm;
          case 3:
            this.pb_1 = 4;
            continue $sm;
          case 4:
            if (!this.o45_1.h42_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance();
              tmp_0.t45_1 = until(0, 64).u();
              this.pb_1 = 5;
              continue $sm;
            } else {
              this.pb_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.t45_1.v()) {
              this.pb_1 = 8;
              continue $sm;
            }

            this.u45_1 = this.t45_1.x();
            if (!this.o45_1.h42_1.db((new Long(1, 0)).ab(this.u45_1)).equals(new Long(0, 0))) {
              this.pb_1 = 6;
              suspendResult = this.p45_1.he(this.u45_1 + this.o45_1.i42_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pb_1 = 7;
              continue $sm;
            }

          case 6:
            this.pb_1 = 7;
            continue $sm;
          case 7:
            this.pb_1 = 5;
            continue $sm;
          case 8:
            this.pb_1 = 9;
            continue $sm;
          case 9:
            if (!this.o45_1.g42_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance();
              tmp_1.v45_1 = until(0, 64).u();
              this.pb_1 = 10;
              continue $sm;
            } else {
              this.pb_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.v45_1.v()) {
              this.pb_1 = 13;
              continue $sm;
            }

            this.w45_1 = this.v45_1.x();
            if (!this.o45_1.g42_1.db((new Long(1, 0)).ab(this.w45_1)).equals(new Long(0, 0))) {
              this.pb_1 = 11;
              Companion_getInstance();
              suspendResult = this.p45_1.he((this.w45_1 + 64 | 0) + this.o45_1.i42_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pb_1 = 12;
              continue $sm;
            }

          case 11:
            this.pb_1 = 12;
            continue $sm;
          case 12:
            this.pb_1 = 10;
            continue $sm;
          case 13:
            this.pb_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.sb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.qb_1 === 15) {
          throw e;
        } else {
          this.pb_1 = this.qb_1;
          this.sb_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).y45 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.o45_1, completion);
    i.p45_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.x45($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_11();
    this.g42_1 = upperSet;
    this.h42_1 = lowerSet;
    this.i42_1 = lowerBound;
    this.j42_1 = belowBound;
  }
  protoOf(SnapshotIdSet).g1 = function (bit) {
    var offset = bit - this.i42_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).ab(offset).db(this.h42_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        return !tmp_1.ab(offset - 64 | 0).db(this.g42_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.j42_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).a44 = function (bit) {
    var offset = bit - this.i42_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).ab(offset);
      if (this.h42_1.db(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.g42_1, this.h42_1.eb(mask), this.i42_1, this.j42_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.ab(offset - 64 | 0);
        if (this.g42_1.db(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.g42_1.eb(mask_0), this.h42_1, this.i42_1, this.j42_1);
        }
      } else {
        Companion_getInstance();
        if (offset >= imul(64, 2)) {
          if (!this.g1(bit)) {
            var newUpperSet = this.g42_1;
            var newLowerSet = this.h42_1;
            var newLowerBound = this.i42_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.j42_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      this_0.r(element);
                    }
                  }
                  newBelowBound = this_0;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.db((new Long(1, 0)).ab(index)).equals(new Long(0, 0))) {
                      newBelowBound.r(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.j42_1 : tmp1_elvis_lhs)).a44(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.j42_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.intArrayOf' call
            var tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.g42_1, this.h42_1, this.i42_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var destinationOffset = insertLocation + 1 | 0;
            var endIndex = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, destinationOffset, insertLocation, endIndex);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.g42_1, this.h42_1, this.i42_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).k42 = function (bit) {
    var offset = bit - this.i42_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).ab(offset);
      if (!this.h42_1.db(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.g42_1, this.h42_1.db(mask.za()), this.i42_1, this.j42_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.ab(offset - 64 | 0);
        if (!this.g42_1.db(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.g42_1.db(mask_0.za()), this.h42_1, this.i42_1, this.j42_1);
        }
      } else {
        if (offset < 0) {
          var array = this.j42_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.g42_1, this.h42_1, this.i42_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var startIndex = location + 1 | 0;
                var endIndex = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, startIndex, endIndex);
              }
              return new SnapshotIdSet(this.g42_1, this.h42_1, this.i42_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).b44 = function (bits) {
    if (bits === Companion_getInstance_11().z43_1)
      return this;
    if (this === Companion_getInstance_11().z43_1)
      return Companion_getInstance_11().z43_1;
    var tmp;
    if (bits.i42_1 === this.i42_1 ? bits.j42_1 === this.j42_1 : false) {
      tmp = new SnapshotIdSet(this.g42_1.db(bits.g42_1.za()), this.h42_1.db(bits.h42_1.za()), this.i42_1, this.j42_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.k42(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).c44 = function (bits) {
    if (bits === Companion_getInstance_11().z43_1)
      return this;
    if (this === Companion_getInstance_11().z43_1)
      return bits;
    var tmp;
    if (bits.i42_1 === this.i42_1 ? bits.j42_1 === this.j42_1 : false) {
      tmp = new SnapshotIdSet(this.g42_1.eb(bits.g42_1), this.h42_1.eb(bits.h42_1), this.i42_1, this.j42_1);
    } else {
      var tmp_0;
      if (this.j42_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.u();
        while (tmp0_iterator.v()) {
          var element = tmp0_iterator.x();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.a44(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.u();
        while (tmp0_iterator_0.v()) {
          var element_0 = tmp0_iterator_0.x();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.a44(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).u = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).u();
  };
  protoOf(SnapshotIdSet).n43 = function (default_0) {
    var belowBound = this.j42_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.h42_1.equals(new Long(0, 0)))
      return this.i42_1 + lowestBitOf(this.h42_1) | 0;
    if (!this.g42_1.equals(new Long(0, 0))) {
      Companion_getInstance();
      return (this.i42_1 + 64 | 0) + lowestBitOf(this.g42_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.u();
    while (tmp0_iterator.v()) {
      var item = tmp0_iterator.x();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.r(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.db(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.bb(32);
    }
    if (b.db(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.bb(16);
    }
    if (b.db(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.bb(8);
    }
    if (b.db(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.bb(4);
    }
    if (!b.db(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.db(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.db(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.db(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  var sync;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync = createSynchronizedObject();
    }
  }
  function find_4($this, value, hash) {
    var low = 0;
    var high = $this.b45_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.c45_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.d45_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.br();
        if (value === midVal)
          return mid;
        return findExactIndex_3($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_3($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.c45_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.d45_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.br();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.b45_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.c45_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.d45_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.br();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.b45_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.b45_1 = 0;
    this.c45_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.d45_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).c3l = function (value) {
    var index;
    var size = this.b45_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_4(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.d45_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.d45_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.d45_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.c45_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.c45_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.d45_1 = newValues;
      this.c45_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.d45_1;
      var destination = this.d45_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.c45_1;
      var destination_0 = this.c45_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.d45_1[insertIndex] = new WeakReference(value);
    this.c45_1[insertIndex] = hash;
    this.b45_1 = this.b45_1 + 1 | 0;
    return true;
  };
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.z3m_1 = value;
    this.a3n_1 = 8;
  }
  protoOf(AtomicReference).br = function () {
    return this.z3m_1;
  };
  protoOf(AtomicReference).v3n = function (value) {
    this.z3m_1 = value;
  };
  protoOf(AtomicReference).b3n = function (value) {
    var oldValue = this.z3m_1;
    this.z3m_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).i3o = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.z3m_1)) {
      this.z3m_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function AtomicInt(value) {
    this.j44_1 = value;
  }
  protoOf(AtomicInt).t43 = function (amount) {
    this.j44_1 = this.j44_1 + amount | 0;
    return this.j44_1;
  };
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.t6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h46_1 = _this__u8e3s4;
    this.i46_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.i46_1, safe));
            suspendResult = returnIfSuspended(safe.u6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).i39 = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).c3j = function (name) {
    return null;
  };
  protoOf(Trace).t3j = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return composable(composer, 1);
  }
  function invokeComposable$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function trackWrite($this) {
    if ($this.s40_1) {
      var scope = $this.u40_1;
      if (!(scope == null)) {
        scope.v3o();
        $this.u40_1 = null;
      }
      var scopes = $this.v40_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.n();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.g1(index);
            item.v3o();
          }
           while (inductionVariable < last);
        scopes.z();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.s40_1) {
      var scope = composer.w3a();
      if (!(scope == null)) {
        composer.n3b(scope);
        var lastScope = $this.u40_1;
        if (replacableWith(lastScope, scope)) {
          $this.u40_1 = scope;
        } else {
          var lastScopes = $this.v40_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.v40_1 = newScopes;
            newScopes.r(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.n();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.g1(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.o(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.r(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.t3k(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.j46($p1, nc, $changed | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.r40_1 = key;
    this.s40_1 = tracked;
    this.t40_1 = null;
    this.u40_1 = null;
    this.v40_1 = null;
  }
  protoOf(ComposableLambdaImpl).w40 = function (block) {
    if (!equals(this.t40_1, block)) {
      var oldBlockNull = this.t40_1 == null;
      this.t40_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).t3k = function (c, changed) {
    var c_0 = c.z3a(this.r40_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.k3b(this) ? differentBits(0) : sameBits(0));
    var tmp = this.t40_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).j46 = function (p1, c, changed) {
    var c_0 = c.z3a(this.r40_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.k3b(this) ? differentBits(1) : sameBits(1));
    var tmp = this.t40_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.a3b();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r3p(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.p3f_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).g1 = function (key) {
    return this.p3f_1.x2(key);
  };
  protoOf(IntMap).h3i = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.p3f_1.n2(key, value);
  };
  protoOf(IntMap).z = function () {
    this.p3f_1.z();
  };
  function WeakReference(reference) {
    this.e45_1 = reference;
  }
  protoOf(WeakReference).br = function () {
    return this.e45_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).g38 = onBeginChanges;
  protoOf(OffsetApplier).h38 = onEndChanges;
  protoOf(AbstractApplier).g38 = onBeginChanges;
  protoOf(AbstractApplier).h38 = onEndChanges;
  protoOf(BroadcastFrameClock).p2 = get_key;
  protoOf(BroadcastFrameClock).wb = get;
  protoOf(BroadcastFrameClock).ye = fold;
  protoOf(BroadcastFrameClock).xe = minusKey;
  protoOf(BroadcastFrameClock).ze = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.w6();
  });
  protoOf(StructuralEqualityPolicy).v3v = merge;
  protoOf(MonotonicClockImpl).p2 = get_key;
  protoOf(MonotonicClockImpl).wb = get;
  protoOf(MonotonicClockImpl).ye = fold;
  protoOf(MonotonicClockImpl).xe = minusKey;
  protoOf(MonotonicClockImpl).ze = plus;
  //endregion
  //region block: init
  Key_instance_0 = new Key();
  movableContentKey = 126665345;
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  EndOfChain_instance = new EndOfChain();
  Companion_instance_9 = new Companion_8();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = AbstractApplier;
  _.$_$.d = CompositionLocalProvider$composable;
  _.$_$.e = CompositionScopedCoroutineScopeCanceller;
  _.$_$.f = ControlledComposition;
  _.$_$.g = get_DefaultMonotonicFrameClock;
  _.$_$.h = DisposableEffect$composable;
  _.$_$.i = DisposableEffect$composable_0;
  _.$_$.j = LaunchedEffect$composable;
  _.$_$.k = Recomposer;
  _.$_$.l = compositionLocalOf;
  _.$_$.m = createCompositionCoroutineScope;
  _.$_$.n = invalidApplier;
  _.$_$.o = isTraceInProgress;
  _.$_$.p = mutableStateOf;
  _.$_$.q = sourceInformation;
  _.$_$.r = traceEventEnd;
  _.$_$.s = traceEventStart;
  _.$_$.t = updateChangedFlags;
  _.$_$.u = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.v = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.w = _Updater___init__impl__rbfxm8;
  _.$_$.x = Updater__set_impl_v7kwss;
  _.$_$.y = Companion_instance_9;
  _.$_$.z = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime.js.map
