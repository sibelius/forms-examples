(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(338)},338:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=a(83),u=a(84),o=a(77),m=a(373),s=a(17),b=a(34),d=a(21),p=a(12),f=a(22);function E(){var e=Object(d.a)(["\n  ","\n"]);return E=function(){return e},e}var v=Object(s.default)(i.b)(E(),f.a),O=function(e){var t=e.route;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Text,{mb:20},"Taming Forms \\o/"),r.a.createElement(p.Flex,null,r.a.createElement(v,{to:"/useState",mr:20},"useState"),r.a.createElement(v,{to:"/useFormik",mr:20},"useFormik"),r.a.createElement(v,{to:"/useField",mr:20},"useField"),r.a.createElement(v,{to:"/validation",mr:20},"Validation")),r.a.createElement(p.Text,{mb:20},"----"),Object(u.a)(t.routes))},j=a(85),x=a(173),g=a(60),h=a(371),w=a(372),S=a(374);function F(){var e=Object(d.a)(["\n  ","\n"]);return F=function(){return e},e}function k(){var e=Object(d.a)(["\n  padding: 20px;\n  padding-right: 50px;\n  ","\n"]);return k=function(){return e},e}var y=Object(s.default)(h.a)(k(),f.b),D=Object(s.default)(w.a)(F(),f.a),q=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(g.a)(e,2),a=t[0],c=t[1],l=Object(b.useSnackbar)().enqueueSnackbar,i=function(e,t){c(Object(x.a)({},a,Object(j.a)({},e,t)))};return r.a.createElement(p.Flex,{flex:1},r.a.createElement(y,{width:800},r.a.createElement(p.Text,{mb:20},"useState"),r.a.createElement(p.Flex,{flexDirection:"column"},r.a.createElement(D,{placeholder:"email",mb:20,value:a.email,onChange:function(e){return i("email",e.target.value)}}),r.a.createElement(D,{type:"password",placeholder:"password",mb:20,value:a.password,onChange:function(e){return i("password",e.target.value)}})),r.a.createElement(S.a,{type:"submit",onClick:function(){l("submit:  ".concat(JSON.stringify(a)),{preventDuplicate:!0,persist:!1})}},"Submit")))},C=a(29);function T(){var e=Object(d.a)(["\n  ","\n"]);return T=function(){return e},e}function z(){var e=Object(d.a)(["\n  padding: 20px;\n  padding-right: 50px;\n  ","\n"]);return z=function(){return e},e}var A=Object(s.default)(h.a)(z(),f.b),Z=Object(s.default)(w.a)(T(),f.a),J=function(e){var t=Object(b.useSnackbar)().enqueueSnackbar,a=Object(C.d)({initialValues:{email:"",password:""},onSubmit:function(e){t("submit:  ".concat(JSON.stringify(e)),{preventDuplicate:!0,persist:!1})}}),n=a.values,c=a.setFieldValue,l=a.handleSubmit;return r.a.createElement(p.Flex,{flex:1},r.a.createElement(A,{width:800},r.a.createElement(p.Text,{mb:20},"useFormik"),r.a.createElement(C.b,{value:a},r.a.createElement(p.Flex,{flexDirection:"column"},r.a.createElement(Z,{placeholder:"email",mb:20,value:n.email,onChange:function(e){return c("email",e.target.value)}}),r.a.createElement(Z,{type:"password",placeholder:"password",mb:20,value:n.password,onChange:function(e){return c("password",e.target.value)}})),r.a.createElement(S.a,{type:"submit",onClick:l},"Submit"))))};function V(){var e=Object(d.a)(["\n  ","\n"]);return V=function(){return e},e}function N(){var e=Object(d.a)(["\n  padding: 20px;\n  padding-right: 50px;\n  ","\n"]);return N=function(){return e},e}var P=Object(s.default)(h.a)(N(),f.b),I=Object(s.default)(w.a)(V(),f.a),$=function(e){var t=Object(C.c)(e.name),a=Object(g.a)(t,2),n=a[0],c=a[1];return console.log("meta: ",c),r.a.createElement(I,Object.assign({},e,n))},B=function(e){var t=Object(b.useSnackbar)().enqueueSnackbar,a=Object(C.d)({initialValues:{email:"",password:""},onSubmit:function(e){t("submit:  ".concat(JSON.stringify(e)),{preventDuplicate:!0,persist:!1})}}),n=a.handleSubmit;return r.a.createElement(p.Flex,{flex:1},r.a.createElement(P,{width:800},r.a.createElement(p.Text,{mb:20},"useField"),r.a.createElement(C.b,{value:a},r.a.createElement(p.Flex,{flexDirection:"column"},r.a.createElement($,{name:"email",placeholder:"email",mb:20}),r.a.createElement($,{name:"password",type:"password",placeholder:"password",mb:20})),r.a.createElement(S.a,{type:"submit",onClick:n},"Submit"))))},M=a(49),Y=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function _(){var e=Object(d.a)(["\n  ","\n"]);return _=function(){return e},e}function G(){var e=Object(d.a)(["\n  padding: 20px;\n  padding-right: 50px;\n  ","\n"]);return G=function(){return e},e}M.addMethod(M.string,"email",function(){return this.test("email","Invalid Email",function(e){return Y.test(e)})});var H=Object(s.default)(h.a)(G(),f.b),K=Object(s.default)(w.a)(_(),f.a),L=function(e){var t=Object(C.c)(e.name),a=Object(g.a)(t,2),n=a[0],c=a[1];return console.log("meta: ",c),r.a.createElement(p.Flex,{mb:10,flexDirection:"column"},r.a.createElement(K,Object.assign({},e,n)),r.a.createElement(C.a,{name:e.name}))},Q=[{component:O,routes:[{path:"/useState",exact:!0,component:q},{path:"/useFormik",exact:!0,component:J},{path:"/useField",exact:!0,component:B},{path:"/validation",exact:!0,component:function(e){var t=Object(b.useSnackbar)().enqueueSnackbar,a=M.object().shape({email:M.string().email().required("Email is required"),password:M.string().required("Password is required")}),n=Object(C.d)({initialValues:{email:"",password:""},validationSchema:a,onSubmit:function(e){t("submit:  ".concat(JSON.stringify(e)),{preventDuplicate:!0,persist:!1})}}),c=n.handleSubmit;return r.a.createElement(p.Flex,{flex:1},r.a.createElement(H,{width:800},r.a.createElement(p.Text,{mb:20},"Yup Validation"),r.a.createElement(C.b,{value:n},r.a.createElement(p.Flex,{flexDirection:"column"},r.a.createElement(L,{name:"email",placeholder:"email",mb:20}),r.a.createElement(L,{name:"password",type:"password",placeholder:"password",mb:20})),r.a.createElement(S.a,{type:"submit",onClick:c},"Submit"))))}}]}],R=Object(o.a)(),U=function(){return r.a.createElement(s.ThemeProvider,{theme:R},r.a.createElement(m.b,{injectFirst:!0},r.a.createElement(b.SnackbarProvider,null,r.a.createElement(i.a,null,Object(u.a)(Q)))))};l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.7fd1fe1f.chunk.js.map