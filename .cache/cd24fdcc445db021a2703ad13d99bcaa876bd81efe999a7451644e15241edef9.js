{"source":"webpackJsonp([11],{711:function(e,t,a){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var r,n=l(a(0)),s=l(a(9)),o=l(a(7)),c=l(a(8)),i=l(a(10)),u=l(a(11)),f=a(1),d=(l(f),a(54)),p=l(a(248));function l(e){return e&&e.__esModule?e:{default:e}}var h=(0,d.wrapper)(p.default)(r=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,c.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,n.default)({},this.props,{path:\"root\"}))}}]),t}(f.Component))||r;t.default=h,e.exports=t.default},712:function(e,t,a){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var m=r(a(0)),b=r(a(16)),x=r(a(55)),i=r(a(56)),u=r(a(7));t.default=function(e){var t=new n.action(e),a=new s((0,m.default)({},e,{metaAction:t})),r=(0,m.default)({},t,a);return t.config({metaHandlers:r}),r};r(a(1));var n=a(54),f=(a(13),r(a(15)),r(a(178))),d=r(a(807));function r(e){return e&&e.__esModule?e:{default:e}}var s=function e(t){var a,r,n,s,o,c,h=this;(0,u.default)(this,e),this.onInit=function(e){var t=e.component,a=e.injections;h.component=t,h.injections=a,h.component.props.setOkListener&&h.component.props.setOkListener(h.onOk),a.reduce(\"init\")},this.onOk=(0,i.default)(x.default.mark(function e(){return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.save();case 2:return e.abrupt(\"return\",e.sent);case 3:case\"end\":return e.stop()}},e,h)})),this.next=(0,i.default)(x.default.mark(function e(){var t;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.metaAction.gf(\"data.form\").toJS(),e.next=3,h.check([{path:\"data.form.mobile\",value:t.mobile},{path:\"data.form.captcha\",value:t.captcha}],\"next\");case 3:if(e.sent){e.next=6;break}return e.abrupt(\"return\");case 6:h.clearTimer(!1,\"获取验证码\"),h.metaAction.sf(\"data.other.step\",2);case 8:case\"end\":return e.stop()}},e,h)})),this.prev=(0,i.default)(x.default.mark(function e(){return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h.metaAction.sf(\"data.other.step\",1);case 1:case\"end\":return e.stop()}},e,h)})),this.modify=(0,i.default)(x.default.mark(function e(){var t,a,r;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.metaAction.gf(\"data.form\").toJS(),e.next=3,h.check([{path:\"data.form.password\",value:t.password},{path:\"data.form.confirmPassword\",value:t.confirmPassword}],\"modify\");case 3:if(e.sent){e.next=6;break}return e.abrupt(\"return\");case 6:return a=t.password,r=h.pwdLevel(a),t.password=(0,d.default)(t.password+\"*the3Kingdom*\"),e.next=11,h.webapi.user.resetPassword({mobile:t.mobile,password:t.password,passwordStrength:r});case 11:h.metaAction.toast(\"success\",\"重置密码成功\"),h.metaAction.sf(\"data.other.step\",3),h.countFive();case 14:case\"end\":return e.stop()}},e,h)})),this.reLoginTime=null,this.countFive=function(){var e=5;h.reLoginTimer=setInterval(function(){e--,h.metaAction.sf(\"data.reLoginTime\",e),0==e&&(clearInterval(h.reLoginTimer),h.goLogin())},1e3)},this.pwdLevel=function(e){var t=0;return/[0-9]/.test(e)&&t++,/[a-zA-Z]/.test(e)&&t++,(/[`~!@#$%^&*()_+<>?:\"{},.\\/;'[\\]]/.test(e)||/[·！#￥（——）：；“”‘、，|《。》？、【】[\\]]/im.test(e))&&t++,t},this.getLogo=function(){return h.config.logo},this.countDown=60,this.timer=null,this.getCaptchaing=!1,this.getCaptcha=(0,i.default)(x.default.mark(function e(){var t,a,r,n;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=h.metaAction.gf(\"data.form.mobile\"))&&!/^1[3|4|5|7|8][0-9]\\d{8}$/.test(t))return h.metaAction.sfs({\"data.form.mobile\":t,\"data.other.error.mobile\":\"请输入正确的手机号\"}),e.abrupt(\"return\",!1);e.next=4;break;case 4:if(h.getCaptchaing)return e.abrupt(\"return\");e.next=6;break;case 6:return h.getCaptchaing=!0,h.metaAction.sf(\"data.timeStaus\",!1),(a=h).timer=setInterval(function(){0!=a.countDown?a.metaAction.sf(\"data.time\",--a.countDown+\"s\"):a.clearTimer(!0,\"重新获取\")},1e3),(r={}).mobile=h.metaAction.gf(\"data.form.mobile\"),r.smsType=2,e.next=15,h.webapi.captcha.fetch(r);case 15:n=e.sent,h.metaAction.sf(\"data.form.sign\",n),h.metaAction.toast(\"success\",\"验证码已经发送到您的手机\");case 18:case\"end\":return e.stop()}},e,h)})),this.clearTimer=function(e,t){this.metaAction.sf(\"data.timeStaus\",!0),this.metaAction.sf(\"data.time\",t),this.countDown=60,this.getCaptchaing=!1,clearInterval(this.timer)},this.fieldChange=(a=(0,i.default)(x.default.mark(function e(t,a){return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h.metaAction.sf(t,a),e.next=3,h.check([{path:t,value:a}]);case 3:case\"end\":return e.stop()}},e,h)})),function(e,t){return a.apply(this,arguments)}),this.goLogin=function(){if(clearInterval(h.reLoginTime),h.clearTimer(!1,\"获取验证码\"),!h.config.apps[\"ttk-edf-app-login\"])throw\"请将ttk-edf-app-login应用加入到网站中，跳转功能才能正常使用\";h.component.props.onRedirect&&h.config.goLogin&&h.component.props.onRedirect(h.config.goLogin)},this.check=(r=(0,i.default)(x.default.mark(function e(t,a){var r,n,s,o,c,i,u,f,d,p,l;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt(\"return\");case 2:r=[],s=!(n=!0),o=void 0,e.prev=6,c=(0,b.default)(t);case 8:if(n=(i=c.next()).done){e.next=56;break}if(u=i.value,f=(0,m.default)({},u),\"data.form.mobile\"==u.path)return e.t0=m.default,e.t1=f,e.next=16,h.checkMobile(u.value,a);e.next=20;break;case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=52;break;case 20:if(\"data.form.captcha\"==u.path)return e.t3=m.default,e.t4=f,e.next=25,h.checkCaptcha(u.value);e.next=29;break;case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),e.next=52;break;case 29:if(\"data.form.password\"==u.path)return e.t6=m.default,e.t7=f,e.next=34,h.checkPassword(u.value);e.next=45;break;case 34:if(e.t8=e.sent,(0,e.t6)(e.t7,e.t8),d=h.metaAction.gf(\"data.form.confirmPassword\"))return e.t9=r,e.next=41,h.checkConfirmPassword(d,u.value);e.next=43;break;case 41:e.t10=e.sent,e.t9.push.call(e.t9,e.t10);case 43:e.next=52;break;case 45:if(\"data.form.confirmPassword\"==u.path)return e.t11=m.default,e.t12=f,e.next=50,h.checkConfirmPassword(u.value,h.metaAction.gf(\"data.form.password\"),a);e.next=52;break;case 50:e.t13=e.sent,(0,e.t11)(e.t12,e.t13);case 52:r.push(f);case 53:n=!0,e.next=8;break;case 56:e.next=62;break;case 58:e.prev=58,e.t14=e.catch(6),s=!0,o=e.t14;case 62:e.prev=62,e.prev=63,!n&&c.return&&c.return();case 65:if(e.prev=65,s)throw o;e.next=68;break;case 68:return e.finish(65);case 69:return e.finish(62);case 70:return p={},l=!0,r.forEach(function(e){p[e.errorPath]=e.message,e.message&&(l=!1)}),h.metaAction.sfs(p),e.abrupt(\"return\",l);case 75:case\"end\":return e.stop()}},e,h,[[6,58,62,70],[63,,65,69]])})),function(e,t){return r.apply(this,arguments)}),this.checkMobile=(n=(0,i.default)(x.default.mark(function e(t,a){var r;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||\"next\"!=a){e.next=15;break}if(t){e.next=5;break}r=\"请输入手机号\",e.next=13;break;case 5:if(11==t.length){e.next=9;break}r=\"请输入正确的手机号\",e.next=13;break;case 9:return e.next=11,h.webapi.user.existsMobile(t);case 11:!e.sent&&(r=\"该手机号未注册，请重新输入\");case 13:e.next=36;break;case 15:if(t){e.next=19;break}e.next=36;break;case 19:if(1!=t.length||\"1\"==t){e.next=23;break}r=\"请输入正确的手机号\",e.next=36;break;case 23:if(!(1<t.length&&t.length<11)||/^1[3|4|5|8|7]/.test(t)){e.next=27;break}r=\"请输入正确的手机号\",e.next=36;break;case 27:if(!(11<t.length)){e.next=31;break}r=\"请输入正确的手机号\",e.next=36;break;case 31:if(11==t.length)return e.next=34,h.webapi.user.existsMobile(t);e.next=36;break;case 34:!e.sent&&(r=\"该手机号未注册，请重新输入\");case 36:return e.abrupt(\"return\",{errorPath:\"data.other.error.mobile\",message:r});case 37:case\"end\":return e.stop()}},e,h)})),function(e,t){return n.apply(this,arguments)}),this.checkCaptcha=(s=(0,i.default)(x.default.mark(function e(t){var a,r,n,s;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h.metaAction.gf(\"data.form.sign\"),n=h.metaAction.gf(\"data.form.mobile\"),s={sign:r,mobile:n,captcha:t},t){e.next=7;break}a=\"请输入验证码\",e.next=11;break;case 7:return e.next=9,h.webapi.captcha.validate(s);case 9:if(e.sent){e.next=11;break}a=\"验证码输入错误\";case 11:return e.abrupt(\"return\",{errorPath:\"data.other.error.captcha\",message:a});case 12:case\"end\":return e.stop()}},e,h)})),function(e){return s.apply(this,arguments)}),this.checkPassword=(o=(0,i.default)(x.default.mark(function e(t){var a;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?/(?=^.{6,20}$)((?=.*[a-zA-Z]){1})((?=.*[0-9]){1})/.test(t)||(a=\"6-20位至少包含一个字母和一个数字，区分大小写\"):a=\"请录入密码\",e.abrupt(\"return\",{errorPath:\"data.other.error.password\",message:a});case 2:case\"end\":return e.stop()}},e,h)})),function(e){return o.apply(this,arguments)}),this.checkConfirmPassword=(c=(0,i.default)(x.default.mark(function e(t,a,r){var n;return x.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return\"modify\"==r?t?a!=t?n=\"两次密码输入不一致，请确认\":/(?=^.{6,20}$)((?=.*[a-zA-Z]){1})((?=.*[0-9]){1})/.test(t)||(n=\"请输入符合规范的新密码\"):n=\"请再次输入新密码\":(a.length<t.length&&(n=\"两次密码输入不一致，请确认\"),a.length==t.length&&a!=t&&(n=\"两次密码输入不一致，请确认\")),e.abrupt(\"return\",{errorPath:\"data.other.error.confirmPassword\",message:n});case 2:case\"end\":return e.stop()}},e,h)})),function(e,t,a){return c.apply(this,arguments)}),this.checkNext=function(){var e=h.metaAction.gf(\"data\").toJS(),t=h.metaAction.gf(\"data.other\").toJS().step;return 1==t?!(e.form.mobile&&!e.other.error.mobile&&e.form.captcha&&!e.other.error.captcha):2==t?!(e.form.password&&!e.other.error.password&&e.form.confirmPassword&&!e.other.error.confirmPassword):void 0},this.metaAction=t.metaAction,this.config=f.default.current,this.webapi=this.config.webapi};e.exports=t.default},713:function(e,t,a){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r,n,s=u(a(0)),o=u(a(7));t.default=function(e){var t=new c.reducer(e),a=new f((0,s.default)({},e,{metaReducer:t}));return(0,s.default)({},t,a)};a(13);var c=a(54),i=(u(a(178)),u(a(15)),a(249));function u(e){return e&&e.__esModule?e:{default:e}}var f=(r=function e(t){(0,o.default)(this,e),n.call(this),this.metaReducer=t.metaReducer},n=function(){var a=this;this.init=function(e,t){return a.metaReducer.init(e,(0,i.getInitState)(t))}},r);e.exports=t.default},807:function(e,t,a){e.exports=a(4)(1200)}});"}