(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,c){e.exports={wrapper:"testMonst_wrapper__2mYWc",wrapperImg:"testMonst_wrapperImg__jNVZv",block12wrapp:"testMonst_block12wrapp__2Nlt1",block34wrapp:"testMonst_block34wrapp__3OIsB",block56wrapp:"testMonst_block56wrapp__frc0H",block1:"testMonst_block1__oiGti",dot1Scope:"testMonst_dot1Scope__1AUS8",dot1ScopeSecond:"testMonst_dot1ScopeSecond__2jcT9",block2:"testMonst_block2__3Or-T",dot2Scope:"testMonst_dot2Scope__1MjFF",dot2ScopeSecond:"testMonst_dot2ScopeSecond__l5Qak",block3:"testMonst_block3__2m_S_",dot3Scope:"testMonst_dot3Scope__9rZgL",dot3ScopeSecond:"testMonst_dot3ScopeSecond__1Qlmf",block4:"testMonst_block4__2t86T",dot4Scope:"testMonst_dot4Scope__1mZoB",dot4ScopeSecond:"testMonst_dot4ScopeSecond__2HsXj",block5:"testMonst_block5__3KGIZ",dot5Scope:"testMonst_dot5Scope__2mhAa",dot5ScopeSecond:"testMonst_dot5ScopeSecond__2Tvg0",dot:"testMonst_dot__1N-iU",dotSecond:"testMonst_dotSecond__3PGIb",arrow:"testMonst_arrow__1tKct",buttonContainer:"testMonst_buttonContainer__1NSTx"}},116:function(e,t,c){e.exports={notfound:"FourZeroFour_notfound__2sJff",notfound_404:"FourZeroFour_notfound_404__3jmra"}},132:function(e,t,c){e.exports={nav:"nav_nav__1b4T_"}},133:function(e,t,c){e.exports={wraper:"testPage_wraper__1vmva"}},155:function(e,t,c){},181:function(e,t,c){},183:function(e,t,c){"use strict";c.r(t);var n,a=c(2),o=c(0),r=c(13),s=c.n(r),i=(c(155),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,242)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),o(e),r(e)}))}),l=c(18),A=c(8),d=c(79),u=c(130),j=c(7),b=c(131),p=c.n(b).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),g=function(e){return p.post("auth/register",e)},O=function(e){return p.post("auth/forgot",{email:e.email,frome:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\">password recovery link: <a href='http://localhost:3000/#/newPassword/$token$'>link</a></div>"})},h=function(e){return p.post("auth/set-new-password",e)},m=function(e){return p.post("auth/login",e)},x=function(){return p.post("auth/me")},S=function(){return p.delete("auth/me")},f=function(){return p.get("cards/pack")},w=function(e){return p.post("cards/pack",{cardsPack:{name:e.name,path:e.path,grade:1,shots:2,rating:2,deckCover:"string",private:!1,type:"pack"}})},C=function(e){return p.delete("cards/pack?id=".concat(e))},k=function(e){return p.put("cards/pack",{cardsPack:{_id:e,name:"updated keker",path:"updated path",grade:1,shots:2,rating:2,deckCover:"string",private:!1,type:"pack"}})},_={profileData:{avatar:"",created:"",email:"",isAdmin:!1,name:"",publicCardPacksCount:0,rememberMe:!1,token:"",tokenDeathTime:0,updated:"",verified:!1,__v:0,_id:""}},I=function(e){return{type:"profileReducer/SET_PROFILE_DATA",profileData:e}},v={isLoggedIn:!1,loginProcessInProgress:!1},E=function(e){return{type:"loginReducer/CHANGE_LOGIN_STATUS",isLoggedIn:e}},B=function(e){return{type:"loginReducer/LOGIN_PROCESS_IN_PROGRESS",loginProcessInProgress:e}},D=c(17);!function(e){e.SET_ERROR="APP/SET_ERROR",e.SET_STATUS="APP/SET_STATUS",e.SET_IS_INITIALIZED="APP/SET_IS_INITIALIZED"}(n||(n={}));var M,G={status:"idle",error:null,isInitializedApp:!1},Q=function(e){return{type:n.SET_ERROR,error:e}},N=function(e){return{type:n.SET_STATUS,status:e}},y=function(e){return{type:n.SET_IS_INITIALIZED,isInitialized:e}},L={},R={success:!1},K=function(e){return{type:"newPass/SET_SUCCESS",success:e}},T={success:!1},J=function(e){return{type:"forgot/SET_SUCCESS",success:e}};!function(e){e.SET_IS_SIGNED_UP="REGISTER/SET_IS_SIGNED_UP",e.SET_ADDED_USER_DATA="REGISTER/SET_ADDED_USER_DATA"}(M||(M={}));var P,F={userData:{},isSignedUp:!1},W=function(e){return function(t){t(N("loading")),g(e).then((function(e){var c;t((c=!0,{type:M.SET_IS_SIGNED_UP,value:c})),t(N("succeed"))})).catch((function(e){t(N("succeed"));e.response?t(Q(e.response.data.error)):t(Q(e.message+", more details in the console"))}))}};!function(e){e.SET_DATA="PACKS/SET_DATA"}(P||(P={}));var q={cardPacks:[],cardPacksTotalCount:0,maxCardsCount:25,minCardsCount:0,page:1,pageCount:4,token:"",tokenDeathTime:0},U=function(){return function(e){f().then((function(t){var c;e((c=t.data,{type:P.SET_DATA,setData:c})),e(N("succeed"))})).catch((function(t){e(Q(t.message))}))}},Y=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"isAuth":default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.SET_ADDED_USER_DATA:return e;case M.SET_IS_SIGNED_UP:return Object(j.a)(Object(j.a)({},e),{},{isSignedUp:t.value});default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"forgot/SET_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{success:t.success});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"newPass/SET_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{success:t.success});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_ERROR:return Object(j.a)(Object(j.a)({},e),{},{error:t.error});case n.SET_STATUS:return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case n.SET_IS_INITIALIZED:return Object(j.a)(Object(j.a)({},e),{},{isInitializedApp:t.isInitialized});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loginReducer/CHANGE_LOGIN_STATUS":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"loginReducer/LOGIN_PROCESS_IN_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{loginProcessInProgress:t.loginProcessInProgress});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profileReducer/SET_PROFILE_DATA":return Object(j.a)(Object(j.a)({},e),{},{profileData:t.profileData});default:return e}},packsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.SET_DATA:return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.setData),{},{cardPacks:t.setData.cardPacks});default:return e}}}),H=Object(d.d)(Y,Object(d.a)(u.a));window.store=H;var z=H,Z=(c(181),c(233)),V=c(132),X=c.n(V),$=function(){return Object(a.jsxs)("div",{className:X.a.nav,children:[Object(a.jsx)(l.b,{to:"/registration",children:"Registration"}),Object(a.jsx)(l.b,{to:"/login",children:"Login"}),Object(a.jsx)(l.b,{to:"/profile",children:"Profile"}),Object(a.jsx)(l.b,{to:"/packs",children:"Packs of cards"}),Object(a.jsx)(l.b,{to:"/passwordRecovery",children:"Reset Password"}),Object(a.jsx)(l.b,{to:"/newPassword",children:"New password"}),Object(a.jsx)(l.b,{to:"/testPage",children:"TestPage"})]})},ee=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)($,{})})},te=c(133),ce=c.n(te),ne=c(66),ae=c.n(ne),oe=function(e){var t="".concat(ae.a.inputSelectorBlue);return t="blue"===e.color?"".concat(ae.a.inputSelectorBlue):"black"===e.color?"".concat(ae.a.inputSelectorBlack):"",Object(a.jsx)("div",{className:ae.a.wrapper,children:Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:ae.a.group,children:[Object(a.jsx)("input",{type:"text",required:!0,className:t,onKeyPress:function(t){if(13===t.charCode){var c=t.currentTarget.value;e.onEnterClick(c)}}}),Object(a.jsx)("span",{className:ae.a.bar}),Object(a.jsx)("label",{children:e.inputName})]})})})},re=c(31),se=c.n(re),ie=function(e){var t="".concat(se.a.button_algolia),c="".concat(se.a.button_algoliaBlue);c="blue"===e.color?"".concat(se.a.button_algolia," ").concat(se.a.button_algoliaBlue):"black"===e.color?"".concat(se.a.button_algolia," ").concat(se.a.button_algoliaBlack):"".concat(se.a.button_algolia),t="small"===e.size?"".concat(se.a.button_algolia," ").concat(se.a.button_algoliaSmall):"medium"===e.size?"".concat(se.a.button_algolia," ").concat(se.a.button_algoliaMid):"".concat(se.a.button_algolia);return Object(a.jsx)("div",{className:t+" "+c,onClick:function(){e.onClick()},"aria-disabled":e.disabled,children:e.buttonName})},le=c(25),Ae=c.n(le),de=function(e){var t="".concat(Ae.a.check),c="".concat(Ae.a.check);return c="blue"===e.color?"".concat(Ae.a.check," ").concat(Ae.a.checkBlue," ").concat(Ae.a.checkBlue):"black"===e.color?"".concat(Ae.a.checkBlack," ").concat(Ae.a.checkBlack," ").concat(Ae.a.checkBlue):"".concat(Ae.a.check),t="big"===e.size?"".concat(Ae.a.check," ").concat(Ae.a.checkBig):"small"===e.size?"".concat(Ae.a.check," ").concat(Ae.a.checkSmall):"".concat(Ae.a.check),Object(a.jsxs)("div",{className:Ae.a.box,children:[Object(a.jsx)("input",{id:"one",type:"checkbox"}),Object(a.jsx)("span",{className:c+" "+t}),Object(a.jsx)("label",{htmlFor:"one",style:{fontSize:"small"===e.size?"10px":"big"===e.size?"26px":"20px"},children:e.boxName})]})},ue=function(){return Object(a.jsxs)("div",{className:ce.a.wraper,children:[Object(a.jsx)(oe,{inputName:"SuperInput",onEnterClick:function(){}}),Object(a.jsx)(ie,{buttonName:"SuperButton",onClick:function(){}}),Object(a.jsx)(de,{boxName:"SuperCheckBox"})]})},je=function(){var e=Object(A.c)((function(e){return e.login.isLoggedIn})),t=Object(A.c)((function(e){return e.profilePage.profileData})),c=Object(A.b)();return e?Object(a.jsxs)("div",{children:["It's profile component:",Object(a.jsxs)("div",{children:[" name:",t.name]}),Object(a.jsxs)("div",{children:["isAdmin:",t.isAdmin]}),Object(a.jsxs)("div",{children:[" id:",t._id]}),Object(a.jsxs)("div",{children:[" publicCardPacksCount:",t.publicCardPacksCount]}),Object(a.jsxs)("div",{children:[" email:",t.email]}),Object(a.jsxs)("div",{children:["created:",t.created]}),Object(a.jsxs)("div",{children:[" avatar:",t.avatar]}),Object(a.jsx)("button",{onClick:function(){c((function(e){S().then((function(t){console.log(t),e(E(!1))}))}))},children:"log out"})]}):Object(a.jsx)(D.a,{to:"/login"})},be=c(41),pe=c(37),ge=c.n(pe),Oe=function(){var e=Object(A.b)(),t=Object(be.a)({initialValues:{email:""},onSubmit:function(t){var c;e((c=t,function(e){e(N("loading")),O(c).then((function(t){e(J(!0))})).catch((function(t){e(Q(t))}))}))}});return Object(a.jsx)("div",{className:ge.a.form__wrapper,children:Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)("h1",{children:"Forgot account"}),Object(a.jsxs)("div",{className:ge.a.form__content,children:[Object(a.jsxs)("div",{className:ge.a.form__content_email,children:[Object(a.jsx)("h4",{children:"email"}),Object(a.jsx)("input",Object(j.a)({type:"email"},t.getFieldProps("email")))]}),Object(a.jsx)("div",{className:ge.a.form__content_btn,children:Object(a.jsx)("button",{type:"submit",children:"SEND EMAIl"})})]})]})})},he=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(Oe,{})})},me="/login",xe="/profile",Se="/passwordRecovery",fe="/registration",we=c(238),Ce=c(220),ke=c(221),_e=c(234),Ie=c(223),ve=c(28),Ee=c.n(ve),Be=function(){var e=Object(A.c)((function(e){return e.login.isLoggedIn})),t=Object(A.c)((function(e){return e.app.status})),c=Object(D.h)();console.log(c);var n=Object(A.b)(),o=Object(be.a)({initialValues:{password:"",resetPasswordToken:""},onSubmit:function(e){var t;console.log(e),n((t=e,function(e){e(N("loading")),h(t).then((function(t){e(K(!0))})).catch((function(t){e(Q(t))}))}))}});return e?Object(a.jsxs)("div",{className:ge.a.form__wrapper,children:[Object(a.jsx)("div",{className:Ee.a.logo,children:Object(a.jsx)("h1",{className:ge.a.LogoName,children:"React Education Cards"})}),Object(a.jsx)("form",{onSubmit:o.handleSubmit,children:Object(a.jsxs)(we.a,{children:[Object(a.jsx)(Ce.a,{children:Object(a.jsx)("h2",{className:Ee.a.LogoText,children:"Change Password"})}),Object(a.jsxs)(ke.a,{children:[Object(a.jsx)(_e.a,Object(j.a)({size:"medium",type:"password",label:"enter new password"},o.getFieldProps("password"))),o.errors.password?o.errors.password:null,Object(a.jsx)(_e.a,Object(j.a)({id:"password",type:"password",label:"repeat new password",margin:"normal"},o.getFieldProps("resetPasswordToken"))),o.errors.password?o.errors.password:null,Object(a.jsx)(Ie.a,{type:"submit",variant:"outlined",color:"primary",disabled:"loading"===t&&!0,children:"change password"})]})]})})]}):Object(a.jsx)(D.a,{to:me})},De=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(Be,{})})},Me=c(116),Ge=c.n(Me),Qe=c(88),Ne=c(11),ye=c.n(Ne),Le=c.p+"static/media/modPicture.a8e8e881.png",Re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAD6CAQAAACxZLJ4AAABjUlEQVR42u3a0U3CUBQG4DNCN+kGlA1kgk5CooNUXYDAQIo+m2iZAGsKD0SN9t5CTUy+72zw509O7+2NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+lVnUcX2YOipxcL4q1tFG92naWKsX4xXRxP5LqU5zF4WIyFfG44+lOs5TlGIit1avA7U6LkXVImsJPiTUqp+thUi6JrFW/TTiIvUkuM8oVueESJpVVq26WImMFC+ZxWpFxrB5Zq36mYuNIfWIYl2JjSHLEcVaig3FwirExztc+LphJzJSuCBlElW8+6XDFPyEZhLF4CO/02M/z2bIUMZb0me7h35kV2s7UKtntWLcQrz95TP+3hLknBPiJnbfFuDGSZBLmMUibg6zcMsOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8mQ+NlwAmmeM97wAAAABJRU5ErkJggg==",Ke=c.p+"static/media/sketched-left-arrow.cd8ab34f.png",Te=function(){var e=Object(o.useState)("".concat(ye.a.dot)),t=Object(Qe.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)("".concat(ye.a.dotSecond)),s=Object(Qe.a)(r,2),i=s[0],l=s[1],A=function(e,t){n(e),l(t)};return Object(a.jsxs)("div",{className:ye.a.wrapper,children:[Object(a.jsxs)("div",{className:ye.a.block12wrapp,children:[Object(a.jsx)("div",{className:ye.a.block1,onMouseOver:function(){return A("".concat(ye.a.dot1Scope),"".concat(ye.a.dot1ScopeSecond))},children:Object(a.jsxs)("div",{className:ye.a.arrow,children:[" ",Object(a.jsx)("div",{className:ye.a.buttonContainer,children:Object(a.jsx)(ie,{buttonName:"HOME",onClick:function(){},color:"black",size:"small"})}),Object(a.jsx)("img",{alt:"arrow",src:Ke})]})}),Object(a.jsx)("div",{className:ye.a.block2,onMouseOver:function(){return A("".concat(ye.a.dot2Scope),"".concat(ye.a.dot2ScopeSecond))}})]}),Object(a.jsxs)("div",{className:ye.a.block34wrapp,children:[Object(a.jsxs)("div",{className:ye.a.wrapperImg,onMouseOver:function(){return A("".concat(ye.a.dot),"".concat(ye.a.dotSecond))},children:[Object(a.jsx)("img",{src:Le}),Object(a.jsx)("img",{className:c,src:Re}),Object(a.jsx)("img",{className:i,src:Re})]}),Object(a.jsx)("div",{className:ye.a.block3,onMouseOver:function(){return A("".concat(ye.a.dot3Scope),"".concat(ye.a.dot3ScopeSecond))}})]}),Object(a.jsxs)("div",{className:ye.a.block56wrapp,children:[Object(a.jsx)("div",{className:ye.a.block4,onMouseOver:function(){return A("".concat(ye.a.dot4Scope),"".concat(ye.a.dot4ScopeSecond))}}),Object(a.jsx)("div",{className:ye.a.block5,onMouseOver:function(){return A("".concat(ye.a.dot5Scope),"".concat(ye.a.dot5ScopeSecond))}})]})]})},Je=function(){return Object(a.jsxs)("div",{className:Ge.a.container,children:[Object(a.jsx)("div",{children:Object(a.jsx)(Te,{})}),Object(a.jsxs)("div",{className:Ge.a.notfound,children:[Object(a.jsx)("h1",{children:"404"}),Object(a.jsx)("h2",{children:"Page not found"}),Object(a.jsx)("p",{children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."})]})]})},Pe=c.p+"static/media/atom.b929ab2f.svg",Fe=c(225),We=c(239),qe=c(237),Ue=c(236),Ye=function(e){var t=Object(A.c)((function(e){return e.app.error})),c=Object(A.b)();return setTimeout((function(){c(Q(null))}),2e3),Object(a.jsx)(Ue.a,{variant:"outlined",severity:"error",children:t})},He=function(){var e=Object(A.c)((function(e){return e.app.error})),t=Object(A.c)((function(e){return e.login.loginProcessInProgress})),c=Object(A.c)((function(e){return e.login.isLoggedIn})),n=Object(A.b)(),o=Object(D.g)(),r=Object(be.a)({validate:function(e){return e.email?e.email.split("").includes("@")?e.password?void 0:{password:"password is required"}:{email:"enter correct email"}:{email:"email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e,t){var c,a=t.resetForm;n((c=e,function(e){e(B(!0)),m(c).then((function(t){e(I(t.data)),e(E(!0))})).catch((function(t){e(B(!1)),t.response?e(Q(t.response.data.error)):e(Q(t.message+", more details in the console"))})).finally((function(){e(B(!1))}))})),console.log(e),a({values:{email:"",password:"",rememberMe:!1}}),e={email:"",password:"",rememberMe:!1}}});return c?Object(a.jsx)(D.a,{to:xe}):Object(a.jsxs)("div",{className:Ee.a.wrapper,children:[Object(a.jsxs)("div",{className:Ee.a.logo,children:[t?Object(a.jsx)("img",{className:Ee.a.loadingImg,src:"data:image/gif;base64,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"}):Object(a.jsx)("img",{src:Pe}),Object(a.jsx)("h1",{className:Ee.a.LogoName,children:"React Education Cards"})]}),Object(a.jsx)(Fe.a,{container:!0,justify:"center",children:Object(a.jsxs)(Fe.a,{item:!0,xs:4,children:[Object(a.jsx)("form",{onSubmit:r.handleSubmit,children:Object(a.jsxs)(we.a,{children:[Object(a.jsx)(Ce.a,{children:Object(a.jsx)("h2",{className:Ee.a.LogoText,children:"SignUp"})}),Object(a.jsxs)(ke.a,{children:[Object(a.jsx)(_e.a,Object(j.a)({"aria-hidden":t,size:"medium",type:"email",label:"Email"},r.getFieldProps("email"))),r.errors.email&&r.touched.email?Object(a.jsx)("div",{style:{color:"red",margin:"5px 0px"},children:r.errors.email}):null,Object(a.jsx)(_e.a,{id:"password",label:"Password",margin:"normal",onChange:r.handleChange,value:r.values.password}),r.errors.password?r.errors.password:null,Object(a.jsx)(We.a,{label:"Remember me",control:Object(a.jsx)(qe.a,Object(j.a)(Object(j.a)({},r.getFieldProps("rememberMe")),{},{checked:r.values.rememberMe}))}),Object(a.jsx)(Ie.a,{type:"submit",variant:"contained",color:"primary",disabled:t,children:"Login"}),Object(a.jsxs)("h4",{children:[Object(a.jsx)("p",{className:Ee.a.forgotPasswordLink,onClick:function(){o.push(Se)},children:"Forgot password?"}),Object(a.jsx)("p",{className:Ee.a.forgotPasswordLink,onClick:function(){o.push(fe)},children:"Registration"})]})]})]})}),e&&Object(a.jsx)(Ye,{})]})})]})},ze=c(59),Ze=ze.a().shape({password:ze.b().min(7,"7 char or more").max(50,"password is too long").required("Password is Required"),email:ze.b().email("Invalid email").required("email is Required")}),Ve=function(){var e=Object(A.c)((function(e){return e.app.error})),t=Object(A.b)(),c=Object(be.a)({initialValues:{email:"",password:""},validationSchema:Ze,onSubmit:function(e){t(W(e))}}),n={color:"red",margin:"5px 0px"};return Object(a.jsxs)("div",{className:ge.a.form__content,children:[Object(a.jsxs)("div",{className:Ee.a.logo,children:[Object(a.jsx)("img",{src:Pe}),Object(a.jsx)("h1",{className:Ee.a.LogoName,children:"React Education Cards"})]}),Object(a.jsx)(Fe.a,{container:!0,justify:"center",children:Object(a.jsxs)(Fe.a,{item:!0,xs:4,children:[Object(a.jsx)("form",{onSubmit:c.handleSubmit,children:Object(a.jsxs)(we.a,{size:"medium",children:[Object(a.jsx)(Ce.a,{component:"h2",children:Object(a.jsx)("h2",{children:"Create account, to join us."})}),Object(a.jsxs)(ke.a,{children:[Object(a.jsx)(_e.a,Object(j.a)({label:"Email",margin:"normal"},c.getFieldProps("email"))),c.errors.email&&c.touched.email?Object(a.jsx)("div",{style:n,children:c.errors.email}):null,Object(a.jsx)(_e.a,Object(j.a)({type:"password",label:"Password",margin:"normal"},c.getFieldProps("password"))),c.errors.password&&c.touched.password?Object(a.jsx)("div",{style:n,children:c.errors.password}):null,Object(a.jsx)(Ie.a,{type:"submit",variant:"contained",color:"primary",children:"Click To Join Us "})]})]})}),e&&Object(a.jsx)(Ye,{})]})})]})},Xe=function(){Object(A.c)((function(e){return e.register.isSignedUp}));return Object(A.c)((function(e){return e.login.isLoggedIn}))?Object(a.jsx)(D.a,{to:"/profile"}):Object(a.jsx)("div",{className:ge.a.registration,children:Object(a.jsx)(Ve,{})})},$e=c(226),et=c(240),tt=c(228),ct=c(232),nt=c(231),at=c(227),ot=c(229),rt=c(230),st=c(222),it=c(235),lt=ze.a().shape({name:ze.b().min(5,"5 char or more").required("name is Required"),path:ze.b().required("path is Required")}),At=function(e){var t=Object(A.c)((function(e){return e.login.isLoggedIn})),c=Object(A.b)(),n=Object(be.a)({initialValues:{name:"",path:""},validationSchema:lt,onSubmit:function(t){var n;c((n=t,function(e){w(n).then((function(t){e(U()),e(N("succeed"))})).catch((function(t){e(Q(t.message)),e(N("failed"))}))})),e.handleClose()}}),o={color:"red",margin:"5px 0px"};return t?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("form",{onSubmit:n.handleSubmit,children:Object(a.jsx)(we.a,{size:"small",children:Object(a.jsxs)(ke.a,{children:[Object(a.jsx)(_e.a,Object(j.a)({label:"name",margin:"normal"},n.getFieldProps("name"))),n.errors.name&&n.touched.name?Object(a.jsx)("div",{style:o,children:n.errors.name}):null,Object(a.jsx)(_e.a,Object(j.a)({type:"text",label:"path",margin:"normal"},n.getFieldProps("path"))),n.errors.path&&n.touched.path?Object(a.jsx)("div",{style:o,children:n.errors.path}):null,Object(a.jsx)(Ie.a,{type:"submit",variant:"contained",color:"primary",children:"Add"})]})})})}):Object(a.jsx)(D.a,{to:"/login"})},dt=Object($e.a)((function(e){return Object(et.a)({paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),ut=Object($e.a)({table:{minWidth:650}}),jt=function(e){var t=ut(),c=dt(),n=Object(o.useState)(!1),r=Object(Qe.a)(n,2),s=r[0],i=r[1],d=Object(A.c)((function(e){return e.login.isLoggedIn})),u=Object(A.c)((function(e){return e.packsPage.cardPacks})),j=Object(A.b)();if(Object(o.useEffect)((function(){j(U())}),[d]),!d)return Object(a.jsx)(D.a,{to:"/login"});var b=function(){i(!1)},p={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},g=Object(a.jsxs)("div",{className:c.paper,style:p,children:[Object(a.jsx)("h2",{children:"Data for new pack"}),Object(a.jsx)(At,{handleClose:b})]});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(it.a,{open:s,onClose:b,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",style:p,children:g}),Object(a.jsx)(at.a,{component:st.a,children:Object(a.jsxs)(tt.a,{className:t.table,"aria-label":"simple table",children:[Object(a.jsx)(ot.a,{children:Object(a.jsxs)(rt.a,{children:[Object(a.jsx)(nt.a,{children:"Name"}),Object(a.jsx)(nt.a,{align:"center",children:"CardsCount"}),Object(a.jsx)(nt.a,{align:"center",children:"Update"}),Object(a.jsx)(nt.a,{align:"center",children:"link"}),Object(a.jsx)(nt.a,{align:"center",children:Object(a.jsx)("button",{onClick:function(){i(!0)},children:"add pack"})}),Object(a.jsx)(nt.a,{align:"center"})]})}),Object(a.jsx)(ct.a,{children:u.map((function(e){return Object(a.jsxs)(rt.a,{children:[Object(a.jsx)(nt.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(nt.a,{align:"center",children:e.cardsCount}),Object(a.jsx)(nt.a,{align:"center",children:e.updated}),Object(a.jsx)(nt.a,{align:"center",children:e.path}),Object(a.jsxs)(nt.a,{align:"center",children:[Object(a.jsx)("button",{onClick:function(){var t;j((t=e._id,function(e){k(t).then((function(t){e(U()),e(N("succeed"))})).catch((function(t){e(Q(t.message)),e(N("failed"))}))}))},children:"update"}),Object(a.jsx)("button",{onClick:function(){var t;j((t=e._id,function(e){C(t).then((function(t){e(U()),e(N("succeed"))})).catch((function(t){e(Q(t.message)),e(N("failed"))}))}))},children:"delete"})]}),Object(a.jsx)(nt.a,{align:"center",children:Object(a.jsx)(l.b,{to:"/cards",children:"cards"})})]},e._id)}))})]})})]})},bt=function(e){return Object(A.c)((function(e){return e.login.isLoggedIn}))?Object(a.jsx)("div",{children:Object(a.jsx)("h4",{children:"Cards are being developed..."})}):Object(a.jsx)(D.a,{to:"/login"})},pt=function(){return Object(a.jsxs)(D.d,{children:[Object(a.jsx)(D.b,{exact:!0,path:"/registration",render:function(){return Object(a.jsx)(Xe,{})}}),Object(a.jsx)(D.b,{exact:!0,path:"/login",render:function(){return Object(a.jsx)(He,{})}}),Object(a.jsx)(D.b,{exact:!0,path:"/profile",render:function(){return Object(a.jsx)(je,{})}}),Object(a.jsx)(D.b,{exact:!0,path:"/packs",render:function(){return Object(a.jsx)(jt,{})}}),Object(a.jsx)(D.b,{exact:!0,path:"/cards",render:function(){return Object(a.jsx)(bt,{})}}),Object(a.jsx)(D.b,{exact:!0,path:"/passwordRecovery",render:function(){return Object(a.jsx)(he,{})}}),Object(a.jsx)(D.b,{exact:!0,path:"/newPassword/",render:function(){return Object(a.jsx)(De,{})}}),Object(a.jsx)(D.b,{exact:!0,path:"/testPage",render:function(){return Object(a.jsx)(ue,{})}}),Object(a.jsx)(D.b,{exact:!0,path:"/404",render:function(){return Object(a.jsx)(Je,{})}})]})},gt=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(ee,{}),Object(a.jsx)(pt,{})]})},Ot=function(){var e=Object(A.c)((function(e){return e.app.isInitializedApp})),t=Object(A.c)((function(e){return e.app.status})),c=Object(A.b)();return Object(o.useEffect)((function(){c((function(e){x().then((function(t){console.log(t),e(y(!0)),e(E(!0)),e(I(t.data))})).catch((function(t){e(y(!0)),D.a}))}))}),[]),e&&"loading"!=t?Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(gt,{})}):Object(a.jsx)("div",{className:"circular__progress",children:Object(a.jsx)(Z.a,{})})};s.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(A.a,{store:z,children:Object(a.jsx)(Ot,{})})}),document.getElementById("root")),i()},25:function(e,t,c){e.exports={box:"ScheckBox_box__2SIi_",check:"ScheckBox_check__3oNjM",checkBlue:"ScheckBox_checkBlue__3YRsz",checkBlack:"ScheckBox_checkBlack__1lRsg",checkBig:"ScheckBox_checkBig__TZ_Oc",checkSmall:"ScheckBox_checkSmall__3emeP"}},28:function(e,t,c){e.exports={loadingImg:"login_loadingImg__3mEyd",wrapper:"login_wrapper__1MYxC",emailForm:"login_emailForm__3LMg4",logo:"login_logo__3zz5n",LogoName:"login_LogoName__KJSWw",forgotPasswordLink:"login_forgotPasswordLink__3nDwl"}},31:function(e,t,c){e.exports={button_algolia:"SuperButton_button_algolia__2bbVS",button_algoliaSmall:"SuperButton_button_algoliaSmall__1h7xW",button_algoliaMid:"SuperButton_button_algoliaMid__3Jw44",button_algoliaBlue:"SuperButton_button_algoliaBlue__18ZR7",button_algoliaBlack:"SuperButton_button_algoliaBlack__2fKjt"}},37:function(e,t,c){e.exports={registration:"registration_registration__5isVS",form__wrapper:"registration_form__wrapper__35s8T",form__content:"registration_form__content__1Hpd1",form__content_email:"registration_form__content_email__3RZ_7",form__content_password:"registration_form__content_password__2bLNE",form__content_btn:"registration_form__content_btn__251Tt",LogoName:"registration_LogoName__mJXuG"}},66:function(e,t,c){e.exports={wrapper:"SuperInput_wrapper__1yXN_",group:"SuperInput_group__3i3wA",bar:"SuperInput_bar__3YH_v",inputSelectorBlue:"SuperInput_inputSelectorBlue__3AkvO",inputSelectorBlack:"SuperInput_inputSelectorBlack__bEUX2"}}},[[183,1,2]]]);
//# sourceMappingURL=main.10b48a48.chunk.js.map