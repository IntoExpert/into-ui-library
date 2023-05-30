/*! For license information please see stories-image-image-stories.ef343406.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_intoexpert_into_ui_library=self.webpackChunk_intoexpert_into_ui_library||[]).push([[8713],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toPropertyKey}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/image/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return Avatar}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Avatar=function Avatar(props){var _props$label,_props$className,_ref,_props$alt,_props$label2,_ref2,_props$label$name,_props$label3,_props$className2,_props$loadingMethod,_props$className3,_props$firstName,_props$firstName$char,_props$lastName,_props$lastName$charA,_props$label4,_props$label5,_props$label6,avatatDefaultSrc=(0,react.useMemo)((function(){return props.src?props.src:props.firstName&&props.lastName?void 0:"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"}),[props.src,props.firstName,props.lastName]);return(0,jsx_runtime.jsxs)("div",{className:"flex justify-center items-center \n            ".concat("bottom"===(null===(_props$label=props.label)||void 0===_props$label?void 0:_props$label.place)?"flex-col":""," \n            ").concat(null!==(_props$className=props.className)&&void 0!==_props$className?_props$className:""),children:[avatatDefaultSrc?(0,jsx_runtime.jsx)("img",(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{alt:null!==(_ref=null!==(_props$alt=props.alt)&&void 0!==_props$alt?_props$alt:null===(_props$label2=props.label)||void 0===_props$label2?void 0:_props$label2.name)&&void 0!==_ref?_ref:"",src:avatatDefaultSrc,title:null!==(_ref2=null!==(_props$label$name=null===(_props$label3=props.label)||void 0===_props$label3?void 0:_props$label3.name)&&void 0!==_props$label$name?_props$label$name:props.alt)&&void 0!==_ref2?_ref2:"",className:"rounded-full object-cover w-10 h-10 aspect-square ".concat(null!==(_props$className2=props.className)&&void 0!==_props$className2?_props$className2:""),loading:null!==(_props$loadingMethod=props.loadingMethod)&&void 0!==_props$loadingMethod?_props$loadingMethod:"lazy"})):(0,jsx_runtime.jsxs)("h4",{className:"w-10 h-10 aspect-square bg-gray-200 flex justify-center items-center rounded-full \n                        font-bold text-sm ".concat(null!==(_props$className3=props.className)&&void 0!==_props$className3?_props$className3:""),dir:"auto",children:[null===(_props$firstName=props.firstName)||void 0===_props$firstName||null===(_props$firstName$char=_props$firstName.charAt(0))||void 0===_props$firstName$char?void 0:_props$firstName$char.toUpperCase()," ",null===(_props$lastName=props.lastName)||void 0===_props$lastName||null===(_props$lastName$charA=_props$lastName.charAt(0))||void 0===_props$lastName$charA?void 0:_props$lastName$charA.toUpperCase()]}),null!==(_props$label4=props.label)&&void 0!==_props$label4&&_props$label4.name?(0,jsx_runtime.jsx)("h4",{dir:"auto",className:"mx-2 my-2 text-sm font-bold text-gray-500 whitespace-nowrap ".concat(null===(_props$label5=props.label)||void 0===_props$label5?void 0:_props$label5.classname),children:null===(_props$label6=props.label)||void 0===_props$label6?void 0:_props$label6.name}):null]})};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"User avatar",displayName:"Avatar",props:{firstName:{defaultValue:null,description:"User label",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:'{ name?: string; classname?: string; place?: "bottom" | "end" | undefined; } | undefined'}},containerClassName:{defaultValue:null,description:"Class name to add for the container of the image and its label",name:"containerClassName",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"Image src",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Image alt",name:"alt",required:!1,type:{name:"string"}},loadingMethod:{defaultValue:null,description:"Image loading method",name:"loadingMethod",required:!1,type:{name:"enum",value:[{value:'"lazy"'},{value:'"eager"'}]}},className:{defaultValue:null,description:"Base element class name.",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/image/avatar/avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/image/avatar/avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/index.css":function(){},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/image/image.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithLabel:function(){return WithLabel},WithoutImage:function(){return WithoutImage},WithoutLabel:function(){return WithoutLabel},__namedExportsOrder:function(){return __namedExportsOrder}});var _Users_motasemgozlan_Desktop_Into_projects_into_ui_library_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_image__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/index.css"),__webpack_require__("./src/components/image/index.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Image/avatar",component:_components_image__WEBPACK_IMPORTED_MODULE_2__.q};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_image__WEBPACK_IMPORTED_MODULE_2__.q,(0,_Users_motasemgozlan_Desktop_Into_projects_into_ui_library_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},args))},WithoutLabel=Template.bind({});WithoutLabel.args={alt:"Face portrait",src:"https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",className:"h-20 w-20"};var WithLabel=Template.bind({});WithLabel.args={alt:"Face portrait",src:"https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",label:{name:"Face portrait"}};var WithoutImage=Template.bind({});WithoutImage.args={alt:"Face portrait",firstName:"Motasem",lastName:"Ghozlan",label:{name:"Face portrait"}};var __namedExportsOrder=["WithoutLabel","WithLabel","WithoutImage"];WithoutLabel.parameters={...WithoutLabel.parameters,docs:{...WithoutLabel.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Avatar, _objectSpread({}, args));\n}",...WithoutLabel.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Avatar, _objectSpread({}, args));\n}",...WithLabel.parameters?.docs?.source}}},WithoutImage.parameters={...WithoutImage.parameters,docs:{...WithoutImage.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Avatar, _objectSpread({}, args));\n}",...WithoutImage.parameters?.docs?.source}}}}}]);