(this["webpackJsonpexercise-2"]=this["webpackJsonpexercise-2"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(13),i=n.n(s),l=(n(23),n(5)),c=n(6),u=n(8),o=n(7),d=n(16),m=n(32),h=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={id:null,isHover:!1},a}return Object(c.a)(n,[{key:"onMouseEnterHandler",value:function(e){this.setState({id:e,isHover:!0})}},{key:"onMouseLeaveHandler",value:function(e){this.setState({id:e,isHover:!1})}},{key:"onClickEditUserHandler",value:function(e){var t=this.props.users.find((function(t){return t.id===e}));this.props.editUser(t)}},{key:"onClickDeleteUserHandler",value:function(e){var t=this.props.users.find((function(t){return t.id===e}));this.props.deleteUser(t)}},{key:"renderButton",value:function(e){var t=this,n=this.props,a=n.currentUser;return n.isAddUser||null!==a.id&&!a.isCanceled&&!a.isUpdated?null:this.state.id===e&&this.state.isHover?r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return t.onClickEditUserHandler(e)}},r.a.createElement("i",{className:"fa fa-edit mg-r-10 custom-icon-action"})),r.a.createElement("span",{onClick:function(){return t.onClickDeleteUserHandler(e)}},r.a.createElement("i",{className:"fa fa-trash custom-icon-action"}))):void 0}},{key:"renderUserData",value:function(){var e=this;return this.props.users.map((function(t,n){return r.a.createElement("tr",{key:"user-".concat(n),onMouseEnter:function(){return e.onMouseEnterHandler(t.id)},onMouseLeave:function(){return e.onMouseLeaveHandler(t.id)}},r.a.createElement("td",{className:"text-left",width:"20%"},t.name),r.a.createElement("td",{className:"text-left",width:"20%%"},t.email),r.a.createElement("td",{className:"text-center",width:"10%"},e.renderButton(t.id)))}))}},{key:"renderAddUser",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3",className:"text-center",width:"100%"},r.a.createElement(m.a,{variant:"primary",onClick:function(){return e.props.addUserHandler()}},"Add User")))}},{key:"render",value:function(){return r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left"},"Name"),r.a.createElement("td",{className:"text-left"},"Email"),r.a.createElement("td",{className:"text-center"},"Action"))),r.a.createElement("tbody",null,this.renderUserData(),this.props.isAddUser?null:this.renderAddUser()))}}]),n}(a.Component),v=n(31),f=n(30),E=n(14),p=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"initState",value:function(e){this.setState({id:e.id,name:e.name,email:e.email})}},{key:"componentWillMount",value:function(){this.initState(this.props.currentUser)}},{key:"onChangeAttribute",value:function(e,t){var n=this.props,a=n.currentUser,r=n.isAddUser?a:this.state;null===r.id&&(r.id=Date.now()),r[t]=e.target.value,this.setState(r)}},{key:"onSubmitFormHandler",value:function(e,t){"cancel"===t?this.setState(Object.assign(e,{isCanceled:!0,isUpdated:!1})):this.setState(Object.assign(e,{isCanceled:!1,isUpdated:!0})),this.props.onSubmitForm(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.currentUser,a=t.isAddUser;return n.isCanceled||n.isUpdated?null:r.a.createElement("div",{className:"mg-l-15"},r.a.createElement(v.a,{width:"100%"},r.a.createElement(v.a.Group,{as:f.a},r.a.createElement(E.a,{sm:"12"},r.a.createElement(v.a.Control,{type:"text",placeholder:"Enter name",value:a?n.name:this.state.name,onChange:function(t){return e.onChangeAttribute(t,"name")}}))),r.a.createElement(v.a.Group,{as:f.a},r.a.createElement(E.a,{sm:"12"},r.a.createElement(v.a.Control,{type:"email",placeholder:"Enter email",value:a?n.email:this.state.email,onChange:function(t){return e.onChangeAttribute(t,"email")}}))),r.a.createElement(f.a,null,r.a.createElement(E.a,{sm:"4"}),r.a.createElement(E.a,{sm:"1",className:"mg-r-15"},r.a.createElement(m.a,{variant:"secondary",onClick:function(){return e.onSubmitFormHandler(n,"cancel")}},"Cancel")),r.a.createElement(E.a,{sm:"1"},r.a.createElement(m.a,{variant:"success",onClick:function(){return e.onSubmitFormHandler(e.state,"update")}},"Save")))))}}]),n}(a.Component),U=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={currentTime:(new Date).toLocaleString()},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({currentTime:(new Date).toLocaleString()})}),1e3)}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.currentTime)}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={hours:0,minutes:0,seconds:0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.countTime()}),1e3)}},{key:"countTime",value:function(){var e=this.state,t=e.hours,n=e.minutes,a=e.seconds;a>=59&&(n+=1,a=-1),n>=60&&(t+=1,n=0),this.setState({hours:t,minutes:n,seconds:a+1})}},{key:"convertTime",value:function(e){return e<10?"0".concat(e):e}},{key:"displayTime",value:function(){var e=this.state,t=e.hours,n=e.minutes,a=e.seconds;return r.a.createElement("h3",null,"".concat(this.convertTime(t)," : ").concat(this.convertTime(n)," : ").concat(this.convertTime(a)))}},{key:"render",value:function(){return r.a.createElement("div",null,this.displayTime())}}]),n}(a.Component),y=n(15),k=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={users:JSON.parse(localStorage.getItem("users"))||[],currentUser:{id:null,name:"",email:""},isAddUser:!1},e}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){localStorage.setItem("users",JSON.stringify(this.state.users))}},{key:"editUser",value:function(e){this.setState({currentUser:Object.assign(e,{isCanceled:!1,isUpdated:!1}),isAddUser:!1})}},{key:"deleteUser",value:function(e){var t=this.state.users.filter((function(t){return t!==e}));this.setState({users:t})}},{key:"onSubmitForm",value:function(e){var t=this.state.users,n=t.findIndex((function(t){return t.id===e.id}));n>=0?(t[n]=e,this.setState({users:t,currentUser:e,isAddUser:!1})):e.isCanceled||null===e.id?this.setState({isAddUser:!1}):this.setState({users:[].concat(Object(d.a)(this.state.users),[e]),currentUser:e,isAddUser:!1})}},{key:"addUserHandler",value:function(){this.setState({isAddUser:!0,currentUser:{id:null,name:"",email:""}})}},{key:"renderTableListUser",value:function(){var e,t=this.state,n=t.currentUser;return(t.isAddUser||null!==n.id&&!n.isCanceled&&!n.isUpdated)&&(e=r.a.createElement(p,{onSubmitForm:this.onSubmitForm.bind(this),currentUser:this.state.currentUser,isAddUser:this.state.isAddUser})),r.a.createElement("div",null,r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left"},r.a.createElement("h3",null,"Exercise 2")),r.a.createElement("td",{className:"text-right"},r.a.createElement(b,null)))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"50%"},r.a.createElement(h,{users:this.state.users,editUser:this.editUser.bind(this),deleteUser:this.deleteUser.bind(this),currentUser:this.state.currentUser,addUserHandler:this.addUserHandler.bind(this),isAddUser:this.state.isAddUser})),r.a.createElement("td",null,e)))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderTableListUser(),r.a.createElement("div",{className:"text-center"},r.a.createElement(y.Wave,{text:"Kh\xf3 v\xe3i (\u2565_\u2565)",effect:"stretch",effectChange:2.2}),r.a.createElement(U,null)))}}]),n}(a.Component),S=(n(27),n(28),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null))}}]),n}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a2504732.chunk.js.map