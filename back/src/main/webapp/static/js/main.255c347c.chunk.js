(this.webpackJsonpsoa_lab1_front=this.webpackJsonpsoa_lab1_front||[]).push([[0],{66:function(e,t,r){},78:function(e,t){},80:function(e,t){},90:function(e,t,r){"use strict";r.r(t),r.d(t,"DEFAULT_URL",(function(){return I}));var a=r(1),s=r.n(a),n=r(12),o=r.n(n),c=(r(65),r(8)),i=r(9),l=r(15),u=r(14),h=(r(66),r(51)),p=r(13),d=r(16),j=r(7),b=r(53),f=r(0),O=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).props.dispatch({type:"LOAD_FLATS",value:{}}),a}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=[];if(this.props.flats){var r,a=Object(h.a)(this.props.flats);try{var s=function(){var a=r.value;t.push(Object(f.jsxs)("tr",{onClick:function(){return e.handleClick(a)},children:[Object(f.jsx)("td",{children:a.id._text}),Object(f.jsx)("td",{children:a.name._text}),Object(f.jsxs)("td",{children:["x=",a.coordinates.x._text,", y=",a.coordinates.y._text]}),Object(f.jsx)("td",{children:a.creationDate._text}),Object(f.jsx)("td",{children:a.area?a.area._text:""}),Object(f.jsx)("td",{children:a.numberOfRooms?a.numberOfRooms._text:""}),Object(f.jsx)("td",{children:a.price?a.price._text:""}),Object(f.jsx)("td",{children:a.kitchenArea?a.kitchenArea._text:""}),Object(f.jsx)("td",{children:a.view?a.view._text:""}),Object(f.jsx)("td",{children:a.house?a.house.name._text:""})]}))};for(a.s();!(r=a.n()).done;)s()}catch(n){a.e(n)}finally{a.f()}}return Object(f.jsxs)(b.a,{bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{className:"table-dark",children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{scope:"col",children:["ID ",Object(f.jsx)(d.a,{icon:0===this.props.filters.id.sort?j.a:1===this.props.filters.id.sort?j.c:j.b,onClick:function(){return e.sort("id")}})]}),Object(f.jsxs)("th",{scope:"col",children:["Name ",Object(f.jsx)(d.a,{icon:0===this.props.filters.name.sort?j.a:1===this.props.filters.name.sort?j.c:j.b,onClick:function(){return e.sort("name")}})]}),Object(f.jsxs)("th",{scope:"col",children:["Coordinates ",Object(f.jsx)(d.a,{icon:0===this.props.filters.coordinates.sort?j.a:1===this.props.filters.coordinates.sort?j.c:j.b,onClick:function(){return e.sort("coordinates")}})]}),Object(f.jsxs)("th",{scope:"col",children:["Creation Date ",Object(f.jsx)(d.a,{icon:0===this.props.filters.date.sort?j.a:1===this.props.filters.date.sort?j.c:j.b,onClick:function(){return e.sort("date")}})]}),Object(f.jsxs)("th",{scope:"col",children:["Area ",Object(f.jsx)(d.a,{icon:0===this.props.filters.area.sort?j.a:1===this.props.filters.area.sort?j.c:j.b,onClick:function(){return e.sort("area")}})]}),Object(f.jsxs)("th",{scope:"col",children:["Rooms ",Object(f.jsx)(d.a,{icon:0===this.props.filters.rooms.sort?j.a:1===this.props.filters.rooms.sort?j.c:j.b,onClick:function(){return e.sort("rooms")}})]}),Object(f.jsxs)("th",{scope:"col",children:["Price ",Object(f.jsx)(d.a,{icon:0===this.props.filters.price.sort?j.a:1===this.props.filters.price.sort?j.c:j.b,onClick:function(){return e.sort("price")}})]}),Object(f.jsxs)("th",{scope:"col",children:["Kitchen Area ",Object(f.jsx)(d.a,{icon:0===this.props.filters.kitchenArea.sort?j.a:1===this.props.filters.kitchenArea.sort?j.c:j.b,onClick:function(){return e.sort("kitchenArea")}})]}),Object(f.jsxs)("th",{scope:"col",children:["View ",Object(f.jsx)(d.a,{icon:0===this.props.filters.view.sort?j.a:1===this.props.filters.view.sort?j.c:j.b,onClick:function(){return e.sort("view")}})]}),Object(f.jsxs)("th",{scope:"col",children:["House ",Object(f.jsx)(d.a,{icon:0===this.props.filters.house.sort?j.a:1===this.props.filters.house.sort?j.c:j.b,onClick:function(){return e.sort("house")}})]})]})}),Object(f.jsx)("tbody",{children:t})]})}},{key:"sort",value:function(e){this.props.dispatch({type:"UPDATE_SORT",value:{filterName:e}}),this.props.dispatch({type:"LOAD_FLATS",value:{}})}},{key:"handleClick",value:function(e){this.props.dispatch({type:"UPDATE_CURRENT_FLAT",value:{flat:e}}),this.props.dispatch({type:"SET_MODE",value:{mode:1}})}}]),r}(s.a.Component),m=Object(p.b)((function(e){return{flats:e.flats,filters:e.filters}}))(O),x=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=Math.ceil(this.props.totalFlats/this.props.pageSize);return Object(f.jsxs)("form",{className:"my-page-form",children:[Object(f.jsxs)("div",{className:"row justify-content-md-center",children:[Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"pageNum",children:"Page number"}),Object(f.jsx)("input",{type:"number",id:"pageNum",className:"form-control",value:this.props.currentPage,min:"1",max:t,onChange:function(t){return e.handlePageUpdate(t.target.value)}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"typeNumber",children:"Page size"}),Object(f.jsx)("input",{type:"number",id:"typeNumber",className:"form-control number",value:this.props.pageSize,min:"1",max:this.props.totalFlats,onChange:function(t){return e.handleSizeUpdate(t.target.value)}})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"btn btn-outline-primary",type:"button",onClick:function(){return e.props.dispatch({type:"LOAD_FLATS",value:{}})},children:"Apply"})]})}},{key:"handlePageUpdate",value:function(e){this.props.dispatch({type:"UPDATE_CURRENT_PAGE",value:{currentPage:e}})}},{key:"handleSizeUpdate",value:function(e){this.props.dispatch({type:"UPDATE_PAGE_SIZE",value:{pageSize:e}})}}]),r}(s.a.Component),v=Object(p.b)((function(e){return{totalFlats:e.totalFlats,currentPage:e.currentPage,pageSize:e.pageSize}}))(x),_=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{className:"row justify-content-md-center",children:[Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"id",children:"ID"}),Object(f.jsx)("input",{type:"number",id:"id",className:"form-control",value:this.props.filters.id.filter,onChange:function(t){return e.updateFilter(t,"id")}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"name",children:"Name"}),Object(f.jsx)("input",{type:"text",id:"name",className:"form-control",value:this.props.filters.name.filter,onChange:function(t){return e.updateFilter(t,"name")}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"x",children:"X"}),Object(f.jsx)("input",{type:"number",id:"x",className:"form-control",value:this.props.filters.x.filter,onChange:function(t){return e.updateFilter(t,"x")}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"y",children:"Y"}),Object(f.jsx)("input",{type:"number",id:"y",className:"form-control",value:this.props.filters.y.filter,onChange:function(t){return e.updateFilter(t,"y")}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"date",children:"Date"}),Object(f.jsx)("input",{type:"text",id:"date",className:"form-control",value:this.props.filters.date.filter,onChange:function(t){return e.updateFilter(t,"date")}})]})]}),Object(f.jsxs)("div",{className:"row justify-content-md-center",children:[Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"area",children:"Area"}),Object(f.jsx)("input",{type:"number",id:"area",className:"form-control",value:this.props.filters.area.filter,onChange:function(t){return e.updateFilter(t,"area")}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"rooms",children:"Rooms"}),Object(f.jsx)("input",{type:"number",id:"rooms",className:"form-control",value:this.props.filters.rooms.filter,onChange:function(t){return e.updateFilter(t,"rooms")}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"price",children:"Price"}),Object(f.jsx)("input",{type:"number",id:"price",className:"form-control",value:this.props.filters.price.filter,onChange:function(t){return e.updateFilter(t,"price")}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"kitchenArea",children:"Kitchen Area"}),Object(f.jsx)("input",{type:"number",id:"kitchenArea",className:"form-control",value:this.props.filters.kitchenArea.filter,onChange:function(t){return e.updateFilter(t,"kitchenArea")}})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"view",children:"View"}),Object(f.jsx)("input",{type:"text",id:"view",className:"form-control",value:this.props.filters.view.filter,onChange:function(t){return e.updateFilter(t,"view")}})]})]}),Object(f.jsxs)("div",{className:"col-auto",children:[Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return e.applyChanges()},children:"Apply"})]})]})}},{key:"updateFilter",value:function(e,t){this.props.dispatch({type:"UPDATE_FILTER",value:{filterName:t,value:e.target.value}})}},{key:"applyChanges",value:function(){this.props.dispatch({type:"UPDATE_CURRENT_PAGE",value:{currentPage:1}}),this.props.dispatch({type:"LOAD_FLATS",value:{}})}}]),r}(s.a.Component),y=Object(p.b)((function(e){return{filters:e.filters}}))(_),g=r(24),A=r(94),C=r(93),F=r(58),T=r(95),E=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(g.a,{centered:!0,show:0!==this.props.mode,onHide:function(){return e.handleClose()},children:[Object(f.jsx)(g.a.Header,{closeButton:!0,children:Object(f.jsx)(g.a.Title,{children:2===this.props.mode?"Add flat":"Modify flat ".concat(this.props.flat.id)})}),Object(f.jsx)(g.a.Body,{children:Object(f.jsxs)(A.a,{children:[Object(f.jsxs)(C.a,{children:[Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"Name"}),Object(f.jsx)(A.a.Control,{type:"text",value:this.props.flat.name,onChange:function(t){return e.handleChange(t,"name")}})]})}),Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"Area"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.area,onChange:function(t){return e.handleChange(t,"area")}})]})})]}),Object(f.jsxs)(C.a,{children:[Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"X coordinate"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.coords_x,onChange:function(t){return e.handleChange(t,"coords_x")}})]})}),Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"Y coordinate"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.coords_y,onChange:function(t){return e.handleChange(t,"coords_y")}})]})})]}),Object(f.jsxs)(C.a,{children:[Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"Rooms"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.rooms,onChange:function(t){return e.handleChange(t,"rooms")}})]})}),Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"Price"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.price,onChange:function(t){return e.handleChange(t,"price")}})]})})]}),Object(f.jsxs)(C.a,{children:[Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"Kitchen Area"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.kitchenArea,onChange:function(t){return e.handleChange(t,"kitchenArea")}})]})}),Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"View"}),Object(f.jsx)(A.a.Control,{type:"text",value:this.props.flat.view,onChange:function(t){return e.handleChange(t,"view")}})]})})]}),Object(f.jsx)(C.a,{children:Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"House Name"}),Object(f.jsx)(A.a.Control,{type:"text",value:this.props.flat.house_name,onChange:function(t){return e.handleChange(t,"house_name")}})]})})}),Object(f.jsxs)(C.a,{children:[Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"House Year"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.house_year,onChange:function(t){e.handleChange(t,"house_year")}})]})}),Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"House Floors"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.house_floors,onChange:function(t){return e.handleChange(t,"house_floors")}})]})})]}),Object(f.jsxs)(C.a,{children:[Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"House FlatsOnFloor"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.house_flatsOnFloor,onChange:function(t){e.handleChange(t,"house_flatsOnFloor")}})]})}),Object(f.jsx)(F.a,{children:Object(f.jsxs)(A.a.Group,{children:[Object(f.jsx)(A.a.Label,{children:"House Lifts"}),Object(f.jsx)(A.a.Control,{type:"number",value:this.props.flat.house_lifts,onChange:function(t){return e.handleChange(t,"house_lifts")}})]})})]})]})}),Object(f.jsxs)(g.a.Footer,{children:[Object(f.jsx)(T.a,{variant:"danger",disabled:1!==this.props.mode,onClick:function(){return e.handleDelete()},children:"Delete"}),Object(f.jsx)(T.a,{variant:"primary",onClick:function(){return e.handleSubmit()},children:"Save Changes"})]})]})}},{key:"handleClose",value:function(){this.props.dispatch({type:"SET_MODE",value:{mode:0}})}},{key:"handleSubmit",value:function(){1===this.props.mode&&this.props.dispatch({type:"UPDATE_FLAT"}),2===this.props.mode&&this.props.dispatch({type:"ADD_FLAT"}),this.props.dispatch({type:"SET_MODE",value:{mode:0}})}},{key:"handleDelete",value:function(){this.props.dispatch({type:"DELETE_FLAT"}),this.props.dispatch({type:"SET_MODE",value:{mode:0}})}},{key:"handleChange",value:function(e,t){var r=this.props.mode;this.props.dispatch({type:"SET_MODE",value:{mode:0}}),this.props.dispatch({type:"UPDATE_CURRENT_FLAT_FIELD",value:{fieldName:t,value:e.target.value}}),this.props.dispatch({type:"SET_MODE",value:{mode:r}})}}]),r}(s.a.Component),S=Object(p.b)((function(e){return{mode:e.mode,flat:e.currentFlat}}))(E),N=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"alert alert-danger",role:"alert",hidden:!this.props.error,children:this.props.error}),Object(f.jsx)(S,{store:this.props.store}),Object(f.jsxs)("div",{className:"pt-2 mt-2",children:[Object(f.jsx)(y,{store:this.props.store}),Object(f.jsx)("br",{})]}),Object(f.jsx)(m,{store:this.props.store}),Object(f.jsx)("button",{className:"btn btn-success",onClick:function(){return e.handleAdd()},children:"Add flat"}),Object(f.jsx)(v,{store:this.props.store})]})}},{key:"handleAdd",value:function(){this.props.dispatch({type:"CLEAR_CURRENT_FLAT"}),this.props.dispatch({type:"SET_MODE",value:{mode:2}})}}]),r}(s.a.Component),L=Object(p.b)((function(e){return{error:e.error}}))(N),k=r(32),R=r(59),D=r.n(R);function P(e){var t="";if(e.name&&(t+="<name>".concat(e.name,"</name>")),e.area&&(t+="<area>".concat(e.area,"</area>")),e.rooms&&(t+="<numberOfRooms>".concat(e.rooms,"</numberOfRooms>")),e.price&&(t+="<price>".concat(e.price,"</price>")),e.kitchenArea&&(t+="<kitchenArea>".concat(e.kitchenArea,"</kitchenArea>")),e.view&&(t+="<view>".concat(e.view,"</view>")),e.coords_x||e.coords_y){var r="";e.coords_x&&(r+="<x>".concat(e.coords_x,"</x>")),e.coords_y&&(r+="<y>".concat(e.coords_y,"</y>")),t+="<coordinates>".concat(r,"</coordinates>")}if(e.house_id||e.house_name||e.house_year||e.house_floors||e.house_flatsOnFloor||e.house_lifts){var a="";e.house_id&&(a+="<id>".concat(e.house_id,"</id>")),e.house_name&&(a+="<name>".concat(e.house_name,"</name>")),e.house_year&&(a+="<year>".concat(e.house_year,"</year>")),e.house_floors&&(a+="<numberOfFloors>".concat(e.house_floors,"</numberOfFloors>")),e.house_flatsOnFloor&&(a+="<numberOfFlatsOnFloor>".concat(e.house_flatsOnFloor,"</numberOfFlatsOnFloor>")),e.house_lifts&&(a+="<numberOfLifts>".concat(e.house_lifts,"</numberOfLifts>")),t+="<house>".concat(a,"</house>")}return"<flat>".concat(t,"</flat>")}function w(e){return{id:e.id._text,name:e.name._text,coords_x:e.coordinates.x._text,coords_y:e.coordinates.y._text,date:e.creationDate._text,area:e.area?e.area._text:"",rooms:e.numberOfRooms?e.numberOfRooms._text:"",price:e.price?e.price._text:"",kitchenArea:e.kitchenArea?e.kitchenArea._text:"",view:e.view?e.view._text:"",house_id:e.house.id._text,house_name:e.house.name._text,house_year:e.house&&e.house.year?e.house.year._text:"",house_floors:e.house&&e.house.numberOfFloors?e.house.numberOfFloors._text:"",house_flatsOnFloor:e.house&&e.house.numberOfFlatsOnFloor?e.house.numberOfFlatsOnFloor._text:"",house_lifts:e.house&&e.house.numberOfLifts?e.house.numberOfLifts._text:""}}var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FLATS":var r=[],a=t.value.flatList.flat;return a&&"function"===typeof a[Symbol.iterator]?r=a:a&&r.push(a),Object.assign({},e,{flats:r,totalFlats:parseInt(t.value.flatList.totalFlats._text)});case"UPDATE_CURRENT_PAGE":return Object.assign({},e,{currentPage:t.value.currentPage});case"UPDATE_PAGE_SIZE":return Object.assign({},e,{pageSize:t.value.pageSize});case"UPDATE_SORT":var s=e.filters;return s[t.value.filterName].sort=(s[t.value.filterName].sort+1)%3,Object.assign({},e,{filters:s});case"UPDATE_FILTER":var n=e.filters;return n[t.value.filterName].filter=t.value.value,Object.assign({},e,{filters:n});case"UPDATE_CURRENT_FLAT_FIELD":var o=e.currentFlat;return o[t.value.fieldName]=t.value.value,Object.assign({},e,{currentFlat:o});case"UPDATE_CURRENT_FLAT":return Object.assign({},e,{currentFlat:w(t.value.flat)});case"CLEAR_CURRENT_FLAT":var c=e.currentFlat;for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(c[i]="");return Object.assign({},e,{currentFlat:c});case"SET_ERROR":return Object.assign({},e,{error:t.value.error});case"SET_MODE":return Object.assign({},e,{mode:t.value.mode});default:return e}};function G(e,t,r){return 0!==e.sort?r+"&orderBy=".concat(t,",").concat(1===e.sort?"asc":"desc"):r}function M(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e.filter?a?r+"&".concat(t,"=").concat(e.filter,",").concat(a.filter):r+"&".concat(t,"=").concat(e.filter):r}var H=Object(k.a)((function(e){return function(t){return function(r){switch(r.type){case"LOAD_FLATS":var a=new XMLHttpRequest,s="pageNumber=".concat(e.getState().currentPage,"&pageSize=").concat(e.getState().pageSize),n="";return n=G(e.getState().filters.id,"id",n),n=G(e.getState().filters.name,"name",n),n=G(e.getState().filters.coordinates,"coordinates",n),n=G(e.getState().filters.date,"creationDate",n),n=G(e.getState().filters.area,"area",n),n=G(e.getState().filters.rooms,"numberOfRooms",n),n=G(e.getState().filters.price,"price",n),n=G(e.getState().filters.kitchenArea,"kitchenArea",n),n=G(e.getState().filters.view,"view",n),n=G(e.getState().filters.house,"house",n),n=M(e.getState().filters.id,"id",n),n=M(e.getState().filters.name,"name",n),n=M(e.getState().filters.x,"coordinates",n,e.getState().filters.y),n=M(e.getState().filters.date,"creationDate",n),n=M(e.getState().filters.area,"area",n),n=M(e.getState().filters.rooms,"numberOfRooms",n),n=M(e.getState().filters.price,"price",n),n=M(e.getState().filters.kitchenArea,"kitchenArea",n),n=M(e.getState().filters.view,"view",n),n=M(e.getState().filters.house,"house",n),a.open("GET","".concat(I,"/flats?").concat(s).concat(n),!1),a.onload=function(){var t;200===a.status?(e.dispatch({type:"UPDATE_FLATS",value:(t=a.responseText,D.a.xml2js(t,{compact:!0}))}),e.dispatch({type:"SET_ERROR",value:{error:null}})):e.dispatch({type:"SET_ERROR",value:{error:a.responseText}})},a.onerror=function(){return alert("Server is unavailable")},a.send(),t(r);case"UPDATE_FLAT":var o=new XMLHttpRequest;return o.open("PUT","".concat(I,"/flats/").concat(e.getState().currentFlat.id),!1),o.onload=function(){200===o.status?e.dispatch({type:"LOAD_FLATS"}):e.dispatch({type:"SET_ERROR",value:{error:o.responseText}})},o.onerror=function(){return alert("Server is unavailable")},o.setRequestHeader("content-type","text/xml"),o.send(P(e.getState().currentFlat)),t(r);case"DELETE_FLAT":var c=new XMLHttpRequest;return c.open("DELETE","".concat(I,"/flats/").concat(e.getState().currentFlat.id),!1),c.onload=function(){200===c.status?e.dispatch({type:"LOAD_FLATS"}):e.dispatch({type:"SET_ERROR",value:{error:c.responseText}})},c.onerror=function(){return alert("Server is unavailable")},c.send(),t(r);case"ADD_FLAT":var i=new XMLHttpRequest;return i.open("POST","".concat(I,"/flats"),!1),i.onload=function(){200===i.status?e.dispatch({type:"LOAD_FLATS"}):e.dispatch({type:"SET_ERROR",value:{error:i.responseText}})},i.onerror=function(){return alert("Server is unavailable")},i.send(P(e.getState().currentFlat)),t(r);default:return t(r)}}}})),z=Object(k.b)(U,{flats:[],totalFlats:0,currentPage:1,pageSize:5,error:null,mode:0,currentFlat:{id:"",name:"",coords_x:"",coords_y:"",date:"",area:"",rooms:"",price:"",kitchenArea:"",view:"",house_id:"",house_name:"",house_year:"",house_floors:"",house_flatsOnFloor:"",house_lifts:""},filters:{id:{filter:null,sort:0},name:{filter:null,sort:0},coordinates:{filter:null,sort:0},x:{filter:null,sort:0},y:{filter:null,sort:0},date:{filter:null,sort:0},area:{filter:null,sort:0},rooms:{filter:null,sort:0},price:{filter:null,sort:0},kitchenArea:{filter:null,sort:0},view:{filter:null,sort:0},house:{filter:null,sort:0}}},H),I="http://localhost:20080/soa_lab1_back-1.0-SNAPSHOT/api";o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(p.a,{store:z,children:Object(f.jsx)(L,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.255c347c.chunk.js.map