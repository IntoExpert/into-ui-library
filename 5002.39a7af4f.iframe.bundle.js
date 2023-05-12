/*! For license information please see 5002.39a7af4f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_intoexpert_into_ui_library=self.webpackChunk_intoexpert_into_ui_library||[]).push([[5002],{"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:function(){return _asyncToGenerator}})},"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _regeneratorRuntime}});var _typeof_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==(0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__.Z)(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}},"./node_modules/react-webcam/dist/react-webcam.js":function(module,__unused_webpack_exports,__webpack_require__){!function webpackUniversalModuleDefinition(root,factory){module.exports=factory(__webpack_require__("./node_modules/react/index.js"))}(0,(function(__WEBPACK_EXTERNAL_MODULE_react__){return function(modules){var installedModules={};function __nested_webpack_require_620__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_620__),module.l=!0,module.exports}return __nested_webpack_require_620__.m=modules,__nested_webpack_require_620__.c=installedModules,__nested_webpack_require_620__.d=function(exports,name,getter){__nested_webpack_require_620__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__nested_webpack_require_620__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__nested_webpack_require_620__.t=function(value,mode){if(1&mode&&(value=__nested_webpack_require_620__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__nested_webpack_require_620__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__nested_webpack_require_620__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__nested_webpack_require_620__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __nested_webpack_require_620__.d(getter,"a",getter),getter},__nested_webpack_require_620__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__nested_webpack_require_620__.p="",__nested_webpack_require_620__(__nested_webpack_require_620__.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(module,__nested_webpack_exports__,__nested_webpack_require_4284__){"use strict";__nested_webpack_require_4284__.r(__nested_webpack_exports__);var extendStatics,react__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_4284__("react"),__extends=(extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])},extendStatics(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function hasGetUserMedia(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)}!function polyfillGetUserMedia(){"undefined"!=typeof window&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(constraints){var getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return getUserMedia?new Promise((function(resolve,reject){getUserMedia.call(navigator,constraints,resolve,reject)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))}();var Webcam=function(_super){function Webcam(props){var _this=_super.call(this,props)||this;return _this.canvas=null,_this.ctx=null,_this.requestUserMediaId=0,_this.unmounted=!1,_this.state={hasUserMedia:!1},_this}return __extends(Webcam,_super),Webcam.prototype.componentDidMount=function(){var state=this.state,props=this.props;this.unmounted=!1,hasGetUserMedia()?(state.hasUserMedia||this.requestUserMedia(),props.children&&"function"!=typeof props.children&&console.warn("children must be a function")):props.onUserMediaError("getUserMedia not supported")},Webcam.prototype.componentDidUpdate=function(nextProps){var props=this.props;if(hasGetUserMedia()){var audioConstraintsChanged=JSON.stringify(nextProps.audioConstraints)!==JSON.stringify(props.audioConstraints),videoConstraintsChanged=JSON.stringify(nextProps.videoConstraints)!==JSON.stringify(props.videoConstraints),minScreenshotWidthChanged=nextProps.minScreenshotWidth!==props.minScreenshotWidth,minScreenshotHeightChanged=nextProps.minScreenshotHeight!==props.minScreenshotHeight;(videoConstraintsChanged||minScreenshotWidthChanged||minScreenshotHeightChanged)&&(this.canvas=null,this.ctx=null),(audioConstraintsChanged||videoConstraintsChanged)&&(this.stopAndCleanup(),this.requestUserMedia())}else props.onUserMediaError("getUserMedia not supported")},Webcam.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},Webcam.stopMediaStream=function(stream){stream&&(stream.getVideoTracks&&stream.getAudioTracks?(stream.getVideoTracks().map((function(track){stream.removeTrack(track),track.stop()})),stream.getAudioTracks().map((function(track){stream.removeTrack(track),track.stop()}))):stream.stop())},Webcam.prototype.stopAndCleanup=function(){var state=this.state;state.hasUserMedia&&(Webcam.stopMediaStream(this.stream),state.src&&window.URL.revokeObjectURL(state.src))},Webcam.prototype.getScreenshot=function(screenshotDimensions){var state=this.state,props=this.props;if(!state.hasUserMedia)return null;var canvas=this.getCanvas(screenshotDimensions);return canvas&&canvas.toDataURL(props.screenshotFormat,props.screenshotQuality)},Webcam.prototype.getCanvas=function(screenshotDimensions){var state=this.state,props=this.props;if(!this.video)return null;if(!state.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var canvasWidth=this.video.videoWidth,canvasHeight=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var aspectRatio=canvasWidth/canvasHeight;canvasHeight=(canvasWidth=props.minScreenshotWidth||this.video.clientWidth)/aspectRatio,props.minScreenshotHeight&&canvasHeight<props.minScreenshotHeight&&(canvasWidth=(canvasHeight=props.minScreenshotHeight)*aspectRatio)}this.canvas=document.createElement("canvas"),this.canvas.width=(null==screenshotDimensions?void 0:screenshotDimensions.width)||canvasWidth,this.canvas.height=(null==screenshotDimensions?void 0:screenshotDimensions.height)||canvasHeight,this.ctx=this.canvas.getContext("2d")}var ctx=this.ctx,canvas=this.canvas;return ctx&&canvas&&(props.mirrored&&(ctx.translate(canvas.width,0),ctx.scale(-1,1)),ctx.imageSmoothingEnabled=props.imageSmoothing,ctx.drawImage(this.video,0,0,(null==screenshotDimensions?void 0:screenshotDimensions.width)||canvas.width,(null==screenshotDimensions?void 0:screenshotDimensions.height)||canvas.height),props.mirrored&&(ctx.scale(-1,1),ctx.translate(-canvas.width,0))),canvas},Webcam.prototype.requestUserMedia=function(){var _this=this,props=this.props,sourceSelected=function(audioConstraints,videoConstraints){var constraints={video:void 0===videoConstraints||videoConstraints};props.audio&&(constraints.audio=void 0===audioConstraints||audioConstraints),_this.requestUserMediaId++;var myRequestUserMediaId=_this.requestUserMediaId;navigator.mediaDevices.getUserMedia(constraints).then((function(stream){_this.unmounted||myRequestUserMediaId!==_this.requestUserMediaId?Webcam.stopMediaStream(stream):_this.handleUserMedia(null,stream)})).catch((function(e){_this.handleUserMedia(e)}))};if("mediaDevices"in navigator)sourceSelected(props.audioConstraints,props.videoConstraints);else{var optionalSource_1=function(id){return{optional:[{sourceId:id}]}},constraintToSourceId_1=function(constraint){var deviceId=constraint.deviceId;return"string"==typeof deviceId?deviceId:Array.isArray(deviceId)&&deviceId.length>0?deviceId[0]:"object"==typeof deviceId&&deviceId.ideal?deviceId.ideal:null};MediaStreamTrack.getSources((function(sources){var audioSource=null,videoSource=null;sources.forEach((function(source){"audio"===source.kind?audioSource=source.id:"video"===source.kind&&(videoSource=source.id)}));var audioSourceId=constraintToSourceId_1(props.audioConstraints);audioSourceId&&(audioSource=audioSourceId);var videoSourceId=constraintToSourceId_1(props.videoConstraints);videoSourceId&&(videoSource=videoSourceId),sourceSelected(optionalSource_1(audioSource),optionalSource_1(videoSource))}))}},Webcam.prototype.handleUserMedia=function(err,stream){var props=this.props;if(err||!stream)return this.setState({hasUserMedia:!1}),void props.onUserMediaError(err);this.stream=stream;try{this.video&&(this.video.srcObject=stream),this.setState({hasUserMedia:!0})}catch(error){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(stream)})}props.onUserMedia(stream)},Webcam.prototype.render=function(){var _this=this,state=this.state,props=this.props,audio=props.audio,mirrored=(props.forceScreenshotSourceSize,props.onUserMedia,props.onUserMediaError,props.screenshotFormat,props.screenshotQuality,props.minScreenshotWidth,props.minScreenshotHeight,props.audioConstraints,props.videoConstraints,props.imageSmoothing,props.mirrored),_b=props.style,style=void 0===_b?{}:_b,children=props.children,rest=__rest(props,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),videoStyle=mirrored?__assign(__assign({},style),{transform:(style.transform||"")+" scaleX(-1)"}):style,childrenProps={getScreenshot:this.getScreenshot.bind(this)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("video",__assign({autoPlay:!0,src:state.src,muted:!audio,playsInline:!0,ref:function(ref){_this.video=ref},style:videoStyle},rest)),children&&children(childrenProps))},Webcam.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},Webcam}(react__WEBPACK_IMPORTED_MODULE_0__.Component);__nested_webpack_exports__.default=Webcam},react:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_react__}}).default}))}}]);