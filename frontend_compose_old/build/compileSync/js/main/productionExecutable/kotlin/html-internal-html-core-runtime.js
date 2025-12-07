(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    root['html-internal-html-core-runtime'] = factory(typeof this['html-internal-html-core-runtime'] === 'undefined' ? {} : this['html-internal-html-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.gb;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var classMeta = kotlin_kotlin.$_$.x9;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var VOID = kotlin_kotlin.$_$.g;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Companion_instance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var isInterface = kotlin_kotlin.$_$.ta;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DomNodeWrapper, 'DomNodeWrapper', classMeta);
  setMetadataFor(DomApplier, 'DomApplier', classMeta, AbstractApplier);
  setMetadataFor(GlobalSnapshotManager$schedule$slambda, 'GlobalSnapshotManager$schedule$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(GlobalSnapshotManager, 'GlobalSnapshotManager', objectMeta);
  setMetadataFor(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', classMeta, CoroutineDispatcher, VOID, JsMicrotasksDispatcher);
  setMetadataFor(renderComposable$composable$slambda, 'renderComposable$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(renderComposable$composable$scope$1, VOID, classMeta);
  //endregion
  function DomNodeWrapper(node) {
    this.k46_1 = node;
    this.l46_1 = 0;
  }
  protoOf(DomNodeWrapper).m46 = function () {
    return this.k46_1;
  };
  protoOf(DomNodeWrapper).n46 = function (index, nodeWrapper) {
    var length = this.m46().childNodes.length;
    if (index < length) {
      var tmp = this.m46();
      var tmp_0 = nodeWrapper.m46();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.m46().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.m46().appendChild(nodeWrapper.m46());
    }
  };
  protoOf(DomNodeWrapper).m38 = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.m46();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.m46().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).n38 = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.m46();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.m46().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.m46();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.m46().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.s46_1 = 0;
  }
  protoOf(DomApplier).t46 = function (index, instance) {
  };
  protoOf(DomApplier).k38 = function (index, instance) {
    return this.t46(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).u46 = function (index, instance) {
    this.f38().n46(index, instance);
  };
  protoOf(DomApplier).l38 = function (index, instance) {
    return this.u46(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).m38 = function (index, count) {
    this.f38().m38(index, count);
  };
  protoOf(DomApplier).n38 = function (from, to, count) {
    this.f38().n38(from, to, count);
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.a47_1.u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.a47_1.z();
    $this.b47_1 = false;
  }
  function schedule($this, block) {
    $this.a47_1.r(block);
    if (!$this.b47_1) {
      $this.b47_1 = true;
      launch($this.y46_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().w46_1) {
      GlobalSnapshotManager_getInstance().w46_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().w46_1 = false;
    Companion_instance.w3r();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).c1g = function ($this$launch, $completion) {
    var tmp = this.d1g($this$launch, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        if (tmp === 0) {
          this.qb_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
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
  protoOf(GlobalSnapshotManager$schedule$slambda).d1g = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.l47_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.c1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.v46_1 = false;
    this.w46_1 = false;
    this.x46_1 = null;
    this.y46_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).ze(SupervisorJob()));
    var tmp = this;
    tmp.z46_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.a47_1 = ArrayList_init_$Create$();
    this.b47_1 = false;
    this.c47_1 = 8;
  }
  protoOf(GlobalSnapshotManager).m47 = function () {
    if (!this.v46_1) {
      this.v46_1 = true;
      this.x46_1 = Companion_instance.r41(this.z46_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.ip();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.o47_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).hq = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable$composable(rootElementId, content) {
    return renderComposable$composable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable$composable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().m47();
    var context = monotonicFrameClock.ze(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$composable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$composable$scope$1(root);
    composition.c3p(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$composable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$composable$slambda($recomposer, resultContinuation) {
    this.x47_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$composable$slambda).c1g = function ($this$launch, $completion) {
    var tmp = this.d1g($this$launch, $completion);
    tmp.rb_1 = Unit_instance;
    tmp.sb_1 = null;
    return tmp.bc();
  };
  protoOf(renderComposable$composable$slambda).nc = function (p1, $completion) {
    return this.c1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$composable$slambda).bc = function () {
    var suspendResult = this.rb_1;
    $sm: do
      try {
        var tmp = this.pb_1;
        switch (tmp) {
          case 0:
            this.qb_1 = 2;
            this.pb_1 = 1;
            suspendResult = this.x47_1.y3u(this);
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
  protoOf(renderComposable$composable$slambda).d1g = function ($this$launch, completion) {
    var i = new renderComposable$composable$slambda(this.x47_1, completion);
    i.y47_1 = $this$launch;
    return i;
  };
  function renderComposable$composable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$composable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.c1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$composable$scope$1($root) {
    this.z47_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.t3k(p0, p1);
    };
  }
  function renderComposable$composable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable$composable.<anonymous> (renderComposable.kt:59)');
        }
        $content($scope, $composer_0, 0);
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
