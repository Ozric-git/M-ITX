/*! GeniusUI v0.9.9k
 *  MARS FLAG Corporation. All rights reserved.
 *  Build 2019-06-17 06:07:58
*/
!function(a,b){function c(a,c,d){var e=a.document;!a.JSON&&d.toJSON&&d.secureEvalJSON&&(a.JSON={},JSON.stringify=d.toJSON,JSON.parse=d.secureEvalJSON),c.IE&&e.createStyleSheet===b&&(e.createStyleSheet=function(a){var b=e.createElement("style");return b.setAttribute("type","text/css"),e.getElementsByTagName("head")[0].appendChild(b),b.sheet}),d.css.add=function(a,b){var c,f,g=d.css.sheet,h=e.createStyleSheet?!1:!0,i=-1;return g||(h?(g=e.createElement("style"),g.appendChild(e.createTextNode("")),e.head.appendChild(g),g=g.sheet):g=e.createStyleSheet(),d.css.sheet=g),h?g.insertRule(a,b||g.cssRules.length):(-1!==(c=a.indexOf("{"))&&(a=a.replace(/[\{\}]/g,""),g.addRule(a.slice(0,c).replace(f=/^\s+|\s+$/g,""),a.slice(c).replace(f,""),i=b||g.rules.length)),i)},d.css.remove=function(a){var b=d.css.sheet;b&&b[e.createStyleSheet?"removeRule":"deleteRule"](a)},c.Conf&&c.browser.IE_LE9&&(c.Conf.BLANK_IMAGE=c.baseHref+c.Conf.FILE_BLANK_IMAGE,c.Conf.FAILED_IMAGE=c.baseHref+c.Conf.FILE_FAILED_IMAGE,c.Conf.ICON_LOADING=c.baseHref+c.Conf.FILE_ICON_LOADING,c.Conf.CIRCLE_RETURN=c.baseHref+c.Conf.FILE_CIRCLE_RETURN)}function d(b,c,d){if(a.trace(),"object"==typeof b){var e;b.stack&&(e=b.stack.match(/^(.*?)\n?.*?(https?:.*?):(\d+):?(\d+)?[^:\d]*$/m))?(b=e[1]||b,c=e[2],d=e[3],e[4]&&(d+=","+e[4])):(d=b.number||b.line||b.lineNumber,c=b.sourceURL||b.fileName,b=b.stack||b)}if(b=b||"",c=c||"",d=d||"",a.DEBUG&&a.error("### Error:\n#  "+b+(c?"\n#  "+c:"")+(d?"\n#  "+d:"")),a.ERROR_POST_URL){var f=new Image;f.src=a.ERROR_POST_URL+"?l="+escape(d)+"&u="+escape(c)+"&s="+escape(b)}return!a.SHOW_ERROR}function e(a){var c=a.getBoundingClientRect(),d=document.body.scrollLeft||document.documentElement.scrollLeft,e=document.body.scrollTop||document.documentElement.scrollTop,f=c.width!==b?c.width:Math.abs(c.right-c.left),g=c.height!==b?c.height:Math.abs(c.bottom-c.top);return{left:c.left-d,right:c.right-d,top:c.top-e,bottom:c.bottom-e,width:f,height:g}}function f(a){return a=String(0===a||a?a:""),a=h(a),a=g(a),a=a.replace(/["']/g,""),a=a.replace(/(\s|^)\!\S+(\s|$)/g,"")}function g(a){return a=String(0===a||a?a:"").replace(/^\s*|\s*$/g,"").replace(/\s+/g," ")}function h(a){return a?j(String(a).replace(/[　”’￥]/g,function(a){return{"　":" ","”":'"',"’":"'","￥":"\\"}[a]}),/[！-～]/g):""}function i(a){return a?k(String(a).replace(/[ \"\'\\]/g,function(a){return{" ":"　",'"':"”","'":"’","\\":"￥"}[a]}),/[\!-\~]/g):""}function j(a,b){return a?String(a).replace(b||/[！-～]/g,function(a){return String.fromCharCode(a.charCodeAt(0)-65248)}):""}function k(a,b){return a?String(a).replace(b||/[\!-\~]/g,function(a){return String.fromCharCode(a.charCodeAt(0)+65248)}):""}function l(a){return a.replace(/([\^\$\.\*\+\[\]\(\)\\])/g,"\\$1")}function m(b){var c;try{c=decodeURIComponent(b)}catch(d){a.DEBUG&&console.error("@@@ Failed to decode: "+b),a.postError&&a.postError(d),c=null}return c}function n(a){if(!a)return null;for(var b=n.options,c=b.parser[b.strictMode?"strict":"loose"].exec(a),d={},e=14;e--;)d[b.key[e]]=c[e]||"";return d[b.q.name]={},d[b.key[12]].replace(b.q.parser,function(a,c,e){c&&(d[b.q.name][c]=e)}),d.hash=""!==d.anchor?"#"+d.anchor:"",d.search=""!==d.query?"?"+d.query:"",d.pathname=d.path,d}function o(a,b){var c=n(a),d={},e=!1;for(var f in b){if(""===c[f]){e=!0;break}var g=c[f].match(new RegExp(b[f]));if(!g){e=!0;break}d[f]=g}return e?null:d}function p(a){return String(a).match(/^[a-z0-9-]+:\/\/[^\/]+$/)?a+"/":a}function q(a){return String(a).replace(/^(?:[a-z0-9-]+:\/\/)?([^\/]+)\/?.*$/g,"$1")}function r(a){if("*"==a)return a;var b=n(a);return b&&b.host?(b.protocol||"http")+"://"+b.host+(b.port?":"+b.port:""):""}function s(a,c,d){var e,f,g=n(a),h=v(g.query),i=[];"string"==typeof c&&(c=v(c));for(e in c)(h[e]===b||d)&&(h[e]=encodeURIComponent(c[e]));for(e in h)i.push(e+"="+h[e]);return f=t(a)+"?"+i.join("&")+g.hash}function t(a){return String(a).replace(/\?.*$/,"")}function u(a){return String(a).replace(/#.*$/,"")}function v(a,b){var c={};if(""==a)return c;a=String(a).split("&");var d,e,f,g;for(d=0;d<a.length;d++)e=a[d].match(/^([^=]+)=(.*)$/),f=e?e[1]:a[d],g=e&&3==e.length?e[2]:"",g=b?m(g):g,c[f]=g;return c}if(a.modifyCrossBrowser=c,a.postError=d,a.getRect=e,a.i18n||(a.i18n={}),a.i18n.messages||(a.i18n.messages={}),a.i18n.locale="",a.i18n.lang="",a.i18n.set=function(a){this.locale=a.replace("-","_"),this.lang=a.substr(0,2)},a.i18n.setLocale=function(){this.locale},a.i18n.get=function(a){return arguments.length&&"lang"!==a?this.messages.hasOwnProperty(a)?(a=this.messages[a],a.hasOwnProperty(this.lang)?a[this.lang]:a.hasOwnProperty("en")?a.en:Object.values(a)[0]):a:this.lang},a.i18n.set(navigator.language||navigator.systemLanguage||""),a.KEY={U:38,D:40,L:37,R:39,BS:8,ESC:27,TAB:9,RET:13,SHIFT:16,CTRL:17,ALT:18},!a.DEBUG&&a.browser.msie)a.err=a.error=a.warn=a.log=a.info=a.debug=a.trace=function(){};else{if("function"==typeof console.log.apply)try{a.err=a.error=function(){console.error.apply(console,arguments)},a.warn=function(){console.warn.apply(console,arguments)},a.log=function(){console.log.apply(console,arguments)},a.info=function(){console.info.apply(console,arguments)},a.debug=function(){console.debug.apply(console,arguments)},a.trace=function(){console.trace.apply(console,arguments)}}catch(w){}a.trace||(a.err=a.error=console.error,a.warn=console.warn,a.log=console.log,a.info=console.info,a.debug=console.debug,a.trace=console.trace)}a.toHanCharacter=h,a.toZenCharacter=i,a.toHan=j,a.toZen=k,a.escapeRegExp=l,a.unescapeSafe=m,a.normalizePhrase=f,a.trimWhiteSpace=g,a.parseUri=n,a.URLMatch=o,a.normalize_url=p,a.get_hostname=q,a.get_origin=r,a.add_query=s,a.strip_query=t,a.strip_hash=u,a.get_hash_form_querystring=v,n.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}}}(window.GALFSRAM2=window.GALFSRAM2||{}),function(a,b){b=a.Conf=a.Conf||{},b.RELEASE_DATE="2014/01/01 00:00:00",b.MIN_PHRASE_CHARS=0,b.DEFAULT_LANG="en",b.CAPTURE_HOST="",b.CAPTURE_GET_PATH="",b.EXT_JS_HOST="",b.EXT_JS_PATH="",b.EXT_THEME_HOST="",b.EXT_THEME_PATH="",b.BLANK_FRAME="about:blank",b.BLANK_IMAGE="data:image/gif;base64,R0lGODlhAQABAIAAAP////8AACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",b.FAILED_IMAGE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QseBxcKRXvP4QAAAB1JREFUOMtjbGhoqGegADAxUAhGDRg1YNSAwWIAAFx8Ah8Ql55oAAAAAElFTkSuQmCC",b.ICON_LOADING="data:image/gif;base64,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",b.CIRCLE_RETURN="data:image/png;base64,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",b.ICON_TRI_RED="data:image/gif;base64,R0lGODlhCgAKAID/AMDAwNMDHCH5BAEAAAAALAAAAAAKAAoAAAIShH+BGLrQHIsrtmmTvXBfD3oFADs=",a.Conf.FILE_BLANK_IMAGE="img/_.gif",a.Conf.FILE_FAILED_IMAGE="img/808080a.5.png",a.Conf.FILE_ICON_LOADING="img/loading.gif",a.Conf.FILE_CIRCLE_RETURN="img/return.png",b.SELECTOR_PHRASE=["#MF_form_phrase[value!='']","#form_phrase[value!='']","input[type=text][name=q][value!='']"],b.SELECTOR_DOC="#data_%,#result_%,#img_frame_%",b.SELECTOR_ZDOC="#zuba_data_%,#zuba_result_%,#zuba_img_frame_%",b.SELECTOR_DOC_ALL=".websearch_data,#main_content #result",b.SELECTOR_ZDOC_ALL=".zubaken_data,#main_content #recommend",b.SELECTOR_DOC_GENERAL="#mf_results li a:has(img.mf_cap)",b.SELECTOR_ZOOM_GENERAL="#mf_results li .mf_cap",b.PARAM_CHANGE_SSL="s=r",b.QUERY_FROM_SERP_LINK="",b.HASH_FROM_SERP_LINK="",b.QUERY_FROM_FULL_FRAME="R=F",b.HASH_FROM_FULL_FRAME="",b.QUERY_VIEW_FRAME="V=F",b.HASH_VIEW_FRAME="",b.HTTP_OVER_SSL=0,b.ZOOM_DELAY=100,b.START_DELAY=300,b.START_CROSS_DIR="V",b.PRELOAD_CAP_MAX=30,b.MF_FULL_CAP_NAME=1e6,b.MF_VIEW_IFR_WIDTH=1044,b.MF_FULL_CAP_SIZE=620,b.MF_VIEW_IFR_ZOOM=b.MF_FULL_CAP_SIZE/b.MF_VIEW_IFR_WIDTH,b.BUSY_ICON_WAIT=2e3,b.NAVI_MOUSE_SENS=30,b.MARK_HIDE_WAIT=3500,b.NAVI_HIDE_WAIT=2500,b.URL_MATCH_FOR_LOCATION=[["result",{path:"search.x"}]],b.URL_MATCH_FOR_REFERRER=[["navi",{path:"search.x",search:"(?:q|phrase)=([^&]+)"}],["navi",{host:"MARSFLAG.COM",path:"search.x",search:"q=([^&]+)"}],["navi",{host:"search.yahoo.com",search:"p=([^&]+)"}],["navi",{host:"yahoo.co.jp",search:"p=([^&]+)"}],["navi",{host:"bing.com",search:"q=([^&]+)"}],["navi",{host:"baidu.com",search:"(?:key|kw|wd|word)=([^&]+)"}],["navi",{host:"google.com.hk",search:"(?:key|kw|wd|word)=([^&]+)"}],["navi",{host:"websearch.rakuten.co.jp",search:"qt=([^&]+)"}],["navi",{host:"search.fresheye.com",search:"kw=([^&]+)"}],["navi",{host:"wsearch.ocn.ne.jp",search:"MT=([^&]+)"}],["navi",{host:"search.goo.ne.jp",search:"MT=([^&]+)"}],["navi",{host:"www.ask.com",search:"q=([^&]+)"}],["navi",{host:"wikipedia.org",path:"wiki/([^/]+)$"}]],b.THEME=b.THEME||{},b.THEME.FLAG_FOR_ATTR="flag-triangle-green",b.THEME.ANIM_FOR_ATTR_ELEM=!0,b.THEME.FLAG_FOR_HIDDEN="flag-triangle-orange",b.THEME.MARK_FOR_PHRASE="mark-ellipse-yellow",b.THEME.MARK_FOR_SERP=!1,b.THEME.NAVIGATION_BAR_TYPE="naviA",b.NAVIGATION_BAR_AVOID=null,b.NAVIGATION_BAR_AVOID_RESULT=!1,b.NAVIGATION_BAR_AVOID_FULL=!0,b.NAVIGATION_BAR_AVOID_NAVI=!0,b.NAVIGATION_BAR_AVOID_FOLLOW=!0,b.NAVIGATION_BAR_TOP_RESULT=4,b.NAVIGATION_BAR_TOP_FULL=4,b.NAVIGATION_BAR_TOP_NAVI=4,b.OVERLAY_CLASS="mf_bg_grad2",b.RESULT_FRAME_MARGIN=6,b.MATCH_ATTR_NAMES=["alt","title","summary","name"],b.NAVIGATION_MODIFY_FLASH=!0,b.AUTO_CLOSE_WAIT=500,b.BUGPATCH_IE9_IFRAME_SCROLLING=!0}(window.GALFSRAM2=window.GALFSRAM2||{}),function(a){var b=a.Conf;b.RELEASE_DATE="2013/10/01 00:00:00",b.MIN_PHRASE_CHARS=0,b.CAPTURE_HOST="i.marsfinder.jp",b.CAPTURE_GET_PATH="/mf2/cap",b.QUERY_FROM_FULL_FRAME="R=F",b.HASH_FROM_FULL_FRAME="",b.QUERY_VIEW_FRAME="V=F",b.HASH_VIEW_FRAME="",b.URL_MATCH_FOR_LOCATION=[["result",{host:"sitesearch.marsfinder.jp",path:"/(?:ja_all|en_all)/search.x"}],["result",{host:"s.marsfinder.jp",path:"/(?:mf__ja__ja|mf__en__en)/search.x"}],["result",{path:"search.x"}]],b.URL_MATCH_FOR_REFERRER=[["navi",{host:"sitesearch.marsfinder.jp",path:"/(?:ja_all|en_all)/search.x",search:"(?:q|phrase)=([^&]+)"}],["navi",{host:"s.marsfinder.jp",path:"/(?:mf__ja__ja|mf__en__en)/search.x",search:"(?:q|phrase)=([^&]+)"}],["navi",{host:"MARSFLAG.COM",path:"search.x",search:"q=([^&]+)"}],["navi",{host:"search.yahoo.com",search:"p=([^&]+)"}],["navi",{host:"yahoo.co.jp",search:"p=([^&]+)"}],["navi",{host:"bing.com",search:"q=([^&]+)"}],["navi",{host:"baidu.com",search:"(?:key|kw|wd|word)=([^&]+)"}],["navi",{host:"google.com.hk",search:"(?:key|kw|wd|word)=([^&]+)"}],["navi",{host:"websearch.rakuten.co.jp",search:"qt=([^&]+)"}],["navi",{host:"search.fresheye.com",search:"kw=([^&]+)"}],["navi",{host:"wsearch.ocn.ne.jp",search:"MT=([^&]+)"}],["navi",{host:"search.goo.ne.jp",search:"MT=([^&]+)"}],["navi",{host:"www.ask.com",search:"q=([^&]+)"}],["navi",{host:"wikipedia.org",path:"wiki/([^/]+)$"}]],b.THEME=b.THEME||{},b.THEME.FLAG_FOR_ATTR="flag-triangle-orange",b.THEME.ANIM_FOR_ATTR_ELEM=!0,b.THEME.FLAG_FOR_HIDDEN="flag-triangle-red",b.THEME.MARK_FOR_PHRASE="mark-ellipse-yellow",b.THEME.MARK_FOR_SERP=!1,b.THEME.NAVIGATION_BAR_TYPE="naviA",b.NAVIGATION_BAR_AVOID=null,b.NAVIGATION_BAR_TOP_RESULT=2,b.NAVIGATION_BAR_TOP_FULL=2,b.NAVIGATION_BAR_TOP_NAVI=2,b.RESULT_FRAME_MARGIN=6,b.OVERLAY_CLASS="mf_bg_grad2"}(window.GALFSRAM2=window.GALFSRAM2||{}),function(a,b){if(a&&(b=a.Conf)){var c=4&a.DEBUG,d=(a.error,a.err),e=(a.warn,a.log),f=(a.info,a.debug),g=a.die,h=a.PROTOCOL,i=a.LOCATION,j=a.REFERRER;if(a.IS_DEVELOP&&a._LOCATION&&(i=a._LOCATION),a.IS_DEVELOP&&a._REFERRER&&(j=a._REFERRER),a.URLS=a.parseUri(i),a.QUERIES=a.get_hash_form_querystring(a.URLS.query),a.HASH_QUERIES=a.get_hash_form_querystring(a.URLS.hash.replace(/#(.*?\?)?/,"")),a.REFERRERS=a.parseUri(j)||{},a.REFERRER_QUERIES=a.get_hash_form_querystring(a.REFERRERS.query),a.IS_TOP=window.self==window.top,a.DEBUG=a.REFERRER_QUERIES.mf_debug||a.HASH_QUERIES.mf_debug||a.QUERIES.mf_debug||a.DEBUG,a.IS_DEVELOP&&(a._URLS&&(a.URL=a._URLS),"undefined"!=typeof a._IS_TOP&&(a.IS_TOP=a._IS_TOP),a._QUERIES&&(a.QUERIES=a._QUERIES),a._HASH_QUERIES&&(a.HASH_QUERIES=a._HASH_QUERIES),a._REFERRERS&&(a.REFERRERS=a._REFERRERS),a._REFERRER_QUERIES&&(a.REFERRER_QUERIES=a._REFERRER_QUERIES)),c=4&a.DEBUG,c&&(e("@ @ DEBUG: ",a.DEBUG),e("@ @ IS_DEVELOP: ",a.IS_DEVELOP),e("@ @ URL: ",i),e("@ @ URLS: ",a.URLS),e("@ @ QUERIES: ",a.QUERIES),e("@ @ HASH_QUERIES: ",a.HASH_QUERIES),e("@ @ REFERRER: ",j),e("@ @ REFERRERS: ",a.REFERRERS),e("@ @ REFERRER_QUERIES: ",a.REFERRER_QUERIES),e("@ @ IS_TOP: ",a.IS_TOP)),b.EXPIRE_DATE&&(+new Date(b.EXPIRE_DATE)||g("invalid date format: EXPIRE_DATE"),+new Date(b.EXPIRE_DATE)<+new Date)){if(!(4096&a.DEBUG||a.IS_DEVELOP))return g("expired");d("expired")}if(b.RELEASE_DATE&&(b.RELEASE_DATE||g("no settings: RELEASE_DATE"),+new Date(b.RELEASE_DATE)||g("invalid date format: RELEASE_DATE"),+new Date(b.RELEASE_DATE)>+new Date)){if(!(4096&a.DEBUG||a.IS_DEVELOP))return g("bofore release");d("bofore release")}c&&e("@ @ (gui.js) baseHref: "+a.baseHref),b.CAPTURE_GET_URL=h+b.CAPTURE_HOST+b.CAPTURE_GET_PATH;var k=a.parseUri(a.baseHref),l=k?k.host:"",m=k?k.pathname:"";b.EXT_JS_BASE=b.EXT_JS_BASE?b.EXT_JS_BASE:h+(b.EXT_JS_HOST||l)+(b.EXT_JS_PATH||m),b.EXT_THEME_BASE=b.EXT_THEME_BASE?b.EXT_THEME_BASE:h+(b.EXT_JS_HOST||l)+(b.EXT_JS_PATH||m),c&&(e("@ @ CAPTURE_GET_URL: "+b.CAPTURE_GET_URL),e("@ @ EXT_JS_BASE:     "+b.EXT_JS_BASE),e("@ @ EXT_THEME_BASE:  "+b.EXT_THEME_BASE));var n,o,p,q=function(b,d){c&&e(" @@ matchForURL:	"+b+" / "+d.length+" defines");var f,g,h,i;if(b&&d)for(g=0;g<d.length;g++)if(d[g]&&(h=d[g][0],f=a.URLMatch(b,d[g][1])))return i=f.hash&&f.hash[1]||f.search&&f.search[1]||f.path&&f.path[1]||"",c&&(e("  "),e("  @ URLMatch url:	",b),e("  @       define:	",d[g][1]),e("  @       result:	",a.URLMatch(b,d[g][1]))),[h,i];return null};if(a.isPDF)n="frame",o="",p="";else if(a.forceMode)n=a.forceMode,o="",p="";else{b.URL_MATCH_FOR_LOCATION.push(b.QUERY_VIEW_FRAME?["frame",{query:"(?=.*"+b.QUERY_VIEW_FRAME+")(?=.*q=([^&]+))"}]:["frame",{hash:"(?=.*"+b.HASH_VIEW_FRAME+")(?=.*q=([^&]+))"}]),"V=F"!=b.HASH_VIEW_FRAME&&b.URL_MATCH_FOR_LOCATION.push(["frame",{hash:"(?=.*V=F)(?=.*q=([^&]+))"}]),b.URL_MATCH_FOR_REFERRER.unshift(["navi",{host:"MARSFLAG.COM",path:"search.x",search:"(?:q|phrase)=([^&]+)"}]);var r;if(r=q(i,b.URL_MATCH_FOR_LOCATION))c&&e("@@@"),c&&e("@@@"),c&&e("@@@ match for LOCATION: ",r.join(", "));else{if(!(r=q(j,b.URL_MATCH_FOR_REFERRER))||q(i,b.URL_MATCH_FOR_REFERRER))return g("no match");c&&e("@@@"),c&&e("@@@"),c&&e("@@@ match for REFERRER: ",r.join(", "))}n=r[0],o=r[1],p,"result"==n&&(o=a.QUERIES.q||a.QUERIES.phrase||""),"frame"==n&&(o=a.HASH_QUERIES.q||a.QUERIES.q||o||""),"navi"==n&&(o=a.HASH_QUERIES.q||a.QUERIES.q||o||""),p=a.unescapeSafe(String(o).replace(/\+/g," ")),null===p&&(p=o,a.DECODE_FAILED=!0),p=p&&a.normalizePhrase(p)}if(a.mode=n,a.rawPhrase=o,a.phrase=p,c&&(e("@@@@@ mode: "+a.mode+" @@@@@"),e("@@@@@ phrase: "+a.phrase+" @@@@@"),a.phrase!=a.rawPhrase&&e("@@@@@ rawPhrase: "+a.rawPhrase+" @@@@@"),e("   ")),"result"==n){if(!a.IS_TOP)return g("serp not allowed child for result.");if(5==a.browser.docMode&&"Back"==a.browser.compatMode)return g("serp not allowed IE5 Quirks.");if(o.length>0&&null!==p&&p.length<a.MIN_PHRASE_CHARS)return g("too few characters.")}else{if("navi"==n){if(!a.IS_TOP)return g("navi not allowed child for navi.");var s;if(b.HASH_FROM_FULL_FRAME&&(s=b.HASH_FROM_FULL_FRAME.split("="),s&&a.HASH_QUERIES[s[0]]==s[1]))return g("from result full frame.");if(b.QUERY_FROM_FULL_FRAME&&(s=b.QUERY_FROM_FULL_FRAME.split("="),s&&a.QUERIES[s[0]]==s[1]))return g("from result full frame.");if(b.HASH_FROM_SERP_LINK&&(s=b.HASH_FROM_SERP_LINK.split("="),a.REFERRERS.path.match(/search\.x$/)&&a.HASH_QUERIES[s[0]]!=s[1]))return g("from serp but not result link.");if(b.QUERY_FROM_SERP_LINK&&(s=b.QUERY_FROM_SERP_LINK.split("="),a.REFERRERS.path.match(/search\.x$/)&&a.QUERIES[s[0]]!=s[1]))return g("from serp but not result link.")}else{if("frame"!=n)return g("unknown mode: "+n);if(a.IS_TOP)return g("not allowed: top")}if(null!==p&&p.length<a.MIN_PHRASE_CHARS)return g("too few characters.")}var t=document.documentElement;t.className+=" "+n+"-view",t.className+=" "+(a.IS_TOP?"top-frame":"sub-frame");var u=a.browser,v=u.msie,w=v?parseInt(u.version):0,x=u.docMode,y=u.tridentVer||0,z="Back"==u.compatMode;if(v){(9>w||9>x)&&(u.JS_JQUERY1=!0),!a.PIE&&x>0&&9>x?u.PIE_IE678=!0:!a.PIE&&x>=9&&10>x&&(u.PIE_IE9=!0),5==x&&z&&(u.IE5_QUIRKS=!0);var A=Math.min(w>0?w:100,x>0?x:100);100>A&&(t.className+=" mf_ie"+A),u.IE5_QUIRKS&&(t.className+=" mf_ie_quirks");var B=a.IE={VER:A,ieVer:w,minVer:A,docMode:x,tridentVer:y,isBackCompat:z};B["IS"+A]=!0,8>=A&&(B.LE8=u.IE_LE8=!0),9>=A&&(B.LE9=u.IE_LE9=!0);var C=document.documentElement.style;if((void 0!==C.transform||void 0!==C["-ms-transform"])&&(B.CSS_TRANSFORM=!0),(void 0!==C.transition||void 0!==C["-ms-transition"])&&(B.CSS_TRANSITION=!0),c&&(u.JS_JQUERY1&&f("@@ JS_JQUERY1: "+u.JS_JQUERY1),u.PIE_IE9&&f("@@ PIE_IE9: "+u.PIE_IE9),u.PIE_IE678&&f("@@ PIE_IE678: "+u.PIE_IE678),u.IE_LE9&&f("@@ IE_LE9: "+u.IE_LE9),u.IE_LE8&&f("@@ IE_LE8: "+u.IE_LE8),u.IE5_QUIRKS&&f("@@ IE5_QUIRKS: "+u.IE5_QUIRKS)),u.IE5_QUIRKS)return g("IE5 QUIRKS mode! Terminated.")}!B||B.CSS_TRANSITION||(u.PIE_IE678?u.IE_IS8=!0:u.IE_IS9=!0);var D=b.EXT_JS_BASE,E=b.EXT_THEME_BASE;if(a.IS_DEVELOP){var F="js/gui_debug.js",G=u.JS_JQUERY1?"js/lib/jquery.G2/jquery-1.10.2.G2.js":"js/lib/jquery.min.js",H="";u.PIE_IE678&&(H="js/lib/pie/PIE_IE678_uncompressed.G2.js"),u.PIE_IE9&&(H="js/lib/pie/PIE_IE9_uncompressed.G2.js");var I=u.IE5_QUIRKS?"_ie-quirks":"",J=u.JS_JQUERY1?[G,"js/lib/jquery.G2/jquery.cookie.G2.js","js/lib/jquery.G2/jquery.easing.1.3.min.G2.js","js/lib/jquery.G2/jquery.transit.G2.js","js/lib/jquery.G2/jquery.ba-hashchange.G2.js","js/lib/jquery.G2/jquery.ba-postmessage.G2.js","js/lib/jquery.G2/jquery.scrollIntoView.G2.js","js/lib/jquery.G2/jquery.json-2.4.G2.js",H]:[G,H],K={result:{js:J.concat([,"conf/messages.js","js/MFMessage.js","js/MFLayerFG.js","js/MFLayerBar.js","js/MFLayer.js",F,"js/gui_result.js"]),css:["css/result-frame"+I+".css"]},frame:{js:J.concat([,"conf/messages.js","js/MFMessage.js","js/MFLayerBar.js","js/MFNavigation.js","js/mf_mark_text.js",F,"js/gui_navigation.js"]),css:["css/navigation"+I+".css"]},navi:{js:J.concat([,"conf/messages.js","js/MFLayerBar.js","js/MFNavigation.js","js/mf_mark_text.js",F,"js/gui_navigation.js"]),css:["css/navigation"+I+".css"]},pdfframe:{js:J.concat(["js/lib/jquery.G2/jquery.mousewheel.G2.js","js/lib/jquery.G2/jq-position.extend.G2.js","conf/messages.js","js/MFMessage.js","js/MFLayerBar.js",F,"js/gui-pdf.js"]),css:["css/navigation"+I+".css","css/gui-pdf.css"]},pdfnavi:{js:J.concat(["js/lib/jquery.G2/jquery.mousewheel.G2.js","js/lib/jquery.G2/jq-position.extend.G2.js","conf/messages.js","js/MFLayerBar.js",F,"js/gui-pdf.js"]),css:["css/navigation"+I+".css","css/gui-pdf.css"]}}}else{var G=u.JS_JQUERY1?"js/lib/jquery1.js":"js/lib/jquery2.js",H="";u.PIE_IE678&&(H="js/lib/pie678.js"),u.PIE_IE9&&(H="js/lib/pie9.js");var I=u.IE5_QUIRKS?"_ie-quirks":"",K={result:{js:[G,H,"js/serp.js"],css:"css/result-frame"+I+".css"},frame:{js:[G,H,"js/frame.js"],css:"css/navigation"+I+".css"},navi:{js:[G,H,"js/navi.js"],css:"css/navigation"+I+".css"},pdfframe:{js:[G,H,"js/pdfframe.js"],css:["css/navigation"+I+".css","css/gui-pdf.css"]},pdfnavi:{js:[G,H,"js/pdfnavi.js"],css:["css/navigation"+I+".css","css/gui-pdf.css"]}}}a.isPDF&&(n="pdf"+n);var L=K[n].js,M=K[n].css;c&&(f("@ jsBase: "+D),f("@ jsList: \n	"+(L.join?L.join("\n	"):L)),f("@ cssBase: "+E),f("@ cssList: \n	"+(M.join?M.join("\n	"):M))),a.injectStyle(M,E),a.injectScript(L,D)}}(window.GALFSRAM2=window.GALFSRAM2||{});