{"source":"webpackJsonp([5],{750:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var r,a=p(n(0)),o=p(n(9)),u=p(n(7)),i=p(n(8)),s=p(n(10)),c=p(n(11)),f=n(1),d=(p(f),n(54)),l=p(n(274));function p(e){return e&&e.__esModule?e:{default:e}}var h=(0,d.wrapper)(l.default)(r=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,a.default)({},this.props,{path:\"root\"}))}}]),t}(f.Component))||r;t.default=h,e.exports=t.default},751:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var p=r(n(0)),h=r(n(16)),m=r(n(55)),o=r(n(56)),u=r(n(7));t.default=function(e){var t=new a.action(e),n=new l((0,p.default)({},e,{metaAction:t})),r=(0,p.default)({},t,n);return t.config({metaHandlers:r}),r};r(n(1));var a=n(54),i=r(n(191)),s=r(n(817)),c=r(n(818)),f=r(n(819)),d=n(6);function r(e){return e&&e.__esModule?e:{default:e}}var l=function e(t){var n,r,a,l=this;(0,u.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;l.component=t,(l.injections=n).reduce(\"init\"),l.load()},this.load=(0,o.default)(m.default.mark(function e(){var t,n;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.metaAction.context.get(\"currentUser\"),e.next=3,l.webapi.mySetting.init(t&&t.id);case 3:n=e.sent,l.injections.reduce(\"load\",n);case 5:case\"end\":return e.stop()}},e,l)})),this.saveBaseInfo=(0,o.default)(m.default.mark(function e(){var t;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.metaAction.gf(\"data.form\").toJS(),e.next=3,l.check([{path:\"data.form.nickname\",value:t.nickname}]);case 3:if(e.sent){e.next=6;break}return e.abrupt(\"return\");case 6:return e.next=8,l.webapi.user.update({mobile:t.mobile,sex:t.sex,nickname:t.nickname,birthday:t.birthday});case 8:l.component.props.onPortalReload&&l.component.props.onPortalReload(),l.metaAction.toast(\"success\",\"保存个人资料成功\");case 10:case\"end\":return e.stop()}},e,l)})),this.upload=function(){},this.getPhoto=function(e){return 1==e?c.default:2==e?s.default:f.default},this.getPasswordStrength=function(){var e=l.metaAction.gf(\"data.form.passwordStrength\");return 1==e?\"弱\":2==e?\"中\":3==e?\"高\":void 0},this.getColor=function(){var e=l.metaAction.gf(\"data.form.passwordStrength\");return 1==e?\"orangeBg\":2==e?\"yellowBg\":3==e?\"greenBg\":void 0},this.fieldChange=(n=(0,o.default)(m.default.mark(function e(t,n){return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.check([{path:t,value:n}]);case 2:case\"end\":return e.stop()}},e,l)})),function(e,t){return n.apply(this,arguments)}),this.check=(r=(0,o.default)(m.default.mark(function e(t){var n,r,a,o,u,i,s,c,f,d;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt(\"return\");case 2:n=[],a=!(r=!0),o=void 0,e.prev=6,u=(0,h.default)(t);case 8:if(r=(i=u.next()).done){e.next=22;break}if(s=i.value,c=(0,p.default)({},s),\"data.form.nickname\"==s.path)return e.t0=p.default,e.t1=c,e.next=16,l.checkNickname(s.value);e.next=18;break;case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2);case 18:n.push(c);case 19:r=!0,e.next=8;break;case 22:e.next=28;break;case 24:e.prev=24,e.t3=e.catch(6),a=!0,o=e.t3;case 28:e.prev=28,e.prev=29,!r&&u.return&&u.return();case 31:if(e.prev=31,a)throw o;e.next=34;break;case 34:return e.finish(31);case 35:return e.finish(28);case 36:return f={},d=!0,n.forEach(function(e){f[e.path]=e.value,f[e.errorPath]=e.message,e.message&&(d=!1)}),l.metaAction.sfs(f),e.abrupt(\"return\",d);case 41:case\"end\":return e.stop()}},e,l,[[6,24,28,36],[29,,31,35]])})),function(e){return r.apply(this,arguments)}),this.checkNickname=(a=(0,o.default)(m.default.mark(function e(t){var n;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?50<t.length&&(n=\"昵称不能超过50个字\"):n=\"请录入昵称\",e.abrupt(\"return\",{errorPath:\"data.other.error.nickname\",message:n});case 2:case\"end\":return e.stop()}},e,l)})),function(e){return a.apply(this,arguments)}),this.getAccessTokenJson=function(){return{token:d.fetch.getAccessToken()}},this.changePassword=(0,o.default)(m.default.mark(function e(){var t;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.metaAction.modal(\"show\",{title:\"修改登录密码\",width:500,height:251,children:l.metaAction.loadApp(\"ttk-edf-app-my-setting-change-password\",{store:l.component.props.store})});case 2:(t=e.sent).passwordStrength&&l.metaAction.sf(\"data.form.passwordStrength\",t.passwordStrength);case 4:case\"end\":return e.stop()}},e,l)})),this.changeMobile=(0,o.default)(m.default.mark(function e(){var t;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.metaAction.modal(\"show\",{title:\"修改手机号\",width:500,height:251,children:l.metaAction.loadApp(\"ttk-edf-app-my-setting-change-mobile\",{store:l.component.props.store,mobile:l.metaAction.gf(\"data.form.mobile\")})});case 2:(t=e.sent).newMobile&&l.metaAction.sf(\"data.form.mobile\",t.newMobile);case 4:case\"end\":return e.stop()}},e,l)})),this.metaAction=t.metaAction,this.config=i.default.current,this.webapi=this.config.webapi};e.exports=t.default},752:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var o=c(n(0)),r=c(n(7));t.default=function(e){var t=new a.reducer(e),n=new f((0,o.default)({},e,{metaReducer:t}));return(0,o.default)({},t,n)};var u=n(13),a=n(54),i=c(n(191)),s=n(275);function c(e){return e&&e.__esModule?e:{default:e}}var f=function e(t){var a=this;(0,r.default)(this,e),this.init=function(e,t){var n=(0,s.getInitState)();return a.metaReducer.init(e,n)},this.load=function(e,t){var n=t.user,r=t.securityLevel;return n.sex=void 0===n.sex?0:n.sex,n.sex=n.sex+\"\",n.nickname=n.nickname||n.mobile,a.metaReducer.sf(e,\"data.form\",(0,u.fromJS)((0,o.default)({},n,{securityLevel:r})))},this.metaReducer=t.metaReducer,this.config=i.default.current};e.exports=t.default},817:function(e,t,n){e.exports=n.p+\"female.png\"},818:function(e,t,n){e.exports=n.p+\"male.png\"},819:function(e,t,n){e.exports=n.p+\"other.png\"}});"}