(this["webpackJsonpblockmaster-movies"]=this["webpackJsonpblockmaster-movies"]||[]).push([[0],{408:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(100),c=r.n(a),o=r(438),i=r(91),s=r(187),l={login:"[Auth] Login",logout:"[Auth Logout]",uiSetError:"[UI] set Error",uiRemoveError:"[UI] Remove Error",uiStartLoading:"[UI] start loading",uiFinishLoadig:"[UI] finish loading",mvSelected:"[MV] movie selected",mvSearch:"[MV] movie to search",mvModal:"[MV] movie modal",mvLastDoc:"[MV] last query movie",mvTrailer:"[MV] movie tailer",crSearch:"[CR] crud search movie"},d=r(12),u={search:"Todas",selected:[],modal:null,last:null,trailer:null},p={loading:!1,msjError:null},b={search:""},j=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.login:return{uid:t.payload.uid,name:t.payload.displayName};case l.logout:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.uiSetError:return Object(d.a)(Object(d.a)({},e),{},{msjError:t.payload});case l.uiRemoveError:return Object(d.a)(Object(d.a)({},e),{},{msjError:null});case l.uiStartLoading:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case l.uiFinishLoadig:return Object(d.a)(Object(d.a)({},e),{},{loading:!1});default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.mvSelected:return Object(d.a)(Object(d.a)({},e),{},{selected:t.payload});case l.mvSearch:return Object(d.a)(Object(d.a)({},e),{},{search:t.payload});case l.mvModal:return Object(d.a)(Object(d.a)({},e),{},{modal:t.payload});case l.mvLastDoc:return Object(d.a)(Object(d.a)({},e),{},{last:t.payload});case l.mvTrailer:return Object(d.a)(Object(d.a)({},e),{},{trailer:t.payload});default:return e}},crud:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.crSearch:return Object(d.a)(Object(d.a)({},e),{},{search:t.payload});default:return e}}}),x="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,h=Object(i.d)(j,x(Object(i.a)(s.a))),m=r(16),f=r(419),O=Object(f.a)({styles:{global:{body:{bg:"#0F0E17",color:"#FFFFFE"}}},colors:{brand:{primary:"#FED941",secondary:"#A7A9BE",black:"#000000",black_1:"#111111",background:"#0F0E17",white:"#FFFFFE"}},textStyles:{h1:{fontSize:"46px",fontWeight:800,lineHeight:"56px",letterSpacing:"0.15%"},h2:{fontSize:"48px",fontWeight:700,lineHeight:"58px",letterSpacing:"0.15%"},h3:{fontSize:"37px",fontWeight:700,lineHeight:"37px"},h4:{fontSize:"30px",fontWeight:600,lineHeight:"34px"},h5:{fontSize:"30px",fontWeight:600,lineHeight:"26px"}}}),g=r(17),v=r.n(g),y=r(26),C=r(9),w=r(201),k=r(44),E=r(28),S=r(87);r(217),r(218);S.a.initializeApp({apiKey:"AIzaSyB9S_iSvgObdK4pSzInpBh8tADyQMKXV28",authDomain:"blockmaster-199804.firebaseapp.com",projectId:"blockmaster-199804",storageBucket:"blockmaster-199804.appspot.com",messagingSenderId:"104763307554",appId:"1:104763307554:web:448f6ffd599702b96c3c7b"});var _=S.a.firestore(),A=new S.a.auth.GoogleAuthProvider,R=function(e){return{type:l.uiSetError,payload:e}},D=function(e,t){return function(r){return S.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;r({type:l.uiStartLoading}),r(I(t.uid,t.displayName))})).catch((function(e){console.log(e)}))}},I=function(e,t){return{type:l.login,payload:{uid:e,displayName:t}}},M=function(){return{type:l.logout}},N=r(439),V=r(440),q=r(423),L=r(425),U=r(441),z=r(422),B=r(420),W=r(421),F=(r(72),r(4));var P=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.ui})).loading;return Object(F.jsx)(B.a,{h:"100vh",children:Object(F.jsxs)(W.a,{borderRadius:"10px",p:"1px",w:"350px",bgColor:"brand.primary",children:[Object(F.jsx)(B.a,{h:"120px",borderRadius:"10px 10px 0 0",children:Object(F.jsx)(V.a,{src:"https://i.imgur.com/pwIYVhf.png"})}),Object(F.jsx)("form",{onSubmit:function(t){t.preventDefault();var r=document.getElementById("email-login").value,n=document.getElementById("password-login").value;e(D(r,n))},children:Object(F.jsxs)(U.b,{className:"scene_element scene_element--clipmidup",p:"10px",h:"340px",borderRadius:"0 0 10px 10px",spacing:"10px",bgColor:"#14112e",children:[Object(F.jsx)(z.a,{my:"10px",fontWeight:"600",fontSize:"xl",children:"Ingresa con correo y contrase\xf1a"}),Object(F.jsx)(q.a,{id:"email-login",type:"email",placeholder:"Email",borderColor:"brand.primary",color:"white",isRequired:!0}),Object(F.jsx)(q.a,{id:"password-login",type:"password",borderColor:"brand.primary",placeholder:"Password",isRequired:!0}),Object(F.jsx)(N.a,{disabled:t,type:"submit",bgColor:"#3C5EEA",children:"Entrar"}),Object(F.jsxs)(W.a,{textAlign:"center",width:"100%",children:[Object(F.jsxs)(U.a,{onClick:function(){e((function(e){S.a.auth().signInWithPopup(A).then((function(t){var r=t.user;e(I(r.uid,r.displayName)),console.log(r)}))}))},cursor:"pointer",position:"relative",spacing:"20px",px:"6px",my:"20px",borderRadius:"10px",bgColor:"white",h:"40px",width:"100%",children:[Object(F.jsx)(V.a,{position:"absolute",height:"80%",src:'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_"G"_Logo.svg',alt:"google icon"}),Object(F.jsx)(z.a,{fontWeight:"600",textAlign:"center",width:"100%",color:"black",children:"Ingresa con Google"})]}),Object(F.jsx)(L.a,{to:"/auth/register",as:k.b,children:"\xbfNo est\xe1s registrado?"})]})]})})]})})},T=r(14),H=r(191),G=r.n(H);var Y=function(){var e,t=Object(m.b)(),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),r=Object(C.a)(t,2),a=r[0],c=r[1];return[a,function(e){var t=e.target;c(Object(d.a)(Object(d.a)({},a),{},Object(T.a)({},t.name,t.value)))},function(){c(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e)}]}({name:"",email:"",password:"",password2:""}),a=Object(C.a)(r,2),c=a[0],o=a[1],i=c.name,s=c.email,l=c.password,u=c.password2;return Object(F.jsx)(B.a,{h:"100vh",children:Object(F.jsx)(W.a,{w:"350px",borderRadius:"10px",padding:"14px",bgColor:"brand.primary",p:"1px",children:Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault(),(0===i.trim().length?(t(R("nombre requerido")),0):G.a.isEmail(s)?u!==l?(t(R("password requerido")),0):(console.log(i),1):(t(R("email requerido")),0))&&t(function(e,t,r){return function(n){S.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.user,e.next=3,a.updateProfile({displayName:r});case 3:n(I(a.uid,a.displayName)),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}(s,l,i))},children:[Object(F.jsx)(B.a,{h:"120px",borderRadius:"10px 10px 0 0",children:Object(F.jsx)(V.a,{src:"https://i.imgur.com/pwIYVhf.png"})}),Object(F.jsxs)(U.b,(e={h:"340px",className:"scene_element scene_element--clipmidup",spacing:"10px",p:"10px",borderRadius:"0 0 10px 10px"},Object(T.a)(e,"spacing","10px"),Object(T.a)(e,"bgColor","#14112e"),Object(T.a)(e,"children",[Object(F.jsx)(z.a,{fontSize:"xl",fontWeight:"600",children:"Reg\xedstrate"}),Object(F.jsx)(q.a,{type:"text",borderColor:"brand.primary",placeholder:"Name",name:"name",value:i,onChange:o}),Object(F.jsx)(q.a,{type:"email",borderColor:"brand.primary",placeholder:"Email",name:"email",value:s,onChange:o}),Object(F.jsx)(q.a,{type:"password",borderColor:"brand.primary",placeholder:"Password",name:"password",value:l,onChange:o}),Object(F.jsx)(q.a,{type:"password",borderColor:"brand.primary",placeholder:"Confirm Pasword",name:"password2",value:u,onChange:o}),Object(F.jsx)(N.a,{type:"submit",bgColor:"#3C5EEA",children:"Entrar"}),Object(F.jsx)(L.a,{to:"/auth/login",as:k.b,children:"\xbfYa est\xe1s registrado?"})]),e))]})})})},K=function(){return Object(F.jsx)("div",{className:"auth__main",children:Object(F.jsx)("div",{className:"auth__box-container",children:Object(F.jsxs)(E.d,{children:[Object(F.jsx)(E.b,{exact:!0,path:"/auth/login",component:P}),Object(F.jsx)(E.b,{exact:!0,path:"/auth/register",component:Y}),Object(F.jsx)(E.a,{to:"/auth/login"})]})})})},Q=r(74),J=function(e){var t=e.isAuthenticated,r=e.component,n=Object(Q.a)(e,["isAuthenticated","component"]);return Object(F.jsx)(E.b,Object(d.a)(Object(d.a)({},n),{},{component:function(e){return t?Object(F.jsx)(r,Object(d.a)({},e)):Object(F.jsx)(E.a,{to:"/auth/login"})}}))},X=function(e){var t=e.isAuthenticated,r=e.component,n=Object(Q.a)(e,["isAuthenticated","component"]);return Object(F.jsx)(E.b,Object(d.a)(Object(d.a)({},n),{},{component:function(e){return t?Object(F.jsx)(E.a,{to:"/"}):Object(F.jsx)(r,Object(d.a)({},e))}}))},Z=r(34),$=r(429),ee=r(427),te=r(428),re=r(426),ne=r(27),ae=r(192),ce=r(21),oe=function(){var e=Object(y.a)(v.a.mark((function e(t,r,n){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(ce.a)(r),"Todas"!==t){e.next=7;break}return a=[],e.next=5,_.collection("movies").orderBy("nameMovie").get().then((function(e){n=e.docs[e.docs.length-1].id,e.forEach((function(e){a.push(Object(d.a)({id:e.id},e.data()))}))})).catch((function(e){return console.log(e)}));case 5:e.next=23;break;case 7:if("M\xe1s valoradas"!==t){e.next=13;break}return a=[],e.next=11,_.collection("movies").where("calification",">=",7).orderBy("calification","desc").get().then((function(e){e.forEach((function(e){a.push(Object(d.a)({id:e.id},e.data()))}))}));case 11:e.next=23;break;case 13:if("Menos valoradas"!==t){e.next=19;break}return a=[],e.next=17,_.collection("movies").where("calification","<=",7).orderBy("calification","desc").get().then((function(e){e.forEach((function(e){a.push(Object(d.a)({id:e.id},e.data()))}))}));case 17:e.next=23;break;case 19:return a=[],c=t.toUpperCase(),e.next=23,_.collection("movies").where("nameMovie","==",c).get().then((function(e){e.forEach((function(e){a.push(Object(d.a)({id:e.id},e.data()))}))})).catch((function(e){return console.log(e)}));case 23:return e.abrupt("return",{movies:a,last:n});case 24:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),ie=function(e){return{type:l.mvSearch,payload:e}},se=function(e){return function(){var t=Object(y.a)(v.a.mark((function t(r,n){var a,c,o,i,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n().movies.search,a=n().movies.last,c=n().movies.selected,t.next=5,oe(e,c,a);case 5:o=t.sent,i=o.movies,s=o.last,r(ue(s)),r(le(i));case 10:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},le=function(e){return{type:l.mvSelected,payload:e}},de=function(e){return{type:l.mvModal,payload:e}},ue=function(e){return{type:l.mvLastDoc,payload:e}},pe=function(e){return{type:l.mvTrailer,payload:e}},be=function(){var e=Object(E.g)();return Object(F.jsx)(B.a,{h:"40px",px:"10px",borderRadius:"10px",bgColor:"brand.primary",cursor:"pointer",fontWeight:"600",color:"brand.background",onClick:function(){return e.push("/crud")},children:"CRUD"})};var je=function(){var e=Object(n.useRef)(""),t=Object(m.b)(),r=Object(m.c)((function(e){return e.auth.uid})),a=Object(m.c)((function(e){return e.movies.search})),c=Object(n.useState)(!1),o=Object(C.a)(c,2),i=o[0],s=o[1],l=Object(n.useRef)(!1),d=function(e){document.scrollingElement.scrollTop,document.scrollingElement.scrollHeight,document.scrollingElement.clientHeight};Object(n.useEffect)((function(){if(window.addEventListener("scroll",d),i&&"Todas"===a&&t(se(a)),!l.current){var e,r=document.querySelectorAll(".nav-category"),n=Object(Z.a)(r);try{for(n.s();!(e=n.n()).done;){var c=e.value;c.textContent===a&&(c.style.color="#FED941",c.style.borderBottom="2px solid #FED941")}}catch(o){n.e(o)}finally{n.f()}t(ie(a)),t(se(a)),l.current=!0}return function(){window.removeEventListener("scroll",d)}}),[i,t]);var u=function(e){var r=e.target.textContent;t(ue(null)),t(ie(r)),t(se(r)),s(!1),window.scrollTo({top:380,behavior:"smooth"});var n,a=document.querySelectorAll(".nav-category"),c=Object(Z.a)(a);try{for(c.s();!(n=c.n()).done;){var o=n.value;o.textContent===e.target.textContent?(o.style.color="#FED941",o.style.borderBottom="2px solid #FED941"):(o.style.color="white",o.style.border="none")}}catch(i){c.e(i)}finally{c.f()}};return Object(F.jsx)(re.a,{alignItems:"center",position:["relative","relative","fixed"],top:"0",zIndex:"100",width:"100%",h:["auto","auto","112px"],backgroundColor:"brand.background",children:Object(F.jsxs)(U.a,{flexDir:["column","column","row"],pt:["10px","10px","0"],spacing:[0,0,1,8],width:["100%","100%","90%"],mx:"auto",children:[Object(F.jsx)(V.a,{src:"https://i.imgur.com/pwIYVhf.png"}),Object(F.jsxs)(U.a,{minWidth:["300px","300px","300px","400px"],justifyContent:"space-evenly",spacing:[4,10,2,10],py:["10px","10px","0"],children:[Object(F.jsx)(z.a,{fontWeight:"600",className:"nav-category",onClick:u,cursor:"pointer",children:"Todas"}),Object(F.jsx)(z.a,{className:"nav-category",fontWeight:"600",onClick:u,cursor:"pointer",children:"M\xe1s valoradas"}),Object(F.jsx)(z.a,{className:"nav-category",fontWeight:"600",onClick:u,cursor:"pointer",children:"Menos valoradas"})]}),Object(F.jsxs)(ee.a,{width:["90%","90%","100%"],children:[Object(F.jsx)(te.a,{onClick:function(){var r=e.current.value;t(ue(null)),t(ie(r)),t(se(r)),s(!1),window.scrollTo({top:320,behavior:"smooth"});var n,a=document.querySelectorAll(".nav-category"),c=Object(Z.a)(a);try{for(c.s();!(n=c.n()).done;){var o=n.value;o.style.color="white",o.style.border="none"}}catch(i){c.e(i)}finally{c.f()}e.current.value=""},cursor:"pointer",backgroundColor:"brand.primary",width:["72px","72px","32px","72px"],borderRadius:"0 10px 10px 0",children:Object(F.jsx)(ne.e,{color:"black"})}),Object(F.jsx)(q.a,{ref:e,color:"brand.black",border:"2px solid",borderColor:"brand.primary",borderRadius:"10px",backgroundColor:"brand.white",type:"tel",placeholder:"Busca tu pel\xedcula favorita"})]}),"Th1NLjQWVLao0xs1jr0yxbMvKE23"===r?Object(F.jsx)(be,{}):null,Object(F.jsx)($.b,{position:["absolute","absolute","relative"],top:["20px","20px","0"],right:["20px","20px","0"],fontSize:"30px",color:"red",cursor:"pointer",onClick:function(){return t(function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.auth().signOut();case 2:t(M());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},as:ae.a})]})})},xe=r(430);var he=function(){return Object(F.jsxs)(B.a,{mb:"20px",flexDirection:"column",children:[Object(F.jsx)(V.a,{src:"https://i.imgur.com/gJYLZ6P.png",alt:"Imagen que indica que nada ha sido encontrado"}),Object(F.jsx)(z.a,{children:"No se han encontrado similitudes para su b\xfasqueda"})]})};var me=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.movies.selected}));return t.length?Object(F.jsx)(xe.a,{pb:"70px",className:"scene_element scene_element--fadeinup",templateColumns:["repeat(auto-fill,150px)","repeat(auto-fill,220px)"],gap:["5px","10px"],px:["0","30px"],mt:"20px",justifyContent:["space-evenly","space-between"],children:t.map((function(t,r){return Object(F.jsx)(W.a,{onClick:function(){e(de(t))},position:"relative",backgroundPosition:"center",borderRadius:"10px",backgroundSize:"cover",cursor:"pointer",backgroundImage:t.imageUrl,w:["150px","220px"],h:["225px","330px"],children:Object(F.jsxs)(B.a,{bgColor:"rgba(0,0,0,0.5)",color:"brand.primary",px:"30px",position:"absolute",height:"64px",top:"40px",border:"2px solid",borderLeft:"none",borderRadius:"0 32px 32px 0",borderColor:"brand.primary",children:[Object(F.jsx)($.b,{mr:"10px",as:ne.f}),Object(F.jsx)(z.a,{color:"brand.white",children:t.calification.toFixed(1)})]})},r)}))}):Object(F.jsx)(he,{})},fe=r(75),Oe=r(68),ge=r.n(Oe);var ve=function(){var e=Object(m.c)((function(e){return e.movies.modal})),t=Object(m.c)((function(e){return e.auth.uid})),r=Object(m.b)();return e?Object(F.jsx)(re.a,{className:"scene_element scene_element--fadein",justifyContent:"center",bgColor:"rgba(15,14,23,0.9)",position:"fixed",top:"0",width:"100vw",h:"100vh",p:["0","40px"],zIndex:"100",children:Object(F.jsxs)(U.a,{flexDir:["column","row"],pt:["80px","0"],position:"relative",spacing:"30px",maxWidth:"700px",children:[Object(F.jsx)(V.a,{h:"330px",width:"220px",src:e.imageUrl,alt:"Hard Kill"}),Object(F.jsx)($.b,{onClick:function(){return r(de(null))},cursor:"pointer",fontSize:"30px",top:"40px",right:"40px",position:"absolute",as:fe.a}),Object(F.jsxs)(U.b,{pt:3,spacing:3,alignItems:"start",children:[Object(F.jsx)(z.a,{fontWeight:"600",fontSize:"xl",children:e.nameMovie}),Object(F.jsx)(z.a,{children:e.description}),Object(F.jsx)(z.a,{children:"".concat(e.year," * ").concat(e.genre," * ").concat(Math.floor(e.duration/60),"h ").concat(e.duration%60,"min")}),Object(F.jsxs)(U.a,{children:[Object(F.jsx)(N.a,{disabled:!0,leftIcon:Object(F.jsx)(ne.c,{}),color:"brand.black",bgColor:"brand.primary",children:"VER AHORA"}),Object(F.jsx)(N.a,{leftIcon:Object(F.jsx)(ne.d,{}),border:"2px solid",borderColor:"brand.primary",color:"brand.primary",bgColor:"brand.background",onClick:function(){return function(e){var r=Object(d.a)({},e);delete r.id,_.collection("".concat(t,"/movies/verdespues")).add(r),ge.a.fire({icon:"success",title:"!Genial!",text:"La pel\xedcula ha sido agregada a tu lista"})}(e)},children:"VER DESPU\xc9S"})]})]})]})}):Object(F.jsx)(W.a,{display:"none"})},ye=r(437),Ce=r(433),we=r(436),ke=r(431),Ee=r(432);r(309);we.a.use([ke.a,Ee.a]);var Se=function(){var e=Object(m.b)();return Object(F.jsx)(W.a,{height:["220px","220px","400px"],px:"20px",mt:["10px","10px","120px"],children:Object(F.jsxs)(ye.a,{spaceBetween:8,navigation:!0,pagination:!0,children:[Object(F.jsx)(Ce.a,{children:Object(F.jsxs)(W.a,{height:["200px","200px","360px"],position:"relative",children:[Object(F.jsx)(V.a,{borderRadius:"10px",width:"100%",height:"100%",src:"https://i.imgur.com/HjNNUVp.png"}),Object(F.jsxs)(U.a,{position:"absolute",bottom:"20px",left:"20px",children:[Object(F.jsx)(N.a,{leftIcon:Object(F.jsx)(ne.c,{}),onClick:function(){return e(pe("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650554/MUL%C3%81N_Tr%C3%A1iler_Espa%C3%B1ol_DOBLADO_2_Nuevo_2020_Disney_kemb9g.mp4"))},color:"brand.black",bgColor:"brand.primary",children:"VER AHORA"}),Object(F.jsx)(N.a,{disabled:!0,leftIcon:Object(F.jsx)(ne.d,{}),border:"2px solid",borderColor:"brand.primary",color:"brand.primary",bgColor:"brand.background",children:"VER DESPU\xc9S"})]})]})}),Object(F.jsx)(Ce.a,{children:Object(F.jsxs)(W.a,{height:["200px","200px","360px"],position:"relative",children:[Object(F.jsx)(V.a,{borderRadius:"10px",width:"100%",height:"100%",src:"https://i.imgur.com/WmJVBQB.png"}),Object(F.jsxs)(U.a,{position:"absolute",bottom:"20px",left:"20px",children:[Object(F.jsx)(N.a,{leftIcon:Object(F.jsx)(ne.c,{}),color:"brand.black",bgColor:"brand.primary",onClick:function(){return e(pe("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650574/RAYA_Y_EL_%C3%9ALTIMO_DRAG%C3%93N_Tr%C3%A1iler_Espa%C3%B1ol_Latino_DOBLADO_2_Disney_2021_NUEVO_ap7wgc.mp4"))},children:"VER AHORA"}),Object(F.jsx)(N.a,{disabled:!0,leftIcon:Object(F.jsx)(ne.d,{}),border:"2px solid",borderColor:"brand.primary",color:"brand.primary",bgColor:"brand.background",children:"VER DESPU\xc9S"})]})]})}),Object(F.jsx)(Ce.a,{children:Object(F.jsxs)(W.a,{height:["200px","200px","360px"],position:"relative",children:[Object(F.jsx)(V.a,{borderRadius:"10px",width:"100%",height:"100%",src:"https://i.imgur.com/tmGy9lQ.png"}),Object(F.jsxs)(U.a,{position:"absolute",bottom:"20px",left:"20px",children:[Object(F.jsx)(N.a,{leftIcon:Object(F.jsx)(ne.c,{}),color:"brand.black",bgColor:"brand.primary",onClick:function(){return e(pe("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650573/Unidos_de_Disney_y_Pixar_Tr%C3%A1iler_oficial_1_Subtitulado_mxnywn.mp4"))},children:"VER AHORA"}),Object(F.jsx)(N.a,{disabled:!0,leftIcon:Object(F.jsx)(ne.d,{}),border:"2px solid",borderColor:"brand.primary",color:"brand.primary",bgColor:"brand.background",children:"VER DESPU\xc9S"})]})]})}),Object(F.jsx)(Ce.a,{children:Object(F.jsxs)(W.a,{height:["200px","200px","360px"],position:"relative",children:[Object(F.jsx)(V.a,{borderRadius:"10px",width:"100%",height:"100%",src:"https://i.imgur.com/zytsah1.jpeg"}),Object(F.jsxs)(U.a,{position:"absolute",bottom:"20px",left:"20px",children:[Object(F.jsx)(N.a,{leftIcon:Object(F.jsx)(ne.c,{}),color:"brand.black",bgColor:"brand.primary",onClick:function(){return e(pe("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650590/WALL_E_2008_Tra%C3%ADler_Oficial_Doblado_Latino_-_Clasicos_de_Pixar_e7iblo.mp4"))},children:"VER AHORA"}),Object(F.jsx)(N.a,{disabled:!0,leftIcon:Object(F.jsx)(ne.d,{}),border:"2px solid",borderColor:"brand.primary",color:"brand.primary",bgColor:"brand.background",children:"VER DESPU\xc9S"})]})]})}),Object(F.jsx)(Ce.a,{children:Object(F.jsxs)(W.a,{height:["200px","200px","360px"],position:"relative",children:[Object(F.jsx)(V.a,{borderRadius:"10px",width:"100%",height:"100%",src:"https://i.imgur.com/YnqRzkn.jpeg"}),Object(F.jsxs)(U.a,{position:"absolute",bottom:"20px",left:"20px",children:[Object(F.jsx)(N.a,{leftIcon:Object(F.jsx)(ne.c,{}),color:"brand.black",bgColor:"brand.primary",onClick:function(){return e(pe("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650490/Kung_Fu_Panda_-_Trailer_Espa%C3%B1ol_HD_e5cpcs.mp4"))},children:"VER AHORA"}),Object(F.jsx)(N.a,{disabled:!0,leftIcon:Object(F.jsx)(ne.d,{}),border:"2px solid",borderColor:"brand.primary",color:"brand.primary",bgColor:"brand.background",children:"VER DESPU\xc9S"})]})]})})]})})},_e=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.movies.trailer}));return t?Object(F.jsxs)(B.a,{className:"scene_element scene_element--fadeinright",bgColor:"brand.background",position:"fixed",top:"0",h:"100vh",width:"100vw",zIndex:"200",children:[Object(F.jsx)($.a,{position:"absolute",cursor:"pointer",top:"30px",left:"40px",fontSize:"30px",onClick:function(){var t=Object(y.a)(v.a.mark((function t(r){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(pe(null)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),as:ne.a}),Object(F.jsx)(W.a,{as:"iframe",src:"".concat(t),width:"80%",height:["200px","300px","400px","80%"],allowFullScreen:!0})]}):Object(F.jsx)(W.a,{display:"none",className:"scene_element scene_element--fadeinleft"})},Ae=function(){var e=Object(m.c)((function(e){return e.movies.search})),t=Object(m.c)((function(e){return e.movies.selected})),r="";return r=""===e||e&&!t.length?"":"Todas"===e?e+" las pel\xedculas":"M\xe1s valoradas"===e||"Menos valoradas"===e?"Pel\xedculas "+e.toLowerCase():'"'.concat(e,'"'),Object(F.jsx)(W.a,{px:"22px",py:"14px",fontSize:"3xl",fontWeight:"600",children:r})};var Re=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(je,{}),Object(F.jsx)(Se,{}),Object(F.jsx)(Ae,{}),Object(F.jsx)(me,{}),Object(F.jsx)(ve,{}),Object(F.jsx)(_e,{})]})},De=r(89),Ie=r(434),Me=r(435),Ne=function(){var e=Object(y.a)(v.a.mark((function e(t){var r,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dfx4uggfe/image/upload",(r=new FormData).append("upload_preset","journal-app"),r.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dfx4uggfe/image/upload",{method:"POST",body:r});case 7:if(!(n=e.sent).ok){e.next=16;break}return e.next=11,n.json();case 11:return a=e.sent,console.log(a),e.abrupt("return",a.secure_url);case 16:return e.next=18,n.json();case 18:throw e.sent;case 19:e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(4),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t){return e.apply(this,arguments)}}(),Ve=function(e){return{type:l.crSearch,payload:e}},qe=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),r=(t[0],t[1],Object(n.useState)(!0)),a=Object(C.a)(r,2),c=(a[0],a[1],Object(m.c)((function(e){return e.crud.search}))),o=Object(m.b)(),i=function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.doc("movies/".concat(t.id)).delete();case 2:e.sent,ge.a.fire({icon:"success",title:"!Genial\xa1",text:"Ha sido eliminada correctamente"}),o(Ve([]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(y.a)(v.a.mark((function e(t,r){var n,a,c,o,i,s,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.parentElement.parentElement.parentElement,a=n.querySelector("#update-description-area"),c=n.querySelector("#update-image"),o=n.querySelectorAll("input"),i=Object(Z.a)(o);try{for(i.s();!(s=i.n()).done;)(l=s.value).disabled=!1,l.style.border="1px solid white","update"===l.name&&(l.style.backgroundColor="#00A300")}catch(r){i.e(r)}finally{i.f()}a.disabled=!1,a.style.border="1px solid white",c.style.display="block";case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(y.a)(v.a.mark((function e(t,r){var n,a,c,i,s,l,d,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=t.target,a=document.getElementById("update-description-area"),c=document.getElementById("image-element"),i=n.querySelectorAll("input"),s={},l=Object(Z.a)(i),e.prev=7,l.s();case 9:if((d=l.n()).done){e.next=16;break}if("update"!==(u=d.value).name&&"update-image-input"!==u.name){e.next=13;break}return e.abrupt("continue",14);case 13:"calification"===u.name||"year"===u.name||"duration"===u.name?s[u.name]=+u.value:"nameMovie"===u.name?s[u.name]=u.value.toUpperCase():s[u.name]=u.value;case 14:e.next=9;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),l.e(e.t0);case 21:return e.prev=21,l.f(),e.finish(21);case 24:return s[a.name]=a.value,s.imageUrl=c.src,e.next=28,_.doc("movies/".concat(r.id)).update(s);case 28:e.sent,ge.a.fire({icon:"success",title:"!Bien!",text:"Ha sido actualizado"}),o(Ve(""));case 31:case"end":return e.stop()}}),e,null,[[7,18,21,24]])})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){document.getElementById("update-image-input").click()},u=function(){var e=Object(y.a)(v.a.mark((function e(t){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files[0],e.next=3,Ne(r);case 3:n=e.sent,document.getElementById("image-element").src=n,console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsx)(W.a,{children:c.length?c.map((function(e){return Object(F.jsx)(B.a,{className:"scene_element scene_element--fadein",position:"fixed",zIndex:"100",w:"100vw",h:"100vh",top:"0",id:"update-form",as:"form",bgColor:"rgba(15,14,23,0.9)",p:"10px",onSubmit:function(t){return l(t,e)},children:Object(F.jsxs)(W.a,{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px",bgColor:"brand.background",border:"4px solid",borderColor:"brand.primary",height:"500px",children:[Object(F.jsx)(W.a,{position:"absolute",top:"20px",cursor:"pointer",borderRadius:"4px",bgColor:"red",right:"20px",onClick:function(){return o(Ve(""))},children:Object(F.jsx)($.a,{color:"white",fontSize:"30px",as:fe.a})}),Object(F.jsxs)(U.a,{className:"scene_element scene_element--fadeinright",px:"10px",spacing:10,children:[Object(F.jsxs)(U.b,{width:"250px",children:[Object(F.jsx)(De.a,{id:"update-name-movie",display:"flex",alignItems:"baseline",children:Object(F.jsx)(q.a,{textAlign:"center",name:"nameMovie",disabled:!0,border:"none",defaultValue:e.nameMovie,type:"text"})}),Object(F.jsx)(V.a,{id:"image-element",name:"image",height:"240px",src:e.imageUrl}),Object(F.jsx)(N.a,{id:"update-image",display:"none",colorScheme:"teal",onClick:d,children:"Cambiar foto"}),Object(F.jsx)(q.a,{id:"update-image-input",display:"none",name:"update-image-input",onChange:u,type:"file"})]}),Object(F.jsxs)(U.b,{alignItems:"start",width:"400px",children:[Object(F.jsxs)(De.a,{id:"update-description",children:[Object(F.jsx)(Ie.a,{children:"Descripci\xf3n: "}),Object(F.jsx)(Me.a,{id:"update-description-area",h:"160px",wordBreak:"break-word",name:"description",disabled:!0,border:"none",defaultValue:e.description})]}),Object(F.jsxs)(U.a,{spacing:10,children:[Object(F.jsxs)(De.a,{id:"update-calification",display:"flex",alignItems:"baseline",children:[Object(F.jsx)(Ie.a,{children:"Calification: "}),Object(F.jsx)(q.a,{h:"30px",width:"60px",name:"calification",disabled:!0,border:"none",step:"0.1",defaultValue:e.calification,type:"number"})]}),Object(F.jsxs)(De.a,{id:"update-year",display:"flex",alignItems:"baseline",children:[Object(F.jsx)(Ie.a,{children:"A\xf1o: "}),Object(F.jsx)(q.a,{h:"30px",width:"80px",name:"year",disabled:!0,border:"none",defaultValue:e.year,type:"number"})]})]}),Object(F.jsxs)(U.a,{spacing:8,children:[Object(F.jsxs)(De.a,{id:"update-genre",display:"flex",alignItems:"baseline",children:[Object(F.jsx)(Ie.a,{children:"G\xe9nero: "}),Object(F.jsx)(q.a,{px:1,w:"100px",name:"genre",disabled:!0,border:"none",defaultValue:e.genre,type:"text"})]}),Object(F.jsxs)(De.a,{id:"update-duration",display:"flex",alignItems:"baseline",children:[Object(F.jsx)(Ie.a,{children:"Duraci\xf3n: "}),Object(F.jsx)(q.a,{name:"duration",width:"80px",disabled:!0,border:"none",defaultValue:e.duration,type:"number"})]})]})]})]}),Object(F.jsxs)(U.a,{mt:"20px",className:"scene_element scene_element--fadeinleft",children:[Object(F.jsxs)(U.a,{px:"10px",cursor:"pointer",h:"40px",borderRadius:"4px",bgColor:"red",onClick:function(){return i(e)},children:[Object(F.jsx)(z.a,{fontWeight:"600",children:"Eliminar "}),Object(F.jsx)($.a,{fontSize:"20px",as:fe.a})]}),Object(F.jsxs)(U.a,{px:"10px",cursor:"pointer",h:"40px",borderRadius:"4px",bgColor:"teal.600",onClick:function(t){return s(t,e)},children:[Object(F.jsx)(z.a,{fontWeight:"600",children:"Modificar "}),Object(F.jsx)($.a,{fontSize:"20px",as:fe.b})]}),Object(F.jsx)(q.a,{value:"Actualizar",cursor:"pointer",name:"update",disabled:!0,type:"submit"})]})]})},e.id)})):Object(F.jsx)(z.a,{})})},Le=r(198),Ue=r(58),ze=function(){var e=Object(Le.a)({initialValues:{nameMovie:"",description:"",genre:"",year:0,calification:0,duration:0,imageUrl:""},validationSchema:Ue.b({nameMovie:Ue.c().min(1,"Debe tener al menos 1 caracter").required("Este campo es requerido"),description:Ue.c().max(300,"Puede tener como m\xe1ximo 300 caracteres").min(50,"Debe tener como minimo 50 caracteres").required("Este campo es requerido"),genre:Ue.c().max(15,"Debe tener 15 caracteres o menos").min(1,"Debe tener al menos 1 caracter").required("Este campo es requerido"),imageUrl:Ue.c().min(1,"Debe elegir una imagen").required("requerido"),year:Ue.a().min(1800,"Debe ser amyor a 1800").max(2022,"Debe ser menor a 2023").required("Requerido"),calification:Ue.a().min(0,"Debe ser mayor a 0").max(10,"Debe ser menor a 10").required("Requerido"),duration:Ue.a().min(20,"Debe ser mayor a 20").max(600,"Debe ser menor a 600").required("Requerido")}),validateOnChange:function(e){console.log(e)},onSubmit:function(e){e.nameMovie=e.nameMovie.toUpperCase(),_.collection("movies").add(e),ge.a.fire({icon:"success",title:"!Genial!",text:"Se ha agregado la pel\xedcula"})}}),t=function(){var t=Object(y.a)(v.a.mark((function t(r){var n,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=r.target.files[0])){t.next=7;break}return t.next=4,Ne(n);case 4:a=t.sent,console.log(a),e.values.imageUrl=a;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsx)(re.a,{mt:"20px",justifyContent:"center",children:Object(F.jsx)(W.a,{maxWidth:"500px",mb:"20px",borderRadius:"10px",p:"20px",bgColor:"whiteAlpha.300",children:Object(F.jsxs)(W.a,{as:"form",onSubmit:function(t){e.handleSubmit(),function(e){e.preventDefault(),e.target.reset()}(t)},children:[Object(F.jsx)(z.a,{textAlign:"center",fontSize:"2xl",color:"brand.primary",children:"Agrega una nueva pel\xedcula"}),Object(F.jsxs)(U.b,{spacing:"20px",children:[Object(F.jsxs)(De.a,{id:"movie-name",children:[Object(F.jsx)(Ie.a,{children:"Nombre *"}),Object(F.jsx)(q.a,{type:"text",name:"nameMovie",value:e.values.nameMovie,onChange:e.handleChange}),e.errors.nameMovie?Object(F.jsx)(W.a,{children:e.errors.nameMovie}):null]}),Object(F.jsxs)(De.a,{id:"movie-description",children:[Object(F.jsx)(Ie.a,{children:"Descripci\xf3n *"}),Object(F.jsx)(Me.a,{height:"fit-content",name:"description",value:e.values.description,onChange:e.handleChange}),e.errors.description?Object(F.jsx)(W.a,{children:e.errors.description}):null]}),Object(F.jsxs)(De.a,{id:"movie-genre",children:[Object(F.jsx)(Ie.a,{children:"G\xe9nero *"}),Object(F.jsx)(q.a,{type:"text",name:"genre",value:e.values.genre,onChange:e.handleChange}),e.errors.genre?Object(F.jsx)(W.a,{children:e.errors.genre}):null]}),Object(F.jsxs)(De.a,{id:"movie-image",children:[Object(F.jsx)(Ie.a,{children:"Imagen *"}),Object(F.jsx)(q.a,{type:"file",name:"duration",onChange:t}),e.errors.imageUrl?Object(F.jsx)(W.a,{children:e.errors.imageUrl}):null]}),Object(F.jsxs)(U.a,{alignItems:"start",spacing:"20px",children:[Object(F.jsxs)(De.a,{id:"movie-year",children:[Object(F.jsx)(Ie.a,{children:"A\xf1o *"}),Object(F.jsx)(q.a,{type:"number",name:"year",value:e.values.year,onChange:e.handleChange}),e.errors.year?Object(F.jsx)(W.a,{children:e.errors.year}):null]}),Object(F.jsxs)(De.a,{id:"movie-calification",children:[Object(F.jsx)(Ie.a,{children:"Calificaci\xf3n *"}),Object(F.jsx)(q.a,{type:"number",step:"0.1",name:"calification",value:e.values.calification,onChange:e.handleChange}),e.errors.calification?Object(F.jsx)(W.a,{children:e.errors.calification}):null]}),Object(F.jsxs)(De.a,{id:"movie-duration",children:[Object(F.jsx)(Ie.a,{children:"Duraci\xf3n *"}),Object(F.jsx)(q.a,{type:"number",name:"duration",value:e.values.duration,onChange:e.handleChange}),e.errors.duration?Object(F.jsx)(W.a,{children:e.errors.duration}):null]})]}),Object(F.jsx)(N.a,{type:"submit",bgColor:"blackAlpha.600",width:"60%",children:"Enviar"})]})]})})})},Be=function(){var e=Object(m.b)(),t=Object(E.g)(),r=Object(n.useState)(!1),a=Object(C.a)(r,2),c=(a[0],a[1]),o=Object(m.c)((function(e){return e.crud.search})),i=function(){var t=Object(y.a)(v.a.mark((function t(r){var n,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=r.target.firstElementChild.nextElementSibling.value.toUpperCase(),a=[],t.next=5,_.collection("movies").where("nameMovie","==",n).get().then((function(e){e.forEach((function(e){a.push(Object(d.a)({id:e.id},e.data()))})),c(!1)})).catch((function(e){return c(!0)}));case 5:e(Ve(a));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsxs)(W.a,{py:"20px",maxWidth:"70%",mx:"auto",children:[Object(F.jsxs)(U.a,{as:"form",onSubmit:i,children:[Object(F.jsx)($.a,{cursor:"pointer",mx:"10px",fontSize:"20px",color:"brand.primary",as:ne.b,onClick:function(){e(Ve("")),t.goBack()}}),Object(F.jsx)(q.a,{type:"text",placeholder:"Nombre de la pel\xedcula..."}),Object(F.jsx)(N.a,{bgColor:"brand.primary",type:"submit",children:"Buscar"})]}),Object(F.jsx)(z.a,{px:"50px",children:0===o.length&&Array.isArray(o)?"No hay resultados para tu b\xfasqueda":null})]})},We=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(Be,{}),Object(F.jsx)(qe,{}),Object(F.jsx)(ze,{})]})},Fe=function(e){var t=e.isAuthenticated,r=e.component,n=e.uid,a=Object(Q.a)(e,["isAuthenticated","component","uid"]);return Object(F.jsx)(E.b,Object(d.a)(Object(d.a)({},a),{},{component:function(e){return t&&"Th1NLjQWVLao0xs1jr0yxbMvKE23"===n?Object(F.jsx)(r,Object(d.a)({},e)):Object(F.jsx)(E.a,{to:"/auth/login"})}}))},Pe=function(){var e=Object(n.useState)(!0),t=Object(C.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),o=Object(C.a)(c,2),i=o[0],s=o[1],l=Object(m.b)(),d=Object(m.c)((function(e){return e.auth.uid}));return Object(n.useEffect)((function(){w.a.auth().onAuthStateChanged(function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===t||void 0===t?void 0:t.uid)?(l(I(t.uid,t.displayName)),s(!0)):s(!1),a(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[l,a]),r?Object(F.jsx)("h1",{children:"Cragando..."}):Object(F.jsx)(k.a,{children:Object(F.jsx)("div",{children:Object(F.jsxs)(E.d,{children:[Object(F.jsx)(X,{path:"/auth",component:K,isAuthenticated:i}),Object(F.jsx)(J,{exact:!0,path:"/",component:Re,isAuthenticated:i}),Object(F.jsx)(Fe,{exact:!0,path:"/crud",component:We,isAuthenticated:i,uid:d}),Object(F.jsx)(E.a,{to:"/auth/login"})]})})})};var Te=function(){return Object(F.jsx)(m.a,{store:h,children:Object(F.jsx)(o.a,{theme:O,children:Object(F.jsx)(Pe,{})})})};c.a.render(Object(F.jsx)(Te,{}),document.getElementById("root"))},72:function(e,t,r){}},[[408,1,2]]]);
//# sourceMappingURL=main.4434ae9e.chunk.js.map