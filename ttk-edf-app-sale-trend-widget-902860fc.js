webpackJsonp([39,60],{"417":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function config(options){options&&(0,_extends3["default"])(_options,options)}Object.defineProperty(exports,"__esModule",{"value":!0});var _extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_webapi=__webpack_require__(1708),_webapi2=_interopRequireDefault(_webapi),_options={"webapi":_webapi2["default"]};config.current=_options,exports["default"]=config,module.exports=exports["default"]},"710":function(module,exports){"use strict";function getMeta(){return{"name":"root","component":"Layout","className":"ttk-edf-app-sale-trend-widget","children":[{"name":"left","component":"Layout","className":"ttk-edf-app-sale-trend-widget-left","children":[{"name":"title","component":"span","children":"\u603b\u9500\u552e\u989d\u8d8b\u52bf"},{"name":"chart","component":"Echarts","option":{"tooltip":{"trigger":"axis"},"xAxis":[{"type":"category","data":"{{data.saleTrend.x}}"}],"yAxis":[{"type":"value"}],"grid":{"left":60,"right":100,"bottom":20,"top":20},"series":[{"type":"bar","smooth":!0,"sampling":"average","animation":!1,"itemStyle":{"normal":{"color":"rgb(70, 130, 180)","shadowColor":"rgba(0, 0, 0, 0.5)","shadowBlur":10}},"areaStyle":{"normal":{"color":"rgb(70, 130, 180)"}},"data":"{{data.saleTrend.y}}"}]}}]},{"name":"right","component":"Layout","className":"ttk-edf-app-sale-trend-widget-right","children":[{"name":"title","component":"span","className":"ttk-edf-app-sale-trend-widget-right-title","children":"\u95e8\u5e97\u9500\u552e\u989d\u6392\u884c"},{"name":"list","component":"Layout","className":"ttk-edf-app-sale-trend-widget-right-list","children":{"name":"detail","component":"Layout","className":"ttk-edf-app-sale-trend-widget-right-list-detail","children":[{"name":"index","component":"Badge","count":"{{data.topForStore[_rowIndex].index}}"},{"name":"name","component":"div","className":"ttk-edf-app-sale-trend-widget-right-list-detail-name","children":"{{data.topForStore[_rowIndex].storeName}}"},{"name":"total","component":"div","children":"{{data.topForStore[_rowIndex].total}}"}],"_power":"for in data.topForStore"}}]}]}}function getInitState(){return{"data":{}}}Object.defineProperty(exports,"__esModule",{"value":!0}),exports.getMeta=getMeta,exports.getInitState=getInitState},"1705":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function creator(option){var metaAction=new _edfMetaEngine.action(option),o=new action((0,_extends3["default"])({},option,{"metaAction":metaAction})),ret=(0,_extends3["default"])({},metaAction,o);return metaAction.config({"metaHandlers":ret}),ret}Object.defineProperty(exports,"__esModule",{"value":!0});var _extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2);exports["default"]=creator;var _react=__webpack_require__(1),_edfMetaEngine=(_interopRequireDefault(_react),__webpack_require__(5)),_config=__webpack_require__(417),_config2=_interopRequireDefault(_config),action=function action(option){var _this=this;(0,_classCallCheck3["default"])(this,action),this.onInit=function(_ref){var component=_ref.component,injections=_ref.injections;_this.component=component,_this.injections=injections,injections.reduce("init",_this.component.props.data)},this.metaAction=option.metaAction,this.config=_config2["default"].current};module.exports=exports["default"]},"1706":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{"value":!0}),exports["default"]=void 0;var _dec,_class,_extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_possibleConstructorReturn2=__webpack_require__(7),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(6),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(1),_edfMetaEngine=(_interopRequireDefault(_react),__webpack_require__(5)),_index=__webpack_require__(711),_index2=_interopRequireDefault(_index),C=(_dec=(0,_edfMetaEngine.wrapper)(_index2["default"]),_dec(_class=function(_Component){function C(){return(0,_classCallCheck3["default"])(this,C),(0,_possibleConstructorReturn3["default"])(this,_Component.apply(this,arguments))}return(0,_inherits3["default"])(C,_Component),C.prototype.render=function render(){return this.props.monkeyKing((0,_extends3["default"])({},this.props,{"path":"root"}))},C}(_react.Component))||_class);exports["default"]=C,module.exports=exports["default"]},"1707":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function creator(option){var metaReducer=new _edfMetaEngine.reducer(option),o=new reducer((0,_extends3["default"])({},option,{"metaReducer":metaReducer}));return(0,_extends3["default"])({},metaReducer,o)}Object.defineProperty(exports,"__esModule",{"value":!0});var _class,_temp,_initialiseProps,_extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2);exports["default"]=creator;var _edfMetaEngine=(__webpack_require__(11),__webpack_require__(5)),_config=__webpack_require__(417),_config2=_interopRequireDefault(_config),_data=__webpack_require__(710),reducer=(_temp=_class=function reducer(option){(0,_classCallCheck3["default"])(this,reducer),_initialiseProps.call(this),this.metaReducer=option.metaReducer,this.config=_config2["default"].current},_initialiseProps=function _initialiseProps(){var _this=this;this.init=function(state,option){var initState=(0,_data.getInitState)();return option&&(initState.data=option),_this.metaReducer.init(state,initState)}},_temp);module.exports=exports["default"]},"1708":1797});