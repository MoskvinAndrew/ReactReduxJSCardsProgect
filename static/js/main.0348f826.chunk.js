(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){e.exports={wrapper:"testMonst_wrapper__11llm",wrapperImg:"testMonst_wrapperImg__1ZuHf",block12wrapp:"testMonst_block12wrapp__8NO_d",block34wrapp:"testMonst_block34wrapp__epydJ",block56wrapp:"testMonst_block56wrapp__R3yzg",block1:"testMonst_block1__36hHa",dot1Scope:"testMonst_dot1Scope__2xqci",dot1ScopeSecond:"testMonst_dot1ScopeSecond__15cE2",block2:"testMonst_block2__naGge",dot2Scope:"testMonst_dot2Scope__1iZ4h",dot2ScopeSecond:"testMonst_dot2ScopeSecond__1F0Z-",block3:"testMonst_block3__1SGVw",dot3Scope:"testMonst_dot3Scope__1AEmL",dot3ScopeSecond:"testMonst_dot3ScopeSecond__2kyAm",block4:"testMonst_block4__30_7A",dot4Scope:"testMonst_dot4Scope__lAxlh",dot4ScopeSecond:"testMonst_dot4ScopeSecond__3jeyf",block5:"testMonst_block5__eOW1x",dot5Scope:"testMonst_dot5Scope__30lIF",dot5ScopeSecond:"testMonst_dot5ScopeSecond__3YJ8E",dot:"testMonst_dot__18yXg",dotSecond:"testMonst_dotSecond__2HZ73",arrow:"testMonst_arrow__1_Q8M",buttonContainer:"testMonst_buttonContainer__2CVYV"}},109:function(e,t,c){e.exports={notfound:"FourZeroFour_notfound__dMq5A",notfound_404:"FourZeroFour_notfound_404__Hysji"}},125:function(e,t,c){e.exports={nav:"nav_nav__lRXzC"}},126:function(e,t,c){e.exports={wraper:"testPage_wraper__3Ho8f"}},129:function(e,t,c){e.exports={wrapper:"login_wrapper__2bVrN",emailForm:"login_emailForm__6itRG"}},147:function(e,t,c){},168:function(e,t,c){},171:function(e,t,c){"use strict";c.r(t);var n,a=c(2),o=c(0),r=c(13),s=c.n(r),i=(c(147),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,228)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),o(e),r(e)}))}),l=c(22),d=c(11),u=c(76),j=c(123),b=c(7);!function(e){e.SET_ERROR="APP/SET_ERROR",e.SET_STATUS="APP/SET_STATUS",e.SET_IS_INITIALIZED="APP/SET_IS_INITIALIZED"}(n||(n={}));var p,_={status:"idle",error:null,isInitializedApp:!1},O=function(e){return{type:n.SET_ERROR,error:e}},A=function(e){return{type:n.SET_STATUS,status:e}},h=function(){return function(e){var t;e((t=!0,{type:n.SET_IS_INITIALIZED,isInitialized:t}))}},m={},x=c(124),S=c.n(x).a.create({withCredentials:!0,baseURL:"http://localhost:7542/2.0/"}),g=function(e){return S.post("auth/register",e)},f=function(e){return S.post("auth/forgot",{email:e.email,frome:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\">password recovery link: <a href='http://localhost:3000/#/newPassword/$token$'>link</a></div>"})},v=function(e){return S.post("auth/set-new-password",e)},k=function(e){return S.post("auth/login",e)},w=function(){return S.get("/cards/pack")},E={success:!1},I=function(e){return{type:"newPass/SET_SUCCESS",success:e}},N={success:!1},T=function(e){return{type:"forgot/SET_SUCCESS",success:e}};!function(e){e.SET_IS_SIGNED_UP="REGISTER/SET_IS_SIGNED_UP",e.SET_ADDED_USER_DATA="REGISTER/SET_ADDED_USER_DATA"}(p||(p={}));var P,y={userData:{},isSignedUp:!1},C=function(e){return function(t){t(A("loading")),g(e).then((function(e){var c;t((c=!0,{type:p.SET_IS_SIGNED_UP,value:c})),t(A("succeed"))})).catch((function(e){t(O(e)),t(A("failed"))}))}},D={profileData:{avatar:"",created:"",email:"",isAdmin:!1,name:"",publicCardPacksCount:0,rememberMe:!1,token:"",tokenDeathTime:0,updated:"",verified:!1,__v:0,_id:""}},R={isLoggedIn:!1,loginProcessInProgress:!1},M=function(e){return{type:"loginReducer/LOGIN_PROCESS_IN_PROGRESS",loginProcessInProgress:e}};!function(e){e.SET_DATA="PACKS/SET_DATA",e.SET_STATUS="APP/SET_STATUS",e.SET_IS_INITIALIZED="APP/SET_IS_INITIALIZED"}(P||(P={}));var B={cardPacks:[],cardPacksTotalCount:0,maxCardsCount:25,minCardsCount:0,page:1,pageCount:4,token:"",tokenDeathTime:0},U=function(){return function(e){w().then((function(t){var c;e((c=t.data,{type:P.SET_DATA,setData:c}))}))}},L=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"isAuth":default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.SET_ADDED_USER_DATA:return e;case p.SET_IS_SIGNED_UP:return Object(b.a)(Object(b.a)({},e),{},{isSignedUp:t.value});default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"forgot/SET_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{success:t.success});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"newPass/SET_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{success:t.success});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_ERROR:return Object(b.a)(Object(b.a)({},e),{},{error:t.error});case n.SET_STATUS:return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case n.SET_IS_INITIALIZED:return Object(b.a)(Object(b.a)({},e),{},{isInitializedApp:t.isInitialized});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loginReducer/CHANGE_LOGIN_STATUS":return Object(b.a)(Object(b.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"loginReducer/LOGIN_PROCESS_IN_PROGRESS":return Object(b.a)(Object(b.a)({},e),{},{loginProcessInProgress:t.loginProcessInProgress});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profileReducer/SET_PROFILE_DATA":return Object(b.a)(Object(b.a)({},e),{},{profileData:t.profileData});default:return e}},packsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.SET_DATA:return Object(b.a)(Object(b.a)(Object(b.a)({},e),t.setData),{},{cardPacks:t.setData.cardPacks});default:return e}}}),F=Object(u.d)(L,Object(u.a)(j.a));window.store=F;var z=F,G=(c(168),c(222)),Z=c(125),V=c.n(Z),q=function(){return Object(a.jsxs)("div",{className:V.a.nav,children:[Object(a.jsx)(l.b,{to:"/registration",children:"Registration"}),Object(a.jsx)(l.b,{to:"/login",children:"Login"}),Object(a.jsx)(l.b,{to:"/profile",children:"Profile"}),Object(a.jsx)(l.b,{to:"/packs",children:"Packs of cards"}),Object(a.jsx)(l.b,{to:"/passwordRecovery",children:"Reset Password"}),Object(a.jsx)(l.b,{to:"/newPassword",children:"New password"}),Object(a.jsx)(l.b,{to:"/testPage",children:"TestPage"})]})},J=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(q,{})})},W=c(17),X=c(126),H=c.n(X),K=c(63),Q=c.n(K),Y=function(e){var t="".concat(Q.a.inputSelectorBlue);return t="blue"===e.color?"".concat(Q.a.inputSelectorBlue):"black"===e.color?"".concat(Q.a.inputSelectorBlack):"",Object(a.jsx)("div",{className:Q.a.wrapper,children:Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:Q.a.group,children:[Object(a.jsx)("input",{type:"text",required:!0,className:t,onKeyPress:function(t){if(13===t.charCode){var c=t.currentTarget.value;e.onEnterClick(c)}}}),Object(a.jsx)("span",{className:Q.a.bar}),Object(a.jsx)("label",{children:e.inputName})]})})})},$=c(30),ee=c.n($),te=function(e){var t="".concat(ee.a.button_algolia),c="".concat(ee.a.button_algoliaBlue);c="blue"===e.color?"".concat(ee.a.button_algolia," ").concat(ee.a.button_algoliaBlue):"black"===e.color?"".concat(ee.a.button_algolia," ").concat(ee.a.button_algoliaBlack):"".concat(ee.a.button_algolia),t="small"===e.size?"".concat(ee.a.button_algolia," ").concat(ee.a.button_algoliaSmall):"medium"===e.size?"".concat(ee.a.button_algolia," ").concat(ee.a.button_algoliaMid):"".concat(ee.a.button_algolia);return Object(a.jsx)("div",{className:t+" "+c,onClick:function(){e.onClick()},"aria-disabled":e.disabled,children:e.buttonName})},ce=c(24),ne=c.n(ce),ae=function(e){var t="".concat(ne.a.check),c="".concat(ne.a.check);return c="blue"===e.color?"".concat(ne.a.check," ").concat(ne.a.checkBlue," ").concat(ne.a.checkBlue):"black"===e.color?"".concat(ne.a.checkBlack," ").concat(ne.a.checkBlack," ").concat(ne.a.checkBlue):"".concat(ne.a.check),t="big"===e.size?"".concat(ne.a.check," ").concat(ne.a.checkBig):"small"===e.size?"".concat(ne.a.check," ").concat(ne.a.checkSmall):"".concat(ne.a.check),Object(a.jsxs)("div",{className:ne.a.box,children:[Object(a.jsx)("input",{id:"one",type:"checkbox"}),Object(a.jsx)("span",{className:c+" "+t}),Object(a.jsx)("label",{htmlFor:"one",style:{fontSize:"small"===e.size?"10px":"big"===e.size?"26px":"20px"},children:e.boxName})]})},oe=function(){return Object(a.jsxs)("div",{className:H.a.wraper,children:[Object(a.jsx)(Y,{inputName:"SuperInput",onEnterClick:function(){}}),Object(a.jsx)(te,{buttonName:"SuperButton",onClick:function(){}}),Object(a.jsx)(ae,{boxName:"SuperCheckBox"})]})},re=function(){var e=Object(d.c)((function(e){return e.login.isLoggedIn})),t=Object(d.c)((function(e){return e.profilePage.profileData}));return e?Object(a.jsxs)("div",{children:["It's profile component:",Object(a.jsxs)("div",{children:[" name:",t.name]}),Object(a.jsxs)("div",{children:["isAdmin:",t.isAdmin]}),Object(a.jsxs)("div",{children:[" id:",t._id]}),Object(a.jsxs)("div",{children:[" publicCardPacksCount:",t.publicCardPacksCount]}),Object(a.jsxs)("div",{children:[" email:",t.email]}),Object(a.jsxs)("div",{children:["created:",t.created]}),Object(a.jsxs)("div",{children:[" avatar:",t.avatar]})]}):Object(a.jsx)(W.a,{to:"/login"})},se=c(48),ie=c(26),le=c.n(ie),de=function(){var e=Object(d.b)(),t=Object(se.a)({initialValues:{email:""},onSubmit:function(t){var c;e((c=t,function(e){e(A("loading")),f(c).then((function(t){e(T(!0))})).catch((function(t){e(O(t))}))}))}});return Object(a.jsx)("div",{className:le.a.form__wrapper,children:Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)("h1",{children:"Forgot account"}),Object(a.jsxs)("div",{className:le.a.form__content,children:[Object(a.jsxs)("div",{className:le.a.form__content_email,children:[Object(a.jsx)("h4",{children:"email"}),Object(a.jsx)("input",Object(b.a)({type:"email"},t.getFieldProps("email")))]}),Object(a.jsx)("div",{className:le.a.form__content_btn,children:Object(a.jsx)("button",{type:"submit",children:"SEND EMAIl"})})]})]})})},ue=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(de,{})})},je=function(){var e=Object(d.b)(),t=Object(se.a)({initialValues:{password:"",resetPasswordToken:""},onSubmit:function(t){var c;e((c=t,function(e){e(A("loading")),v(c).then((function(t){e(I(!0))})).catch((function(t){e(O(t))}))}))}});return Object(a.jsx)("div",{className:le.a.form__wrapper,children:Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)("h1",{children:"New Password page"}),Object(a.jsxs)("div",{className:le.a.form__content,children:[Object(a.jsxs)("div",{className:le.a.form__content_password,children:[Object(a.jsx)("h4",{children:"password"}),Object(a.jsx)("input",Object(b.a)({type:"password"},t.getFieldProps("password")))]}),Object(a.jsxs)("div",{className:le.a.form__content_password,children:[Object(a.jsx)("h4",{children:"\u0441onfirm password"}),Object(a.jsx)("input",Object(b.a)({type:"password"},t.getFieldProps("resetPasswordToken")))]}),Object(a.jsx)("div",{className:le.a.form__content_btn,children:Object(a.jsx)("button",{type:"submit",children:"SEND PASSWORD"})})]})]})})},be=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(je,{})})},pe=c(109),_e=c.n(pe),Oe=c(111),Ae=c(10),he=c.n(Ae),me=c.p+"static/media/modPicture.a8e8e881.png",xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAD6CAQAAACxZLJ4AAABjUlEQVR42u3a0U3CUBQG4DNCN+kGlA1kgk5CooNUXYDAQIo+m2iZAGsKD0SN9t5CTUy+72zw509O7+2NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+lVnUcX2YOipxcL4q1tFG92naWKsX4xXRxP5LqU5zF4WIyFfG44+lOs5TlGIit1avA7U6LkXVImsJPiTUqp+thUi6JrFW/TTiIvUkuM8oVueESJpVVq26WImMFC+ZxWpFxrB5Zq36mYuNIfWIYl2JjSHLEcVaig3FwirExztc+LphJzJSuCBlElW8+6XDFPyEZhLF4CO/02M/z2bIUMZb0me7h35kV2s7UKtntWLcQrz95TP+3hLknBPiJnbfFuDGSZBLmMUibg6zcMsOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8mQ+NlwAmmeM97wAAAABJRU5ErkJggg==",Se=c.p+"static/media/sketched-left-arrow.cd8ab34f.png",ge=function(){var e=Object(o.useState)("".concat(he.a.dot)),t=Object(Oe.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)("".concat(he.a.dotSecond)),s=Object(Oe.a)(r,2),i=s[0],l=s[1],d=function(e,t){n(e),l(t)};return Object(a.jsxs)("div",{className:he.a.wrapper,children:[Object(a.jsxs)("div",{className:he.a.block12wrapp,children:[Object(a.jsx)("div",{className:he.a.block1,onMouseOver:function(){return d("".concat(he.a.dot1Scope),"".concat(he.a.dot1ScopeSecond))},children:Object(a.jsxs)("div",{className:he.a.arrow,children:[" ",Object(a.jsx)("div",{className:he.a.buttonContainer,children:Object(a.jsx)(te,{buttonName:"HOME",onClick:function(){},color:"black",size:"small"})}),Object(a.jsx)("img",{alt:"arrow",src:Se})]})}),Object(a.jsx)("div",{className:he.a.block2,onMouseOver:function(){return d("".concat(he.a.dot2Scope),"".concat(he.a.dot2ScopeSecond))}})]}),Object(a.jsxs)("div",{className:he.a.block34wrapp,children:[Object(a.jsxs)("div",{className:he.a.wrapperImg,onMouseOver:function(){return d("".concat(he.a.dot),"".concat(he.a.dotSecond))},children:[Object(a.jsx)("img",{src:me}),Object(a.jsx)("img",{className:c,src:xe}),Object(a.jsx)("img",{className:i,src:xe})]}),Object(a.jsx)("div",{className:he.a.block3,onMouseOver:function(){return d("".concat(he.a.dot3Scope),"".concat(he.a.dot3ScopeSecond))}})]}),Object(a.jsxs)("div",{className:he.a.block56wrapp,children:[Object(a.jsx)("div",{className:he.a.block4,onMouseOver:function(){return d("".concat(he.a.dot4Scope),"".concat(he.a.dot4ScopeSecond))}}),Object(a.jsx)("div",{className:he.a.block5,onMouseOver:function(){return d("".concat(he.a.dot5Scope),"".concat(he.a.dot5ScopeSecond))}})]})]})},fe=function(){return Object(a.jsxs)("div",{className:_e.a.container,children:[Object(a.jsx)("div",{children:Object(a.jsx)(ge,{})}),Object(a.jsxs)("div",{className:_e.a.notfound,children:[Object(a.jsx)("h1",{children:"404"}),Object(a.jsx)("h2",{children:"Page not found"}),Object(a.jsx)("p",{children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."})]})]})},ve=c(129),ke=c.n(ve),we=c(207),Ee=c(225),Ie=c(211),Ne=c(212),Te=c(223),Pe=c(226),ye=c(224),Ce=c(214),De=function(){var e=Object(d.c)((function(e){return e.login.loginProcessInProgress})),t=Object(d.c)((function(e){return e.login.isLoggedIn})),c=Object(d.b)(),n=Object(se.a)({validate:function(e){return e.email?e.password?void 0:{password:"password is required"}:{email:"email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e,t){var n,a=t.resetForm;c((n=e,function(e){e(M(!0)),k(n).then((function(t){e({type:"profileReducer/SET_PROFILE_DATA",profileData:t.data}),e({type:"loginReducer/CHANGE_LOGIN_STATUS",isLoggedIn:!0})})).catch((function(e){e.response?e.response.data.error:e.message})).finally((function(){e(M(!1))}))})),console.log(e),a({values:{email:"",password:"",rememberMe:!1}}),e={email:"",password:"",rememberMe:!1}}});return t?Object(a.jsx)(W.a,{to:"/profile"}):Object(a.jsx)("div",{className:ke.a.wrapper,children:Object(a.jsx)(we.a,{container:!0,justify:"center",children:Object(a.jsx)(we.a,{item:!0,xs:4,children:Object(a.jsx)("form",{onSubmit:n.handleSubmit,children:Object(a.jsxs)(Ee.a,{children:[Object(a.jsxs)(Ie.a,{children:[Object(a.jsxs)("p",{children:["To log in get registered",Object(a.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(a.jsx)("p",{children:"or use common test account credentials:"}),Object(a.jsx)("p",{children:"Email: nya-admin@nya.nya"}),Object(a.jsx)("p",{children:"Password: 1qazxcvBG"}),Object(a.jsx)("h1",{children:"Signup"})]}),Object(a.jsxs)(Ne.a,{children:[Object(a.jsx)(Te.a,Object(b.a)({type:"email",label:"Email"},n.getFieldProps("email"))),n.errors.email?n.errors.email:null,Object(a.jsx)(Te.a,{id:"password",label:"Password",margin:"normal",onChange:n.handleChange,value:n.values.password}),n.errors.password?n.errors.password:null,Object(a.jsx)(Pe.a,{label:"Remember me",control:Object(a.jsx)(ye.a,Object(b.a)(Object(b.a)({},n.getFieldProps("rememberMe")),{},{checked:n.values.rememberMe}))}),Object(a.jsx)(Ce.a,{type:"submit",variant:"contained",color:"primary",disabled:e,children:"Login"}),Object(a.jsx)("h4",{children:Object(a.jsx)("a",{children:"Forgot password?"})})]})]})})})})})},Re=c(101),Me=Re.a().shape({password:Re.b().min(7,"7 char or more").max(50,"password is too long").required("Password is Required"),email:Re.b().email("Invalid email").required("email is Required")}),Be=function(){var e=Object(d.b)(),t=Object(se.a)({initialValues:{email:"",password:""},validationSchema:Me,onSubmit:function(t){e(C(t))}}),c={color:"red",margin:"5px 0px"};return Object(a.jsx)("div",{className:le.a.form__content,children:Object(a.jsx)(we.a,{container:!0,justify:"center",children:Object(a.jsx)(we.a,{item:!0,xs:4,children:Object(a.jsx)("form",{onSubmit:t.handleSubmit,children:Object(a.jsxs)(Ee.a,{size:"medium",children:[Object(a.jsx)(Ie.a,{component:"h2",children:Object(a.jsx)("h2",{children:"Create account"})}),Object(a.jsxs)(Ne.a,{children:[Object(a.jsx)(Te.a,Object(b.a)({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.errors.email&&t.touched.email?Object(a.jsx)("div",{style:c,children:t.errors.email}):null,Object(a.jsx)(Te.a,Object(b.a)({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.errors.password&&t.touched.password?Object(a.jsx)("div",{style:c,children:t.errors.password}):null,Object(a.jsx)(Ce.a,{type:"submit",variant:"contained",color:"primary",children:"Sign Up"})]})]})})})})})},Ue=function(){var e=Object(d.c)((function(e){return e.register.isSignedUp})),t=Object(d.c)((function(e){return e.login.isLoggedIn}));return e?Object(a.jsx)(W.a,{to:"/login"}):t?Object(a.jsx)(W.a,{to:"/profile"}):Object(a.jsx)("div",{className:le.a.registration,children:Object(a.jsx)(Be,{})})},Le=c(215),Fe=c(217),ze=c(221),Ge=c(220),Ze=c(216),Ve=c(218),qe=c(219),Je=c(213),We=Object(Le.a)({table:{minWidth:650}}),Xe=function(e){var t=We(),c=Object(d.c)((function(e){return e.login.isLoggedIn})),n=Object(d.c)((function(e){return e.packsPage.cardPacks})),r=Object(d.b)();return Object(o.useEffect)((function(){r(U())}),[c]),c?Object(a.jsx)(Ze.a,{component:Je.a,children:Object(a.jsxs)(Fe.a,{className:t.table,"aria-label":"simple table",children:[Object(a.jsx)(Ve.a,{children:Object(a.jsxs)(qe.a,{children:[Object(a.jsx)(Ge.a,{children:"Name"}),Object(a.jsx)(Ge.a,{align:"center",children:"CardsCount"}),Object(a.jsx)(Ge.a,{align:"center",children:"Update"}),Object(a.jsx)(Ge.a,{align:"center",children:"link"}),Object(a.jsx)(Ge.a,{align:"center",children:Object(a.jsx)(Ce.a,{children:"add"})}),Object(a.jsx)(Ge.a,{align:"center"})]})}),Object(a.jsx)(ze.a,{children:n.map((function(e){return Object(a.jsxs)(qe.a,{children:[Object(a.jsx)(Ge.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(Ge.a,{align:"center",children:e.cardsCount}),Object(a.jsx)(Ge.a,{align:"center",children:e.updated}),Object(a.jsx)(Ge.a,{align:"center",children:e.path}),Object(a.jsxs)(Ge.a,{align:"center",children:[Object(a.jsx)("button",{children:"add"}),Object(a.jsx)("button",{children:"delete"})]}),Object(a.jsx)(Ge.a,{align:"center",children:Object(a.jsx)(l.b,{to:"/cards",children:"cards"})})]},e._id)}))})]})}):Object(a.jsx)(W.a,{to:"/login"})},He=function(){return Object(a.jsxs)(W.d,{children:[Object(a.jsx)(W.b,{exact:!0,path:"/registration",render:function(){return Object(a.jsx)(Ue,{})}}),Object(a.jsx)(W.b,{exact:!0,path:"/login",render:function(){return Object(a.jsx)(De,{})}}),Object(a.jsx)(W.b,{exact:!0,path:"/profile",render:function(){return Object(a.jsx)(re,{})}}),Object(a.jsx)(W.b,{exact:!0,path:"/packs",render:function(){return Object(a.jsx)(Xe,{})}}),Object(a.jsx)(W.b,{exact:!0,path:"/passwordRecovery",render:function(){return Object(a.jsx)(ue,{})}}),Object(a.jsx)(W.b,{exact:!0,path:"/newPassword",render:function(){return Object(a.jsx)(be,{})}}),Object(a.jsx)(W.b,{exact:!0,path:"/testPage",render:function(){return Object(a.jsx)(oe,{})}}),Object(a.jsx)(W.b,{exact:!0,path:"/404",render:function(){return Object(a.jsx)(fe,{})}})]})},Ke=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(J,{}),Object(a.jsx)(He,{})]})},Qe=function(){var e=Object(d.c)((function(e){return e.app.isInitializedApp})),t=Object(d.c)((function(e){return e.app.status})),c=Object(d.b)();return Object(o.useEffect)((function(){c(h())}),[]),e&&"loading"!=t?Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(Ke,{})}):Object(a.jsx)("div",{className:"circular__progress",children:Object(a.jsx)(G.a,{})})};s.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(d.a,{store:z,children:Object(a.jsx)(Qe,{})})}),document.getElementById("root")),i()},24:function(e,t,c){e.exports={box:"ScheckBox_box__2dRrY",check:"ScheckBox_check__3RIvg",checkBlue:"ScheckBox_checkBlue__32RTZ",checkBlack:"ScheckBox_checkBlack__2nIRo",checkBig:"ScheckBox_checkBig__Bz2jD",checkSmall:"ScheckBox_checkSmall__13Tas"}},26:function(e,t,c){e.exports={registration:"registration_registration__29kbs",form__wrapper:"registration_form__wrapper__3hNNy",form__content:"registration_form__content__3dMw0",form__content_email:"registration_form__content_email__1E18N",form__content_password:"registration_form__content_password__2LECO",form__content_btn:"registration_form__content_btn__3KOQr"}},30:function(e,t,c){e.exports={button_algolia:"SuperButton_button_algolia__uC1fU",button_algoliaSmall:"SuperButton_button_algoliaSmall__1OUWO",button_algoliaMid:"SuperButton_button_algoliaMid__1_aw8",button_algoliaBlue:"SuperButton_button_algoliaBlue__204iX",button_algoliaBlack:"SuperButton_button_algoliaBlack__3eND7"}},63:function(e,t,c){e.exports={wrapper:"SuperInput_wrapper__3zDNP",group:"SuperInput_group__3XOy1",bar:"SuperInput_bar__8kcAr",inputSelectorBlue:"SuperInput_inputSelectorBlue__2cZ9t",inputSelectorBlack:"SuperInput_inputSelectorBlack__1KSMZ"}}},[[171,1,2]]]);
//# sourceMappingURL=main.0348f826.chunk.js.map