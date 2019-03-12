webpackJsonp([41,58],{"421":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function config(options){options&&(0,_extends3["default"])(_options,options)}Object.defineProperty(exports,"__esModule",{"value":!0});var _extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_webapi=__webpack_require__(1716),_webapi2=_interopRequireDefault(_webapi),_options={"webapi":_webapi2["default"]};config.current=_options,exports["default"]=config,module.exports=exports["default"]},"716":function(module,exports){"use strict";function getMeta(){return{"name":"root","component":"div","className":"ttk-edf-app-dashboard-analysis","_visible":"{{!!data.visit}}","children":[{"name":"gridLayout","component":"div","className":"ttk-edf-app-dashboard-analysis-grid","autoSize":!0,"rowHeight":50,"isResizable":!1,"isDraggable":!1,"useCSSTransforms":!1,"containerPadding":[10,10],"children":[{"name":"sale","component":"div","key":"sale","children":{"name":"card","component":"Card","children":[{"name":"app","component":"AppLoader","appName":"ttk-edf-app-sale-widget","data":"{{data.sale}}"}]}},{"name":"visit","component":"div","key":"visit","children":{"name":"card","component":"Card","children":[{"name":"app","component":"AppLoader","appName":"ttk-edf-app-visit-widget","data":"{{data.visit}}"}]}},{"name":"trade","component":"div","key":"trade","children":{"name":"card","component":"Card","children":[{"name":"app","component":"AppLoader","appName":"ttk-edf-app-trade-widget","data":"{{data.trade}}"}]}},{"name":"market","component":"div","key":"market","children":{"name":"card","component":"Card","children":[{"name":"app","component":"AppLoader","appName":"ttk-edf-app-market-widget","data":"{{data.market}}"}]}}]},{"name":"trend","component":"div","className":"ttk-edf-app-dashboard-analysis-trendDiv","key":"trend","children":[{"name":"card","component":"Card","children":[{"name":"trend","component":"Layout","className":"ttk-edf-app-dashboard-analysis-trend","children":[{"name":"tabs","component":"Tabs","children":[{"name":"saleTrend","component":"Tabs.TabPane","tab":"\u9500\u552e\u989d","key":"saleTrend"},{"name":"visitTrend","component":"Tabs.TabPane","tab":"\u8bbf\u95ee\u91cf","key":"visitTrend"}]},{"name":"saleTrend","component":"AppLoader","appName":"ttk-edf-app-sale-trend-widget","data":"{{({saleTrend:data.saleTrend,topForStore:data.topForStore})}}"}]}]}]},{"name":"buttomDiv","component":"div","className":"ttk-edf-app-dashboard-analysis-buttomDiv","children":[{"name":"hotSearch","component":"div","key":"hotSearch","children":[{"name":"card","component":"Card","title":"\u7ebf\u4e0a\u70ed\u95e8\u641c\u7d22","children":[{"name":"app","component":"AppLoader","appName":"ttk-edf-app-hot-search-widget","data":"{{data.hotSearch}}"}]}]},{"name":"saleProportion","component":"div","key":"saleProportion","children":[{"name":"card","component":"Card","title":"\u9500\u552e\u989d\u7c7b\u522b\u5360\u6bd4","children":[{"name":"app","component":"AppLoader","appName":"ttk-edf-app-sale-proportion-widget","data":"{{data.saleProportion}}"}]}]}]},{"name":"bottom","component":"div","key":"bottom"}]}}function getInitState(){return{"data":{}}}Object.defineProperty(exports,"__esModule",{"value":!0}),exports.getMeta=getMeta,exports.getInitState=getInitState},"1685":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function creator(option){var metaAction=new _edfMetaEngine.action(option),o=new action((0,_extends3["default"])({},option,{"metaAction":metaAction})),ret=(0,_extends3["default"])({},metaAction,o);return metaAction.config({"metaHandlers":ret}),ret}Object.defineProperty(exports,"__esModule",{"value":!0});var _extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_regenerator=__webpack_require__(20),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=__webpack_require__(19),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2);exports["default"]=creator;var _react=__webpack_require__(1),_edfMetaEngine=(_interopRequireDefault(_react),__webpack_require__(5)),_config=__webpack_require__(421),_config2=_interopRequireDefault(_config),_moment=__webpack_require__(14),action=(_interopRequireDefault(_moment),function action(option){var _this=this;(0,_classCallCheck3["default"])(this,action),this.onInit=function(_ref){var component=_ref.component,injections=_ref.injections;_this.component=component,_this.injections=injections,injections.reduce("init"),_this.load()},this.load=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function _callee(){var response;return _regenerator2["default"].wrap(function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_this.webapi.analysis.query();case 2:response=_context.sent,_this.injections.reduce("load",response);case 4:case"end":return _context.stop()}},_callee,_this)})),this.metaAction=option.metaAction,this.config=_config2["default"].current,this.webapi=this.config.webapi});module.exports=exports["default"]},"1714":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{"value":!0}),exports["default"]=void 0;var _dec,_class,_extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_possibleConstructorReturn2=__webpack_require__(7),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(6),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(1),_edfMetaEngine=(_interopRequireDefault(_react),__webpack_require__(5)),_index=__webpack_require__(717),_index2=_interopRequireDefault(_index),C=(_dec=(0,_edfMetaEngine.wrapper)(_index2["default"]),_dec(_class=function(_Component){function C(){return(0,_classCallCheck3["default"])(this,C),(0,_possibleConstructorReturn3["default"])(this,_Component.apply(this,arguments))}return(0,_inherits3["default"])(C,_Component),C.prototype.render=function render(){return this.props.monkeyKing((0,_extends3["default"])({},this.props,{"path":"root"}))},C}(_react.Component))||_class);exports["default"]=C,module.exports=exports["default"]},"1715":function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function creator(option){var metaReducer=new _edfMetaEngine.reducer(option),o=new reducer((0,_extends3["default"])({},option,{"metaReducer":metaReducer}));return(0,_extends3["default"])({},metaReducer,o)}Object.defineProperty(exports,"__esModule",{"value":!0});var _extends2=__webpack_require__(2),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__(3),_classCallCheck3=_interopRequireDefault(_classCallCheck2);exports["default"]=creator;var _immutable=__webpack_require__(11),_edfMetaEngine=__webpack_require__(5),_config=__webpack_require__(421),_config2=_interopRequireDefault(_config),_data=__webpack_require__(716),reducer=function reducer(option){var _this=this;(0,_classCallCheck3["default"])(this,reducer),this.init=function(state,option){var initState=(0,_data.getInitState)();return _this.metaReducer.init(state,initState)},this.load=function(state,response){return state=_this.metaReducer.sf(state,"data",(0,_immutable.fromJS)(response))},this.metaReducer=option.metaReducer,this.config=_config2["default"].current};module.exports=exports["default"]},"1716":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{"value":!0});var _edfUtils=__webpack_require__(12);exports["default"]={"analysis":{"query":function query(option){return _edfUtils.fetch.post("/v1/analysis/query",option)}}},module.exports=exports["default"]}});