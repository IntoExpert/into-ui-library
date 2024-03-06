/*! For license information please see 867.1c6c65aa.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_intoexpert_into_ui_library=self.webpackChunk_intoexpert_into_ui_library||[]).push([[867],{"./node_modules/react-fast-compare/index.js":module=>{var hasElementType="undefined"!=typeof Element,hasMap="function"==typeof Map,hasSet="function"==typeof Set,hasArrayBuffer="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys,it;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(hasMap&&a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;for(it=a.entries();!(i=it.next()).done;)if(!equal(i.value[1],b.get(i.value[0])))return!1;return!0}if(hasSet&&a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;return!0}if(hasArrayBuffer&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf&&"function"==typeof a.valueOf&&"function"==typeof b.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString&&"function"==typeof a.toString&&"function"==typeof b.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;if(hasElementType&&a instanceof Element)return!1;for(i=length;0!=i--;)if(("_owner"!==keys[i]&&"__v"!==keys[i]&&"__o"!==keys[i]||!a.$$typeof)&&!equal(a[keys[i]],b[keys[i]]))return!1;return!0}return a!=a&&b!=b}module.exports=function isEqual(a,b){try{return equal(a,b)}catch(error){if((error.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw error}}},"./node_modules/react-webcam/dist/react-webcam.js":function(module,__unused_webpack_exports,__webpack_require__){!function webpackUniversalModuleDefinition(root,factory){module.exports=factory(__webpack_require__("./node_modules/react/index.js"))}(0,(function(__WEBPACK_EXTERNAL_MODULE_react__){return function(modules){var installedModules={};function __nested_webpack_require_620__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_620__),module.l=!0,module.exports}return __nested_webpack_require_620__.m=modules,__nested_webpack_require_620__.c=installedModules,__nested_webpack_require_620__.d=function(exports,name,getter){__nested_webpack_require_620__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__nested_webpack_require_620__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__nested_webpack_require_620__.t=function(value,mode){if(1&mode&&(value=__nested_webpack_require_620__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__nested_webpack_require_620__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value}),2&mode&&"string"!=typeof value)for(var key in value)__nested_webpack_require_620__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__nested_webpack_require_620__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __nested_webpack_require_620__.d(getter,"a",getter),getter},__nested_webpack_require_620__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__nested_webpack_require_620__.p="",__nested_webpack_require_620__(__nested_webpack_require_620__.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(module,__nested_webpack_exports__,__nested_webpack_require_4284__){"use strict";__nested_webpack_require_4284__.r(__nested_webpack_exports__);var extendStatics,react__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_4284__("react"),__extends=(extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])},extendStatics(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function hasGetUserMedia(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)}!function polyfillGetUserMedia(){"undefined"!=typeof window&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(constraints){var getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return getUserMedia?new Promise((function(resolve,reject){getUserMedia.call(navigator,constraints,resolve,reject)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))}();var Webcam=function(_super){function Webcam(props){var _this=_super.call(this,props)||this;return _this.canvas=null,_this.ctx=null,_this.requestUserMediaId=0,_this.unmounted=!1,_this.state={hasUserMedia:!1},_this}return __extends(Webcam,_super),Webcam.prototype.componentDidMount=function(){var state=this.state,props=this.props;this.unmounted=!1,hasGetUserMedia()?(state.hasUserMedia||this.requestUserMedia(),props.children&&"function"!=typeof props.children&&console.warn("children must be a function")):props.onUserMediaError("getUserMedia not supported")},Webcam.prototype.componentDidUpdate=function(nextProps){var props=this.props;if(hasGetUserMedia()){var audioConstraintsChanged=JSON.stringify(nextProps.audioConstraints)!==JSON.stringify(props.audioConstraints),videoConstraintsChanged=JSON.stringify(nextProps.videoConstraints)!==JSON.stringify(props.videoConstraints),minScreenshotWidthChanged=nextProps.minScreenshotWidth!==props.minScreenshotWidth,minScreenshotHeightChanged=nextProps.minScreenshotHeight!==props.minScreenshotHeight;(videoConstraintsChanged||minScreenshotWidthChanged||minScreenshotHeightChanged)&&(this.canvas=null,this.ctx=null),(audioConstraintsChanged||videoConstraintsChanged)&&(this.stopAndCleanup(),this.requestUserMedia())}else props.onUserMediaError("getUserMedia not supported")},Webcam.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},Webcam.stopMediaStream=function(stream){stream&&(stream.getVideoTracks&&stream.getAudioTracks?(stream.getVideoTracks().map((function(track){stream.removeTrack(track),track.stop()})),stream.getAudioTracks().map((function(track){stream.removeTrack(track),track.stop()}))):stream.stop())},Webcam.prototype.stopAndCleanup=function(){var state=this.state;state.hasUserMedia&&(Webcam.stopMediaStream(this.stream),state.src&&window.URL.revokeObjectURL(state.src))},Webcam.prototype.getScreenshot=function(screenshotDimensions){var state=this.state,props=this.props;if(!state.hasUserMedia)return null;var canvas=this.getCanvas(screenshotDimensions);return canvas&&canvas.toDataURL(props.screenshotFormat,props.screenshotQuality)},Webcam.prototype.getCanvas=function(screenshotDimensions){var state=this.state,props=this.props;if(!this.video)return null;if(!state.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var canvasWidth=this.video.videoWidth,canvasHeight=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var aspectRatio=canvasWidth/canvasHeight;canvasHeight=(canvasWidth=props.minScreenshotWidth||this.video.clientWidth)/aspectRatio,props.minScreenshotHeight&&canvasHeight<props.minScreenshotHeight&&(canvasWidth=(canvasHeight=props.minScreenshotHeight)*aspectRatio)}this.canvas=document.createElement("canvas"),this.canvas.width=(null==screenshotDimensions?void 0:screenshotDimensions.width)||canvasWidth,this.canvas.height=(null==screenshotDimensions?void 0:screenshotDimensions.height)||canvasHeight,this.ctx=this.canvas.getContext("2d")}var ctx=this.ctx,canvas=this.canvas;return ctx&&canvas&&(canvas.width=(null==screenshotDimensions?void 0:screenshotDimensions.width)||canvas.width,canvas.height=(null==screenshotDimensions?void 0:screenshotDimensions.height)||canvas.height,props.mirrored&&(ctx.translate(canvas.width,0),ctx.scale(-1,1)),ctx.imageSmoothingEnabled=props.imageSmoothing,ctx.drawImage(this.video,0,0,(null==screenshotDimensions?void 0:screenshotDimensions.width)||canvas.width,(null==screenshotDimensions?void 0:screenshotDimensions.height)||canvas.height),props.mirrored&&(ctx.scale(-1,1),ctx.translate(-canvas.width,0))),canvas},Webcam.prototype.requestUserMedia=function(){var _this=this,props=this.props,sourceSelected=function(audioConstraints,videoConstraints){var constraints={video:void 0===videoConstraints||videoConstraints};props.audio&&(constraints.audio=void 0===audioConstraints||audioConstraints),_this.requestUserMediaId++;var myRequestUserMediaId=_this.requestUserMediaId;navigator.mediaDevices.getUserMedia(constraints).then((function(stream){_this.unmounted||myRequestUserMediaId!==_this.requestUserMediaId?Webcam.stopMediaStream(stream):_this.handleUserMedia(null,stream)})).catch((function(e){_this.handleUserMedia(e)}))};if("mediaDevices"in navigator)sourceSelected(props.audioConstraints,props.videoConstraints);else{var optionalSource_1=function(id){return{optional:[{sourceId:id}]}},constraintToSourceId_1=function(constraint){var deviceId=constraint.deviceId;return"string"==typeof deviceId?deviceId:Array.isArray(deviceId)&&deviceId.length>0?deviceId[0]:"object"==typeof deviceId&&deviceId.ideal?deviceId.ideal:null};MediaStreamTrack.getSources((function(sources){var audioSource=null,videoSource=null;sources.forEach((function(source){"audio"===source.kind?audioSource=source.id:"video"===source.kind&&(videoSource=source.id)}));var audioSourceId=constraintToSourceId_1(props.audioConstraints);audioSourceId&&(audioSource=audioSourceId);var videoSourceId=constraintToSourceId_1(props.videoConstraints);videoSourceId&&(videoSource=videoSourceId),sourceSelected(optionalSource_1(audioSource),optionalSource_1(videoSource))}))}},Webcam.prototype.handleUserMedia=function(err,stream){var props=this.props;if(err||!stream)return this.setState({hasUserMedia:!1}),void props.onUserMediaError(err);this.stream=stream;try{this.video&&(this.video.srcObject=stream),this.setState({hasUserMedia:!0})}catch(error){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(stream)})}props.onUserMedia(stream)},Webcam.prototype.render=function(){var _this=this,state=this.state,props=this.props,audio=props.audio,disablePictureInPicture=(props.forceScreenshotSourceSize,props.disablePictureInPicture),mirrored=(props.onUserMedia,props.onUserMediaError,props.screenshotFormat,props.screenshotQuality,props.minScreenshotWidth,props.minScreenshotHeight,props.audioConstraints,props.videoConstraints,props.imageSmoothing,props.mirrored),_b=props.style,style=void 0===_b?{}:_b,children=props.children,rest=__rest(props,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),videoStyle=mirrored?__assign(__assign({},style),{transform:(style.transform||"")+" scaleX(-1)"}):style,childrenProps={getScreenshot:this.getScreenshot.bind(this)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("video",__assign({autoPlay:!0,disablePictureInPicture,src:state.src,muted:!audio,playsInline:!0,ref:function(ref){_this.video=ref},style:videoStyle},rest)),children&&children(childrenProps))},Webcam.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},Webcam}(react__WEBPACK_IMPORTED_MODULE_0__.Component);__nested_webpack_exports__.default=Webcam},react:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_react__}}).default}))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);