(this["webpackJsonpexercise-2"]=this["webpackJsonpexercise-2"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),l=a.n(s),i=(a(22),a(5)),c=a(6),u=a(8),o=a(7),m=a(15),d=a(31),h=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={id:null,isHover:!1},n}return Object(c.a)(a,[{key:"onMouseEnterHandler",value:function(e){this.setState({id:e,isHover:!0})}},{key:"onMouseLeaveHandler",value:function(e){this.setState({id:e,isHover:!1})}},{key:"onClickHandler",value:function(e){var t=this.props.users.find((function(t){return t.id===e}));this.props.changeCurrentUser(t)}},{key:"renderButton",value:function(e){var t=this;return this.props.currentUser?null:this.state.id===e&&this.state.isHover?r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return t.onClickHandler(e)}},r.a.createElement("i",{className:"fa fa-edit",style:{color:"blue",cursor:"pointer",marginRight:10}})),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-trash",style:{color:"blue",cursor:"pointer"}}))):void 0}},{key:"renderUserData",value:function(){var e=this;return this.props.users.map((function(t,a){return r.a.createElement("tr",{key:"user-".concat(a),onMouseEnter:function(){return e.onMouseEnterHandler(t.id)},onMouseLeave:function(){return e.onMouseLeaveHandler(t.id)}},r.a.createElement("td",{className:"text-left",width:"20%"},t.name),r.a.createElement("td",{className:"text-left",width:"20%%"},t.email),r.a.createElement("td",{className:"text-center",width:"10%"},e.renderButton(t.id)))}))}},{key:"renderAddUser",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3",className:"text-center",width:"100%"},r.a.createElement(d.a,{variant:"primary",onClick:function(){return e.props.addUserHandler()}},"Add User")))}},{key:"render",value:function(){return r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left"},"Name"),r.a.createElement("td",{className:"text-left"},"Email"),r.a.createElement("td",{className:"text-center"},"Action"))),r.a.createElement("tbody",null,this.renderUserData(),this.renderAddUser()))}}]),a}(n.Component),v=a(30),E=a(29),f=a(14),b=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={id:null,name:"",email:""},n}return Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(e){null===this.state&&this.setState(e.currentUser)}},{key:"onChangeAttribute",value:function(e,t){var a=this.state;null===a.id&&(a.id=Date.now()),a[t]=e.target.value,this.setState(a)}},{key:"render",value:function(){var e=this,t=this.props,a=t.currentUser;return t.isAddUser?r.a.createElement("div",{className:"mg-l-15"},r.a.createElement(v.a,{width:"100%"},r.a.createElement(v.a.Group,{as:E.a},r.a.createElement(f.a,{sm:"12"},r.a.createElement(v.a.Control,{type:"text",placeholder:"Enter name",value:this.state.name,onChange:function(t){return e.onChangeAttribute(t,"name")}}))),r.a.createElement(v.a.Group,{as:E.a},r.a.createElement(f.a,{sm:"12"},r.a.createElement(v.a.Control,{type:"email",placeholder:"Enter email",value:this.state.email,onChange:function(t){return e.onChangeAttribute(t,"email")}}))),r.a.createElement(E.a,null,r.a.createElement(f.a,{sm:"4"}),r.a.createElement(f.a,{sm:"1",className:"mg-r-15"},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.props.onSubmitForm(a)}},"Cancel")),r.a.createElement(f.a,{sm:"1"},r.a.createElement(d.a,{variant:"success",onClick:function(){return e.props.onSubmitForm(e.state)}},"Save"))))):null}}]),a}(n.Component),p=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={currentTime:(new Date).toLocaleString()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({currentTime:(new Date).toLocaleString()})}),1e3)}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.currentTime)}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={users:JSON.parse(localStorage.getItem("users"))||[],currentUser:null,isAddUser:!1},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("users",JSON.stringify(this.state.users))}},{key:"onChangeAttribute",value:function(e,t){var a=this.state;a.currentUser[t]=e.target.value,this.setState(a)}},{key:"changeCurrentUser",value:function(e){var t=this.state;t.currentUser=e,this.setState(t)}},{key:"onSubmitForm",value:function(e){var t=this.state,a=t.users.findIndex((function(t){return t.id===e.id}));a>=0?(t.users[a]=e,this.setState(t)):this.setState({users:[].concat(Object(m.a)(this.state.users),[e])})}},{key:"addUserHandler",value:function(){this.setState({isAddUser:!0})}},{key:"renderTableListUser",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left"},r.a.createElement("h3",null,"Exercise 2")),r.a.createElement("td",{className:"text-right"},r.a.createElement(p,null)))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"50%"},r.a.createElement(h,{users:this.state.users,changeCurrentUser:this.changeCurrentUser.bind(this),currentUser:this.state.currentUser,addUserHandler:this.addUserHandler.bind(this)})),r.a.createElement("td",null,r.a.createElement(b,{onChangeAttribute:this.onChangeAttribute.bind(this),onSubmitForm:this.onSubmitForm.bind(this),currentUser:this.state.currentUser,isAddUser:this.state.isAddUser}))))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderTableListUser())}}]),a}(n.Component),U=(a(26),a(27),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null))}}]),a}(r.a.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2058d00c.chunk.js.map