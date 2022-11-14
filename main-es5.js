function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rmenu_rmenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./rmenu/rmenu.component */
    "./src/app/rmenu/rmenu.component.ts");
    /* harmony import */


    var _main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-resume/main-resume.component */
    "./src/app/main-resume/main-resume.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Resume';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "mani"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rmenu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main-resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }
      },
      directives: [_rmenu_rmenu_component__WEBPACK_IMPORTED_MODULE_1__["RMenuComponent"], _main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_2__["MainResumeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".mani[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n}\n.mani[_ngcontent-%COMP%]   app-rmenu[_ngcontent-%COMP%] {\n  z-index: 5;\n  position: fixed;\n  right: 0;\n  bottom: 1em;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL215LXJlc3VtZS9teS1yZXN1bWUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURBRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuaXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYXBwLXJtZW51e1xuICAgIHotaW5kZXg6IDU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIHdpZHRoOiAzMCVcbiAgfVxuICBcbn1cbiIsIi5tYW5pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYW5pIGFwcC1ybWVudSB7XG4gIHotaW5kZXg6IDU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMWVtO1xuICB3aWR0aDogMzAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-resume/main-resume.component */
    "./src/app/main-resume/main-resume.component.ts");
    /* harmony import */


    var _rmenu_rmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rmenu/rmenu.component */
    "./src/app/rmenu/rmenu.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_4__["MainResumeComponent"], _rmenu_rmenu_component__WEBPACK_IMPORTED_MODULE_5__["RMenuComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_4__["MainResumeComponent"], _rmenu_rmenu_component__WEBPACK_IMPORTED_MODULE_5__["RMenuComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-resume/main-resume.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/main-resume/main-resume.component.ts ***!
    \******************************************************/

  /*! exports provided: MainResumeComponent */

  /***/
  function srcAppMainResumeMainResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainResumeComponent", function () {
      return MainResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainResumeComponent = /*#__PURE__*/function () {
      function MainResumeComponent() {
        _classCallCheck(this, MainResumeComponent);
      }

      _createClass(MainResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainResumeComponent;
    }();

    MainResumeComponent.ɵfac = function MainResumeComponent_Factory(t) {
      return new (t || MainResumeComponent)();
    };

    MainResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainResumeComponent,
      selectors: [["app-main-resume"]],
      decls: 420,
      vars: 0,
      consts: [[1, "parallax"], [1, "card", "mx-auto", "shadowcard"], [1, "header"], ["id", "updatedDate"], [1, "mainContent"], [1, "ConnLeft"], [1, "LeftMain"], ["for", "workTablw"], ["id", "workTablw", 1, "workTablw"], [1, "thDate"], [1, "tdItalicP"], ["for", "ProjectsUl"], ["id", "ProjectsUl"], ["href", "http://reg.lala.dx.am", "target", "blank"], ["src", "../../assets/img/external-link-alt-solid.svg", "alt", "external-link-alt-solid"], ["href", "http://lala.dx.am/att/", "target", "blank"], ["href", "https://bjsamuel.tk/read/", "target", "blank"], ["href", "https://bjsamuel.tk/attendance.php", "target", "blank"], ["href", "https://huddle.bjsam.ga/", "target", "blank"], ["href", "https://bit.ly/3cK3gt9", "target", "blank"], ["for", "OtherLinksUL"], ["id", "OtherLinksUL"], ["href", "https://stackoverflow.com/users/11139453/joseph-samuel", "target", "blank"], ["href", "https://www.linkedin.com/in/joseph-samuel-051927169/", "target", "blank"], ["href", "https://github.com/xXCHINNAXx/", "target", "blank"], ["href", "https://bit.ly/3cPJY5Q", "target", "blank"], [1, "ConnRight"], [1, "RightMailContent"], ["for", "RContact"], ["id", "RContact"], [2, "font-weight", "700", "text-align", "left"], ["href", "mailto:Josephsamuel8985@gmail.com", 2, "text-decoration", "none"], ["id", "RTechinicalSkillsSpan"], ["for", "RTechinicalSkills"], ["id", "RTechinicalSkills", "border", "0"], ["viewBox", "0 0 500 100", "id", "FIELD_RATV", "type", "count"], ["cx", "50", "cy", "50", "r", "40", "fill", "#576d7b", "stroke-width", "4", 1, "default-fill"], ["cx", "150", "cy", "50", "r", "40", "fill", "#576d7b", "stroke-width", "4", 1, "default-fill"], ["cx", "250", "cy", "50", "r", "40", "fill", "#576d7b", "stroke-width", "4", 1, "default-fill"], ["cx", "350", "cy", "50", "r", "40", "fill", "#d5d6d6", "stroke-width", "4", 1, "default-fill"], ["cx", "450", "cy", "50", "r", "40", "fill", "#d5d6d6", "stroke-width", "4"], ["cx", "250", "cy", "50", "r", "40", "fill", "#d5d6d6", "stroke-width", "4", 1, "default-fill"], ["cx", "150", "cy", "50", "r", "40", "fill", "#d5d6d6", "stroke-width", "4", 1, "default-fill"], ["id", "RSoftwares"], ["for", "RSoftwaresTB"], ["id", "RSoftwaresTB", "border", "0"], ["cx", "350", "cy", "50", "r", "40", "fill", "#576d7b", "stroke-width", "4", 1, "default-fill"], ["id", "os"], ["for", "RlanTb"], ["id", "RlanTb", "border", "0"], ["id", "Rlang"], [1, "endLineColor"]],
      template: function MainResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "JosephSamuel Buthuri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Updated on: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "24/04/2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Newly graduated web and android developer offering enthusiasm and understanding of various programming languages. Looking to join organization where opportunity for growth and professional development is embraced.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Work History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " May 2020 \u2013 Present ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Full Stack Developer Intern ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Bestflux(AttackIo) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " As a full stack developer I'm working on React-Native Hybrid app development. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Mar '19 \u2013 April '19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Web Developer Intern ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Moirai Technology ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Designed an OCR webpage structure with user login system. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Education ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Currently pursuing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Artificial intelligence and Data science (Mtech) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Chaitanya Bharathi Institute of Technology - Hyderabad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " April-2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Computer Science and Engineering (Btech) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Mallareddy engineering college - Hyderabad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Graduated with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "8.5 CGPA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " March-2016 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " XII \u2013 MPC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Sri Chaitanya Jr College - Hyderabad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Scored: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "89 %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " March-2014 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " High School ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Krishnaveni Talent School \u2013 Vemulawada ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Scored ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "8.8 CGPA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Projects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "College Registration form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "College Attendance update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Pdf Library ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "College Attendance Fetch ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Responsive sample web page using Taiwindcss ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Simple News app based on IP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "(Android Project)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Other Links ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Stackoverflow ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Linkedin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "GitHub ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "QuickLabs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Hyderabad, TG, 500078. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Josephsamuel8985@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Technical Skills ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "React Native");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Firebase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Css, Scss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Angular 8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Php ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "circle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Cpp ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "circle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Java ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "circle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Android Studio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "circle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "MySql ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "circle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "MongoDB ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "circle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Softwares ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "table", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Adobe Xd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "circle", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Figma ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "circle", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Photoshop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Ms Office ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Operating systems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "table", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Windows");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Mac ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Linux ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Languages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "table", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Telugu(Native)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "circle", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "English ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Hindi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "circle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "hr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["label[_ngcontent-%COMP%] {\n  color: #576d7b;\n  font-size: 25px;\n  font-weight: 700;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 0;\n}\nlabel[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.card[_ngcontent-%COMP%] {\n  font-family: Century Gothic;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  margin: 1em auto;\n  width: 50rem;\n  border: 0;\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-top: 15px;\n  background-color: #576d7b;\n  color: #fff;\n  font-family: Century Gothic;\n  height: 5em;\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 40px;\n  font-weight: 700;\n  padding-top: 5px;\n  text-align: left;\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   #updatedDate[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 3 !important;\n}\n.card[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .ConnRight[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  width: 35%;\n}\n.card[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .ConnLeft[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 65%;\n}\n.card[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .ConnLeft[_ngcontent-%COMP%]   .LeftMain[_ngcontent-%COMP%] {\n  margin: 25px;\n  display: flex;\n  flex-direction: column;\n}\n.workTablw[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.workTablw[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-align: left;\n}\n.workTablw[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.workTablw[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.workTablw[_ngcontent-%COMP%]   .thDate[_ngcontent-%COMP%] {\n  width: 10em;\n}\n.workTablw[_ngcontent-%COMP%]   .tdItalicP[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 12px;\n  text-align: left;\n}\n#ProjectsUl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #OtherLinksUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 0.5em;\n  height: auto;\n}\n.RightMailContent[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 1em;\n}\n#RTechinicalSkillsSpan[_ngcontent-%COMP%], #RSoftwares[_ngcontent-%COMP%], #Rlang[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#RTechinicalSkillsSpan[_ngcontent-%COMP%]   #RTechinicalSkills[_ngcontent-%COMP%], #RTechinicalSkillsSpan[_ngcontent-%COMP%]   #RSoftwaresTB[_ngcontent-%COMP%], #RTechinicalSkillsSpan[_ngcontent-%COMP%]   #RlanTb[_ngcontent-%COMP%], #RSoftwares[_ngcontent-%COMP%]   #RTechinicalSkills[_ngcontent-%COMP%], #RSoftwares[_ngcontent-%COMP%]   #RSoftwaresTB[_ngcontent-%COMP%], #RSoftwares[_ngcontent-%COMP%]   #RlanTb[_ngcontent-%COMP%], #Rlang[_ngcontent-%COMP%]   #RTechinicalSkills[_ngcontent-%COMP%], #Rlang[_ngcontent-%COMP%]   #RSoftwaresTB[_ngcontent-%COMP%], #Rlang[_ngcontent-%COMP%]   #RlanTb[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 100%;\n}\n#RTechinicalSkillsSpan[_ngcontent-%COMP%]   #RTechinicalSkills[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #RTechinicalSkillsSpan[_ngcontent-%COMP%]   #RSoftwaresTB[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #RTechinicalSkillsSpan[_ngcontent-%COMP%]   #RlanTb[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #RSoftwares[_ngcontent-%COMP%]   #RTechinicalSkills[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #RSoftwares[_ngcontent-%COMP%]   #RSoftwaresTB[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #RSoftwares[_ngcontent-%COMP%]   #RlanTb[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #Rlang[_ngcontent-%COMP%]   #RTechinicalSkills[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #Rlang[_ngcontent-%COMP%]   #RSoftwaresTB[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #Rlang[_ngcontent-%COMP%]   #RlanTb[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 5em;\n  height: auto;\n}\n#RSoftwaresTB[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(even) {\n  padding-left: 3.6em;\n}\n#Rlang[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n.endLineColor[_ngcontent-%COMP%] {\n  margin: 0;\n  border: 0;\n  height: 7px;\n  background: linear-gradient(to right, #7dc57c 0, #7dc57c 16.6%, #1295c9 16.6%, #1295c9 33.2%, #815874 33.2%, #815874 49.8%, #fada58 49.8%, #fada58 66.4%, #e15554 66.4%, #e15554 83%, #ff8000 83%, #ff8000 99.6%);\n}\n@media all and (max-width: 900px) {\n  .card[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n  .card[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .ConnLeft[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .card[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .ConnRight[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  #RSoftwaresTB[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(even) {\n    padding-left: 20em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL215LXJlc3VtZS9teS1yZXN1bWUvc3JjL2FwcC9tYWluLXJlc3VtZS9tYWluLXJlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1yZXN1bWUvbWFpbi1yZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUhVO0VBSVYsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREVFO0VBQ0UsY0FUUTtFQVVSLGFBQUE7RUFDQSxtQkFBQTtBQ0FKO0FESUU7RUFFSSxxQkFBQTtBQ0ZOO0FET0E7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDSkE7QURLQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFuQ1U7RUFvQ1YsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0hGO0FES0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNIRjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDSkY7QURLRTtFQUNFLHlCQTFEUTtFQTJEUixVQUFBO0FDSEo7QURLRTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtBQ0hKO0FESUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRk47QURRRTtFQUNFLGVBQUE7QUNMSjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xKO0FET0U7RUFDRSxlQUFBO0FDTEo7QURPTTtFQUNFLGVBQUE7QUNMUjtBRFNFO0VBQ0UsV0FBQTtBQ1BKO0FEU0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BKO0FEWU07RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1RSO0FEZUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDWkY7QURjQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ1hGO0FEYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNYRjtBRGVNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNiUjtBRHFCSTtFQUNFLG1CQUFBO0FDbEJOO0FEc0JFO0VBQ0Usa0JBQUE7QUNuQko7QURxQkE7RUFDQyxTQUFBO0VBQ0QsU0FBQTtFQUNBLFdBQUE7RUFDQSxpTkFBQTtBQ2xCQTtBRG9CQTtFQUdBO0lBQ0UsaUNBQUE7RUNuQkE7RURvQkE7SUFDRSxzQkFBQTtFQ2xCRjtFRG9CQTtJQUNFLHNCQUFBO0VDbEJGOztFRHdCRTtJQUNFLDZCQUFBO0VDckJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluLXJlc3VtZS9tYWluLXJlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlQ29sb3IgOiM1NzZkN2I7XG4kcGFsZWJsYWNrIDojZjJmMmYyO1xubGFiZWx7XG4gIGNvbG9yOiAkYmx1ZUNvbG9yO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBocntcbiAgICBjb2xvcjogJHBhbGVibGFjaztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbnNwYW57XG4gIGF7XG5cbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICB9XG5cbn1cbi5jYXJke1xuZm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5hbGlnbi1zZWxmOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbm1hcmdpbjogMWVtIGF1dG87XG53aWR0aDogNTByZW07XG5ib3JkZXI6IDA7XG4uaGVhZGVye1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6JGJsdWVDb2xvcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcbiAgaGVpZ2h0OiA1ZW07XG5cbmgxe1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI3VwZGF0ZWREYXRle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6MDtcbiAgZm9udC1zaXplOiAzICFpbXBvcnRhbnQ7XG59XG59XG4ubWFpbkNvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLkNvbm5SaWdodHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFsZWJsYWNrO1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbiAgLkNvbm5MZWZ0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMC0zNSU7XG4gICAgLkxlZnRNYWlue1xuICAgICAgbWFyZ2luOiAyNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG59XG59XG4ud29ya1RhYmx3e1xuICB0cntcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbiAgdGh7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIHRke1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB1bHtcbiAgICAgIGxpe1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50aERhdGV7XG4gICAgd2lkdGg6IDEwZW07XG4gIH1cbiAgLnRkSXRhbGljUHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbiNQcm9qZWN0c1VsLCAjT3RoZXJMaW5rc1VMe1xuICAgIGxpe1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogMC41ZW07XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICBcbiAgICB9XG4gIFxufVxuLlJpZ2h0TWFpbENvbnRlbnR7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG4jUlRlY2hpbmljYWxTa2lsbHNTcGFuLCAjUlNvZnR3YXJlcywgI1JsYW5ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4jUlRlY2hpbmljYWxTa2lsbHMsI1JTb2Z0d2FyZXNUQiwgI1JsYW5UYntcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiBcbiAgdHJ7XG4gICAgdGR7XG4gICAgICBzdmd7XG4gICAgICAgIHdpZHRoOiA1ZW07XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbn1cbiNSU29mdHdhcmVzVEJ7XG4gIHRye1xuICAgIHRkOm50aC1jaGlsZChldmVuKXtcbiAgICAgIHBhZGRpbmctbGVmdDogMy42ZW07XG4gICAgfVxuICB9XG59XG4gICNSbGFuZ3tcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIH1cbi5lbmRMaW5lQ29sb3J7XG4gbWFyZ2luOiAwO1xuYm9yZGVyOiAwO1xuaGVpZ2h0OiA3cHg7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzdkYzU3YyAwLCM3ZGM1N2MgMTYuNiUsIzEyOTVjOSAxNi42JSwjMTI5NWM5IDMzLjIlLCM4MTU4NzQgMzMuMiUsIzgxNTg3NCA0OS44JSwjZmFkYTU4IDQ5LjglLCNmYWRhNTggNjYuNCUsI2UxNTU1NCA2Ni40JSwjZTE1NTU0IDgzJSwjZmY4MDAwIDgzJSwjZmY4MDAwIDk5LjYlKTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6OTAwcHgpIHtcbiAgLmNhcmR7XG4gICAgXG4ubWFpbkNvbnRlbnR7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgLkNvbm5MZWZ0e1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkNvbm5SaWdodHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG59XG4jUlNvZnR3YXJlc1RCe1xuICB0cntcbiAgICB0ZDpudGgtY2hpbGQoZXZlbil7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwZW0gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbn0iLCJsYWJlbCB7XG4gIGNvbG9yOiAjNTc2ZDdiO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxubGFiZWwgaHIge1xuICBjb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc3BhbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgd2lkdGg6IDUwcmVtO1xuICBib3JkZXI6IDA7XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc2ZDdiO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xuICBoZWlnaHQ6IDVlbTtcbn1cbi5jYXJkIC5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNhcmQgLmhlYWRlciAjdXBkYXRlZERhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMyAhaW1wb3J0YW50O1xufVxuLmNhcmQgLm1haW5Db250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhcmQgLm1haW5Db250ZW50IC5Db25uUmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICB3aWR0aDogMzUlO1xufVxuLmNhcmQgLm1haW5Db250ZW50IC5Db25uTGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA2NSU7XG59XG4uY2FyZCAubWFpbkNvbnRlbnQgLkNvbm5MZWZ0IC5MZWZ0TWFpbiB7XG4gIG1hcmdpbjogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndvcmtUYWJsdyB0ciB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi53b3JrVGFibHcgdGgge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLndvcmtUYWJsdyB0ZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi53b3JrVGFibHcgdGQgdWwgbGkge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ud29ya1RhYmx3IC50aERhdGUge1xuICB3aWR0aDogMTBlbTtcbn1cbi53b3JrVGFibHcgLnRkSXRhbGljUCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jUHJvamVjdHNVbCBsaSBpbWcsICNPdGhlckxpbmtzVUwgbGkgaW1nIHtcbiAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5SaWdodE1haWxDb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cblxuI1JUZWNoaW5pY2FsU2tpbGxzU3BhbiwgI1JTb2Z0d2FyZXMsICNSbGFuZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jUlRlY2hpbmljYWxTa2lsbHNTcGFuICNSVGVjaGluaWNhbFNraWxscywgI1JUZWNoaW5pY2FsU2tpbGxzU3BhbiAjUlNvZnR3YXJlc1RCLCAjUlRlY2hpbmljYWxTa2lsbHNTcGFuICNSbGFuVGIsICNSU29mdHdhcmVzICNSVGVjaGluaWNhbFNraWxscywgI1JTb2Z0d2FyZXMgI1JTb2Z0d2FyZXNUQiwgI1JTb2Z0d2FyZXMgI1JsYW5UYiwgI1JsYW5nICNSVGVjaGluaWNhbFNraWxscywgI1JsYW5nICNSU29mdHdhcmVzVEIsICNSbGFuZyAjUmxhblRiIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbiNSVGVjaGluaWNhbFNraWxsc1NwYW4gI1JUZWNoaW5pY2FsU2tpbGxzIHRyIHRkIHN2ZywgI1JUZWNoaW5pY2FsU2tpbGxzU3BhbiAjUlNvZnR3YXJlc1RCIHRyIHRkIHN2ZywgI1JUZWNoaW5pY2FsU2tpbGxzU3BhbiAjUmxhblRiIHRyIHRkIHN2ZywgI1JTb2Z0d2FyZXMgI1JUZWNoaW5pY2FsU2tpbGxzIHRyIHRkIHN2ZywgI1JTb2Z0d2FyZXMgI1JTb2Z0d2FyZXNUQiB0ciB0ZCBzdmcsICNSU29mdHdhcmVzICNSbGFuVGIgdHIgdGQgc3ZnLCAjUmxhbmcgI1JUZWNoaW5pY2FsU2tpbGxzIHRyIHRkIHN2ZywgI1JsYW5nICNSU29mdHdhcmVzVEIgdHIgdGQgc3ZnLCAjUmxhbmcgI1JsYW5UYiB0ciB0ZCBzdmcge1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiNSU29mdHdhcmVzVEIgdHIgdGQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgcGFkZGluZy1sZWZ0OiAzLjZlbTtcbn1cblxuI1JsYW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4uZW5kTGluZUNvbG9yIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3ZGM1N2MgMCwgIzdkYzU3YyAxNi42JSwgIzEyOTVjOSAxNi42JSwgIzEyOTVjOSAzMy4yJSwgIzgxNTg3NCAzMy4yJSwgIzgxNTg3NCA0OS44JSwgI2ZhZGE1OCA0OS44JSwgI2ZhZGE1OCA2Ni40JSwgI2UxNTU1NCA2Ni40JSwgI2UxNTU1NCA4MyUsICNmZjgwMDAgODMlLCAjZmY4MDAwIDk5LjYlKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNhcmQgLm1haW5Db250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcmQgLm1haW5Db250ZW50IC5Db25uTGVmdCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZCAubWFpbkNvbnRlbnQgLkNvbm5SaWdodCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gICNSU29mdHdhcmVzVEIgdHIgdGQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwZW0gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-resume',
          templateUrl: './main-resume.component.html',
          styleUrls: ['./main-resume.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rmenu/rmenu.component.ts":
  /*!******************************************!*\
    !*** ./src/app/rmenu/rmenu.component.ts ***!
    \******************************************/

  /*! exports provided: RMenuComponent */

  /***/
  function srcAppRmenuRmenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RMenuComponent", function () {
      return RMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var RMenuComponent = /*#__PURE__*/function () {
      function RMenuComponent() {
        _classCallCheck(this, RMenuComponent);

        this.DownloadIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileDownload"];
        this.infoIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInfo"];
        this.mailIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
      }

      _createClass(RMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RMenuComponent;
    }();

    RMenuComponent.ɵfac = function RMenuComponent_Factory(t) {
      return new (t || RMenuComponent)();
    };

    RMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RMenuComponent,
      selectors: [["app-rmenu"]],
      decls: 26,
      vars: 3,
      consts: [[1, "menu"], ["type", "checkbox", "href", "#", "name", "menu-open", "id", "menu-open", 1, "menu-open"], ["for", "menu-open", 1, "menu-open-button"], [1, "hamburger", "hamburger-1"], [1, "hamburger", "hamburger-2"], [1, "hamburger", "hamburger-3"], ["href", "#", 1, "menu-item"], ["rotate", "180", "size", "lg", 3, "icon"], ["href", "mailto:Josephsamuel8985@gmail.com", 1, "menu-item"], ["href", "../../assets/files/JosephSamuelResume.pdf", "download", "BJosephSamuelResume", "target", "_blank", 1, "menu-item"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1"], ["id", "shadowed-goo"], ["in", "SourceGraphic", "result", "blur", "stdDeviation", "10"], ["in", "blur", "mode", "matrix", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7", "result", "goo"], ["in", "goo", "stdDeviation", "3", "result", "shadow"], ["in", "shadow", "mode", "matrix", "values", "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2", "result", "shadow"], ["in", "shadow", "dx", "-1", "dy", "-1", "result", "shadow"], ["in2", "shadow", "in", "goo", "result", "goo"], ["in2", "goo", "in", "SourceGraphic", "result", "mix"], ["id", "goo"], ["in", "blur", "mode", "matrix", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 6 -7", "result", "goo"]],
      template: function RMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "filter", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feGaussianBlur", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feColorMatrix", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feColorMatrix", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feOffset", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feComposite", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "filter", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "feGaussianBlur", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feColorMatrix", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.infoIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.mailIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.DownloadIcon);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: ["a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.menu[_ngcontent-%COMP%] {\n  -webkit-filter: url(\"#shadowed-goo\");\n          filter: url(\"#shadowed-goo\");\n}\n\n.menu-item[_ngcontent-%COMP%], .menu-open-button[_ngcontent-%COMP%] {\n  background: #ffc107;\n  border-radius: 100%;\n  width: 80px;\n  height: 80px;\n  margin-left: -40px;\n  position: absolute;\n  top: 20px;\n  color: white;\n  text-align: center;\n  line-height: 80px;\n  transform: translate3d(0, 0, 0);\n  transition: transform ease-out 200ms;\n}\n\n.menu-open[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 3px;\n  background: white;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -12.5px;\n  margin-top: -1.5px;\n  transition: transform 200ms;\n}\n\n.hamburger-1[_ngcontent-%COMP%] {\n  transform: translate3d(0, -8px, 0);\n}\n\n.hamburger-2[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n}\n\n.hamburger-3[_ngcontent-%COMP%] {\n  transform: translate3d(0, 8px, 0);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    + .menu-open-button[_ngcontent-%COMP%]   .hamburger-1[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0) rotate(45deg);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    + .menu-open-button[_ngcontent-%COMP%]   .hamburger-2[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0) scale(0.1, 1);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    + .menu-open-button[_ngcontent-%COMP%]   .hamburger-3[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0) rotate(-45deg);\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3em;\n  box-sizing: border-box;\n  font-size: 20px;\n  text-align: left;\n  transform: rotate(180deg);\n  bottom: 0;\n}\n\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #ffc107;\n  transform: rotate(180deg);\n}\n\n.menu-item[_ngcontent-%COMP%]:nth-child(3) {\n  transition-duration: 180ms;\n}\n\n.menu-item[_ngcontent-%COMP%]:nth-child(4) {\n  transition-duration: 180ms;\n}\n\n.menu-item[_ngcontent-%COMP%]:nth-child(5) {\n  transition-duration: 180ms;\n}\n\n.menu-item[_ngcontent-%COMP%]:nth-child(6) {\n  transition-duration: 180ms;\n}\n\n.menu-open-button[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-duration: 400ms;\n  transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n  cursor: pointer;\n}\n\n.menu-open-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    + .menu-open-button[_ngcontent-%COMP%] {\n  transition-timing-function: linear;\n  transition-duration: 200ms;\n  transform: scale(0.8, 0.8) translate3d(0, 0, 0);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    ~ .menu-item[_ngcontent-%COMP%] {\n  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    ~ .menu-item[_ngcontent-%COMP%]:nth-child(3) {\n  transition-duration: 170ms;\n  transform: translate3d(80px, 0, 0);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    ~ .menu-item[_ngcontent-%COMP%]:nth-child(4) {\n  transition-duration: 250ms;\n  transform: translate3d(160px, 0, 0);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    ~ .menu-item[_ngcontent-%COMP%]:nth-child(5) {\n  transition-duration: 330ms;\n  transform: translate3d(240px, 0, 0);\n}\n\n.menu-open[_ngcontent-%COMP%]:checked    ~ .menu-item[_ngcontent-%COMP%]:nth-child(6) {\n  transition-duration: 410ms;\n  transform: translate3d(320px, 0, 0);\n}\n\n.Rmenu[_ngcontent-%COMP%] {\n  background-color: White;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  margin-right: 1em;\n}\n\n.Rmenu[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2em;\n  height: auto;\n}\n\n.Rmenu[_ngcontent-%COMP%]   .Contact[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2em;\n  height: auto;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvQ3NzL01lbnVzdHlsZS5jc3MiLCIvaG9tZS9ydW5uZXIvd29yay9teS1yZXN1bWUvbXktcmVzdW1lL3NyYy9hcHAvcm1lbnUvcm1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JtZW51L3JtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztVQUM1Qiw0QkFBNEI7QUFDdEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFFVCwrQkFBK0I7RUFHdkMsb0NBQW9DO0FBRXRDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQixrQkFBa0I7RUFHbEIsMkJBQTJCO0FBRTdCOztBQUVBO0VBRVUsa0NBQWtDO0FBQzVDOztBQUVBO0VBRVUsK0JBQStCO0FBQ3pDOztBQUVBO0VBRVUsaUNBQWlDO0FBQzNDOztBQUVBO0VBRVUsNkNBQTZDO0FBQ3ZEOztBQUNBO0VBRVUsNkNBQTZDO0FBQ3ZEOztBQUNBO0VBRVUsOENBQThDO0FBQ3hEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFFVSwwQkFBMEI7QUFDcEM7O0FBQ0E7RUFFVSwwQkFBMEI7QUFDcEM7O0FBQ0E7RUFFVSwwQkFBMEI7QUFDcEM7O0FBQ0E7RUFFVSwwQkFBMEI7QUFDcEM7O0FBRUE7RUFDRSxVQUFVO0VBRUYsbUVBQW1FO0VBRW5FLDBCQUEwQjtFQUUxQiwrQ0FBK0M7RUFDdkQsZUFBZTtBQUNqQjs7QUFFQTtFQUVVLCtDQUErQztBQUN6RDs7QUFFQTtFQUVVLGtDQUFrQztFQUVsQywwQkFBMEI7RUFFMUIsK0NBQStDO0FBQ3pEOztBQUVBO0VBRVUsOERBQThEO0FBQ3hFOztBQUNBO0VBRVUsMEJBQTBCO0VBRTFCLGtDQUFrQztBQUM1Qzs7QUFDQTtFQUVVLDBCQUEwQjtFQUUxQixtQ0FBbUM7QUFDN0M7O0FBQ0E7RUFFVSwwQkFBMEI7RUFFMUIsbUNBQW1DO0FBQzdDOztBQUNBO0VBRVUsMEJBQTBCO0VBRTFCLG1DQUFtQztBQUM3Qzs7QUN6S0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURJRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDRko7O0FEUUU7RUFDRSxlQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9ybWVudS9ybWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaDEsIGgyLCBoMywgaDQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5tZW51IHtcbiAgLXdlYmtpdC1maWx0ZXI6IHVybChcIiNzaGFkb3dlZC1nb29cIik7XG4gICAgICAgICAgZmlsdGVyOiB1cmwoXCIjc2hhZG93ZWQtZ29vXCIpO1xufVxuXG4ubWVudS1pdGVtLCAubWVudS1vcGVuLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1vdXQgMjAwbXM7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIGVhc2Utb3V0IDIwMG1zO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjAwbXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCAyMDBtcywgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1vdXQgMjAwbXM7XG59XG5cbi5tZW51LW9wZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMi41cHg7XG4gIG1hcmdpbi10b3A6IC0xLjVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAyMDBtcztcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMjAwbXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zLCAtd2Via2l0LXRyYW5zZm9ybSAyMDBtcztcbn1cblxuLmhhbWJ1cmdlci0xIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC04cHgsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLThweCwgMCk7XG59XG5cbi5oYW1idXJnZXItMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uaGFtYnVyZ2VyLTMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgOHB4LCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDhweCwgMCk7XG59XG5cbi5tZW51LW9wZW46Y2hlY2tlZCArIC5tZW51LW9wZW4tYnV0dG9uIC5oYW1idXJnZXItMSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5tZW51LW9wZW46Y2hlY2tlZCArIC5tZW51LW9wZW4tYnV0dG9uIC5oYW1idXJnZXItMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwLjEsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMC4xLCAxKTtcbn1cbi5tZW51LW9wZW46Y2hlY2tlZCArIC5tZW51LW9wZW4tYnV0dG9uIC5oYW1idXJnZXItMyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBib3R0b206IDA7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNmZmMxMDc7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ubWVudS1pdGVtOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTgwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTgwbXM7XG59XG4ubWVudS1pdGVtOm50aC1jaGlsZCg0KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTgwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTgwbXM7XG59XG4ubWVudS1pdGVtOm50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTgwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTgwbXM7XG59XG4ubWVudS1pdGVtOm50aC1jaGlsZCg2KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTgwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTgwbXM7XG59XG5cbi5tZW51LW9wZW4tYnV0dG9uIHtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtb3Blbi1idXR0b246aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4ubWVudS1vcGVuOmNoZWNrZWQgKyAubWVudS1vcGVuLWJ1dHRvbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4ubWVudS1vcGVuOmNoZWNrZWQgfiAubWVudS1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbn1cbi5tZW51LW9wZW46Y2hlY2tlZCB+IC5tZW51LWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxNzBtcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNzBtcztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDgwcHgsIDAsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODBweCwgMCwgMCk7XG59XG4ubWVudS1vcGVuOmNoZWNrZWQgfiAubWVudS1pdGVtOm50aC1jaGlsZCg0KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNjBweCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNjBweCwgMCwgMCk7XG59XG4ubWVudS1vcGVuOmNoZWNrZWQgfiAubWVudS1pdGVtOm50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzMwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzMwbXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNDBweCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNDBweCwgMCwgMCk7XG59XG4ubWVudS1vcGVuOmNoZWNrZWQgfiAubWVudS1pdGVtOm50aC1jaGlsZCg2KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDEwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDEwbXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMjBweCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMjBweCwgMCwgMCk7XG59IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL0Nzcy9NZW51c3R5bGUuY3NzJztcbi5SbWVudXtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4uZG93bmxvYWR7XG4gIHN2Z3tcbiAgICB3aWR0aDogMmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbn1cbi5Db250YWN0e1xuICBzdmd7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG59XG59XG5uYXZ7XG4gIGF7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9hc3NldHMvQ3NzL01lbnVzdHlsZS5jc3MnO1xuLlJtZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4uUm1lbnUgLmRvd25sb2FkIHN2ZyB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogYXV0bztcbn1cbi5SbWVudSAuQ29udGFjdCBzdmcge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbm5hdiBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rmenu',
          templateUrl: './rmenu.component.html',
          styleUrls: ['./rmenu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/my-resume/my-resume/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map