function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{i98n:function(n,t,e){"use strict";e.r(t),e.d(t,"ResumeModule",(function(){return v}));var i=e("tyNb"),o=e("2PxK"),b=e("fXoL"),a=e("ofXK"),c=e("3Pt+");function r(n,t){if(1&n){var e=b.Pb();b.Ob(0,"div",90),b.Wb("click",(function(){b.kc(e);var n=t.$implicit;return b.Zb().showProjectDetails(n)})),b.Ob(1,"p",91),b.qc(2),b.Nb(),b.Nb()}if(2&n){var i=t.$implicit;b.Cb("project-",t.index+1," project-card card-style p-3 d-flex flex-column justify-content-center align-items-center"),b.Ab(2),b.rc(i.ProjectName)}}function d(n,t){if(1&n&&(b.Ob(0,"p"),b.qc(1),b.Nb()),2&n){var e=b.Zb(2);b.Ab(1),b.sc(" ",e.projectDetails.ProjectDesc," ")}}function s(n,t){1&n&&(b.Ob(0,"div",104),b.qc(1," No description available "),b.Nb())}function O(n,t){if(1&n&&(b.Ob(0,"div",92),b.Ob(1,"div",93),b.Ob(2,"div",94),b.Ob(3,"div",95),b.Ob(4,"h4",96),b.qc(5),b.Nb(),b.Ob(6,"button",97),b.Mb(7,"i",98),b.Nb(),b.Nb(),b.Ob(8,"div",99),b.pc(9,d,2,1,"p",100),b.pc(10,s,2,0,"div",101),b.Nb(),b.Ob(11,"div",102),b.Ob(12,"button",103),b.qc(13," Close "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&n){var e=b.Zb();b.Ab(5),b.rc(e.projectDetails.ProjectName),b.Ab(4),b.cc("ngIf",e.projectDetails.ProjectDesc.length>0),b.Ab(1),b.cc("ngIf",0==e.projectDetails.ProjectDesc.length)}}var p,l,g,N=[{path:"",component:(p=function(){function n(t,e){_classCallCheck(this,n),this.elementRef=t,this.remote=e,this.title="app",this.state="hide"}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this,t=window.innerWidth;console.log(t),$(window).scroll((function(){$(".animated").each((function(){$(this).offset().top<$(window).scrollTop()+600&&t>992&&$(this).addClass("slideInUp")}))})),this.remote.getProjects().subscribe((function(t){n.projects=t.projectsData}),(function(n){console.log(n)}),(function(){}))}},{key:"scrollToSection",value:function(n){var t=this.elementRef.nativeElement.querySelector("#".concat(n)).offsetTop;$("body, html").animate({scrollTop:t-120},500)}},{key:"showProjectDetails",value:function(n){$("#productDetails").modal("show"),this.projectDetails=n}}]),n}(),p.\u0275fac=function(n){return new(n||p)(b.Lb(b.l),b.Lb(o.a))},p.\u0275cmp=b.Fb({type:p,selectors:[["app-resume"]],decls:373,vars:2,consts:[[1,"container-fluid","header-section"],[1,"row"],["src","assets/images/NewProject.jpg",1,"img-fluid","header-img"],[1,"resumetemplate"],[1,"container"],[1,"row","headerSection","py-4","p-sm-4","card-style","animated","slideInUp","px-0"],[1,"mt-lg-4","mt-xl-0","px-4","px-sm-0","mt-md-0","mt-2"],[1,"mt-md-2","mt-4","mt-xl-4"],[1,"infos"],[1,"profile-list"],[1,"clearfix"],[1,"title"],[1,"fas","fa-envelope"],[1,"content"],[1,"fab","fa-skype"],[1,"fas","fa-phone-volume"],[1,"fas","fa-map-marker"],[1,"links","mt-3","mt-lg-4"],["href","https://www.linkedin.com/in/dileep-singh-2439a574\n        ","target","_blank",1,"social","btn-floating"],[1,"fab","fa-linkedin-in"],[1,"class-sm-5","profile-image"],["id","profile",1,"px-4","px-sm-0","text-center"],["src","assets/images/profile1.jpg",1,"img-fluid","profile-img"],[1,"slant"],[1,"about-section","animated"],[1,"row","about-card","card-style"],[1,"col-sm-12"],[1,"card-content","py-4","px-0","px-sm-4"],["id","about-btn",1,"card-action","py-4"],[1,"about-btn"],["href","assets/doc/Resume.pdf","download","Resume",1,"waves-effect","btn-style"],["href","#",1,"waves-effect","btn-style",3,"click"],[1,"education-heading","animated"],[1,"card-content","text-center"],["src","assets/images/scholarship.png",1,"img-fluid","card-style","p-1"],[1,"pl-3"],[1,"education"],[1,"timeline"],[1,"container-timeline","left","animated","bounceInRight"],[1,"content-timeline"],["title","Indira Gandhi National Open University",1,"mb-1","text-truncate"],[1,"font-weight-600","d-none","d-sm-inline"],[1,"mb-1","text-truncate"],[1,"container-timeline","right","animated","bounceInLeft"],["title","Guru Gobind Singh Indraprastha University",1,"mb-1","text-truncate"],["title","Central Board of Secondary Education",1,"mb-1","text-truncate"],["src","assets/images/sliders.png",1,"img-fluid","card-style","p-1"],[1,"skills-section","animated"],[1,"text-center","heading","mb-0","py-3"],[1,"grid","p-4"],[1,""],[1,"float-right"],[1,"progress-section"],[1,"progress"],[1,"progress-bar",2,"width","90%"],[1,"progress-bar",2,"width","70%"],[1,"progress-bar",2,"width","50%"],["src","assets/images/layers.png",1,"img-fluid","card-style","p-1"],[1,"container-timeline","left","animated"],[1,"container-timeline","right","animated"],["src","assets/images/briefcase.png",1,"img-fluid","card-style","p-1"],[1,"portofolio-section","animated"],[1,"grid"],[3,"class","click",4,"ngFor","ngForOf"],["src","assets/images/like.png",1,"img-fluid","card-style","p-1"],[1,"interest-section"],[1,"grid",2,"border-top","1px solid #ddd"],[1,"text-white",2,"background","#06a763"],[1,"text-center","pt-4","pb-4"],[1,"fas","fa-digital-tachograph"],[2,"margin-bottom","0"],[1,"fab","fa-contao"],["id","contact",1,"education-heading","animated"],["src","assets/images/contact.png",1,"img-fluid","card-style","p-1"],[1,"contact-section","animated"],[1,"col-sm-5","mb-4"],[1,"card-style","p-4"],[1,"form-group"],["for","name"],["type","text","id","name",1,"form-control"],["for","subject"],["type","text","id","subject",1,"form-control"],["for","email"],["type","email","id","email",1,"form-control"],["for","comment"],["rows","5","id","comment",1,"form-control"],["type","submit",1,"btn","btn-primary"],[1,"col-sm-7","mb-4"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243479.9554018825!2d78.4312733477722!3d17.5373571399614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb84ad48255d29%3A0x410841a999b3433!2sSecunderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1524336427434","width","100%","height","470","frameborder","0","allowfullscreen","",2,"border","0"],["class","modal fade","id","productDetails",4,"ngIf"],[3,"click"],[1,"project-title","font-weight-300"],["id","productDetails",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content","shadow"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal",1,"close"],[1,"fas","fa-times"],[1,"modal-body"],[4,"ngIf"],["class","d-flex justify-content-center align-items-center",4,"ngIf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-primary"],[1,"d-flex","justify-content-center","align-items-center"]],template:function(n,t){1&n&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Mb(2,"img",2),b.Nb(),b.Nb(),b.Ob(3,"section",3),b.Ob(4,"div",4),b.Ob(5,"div",5),b.Ob(6,"div",6),b.Ob(7,"h4",7),b.qc(8,"DILEEP SINGH"),b.Nb(),b.Ob(9,"h6"),b.qc(10,"Frontend Developer/Angular Developer"),b.Nb(),b.Ob(11,"div",8),b.Ob(12,"ul",9),b.Ob(13,"li",10),b.Ob(14,"span",11),b.Mb(15,"i",12),b.Nb(),b.Ob(16,"span",13),b.qc(17,"di.singh1992@gmail.com"),b.Nb(),b.Nb(),b.Ob(18,"li",10),b.Ob(19,"span",11),b.Mb(20,"i",14),b.Nb(),b.Ob(21,"span",13),b.qc(22,"live:sibloo"),b.Nb(),b.Nb(),b.Ob(23,"li",10),b.Ob(24,"span",11),b.Mb(25,"i",15),b.Nb(),b.Ob(26,"span",13),b.qc(27,"+91 9971463605"),b.Nb(),b.Nb(),b.Ob(28,"li",10),b.Ob(29,"span",11),b.Mb(30,"i",16),b.Nb(),b.Ob(31,"span",13),b.qc(32,"Hyderabad, Telengana"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(33,"div",17),b.Ob(34,"a",18),b.Mb(35,"i",19),b.Nb(),b.Nb(),b.Nb(),b.Ob(36,"div",20),b.Ob(37,"div",21),b.Mb(38,"img",22),b.Mb(39,"div",23),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(40,"section",24),b.Ob(41,"div",4),b.Ob(42,"div",25),b.Ob(43,"div",26),b.Ob(44,"div",27),b.Ob(45,"p"),b.qc(46," Hello! I\u2019m Dileep Singh. Frontend Developer with over 3+ years of experience specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced Angular, JQuery, JavaScript, HTML5, CSS, SASS, JSON. "),b.Nb(),b.Nb(),b.Ob(47,"div",28),b.Ob(48,"div",29),b.Ob(49,"a",30),b.qc(50,"Download CV"),b.Nb(),b.Ob(51,"a",31),b.Wb("click",(function(n){return t.scrollToSection("contact"),n.preventDefault()})),b.qc(52,"Contact Me"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(53,"section",32),b.Ob(54,"div",4),b.Ob(55,"div",1),b.Ob(56,"div",26),b.Ob(57,"div",33),b.Ob(58,"h4"),b.Mb(59,"img",34),b.Ob(60,"span",35),b.qc(61,"EDUCATION"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(62,"section",36),b.Ob(63,"div",4),b.Ob(64,"div",1),b.Ob(65,"div",26),b.Ob(66,"div",37),b.Ob(67,"div",38),b.Ob(68,"div",39),b.Ob(69,"h4"),b.qc(70,"Master of Computer Applications, 2018"),b.Nb(),b.Ob(71,"div",40),b.Ob(72,"span",41),b.qc(73,"University:"),b.Nb(),b.qc(74," (IGNOU) Indira Gandhi National Open University "),b.Nb(),b.Ob(75,"div",42),b.Ob(76,"span",41),b.qc(77,"Location:"),b.Nb(),b.qc(78," New Delhi "),b.Nb(),b.Nb(),b.Nb(),b.Ob(79,"div",43),b.Ob(80,"div",39),b.Ob(81,"h4"),b.qc(82,"Bachelor of Computer Applications, 2012"),b.Nb(),b.Ob(83,"div",44),b.Ob(84,"span",41),b.qc(85,"University:"),b.Nb(),b.qc(86," (GGSIPU) Guru Gobind Singh Indraprastha University "),b.Nb(),b.Ob(87,"div",42),b.Ob(88,"span",41),b.qc(89,"Location:"),b.Nb(),b.qc(90," New Delhi "),b.Nb(),b.Nb(),b.Nb(),b.Ob(91,"div",38),b.Ob(92,"div",39),b.Ob(93,"h4"),b.qc(94,"12"),b.Ob(95,"sup"),b.qc(96,"th"),b.Nb(),b.qc(97," Class, 2009"),b.Nb(),b.Ob(98,"div",45),b.Ob(99,"span",41),b.qc(100,"Board:"),b.Nb(),b.qc(101," (CBSE) Central Board of Secondary Education "),b.Nb(),b.Ob(102,"div",42),b.Ob(103,"span",41),b.qc(104,"Location:"),b.Nb(),b.qc(105," New Delhi "),b.Nb(),b.Nb(),b.Nb(),b.Ob(106,"div",43),b.Ob(107,"div",39),b.Ob(108,"h4"),b.qc(109,"10"),b.Ob(110,"sup"),b.qc(111,"th"),b.Nb(),b.qc(112," Class, 2007"),b.Nb(),b.Ob(113,"div",45),b.Ob(114,"span",41),b.qc(115,"Board:"),b.Nb(),b.qc(116," (CBSE) Central Board of Secondary Education "),b.Nb(),b.Ob(117,"div",42),b.Ob(118,"span",41),b.qc(119,"Location:"),b.Nb(),b.qc(120," New Delhi "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(121,"section",32),b.Ob(122,"div",4),b.Ob(123,"div",1),b.Ob(124,"div",26),b.Ob(125,"div",33),b.Ob(126,"h4"),b.Mb(127,"img",46),b.Ob(128,"span",35),b.qc(129,"SKILLS"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(130,"section",47),b.Ob(131,"div",4),b.Ob(132,"p",48),b.qc(133,"Software"),b.Nb(),b.Ob(134,"div",49),b.Ob(135,"div",50),b.Ob(136,"span"),b.qc(137,"HTML5"),b.Nb(),b.Ob(138,"span",51),b.qc(139,"90%"),b.Nb(),b.Ob(140,"div",52),b.Ob(141,"div",53),b.Mb(142,"div",54),b.Nb(),b.Nb(),b.Ob(143,"span"),b.qc(144,"Angular"),b.Nb(),b.Ob(145,"span",51),b.qc(146,"90%"),b.Nb(),b.Ob(147,"div",52),b.Ob(148,"div",53),b.Mb(149,"div",54),b.Nb(),b.Nb(),b.Ob(150,"span"),b.qc(151,"CSS3"),b.Nb(),b.Ob(152,"span",51),b.qc(153,"90%"),b.Nb(),b.Ob(154,"div",52),b.Ob(155,"div",53),b.Mb(156,"div",54),b.Nb(),b.Nb(),b.Nb(),b.Ob(157,"div",50),b.Ob(158,"span"),b.qc(159,"JavaScript"),b.Nb(),b.Ob(160,"span",51),b.qc(161,"70%"),b.Nb(),b.Ob(162,"div",52),b.Ob(163,"div",53),b.Mb(164,"div",55),b.Nb(),b.Nb(),b.Ob(165,"span"),b.qc(166,"JQuery"),b.Nb(),b.Ob(167,"span",51),b.qc(168,"70%"),b.Nb(),b.Ob(169,"div",52),b.Ob(170,"div",53),b.Mb(171,"div",55),b.Nb(),b.Nb(),b.Ob(172,"span"),b.qc(173,"JSON"),b.Nb(),b.Ob(174,"span",51),b.qc(175,"90%"),b.Nb(),b.Ob(176,"div",52),b.Ob(177,"div",53),b.Mb(178,"div",54),b.Nb(),b.Nb(),b.Nb(),b.Ob(179,"div",50),b.Ob(180,"span"),b.qc(181,"Bootstrap"),b.Nb(),b.Ob(182,"span",51),b.qc(183,"90%"),b.Nb(),b.Ob(184,"div",52),b.Ob(185,"div",53),b.Mb(186,"div",54),b.Nb(),b.Nb(),b.Ob(187,"span"),b.qc(188,"Angular Material CDK"),b.Nb(),b.Ob(189,"span",51),b.qc(190,"50%"),b.Nb(),b.Ob(191,"div",52),b.Ob(192,"div",53),b.Mb(193,"div",56),b.Nb(),b.Nb(),b.Ob(194,"span"),b.qc(195,"SASS"),b.Nb(),b.Ob(196,"span",51),b.qc(197,"50%"),b.Nb(),b.Ob(198,"div",52),b.Ob(199,"div",53),b.Mb(200,"div",56),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(201,"section",32),b.Ob(202,"div",4),b.Ob(203,"div",1),b.Ob(204,"div",26),b.Ob(205,"div",33),b.Ob(206,"h4"),b.Mb(207,"img",57),b.Ob(208,"span",35),b.qc(209,"EXPERIENCE"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(210,"section",36),b.Ob(211,"div",4),b.Ob(212,"div",1),b.Ob(213,"div",26),b.Ob(214,"div",37),b.Ob(215,"div",58),b.Ob(216,"div",39),b.Ob(217,"h4"),b.qc(218,"2020(Present)"),b.Nb(),b.Ob(219,"div",42),b.Ob(220,"span",41),b.qc(221,"Experience:"),b.Nb(),b.qc(222," 3 Years 3 Months "),b.Nb(),b.Ob(223,"div",42),b.Ob(224,"span",41),b.qc(225,"Organization:"),b.Nb(),b.qc(226," Instancy Software India Pvt. Ltd. "),b.Nb(),b.Ob(227,"div",42),b.Ob(228,"span",41),b.qc(229,"Designation:"),b.Nb(),b.qc(230," Frontend Developer "),b.Nb(),b.Ob(231,"div",42),b.Ob(232,"span",41),b.qc(233,"Location:"),b.Nb(),b.qc(234," Begumpet, Hyderabad, Telangana "),b.Nb(),b.Nb(),b.Nb(),b.Ob(235,"div",59),b.Ob(236,"div",39),b.Ob(237,"h4"),b.qc(238,"2016-2017"),b.Nb(),b.Ob(239,"div",42),b.Ob(240,"span",41),b.qc(241,"Experience:"),b.Nb(),b.qc(242," 3 Months "),b.Nb(),b.Ob(243,"div",42),b.Ob(244,"span",41),b.qc(245,"Organization:"),b.Nb(),b.qc(246," IGL (Indraprastha Gas Limited). "),b.Nb(),b.Ob(247,"div",42),b.Ob(248,"span",41),b.qc(249,"Designation:"),b.Nb(),b.qc(250," MIS Executive "),b.Nb(),b.Ob(251,"div",42),b.Ob(252,"span",41),b.qc(253,"Location:"),b.Nb(),b.qc(254," Saket, New Delhi "),b.Nb(),b.Nb(),b.Nb(),b.Ob(255,"div",58),b.Ob(256,"div",39),b.Ob(257,"h4"),b.qc(258,"2015"),b.Nb(),b.Ob(259,"div",42),b.Ob(260,"span",41),b.qc(261,"Experience:"),b.Nb(),b.qc(262," 3 Months "),b.Nb(),b.Ob(263,"div",42),b.Ob(264,"span",41),b.qc(265,"Organization:"),b.Nb(),b.qc(266," Cuisinelinks India Private Limited "),b.Nb(),b.Ob(267,"div",42),b.Ob(268,"span",41),b.qc(269,"Designation:"),b.Nb(),b.qc(270," UI Developer "),b.Nb(),b.Ob(271,"div",42),b.Ob(272,"span",41),b.qc(273,"Location:"),b.Nb(),b.qc(274," Bhikaji Cama Place, Delhi "),b.Nb(),b.Nb(),b.Nb(),b.Ob(275,"div",59),b.Ob(276,"div",39),b.Ob(277,"h4"),b.qc(278,"2013-2015"),b.Nb(),b.Ob(279,"div",42),b.Ob(280,"span",41),b.qc(281,"Experience:"),b.Nb(),b.qc(282," 2 Years "),b.Nb(),b.Ob(283,"div",42),b.Ob(284,"span",41),b.qc(285,"Organization:"),b.Nb(),b.qc(286," Aglasem Edu. Tech Pvt. Ltd. "),b.Nb(),b.Ob(287,"div",42),b.Ob(288,"span",41),b.qc(289,"Designation:"),b.Nb(),b.qc(290," Data Executive "),b.Nb(),b.Ob(291,"div",42),b.Ob(292,"span",41),b.qc(293,"Location:"),b.Nb(),b.qc(294," Netaji Subhash Place, New Delhi "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(295,"section",32),b.Ob(296,"div",4),b.Ob(297,"div",1),b.Ob(298,"div",26),b.Ob(299,"div",33),b.Ob(300,"h4"),b.Mb(301,"img",60),b.Ob(302,"span",35),b.qc(303,"PROJECTS"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(304,"section",61),b.Ob(305,"div",4),b.Ob(306,"div",62),b.pc(307,r,3,4,"div",63),b.Nb(),b.Nb(),b.Nb(),b.Ob(308,"section",32),b.Ob(309,"div",4),b.Ob(310,"div",1),b.Ob(311,"div",26),b.Ob(312,"div",33),b.Ob(313,"h4"),b.Mb(314,"img",64),b.Ob(315,"span",35),b.qc(316,"INTEREST"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(317,"section",24),b.Ob(318,"div",4),b.Ob(319,"div",25),b.Ob(320,"div",26),b.Ob(321,"div",27),b.Ob(322,"p"),b.qc(323," Hello! I\u2019m Dileep Singh. Frontend Developer with over 3+ years of experience specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced Angular, JQuery, JavaScript, HTML5, CSS, SASS, JSON. "),b.Nb(),b.Nb(),b.Ob(324,"div",65),b.Ob(325,"div",66),b.Ob(326,"div",67),b.Ob(327,"div",68),b.Mb(328,"i",69),b.Ob(329,"p",70),b.qc(330,"Learn New Things"),b.Nb(),b.Nb(),b.Nb(),b.Ob(331,"div",50),b.Ob(332,"div",68),b.Mb(333,"i",71),b.Ob(334,"p",70),b.qc(335,"Cricket"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(336,"section",72),b.Ob(337,"div",4),b.Ob(338,"div",1),b.Ob(339,"div",26),b.Ob(340,"div",33),b.Ob(341,"h4"),b.Mb(342,"img",73),b.Ob(343,"span",35),b.qc(344,"CONTACT"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(345,"section",74),b.Ob(346,"div",4),b.Ob(347,"div",1),b.Ob(348,"div",75),b.Ob(349,"div",76),b.Ob(350,"form"),b.Ob(351,"div",77),b.Ob(352,"label",78),b.qc(353,"Name"),b.Nb(),b.Mb(354,"input",79),b.Nb(),b.Ob(355,"div",77),b.Ob(356,"label",80),b.qc(357,"Subject"),b.Nb(),b.Mb(358,"input",81),b.Nb(),b.Ob(359,"div",77),b.Ob(360,"label",82),b.qc(361,"Password"),b.Nb(),b.Mb(362,"input",83),b.Nb(),b.Ob(363,"div",77),b.Ob(364,"label",84),b.qc(365,"Message"),b.Nb(),b.Mb(366,"textarea",85),b.Nb(),b.Ob(367,"button",86),b.qc(368,"Send"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(369,"div",87),b.Ob(370,"div",76),b.Mb(371,"iframe",88),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.pc(372,O,14,3,"div",89)),2&n&&(b.Ab(307),b.cc("ngForOf",t.projects),b.Ab(65),b.cc("ngIf",t.projectDetails))},directives:[a.i,c.o,c.i,c.j,a.j],styles:["@media (max-width:767px){.container[_ngcontent-%COMP%]{padding-left:30px!important;padding-right:30px!important}.contact-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .education[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding-left:15px!important;padding-right:15px!important}#about-btn[_ngcontent-%COMP%]   .waves-effect[_ngcontent-%COMP%]{display:block;margin-bottom:10px}.profile-image[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]{float:none!important;left:50%!important;transform:translate(-50%);top:-80px!important}.profile-image[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{width:120px!important;height:120px!important;border-radius:50%}.slant[_ngcontent-%COMP%]{display:none}.headerSection[_ngcontent-%COMP%]{grid-auto-rows:auto!important;grid-template-columns:100%!important}.header-section[_ngcontent-%COMP%]   .header-img[_ngcontent-%COMP%]{height:200px!important}}@media (min-width:768px) and (max-width:992px){.container[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important}.container[_ngcontent-%COMP%]   .headerSection[_ngcontent-%COMP%]{grid-auto-rows:280px}#profile[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{width:325px!important}.slant[_ngcontent-%COMP%]{border-width:328px 0 0 100px!important}}.container[_ngcontent-%COMP%]{padding:0 60px}section[_ngcontent-%COMP%]{margin-bottom:70px}.card-style[_ngcontent-%COMP%]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.resumetemplate[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;padding-top:180px}.headerSection[_ngcontent-%COMP%]{color:#fff;background:#06a763;position:relative;display:grid!important;grid-template-columns:65% 35%;grid-auto-rows:348px}.headerSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{display:block;width:100%;font-weight:var(--font-weigh t-300);color:#fff;text-shadow:2px 2px 4px rgba(0,0,0,.29);font-size:2.18rem;line-height:110%;margin:1.14rem 0 .912rem}.headerSection[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]{position:absolute;right:0;z-index:1;top:0}.headerSection[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:392px;height:auto}.headerSection[_ngcontent-%COMP%]   .slant[_ngcontent-%COMP%]{top:0;z-index:1;position:absolute;border-color:rgba(223,50,50,0) transparent transparent #06a763;border-style:solid;border-width:396px 0 0 100px}.headerSection[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{display:block;width:100%;font-weight:300;margin-top:-10px;margin-bottom:20px;font-size:1.2em;color:#fff;text-shadow:2px 2px 4px rgba(0,0,0,.29)}.headerSection[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.4rem;top:3px;position:relative;margin-right:7px}.headerSection[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:25px}.headerSection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0}.headerSection[_ngcontent-%COMP%]   .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:40px;height:40px;background:#1565c0;color:#fff;border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:1.2rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.headerSection[_ngcontent-%COMP%]   .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,.2),0 4px 20px 0 rgba(0,0,0,.19)}.about-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%}.about-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .interest-section[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-left:-15px;margin-right:-15px}.about-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #about-btn[_ngcontent-%COMP%]{border-top:1px solid #ddd;text-align:center}.about-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #about-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#06a763;padding:8px 20px;color:#fff;margin-right:10px}.about-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #about-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .about-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #about-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#06a763;padding:8px 20px;color:#fff;margin-right:10px;text-decoration:none;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.education-heading[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%}.education-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:40px}.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%}.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p.heading[_ngcontent-%COMP%]{background-color:var(--theme-background);color:#fff}.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{background:#06a763;color:#fff;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem}.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .progress-section[_ngcontent-%COMP%]{margin-bottom:10px}.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{height:4px;border-radius:0;background-color:rgba(0,0,0,.1)}.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{background:#fff}.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;text-shadow:2px 2px 4px rgba(0,0,0,.29)}.portofolio-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%}.portofolio-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-auto-rows:180px}.portofolio-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{border-radius:10px;background-color:var(--theme-background);cursor:pointer}.portofolio-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]{color:#fff;font-size:30px;text-align:center}.portofolio-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-more-details[_ngcontent-%COMP%]{color:#fff}.portofolio-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat}.contact-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%}.header-section[_ngcontent-%COMP%]{position:absolute}.header-section[_ngcontent-%COMP%]   .header-img[_ngcontent-%COMP%]{height:400px;width:100%}"]}),p)}],m=((l=function n(){_classCallCheck(this,n)}).\u0275mod=b.Jb({type:l}),l.\u0275inj=b.Ib({factory:function(n){return new(n||l)},imports:[[i.d.forChild(N)],i.d]}),l),f=e("PCNd"),v=((g=function n(){_classCallCheck(this,n)}).\u0275mod=b.Jb({type:g}),g.\u0275inj=b.Ib({factory:function(n){return new(n||g)},imports:[[m,f.a]]}),g)}}]);