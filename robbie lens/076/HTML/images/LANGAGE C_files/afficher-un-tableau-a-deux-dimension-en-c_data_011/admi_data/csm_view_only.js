window.amzncsm=window.amzncsm||{},window.amzncsm.rmR||function(){var startCsmComp,amzncsm=amzncsm||{};amzncsm.errorCodes={SLOT_INSIDE_UNFRIENDLY_FRAME:1,UNSUPPORTED_BROWSER:2,ERROR_SENDING_PIXEL:3,INVALID_API:4,MALFORMED_URL:5},amzncsm.errors=[],amzncsm.errorMessages=[],amzncsm.exceptions={},amzncsm.reportErrors=function(a){var b,c;for(b=0;b<amzncsm.errors.length;b++)-1===amzncsm.errorMessages.indexOf(amzncsm.errors[b])&&(amzncsm.errorMessages.push(amzncsm.errors[b]),c='{"adViewability":[{"error": {"m": "'+amzncsm.errors[b]+'"}}], "c": "viewability", "api": "'+amzncsm.api+'", "error": 1}',(new Image).src=a+c+"?cb="+Math.round(1e7*Math.random()));amzncsm.errors=[],amzncsm.detachAllHandlers&&amzncsm.detachAllHandlers()},function(a){function b(a){return a?(a=c(a),a.replace(/^\s+|\s+$/g,"")):a}function c(a){return a.replace(/&&/g,"AND").replace(/&/g,"and")}function d(a){if(a&&a.s){var b,c=a.s.length>0?a.s[0]:"",d=a.s.length>1?a.s[1]:"";c&&(b=c.match(k)),b&&3===b.length||!d||(b=d.match(j)),b&&3===b.length&&(a.f=b[1],a.l=b[2])}}function e(a,e){if(e=e||{},!a)return{};a.m&&a.m.message&&(a=a.m);var j,k,l,m,n,o={m:f(a,e),c:a.c?""+a.c:a.c,s:[],l:a.l||a.line||a.lineno||a.lineNumber,name:a.name,type:a.type},p=0,q=0;if(j=a.stack||(a.err?a.err.stack:""),j&&j.split)for(k=j.split("\n");p<k.length&&o.s.length<h;)l=k[p++],l&&o.s.unshift(b(l));else for(m=g(a.args||arguments,"callee"),p=0,q=0;m&&h>p;)n=i,m.skipTrace||(l=m.toString(),l&&l.substr&&(n=0===q?4*i:n,n=1===q?2*i:n,o.s.unshift(c(l.substr(0,n))),q++)),m=g(m,"caller"),p++;return!o.f&&o.s.length>0&&d(o),o}function f(a,b){var c=b.m||b.message||"";return c+=a.m&&a.m.message?a.m.message:a.m&&a.m.target&&a.m.target.tagName?"Error handler invoked by "+a.m.target.tagName+" tag":a.m?a.m:a.message?a.message:"Unknown error"}function g(a,b){try{return a[b]}catch(c){return""}}var h=20,i=256,j=/\(?([^\s]*):(\d+):\d+\)?/,k=/.*@(.*):(\d*)/;a.constructErrorMessage=e}(amzncsm),amzncsm.exceptions.invalidModuleException=function(a){this.value=a,this.message="does not conform to the expected format of a module",this.toString=function(){return this.value+this.message}},amzncsm.exceptions.invalidStringException=function(a){this.value=a,this.message="should be a string. Pixel Queue expects a string.",this.toString=function(){return this.value+this.message}},amzncsm.getModules=function(a,b,c){return{eventUtils:{"default":!0,params:[],global:!0},utils:{"default":!0,params:[],global:!0},pixelQueue:{"default":!0,params:[b]},viewDuration:{params:[]}}},function(window){var CustomEvent,s,_marks,_marksIndex,_filterEntries,_clearEntries,_slice=Array.prototype.slice;try{_slice.call(document.documentElement)}catch(e){Array.prototype.slice=function(a,b){var c,d,e,f,g,h;if(b="undefined"!=typeof b?b:this.length,"[object Array]"===Object.prototype.toString.call(this))return _slice.call(this,a,b);if(d=[],f=this.length,g=a||0,g=g>=0?g:f+g,h=b?b:f,0>b&&(h=f+b),e=h-g,e>0)if(d=new Array(e),this.charAt)for(c=0;e>c;c++)d[c]=this.charAt(g+c);else for(c=0;e>c;c++)d[c]=this[g+c];return d}}Object.keys||(Object.keys=function(){"use strict";var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f,g,h=[];for(f in e)a.call(e,f)&&h.push(f);if(b)for(g=0;d>g;g++)a.call(e,c[g])&&h.push(c[g]);return h}}()),window.JSON||(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(){var a=Object.prototype.toString,b=Array.isArray||function(b){return"[object Array]"===a.call(b)},c={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},d=function(a){return c[a]||"\\u"+(a.charCodeAt(0)+65536).toString(16).substr(1)},e=/[\\"\u0000-\u001F\u2028\u2029]/g;return function f(c){var g,h,i,j;if(null==c)return"null";if("number"==typeof c)return isFinite(c)?c.toString():"null";if("boolean"==typeof c)return c.toString();if("object"==typeof c){if("function"==typeof c.toJSON)return f(c.toJSON());if(b(c)){for(g="[",h=0;h<c.length;h++)g+=(h?", ":"")+f(c[h]);return g+"]"}if("[object Object]"===a.call(c)){i=[];for(j in c)c.hasOwnProperty(j)&&i.push(f(j)+": "+f(c[j]));return"{"+i.join(", ")+"}"}}return'"'+c.toString().replace(e,d)+'"'}}()}),Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)}),String.prototype.endsWith||(String.prototype.endsWith=function(a,b){var c,d=this.toString();return("number"!=typeof b||!isFinite(b)||Math.floor(b)!==b||b>d.length)&&(b=d.length),b-=a.length,c=d.indexOf(a,b),-1!==c&&c===b}),window.Event&&(CustomEvent=function(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c},CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent),window.performance||(window.performance={}),window.performance.now||(window.performance.now=performance.now||performance.webkitNow||performance.msNow||performance.mozNow),window.performance.now||(s=Date.now?Date.now():+new Date,performance.timing&&performance.timing&&(s=performance.timing.navigationStart),window.performance.now=function(){var a=Date.now?Date.now():+new Date;return a-s}),_marks=[],_marksIndex={},_filterEntries=function(a,b){for(var c=0,d=_marks.length,e=[];d>c;c++)_marks[c][a]==b&&e.push(_marks[c]);return e},_clearEntries=function(a,b){for(var c,d=_marks.length;d--;)c=_marks[d],c.entryType!=a||void 0!==b&&c.name!=b||_marks.splice(d,1)},window.performance.mark||(window.performance.mark=window.performance.webkitMark||function(a){var b={name:a,entryType:"mark",startTime:window.performance.now(),duration:0};_marks.push(b),_marksIndex[a]=b}),window.performance.measure||(window.performance.measure=window.performance.webkitMeasure||function(a,b,c){b=_marksIndex[b].startTime,c=_marksIndex[c].startTime,_marks.push({name:a,entryType:"measure",startTime:b,duration:c-b})}),window.performance.getEntriesByType||(window.performance.getEntriesByType=window.performance.webkitGetEntriesByType||function(a){return _filterEntries("entryType",a)}),window.performance.getEntriesByName||(window.performance.getEntriesByName=window.performance.webkitGetEntriesByName||function(a){return _filterEntries("name",a)}),window.performance.clearMarks||(window.performance.clearMarks=window.performance.webkitClearMarks||function(a){_clearEntries("mark",a)}),window.performance.clearMeasures||(window.performance.clearMeasures=window.performance.webkitClearMeasures||function(a){_clearEntries("measure",a)})}(window),amzncsm.log=function(a){try{-1!==window.location.href.indexOf("csm_debug_mode")&&window.console&&window.console.log(a)}catch(b){b.message&&amzncsm.errors.push(b.message)}},amzncsm.loadModules=function(a,b){var c,d,e;try{for(c=0;c<b.length;c++)if(d=b[c].name,e=b[c].params||[],window.performance&&window.performance.mark&&"function"==typeof window.performance.mark&&window.performance.mark("loadStart"+d+a),"[object Array]"!==Object.prototype.toString.call(e),amzncsm[d]){if(void 0===amzncsm[d].shortName)throw new amzncsm.exceptions.invalidModuleException("Module shortName not defined for module "+d+". ");e.unshift(a),amzncsm[d].init.apply(amzncsm[d],e),window.performance&&window.performance.mark&&"function"==typeof window.performance.mark&&(window.performance.mark("loadEnd"+d+a),window.performance.measure("lt"+amzncsm[d].shortName+a,"loadStart"+d+a,"loadEnd"+d+a))}}catch(f){f.message&&amzncsm.errors.push(f.message)}},amzncsm.define=function(a){var b,c,d,e,f,g,h,i;try{for(b=function(a){return"string"==typeof a?amzncsm[a]:a},c=Array.prototype.slice.call(arguments),d=c[0],e=c.length>2?c[1]:[],f=c[c.length-1],g=[],h=0,i=e.length;i>h;h++)g.push(b(e[h]));amzncsm[d]=f.apply(f,g)}catch(j){j.message&&amzncsm.errors.push(j.message)}},amzncsm.define("utils",[],function(){var a={shortName:"ut"};return a.init=function(a){},a.getIEVersion=function(){var a,b,c=-1;return"Microsoft Internet Explorer"==navigator.appName?(a=navigator.userAgent,b=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),null!=b.exec(a)&&(c=parseFloat(RegExp.$1))):navigator.userAgent.match(/Trident.*rv\:11\./)?c=11:navigator.userAgent.match(/Edge\/\d+\.\d+/)&&(c=12),c},a.isIE=function(){var a=!1||!!document.documentMode,b=!a&&!!window.StyleMedia;return a||b},a.isFirefox=function(){return"undefined"!=typeof InstallTrigger},a.isIntObsSupported=function(){return"undefined"!=typeof IntersectionObserver},a.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)&&!navigator.userAgent.match("CriOS")},a.isSupportedBrowser=function(){return a.isIE()&&amzncsm.config.supportedBrowsers.IE===!0||a.isFirefox()&&amzncsm.config.supportedBrowsers.Firefox===!0||"undefined"!=typeof IntersectionObserver||a.isSafari()&&amzncsm.config.supportedBrowsers.Safari===!0},a.getPixelID=function(){var a=null;return function(){return null===a&&(a=Math.random().toString(36).substr(2)),a}}(),a.detachAllHandlers=function(){var a,b;for(b=0;b<amzncsm.eventHandlers.length;b++)a=amzncsm.eventHandlers[b],amzncsm.removeEvent(a.elem,a.eventName,a.cb)},a.reportClientError=function(a){var b=a===parseInt(a,10)?'{"m": "'+a+'"}':JSON.stringify(amzncsm.constructErrorMessage(a)),c=amzncsm.instrURL,d='{"adViewability":[{"error": '+b+'}], "c": "viewability", "api": "'+amzncsm.api+'", "error": 1}';-1===amzncsm.errorMessages.indexOf(b)&&(amzncsm.errorMessages.push(b),amzncsm.scrollImitationTimer&&clearInterval(amzncsm.scrollImitationTimer),(new Image).src=c+d+"?cb="+Math.round(1e7*Math.random()))},a.setTimeout=function(b,c){return setTimeout(function(){try{b.call()}catch(c){c.message,a.reportClientError(c)}},c)},a.setInterval=function(b,c){return setInterval(function(){try{b.call()}catch(c){c.message,a.reportClientError(c)}},c)},a.encr=function(a){if(null!=a&&""!=a&&void 0!=a){var b,c,d="",e="",f=a.length,g=Math.floor(f/2);for(b=0,c=g;g>b&&f>c;b++,c++)d+=a.charAt(b)+a.charAt(c);for(f%2==1&&(d+=a.charAt(a.length-1)),b=0;f>b;b++)e+=String.fromCharCode(d.charCodeAt(b)+d.charCodeAt(b)%5);return encodeURIComponent(e)}return a},a}),amzncsm.define("eventUtils",[],function(){var a={shortName:"eu"};return a.init=function(b){a.eventHandlers=[]},a.addEvent=function(b,c,d,e){b.addEventListener?b.addEventListener(c,d,e):b.attachEvent&&b.attachEvent("on"+c,d);var f={elem:b,eventName:c,cb:d};a.eventHandlers.push(f)},a.addCustomEvent=function(a,b,c){document.addEventListener?document.addEventListener(a,b,c):document.attachEvent?document.attachEvent("on"+a,function(){return b.call(document,window.event)}):document["on"+a]=b},a.removeEvent=function(a,b,c){document.removeEventListener?a.removeEventListener(b,c,!1):document.detachEvent&&a.detachEvent("on"+b,c)},a.createEvent=function(){return document.createEvent?function(a){var b=document.createEvent("Event");return b.initEvent(a,!0,!0),b}:function(a){var b=document.createEventObject();return b.eventType=a,b}}(),a.dispatchCustomEvent=function(b){document.dispatchEvent?document.dispatchEvent(a.createEvent(b)):document[b]?document[b]():document["on"+b]&&document["on"+b]()},a.stopPropagation=function(a){return a.stopPropagation?void a.stopPropagation():void(a.cancelBubble=!0)},a.preventDefault=function(a){a.preventDefault&&a.preventDefault(),a.returnValue=!1},a.getClickXY=function(a){return"pageX"in a?{pageX:a.pageX,pageY:a.pageY}:{pageX:a.clientX+document.documentElement.scrollLeft,pageY:a.clientY+document.documentElement.scrollTop}},a.handleVisibilityChange=function(b,c){var d,e=b.document;"undefined"!=typeof e.hidden?d="visibilitychange":"undefined"!=typeof e.mozHidden?d="mozvisibilitychange":"undefined"!=typeof e.msHidden?d="msvisibilitychange":"undefined"!=typeof e.webkitHidden&&(d="webkitvisibilitychange"),d&&a.addEvent(e,d,c,!1)},a.isPageVisibilitySupported=function(){return"undefined"!=typeof document.hidden||"undefined"!=typeof document.mozHidden||"undefined"!=typeof document.msHidden||"undefined"!=typeof document.webkitHidden},a.registerPostMessageHandler=function(a){var b=window.addEventListener?"addEventListener":"attachEvent",c=window[b],d="attachEvent"==b?"onmessage":"message";c(d,function(b){var c=b.message?"message":"data",d=b[c];a(d)},!1)},a.getVisibilityState=function(a){return"undefined"==typeof a.visibilityState?"Unknown":a.visibilityState},a.documentHasFocus=function(a){var b=!0;try{b=a.hasFocus?a.hasFocus():!0}catch(c){amzncsm.reportClientError(c)}return b},a.isWindowActive=function(b){var c,d;return b=b||window.document,"undefined"!=typeof b.hidden?c="hidden":"undefined"!=typeof b.mozHidden?c="mozHidden":"undefined"!=typeof b.msHidden?c="msHidden":"undefined"!=typeof b.webkitHidden&&(c="webkitHidden"),d=a.documentHasFocus(b),"undefined"==typeof b[c]?d:!b[c]},a}),amzncsm.define("pixelQueue",[],function(){var a,b,c,d={shortName:"pq"},e=2500,f=4;return d.init=function(a,b){amzncsm.csmReport.pq={queue:[],instrURL:b}},d.firePixel=function(b,d){var e,f,g,h,i=amzncsm.csmReport.pq.instrURL;if(c(b)!==!1){try{e=JSON.parse(b),e.ver=amzncsm.version,b=JSON.stringify(e),window.amzncsm.bnmk===!0&&(f={pixelId:e.pixelId,iframeId:document.body.getAttribute("data-absoluteparentid")},g={bnmk:f},h="bnmk/",(new Image).src=i+h+JSON.stringify(g)+"?cb="+Math.round(1e7*Math.random()),window.amzncsm.bnmk=!1)}catch(j){}void 0!==d&&""!==d&&(i+=d),a(i,b)}},a=function(a,b){(new Image).src=a+b+"?cb="+Math.round(1e7*Math.random())},b=function(){var a=amzncsm.csmReport.pq;a.queue.length>0&&(a.queue=[])},c=function(a){var b="";if(("string"==typeof a||a instanceof String)==!1){b="Expected string: but "+typeof a+"found. ","object"==typeof a&&(b+=JSON.stringify(a));try{throw new amzncsm.exceptions.invalidStringException(b)}catch(c){amzncsm.reportClientError(c)}return!1}return!0},d.addPixel=function(a){var d=this,g=amzncsm.csmReport.pq;c(a)!==!1&&(0===g.queue.length&&amzncsm.setTimeout(function(){g.queue.length>0&&(d.send(),b())},e),g.queue.push(JSON.parse(a)),g.queue.length>=f&&(d.send(),b()))},d.send=function(){var a=amzncsm.getPixelID(),b=(new Date).getTime(),c=amzncsm.csmReport.pq;c.queue.length>0&&d.firePixel('{"adCsm": '+JSON.stringify(c.queue)+', "pixelId": "'+a+'", "ts": '+b+"}","")},d}),amzncsm.define("viewDuration",["pixelQueue"],function(){var a,b={shortName:"vd"};return b.init=function(b){var c,d;amzncsm.csmReport[b].vd={viewStartTime:0,maxContDuration:0,totalDuration:0,isVisible:!1,pixelReportTime:[1e3,2e3,4e3,8e3,16e3],pixelTimerHandler:null,pCount:0},c=amzncsm.csmReport[b].vd,c.visHandler=function(d){c.isVisible===!1&&(c.viewStartTime=performance.now(),c.pixelTimerHandler=amzncsm.setInterval(function(){a(b)},1e3)),c.isVisible=!0},amzncsm.addCustomEvent("amzncsmVis",c.visHandler,!1),c.invHandler=function(a){c.isVisible===!0&&(c.totalDuration+=performance.now()-c.viewStartTime,window.clearInterval(c.pixelTimerHandler)),c.isVisible=!1},amzncsm.addCustomEvent("amzncsmInv",c.invHandler,!1),"sendBeacon"in navigator&&(d="onpagehide"in window?"pagehide":"unload",amzncsm.addEvent(window,d,function(){var a,b,d;c.totalDuration>0&&(a=c.maxContDuration,c.isVisible===!0&&(b=performance.now()-c.viewStartTime,b>a&&(a=b)),d={adCsm:[{vdr:a.toFixed(2),tdr:c.totalDuration.toFixed(2)}],pixelId:amzncsm.getPixelID(),ts:(new Date).getTime(),ver:amzncsm.version},navigator.sendBeacon(amzncsm.instrURL+JSON.stringify(d)+"?cb="+Math.round(1e7*Math.random()),""))},!1))},a=function(a){var b,c,d=amzncsm.csmReport[a].vd;if(d.isVisible===!0){for(b=performance.now()-d.viewStartTime;d.pCount<d.pixelReportTime.length&&b>=d.pixelReportTime[d.pCount];)d.totalDuration+=b,d.maxContDuration=b,c={vdr:b.toFixed(2),tdr:d.totalDuration.toFixed(2)},amzncsm.pixelQueue.addPixel(JSON.stringify(c)),d.pCount++;d.pCount===d.pixelReportTime.length&&window.clearInterval(d.pixelTimerHandler)}},b}),amzncsm.detectViewability=function(a,b,c,d,e){function f(){return t.beaconSent.iab&&t.beaconSent.groupm&&t.beaconSent.amazon&&t.beaconSent.vdr}function g(a,b){if(t.getDuration){var c=t.end[b]-t.start[b];t.totalTime+=c}}function h(a){}function i(a,b){}function j(a){if(t.beaconSent[a]!==!0)try{var b=t.detectActualDimension(t.adElementContainer),c=amzncsm.isWindowActive(t.hostDoc),d=b>=t.areaCutoff[a]-.05&&c;d&&(n("viewable",{viewable:!0,defn:a,p:t.reportingArea[a],t:t.timeCutoff[a]/1e3}),t.beaconSent[a]=!0,k())}catch(e){amzncsm.reportClientError(e)}}function k(){f()&&amzncsm.scrollImitationTimer&&clearInterval(amzncsm.scrollImitationTimer)}function l(a){r(a>t.areaCutoff.iab&&amzncsm.isWindowActive(t.hostDoc)?!0:!1)}function m(a,b,c,d){var e=0,f=!1,g=!0;t.visibilityState=amzncsm.getVisibilityState(t.hostDoc),amzncsm.isIntObsSupported()?f=!0:amzncsm.isIE()?e=t.fractionInViewportIE():amzncsm.isFirefox()?e=t.fractionInViewportFF(a,b):amzncsm.isSafari()?(t.fractionInViewportSafari(c,d),f=!0):g=!1,0>e&&(g=!1),g===!1&&c===!0&&n("unmeasured",{defn:"unmeasured",p:0,t:0}),f===!1&&g===!0&&d(e)}function n(a,b){var c,d=(new Date).getTime(),e="DTB"===amzncsm.api&&amzncsm.outsideImpIframe!==!0||"ONO"===amzncsm.api||amzncsm.isBen===!0?"_ben":"",f=navigator&&void 0!==navigator.buildID?navigator.buildID:"undefined";b.viewable===!0&&window.performance&&window.performance.timing&&(c=((d-(window.performance.timing.responseStart||window.performance.timing.domLoading))/1e3).toFixed(2));try{switch(a){case"above_the_fold":p('{"atf'+e+'": '+b.atf+", "+(null!==t.area&&isNaN(t.area)===!1?'"f": '+t.area.toFixed(2)+", ":"")+'"vs": "'+(void 0!==t.visibilityState?t.visibilityState:"undefined")+'", '+(null!==t.leftPos&&isNaN(t.leftPos)===!1?'"left": '+t.leftPos.toFixed(0)+", ":"")+(null!==t.topPos&&isNaN(t.topPos)===!1?'"top": '+t.topPos.toFixed(0)+", ":"")+'"ah": '+(void 0!==t.adHeight?t.adHeight:'"undefined"')+', "aw": '+(void 0!==t.adWidth?t.adWidth:'"undefined"')+', "ts": '+d+', "bn": '+(amzncsm.outsideImpIframe===!0?!0:!1)+", "+(amzncsm.isFirefox()===!0?'"buildId": "'+f+'", ':"")+'"pixelId": "'+t.pixelId+'"}',""===e?"atf/":"");break;case"viewable":p('{"v'+e+'": {"p": '+b.p+', "t": '+b.t+', "def": "'+b.defn+'"}, "vs": "'+(void 0!==t.visibilityState?t.visibilityState:"undefined")+'", '+(null!==t.leftPos&&isNaN(t.leftPos)===!1?'"left": '+t.leftPos.toFixed(0)+", ":"")+(null!==t.topPos&&isNaN(t.topPos)===!1?'"top": '+t.topPos.toFixed(0)+", ":"")+'"ah": '+(void 0!==t.adHeight?t.adHeight:'"undefined"')+', "aw": '+(void 0!==t.adWidth?t.adWidth:'"undefined"')+', "ttv": '+(void 0!==c?c:'"undefined"')+', "ts": '+d+', "bn": '+(amzncsm.outsideImpIframe===!0?!0:!1)+', "pixelId": "'+t.pixelId+'"}',""===e?"v/":"");break;case"unmeasured":p('{"atf'+e+'": "unknown", "vs": "'+(void 0!==t.visibilityState?t.visibilityState:"undefined")+'", "ts": '+d+', "bn": '+(amzncsm.outsideImpIframe===!0?!0:!1)+', "pixelId": "'+t.pixelId+'"}',""===e?"atf/":"")}}catch(g){amzncsm.reportClientError(g)}}function o(a){function b(a){t.beaconSent[a]===!1&&(t.setTimeoutHandler[a]&&clearTimeout(t.setTimeoutHandler[a]),t.setTimeoutHandler[a]=amzncsm.setTimeout(function(){j(a)},t.timeCutoff[a]))}function c(a){h(x),t.start[a]=(new Date).getTime()/1e3,b(a),t.timerStarted[a]=!0}function d(a){clearTimeout(t.setTimeoutHandler[a]),t.timerStarted[a]=!1,t.end[a]=(new Date).getTime()/1e3,i(x,a),g(x,a)}function e(a){o(a),p(a),q(a)}function f(a,b){amzncsm.isWindowActive(t.hostDoc)&&(t.focused===!1||null===t.focused)&&b>t.areaCutoff[a]&&t.timerStarted[a]===!1&&c(a),amzncsm.isWindowActive(t.hostDoc)||d(a),b>=t.areaCutoff[a]&&t.timerStarted[a]===!1?c(a):b<t.areaCutoff[a]&&t.timerStarted[a]===!0&&d(a)}function o(a){t.beaconSent.iab===!1&&f(v,a)}function p(a){t.beaconSent.groupm===!1&&f(w,a)}function q(a){t.beaconSent.amazon===!1&&a>=t.areaCutoff.amazon&&(n("viewable",{viewable:!0,defn:"amzn",p:t.reportingArea.amazon,t:0}),t.beaconSent.amazon=!0,k())}var r,s,u=t.adElement,x=t.adElementContainer,y=t.adID;amzncsm.resetTimer=d,r=function(a){var b=(amzncsm.isWindowActive(t.hostDoc),!1);t.area=a,t.area>t.areaCutoff.iab&&(b=!0),e(t.area),window.performance&&window.performance.mark&&"function"==typeof window.performance.mark&&(window.performance.mark("atfCompEnd"+y),window.performance.measure("atfComp"+y,"atfCompStart"+y,"atfCompEnd"+y)),n("above_the_fold",{atf:b}),l(a)},s=function(a){e(a),amzncsm.isWindowActive(t.hostDoc)?t.focused=!0:t.focused=!1,l(a),t.area=a},a===!0?(amzncsm.isIntObsSupported()?t.initViewCompIntObs(r,s):amzncsm.isSafari()&&t.initVCompSafari(),window.performance&&window.performance.mark&&"function"==typeof window.performance.mark&&window.performance.mark("atfCompStart"+y),m(u,x,a,r)):m(u,x,a,s)}function p(){var a=Array.prototype.slice.call(arguments);amzncsm.pixelQueue.firePixel.apply(amzncsm.beacon,a)}function q(a){try{t.debug&&window.console&&window.console.log(a)}catch(b){}}function r(a){t.beaconSent.vdr!==!0&&(a===!0?amzncsm.dispatchCustomEvent("amzncsmVis"):amzncsm.dispatchCustomEvent("amzncsmInv"))}var s,t=this,u=amzncsm.isSafari()?500:1e3,v="iab",w="groupm";return this.adElement=a,this.adElementContainer=a,this.adWidth=a.document?a.document.body.offsetWidth:a.offsetWidth,this.adHeight=a.document?a.document.body.offsetHeight:a.offsetHeight,this.instrURL=b,this.adID=e,this.getDuration=!0,this.totalTime=0,this.leftPos=null,this.topPos=null,this.start={iab:0,groupm:0},this.end={iab:0,groupm:0},this.area=0,this.areaCutoff={iab:.5,groupm:.9,amazon:.05},this.reportingArea={iab:50,groupm:100,amazon:0},this.timeCutoff={iab:1e3,groupm:1e3},this.focused=null,this.setTimeoutHandler={iab:null,groupm:null},this.timerStarted={iab:!1,groupm:!1},this.beaconSent={iab:!1,groupm:!1,amazon:!1,vdr:!1},this.hostWindow=c,this.hostDoc=d,this.pixelId=amzncsm.getPixelID(),this.adElement&&this.adElement.document&&"IFRAME"!==this.adElement.tagName&&(this.adElement=this.adElement.document.body),this.adElementContainer&&this.adElementContainer.document&&"IFRAME"!==this.adElementContainer.tagName&&(this.adElementContainer=this.adElementContainer.document.body),amzncsm.isSupportedBrowser()===!1?(n("unmeasured",{defn:"unmeasured",p:0,t:0}),!1):(amzncsm.csmReport[this.adID].container=this.adElementContainer,amzncsm.csmReport[this.adID].adElement=this.adElement,this.debug=-1!==window.location.href.indexOf("csm_debug_mode"),this.profile=-1!==window.location.href.indexOf("amzn_profile_mode"),amzncsm.log=q,s=function(){var a,b,c,d;(window.amzncsm.tsEndpoint||window.amzncsm.tungstenEndpoint)&&(a=/\/x\/px\/(.*)\//g,b=a.exec(amzncsm.instrURL),c="",null!=b&&b.length>=2&&(c=b[1]),d="?imp="+c+"&d="+amzncsm.api+"&cb="+Math.round(1e7*Math.random()),window.amzncsm.bidRequestId&&(d+="&bidR="+window.amzncsm.bidRequestId),window.amzncsm.bidId&&(d+="&bid="+window.amzncsm.bidId),window.amzncsm.tsEndpoint&&((new Image).src=window.amzncsm.tsEndpoint+d),window.amzncsm.tungstenEndpoint&&((new Image).src=window.amzncsm.tungstenEndpoint+d))},void(this.collectData=function(){var a,b=this;s(),o(!0),a=function(){try{if(document.visibilityState,f()===!1&&amzncsm.isWindowActive(b.hostDoc))var a=amzncsm.setTimeout(function(){a&&clearTimeout(a),o(!1)},50);else r(!1),amzncsm.resetTimer(v),amzncsm.resetTimer(w)}catch(c){amzncsm.reportClientError(c)}},amzncsm.scrollImitationTimer=amzncsm.setInterval(function(){if(amzncsm.isIntObsSupported());else if(amzncsm.isFirefox())(!b.oldMozInnerScreenX||!b.oldMozInnerScreenY||Math.abs(window.mozInnerScreenX-b.oldMozInnerScreenX)>10||Math.abs(window.mozInnerScreenY-b.oldMozInnerScreenY)>10)&&a(),b.oldMozInnerScreenX=window.mozInnerScreenX,b.oldMozInnerScreenY=window.mozInnerScreenY;else if(amzncsm.isIE()){var c=document.elementFromPoint(b.adWidth/2,b.adHeight/2);null!==c&&amzncsm.isWindowActive(b.hostDoc)?a():r(!1)}else amzncsm.isSafari()&&a()},u),amzncsm.handleVisibilityChange(this.hostWindow,a),amzncsm.addEvent(this.hostWindow,"resize",a,!1),amzncsm.isIntObsSupported()&&amzncsm.addCustomEvent("amzncsmVChng",function(){a()}),amzncsm.addCustomEvent("amzncsmVdrcompl",function(){b.beaconSent.vdr=!0})}))},amzncsm.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a.prototype[c]=b[c])},window.amzncsm.rmR=function(a,b,c){amzncsm.api="RTB",amzncsm.isBen=!1,startCsmComp(a,b)},startCsmComp=function(a,b){var c,d,e,f;try{if(c=function(b){b.message&&(amzncsm.errors.push(b.message),amzncsm.reportErrors(a))},""==a)return;/^https?:\/\//.test(a)===!1&&(a="https:"+(/^\/\//.test(a)?"":"//")+a),"/"!=a.substr(a.length-1)&&(a+="/"),/^http:\/\//.test(a)===!0&&(a=a.replace("http://","https://")),amzncsm.instrURL=a,d=b,e=d.document,f=function(a){var b=a.readyState;return"complete"===b},f(e)?amzncsm.rm({e:d,i:a,w:d,d:e}):void 0===document.onreadystatechange?amzncsm.rm({e:d,i:a,w:d,d:e}):e.onreadystatechange=function(){try{f(e)&&amzncsm.rm({e:d,i:a,w:d,d:e})}catch(b){c(b)}}}catch(g){c(g)}},window.amzncsm.rmD=function(a,b,c,d,e){amzncsm.api="DTB",amzncsm.outsideImpIframe=!0;var f="https://",g=window.amzncsm.host||"aax.amazon-adsystem.com",h="/x/px/",i=f+g+h+b+"/";startCsmComp(i,c)},window.amzncsm.rmDB=function(a,b){amzncsm.api="DTB",amzncsm.outsideImpIframe=!1,startCsmComp(a,b)},window.amzncsm.rmOB=function(a,b){amzncsm.api="ONO",startCsmComp(a,b)},amzncsm.extend(amzncsm.detectViewability,{getIframeWindowDimension:function(a,b){var c,d,e,f,g,h=b.body,i=a.innerWidth||b.documentElement.clientWidth||h.clientWidth||640,j=a.innerHeight||b.documentElement.clientHeight||h.clientHeight||480;return window.mozInnerScreenX&&window.mozInnerScreenY&&(c=90,d=a.mozInnerScreenX,e=a.mozInnerScreenY-c-10,f=window.screen.availWidth,g=window.screen.availHeight-c,0!==d&&(0>d?(i+=d,i=Math.max(0,i)):d>f?i=0:f-d>i||(i=f-d),i=Math.min(i,f)),0!==e&&(0>e?(j+=e,j=Math.max(0,j)):g>e?g-e>j||(j=g-e+2):j=0),j=Math.min(j,g)),{width:i,height:j}},getViewPortSize:function(a){var b={width:1/0,height:1/0,area:1/0};return!isNaN(a.document.body.clientWidth)&&a.document.body.clientWidth>0&&(b.width=a.document.body.clientWidth),!isNaN(a.document.body.clientHeight)&&a.document.body.clientHeight>0&&(b.height=a.document.body.clientHeight),a.document.documentElement&&a.document.documentElement.clientWidth&&!isNaN(a.document.documentElement.clientWidth)&&(b.width=a.document.documentElement.clientWidth),a.document.documentElement&&a.document.documentElement.clientHeight&&!isNaN(a.document.documentElement.clientHeight)&&(b.height=a.document.documentElement.clientHeight),a.innerWidth&&!isNaN(a.innerWidth)&&(b.width=Math.min(b.width,a.innerWidth)),a.innerHeight&&!isNaN(a.innerHeight)&&(b.height=Math.min(b.height,a.innerHeight)),b.area=b.height*b.width,b},fractionInViewportIE:function(){var a,b,c,d,e,f=Number.MAX_VALUE,g=Number.MAX_VALUE,h=Number.MIN_VALUE,i=Number.MIN_VALUE,j=10,k=0,l=this.getIframeWindowDimension(window,document),m=l.width,n=l.height,o=(m/j+1)*(n/j+1);for(c=0;m>=c;c+=j)for(d=0;n>=d;d+=j)e=document.elementFromPoint(c,d),null!==e&&(k++,f>c?f=c:c>h&&(h=c),g>d?g=d:d>i&&(i=d));return a=h-f,b=i-g,(0>=a||0>=b)&&(a=0,b=0),0!==o?k/o:0},fractionInViewportFF:function(a,b){var c,d,e,f,g,h,i,j,k,l;return!window.mozInnerScreenX&&0!==window.mozInnerScreenX||!window.mozInnerScreenY&&0!==window.mozInnerScreenY?-1:(c=this.getIframeWindowDimension(window,document),d=c.width,e=c.height,f=b.offsetWidth,g=b.offsetHeight,h=100,this.leftPos=Math.abs(window.mozInnerScreenX),this.topPos=Math.abs(window.mozInnerScreenY-h),i=f,j=g,k=this.topPos,l=this.leftPos,l>=0&&(l=a.getBoundingClientRect().left),k>=0&&(k=a.getBoundingClientRect().top),0>k&&(j+=k),k+g>e&&(j-=k+g-e),0>l&&(i+=l),l+f>d&&(i-=l+f-d),0>i&&(i=0),i>f&&(i=f),0>j&&(j=0),j>g&&(j=g),0!==g&&0!==f?i*j/(g*f):0)},initViewCompIntObs:function(a,b){function c(c){c.forEach(function(c){var e,f=c.boundingClientRect,g=c.intersectionRect,h=f.width*f.height;null!==h&&isNaN(h)===!1&&h>0&&(e=g.width*g.height/h,d===!1?(d=!0,a.call(null,e)):(b.call(null,e),amzncsm.dispatchCustomEvent("amzncsmVChng")))})}var d=!1,e=new IntersectionObserver(c,{threshold:[.1,.3,.5,.7,.9]});e.observe(document.body),amzncsm.setTimeout(function(){d===!1&&(d=!0,a.call(null,0))},500)},initVCompSafari:function(){function a(a,b){var c,d,e,f=document.createElement("IFRAME"),g='var vs = false; function step() { vs = true; }; function dv() { vs = false; window.requestAnimationFrame(step); window.setTimeout(function() { if (vs === true) { parent.postMessage(window.frameElement.id + " vs", "*"); } else { parent.postMessage(window.frameElement.id + " ivs", "*"); } }, 20); }; (function registerPostMessageHandler() { var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent"; var eventer = window[eventMethod]; var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message"; eventer(messageEvent, function(e) { var key = e.message ? "message" : "data"; var data = e[key]; if (data == "dv") { dv(); } }, false); })(); ';f.id=b,f.height=5,f.width=5,f.style.position="absolute",f.style.opacity=0;for(c in a)a.hasOwnProperty(c)&&(f.style[c]=a[c]);document.body.appendChild(f);try{d=f.contentDocument,d&&(d.open(),d.writeln("<!DOCTYPE html><html><head><title></title></head><body></body></html>"),d.close(),e=d.createElement("script"),e&&(e.type="text/javascript",e.text=g,d.body.appendChild(e)))}catch(h){amzncsm.reportClientError(h)}return f}amzncsm.safv={itrCount:0,atfPixelFired:!1},a({top:"20px",right:"20px"},"adcfTR"),a({bottom:"20px",left:"20px"},"adcfBL"),a({bottom:"20px",right:"20px"},"adcfBR"),a({top:"20px",left:"20px"},"adcfTL"),a({top:"50%",left:"50%"},"adcfCenter"),a({top:"-1000px",right:"-1000px"},"adcfInv"),amzncsm.setTimeout(function(){amzncsm.safv.atfPixelFired===!1&&amzncsm.safv.atfSuccessCb&&(amzncsm.safv.atfPixelFired=!0,amzncsm.safv.atfSuccessCb.call(null,0))},2e3),amzncsm.registerPostMessageHandler(function(a){var b=a.split(" ");"adcfInv"===b[0]?"vs"===b[1]?(amzncsm.safv.fp=!0,amzncsm.safv.vCount=0):amzncsm.safv.fp=!1:("vs"===b[1]||"ivs"===b[1])&&"vs"===b[1]&&amzncsm.safv.fp===!1&&amzncsm.safv.vCount++,amzncsm.safv.respCount++,6===amzncsm.safv.respCount&&(amzncsm.safv.itrCount++,amzncsm.safv.fp===!1&&amzncsm.safv.itrCount>2&&(amzncsm.safv.atfPixelFired===!0?amzncsm.safv.viewSuccessCb.call(null,amzncsm.safv.vCount/5):amzncsm.safv.atfSuccessCb&&(amzncsm.safv.atfPixelFired=!0,amzncsm.safv.atfSuccessCb.call(null,amzncsm.safv.vCount/5))))})},fractionInViewportSafari:function(a,b){var c,d;for(amzncsm.safv.vCount=0,amzncsm.safv.respCount=0,amzncsm.safv.fp=!1,a?amzncsm.safv.atfSuccessCb=b:amzncsm.safv.viewSuccessCb=b,c=document.getElementsByTagName("iframe"),d=0;d<c.length;d++)/adcf/.test(c[d].id)&&c[d].contentWindow.postMessage("dv","*")},domHitTestingWithBoundary:function(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o=Number.MAX_VALUE,p=Number.MAX_VALUE,q=Number.MIN_VALUE,r=Number.MIN_VALUE,s=0,t=0;for(k=a;b>=k;k+=e)for(l=c;d>=l;l+=f)s++,j=h.elementFromPoint(k,l),g.call(null,j)&&(t++,i===!0&&(o>k?o=k:k>q&&(q=k),p>l?p=l:l>r&&(r=l)));return m=q-o,n=r-p,(0>=m||0>=n)&&(m=0,n=0),i?{height:n,width:m}:0!==s?t/s:0},detectActualDimension:function(a){if(amzncsm.isIntObsSupported()||amzncsm.isSafari())return 1;if(amzncsm.isIE()){var b=a.getBoundingClientRect().top,c=a.getBoundingClientRect().left,d=a.offsetWidth,e=a.offsetHeight,f=function(a){return null!==a};return this.domHitTestingWithBoundary(c,c+d,b,b+e,5,5,f,this.hostDoc,!1)}return 1}}),amzncsm=amzncsm||{},amzncsm.rm=function(){var a,b,c,d,e,f,g="r-1.30";return amzncsm.version=g,a={RTB:{viewDuration:!0,hoverStats:!1,pageMetrics:!1,fraudMetrics:!1,domainMask:!1,funcSpoofing:!1,detectBrowser:!1,headlessBrowser:!1},DTB:{viewDuration:!0,hoverStats:!1,pageMetrics:!1,fraudMetrics:!1,domainMask:!1,funcSpoofing:!1,detectBrowser:!1,headlessBrowser:!1},ONO:{viewDuration:!0,hoverStats:!1,pageMetrics:!1,fraudMetrics:!1,domainMask:!1,funcSpoofing:!1,detectBrowser:!1,headlessBrowser:!1},supportedBrowsers:{IE:!0,Firefox:!0,Chrome:!0,Safari:!0,Other:!0}},amzncsm.config=a,b=function(a){var b,c;if(window.performance&&window.performance.getEntriesByType&&"function"==typeof window.performance.getEntriesByType)for(b=window.performance.getEntriesByType("resource"),c=0;c<b.length;++c)if(a.test(b[c].name)===!0)return b[c];
return null},c=function(){var a,c,d=new RegExp("csm([\\S]+)?.js"),e=b(d);null!==e&&(a=window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart?window.performance.timing.navigationStart:0,c={ns:a,st:e.startTime.toFixed(2),re:e.responseEnd.toFixed(2),ldTot:e.duration.toFixed(2)},amzncsm.pixelQueue.addPixel(JSON.stringify(c)))},d=function(a){var b,c,d,e=window.performance.getEntriesByType("measure"),f={};for(b=0;b<e.length;++b)e[b].name.endsWith(a)&&(c=e[b],d=c.name.substring(0,c.name.length-a.length),f[d]=c.duration.toFixed(2));amzncsm.pixelQueue.addPixel(JSON.stringify(f))},e=function(a){var b,e=a.e,g=a.i,h=a.w,i=a.d,j=Math.round(1e7*Math.random()).toString();return amzncsm.csmReport=amzncsm.csmReport||{},amzncsm.csmReport.hasOwnProperty(j)?!1:(amzncsm.csmReport[j]={},f(amzncsm.api,e,g,h,i,j),window.performance&&window.performance.mark&&"function"==typeof window.performance.mark&&window.performance.mark("csmStart"+j),c(),("DTB"===amzncsm.api||"RTB"===amzncsm.api||"ONO"===amzncsm.api)&&(b=new amzncsm.detectViewability(e,g,h,i,j),b.collectData&&b.collectData()),window.performance&&window.performance.mark&&"function"==typeof window.performance.mark&&(window.performance.mark("csmEnd"+j),window.performance.measure("csmTot"+j,"csmStart"+j,"csmEnd"+j),d(j)),void(amzncsm.errors.length>0&&amzncsm.reportErrors(g)))},f=function(b,c,d,e,f,g){var h,i,j,k,l,m,n=amzncsm.getModules(c,d,e,f);for(h in n)if(n.hasOwnProperty(h)&&(i=n[h],(i["default"]===!0||a[b][h]===!0)&&(amzncsm.loadModules(g,[{name:h,params:i.params}]),i.global===!0)))for(j in amzncsm[h])amzncsm[h].hasOwnProperty(j)&&(amzncsm[j]=amzncsm[h][j]);k=!1,k&&"undefined"!=typeof TPM&&TPM.init({pixelQueue:amzncsm.pixelQueue,vendorCtxArr:amzncsm.vendorCtxArr,adId:g}),l=window.amzncsmp||{},l.sia===!0&&(m={instrURL:encodeURI(d),pixelId:amzncsm.getPixelID()},window.top.postMessage(JSON.stringify(m),"*"))},e}()}();