document.write("<!DOCTYPE html>\n<head>\n<title>ADFORM STUDIO BUILDER: Standard Slider v 1.8</title>\n<meta charset=\"UTF-8\">\n\n<!-- Adform API Script -->\n<script type=\"text/javascript\">\ndocument.write('<script src=\"'+ (window.API_URL || 'https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js?bv='+ Math.random()) +'\"><\\/script>');\n</script>\n\n<!--#head:common/head-->\n<!--#flexGallery.head:flexGallery/globalhead-->\n<script src=\"//s1.adform.net/banners/scripts/components/Adform.FlexGallery-1.js\"></script>\n<!--#/#--><!--#animations.head:animations/globalhead.1-->\n<script>\nthis.Adf=this.Adf||{},this.Adf.animate=function(){\"use strict\";function t(t){var n={};for(var i in t)n[i]=t[i];return n}function n(){this.elementsIndex=[]}function i(n,i,e,r){this.isActive=!1,this.elementId=e.getElementId(r.element),this.groups=r.groups||[],this.element=r.element,this.toProps=r.settings.toProps,this.fromParams=r.settings.fromParams||null,this._toPropsCopy=t(r.settings.toProps),this.tweenSettings=r.settings,this.onUpdate=r.onUpdate,this.activationDelay=r.activationDelay,this.sharedParamsManager=i,this.AdfTween=n}function e(t,n,i,e){this.managers={GAM:t,GSM:n,SPM:i,ACM:e}}function r(t){this._params={},this._initialParamsCopy={},this.elementIdTracker=t}function o(){this.animations=[]}function a(t){this.startedAnimations={},this.sharedParamsManager=t}function s(){this.activeGroups={},this.subscribers={}}function u(t){this.state={},this.sharedParamsManager=t}function c(t){var n=new i(f,d,m,t);return p.register(n),w.adjustElementParamIfNeeded(n),n}function h(t){requestAnimationFrame(h),f.update(t)}!function(){for(var t=0,n=[\"ms\",\"moz\",\"webkit\",\"o\"],i=0;i<n.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[n[i]+\"RequestAnimationFrame\"],window.cancelAnimationFrame=window[n[i]+\"CancelAnimationFrame\"]||window[n[i]+\"CancelRequestAnimationFrame\"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,i){var e=(new Date).getTime(),r=Math.max(0,16-(e-t)),o=window.setTimeout(function(){n(e+r)},r);return t=e+r,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(){if(\"performance\"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},\"now\"in window.performance==!1){var t=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-t}}}();var f=function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(n){t.push(n)},remove:function(n){var i=t.indexOf(n);i!==-1&&t.splice(i,1)},update:function(n){if(0===t.length)return!1;var i=0;for(n=void 0!==n?n:window.performance.now();i<t.length;)t[i].update(n)?i++:t.splice(i,1);return!0}}}();f.Tween=function(t){var n=t,i={},e={},r={},o=1e3,a=0,s=!1,u=!1,c=0,h=null,m=null,p=f.Easing.Linear.None,l=f.Interpolation.Linear,d=[],v=null,w=null,g=!1,I=null,M=null,P=null,y=!1;for(var A in t)i[A]=parseFloat(t[A],10);this.to=function(t,n){return void 0!==n&&(o=n),e=t,this},this.start=function(t){f.add(this),u=!0,v&&v(),g=!1,h=void 0!==t?t:window.performance.now(),h+=c;for(var i in e)if(e[i]instanceof Array){if(0===e[i].length)continue;e[i]=[n[i]].concat(e[i])}return this},this.stop=function(){return u?(f.remove(this),u=!1,null!==P&&P.call(n),this.stopChainedTweens(),this):this},this.pause=function(){return u?(f.remove(this),u=!1,this):this},this.resume=function(){return u?this:(f.add(this),u=!0,this)},this.stopChainedTweens=function(){for(var t=0,n=d.length;t<n;t++)d[t].stop()},this.delay=function(t){return c=t,this},this.repeat=function(t){return a=t,this},this.yoyo=function(t){return s=t,this},this.easing=function(t){return p=t,this},this.interpolation=function(t){return l=t,this},this.chain=function(){return d=arguments,this},this.onInitStart=function(t){return v=t,this},this.onStart=function(t){return w=t,this},this.onUpdate=function(t){return I=t,this},this.onComplete=function(t){return M=t,this},this.onStop=function(t){return P=t,this},this.update=function(f){var v,P,A;if(f<h)return!0;if(g===!1&&(null!==w&&w.call(n),g=!0),!y){for(var S in e)void 0!==i[S]&&(i[S]=parseFloat(t[S],10),i[S]instanceof Array==!1&&(i[S]*=1),r[S]=i[S]);y=!0,m=window.performance.now()}P=(f-h)/o,P=P>1?1:P,A=p(P);for(v in e)if(void 0!==i[v]){var b=i[v]||0,O=e[v];O instanceof Array?n[v]=l(O,A):(\"string\"==typeof O&&(O=O.startsWith(\"+\")||O.startsWith(\"-\")?b+parseFloat(O,10):parseFloat(O,10)),\"number\"==typeof O&&(n[v]=b+(O-b)*A))}if(null!==I&&I.call(n,A),1===P){if(a>0){isFinite(a)&&a--;for(v in r){if(\"string\"==typeof e[v]&&(r[v]=r[v]+parseFloat(e[v],10)),s){var G=r[v];r[v]=e[v],e[v]=G}i[v]=r[v]}return h=f+c,!0}u=!1,null!==M&&M.call(n);for(var C=0,E=d.length;C<E;C++)d[C].start(h+o);return!1}return!0}},f.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var n,i=.1,e=.4;return 0===t?0:1===t?1:(!i||i<1?(i=1,n=e/4):n=e*Math.asin(1/i)/(2*Math.PI),-(i*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)))},Out:function(t){var n,i=.1,e=.4;return 0===t?0:1===t?1:(!i||i<1?(i=1,n=e/4):n=e*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/e)+1)},InOut:function(t){var n,i=.1,e=.4;return 0===t?0:1===t?1:(!i||i<1?(i=1,n=e/4):n=e*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)):i*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)*.5+1)}},Back:{In:function(t){var n=1.70158;return t*t*((n+1)*t-n)},Out:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?.5*(t*t*((n+1)*t-n)):.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-f.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*f.Easing.Bounce.In(2*t):.5*f.Easing.Bounce.Out(2*t-1)+.5}}},f.Interpolation={Linear:function(t,n){var i=t.length-1,e=i*n,r=Math.floor(e),o=f.Interpolation.Utils.Linear;return n<0?o(t[0],t[1],e):n>1?o(t[i],t[i-1],i-e):o(t[r],t[r+1>i?i:r+1],e-r)},Bezier:function(t,n){for(var i=0,e=t.length-1,r=Math.pow,o=f.Interpolation.Utils.Bernstein,a=0;a<=e;a++)i+=r(1-n,e-a)*r(n,a)*t[a]*o(e,a);return i},CatmullRom:function(t,n){var i=t.length-1,e=i*n,r=Math.floor(e),o=f.Interpolation.Utils.CatmullRom;return t[0]===t[i]?(n<0&&(r=Math.floor(e=i*(1+n))),o(t[(r-1+i)%i],t[r],t[(r+1)%i],t[(r+2)%i],e-r)):n<0?t[0]-(o(t[0],t[0],t[1],t[1],-e)-t[0]):n>1?t[i]-(o(t[i],t[i],t[i-1],t[i-1],e-i)-t[i]):o(t[r?r-1:0],t[r],t[i<r+1?i:r+1],t[i<r+2?i:r+2],e-r)},Utils:{Linear:function(t,n,i){return(n-t)*i+t},Bernstein:function(t,n){var i=f.Interpolation.Utils.Factorial;return i(t)/i(n)/i(t-n)},Factorial:function(){var t=[1];return function(n){var i=1;if(t[n])return t[n];for(var e=n;e>1;e--)i*=e;return t[n]=i,i}}(),CatmullRom:function(t,n,i,e,r){var o=.5*(i-t),a=.5*(e-n),s=r*r,u=r*s;return(2*n-2*i+o+a)*u+(-3*n+3*i-2*o-a)*s+o*r+n}}},n.prototype.getElementId=function(t){return this.elementsIndex.indexOf(t)>-1?this.elementsIndex.indexOf(t):this.elementsIndex.push(t)-1},i.prototype.makeTween=function(){var n=this,i=this.sharedParamsManager.getParams(this.elementId),e=this.tweenSettings;this.toProps=t(this._toPropsCopy),this.tween=new this.AdfTween.Tween(i).to(this.toProps,e.duration).easing(e.easing||this.AdfTween.Easing.Linear.None).repeat(e.repeat===1/0?e.repeat:Math.max(parseInt((e.repeat||0)-1),0)).yoyo(e.yoyo||!1).onUpdate(function(){n.onUpdate(n.element,i)})},i.prototype.activate=function(t){0===this.activationDelay?this.tween.start(t):this.tween.start(t+this.activationDelay)},e.prototype.startAnimationsGroup=function(t,n,i){var e=this,r=this.managers;if(!r.GSM.isGroupInProgress(t)){for(var o=window.performance.now(),a=r.GAM.getByGroup(t),s=0;s<a.length;s++)a[s].makeTween(),this._hookToLifecycleManagers(a[s]),a[s].activate(o);(i||n)&&r.GSM.subscribe(t,function(r){n&&n>1?(e._resetAnimationsToStartPosition(a),e.startAnimationsGroup(t,n-1,i)):i&&i(r)})}},e.prototype.stopAnimationsGroup=function(t){for(var n=this.managers.GAM.getByGroup(t),i=0;i<n.length;i++)n[i].tween.stop();this._resetAnimationsToStartPosition(n)},e.prototype._resetAnimationsToStartPosition=function(t){var n={};t.forEach(function(t){t.fromParams&&Object.keys(t.fromParams).forEach(function(i){(!n[i]||n[i].activationDelay>t.activationDelay)&&(n[i]=t)})});var i=this.managers.SPM.getParams(t[0].elementId);Object.keys(n).forEach(function(t){i[t]=n[t].fromParams[t]}),t.forEach(function(t,n){t.onUpdate(t.element,i)},this)},e.prototype._hookToLifecycleManagers=function(t){function n(){r.GSM.onInitStart(t.groups),r.ACM.onInitStart(t)}function i(){r.ACM.onStart(t)}function e(){r.ACM.onStopComplete(t),r.GSM.onStopComplete(t.groups)}var r=this.managers;t.tween.onInitStart(n).onStart(i).onStop(e).onComplete(e)},r.prototype.getParams=function(t){if(!this._params[t])throw Error(\"You must set initial Param state for element\");return this._params[t]},r.prototype.adjustParams=function(t,n){var i=this._params[t];for(var e in n)i[e]=n[e]},r.prototype.reset=function(n){this._params[n]=t(this._initialParamsCopy[n])},r.prototype.setInitialParamsForElement=function(n,i){var e=this.elementIdTracker.getElementId(n);this._params[e]=i,this._initialParamsCopy[e]=t(i)},o.prototype.register=function(t){this.animations.push(t)},o.prototype.getByGroup=function(t){return this.animations.filter(function(n){return n.groups.indexOf(t)>-1})},a.prototype.onInitStart=function(t){t.isActive=!1,this.startedAnimations[t.elementId]?this.startedAnimations[t.elementId].push(t):this.startedAnimations[t.elementId]=[t]},a.prototype.onStart=function(t){function n(t,n){for(var i in n.toProps)i in t.toProps&&delete t.toProps[i]}var i=this.startedAnimations[t.elementId];if(i&&i.length>0)for(var e=0;e<i.length;e++)i[e].isActive&&n(i[e],t);t.fromParams&&this.sharedParamsManager.adjustParams(t.elementId,t.fromParams),t.isActive=!0},a.prototype.onStopComplete=function(t){var n=this.startedAnimations[t.elementId].indexOf(t);this.startedAnimations[t.elementId].splice(n,1),t.isActive=!1,0===this.startedAnimations[t.elementId].length&&this.sharedParamsManager.reset(t.elementId)},s.prototype.isGroupInProgress=function(t){return void 0!==this.activeGroups[t]&&0!==this.activeGroups[t]},s.prototype.subscribe=function(t,n){this.subscribers[t]?this.subscribers[t].push(n):this.subscribers[t]=[n]},s.prototype.onInitStart=function(t){for(var n=0;n<t.length;n++){var i=t[n];this.activeGroups[i]?this.activeGroups[i]+=1:this.activeGroups[i]=1}},s.prototype.onStopComplete=function(t){for(var n=0;n<t.length;n++){var i=t[n];if(this.activeGroups[i]-=1,0===this.activeGroups[i]&&this.subscribers[i]){for(var e=0,r=this.subscribers[i].length;e<r;e++){var o=this.subscribers[i].splice(e,1,void 0)[0];o(i)}this.subscribers[i]=this.subscribers[i].filter(function(t){return void 0!==t})}}},u.prototype.adjustElementParamIfNeeded=function(t){function n(n){i=i||e.sharedParamsManager.getParams(t.elementId),i[n]=t.fromParams[n],t.onUpdate(t.element,i)}var i,e=this,r=t.elementId;this.state[r]||(this.state[r]={});for(var o in t.fromParams)this.state[r][o]?t.activationDelay<this.state[r][o]&&(this.state[r][o]=t.activationDelay,n(o)):(this.state[r][o]=t.activationDelay,n(o))};var m=new n,p=new o,l=new s,d=new r(m),v=new a(d),w=new u(d),g=new e(p,l,d,v);h();var I={createAnimation:c,startAnimationsGroup:g.startAnimationsGroup.bind(g),stopAnimationsGroup:g.stopAnimationsGroup.bind(g),setInitialParamsForElement:d.setInitialParamsForElement.bind(d),Easing:f.Easing};return I}();\n\n    (function(Adf) {\n        var PROP_PREFIXES = ['ms', 'Ms', 'webkit', 'Webkit', 'moz', 'Moz', 'o', 'O'];\n\n        var testDivElem = null;\n        var stylePropMap = {};\n\n        function findPrefixedPropName(object, propName, prefixes, ownProp) {\n            if ((!ownProp && propName in object) || (ownProp && object.hasOwnProperty(propName))) {\n                return propName;\n            }\n\n            propName = propName.charAt(0).toUpperCase() + propName.slice(1);\n\n            for (var i = 0, prefixedPropName; i < prefixes.length; i++) {\n                prefixedPropName = prefixes[i] + propName;\n\n                if ((!ownProp && prefixedPropName in object) || (ownProp && object.hasOwnProperty(prefixedPropName))) {\n                    return prefixedPropName;\n                }\n            }\n\n            return null;\n        }\n\n        function prefixStylePropName(propName) {\n            if (stylePropMap.hasOwnProperty(propName)) {\n                return stylePropMap[propName];\n            }\n\n            if (!testDivElem) {\n                testDivElem = document.createElement('div');\n            }\n\n            return stylePropMap[propName] = findPrefixedPropName(testDivElem.style, propName, PROP_PREFIXES, false);\n        }\n\n        Adf.cssHelpers = Adf.cssHelpers || {};\n        Adf.cssHelpers.prefixStylePropName = prefixStylePropName;\n\n    })(Adf = window.Adf || {});\n\n    var AdfAnimTransformProp = Adf.cssHelpers.prefixStylePropName('transform');\n\n    (function(Adf) {\n        var scaleRegex = /scale\\(\\d+\\.*\\d*.*\\)/;\n        var translateRegex = /translate3d\\((-?\\d+\\.?\\d*px),(\\s*-?\\d+\\.?\\d*px), (\\s*-?\\d+\\.?\\d*px)\\)/;\n        var rotateRegex = /rotate\\(-?\\d+\\.?\\d*deg\\)/;\n\n        function addBaseTransform(target, initialParamState) {\n\n            var defaultTransform = 'translate(' + initialParamState.pivotX + ', ' + initialParamState.pivotY + ') translate(' + initialParamState.translateX + ', ' + initialParamState.translateY + ') rotate(' + initialParamState.rotate + 'deg)';\n\n            if (!defaultTransform.match(translateRegex)) defaultTransform += 'translate3d(' + initialParamState.x + 'px, ' + initialParamState.y +'px, 0px)';\n            if (!defaultTransform.match(scaleRegex)) defaultTransform += 'scale(1)';\n\n            target.style[AdfAnimTransformProp] = defaultTransform;\n        }\n\n        Adf.cssHelpers = Adf.cssHelpers || {};\n        Adf.cssHelpers.scaleRegex = scaleRegex;\n        Adf.cssHelpers.translateRegex = translateRegex;\n        Adf.cssHelpers.rotateRegex = rotateRegex;\n        Adf.cssHelpers.addBaseTransform = addBaseTransform;\n    })(Adf = window.Adf || {});\n\n\n    function DocVisibilityHandler() {\n        var callbacks = [];\n        var html = document.head.parentNode;\n        html.style.visibility = 'hidden';\n        document.addEventListener('DOMContentLoaded', function() {\n            html.style.visibility = 'visible';\n            for (var i = 0; i < callbacks.length; i ++) {\n                callbacks[i]();\n            }\n        });\n\n        function onDocVisible(cb) {\n            callbacks.push(cb);\n        }\n        return {\n            onDocVisible: onDocVisible\n        }\n    }\n\n    var AdfDocVisibilityHandler = DocVisibilityHandler();\n\n</script>\n<!--#/#--><!--#animations-move.head:animations-move/globalhead-->\n\n<script>\n    function AdfAnimateTranslateXAndY(target, allParams) {\n        var currentTransform = target.style[AdfAnimTransformProp];\n        target.style[AdfAnimTransformProp] = currentTransform.replace(Adf.cssHelpers.translateRegex, 'translate3d(' + allParams.x.toFixed(2) + 'px,' + allParams.y.toFixed(2) + 'px, 0px)');\n    }\n\n    function getCurrentElementCoords(componentId, containerId) {\n        var STAGE_ID = 0;\n\n        function getComponentDOMElementById(componentId) {\n            if (componentId == STAGE_ID) {\n                return document.getElementsByTagName('body')[0];\n            } else {\n                return document.getElementById(componentId);\n            }\n        }\n\n        var component = getComponentDOMElementById(componentId);\n        var container = getComponentDOMElementById(containerId);\n        var compBRects = component.getBoundingClientRect();\n        var contBRects = container.getBoundingClientRect();\n        return {\n            x: compBRects.left - contBRects.left,\n            y: compBRects.top - contBRects.top\n        };\n    }\n\n\n    function calcDestinationProps(customX, customY, loop, componentId, containerId) {\n        var currentCoords = getCurrentElementCoords(componentId, containerId);\n        var coords = {x: customX - currentCoords.x, y: customY - currentCoords.y};\n\n        if (loop > 1) {\n            coords.x = parseFloat(coords.x);\n            coords.y = parseFloat(coords.y);\n        }\n        return coords;\n    }\n</script>\n\n<!--#/#-->\n<!--#/#--><!--#css:common/css-->\n<style>\n/*#flexGallery.css:flexGallery/globalcss*/\n.adf-FlexGallery {\n    position: absolute;\n    -webkit-animation-fill-mode:forwards;\n    -moz-animation-fill-mode:forwards;\n    -ms-animation-fill-mode:forwards;\n    animation-fill-mode: forwards;\n    -ms-touch-action: none;\n    background: transparent;\n}\n.adf-FlexGallery .hidden {\n    visibility: hidden\n}\n.adf-FlexGallery > .adf-Shape {\n    width: 100%;\n    height: 100%;\n    margin: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.adf-FlexGallery-Panel {\n    -webkit-backface-visibility:hidden;\n    -moz-backface-visibility:hidden;\n    -ms-backface-visibility: visible;\n    backface-visibility:hidden;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-size: cover;\n}\n\n/* nav controls*/\n.adf-FlexGallery .adf-Controls--previous, .adf-FlexGallery .adf-Controls--next, .adf-FlexGallery .adf-Controls--right, .adf-FlexGallery .adf-Controls--left, .adf-FlexGallery .adf-Controls--up, .adf-FlexGallery .adf-Controls--down {\n    background: #fff url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9Ii0zLjU2MiAtMy41NjIgNzEuMTI0IDcxLjEyNCI+DQogIDxkZWZzPg0KICA8L2RlZnM+DQogIDxwYXRoIGQ9Ik00OC4xMjEsNC40MjMgTDIwLjU0NCwzMi4wMDAgTDQ4LjEyMSw1OS41NzcgQzQ4LjkwMiw2MC4zNTggNDguOTAyLDYxLjYyNSA0OC4xMjEsNjIuNDA2IEw0Ny40MTQsNjMuMTEzIEM0Ni42MzMsNjMuODk0IDQ1LjM2Nyw2My44OTQgNDQuNTg2LDYzLjExMyBMMTUuNTk0LDM0LjEyMSBMMTQuODg3LDMzLjQxNCBDMTQuMTA2LDMyLjYzMyAxNC4xMDYsMzEuMzY3IDE0Ljg4NywzMC41ODYgTDQ0LjU4NiwwLjg4NyBDNDUuMzY3LDAuMTA2IDQ2LjYzMywwLjEwNiA0Ny40MTQsMC44ODcgTDQ4LjEyMSwxLjU5NCBDNDguOTAyLDIuMzc1IDQ4LjkwMiwzLjY0MiA0OC4xMjEsNC40MjMgWiIgc3R5bGU9ImZpbGw6ICMwMDVGOEM7DQpmaWxsLXJ1bGU6IGV2ZW5vZGQ7Ii8+DQo8L3N2Zz4=') 50% 50% no-repeat;\n    height: 30px;\n    width: 30px;\n    position: absolute;\n    z-index:9999;\n    cursor:pointer;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.adf-FlexGallery .adf-Controls--previous, .adf-FlexGallery .adf-Controls--next, .adf-FlexGallery .adf-Controls--right, .adf-FlexGallery .adf-Controls--left {\n    top: 50%;\n    -webkit-transform: translate3d(0, -50%, 30000000px);\n    -moz-transform: translate3d(0, -50%, 30000000px);\n    -ms-transform: translate3d(0, -50%, 30000000px);\n    -o-transform: translate3d(0, -50%, 30000000px);\n    transform: translate3d(0, -50%, 30000000px);\n    left: 0;\n}\n.adf-FlexGallery .adf-Controls--previous.u-vControls, .adf-FlexGallery .adf-Controls--next.u-vControls, .adf-FlexGallery .adf-Controls--up, .adf-FlexGallery .adf-Controls--down {\n    left: 50%;\n    -webkit-transform: translate3d(-50%, 0, 30000000px) rotate(90deg);\n    -moz-transform: translate3d(-50%, 0, 30000000px) rotate(90deg);\n    -ms-transform: translate3d(-50%, 0, 30000000px) rotate(90deg);\n    -o-transform: translate3d(-50%, 0, 30000000px) rotate(90deg);\n    transform: translate3d(-50%, 0, 30000000px) rotate(90deg);\n    top: 0;\n}\n.adf-FlexGallery .adf-Controls--next, .adf-FlexGallery .adf-Controls--right, .adf-FlexGallery .adf-Controls--down {\n    background: #fff url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9Ii0zLjU2MiAtMy41NjIgNzEuMTI0IDcxLjEyNCI+DQogIDxkZWZzPg0KICA8L2RlZnM+DQogIDxwYXRoIGQ9Ik00OS4xMTMsMzMuNDE0IEw0OC40MDYsMzQuMTIxIEwxOS40MTQsNjMuMTEzIEMxOC42MzMsNjMuODk0IDE3LjM2Nyw2My44OTQgMTYuNTg2LDYzLjExMyBMMTUuODc5LDYyLjQwNiBDMTUuMDk4LDYxLjYyNSAxNS4wOTgsNjAuMzU4IDE1Ljg3OSw1OS41NzcgTDQzLjQ1NiwzMi4wMDAgTDE1Ljg3OSw0LjQyMyBDMTUuMDk4LDMuNjQyIDE1LjA5OCwyLjM3NSAxNS44NzksMS41OTQgTDE2LjU4NiwwLjg4NyBDMTcuMzY3LDAuMTA2IDE4LjYzMywwLjEwNiAxOS40MTQsMC44ODcgTDQ5LjExMywzMC41ODYgQzQ5Ljg5NCwzMS4zNjcgNDkuODk0LDMyLjYzMyA0OS4xMTMsMzMuNDE0IFoiIHN0eWxlPSJmaWxsOiAjMDA1RjhDOw0KZmlsbC1ydWxlOiBldmVub2RkOyIvPg0KPC9zdmc+') 50% 50% no-repeat;\n}\n.adf-FlexGallery .adf-Controls--next, .adf-FlexGallery .adf-Controls--right {\n    left: auto;\n    right: 0;\n}\n.adf-FlexGallery .adf-Controls--next.u-vControls, .adf-FlexGallery .adf-Controls--down {\n    top: auto;\n    bottom: 0;\n}\n.adf-FlexGallery .adf-Controls--previous:hover, .adf-FlexGallery .adf-Controls--next:hover, .adf-FlexGallery .adf-Controls--right:hover, .adf-FlexGallery .adf-Controls--left:hover, .adf-FlexGallery .adf-Controls--up:hover, .adf-FlexGallery .adf-Controls--down:hover {\n    background-color: #5AAAD2;\n}\n.adf-FlexGallery-Panel.no-controls .adf-Controls {\n    display: none;\n}\n\n.adf-FlexGallery-Bullets {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    -moz-transform: translate(-50%);\n    -ms-transform: translate(-50%);\n    -o-transform: translate(-50%);\n    transform: translate(-50%);\n    z-index: 10000;\n    bottom: 20px;\n    text-align: center;\n}\n.adf-FlexGallery-Bullet {\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    margin: 0px 5px;\n    border-radius: 10px;\n    background: #000000;\n    opacity: 0.3;\n    cursor: pointer;\n}\n.adf-FlexGallery-Bullets > .active {\n    background: #fff;\n    opacity: 1;\n}\n\n/* swipe icon */\n.adf-FlexGallery-Finger {\n    position: absolute;\n    height: 25%;\n    min-height: 50px;\n    opacity: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    z-index: 99999;\n}\n.adf-FlexGallery-Finger.animate {\n    animation-name: pulse-horizontal;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-name: pulse-horizontal;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n}\n.vertical .adf-FlexGallery-Finger.animate {\n    animation-name: pulse-vertical;\n    -webkit-animation-name: pulse-vertical;\n}\n\n@-webkit-keyframes pulse-horizontal {\n    70% {\n        -webkit-transform: rotate(10deg);\n        opacity: 0;\n        left: 50%;\n    }\n    85% {\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: rotate(-10deg);\n        opacity: 0;\n        left: -50%;\n    }\n}\n@keyframes pulse-horizontal {\n    70% {\n        transform: rotate(10deg);\n        opacity: 0;\n        left: 50%;\n    }\n    85% {\n        opacity: 1;\n    }\n    100% {\n        transform: rotate(-10deg);\n        opacity: 0;\n        left: -50%;\n    }\n}\n@-webkit-keyframes pulse-vertical {\n    70% {\n        transform: rotate(-60deg);\n        opacity: 0;\n        top: 50%\n    }\n    85% {\n        opacity: 1\n    }\n    100% {\n        transform: rotate(-10deg);\n        opacity: 0;\n        top: -50%\n    }\n}\n@keyframes pulse-vertical {\n    70% {\n        transform: rotate(-60deg);\n        opacity: 0;\n        top: 50%\n    }\n    85% {\n        opacity: 1\n    }\n    100% {\n        transform: rotate(-10deg);\n        opacity: 0;\n        top: -50%\n    }\n}\n/*#/#*//*#visibility.css:visibility/globalcss*/\n.visibility-hidden, .visibility-hidden * {\n    visibility: hidden !important;\n}\n/*#/#*//*#i4.panelSlide.css:panelSlide/base/css.3*/\n.expanding-collapsed > #i4 {\n    overflow: visible;\n}\n/*#/#*//*#i8.i56.image.css:image/base/css*/\n#i56 { opacity: 1; }\n/*#/#*//*#i56.i57.positioning.css:positioning/base/css.2*/\n#i56 { position: absolute; top: 0px; left: 0px; overflow: hidden; width: 300px; height: 250px;\n        -ms-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        -webkit-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        -moz-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        transform: translate(0, 0) translate(0, 0) rotate(0deg);\n}\n/*#/#*//*#i19.i58.image.css:image/base/css*/\n#i58 { opacity: 1; }\n/*#/#*//*#i58.i59.positioning.css:positioning/base/css.2*/\n#i58 { position: absolute; top: 0px; left: 0px; overflow: hidden; width: 300px; height: 250px;\n        -ms-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        -webkit-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        -moz-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        transform: translate(0, 0) translate(0, 0) rotate(0deg);\n}\n/*#/#*//*#i4.i5.positioning.css:positioning/base/css.2*/\n#i4 { position: absolute; top: 0px; left: 0px; overflow: hidden; width: 100%; height: 100%;\n        -ms-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        -webkit-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        -moz-transform: translate(0, 0) translate(0, 0) rotate(0deg);\n        transform: translate(0, 0) translate(0, 0) rotate(0deg);\n}\n/*#/#*/\n</style>\n<!--#/#--></head>\n<body>\n<!--#html:common/html--><!--#i1.core.html:core/html--><!--#/#--><!--#i4.panelSlide.html:panelSlide/html.3-->\n<div id=\"i4\" class=\"adf-FlexGallery\">\n    <div class=\"adf-Shape\">\n        <!--#i4.i8.panelSlide-panel.html:panelSlide-panel/html.1-->\n<div id=\"i8\" class=\"adf-Panel \">\n    <!--#i8.i56.image.html:image/html-->\n<img id=\"i56\" src=\"assets/DECLINAISONS%20GARNIER%201_300x250.png\"/>\n<!--#/#-->\n</div>\n<!--#/#--><!--#i4.i19.panelSlide-panel.html:panelSlide-panel/html.1-->\n<div id=\"i19\" class=\"adf-Panel \">\n    <!--#i19.i58.image.html:image/html-->\n<img id=\"i58\" src=\"assets/DECLINAISONS%20GARNIER%201_300x250.png\"/>\n<!--#/#-->\n</div>\n<!--#/#-->\n    </div>\n</div>\n<!--#/#--><!--#i7.flexGallery.html:flexGallery/html-->\n<!--#/#--><!--#/#--><!--#js:common/js-->\n<script>\n/*#i4.panelSlide.js:panelSlide/js.3*/\nvar panelSlide_i4 = new Adform.FlexGallery({\n    elementId: 'i4',\n    panelWidth: '100%',\n    panelHeight: '100%',\n    panelSpacing: '0',\n    paddingForButtons: '0',\n    perspective: '800',\n    animationDirection: 'horizontal',\n    animationDuration: '0.4',\n    autoAnimationEnabled: 'true',\n    autoAnimationDelay: '3',\n    autoAnimationTime: '28',\n    defaultButtons: 'false',\n    panelButtons: 'false',\n    buttonsDirection: 'horizontal',\n    defaultBullets: 'false',\n    allowParentSwipe: 'false',\n    preventPageSwipe: 'true',\n    swipeIconSource: '',\n    swipeIcon: '',\n    zoom: '100',\n    sides: '1'\n});\n\npanelSlide_i4.init();\n\n/*#/#*//*#i8.i56.image.js:image/base/js*/\n\n/*#/#*//*#i56.i57.positioning.js:positioning/base/js.2*/\nbmShow('i56');\n/*#/#*//*#i8.i52.actions.js:actions/base/js.1*/\n/* Name: On Click; */\nvar el = document.getElementById('i8');\n\nel.addEventListener('click', function(e){\n    /*#i52.i53.actions-clicktag.js:actions-clicktag/base/js.2*/\n    window.mraid ? mraid.open(Adform.getClickURL('clickTAG')) : window.open(dhtml.getVar('clickTAG', 'http://www.adform.com'), dhtml.getVar('landingPageTarget', '_blank'));\n/*#/#*/\n});\n\nif ('click' === 'click') {\n    el.style.cursor = 'pointer';\n}\n/*#/#*//*#i19.i58.image.js:image/base/js*/\n\n/*#/#*//*#i58.i59.positioning.js:positioning/base/js.2*/\nbmShow('i58');\n/*#/#*//*#i19.i54.actions.js:actions/base/js.1*/\n/* Name: On Click; */\nvar el = document.getElementById('i19');\n\nel.addEventListener('click', function(e){\n    /*#i54.i55.actions-clicktag.js:actions-clicktag/base/js.2*/\n    window.mraid ? mraid.open(Adform.getClickURL('clickTAG2')) : window.open(dhtml.getVar('clickTAG2', 'http://www.adform.com'), dhtml.getVar('landingPageTarget', '_blank'));\n/*#/#*/\n});\n\nif ('click' === 'click') {\n    el.style.cursor = 'pointer';\n}\n/*#/#*//*#i4.i5.positioning.js:positioning/base/js.2*/\nbmShow('i4');\n/*#/#*//*#i4.i60.animations.js:animations/js.1*/\n(function(){\n    var ADFAnimTarget_i60 = document.getElementById('i4');\n    var AnimParentID = 'i4';\n    var initialParamState = JSON.parse('{\"opacity\":1,\"rotate\":0,\"translateX\":\"0\",\"translateY\":\"0\",\"pivotX\":\"0\",\"pivotY\":\"0\",\"scale\":1,\"x\":0,\"y\":0}');\n    Adf.cssHelpers.addBaseTransform(ADFAnimTarget_i60, initialParamState);\n    Adf.animate.setInitialParamsForElement(ADFAnimTarget_i60, initialParamState);\n\n    /*#i60.i61.animations-move.js:animations-move/js*/\nAdf.animate.createAnimation({\n    element: ADFAnimTarget_i60, settings: {\n    toProps: calcDestinationProps(parseFloat(0), parseFloat(0), 1, AnimParentID, '0'),\n    duration: 1 * 1000,\n    repeat: 1,\n    easing: Adf.animate.Easing.Linear.None\n    }, onUpdate: AdfAnimateTranslateXAndY, groups: [AnimParentID], activationDelay: 0 * 1000\n});\n\n/*#/#*/\n\n    if (true) AdfDocVisibilityHandler.onDocVisible(function(){Adf.animate.startAnimationsGroup(AnimParentID, 1);});\n})();\n\n/*#/#*//*#i6.visibility.js:visibility/js*/\nfunction bmShow(id) {\n    var el = document.getElementById(id);\n    el.classList.remove('visibility-hidden');\n}\n\nfunction bmHide(id) {\n    var el = document.getElementById(id);\n    el.classList.add('visibility-hidden');\n}\n/*#/#*/\n</script>\n<!--#/#--><!--#meta:common/meta--><!--/*#i1.core.meta:core/meta*/version: 2;/*#/#*//*#i4.panelSlide.meta:panelSlide/meta.3*/\nname: Panel Slide;\ncustomName: 1;\ndata: /*!*/{\"mode\":\"simple\"}/*!*/;\n/*#/#*//*#i4.i8.panelSlide-panel.meta:panelSlide-panel/meta.1*/\n    name: Panel Slide Panel 1;\n/*#/#*//*#i8.i56.image.meta:image/meta*/\nname: DECLINAISONS GARNIER 1_300x250.png; fileId: ; sourceTypeId: assetImages; autoDimensions: 1;\ncustomName: false;\n/*#/#*//*#i56.i57.positioning.meta:positioning/meta.2*/\ndata: /*!*/{\"keepAspectRatio\":true}/*!*/;\n/*#/#*//*#i4.i19.panelSlide-panel.meta:panelSlide-panel/meta.1*/\n    name: Panel Slide Panel 2;\n/*#/#*//*#i19.i58.image.meta:image/meta*/\nname: DECLINAISONS GARNIER 1_300x250.png; fileId: ; sourceTypeId: assetImages; autoDimensions: 1;\ncustomName: false;\n/*#/#*//*#i58.i59.positioning.meta:positioning/meta.2*/\ndata: /*!*/{\"keepAspectRatio\":true}/*!*/;\n/*#/#*//*#i4.i5.positioning.meta:positioning/meta.2*/\ndata: /*!*/{}/*!*/;\n/*#/#*//*#i4.i60.animations.meta:animations/meta.1*/\nname: animations 1;\ncustomName: ;\nanimation \n\n/*#/#*//*#i60.i61.animations-move.meta:animations-move/meta*/\nname: Move 1;\ncustomName: ;\n/*#/#*/--><!--#/#-->");