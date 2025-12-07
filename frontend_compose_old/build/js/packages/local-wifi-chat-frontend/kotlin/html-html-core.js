(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-internal-html-core-runtime.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib'], this['html-internal-html-core-runtime'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.rc;
  var THROW_CCE = kotlin_kotlin.$_$.og;
  var Annotation = kotlin_kotlin.$_$.wf;
  var classMeta = kotlin_kotlin.$_$.ib;
  var setMetadataFor = kotlin_kotlin.$_$.sc;
  var VOID = kotlin_kotlin.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.t5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var addAll = kotlin_kotlin.$_$.v6;
  var to = kotlin_kotlin.$_$.bi;
  var Pair = kotlin_kotlin.$_$.lg;
  var objectMeta = kotlin_kotlin.$_$.qc;
  var asList = kotlin_kotlin.$_$.y6;
  var interfaceMeta = kotlin_kotlin.$_$.vb;
  var toString = kotlin_kotlin.$_$.wc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var THROW_IAE = kotlin_kotlin.$_$.pg;
  var Enum = kotlin_kotlin.$_$.eg;
  var NamedEventListener = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.d;
  var equals = kotlin_kotlin.$_$.lb;
  var charSequenceLength = kotlin_kotlin.$_$.gb;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.a1;
  var ensureNotNull = kotlin_kotlin.$_$.ih;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var toString_0 = kotlin_kotlin.$_$.ai;
  var toBoolean = kotlin_kotlin.$_$.ef;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.sb;
  var hashCode = kotlin_kotlin.$_$.tb;
  var joinToString = kotlin_kotlin.$_$.h8;
  var numberToDouble = kotlin_kotlin.$_$.mc;
  var getNumberHashCode = kotlin_kotlin.$_$.qb;
  var defineProp = kotlin_kotlin.$_$.kb;
  var objectCreate = kotlin_kotlin.$_$.pc;
  var isInterface = kotlin_kotlin.$_$.ec;
  var Collection = kotlin_kotlin.$_$.b6;
  var toMutableList = kotlin_kotlin.$_$.t9;
  var toList = kotlin_kotlin.$_$.q9;
  var getBooleanHashCode = kotlin_kotlin.$_$.ob;
  var listOf = kotlin_kotlin.$_$.q8;
  var listOf_0 = kotlin_kotlin.$_$.p8;
  var joinToString_0 = kotlin_kotlin.$_$.i8;
  var contains = kotlin_kotlin.$_$.xd;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var emptyList = kotlin_kotlin.$_$.r7;
  var copyToArray = kotlin_kotlin.$_$.o7;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xh;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var DOMScope = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var lazy = kotlin_kotlin.$_$.oh;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var KProperty1 = kotlin_kotlin.$_$.ld;
  var getPropertyCallableRef = kotlin_kotlin.$_$.rb;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var mapOf = kotlin_kotlin.$_$.s8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalComposeWebApi, 'ExperimentalComposeWebApi', classMeta, VOID, [Annotation]);
  function onContextMenu(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('contextmenu', listener));
  }
  function onClick(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('click', listener));
  }
  function onDoubleClick(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('dblclick', listener));
  }
  function onMouseDown(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mousedown', listener));
  }
  function onMouseUp(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseup', listener));
  }
  function onMouseEnter(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseenter', listener));
  }
  function onMouseLeave(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseleave', listener));
  }
  function onMouseMove(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mousemove', listener));
  }
  function onMouseOut(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseout', listener));
  }
  function onMouseOver(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseover', listener));
  }
  function onWheel(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseWheelEventListener('wheel', listener));
  }
  function onDrag(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('drag', listener));
  }
  function onDrop(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('drop', listener));
  }
  function onDragStart(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragstart', listener));
  }
  function onDragEnd(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragend', listener));
  }
  function onDragOver(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragover', listener));
  }
  function onDragEnter(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragenter', listener));
  }
  function onDragLeave(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragleave', listener));
  }
  function onCopy(listener) {
    this.registerEventListener_oiyxlj_k$(new ClipboardEventListener('copy', listener));
  }
  function onCut(listener) {
    this.registerEventListener_oiyxlj_k$(new ClipboardEventListener('cut', listener));
  }
  function onPaste(listener) {
    this.registerEventListener_oiyxlj_k$(new ClipboardEventListener('paste', listener));
  }
  function onKeyDown(listener) {
    this.registerEventListener_oiyxlj_k$(new KeyboardEventListener('keydown', listener));
  }
  function onKeyUp(listener) {
    this.registerEventListener_oiyxlj_k$(new KeyboardEventListener('keyup', listener));
  }
  function onFocus(listener) {
    this.registerEventListener_oiyxlj_k$(new FocusEventListener('focus', listener));
  }
  function onBlur(listener) {
    this.registerEventListener_oiyxlj_k$(new FocusEventListener('blur', listener));
  }
  function onFocusIn(listener) {
    this.registerEventListener_oiyxlj_k$(new FocusEventListener('focusin', listener));
  }
  function onFocusOut(listener) {
    this.registerEventListener_oiyxlj_k$(new FocusEventListener('focusout', listener));
  }
  function onTouchCancel(listener) {
    this.registerEventListener_oiyxlj_k$(new TouchEventListener('touchcancel', listener));
  }
  function onTouchMove(listener) {
    this.registerEventListener_oiyxlj_k$(new TouchEventListener('touchmove', listener));
  }
  function onTouchEnd(listener) {
    this.registerEventListener_oiyxlj_k$(new TouchEventListener('touchend', listener));
  }
  function onTouchStart(listener) {
    this.registerEventListener_oiyxlj_k$(new TouchEventListener('touchstart', listener));
  }
  function onAnimationEnd(listener) {
    this.registerEventListener_oiyxlj_k$(new AnimationEventListener('animationend', listener));
  }
  function onAnimationIteration(listener) {
    this.registerEventListener_oiyxlj_k$(new AnimationEventListener('animationiteration', listener));
  }
  function onAnimationStart(listener) {
    this.registerEventListener_oiyxlj_k$(new AnimationEventListener('animationstart', listener));
  }
  function onScroll(listener) {
    this.registerEventListener_oiyxlj_k$(new SyntheticEventListener('scroll', listener));
  }
  function addEventListener(eventName, listener) {
    this.registerEventListener_oiyxlj_k$(new SyntheticEventListener(eventName, listener));
  }
  function addEventListener_0(eventName, listener) {
    this.registerEventListener_oiyxlj_k$(new SyntheticEventListener(eventName, listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  function classes(classes) {
    return this.classes_ephr7k_k$(asList(classes));
  }
  function id(value) {
    return this.attr_w68641_k$('id', value);
  }
  function hidden() {
    return this.attr_w68641_k$('hidden', 'true');
  }
  function title(value) {
    return this.attr_w68641_k$('title', value);
  }
  function dir(value) {
    return this.attr_w68641_k$('dir', value.get_dirStr_cdza7h_k$());
  }
  function draggable(value) {
    return this.attr_w68641_k$('draggable', value.get_str_18ivy0_k$());
  }
  function contentEditable(value) {
    return this.attr_w68641_k$('contenteditable', value.toString());
  }
  function lang(value) {
    return this.attr_w68641_k$('lang', value);
  }
  function tabIndex(value) {
    return this.attr_w68641_k$('tabindex', value.toString());
  }
  function spellCheck(value) {
    return this.attr_w68641_k$('spellcheck', value.toString());
  }
  function inputMode(value) {
    return this.attr_w68641_k$('inputmode', value);
  }
  function inputMode_0(value) {
    return this.attr_w68641_k$('inputmode', value.get_str_18ivy0_k$());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, VOID, [EventsListenerScope]);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope, EventsListenerScope], AttrsScopeBuilder);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope], EventsListenerScopeBuilder);
  setMetadataFor(HtmlAttrMarker, 'HtmlAttrMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(InputType, 'InputType', classMeta);
  setMetadataFor(InputTypeWithUnitValue, 'InputTypeWithUnitValue', classMeta, InputType);
  setMetadataFor(Button, 'Button', objectMeta, InputTypeWithUnitValue);
  setMetadataFor(InputTypeCheckedValue, 'InputTypeCheckedValue', classMeta, InputType);
  setMetadataFor(Checkbox, 'Checkbox', objectMeta, InputTypeCheckedValue);
  setMetadataFor(InputTypeWithStringValue, 'InputTypeWithStringValue', classMeta, InputType);
  setMetadataFor(Color, 'Color', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Date_0, 'Date', objectMeta, InputTypeWithStringValue);
  setMetadataFor(DateTimeLocal, 'DateTimeLocal', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Email, 'Email', objectMeta, InputTypeWithStringValue);
  setMetadataFor(File, 'File', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Hidden, 'Hidden', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Month, 'Month', objectMeta, InputTypeWithStringValue);
  setMetadataFor(InputTypeNumberValue, 'InputTypeNumberValue', classMeta, InputType);
  setMetadataFor(Number_0, 'Number', objectMeta, InputTypeNumberValue);
  setMetadataFor(Password, 'Password', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Radio, 'Radio', objectMeta, InputTypeCheckedValue);
  setMetadataFor(Range, 'Range', objectMeta, InputTypeNumberValue);
  setMetadataFor(Search, 'Search', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Submit, 'Submit', objectMeta, InputTypeWithUnitValue);
  setMetadataFor(Tel, 'Tel', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Text_0, 'Text', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Time, 'Time', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Url, 'Url', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Week, 'Week', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DirType, 'DirType', classMeta);
  setMetadataFor(Ltr, 'Ltr', objectMeta, DirType);
  setMetadataFor(Rtl, 'Rtl', objectMeta, DirType);
  setMetadataFor(Auto, 'Auto', objectMeta, DirType);
  setMetadataFor(Draggable, 'Draggable', classMeta, Enum);
  setMetadataFor(InputMode, 'InputMode', classMeta, Enum);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta, VOID, [NamedEventListener]);
  setMetadataFor(InputEventListener, 'InputEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(ChangeEventListener, 'ChangeEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(SelectEventListener, 'SelectEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(MouseWheelEventListener, 'MouseWheelEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(DragEventListener, 'DragEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(ClipboardEventListener, 'ClipboardEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(KeyboardEventListener, 'KeyboardEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(FocusEventListener, 'FocusEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(TouchEventListener, 'TouchEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(AnimationEventListener, 'AnimationEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(InputAttrsScope, 'InputAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(TextAreaAttrsScope, 'TextAreaAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(StylePropertyEnum, 'StylePropertyEnum', interfaceMeta);
  setMetadataFor(DisplayStyle, 'DisplayStyle', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(AlignItems, 'AlignItems', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Position, 'Position', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(FlexDirection, 'FlexDirection', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(JustifyContent, 'JustifyContent', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(CSSRuleDeclaration, 'CSSRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSNamedKeyframes, 'CSSNamedKeyframes', interfaceMeta);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta, VOID, [CSSRuleDeclaration, CSSNamedKeyframes]);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSRuleDeclaration, CSSStyledRuleDeclaration]);
  setMetadataFor(CSSKeyframe, 'CSSKeyframe', classMeta);
  setMetadataFor(From, 'From', objectMeta, CSSKeyframe);
  setMetadataFor(To, 'To', objectMeta, CSSKeyframe);
  setMetadataFor(Percentage, 'Percentage', classMeta, CSSKeyframe);
  setMetadataFor(Combine, 'Combine', classMeta, CSSKeyframe);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta, VOID, [CSSRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.property_npxg1h_k$(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.property_npxg1h_k$(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.variable_px6kuc_k$(variableName, value);
  }
  function variable_0(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.variable_px6kuc_k$(variableName, value);
  }
  function invoke(_this__u8e3s4, value) {
    this.variable_kvosx8_k$(_this__u8e3s4.name_1, toString(value));
  }
  function invoke_0(_this__u8e3s4, value) {
    this.variable_kvosx8_k$(_this__u8e3s4.name_1, value);
  }
  function invoke_1(_this__u8e3s4, value) {
    this.variable_j4rwe5_k$(_this__u8e3s4.name_1, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(CSSStyleRuleBuilder, 'CSSStyleRuleBuilder', interfaceMeta, VOID, [StyleScope]);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSRuleDeclaration, CSSStyledRuleDeclaration]);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder], StyleScopeBuilder);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [CSSStyleRuleBuilder, StyleScopeBuilder], CSSRuleBuilderImpl);
  setMetadataFor(CSSUnit, 'CSSUnit', interfaceMeta);
  setMetadataFor(CSSUnitLengthOrPercentage, 'CSSUnitLengthOrPercentage', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(CSSUnitPercentage, 'CSSUnitPercentage', interfaceMeta, VOID, [CSSUnitLengthOrPercentage]);
  setMetadataFor(percent, 'percent', interfaceMeta, VOID, [CSSUnitPercentage]);
  setMetadataFor(CSSUnitLength, 'CSSUnitLength', interfaceMeta, VOID, [CSSUnitLengthOrPercentage]);
  setMetadataFor(CSSUnitRel, 'CSSUnitRel', interfaceMeta, VOID, [CSSUnitLength]);
  setMetadataFor(em, 'em', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(ex, 'ex', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(ch, 'ch', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(ic, 'ic', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(rem, 'rem', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(lh, 'lh', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(rlh, 'rlh', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vw, 'vw', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vh, 'vh', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vi, 'vi', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vb, 'vb', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vmin, 'vmin', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vmax, 'vmax', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(cm, 'cm', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(mm, 'mm', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(Q, 'Q', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(CSSUnitAbs, 'CSSUnitAbs', interfaceMeta, VOID, [CSSUnitLength]);
  setMetadataFor(pt, 'pt', interfaceMeta, VOID, [CSSUnitAbs]);
  setMetadataFor(pc, 'pc', interfaceMeta, VOID, [CSSUnitAbs]);
  setMetadataFor(px, 'px', interfaceMeta, VOID, [CSSUnitAbs]);
  setMetadataFor(CSSUnitAngle, 'CSSUnitAngle', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(deg, 'deg', interfaceMeta, VOID, [CSSUnitAngle]);
  setMetadataFor(grad, 'grad', interfaceMeta, VOID, [CSSUnitAngle]);
  setMetadataFor(rad, 'rad', interfaceMeta, VOID, [CSSUnitAngle]);
  setMetadataFor(turn, 'turn', interfaceMeta, VOID, [CSSUnitAngle]);
  setMetadataFor(CSSUnitTime, 'CSSUnitTime', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(s, 's', interfaceMeta, VOID, [CSSUnitTime]);
  setMetadataFor(ms, 'ms', interfaceMeta, VOID, [CSSUnitTime]);
  setMetadataFor(CSSUnitFrequency, 'CSSUnitFrequency', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(Hz, 'Hz', interfaceMeta, VOID, [CSSUnitFrequency]);
  setMetadataFor(kHz, 'kHz', interfaceMeta, VOID, [CSSUnitFrequency]);
  setMetadataFor(CSSUnitResolution, 'CSSUnitResolution', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(dpi, 'dpi', interfaceMeta, VOID, [CSSUnitResolution]);
  setMetadataFor(dpcm, 'dpcm', interfaceMeta, VOID, [CSSUnitResolution]);
  setMetadataFor(dppx, 'dppx', interfaceMeta, VOID, [CSSUnitResolution]);
  setMetadataFor(CSSUnitFlex, 'CSSUnitFlex', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(fr, 'fr', interfaceMeta, VOID, [CSSUnitFlex]);
  setMetadataFor(number, 'number', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(RGB, 'RGB', classMeta);
  setMetadataFor(RGBA, 'RGBA', classMeta);
  setMetadataFor(HSL, 'HSL', classMeta);
  setMetadataFor(HSLA, 'HSLA', classMeta);
  setMetadataFor(Color_0, 'Color', objectMeta);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(CSSVariable, 'CSSVariable', interfaceMeta);
  setMetadataFor(CSSStyleVariable, 'CSSStyleVariable', classMeta, VOID, [CSSVariable]);
  function add(selector, style) {
    this.add_19esmm_k$(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function selector(selector) {
    return new RawSelector(selector);
  }
  function combine(selectors) {
    return new Combine_0(toMutableList(selectors));
  }
  function plus(_this__u8e3s4, selector) {
    var tmp;
    if (_this__u8e3s4 instanceof Combine_0) {
      _this__u8e3s4.selectors_1.add_utx5q5_k$(selector);
      tmp = _this__u8e3s4;
    } else {
      if (selector instanceof Combine_0) {
        selector.selectors_1.add_dl6gt3_k$(0, _this__u8e3s4);
        tmp = selector;
      } else {
        tmp = this.combine_s8rvtq_k$([_this__u8e3s4, selector]);
      }
    }
    return tmp;
  }
  function plus_0(_this__u8e3s4, selector) {
    var tmp;
    if (_this__u8e3s4 instanceof Combine_0) {
      _this__u8e3s4.selectors_1.add_utx5q5_k$(this.selector_430xff_k$(selector));
      tmp = _this__u8e3s4;
    } else {
      tmp = this.combine_s8rvtq_k$([_this__u8e3s4, this.selector_430xff_k$(selector)]);
    }
    return tmp;
  }
  function returnUniversalSelector() {
    return get_Universal();
  }
  function get_universal() {
    return get_Universal();
  }
  function type(type) {
    return new RawSelector(type);
  }
  function className(className) {
    return new RawSelector('.' + className);
  }
  function id_0(id) {
    return new RawSelector('#' + id);
  }
  function attr(name, value, operator, caseSensitive) {
    return new Attribute(name, value, operator, caseSensitive);
  }
  function attr$default(name, value, operator, caseSensitive, $super) {
    value = value === VOID ? null : value;
    operator = operator === VOID ? Operator_Equals_getInstance() : operator;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attr_1eatx7_k$(name, value, operator, caseSensitive) : attr(name, value, operator, caseSensitive);
  }
  function attrEquals(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Equals_getInstance(), caseSensitive);
  }
  function attrEquals$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrEquals_vwtgpq_k$(name, value, caseSensitive) : attrEquals(name, value, caseSensitive);
  }
  function attrListContains(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_ListContains_getInstance(), caseSensitive);
  }
  function attrListContains$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrListContains_rjrrsw_k$(name, value, caseSensitive) : attrListContains(name, value, caseSensitive);
  }
  function attrHyphened(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Hyphened_getInstance(), caseSensitive);
  }
  function attrHyphened$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrHyphened_2fosj8_k$(name, value, caseSensitive) : attrHyphened(name, value, caseSensitive);
  }
  function attrPrefixed(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Prefixed_getInstance(), caseSensitive);
  }
  function attrPrefixed$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrPrefixed_7hjetw_k$(name, value, caseSensitive) : attrPrefixed(name, value, caseSensitive);
  }
  function attrSuffixed(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Suffixed_getInstance(), caseSensitive);
  }
  function attrSuffixed$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrSuffixed_6vqc43_k$(name, value, caseSensitive) : attrSuffixed(name, value, caseSensitive);
  }
  function attrContains(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Contains_getInstance(), caseSensitive);
  }
  function attrContains$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrContains_fr4p8e_k$(name, value, caseSensitive) : attrContains(name, value, caseSensitive);
  }
  function group(selectors) {
    return new Group(toList(selectors));
  }
  function descendant(parent, selected) {
    return this.desc_lky2kv_k$(parent, selected);
  }
  function desc(parent, selected) {
    return new Descendant(parent, selected);
  }
  function desc_0(parent, selected) {
    return this.desc_lky2kv_k$(parent, this.selector_430xff_k$(selected));
  }
  function desc_1(parent, selected) {
    return this.desc_lky2kv_k$(this.selector_430xff_k$(parent), selected);
  }
  function desc_2(parent, selected) {
    return this.desc_lky2kv_k$(this.selector_430xff_k$(parent), this.selector_430xff_k$(selected));
  }
  function child(parent, selected) {
    return new Child(parent, selected);
  }
  function sibling(sibling, selected) {
    return new Sibling(sibling, selected);
  }
  function adjacent(sibling, selected) {
    return new Adjacent(sibling, selected);
  }
  function returnHoverSelector() {
    return this.get_hover_islez7_k$();
  }
  function hover(selector) {
    return this.plus_33ujzs_k$(selector, this.get_hover_islez7_k$());
  }
  function get_anyLink() {
    return new PseudoClassInternal('any-link');
  }
  function get_link() {
    return new PseudoClassInternal('link');
  }
  function get_visited() {
    return new PseudoClassInternal('visited');
  }
  function get_localLink() {
    return new PseudoClassInternal('local-link');
  }
  function get_target() {
    return new PseudoClassInternal('target');
  }
  function get_targetWithin() {
    return new PseudoClassInternal('target-within');
  }
  function get_scope() {
    return new PseudoClassInternal('scope');
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  function get_active() {
    return new PseudoClassInternal('active');
  }
  function get_focus() {
    return new PseudoClassInternal('focus');
  }
  function get_focusVisible() {
    return new PseudoClassInternal('focus-visible');
  }
  function get_playing() {
    return new PseudoClassInternal('playing');
  }
  function get_paused() {
    return new PseudoClassInternal('paused');
  }
  function get_autofill() {
    return new PseudoClassInternal('autofill');
  }
  function get_enabled() {
    return new PseudoClassInternal('enabled');
  }
  function get_disabled() {
    return new PseudoClassInternal('disabled');
  }
  function get_readOnly() {
    return new PseudoClassInternal('read-only');
  }
  function get_readWrite() {
    return new PseudoClassInternal('read-write');
  }
  function get_placeholderShown() {
    return new PseudoClassInternal('placeholder-shown');
  }
  function get_default() {
    return new PseudoClassInternal('default');
  }
  function get_checked() {
    return new PseudoClassInternal('checked');
  }
  function get_indeterminate() {
    return new PseudoClassInternal('indeterminate');
  }
  function get_blank() {
    return new PseudoClassInternal('blank');
  }
  function get_valid() {
    return new PseudoClassInternal('valid');
  }
  function get_invalid() {
    return new PseudoClassInternal('invalid');
  }
  function get_inRange() {
    return new PseudoClassInternal('in-range');
  }
  function get_outOfRange() {
    return new PseudoClassInternal('out-of-range');
  }
  function get_required() {
    return new PseudoClassInternal('required');
  }
  function get_optional() {
    return new PseudoClassInternal('optional');
  }
  function get_userInvalid() {
    return new PseudoClassInternal('user-invalid');
  }
  function get_root() {
    return new PseudoClassInternal('root');
  }
  function get_empty() {
    return new PseudoClassInternal('empty');
  }
  function get_first() {
    return new PseudoClassInternal('first');
  }
  function get_firstChild() {
    return new PseudoClassInternal('first-child');
  }
  function get_lastChild() {
    return new PseudoClassInternal('last-child');
  }
  function get_onlyChild() {
    return new PseudoClassInternal('only-child');
  }
  function get_firstOfType() {
    return new PseudoClassInternal('first-of-type');
  }
  function get_lastOfType() {
    return new PseudoClassInternal('last-of-type');
  }
  function get_onlyOfType() {
    return new PseudoClassInternal('only-of-type');
  }
  function get_host() {
    return new PseudoClassInternal('host');
  }
  function get_defined() {
    return new PseudoClassInternal('defined');
  }
  function get_left() {
    return new PseudoClassInternal('left');
  }
  function get_right() {
    return new PseudoClassInternal('right');
  }
  function lang_0(langCode) {
    return new Lang(langCode);
  }
  function nthChild(nth) {
    return new NthChild(nth);
  }
  function nthLastChild(nth) {
    return new NthLastChild(nth);
  }
  function nthOfType(nth) {
    return new NthOfType(nth);
  }
  function nthLastOfType(nth) {
    return new NthLastOfType(nth);
  }
  function host(selector) {
    return new Host(selector);
  }
  function not(selector) {
    return new Not(selector);
  }
  function get_after() {
    return new PseudoElementInternal('after');
  }
  function get_before() {
    return new PseudoElementInternal('before');
  }
  function get_cue() {
    return new PseudoElementInternal('cue');
  }
  function get_cueRegion() {
    return new PseudoElementInternal('cue-region');
  }
  function get_firstLetter() {
    return new PseudoElementInternal('first-letter');
  }
  function get_firstLine() {
    return new PseudoElementInternal('first-line');
  }
  function get_fileSelectorButton() {
    return new PseudoElementInternal('file-selector-button');
  }
  function get_selection() {
    return new PseudoElementInternal('selection');
  }
  function slotted(selector) {
    return new Slotted(selector);
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke_2(_this__u8e3s4, cssRule) {
    this.style_r4zx12_k$(_this__u8e3s4, cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.style_r4zx12_k$(_this__u8e3s4, cssRule);
  }
  function invoke_3(_this__u8e3s4, cssRule) {
    this.style_r4zx12_k$(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style_0(_this__u8e3s4, cssRule) {
    this.style_r4zx12_k$(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_1(selector, cssRule) {
    this.add_h1zelh_k$(selector, buildCSSStyleRule(cssRule));
  }
  function style_2(selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheetBuilderImpl, 'StyleSheetBuilderImpl', classMeta, VOID, [StyleSheetBuilder], StyleSheetBuilderImpl);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(Combine_0, 'Combine', classMeta, CSSSelector);
  setMetadataFor(Attribute, 'Attribute', classMeta, CSSSelector);
  setMetadataFor(Group, 'Group', classMeta, CSSSelector);
  setMetadataFor(Descendant, 'Descendant', classMeta, CSSSelector);
  setMetadataFor(Child, 'Child', classMeta, CSSSelector);
  setMetadataFor(Sibling, 'Sibling', classMeta, CSSSelector);
  setMetadataFor(Adjacent, 'Adjacent', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(Lang, 'Lang', classMeta, PseudoClassInternal);
  setMetadataFor(NthChild, 'NthChild', classMeta, PseudoClassInternal);
  setMetadataFor(NthLastChild, 'NthLastChild', classMeta, PseudoClassInternal);
  setMetadataFor(NthOfType, 'NthOfType', classMeta, PseudoClassInternal);
  setMetadataFor(NthLastOfType, 'NthLastOfType', classMeta, PseudoClassInternal);
  setMetadataFor(Host, 'Host', classMeta, PseudoClassInternal);
  setMetadataFor(Not, 'Not', classMeta, PseudoClassInternal);
  setMetadataFor(PseudoElementInternal, 'PseudoElementInternal', classMeta, CSSSelector);
  setMetadataFor(Slotted, 'Slotted', classMeta, PseudoElementInternal);
  setMetadataFor(Operator, 'Operator', classMeta, Enum);
  setMetadataFor(Attribute_0, 'Attribute', objectMeta);
  setMetadataFor(PseudoClass, 'PseudoClass', objectMeta);
  setMetadataFor(PseudoElement, 'PseudoElement', objectMeta);
  setMetadataFor(Nth, 'Nth', interfaceMeta);
  setMetadataFor(FunctionalImpl, 'FunctionalImpl', classMeta, VOID, [Nth], FunctionalImpl);
  setMetadataFor(OddImpl, 'OddImpl', objectMeta, VOID, [Nth]);
  setMetadataFor(EvenImpl, 'EvenImpl', objectMeta, VOID, [Nth]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(selectorScope$1, VOID, classMeta, VOID, [SelectorsScope]);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  function DisposableRefEffect(effect) {
    illegalDecoyCallException('DisposableRefEffect');
  }
  function DisposableRefEffect$composable(effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-912649705);
    sourceInformation($composer_0, 'C(DisposableRefEffect$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-912649705, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScope.DisposableRefEffect$composable (ElementScope.kt:55)');
    }
    this.DisposableRefEffect$composable_wzn9jc_k$(null, effect, $composer_0, 6 | 112 & $changed << 3 | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  setMetadataFor(ElementScope, 'ElementScope', interfaceMeta, VOID, [DOMScope]);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta, VOID, [ElementScope]);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase, VOID, ElementScopeImpl);
  setMetadataFor(DomEffectScope, 'DomEffectScope', interfaceMeta);
  setMetadataFor(DomDisposableEffectHolder, 'DomDisposableEffectHolder', classMeta, VOID, [RememberObserver, DomEffectScope]);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ElementBuilder, 'ElementBuilder', interfaceMeta);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(RadioGroupScope, 'RadioGroupScope', classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticAnimationEvent, 'SyntheticAnimationEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticChangeEvent, 'SyntheticChangeEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticClipboardEvent, 'SyntheticClipboardEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticFocusEvent, 'SyntheticFocusEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticInputEvent, 'SyntheticInputEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticKeyboardEvent, 'SyntheticKeyboardEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticWheelEvent, 'SyntheticWheelEvent', classMeta, SyntheticMouseEvent);
  setMetadataFor(SyntheticDragEvent, 'SyntheticDragEvent', classMeta, SyntheticMouseEvent);
  setMetadataFor(SyntheticSelectEvent, 'SyntheticSelectEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticTouchEvent, 'SyntheticTouchEvent', classMeta, SyntheticEvent);
  //endregion
  function ExperimentalComposeWebApi() {
  }
  protoOf(ExperimentalComposeWebApi).equals = function (other) {
    if (!(other instanceof ExperimentalComposeWebApi))
      return false;
    other instanceof ExperimentalComposeWebApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalComposeWebApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalComposeWebApi).toString = function () {
    return '@org.jetbrains.compose.web.ExperimentalComposeWebApi()';
  };
  function get_setInputValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setInputValue;
  }
  var setInputValue;
  function get_setTextAreaDefaultValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setTextAreaDefaultValue;
  }
  var setTextAreaDefaultValue;
  function get_setCheckedValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setCheckedValue;
  }
  var setCheckedValue;
  function placeholder(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('placeholder', value);
  }
  function placeholder_0(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('placeholder', value);
  }
  function rows(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('rows', value.toString());
  }
  function type_0(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('type', value.get_typeStr_cucz82_k$());
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_getInstance();
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function get_setClassList() {
    _init_properties_AttrsScope_kt__ek7k4y();
    return setClassList;
  }
  var setClassList;
  function get_$stableprop() {
    return 8;
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.eventsListenerScopeBuilder_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.attributesMap_1 = LinkedHashMap_init_$Create$();
    this.styleScope_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.propertyUpdates_1 = ArrayList_init_$Create$();
    this.refEffect_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.classes_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(AttrsScopeBuilder).get_eventsListenerScopeBuilder_j7bhoj_k$ = function () {
    return this.eventsListenerScopeBuilder_1;
  };
  protoOf(AttrsScopeBuilder).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.eventsListenerScopeBuilder_1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(AttrsScopeBuilder).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.eventsListenerScopeBuilder_1.addEventListener_xhf81m_k$(eventName, listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationEnd_l576ug_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onBlur_yy3d4s_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onClick_q9cds6_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onClick_q9cds6_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onContextMenu_uus4bk_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onCopy_4jq33g_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onCopy_4jq33g_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onCut_wod3pf_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onCut_wod3pf_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDoubleClick_gh82mh_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDrag_xkse65_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDrag_xkse65_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragEnd_4or1o2_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragEnter_9tqs4v_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragLeave_nsncqa_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragOver_tkxwb3_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragStart_ispt2x_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDrop_373vqw_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDrop_373vqw_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocus_ozgn2v_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocusIn_vryg4c_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocusOut_jw1zh_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onKeyDown_2pa1il_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onKeyUp_g6q8ee_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseDown_hebxzb_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseEnter_smfckd_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseLeave_j862le_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseMove_r2z3wo_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseOut_nootgn_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseOver_o893qj_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseUp_at21zm_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onPaste_8ucd2k_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onScroll_ur92mf_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onScroll_ur92mf_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchEnd_ugz1se_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchMove_wm6qxk_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchStart_4yr0c9_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onWheel_59frrx_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onWheel_59frrx_k$(listener);
  };
  protoOf(AttrsScopeBuilder).registerEventListener_oiyxlj_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(AttrsScopeBuilder).get_attributesMap_p5yisk_k$ = function () {
    return this.attributesMap_1;
  };
  protoOf(AttrsScopeBuilder).get_styleScope_i1qedw_k$ = function () {
    return this.styleScope_1;
  };
  protoOf(AttrsScopeBuilder).get_propertyUpdates_qy3v4c_k$ = function () {
    return this.propertyUpdates_1;
  };
  protoOf(AttrsScopeBuilder).set_refEffect_tcbh1b_k$ = function (_set____db54di) {
    this.refEffect_1 = _set____db54di;
  };
  protoOf(AttrsScopeBuilder).get_refEffect_m4bgrp_k$ = function () {
    return this.refEffect_1;
  };
  protoOf(AttrsScopeBuilder).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(AttrsScopeBuilder).classes_ephr7k_k$ = function (classes) {
    this.classes_1.addAll_4lagoh_k$(classes);
  };
  protoOf(AttrsScopeBuilder).classes_ayghm2_k$ = function (classes) {
    addAll(this.classes_1, classes);
  };
  protoOf(AttrsScopeBuilder).style_xwwy6r_k$ = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.styleScope_1);
  };
  protoOf(AttrsScopeBuilder).ref_o4g25g_k$ = function (effect) {
    this.refEffect_1 = effect;
  };
  protoOf(AttrsScopeBuilder).attr_w68641_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.attributesMap_1.put_4fpzoq_k$(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).prop_cha5mt_k$ = function (update, value) {
    var tmp = to(update, value);
    this.propertyUpdates_1.add_utx5q5_k$(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  protoOf(AttrsScopeBuilder).collect_fp9wdm_k$ = function () {
    return this.attributesMap_1;
  };
  protoOf(AttrsScopeBuilder).copyFrom_dol73g_k$ = function (attrsScope) {
    this.refEffect_1 = attrsScope.refEffect_1;
    this.styleScope_1.copyFrom_7yuly6_k$(attrsScope.styleScope_1);
    this.attributesMap_1.putAll_wgg6cj_k$(attrsScope.attributesMap_1);
    this.propertyUpdates_1.addAll_4lagoh_k$(attrsScope.propertyUpdates_1);
    this.eventsListenerScopeBuilder_1.copyListenersFrom_8b6my_k$(attrsScope.eventsListenerScopeBuilder_1);
  };
  function Companion() {
    Companion_instance = this;
    this.CLASS_1 = 'class';
    this.ID_1 = 'id';
    this.HIDDEN_1 = 'hidden';
    this.TITLE_1 = 'title';
    this.DIR_1 = 'dir';
    this.DRAGGABLE_1 = 'draggable';
    this.CONTENT_EDITABLE_1 = 'contenteditable';
    this.LANG_1 = 'lang';
    this.TAB_INDEX_1 = 'tabindex';
    this.SPELLCHECK_1 = 'spellcheck';
  }
  protoOf(Companion).get_CLASS_i7lkq7_k$ = function () {
    return this.CLASS_1;
  };
  protoOf(Companion).get_ID_kntopo_k$ = function () {
    return this.ID_1;
  };
  protoOf(Companion).get_HIDDEN_1dp9hp_k$ = function () {
    return this.HIDDEN_1;
  };
  protoOf(Companion).get_TITLE_igwjrj_k$ = function () {
    return this.TITLE_1;
  };
  protoOf(Companion).get_DIR_18jvuk_k$ = function () {
    return this.DIR_1;
  };
  protoOf(Companion).get_DRAGGABLE_lgsxfg_k$ = function () {
    return this.DRAGGABLE_1;
  };
  protoOf(Companion).get_CONTENT_EDITABLE_pkf1hv_k$ = function () {
    return this.CONTENT_EDITABLE_1;
  };
  protoOf(Companion).get_LANG_wo4kl3_k$ = function () {
    return this.LANG_1;
  };
  protoOf(Companion).get_TAB_INDEX_us6klb_k$ = function () {
    return this.TAB_INDEX_1;
  };
  protoOf(Companion).get_SPELLCHECK_xv0ui1_k$ = function () {
    return this.SPELLCHECK_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AttrsScope() {
  }
  function setClassList$lambda(e, classList) {
    _init_properties_AttrsScope_kt__ek7k4y();
    (function () {
      var $externalVarargReceiverTmp = e.classList;
      return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(classList.slice()));
    }.call(this));
    return Unit_getInstance();
  }
  var properties_initialized_AttrsScope_kt_jxswks;
  function _init_properties_AttrsScope_kt__ek7k4y() {
    if (!properties_initialized_AttrsScope_kt_jxswks) {
      properties_initialized_AttrsScope_kt_jxswks = true;
      setClassList = setClassList$lambda;
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.COPY_1 = 'copy';
    this.CUT_1 = 'cut';
    this.PASTE_1 = 'paste';
    this.CONTEXTMENU_1 = 'contextmenu';
    this.CLICK_1 = 'click';
    this.DBLCLICK_1 = 'dblclick';
    this.FOCUS_1 = 'focus';
    this.BLUR_1 = 'blur';
    this.FOCUSIN_1 = 'focusin';
    this.FOCUSOUT_1 = 'focusout';
    this.KEYDOWN_1 = 'keydown';
    this.KEYUP_1 = 'keyup';
    this.MOUSEDOWN_1 = 'mousedown';
    this.MOUSEUP_1 = 'mouseup';
    this.MOUSEENTER_1 = 'mouseenter';
    this.MOUSELEAVE_1 = 'mouseleave';
    this.MOUSEMOVE_1 = 'mousemove';
    this.MOUSEOUT_1 = 'mouseout';
    this.MOUSEOVER_1 = 'mouseover';
    this.WHEEL_1 = 'wheel';
    this.SCROLL_1 = 'scroll';
    this.SELECT_1 = 'select';
    this.TOUCHCANCEL_1 = 'touchcancel';
    this.TOUCHEND_1 = 'touchend';
    this.TOUCHMOVE_1 = 'touchmove';
    this.TOUCHSTART_1 = 'touchstart';
    this.ANIMATIONCANCEL_1 = 'animationcancel';
    this.ANIMATIONEND_1 = 'animationend';
    this.ANIMATIONITERATION_1 = 'animationiteration';
    this.ANIMATIONSTART_1 = 'animationstart';
    this.BEFOREINPUT_1 = 'beforeinput';
    this.INPUT_1 = 'input';
    this.CHANGE_1 = 'change';
    this.INVALID_1 = 'invalid';
    this.DRAG_1 = 'drag';
    this.DROP_1 = 'drop';
    this.DRAGSTART_1 = 'dragstart';
    this.DRAGEND_1 = 'dragend';
    this.DRAGOVER_1 = 'dragover';
    this.DRAGENTER_1 = 'dragenter';
    this.DRAGLEAVE_1 = 'dragleave';
    this.SUBMIT_1 = 'submit';
    this.RESET_1 = 'reset';
  }
  protoOf(Companion_0).get_COPY_wnz45a_k$ = function () {
    return this.COPY_1;
  };
  protoOf(Companion_0).get_CUT_18jwav_k$ = function () {
    return this.CUT_1;
  };
  protoOf(Companion_0).get_PASTE_iek8y2_k$ = function () {
    return this.PASTE_1;
  };
  protoOf(Companion_0).get_CONTEXTMENU_n7w1rv_k$ = function () {
    return this.CONTEXTMENU_1;
  };
  protoOf(Companion_0).get_CLICK_i7lq9r_k$ = function () {
    return this.CLICK_1;
  };
  protoOf(Companion_0).get_DBLCLICK_lnqjqb_k$ = function () {
    return this.DBLCLICK_1;
  };
  protoOf(Companion_0).get_FOCUS_i9awzz_k$ = function () {
    return this.FOCUS_1;
  };
  protoOf(Companion_0).get_BLUR_wnyf1s_k$ = function () {
    return this.BLUR_1;
  };
  protoOf(Companion_0).get_FOCUSIN_1ple5w_k$ = function () {
    return this.FOCUSIN_1;
  };
  protoOf(Companion_0).get_FOCUSOUT_hzoq81_k$ = function () {
    return this.FOCUSOUT_1;
  };
  protoOf(Companion_0).get_KEYDOWN_c6wzs_k$ = function () {
    return this.KEYDOWN_1;
  };
  protoOf(Companion_0).get_KEYUP_ibvyep_k$ = function () {
    return this.KEYUP_1;
  };
  protoOf(Companion_0).get_MOUSEDOWN_6q4qv6_k$ = function () {
    return this.MOUSEDOWN_1;
  };
  protoOf(Companion_0).get_MOUSEUP_xp42d3_k$ = function () {
    return this.MOUSEUP_1;
  };
  protoOf(Companion_0).get_MOUSEENTER_4ls4bg_k$ = function () {
    return this.MOUSEENTER_1;
  };
  protoOf(Companion_0).get_MOUSELEAVE_4pgjwb_k$ = function () {
    return this.MOUSELEAVE_1;
  };
  protoOf(Companion_0).get_MOUSEMOVE_6pz00j_k$ = function () {
    return this.MOUSEMOVE_1;
  };
  protoOf(Companion_0).get_MOUSEOUT_ku6wmm_k$ = function () {
    return this.MOUSEOUT_1;
  };
  protoOf(Companion_0).get_MOUSEOVER_6pxl8w_k$ = function () {
    return this.MOUSEOVER_1;
  };
  protoOf(Companion_0).get_WHEEL_iiiz9u_k$ = function () {
    return this.WHEEL_1;
  };
  protoOf(Companion_0).get_SCROLL_3qqzfa_k$ = function () {
    return this.SCROLL_1;
  };
  protoOf(Companion_0).get_SELECT_3rqj2d_k$ = function () {
    return this.SELECT_1;
  };
  protoOf(Companion_0).get_TOUCHCANCEL_dnulf4_k$ = function () {
    return this.TOUCHCANCEL_1;
  };
  protoOf(Companion_0).get_TOUCHEND_wewr97_k$ = function () {
    return this.TOUCHEND_1;
  };
  protoOf(Companion_0).get_TOUCHMOVE_aehk55_k$ = function () {
    return this.TOUCHMOVE_1;
  };
  protoOf(Companion_0).get_TOUCHSTART_wrtgr0_k$ = function () {
    return this.TOUCHSTART_1;
  };
  protoOf(Companion_0).get_ANIMATIONCANCEL_s7fx11_k$ = function () {
    return this.ANIMATIONCANCEL_1;
  };
  protoOf(Companion_0).get_ANIMATIONEND_8qz940_k$ = function () {
    return this.ANIMATIONEND_1;
  };
  protoOf(Companion_0).get_ANIMATIONITERATION_txi5cu_k$ = function () {
    return this.ANIMATIONITERATION_1;
  };
  protoOf(Companion_0).get_ANIMATIONSTART_qbysnt_k$ = function () {
    return this.ANIMATIONSTART_1;
  };
  protoOf(Companion_0).get_BEFOREINPUT_vjk3z6_k$ = function () {
    return this.BEFOREINPUT_1;
  };
  protoOf(Companion_0).get_INPUT_iaxxfl_k$ = function () {
    return this.INPUT_1;
  };
  protoOf(Companion_0).get_CHANGE_3rivk7_k$ = function () {
    return this.CHANGE_1;
  };
  protoOf(Companion_0).get_INVALID_pha976_k$ = function () {
    return this.INVALID_1;
  };
  protoOf(Companion_0).get_DRAG_wnzszh_k$ = function () {
    return this.DRAG_1;
  };
  protoOf(Companion_0).get_DROP_wnztbs_k$ = function () {
    return this.DROP_1;
  };
  protoOf(Companion_0).get_DRAGSTART_l9va57_k$ = function () {
    return this.DRAGSTART_1;
  };
  protoOf(Companion_0).get_DRAGEND_q9f4de_k$ = function () {
    return this.DRAGEND_1;
  };
  protoOf(Companion_0).get_DRAGOVER_wrllwv_k$ = function () {
    return this.DRAGOVER_1;
  };
  protoOf(Companion_0).get_DRAGENTER_lhnulh_k$ = function () {
    return this.DRAGENTER_1;
  };
  protoOf(Companion_0).get_DRAGLEAVE_ldzf0m_k$ = function () {
    return this.DRAGLEAVE_1;
  };
  protoOf(Companion_0).get_SUBMIT_40d0rl_k$ = function () {
    return this.SUBMIT_1;
  };
  protoOf(Companion_0).get_RESET_ifqdqe_k$ = function () {
    return this.RESET_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EventsListenerScope() {
  }
  function _get_listeners__760gzy($this) {
    return $this.listeners_1;
  }
  function get_$stableprop_0() {
    return 8;
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.listeners_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).registerEventListener_oiyxlj_k$ = function (listener) {
    this.listeners_1.add_utx5q5_k$(listener);
  };
  protoOf(EventsListenerScopeBuilder).copyListenersFrom_8b6my_k$ = function (from) {
    this.listeners_1.addAll_4lagoh_k$(from.listeners_1);
  };
  protoOf(EventsListenerScopeBuilder).collectListeners_sutf4b_k$ = function () {
    return this.listeners_1;
  };
  function HtmlAttrMarker() {
  }
  protoOf(HtmlAttrMarker).equals = function (other) {
    if (!(other instanceof HtmlAttrMarker))
      return false;
    other instanceof HtmlAttrMarker || THROW_CCE();
    return true;
  };
  protoOf(HtmlAttrMarker).hashCode = function () {
    return 0;
  };
  protoOf(HtmlAttrMarker).toString = function () {
    return '@org.jetbrains.compose.web.attributes.HtmlAttrMarker()';
  };
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
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
  function get_$stableprop_6() {
    return 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function get_$stableprop_21() {
    return 0;
  }
  function get_$stableprop_22() {
    return 0;
  }
  function get_$stableprop_23() {
    return 0;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function Button() {
    Button_instance = this;
    InputTypeWithUnitValue.call(this, 'button');
    this.$stable_3 = 0;
  }
  var Button_instance;
  function Button_getInstance() {
    if (Button_instance == null)
      new Button();
    return Button_instance;
  }
  function Checkbox() {
    Checkbox_instance = this;
    InputTypeCheckedValue.call(this, 'checkbox');
    this.$stable_3 = 0;
  }
  var Checkbox_instance;
  function Checkbox_getInstance() {
    if (Checkbox_instance == null)
      new Checkbox();
    return Checkbox_instance;
  }
  function Color() {
    Color_instance = this;
    InputTypeWithStringValue.call(this, 'color');
    this.$stable_3 = 0;
  }
  var Color_instance;
  function Color_getInstance() {
    if (Color_instance == null)
      new Color();
    return Color_instance;
  }
  function Date_0() {
    Date_instance = this;
    InputTypeWithStringValue.call(this, 'date');
    this.$stable_3 = 0;
  }
  var Date_instance;
  function Date_getInstance() {
    if (Date_instance == null)
      new Date_0();
    return Date_instance;
  }
  function DateTimeLocal() {
    DateTimeLocal_instance = this;
    InputTypeWithStringValue.call(this, 'datetime-local');
    this.$stable_3 = 0;
  }
  var DateTimeLocal_instance;
  function DateTimeLocal_getInstance() {
    if (DateTimeLocal_instance == null)
      new DateTimeLocal();
    return DateTimeLocal_instance;
  }
  function Email() {
    Email_instance = this;
    InputTypeWithStringValue.call(this, 'email');
    this.$stable_3 = 0;
  }
  var Email_instance;
  function Email_getInstance() {
    if (Email_instance == null)
      new Email();
    return Email_instance;
  }
  function File() {
    File_instance = this;
    InputTypeWithStringValue.call(this, 'file');
    this.$stable_3 = 0;
  }
  var File_instance;
  function File_getInstance() {
    if (File_instance == null)
      new File();
    return File_instance;
  }
  function Hidden() {
    Hidden_instance = this;
    InputTypeWithStringValue.call(this, 'hidden');
    this.$stable_3 = 0;
  }
  var Hidden_instance;
  function Hidden_getInstance() {
    if (Hidden_instance == null)
      new Hidden();
    return Hidden_instance;
  }
  function Month() {
    Month_instance = this;
    InputTypeWithStringValue.call(this, 'month');
    this.$stable_3 = 0;
  }
  var Month_instance;
  function Month_getInstance() {
    if (Month_instance == null)
      new Month();
    return Month_instance;
  }
  function Number_0() {
    Number_instance = this;
    InputTypeNumberValue.call(this, 'number');
    this.$stable_3 = 0;
  }
  var Number_instance;
  function Number_getInstance() {
    if (Number_instance == null)
      new Number_0();
    return Number_instance;
  }
  function Password() {
    Password_instance = this;
    InputTypeWithStringValue.call(this, 'password');
    this.$stable_3 = 0;
  }
  var Password_instance;
  function Password_getInstance() {
    if (Password_instance == null)
      new Password();
    return Password_instance;
  }
  function Radio() {
    Radio_instance = this;
    InputTypeCheckedValue.call(this, 'radio');
    this.$stable_3 = 0;
  }
  var Radio_instance;
  function Radio_getInstance() {
    if (Radio_instance == null)
      new Radio();
    return Radio_instance;
  }
  function Range() {
    Range_instance = this;
    InputTypeNumberValue.call(this, 'range');
    this.$stable_3 = 0;
  }
  var Range_instance;
  function Range_getInstance() {
    if (Range_instance == null)
      new Range();
    return Range_instance;
  }
  function Search() {
    Search_instance = this;
    InputTypeWithStringValue.call(this, 'search');
    this.$stable_3 = 0;
  }
  var Search_instance;
  function Search_getInstance() {
    if (Search_instance == null)
      new Search();
    return Search_instance;
  }
  function Submit() {
    Submit_instance = this;
    InputTypeWithUnitValue.call(this, 'submit');
    this.$stable_3 = 0;
  }
  var Submit_instance;
  function Submit_getInstance() {
    if (Submit_instance == null)
      new Submit();
    return Submit_instance;
  }
  function Tel() {
    Tel_instance = this;
    InputTypeWithStringValue.call(this, 'tel');
    this.$stable_3 = 0;
  }
  var Tel_instance;
  function Tel_getInstance() {
    if (Tel_instance == null)
      new Tel();
    return Tel_instance;
  }
  function Text_0() {
    Text_instance = this;
    InputTypeWithStringValue.call(this, 'text');
    this.$stable_3 = 0;
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text_0();
    return Text_instance;
  }
  function Time() {
    Time_instance = this;
    InputTypeWithStringValue.call(this, 'time');
    this.$stable_3 = 0;
  }
  var Time_instance;
  function Time_getInstance() {
    if (Time_instance == null)
      new Time();
    return Time_instance;
  }
  function Url() {
    Url_instance = this;
    InputTypeWithStringValue.call(this, 'url');
    this.$stable_3 = 0;
  }
  var Url_instance;
  function Url_getInstance() {
    if (Url_instance == null)
      new Url();
    return Url_instance;
  }
  function Week() {
    Week_instance = this;
    InputTypeWithStringValue.call(this, 'week');
    this.$stable_3 = 0;
  }
  var Week_instance;
  function Week_getInstance() {
    if (Week_instance == null)
      new Week();
    return Week_instance;
  }
  function InputTypeWithStringValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeWithStringValue).inputValue_qots9j_k$ = function (event) {
    return Week_getInstance().valueAsString_6n50q_k$(event);
  };
  function InputTypeWithUnitValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeWithUnitValue).inputValue_jk7d21_k$ = function (event) {
    return Unit_getInstance();
  };
  protoOf(InputTypeWithUnitValue).inputValue_qots9j_k$ = function (event) {
    this.inputValue_jk7d21_k$(event);
    return Unit_getInstance();
  };
  function InputTypeCheckedValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeCheckedValue).inputValue_qots9j_k$ = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.checked;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
  };
  function InputTypeNumberValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeNumberValue).inputValue_qots9j_k$ = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.valueAsNumber;
    return tmp2_elvis_lhs == null ? null : tmp2_elvis_lhs;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).fromString_g5hge7_k$ = function (type) {
    var tmp;
    switch (type) {
      case 'button':
        tmp = Button_getInstance();
        break;
      case 'checkbox':
        tmp = Checkbox_getInstance();
        break;
      case 'color':
        tmp = Color_getInstance();
        break;
      case 'date':
        tmp = Date_getInstance();
        break;
      case 'datetime-local':
        tmp = DateTimeLocal_getInstance();
        break;
      case 'email':
        tmp = Email_getInstance();
        break;
      case 'file':
        tmp = File_getInstance();
        break;
      case 'hidden':
        tmp = Hidden_getInstance();
        break;
      case 'month':
        tmp = Month_getInstance();
        break;
      case 'number':
        tmp = Number_getInstance();
        break;
      case 'password':
        tmp = Password_getInstance();
        break;
      case 'radio':
        tmp = Radio_getInstance();
        break;
      case 'range':
        tmp = Range_getInstance();
        break;
      case 'search':
        tmp = Search_getInstance();
        break;
      case 'submit':
        tmp = Submit_getInstance();
        break;
      case 'tel':
        tmp = Tel_getInstance();
        break;
      case 'text':
        tmp = Text_getInstance();
        break;
      case 'time':
        tmp = Time_getInstance();
        break;
      case 'url':
        tmp = Url_getInstance();
        break;
      case 'week':
        tmp = Week_getInstance();
        break;
      default:
        var message = 'fromString got unknown type - ' + type;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function get_$stableprop_25() {
    return 0;
  }
  function InputType(typeStr) {
    Companion_getInstance_2();
    this.typeStr_1 = typeStr;
    this.$stable_1 = 0;
  }
  protoOf(InputType).get_typeStr_cucz82_k$ = function () {
    return this.typeStr_1;
  };
  protoOf(InputType).valueAsString_6n50q_k$ = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.value;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
  };
  function get_$stableprop_26() {
    return 0;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function get_$stableprop_28() {
    return 0;
  }
  function Ltr() {
    Ltr_instance = this;
    DirType.call(this, 'ltr');
    this.$stable_2 = 0;
  }
  var Ltr_instance;
  function Ltr_getInstance() {
    if (Ltr_instance == null)
      new Ltr();
    return Ltr_instance;
  }
  function Rtl() {
    Rtl_instance = this;
    DirType.call(this, 'rtl');
    this.$stable_2 = 0;
  }
  var Rtl_instance;
  function Rtl_getInstance() {
    if (Rtl_instance == null)
      new Rtl();
    return Rtl_instance;
  }
  function Auto() {
    Auto_instance = this;
    DirType.call(this, 'auto');
    this.$stable_2 = 0;
  }
  var Auto_instance;
  function Auto_getInstance() {
    if (Auto_instance == null)
      new Auto();
    return Auto_instance;
  }
  function get_$stableprop_29() {
    return 0;
  }
  function DirType(dirStr) {
    this.dirStr_1 = dirStr;
    this.$stable_1 = 0;
  }
  protoOf(DirType).get_dirStr_cdza7h_k$ = function () {
    return this.dirStr_1;
  };
  var Draggable_True_instance;
  var Draggable_False_instance;
  var Draggable_Auto_instance;
  function values() {
    return [Draggable_True_getInstance(), Draggable_False_getInstance(), Draggable_Auto_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'True':
        return Draggable_True_getInstance();
      case 'False':
        return Draggable_False_getInstance();
      case 'Auto':
        return Draggable_Auto_getInstance();
      default:
        Draggable_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Draggable_entriesInitialized;
  function Draggable_initEntries() {
    if (Draggable_entriesInitialized)
      return Unit_getInstance();
    Draggable_entriesInitialized = true;
    Draggable_True_instance = new Draggable('True', 0, 'true');
    Draggable_False_instance = new Draggable('False', 1, 'false');
    Draggable_Auto_instance = new Draggable('Auto', 2, 'auto');
  }
  function Draggable(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.str_1 = str;
  }
  protoOf(Draggable).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  var InputMode_None_instance;
  var InputMode_Text_instance;
  var InputMode_Decimal_instance;
  var InputMode_Numeric_instance;
  var InputMode_Tel_instance;
  var InputMode_Search_instance;
  var InputMode_Email_instance;
  var InputMode_Url_instance;
  function values_0() {
    return [InputMode_None_getInstance(), InputMode_Text_getInstance(), InputMode_Decimal_getInstance(), InputMode_Numeric_getInstance(), InputMode_Tel_getInstance(), InputMode_Search_getInstance(), InputMode_Email_getInstance(), InputMode_Url_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'None':
        return InputMode_None_getInstance();
      case 'Text':
        return InputMode_Text_getInstance();
      case 'Decimal':
        return InputMode_Decimal_getInstance();
      case 'Numeric':
        return InputMode_Numeric_getInstance();
      case 'Tel':
        return InputMode_Tel_getInstance();
      case 'Search':
        return InputMode_Search_getInstance();
      case 'Email':
        return InputMode_Email_getInstance();
      case 'Url':
        return InputMode_Url_getInstance();
      default:
        InputMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var InputMode_entriesInitialized;
  function InputMode_initEntries() {
    if (InputMode_entriesInitialized)
      return Unit_getInstance();
    InputMode_entriesInitialized = true;
    InputMode_None_instance = new InputMode('None', 0, 'none');
    InputMode_Text_instance = new InputMode('Text', 1, 'text');
    InputMode_Decimal_instance = new InputMode('Decimal', 2, 'decimal');
    InputMode_Numeric_instance = new InputMode('Numeric', 3, 'numeric');
    InputMode_Tel_instance = new InputMode('Tel', 4, 'tel');
    InputMode_Search_instance = new InputMode('Search', 5, 'search');
    InputMode_Email_instance = new InputMode('Email', 6, 'email');
    InputMode_Url_instance = new InputMode('Url', 7, 'url');
  }
  function InputMode(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.str_1 = str;
  }
  protoOf(InputMode).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  function Draggable_True_getInstance() {
    Draggable_initEntries();
    return Draggable_True_instance;
  }
  function Draggable_False_getInstance() {
    Draggable_initEntries();
    return Draggable_False_instance;
  }
  function Draggable_Auto_getInstance() {
    Draggable_initEntries();
    return Draggable_Auto_instance;
  }
  function InputMode_None_getInstance() {
    InputMode_initEntries();
    return InputMode_None_instance;
  }
  function InputMode_Text_getInstance() {
    InputMode_initEntries();
    return InputMode_Text_instance;
  }
  function InputMode_Decimal_getInstance() {
    InputMode_initEntries();
    return InputMode_Decimal_instance;
  }
  function InputMode_Numeric_getInstance() {
    InputMode_initEntries();
    return InputMode_Numeric_instance;
  }
  function InputMode_Tel_getInstance() {
    InputMode_initEntries();
    return InputMode_Tel_instance;
  }
  function InputMode_Search_getInstance() {
    InputMode_initEntries();
    return InputMode_Search_instance;
  }
  function InputMode_Email_getInstance() {
    InputMode_initEntries();
    return InputMode_Email_instance;
  }
  function InputMode_Url_getInstance() {
    InputMode_initEntries();
    return InputMode_Url_instance;
  }
  function get_$stableprop_30() {
    return 0;
  }
  function SyntheticEventListener(event, listener) {
    this.event_1 = event;
    this.listener_1 = listener;
    this.name_1 = this.event_1;
    this.$stable_1 = 0;
  }
  protoOf(SyntheticEventListener).get_event_ir25pt_k$ = function () {
    return this.event_1;
  };
  protoOf(SyntheticEventListener).get_listener_9jgv43_k$ = function () {
    return this.listener_1;
  };
  protoOf(SyntheticEventListener).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(SyntheticEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.listener_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function InputEventListener(eventName, inputType, listener) {
    eventName = eventName === VOID ? Companion_getInstance_1().get_INPUT_iaxxfl_k$() : eventName;
    SyntheticEventListener.call(this, eventName, listener);
    this.inputType_1 = inputType;
  }
  protoOf(InputEventListener).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(InputEventListener).handleEvent_zcjn50_k$ = function (event) {
    var value = this.inputType_1.inputValue_qots9j_k$(event);
    this.listener_1(new SyntheticInputEvent(value, event));
  };
  protoOf(InputEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function ChangeEventListener(inputType, listener) {
    SyntheticEventListener.call(this, Companion_getInstance_1().get_CHANGE_3rivk7_k$(), listener);
    this.inputType_1 = inputType;
  }
  protoOf(ChangeEventListener).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(ChangeEventListener).handleEvent_zcjn50_k$ = function (event) {
    var value = this.inputType_1.inputValue_qots9j_k$(event);
    this.listener_1(new SyntheticChangeEvent(value, event));
  };
  protoOf(ChangeEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function SelectEventListener(listener) {
    SyntheticEventListener.call(this, Companion_getInstance_1().get_SELECT_3rqj2d_k$(), listener);
  }
  protoOf(SelectEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = event.target;
    this.listener_1(new SyntheticSelectEvent(event, tmp$ret$1));
  };
  protoOf(SelectEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function MouseWheelEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseWheelEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticWheelEvent(event));
  };
  protoOf(MouseWheelEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function DragEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(DragEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticDragEvent(event));
  };
  protoOf(DragEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function ClipboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(ClipboardEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticClipboardEvent(event));
  };
  protoOf(ClipboardEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function KeyboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(KeyboardEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticKeyboardEvent(event));
  };
  protoOf(KeyboardEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function FocusEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(FocusEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticFocusEvent(event));
  };
  protoOf(FocusEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function TouchEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(TouchEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticTouchEvent(event));
  };
  protoOf(TouchEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function AnimationEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(AnimationEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticAnimationEvent(event, event));
  };
  protoOf(AnimationEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_31() {
    return 8;
  }
  function InputAttrsScope(inputType, attrsScope) {
    this.inputType_1 = inputType;
    this.$$delegate_0__1 = attrsScope;
    this.$stable_1 = 8;
  }
  protoOf(InputAttrsScope).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(InputAttrsScope).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(InputAttrsScope).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_xhf81m_k$(eventName, listener);
  };
  protoOf(InputAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_w68641_k$(attr, value);
  };
  protoOf(InputAttrsScope).classes_ayghm2_k$ = function (classes) {
    this.$$delegate_0__1.classes_ayghm2_k$(classes);
  };
  protoOf(InputAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.$$delegate_0__1.classes_ephr7k_k$(classes);
  };
  protoOf(InputAttrsScope).contentEditable_hbi188_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_hbi188_k$(value);
  };
  protoOf(InputAttrsScope).dir_uokp4q_k$ = function (value) {
    return this.$$delegate_0__1.dir_uokp4q_k$(value);
  };
  protoOf(InputAttrsScope).draggable_cxyxb5_k$ = function (value) {
    return this.$$delegate_0__1.draggable_cxyxb5_k$(value);
  };
  protoOf(InputAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(InputAttrsScope).id_e4l56n_k$ = function (value) {
    return this.$$delegate_0__1.id_e4l56n_k$(value);
  };
  protoOf(InputAttrsScope).inputMode_1lh0s3_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_1lh0s3_k$(value);
  };
  protoOf(InputAttrsScope).inputMode_7krh0f_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_7krh0f_k$(value);
  };
  protoOf(InputAttrsScope).lang_9i4u6k_k$ = function (value) {
    return this.$$delegate_0__1.lang_9i4u6k_k$(value);
  };
  protoOf(InputAttrsScope).onAnimationEnd_l576ug_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(InputAttrsScope).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(InputAttrsScope).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(InputAttrsScope).onBlur_yy3d4s_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(InputAttrsScope).onClick_q9cds6_k$ = function (listener) {
    this.$$delegate_0__1.onClick_q9cds6_k$(listener);
  };
  protoOf(InputAttrsScope).onContextMenu_uus4bk_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(InputAttrsScope).onCopy_4jq33g_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_4jq33g_k$(listener);
  };
  protoOf(InputAttrsScope).onCut_wod3pf_k$ = function (listener) {
    this.$$delegate_0__1.onCut_wod3pf_k$(listener);
  };
  protoOf(InputAttrsScope).onDoubleClick_gh82mh_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(InputAttrsScope).onDrag_xkse65_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_xkse65_k$(listener);
  };
  protoOf(InputAttrsScope).onDragEnd_4or1o2_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(InputAttrsScope).onDragEnter_9tqs4v_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(InputAttrsScope).onDragLeave_nsncqa_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(InputAttrsScope).onDragOver_tkxwb3_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(InputAttrsScope).onDragStart_ispt2x_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(InputAttrsScope).onDrop_373vqw_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_373vqw_k$(listener);
  };
  protoOf(InputAttrsScope).onFocus_ozgn2v_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(InputAttrsScope).onFocusIn_vryg4c_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(InputAttrsScope).onFocusOut_jw1zh_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(InputAttrsScope).onKeyDown_2pa1il_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(InputAttrsScope).onKeyUp_g6q8ee_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseDown_hebxzb_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseEnter_smfckd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseLeave_j862le_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseMove_r2z3wo_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseOut_nootgn_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseOver_o893qj_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseUp_at21zm_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(InputAttrsScope).onPaste_8ucd2k_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(InputAttrsScope).onScroll_ur92mf_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_ur92mf_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchEnd_ugz1se_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchMove_wm6qxk_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchStart_4yr0c9_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(InputAttrsScope).onWheel_59frrx_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_59frrx_k$(listener);
  };
  protoOf(InputAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.$$delegate_0__1.prop_cha5mt_k$(update, value);
  };
  protoOf(InputAttrsScope).ref_g0i5n6_k$ = function (effect) {
    this.$$delegate_0__1.ref_o4g25g_k$(effect);
  };
  protoOf(InputAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_g0i5n6_k$(effect);
  };
  protoOf(InputAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(InputAttrsScope).spellCheck_hp5v6j_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_hp5v6j_k$(value);
  };
  protoOf(InputAttrsScope).style_xwwy6r_k$ = function (builder) {
    this.$$delegate_0__1.style_xwwy6r_k$(builder);
  };
  protoOf(InputAttrsScope).tabIndex_fn4aj_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_fn4aj_k$(value);
  };
  protoOf(InputAttrsScope).title_qpfo4e_k$ = function (value) {
    return this.$$delegate_0__1.title_qpfo4e_k$(value);
  };
  protoOf(InputAttrsScope).value_hphtnt_k$ = function (value) {
    var tmp0_subject = this.inputType_1;
    if (((equals(tmp0_subject, Checkbox_getInstance()) ? true : equals(tmp0_subject, Radio_getInstance())) ? true : equals(tmp0_subject, Hidden_getInstance())) ? true : equals(tmp0_subject, Submit_getInstance())) {
      this.attr_w68641_k$('value', value);
    } else {
      this.prop_cha5mt_k$(get_setInputValue(), value);
    }
    return this;
  };
  protoOf(InputAttrsScope).value_9pbxtm_k$ = function (value) {
    this.value_hphtnt_k$(toString(value));
    return this;
  };
  protoOf(InputAttrsScope).checked_fr7msi_k$ = function (checked) {
    this.prop_cha5mt_k$(get_setCheckedValue(), checked);
    return this;
  };
  protoOf(InputAttrsScope).defaultChecked_plyi8q_k$ = function () {
    this.attr_w68641_k$('checked', '');
    return this;
  };
  protoOf(InputAttrsScope).defaultValue_3511yu_k$ = function (value) {
    this.attr_w68641_k$('value', value);
    return this;
  };
  protoOf(InputAttrsScope).defaultValue_ceo717_k$ = function (value) {
    this.attr_w68641_k$('value', toString(value));
    return this;
  };
  protoOf(InputAttrsScope).onInvalid_705boi_k$ = function (listener) {
    this.addEventListener_pu8o1q_k$(Companion_getInstance_1().get_INVALID_pha976_k$(), listener);
  };
  protoOf(InputAttrsScope).onInput_qzb0am_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new InputEventListener(Companion_getInstance_1().get_INPUT_iaxxfl_k$(), this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onChange_zfla64_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new ChangeEventListener(this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onBeforeInput_tacd4x_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new InputEventListener(Companion_getInstance_1().get_BEFOREINPUT_vjk3z6_k$(), this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onSelect_l8kuzx_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new SelectEventListener(listener));
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().containsKey_aw81wo_k$(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var this_1 = get_controlledRadioGroups();
        var key = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var value = LinkedHashSet_init_$Create$();
        this_1.put_4fpzoq_k$(key, value);
      }
      ensureNotNull(get_controlledRadioGroups().get_wei43m_k$(element.name)).add_utx5q5_k$(element);
    }
  }
  function DisposeRadioGroupEffect$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1867048565);
    if (isTraceInProgress()) {
      traceEventStart(-1867048565, $changed, -1, 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect$composable (InternalControlledInputUtils.kt:67)');
    }
    DisposableEffect$composable(null, DisposeRadioGroupEffect$composable$lambda(_this__u8e3s4), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function restoreControlledInputState(inputElement) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var type = Companion_getInstance_2().fromString_g5hge7_k$(inputElement.type);
    if (get_controlledInputsValuesWeakMap().has(inputElement)) {
      if (equals(type, Radio_getInstance())) {
        var tmp0_safe_receiver = get_controlledRadioGroups().get_wei43m_k$(inputElement.name);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = tmp0_safe_receiver.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.jetbrains.compose.web.attributes.builders.restoreControlledInputState.<anonymous>' call
            element.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(element)));
          }
        }
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
        return Unit_getInstance();
      }
      if (equals(type, Checkbox_getInstance())) {
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
      } else {
        inputElement.value = toString_0(get_controlledInputsValuesWeakMap().get(inputElement));
      }
    }
  }
  function restoreControlledTextAreaState(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    if (get_controlledInputsValuesWeakMap().has(element)) {
      element.value = toString_0(get_controlledInputsValuesWeakMap().get(element));
    }
  }
  function _no_name_provided__qut3iv($ref) {
    this.$ref_1 = $ref;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = get_controlledRadioGroups().get_wei43m_k$(this.$ref_1.name);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.remove_cedx0m_k$(this.$ref_1);
    var tmp1_safe_receiver = get_controlledRadioGroups().get_wei43m_k$(this.$ref_1.name);
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.isEmpty_y1axqb_k$()) === true) {
      get_controlledRadioGroups().remove_gppy8k_k$(this.$ref_1.name);
    }
  };
  function DisposeRadioGroupEffect$composable$lambda($this_DisposeRadioGroupEffect$composable) {
    return function ($this$DisposableEffect) {
      var ref = $this_DisposeRadioGroupEffect$composable.get_scopeElement_61kop2_k$($this$DisposableEffect);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(ref);
    };
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function get_$stableprop_32() {
    return 8;
  }
  function TextAreaAttrsScope(attrsScope) {
    this.$$delegate_0__1 = attrsScope;
    this.$stable_1 = 8;
  }
  protoOf(TextAreaAttrsScope).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(TextAreaAttrsScope).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_xhf81m_k$(eventName, listener);
  };
  protoOf(TextAreaAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_w68641_k$(attr, value);
  };
  protoOf(TextAreaAttrsScope).classes_ayghm2_k$ = function (classes) {
    this.$$delegate_0__1.classes_ayghm2_k$(classes);
  };
  protoOf(TextAreaAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.$$delegate_0__1.classes_ephr7k_k$(classes);
  };
  protoOf(TextAreaAttrsScope).contentEditable_hbi188_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_hbi188_k$(value);
  };
  protoOf(TextAreaAttrsScope).dir_uokp4q_k$ = function (value) {
    return this.$$delegate_0__1.dir_uokp4q_k$(value);
  };
  protoOf(TextAreaAttrsScope).draggable_cxyxb5_k$ = function (value) {
    return this.$$delegate_0__1.draggable_cxyxb5_k$(value);
  };
  protoOf(TextAreaAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(TextAreaAttrsScope).id_e4l56n_k$ = function (value) {
    return this.$$delegate_0__1.id_e4l56n_k$(value);
  };
  protoOf(TextAreaAttrsScope).inputMode_1lh0s3_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_1lh0s3_k$(value);
  };
  protoOf(TextAreaAttrsScope).inputMode_7krh0f_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_7krh0f_k$(value);
  };
  protoOf(TextAreaAttrsScope).lang_9i4u6k_k$ = function (value) {
    return this.$$delegate_0__1.lang_9i4u6k_k$(value);
  };
  protoOf(TextAreaAttrsScope).onAnimationEnd_l576ug_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onBlur_yy3d4s_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onClick_q9cds6_k$ = function (listener) {
    this.$$delegate_0__1.onClick_q9cds6_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onContextMenu_uus4bk_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onCopy_4jq33g_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_4jq33g_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onCut_wod3pf_k$ = function (listener) {
    this.$$delegate_0__1.onCut_wod3pf_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDoubleClick_gh82mh_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDrag_xkse65_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_xkse65_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragEnd_4or1o2_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragEnter_9tqs4v_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragLeave_nsncqa_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragOver_tkxwb3_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragStart_ispt2x_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDrop_373vqw_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_373vqw_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocus_ozgn2v_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocusIn_vryg4c_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocusOut_jw1zh_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onKeyDown_2pa1il_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onKeyUp_g6q8ee_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseDown_hebxzb_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseEnter_smfckd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseLeave_j862le_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseMove_r2z3wo_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseOut_nootgn_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseOver_o893qj_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseUp_at21zm_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onPaste_8ucd2k_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onScroll_ur92mf_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_ur92mf_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchEnd_ugz1se_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchMove_wm6qxk_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchStart_4yr0c9_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onWheel_59frrx_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_59frrx_k$(listener);
  };
  protoOf(TextAreaAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.$$delegate_0__1.prop_cha5mt_k$(update, value);
  };
  protoOf(TextAreaAttrsScope).ref_e2flww_k$ = function (effect) {
    this.$$delegate_0__1.ref_o4g25g_k$(effect);
  };
  protoOf(TextAreaAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_e2flww_k$(effect);
  };
  protoOf(TextAreaAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(TextAreaAttrsScope).spellCheck_hp5v6j_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_hp5v6j_k$(value);
  };
  protoOf(TextAreaAttrsScope).style_xwwy6r_k$ = function (builder) {
    this.$$delegate_0__1.style_xwwy6r_k$(builder);
  };
  protoOf(TextAreaAttrsScope).tabIndex_fn4aj_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_fn4aj_k$(value);
  };
  protoOf(TextAreaAttrsScope).title_qpfo4e_k$ = function (value) {
    return this.$$delegate_0__1.title_qpfo4e_k$(value);
  };
  protoOf(TextAreaAttrsScope).value_hphtnt_k$ = function (value) {
    this.prop_cha5mt_k$(get_setInputValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).defaultValue_3511yu_k$ = function (value) {
    this.prop_cha5mt_k$(get_setTextAreaDefaultValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).onInput_cld1rf_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new InputEventListener(Companion_getInstance_1().get_INPUT_iaxxfl_k$(), Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onChange_nv2twx_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new ChangeEventListener(Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onBeforeInput_5ag6es_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new InputEventListener(Companion_getInstance_1().get_BEFOREINPUT_vjk3z6_k$(), Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onSelect_fhigw7_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new SelectEventListener(listener));
  };
  function appendRule(_this__u8e3s4, cssRule) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).get_Block_i7n684_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'block';
  };
  protoOf(Companion_2).get_Inline_bkx8e_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline';
  };
  protoOf(Companion_2).get_InlineBlock_dx9ywb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-block';
  };
  protoOf(Companion_2).get_Flex_wo1n4y_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex';
  };
  protoOf(Companion_2).get_LegacyInlineFlex_bx32c_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-flex';
  };
  protoOf(Companion_2).get_Grid_wo2enj_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'grid';
  };
  protoOf(Companion_2).get_LegacyInlineGrid_bxukx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-grid';
  };
  protoOf(Companion_2).get_FlowRoot_2ttlax_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flow-root';
  };
  protoOf(Companion_2).get_None_wo6tgh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_2).get_Contents_uww6pv_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'contents';
  };
  protoOf(Companion_2).get_Table_ihc6md_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'table';
  };
  protoOf(Companion_2).get_TableRow_phjndh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'table-row';
  };
  protoOf(Companion_2).get_ListItem_8hh2km_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'list-item';
  };
  protoOf(Companion_2).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_2).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_2).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function DisplayStyle() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_3).get_Stretch_2brthg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_3).get_Center_3arb0i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_3).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_3).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_3).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_3).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_3).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'baseline';
  };
  protoOf(Companion_3).get_SafeCenter_caps7p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'safe center';
  };
  protoOf(Companion_3).get_UnsafeCenter_h98ef8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unsafe center';
  };
  protoOf(Companion_3).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_3).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_3).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function AlignItems() {
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).get_Static_4hz9g7_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'static';
  };
  protoOf(Companion_4).get_Relative_v4kdkl_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'relative';
  };
  protoOf(Companion_4).get_Absolute_25kja8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'absolute';
  };
  protoOf(Companion_4).get_Sticky_4i40sy_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sticky';
  };
  protoOf(Companion_4).get_Fixed_i9smcr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fixed';
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Position() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_Row_18jkj3_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'row';
  };
  protoOf(Companion_5).get_RowReverse_d0ukpd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'row-reverse';
  };
  protoOf(Companion_5).get_Column_35am4h_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'column';
  };
  protoOf(Companion_5).get_ColumnReverse_rkbov1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'column-reverse';
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function FlexDirection() {
  }
  function StylePropertyEnum() {
  }
  function DisplayStyle_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function AlignItems_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function Position_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function FlexDirection_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function get_value(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_Center_3arb0i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_6).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_6).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_6).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_6).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_6).get_Left_wo5bw0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'left';
  };
  protoOf(Companion_6).get_Right_igdsyb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'right';
  };
  protoOf(Companion_6).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_6).get_SpaceBetween_5p3wqd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-between';
  };
  protoOf(Companion_6).get_SpaceAround_1tvu22_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-around';
  };
  protoOf(Companion_6).get_SpaceEvenly_3s2yx0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-evenly';
  };
  protoOf(Companion_6).get_Stretch_2brthg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_6).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_6).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_6).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  protoOf(Companion_6).get_SafeCenter_caps7p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'safe center';
  };
  protoOf(Companion_6).get_UnsafeCenter_h98ef8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unsafe center';
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function JustifyContent() {
  }
  function JustifyContent_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function get_$stableprop_33() {
    return 8;
  }
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.name_1 = name;
    this.keys_1 = keys;
    this.$stable_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return '@keyframes ' + this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.keys_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).copy_1u2wyi_k$ = function (name, keys) {
    return new CSSKeyframesRuleDeclaration(name, keys);
  };
  protoOf(CSSKeyframesRuleDeclaration).copy$default_oux16f_k$ = function (name, keys, $super) {
    name = name === VOID ? this.name_1 : name;
    keys = keys === VOID ? this.keys_1 : keys;
    return $super === VOID ? this.copy_1u2wyi_k$(name, keys) : $super.copy_1u2wyi_k$.call(this, name, keys);
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.name_1 + ', keys=' + this.keys_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.keys_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    return true;
  };
  function get_$stableprop_34() {
    return 8;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.keyframe_1 = keyframe;
    this.style_1 = style;
    this.$stable_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).get_keyframe_nerrnt_k$ = function () {
    return this.keyframe_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return this.keyframe_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.keyframe_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).copy_js03l5_k$ = function (keyframe, style) {
    return new CSSKeyframeRuleDeclaration(keyframe, style);
  };
  protoOf(CSSKeyframeRuleDeclaration).copy$default_olqi3m_k$ = function (keyframe, style, $super) {
    keyframe = keyframe === VOID ? this.keyframe_1 : keyframe;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_js03l5_k$(keyframe, style) : $super.copy_js03l5_k$.call(this, keyframe, style);
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.keyframe_1 + ', style=' + this.style_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.keyframe_1);
    result = imul(result, 31) + hashCode(this.style_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.keyframe_1, tmp0_other_with_cast.keyframe_1))
      return false;
    if (!equals(this.style_1, tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function CSSNamedKeyframes() {
  }
  function get_$stableprop_35() {
    return 0;
  }
  function get_$stableprop_36() {
    return 0;
  }
  function get_$stableprop_37() {
    return 8;
  }
  function get_$stableprop_38() {
    return 8;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.$stable_2 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.$stable_2 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function Percentage(value) {
    CSSKeyframe.call(this);
    this.value_1 = value;
    this.$stable_2 = 8;
  }
  protoOf(Percentage).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Percentage).toString = function () {
    return toString(this.value_1);
  };
  protoOf(Percentage).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(Percentage).copy_kcur6s_k$ = function (value) {
    return new Percentage(value);
  };
  protoOf(Percentage).copy$default_f7406y_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_kcur6s_k$(value) : $super.copy_kcur6s_k$.call(this, value);
  };
  protoOf(Percentage).hashCode = function () {
    return hashCode(this.value_1);
  };
  protoOf(Percentage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Percentage))
      return false;
    var tmp0_other_with_cast = other instanceof Percentage ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function Combine(values) {
    CSSKeyframe.call(this);
    this.values_1 = values;
    this.$stable_2 = 8;
  }
  protoOf(Combine).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  protoOf(Combine).toString = function () {
    return joinToString(this.values_1, ', ');
  };
  protoOf(Combine).component1_7eebsc_k$ = function () {
    return this.values_1;
  };
  protoOf(Combine).copy_3x4dz_k$ = function (values) {
    return new Combine(values);
  };
  protoOf(Combine).copy$default_gcp1m8_k$ = function (values, $super) {
    values = values === VOID ? this.values_1 : values;
    return $super === VOID ? this.copy_3x4dz_k$(values) : $super.copy_3x4dz_k$.call(this, values);
  };
  protoOf(Combine).hashCode = function () {
    return hashCode(this.values_1);
  };
  protoOf(Combine).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine))
      return false;
    var tmp0_other_with_cast = other instanceof Combine ? other : THROW_CCE();
    if (!equals(this.values_1, tmp0_other_with_cast.values_1))
      return false;
    return true;
  };
  function get_$stableprop_39() {
    return 0;
  }
  function CSSKeyframe() {
    this.$stable_1 = 0;
  }
  function CSSRuleDeclaration() {
  }
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyleRuleBuilder() {
  }
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function get_$stableprop_40() {
    return 8;
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.selector_1 = selector;
    this.style_1 = style;
    this.$stable_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(CSSStyleRuleDeclaration).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSStyleRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return this.selector_1.asString_l3f38d_k$();
  };
  protoOf(CSSStyleRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.selector_1;
  };
  protoOf(CSSStyleRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSStyleRuleDeclaration).copy_9nxmv3_k$ = function (selector, style) {
    return new CSSStyleRuleDeclaration(selector, style);
  };
  protoOf(CSSStyleRuleDeclaration).copy$default_opygl9_k$ = function (selector, style, $super) {
    selector = selector === VOID ? this.selector_1 : selector;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_9nxmv3_k$(selector, style) : $super.copy_9nxmv3_k$.call(this, selector, style);
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.selector_1 + ', style=' + this.style_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.selector_1);
    result = imul(result, 31) + hashCode(this.style_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.selector_1, tmp0_other_with_cast.selector_1))
      return false;
    if (!equals(this.style_1, tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function get_$stableprop_41() {
    return 0;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.$stable_2 = 0;
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    Companion_getInstance_8();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function percent() {
  }
  function em() {
  }
  function ex() {
  }
  function ch() {
  }
  function ic() {
  }
  function rem() {
  }
  function lh() {
  }
  function rlh() {
  }
  function vw() {
  }
  function vh() {
  }
  function vi() {
  }
  function vb() {
  }
  function vmin() {
  }
  function vmax() {
  }
  function cm() {
  }
  function mm() {
  }
  function Q() {
  }
  function pt() {
  }
  function pc() {
  }
  function px() {
  }
  function deg() {
  }
  function grad() {
  }
  function rad() {
  }
  function turn() {
  }
  function s() {
  }
  function ms() {
  }
  function Hz() {
  }
  function kHz() {
  }
  function dpi() {
  }
  function dpcm() {
  }
  function dppx() {
  }
  function fr() {
  }
  function number() {
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_percent_9yntlw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '%';
  };
  protoOf(Companion_7).get_em_knto0f_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'em';
  };
  protoOf(Companion_7).get_ex_knto04_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ex';
  };
  protoOf(Companion_7).get_ch_knto2a_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ch';
  };
  protoOf(Companion_7).get_ic_kntnx9_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ic';
  };
  protoOf(Companion_7).get_rem_18ix1r_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rem';
  };
  protoOf(Companion_7).get_lh_kntnuj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lh';
  };
  protoOf(Companion_7).get_rlh_18iwvv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rlh';
  };
  protoOf(Companion_7).get_vw_kntnli_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vw';
  };
  protoOf(Companion_7).get_vh_kntnlx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vh';
  };
  protoOf(Companion_7).get_vi_kntnlw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vi';
  };
  protoOf(Companion_7).get_vb_kntnm3_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vb';
  };
  protoOf(Companion_7).get_vmin_wowbc5_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vmin';
  };
  protoOf(Companion_7).get_vmax_wowb5j_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vmax';
  };
  protoOf(Companion_7).get_cm_knto25_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cm';
  };
  protoOf(Companion_7).get_mm_kntntj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'mm';
  };
  protoOf(Companion_7).get_Q_1mhr54_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'Q';
  };
  protoOf(Companion_7).get_pt_kntnqr_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pt';
  };
  protoOf(Companion_7).get_pc_kntnr8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pc';
  };
  protoOf(Companion_7).get_px_kntnqn_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'px';
  };
  protoOf(Companion_7).get_deg_18j7fn_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'deg';
  };
  protoOf(Companion_7).get_grad_womu1j_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'grad';
  };
  protoOf(Companion_7).get_rad_18ix5g_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rad';
  };
  protoOf(Companion_7).get_turn_wov7ie_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'turn';
  };
  protoOf(Companion_7).get_s_1mhr62_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 's';
  };
  protoOf(Companion_7).get_ms_kntntd_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ms';
  };
  protoOf(Companion_7).get_Hz_kntop1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'Hz';
  };
  protoOf(Companion_7).get_kHz_18j2x8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'kHz';
  };
  protoOf(Companion_7).get_dpi_18j764_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dpi';
  };
  protoOf(Companion_7).get_dpcm_wokvnj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dpcm';
  };
  protoOf(Companion_7).get_dppx_wokvz1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dppx';
  };
  protoOf(Companion_7).get_fr_kntnzf_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fr';
  };
  protoOf(Companion_7).get_number_hay53m_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'number';
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function CSSUnit() {
  }
  function get_vw(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vw' call
    Companion_getInstance_8();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vw');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    Companion_getInstance_8();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    Companion_getInstance_8();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_$stableprop_42() {
    return 0;
  }
  function CSSUnitValueTyped(value, unit) {
    this.value_1 = value;
    this.unit_1 = unit;
    this.$stable_1 = 0;
  }
  protoOf(CSSUnitValueTyped).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSUnitValueTyped).get_unit_wovp3h_k$ = function () {
    return this.unit_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.value_1 + this.unit_1;
  };
  protoOf(CSSUnitValueTyped).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSUnitValueTyped).component2_7eebsb_k$ = function () {
    return this.unit_1;
  };
  protoOf(CSSUnitValueTyped).copy_8jtivh_k$ = function (value, unit) {
    return new CSSUnitValueTyped(value, unit);
  };
  protoOf(CSSUnitValueTyped).copy$default_h58idk_k$ = function (value, unit, $super) {
    value = value === VOID ? this.value_1 : value;
    unit = unit === VOID ? this.unit_1 : unit;
    return $super === VOID ? this.copy_8jtivh_k$(value, unit) : $super.copy_8jtivh_k$.call(this, value, unit);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.value_1);
    result = imul(result, 31) + hashCode(this.unit_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.unit_1, tmp0_other_with_cast.unit_1))
      return false;
    return true;
  };
  function CSSUnitPercentage() {
  }
  function CSSUnitRel() {
  }
  function CSSUnitAbs() {
  }
  function CSSUnitAngle() {
  }
  function CSSUnitTime() {
  }
  function CSSUnitFrequency() {
  }
  function CSSUnitResolution() {
  }
  function CSSUnitFlex() {
  }
  function CSSUnitLengthOrPercentage() {
  }
  function CSSUnitLength() {
  }
  function get_deg(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.deg' call
    Companion_getInstance_8();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'deg');
  }
  function get_$stableprop_43() {
    return 0;
  }
  function get_$stableprop_44() {
    return 0;
  }
  function HSL_init_$Init$(h, s, l, $this) {
    HSL.call($this, get_deg(h), s, l);
    return $this;
  }
  function HSL_init_$Create$(h, s, l) {
    return HSL_init_$Init$(h, s, l, objectCreate(protoOf(HSL)));
  }
  function get_$stableprop_45() {
    return 8;
  }
  function HSLA_init_$Init$(h, s, l, a, $this) {
    HSLA.call($this, get_deg(h), s, l, a);
    return $this;
  }
  function HSLA_init_$Create$(h, s, l, a) {
    return HSLA_init_$Init$(h, s, l, a, objectCreate(protoOf(HSLA)));
  }
  function get_$stableprop_46() {
    return 8;
  }
  function RGB(r, g, b) {
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
    this.$stable_1 = 0;
  }
  protoOf(RGB).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(RGB).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(RGB).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(RGB).toString = function () {
    return 'rgb(' + toString(this.r_1) + ', ' + toString(this.g_1) + ', ' + toString(this.b_1) + ')';
  };
  protoOf(RGB).component1_7eebsc_k$ = function () {
    return this.r_1;
  };
  protoOf(RGB).component2_7eebsb_k$ = function () {
    return this.g_1;
  };
  protoOf(RGB).component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  protoOf(RGB).copy_w9xahi_k$ = function (r, g, b) {
    return new RGB(r, g, b);
  };
  protoOf(RGB).copy$default_inyh28_k$ = function (r, g, b, $super) {
    r = r === VOID ? this.r_1 : r;
    g = g === VOID ? this.g_1 : g;
    b = b === VOID ? this.b_1 : b;
    return $super === VOID ? this.copy_w9xahi_k$(r, g, b) : $super.copy_w9xahi_k$.call(this, r, g, b);
  };
  protoOf(RGB).hashCode = function () {
    var result = hashCode(this.r_1);
    result = imul(result, 31) + hashCode(this.g_1) | 0;
    result = imul(result, 31) + hashCode(this.b_1) | 0;
    return result;
  };
  protoOf(RGB).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RGB))
      return false;
    var tmp0_other_with_cast = other instanceof RGB ? other : THROW_CCE();
    if (!equals(this.r_1, tmp0_other_with_cast.r_1))
      return false;
    if (!equals(this.g_1, tmp0_other_with_cast.g_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    return true;
  };
  function RGBA(r, g, b, a) {
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
    this.a_1 = a;
    this.$stable_1 = 0;
  }
  protoOf(RGBA).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(RGBA).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(RGBA).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(RGBA).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(RGBA).toString = function () {
    return 'rgba(' + toString(this.r_1) + ', ' + toString(this.g_1) + ', ' + toString(this.b_1) + ', ' + toString(this.a_1) + ')';
  };
  protoOf(RGBA).component1_7eebsc_k$ = function () {
    return this.r_1;
  };
  protoOf(RGBA).component2_7eebsb_k$ = function () {
    return this.g_1;
  };
  protoOf(RGBA).component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  protoOf(RGBA).component4_7eebs9_k$ = function () {
    return this.a_1;
  };
  protoOf(RGBA).copy_ko3x3f_k$ = function (r, g, b, a) {
    return new RGBA(r, g, b, a);
  };
  protoOf(RGBA).copy$default_hh1eth_k$ = function (r, g, b, a, $super) {
    r = r === VOID ? this.r_1 : r;
    g = g === VOID ? this.g_1 : g;
    b = b === VOID ? this.b_1 : b;
    a = a === VOID ? this.a_1 : a;
    return $super === VOID ? this.copy_ko3x3f_k$(r, g, b, a) : $super.copy_ko3x3f_k$.call(this, r, g, b, a);
  };
  protoOf(RGBA).hashCode = function () {
    var result = hashCode(this.r_1);
    result = imul(result, 31) + hashCode(this.g_1) | 0;
    result = imul(result, 31) + hashCode(this.b_1) | 0;
    result = imul(result, 31) + hashCode(this.a_1) | 0;
    return result;
  };
  protoOf(RGBA).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RGBA))
      return false;
    var tmp0_other_with_cast = other instanceof RGBA ? other : THROW_CCE();
    if (!equals(this.r_1, tmp0_other_with_cast.r_1))
      return false;
    if (!equals(this.g_1, tmp0_other_with_cast.g_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    return true;
  };
  function HSL(h, s, l) {
    this.h_1 = h;
    this.s_1 = s;
    this.l_1 = l;
    this.$stable_1 = 8;
  }
  protoOf(HSL).get_h_1mhr5r_k$ = function () {
    return this.h_1;
  };
  protoOf(HSL).get_s_1mhr62_k$ = function () {
    return this.s_1;
  };
  protoOf(HSL).get_l_1mhr5v_k$ = function () {
    return this.l_1;
  };
  protoOf(HSL).toString = function () {
    return 'hsl(' + this.h_1 + ', ' + toString(this.s_1) + '%, ' + toString(this.l_1) + '%)';
  };
  protoOf(HSL).component1_7eebsc_k$ = function () {
    return this.h_1;
  };
  protoOf(HSL).component2_7eebsb_k$ = function () {
    return this.s_1;
  };
  protoOf(HSL).component3_7eebsa_k$ = function () {
    return this.l_1;
  };
  protoOf(HSL).copy_ygvtow_k$ = function (h, s, l) {
    return new HSL(h, s, l);
  };
  protoOf(HSL).copy$default_ofxxj4_k$ = function (h, s, l, $super) {
    h = h === VOID ? this.h_1 : h;
    s = s === VOID ? this.s_1 : s;
    l = l === VOID ? this.l_1 : l;
    return $super === VOID ? this.copy_ygvtow_k$(h, s, l) : $super.copy_ygvtow_k$.call(this, h, s, l);
  };
  protoOf(HSL).hashCode = function () {
    var result = hashCode(this.h_1);
    result = imul(result, 31) + hashCode(this.s_1) | 0;
    result = imul(result, 31) + hashCode(this.l_1) | 0;
    return result;
  };
  protoOf(HSL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HSL))
      return false;
    var tmp0_other_with_cast = other instanceof HSL ? other : THROW_CCE();
    if (!equals(this.h_1, tmp0_other_with_cast.h_1))
      return false;
    if (!equals(this.s_1, tmp0_other_with_cast.s_1))
      return false;
    if (!equals(this.l_1, tmp0_other_with_cast.l_1))
      return false;
    return true;
  };
  function HSLA(h, s, l, a) {
    this.h_1 = h;
    this.s_1 = s;
    this.l_1 = l;
    this.a_1 = a;
    this.$stable_1 = 8;
  }
  protoOf(HSLA).get_h_1mhr5r_k$ = function () {
    return this.h_1;
  };
  protoOf(HSLA).get_s_1mhr62_k$ = function () {
    return this.s_1;
  };
  protoOf(HSLA).get_l_1mhr5v_k$ = function () {
    return this.l_1;
  };
  protoOf(HSLA).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(HSLA).toString = function () {
    return 'hsla(' + this.h_1 + ', ' + toString(this.s_1) + '%, ' + toString(this.l_1) + '%, ' + toString(this.a_1) + ')';
  };
  protoOf(HSLA).component1_7eebsc_k$ = function () {
    return this.h_1;
  };
  protoOf(HSLA).component2_7eebsb_k$ = function () {
    return this.s_1;
  };
  protoOf(HSLA).component3_7eebsa_k$ = function () {
    return this.l_1;
  };
  protoOf(HSLA).component4_7eebs9_k$ = function () {
    return this.a_1;
  };
  protoOf(HSLA).copy_js7xvf_k$ = function (h, s, l, a) {
    return new HSLA(h, s, l, a);
  };
  protoOf(HSLA).copy$default_jvkpn_k$ = function (h, s, l, a, $super) {
    h = h === VOID ? this.h_1 : h;
    s = s === VOID ? this.s_1 : s;
    l = l === VOID ? this.l_1 : l;
    a = a === VOID ? this.a_1 : a;
    return $super === VOID ? this.copy_js7xvf_k$(h, s, l, a) : $super.copy_js7xvf_k$.call(this, h, s, l, a);
  };
  protoOf(HSLA).hashCode = function () {
    var result = hashCode(this.h_1);
    result = imul(result, 31) + hashCode(this.s_1) | 0;
    result = imul(result, 31) + hashCode(this.l_1) | 0;
    result = imul(result, 31) + hashCode(this.a_1) | 0;
    return result;
  };
  protoOf(HSLA).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HSLA))
      return false;
    var tmp0_other_with_cast = other instanceof HSLA ? other : THROW_CCE();
    if (!equals(this.h_1, tmp0_other_with_cast.h_1))
      return false;
    if (!equals(this.s_1, tmp0_other_with_cast.s_1))
      return false;
    if (!equals(this.l_1, tmp0_other_with_cast.l_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    return true;
  };
  function get_$stableprop_47() {
    return 0;
  }
  function Color_0() {
    Color_instance_0 = this;
    this.$stable_1 = 0;
  }
  protoOf(Color_0).get_aliceblue_zbd233_k$ = function () {
    return Color_1('aliceblue');
  };
  protoOf(Color_0).get_antiquewhite_dljfeb_k$ = function () {
    return Color_1('antiquewhite');
  };
  protoOf(Color_0).get_aquamarine_jqard_k$ = function () {
    return Color_1('aquamarine');
  };
  protoOf(Color_0).get_azure_ioxv8m_k$ = function () {
    return Color_1('azure');
  };
  protoOf(Color_0).get_beige_ip3zy3_k$ = function () {
    return Color_1('beige');
  };
  protoOf(Color_0).get_bisque_bfxany_k$ = function () {
    return Color_1('bisque');
  };
  protoOf(Color_0).get_black_ip8aty_k$ = function () {
    return Color_1('black');
  };
  protoOf(Color_0).get_blanchedalmond_xh00hz_k$ = function () {
    return Color_1('blanchedalmond');
  };
  protoOf(Color_0).get_blue_wojj4z_k$ = function () {
    return Color_1('blue');
  };
  protoOf(Color_0).get_blueviolet_4c63a6_k$ = function () {
    return Color_1('blueviolet');
  };
  protoOf(Color_0).get_brown_ipcfm5_k$ = function () {
    return Color_1('brown');
  };
  protoOf(Color_0).get_burlywood_oa2kz4_k$ = function () {
    return Color_1('burlywood');
  };
  protoOf(Color_0).get_cadetblue_cuot2e_k$ = function () {
    return Color_1('cadetblue');
  };
  protoOf(Color_0).get_chartreuse_9n36cf_k$ = function () {
    return Color_1('chartreuse');
  };
  protoOf(Color_0).get_chocolate_jw6x03_k$ = function () {
    return Color_1('chocolate');
  };
  protoOf(Color_0).get_cornflowerblue_alq49m_k$ = function () {
    return Color_1('cornflowerblue');
  };
  protoOf(Color_0).get_cornsilk_vnj6x2_k$ = function () {
    return Color_1('cornsilk');
  };
  protoOf(Color_0).get_crimson_icc9h2_k$ = function () {
    return Color_1('crimson');
  };
  protoOf(Color_0).get_cyan_wokfak_k$ = function () {
    return Color_1('cyan');
  };
  protoOf(Color_0).get_darkblue_304dbb_k$ = function () {
    return Color_1('darkblue');
  };
  protoOf(Color_0).get_darkcyan_303h5q_k$ = function () {
    return Color_1('darkcyan');
  };
  protoOf(Color_0).get_darkgoldenrod_cl11rz_k$ = function () {
    return Color_1('darkgoldenrod');
  };
  protoOf(Color_0).get_darkgray_3012e6_k$ = function () {
    return Color_1('darkgray');
  };
  protoOf(Color_0).get_darkgreen_lzsxng_k$ = function () {
    return Color_1('darkgreen');
  };
  protoOf(Color_0).get_darkkhaki_lxs7z1_k$ = function () {
    return Color_1('darkkhaki');
  };
  protoOf(Color_0).get_darkmagenta_vkc9h2_k$ = function () {
    return Color_1('darkmagenta');
  };
  protoOf(Color_0).get_darkolivegreen_7vcpa1_k$ = function () {
    return Color_1('darkolivegreen');
  };
  protoOf(Color_0).get_darkorange_w9i6ct_k$ = function () {
    return Color_1('darkorange');
  };
  protoOf(Color_0).get_darkorchid_w9jbxe_k$ = function () {
    return Color_1('darkorchid');
  };
  protoOf(Color_0).get_darkred_p3vtde_k$ = function () {
    return Color_1('darkred');
  };
  protoOf(Color_0).get_darksalmon_xwj65p_k$ = function () {
    return Color_1('darksalmon');
  };
  protoOf(Color_0).get_darkslateblue_i855d8_k$ = function () {
    return Color_1('darkslateblue');
  };
  protoOf(Color_0).get_darkslategray_i81ug3_k$ = function () {
    return Color_1('darkslategray');
  };
  protoOf(Color_0).get_darkturquoise_xgbo76_k$ = function () {
    return Color_1('darkturquoise');
  };
  protoOf(Color_0).get_darkviolet_zg4a2m_k$ = function () {
    return Color_1('darkviolet');
  };
  protoOf(Color_0).get_deeppink_le8j4l_k$ = function () {
    return Color_1('deeppink');
  };
  protoOf(Color_0).get_deepskyblue_cz0co6_k$ = function () {
    return Color_1('deepskyblue');
  };
  protoOf(Color_0).get_dimgray_stf9j6_k$ = function () {
    return Color_1('dimgray');
  };
  protoOf(Color_0).get_dodgerblue_tguua_k$ = function () {
    return Color_1('dodgerblue');
  };
  protoOf(Color_0).get_firebrick_3tq2w2_k$ = function () {
    return Color_1('firebrick');
  };
  protoOf(Color_0).get_floralwhite_5zrd1w_k$ = function () {
    return Color_1('floralwhite');
  };
  protoOf(Color_0).get_forestgreen_q0ckd_k$ = function () {
    return Color_1('forestgreen');
  };
  protoOf(Color_0).get_fuchsia_7bu1aq_k$ = function () {
    return Color_1('fuchsia');
  };
  protoOf(Color_0).get_gainsboro_t2wzuz_k$ = function () {
    return Color_1('gainsboro');
  };
  protoOf(Color_0).get_ghostwhite_b9ngjh_k$ = function () {
    return Color_1('ghostwhite');
  };
  protoOf(Color_0).get_goldenrod_cnlggb_k$ = function () {
    return Color_1('goldenrod');
  };
  protoOf(Color_0).get_gold_woms2x_k$ = function () {
    return Color_1('gold');
  };
  protoOf(Color_0).get_gray_womu24_k$ = function () {
    return Color_1('gray');
  };
  protoOf(Color_0).get_green_is36qi_k$ = function () {
    return Color_1('green');
  };
  protoOf(Color_0).get_greenyellow_5bsysy_k$ = function () {
    return Color_1('greenyellow');
  };
  protoOf(Color_0).get_honeydew_voejes_k$ = function () {
    return Color_1('honeydew');
  };
  protoOf(Color_0).get_hotpink_jg67h6_k$ = function () {
    return Color_1('hotpink');
  };
  protoOf(Color_0).get_indianred_3a95lb_k$ = function () {
    return Color_1('indianred');
  };
  protoOf(Color_0).get_indigo_etpvbv_k$ = function () {
    return Color_1('indigo');
  };
  protoOf(Color_0).get_ivory_it9jls_k$ = function () {
    return Color_1('ivory');
  };
  protoOf(Color_0).get_khaki_iu3wex_k$ = function () {
    return Color_1('khaki');
  };
  protoOf(Color_0).get_lavenderblush_x9vfqo_k$ = function () {
    return Color_1('lavenderblush');
  };
  protoOf(Color_0).get_lavender_gamgsw_k$ = function () {
    return Color_1('lavender');
  };
  protoOf(Color_0).get_lawngreen_qrrc9a_k$ = function () {
    return Color_1('lawngreen');
  };
  protoOf(Color_0).get_lemonchiffon_bkotvd_k$ = function () {
    return Color_1('lemonchiffon');
  };
  protoOf(Color_0).get_lightblue_jv04av_k$ = function () {
    return Color_1('lightblue');
  };
  protoOf(Color_0).get_lightcoral_nkb53w_k$ = function () {
    return Color_1('lightcoral');
  };
  protoOf(Color_0).get_lightcyan_jv10gg_k$ = function () {
    return Color_1('lightcyan');
  };
  protoOf(Color_0).get_lightgoldenrodyellow_u5ont1_k$ = function () {
    return Color_1('lightgoldenrodyellow');
  };
  protoOf(Color_0).get_lightgray_jv3f80_k$ = function () {
    return Color_1('lightgray');
  };
  protoOf(Color_0).get_lightgreen_ni2bbe_k$ = function () {
    return Color_1('lightgreen');
  };
  protoOf(Color_0).get_lightpink_jv8zqb_k$ = function () {
    return Color_1('lightpink');
  };
  protoOf(Color_0).get_lightsalmon_ctjlgl_k$ = function () {
    return Color_1('lightsalmon');
  };
  protoOf(Color_0).get_lightseagreen_l37xtt_k$ = function () {
    return Color_1('lightseagreen');
  };
  protoOf(Color_0).get_lightskyblue_xo7be6_k$ = function () {
    return Color_1('lightskyblue');
  };
  protoOf(Color_0).get_lightslategray_94c373_k$ = function () {
    return Color_1('lightslategray');
  };
  protoOf(Color_0).get_lightsteelblue_7ajpzs_k$ = function () {
    return Color_1('lightsteelblue');
  };
  protoOf(Color_0).get_lightyellow_9x2pgf_k$ = function () {
    return Color_1('lightyellow');
  };
  protoOf(Color_0).get_limegreen_za9mzp_k$ = function () {
    return Color_1('limegreen');
  };
  protoOf(Color_0).get_lime_wopula_k$ = function () {
    return Color_1('lime');
  };
  protoOf(Color_0).get_linen_iuolht_k$ = function () {
    return Color_1('linen');
  };
  protoOf(Color_0).get_magenta_ez2mdc_k$ = function () {
    return Color_1('magenta');
  };
  protoOf(Color_0).get_maroon_gj03nd_k$ = function () {
    return Color_1('maroon');
  };
  protoOf(Color_0).get_mediumaquamarine_5rzm9o_k$ = function () {
    return Color_1('mediumaquamarine');
  };
  protoOf(Color_0).get_mediumblue_lkyztk_k$ = function () {
    return Color_1('mediumblue');
  };
  protoOf(Color_0).get_mediumorchid_61uowx_k$ = function () {
    return Color_1('mediumorchid');
  };
  protoOf(Color_0).get_mediumpurple_6ktfwa_k$ = function () {
    return Color_1('mediumpurple');
  };
  protoOf(Color_0).get_mediumseagreen_eiyd7y_k$ = function () {
    return Color_1('mediumseagreen');
  };
  protoOf(Color_0).get_mediumslateblue_tihwln_k$ = function () {
    return Color_1('mediumslateblue');
  };
  protoOf(Color_0).get_mediumspringgreen_eyoffs_k$ = function () {
    return Color_1('mediumspringgreen');
  };
  protoOf(Color_0).get_mediumturquoise_m5ywyr_k$ = function () {
    return Color_1('mediumturquoise');
  };
  protoOf(Color_0).get_mediumvioletred_3y6scs_k$ = function () {
    return Color_1('mediumvioletred');
  };
  protoOf(Color_0).get_midnightblue_asvt6b_k$ = function () {
    return Color_1('midnightblue');
  };
  protoOf(Color_0).get_mintcream_r411vb_k$ = function () {
    return Color_1('mintcream');
  };
  protoOf(Color_0).get_mistyrose_tt03wi_k$ = function () {
    return Color_1('mistyrose');
  };
  protoOf(Color_0).get_moccasin_shacrm_k$ = function () {
    return Color_1('moccasin');
  };
  protoOf(Color_0).get_navajowhite_7mwunx_k$ = function () {
    return Color_1('navajowhite');
  };
  protoOf(Color_0).get_navi_woqyun_k$ = function () {
    return Color_1('navi');
  };
  protoOf(Color_0).get_oldlace_lja7qj_k$ = function () {
    return Color_1('oldlace');
  };
  protoOf(Color_0).get_olivedrab_imctun_k$ = function () {
    return Color_1('olivedrab');
  };
  protoOf(Color_0).get_olive_iwdsxe_k$ = function () {
    return Color_1('olive');
  };
  protoOf(Color_0).get_orange_hq4yt3_k$ = function () {
    return Color_1('orange');
  };
  protoOf(Color_0).get_orangered_x4yzui_k$ = function () {
    return Color_1('orangered');
  };
  protoOf(Color_0).get_orchid_hq64do_k$ = function () {
    return Color_1('orchid');
  };
  protoOf(Color_0).get_palegoldenrod_a3qfbf_k$ = function () {
    return Color_1('palegoldenrod');
  };
  protoOf(Color_0).get_palegreen_plzr00_k$ = function () {
    return Color_1('palegreen');
  };
  protoOf(Color_0).get_paleturquoise_uz11qm_k$ = function () {
    return Color_1('paleturquoise');
  };
  protoOf(Color_0).get_palevioletred_4uvcf3_k$ = function () {
    return Color_1('palevioletred');
  };
  protoOf(Color_0).get_papayawhip_6f4lm3_k$ = function () {
    return Color_1('papayawhip');
  };
  protoOf(Color_0).get_peachpuff_lhfvhv_k$ = function () {
    return Color_1('peachpuff');
  };
  protoOf(Color_0).get_peru_wosbpd_k$ = function () {
    return Color_1('peru');
  };
  protoOf(Color_0).get_pink_wosekf_k$ = function () {
    return Color_1('pink');
  };
  protoOf(Color_0).get_plum_wosgyl_k$ = function () {
    return Color_1('plum');
  };
  protoOf(Color_0).get_powderblue_xfkoo4_k$ = function () {
    return Color_1('powderblue');
  };
  protoOf(Color_0).get_purple_i94vd1_k$ = function () {
    return Color_1('purple');
  };
  protoOf(Color_0).get_rebeccapurple_4oj1nm_k$ = function () {
    return Color_1('rebeccapurple');
  };
  protoOf(Color_0).get_red_18ix20_k$ = function () {
    return Color_1('red');
  };
  protoOf(Color_0).get_rosybrown_fqcd86_k$ = function () {
    return Color_1('rosybrown');
  };
  protoOf(Color_0).get_royalblue_9wxzgo_k$ = function () {
    return Color_1('royalblue');
  };
  protoOf(Color_0).get_saddlebrown_anoxye_k$ = function () {
    return Color_1('saddlebrown');
  };
  protoOf(Color_0).get_salmon_jd5ylz_k$ = function () {
    return Color_1('salmon');
  };
  protoOf(Color_0).get_sandybrown_gxgn12_k$ = function () {
    return Color_1('sandybrown');
  };
  protoOf(Color_0).get_seagreen_h9n76r_k$ = function () {
    return Color_1('seagreen');
  };
  protoOf(Color_0).get_seashell_h381rq_k$ = function () {
    return Color_1('seashell');
  };
  protoOf(Color_0).get_sienna_jhfv5n_k$ = function () {
    return Color_1('sienna');
  };
  protoOf(Color_0).get_silver_jhkhsm_k$ = function () {
    return Color_1('silver');
  };
  protoOf(Color_0).get_skyblue_y0h81a_k$ = function () {
    return Color_1('skyblue');
  };
  protoOf(Color_0).get_slateblue_rkcedm_k$ = function () {
    return Color_1('slateblue');
  };
  protoOf(Color_0).get_slategray_rkfpar_k$ = function () {
    return Color_1('slategray');
  };
  protoOf(Color_0).get_snow_wouf9o_k$ = function () {
    return Color_1('snow');
  };
  protoOf(Color_0).get_springgreen_21calp_k$ = function () {
    return Color_1('springgreen');
  };
  protoOf(Color_0).get_steelblue_pqnc3g_k$ = function () {
    return Color_1('steelblue');
  };
  protoOf(Color_0).get_teal_wouv8l_k$ = function () {
    return Color_1('teal');
  };
  protoOf(Color_0).get_thistle_kzphzu_k$ = function () {
    return Color_1('thistle');
  };
  protoOf(Color_0).get_tomato_k1x3ir_k$ = function () {
    return Color_1('tomato');
  };
  protoOf(Color_0).get_turquoise_87p5yw_k$ = function () {
    return Color_1('turquoise');
  };
  protoOf(Color_0).get_violet_kwr2iw_k$ = function () {
    return Color_1('violet');
  };
  protoOf(Color_0).get_wheat_j0pi9q_k$ = function () {
    return Color_1('wheat');
  };
  protoOf(Color_0).get_white_j0plog_k$ = function () {
    return Color_1('white');
  };
  protoOf(Color_0).get_whitesmoke_flfij5_k$ = function () {
    return Color_1('whitesmoke');
  };
  protoOf(Color_0).get_yellowgreen_5hm6jq_k$ = function () {
    return Color_1('yellowgreen');
  };
  protoOf(Color_0).get_yellow_m9mum5_k$ = function () {
    return Color_1('yellow');
  };
  protoOf(Color_0).get_transparent_enj387_k$ = function () {
    return Color_1('transparent');
  };
  protoOf(Color_0).get_currentColor_semt9v_k$ = function () {
    return Color_1('currentColor');
  };
  var Color_instance_0;
  function Color_getInstance_0() {
    if (Color_instance_0 == null)
      new Color_0();
    return Color_instance_0;
  }
  function Color_1(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return name;
  }
  function StylePropertyValue(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function StylePropertyValue_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function StyleHolder() {
  }
  function StyleScope() {
  }
  function StylePropertyDeclaration_init_$Init$(name, value, $this) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    StylePropertyDeclaration.call($this, name, value);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$(name, value) {
    return StylePropertyDeclaration_init_$Init$(name, value, objectCreate(protoOf(StylePropertyDeclaration)));
  }
  function StylePropertyDeclaration_init_$Init$_0(name, value, $this) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    StylePropertyDeclaration.call($this, name, value);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$_0(name, value) {
    return StylePropertyDeclaration_init_$Init$_0(name, value, objectCreate(protoOf(StylePropertyDeclaration)));
  }
  function get_$stableprop_48() {
    return 8;
  }
  function StylePropertyDeclaration(name, value) {
    this.name_1 = name;
    this.value_1 = value;
    this.$stable_1 = 8;
  }
  protoOf(StylePropertyDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StylePropertyDeclaration).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(StylePropertyDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(StylePropertyDeclaration).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(StylePropertyDeclaration).copy_jp7ayt_k$ = function (name, value) {
    return new StylePropertyDeclaration(name, value);
  };
  protoOf(StylePropertyDeclaration).copy$default_76k51p_k$ = function (name, value, $super) {
    name = name === VOID ? this.name_1 : name;
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_jp7ayt_k$(name, value) : $super.copy_jp7ayt_k$.call(this, name, value);
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.name_1 + ', value=' + this.value_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function get_$stableprop_49() {
    return 0;
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.properties_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.variables_1 = ArrayList_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(StyleScopeBuilder).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(StyleScopeBuilder).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(StyleScopeBuilder).property_npxg1h_k$ = function (propertyName, value) {
    this.get_properties_zhllqc_k$().add_utx5q5_k$(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).variable_px6kuc_k$ = function (variableName, value) {
    this.get_variables_75f0zy_k$().add_utx5q5_k$(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.get_properties_zhllqc_k$(), other.get_properties_zhllqc_k$()) ? nativeEquals(this.get_variables_75f0zy_k$(), other.get_variables_75f0zy_k$()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StyleScopeBuilder).copyFrom_7yuly6_k$ = function (sb) {
    this.get_properties_zhllqc_k$().addAll_4lagoh_k$(sb.get_properties_zhllqc_k$());
    this.get_variables_75f0zy_k$().addAll_4lagoh_k$(sb.get_variables_75f0zy_k$());
  };
  function get_$stableprop_50() {
    return 0;
  }
  function CSSStyleVariable(name) {
    this.name_1 = name;
    this.$stable_1 = 0;
  }
  protoOf(CSSStyleVariable).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.get_size_woubt6_k$() === properties.get_size_woubt6_k$()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.get_c1px32_k$(tmp0);
        if (!(element.name_1 === otherProp.name_1 ? toString(element.value_1) === toString(otherProp.value_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function CSSVariable() {
  }
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function get_$stableprop_51() {
    return 8;
  }
  function StyleSheetBuilderImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.cssRules_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(StyleSheetBuilderImpl).get_cssRules_jdoznh_k$ = function () {
    return this.cssRules_1;
  };
  protoOf(StyleSheetBuilderImpl).add_19esmm_k$ = function (cssRule) {
    this.get_cssRules_jdoznh_k$().add_utx5q5_k$(cssRule);
  };
  protoOf(StyleSheetBuilderImpl).buildRules_fgavxj_k$ = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new StyleSheetBuilderImpl();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(this_0);
    return this_0.get_cssRules_jdoznh_k$();
  };
  protoOf(StyleSheetBuilderImpl).buildRules_xiubel_k$ = function (rulesBuild) {
    return this.buildRules_fgavxj_k$(rulesBuild);
  };
  protoOf(StyleSheetBuilderImpl).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  function StyleSheetBuilder() {
  }
  function SelectorsScope() {
  }
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.selector_1 = selector;
  }
  protoOf(RawSelector).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).toString = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).component1_7eebsc_k$ = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).copy_a35qlh_k$ = function (selector) {
    return new RawSelector(selector);
  };
  protoOf(RawSelector).copy$default_o88rc3_k$ = function (selector, $super) {
    selector = selector === VOID ? this.selector_1 : selector;
    return $super === VOID ? this.copy_a35qlh_k$(selector) : $super.copy_a35qlh_k$.call(this, selector);
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.selector_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.selector_1 === tmp0_other_with_cast.selector_1))
      return false;
    return true;
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function Combine$asString$lambda(it) {
    return it.asString_l3f38d_k$();
  }
  function Combine_0(selectors) {
    CSSSelector.call(this);
    this.selectors_1 = selectors;
  }
  protoOf(Combine_0).get_selectors_jv45rp_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Combine_0).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, this.selectors_1);
  };
  protoOf(Combine_0).toString = function () {
    return joinToString(this.selectors_1, '');
  };
  protoOf(Combine_0).asString_l3f38d_k$ = function () {
    return joinToString(this.selectors_1, '', VOID, VOID, VOID, VOID, Combine$asString$lambda);
  };
  protoOf(Combine_0).component1_7eebsc_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Combine_0).copy_4xkryr_k$ = function (selectors) {
    return new Combine_0(selectors);
  };
  protoOf(Combine_0).copy$default_4g1j7r_k$ = function (selectors, $super) {
    selectors = selectors === VOID ? this.selectors_1 : selectors;
    return $super === VOID ? this.copy_4xkryr_k$(selectors) : $super.copy_4xkryr_k$.call(this, selectors);
  };
  protoOf(Combine_0).hashCode = function () {
    return hashCode(this.selectors_1);
  };
  protoOf(Combine_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine_0))
      return false;
    var tmp0_other_with_cast = other instanceof Combine_0 ? other : THROW_CCE();
    if (!equals(this.selectors_1, tmp0_other_with_cast.selectors_1))
      return false;
    return true;
  };
  function Attribute(name, value, operator, caseSensitive) {
    value = value === VOID ? null : value;
    operator = operator === VOID ? Operator_Equals_getInstance() : operator;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    CSSSelector.call(this);
    this.name_1 = name;
    this.value_1 = value;
    this.operator_1 = operator;
    this.caseSensitive_1 = caseSensitive;
  }
  protoOf(Attribute).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Attribute).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Attribute).get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  protoOf(Attribute).get_caseSensitive_1sy9cz_k$ = function () {
    return this.caseSensitive_1;
  };
  protoOf(Attribute).toString = function () {
    var tmp;
    if (this.value_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.Attribute.toString.<anonymous>' call
      tmp = this.operator_1.get_value_j01efc_k$() + this.value_1 + (!this.caseSensitive_1 ? ' i' : '');
    }
    var tmp1_elvis_lhs = tmp;
    var valueStr = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return '[' + this.name_1 + valueStr + ']';
  };
  protoOf(Attribute).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(Attribute).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(Attribute).component3_7eebsa_k$ = function () {
    return this.operator_1;
  };
  protoOf(Attribute).component4_7eebs9_k$ = function () {
    return this.caseSensitive_1;
  };
  protoOf(Attribute).copy_q0knhz_k$ = function (name, value, operator, caseSensitive) {
    return new Attribute(name, value, operator, caseSensitive);
  };
  protoOf(Attribute).copy$default_cesbfb_k$ = function (name, value, operator, caseSensitive, $super) {
    name = name === VOID ? this.name_1 : name;
    value = value === VOID ? this.value_1 : value;
    operator = operator === VOID ? this.operator_1 : operator;
    caseSensitive = caseSensitive === VOID ? this.caseSensitive_1 : caseSensitive;
    return $super === VOID ? this.copy_q0knhz_k$(name, value, operator, caseSensitive) : $super.copy_q0knhz_k$.call(this, name, value, operator, caseSensitive);
  };
  protoOf(Attribute).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : getStringHashCode(this.value_1)) | 0;
    result = imul(result, 31) + this.operator_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.caseSensitive_1) | 0;
    return result;
  };
  protoOf(Attribute).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Attribute))
      return false;
    var tmp0_other_with_cast = other instanceof Attribute ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.value_1 == tmp0_other_with_cast.value_1))
      return false;
    if (!this.operator_1.equals(tmp0_other_with_cast.operator_1))
      return false;
    if (!(this.caseSensitive_1 === tmp0_other_with_cast.caseSensitive_1))
      return false;
    return true;
  };
  function Group$asString$lambda(it) {
    return it.asString_l3f38d_k$();
  }
  function Group(selectors) {
    CSSSelector.call(this);
    this.selectors_1 = selectors;
  }
  protoOf(Group).get_selectors_jv45rp_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Group).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, this.selectors_1);
  };
  protoOf(Group).toString = function () {
    return joinToString(this.selectors_1, ', ');
  };
  protoOf(Group).asString_l3f38d_k$ = function () {
    return joinToString(this.selectors_1, ', ', VOID, VOID, VOID, VOID, Group$asString$lambda);
  };
  protoOf(Group).component1_7eebsc_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Group).copy_8acutw_k$ = function (selectors) {
    return new Group(selectors);
  };
  protoOf(Group).copy$default_kof9uc_k$ = function (selectors, $super) {
    selectors = selectors === VOID ? this.selectors_1 : selectors;
    return $super === VOID ? this.copy_8acutw_k$(selectors) : $super.copy_8acutw_k$.call(this, selectors);
  };
  protoOf(Group).hashCode = function () {
    return hashCode(this.selectors_1);
  };
  protoOf(Group).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Group))
      return false;
    var tmp0_other_with_cast = other instanceof Group ? other : THROW_CCE();
    if (!equals(this.selectors_1, tmp0_other_with_cast.selectors_1))
      return false;
    return true;
  };
  function Descendant(parent, selected) {
    CSSSelector.call(this);
    this.parent_1 = parent;
    this.selected_1 = selected;
  }
  protoOf(Descendant).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Descendant).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Descendant).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf([this.parent_1, this.selected_1]));
  };
  protoOf(Descendant).toString = function () {
    return '' + this.parent_1 + ' ' + this.selected_1;
  };
  protoOf(Descendant).asString_l3f38d_k$ = function () {
    return this.parent_1.asString_l3f38d_k$() + ' ' + this.selected_1.asString_l3f38d_k$();
  };
  protoOf(Descendant).component1_7eebsc_k$ = function () {
    return this.parent_1;
  };
  protoOf(Descendant).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Descendant).copy_7h89qt_k$ = function (parent, selected) {
    return new Descendant(parent, selected);
  };
  protoOf(Descendant).copy$default_6szacg_k$ = function (parent, selected, $super) {
    parent = parent === VOID ? this.parent_1 : parent;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_7h89qt_k$(parent, selected) : $super.copy_7h89qt_k$.call(this, parent, selected);
  };
  protoOf(Descendant).hashCode = function () {
    var result = hashCode(this.parent_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Descendant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Descendant))
      return false;
    var tmp0_other_with_cast = other instanceof Descendant ? other : THROW_CCE();
    if (!equals(this.parent_1, tmp0_other_with_cast.parent_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Child(parent, selected) {
    CSSSelector.call(this);
    this.parent_1 = parent;
    this.selected_1 = selected;
  }
  protoOf(Child).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Child).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Child).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf([this.parent_1, this.selected_1]));
  };
  protoOf(Child).toString = function () {
    return '' + this.parent_1 + ' > ' + this.selected_1;
  };
  protoOf(Child).asString_l3f38d_k$ = function () {
    return this.parent_1.asString_l3f38d_k$() + ' > ' + this.selected_1.asString_l3f38d_k$();
  };
  protoOf(Child).component1_7eebsc_k$ = function () {
    return this.parent_1;
  };
  protoOf(Child).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Child).copy_7h89qt_k$ = function (parent, selected) {
    return new Child(parent, selected);
  };
  protoOf(Child).copy$default_f33f2d_k$ = function (parent, selected, $super) {
    parent = parent === VOID ? this.parent_1 : parent;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_7h89qt_k$(parent, selected) : $super.copy_7h89qt_k$.call(this, parent, selected);
  };
  protoOf(Child).hashCode = function () {
    var result = hashCode(this.parent_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Child).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Child))
      return false;
    var tmp0_other_with_cast = other instanceof Child ? other : THROW_CCE();
    if (!equals(this.parent_1, tmp0_other_with_cast.parent_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Sibling(prev, selected) {
    CSSSelector.call(this);
    this.prev_1 = prev;
    this.selected_1 = selected;
  }
  protoOf(Sibling).get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  protoOf(Sibling).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Sibling).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf([this.prev_1, this.selected_1]));
  };
  protoOf(Sibling).toString = function () {
    return '' + this.prev_1 + ' ~ ' + this.selected_1;
  };
  protoOf(Sibling).asString_l3f38d_k$ = function () {
    return this.prev_1.asString_l3f38d_k$() + ' ~ ' + this.selected_1.asString_l3f38d_k$();
  };
  protoOf(Sibling).component1_7eebsc_k$ = function () {
    return this.prev_1;
  };
  protoOf(Sibling).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Sibling).copy_7h89qt_k$ = function (prev, selected) {
    return new Sibling(prev, selected);
  };
  protoOf(Sibling).copy$default_aesmvp_k$ = function (prev, selected, $super) {
    prev = prev === VOID ? this.prev_1 : prev;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_7h89qt_k$(prev, selected) : $super.copy_7h89qt_k$.call(this, prev, selected);
  };
  protoOf(Sibling).hashCode = function () {
    var result = hashCode(this.prev_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Sibling).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Sibling))
      return false;
    var tmp0_other_with_cast = other instanceof Sibling ? other : THROW_CCE();
    if (!equals(this.prev_1, tmp0_other_with_cast.prev_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Adjacent(prev, selected) {
    CSSSelector.call(this);
    this.prev_1 = prev;
    this.selected_1 = selected;
  }
  protoOf(Adjacent).get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  protoOf(Adjacent).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Adjacent).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf([this.prev_1, this.selected_1]));
  };
  protoOf(Adjacent).toString = function () {
    return '' + this.prev_1 + ' + ' + this.selected_1;
  };
  protoOf(Adjacent).asString_l3f38d_k$ = function () {
    return this.prev_1.asString_l3f38d_k$() + ' + ' + this.selected_1.asString_l3f38d_k$();
  };
  protoOf(Adjacent).component1_7eebsc_k$ = function () {
    return this.prev_1;
  };
  protoOf(Adjacent).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Adjacent).copy_7h89qt_k$ = function (prev, selected) {
    return new Adjacent(prev, selected);
  };
  protoOf(Adjacent).copy$default_7kk18l_k$ = function (prev, selected, $super) {
    prev = prev === VOID ? this.prev_1 : prev;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_7h89qt_k$(prev, selected) : $super.copy_7h89qt_k$.call(this, prev, selected);
  };
  protoOf(Adjacent).hashCode = function () {
    var result = hashCode(this.prev_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Adjacent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Adjacent))
      return false;
    var tmp0_other_with_cast = other instanceof Adjacent ? other : THROW_CCE();
    if (!equals(this.prev_1, tmp0_other_with_cast.prev_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function get_$stableprop_52() {
    return 0;
  }
  function get_$stableprop_53() {
    return 8;
  }
  function get_$stableprop_54() {
    return 8;
  }
  function get_$stableprop_55() {
    return 8;
  }
  function get_$stableprop_56() {
    return 8;
  }
  function get_$stableprop_57() {
    return 0;
  }
  function get_$stableprop_58() {
    return 0;
  }
  function Lang(langCode) {
    PseudoClassInternal.call(this, 'lang');
    this.langCode_1 = langCode;
    this.$stable_2 = 0;
  }
  protoOf(Lang).get_langCode_ciluis_k$ = function () {
    return this.langCode_1;
  };
  protoOf(Lang).argsStr_cb0nvw_k$ = function () {
    return this.langCode_1;
  };
  function NthChild(nth) {
    PseudoClassInternal.call(this, 'nth-child');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthChild).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthChild).argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthLastChild(nth) {
    PseudoClassInternal.call(this, 'nth-last-child');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthLastChild).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthLastChild).argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthOfType(nth) {
    PseudoClassInternal.call(this, 'nth-of-type');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthOfType).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthOfType).argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthLastOfType(nth) {
    PseudoClassInternal.call(this, 'nth-last-of-type');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthLastOfType).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthLastOfType).argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function Host(selector) {
    PseudoClassInternal.call(this, 'host');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Host).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Host).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Host).argsStr_cb0nvw_k$ = function () {
    return this.selector_1.asString_l3f38d_k$();
  };
  function Not(selector) {
    PseudoClassInternal.call(this, 'not');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Not).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Not).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Not).argsStr_cb0nvw_k$ = function () {
    return '' + this.selector_1;
  };
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.name_1 = name;
  }
  protoOf(PseudoClassInternal).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.name_1 === other.name_1 ? this.argsStr_cb0nvw_k$() == other.argsStr_cb0nvw_k$() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).argsStr_cb0nvw_k$ = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.argsStr_cb0nvw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function get_$stableprop_59() {
    return 0;
  }
  function Slotted(selector) {
    PseudoElementInternal.call(this, 'slotted');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Slotted).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Slotted).contains_tee0f8_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Slotted).argsStr_cb0nvw_k$ = function () {
    return this.selector_1.asString_l3f38d_k$();
  };
  function PseudoElementInternal(name) {
    CSSSelector.call(this);
    this.name_1 = name;
  }
  protoOf(PseudoElementInternal).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PseudoElementInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoElementInternal) {
      tmp = this.name_1 === other.name_1 ? this.argsStr_cb0nvw_k$() == other.argsStr_cb0nvw_k$() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoElementInternal).argsStr_cb0nvw_k$ = function () {
    return null;
  };
  protoOf(PseudoElementInternal).toString = function () {
    var tmp0_safe_receiver = this.argsStr_cb0nvw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoElementInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '::' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('background-color', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('height', value);
  }
  function width(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('width', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('max-width', value);
  }
  function color(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('color', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('align-items', alignItems);
  }
  function flex(_this__u8e3s4, value) {
    _this__u8e3s4.property_jk9dw6_k$('flex', value);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('justify-content', justifyContent);
  }
  function marginTop(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-top', value);
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-bottom', value);
  }
  function marginLeft(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-left', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('margin', joinToString_0(value, ' '));
  }
  function overflow(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('overflow', value);
  }
  function overflowY(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('overflow-y', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('position', position);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('display', displayStyle);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('font-size', value);
  }
  function textAlign(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('text-align', value);
  }
  function fontWeight(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('font-weight', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function get_selectorScope() {
    _init_properties_CSSSelectors_kt__t1yksx();
    return selectorScope;
  }
  var selectorScope;
  var Operator_Equals_instance;
  var Operator_ListContains_instance;
  var Operator_Hyphened_instance;
  var Operator_Prefixed_instance;
  var Operator_Suffixed_instance;
  var Operator_Contains_instance;
  function values_1() {
    return [Operator_Equals_getInstance(), Operator_ListContains_getInstance(), Operator_Hyphened_getInstance(), Operator_Prefixed_getInstance(), Operator_Suffixed_getInstance(), Operator_Contains_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Equals':
        return Operator_Equals_getInstance();
      case 'ListContains':
        return Operator_ListContains_getInstance();
      case 'Hyphened':
        return Operator_Hyphened_getInstance();
      case 'Prefixed':
        return Operator_Prefixed_getInstance();
      case 'Suffixed':
        return Operator_Suffixed_getInstance();
      case 'Contains':
        return Operator_Contains_getInstance();
      default:
        Operator_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Operator_entriesInitialized;
  function Operator_initEntries() {
    if (Operator_entriesInitialized)
      return Unit_getInstance();
    Operator_entriesInitialized = true;
    Operator_Equals_instance = new Operator('Equals', 0, '=');
    Operator_ListContains_instance = new Operator('ListContains', 1, '~=');
    Operator_Hyphened_instance = new Operator('Hyphened', 2, '|=');
    Operator_Prefixed_instance = new Operator('Prefixed', 3, '^=');
    Operator_Suffixed_instance = new Operator('Suffixed', 4, '$=');
    Operator_Contains_instance = new Operator('Contains', 5, '*=');
  }
  function Operator(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Operator).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function get_$stableprop_60() {
    return 0;
  }
  function Operator_Equals_getInstance() {
    Operator_initEntries();
    return Operator_Equals_instance;
  }
  function Operator_ListContains_getInstance() {
    Operator_initEntries();
    return Operator_ListContains_instance;
  }
  function Operator_Hyphened_getInstance() {
    Operator_initEntries();
    return Operator_Hyphened_instance;
  }
  function Operator_Prefixed_getInstance() {
    Operator_initEntries();
    return Operator_Prefixed_instance;
  }
  function Operator_Suffixed_getInstance() {
    Operator_initEntries();
    return Operator_Suffixed_instance;
  }
  function Operator_Contains_getInstance() {
    Operator_initEntries();
    return Operator_Contains_instance;
  }
  function get_$stableprop_61() {
    return 0;
  }
  function get_$stableprop_62() {
    return 0;
  }
  function Attribute_0() {
    Attribute_instance = this;
    this.$stable_1 = 0;
  }
  var Attribute_instance;
  function Attribute_getInstance() {
    if (Attribute_instance == null)
      new Attribute_0();
    return Attribute_instance;
  }
  function PseudoClass() {
    PseudoClass_instance = this;
    this.anyLink_1 = get_selectorScope().get_anyLink_cofd2b_k$();
    this.link_1 = get_selectorScope().get_link_wopumb_k$();
    this.visited_1 = get_selectorScope().get_visited_8zg8qp_k$();
    this.localLink_1 = get_selectorScope().get_localLink_bf63s4_k$();
    this.target_1 = get_selectorScope().get_target_juba8q_k$();
    this.targetWithin_1 = get_selectorScope().get_targetWithin_2o3zvf_k$();
    this.scope_1 = get_selectorScope().get_scope_iyfcq3_k$();
    this.hover_1 = get_selectorScope().get_hover_islez7_k$();
    this.active_1 = get_selectorScope().get_active_avldsf_k$();
    this.focus_1 = get_selectorScope().get_focus_irhg33_k$();
    this.focusVisible_1 = get_selectorScope().get_focusVisible_5vnmwz_k$();
    this.playing_1 = get_selectorScope().get_playing_6wau9n_k$();
    this.paused_1 = get_selectorScope().get_paused_hy6yif_k$();
    this.autofill_1 = get_selectorScope().get_autofill_801dad_k$();
    this.enabled_1 = get_selectorScope().get_enabled_pcr8o8_k$();
    this.disabled_1 = get_selectorScope().get_disabled_rbmjej_k$();
    this.readOnly_1 = get_selectorScope().get_readOnly_ovku97_k$();
    this.readWrite_1 = get_selectorScope().get_readWrite_a0tpds_k$();
    this.placeholderShown_1 = get_selectorScope().get_placeholderShown_1kc3x5_k$();
    this.default_1 = get_selectorScope().get_default_qtagd4_k$();
    this.checked_1 = get_selectorScope().get_checked_djib3y_k$();
    this.indeterminate_1 = get_selectorScope().get_indeterminate_997h5e_k$();
    this.blank_1 = get_selectorScope().get_blank_ip8b3f_k$();
    this.valid_1 = get_selectorScope().get_valid_j01e4z_k$();
    this.invalid_1 = get_selectorScope().get_invalid_xocxse_k$();
    this.inRange_1 = get_selectorScope().get_invalid_xocxse_k$();
    this.outOfRange_1 = get_selectorScope().get_outOfRange_z0zuv5_k$();
    this.required_1 = get_selectorScope().get_required_wq3z3c_k$();
    this.optional_1 = get_selectorScope().get_optional_x3zcnr_k$();
    this.userInvalid_1 = get_selectorScope().get_userInvalid_tptv3x_k$();
    this.root_1 = get_selectorScope().get_root_wott0r_k$();
    this.empty_1 = get_selectorScope().get_empty_iqwn50_k$();
    this.first_1 = get_selectorScope().get_first_irdx8n_k$();
    this.firstChild_1 = get_selectorScope().get_firstChild_n9lgdn_k$();
    this.lastChild_1 = get_selectorScope().get_lastChild_tniydf_k$();
    this.onlyChild_1 = get_selectorScope().get_onlyChild_cxh5if_k$();
    this.firstOfType_1 = get_selectorScope().get_firstOfType_5b9t60_k$();
    this.lastOfType_1 = get_selectorScope().get_lastOfType_9s7uy8_k$();
    this.onlyOfType_1 = get_selectorScope().get_onlyOfType_jptu62_k$();
    this.host_1 = get_selectorScope().get_host_wonf8x_k$();
    this.defined_1 = get_selectorScope().get_defined_qtfew0_k$();
    this.left_1 = get_selectorScope().get_left_woprgw_k$();
    this.right_1 = get_selectorScope().get_right_ixz7xv_k$();
    this.$stable_1 = 0;
  }
  protoOf(PseudoClass).get_anyLink_cofd2b_k$ = function () {
    return this.anyLink_1;
  };
  protoOf(PseudoClass).get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  protoOf(PseudoClass).get_visited_8zg8qp_k$ = function () {
    return this.visited_1;
  };
  protoOf(PseudoClass).get_localLink_bf63s4_k$ = function () {
    return this.localLink_1;
  };
  protoOf(PseudoClass).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(PseudoClass).get_targetWithin_2o3zvf_k$ = function () {
    return this.targetWithin_1;
  };
  protoOf(PseudoClass).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(PseudoClass).get_hover_islez7_k$ = function () {
    return this.hover_1;
  };
  protoOf(PseudoClass).get_active_avldsf_k$ = function () {
    return this.active_1;
  };
  protoOf(PseudoClass).get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  protoOf(PseudoClass).get_focusVisible_5vnmwz_k$ = function () {
    return this.focusVisible_1;
  };
  protoOf(PseudoClass).get_playing_6wau9n_k$ = function () {
    return this.playing_1;
  };
  protoOf(PseudoClass).get_paused_hy6yif_k$ = function () {
    return this.paused_1;
  };
  protoOf(PseudoClass).get_autofill_801dad_k$ = function () {
    return this.autofill_1;
  };
  protoOf(PseudoClass).get_enabled_pcr8o8_k$ = function () {
    return this.enabled_1;
  };
  protoOf(PseudoClass).get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  protoOf(PseudoClass).get_readOnly_ovku97_k$ = function () {
    return this.readOnly_1;
  };
  protoOf(PseudoClass).get_readWrite_a0tpds_k$ = function () {
    return this.readWrite_1;
  };
  protoOf(PseudoClass).get_placeholderShown_1kc3x5_k$ = function () {
    return this.placeholderShown_1;
  };
  protoOf(PseudoClass).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(PseudoClass).get_checked_djib3y_k$ = function () {
    return this.checked_1;
  };
  protoOf(PseudoClass).get_indeterminate_997h5e_k$ = function () {
    return this.indeterminate_1;
  };
  protoOf(PseudoClass).get_blank_ip8b3f_k$ = function () {
    return this.blank_1;
  };
  protoOf(PseudoClass).get_valid_j01e4z_k$ = function () {
    return this.valid_1;
  };
  protoOf(PseudoClass).get_invalid_xocxse_k$ = function () {
    return this.invalid_1;
  };
  protoOf(PseudoClass).get_inRange_x4kdv3_k$ = function () {
    return this.inRange_1;
  };
  protoOf(PseudoClass).get_outOfRange_z0zuv5_k$ = function () {
    return this.outOfRange_1;
  };
  protoOf(PseudoClass).get_required_wq3z3c_k$ = function () {
    return this.required_1;
  };
  protoOf(PseudoClass).get_optional_x3zcnr_k$ = function () {
    return this.optional_1;
  };
  protoOf(PseudoClass).get_userInvalid_tptv3x_k$ = function () {
    return this.userInvalid_1;
  };
  protoOf(PseudoClass).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(PseudoClass).get_empty_iqwn50_k$ = function () {
    return this.empty_1;
  };
  protoOf(PseudoClass).get_first_irdx8n_k$ = function () {
    return this.first_1;
  };
  protoOf(PseudoClass).get_firstChild_n9lgdn_k$ = function () {
    return this.firstChild_1;
  };
  protoOf(PseudoClass).get_lastChild_tniydf_k$ = function () {
    return this.lastChild_1;
  };
  protoOf(PseudoClass).get_onlyChild_cxh5if_k$ = function () {
    return this.onlyChild_1;
  };
  protoOf(PseudoClass).get_firstOfType_5b9t60_k$ = function () {
    return this.firstOfType_1;
  };
  protoOf(PseudoClass).get_lastOfType_9s7uy8_k$ = function () {
    return this.lastOfType_1;
  };
  protoOf(PseudoClass).get_onlyOfType_jptu62_k$ = function () {
    return this.onlyOfType_1;
  };
  protoOf(PseudoClass).get_host_wonf8x_k$ = function () {
    return this.host_1;
  };
  protoOf(PseudoClass).get_defined_qtfew0_k$ = function () {
    return this.defined_1;
  };
  protoOf(PseudoClass).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(PseudoClass).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  var PseudoClass_instance;
  function PseudoClass_getInstance() {
    if (PseudoClass_instance == null)
      new PseudoClass();
    return PseudoClass_instance;
  }
  function PseudoElement() {
    PseudoElement_instance = this;
    this.after_1 = get_selectorScope().get_after_iol2gj_k$();
    this.before_1 = get_selectorScope().get_before_bdhrwo_k$();
    this.cue_1 = get_selectorScope().get_cue_18j7sm_k$();
    this.cueRegion_1 = get_selectorScope().get_cueRegion_qinivy_k$();
    this.firstLetter_1 = get_selectorScope().get_firstLetter_6qe5bn_k$();
    this.firstLine_1 = get_selectorScope().get_firstLine_apktuj_k$();
    this.fileSelectorButton_1 = get_selectorScope().get_fileSelectorButton_ul3x92_k$();
    this.selection_1 = get_selectorScope().get_selection_jv4aal_k$();
    this.$stable_1 = 0;
  }
  protoOf(PseudoElement).get_after_iol2gj_k$ = function () {
    return this.after_1;
  };
  protoOf(PseudoElement).get_before_bdhrwo_k$ = function () {
    return this.before_1;
  };
  protoOf(PseudoElement).get_cue_18j7sm_k$ = function () {
    return this.cue_1;
  };
  protoOf(PseudoElement).get_cueRegion_qinivy_k$ = function () {
    return this.cueRegion_1;
  };
  protoOf(PseudoElement).get_firstLetter_6qe5bn_k$ = function () {
    return this.firstLetter_1;
  };
  protoOf(PseudoElement).get_firstLine_apktuj_k$ = function () {
    return this.firstLine_1;
  };
  protoOf(PseudoElement).get_fileSelectorButton_ul3x92_k$ = function () {
    return this.fileSelectorButton_1;
  };
  protoOf(PseudoElement).get_selection_jv4aal_k$ = function () {
    return this.selection_1;
  };
  var PseudoElement_instance;
  function PseudoElement_getInstance() {
    if (PseudoElement_instance == null)
      new PseudoElement();
    return PseudoElement_instance;
  }
  function get_$stableprop_63() {
    return 0;
  }
  function CSSSelector() {
    this.$stable_1 = 0;
  }
  protoOf(CSSSelector).contains_tee0f8_k$ = function (other) {
    return this === other;
  };
  protoOf(CSSSelector).contains_ey7crm_k$ = function (that, other, children) {
    var tmp;
    if (that === other) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(children, Collection)) {
          tmp_0 = children.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = children.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'org.jetbrains.compose.web.css.selectors.CSSSelector.contains.<anonymous>' call
          if (element.contains_tee0f8_k$(other)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  protoOf(CSSSelector).asString_l3f38d_k$ = function () {
    return toString(this);
  };
  function FunctionalImpl(a, b) {
    a = a === VOID ? null : a;
    b = b === VOID ? null : b;
    this.a_1 = a;
    this.b_1 = b;
  }
  protoOf(FunctionalImpl).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(FunctionalImpl).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(FunctionalImpl).toString = function () {
    return (!(this.a_1 == null) ? !(this.b_1 == null) : false) ? '' + this.a_1 + 'n+' + this.b_1 : !(this.a_1 == null) ? '' + this.a_1 + 'n' : !(this.b_1 == null) ? '' + this.b_1 : '';
  };
  protoOf(FunctionalImpl).component1_7eebsc_k$ = function () {
    return this.a_1;
  };
  protoOf(FunctionalImpl).component2_7eebsb_k$ = function () {
    return this.b_1;
  };
  protoOf(FunctionalImpl).copy_wvvy1t_k$ = function (a, b) {
    return new FunctionalImpl(a, b);
  };
  protoOf(FunctionalImpl).copy$default_wn6uh1_k$ = function (a, b, $super) {
    a = a === VOID ? this.a_1 : a;
    b = b === VOID ? this.b_1 : b;
    return $super === VOID ? this.copy_wvvy1t_k$(a, b) : $super.copy_wvvy1t_k$.call(this, a, b);
  };
  protoOf(FunctionalImpl).hashCode = function () {
    var result = this.a_1 == null ? 0 : this.a_1;
    result = imul(result, 31) + (this.b_1 == null ? 0 : this.b_1) | 0;
    return result;
  };
  protoOf(FunctionalImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionalImpl))
      return false;
    var tmp0_other_with_cast = other instanceof FunctionalImpl ? other : THROW_CCE();
    if (!(this.a_1 == tmp0_other_with_cast.a_1))
      return false;
    if (!(this.b_1 == tmp0_other_with_cast.b_1))
      return false;
    return true;
  };
  function OddImpl() {
    OddImpl_instance = this;
  }
  protoOf(OddImpl).toString = function () {
    return 'odd';
  };
  var OddImpl_instance;
  function OddImpl_getInstance() {
    if (OddImpl_instance == null)
      new OddImpl();
    return OddImpl_instance;
  }
  function EvenImpl() {
    EvenImpl_instance = this;
  }
  protoOf(EvenImpl).toString = function () {
    return 'even';
  };
  var EvenImpl_instance;
  function EvenImpl_getInstance() {
    if (EvenImpl_instance == null)
      new EvenImpl();
    return EvenImpl_instance;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Odd_1 = OddImpl_getInstance();
    this.Even_1 = EvenImpl_getInstance();
  }
  protoOf(Companion_8).get_Odd_18jn16_k$ = function () {
    return this.Odd_1;
  };
  protoOf(Companion_8).get_Even_wo17k3_k$ = function () {
    return this.Even_1;
  };
  protoOf(Companion_8).Functional_xwpqbx_k$ = function (a, b) {
    return new FunctionalImpl(a, b);
  };
  protoOf(Companion_8).Functional$default_o4esv6_k$ = function (a, b, $super) {
    a = a === VOID ? null : a;
    b = b === VOID ? null : b;
    return $super === VOID ? this.Functional_xwpqbx_k$(a, b) : $super.Functional_xwpqbx_k$.call(this, a, b);
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Nth() {
  }
  function selectorScope$1() {
  }
  var properties_initialized_CSSSelectors_kt_ttgqoj;
  function _init_properties_CSSSelectors_kt__t1yksx() {
    if (!properties_initialized_CSSSelectors_kt_ttgqoj) {
      properties_initialized_CSSSelectors_kt_ttgqoj = true;
      selectorScope = new selectorScope$1();
    }
  }
  function TagElement$composable(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1594897193);
    sourceInformation($composer_0, 'C(TagElement$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1594897193, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement$composable (Base.kt:106)');
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
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startNode_htvs8k_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        var tmp_1 = $composer_2;
        tmp_1.createNode_ahrd54_k$(TagElement$composable$lambda(elementBuilder, scope));
      } else {
        $composer_2.useNode_io5s9l_k$();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var $this$ComposeDomNode = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.get_refEffect_m4bgrp_k$();
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).startReplaceableGroup_ip860b_k$(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode));
      var tmp_2 = attrsScope.get_classes_fds01p_k$();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateClasses$ref());
      var tmp_3 = attrsScope.get_styleScope_i1qedw_k$();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_4 = attrsScope.collect_fp9wdm_k$();
      Updater__set_impl_v7kwss($this$update, tmp_4, DomElementWrapper$updateAttrs$ref());
      var tmp_5 = attrsScope.get_eventsListenerScopeBuilder_j7bhoj_k$().collectListeners_sutf4b_k$();
      Updater__set_impl_v7kwss($this$update, tmp_5, DomElementWrapper$updateEventListeners$ref());
      var tmp_6 = attrsScope.get_propertyUpdates_qy3v4c_k$();
      Updater__set_impl_v7kwss($this$update, tmp_6, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).endReplaceableGroup_ern0ak_k$();
      $composer_2.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.startReplaceableGroup_ip860b_k$(-1128047990);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.endReplaceableGroup_ern0ak_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_2.endNode_3m0yfn_k$();
      var tmp0_safe_receiver = refEffect;
      var tmp_7;
      if (tmp0_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect$composable(null, TagElement$composable$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_7 = Unit_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(TagElement$composable$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function ComposeDomNode$composable(factory, elementScope, attrsSkippableUpdate, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startNode_htvs8k_k$();
    if ($composer_0.get_inserting_25mlsw_k$()) {
      var tmp = $composer_0;
      tmp.createNode_ahrd54_k$(ComposeDomNode$composable$lambda(factory));
    } else {
      $composer_0.useNode_io5s9l_k$();
    }
    attrsSkippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_0)), $composer_0, 112 & $changed >> 3);
    $composer_0.startReplaceableGroup_ip860b_k$(2058660585);
    content(elementScope, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3 | 112 & $changed >> 6);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    $composer_0.endNode_3m0yfn_k$();
  }
  function _set_currentListeners__i9i2pb($this, _set____db54di) {
    $this.currentListeners_1 = _set____db54di;
  }
  function _get_currentListeners__atm6dh($this) {
    return $this.currentListeners_1;
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.node_2 = node;
    this.currentListeners_1 = emptyList();
  }
  protoOf(DomElementWrapper).get_node_wor8sr_k$ = function () {
    return this.node_2;
  };
  protoOf(DomElementWrapper).updateEventListeners_egkzls_k$ = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.currentListeners_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.node_2.removeEventListener(element.get_name_woqyms_k$(), element);
    }
    this.currentListeners_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.currentListeners_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.node_2.addEventListener(element_0.get_name_woqyms_k$(), element_0);
    }
  };
  protoOf(DomElementWrapper).updateProperties_gvj74x_k$ = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.component1_7eebsc_k$();
      var item = element.component2_7eebsb_k$();
      applicator(this.node_2, item);
    }
  };
  protoOf(DomElementWrapper).updateStyleDeclarations_pwt3c4_k$ = function (styleApplier) {
    var tmp0_subject = this.node_2;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.node_2.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.node_2.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.get_properties_zhllqc_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.get_variables_75f0zy_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.component1_7eebsc_k$();
        var value_0 = element_0.component2_7eebsb_k$();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).updateAttrs_i94zab_k$ = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.node_2.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.node_2.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.node_2.setAttribute(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
    }
  };
  protoOf(DomElementWrapper).updateClasses_fnw5zf_k$ = function (classes) {
    this.node_2.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.isEmpty_y1axqb_k$()) {
      var tmp = this.node_2.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$composable$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var node = $elementBuilder.create_md4cuc_k$();
      $scope.set_element_enpsqb_k$(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.updateClasses_fnw5zf_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.updateStyleDeclarations_pwt3c4_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.updateAttrs_i94zab_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.updateEventListeners_egkzls_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.updateProperties_gvj74x_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$composable$lambda_0($this, $scope) {
    return function ($this$DisposableEffect) {
      return $this($this$DisposableEffect, $scope.get_element_q8gf71_k$());
    };
  }
  function TagElement$composable$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement$composable($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposeDomNode$composable$lambda($factory) {
    return function () {
      return $factory();
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).set_element_enpsqb_k$ = function (_set____db54di) {
    this.element_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).get_element_q8gf71_k$ = function () {
    var tmp = this.element_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).get_scopeElement_61kop2_k$ = function (_this__u8e3s4) {
    return this.get_element_q8gf71_k$();
  };
  function ElementScope() {
  }
  function _set_nextDisposableDomEffectKey__ral2d4($this, _set____db54di) {
    $this.nextDisposableDomEffectKey_1 = _set____db54di;
  }
  function _get_nextDisposableDomEffectKey__spesrw($this) {
    return $this.nextDisposableDomEffectKey_1;
  }
  function get_$stableprop_64() {
    return 8;
  }
  function ElementScopeBase$DisposableRefEffect$composable$lambda($effect, this$0) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, this$0.get_element_q8gf71_k$());
    };
  }
  function ElementScopeBase$DomSideEffect$composable$lambda($changed, $effect, $effectHolder, this$0) {
    return function () {
      if ($changed)
        $effect($effectHolder, this$0.get_element_q8gf71_k$());
      return Unit_getInstance();
    };
  }
  function ElementScopeBase() {
    this.nextDisposableDomEffectKey_1 = 0;
    this.$stable_1 = 8;
  }
  protoOf(ElementScopeBase).DisposableRefEffect_p2idmy_k$ = function (key, effect) {
    illegalDecoyCallException('DisposableRefEffect');
  };
  protoOf(ElementScopeBase).DomSideEffect_5u4hoz_k$ = function (key, effect) {
    illegalDecoyCallException('DomSideEffect');
  };
  protoOf(ElementScopeBase).DomSideEffect_5yw9zi_k$ = function (effect) {
    illegalDecoyCallException('DomSideEffect');
  };
  protoOf(ElementScopeBase).DisposableRefEffect$composable_wzn9jc_k$ = function (key, effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(342057060);
    sourceInformation($composer_0, 'C(DisposableRefEffect$composable)P(1)');
    if (isTraceInProgress()) {
      traceEventStart(342057060, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DisposableRefEffect$composable (ElementScope.kt:91)');
    }
    DisposableEffect$composable(key, ElementScopeBase$DisposableRefEffect$composable$lambda(effect, this), $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  };
  protoOf(ElementScopeBase).DomSideEffect$composable_peyi09_k$ = function (key, effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(354425546);
    sourceInformation($composer_0, 'C(DomSideEffect$composable)P(1)');
    if (isTraceInProgress()) {
      traceEventStart(354425546, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable (ElementScope.kt:100)');
    }
    var changed = $composer_0.changed_ga7h3f_k$(key);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(key);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable.<anonymous>' call
      var value = new DomDisposableEffectHolder(this);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    var effectHolder = tmp0;
    SideEffect$composable(ElementScopeBase$DomSideEffect$composable$lambda(changed, effect, effectHolder, this), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  };
  protoOf(ElementScopeBase).DomSideEffect$composable_fqzx60_k$ = function (effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(672260654);
    sourceInformation($composer_0, 'C(DomSideEffect$composable)');
    if (isTraceInProgress()) {
      traceEventStart(672260654, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable (ElementScope.kt:115)');
    }
    var tmp1 = this.nextDisposableDomEffectKey_1;
    this.nextDisposableDomEffectKey_1 = tmp1 + 1 | 0;
    this.DomSideEffect$composable_peyi09_k$(tmp1, effect, $composer_0, 512 | 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  };
  function DomEffectScope() {
  }
  function DomDisposableEffectHolder(elementScope) {
    this.elementScope_1 = elementScope;
    this.onDispose_1 = null;
  }
  protoOf(DomDisposableEffectHolder).get_elementScope_54l9tr_k$ = function () {
    return this.elementScope_1;
  };
  protoOf(DomDisposableEffectHolder).set_onDispose_7gvzye_k$ = function (_set____db54di) {
    this.onDispose_1 = _set____db54di;
  };
  protoOf(DomDisposableEffectHolder).get_onDispose_crocx5_k$ = function () {
    return this.onDispose_1;
  };
  protoOf(DomDisposableEffectHolder).onRemembered_68t2e3_k$ = function () {
  };
  protoOf(DomDisposableEffectHolder).onForgotten_pbqifp_k$ = function () {
    var tmp0_safe_receiver = this.onDispose_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this.elementScope_1.get_element_q8gf71_k$());
  };
  protoOf(DomDisposableEffectHolder).onAbandoned_1gx7a3_k$ = function () {
  };
  protoOf(DomDisposableEffectHolder).onDispose_dotmc4_k$ = function (disposeEffect) {
    this.onDispose_1 = disposeEffect;
  };
  function get_Address() {
    _init_properties_Elements_kt__eyv5nt();
    return Address;
  }
  var Address;
  function get_Article() {
    _init_properties_Elements_kt__eyv5nt();
    return Article;
  }
  var Article;
  function get_Aside() {
    _init_properties_Elements_kt__eyv5nt();
    return Aside;
  }
  var Aside;
  function get_Header() {
    _init_properties_Elements_kt__eyv5nt();
    return Header;
  }
  var Header;
  function get_Area() {
    _init_properties_Elements_kt__eyv5nt();
    return Area;
  }
  var Area;
  function get_Audio() {
    _init_properties_Elements_kt__eyv5nt();
    return Audio;
  }
  var Audio;
  function get_Map() {
    _init_properties_Elements_kt__eyv5nt();
    return Map;
  }
  var Map;
  function get_Track() {
    _init_properties_Elements_kt__eyv5nt();
    return Track;
  }
  var Track;
  function get_Video() {
    _init_properties_Elements_kt__eyv5nt();
    return Video;
  }
  var Video;
  function get_Datalist() {
    _init_properties_Elements_kt__eyv5nt();
    return Datalist;
  }
  var Datalist;
  function get_Fieldset() {
    _init_properties_Elements_kt__eyv5nt();
    return Fieldset;
  }
  var Fieldset;
  function get_Legend() {
    _init_properties_Elements_kt__eyv5nt();
    return Legend;
  }
  var Legend;
  function get_Meter() {
    _init_properties_Elements_kt__eyv5nt();
    return Meter;
  }
  var Meter;
  function get_Output() {
    _init_properties_Elements_kt__eyv5nt();
    return Output;
  }
  var Output;
  function get_Progress() {
    _init_properties_Elements_kt__eyv5nt();
    return Progress;
  }
  var Progress;
  function get_Embed() {
    _init_properties_Elements_kt__eyv5nt();
    return Embed;
  }
  var Embed;
  function get_Iframe() {
    _init_properties_Elements_kt__eyv5nt();
    return Iframe;
  }
  var Iframe;
  function get_Object() {
    _init_properties_Elements_kt__eyv5nt();
    return Object_0;
  }
  var Object_0;
  function get_Param() {
    _init_properties_Elements_kt__eyv5nt();
    return Param;
  }
  var Param;
  function get_Picture() {
    _init_properties_Elements_kt__eyv5nt();
    return Picture;
  }
  var Picture;
  function get_Source() {
    _init_properties_Elements_kt__eyv5nt();
    return Source;
  }
  var Source;
  function get_Canvas() {
    _init_properties_Elements_kt__eyv5nt();
    return Canvas;
  }
  var Canvas;
  function get_DList() {
    _init_properties_Elements_kt__eyv5nt();
    return DList;
  }
  var DList;
  function get_DTerm() {
    _init_properties_Elements_kt__eyv5nt();
    return DTerm;
  }
  var DTerm;
  function get_DDescription() {
    _init_properties_Elements_kt__eyv5nt();
    return DDescription;
  }
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  function get_Input() {
    _init_properties_Elements_kt__eyv5nt();
    return Input;
  }
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button_0;
  }
  var Button_0;
  function get_H1() {
    _init_properties_Elements_kt__eyv5nt();
    return H1;
  }
  var H1;
  function get_H2() {
    _init_properties_Elements_kt__eyv5nt();
    return H2;
  }
  var H2;
  function get_H3() {
    _init_properties_Elements_kt__eyv5nt();
    return H3;
  }
  var H3;
  function get_H4() {
    _init_properties_Elements_kt__eyv5nt();
    return H4;
  }
  var H4;
  function get_H5() {
    _init_properties_Elements_kt__eyv5nt();
    return H5;
  }
  var H5;
  function get_H6() {
    _init_properties_Elements_kt__eyv5nt();
    return H6;
  }
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  function get_Em() {
    _init_properties_Elements_kt__eyv5nt();
    return Em;
  }
  var Em;
  function get_I() {
    _init_properties_Elements_kt__eyv5nt();
    return I;
  }
  var I;
  function get_B() {
    _init_properties_Elements_kt__eyv5nt();
    return B;
  }
  var B;
  function get_Small() {
    _init_properties_Elements_kt__eyv5nt();
    return Small;
  }
  var Small;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  function get_Br() {
    _init_properties_Elements_kt__eyv5nt();
    return Br;
  }
  var Br;
  function get_Ul() {
    _init_properties_Elements_kt__eyv5nt();
    return Ul;
  }
  var Ul;
  function get_Ol() {
    _init_properties_Elements_kt__eyv5nt();
    return Ol;
  }
  var Ol;
  function get_Li() {
    _init_properties_Elements_kt__eyv5nt();
    return Li;
  }
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  function get_Form() {
    _init_properties_Elements_kt__eyv5nt();
    return Form;
  }
  var Form;
  function get_Select() {
    _init_properties_Elements_kt__eyv5nt();
    return Select;
  }
  var Select;
  function get_Option() {
    _init_properties_Elements_kt__eyv5nt();
    return Option;
  }
  var Option;
  function get_OptGroup() {
    _init_properties_Elements_kt__eyv5nt();
    return OptGroup;
  }
  var OptGroup;
  function get_Section() {
    _init_properties_Elements_kt__eyv5nt();
    return Section;
  }
  var Section;
  function get_TextArea() {
    _init_properties_Elements_kt__eyv5nt();
    return TextArea;
  }
  var TextArea;
  function get_Nav() {
    _init_properties_Elements_kt__eyv5nt();
    return Nav;
  }
  var Nav;
  function get_Pre() {
    _init_properties_Elements_kt__eyv5nt();
    return Pre;
  }
  var Pre;
  function get_Code() {
    _init_properties_Elements_kt__eyv5nt();
    return Code;
  }
  var Code;
  function get_Main() {
    _init_properties_Elements_kt__eyv5nt();
    return Main;
  }
  var Main;
  function get_Footer() {
    _init_properties_Elements_kt__eyv5nt();
    return Footer;
  }
  var Footer;
  function get_Hr() {
    _init_properties_Elements_kt__eyv5nt();
    return Hr;
  }
  var Hr;
  function get_Label() {
    _init_properties_Elements_kt__eyv5nt();
    return Label;
  }
  var Label;
  function get_Table() {
    _init_properties_Elements_kt__eyv5nt();
    return Table;
  }
  var Table;
  function get_Caption() {
    _init_properties_Elements_kt__eyv5nt();
    return Caption;
  }
  var Caption;
  function get_Col() {
    _init_properties_Elements_kt__eyv5nt();
    return Col;
  }
  var Col;
  function get_Colgroup() {
    _init_properties_Elements_kt__eyv5nt();
    return Colgroup;
  }
  var Colgroup;
  function get_Tr() {
    _init_properties_Elements_kt__eyv5nt();
    return Tr;
  }
  var Tr;
  function get_Thead() {
    _init_properties_Elements_kt__eyv5nt();
    return Thead;
  }
  var Thead;
  function get_Th() {
    _init_properties_Elements_kt__eyv5nt();
    return Th;
  }
  var Th;
  function get_Td() {
    _init_properties_Elements_kt__eyv5nt();
    return Td;
  }
  var Td;
  function get_Tbody() {
    _init_properties_Elements_kt__eyv5nt();
    return Tbody;
  }
  var Tbody;
  function get_Tfoot() {
    _init_properties_Elements_kt__eyv5nt();
    return Tfoot;
  }
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function Input$composable(type, attrs, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1013116589);
    sourceInformation($composer_0, 'C(Input$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(type) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1013116589, $dirty, -1, 'org.jetbrains.compose.web.dom.Input$composable (Elements.kt:1054)');
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
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
        var value = mutableStateOf(0);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var keyForRestoringControlledState = tmp0;
      var tmp_1 = get_Input();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-1058148781);
      sourceInformation($composer_2, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_2.changed_ga7h3f_k$(type) | $composer_2.changed_ga7h3f_k$(keyForRestoringControlledState)) | $composer_2.changed_ga7h3f_k$(attrs));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
        var value_0 = Input$composable$lambda(type, attrs, keyForRestoringControlledState);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      var tmp_4 = tmp0_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 558133459, true, Input$composable$lambda_0(type, keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_3.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      TagElement$composable(tmp_1, tmp_4, tmp0_1, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Input$composable$lambda_1(type, attrs, $changed));
    }
  }
  function Style$composable(applyAttrs, rulesBuild, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = applyAttrs;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1760347178);
    sourceInformation($composer_0, 'CC(Style$composable)');
    if (!(($default & 1) === 0))
      applyAttrs_0 = null;
    var builder = new StyleSheetBuilderImpl();
    rulesBuild(builder);
    Style$composable_0(applyAttrs_0, builder.get_cssRules_jdoznh_k$(), $composer_0, 14 & $changed, 0);
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function TextArea$composable(value, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var value_0 = {_v: value};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-577256683);
    sourceInformation($composer_0, 'C(TextArea$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        value_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-577256683, $changed, -1, 'org.jetbrains.compose.web.dom.TextArea$composable (Elements.kt:729)');
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
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_1 = !(value_0._v == null);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp = value_1;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var firstProvidedValueWasNotNull = tmp0;
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
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_2 = mutableStateOf(0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      var keyForRestoringControlledState = tmp0_0;
      var tmp_3 = get_TextArea();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var keys = [keyForRestoringControlledState, attrs_0._v, firstProvidedValueWasNotNull, value_0._v];
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_ip860b_k$(-1603429786);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = keys.length;
      while (inductionVariable < last) {
        var key = keys[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_3.changed_ga7h3f_k$(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = invalid;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_3 = TextArea$composable$lambda(attrs_0, firstProvidedValueWasNotNull, value_0, keyForRestoringControlledState);
        $composer_3.updateRememberedValue_l1wh71_k$(value_3);
        tmp_4 = value_3;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      var tmp_6 = tmp0_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 614898220, true, TextArea$composable$lambda_0(keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_4.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_4.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid_1 ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_4.updateRememberedValue_l1wh71_k$(value_4);
        tmp_8 = value_4;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_2 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_4.endReplaceableGroup_ern0ak_k$();
      TagElement$composable(tmp_3, tmp_6, tmp0_2, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(TextArea$composable$lambda_1(value_0, attrs_0, $changed, $default));
    }
  }
  function Div$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1021009996);
    sourceInformation($composer_0, 'C(Div$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1021009996, $dirty, -1, 'org.jetbrains.compose.web.dom.Div$composable (Elements.kt:489)');
      }
      TagElement$composable(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Div$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text$composable(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-363526853);
    sourceInformation($composer_0, 'C(Text$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-363526853, $changed, -1, 'org.jetbrains.compose.web.dom.Text$composable (Elements.kt:479)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode$composable' call
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
        // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
        var value_0 = Text$composable$lambda;
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-1846754774);
      sourceInformation($composer_2, 'CC(ComposeNode$composable):Composables.kt#9igjgp');
      var tmp_1 = $composer_2.get_applier_bupu8u_k$();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_2.startNode_htvs8k_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        var tmp_2 = $composer_2;
        tmp_2.createNode_ahrd54_k$(Text$composable$lambda_0(tmp0));
      } else {
        $composer_2.useNode_io5s9l_k$();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$composable$lambda_1);
      $composer_2.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Text$composable$lambda_2(value, $changed));
    }
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.buildersCache_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_9).get_buildersCache_c71wch_k$ = function () {
    return this.buildersCache_1;
  };
  protoOf(Companion_9).createBuilder_cjmhhk_k$ = function (tagName) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tagLowercase = tagName.toLowerCase();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.buildersCache_1;
    var value = this_0.get_wei43m_k$(tagLowercase);
    var tmp;
    if (value == null) {
      // Inline function 'org.jetbrains.compose.web.dom.Companion.createBuilder.<anonymous>' call
      var answer = new ElementBuilderImplementation(tagLowercase);
      this_0.put_4fpzoq_k$(tagLowercase, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return tmp;
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function ElementBuilder() {
  }
  function Button$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-767970749);
    sourceInformation($composer_0, 'C(Button$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-767970749, $dirty, -1, 'org.jetbrains.compose.web.dom.Button$composable (Elements.kt:521)');
      }
      TagElement$composable(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Button$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function _get_tagName__m9buy4($this) {
    return $this.tagName_1;
  }
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.el$delegate_1;
    el$factory();
    return this_0.get_value_j01efc_k$();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.tagName_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.tagName_1 = tagName;
    var tmp = this;
    tmp.el$delegate_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).create_md4cuc_k$ = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Style$composable_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1688263201);
    sourceInformation($composer_0, 'C(Style$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1688263201, $dirty, -1, 'org.jetbrains.compose.web.dom.Style$composable (Elements.kt:978)');
      }
      var tmp = get_Style();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key1 = applyAttrs_0._v;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(key1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
        var value = Style$composable$lambda(applyAttrs_0);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var tmp_2 = tmp0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 962227798, true, Style$composable$lambda_0(cssRules, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      TagElement$composable(tmp, tmp_2, tmp0_0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Style$composable$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Span$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-155327957);
    sourceInformation($composer_0, 'C(Span$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-155327957, $dirty, -1, 'org.jetbrains.compose.web.dom.Span$composable (Elements.kt:593)');
      }
      TagElement$composable(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Span$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Pre$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2070487814);
    sourceInformation($composer_0, 'C(Pre$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2070487814, $dirty, -1, 'org.jetbrains.compose.web.dom.Pre$composable (Elements.kt:774)');
      }
      TagElement$composable(get_Pre(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Pre$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Input$composable$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.set_value_v1vabv_k$($keyForRestoringControlledState.get_value_j01efc_k$() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function Input$composable$lambda($type, $attrs, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var inputAttrsBuilder = new InputAttrsScope($type, $this$TagElement);
      type_0(inputAttrsBuilder, $type);
      inputAttrsBuilder.onInput_qzb0am_k$(Input$composable$lambda$lambda($keyForRestoringControlledState));
      $attrs(inputAttrsBuilder);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0() {
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Input$composable$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledInputState($this_TagElement.get_scopeElement_61kop2_k$($this$DisposableEffect));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0();
    };
  }
  function Input$composable$lambda_0($type, $keyForRestoringControlledState) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(558133459, $dirty, -1, 'org.jetbrains.compose.web.dom.Input$composable.<anonymous> (Elements.kt:1073)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-1270925487);
        if (equals($type, Radio_getInstance())) {
          DisposeRadioGroupEffect$composable($this$TagElement, $composer_0, 14 & $dirty);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_1 = $keyForRestoringControlledState.get_value_j01efc_k$();
        DisposableEffect$composable(tmp_1, Input$composable$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Input$composable$lambda_1($type, $attrs, $$changed) {
    return function ($composer, $force) {
      Input$composable($type, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TextArea$composable$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.set_value_v1vabv_k$($keyForRestoringControlledState.get_value_j01efc_k$() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function TextArea$composable$lambda($attrs, $firstProvidedValueWasNotNull, $value, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var textAreaAttrsBuilder = new TextAreaAttrsScope($this$TagElement);
      textAreaAttrsBuilder.onInput_cld1rf_k$(TextArea$composable$lambda$lambda($keyForRestoringControlledState));
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v(textAreaAttrsBuilder);
      }
      var tmp_0;
      if ($firstProvidedValueWasNotNull) {
        var tmp0_elvis_lhs = $value._v;
        textAreaAttrsBuilder.value_hphtnt_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function TextArea$composable$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledTextAreaState($this_TagElement.get_scopeElement_61kop2_k$($this$DisposableEffect));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1();
    };
  }
  function TextArea$composable$lambda_0($keyForRestoringControlledState) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(614898220, $changed, -1, 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous> (Elements.kt:754)');
        }
        var tmp_1 = $keyForRestoringControlledState.get_value_j01efc_k$();
        DisposableEffect$composable(tmp_1, TextArea$composable$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TextArea$composable$lambda_1($value, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      TextArea$composable($value._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Div$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Text$composable$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$composable$lambda_0($factory) {
    return function () {
      return $factory();
    };
  }
  function Text$composable$lambda_1($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.get_node_wor8sr_k$();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_getInstance();
  }
  function Text$composable$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text$composable($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Button$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Style$composable$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_2($cssStylesheet) {
    this.$cssStylesheet_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv_2).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.$cssStylesheet_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$composable$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.get_scopeElement_61kop2_k$($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_2(cssStylesheet);
    };
  }
  function Style$composable$lambda_0($cssRules, $$dirty) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $changed, -1, 'org.jetbrains.compose.web.dom.Style$composable.<anonymous> (Elements.kt:989)');
        }
        var tmp_1 = $cssRules.get_size_woubt6_k$();
        DisposableEffect$composable_0($cssRules, tmp_1, Style$composable$lambda$lambda($this$TagElement, $cssRules), $composer_0, 14 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Style$composable$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style$composable_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Span$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Pre$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Pre$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button_0 = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function get_radioGroupScopeImpl() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupScopeImpl;
  }
  var radioGroupScopeImpl;
  function set_generatedRadioGroupNamesCounter(_set____db54di) {
    _init_properties_RadioGroup_kt__a2rbj8();
    generatedRadioGroupNamesCounter = _set____db54di;
  }
  function get_generatedRadioGroupNamesCounter() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return generatedRadioGroupNamesCounter;
  }
  var generatedRadioGroupNamesCounter;
  function get_radioGroupCompositionLocalValue() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupCompositionLocalValue;
  }
  var radioGroupCompositionLocalValue;
  function get_radioGroupCompositionLocalName() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupCompositionLocalName;
  }
  var radioGroupCompositionLocalName;
  function get_$stableprop_65() {
    return 0;
  }
  function RadioGroupScope() {
    this.$stable_1 = 0;
  }
  function radioGroupCompositionLocalValue$lambda() {
    _init_properties_RadioGroup_kt__a2rbj8();
    var message = 'No radio group checked value provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function radioGroupCompositionLocalName$lambda() {
    _init_properties_RadioGroup_kt__a2rbj8();
    var message = 'No radio group name provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var properties_initialized_RadioGroup_kt_um4oue;
  function _init_properties_RadioGroup_kt__a2rbj8() {
    if (!properties_initialized_RadioGroup_kt_um4oue) {
      properties_initialized_RadioGroup_kt_um4oue = true;
      radioGroupScopeImpl = new RadioGroupScope();
      generatedRadioGroupNamesCounter = 0;
      radioGroupCompositionLocalValue = compositionLocalOf(VOID, radioGroupCompositionLocalValue$lambda);
      radioGroupCompositionLocalName = compositionLocalOf(VOID, radioGroupCompositionLocalName$lambda);
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = cssRuleDeclaration.get_style_iyqetk_k$().get_properties_zhllqc_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.get_style_iyqetk_k$().get_variables_75f0zy_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.component1_7eebsc_k$();
        var value_0 = element_0.component2_7eebsb_k$();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.get_rules_iy6zf2_k$().iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.get_keys_wop4xp_k$().iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_2.next_20eer_k$();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function get_$stableprop_66() {
    return 0;
  }
  function SyntheticAnimationEvent(nativeEvent, animationEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.animationName_1 = animationEventDetails.animationName;
    this.elapsedTime_1 = animationEventDetails.elapsedTime;
    this.pseudoElement_1 = animationEventDetails.pseudoElement;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticAnimationEvent).get_animationName_wdgkxy_k$ = function () {
    return this.animationName_1;
  };
  protoOf(SyntheticAnimationEvent).get_elapsedTime_5vfaps_k$ = function () {
    return this.elapsedTime_1;
  };
  protoOf(SyntheticAnimationEvent).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  function get_$stableprop_67() {
    return 0;
  }
  function SyntheticChangeEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.value_1 = value;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticChangeEvent).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function get_$stableprop_68() {
    return 0;
  }
  function SyntheticClipboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.clipboardData_1 = nativeEvent.clipboardData;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticClipboardEvent).get_clipboardData_2lw3zr_k$ = function () {
    return this.clipboardData_1;
  };
  protoOf(SyntheticClipboardEvent).getData_bpxm7a_k$ = function (format) {
    var tmp0_safe_receiver = this.clipboardData_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getData(format);
  };
  protoOf(SyntheticClipboardEvent).setData_h15rmk_k$ = function (format, data) {
    var tmp0_safe_receiver = this.clipboardData_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.setData(format, data);
    }
  };
  function get_$stableprop_69() {
    return 0;
  }
  function SyntheticEvent(nativeEvent) {
    this.nativeEvent_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.target_1 = this.nativeEvent_1.target;
    this.bubbles_1 = this.nativeEvent_1.bubbles;
    this.cancelable_1 = this.nativeEvent_1.cancelable;
    this.composed_1 = this.nativeEvent_1.composed;
    this.currentTarget_1 = this.nativeEvent_1.currentTarget;
    this.eventPhase_1 = this.nativeEvent_1.eventPhase;
    this.defaultPrevented_1 = this.nativeEvent_1.defaultPrevented;
    this.timestamp_1 = this.nativeEvent_1.timeStamp;
    this.type_1 = this.nativeEvent_1.type;
    this.isTrusted_1 = this.nativeEvent_1.isTrusted;
    this.$stable_1 = 0;
  }
  protoOf(SyntheticEvent).get_nativeEvent_skldba_k$ = function () {
    return this.nativeEvent_1;
  };
  protoOf(SyntheticEvent).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(SyntheticEvent).get_bubbles_4z13zy_k$ = function () {
    return this.bubbles_1;
  };
  protoOf(SyntheticEvent).get_cancelable_b2ewrh_k$ = function () {
    return this.cancelable_1;
  };
  protoOf(SyntheticEvent).get_composed_tbcbff_k$ = function () {
    return this.composed_1;
  };
  protoOf(SyntheticEvent).get_currentTarget_yyne0v_k$ = function () {
    return this.currentTarget_1;
  };
  protoOf(SyntheticEvent).get_eventPhase_44nj3q_k$ = function () {
    return this.eventPhase_1;
  };
  protoOf(SyntheticEvent).get_defaultPrevented_umrpc1_k$ = function () {
    return this.defaultPrevented_1;
  };
  protoOf(SyntheticEvent).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(SyntheticEvent).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(SyntheticEvent).get_isTrusted_ievk1o_k$ = function () {
    return this.isTrusted_1;
  };
  protoOf(SyntheticEvent).preventDefault_xs6po9_k$ = function () {
    return this.nativeEvent_1.preventDefault();
  };
  protoOf(SyntheticEvent).stopPropagation_5qf8uy_k$ = function () {
    return this.nativeEvent_1.stopPropagation();
  };
  protoOf(SyntheticEvent).stopImmediatePropagation_zb9e3x_k$ = function () {
    return this.nativeEvent_1.stopImmediatePropagation();
  };
  protoOf(SyntheticEvent).composedPath_62fnop_k$ = function () {
    return this.nativeEvent_1.composedPath();
  };
  function get_$stableprop_70() {
    return 0;
  }
  function SyntheticFocusEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.relatedTarget_1 = nativeEvent.relatedTarget;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticFocusEvent).get_relatedTarget_1ea9gz_k$ = function () {
    return this.relatedTarget_1;
  };
  function get_$stableprop_71() {
    return 0;
  }
  function SyntheticInputEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.value_1 = value;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = nativeEvent.data;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp0_safe_receiver;
    }
    tmp.data_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_0 = nativeEvent.dataTransfer;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_2 = tmp0_safe_receiver_0;
    }
    tmp_1.dataTransfer_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_1 = nativeEvent.inputType;
    var tmp_4;
    if (tmp0_safe_receiver_1 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_4 = tmp0_safe_receiver_1;
    }
    tmp_3.inputType_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_2 = nativeEvent.isComposing;
    var tmp_6;
    if (tmp0_safe_receiver_2 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_6 = tmp0_safe_receiver_2;
    }
    var tmp1_elvis_lhs = tmp_6;
    tmp_5.isComposing_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticInputEvent).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SyntheticInputEvent).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(SyntheticInputEvent).get_dataTransfer_ncqosi_k$ = function () {
    return this.dataTransfer_1;
  };
  protoOf(SyntheticInputEvent).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(SyntheticInputEvent).get_isComposing_a8f9zw_k$ = function () {
    return this.isComposing_1;
  };
  function get_normalizedKeys() {
    _init_properties_SyntheticKeyboardEvent_kt__tcvd9u();
    return normalizedKeys;
  }
  var normalizedKeys;
  function _get_keyboardEvent__g732rm($this) {
    return $this.keyboardEvent_1;
  }
  function get_$stableprop_72() {
    return 0;
  }
  function SyntheticKeyboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.keyboardEvent_1 = nativeEvent;
    this.altKey_1 = nativeEvent.altKey;
    this.code_1 = nativeEvent.code;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.isComposing_1 = nativeEvent.isComposing;
    this.key_1 = nativeEvent.key;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.locale_1 = toString(nativeEvent.locale);
    this.location_1 = nativeEvent.location;
    this.metaKey_1 = nativeEvent.metaKey;
    this.repeat_1 = nativeEvent.repeat;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticKeyboardEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(SyntheticKeyboardEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_isComposing_a8f9zw_k$ = function () {
    return this.isComposing_1;
  };
  protoOf(SyntheticKeyboardEvent).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SyntheticKeyboardEvent).get_locale_g9dqar_k$ = function () {
    return this.locale_1;
  };
  protoOf(SyntheticKeyboardEvent).get_location_d3s02_k$ = function () {
    return this.location_1;
  };
  protoOf(SyntheticKeyboardEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_repeat_iydw9w_k$ = function () {
    return this.repeat_1;
  };
  protoOf(SyntheticKeyboardEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticKeyboardEvent).getModifierState_g49qi_k$ = function (keyArg) {
    return this.keyboardEvent_1.getModifierState(keyArg);
  };
  protoOf(SyntheticKeyboardEvent).getNormalizedKey_tfr8s2_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.web.events.SyntheticKeyboardEvent.getNormalizedKey.<anonymous>' call
    var it = this.key_1;
    var tmp0_elvis_lhs = get_normalizedKeys().get_wei43m_k$(it);
    return tmp0_elvis_lhs == null ? it : tmp0_elvis_lhs;
  };
  var properties_initialized_SyntheticKeyboardEvent_kt_z9adjk;
  function _init_properties_SyntheticKeyboardEvent_kt__tcvd9u() {
    if (!properties_initialized_SyntheticKeyboardEvent_kt_z9adjk) {
      properties_initialized_SyntheticKeyboardEvent_kt_z9adjk = true;
      normalizedKeys = mapOf([to('Esc', 'Escape'), to('Spacebar', ' '), to('Left', 'ArrowLeft'), to('Up', 'ArrowUp'), to('Right', 'ArrowRight'), to('Down', 'ArrowDown'), to('Del', 'Delete'), to('Apps', 'ContextMenu'), to('Menu', 'ContextMenu'), to('Scroll', 'ScrollLock'), to('MozPrintableKey', 'Unidentified')]);
    }
  }
  function get_$stableprop_73() {
    return 0;
  }
  function SyntheticWheelEvent(nativeEvent) {
    SyntheticMouseEvent.call(this, nativeEvent);
    this.deltaX_1 = nativeEvent.deltaX;
    this.deltaY_1 = nativeEvent.deltaY;
    this.deltaZ_1 = nativeEvent.deltaZ;
    this.deltaMode_1 = nativeEvent.deltaMode;
    this.$stable_3 = 0;
  }
  protoOf(SyntheticWheelEvent).get_deltaX_cboxwp_k$ = function () {
    return this.deltaX_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaY_cboxwq_k$ = function () {
    return this.deltaY_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaZ_cboxwr_k$ = function () {
    return this.deltaZ_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaMode_9dro42_k$ = function () {
    return this.deltaMode_1;
  };
  function _get_mouseEvent__o09ya2($this) {
    return $this.mouseEvent_1;
  }
  function get_$stableprop_74() {
    return 0;
  }
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.mouseEvent_1 = nativeEvent;
    this.altKey_1 = nativeEvent.altKey;
    this.button_1 = nativeEvent.button;
    this.buttons_1 = nativeEvent.buttons;
    this.clientX_1 = nativeEvent.clientX;
    this.clientY_1 = nativeEvent.clientY;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.metaKey_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.movementX_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.movementY_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.offsetX_1 = nativeEvent.offsetX;
    this.offsetY_1 = nativeEvent.offsetY;
    this.pageX_1 = nativeEvent.pageX;
    this.pageY_1 = nativeEvent.pageY;
    this.region_1 = nativeEvent.region;
    this.relatedTarget_1 = nativeEvent.relatedTarget;
    this.screenX_1 = nativeEvent.screenX;
    this.screenY_1 = nativeEvent.screenY;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.x_1 = nativeEvent.x;
    this.y_1 = nativeEvent.y;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticMouseEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticMouseEvent).get_button_bmjiuz_k$ = function () {
    return this.button_1;
  };
  protoOf(SyntheticMouseEvent).get_buttons_598yvs_k$ = function () {
    return this.buttons_1;
  };
  protoOf(SyntheticMouseEvent).get_clientX_fhxblw_k$ = function () {
    return this.clientX_1;
  };
  protoOf(SyntheticMouseEvent).get_clientY_fhxblx_k$ = function () {
    return this.clientY_1;
  };
  protoOf(SyntheticMouseEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticMouseEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticMouseEvent).get_movementX_qe3gf4_k$ = function () {
    return this.movementX_1;
  };
  protoOf(SyntheticMouseEvent).get_movementY_qe3gf5_k$ = function () {
    return this.movementY_1;
  };
  protoOf(SyntheticMouseEvent).get_offsetX_ocbsn8_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(SyntheticMouseEvent).get_offsetY_ocbsn7_k$ = function () {
    return this.offsetY_1;
  };
  protoOf(SyntheticMouseEvent).get_pageX_iwqirk_k$ = function () {
    return this.pageX_1;
  };
  protoOf(SyntheticMouseEvent).get_pageY_iwqirl_k$ = function () {
    return this.pageY_1;
  };
  protoOf(SyntheticMouseEvent).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(SyntheticMouseEvent).get_relatedTarget_1ea9gz_k$ = function () {
    return this.relatedTarget_1;
  };
  protoOf(SyntheticMouseEvent).get_screenX_x4h283_k$ = function () {
    return this.screenX_1;
  };
  protoOf(SyntheticMouseEvent).get_screenY_x4h284_k$ = function () {
    return this.screenY_1;
  };
  protoOf(SyntheticMouseEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticMouseEvent).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(SyntheticMouseEvent).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(SyntheticMouseEvent).getModifierState_g49qi_k$ = function (keyArg) {
    return this.mouseEvent_1.getModifierState(keyArg);
  };
  function get_$stableprop_75() {
    return 0;
  }
  function SyntheticDragEvent(nativeEvent) {
    SyntheticMouseEvent.call(this, nativeEvent);
    this.dataTransfer_1 = nativeEvent.dataTransfer;
    this.$stable_3 = 0;
  }
  protoOf(SyntheticDragEvent).get_dataTransfer_ncqosi_k$ = function () {
    return this.dataTransfer_1;
  };
  function get_$stableprop_76() {
    return 0;
  }
  function SyntheticSelectEvent(nativeEvent, selectionInfoDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.selectionStart_1 = selectionInfoDetails.selectionStart;
    this.selectionEnd_1 = selectionInfoDetails.selectionEnd;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticSelectEvent).get_selectionStart_1zskht_k$ = function () {
    return this.selectionStart_1;
  };
  protoOf(SyntheticSelectEvent).get_selectionEnd_mebxu0_k$ = function () {
    return this.selectionEnd_1;
  };
  protoOf(SyntheticSelectEvent).selection_sdn3hw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = this.get_nativeEvent_skldba_k$().target.value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.substring' call
      var startIndex = this.selectionStart_1;
      var endIndex = this.selectionEnd_1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver.substring(startIndex, endIndex);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  };
  function get_$stableprop_77() {
    return 0;
  }
  function SyntheticTouchEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.altKey_1 = nativeEvent.altKey;
    this.changedTouches_1 = nativeEvent.changedTouches;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.metaKey_1 = nativeEvent.metaKey;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.touches_1 = nativeEvent.touches;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticTouchEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticTouchEvent).get_changedTouches_6cqbxe_k$ = function () {
    return this.changedTouches_1;
  };
  protoOf(SyntheticTouchEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticTouchEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticTouchEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticTouchEvent).get_touches_hi32yk_k$ = function () {
    return this.touches_1;
  };
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).id_e4l56n_k$ = id;
  protoOf(AttrsScopeBuilder).hidden_k4uzbq_k$ = hidden;
  protoOf(AttrsScopeBuilder).title_qpfo4e_k$ = title;
  protoOf(AttrsScopeBuilder).dir_uokp4q_k$ = dir;
  protoOf(AttrsScopeBuilder).draggable_cxyxb5_k$ = draggable;
  protoOf(AttrsScopeBuilder).contentEditable_hbi188_k$ = contentEditable;
  protoOf(AttrsScopeBuilder).lang_9i4u6k_k$ = lang;
  protoOf(AttrsScopeBuilder).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(AttrsScopeBuilder).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(AttrsScopeBuilder).inputMode_1lh0s3_k$ = inputMode;
  protoOf(AttrsScopeBuilder).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(EventsListenerScopeBuilder).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(EventsListenerScopeBuilder).onClick_q9cds6_k$ = onClick;
  protoOf(EventsListenerScopeBuilder).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(EventsListenerScopeBuilder).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(EventsListenerScopeBuilder).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(EventsListenerScopeBuilder).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(EventsListenerScopeBuilder).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(EventsListenerScopeBuilder).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(EventsListenerScopeBuilder).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(EventsListenerScopeBuilder).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(EventsListenerScopeBuilder).onWheel_59frrx_k$ = onWheel;
  protoOf(EventsListenerScopeBuilder).onDrag_xkse65_k$ = onDrag;
  protoOf(EventsListenerScopeBuilder).onDrop_373vqw_k$ = onDrop;
  protoOf(EventsListenerScopeBuilder).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(EventsListenerScopeBuilder).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(EventsListenerScopeBuilder).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(EventsListenerScopeBuilder).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(EventsListenerScopeBuilder).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(EventsListenerScopeBuilder).onCopy_4jq33g_k$ = onCopy;
  protoOf(EventsListenerScopeBuilder).onCut_wod3pf_k$ = onCut;
  protoOf(EventsListenerScopeBuilder).onPaste_8ucd2k_k$ = onPaste;
  protoOf(EventsListenerScopeBuilder).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(EventsListenerScopeBuilder).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(EventsListenerScopeBuilder).onFocus_ozgn2v_k$ = onFocus;
  protoOf(EventsListenerScopeBuilder).onBlur_yy3d4s_k$ = onBlur;
  protoOf(EventsListenerScopeBuilder).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(EventsListenerScopeBuilder).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(EventsListenerScopeBuilder).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(EventsListenerScopeBuilder).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(EventsListenerScopeBuilder).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(EventsListenerScopeBuilder).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(EventsListenerScopeBuilder).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(EventsListenerScopeBuilder).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(EventsListenerScopeBuilder).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(EventsListenerScopeBuilder).onScroll_ur92mf_k$ = onScroll;
  protoOf(EventsListenerScopeBuilder).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(EventsListenerScopeBuilder).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(StyleScopeBuilder).property_wcrait_k$ = property;
  protoOf(StyleScopeBuilder).property_jk9dw6_k$ = property_0;
  protoOf(StyleScopeBuilder).variable_kvosx8_k$ = variable;
  protoOf(StyleScopeBuilder).variable_j4rwe5_k$ = variable_0;
  protoOf(StyleScopeBuilder).invoke_77zbl8_k$ = invoke;
  protoOf(StyleScopeBuilder).invoke_rxx4vw_k$ = invoke_0;
  protoOf(StyleScopeBuilder).invoke_jsk60r_k$ = invoke_1;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.get_value_j01efc_k$();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.get_unit_wovp3h_k$();
  });
  protoOf(StyleSheetBuilderImpl).style_pgxmpo_k$ = style_1;
  protoOf(StyleSheetBuilderImpl).style_f6q54s_k$ = style;
  protoOf(StyleSheetBuilderImpl).style_qsvaqb_k$ = style_0;
  protoOf(StyleSheetBuilderImpl).add_h1zelh_k$ = add;
  protoOf(StyleSheetBuilderImpl).invoke_3g5iuj_k$ = invoke_2;
  protoOf(StyleSheetBuilderImpl).invoke_17x10s_k$ = invoke_3;
  protoOf(StyleSheetBuilderImpl).selector_430xff_k$ = selector;
  protoOf(StyleSheetBuilderImpl).combine_s8rvtq_k$ = combine;
  protoOf(StyleSheetBuilderImpl).plus_33ujzs_k$ = plus;
  protoOf(StyleSheetBuilderImpl).plus_figtb_k$ = plus_0;
  protoOf(StyleSheetBuilderImpl).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheetBuilderImpl).get_universal_1qp21u_k$ = get_universal;
  protoOf(StyleSheetBuilderImpl).type_g7nfuo_k$ = type;
  protoOf(StyleSheetBuilderImpl).className_n9zzbd_k$ = className;
  protoOf(StyleSheetBuilderImpl).id_e4l56n_k$ = id_0;
  protoOf(StyleSheetBuilderImpl).attr_1eatx7_k$ = attr;
  protoOf(StyleSheetBuilderImpl).attr$default_8acpq4_k$ = attr$default;
  protoOf(StyleSheetBuilderImpl).attrEquals_vwtgpq_k$ = attrEquals;
  protoOf(StyleSheetBuilderImpl).attrEquals$default_2vg9wo_k$ = attrEquals$default;
  protoOf(StyleSheetBuilderImpl).attrListContains_rjrrsw_k$ = attrListContains;
  protoOf(StyleSheetBuilderImpl).attrListContains$default_a6gpmi_k$ = attrListContains$default;
  protoOf(StyleSheetBuilderImpl).attrHyphened_2fosj8_k$ = attrHyphened;
  protoOf(StyleSheetBuilderImpl).attrHyphened$default_z202be_k$ = attrHyphened$default;
  protoOf(StyleSheetBuilderImpl).attrPrefixed_7hjetw_k$ = attrPrefixed;
  protoOf(StyleSheetBuilderImpl).attrPrefixed$default_jycsfa_k$ = attrPrefixed$default;
  protoOf(StyleSheetBuilderImpl).attrSuffixed_6vqc43_k$ = attrSuffixed;
  protoOf(StyleSheetBuilderImpl).attrSuffixed$default_6qo709_k$ = attrSuffixed$default;
  protoOf(StyleSheetBuilderImpl).attrContains_fr4p8e_k$ = attrContains;
  protoOf(StyleSheetBuilderImpl).attrContains$default_grlkqw_k$ = attrContains$default;
  protoOf(StyleSheetBuilderImpl).group_fp9k4e_k$ = group;
  protoOf(StyleSheetBuilderImpl).descendant_rdc8nx_k$ = descendant;
  protoOf(StyleSheetBuilderImpl).desc_lky2kv_k$ = desc;
  protoOf(StyleSheetBuilderImpl).desc_bh0wjc_k$ = desc_0;
  protoOf(StyleSheetBuilderImpl).desc_8iwiiu_k$ = desc_1;
  protoOf(StyleSheetBuilderImpl).desc_sumdm7_k$ = desc_2;
  protoOf(StyleSheetBuilderImpl).child_falepo_k$ = child;
  protoOf(StyleSheetBuilderImpl).sibling_ebo92a_k$ = sibling;
  protoOf(StyleSheetBuilderImpl).adjacent_1pkom6_k$ = adjacent;
  protoOf(StyleSheetBuilderImpl).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheetBuilderImpl).hover_4aczjb_k$ = hover;
  protoOf(StyleSheetBuilderImpl).get_hover_islez7_k$ = get_hover;
  protoOf(StyleSheetBuilderImpl).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(StyleSheetBuilderImpl).get_link_wopumb_k$ = get_link;
  protoOf(StyleSheetBuilderImpl).get_visited_8zg8qp_k$ = get_visited;
  protoOf(StyleSheetBuilderImpl).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(StyleSheetBuilderImpl).get_target_juba8q_k$ = get_target;
  protoOf(StyleSheetBuilderImpl).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(StyleSheetBuilderImpl).get_scope_iyfcq3_k$ = get_scope;
  protoOf(StyleSheetBuilderImpl).get_active_avldsf_k$ = get_active;
  protoOf(StyleSheetBuilderImpl).get_focus_irhg33_k$ = get_focus;
  protoOf(StyleSheetBuilderImpl).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(StyleSheetBuilderImpl).get_playing_6wau9n_k$ = get_playing;
  protoOf(StyleSheetBuilderImpl).get_paused_hy6yif_k$ = get_paused;
  protoOf(StyleSheetBuilderImpl).get_autofill_801dad_k$ = get_autofill;
  protoOf(StyleSheetBuilderImpl).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(StyleSheetBuilderImpl).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(StyleSheetBuilderImpl).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(StyleSheetBuilderImpl).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(StyleSheetBuilderImpl).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(StyleSheetBuilderImpl).get_default_qtagd4_k$ = get_default;
  protoOf(StyleSheetBuilderImpl).get_checked_djib3y_k$ = get_checked;
  protoOf(StyleSheetBuilderImpl).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(StyleSheetBuilderImpl).get_blank_ip8b3f_k$ = get_blank;
  protoOf(StyleSheetBuilderImpl).get_valid_j01e4z_k$ = get_valid;
  protoOf(StyleSheetBuilderImpl).get_invalid_xocxse_k$ = get_invalid;
  protoOf(StyleSheetBuilderImpl).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(StyleSheetBuilderImpl).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(StyleSheetBuilderImpl).get_required_wq3z3c_k$ = get_required;
  protoOf(StyleSheetBuilderImpl).get_optional_x3zcnr_k$ = get_optional;
  protoOf(StyleSheetBuilderImpl).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(StyleSheetBuilderImpl).get_root_wott0r_k$ = get_root;
  protoOf(StyleSheetBuilderImpl).get_empty_iqwn50_k$ = get_empty;
  protoOf(StyleSheetBuilderImpl).get_first_irdx8n_k$ = get_first;
  protoOf(StyleSheetBuilderImpl).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(StyleSheetBuilderImpl).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(StyleSheetBuilderImpl).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(StyleSheetBuilderImpl).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(StyleSheetBuilderImpl).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(StyleSheetBuilderImpl).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(StyleSheetBuilderImpl).get_host_wonf8x_k$ = get_host;
  protoOf(StyleSheetBuilderImpl).host_bjfdhh_k$ = host;
  protoOf(StyleSheetBuilderImpl).get_defined_qtfew0_k$ = get_defined;
  protoOf(StyleSheetBuilderImpl).get_left_woprgw_k$ = get_left;
  protoOf(StyleSheetBuilderImpl).get_right_ixz7xv_k$ = get_right;
  protoOf(StyleSheetBuilderImpl).lang_9i4u6k_k$ = lang_0;
  protoOf(StyleSheetBuilderImpl).nthChild_gg5ihj_k$ = nthChild;
  protoOf(StyleSheetBuilderImpl).nthLastChild_ep0a1r_k$ = nthLastChild;
  protoOf(StyleSheetBuilderImpl).nthOfType_wqjefk_k$ = nthOfType;
  protoOf(StyleSheetBuilderImpl).nthLastOfType_9azghm_k$ = nthLastOfType;
  protoOf(StyleSheetBuilderImpl).not_4ti0eo_k$ = not;
  protoOf(StyleSheetBuilderImpl).get_after_iol2gj_k$ = get_after;
  protoOf(StyleSheetBuilderImpl).get_before_bdhrwo_k$ = get_before;
  protoOf(StyleSheetBuilderImpl).get_cue_18j7sm_k$ = get_cue;
  protoOf(StyleSheetBuilderImpl).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(StyleSheetBuilderImpl).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(StyleSheetBuilderImpl).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(StyleSheetBuilderImpl).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(StyleSheetBuilderImpl).get_selection_jv4aal_k$ = get_selection;
  protoOf(StyleSheetBuilderImpl).slotted_hey9bi_k$ = slotted;
  protoOf(selectorScope$1).selector_430xff_k$ = selector;
  protoOf(selectorScope$1).combine_s8rvtq_k$ = combine;
  protoOf(selectorScope$1).plus_33ujzs_k$ = plus;
  protoOf(selectorScope$1).plus_figtb_k$ = plus_0;
  protoOf(selectorScope$1).returnUniversalSelector = returnUniversalSelector;
  protoOf(selectorScope$1).get_universal_1qp21u_k$ = get_universal;
  protoOf(selectorScope$1).type_g7nfuo_k$ = type;
  protoOf(selectorScope$1).className_n9zzbd_k$ = className;
  protoOf(selectorScope$1).id_e4l56n_k$ = id_0;
  protoOf(selectorScope$1).attr_1eatx7_k$ = attr;
  protoOf(selectorScope$1).attr$default_8acpq4_k$ = attr$default;
  protoOf(selectorScope$1).attrEquals_vwtgpq_k$ = attrEquals;
  protoOf(selectorScope$1).attrEquals$default_2vg9wo_k$ = attrEquals$default;
  protoOf(selectorScope$1).attrListContains_rjrrsw_k$ = attrListContains;
  protoOf(selectorScope$1).attrListContains$default_a6gpmi_k$ = attrListContains$default;
  protoOf(selectorScope$1).attrHyphened_2fosj8_k$ = attrHyphened;
  protoOf(selectorScope$1).attrHyphened$default_z202be_k$ = attrHyphened$default;
  protoOf(selectorScope$1).attrPrefixed_7hjetw_k$ = attrPrefixed;
  protoOf(selectorScope$1).attrPrefixed$default_jycsfa_k$ = attrPrefixed$default;
  protoOf(selectorScope$1).attrSuffixed_6vqc43_k$ = attrSuffixed;
  protoOf(selectorScope$1).attrSuffixed$default_6qo709_k$ = attrSuffixed$default;
  protoOf(selectorScope$1).attrContains_fr4p8e_k$ = attrContains;
  protoOf(selectorScope$1).attrContains$default_grlkqw_k$ = attrContains$default;
  protoOf(selectorScope$1).group_fp9k4e_k$ = group;
  protoOf(selectorScope$1).descendant_rdc8nx_k$ = descendant;
  protoOf(selectorScope$1).desc_lky2kv_k$ = desc;
  protoOf(selectorScope$1).desc_bh0wjc_k$ = desc_0;
  protoOf(selectorScope$1).desc_8iwiiu_k$ = desc_1;
  protoOf(selectorScope$1).desc_sumdm7_k$ = desc_2;
  protoOf(selectorScope$1).child_falepo_k$ = child;
  protoOf(selectorScope$1).sibling_ebo92a_k$ = sibling;
  protoOf(selectorScope$1).adjacent_1pkom6_k$ = adjacent;
  protoOf(selectorScope$1).returnHoverSelector = returnHoverSelector;
  protoOf(selectorScope$1).hover_4aczjb_k$ = hover;
  protoOf(selectorScope$1).get_hover_islez7_k$ = get_hover;
  protoOf(selectorScope$1).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(selectorScope$1).get_link_wopumb_k$ = get_link;
  protoOf(selectorScope$1).get_visited_8zg8qp_k$ = get_visited;
  protoOf(selectorScope$1).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(selectorScope$1).get_target_juba8q_k$ = get_target;
  protoOf(selectorScope$1).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(selectorScope$1).get_scope_iyfcq3_k$ = get_scope;
  protoOf(selectorScope$1).get_active_avldsf_k$ = get_active;
  protoOf(selectorScope$1).get_focus_irhg33_k$ = get_focus;
  protoOf(selectorScope$1).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(selectorScope$1).get_playing_6wau9n_k$ = get_playing;
  protoOf(selectorScope$1).get_paused_hy6yif_k$ = get_paused;
  protoOf(selectorScope$1).get_autofill_801dad_k$ = get_autofill;
  protoOf(selectorScope$1).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(selectorScope$1).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(selectorScope$1).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(selectorScope$1).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(selectorScope$1).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(selectorScope$1).get_default_qtagd4_k$ = get_default;
  protoOf(selectorScope$1).get_checked_djib3y_k$ = get_checked;
  protoOf(selectorScope$1).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(selectorScope$1).get_blank_ip8b3f_k$ = get_blank;
  protoOf(selectorScope$1).get_valid_j01e4z_k$ = get_valid;
  protoOf(selectorScope$1).get_invalid_xocxse_k$ = get_invalid;
  protoOf(selectorScope$1).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(selectorScope$1).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(selectorScope$1).get_required_wq3z3c_k$ = get_required;
  protoOf(selectorScope$1).get_optional_x3zcnr_k$ = get_optional;
  protoOf(selectorScope$1).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(selectorScope$1).get_root_wott0r_k$ = get_root;
  protoOf(selectorScope$1).get_empty_iqwn50_k$ = get_empty;
  protoOf(selectorScope$1).get_first_irdx8n_k$ = get_first;
  protoOf(selectorScope$1).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(selectorScope$1).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(selectorScope$1).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(selectorScope$1).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(selectorScope$1).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(selectorScope$1).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(selectorScope$1).get_host_wonf8x_k$ = get_host;
  protoOf(selectorScope$1).host_bjfdhh_k$ = host;
  protoOf(selectorScope$1).get_defined_qtfew0_k$ = get_defined;
  protoOf(selectorScope$1).get_left_woprgw_k$ = get_left;
  protoOf(selectorScope$1).get_right_ixz7xv_k$ = get_right;
  protoOf(selectorScope$1).lang_9i4u6k_k$ = lang_0;
  protoOf(selectorScope$1).nthChild_gg5ihj_k$ = nthChild;
  protoOf(selectorScope$1).nthLastChild_ep0a1r_k$ = nthLastChild;
  protoOf(selectorScope$1).nthOfType_wqjefk_k$ = nthOfType;
  protoOf(selectorScope$1).nthLastOfType_9azghm_k$ = nthLastOfType;
  protoOf(selectorScope$1).not_4ti0eo_k$ = not;
  protoOf(selectorScope$1).get_after_iol2gj_k$ = get_after;
  protoOf(selectorScope$1).get_before_bdhrwo_k$ = get_before;
  protoOf(selectorScope$1).get_cue_18j7sm_k$ = get_cue;
  protoOf(selectorScope$1).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(selectorScope$1).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(selectorScope$1).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(selectorScope$1).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(selectorScope$1).get_selection_jv4aal_k$ = get_selection;
  protoOf(selectorScope$1).slotted_hey9bi_k$ = slotted;
  protoOf(ElementScopeBase).DisposableRefEffect_vqerjf_k$ = DisposableRefEffect;
  protoOf(ElementScopeBase).DisposableRefEffect$composable_69eczt_k$ = DisposableRefEffect$composable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Text_getInstance;
  _.$_$.b = Companion_getInstance_4;
  _.$_$.c = Color_getInstance_0;
  _.$_$.d = Companion_getInstance_3;
  _.$_$.e = Companion_getInstance_6;
  _.$_$.f = Companion_getInstance_7;
  _.$_$.g = Companion_getInstance_5;
  _.$_$.h = placeholder;
  _.$_$.i = placeholder_0;
  _.$_$.j = rows;
  _.$_$.k = Color_1;
  _.$_$.l = StyleSheetBuilderImpl;
  _.$_$.m = alignItems;
  _.$_$.n = backgroundColor;
  _.$_$.o = color;
  _.$_$.p = display;
  _.$_$.q = flexDirection;
  _.$_$.r = flex;
  _.$_$.s = fontFamily;
  _.$_$.t = fontSize;
  _.$_$.u = fontWeight;
  _.$_$.v = height;
  _.$_$.w = justifyContent;
  _.$_$.x = marginBottom;
  _.$_$.y = marginLeft;
  _.$_$.z = marginTop;
  _.$_$.a1 = margin;
  _.$_$.b1 = maxWidth;
  _.$_$.c1 = overflowY;
  _.$_$.d1 = overflow;
  _.$_$.e1 = padding;
  _.$_$.f1 = get_percent;
  _.$_$.g1 = position;
  _.$_$.h1 = get_px;
  _.$_$.i1 = textAlign;
  _.$_$.j1 = get_vh;
  _.$_$.k1 = get_vw;
  _.$_$.l1 = width;
  _.$_$.m1 = Button$composable;
  _.$_$.n1 = Div$composable;
  _.$_$.o1 = Input$composable;
  _.$_$.p1 = Pre$composable;
  _.$_$.q1 = Span$composable;
  _.$_$.r1 = Style$composable_0;
  _.$_$.s1 = Text$composable;
  _.$_$.t1 = TextArea$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
