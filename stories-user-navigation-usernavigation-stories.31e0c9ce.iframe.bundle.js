/*! For license information please see stories-user-navigation-usernavigation-stories.31e0c9ce.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_intoexpert_into_ui_library=self.webpackChunk_intoexpert_into_ui_library||[]).push([[4939],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toPropertyKey}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/expandable/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return ExpandablePanel}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ExpandablePanel=function ExpandablePanel(props){var _props$className,_props$header$classNa,_props$header,_props$header2,_props$toggle,_useState=(0,react.useState)({isOpen:props.isOpen||!1,isOverflowVisible:!1}),_useState2=(0,slicedToArray.Z)(_useState,2),state=_useState2[0],setState=_useState2[1];return(0,react.useEffect)((function(){state.isOpen?setTimeout((function(){setState((function(prevState){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prevState),{},{isOverflowVisible:!0})}))}),500):setState((function(prevState){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prevState),{},{isOverflowVisible:!1})}))}),[state.isOpen]),(0,jsx_runtime.jsxs)("article",{className:"rounded-none border-t border-t-gray-100 p-2 ".concat(null!==(_props$className=props.className)&&void 0!==_props$className?_props$className:""),children:[(0,jsx_runtime.jsxs)("button",{className:"flex justify-between py-3 px-2  w-full\n                ".concat(state.isOpen?"text-blue-600":"text-black","\n                ").concat(null!==(_props$header$classNa=null===(_props$header=props.header)||void 0===_props$header?void 0:_props$header.className)&&void 0!==_props$header$classNa?_props$header$classNa:""),onClick:function togglePanel(){var _props$onToggle;setState((function(prevState){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prevState),{},{isOpen:!prevState.isOpen})})),null===(_props$onToggle=props.onToggle)||void 0===_props$onToggle||_props$onToggle.call(props,!state.isOpen)},children:[null===(_props$header2=props.header)||void 0===_props$header2?void 0:_props$header2.content,(0,jsx_runtime.jsx)("span",{className:"".concat(state.isOpen?"transition-transform rotate-180 ":"w-5 "),children:null!==(_props$toggle=props.toggle)&&void 0!==_props$toggle?_props$toggle:(0,jsx_runtime.jsx)("div",{className:"align-middle -rotate-90 my-auto ",children:"❮"})})]}),(0,jsx_runtime.jsx)("div",{className:"\n                ".concat(state.isOverflowVisible&&state.isOpen?"":"overflow-hidden","\n                 transition-all \n                 ").concat(state.isOpen?"max-h-screen":"max-h-0"),children:props.children})]})};try{ExpandablePanel.displayName="ExpandablePanel",ExpandablePanel.__docgenInfo={description:"",displayName:"ExpandablePanel",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"{ content?: string | Element; className?: string; } | undefined"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!1,type:{name:"Element"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void)"}},className:{defaultValue:null,description:"Base element class name.",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/expandable/expandablePanel/expandablePanel.tsx#ExpandablePanel"]={docgenInfo:ExpandablePanel.__docgenInfo,name:"ExpandablePanel",path:"src/components/expandable/expandablePanel/expandablePanel.tsx#ExpandablePanel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/image/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return Avatar}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Avatar=function Avatar(props){var _props$label,_props$className,_ref,_props$alt,_props$label2,_ref2,_props$label$name,_props$label3,_props$className2,_props$loadingMethod,_props$className3,_props$firstName,_props$firstName$char,_props$lastName,_props$lastName$charA,_props$label4,_props$label5,_props$label6,avatatDefaultSrc=(0,react.useMemo)((function(){return props.src?props.src:props.firstName&&props.lastName?void 0:"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"}),[props.src,props.firstName,props.lastName]);return(0,jsx_runtime.jsxs)("div",{className:"flex justify-center items-center \n            ".concat("bottom"===(null===(_props$label=props.label)||void 0===_props$label?void 0:_props$label.place)?"flex-col":""," \n            ").concat(null!==(_props$className=props.className)&&void 0!==_props$className?_props$className:""),children:[avatatDefaultSrc?(0,jsx_runtime.jsx)("img",(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{alt:null!==(_ref=null!==(_props$alt=props.alt)&&void 0!==_props$alt?_props$alt:null===(_props$label2=props.label)||void 0===_props$label2?void 0:_props$label2.name)&&void 0!==_ref?_ref:"",src:avatatDefaultSrc,title:null!==(_ref2=null!==(_props$label$name=null===(_props$label3=props.label)||void 0===_props$label3?void 0:_props$label3.name)&&void 0!==_props$label$name?_props$label$name:props.alt)&&void 0!==_ref2?_ref2:"",className:"rounded-full object-cover w-10 h-10 aspect-square ".concat(null!==(_props$className2=props.className)&&void 0!==_props$className2?_props$className2:""),loading:null!==(_props$loadingMethod=props.loadingMethod)&&void 0!==_props$loadingMethod?_props$loadingMethod:"lazy"})):(0,jsx_runtime.jsxs)("h4",{className:"w-10 h-10 aspect-square bg-gray-200 flex justify-center items-center rounded-full \n                        font-bold text-sm ".concat(null!==(_props$className3=props.className)&&void 0!==_props$className3?_props$className3:""),dir:"auto",children:[null===(_props$firstName=props.firstName)||void 0===_props$firstName||null===(_props$firstName$char=_props$firstName.charAt(0))||void 0===_props$firstName$char?void 0:_props$firstName$char.toUpperCase()," ",null===(_props$lastName=props.lastName)||void 0===_props$lastName||null===(_props$lastName$charA=_props$lastName.charAt(0))||void 0===_props$lastName$charA?void 0:_props$lastName$charA.toUpperCase()]}),null!==(_props$label4=props.label)&&void 0!==_props$label4&&_props$label4.name?(0,jsx_runtime.jsx)("h4",{dir:"auto",className:"mx-2 my-2 text-sm font-bold text-gray-500 whitespace-nowrap ".concat(null===(_props$label5=props.label)||void 0===_props$label5?void 0:_props$label5.classname),children:null===(_props$label6=props.label)||void 0===_props$label6?void 0:_props$label6.name}):null]})};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"User avatar",displayName:"Avatar",props:{firstName:{defaultValue:null,description:"User label",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:'{ name?: string; classname?: string; place?: "bottom" | "end" | undefined; } | undefined'}},containerClassName:{defaultValue:null,description:"Class name to add for the container of the image and its label",name:"containerClassName",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"Image src",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Image alt",name:"alt",required:!1,type:{name:"string"}},loadingMethod:{defaultValue:null,description:"Image loading method",name:"loadingMethod",required:!1,type:{name:"enum",value:[{value:'"lazy"'},{value:'"eager"'}]}},className:{defaultValue:null,description:"Base element class name.",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/image/avatar/avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/image/avatar/avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/links/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return Link}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Link=function Link(props){var _props$className;return(0,jsx_runtime.jsx)("a",(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{className:"transition-colors \n            ".concat(props.hasButtonStyle?"hover:bg-primaryVariant":"hover:text-primary"," \n            ").concat(null!==(_props$className=props.className)&&void 0!==_props$className?_props$className:""),children:props.children}))};try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},hasButtonStyle:{defaultValue:null,description:"",name:"hasButtonStyle",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Base element class name.",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/links/link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/links/link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/user/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XV:function(){return UserNavigationPanel}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),expandable=__webpack_require__("./src/components/expandable/index.ts"),components_image=__webpack_require__("./src/components/image/index.ts"),links=__webpack_require__("./src/components/links/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UserNavigationPanel=function UserNavigationPanel(props){var _props$className,_props$className2,_props$horizontalNavi,_props$expandablePane,avatar=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props.avatar),{},{label:(0,objectSpread2.Z)({classname:"text-black !text-xs ".concat(null!==(_props$className=props.className)&&void 0!==_props$className?_props$className:""),place:"bottom"},props.avatar.label)});return(0,jsx_runtime.jsxs)("aside",{className:"bg-surface w-56 shadow-xl ".concat(null!==(_props$className2=props.className)&&void 0!==_props$className2?_props$className2:""),children:[(0,jsx_runtime.jsxs)("article",{className:"p-5 border-b border-gray-100",children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-center my-2",children:(0,jsx_runtime.jsx)(components_image.q,(0,objectSpread2.Z)((0,objectSpread2.Z)({},avatar),{},{className:"".concat(avatar.className)}))}),(0,jsx_runtime.jsx)("nav",{className:"flex justify-center mt-4",children:(0,jsx_runtime.jsx)("ul",{className:"flex flex-justify-between",children:null===(_props$horizontalNavi=props.horizontalNavigationItems)||void 0===_props$horizontalNavi?void 0:_props$horizontalNavi.map((function(item,index){return(0,jsx_runtime.jsxs)("li",{className:"text-sm",children:[(0,jsx_runtime.jsx)(links.r,(0,objectSpread2.Z)((0,objectSpread2.Z)({},item),{},{children:item.children})),index<props.horizontalNavigationItems.length-1?(0,jsx_runtime.jsx)("span",{className:"mx-2",children:"."}):null]},index)}))})})]}),(0,jsx_runtime.jsx)("article",{children:null===(_props$expandablePane=props.expandablePanels)||void 0===_props$expandablePane?void 0:_props$expandablePane.map((function(panel,index){return(0,jsx_runtime.jsx)(expandable.T,(0,objectSpread2.Z)((0,objectSpread2.Z)({},panel),{},{children:panel.children}),index)}))})]})};try{UserNavigationPanel.displayName="UserNavigationPanel",UserNavigationPanel.__docgenInfo={description:"User navigation panel, you can use it as dropdown, app drawer, etc...\nIt contains the user related navigations, like profile, logout, etc...",displayName:"UserNavigationPanel",props:{avatar:{defaultValue:null,description:"Avatar props",name:"avatar",required:!0,type:{name:"AvatarProps"}},horizontalNavigationItems:{defaultValue:null,description:"Horizontal aligned links, that come after the user avatar directly",name:"horizontalNavigationItems",required:!0,type:{name:"LinkProps[]"}},expandablePanels:{defaultValue:null,description:"Expandable panels in the end of the card",name:"expandablePanels",required:!0,type:{name:"ExpandablePanelProps[]"}},className:{defaultValue:null,description:"Base element class name.",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/user/nav/navigation.tsx#UserNavigationPanel"]={docgenInfo:UserNavigationPanel.__docgenInfo,name:"UserNavigationPanel",path:"src/components/user/nav/navigation.tsx#UserNavigationPanel"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/user/publicProfile/index.ts")},"./src/components/user/publicProfile/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ur:function(){return Biography},TS:function(){return Education},a3:function(){return Experience}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Biography=function Biography(props){var _props$className,_props$title,_props$discription;return(0,jsx_runtime.jsxs)("div",{className:"rounded-lg shadow ".concat(null!==(_props$className=props.className)&&void 0!==_props$className?_props$className:" "),children:[(0,jsx_runtime.jsxs)("h1",{className:"text-primary py-3 px-3",children:[" ",(0,jsx_runtime.jsx)("strong",{children:null===(_props$title=props.title)||void 0===_props$title?void 0:_props$title.content})]}),(0,jsx_runtime.jsx)("p",{className:"px-3 pb-3 text-xs",children:null===(_props$discription=props.discription)||void 0===_props$discription?void 0:_props$discription.content})]})};try{Biography.displayName="Biography",Biography.__docgenInfo={description:"",displayName:"Biography",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"{ className?: string; content?: string; } | undefined"}},discription:{defaultValue:null,description:"",name:"discription",required:!1,type:{name:"{ className?: string; content?: string; } | undefined"}},className:{defaultValue:null,description:"Base element class name.",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/user/publicProfile/biography.tsx#Biography"]={docgenInfo:Biography.__docgenInfo,name:"Biography",path:"src/components/user/publicProfile/biography.tsx#Biography"})}catch(__react_docgen_typescript_loader_error){}var Education=function Education(props){var _props$body,_props$className,_props$body2,length=null===(_props$body=props.body)||void 0===_props$body?void 0:_props$body.length;return(0,jsx_runtime.jsxs)("div",{className:"".concat(null!==(_props$className=props.className)&&void 0!==_props$className?_props$className:""," shadow rounded-lg"),children:[(0,jsx_runtime.jsx)(Biography,{title:props.title,className:"shadow-none"}),null===(_props$body2=props.body)||void 0===_props$body2?void 0:_props$body2.map((function(item,index){return(0,jsx_runtime.jsxs)("div",{className:"text-[10px]",children:[" ",(0,jsx_runtime.jsxs)("div",{className:"flex justify-between px-3 pb-3 ",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{className:"py-2 text-[13px]",children:item.universityName}),(0,jsx_runtime.jsx)("p",{className:"opacity-60",children:item.degree}),(0,jsx_runtime.jsxs)("p",{className:"opacity-60",children:[" ",item.location]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex my-auto",children:[item.icon," ",(0,jsx_runtime.jsxs)("p",{className:"text-primary px-2",children:[" ",(0,jsx_runtime.jsx)("strong",{children:item.iconDescription})]})]})]}),index!==(null!=length?length:1)-1&&(0,jsx_runtime.jsx)("hr",{className:"mx-3"})]},index)}))]})};try{Education.displayName="Education",Education.__docgenInfo={description:"",displayName:"Education",props:{body:{defaultValue:null,description:"",name:"body",required:!1,type:{name:"{ universityName?: string; degree?: string; location?: string | undefined; icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined; iconDescription?: string | undefined; }[] | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"{ className?: string; content?: string; } | undefined"}},discription:{defaultValue:null,description:"",name:"discription",required:!1,type:{name:"{ className?: string; content?: string; } | undefined"}},className:{defaultValue:null,description:"Base element class name.",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/user/publicProfile/education.tsx#Education"]={docgenInfo:Education.__docgenInfo,name:"Education",path:"src/components/user/publicProfile/education.tsx#Education"})}catch(__react_docgen_typescript_loader_error){}var Experience=function Experience(props){var _props$body$length,_props$body,_props$className,_props$body2,length=null!==(_props$body$length=null===(_props$body=props.body)||void 0===_props$body?void 0:_props$body.length)&&void 0!==_props$body$length?_props$body$length:0;return(0,jsx_runtime.jsxs)("div",{className:"shadow rounded-lg ".concat(null!==(_props$className=props.className)&&void 0!==_props$className?_props$className:" "),children:[(0,jsx_runtime.jsx)(Biography,{title:props.title,className:"shadow-none"}),null===(_props$body2=props.body)||void 0===_props$body2?void 0:_props$body2.map((function(item,index){return(0,jsx_runtime.jsxs)("div",{className:"text-[10px] ",children:[" ",(0,jsx_runtime.jsxs)("div",{className:"flex justify-between px-3 pb-3 pt-2",children:[(0,jsx_runtime.jsxs)("div",{className:"w-1/4",children:[(0,jsx_runtime.jsx)("strong",{className:"py-2 text-[13px]",children:item.title}),(0,jsx_runtime.jsx)("p",{children:item.companyName}),(0,jsx_runtime.jsxs)("p",{className:"text-gray-600",children:[" ",item.duration]}),(0,jsx_runtime.jsx)("p",{className:"text-gray-600",children:item.location})]}),(0,jsx_runtime.jsx)("div",{className:"border-gray-200 border-l mb-1"}),(0,jsx_runtime.jsx)("div",{className:"text-[10px] w-3/4 px-2",children:item.discription})]}),index!==length-1&&(0,jsx_runtime.jsx)("hr",{className:"mx-3"})]})}))]})};try{Experience.displayName="Experience",Experience.__docgenInfo={description:"",displayName:"Experience",props:{body:{defaultValue:null,description:"",name:"body",required:!1,type:{name:"{ title?: string; companyName?: string; duration?: string | ReactElement<any, string | JSXElementConstructor<any>> | undefined; location?: string | undefined; discription?: string | undefined; }[] | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"{ className?: string; content?: string; } | undefined"}},discription:{defaultValue:null,description:"",name:"discription",required:!1,type:{name:"{ className?: string; content?: string; } | undefined"}},className:{defaultValue:null,description:"Base element class name.",name:"className",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/user/publicProfile/experince.tsx#Experience"]={docgenInfo:Experience.__docgenInfo,name:"Experience",path:"src/components/user/publicProfile/experince.tsx#Experience"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/user/navigation/usernavigation.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},userNavigation:function(){return userNavigation}});var _Users_motasemgozlan_Desktop_Into_projects_into_ui_library_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_user__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/user/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"User/Navigation",component:_components_user__WEBPACK_IMPORTED_MODULE_0__.XV};var userNavigation=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_user__WEBPACK_IMPORTED_MODULE_0__.XV,(0,_Users_motasemgozlan_Desktop_Into_projects_into_ui_library_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args))}.bind({});userNavigation.args={avatar:{alt:"Face portrait",firstName:"Motasem",lastName:"Ghozlan",src:"https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",className:"!w-20 !h-auto",label:{name:"Motasem Ghz"}},horizontalNavigationItems:[{title:"Profile",href:"#profile",children:"Profile"},{title:"Wallet",href:"#Wallet",children:"Wallet"},{title:"History",href:"#History",children:"History"}],expandablePanels:[{className:"px-5",header:{content:"Expert"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"Hi"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"Hello"})]})}]};var __namedExportsOrder=["userNavigation"];userNavigation.parameters={...userNavigation.parameters,docs:{...userNavigation.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(UserNavigationPanel, _objectSpread({}, args));\n}",...userNavigation.parameters?.docs?.source}}}}}]);