function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,o){return r&&_defineProperties(e.prototype,r),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{zqjL:function(e,r,o){"use strict";o.r(r),o.d(r,"ReactiveModule",(function(){return Q}));var n=o("tyNb"),i=o("3Pt+"),l=o("fXoL"),a=o("ofXK"),t=function(e){return{"invalid-feedback":e}};function c(e,r){if(1&e&&(l.Rb(0,"span",40),l.uc(1),l.Qb()),2&e){var o=l.cc();l.fc("ngClass",l.ic(2,t,o.formErrors.fullName)),l.Bb(1),l.wc(" ",o.formErrors.fullName," ")}}function s(e,r){if(1&e&&(l.Rb(0,"span",40),l.uc(1),l.Qb()),2&e){var o=l.cc();l.fc("ngClass",l.ic(2,t,o.formErrors.email)),l.Bb(1),l.wc(" ",o.formErrors.email," ")}}function b(e,r){if(1&e&&(l.Rb(0,"span",40),l.uc(1),l.Qb()),2&e){var o=l.cc();l.fc("ngClass",l.ic(2,t,o.formErrors.phone)),l.Bb(1),l.wc(" ",o.formErrors.phone," ")}}function u(e,r){if(1&e&&(l.Rb(0,"span",40),l.uc(1),l.Qb()),2&e){var o=l.cc();l.fc("ngClass",l.ic(2,t,o.formErrors.skillName)),l.Bb(1),l.wc(" ",o.formErrors.skillName," ")}}function m(e,r){if(1&e&&(l.Rb(0,"span",40),l.uc(1),l.Qb()),2&e){var o=l.cc();l.fc("ngClass",l.ic(2,t,o.formErrors.experienceInYears)),l.Bb(1),l.wc(" ",o.formErrors.experienceInYears," ")}}function f(e,r){if(1&e&&(l.Rb(0,"span",40),l.uc(1),l.Qb()),2&e){var o=l.cc();l.fc("ngClass",l.ic(2,t,o.formErrors.proficiency)),l.Bb(1),l.wc(" ",o.formErrors.proficiency," ")}}var p,d,g,h=function(e,r){return{"is-invalid":e,"is-valid":r}},v=function(e){return{"is-invalid":e}},y=[{path:"",component:(p=function(){function e(r){_classCallCheck(this,e),this.fb=r,this.showPhoneMsg=!1,this.validationMessages={fullName:{required:"Full name is required",minlength:"Full name must be greater than 2 characters.",maxlength:"Full name must be less than 10 characters."},email:{required:"Email is required",pattern:"please add correct email address eg. abc@instancy.com",emailDomain:"Email domain must be instancy.com"},phone:{required:"Phone is required",maxlength:"Phone Number must be equal to 10 digit",pattern:"Please enter only number, characters are not allowed"},skillName:{required:"Skill Name is required"},experienceInYears:{required:"Experience is required"},proficiency:{required:"Proficiency is required"}},this.formErrors={fullName:"",contactPrefernce:"",email:"",phone:"",skillName:"",experienceInYears:"",proficiency:""}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.employeeForm=this.fb.group({fullName:["",[i.p.required,i.p.minLength(2),i.p.maxLength(20)]],contactPrefernce:["emailPref"],email:["Email",[i.p.required,function(e){var r=e.value,o=r.substring(r.lastIndexOf("@")+1);return""==o||o.toLocaleLowerCase()==="instancy.com".toLocaleLowerCase()?null:{emailDomain:!0}},i.p.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],phone:["",[i.p.pattern(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)]],skills:this.fb.group({skillName:["",i.p.required],experienceInYears:["",i.p.required],proficiency:["",i.p.required]})}),this.employeeForm.get("contactPrefernce").valueChanges.subscribe((function(r){e.setContactPrefValidation(r)})),this.employeeForm.valueChanges.subscribe((function(r){e.logKeyValuePairs(e.employeeForm)}))}},{key:"logKeyValuePairs",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.employeeForm;Object.keys(r.controls).forEach((function(o){var n=r.get(o);if(n instanceof i.e)e.logKeyValuePairs(n);else if(e.formErrors[o]="",n&&!n.valid&&(n.touched||n.dirty)){var l=e.validationMessages[o];for(var a in n.errors)a&&(e.formErrors[o]+=l[a]+"  ")}}))}},{key:"onLoadDataClick",value:function(){}},{key:"onResetClick",value:function(){this.employeeForm.patchValue({fullName:[""],email:[""],phone:[""],skills:{skillName:[""],experienceInYears:[""],proficiency:[""]}})}},{key:"saveEmpoyee",value:function(){console.log(this.employeeForm.value),console.log(this.employeeForm.controls.fullName.touched),console.log(this.employeeForm.get("fullName").value)}},{key:"setContactPrefValidation",value:function(e){var r=this.employeeForm.get("phone");"phonePref"===e?(r.setValidators([i.p.required,i.p.maxLength(10),i.p.pattern(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)]),this.showPhoneMsg=!0):(r.clearValidators(),this.showPhoneMsg=!1),r.updateValueAndValidity()}}]),e}(),p.\u0275fac=function(e){return new(e||p)(l.Mb(i.b))},p.\u0275cmp=l.Gb({type:p,selectors:[["app-reactive-form"]],decls:78,vars:35,consts:[[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"card","mt-4"],[1,"card-header"],[1,"card-body"],["novalidate","",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","fullname",1,"col-sm-3","text-md-right","form-weight-bold","col-form-label"],[1,"col-sm-8"],["type","text","id","fullName","formControlName","fullName",1,"form-control",3,"ngClass","blur"],[3,"ngClass",4,"ngIf"],[1,"form-group","row","align-items-center"],[1,"col-sm-3","text-md-right","form-weight-bold","col-form-label"],[1,"custom-control","custom-radio","custom-control-inline"],["type","radio","id","emailPref","formControlName","contactPrefernce","value","emailPref",1,"custom-control-input"],["for","emailPref",1,"custom-control-label"],["type","radio","id","phonePref","value","phonePref","formControlName","contactPrefernce",1,"custom-control-input"],["for","phonePref",1,"custom-control-label"],["for","email",1,"col-sm-3","text-md-right","form-weight-bold","col-form-label"],["type","email","id","email","formControlName","email",1,"form-control",3,"ngClass","blur"],["for","phone",1,"col-sm-3","text-md-right","form-weight-bold","col-form-label"],["type","phone","id","phone","formControlName","phone",1,"form-control",3,"ngClass","blur"],[1,""],["formGroupName","skills"],[1,"row","form-group"],["for","email",1,"text-md-right","form-weight-bold","col-form-label","col-sm-3"],[1,"col-sm-6"],["type","text","formControlName","skillName","id","skillName",1,"form-control",3,"ngClass","blur"],["type","text","formControlName","experienceInYears","id","experienceInYears",1,"form-control",3,"ngClass","blur"],["type","radio","id","beginner","formControlName","proficiency","value","beginner",1,"custom-control-input",3,"ngClass","blur"],["for","beginner",1,"custom-control-label"],["type","radio","id","intermediate","value","intermediate","formControlName","proficiency",1,"custom-control-input",3,"ngClass","blur"],["for","intermediate",1,"custom-control-label"],["type","radio","id","advanced","value","advanced","formControlName","proficiency",1,"custom-control-input",3,"ngClass","blur"],["for","advanced",1,"custom-control-label"],["for","",1,"col-sm-3","col-md-right"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled"],["type","button",1,"btn","btn-primary","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[3,"ngClass"]],template:function(e,r){1&e&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Rb(3,"div",3),l.Rb(4,"div",4),l.uc(5,"Create Employee"),l.Qb(),l.Rb(6,"div",5),l.Rb(7,"form",6),l.Zb("ngSubmit",(function(){return r.saveEmpoyee()})),l.Rb(8,"div",7),l.Rb(9,"label",8),l.uc(10,"Full Name"),l.Qb(),l.Rb(11,"div",9),l.Rb(12,"input",10),l.Zb("blur",(function(){return r.logKeyValuePairs()})),l.Qb(),l.tc(13,c,2,4,"span",11),l.Qb(),l.Qb(),l.Rb(14,"div",12),l.Rb(15,"label",13),l.uc(16,"Contact Preference"),l.Qb(),l.Rb(17,"div",9),l.Rb(18,"div",14),l.Nb(19,"input",15),l.Rb(20,"label",16),l.uc(21,"Email"),l.Qb(),l.Qb(),l.Rb(22,"div",14),l.Nb(23,"input",17),l.Rb(24,"label",18),l.uc(25,"Phone"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(26,"div",7),l.Rb(27,"label",19),l.uc(28,"Email"),l.Qb(),l.Rb(29,"div",9),l.Rb(30,"input",20),l.Zb("blur",(function(){return r.logKeyValuePairs()})),l.Qb(),l.tc(31,s,2,4,"span",11),l.Qb(),l.Qb(),l.Rb(32,"div",7),l.Rb(33,"label",21),l.uc(34,"Phone"),l.Qb(),l.Rb(35,"div",9),l.Rb(36,"input",22),l.Zb("blur",(function(){return r.logKeyValuePairs()})),l.Qb(),l.tc(37,b,2,4,"span",11),l.Qb(),l.Qb(),l.Rb(38,"div",23),l.Rb(39,"div",24),l.Rb(40,"div",25),l.Rb(41,"label",26),l.uc(42,"Skills"),l.Qb(),l.Rb(43,"div",27),l.Rb(44,"input",28),l.Zb("blur",(function(){return r.logKeyValuePairs()})),l.Qb(),l.tc(45,u,2,4,"span",11),l.Qb(),l.Qb(),l.Rb(46,"div",25),l.Rb(47,"label",26),l.uc(48,"Experience"),l.Qb(),l.Rb(49,"div",27),l.Rb(50,"input",29),l.Zb("blur",(function(){return r.logKeyValuePairs()})),l.Qb(),l.tc(51,m,2,4,"span",11),l.Qb(),l.Qb(),l.Rb(52,"div",12),l.Rb(53,"label",13),l.uc(54,"Proficiency"),l.Qb(),l.Rb(55,"div",9),l.Rb(56,"div",14),l.Rb(57,"input",30),l.Zb("blur",(function(){return r.logKeyValuePairs()})),l.Qb(),l.Rb(58,"label",31),l.uc(59,"Beginner"),l.Qb(),l.Qb(),l.Rb(60,"div",14),l.Rb(61,"input",32),l.Zb("blur",(function(){return r.logKeyValuePairs()})),l.Qb(),l.Rb(62,"label",33),l.uc(63,"Intermediate"),l.Qb(),l.Qb(),l.Rb(64,"div",14),l.Rb(65,"input",34),l.Zb("blur",(function(){return r.logKeyValuePairs()})),l.Qb(),l.Rb(66,"label",35),l.uc(67,"Advanced"),l.Qb(),l.Qb(),l.tc(68,f,2,4,"span",11),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(69,"div",7),l.Nb(70,"label",36),l.Rb(71,"div",9),l.Rb(72,"button",37),l.uc(73,"Save"),l.Qb(),l.Rb(74,"button",38),l.Zb("click",(function(){return r.onLoadDataClick()})),l.uc(75,"Edit"),l.Qb(),l.Rb(76,"button",39),l.Zb("click",(function(){return r.onResetClick()})),l.uc(77,"Reset"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.Bb(7),l.fc("formGroup",r.employeeForm),l.Bb(5),l.fc("ngClass",l.jc(16,h,r.formErrors.fullName,r.employeeForm.get("fullName").valid)),l.Bb(1),l.fc("ngIf",r.formErrors.fullName),l.Bb(17),l.fc("ngClass",l.jc(19,h,r.formErrors.email,r.employeeForm.get("email").valid)),l.Bb(1),l.fc("ngIf",r.formErrors.email),l.Bb(5),l.fc("ngClass",l.jc(22,h,r.formErrors.phone,r.employeeForm.get("phone").valid&&r.employeeForm.get("phone").touched&&r.showPhoneMsg)),l.Bb(1),l.fc("ngIf",r.formErrors.phone),l.Bb(7),l.fc("ngClass",l.ic(25,v,r.formErrors.skillName)),l.Bb(1),l.fc("ngIf",r.formErrors.skillName),l.Bb(5),l.fc("ngClass",l.ic(27,v,r.formErrors.experienceInYears)),l.Bb(1),l.fc("ngIf",r.formErrors.experienceInYears),l.Bb(6),l.fc("ngClass",l.ic(29,v,r.formErrors.proficiency)),l.Bb(4),l.fc("ngClass",l.ic(31,v,r.formErrors.proficiency)),l.Bb(4),l.fc("ngClass",l.ic(33,v,r.formErrors.proficiency)),l.Bb(3),l.fc("ngIf",r.formErrors.proficiency),l.Bb(4),l.fc("disabled",!r.employeeForm.valid))},directives:[i.q,i.k,i.f,i.a,i.j,i.d,a.h,a.j,i.n,i.g],styles:[""]}),p)}],R=((d=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:d}),d.\u0275inj=l.Jb({factory:function(e){return new(e||d)},imports:[[n.d.forChild(y)],n.d]}),d),C=o("PCNd"),Q=((g=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:g}),g.\u0275inj=l.Jb({factory:function(e){return new(e||g)},imports:[[R,C.a]]}),g)}}]);