/*! For license information please see resources-1.0.0.js.LICENSE.txt */
(()=>{"use strict";var e={"./static/resources/js/src/index.js":(e,t,r)=>{r.r(t);var n=r("react"),o=r.n(n),i=r("react-dom"),a=r.n(i),l=r("./node_modules/axios/index.js"),s=r.n(l),u=(r("./node_modules/classnames/index.js"),r("./node_modules/chonky/lib/index.js")),c=r("./node_modules/chonky-icon-fontawesome/lib/index.js"),p=r("./node_modules/react-dropzone/dist/es/index.js");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e){var t=(0,n.useCallback)(e.onDrop,[]),r=(0,p.useDropzone)({onDrop:t}),i=(r.acceptedFiles,r.getRootProps),a=r.getInputProps,l=r.isDragActive;return o().createElement(o().Fragment,null,o().createElement("div",w({className:"dropzone dropzone-multiple mb-2"},i()),o().createElement("input",a()),o().createElement("div",{className:"dz-default dz-message"},l?o().createElement("span",null,"Drop the files here ..."):o().createElement("span",null,"Drag 'n' drop some files here, or click to select files"))))}(0,u.setChonkyDefaults)({iconComponent:c.ChonkyIconFA});var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,r,n,i,a=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),F(g(t=a.call(this,e)),"handleOnDrop",(function(e){return e.forEach((function(e,r){var n=t.state.fileMap[t.state.currentFolderId],o=new FormData;return o.append("file",e),o.append("folder",n.pk),o.append("user",t.props.user),s().post(t.props.file_create_url,o,{headers:{"content-type":"multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"}}).then(t.refreshStates)}))})),F(g(t),"fetchCourses",(function(e,r){return s().get(t.props.request_url).then(e).catch(r)})),F(g(t),"getFiles",(function(e,t){var r=e[t];return r.childrenIds?r.childrenIds.map((function(t){var r;return null!==(r=e[t])&&void 0!==r?r:null})):[]})),F(g(t),"getFolderChain",(function(e,t){for(var r=e[t],n=[r],o=r.parentId;o;){var i=e[o];if(!i)break;n.unshift(i),o=i.parentId}return n})),F(g(t),"fileActions",[u.ChonkyActions.CreateFolder,u.ChonkyActions.DeleteFiles]),F(g(t),"openInNewTab",(function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)})),F(g(t),"refreshStates",(function(){return t.fetchCourses((function(e){t.setState({fileMap:e.data.fileMap,files:t.getFiles(e.data.fileMap,t.state.currentFolderId),folderChain:t.getFolderChain(e.data.fileMap,t.state.currentFolderId)})}))})),F(g(t),"moveFiles",(function(e,r,n){return Promise.all(e.map((function(e){var r=new FormData;return u.FileHelper.isDirectory(e)?(r.append("name",e.name),r.append("course_offering",t.props.course_offering),r.append("parent",n.pk),r.append("user",e.user)):(r.append("folder",n.pk),r.append("user",e.user)),s().put(e.request_url,r,{headers:{"content-type":"multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"}})}))).then(t.refreshStates)})),F(g(t),"deleteFiles",(function(e){var r=h({},t.state.fileMap);window.confirm("Are you sure you wish to delete this item?")&&(e.map((function(e){if(delete r[e.id],e.parentId){var t=r[e.parentId],n=t.childrenIds.filter((function(t){return t!==e.id}));r[e.parentId]=h(h({},t),{},{childrenIds:n,childrenCount:n.length})}return s().delete(e.request_url)})),t.setState({fileMap:r,files:t.getFiles(r,t.state.currentFolderId),folderChain:t.getFolderChain(r,t.state.currentFolderId)}))})),F(g(t),"createFolder",(function(e){var r=t.state.fileMap[t.state.currentFolderId],n=new FormData;return n.append("course_offering",t.props.course_offering),n.append("name",e),n.append("parent",r.pk),n.append("user",t.props.user),s().post(t.props.folder_create_url,n,{headers:{"content-type":"multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"}}).then(t.refreshStates)})),F(g(t),"handleFileAction",(function(e){if(e.id===u.ChonkyActions.OpenFiles.id){var r=e.payload,n=r.targetFile,o=r.files,i=null!=n?n:o[0];if(i&&u.FileHelper.isDirectory(i))return void t.setState({currentFolderId:i.id,files:t.getFiles(t.state.fileMap,i.id),folderChain:t.getFolderChain(t.state.fileMap,i.id)});t.openInNewTab(i.url)}else if(e.id===u.ChonkyActions.DeleteFiles.id)t.deleteFiles(e.state.selectedFilesForAction);else if(e.id===u.ChonkyActions.MoveFiles.id)t.moveFiles(e.payload.files,e.payload.source,e.payload.destination);else if(e.id===u.ChonkyActions.CreateFolder.id){var a=prompt("Provide the name for your new folder:");a&&t.createFolder(a)}})),s().defaults.xsrfCookieName="csrftoken",s().defaults.xsrfHeaderName="X-CSRFTOKEN",t.state={},t}return t=l,(r=[{key:"componentDidMount",value:function(){var e=this;this.fetchCourses((function(t){e.setState({fileMap:t.data.fileMap,currentFolderId:t.data.rootFolderId,files:e.getFiles(t.data.fileMap,t.data.rootFolderId),folderChain:e.getFolderChain(t.data.fileMap,t.data.rootFolderId)})}))}},{key:"render",value:function(){return o().createElement(o().Fragment,null,o().createElement(O,{onDrop:this.handleOnDrop}),o().createElement("div",{style:{height:400}},o().createElement(u.FileBrowser,{files:this.state.files,folderChain:this.state.folderChain,fileActions:this.fileActions,onFileAction:this.handleFileAction,defaultFileViewActionId:u.ChonkyActions.EnableListView.id},o().createElement(u.FileNavbar,null),o().createElement(u.FileToolbar,null),o().createElement(u.FileList,null),o().createElement(u.FileContextMenu,null))))}}])&&y(t.prototype,r),l}(o().Component),C=o().createElement(j,window.resources_list_app_props);a().render(C,document.getElementById("resources-app"))},react:e=>{e.exports=React},"react-dom":e=>{e.exports=ReactDOM}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={resources:0},t=[["./static/resources/js/src/index.js","vendors"]],n=()=>{};function o(){for(var n,o=0;o<t.length;o++){for(var i=t[o],a=!0,l=1;l<i.length;l++){var s=i[l];0!==e[s]&&(a=!1)}a&&(t.splice(o--,1),n=r(r.s=i[0]))}return 0===t.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},a=a.slice();for(var e=0;e<a.length;e++)i(a[e]);return(n=o)()};var i=o=>{for(var i,a,[s,u,c,p]=o,d=0,f=[];d<s.length;d++)a=s[d],r.o(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(i in u)r.o(u,i)&&(r.m[i]=u[i]);for(c&&c(r),l(o);f.length;)f.shift()();return p&&t.push.apply(t,p),n()},a=self.webpackChunksaiki=self.webpackChunksaiki||[],l=a.push.bind(a);a.push=i})(),r.x()})();
//# sourceMappingURL=resources-1.0.0.js.map