(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['html-internal-html-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e5;
  var VOID = kotlin_kotlin.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var protoOf = kotlin_kotlin.$_$.gb;
  var to = kotlin_kotlin.$_$.vf;
  var THROW_CCE = kotlin_kotlin.$_$.ne;
  var Pair = kotlin_kotlin.$_$.ke;
  var classMeta = kotlin_kotlin.$_$.x9;
  var setMetadataFor = kotlin_kotlin.$_$.hb;
  var objectMeta = kotlin_kotlin.$_$.fb;
  var interfaceMeta = kotlin_kotlin.$_$.ka;
  var toString = kotlin_kotlin.$_$.lb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var equals = kotlin_kotlin.$_$.aa;
  var charSequenceLength = kotlin_kotlin.$_$.v9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var ensureNotNull = kotlin_kotlin.$_$.ff;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var toString_0 = kotlin_kotlin.$_$.uf;
  var toBoolean = kotlin_kotlin.$_$.hd;
  var numberToDouble = kotlin_kotlin.$_$.bb;
  var getNumberHashCode = kotlin_kotlin.$_$.fa;
  var hashCode = kotlin_kotlin.$_$.ia;
  var defineProp = kotlin_kotlin.$_$.z9;
  var isInterface = kotlin_kotlin.$_$.ta;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var Collection = kotlin_kotlin.$_$.m5;
  var joinToString = kotlin_kotlin.$_$.i7;
  var contains = kotlin_kotlin.$_$.gc;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.t6;
  var copyToArray = kotlin_kotlin.$_$.q6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.tf;
  var lazy = kotlin_kotlin.$_$.lf;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.zb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.n48(new MouseEventListener('click', listener));
  }
  function onMouseDown(listener) {
    this.n48(new MouseEventListener('mousedown', listener));
  }
  function onKeyDown(listener) {
    this.n48(new KeyboardEventListener('keydown', listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [EventsListenerScope], AttrsScopeBuilder);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope], EventsListenerScopeBuilder);
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
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(InputEventListener, 'InputEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(KeyboardEventListener, 'KeyboardEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(InputAttrsScope, 'InputAttrsScope', classMeta, VOID, [EventsListenerScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(TextAreaAttrsScope, 'TextAreaAttrsScope', classMeta, VOID, [EventsListenerScope]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(Color_1, 'Color', objectMeta);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.q4f(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.q4f(propertyName, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder], StyleScopeBuilder);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.d4g();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(StyleSheetBuilderImpl, 'StyleSheetBuilderImpl', classMeta, VOID, [SelectorsScope], StyleSheetBuilderImpl);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase, VOID, ElementScopeImpl);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticInputEvent, 'SyntheticInputEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticKeyboardEvent, 'SyntheticKeyboardEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent);
  //endregion
  function get_setInputValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setInputValue;
  }
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function placeholder(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a48('placeholder', value);
  }
  function placeholder_0(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a48('placeholder', value);
  }
  function rows(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a48('rows', value.toString());
  }
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.a48('type', value.b48_1);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
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
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.d48_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e48_1 = LinkedHashMap_init_$Create$();
    this.f48_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.g48_1 = ArrayList_init_$Create$();
    this.h48_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.i48_1 = ArrayList_init_$Create$();
    this.j48_1 = 8;
  }
  protoOf(AttrsScopeBuilder).k48 = function (listener) {
    this.d48_1.k48(listener);
  };
  protoOf(AttrsScopeBuilder).l48 = function (listener) {
    this.d48_1.l48(listener);
  };
  protoOf(AttrsScopeBuilder).m48 = function (listener) {
    this.d48_1.m48(listener);
  };
  protoOf(AttrsScopeBuilder).n48 = function (listener) {
    this.d48_1.n48(listener);
  };
  protoOf(AttrsScopeBuilder).q48 = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.f48_1);
  };
  protoOf(AttrsScopeBuilder).r48 = function (effect) {
    this.h48_1 = effect;
  };
  protoOf(AttrsScopeBuilder).a48 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.e48_1.n2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).s48 = function (update, value) {
    var tmp = to(update, value);
    this.g48_1.r(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  protoOf(AttrsScopeBuilder).t48 = function () {
    return this.e48_1;
  };
  function Companion() {
    this.u48_1 = 'copy';
    this.v48_1 = 'cut';
    this.w48_1 = 'paste';
    this.x48_1 = 'contextmenu';
    this.y48_1 = 'click';
    this.z48_1 = 'dblclick';
    this.a49_1 = 'focus';
    this.b49_1 = 'blur';
    this.c49_1 = 'focusin';
    this.d49_1 = 'focusout';
    this.e49_1 = 'keydown';
    this.f49_1 = 'keyup';
    this.g49_1 = 'mousedown';
    this.h49_1 = 'mouseup';
    this.i49_1 = 'mouseenter';
    this.j49_1 = 'mouseleave';
    this.k49_1 = 'mousemove';
    this.l49_1 = 'mouseout';
    this.m49_1 = 'mouseover';
    this.n49_1 = 'wheel';
    this.o49_1 = 'scroll';
    this.p49_1 = 'select';
    this.q49_1 = 'touchcancel';
    this.r49_1 = 'touchend';
    this.s49_1 = 'touchmove';
    this.t49_1 = 'touchstart';
    this.u49_1 = 'animationcancel';
    this.v49_1 = 'animationend';
    this.w49_1 = 'animationiteration';
    this.x49_1 = 'animationstart';
    this.y49_1 = 'beforeinput';
    this.z49_1 = 'input';
    this.a4a_1 = 'change';
    this.b4a_1 = 'invalid';
    this.c4a_1 = 'drag';
    this.d4a_1 = 'drop';
    this.e4a_1 = 'dragstart';
    this.f4a_1 = 'dragend';
    this.g4a_1 = 'dragover';
    this.h4a_1 = 'dragenter';
    this.i4a_1 = 'dragleave';
    this.j4a_1 = 'submit';
    this.k4a_1 = 'reset';
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o48_1 = ArrayList_init_$Create$();
    this.p48_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).n48 = function (listener) {
    this.o48_1.r(listener);
  };
  protoOf(EventsListenerScopeBuilder).l4a = function () {
    return this.o48_1;
  };
  function Button() {
    Button_instance = this;
    InputTypeWithUnitValue.call(this, 'button');
    this.p4a_1 = 0;
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
    this.x4a_1 = 0;
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
    this.f4b_1 = 0;
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
    this.m4b_1 = 0;
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
    this.q4b_1 = 0;
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
    this.u4b_1 = 0;
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
    this.y4b_1 = 0;
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
    this.c4c_1 = 0;
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
    this.g4c_1 = 0;
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
    this.k4c_1 = 0;
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
    this.r4c_1 = 0;
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
    this.v4c_1 = 0;
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
    this.z4c_1 = 0;
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
    this.d4d_1 = 0;
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
    this.h4d_1 = 0;
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
    this.l4d_1 = 0;
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
    this.p4d_1 = 0;
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
    this.t4d_1 = 0;
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
    this.x4d_1 = 0;
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
    this.b4e_1 = 0;
  }
  var Week_instance;
  function Week_getInstance() {
    if (Week_instance == null)
      new Week();
    return Week_instance;
  }
  function InputTypeWithStringValue(name) {
    InputType.call(this, name);
    this.i4b_1 = 0;
  }
  protoOf(InputTypeWithStringValue).b4b = function (event) {
    return Week_getInstance().c4e(event);
  };
  function InputTypeWithUnitValue(name) {
    InputType.call(this, name);
    this.s4a_1 = 0;
  }
  protoOf(InputTypeWithUnitValue).t4a = function (event) {
    return Unit_instance;
  };
  protoOf(InputTypeWithUnitValue).b4b = function (event) {
    this.t4a(event);
    return Unit_instance;
  };
  function InputTypeCheckedValue(name) {
    InputType.call(this, name);
    this.a4b_1 = 0;
  }
  protoOf(InputTypeCheckedValue).b4b = function (event) {
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
    this.n4c_1 = 0;
  }
  protoOf(InputTypeNumberValue).b4b = function (event) {
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
  function Companion_0() {
  }
  protoOf(Companion_0).d4e = function (type) {
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
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function InputType(typeStr) {
    this.b48_1 = typeStr;
    this.c48_1 = 0;
  }
  protoOf(InputType).c4e = function (event) {
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
  function SyntheticEventListener(event, listener) {
    this.e4e_1 = event;
    this.f4e_1 = listener;
    this.g4e_1 = this.e4e_1;
    this.h4e_1 = 0;
  }
  protoOf(SyntheticEventListener).i4e = function () {
    return this.g4e_1;
  };
  protoOf(SyntheticEventListener).j4e = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.f4e_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.j4e(event);
  };
  function InputEventListener(eventName, inputType, listener) {
    var tmp;
    if (eventName === VOID) {
      tmp = 'input';
    } else {
      tmp = eventName;
    }
    eventName = tmp;
    SyntheticEventListener.call(this, eventName, listener);
    this.o4e_1 = inputType;
  }
  protoOf(InputEventListener).j4e = function (event) {
    var value = this.o4e_1.b4b(event);
    this.f4e_1(new SyntheticInputEvent(value, event));
  };
  protoOf(InputEventListener).handleEvent = function (event) {
    return this.j4e(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).j4e = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.f4e_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.j4e(event);
  };
  function KeyboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(KeyboardEventListener).j4e = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.f4e_1(new SyntheticKeyboardEvent(event));
  };
  protoOf(KeyboardEventListener).handleEvent = function (event) {
    return this.j4e(event);
  };
  function InputAttrsScope(inputType, attrsScope) {
    this.x4e_1 = inputType;
    this.y4e_1 = attrsScope;
    this.z4e_1 = 8;
  }
  protoOf(InputAttrsScope).a48 = function (attr, value) {
    return this.y4e_1.a48(attr, value);
  };
  protoOf(InputAttrsScope).k48 = function (listener) {
    this.y4e_1.k48(listener);
  };
  protoOf(InputAttrsScope).l48 = function (listener) {
    this.y4e_1.l48(listener);
  };
  protoOf(InputAttrsScope).m48 = function (listener) {
    this.y4e_1.m48(listener);
  };
  protoOf(InputAttrsScope).s48 = function (update, value) {
    this.y4e_1.s48(update, value);
  };
  protoOf(InputAttrsScope).a4f = function (effect) {
    this.y4e_1.r48(effect);
  };
  protoOf(InputAttrsScope).r48 = function (effect) {
    return this.a4f(effect);
  };
  protoOf(InputAttrsScope).n48 = function (listener) {
    this.y4e_1.n48(listener);
  };
  protoOf(InputAttrsScope).q48 = function (builder) {
    this.y4e_1.q48(builder);
  };
  protoOf(InputAttrsScope).b4f = function (value) {
    var tmp0_subject = this.x4e_1;
    if (((equals(tmp0_subject, Checkbox_getInstance()) ? true : equals(tmp0_subject, Radio_getInstance())) ? true : equals(tmp0_subject, Hidden_getInstance())) ? true : equals(tmp0_subject, Submit_getInstance())) {
      this.a48('value', value);
    } else {
      this.s48(get_setInputValue(), value);
    }
    return this;
  };
  protoOf(InputAttrsScope).c4f = function (listener) {
    this.n48(new InputEventListener('input', this.x4e_1, listener));
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
      if (!get_controlledRadioGroups().u2(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var this_1 = get_controlledRadioGroups();
        var key = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var value = LinkedHashSet_init_$Create$();
        this_1.n2(key, value);
      }
      ensureNotNull(get_controlledRadioGroups().x2(element.name)).r(element);
    }
  }
  function DisposeRadioGroupEffect$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var $composer_0 = $composer;
    $composer_0.x3a(-1867048565);
    if (isTraceInProgress()) {
      traceEventStart(-1867048565, $changed, -1, 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect$composable (InternalControlledInputUtils.kt:67)');
    }
    DisposableEffect$composable(null, DisposeRadioGroupEffect$composable$lambda(_this__u8e3s4), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.y3a();
  }
  function restoreControlledInputState(inputElement) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var type = Companion_instance_0.d4e(inputElement.type);
    if (get_controlledInputsValuesWeakMap().has(inputElement)) {
      if (equals(type, Radio_getInstance())) {
        var tmp0_safe_receiver = get_controlledRadioGroups().x2(inputElement.name);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = tmp0_safe_receiver.u();
          while (tmp0_iterator.v()) {
            var element = tmp0_iterator.x();
            // Inline function 'org.jetbrains.compose.web.attributes.builders.restoreControlledInputState.<anonymous>' call
            element.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(element)));
          }
        }
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
        return Unit_instance;
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
    this.d4f_1 = $ref;
  }
  protoOf(_no_name_provided__qut3iv).jn = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = get_controlledRadioGroups().x2(this.d4f_1.name);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.s(this.d4f_1);
    var tmp1_safe_receiver = get_controlledRadioGroups().x2(this.d4f_1.name);
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c1()) === true) {
      get_controlledRadioGroups().r2(this.d4f_1.name);
    }
  };
  function DisposeRadioGroupEffect$composable$lambda($this_DisposeRadioGroupEffect$composable) {
    return function ($this$DisposableEffect) {
      var ref = $this_DisposeRadioGroupEffect$composable.e4f($this$DisposableEffect);
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
  function TextAreaAttrsScope(attrsScope) {
    this.f4f_1 = attrsScope;
    this.g4f_1 = 8;
  }
  protoOf(TextAreaAttrsScope).a48 = function (attr, value) {
    return this.f4f_1.a48(attr, value);
  };
  protoOf(TextAreaAttrsScope).k48 = function (listener) {
    this.f4f_1.k48(listener);
  };
  protoOf(TextAreaAttrsScope).l48 = function (listener) {
    this.f4f_1.l48(listener);
  };
  protoOf(TextAreaAttrsScope).m48 = function (listener) {
    this.f4f_1.m48(listener);
  };
  protoOf(TextAreaAttrsScope).s48 = function (update, value) {
    this.f4f_1.s48(update, value);
  };
  protoOf(TextAreaAttrsScope).h4f = function (effect) {
    this.f4f_1.r48(effect);
  };
  protoOf(TextAreaAttrsScope).r48 = function (effect) {
    return this.h4f(effect);
  };
  protoOf(TextAreaAttrsScope).n48 = function (listener) {
    this.f4f_1.n48(listener);
  };
  protoOf(TextAreaAttrsScope).q48 = function (builder) {
    this.f4f_1.q48(builder);
  };
  protoOf(TextAreaAttrsScope).b4f = function (value) {
    this.s48(get_setInputValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).i4f = function (listener) {
    this.n48(new InputEventListener('input', Text_getInstance(), listener));
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function CSSKeyframesRuleDeclaration() {
  }
  function CSSStyledRuleDeclaration() {
  }
  function CSSGroupingRuleDeclaration() {
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_vw(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vw' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vw');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function CSSUnitValueTyped(value, unit) {
    this.l4f_1 = value;
    this.m4f_1 = unit;
    this.n4f_1 = 0;
  }
  protoOf(CSSUnitValueTyped).q2 = function () {
    return this.l4f_1;
  };
  protoOf(CSSUnitValueTyped).o4f = function () {
    return this.m4f_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.l4f_1 + this.m4f_1;
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.l4f_1);
    result = imul(result, 31) + hashCode(this.m4f_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.l4f_1, tmp0_other_with_cast.l4f_1))
      return false;
    if (!equals(this.m4f_1, tmp0_other_with_cast.m4f_1))
      return false;
    return true;
  };
  function Color_0(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return name;
  }
  function Color_1() {
    this.p4f_1 = 0;
  }
  var Color_instance_0;
  function Color_getInstance_0() {
    return Color_instance_0;
  }
  function StyleScope() {
  }
  function StyleHolder() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v4f_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.w4f_1 = ArrayList_init_$Create$();
    this.x4f_1 = 0;
  }
  protoOf(StyleScopeBuilder).t4f = function () {
    return this.v4f_1;
  };
  protoOf(StyleScopeBuilder).u4f = function () {
    return this.w4f_1;
  };
  protoOf(StyleScopeBuilder).q4f = function (propertyName, value) {
    this.t4f().r(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.t4f(), other.t4f()) ? nativeEquals(this.u4f(), other.u4f()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StylePropertyDeclaration(name, value) {
    this.y4f_1 = name;
    this.z4f_1 = value;
    this.a4g_1 = 8;
  }
  protoOf(StylePropertyDeclaration).de = function () {
    return this.y4f_1;
  };
  protoOf(StylePropertyDeclaration).ee = function () {
    return this.z4f_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.y4f_1 + ', value=' + this.z4f_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.y4f_1);
    result = imul(result, 31) + hashCode(this.z4f_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.y4f_1 === tmp0_other_with_cast.y4f_1))
      return false;
    if (!equals(this.z4f_1, tmp0_other_with_cast.z4f_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.n() === properties.n()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.c1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.g1(tmp0);
        if (!(element.y4f_1 === otherProp.y4f_1 ? toString(element.z4f_1) === toString(otherProp.z4f_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.c4g_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.c4g_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.c4g_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.c4g_1 === tmp0_other_with_cast.c4g_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.f4g_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.f4g_1 === other.f4g_1 ? this.g4g() == other.g4g() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).g4g = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.g4g();
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
    return ':' + this.f4g_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function StyleSheetBuilderImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h4g_1 = ArrayList_init_$Create$();
    this.i4g_1 = 8;
  }
  protoOf(StyleSheetBuilderImpl).j4g = function () {
    return this.h4g_1;
  };
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('background-color', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('max-width', value);
  }
  function width(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('height', value);
  }
  function color(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('color', value);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r4f('flex-direction', flexDirection);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r4f('align-items', alignItems);
  }
  function flex(_this__u8e3s4, value) {
    _this__u8e3s4.s4f('flex', value);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r4f('justify-content', justifyContent);
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('margin-bottom', value);
  }
  function marginLeft(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('margin-left', value);
  }
  function marginTop(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('margin-top', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.r4f('margin', joinToString(value, ' '));
  }
  function overflow(_this__u8e3s4, value) {
    _this__u8e3s4.r4f('overflow', value);
  }
  function overflowY(_this__u8e3s4, value) {
    _this__u8e3s4.r4f('overflow-y', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.r4f('padding', joinToString(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r4f('position', position);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r4f('display', displayStyle);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.q4f('font-size', value);
  }
  function fontWeight(_this__u8e3s4, value) {
    _this__u8e3s4.r4f('font-weight', value);
  }
  function textAlign(_this__u8e3s4, value) {
    _this__u8e3s4.r4f('text-align', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.r4f('font-family', joinToString(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function CSSSelector() {
    this.k4g_1 = 0;
  }
  function TagElement$composable(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-1594897193);
    sourceInformation($composer_0, 'C(TagElement$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m3b(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m3b(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-1594897193, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement$composable (Base.kt:106)');
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
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.y3a();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode$composable' call
      var $composer_2 = $composer_0;
      $composer_2.d3b();
      if ($composer_2.u3a()) {
        var tmp_1 = $composer_2;
        tmp_1.e3b(TagElement$composable$lambda(elementBuilder, scope));
      } else {
        $composer_2.f3b();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var $this$ComposeDomNode = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.h48_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).x3a(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode));
      Updater__set_impl_v7kwss($this$update, attrsScope.i48_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.f48_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.t48();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.d48_1.l4a();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.g48_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).y3a();
      $composer_2.x3a(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.x3a(-1128047990);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.y3a();
      $composer_2.y3a();
      $composer_2.g3b();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect$composable(null, TagElement$composable$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp1_safe_receiver = $composer_0.a3b();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.r3p(TagElement$composable$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.n4g_1 = node;
    this.o4g_1 = emptyList();
  }
  protoOf(DomElementWrapper).m46 = function () {
    return this.n4g_1;
  };
  protoOf(DomElementWrapper).p4g = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.o4g_1.u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.n4g_1.removeEventListener(element.i4e(), element);
    }
    this.o4g_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.o4g_1.u();
    while (tmp0_iterator_0.v()) {
      var element_0 = tmp0_iterator_0.x();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.n4g_1.addEventListener(element_0.i4e(), element_0);
    }
  };
  protoOf(DomElementWrapper).q4g = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.de();
      var item = element.ee();
      applicator(this.n4g_1, item);
    }
  };
  protoOf(DomElementWrapper).r4g = function (styleApplier) {
    var tmp0_subject = this.n4g_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.n4g_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.n4g_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.t4f().u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.de();
        var value = element.ee();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.u4f().u();
      while (tmp0_iterator_0.v()) {
        var element_0 = tmp0_iterator_0.x();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.de();
        var value_0 = element_0.ee();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).s4g = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.n4g_1.getAttributeNames();
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
          this.n4g_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.m2().u();
    while (tmp0_iterator.v()) {
      var element_0 = tmp0_iterator.x();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.n4g_1.setAttribute(element_0.p2(), element_0.q2());
    }
  };
  protoOf(DomElementWrapper).t4g = function (classes) {
    this.n4g_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.c1()) {
      var tmp = this.n4g_1.classList;
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
      var node = $elementBuilder.c3w();
      $scope.x4g(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.t4g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.r4g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.s4g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.p4g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.q4g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$composable$lambda_0($this, $scope) {
    return function ($this$DisposableEffect) {
      return $this($this$DisposableEffect, $scope.y4g());
    };
  }
  function TagElement$composable$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement$composable($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).x4g = function (_set____db54di) {
    this.w4g_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).y4g = function () {
    var tmp = this.w4g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).e4f = function (_this__u8e3s4) {
    return this.y4g();
  };
  function ElementScopeBase() {
    this.z4g_1 = 0;
    this.a4h_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
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
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  var P;
  var Em;
  var I;
  var B;
  var Small;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  var Ul;
  var Ol;
  var Li;
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  function get_TextArea() {
    _init_properties_Elements_kt__eyv5nt();
    return TextArea;
  }
  var TextArea;
  var Nav;
  function get_Pre() {
    _init_properties_Elements_kt__eyv5nt();
    return Pre;
  }
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.c4h_1;
    el$factory();
    return this_0.q2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.b4h_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.b4h_1 = tagName;
    var tmp = this;
    tmp.c4h_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).c3w = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Text$composable(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-363526853);
    sourceInformation($composer_0, 'C(Text$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-363526853, $changed, -1, 'org.jetbrains.compose.web.dom.Text$composable (Elements.kt:479)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode$composable' call
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
        // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
        var value_0 = Text$composable$lambda;
        $composer_1.j3b(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.y3a();
      var $composer_2 = $composer_0;
      $composer_2.x3a(-1846754774);
      sourceInformation($composer_2, 'CC(ComposeNode$composable):Composables.kt#9igjgp');
      var tmp_1 = $composer_2.t3a();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_2.d3b();
      if ($composer_2.u3a()) {
        var tmp_2 = $composer_2;
        tmp_2.e3b(Text$composable$lambda_0(tmp0));
      } else {
        $composer_2.f3b();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$composable$lambda_1);
      $composer_2.g3b();
      $composer_2.y3a();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(Text$composable$lambda_2(value, $changed));
    }
  }
  function Div$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(1021009996);
    sourceInformation($composer_0, 'C(Div$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m3b(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m3b(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
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
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(Div$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Input$composable(type, attrs, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-1013116589);
    sourceInformation($composer_0, 'C(Input$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(type) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m3b(attrs) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
      if (isTraceInProgress()) {
        traceEventStart(-1013116589, $dirty, -1, 'org.jetbrains.compose.web.dom.Input$composable (Elements.kt:1054)');
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
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
        var value = mutableStateOf(0);
        $composer_1.j3b(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.y3a();
      var keyForRestoringControlledState = tmp0;
      var tmp_1 = get_Input();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.x3a(-1058148781);
      sourceInformation($composer_2, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_2.k3b(type) | $composer_2.k3b(keyForRestoringControlledState)) | $composer_2.k3b(attrs));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.i3b();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
        var value_0 = Input$composable$lambda(type, attrs, keyForRestoringControlledState);
        $composer_2.j3b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_2.y3a();
      var tmp_4 = tmp0_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 558133459, true, Input$composable$lambda_0(type, keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.x3a(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_3.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.i3b();
      var tmp_6;
      if (invalid_0 ? true : it_1 === Companion_getInstance().s3a_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_3.j3b(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_3.y3a();
      TagElement$composable(tmp_1, tmp_4, tmp0_1, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(Input$composable$lambda_1(type, attrs, $changed));
    }
  }
  function TextArea$composable(value, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var value_0 = {_v: value};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-577256683);
    sourceInformation($composer_0, 'C(TextArea$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k3b(value_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m3b(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
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
      $composer_1.x3a(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i3b();
      var tmp;
      if (false ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_1 = !(value_0._v == null);
        $composer_1.j3b(value_1);
        tmp = value_1;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.y3a();
      var firstProvidedValueWasNotNull = tmp0;
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
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_2 = mutableStateOf(0);
        $composer_2.j3b(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_2.y3a();
      var keyForRestoringControlledState = tmp0_0;
      var tmp_3 = get_TextArea();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var keys = [keyForRestoringControlledState, attrs_0._v, firstProvidedValueWasNotNull, value_0._v];
      var $composer_3 = $composer_0;
      $composer_3.x3a(-1603429786);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = keys.length;
      while (inductionVariable < last) {
        var key = keys[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_3.k3b(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = invalid;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.i3b();
      var tmp_4;
      if (invalid_0 ? true : it_1 === Companion_getInstance().s3a_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_3 = TextArea$composable$lambda(attrs_0, firstProvidedValueWasNotNull, value_0, keyForRestoringControlledState);
        $composer_3.j3b(value_3);
        tmp_4 = value_3;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_3.y3a();
      var tmp_6 = tmp0_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 614898220, true, TextArea$composable$lambda_0(keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.x3a(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_4.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_4.i3b();
      var tmp_8;
      if (invalid_1 ? true : it_2 === Companion_getInstance().s3a_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_4.j3b(value_4);
        tmp_8 = value_4;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_2 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_4.y3a();
      TagElement$composable(tmp_3, tmp_6, tmp0_2, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(TextArea$composable$lambda_1(value_0, attrs_0, $changed, $default));
    }
  }
  function Button$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-767970749);
    sourceInformation($composer_0, 'C(Button$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m3b(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m3b(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
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
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(Button$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Span$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-155327957);
    sourceInformation($composer_0, 'C(Span$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m3b(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m3b(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
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
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(Span$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Pre$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-2070487814);
    sourceInformation($composer_0, 'C(Pre$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m3b(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m3b(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
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
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(Pre$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Style$composable(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z3a(-1688263201);
    sourceInformation($composer_0, 'C(Style$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m3b(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.k3b(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
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
      $composer_1.x3a(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.k3b(key1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i3b();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().s3a_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
        var value = Style$composable$lambda(applyAttrs_0);
        $composer_1.j3b(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.y3a();
      var tmp_2 = tmp0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 962227798, true, Style$composable$lambda_0(cssRules, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.x3a(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.k3b(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.i3b();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().s3a_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_2.j3b(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_2.y3a();
      TagElement$composable(tmp, tmp_2, tmp0_0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c3b();
    }
    var tmp0_safe_receiver = $composer_0.a3b();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r3p(Style$composable$lambda_1(applyAttrs_0, cssRules, $changed, $default));
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
    var tmp = $this$set.m46();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$composable$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text$composable($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Div$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Input$composable$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.b13($keyForRestoringControlledState.q2() + 1 | 0);
      return Unit_instance;
    };
  }
  function Input$composable$lambda($type, $attrs, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var inputAttrsBuilder = new InputAttrsScope($type, $this$TagElement);
      type(inputAttrsBuilder, $type);
      inputAttrsBuilder.c4f(Input$composable$lambda$lambda($keyForRestoringControlledState));
      $attrs(inputAttrsBuilder);
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_0() {
  }
  protoOf(_no_name_provided__qut3iv_0).jn = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Input$composable$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledInputState($this_TagElement.e4f($this$DisposableEffect));
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
        $dirty = $dirty | ($composer_0.k3b($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(558133459, $dirty, -1, 'org.jetbrains.compose.web.dom.Input$composable.<anonymous> (Elements.kt:1073)');
        }
        $composer_0.x3a(-1270925487);
        if (equals($type, Radio_getInstance())) {
          DisposeRadioGroupEffect$composable($this$TagElement, $composer_0, 14 & $dirty);
        }
        $composer_0.y3a();
        var tmp_1 = $keyForRestoringControlledState.q2();
        DisposableEffect$composable(tmp_1, Input$composable$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.c3b();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function Input$composable$lambda_1($type, $attrs, $$changed) {
    return function ($composer, $force) {
      Input$composable($type, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TextArea$composable$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.b13($keyForRestoringControlledState.q2() + 1 | 0);
      return Unit_instance;
    };
  }
  function TextArea$composable$lambda($attrs, $firstProvidedValueWasNotNull, $value, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var textAreaAttrsBuilder = new TextAreaAttrsScope($this$TagElement);
      textAreaAttrsBuilder.i4f(TextArea$composable$lambda$lambda($keyForRestoringControlledState));
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v(textAreaAttrsBuilder);
      }
      var tmp_0;
      if ($firstProvidedValueWasNotNull) {
        var tmp0_elvis_lhs = $value._v;
        textAreaAttrsBuilder.b4f(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).jn = function () {
    // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function TextArea$composable$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledTextAreaState($this_TagElement.e4f($this$DisposableEffect));
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
        $dirty = $dirty | ($composer_0.k3b($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(614898220, $changed, -1, 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous> (Elements.kt:754)');
        }
        var tmp_1 = $keyForRestoringControlledState.q2();
        DisposableEffect$composable(tmp_1, TextArea$composable$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.c3b();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function TextArea$composable$lambda_1($value, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      TextArea$composable($value._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Pre$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Pre$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$composable$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_2($cssStylesheet) {
    this.d4h_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv_2).jn = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.d4h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$composable$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.e4f($this$DisposableEffect).sheet;
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
        $dirty = $dirty | ($composer_0.k3b($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.v3a()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $changed, -1, 'org.jetbrains.compose.web.dom.Style$composable.<anonymous> (Elements.kt:989)');
        }
        var tmp_1 = $cssRules.n();
        DisposableEffect$composable_0($cssRules, tmp_1, Style$composable$lambda$lambda($this$TagElement, $cssRules), $composer_0, 14 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.c3b();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j46(p0, p1, p2);
    };
  }
  function Style$composable$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style$composable($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
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
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.u();
    while (tmp0_iterator.v()) {
      var element = tmp0_iterator.x();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.e4h() + ' {}');
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
      var tmp0_iterator = cssRuleDeclaration.j4f().t4f().u();
      while (tmp0_iterator.v()) {
        var element = tmp0_iterator.x();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.de();
        var value = element.ee();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.j4f().u4f().u();
      while (tmp0_iterator_0.v()) {
        var element_0 = tmp0_iterator_0.x();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.de();
        var value_0 = element_0.ee();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.k4f().u();
        while (tmp0_iterator_1.v()) {
          var element_1 = tmp0_iterator_1.x();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.f4h_1.u();
          while (tmp0_iterator_2.v()) {
            var element_2 = tmp0_iterator_2.x();
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
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.e4h() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.e4h() + ' {}');
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
  function SyntheticEvent(nativeEvent) {
    this.j4h_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k4h_1 = this.j4h_1.target;
    this.l4h_1 = this.j4h_1.bubbles;
    this.m4h_1 = this.j4h_1.cancelable;
    this.n4h_1 = this.j4h_1.composed;
    this.o4h_1 = this.j4h_1.currentTarget;
    this.p4h_1 = this.j4h_1.eventPhase;
    this.q4h_1 = this.j4h_1.defaultPrevented;
    this.r4h_1 = this.j4h_1.timeStamp;
    this.s4h_1 = this.j4h_1.type;
    this.t4h_1 = this.j4h_1.isTrusted;
    this.u4h_1 = 0;
  }
  protoOf(SyntheticEvent).v4h = function () {
    return this.j4h_1.preventDefault();
  };
  function SyntheticInputEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.i4i_1 = value;
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
    tmp.j4i_1 = tmp_0;
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
    tmp_1.k4i_1 = tmp_2;
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
    tmp_3.l4i_1 = tmp_4;
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
    tmp_5.m4i_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    this.n4i_1 = 0;
  }
  function SyntheticKeyboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.a4j_1 = nativeEvent;
    this.b4j_1 = nativeEvent.altKey;
    this.c4j_1 = nativeEvent.code;
    this.d4j_1 = nativeEvent.ctrlKey;
    this.e4j_1 = nativeEvent.isComposing;
    this.f4j_1 = nativeEvent.key;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g4j_1 = toString(nativeEvent.locale);
    this.h4j_1 = nativeEvent.location;
    this.i4j_1 = nativeEvent.metaKey;
    this.j4j_1 = nativeEvent.repeat;
    this.k4j_1 = nativeEvent.shiftKey;
    this.l4j_1 = 0;
  }
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.y4j_1 = nativeEvent;
    this.z4j_1 = nativeEvent.altKey;
    this.a4k_1 = nativeEvent.button;
    this.b4k_1 = nativeEvent.buttons;
    this.c4k_1 = nativeEvent.clientX;
    this.d4k_1 = nativeEvent.clientY;
    this.e4k_1 = nativeEvent.ctrlKey;
    this.f4k_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.g4k_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.h4k_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.i4k_1 = nativeEvent.offsetX;
    this.j4k_1 = nativeEvent.offsetY;
    this.k4k_1 = nativeEvent.pageX;
    this.l4k_1 = nativeEvent.pageY;
    this.m4k_1 = nativeEvent.region;
    this.n4k_1 = nativeEvent.relatedTarget;
    this.o4k_1 = nativeEvent.screenX;
    this.p4k_1 = nativeEvent.screenY;
    this.q4k_1 = nativeEvent.shiftKey;
    this.r4k_1 = nativeEvent.x;
    this.s4k_1 = nativeEvent.y;
    this.t4k_1 = 0;
  }
  //region block: post-declaration
  protoOf(EventsListenerScopeBuilder).k48 = onClick;
  protoOf(EventsListenerScopeBuilder).m48 = onMouseDown;
  protoOf(EventsListenerScopeBuilder).l48 = onKeyDown;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.q2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.o4f();
  });
  protoOf(StyleScopeBuilder).r4f = property;
  protoOf(StyleScopeBuilder).s4f = property_0;
  protoOf(StyleSheetBuilderImpl).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheetBuilderImpl).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheetBuilderImpl).d4g = get_hover;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Color_instance_0 = new Color_1();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Text_getInstance;
  _.$_$.b = Companion_instance_3;
  _.$_$.c = Color_instance_0;
  _.$_$.d = Companion_instance_1;
  _.$_$.e = Companion_instance_2;
  _.$_$.f = Companion_instance_5;
  _.$_$.g = Companion_instance_4;
  _.$_$.h = placeholder;
  _.$_$.i = placeholder_0;
  _.$_$.j = rows;
  _.$_$.k = Color_0;
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
  _.$_$.r1 = Style$composable;
  _.$_$.s1 = Text$composable;
  _.$_$.t1 = TextArea$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
