//import 'fetch-ie8'
import fetchJsonp from 'fetch-jsonp';
import { SuperFetch } from './SuperFetch';
import { Util } from './commontypes/Util';
import { error } from 'util';
// import {environment, fetch} from "edf-utils";
import Toast from "../../component/components/toast";
let xdrNodesAppended;

const crossDomain = window.crossDomain;
/**
 * @member SuperFetch.CORS
 * @description 是否支持跨域
 * @type {boolean}
 */
export var CORS = SuperFetch.CORS = SuperFetch.CORS || (window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest());
/**
 * @member SuperFetch.RequestTimeout
 * @description 请求超时时间，默认45s
 * @type {number}
 */
export var RequestTimeout = SuperFetch.RequestTimeout = SuperFetch.RequestTimeout || 45000;

export var FetchRequest = SuperFetch.FetchRequest = {
    commit: function (method, url, params, options, isFromTomcat) {
        method = method ? method.toUpperCase() : method;
        switch (method) {
            case 'GET':
                return this.get(url, params, options);
            case 'POST':
                return this.post(url, params, options, isFromTomcat);
            case 'PUT':
                return this.put(url, params, options);
            case 'DELETE':
                return this.delete(url, params, options);
            default:
                return this.get(url, params, options);
        }
    },

    get: function (url, params, options) {
        options = options || {};
        var type = 'GET';
        url = this._processUrl(url, options);
        url = Util.urlAppend(url, this._getParameterString(params || {}));
        if (!this.urlIsLong(url)) {
            if (Util.isInTheSameDomain(url) || CORS || options.proxy) {
                return this._fetch(url, params, options, type);
            }
            if (!Util.isInTheSameDomain(url)) {
                url = url.replace('.json', '.jsonp');
                return this._fetchJsonp(url, options);
            }
        }
        return this._postSimulatie(type, url.substring(0, url.indexOf('?') - 1), params, options);
    },

    delete: function (url, params, options) {
        options = options || {};
        var type = 'DELETE';
        url = this._processUrl(url, options);
        url = Util.urlAppend(url, this._getParameterString(params || {}));
        if (!this.urlIsLong(url) && CORS) {
            return this._fetch(url, params, options, type);
        }
        return this._postSimulatie(type, url.substring(0, url.indexOf('?') - 1), params, options);
    },

    post: function (url, params, options, isFromTomcat) {
        options = options || {};
        if (window.XDomainRequest) {
            let xdr = async (url, params, options) => {
                let fn = async () => {
                    let res = await new Promise((resolve, reject) => {
                        try {
                            jQuery.support.cors = true;
                            $.ajax({
                                type: 'POST',
                                url: `${url}?token=${options.headers.token}`,
                                contentType: 'application/json; charset=UTF-8',
                                // ContentType: 'text/plain',
                                // ContentType:'text/html; charset=iso-8859-1',
                                // headers:{
                                //     token:options.headers.token
                                // },
                                data: JSON.stringify(params),
                                dataType: 'json',
                                //crossDomain: true,
                                //cache: false,
                                // success: function (data) {
                                //     console.log('res', data);
                                //     resolve(data)
                                // },
                                // error: function (error) {
                                //     console.log('error', error);
                                //     reject(new Error(
                                //         {
                                //             result: false,
                                //             message: '接口暂不支持ie9'
                                //         }
                                //     ))
                                // }
                            }).done(function (data) {
                                resolve(data);
                            });
                        } catch (e) {
                            //reject(e)
                            resolve(null)
                        }
                    })
                    return res;
                }
                return await fn();
            }

            // let c = await xdr();
            /*

                        function xdr(url, params, options) {
                            return new Promise((resolve, reject) => {

                                try {
                                    jQuery.support.cors = true;
                                    $.ajax({
                                        type: 'POST',
                                        url: `${url}?token=${options.headers.token}`,
                                        contentType: 'application/json; charset=UTF-8',
                                        // ContentType: 'text/plain',
                                        // ContentType:'text/html; charset=iso-8859-1',
                                        // headers:{
                                        //     token:options.headers.token
                                        // },
                                        data: JSON.stringify(params),
                                        dataType: 'json',
                                        //crossDomain: true,
                                        //cache: false,
                                        // success: function (data) {
                                        //     console.log('res', data);
                                        //     resolve(data)
                                        // },
                                        // error: function (error) {
                                        //     console.log('error', error);
                                        //     reject(new Error(
                                        //         {
                                        //             result: false,
                                        //             message: '接口暂不支持ie9'
                                        //         }
                                        //     ))
                                        // }
                                    }).done(function (data) {
                                        resolve(data);
                                    });
                                } catch (e) {
                                    reject(e)
                                }

                            })
                        }

                        */
            if (!xdrNodesAppended) {
                const xdrScriptNode = document.createElement("script");
                //xdrScriptNode.src = './vendor/jquery.transport.xdr.min.js';
                xdrScriptNode.src = './vendor/jquery.xdomainrequest.min.js';
                xdrScriptNode.async = true;
                xdrScriptNode.onload = () => {
                    xdrScriptNode.onload = null;
                    return xdr(url, params, options);
                };
                document.body.appendChild(xdrScriptNode);
                xdrNodesAppended = true;
            } else {
                return xdr(url, params, options);
            }
        } else {
            return this._fetch(this._processUrl(url, options), params, options, 'POST', isFromTomcat);
        }

    },

    put: function (url, params, options) {
        options = options || {};
        return this._fetch(this._processUrl(url, options), params, options, 'PUT');
    },
    urlIsLong: function (url) {
        //当前url的字节长度。
        var totalLength = 0,
            charCode = null;
        for (var i = 0, len = url.length; i < len; i++) {
            //转化为Unicode编码
            charCode = url.charCodeAt(i);
            if (charCode < 0x007f) {
                totalLength++;
            } else if ((0x0080 <= charCode) && (charCode <= 0x07ff)) {
                totalLength += 2;
            } else if ((0x0800 <= charCode) && (charCode <= 0xffff)) {
                totalLength += 3;
            }
        }
        return (totalLength < 2000) ? false : true;
    },
    _postSimulatie: function (type, url, params, options) {
        var separator = url.indexOf("?") > -1 ? "&" : "?";
        url += separator + '_method=' + type;
        if (typeof params !== 'string') {
            params = JSON.stringify(params);
        }
        return this.post(url, params, options);
    },

    _processUrl: function (url, options) {
        if (options && options.proxy) {
            if (typeof options.proxy === "function") {
                url = options.proxy(url);
            } else {
                //url = decodeURIComponent(url);
                // url = options.proxy + encodeURIComponent(url);
                url = options.proxy + url
            }
        }
        return url;
    },



    _fetch: function (url, params, options, type, isFromTomcat) {


        // if(!Util.isArray(params)){
        params = JSON.stringify(params);
        // }
        options = options || {};
        options.headers = options.headers || {};
        if (!options.headers['Content-Type']) {
            // options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
            options.headers['Content-Type'] = 'application/json;charset=utf-8'
        }
        if (!options.headers['token']) {
            options.headers['token'] = null;
        }
        if (options.timeout) {
            return this._timeout(options.timeout, fetch(url, {
                method: type,
                headers: options.headers,
                body: type === 'PUT' || type === 'POST' ? params : undefined,
                credentials: options.withCredentials ? 'include' : 'omit',
                mode: 'cors',
                timeout: RequestTimeout
            }).then(function (response) {
                return response;
            }));
        }
        if (isFromTomcat == 'fromTomcat') {//来源是Tomcat
            return new Promise((resolve, reject) => {

                return fetch(url, {
                    method: type,
                    body: type === 'PUT' || type === 'POST' ? params : undefined,
                    headers: options.headers,
                    credentials: options.withCredentials ? 'include' : 'omit',
                    mode: 'cors',
                    timeout: RequestTimeout
                })
                    .then(function (response) {
                        try {
                            return response.json()
                        } catch (e) {
                            throw new Error(e)
                        }
                    })
                    .then(function (data) {
                        resolve(data)
                    })
                    .catch((error) => {
                        resolve(error)
                    })
            })
        } else {
            //为了使用Promise.all调用，不论成功与否都resolve 保证对接接口调用失败后可以页面能正常显示
            return new Promise((resolve, reject) => {
                var ishttps = 'https:' == document.location.protocol ? true : false;
                if (ishttps) {
                    resolve({
                        result: false,
                        error: {
                            message: '对接业务暂不支持https环境,请切换到http环境'
                        }
                    });
                }
                return fetch(url, {
                    method: type,
                    body: type === 'PUT' || type === 'POST' ? params : undefined,
                    headers: options.headers,
                    credentials: options.withCredentials ? 'include' : 'omit',
                    mode: 'cors',
                    timeout: RequestTimeout
                })
                    .then(function (response) {
                        try {
                            return response.json()
                        } catch (e) {
                            throw new Error(e)
                        }
                    })
                    .then(function (data) {
                        resolve(data)
                    })
                    .catch((error) => {
                        resolve(null)
                    })
            })

        }

        function checkStatus(response) {
            // console.log(response)
            // if (response.status >= 200 && response.status < 300) {
            return response;
            // }
            //const error = new Error(response.statusText);
            // error.response = response;
            // throw error;
        }
        function parseJSON(response) {

            return response.json();
        }
    },

    fullUrl: (url) => {
        if (location.host.toLowerCase().indexOf('erpdemo.jchl') > -1 ||
            location.host.toLowerCase().indexOf('jrdemo.jchl') > -1 ||
            location.host.toLowerCase().indexOf('dzdemo.jchl') > -1
        ) {
            url = `${window.location.protocol}//apierpdemo.jchl.com` + url
        } else if (location.host.toLowerCase().indexOf('test') > -1) {
            url = `${window.location.protocol}//api.test.aierp.cn:8089` + url
        } else if (location.host.toLowerCase().indexOf('erp.jchl') > -1 ||
            location.host.toLowerCase().indexOf('jrb.jchl') > -1 ||
            location.host.toLowerCase().indexOf('dz.jchl') > -1) {
            url = `${window.location.protocol}//apierp.jchl.com` + url
        } else if (location.host.toLowerCase().indexOf('debug') > -1) {
            url = `${window.location.protocol}//debug.aierp.cn:8089` + url
        } else if (location.host.toLowerCase().indexOf('dev') > -1) {
            url = `${window.location.protocol}//dev.aierp.cn:8089` + url
        } else {
            url = `${window.location.protocol}//localhost:8081` + url
        }
        return url
    },

    post_develop: function (url, params, token, isFromTomcat) {
        let option = {
            headers: {
                token: token || null
            }
        }
        url = this.fullUrl(url)
        function responseHandle(response, params) {
            if (response.sysNetException) {
                Toast.error('网络异常!')
                return false
            } else if (response.networkException) {
                Toast.error('服务器正在维护中,请稍后访问!')
                return false
            } else {
                if (params && params.isReturnValue) {
                    return response
                } else {
                    if (response.result) {
                        if (response.token) { //登录后设置accessToken,根据需要调整
                            sessionStorage['_accessToken'] = response.token
                        }
                        return response.value
                    } else {
                        let errorCode = ''
                        if (response.error && response.error.code) {
                            errorCode = response.error.code
                        }
                        Toast.error(response.error && response.error.message)
                        if (errorCode == '40100') {
                            window.location.href = gotoLogin()
                        }
                    }
                }
            }
        }
        if (!isFromTomcat) {
            if (!(location.host.toLowerCase().includes('dev') ||
                location.host.toLowerCase().includes('localhost') ||
                location.host.toLowerCase().includes('127.0.0.1') ||
                location.host.toLowerCase().includes('debug'))) {
                isFromTomcat = true
            }
        }
        function xdr(url, params, options) {
            return new Promise((resolve, reject) => {
                try {
                    jQuery.support.cors = true;
                    $.ajax({
                        type: 'POST',
                        url: `${url}?token=${options.headers.token}`,
                        contentType: 'application/json; charset=UTF-8',
                        data: JSON.stringify(params),
                        dataType: 'json',
                    }).done(function (data) {
                        if (isFromTomcat == true) {
                            if (data.head && data.head.errorCode === '0') {
                                if (data.body && data.body.token) { //登录后设置accessToken,根据需要调整
                                    sessionStorage['_accessToken'] = data.body.token
                                }
                                resolve(data.body)
                            } else {
                                Toast.error(data.head.errorMsg)
                            }
                        } else {
                            resolve(responseHandle(data, params))
                        }
                    });
                } catch (e) {
                    reject(e)
                }

            })
        }
        if (window.XDomainRequest) {
            if (!xdrNodesAppended) {
                const xdrScriptNode = document.createElement("script");
                xdrScriptNode.src = './vendor/jquery.xdomainrequest.min.js';
                xdrScriptNode.async = true;
                xdrScriptNode.onload = () => {
                    xdrScriptNode.onload = null;
                    return xdr(url, params, option);
                };
                document.body.appendChild(xdrScriptNode);
                xdrNodesAppended = true;
            } else {
                return xdr(url, params, option)
            }
        } else {
            return this.fetch_develop(this._processUrl(url, option), params, option, 'POST', isFromTomcat);
        }
    },

    fetch_develop: function (url, params, options, type, isFromTomcat) {
        console.log('NODEJS')

        params = JSON.stringify(params);
        options.headers['Content-Type'] = 'application/json;charset=utf-8'

        if (options.timeout) {
            return this._timeout(options.timeout, fetch(url, {
                method: type,
                headers: options.headers,
                body: type === 'PUT' || type === 'POST' ? params : undefined,
                credentials: options.withCredentials ? 'include' : 'omit',
                mode: 'cors',
                timeout: RequestTimeout
            }).then(function (response) {
                return response;
            }));
        }
        function responseHandle(response, params) {
            if (response.sysNetException) {
                Toast.error('网络异常!')
                return false
            } else if (response.networkException) {
                Toast.error('服务器正在维护中,请稍后访问!')
                return false
            } else {
                if (params && params.isReturnValue) {
                    return response
                } else {
                    if (response.result) {
                        if (response.token) { //登录后设置accessToken,根据需要调整
                            sessionStorage['_accessToken'] = response.token
                        }
                        return response.value
                    } else {
                        let errorCode = ''
                        if (response.error && response.error.code) {
                            errorCode = response.error.code
                        }
                        Toast.error(response.error && response.error.message)
                        if (errorCode == '40100') {
                            window.location.href = gotoLogin()
                        }
                    }
                }
            }
        }
        if (!!isFromTomcat) {//来源是Tomcat
            return fetch(url, {
                method: type,
                body: type === 'PUT' || type === 'POST' ? params : undefined,
                headers: options.headers,
                credentials: options.withCredentials ? 'include' : 'omit',
                mode: 'cors',
                timeout: RequestTimeout
            }).then(function (response) {
                try {
                    return response.json()
                } catch (e) {
                    throw new Error(e)
                }
            }).then((data) => {
                if (data.head && data.head.errorCode === '0') {
                    if (data.body && data.body.token) { //登录后设置accessToken,根据需要调整
                        sessionStorage['_accessToken'] = data.body.token
                    }
                    return (data.body)
                } else {
                    Toast.error(data.head.errorMsg)
                }
            }).catch((err) => (err))
        } else {
            //为了使用Promise.all调用，不论成功与否都resolve 保证对接接口调用失败后可以页面能正常显示
            return new Promise((resolve, reject) => {
                return fetch(url, {
                    method: type,
                    body: type === 'PUT' || type === 'POST' ? params : undefined,
                    headers: options.headers,
                    credentials: options.withCredentials ? 'include' : 'omit',
                    mode: 'cors',
                    timeout: RequestTimeout
                }).then(function (response) {
                    try {
                        return response.json()
                    } catch (e) {
                        throw new Error(e)
                    }
                }).then(function (response) {
                    resolve(responseHandle(response, params))
                }).catch((error) => {
                    resolve(null)
                })
            })
        }
    },

    _fetchJsonp: function (url, options) {
        options = options || {};
        return fetchJsonp(url, { method: 'GET', timeout: options.timeout })
            .then(function (response) {
                return response;
            });
    },

    _timeout: function (seconds, promise) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject(new Error("timeout"))
            }, seconds)
            promise.then(resolve, reject)
        })
    },

    _getParameterString: function (params) {
        var paramsArray = [];
        for (var key in params) {
            var value = params[key];
            if ((value != null) && (typeof value !== 'function')) {
                var encodedValue;
                if (typeof value === 'object' && value.constructor === Array) {
                    var encodedItemArray = [];
                    var item;
                    for (var itemIndex = 0, len = value.length; itemIndex < len; itemIndex++) {
                        item = value[itemIndex];
                        encodedItemArray.push(encodeURIComponent(
                            (item === null || item === undefined) ? "" : item)
                        );
                    }
                    encodedValue = '[' + encodedItemArray.join(",") + ']';
                } else {
                    encodedValue = encodeURIComponent(value);
                }
                paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
            }
        }
        return paramsArray.join("&");
    }
};
