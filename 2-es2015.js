(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{aCXV:function(t,e,i){"use strict";i.d(e,"b",(function(){return bt})),i.d(e,"d",(function(){return $})),i.d(e,"e",(function(){return K})),i.d(e,"c",(function(){return vt})),i.d(e,"a",(function(){return _t}));var s=i("fXoL"),n=i("ofXK");let r;try{r="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(Dt){r=!1}let o,a=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(n.n)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!r)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(s.B,8))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t.ngInjectableDef=Object(s.Hb)({factory:function(){return new t(Object(s.Sb)(s.B,8))},token:t,providedIn:"root"}),t})();function h(t){return function(){if(null==o&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>o=!0}))}finally{o=o||!1}return o}()?t:!!t.capture}function d(t){return null!=t&&"false"!==`${t}`}function l(t){return t instanceof s.l?t.nativeElement:t}var c=i("XNiG"),p=i("quSY"),g=i("HDdC"),_=i("VRyK"),u=i("LRne"),m=i("xgIS");i("3N8a"),i("IjjT"),i("7o/Q");var f=i("D0XW"),b=i("l7GE"),v=i("ZUHj");class D{constructor(t){this.durationSelector=t}call(t,e){return e.subscribe(new w(t,this.durationSelector))}}class w extends b.a{constructor(t,e){super(t),this.durationSelector=e,this.hasValue=!1}_next(t){if(this.value=t,this.hasValue=!0,!this.throttled){let i;try{const{durationSelector:e}=this;i=e(t)}catch(e){return this.destination.error(e)}const s=Object(v.a)(this,i);!s||s.closed?this.clearThrottle():this.add(this.throttled=s)}}clearThrottle(){const{value:t,hasValue:e,throttled:i}=this;i&&(this.remove(i),this.throttled=null,i.unsubscribe()),e&&(this.value=null,this.hasValue=!1,this.destination.next(t))}notifyNext(t,e,i,s){this.clearThrottle()}notifyComplete(){this.clearThrottle()}}var y=i("DH7j");function x(t){return!Object(y.a)(t)&&t-parseFloat(t)+1>=0}var E=i("z+Ro");function P(t){const{index:e,period:i,subscriber:s}=t;if(s.next(e),!s.closed){if(-1===i)return s.complete();t.index=e+1,this.schedule(t,i)}}function R(t){return e=>e.lift(new I(t))}i("pLZG");class I{constructor(t){this.notifier=t}call(t,e){const i=new S(t),s=Object(v.a)(i,this.notifier);return s&&!i.seenValue?(i.add(s),e.subscribe(i)):i}}class S extends b.a{constructor(t){super(t),this.seenValue=!1}notifyNext(t,e,i,s,n){this.seenValue=!0,this.complete()}notifyComplete(){}}var C=i("JX91"),k=i("eIep");i("WMd4"),i("9ppp"),i("Ylt2");const O=new s.q("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(s.T)(n.c)}});let T=(()=>{class t{constructor(t){if(this.value="ltr",this.change=new s.n,t){const e=t.documentElement?t.documentElement.dir:null,i=(t.body?t.body.dir:null)||e;this.value="ltr"===i||"rtl"===i?i:"ltr"}}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(O,8))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t.ngInjectableDef=Object(s.Hb)({factory:function(){return new t(Object(s.Sb)(O,8))},token:t,providedIn:"root"}),t})(),L=(()=>{class t{constructor(t,e){this._platform=t,e.runOutsideAngular(()=>{this._change=t.isBrowser?Object(_.a)(Object(m.a)(window,"resize"),Object(m.a)(window,"orientationchange")):Object(u.a)(),this._invalidateCache=this.change().subscribe(()=>this._updateViewportSize())})}ngOnDestroy(){this._invalidateCache.unsubscribe()}getViewportSize(){this._viewportSize||this._updateViewportSize();const t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){const t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const t=document.documentElement,e=t.getBoundingClientRect();return{top:-e.top||document.body.scrollTop||window.scrollY||t.scrollTop||0,left:-e.left||document.body.scrollLeft||window.scrollX||t.scrollLeft||0}}change(t=20){return t>0?this._change.pipe(function(t,e=f.a){return i=()=>function(t=0,e,i){let s=-1;return x(e)?s=Number(e)<1?1:Number(e):Object(E.a)(e)&&(i=e),Object(E.a)(i)||(i=f.a),new g.a(e=>{const n=x(t)?t:+t-i.now();return i.schedule(P,n,{index:0,period:s,subscriber:e})})}(t,e),function(t){return t.lift(new D(i))};var i}(t)):this._change}_updateViewportSize(){this._viewportSize=this._platform.isBrowser?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0}}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(a),s.Sb(s.z))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t.ngInjectableDef=Object(s.Hb)({factory:function(){return new t(Object(s.Sb)(a),Object(s.Sb)(s.z))},token:t,providedIn:"root"}),t})();var A=i("lJxs"),j=i("IzEk"),z=i("vkgz");function B(t,e){for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function N(t,e){const i=e?"":"none";B(t.style,{touchAction:e?"":"none",webkitUserDrag:e?"":"none",webkitTapHighlightColor:e?"":"transparent",userSelect:i,msUserSelect:i,webkitUserSelect:i,MozUserSelect:i})}function M(t){const e=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*e}function H(t,e){return t.getPropertyValue(e).split(",").map(t=>t.trim())}const F=h({passive:!0}),V=h({passive:!1});class G{constructor(t,e,i,s,n,r){this._config=e,this._document=i,this._ngZone=s,this._viewportRuler=n,this._dragDropRegistry=r,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._moveEvents=new c.a,this._pointerMoveSubscription=p.a.EMPTY,this._pointerUpSubscription=p.a.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new c.a,this.started=new c.a,this.released=new c.a,this.ended=new c.a,this.entered=new c.a,this.exited=new c.a,this.dropped=new c.a,this.moved=this._moveEvents.asObservable(),this._pointerDown=t=>{if(this.beforeStarted.next(),this._handles.length){const e=this._handles.find(e=>{const i=t.target;return!!i&&(i===e||e.contains(i))});!e||this._disabledHandles.has(e)||this.disabled||this._initializeDragSequence(e,t)}else this.disabled||this._initializeDragSequence(this._rootElement,t)},this._pointerMove=t=>{if(!this._hasStartedDragging){const e=this._getPointerPositionOnPage(t);return void(Math.abs(e.x-this._pickupPositionOnPage.x)+Math.abs(e.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold&&Date.now()>=this._dragStartTime+(this.dragStartDelay||0)&&(this._dropContainer&&this._dropContainer.isDragging()||(this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(t)))))}this._boundaryElement&&(this._previewRect&&(this._previewRect.width||this._previewRect.height)||(this._previewRect=(this._preview||this._rootElement).getBoundingClientRect()));const e=this._getConstrainedPointerPosition(t);if(this._hasMoved=!0,t.preventDefault(),this._updatePointerDirectionDelta(e),this._dropContainer)this._updateActiveDropContainer(e);else{const t=this._activeTransform;t.x=e.x-this._pickupPositionOnPage.x+this._passiveTransform.x,t.y=e.y-this._pickupPositionOnPage.y+this._passiveTransform.y,this._applyRootElementTransform(t.x,t.y),"undefined"!=typeof SVGElement&&this._rootElement instanceof SVGElement&&this._rootElement.setAttribute("transform",`translate(${t.x} ${t.y})`)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:e,event:t,distance:this._getDragDistance(e),delta:this._pointerDirectionDelta})})},this._pointerUp=t=>{if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging)){if(this.released.next({source:this}),!this._dropContainer)return this._passiveTransform.x=this._activeTransform.x,this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(this._getPointerPositionOnPage(t))})}),void this._dragDropRegistry.stopDragging(this);this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._dragDropRegistry.stopDragging(this)})}},this.withRootElement(t),r.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(t){const e=d(t);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions())}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}withHandles(t){return this._handles=t.map(t=>l(t)),this._handles.forEach(t=>N(t,!1)),this._toggleNativeDragInteractions(),this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){const e=l(t);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),e.addEventListener("mousedown",this._pointerDown,V),e.addEventListener("touchstart",this._pointerDown,F),this._initialTransform=void 0,this._rootElement=e),this}withBoundaryElement(t){return this._boundaryElement=t?l(t):null,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&q(this._rootElement),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._boundaryElement=this._rootElement=this._placeholderTemplate=this._previewTemplate=this._nextSibling=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(t){this._handles.indexOf(t)>-1&&this._disabledHandles.add(t)}enableHandle(t){this._disabledHandles.delete(t)}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}getFreeDragPosition(){return{x:this._passiveTransform.x,y:this._passiveTransform.y}}setFreeDragPosition(t){return this._activeTransform={x:0,y:0},this._passiveTransform.x=t.x,this._passiveTransform.y=t.y,this._dropContainer||this._applyRootElementTransform(t.x,t.y),this}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe()}_destroyPreview(){this._preview&&q(this._preview),this._previewRef&&this._previewRef.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder&&q(this._placeholder),this._placeholderRef&&this._placeholderRef.destroy(),this._placeholder=this._placeholderRef=null}_startDragSequence(t){if(this.started.next({source:this}),W(t)&&(this._lastTouchEventTime=Date.now()),this._dropContainer){const t=this._rootElement;this._nextSibling=t.nextSibling;const i=this._preview=this._createPreviewElement(),s=this._placeholder=this._createPlaceholderElement();t.style.display="none",this._document.body.appendChild(t.parentNode.replaceChild(s,t)),(e=this._document,e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement||e.body).appendChild(i),this._dropContainer.start()}var e}_initializeDragSequence(t,e){e.stopPropagation();const i=this.isDragging(),s=W(e),n=!s&&0!==e.button,r=this._rootElement,o=!s&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now();if(e.target&&e.target.draggable&&"mousedown"===e.type&&e.preventDefault(),i||n||o)return;this._handles.length&&(this._rootElementTapHighlight=r.style.webkitTapHighlightColor,r.style.webkitTapHighlightColor="transparent"),this._toggleNativeDragInteractions(),this._hasStartedDragging=this._hasMoved=!1,this._initialContainer=this._dropContainer,this._removeSubscriptions(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollPosition=this._viewportRuler.getViewportScrollPosition(),this._boundaryElement&&(this._boundaryRect=this._boundaryElement.getBoundingClientRect()),this._pickupPositionInElement=this._previewTemplate&&this._previewTemplate.template?{x:0,y:0}:this._getPointerPositionInElement(t,e);const a=this._pickupPositionOnPage=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:a.x,y:a.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){this._rootElement.style.display="",this._nextSibling?this._nextSibling.parentNode.insertBefore(this._rootElement,this._nextSibling):l(this._initialContainer.element).appendChild(this._rootElement),this._destroyPreview(),this._destroyPlaceholder(),this._boundaryRect=this._previewRect=void 0,this._ngZone.run(()=>{const e=this._dropContainer,i=e.getItemIndex(this),s=this._getPointerPositionOnPage(t),n=this._getDragDistance(this._getPointerPositionOnPage(t)),r=e._isOverContainer(s.x,s.y);this.ended.next({source:this,distance:n}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialContainer.getItemIndex(this),container:e,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:n}),e.drop(this,i,this._initialContainer,r,n),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e}){let i=this._initialContainer._getSiblingContainerFromPosition(this,t,e);!i&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(i=this._initialContainer),i&&i!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=i,this._dropContainer.enter(this,t,e),this.entered.next({item:this,container:i,currentIndex:i.getItemIndex(this)})}),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this._preview.style.transform=Z(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y)}_createPreviewElement(){const t=this._previewTemplate,e=t?t.template:null;let i;if(e){const s=t.viewContainer.createEmbeddedView(e,t.context);i=s.rootNodes[0],this._previewRef=s,i.style.transform=Z(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else{const t=this._rootElement,e=t.getBoundingClientRect();i=U(t),i.style.width=`${e.width}px`,i.style.height=`${e.height}px`,i.style.transform=Z(e.left,e.top)}return B(i.style,{pointerEvents:"none",position:"fixed",top:"0",left:"0",zIndex:"1000"}),N(i,!1),i.classList.add("cdk-drag-preview"),i.setAttribute("dir",this._direction),i}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const t=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._preview.style.transform=Z(t.left,t.top);const e=function(t){const e=getComputedStyle(t),i=H(e,"transition-property"),s=i.find(t=>"transform"===t||"all"===t);if(!s)return 0;const n=i.indexOf(s),r=H(e,"transition-duration"),o=H(e,"transition-delay");return M(r[n])+M(o[n])}(this._preview);return 0===e?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{const i=e=>{(!e||e.target===this._preview&&"transform"===e.propertyName)&&(this._preview.removeEventListener("transitionend",i),t(),clearTimeout(s))},s=setTimeout(i,1.5*e);this._preview.addEventListener("transitionend",i)}))}_createPlaceholderElement(){const t=this._placeholderTemplate,e=t?t.template:null;let i;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),i=this._placeholderRef.rootNodes[0]):i=U(this._rootElement),i.classList.add("cdk-drag-placeholder"),i}_getPointerPositionInElement(t,e){const i=this._rootElement.getBoundingClientRect(),s=t===this._rootElement?null:t,n=s?s.getBoundingClientRect():i,r=W(e)?e.targetTouches[0]:e;return{x:n.left-i.left+(r.pageX-n.left-this._scrollPosition.left),y:n.top-i.top+(r.pageY-n.top-this._scrollPosition.top)}}_getPointerPositionOnPage(t){const e=W(t)?t.touches[0]||t.changedTouches[0]:t;return{x:e.pageX-this._scrollPosition.left,y:e.pageY-this._scrollPosition.top}}_getConstrainedPointerPosition(t){const e=this._getPointerPositionOnPage(t),i=this.constrainPosition?this.constrainPosition(e):e,s=this._dropContainer?this._dropContainer.lockAxis:null;if("x"===this.lockAxis||"x"===s?i.y=this._pickupPositionOnPage.y:"y"!==this.lockAxis&&"y"!==s||(i.x=this._pickupPositionOnPage.x),this._boundaryRect){const{x:t,y:e}=this._pickupPositionInElement,s=this._boundaryRect,n=this._previewRect,r=s.top+e,o=s.bottom-(n.height-e);i.x=X(i.x,s.left+t,s.right-(n.width-t)),i.y=X(i.y,r,o)}return i}_updatePointerDirectionDelta(t){const{x:e,y:i}=t,s=this._pointerDirectionDelta,n=this._pointerPositionAtLastDirectionChange,r=Math.abs(e-n.x),o=Math.abs(i-n.y);return r>this._config.pointerDirectionChangeThreshold&&(s.x=e>n.x?1:-1,n.x=e),o>this._config.pointerDirectionChangeThreshold&&(s.y=i>n.y?1:-1,n.y=i),s}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const t=this.disabled||this._handles.length>0;t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,N(this._rootElement,t))}_removeRootElementListeners(t){t.removeEventListener("mousedown",this._pointerDown,V),t.removeEventListener("touchstart",this._pointerDown,F)}_applyRootElementTransform(t,e){const i=Z(t,e);null==this._initialTransform&&(this._initialTransform=this._rootElement.style.transform||""),this._rootElement.style.transform=this._initialTransform?i+" "+this._initialTransform:i}_getDragDistance(t){const e=this._pickupPositionOnPage;return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}}}function Z(t,e){return`translate3d(${Math.round(t)}px, ${Math.round(e)}px, 0)`}function U(t){const e=t.cloneNode(!0),i=e.querySelectorAll("[id]"),s=t.querySelectorAll("canvas");e.removeAttribute("id");for(let n=0;n<i.length;n++)i[n].removeAttribute("id");if(s.length){const t=e.querySelectorAll("canvas");for(let e=0;e<s.length;e++){const i=t[e].getContext("2d");i&&i.drawImage(s[e],0,0)}}return e}function X(t,e,i){return Math.max(e,Math.min(i,t))}function q(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function W(t){return t.type.startsWith("touch")}function $(t,e,i){const s=Y(e,t.length-1),n=Y(i,t.length-1);if(s===n)return;const r=t[s],o=n<s?-1:1;for(let a=s;a!==n;a+=o)t[a]=t[a+o];t[n]=r}function K(t,e,i,s){const n=Y(i,t.length-1),r=Y(s,e.length);t.length&&e.splice(r,0,t.splice(n,1)[0])}function Y(t,e){return Math.max(0,Math.min(e,t))}let J=0;class Q{constructor(t,e,i){this._dragDropRegistry=e,this.id=`cdk-drop-list-ref-${J++}`,this.disabled=!1,this.sortingDisabled=!0,this.enterPredicate=()=>!0,this.beforeStarted=new c.a,this.entered=new c.a,this.exited=new c.a,this.dropped=new c.a,this.sorted=new c.a,this._isDragging=!1,this._itemPositions=[],this._previousSwap={drag:null,delta:0},this._siblings=[],this._orientation="vertical",this._activeSiblings=new Set,this._direction="ltr",e.registerDropContainer(this),this._document=i,this.element=t instanceof s.l?t.nativeElement:t}dispose(){this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this.beforeStarted.next(),this._isDragging=!0,this._cacheItems(),this._siblings.forEach(t=>t._startReceiving(this))}enter(t,e,i){this.start();let s=this.sortingDisabled?this._draggables.indexOf(t):-1;-1===s&&(s=this._getItemIndexFromPointerPosition(t,e,i));const n=this._activeDraggables,r=n.indexOf(t),o=t.getPlaceholderElement();let a=n[s];if(a===t&&(a=n[s+1]),r>-1&&n.splice(r,1),a&&!this._dragDropRegistry.isDragging(a)){const e=a.getRootElement();e.parentElement.insertBefore(o,e),n.splice(s,0,t)}else l(this.element).appendChild(o),n.push(t);o.style.transform="",this._cacheItemPositions(),this.entered.next({item:t,container:this,currentIndex:this.getItemIndex(t)})}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,i,s,n={x:0,y:0}){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:i.getItemIndex(t),container:this,previousContainer:i,isPointerOverContainer:s,distance:n})}withItems(t){return this._draggables=t,t.forEach(t=>t._withDropContainer(this)),this.isDragging()&&this._cacheItems(),this}withDirection(t){return this._direction=t,this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){return this._orientation=t,this}getItemIndex(t){return this._isDragging?et("horizontal"===this._orientation&&"rtl"===this._direction?this._itemPositions.slice().reverse():this._itemPositions,e=>e.drag===t):this._draggables.indexOf(t)}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,i,s){if(this.sortingDisabled||!this._isPointerNearDropContainer(e,i))return;const n=this._itemPositions,r=this._getItemIndexFromPointerPosition(t,e,i,s);if(-1===r&&n.length>0)return;const o="horizontal"===this._orientation,a=et(n,e=>e.drag===t),h=n[r],d=n[a].clientRect,l=h.clientRect,c=a>r?1:-1;this._previousSwap.drag=h.drag,this._previousSwap.delta=o?s.x:s.y;const p=this._getItemOffsetPx(d,l,c),g=this._getSiblingOffsetPx(a,n,c),_=n.slice();$(n,a,r),this.sorted.next({previousIndex:a,currentIndex:r,container:this,item:t}),n.forEach((e,i)=>{if(_[i]===e)return;const s=e.drag===t,n=s?p:g,r=s?t.getPlaceholderElement():e.drag.getRootElement();e.offset+=n,o?(r.style.transform=`translate3d(${Math.round(e.offset)}px, 0, 0)`,tt(e.clientRect,0,n)):(r.style.transform=`translate3d(0, ${Math.round(e.offset)}px, 0)`,tt(e.clientRect,n,0))})}_cacheOwnPosition(){this._clientRect=l(this.element).getBoundingClientRect()}_cacheItemPositions(){const t="horizontal"===this._orientation;this._itemPositions=this._activeDraggables.map(t=>{const e=(this._dragDropRegistry.isDragging(t)?t.getPlaceholderElement():t.getRootElement()).getBoundingClientRect();return{drag:t,offset:0,clientRect:{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}}).sort((e,i)=>t?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_reset(){this._isDragging=!1,this._activeDraggables.forEach(t=>t.getRootElement().style.transform=""),this._siblings.forEach(t=>t._stopReceiving(this)),this._activeDraggables=[],this._itemPositions=[],this._previousSwap.drag=null,this._previousSwap.delta=0}_getSiblingOffsetPx(t,e,i){const s="horizontal"===this._orientation,n=e[t].clientRect,r=e[t+-1*i];let o=n[s?"width":"height"]*i;if(r){const t=s?"left":"top",e=s?"right":"bottom";-1===i?o-=r.clientRect[t]-n[e]:o+=n[t]-r.clientRect[e]}return o}_isPointerNearDropContainer(t,e){const{top:i,right:s,bottom:n,left:r,width:o,height:a}=this._clientRect,h=.05*o,d=.05*a;return e>i-d&&e<n+d&&t>r-h&&t<s+h}_getItemOffsetPx(t,e,i){const s="horizontal"===this._orientation;let n=s?e.left-t.left:e.top-t.top;return-1===i&&(n+=s?e.width-t.width:e.height-t.height),n}_getItemIndexFromPointerPosition(t,e,i,s){const n="horizontal"===this._orientation;return et(this._itemPositions,({drag:r,clientRect:o},a,h)=>{if(r===t)return h.length<2;if(s){const t=n?s.x:s.y;if(r===this._previousSwap.drag&&t===this._previousSwap.delta)return!1}return n?e>=Math.floor(o.left)&&e<=Math.floor(o.right):i>=Math.floor(o.top)&&i<=Math.floor(o.bottom)})}_cacheItems(){this._activeDraggables=this._draggables.slice(),this._cacheItemPositions(),this._cacheOwnPosition()}_isOverContainer(t,e){return it(this._clientRect,t,e)}_getSiblingContainerFromPosition(t,e,i){return this._siblings.find(s=>s._canReceive(t,e,i))}_canReceive(t,e,i){if(!this.enterPredicate(t,this)||!it(this._clientRect,e,i))return!1;const s=this._document.elementFromPoint(e,i);if(!s)return!1;const n=l(this.element);return s===n||n.contains(s)}_startReceiving(t){const e=this._activeSiblings;e.has(t)||(e.add(t),this._cacheOwnPosition())}_stopReceiving(t){this._activeSiblings.delete(t)}}function tt(t,e,i){t.top+=e,t.bottom=t.top+t.height,t.left+=i,t.right=t.left+t.width}function et(t,e){for(let i=0;i<t.length;i++)if(e(t[i],i,t))return i;return-1}function it(t,e,i){const{top:s,bottom:n,left:r,right:o}=t;return i>=s&&i<=n&&e>=r&&e<=o}const st=h({passive:!1,capture:!0});let nt=(()=>{class t{constructor(t,e){this._ngZone=t,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=new Set,this._globalListeners=new Map,this.pointerMove=new c.a,this.pointerUp=new c.a,this._preventDefaultWhileDragging=t=>{this._activeDragInstances.size&&t.preventDefault()},this._document=e}registerDropContainer(t){if(!this._dropInstances.has(t)){if(this.getDropContainer(t.id))throw Error(`Drop instance with id "${t.id}" has already been registered.`);this._dropInstances.add(t)}}registerDragItem(t){this._dragInstances.add(t),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._preventDefaultWhileDragging,st)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._preventDefaultWhileDragging,st)}startDragging(t,e){if(!this._activeDragInstances.has(t)&&(this._activeDragInstances.add(t),1===this._activeDragInstances.size)){const t=e.type.startsWith("touch"),i=t?"touchend":"mouseup";this._globalListeners.set(t?"touchmove":"mousemove",{handler:t=>this.pointerMove.next(t),options:st}).set(i,{handler:t=>this.pointerUp.next(t),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:st}),t||this._globalListeners.set("wheel",{handler:this._preventDefaultWhileDragging,options:st}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((t,e)=>{this._document.addEventListener(e,t.handler,t.options)})})}}stopDragging(t){this._activeDragInstances.delete(t),0===this._activeDragInstances.size&&this._clearGlobalListeners()}isDragging(t){return this._activeDragInstances.has(t)}getDropContainer(t){return Array.from(this._dropInstances).find(e=>e.id===t)}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((t,e)=>{this._document.removeEventListener(e,t.handler,t.options)}),this._globalListeners.clear()}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(s.z),s.Sb(n.c))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t.ngInjectableDef=Object(s.Hb)({factory:function(){return new t(Object(s.Sb)(s.z),Object(s.Sb)(n.c))},token:t,providedIn:"root"}),t})();const rt={dragStartThreshold:5,pointerDirectionChangeThreshold:5};let ot=(()=>{class t{constructor(t,e,i,s){this._document=t,this._ngZone=e,this._viewportRuler=i,this._dragDropRegistry=s}createDrag(t,e=rt){return new G(t,e,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(t){return new Q(t,this._dragDropRegistry,this._document)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(n.c),s.Sb(s.z),s.Sb(L),s.Sb(nt))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t.ngInjectableDef=Object(s.Hb)({factory:function(){return new t(Object(s.Sb)(n.c),Object(s.Sb)(s.z),Object(s.Sb)(L),Object(s.Sb)(nt))},token:t,providedIn:"root"}),t})();const at=new s.q("CDK_DROP_LIST"),ht=at,dt=new s.q("CDK_DRAG_PARENT");let lt=(()=>{class t{constructor(t,e){this.element=t,this._stateChanges=new c.a,this._disabled=!1,this._parentDrag=e,N(t.nativeElement,!1)}get disabled(){return this._disabled}set disabled(t){this._disabled=d(t),this._stateChanges.next(this)}ngOnDestroy(){this._stateChanges.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.l),s.Lb(dt,8))},t.\u0275dir=s.Gb({type:t,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:["cdkDragHandleDisabled","disabled"]}}),t})(),ct=(()=>{class t{constructor(t){this.templateRef=t}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.K))},t.\u0275dir=s.Gb({type:t,selectors:[["ng-template","cdkDragPlaceholder",""]],inputs:{data:"data"}}),t})(),pt=(()=>{class t{constructor(t){this.templateRef=t}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.K))},t.\u0275dir=s.Gb({type:t,selectors:[["ng-template","cdkDragPreview",""]],inputs:{data:"data"}}),t})();const gt=new s.q("CDK_DRAG_CONFIG",{providedIn:"root",factory:function(){return{dragStartThreshold:5,pointerDirectionChangeThreshold:5}}});let _t=(()=>{class t{constructor(t,e,i,n,r,o,a,h,d){this.element=t,this.dropContainer=e,this._document=i,this._ngZone=n,this._viewContainerRef=r,this._dir=a,this._changeDetectorRef=d,this._destroyed=new c.a,this.dragStartDelay=0,this._disabled=!1,this.started=new s.n,this.released=new s.n,this.ended=new s.n,this.entered=new s.n,this.exited=new s.n,this.dropped=new s.n,this.moved=new g.a(t=>{const e=this._dragRef.moved.pipe(Object(A.a)(t=>({source:this,pointerPosition:t.pointerPosition,event:t.event,delta:t.delta,distance:t.distance}))).subscribe(t);return()=>{e.unsubscribe()}}),this._dragRef=h.createDrag(t,o),this._dragRef.data=this,this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}get boundaryElementSelector(){return"string"==typeof this.boundaryElement?this.boundaryElement:void 0}set boundaryElementSelector(t){this.boundaryElement=t}get disabled(){return this._disabled||this.dropContainer&&this.dropContainer.disabled}set disabled(t){this._disabled=d(t),this._dragRef.disabled=this._disabled}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}ngAfterViewInit(){this._ngZone.onStable.asObservable().pipe(Object(j.a)(1),R(this._destroyed)).subscribe(()=>{this._updateRootElement(),this._handles.changes.pipe(Object(C.a)(this._handles),Object(z.a)(t=>{const e=t.filter(t=>t._parentDrag===this).map(t=>t.element);this._dragRef.withHandles(e)}),Object(k.a)(t=>Object(_.a)(...t.map(t=>t._stateChanges))),R(this._destroyed)).subscribe(t=>{const e=this._dragRef,i=t.element.nativeElement;t.disabled?e.disableHandle(i):e.enableHandle(i)}),this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)})}ngOnChanges(t){const e=t.rootElementSelector,i=t.freeDragPosition;e&&!e.firstChange&&this._updateRootElement(),i&&!i.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()}_updateRootElement(){const t=this.element.nativeElement,e=this.rootElementSelector?ut(t,this.rootElementSelector):t;if(e&&e.nodeType!==this._document.ELEMENT_NODE)throw Error("cdkDrag must be attached to an element node. "+`Currently attached to "${e.nodeName}".`);this._dragRef.withRootElement(e||t)}_getBoundaryElement(){const t=this.boundaryElement;if(!t)return null;if("string"==typeof t)return ut(this.element.nativeElement,t);const e=l(t);if(Object(s.U)()&&!e.contains(this.element.nativeElement))throw Error("Draggable element is not inside of the node passed into cdkDragBoundary.");return e}_syncInputs(t){t.beforeStarted.subscribe(()=>{if(!t.isDragging()){const e=this._dir,i=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,viewContainer:this._viewContainerRef}:null;t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.dragStartDelay=function(t,e=0){return function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):e}(this.dragStartDelay),t.constrainPosition=this.constrainPosition,t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(i).withPreviewTemplate(s),e&&t.withDirection(e.value)}})}_handleEvents(t){t.started.subscribe(()=>{this.started.emit({source:this}),this._changeDetectorRef.markForCheck()}),t.released.subscribe(()=>{this.released.emit({source:this})}),t.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance}),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),t.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),t.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance})})}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.l),s.Lb(at,12),s.Lb(n.c),s.Lb(s.z),s.Lb(s.N),s.Lb(gt),s.Lb(T,8),s.Lb(ot),s.Lb(s.h))},t.\u0275dir=s.Gb({type:t,selectors:[["","cdkDrag",""]],contentQueries:function(t,e,i){var n;1&t&&(s.Eb(i,pt,!0),s.Eb(i,ct,!0),s.Eb(i,lt,!0)),2&t&&(s.hc(n=s.Xb())&&(e._previewTemplate=n.first),s.hc(n=s.Xb())&&(e._placeholderTemplate=n.first),s.hc(n=s.Xb())&&(e._handles=n))},hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,e){2&t&&s.Db("cdk-drag-disabled",e.disabled)("cdk-drag-dragging",e._dragRef.isDragging())},inputs:{dragStartDelay:["cdkDragStartDelay","dragStartDelay"],boundaryElement:["cdkDragBoundary","boundaryElement"],disabled:["cdkDragDisabled","disabled"],data:["cdkDragData","data"],lockAxis:["cdkDragLockAxis","lockAxis"],rootElementSelector:["cdkDragRootElement","rootElementSelector"],freeDragPosition:["cdkDragFreeDragPosition","freeDragPosition"],constrainPosition:["cdkDragConstrainPosition","constrainPosition"]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[s.zb([{provide:dt,useExisting:t}]),s.yb]}),t})();function ut(t,e){let i=t.parentElement;for(;i;){if(i.matches?i.matches(e):i.msMatchesSelector(e))return i;i=i.parentElement}return null}let mt=(()=>{class t{constructor(){this._items=new Set,this._disabled=!1}get disabled(){return this._disabled}set disabled(t){this._disabled=d(t)}ngOnDestroy(){this._items.clear()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Gb({type:t,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:["cdkDropListGroupDisabled","disabled"]},exportAs:["cdkDropListGroup"]}),t})(),ft=0,bt=(()=>{class t{constructor(e,i,n,r,o){this.element=e,this._changeDetectorRef=n,this._dir=r,this._group=o,this._destroyed=new c.a,this.connectedTo=[],this.orientation="vertical",this.id=`cdk-drop-list-${ft++}`,this._disabled=!1,this._sortingDisabled=!1,this.enterPredicate=()=>!0,this.dropped=new s.n,this.entered=new s.n,this.exited=new s.n,this.sorted=new s.n,this._dropListRef=i.createDropList(e),this._dropListRef.data=this,this._dropListRef.enterPredicate=(t,e)=>this.enterPredicate(t.data,e.data),this._syncInputs(this._dropListRef),this._handleEvents(this._dropListRef),t._dropLists.push(this),o&&o._items.add(this)}get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(t){this._disabled=d(t)}get sortingDisabled(){return this._sortingDisabled}set sortingDisabled(t){this._sortingDisabled=d(t)}ngAfterContentInit(){this._draggables.changes.pipe(Object(C.a)(this._draggables),R(this._destroyed)).subscribe(t=>{this._dropListRef.withItems(t.map(t=>t._dragRef))})}ngOnDestroy(){const e=t._dropLists.indexOf(this);e>-1&&t._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}start(){this._dropListRef.start()}drop(t,e,i,s){this._dropListRef.drop(t._dragRef,e,i._dropListRef,s)}enter(t,e,i){this._dropListRef.enter(t._dragRef,e,i)}exit(t){this._dropListRef.exit(t._dragRef)}getItemIndex(t){return this._dropListRef.getItemIndex(t._dragRef)}_sortItem(t,e,i,s){return this._dropListRef._sortItem(t._dragRef,e,i,s)}_getSiblingContainerFromPosition(t,e,i){const s=this._dropListRef._getSiblingContainerFromPosition(t._dragRef,e,i);return s?s.data:null}_isOverContainer(t,e){return this._dropListRef._isOverContainer(t,e)}_syncInputs(e){this._dir&&this._dir.change.pipe(Object(C.a)(this._dir.value),R(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{const i=(s=this.connectedTo,Array.isArray(s)?s:[s]).map(e=>"string"==typeof e?t._dropLists.find(t=>t.id===e):e);var s;this._group&&this._group._items.forEach(t=>{-1===i.indexOf(t)&&i.push(t)}),e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.connectedTo(i.filter(t=>t&&t!==this).map(t=>t._dropListRef)).withOrientation(this.orientation)})}_handleEvents(t){t.beforeStarted.subscribe(()=>{this._changeDetectorRef.markForCheck()}),t.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),t.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),t.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),t.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance}),this._changeDetectorRef.markForCheck()})}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.l),s.Lb(ot),s.Lb(s.h),s.Lb(T,8),s.Lb(mt,12))},t.\u0275dir=s.Gb({type:t,selectors:[["","cdkDropList",""],["cdk-drop-list"]],contentQueries:function(t,e,i){var n;1&t&&s.Eb(i,_t,!1),2&t&&s.hc(n=s.Xb())&&(e._draggables=n)},hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,e){2&t&&(s.Rb("id",e.id),s.Db("cdk-drop-list-disabled",e.disabled)("cdk-drop-list-dragging",e._dropListRef.isDragging())("cdk-drop-list-receiving",e._dropListRef.isReceiving()))},inputs:{connectedTo:["cdkDropListConnectedTo","connectedTo"],orientation:["cdkDropListOrientation","orientation"],id:"id",enterPredicate:["cdkDropListEnterPredicate","enterPredicate"],disabled:["cdkDropListDisabled","disabled"],sortingDisabled:["cdkDropListSortingDisabled","sortingDisabled"],data:["cdkDropListData","data"],lockAxis:["cdkDropListLockAxis","lockAxis"]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[s.zb([{provide:mt,useValue:void 0},{provide:ht,useExisting:t}])]}),t._dropLists=[],t})(),vt=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},providers:[ot]}),t})()}}]);