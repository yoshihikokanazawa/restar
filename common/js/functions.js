// functions.js 2019.12.14

/*! jQuery UI - v1.9.2 - 2013-03-06
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */
jQuery.effects||function(e,t){var n=e.uiBackCompat!==!1,r="ui-effects-";e.effects={effect:{}},function(t,n){function p(e,t,n){var r=a[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function d(e){var n=o(),r=n._rgba=[];return e=e.toLowerCase(),h(s,function(t,i){var s,o=i.re.exec(e),a=o&&i.parse(o),f=i.space||"rgba";if(a)return s=n[f](a),n[u[f].cache]=s[u[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&t.extend(r,c.transparent),n):c[e]}function v(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),i=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],o=t.Color=function(e,n,r,i){return new t.Color.fn.parse(e,n,r,i)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},a={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=o.support={},l=t("<p>")[0],c,h=t.each;l.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=l.style.backgroundColor.indexOf("rgba")>-1,h(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),o.fn=t.extend(o.prototype,{parse:function(r,i,s,a){if(r===n)return this._rgba=[null,null,null,null],this;if(r.jquery||r.nodeType)r=t(r).css(i),i=n;var f=this,l=t.type(r),v=this._rgba=[];i!==n&&(r=[r,i,s,a],l="array");if(l==="string")return this.parse(d(r)||c._default);if(l==="array")return h(u.rgba.props,function(e,t){v[t.idx]=p(r[t.idx],t)}),this;if(l==="object")return r instanceof o?h(u,function(e,t){r[t.cache]&&(f[t.cache]=r[t.cache].slice())}):h(u,function(t,n){var i=n.cache;h(n.props,function(e,t){if(!f[i]&&n.to){if(e==="alpha"||r[e]==null)return;f[i]=n.to(f._rgba)}f[i][t.idx]=p(r[e],t,!0)}),f[i]&&e.inArray(null,f[i].slice(0,3))<0&&(f[i][3]=1,n.from&&(f._rgba=n.from(f[i])))}),this},is:function(e){var t=o(e),n=!0,r=this;return h(u,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],h(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return h(u,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=o(e),r=n._space(),i=u[r],s=this.alpha()===0?o("transparent"):this,f=s[i.cache]||i.to(s._rgba),l=f.slice();return n=n[i.cache],h(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],u=a[r.type]||{};if(o===null)return;s===null?l[i]=o:(u.mod&&(o-s>u.mod/2?s+=u.mod:s-o>u.mod/2&&(s-=u.mod)),l[i]=p((o-s)*t+s,r))}),this[r](l)},blend:function(e){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=o(e)._rgba;return o(t.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(r*255)),"#"+t.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),o.fn.parse.prototype=o.fn,u.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,f===0||f===1?c=f:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},u.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(v(o,s,t+1/3)*255),Math.round(v(o,s,t)*255),Math.round(v(o,s,t-1/3)*255),i]},h(u,function(e,r){var s=r.props,u=r.cache,a=r.to,f=r.from;o.fn[e]=function(e){a&&!this[u]&&(this[u]=a(this._rgba));if(e===n)return this[u].slice();var r,i=t.type(e),l=i==="array"||i==="object"?e:arguments,c=this[u].slice();return h(s,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=c[t.idx]),c[t.idx]=p(n,t)}),f?(r=o(f(c)),r[u]=c,r):o(c)},h(s,function(n,r){if(o.fn[n])return;o.fn[n]=function(s){var o=t.type(s),u=n==="alpha"?this._hsla?"hsla":"rgba":e,a=this[u](),f=a[r.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=t.type(s)),s==null&&r.empty?this:(o==="string"&&(l=i.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[r.idx]=s,this[u](a)))}})}),h(r,function(e,n){t.cssHooks[n]={set:function(e,r){var i,s,u="";if(t.type(r)!=="string"||(i=d(r))){r=o(i||r);if(!f.rgba&&r._rgba[3]!==1){s=n==="backgroundColor"?e.parentNode:e;while((u===""||u==="transparent")&&s&&s.style)try{u=t.css(s,"backgroundColor"),s=s.parentNode}catch(a){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=o(e.elem,n),e.end=o(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},c=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={},r,i;if(t&&t.length&&t[0]&&t[t[0]]){i=t.length;while(i--)r=t[i],typeof t[r]=="string"&&(n[e.camelCase(r)]=t[r])}else for(r in t)typeof t[r]=="string"&&(n[r]=t[r]);return n}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").andSelf():r;f=f.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=jQuery.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function i(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function s(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]?n&&e.effects[t]?!1:!0:!1}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var n=0;n<t.length;n++)t[n]!==null&&e.data(r+t[n],e[0].style[t[n]])},restore:function(e,n){var i,s;for(s=0;s<n.length;s++)n[s]!==null&&(i=e.data(r+n[s]),i===t&&(i=""),e.css(n[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function a(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,s=t.mode;(r.is(":hidden")?s==="hide":s==="show")?u():o.call(r[0],t,u)}var t=i.apply(this,arguments),r=t.mode,s=t.queue,o=e.effects.effect[t.effect],u=!o&&n&&e.effects[t.effect];return e.fx.off||!o&&!u?r?this[r](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):o?s===!1?this.each(a):this.queue(s||"fx",a):u.call(this,{options:t,duration:t.duration,callback:t.complete,mode:t.mode})},_show:e.fn.show,show:function(e){if(s(e))return this._show.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(s(e))return this._hide.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(s(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);

// jQuery easing
jQuery.extend(jQuery.easing,{easeIn:function(e,t,n,r,i){return jQuery.easing.easeInQuad(e,t,n,r,i)},easeOut:function(e,t,n,r,i){return jQuery.easing.easeOutQuad(e,t,n,r,i)},easeInOut:function(e,t,n,r,i){return jQuery.easing.easeInOutQuad(e,t,n,r,i)},expoin:function(e,t,n,r,i){return jQuery.easing.easeInExpo(e,t,n,r,i)},expoout:function(e,t,n,r,i){return jQuery.easing.easeOutExpo(e,t,n,r,i)},expoinout:function(e,t,n,r,i){return jQuery.easing.easeInOutExpo(e,t,n,r,i)},bouncein:function(e,t,n,r,i){return jQuery.easing.easeInBounce(e,t,n,r,i)},bounceout:function(e,t,n,r,i){return jQuery.easing.easeOutBounce(e,t,n,r,i)},bounceinout:function(e,t,n,r,i){return jQuery.easing.easeInOutBounce(e,t,n,r,i)},elasin:function(e,t,n,r,i){return jQuery.easing.easeInElastic(e,t,n,r,i)},elasout:function(e,t,n,r,i){return jQuery.easing.easeOutElastic(e,t,n,r,i)},elasinout:function(e,t,n,r,i){return jQuery.easing.easeInOutElastic(e,t,n,r,i)},backin:function(e,t,n,r,i){return jQuery.easing.easeInBack(e,t,n,r,i)},backout:function(e,t,n,r,i){return jQuery.easing.easeOutBack(e,t,n,r,i)},backinout:function(e,t,n,r,i){return jQuery.easing.easeInOutBack(e,t,n,r,i)}})


////////////////
/// Function ///
////////////////
function getParam() {
	var url = location.href;
	var parameters = url.split("?");
	var params = parameters[1].split("&");
	var paramsArray = [];
	for ( i = 0; i < params.length; i++ ) {
		neet = params[i].split("=");
		paramsArray.push(neet[0]);
		paramsArray[neet[0]] = neet[1];
	}
	return paramsArray;
}


//////////////////////
/// jQuery Custom ////
//////////////////////


// ---------------------
// Check Terminal v1.0.1
// ---------------------
//
// @param
// @return {boolean}
// @throws
//
jQuery(function($){
	var ua;
	function isSmartPhone(){
		ua=window.navigator.userAgent.toLowerCase();
		return ((ua.indexOf("windows") != -1 && ua.indexOf("phone") != -1)
			|| ua.indexOf("iphone") != -1
			|| ua.indexOf("ipod") != -1
			|| (ua.indexOf("android") != -1 && ua.indexOf("mobile") != -1)
			|| (ua.indexOf("firefox") != -1 && ua.indexOf("mobile") != -1)
			|| ua.indexOf("blackberry") != -1);
		//return ((ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') == -1) || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0);
	}
	function isTablet(){
		ua=window.navigator.userAgent.toLowerCase();
		return ((ua.indexOf("windows") != -1 && ua.indexOf("touch") != -1)
			|| ua.indexOf("ipad") != -1
			|| (ua.indexOf("android") != -1 && ua.indexOf("mobile") == -1)
			|| (ua.indexOf("firefox") != -1 && ua.indexOf("tablet") != -1)
			|| ua.indexOf("kindle") != -1
			|| ua.indexOf("silk") != -1
			|| ua.indexOf("playbook") != -1);
	}
	function isPc(){
		return !isSmartPhone()&&!isTablet();
	}
	$.extend({
		'isSmartPhone':isSmartPhone,
		'isTablet':isTablet,
		'isPc':isPc,
	});
});



// --------------------
// offsetZoomTop v1.0.1
// --------------------
//
// cssのzoomが1じゃないときのoffset topの位置が変わるので調整。
//
//
// @param
// @return {number}（高さ位置）
// @throws
//
jQuery(function($) {
	// Huawei P20 Lite Google Chromeで htmlタグの初期設定にzoom:3が入っている仕様をノーマライズ化
	$('html').css({'zoom':1});
	$.fn.extend({
		'offsetZoomTop':function(){
			var top=$(window).scrollTop();
			var zoom=(parseInt($('html').css('zoom'))||parseInt($('body').css('zoom'))||1);
			return $(this).offset().top * zoom + top *( 1 - zoom);
		}
	});
});





// ----------------------
// getBase v1.0.0
// ----------------------
//
// scrollTopを使うエレメントを選ぶ
//
jQuery(function($){
	var $base;
	$.extend({'getBase':function(){
		if(typeof $base==='undefined'){
			if($('html').scrollTop()>0){
				$base=$('html');
			}else if($('body').scrollTop()>0){
				$base=$('body');
			}
		}
		return $base;
	}});
});

// ----------------------
// checkScrollDiff v1.0.0
// ----------------------
//
// 過去3つのscrollTopを取得し同じ値がある場合ノーカウント（0）とする。
// iphone iOs用対策 scrollイベント時 scrollTopを取得すると過去3つの値に戻る場合がある。
//
jQuery(function($){
	var $base;
	var checkTop=[-1,-1,-1];
	$.extend({'checkScrollDiff':function(){
		//if($base==undefined)$base=$.getBase();
		if(typeof $base==='undefined')$base=$.getBase();
		var top=$base.scrollTop();
		for(var i=0;i<3;i++)
			if(checkTop[i]==top)
				return 0;
		var diff=checkTop[2]-top;
		for(var i=0;i<2;i++)
			checkTop[i]=checkTop[i+1];
		checkTop[2]=top;
		return diff;
	}});
});

// ---------------------------
// checkScrollDirection v1.0.0
// ---------------------------
//
// 過去3つのscrollTopを取得し差の平均値を取り向きを判定させる
// iphoneだけじゃなく汎用性があるように
//
jQuery(function($){
	var $base;
	var checkTop=[];
	var id;
	var MAX=4;
	function _reset(){
		for(var i=0;i<MAX;i++)
			checkTop[i]=-1;
	}
	_reset();

	$.extend({'checkScrollDirection':function(){
		if(typeof $base==='undefined')$base=$.getBase();
		//if($base==undefined)$base=$.getBase();
		var top=$base.scrollTop();
		var count=0;
		var d=0;
		for(var i=0;i<MAX;i++){
			if(checkTop[i]>=0){
				count++;
				d+=checkTop[i]-checkTop[i+1];
			}
		}
		if(checkTop[MAX]>=0){
			count++;
			d+=checkTop[MAX]-top;
		}
		for(var i=0;i<MAX;i++)
			checkTop[i]=checkTop[i+1];
		checkTop[MAX]=top;

		// 0.5秒立った場合リセット
		clearTimeout(id);
		id=setTimeout(function(){
			_reset();
		},500);

		if(count<=0)d=0;else d=d/count;
		if(d==0)return 0;
		else if(d<0)return -1;
		else if(d>0)return 1;
	}});
});




// -------------------
// SmoothScroll v1.0.1
// -------------------
//
// ページ内遷移の場合、スムーズにスクロールさせる。
//
//
// @param {string} duration, {string} easing, {object} responsive（）
// @return jQuery
// 
jQuery(function($){


	var diff=0,
		params={},
		methods={},
		hash,
		base,
		DEFAULTS={
			duration:5000,
			easing:'easeOutQuint',
			responsive:[{
				min:0,
				max:999999,
				diff:0,
			},],
		};
	params=$.extend(DEFAULTS,params);
	methods={
		scrollStop:function(){
			base.stop(true);
		},
		getBase:function(){
			var $eq;
			if($('html').scrollTop()>0){
				$eq=$('html');
			}else if($('body').scrollTop()>0){
				$eq=$('body');
			}
			return $eq;
		},
		getDiff:function(){
			var d=0;
			for(var i=0;i<params.responsive.length;i++){
				var dt=params.responsive[i];
				var w=$(window).innerWidth();
				if(w>=dt.min&&w<dt.max)d=dt.diff;
			}
			return d;
		}
	}

	// 
	$.extend({
		'SmoothScroll':function(h){
			
			hash='#'+h;
			if($(hash).length<=0)return;

			var offset=$(hash).offset();
			if (!(hash&&offset!==null))return;
			
			var wst=$(window).scrollTop();
			if(wst===0)$(window).scrollTop(wst+1);

			var diff=methods.getDiff();
			
			base=methods.getBase();
			if(typeof base==='undefined')return;

			base.scrollTop($(hash).offsetZoomTop()-diff);

			if(window.addEventListener)
				window.addEventListener('DOMMouseScroll',methods.scrollStop,false);
			window.onmousewheel=document.onmousewheel=methods.scrollStop;

		}
	});
	
	// 
	$.fn.extend({
		'SmoothScroll':function(prm){

			params=$.extend(DEFAULTS,prm);

			return this.each(function(i,e){
				$(e).on('click',function(){

					var hash=this.hash;

					var offset=$(hash).offset();
					if (!(hash&&offset!==null))return;
					
					var wst=$(window).scrollTop();
					if(wst===0)$(window).scrollTop(wst+1);
					
					var diff=methods.getDiff();

					base=methods.getBase();
					if(typeof base==='undefined')return;

					base.animate({'scrollTop':$(hash).offsetZoomTop()-diff},params.duration,params.easing,function(){
						//location.hash = targetHash;
					});

					if(window.addEventListener)
						window.addEventListener('DOMMouseScroll',methods.scrollStop,false);
					window.onmousewheel=document.onmousewheel=methods.scrollStop;
					//return false;
				});
			});
		}
	});
});


// ---------------
// Sns Share 1.0.0
// ---------------
//
// 各シェアボタンの設定
//
//
jQuery(function($){
	function openWindow(url) {
		window.open(url,"","width=650,height=450,menubar=no,toolbar=no,scrollbars=yes");
	}

	$.fn.facebookLink = function(){
		$(this).each(function(){
			$(this).on('click',function(){
				openWindow("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.hostname) + window.location.pathname);
				return false;
			});
		});
	};
	$.fn.twitterLink = function(){
		$(this).each(function(){
			$(this).on('click',function(){
				openWindow('http://twitter.com/share?url=' + encodeURIComponent(window.location.hostname) + window.location.pathname + "&text=" + encodeURIComponent($("title").text()));
				return false;
			});
		});
	};
	$.fn.lineLink = function(){
		$(this).each(function(){
			$(this).on('click',function(){
				openWindow('http://line.me/R/msg/text/?' + encodeURIComponent($("title").text()) + '%0D%0A' + encodeURIComponent(window.location.href));
				return false;
			});
		});
	};
	// Google Plusが2019/4に終了したため今後削除
	$.fn.googleplusLink = function(){
		$(this).each(function(){
			$(this).on('click',function(){
				openWindow("https://plus.google.com/share?url=" + encodeURIComponent(window.location.hostname) + window.location.pathname);
				return false;
			});
		});
	};
	
});


// --------------------
// SmartRollover v0.1.0
// --------------------
//
// Change SmartPhone Images
// マウスーオーバーした場合に画像ファイル名の -off　を -on に変える
// ※古い機能のため今後変更予定なし
//
jQuery(function($){
	$.extend({
		'SmartRollover':function(){
			function smartRollover() {
				if(document.getElementsByTagName) {  
					var images = document.getElementsByTagName("img");  
					for(var i=0; i < images.length; i++){
						if(!$.isSmartPhone()){
							if(images[i].getAttribute("src").match("-off.")){
								var target=images[i];
								if(images[i].parentElement.tagName=="A"){
									//target=images[i].parentElement;//親要素にaがある場合はaタグに設定
									target.parentElement.onmouseover = on(images[i]);
									target.parentElement.onmouseout = off(images[i]);
								}
							}
						}
					}  
				}
				function on(img){
					return function(){
						img.setAttribute("src", img.getAttribute("src").replace("-off.", "-on."));
						img.setAttribute("style","opacity:1");
					}
				}
				function off(img){
					return function(){
						img.setAttribute("src", img.getAttribute("src").replace("-on.", "-off."));
					}
				}
			}
			if(window.addEventListener) {  
				window.addEventListener("load", smartRollover, false);  
			}  
			else if(window.attachEvent) {  
				window.attachEvent("onload", smartRollover);  
			}
		}
	});
});


// --------------------
// ImageChange v0.1.0
// --------------------
//
// Change SmartPhone Images
// $.ImageChange('sp')で全体の画像内ファイル名 -pc を -sp に買える
// $.ImageChange('pc')の場合は、-spを-pcに買える
// ※古い機能のため今後変更予定なし
//
jQuery(function($){
	$.extend({
		'ImageChange':function(s){
			var images = document.getElementsByTagName("img");  
			for(var i=0; i < images.length; i++) {  
				var target=images[i];
				switch(s){
					case 'pc':
						if(target.getAttribute("src").match("-sp")){
							target.setAttribute("src", target.getAttribute("src").replace("-sp", "-pc"));
						}
						break;
					case 'sp':
					default:
						if(target.getAttribute("src").match("-pc")){
							target.setAttribute("src", target.getAttribute("src").replace("-pc", "-sp"));
						}
						break;
				}
			}
		}
	});
});



// --------------------
// StickyHeader v2.1.2
// --------------------
//
// スティッキーヘッダー
//
//
//
// - html
//
// <header class="sticky></header>
// 
// 
// - css
//
// header {
//  position:fixed;
//  left:0;
//  top:0;
// }
// header.sticky {
// }
// header.sticky.hide {
// }
//
// 
// - params
// 
// duration : 
// scrollDownHide : 
// scrollDownTimeout : 
// responsive : 
//
jQuery(function($){
	$.fn.extend({
		'StickyHeader':function(params){
			var $th=$(this),
				$wrap=$('#container'),
				id,
				isOpen=false,
				tempTop=0,
				DEFAULT={
					duration:0,
					scrollDownHide:true,
					scrollDownTimeout:30,
					responsive:[{
						min:0,
						max:999999,
						diff:0,
					},],
				}
			params=$.extend(DEFAULT,params);
			$(window).on('scroll',handler);
			$(window).on('load',init);

			function getDiff(){
				var d=0;
				for(var i=0;i<params.responsive.length;i++){
					var dt=params.responsive[i];
					var w=$(window).innerWidth();
					if(w>=dt.min&&w<dt.max)d=dt.diff;
				}
				return d;
			}
			
			function handler(ev){
				checkScrollHandlerAction=true;
				if($wrap.css('position')=='fixed'){
					isOpen=true;
					return;
				}
				var top=$('html').scrollTop()||$('body').scrollTop();
				if(isOpen){
					isOpen=false;
				}else{
					if(tempTop!=top)mov(top);
				}
				tempTop=top;
			}
			function init(){
				if($wrap.css('position')!='fixed'){
					var top=$(window).scrollTop();
					var diff=getDiff();
					if(top>diff){
						$th.addClass('sticky');
					}
				}
			}
			
			function mov(top){
				var diff=getDiff();
				//
				if(top<diff){
					clearTimeout(id);
					$th.removeClass('sticky');
					$th.removeClass('hide');
					return;
				}
				$th.addClass('sticky');
				//
				if($.checkScrollDirection()>0){
					$th.removeClass('hide');
					return;
				}
				// 
				if(params.scrollDownTimeout<=0){
					$th.removeClass('hide');
					return;
				}
				$th.addClass('hide');
				//
				if(params.scrollDownHide){
					return;
				}
				clearTimeout(id);
				id=setTimeout(function(){
					$th.removeClass('hide');
				},params.scrollDownTimeout);
			}
		}
	});
});


// --------------------
// HanburgerMenu v1.1.2
// --------------------
//
// ハンバーガーメニュー
//
//
//
// - html
//
// <header>
// <div id="gnav">
// <p class="gnav-hamburger"><span></span><span></span><span></span></p>
// <div class="gnav-inner"><ul class="gnav-nav"><li></li></ul></div>
// </div>
// </header>
//
//
// - css
//
// setting.css
//
// header #ganv span // ハンバーガーアイコン箇所
// .gnavOpen header #gnav span //ハンバーガーアイコン箇所
// 
// header {
// min-height: 100%;
// pointer-events: none;
// }
// header > *:not(#gnav){
// pointer-events: auto;
// }
// header #gnav .gnav-inner {
// position: absolute;
// transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
// z-index: -1;
// transform: translateX(100%);
// min-height:100%;
// cursor-events:auto;
// }
//
// .gnavOpen header #gnav .gnav-inner {
// transform: translateX(0);
// height: 100%;
// min-height: 100%;
// pointer-events: auto;
// }
//
//
// - params
// 
// inner : wrap navigateion jQuery Element
// hamburger : button jQuery Element
//
//
// - plugins
//
// jquery.exResize
// jquery.BdoyScroll
//
jQuery(function($){
	$.fn.extend({
		'hamburgerMenu':function(params){
			var $th=$(this);
			var DEFAULTS={
				inner:$th.find('.gnav-inner'),
				hamburger:$th.find('.gnav-hamburger'),
			};
			params=$.extend(DEFAULTS,params);
			// init
			$th.addClass('close');
			params.inner.css({
				'overflow':'auto',
				'-webkit-overflow-scrolling':'touch'
			});
			// setting
			params.hamburger.on('click',function(){
				if($th.hasClass('open')){
					menuClose();
				}else{
					menuOpen();
				}
				return false;
			});
			$th.find('.gnav-sp-close').on('click',function(){
				menuClose();
				return false;
			});
			$th.find('ul li a[href^="#"]').on('click',function(){
				menuClose();
			});
			params.inner.find('.gnav-nav').exResize(function(){
				if(params.inner.find('.gnav-nav').outerHeight()<params.inner.outerHeight())
					$.BodyScroll.stop('prevendDefault');
				else
					$.BodyScroll.start();
			});
			function menuOpen(){
				if(!$th.hasClass('open')){
					$th.addClass('open');
					$th.removeClass('close');
					params.inner.scrollTop(0);
					$('body').removeClass('gnavClose').addClass('gnavOpen');
					if(params.inner.find('.gnav-nav').outerHeight()<params.inner.outerHeight())$.BodyScroll.stop('prevendDefault');
				}
			}
			function menuClose(){
				if($th.hasClass('open')){
					$th.removeClass('open');
					$th.addClass('close');
					$.BodyScroll.start();
					$('body').removeClass('gnavOpen').addClass('gnavClose');
				}
			}
			return $th;
		}
	});
});


// -----------------
// BodyScroll v1.1.1
// -----------------
//
// 全体のスクロールをストップさせる
//
//
// - html
//
// <body><div id="container"></div></body>
//
// - methods
//
// stop : stop scroll
// start : start scroll
//
jQuery(function($){
	var $th=$('#container');
	var currentScrollY;
	var style={
		'position':'',
		'width':'',
		'top':''
	};
	function handler(e){
		e.preventDefault();
	}
	$.extend({
		'BodyScroll':{
			stop:function(p){
				currentScrollY = $(window).scrollTop(); 
				switch(p){
					case 'prevendDefault':
						document.addEventListener('touchmove', handler, {passive: false});
						break;
					default:
						//style.position=$th.css('position');
						//style.width=$th.css('width');
						//style.top=$th.css('top');
						$th.css({
							position: 'fixed',
							width: '100%',
							top: -1 * currentScrollY
						});
						break;
				}
			},
			start:function(){
				// prevendDefault
				document.removeEventListener('touchmove', handler, {passive: true});
				// default
				$th.css({
					'position':'',
					'width':'',
					'top':'',
				});
				$('html, body').prop({scrollTop:currentScrollY});				
			},
		}
	});
});




// --------------------
// StickyPagetop v1.0.0
// --------------------
//
// ページトップ
//
//
// - html
//
// <div id="pagetop"><a href="#container">PAGE TOP</a></div>
//
//
// - css
//
// #pagetop{
//  任意 //footerStickyOffがtrueのときはclass="sticky"が無くなり、この部分が反映されます。
// }
// #pagetop.sticky{
//  position:fixed;　//（強制的にfixedにされます。）
//  right:0; // ここは0
//  bottom:0; // ここは0（強制的に0にされます。）
//  padding:0 0 50px 50px;//paddingでボタン位置を決める
// }
//
jQuery(function($){
	var count=0;
	$.fn.extend({
		'StickyPagetop':function(params){
			var DEFAULTS={
				duration:200, //表示スピード
				scrollHide:true, // スクロール中非表示にする
				topHide:false, // ページトップのとき非表示にする
				footerStickyOff:true, //フッターが画面に出てきたときにsticky機能をオフにするか
				footerSticky:$('footer'),
			};
			params=$.extend(DEFAULTS,params);


			$(this).each(function(){
	
				var $th=$(this);
	
				$th.wrap('<div id="stickypagetop_'+count+'" />');
				var $fade=$('#stickypagetop_'+count);
				$fade.css({'z-index':$th.css('z-index'),'position':'relative'});
				count++;
	
				var $footer=params.footerSticky;
				var isShow=false;
				var timeoutID=setTimeout(function(){},0);
	
				$('#container').css({'position':'relative'});
				$th.addClass('sticky').css({'position':'fixed','top':'inherit'});
				 
				$(window).on('load scroll',function(){
					var top=$(window).scrollTop();
					var winH=$(window)[0].innerHeight;
					var conH=$('#container').outerHeight();
					var footerH=$footer.outerHeight();
					
					// フッターが画面に出てきたときにStickyをオフにする
					if((top+winH>conH-footerH)&&params.footerStickyOff){
						var bottom=top+winH-conH+footerH;
						$th.removeClass('sticky').css({'position':'','bottom':'','top':''});
						clearTimeout(timeoutID);
						$fade.stop().show().css({'opacity':1});
						//$th.stop().show().css({'opacity':1});//
						isShow=true;
					}else{
						$th.addClass('sticky').css({'position':'fixed','bottom':0,});
						if(top<=50){
							if(params.topHide)hidePagetop();
						}else{
							if(params.scrollHide)hidePagetop();
							if(!isShow)showPagetop();
						}
					}
				});
				$th.on('click',function(){
					clearTimeout(timeoutID);
					if(isShow){
						$fade.stop().fadeOut();
						//$th.stop().fadeOut();
						isShow=false;
					}
				});
				function hidePagetop(){
					clearTimeout(timeoutID);
					$fade.stop().fadeOut(params.duration);
					//$th.stop().hide();//
					isShow=false;
				}
				function showPagetop(){
					clearTimeout(timeoutID);
					timeoutID=setTimeout(function(){
						$th.show();
						$fade.stop().fadeIn(params.duration);
						//$th.stop().fadeIn(params.duration);
						isShow=true;
					},200);
				}
			});
		}
	});
});




// -----------------------
// ScrollAnimation v2.1.0
// -----------------------
//
// <div class="sa" data-delay="30" data-margin="50" data-trigger=".triggerTag"></div>
// <div class="triggerTag"></div> //
// 
// data-delay : アニメーションのタイミングの遅延
// data-margin : アニメーションタイミングの高さの差（画面下から）
// data-trigger : スクロールタイミングを指定のタグを基準とする
//
// ※縦のアニメーションは transformで行わないと作動タイミングが変わります。
//
jQuery(function($){

	$.extend({
		'ScrollAnimation':function(params){
	    //ウィンドウの高さを取得
	    var wh = $(window).height();
			var DEFAULTS={
				triggerClass:'sa',
				triggerMarginUnit:'%', // 'px' or '%'
				triggerMargin:30,
				showClass:'show',
				mode:'once', // 'once' or 'repeat'
			};
			params=$.extend(DEFAULTS,params);
			
			setTimeout(scrollAnimationFunc,1000);
			$(window).on('scroll',scrollAnimationFunc);


			
			function scrollAnimationFunc() {
				$('.' + params.triggerClass).each(function(i){
					var $th=$(this),
						$trigger=$th,
						triggerMargin = params.triggerMargin,
						margin = 0,
						wt=$(window).scrollTop(),
						wh=$(window).innerHeight();
					
					// dataMargin設定がある場合は、triggerMargin上書き
					if($th.data('margin')!=null)
						triggerMargin = parseInt($th.data('margin'));
					
					// dataTrigger設定がある場合は、$trigger上書き
					if($th.data('trigger')!=null){
						$eq=$(document.querySelector($th.data('trigger')));
						if($eq.length>0)
							$trigger=$eq;
					}

					// 単位変更 px or %
					if(params.triggerMarginUnit=='%')
						margin = wh*triggerMargin*0.01;
					else
						margin = triggerMargin;
					
					// アニメーション用に設定している初期位置分を削除
					var transformY = transform_value($th.css('transform'))['transform-y'];
					
					// 基準位置計算
					var showPos = $trigger.offsetZoomTop() + margin - transformY;
					

					if($th.hasClass('visible')){
						if(params.mode=='once'){
							//
						}else if(params.mode=='repeat'){
							if(wt+wh < showPos){
								$th.removeClass(params.showClass);
							}
						}
					}else{
						if(wt+wh > showPos) {
							var delay = ($th.data('delay')!=null)?$th.data('delay'):0;
							setTimeout(function($eq) {
								$eq.addClass(params.showClass);
							}.bind(null, $th), delay);
						}
					}
				});
			}
		},
	});

	function transform_value(e){
		var values = e.split('(')[1];
		var matrix = {
			'scale-x':1,
			'rotate-p':0,
			'rotate-m':0,
			'scale-y':1,
			'transform-x':0,
			'transform-y':0,
		};
	
		if(values!==undefined){
			values = values.split(')')[0];
			values = values.split(', ');
			matrix = {
				'scale-x':values[0],
				'rotate-p':values[1],
				'rotate-m':values[2],
				'scale-y':values[3],
				'transform-x':values[4],
				'transform-y':values[5]
			};
		}
		return matrix;
	}
});


// ----------------------
// ContentsScroll v0.9.0
// ----------------------
//
// コンテンツ後追いスクロール制御（PCをスマホのような感じで動かす）
//
//
//
jQuery(function($){

	$.fn.extend({
		'ContentsScroll':function(params){
			var DEFAULTS={
				speed:'.5s cubic-bezier(.09,.34,.25,1) 0s'
			};
			var op=$.extend(DEFAULTS,params);
			var $t=$(this);
			var $index=$('<div id="scroll-index" />');
			var $index_bar=$('<p class="scroll-index--bar"><span></span></p>');
			var $index_name=$('<p class="scroll-index--name" />');
			var $scroll=$('[data-scroll]');
			var $logo=$('.site--logo');
			var $gnav=$('#gnav');
			var $gnav_btn=$gnav.find('.gnav--btn')
			var $cart=$('#s_cart');
			var $footer=$('#footer');
			var $top_visual=$('#top_visual');
			var hash=location.hash;
			var h={
				t:function(){ var v=$t.innerHeight(); return v; },
				bar:function(){ var v=$index_bar.innerHeight(); return v; }
			};
			var index={
				scroll:0
			};
			var bool={
				scroll:[]
			};
			var sizeSet=function(){
				if(!is_ie){
					$('body').height(h.t());
				};
			};
			var set=function(){
				var st=GN.st();
				var wh=GN.wh();
				var stwh=(st+(wh/1.4));
				var bar=((st*h.bar())/(h.t()-wh));

				if(!is_ie){
					$t.css({ transform:'translateY(-'+st+'px)' });
				};

				if($footer.length){
					if((st+wh)>(h.t()-$footer.innerHeight())){
						$index.css({ transform:'translateY(-'+$footer.innerHeight()+'px)' });
					}else{
						$index.css({ transform:'none' });
					};
				};

				if($top_visual.length){
					if(st>wh){
						$logo.stop(false).fadeIn(300);
					}else{
						$logo.stop(false).fadeOut(300);
					};
					if(st>(wh/1.4)){
						$cart.addClass('on');
					}else{
						$cart.removeClass('on');
					};
					$top_visual.css({ transform:'translateY(-'+(st/4)+'px)' });
					if(st>(wh/2)){
						$gnav_btn.removeClass('white');
					}else{
						$gnav_btn.addClass('white');
					};
					if(st>($index.innerHeight()+60)){
						$index.stop().fadeIn(300);
					}else{
						$index.fadeOut(300);
					};
				};

				$index_bar.find('span').height(bar);
				$scroll.each(function(i){
					var $this=$(this);
					var this_top=$this.offset().top;
					var this_h=$this.innerHeight();
					var name=$this.data('scroll');
					if(stwh>this_top&&stwh<(this_top+this_h)-10){
						index.scroll=i;
						if(!bool.scroll[i]){
							bool.scroll[i]=true;
							$index_name.removeClass('changed');
							$index_name.html(name).addClass('changed');
						};
					}else{
						bool.scroll[i]=false;
						if(index.scroll==i){
							$index_name.removeClass('changed');
						};
					};
				});
			};

			if(!is_ie){
				$t.css({ position:'fixed',transition:op.speed });
			};
			$index_bar.find('span').css({ transition:op.speed });
			$index.append($index_bar,$index_name).css({ transition:op.speed });
			if($top_visual.length) $top_visual.css({ transition:op.speed });
			$('body').append($index);

			$scroll.each(function(i){
				bool.scroll[i]=false;
			});

			$(document).on('DOMContentLoaded',function(){
				sizeSet();
			});

			$(window).on({'load':function(){
					sizeSet();
					set();
					if($(hash).length){
						var top=$(hash).offset().top;
						if(!is_ie){
							$t.css({ transform:'translateY(-'+top+'px)' });
						}else{
							window.scrollTo(0,top);
						};
					};
				},
				'resize':function(){
					sizeSet();
				},
				'scroll':function(){
					sizeSet();
					set();
				}
			});
		}
	});
});

