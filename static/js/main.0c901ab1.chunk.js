(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,a){e.exports={nav:"NavBarItems_nav__24lex",nav_list:"NavBarItems_nav_list__bcUv2",nav_list_items:"NavBarItems_nav_list_items__1Bl2g",activeLink:"NavBarItems_activeLink__23YJX"}},24:function(e,t,a){e.exports={login_form:"Login_login_form__EGu74",segment:"Login_segment__EFhKg",login_input:"Login_login_input__3ASBO",login_button:"Login_login_button__rFlsg",login_label:"Login_login_label__33M7R",login_input_error:"Login_login_input_error__Ff_OJ",error:"Login_error__sUyu2",error_message:"Login_error_message__3zsHj"}},269:function(e,t,a){},27:function(e,t,a){e.exports={wrapper_description:"ProfileDescription_wrapper_description__259g-",description_avatar:"ProfileDescription_description_avatar__1yDgs",description_list_item:"ProfileDescription_description_list_item__3YCrb",description_namePerson:"ProfileDescription_description_namePerson__22bUq",status:"ProfileDescription_status__1R7YE",noInformation:"ProfileDescription_noInformation__1_2vh"}},273:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(30),i=a.n(r),c=a(16),o=a(18),u=a(7),l=a(5),j=a(11),d=a(12),p=a(4),b=a(29),f=a(3),g=a(1),_=function(e){return{isAuth:e.auth.isAuth}},h=a(6),m="ADD-MESSAGE",O="UPDATE-NEW-MESSAGE-TEXT",x={DataMessage:[{id:1,messages:"Hi"},{id:2,messages:"How are you?"},{id:3,messages:"Yo"}],DataChats:[{id:1,name:"Maks"},{id:2,name:"Dimych"},{id:3,name:"Karina"},{id:4,name:"Alex"},{id:5,name:"Philip"}],newMessageText:""},v=a(84),w=a.n(v),N=function(e){var t="/dialogs/"+e.id;return Object(g.jsx)("div",{className:w.a.chats,children:Object(g.jsx)(o.b,{to:t,className:w.a.chat_message,children:e.name})})},P=a(41),S=a.n(P),C=a(85),y=a.n(C),T=function(e){var t=e.messages;return Object(g.jsx)("div",{className:y.a.qad,children:Object(g.jsx)("p",{className:y.a.text_message,children:t})})},k=function(e){var t=e.DataMessage,a=e.DataChats,n=e.newMessageText,s=e.addMessage,r=e.messageChange,i=e.isAuth,c=t.map((function(e){return Object(g.jsx)(T,{messages:e.messages},e.id)})),o=a.map((function(e){return Object(g.jsx)(N,{id:e.id,name:e.name},e.id)}));return i?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:S.a.wrapper_dialogs,children:[Object(g.jsx)("div",{className:S.a.container_chats,children:o}),Object(g.jsx)("div",{className:S.a.container_message,children:Object(g.jsx)("div",{className:S.a.message,children:c})})]}),Object(g.jsxs)("form",{className:S.a.formMessage,onSubmit:function(e){e.preventDefault(),n?s():alert("\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0435")},children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;r(t)},className:S.a.inputMessage,value:n,placeholder:"Message..."}),Object(g.jsx)("button",{formTarget:"_self",type:"submit",className:S.a.buttonMessage,children:"Send Message"})]})]}):Object(g.jsx)(p.a,{to:"/login"})},D=Object(b.c)(Object(c.b)((function(e){var t=e.messagePage;return{DataMessage:t.DataMessage,DataChats:t.DataChats,newMessageText:t.newMessageText}}),{addMessage:function(){return{type:m}},messageChange:function(e){return{type:O,newSms:e}}}),(function(e){var t=function(t){Object(j.a)(n,t);var a=Object(d.a)(n);function n(){return Object(u.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(f.a)({},this.props)):Object(g.jsx)(p.a,{to:"/login"})}}]),n}(n.Component);return Object(c.b)(_)(t)}))(k),M=function(e){return e.usersPage.users},E=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},I=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.isFetching},L=function(e){return e.usersPage.followingInProgress},A=a(20),B=a.n(A),z=function(e){var t=e.children;return Object(g.jsxs)("nav",{className:B.a.nav,children:[Object(g.jsxs)("ul",{className:B.a.nav_list,children:[Object(g.jsx)("li",{className:B.a.nav_list_items,children:Object(g.jsx)(o.b,{to:"/profile",activeClassName:B.a.activeLink,children:"Profile"})}),Object(g.jsx)("li",{className:B.a.nav_list_items,children:Object(g.jsx)(o.b,{to:"/dialogs",activeClassName:B.a.activeLink,children:"Message"})}),Object(g.jsx)("li",{className:B.a.nav_list_items,children:Object(g.jsx)(o.b,{to:"/news",activeClassName:B.a.activeLink,children:"News"})}),Object(g.jsx)("li",{className:B.a.nav_list_items,children:Object(g.jsx)(o.b,{to:"/music",activeClassName:B.a.activeLink,children:"Music"})}),Object(g.jsx)("li",{className:B.a.nav_list_items,children:Object(g.jsx)(o.b,{to:"/settings",activeClassName:B.a.activeLink,children:"Settings"})}),Object(g.jsx)("li",{className:B.a.nav_list_items,children:Object(g.jsx)(o.b,{to:"/users",activeClassName:B.a.activeLink,children:"Users"})})]}),Object(g.jsx)("h3",{className:B.a.title,children:"Friends"}),t]})},G=a(65),R=a.n(G),H=a.p+"static/media/profileNoAvatar.22c31152.png",W=function(e){var t=e.users;return Object(g.jsx)(g.Fragment,{children:t.slice(0,3).map((function(e){return Object(g.jsxs)("div",{className:R.a.wrapper,children:[Object(g.jsx)("a",{href:"##",children:Object(g.jsx)("img",{className:R.a.avatar,src:null!=e.photos.small?e.photos.small:H,alt:""})}),Object(g.jsx)("div",{children:Object(g.jsx)("a",{href:"##",className:R.a.nickname,children:Object(g.jsx)(o.b,{to:"/profile/"+e.id,children:Object(g.jsx)("p",{children:e.name})})})})]},e.id)}))})},Y=function(e){e.DataFriends;var t=e.users;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(z,{children:Object(g.jsx)(W,{users:t})})})},q=Object(c.b)((function(e){return{DataFriends:e.siteBar.DataFriends,users:M(e)}}))(Y),X=a(8),J=a(10),K=a.n(J),V=a(23),Q=a(122).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"08d485b0-c172-4086-90b8-c2840267f674"}}),Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Q.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},$=function(e){return Q.get("profile/".concat(e))},ee=function(e){return Q.get("profile/status/".concat(e))},te=function(e){return Q.put("profile/status",{status:e})},ae=function(e){return Q.post("follow/"+e)},ne=function(e){return Q.delete("follow/"+e)},se=function(){return Q.get("auth/me")},re=function(e,t){return Q.post("auth/login",{email:e,password:t})},ie=function(){return Q.delete("auth/login")},ce="ADD-POST",oe="UPDATE-NEW-POST-TEXT",ue="SET_USERS_PROFILE",le="SET_STATUS",je={DataPost:[],newPostText:"",profile:null,status:""},de=function(e){return{type:le,status:e}},pe=a(27),be=a.n(pe),fe=a(25),ge=function(e){var t=Object(n.useState)(!1),a=Object(fe.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(e.status),c=Object(fe.a)(i,2),o=c[0],u=c[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);var l=function(){s||r(!0),s&&(r(!1),e.updateStatus(o))};return Object(g.jsxs)(g.Fragment,{children:[!s&&Object(g.jsx)("span",{onClick:l,children:e.status||"_-_-_-_"}),s&&Object(g.jsx)("input",{autoFocus:!0,type:"text",onBlur:l,onChange:function(e){u(e.currentTarget.value)},value:o})]})},_e=function(e){var t=e.profile,a=e.status,n=e.updateStatus,s=Object(g.jsx)("span",{className:be.a.noInformation,children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0435\u0442\u0443"});return Object(g.jsxs)("div",{className:be.a.wrapper_description,children:[Object(g.jsx)("img",{src:t.photos.large?t.photos.large:H,alt:"",className:be.a.description_avatar}),Object(g.jsxs)("div",{className:be.a.description_text,children:[Object(g.jsx)("h2",{className:be.a.description_namePerson,children:t.fullName.toUpperCase()}),Object(g.jsxs)("ul",{className:be.a.description_list,children:[Object(g.jsxs)("li",{className:be.a.description_list_item,children:["GitHub: ",t.contacts.github?Object(g.jsx)("a",{href:"##",children:t.contacts.github}):s]}),Object(g.jsxs)("li",{className:be.a.description_list_item,children:["Facebook: ",Object(g.jsx)("a",{href:"##",children:t.contacts.facebook?t.contacts.facebook:s})]}),Object(g.jsxs)("li",{className:be.a.description_list_item,children:["Vk: ",Object(g.jsx)("a",{href:"##",children:t.contacts.vk?t.contacts.vk:s})]}),Object(g.jsxs)("li",{className:be.a.description_list_item,children:["Status:"," ",Object(g.jsx)("span",{className:be.a.status,children:Object(g.jsx)(ge,{status:a,updateStatus:n})})]})]})]})]})},he=a(47),me=a.n(he),Oe=a(66),xe=a.n(Oe),ve=function(e){var t=e.profile,a=e.post;return Object(g.jsxs)("div",{className:xe.a.post,children:[Object(g.jsx)("img",{alt:"",className:xe.a.post_avatar,src:t.photos.large?t.photos.large:H}),Object(g.jsx)("p",{className:xe.a.post_text,children:a})]})},we=function(e){var t=e.DataPost,a=e.newPostText,n=e.addPost,s=e.updateNewPostText,r=e.profile,i=t.map((function(e){return Object(g.jsx)(ve,{profile:r,post:e.post},e.id)}));return Object(g.jsxs)("div",{className:me.a.wrapper,children:[Object(g.jsx)("h3",{className:me.a.title,children:"My posts"}),Object(g.jsxs)("form",{className:me.a.formMyPost,onSubmit:function(e){e.preventDefault(),a?n():alert("\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0435")},children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;s(t)},className:me.a.input,value:a,placeholder:"Post..."}),Object(g.jsx)("button",{formTarget:"_self",type:"submit",className:me.a.button,children:"Send"})]}),Object(g.jsx)("div",{children:i})]})},Ne=a(86),Pe=a.n(Ne),Se=a.p+"static/media/BackgroundProfile.7d597e86.jpg";function Ce(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:Pe.a.background_profile,children:Object(g.jsx)("img",{alt:"",className:Pe.a.background_profile_img,src:Se})})})}var ye=a(87),Te=a.n(ye),ke=a.p+"static/media/preloader.7ddbab49.svg",De=function(){return Object(g.jsx)("div",{className:Te.a.container_preloader,children:Object(g.jsx)("img",{className:Te.a.preloader,src:ke,alt:""})})},Me=function(e){var t=e.DataPost,a=e.newPostText,n=e.profile,s=e.addPost,r=e.updateNewPostText,i=e.status,c=e.updateStatus;return n?Object(g.jsxs)("div",{children:[Object(g.jsx)(Ce,{}),Object(g.jsx)(_e,{profile:n,status:i,updateStatus:c}),Object(g.jsx)(we,{DataPost:t,profile:n,newPostText:a,updateNewPostText:r,addPost:s})]}):Object(g.jsx)(De,{})},Ee=Object(b.c)(Object(c.b)((function(e){var t=e.profilePage,a=t.DataPost,n=t.newPostText;return{profile:t.profile,DataPost:a,newPostText:n,status:t.status,id:e.auth.id}}),{addPost:function(){return{type:ce}},updateNewPostText:function(e){return{type:oe,newText:e}},getUsers:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(a){var n;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(e);case 2:n=t.sent,a((s=n.data,{type:ue,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(a){var n;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(e);case 2:n=t.sent,a(de(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(a){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(e);case 2:0===t.sent.data.resultCode&&a(de(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),p.f)((function(e){var t=e.getStatus,a=e.getUsers,s=e.updateStatus,r=e.id,i=Object(X.a)(e,["getStatus","getUsers","updateStatus","id"]),c=i.match.params.userId;return c||(c=r)||i.history.push("/login"),Object(n.useEffect)((function(){a(c),t(c)}),[c,t,a]),Object(g.jsx)("div",{children:Object(g.jsx)(Me,Object(f.a)(Object(f.a)({},i),{},{updateStatus:s}))})})),Ue=a(289),Ie=function(e){for(var t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,s=e.onPageChanged,r=Math.ceil(t/a),i=[],c=1;c<=r;c++)i.push(c);return Object(g.jsx)(Ue.a,{count:i.length,onChange:function(e,t){s(t)},siblingCount:3,color:"primary",defaultPage:n})},Fe=a(37),Le=a.n(Fe);function Ae(e){var t=e.user,a=e.follow,n=e.unfollow,s=e.followingInProgress;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("section",{className:Le.a.sec,children:Object(g.jsx)("div",{className:Le.a.card,children:Object(g.jsxs)("div",{className:Le.a.content,children:[Object(g.jsxs)("div",{className:Le.a.imgText,children:[Object(g.jsx)("div",{className:Le.a.imgBx,children:Object(g.jsx)(o.b,{to:"/profile/"+t.id,className:Le.a.img_user,children:Object(g.jsx)("img",{src:null!=t.photos.small?t.photos.small:H,alt:""})})}),Object(g.jsx)(o.b,{to:"/profile/"+t.id,children:Object(g.jsx)("h3",{children:t.name})}),Object(g.jsx)("span",{children:t.status})]}),t.followed?Object(g.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){return n(t.id)},className:Le.a.button,children:"UNFOLLOW"}):Object(g.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){return a(t.id)},className:Le.a.button,children:"FOLLOW"})]})})})})}var Be=a(88),ze=a.n(Be),Ge=function(e){var t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,s=e.users,r=e.onPageChanged,i=e.follow,c=e.unfollow,o=e.followingInProgress;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:ze.a.wrapper_pagination,children:Object(g.jsx)(Ie,{currentPage:n,onPageChanged:r,pageSize:a,totalUsersCount:t})}),Object(g.jsx)("div",{className:ze.a.grid_container,children:s.map((function(e){return Object(g.jsx)(Ae,{user:e,follow:i,unfollow:c,followingInProgress:o},e.id)}))})]})},Re=function(e,t,a,n){return e.map((function(e){return e[a]===t?Object(f.a)(Object(f.a)({},e),n):e}))},He="FOLLOW",We="UNFOLLOW",Ye="SET_USERS",qe="SET_CURRENT_PAGE",Xe="SET_TOTAL_USERS_COUNT",Je="TOGGLE_IS_FETCHING",Ke="TOGGLE_IS_FOLLOWING_PROGRESS",Ve={users:[],pageSize:6,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Qe=function(e){return{type:He,userId:e}},Ze=function(e){return{type:We,userId:e}},$e=function(e){return{type:qe,currentPage:e}},et=function(e){return{type:Je,isFetching:e}},tt=function(e,t){return{type:Ke,isFetching:e,userId:t}},at=function(){var e=Object(V.a)(K.a.mark((function e(t,a,n,s){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(tt(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(s(a)),t(tt(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}(),nt={follow:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(a){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:at(a,e,ae,Qe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(a){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:at(a,e,ne,Ze);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:$e,getUsers:function(e,t){return function(){var a=Object(V.a)(K.a.mark((function a(n){var s;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(et(!0)),a.next=3,Z(e,t);case 3:s=a.sent,n((i=s.items,{type:Ye,users:i})),n($e(e)),n((r=s.totalCount,{type:Xe,count:r})),n(et(!1));case 8:case"end":return a.stop()}var r,i}),a)})));return function(e){return a.apply(this,arguments)}}()}},st=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var a=e.props;(0,a.getUsers)(t,a.pageSize)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){var e=this.props,t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,s=e.users,r=e.follow,i=e.unfollow,c=e.followingInProgress,o=this.onPageChanged;return Object(g.jsx)(g.Fragment,{children:this.props.isFetching?Object(g.jsx)(De,{}):Object(g.jsx)(Ge,{totalUsersCount:t,pageSize:a,currentPage:n,users:s,onPageChanged:o,follow:r,unfollow:i,followingInProgress:c})})}}]),a}(n.Component),rt=Object(c.b)((function(e){return{users:M(e),pageSize:E(e),totalUsersCount:U(e),currentPage:I(e),isFetching:F(e),followingInProgress:L(e)}}),nt)(st),it=function(){return Object(g.jsx)("div",{children:"Music"})},ct=function(){return Object(g.jsx)("div",{children:"News"})},ot=function(){return Object(g.jsx)("div",{children:"Settings"})},ut=a(32),lt=a(54),jt=a(24),dt=a.n(jt),pt=a(33),bt=a.n(pt),ft="SET_USER_DATA",gt={id:null,email:null,login:null,profile:null,isAuth:null},_t=function(e,t,a,n){return{type:ft,payload:{id:e,email:t,login:a,isAuth:n}}},ht=function(){return function(){var e=Object(V.a)(K.a.mark((function e(t){var a,n,s,r,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,s=n.id,r=n.email,i=n.login,t(_t(s,r,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},mt=a(69),Ot=mt.a().shape({email:mt.b().required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435").email("\u041d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0439 email"),password:mt.b().required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435").min(6,"M\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}),xt=Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}),{getLoginUser:function(e,t){return function(){var a=Object(V.a)(K.a.mark((function a(n){return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,re(e,t);case 2:0===a.sent.data.resultCode&&n(ht());case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,a=e.getLoginUser;return t?Object(g.jsx)(p.a,{to:"/profile"}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(lt.c,{initialValues:{email:"",password:""},validateOnBlur:!0,onSubmit:function(e,t){var n=t.setSubmitting;a(e.email,e.password),n(!1),e.email="",e.password=""},validationSchema:Ot,children:function(e){var t=e.values,a=e.errors,n=e.touched,s=e.isValid,r=e.handleChange,i=e.handleBlur,c=e.handleSubmit,o=e.dirty;return Object(g.jsxs)(lt.b,{onSubmit:c,className:dt.a.login_form,children:[Object(g.jsx)("div",{className:dt.a.segment,children:Object(g.jsx)("h1",{className:dt.a.title_login,children:"Sign up"})}),Object(g.jsxs)("label",{className:dt.a.login_label,children:[Object(g.jsx)(lt.a,{className:bt()(dt.a.login_input,Object(ut.a)({},dt.a.login_input_error,a.email)),type:"email",name:"email",onChange:r,onBlur:i,value:t.email,placeholder:"Email"}),n.email&&a.email&&Object(g.jsx)("p",{className:dt.a.error,children:a.email})]}),Object(g.jsxs)("label",{className:dt.a.login_label,children:[Object(g.jsx)(lt.a,{className:bt()(dt.a.login_input,Object(ut.a)({},dt.a.login_input_error,a.password)),type:"password",name:"password",onChange:r,onBlur:i,value:t.password,placeholder:"Password"}),n.password&&a.password&&Object(g.jsx)("p",{className:dt.a.error,children:a.password})]}),Object(g.jsx)("button",{className:dt.a.login_button,type:"submit",disabled:!s&&!o,children:"Log in"})]})}})})})),vt=a(67),wt=a(68),Nt=a.n(wt),Pt=function(){return Object(g.jsx)("div",{className:bt()(Nt.a.btn_auth),children:Object(g.jsx)(vt.Button,{icon:"pi pi-user",label:"Log In",className:bt()()})})},St=function(){return Object(g.jsx)("div",{className:bt()(Nt.a.btn_auth),children:Object(g.jsx)(vt.Button,{label:"Submit",icon:"pi pi-check",className:bt()("p-button-success")})})},Ct=function(e){var t=e.logoutUser;return Object(g.jsx)("div",{className:bt()(Nt.a.btn_auth),children:Object(g.jsx)(vt.Button,{onClick:t,label:"Log Out",icon:"pi pi-times",className:bt()("p-button-danger")})})},yt=a.p+"static/media/logo.6e04e92a.png",Tt=a(53),kt=a.n(Tt),Dt=function(e){var t=e.isAuth,a=e.logoutUser,n=e.profile;return Object(g.jsxs)("header",{className:kt.a.header,children:[Object(g.jsx)("a",{href:"##",children:Object(g.jsx)("img",{src:yt,alt:"logo",className:kt.a.header_logo})}),Object(g.jsxs)("div",{className:kt.a.container,children:[Object(g.jsx)("img",{src:H,alt:"",className:kt.a.avatarHeader}),Object(g.jsx)(o.b,{to:"/login",children:t?Object(g.jsx)(St,{profile:n}):Object(g.jsx)(Pt,{})}),Object(g.jsx)(Ct,{logoutUser:a})]})]})},Mt=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(Dt,Object(f.a)({},this.props))}}]),a}(s.a.Component),Et=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,profile:e.profilePage.profile}}),{logoutUser:function(){return function(){var e=Object(V.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:0===e.sent.data.resultCode&&t(_t(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Mt),Ut=(a(269),a(270),a(271),a(272),"SET_INITIALIZED"),It={initialized:!1},Ft=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initialized?Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(Et,{}),Object(g.jsxs)("div",{className:"content-wrapper",children:[Object(g.jsx)("div",{className:"cont-nav",children:Object(g.jsx)(q,{})}),Object(g.jsxs)("div",{className:"cont-content",children:[Object(g.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(g.jsx)(Ee,{})}}),Object(g.jsx)(p.b,{path:"/dialogs",render:function(){return Object(g.jsx)(D,{})}}),Object(g.jsx)(p.b,{path:"/news",render:function(){return Object(g.jsx)(ct,{})}}),Object(g.jsx)(p.b,{path:"/music",render:function(){return Object(g.jsx)(it,{})}}),Object(g.jsx)(p.b,{path:"/users",render:function(){return Object(g.jsx)(rt,{})}}),Object(g.jsx)(p.b,{path:"/settings",render:function(){return Object(g.jsx)(ot,{})}}),Object(g.jsx)(p.b,{path:"/login",render:function(){return Object(g.jsx)(xt,{})}})]})]})]}):Object(g.jsx)(De,{})}}]),a}(n.Component),Lt=Object(b.c)(p.f,Object(c.b)((function(e){return{initialized:e.app.initialized}}),{initialize:function(){return function(e){var t=e(ht());Promise.all([t]).then((function(){e({type:Ut})}))}}}))(Ft),At=(a(273),a(128)),Bt={DataFriends:[{id:1,name:"Alex",avatar:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Al_Capone_in_1930.jpg"},{id:2,name:"Philip",avatar:"https://fs.kinomania.ru/file/person/8/22/82297fb03825734791f88e99cf913877.jpeg"},{id:3,name:"Karina",avatar:"https://mfa.gov.il/MFARUS/IsraelExperience/IsraelExperience/Natalie%20Portman%20large.jpg"}]},zt=Object(b.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:var a={id:e.DataPost.length,post:e.newPostText};return Object(f.a)(Object(f.a)({},e),{},{DataPost:[].concat(Object(h.a)(e.DataPost),[a]),newPostText:""});case oe:return Object(f.a)(Object(f.a)({},e),{},{newPostText:t.newText});case ue:return Object(f.a)(Object(f.a)({},e),{},{profile:t.profile});case le:return Object(f.a)(Object(f.a)({},e),{},{status:t.status});default:return e}},messagePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var a={id:4,messages:e.newMessageText};return Object(f.a)(Object(f.a)({},e),{},{DataMessage:[].concat(Object(h.a)(e.DataMessage),[a]),newMessageText:""});case O:return Object(f.a)(Object(f.a)({},e),{},{newMessageText:t.newSms});default:return e}},siteBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case He:return Object(f.a)(Object(f.a)({},e),{},{users:Re(e.users,t.userId,"id",{followed:!0})});case We:return Object(f.a)(Object(f.a)({},e),{},{users:Re(e.users,t.userId,"id",{followed:!1})});case Ye:return Object(f.a)(Object(f.a)({},e),{},{users:t.users});case qe:return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});case Xe:return Object(f.a)(Object(f.a)({},e),{},{totalUsersCount:t.count});case Je:return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case Ke:return Object(f.a)(Object(f.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(h.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ft:return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ut:return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}}}),Gt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c,Rt=Object(b.d)(zt,Gt(Object(b.a)(At.a)));window.store=Rt;var Ht=Rt;i.a.render(Object(g.jsx)(o.a,{basename:"/IT-Kamasutra-React-Project",children:Object(g.jsx)(c.a,{store:Ht,children:Object(g.jsx)(Lt,{})})}),document.getElementById("root"))},37:function(e,t,a){e.exports={card:"UsersCard_card__GCFJ7",imgText:"UsersCard_imgText__2Gs34",content:"UsersCard_content__YIQKq",imgBx:"UsersCard_imgBx__3N0w9",button:"UsersCard_button__ER2sB"}},41:function(e,t,a){e.exports={wrapper_dialogs:"Dialogs_wrapper_dialogs__k8Wes",container_chats:"Dialogs_container_chats__13QZ2",message:"Dialogs_message__wYTBP",formMessage:"Dialogs_formMessage__1JyPE",inputMessage:"Dialogs_inputMessage__2kzwL",buttonMessage:"Dialogs_buttonMessage__1Guab"}},47:function(e,t,a){e.exports={title:"MyPosts_title__2Wla6",formMyPost:"MyPosts_formMyPost__YBRA9",input:"MyPosts_input__3SSij",button:"MyPosts_button___isEH"}},53:function(e,t,a){e.exports={header:"Header_header__24Abm",header_logo:"Header_header_logo__1Wexy",container:"Header_container__2opC6",avatarHeader:"Header_avatarHeader__2vvmr"}},65:function(e,t,a){e.exports={wrapper:"NavBarFriends_wrapper__1OG5x",avatar:"NavBarFriends_avatar__3ODGS",nickname:"NavBarFriends_nickname__2sjQH"}},66:function(e,t,a){e.exports={post:"Post_post__32Crb",post_avatar:"Post_post_avatar__cgCmp",post_text:"Post_post_text__2vXXX"}},68:function(e,t,a){e.exports={btn_auth:"Btn_btn_auth__TRjot"}},84:function(e,t,a){e.exports={chats:"Chats_chats__8L5b5",chat_message:"Chats_chat_message__2fpWa"}},85:function(e,t,a){e.exports={qad:"Message_qad__eZABI",text_message:"Message_text_message__2GpdJ"}},86:function(e,t,a){e.exports={background_profile_img:"BackgroundProfile_background_profile_img__3YmEW"}},87:function(e,t,a){e.exports={container_preloader:"Preloader_container_preloader__3OHH7",preloader:"Preloader_preloader__1jCIk"}},88:function(e,t,a){e.exports={grid_container:"Users_grid_container__1sgqs",wrapper_pagination:"Users_wrapper_pagination__3ueC0"}}},[[274,1,2]]]);
//# sourceMappingURL=main.0c901ab1.chunk.js.map