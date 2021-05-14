(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkpd"] = self["webpackChunkpd"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main-page/main-page.component */
      32627);
      /* harmony import */


      var _meth_one_page_meth_one_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meth-one-page/meth-one-page.component */
      93704);
      /* harmony import */


      var _meth_two_page_meth_two_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meth-two-page/meth-two-page.component */
      40250);
      /* harmony import */


      var _meth_three_page_meth_three_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./meth-three-page/meth-three-page.component */
      63025);
      /* harmony import */


      var _meth_four_page_meth_four_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./meth-four-page/meth-four-page.component */
      24692);
      /* harmony import */


      var _meth_five_page_meth_five_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meth-five-page/meth-five-page.component */
      63200);
      /* harmony import */


      var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-page/login-page.component */
      34680);
      /* harmony import */


      var _services_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/auth.guard */
      98063);
      /* harmony import */


      var _checkimg_page_checkimg_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./checkimg-page/checkimg-page.component */
      71152);
      /* harmony import */


      var _reg_page_reg_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./reg-page/reg-page.component */
      86696);
      /* harmony import */


      var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./history-page/history-page.component */
      98236);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent
      }, {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__.LoginPageComponent
      }, {
        path: 'reg',
        component: _reg_page_reg_page_component__WEBPACK_IMPORTED_MODULE_9__.RegPageComponent
      }, {
        path: 'check',
        component: _checkimg_page_checkimg_page_component__WEBPACK_IMPORTED_MODULE_8__.CheckimgPageComponent
      }, {
        path: 'history',
        component: _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_10__.HistoryPageComponent,
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__.Authguard]
      }, {
        path: 'methone',
        component: _meth_one_page_meth_one_page_component__WEBPACK_IMPORTED_MODULE_1__.MethOnePageComponent,
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__.Authguard]
      }, {
        path: 'methtwo',
        component: _meth_two_page_meth_two_page_component__WEBPACK_IMPORTED_MODULE_2__.MethTwoPageComponent,
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__.Authguard]
      }, {
        path: 'meththree',
        component: _meth_three_page_meth_three_page_component__WEBPACK_IMPORTED_MODULE_3__.MethThreePageComponent,
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__.Authguard]
      }, {
        path: 'methfour',
        component: _meth_four_page_meth_four_page_component__WEBPACK_IMPORTED_MODULE_4__.MethFourPageComponent,
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__.Authguard]
      }, {
        path: 'methfive',
        component: _meth_five_page_meth_five_page_component__WEBPACK_IMPORTED_MODULE_5__.MethFivePageComponent,
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__.Authguard]
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy',
          initialNavigation: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'pd';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 13,
        vars: 1,
        consts: [[1, "content"], [2, "cursor", "pointer", "outline", "none", 3, "routerLink"], [1, "footer_top"], [1, "footer_bottom"], [1, "footer_bottom__c"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u043C\u0430\u0440\u0442-\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0437\u0430\u0449\u0438\u0442\u044B \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "by Moscow Polytech");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA9 2020 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ng2-charts */
      86178);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-page/main-page.component */
      32627);
      /* harmony import */


      var _meth_one_page_meth_one_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./meth-one-page/meth-one-page.component */
      93704);
      /* harmony import */


      var _meth_one_page_meth_one_step1_meth_one_step1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./meth-one-page/meth-one-step1/meth-one-step1.component */
      66643);
      /* harmony import */


      var _meth_one_page_meth_one_step2_meth_one_step2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meth-one-page/meth-one-step2/meth-one-step2.component */
      14058);
      /* harmony import */


      var _meth_one_page_meth_one_step3_meth_one_step3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./meth-one-page/meth-one-step3/meth-one-step3.component */
      94987);
      /* harmony import */


      var _meth_two_page_meth_two_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./meth-two-page/meth-two-page.component */
      40250);
      /* harmony import */


      var _meth_two_page_meth_two_step1_meth_two_step1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./meth-two-page/meth-two-step1/meth-two-step1.component */
      86123);
      /* harmony import */


      var _meth_two_page_meth_two_step2_meth_two_step2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./meth-two-page/meth-two-step2/meth-two-step2.component */
      13677);
      /* harmony import */


      var _meth_two_page_meth_two_step3_meth_two_step3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./meth-two-page/meth-two-step3/meth-two-step3.component */
      83000);
      /* harmony import */


      var _meth_three_page_meth_three_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./meth-three-page/meth-three-page.component */
      63025);
      /* harmony import */


      var _meth_three_page_meth_three_step1_meth_three_step1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./meth-three-page/meth-three-step1/meth-three-step1.component */
      64930);
      /* harmony import */


      var _meth_three_page_meth_three_step2_meth_three_step2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./meth-three-page/meth-three-step2/meth-three-step2.component */
      16483);
      /* harmony import */


      var _meth_three_page_meth_three_step3_meth_three_step3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./meth-three-page/meth-three-step3/meth-three-step3.component */
      76773);
      /* harmony import */


      var _meth_four_page_meth_four_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./meth-four-page/meth-four-page.component */
      24692);
      /* harmony import */


      var _meth_four_page_meth_four_step1_meth_four_step1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./meth-four-page/meth-four-step1/meth-four-step1.component */
      30793);
      /* harmony import */


      var _meth_four_page_meth_four_step2_meth_four_step2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./meth-four-page/meth-four-step2/meth-four-step2.component */
      66814);
      /* harmony import */


      var _meth_four_page_meth_four_step3_meth_four_step3_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./meth-four-page/meth-four-step3/meth-four-step3.component */
      21330);
      /* harmony import */


      var _meth_five_page_meth_five_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./meth-five-page/meth-five-page.component */
      63200);
      /* harmony import */


      var _meth_five_page_meth_five_step1_meth_five_step1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./meth-five-page/meth-five-step1/meth-five-step1.component */
      59538);
      /* harmony import */


      var _meth_five_page_meth_five_step2_meth_five_step2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./meth-five-page/meth-five-step2/meth-five-step2.component */
      41187);
      /* harmony import */


      var _meth_five_page_meth_five_step3_meth_five_step3_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./meth-five-page/meth-five-step3/meth-five-step3.component */
      56301);
      /* harmony import */


      var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./login-page/login-page.component */
      34680);
      /* harmony import */


      var _checkimg_page_checkimg_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./checkimg-page/checkimg-page.component */
      71152);
      /* harmony import */


      var _checkimg_page_checkimg_result_checkimg_result_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./checkimg-page/checkimg-result/checkimg-result.component */
      15340);
      /* harmony import */


      var _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./shared/classes/token.interceptor */
      9489);
      /* harmony import */


      var _reg_page_reg_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./reg-page/reg-page.component */
      86696);
      /* harmony import */


      var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./history-page/history-page.component */
      98236);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS,
          multi: true,
          useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_26__.TokenInterceptor
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule.withServerTransition({
          appId: 'serverApp'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_33__.ChartsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent, _meth_two_page_meth_two_page_component__WEBPACK_IMPORTED_MODULE_7__.MethTwoPageComponent, _meth_two_page_meth_two_step1_meth_two_step1_component__WEBPACK_IMPORTED_MODULE_8__.MethTwoStep1Component, _meth_two_page_meth_two_step2_meth_two_step2_component__WEBPACK_IMPORTED_MODULE_9__.MethTwoStep2Component, _meth_two_page_meth_two_step3_meth_two_step3_component__WEBPACK_IMPORTED_MODULE_10__.MethTwoStep3Component, _meth_one_page_meth_one_page_component__WEBPACK_IMPORTED_MODULE_3__.MethOnePageComponent, _meth_one_page_meth_one_step1_meth_one_step1_component__WEBPACK_IMPORTED_MODULE_4__.MethOneStep1Component, _meth_one_page_meth_one_step2_meth_one_step2_component__WEBPACK_IMPORTED_MODULE_5__.MethOneStep2Component, _meth_one_page_meth_one_step3_meth_one_step3_component__WEBPACK_IMPORTED_MODULE_6__.MethOneStep3Component, _meth_three_page_meth_three_page_component__WEBPACK_IMPORTED_MODULE_11__.MethThreePageComponent, _meth_three_page_meth_three_step1_meth_three_step1_component__WEBPACK_IMPORTED_MODULE_12__.MethThreeStep1Component, _meth_three_page_meth_three_step2_meth_three_step2_component__WEBPACK_IMPORTED_MODULE_13__.MethThreeStep2Component, _meth_three_page_meth_three_step3_meth_three_step3_component__WEBPACK_IMPORTED_MODULE_14__.MethThreeStep3Component, _meth_four_page_meth_four_page_component__WEBPACK_IMPORTED_MODULE_15__.MethFourPageComponent, _meth_four_page_meth_four_step1_meth_four_step1_component__WEBPACK_IMPORTED_MODULE_16__.MethFourStep1Component, _meth_four_page_meth_four_step2_meth_four_step2_component__WEBPACK_IMPORTED_MODULE_17__.MethFourStep2Component, _meth_four_page_meth_four_step3_meth_four_step3_component__WEBPACK_IMPORTED_MODULE_18__.MethFourStep3Component, _meth_five_page_meth_five_page_component__WEBPACK_IMPORTED_MODULE_19__.MethFivePageComponent, _meth_five_page_meth_five_step1_meth_five_step1_component__WEBPACK_IMPORTED_MODULE_20__.MethFiveStep1Component, _meth_five_page_meth_five_step2_meth_five_step2_component__WEBPACK_IMPORTED_MODULE_21__.MethFiveStep2Component, _meth_five_page_meth_five_step3_meth_five_step3_component__WEBPACK_IMPORTED_MODULE_22__.MethFiveStep3Component, _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_23__.LoginPageComponent, _checkimg_page_checkimg_page_component__WEBPACK_IMPORTED_MODULE_24__.CheckimgPageComponent, _checkimg_page_checkimg_result_checkimg_result_component__WEBPACK_IMPORTED_MODULE_25__.CheckimgResultComponent, _reg_page_reg_page_component__WEBPACK_IMPORTED_MODULE_27__.RegPageComponent, _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_28__.HistoryPageComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_33__.ChartsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule]
        });
      })();
      /***/

    },

    /***/
    71152:
    /*!**********************************************************!*\
      !*** ./src/app/checkimg-page/checkimg-page.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckimgPageComponent": function CheckimgPageComponent() {
          return (
            /* binding */
            _CheckimgPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/rgb-smyk.service */
      4023);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _checkimg_result_checkimg_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkimg-result/checkimg-result.component */
      15340);

      var _c0 = ["m1s1c1"];

      function CheckimgPageComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return {
          btn: true,
          btn_enabled: true
        };
      };

      function CheckimgPageComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckimgPageComponent_div_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.checkImg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function CheckimgPageComponent_app_checkimg_result_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-checkimg-result", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClose", function CheckimgPageComponent_app_checkimg_result_14_Template_app_checkimg_result_onClose_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.isResult = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("result", ctx_r3.result);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          display: a0
        };
      };

      var _c3 = function _c3(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _CheckimgPageComponent = /*#__PURE__*/function () {
        function _CheckimgPageComponent(rgbCmykService, api, router) {
          _classCallCheck(this, _CheckimgPageComponent);

          this.rgbCmykService = rgbCmykService;
          this.api = api;
          this.router = router;
          this.onResult = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.isChoosen = false;
          this.isLoading = false;
          this.isImageLoaded = false;
          this.reader = new FileReader();
          this.pic = new Image();
          this.imgDivHeight = 300;
          this.imgDivWidth = 0;
          this.imgUrl = '';
          this.isResult = false;
        }

        _createClass(_CheckimgPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addPic",
          value: function addPic(files) {
            var _this = this;

            this.isImageLoaded = false;
            this.isLoading = true;
            this.isChoosen = false;

            this.reader.onload = function () {
              var ctx = _this.canvas.nativeElement.getContext('2d');

              _this.pic.onload = function () {
                _this.canvas.nativeElement.width = _this.pic.width;
                _this.canvas.nativeElement.height = _this.pic.height;
                ctx.drawImage(_this.pic, 0, 0);
                _this.imgUrl = _this.canvas.nativeElement.toDataURL('image/jpeg');
                _this.imgDivWidth = _this.pic.width * (_this.imgDivHeight / _this.pic.height);

                _this.devideOnChannels(ctx);

                _this.renderImage(ctx);

                _this.isImageLoaded = true;
                _this.isLoading = false;
              };

              _this.pic.src = _this.reader.result;
            };

            this.reader.readAsDataURL(files[0]);
            this.imgFile = files[0];
          }
        }, {
          key: "devideOnChannels",
          value: function devideOnChannels(ctx) {
            var pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < pixelData.data.length; i += 4) {
              var new_cmyk = this.rgbCmykService.rgb2cmyk(pixelData.data[i], pixelData.data[i + 1], pixelData.data[i + 2]);
            }
          }
        }, {
          key: "renderImage",
          value: function renderImage(ctx) {
            var imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < imageData.data.length; i += 4) {}

            ctx.putImageData(imageData, 0, 0);
          }
        }, {
          key: "checkImg",
          value: function checkImg() {
            var _this2 = this;

            var size = this.pic.width + 'x' + this.pic.height;
            this.api.checkImg(this.imgFile, size).subscribe(function (res) {
              _this2.isResult = true;
              _this2.result = res;
            });
          }
        }]);

        return _CheckimgPageComponent;
      }();

      _CheckimgPageComponent.ɵfac = function CheckimgPageComponent_Factory(t) {
        return new (t || _CheckimgPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__.RgbCmykService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _CheckimgPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _CheckimgPageComponent,
        selectors: [["app-checkimg-page"]],
        viewQuery: function CheckimgPageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onResult: "onResult"
        },
        decls: 15,
        vars: 11,
        consts: [[1, "content"], [1, "content", "method"], [1, "choose_file"], ["for", "image_upload", 1, "upload_label"], ["type", "file", "id", "image_upload", 3, "change"], [3, "ngStyle"], [2, "display", "none"], ["m1s1c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], ["class", "loading", 4, "ngIf"], ["class", "btns", 4, "ngIf"], [3, "result", "onClose", 4, "ngIf"], [1, "loading"], [1, "btns"], [3, "ngClass", "click"], [3, "result", "onClose"]],
        template: function CheckimgPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043C\u0435\u0442\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 (PNG, JPG)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CheckimgPageComponent_Template_input_change_6_listener($event) {
              return ctx.addPic($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "canvas", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CheckimgPageComponent_div_12_Template, 3, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CheckimgPageComponent_div_13_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CheckimgPageComponent_app_checkimg_result_14_Template, 1, 1, "app-checkimg-result", 12);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx.isImageLoaded ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](7, _c3, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isImageLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _checkimg_result_checkimg_result_component__WEBPACK_IMPORTED_MODULE_2__.CheckimgResultComponent],
        styles: [".choose_file[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.channels[_ngcontent-%COMP%] {\r\n    margin: 50px auto;\r\n    width: 1600px;\r\n}\r\n.channels__grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\r\n.canvas_gholder[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW1nLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJjaGVja2ltZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvb3NlX2ZpbGUge1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jaGFubmVscyB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHdpZHRoOiAxNjAwcHg7XHJcbn1cclxuLmNoYW5uZWxzX19ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG4uY2FudmFzSW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jYW52YXNJbWFnZV9faW1nIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAjMjUyNTI1O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY2FudmFzX2dob2xkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5sb2FkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    15340:
    /*!****************************************************************************!*\
      !*** ./src/app/checkimg-page/checkimg-result/checkimg-result.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckimgResultComponent": function CheckimgResultComponent() {
          return (
            /* binding */
            _CheckimgResultComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CheckimgResultComponent = /*#__PURE__*/function () {
        function _CheckimgResultComponent() {
          _classCallCheck(this, _CheckimgResultComponent);

          this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.compare = {
            1: 'Изъятие нескольких уровней в диапазоне канала',
            2: 'Введение штрихового кода в тоновый диапазон канала RGB',
            3: 'Введение 2D штрихового кода (QR) в цифровое изображение',
            4: 'Изъятие 20-30 уровней в диапазоне',
            5: 'Введение флуоресцентного тонера'
          };
        }

        _createClass(_CheckimgResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.inResult);
            this.result = {
              result: this.inResult.result ? 'метка присутствует.' : 'метка отсутствует.',
              info: this.inResult.info == 'none' ? '' : this.inResult.info,
              method: this.compare[this.inResult.type]
            };
          }
        }, {
          key: "close",
          value: function close() {
            this.onClose.emit(true);
          }
        }]);

        return _CheckimgResultComponent;
      }();

      _CheckimgResultComponent.ɵfac = function CheckimgResultComponent_Factory(t) {
        return new (t || _CheckimgResultComponent)();
      };

      _CheckimgResultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CheckimgResultComponent,
        selectors: [["app-checkimg-result"]],
        inputs: {
          inResult: ["result", "inResult"]
        },
        outputs: {
          onClose: "onClose"
        },
        decls: 12,
        vars: 3,
        consts: [[1, "popup-bg"], [1, "popup"], [1, "popup__close", 3, "click"], [1, "popup-result"], [1, "popup-result__h"], [1, "popup-result__p"]],
        template: function CheckimgResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckimgResultComponent_Template_div_click_2_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0412 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u043C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 " + ctx.result.result);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result.method);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result.info);
          }
        },
        styles: [".popup-bg[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding-top: 50px;\r\n}\r\n.popup[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    display: flex;\r\n    padding: 40px 20px 50px;\r\n    border: 1px solid grey;\r\n    border-radius: 7px;\r\n    transition: .2s;\r\n    position: relative;\r\n}\r\n.popup[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n.popup__close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n    background-image: url('/assets/img/close.svg');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW1nLXJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsOENBQThDO0lBQzlDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoiY2hlY2tpbWctcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXAtYmcge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi5wb3B1cCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnBvcHVwOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuLnBvcHVwX19jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9jbG9zZS5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    98236:
    /*!********************************************************!*\
      !*** ./src/app/history-page/history-page.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HistoryPageComponent": function HistoryPageComponent() {
          return (
            /* binding */
            _HistoryPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function HistoryPageComponent_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u0430\u0448\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043C\u0435\u0442\u043E\u043A \u043F\u0443\u0441\u0442\u0430.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-image": a0
        };
      };

      function HistoryPageComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoryPageComponent_div_5_Template_div_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var l_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.getFile("http://localhost:5000/" + l_r2.linkImgAfter.replace("\\", "/"));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var l_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, "url(http://localhost:5000/" + l_r2.linkImgAfter.replace("\\", "/") + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.compare[l_r2.type]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 3, l_r2.date, "short"));
        }
      }

      var _HistoryPageComponent = /*#__PURE__*/function () {
        function _HistoryPageComponent(api, http) {
          _classCallCheck(this, _HistoryPageComponent);

          this.api = api;
          this.http = http;
          this.labels = [];
          this.compare = {
            1: 'Изъятие нескольких уровней в диапазоне канала',
            2: 'Введение штрихового кода в тоновый диапазон канала RGB',
            3: 'Введение 2D штрихового кода (QR) в цифровое изображение',
            4: 'Изъятие 20-30 уровней в диапазоне',
            5: 'Введение флуоресцентного тонера'
          };
        }

        _createClass(_HistoryPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.api.getHistory().subscribe(function (res) {
              console.log(res);
              _this3.labels = res;
            });
          }
        }, {
          key: "getFile",
          value: function getFile(file) {
            window.open(file);
          }
        }]);

        return _HistoryPageComponent;
      }();

      _HistoryPageComponent.ɵfac = function HistoryPageComponent_Factory(t) {
        return new (t || _HistoryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _HistoryPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HistoryPageComponent,
        selectors: [["app-history-page"]],
        decls: 6,
        vars: 2,
        consts: [[1, "content"], [1, "method"], [4, "ngIf"], [1, "history"], ["class", "history__line", 4, "ngFor", "ngForOf"], [1, "history__line"], [1, "history__cell", "history__img", 3, "ngStyle"], [1, "history__cell"], [1, "history__cell", 2, "cursor", "pointer", 3, "click"]],
        template: function HistoryPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043C\u0435\u0442\u043E\u043A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HistoryPageComponent_p_3_Template, 2, 0, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HistoryPageComponent_div_5_Template, 9, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.labels.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.labels);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        styles: [".history__img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n.history__line[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   justify-content: space-between;\r\n}\r\n.history__line[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQztBQUNBO0dBQ0csYUFBYTtHQUNiLDhCQUE4QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJoaXN0b3J5LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5X19pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmhpc3RvcnlfX2xpbmUge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmhpc3RvcnlfX2xpbmUge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    34680:
    /*!****************************************************!*\
      !*** ./src/app/login-page/login-page.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageComponent": function LoginPageComponent() {
          return (
            /* binding */
            _LoginPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _LoginPageComponent = /*#__PURE__*/function () {
        function _LoginPageComponent(auth, router) {
          _classCallCheck(this, _LoginPageComponent);

          this.auth = auth;
          this.router = router;
        }

        _createClass(_LoginPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
              login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this4 = this;

            this.auth.login(this.form.value).subscribe(function (n) {
              console.log(n);

              _this4.router.navigate(['/']);
            });
          }
        }]);

        return _LoginPageComponent;
      }();

      _LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
        return new (t || _LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LoginPageComponent,
        selectors: [["app-login-page"]],
        decls: 14,
        vars: 3,
        consts: [[1, "content"], [1, "log-form"], [1, "log-form__form"], [3, "formGroup", "submit"], [1, "secondary-text", 3, "routerLink"], ["type", "text", "placeholder", "\u041B\u043E\u0433\u0438\u043D", "formControlName", "login"], ["type", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "formControlName", "password"], ["type", "submit", 1, "btn", 3, "ngClass"]],
        template: function LoginPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function LoginPageComponent_Template_form_submit_3_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0412\u0445\u043E\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0412\u0445\u043E\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/reg");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.form.valid ? "btn_enabled" : "btn_disabled");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
        styles: [".log-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.log-form__form[_ngcontent-%COMP%] {\r\n    margin: 50px auto;\r\n    padding: 50px 20px;\r\n    border: 1px solid grey;\r\n    border-radius: 7px;\r\n    transition: .2s;\r\n}\r\n.log-form__form[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n.log-form__form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n}\r\n.log-form__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    height: 30px;\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 2px solid grey;\r\n    outline: none;\r\n}\r\n.log-form__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sb2ctZm9ybV9fZm9ybSB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuLmxvZy1mb3JtX19mb3JtOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuLmxvZy1mb3JtX19mb3JtIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5sb2ctZm9ybV9fZm9ybSBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmxvZy1mb3JtX19mb3JtIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    32627:
    /*!**************************************************!*\
      !*** ./src/app/main-page/main-page.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainPageComponent": function MainPageComponent() {
          return (
            /* binding */
            _MainPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function MainPageComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0412\u043E\u0439\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/login");
        }
      }

      var _c0 = function _c0() {
        return ["/methone"];
      };

      var _c1 = function _c1() {
        return ["/methtwo"];
      };

      var _c2 = function _c2() {
        return ["/meththree"];
      };

      var _c3 = function _c3() {
        return ["/methfour"];
      };

      var _c4 = function _c4() {
        return ["/methfive"];
      };

      function MainPageComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043C\u0435\u0442\u043E\u0434 \u0437\u0430\u0449\u0438\u0442\u044B:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0418\u0437\u044A\u044F\u0442\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0432 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435 \u043A\u0430\u043D\u0430\u043B\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0448\u0442\u0440\u0438\u0445\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u0434\u0430 \u0432 \u0442\u043E\u043D\u043E\u0432\u044B\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u043A\u0430\u043D\u0430\u043B\u0430 RGB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 2D \u0448\u0442\u0440\u0438\u0445\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u0434\u0430 (QR) \u0432 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0418\u0437\u044A\u044F\u0442\u0438\u0435 20-30 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0432 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0444\u043B\u0443\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u043E\u0433\u043E \u0442\u043E\u043D\u0435\u0440\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c4));
        }
      }

      function MainPageComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0414\u043B\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043C\u0435\u0442\u043A\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u043E\u0439\u0442\u0438.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MainPageComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043C\u0435\u0442\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_ng_template_12_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.auth.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u0412\u044B\u0439\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/history");
        }
      }

      var _c5 = function _c5() {
        return ["/check"];
      };

      var _MainPageComponent = /*#__PURE__*/function () {
        function _MainPageComponent(auth) {
          _classCallCheck(this, _MainPageComponent);

          this.auth = auth;
        }

        _createClass(_MainPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('auth-token') != null) {
              this.auth.setToken(localStorage.getItem('auth-token'));
            }
          }
        }]);

        return _MainPageComponent;
      }();

      _MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
        return new (t || _MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _MainPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MainPageComponent,
        selectors: [["app-main-page"]],
        decls: 14,
        vars: 6,
        consts: [[1, "content"], [1, "main-menu-line"], ["class", "user-signin", 3, "routerLink", 4, "ngIf", "ngIfElse"], [1, "btn", "btn_enabled", "btn-check-img", 3, "routerLink"], [4, "ngIf", "ngIfElse"], ["noauth", ""], ["noauth_log", ""], [1, "user-signin", 3, "routerLink"], [1, "user-signin__img"], [1, "methods"], [1, "btn"], [3, "routerLink"], [1, "hoverp1"], [1, "noauth"], [1, "user-signin"], [1, "user-signin__item", 3, "routerLink"], [1, "user-signin__img_history"], [1, "user-signin__history"], [1, "user-signin__item", 3, "click"], [1, "user-signin__img_logout"]],
        template: function MainPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0421\u041C\u0410\u0420\u0422 \u041C\u0410\u0420\u041A\u0418\u0420\u041E\u0412\u041A\u0410");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0414\u041B\u042F \u0417\u0410\u0429\u0418\u0422\u042B \u041F\u0420\u041E\u0414\u0423\u041A\u0426\u0418\u0418");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MainPageComponent_div_6_Template, 3, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043C\u0435\u0442\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MainPageComponent_div_9_Template, 34, 10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MainPageComponent_ng_template_10_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MainPageComponent_ng_template_12_Template, 8, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAuth())("ngIfElse", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.isAuth())("ngIfElse", _r2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["h1[_ngcontent-%COMP%] {\r\n    margin: 50px 0 20px;\r\n}\r\n.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    text-decoration: none;\r\n}\r\n.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n}\r\n.methods[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap: 40px;\r\n}\r\n.btn-check-img[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    margin-bottom: 40px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n.main-menu-line[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.user-signin[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n.user-signin__img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 30px;\r\n    margin-right: 10px;\r\n    background-image: url('/assets/img/user.svg');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n.user-signin__img_logout[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 30px;\r\n    margin-right: 10px;\r\n    background-size: contain;\r\n    background-image: url('/assets/img/logout.svg');\r\n    background-repeat: no-repeat;\r\n}\r\n.user-signin__img_history[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 30px;\r\n    margin-right: 10px;\r\n    background-size: contain;\r\n    background-image: url('/assets/img/history.svg');\r\n    background-repeat: no-repeat;\r\n}\r\n.noauth[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n}\r\n.user-signin__history[_ngcontent-%COMP%] {\r\n    margin-right: 30px;\r\n}\r\n.user-signin__item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n@media (max-width: 700px) {\r\n    .methods[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    .main-menu-line[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        padding-bottom: 40px;\r\n    }\r\n}\r\n@media (max-width: 500px) {\r\n    .methods[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0Msd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLCtDQUErQztJQUMvQyw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixnREFBZ0Q7SUFDaEQsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsb0JBQW9CO0lBQ3hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0oiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW46IDUwcHggMCAyMHB4O1xyXG59XHJcbi5idG4gYSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYnRuIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tZXRob2RzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDQwcHg7XHJcbn1cclxuLmJ0bi1jaGVjay1pbWcge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLm1haW4tbWVudS1saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi51c2VyLXNpZ25pbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi51c2VyLXNpZ25pbl9faW1nIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy91c2VyLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4udXNlci1zaWduaW5fX2ltZ19sb2dvdXQge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2xvZ291dC5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLnVzZXItc2lnbmluX19pbWdfaGlzdG9yeSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaGlzdG9yeS5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLm5vYXV0aCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLnVzZXItc2lnbmluX19oaXN0b3J5IHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4udXNlci1zaWduaW5fX2l0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLm1ldGhvZHMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIH1cclxuICAgIC5tYWluLW1lbnUtbGluZSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5tZXRob2RzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    63200:
    /*!************************************************************!*\
      !*** ./src/app/meth-five-page/meth-five-page.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFivePageComponent": function MethFivePageComponent() {
          return (
            /* binding */
            _MethFivePageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _meth_five_step1_meth_five_step1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./meth-five-step1/meth-five-step1.component */
      59538);
      /* harmony import */


      var _meth_five_step2_meth_five_step2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meth-five-step2/meth-five-step2.component */
      41187);
      /* harmony import */


      var _meth_five_step3_meth_five_step3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meth-five-step3/meth-five-step3.component */
      56301);

      function MethFivePageComponent_app_meth_five_step1_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-five-step1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethFivePageComponent_app_meth_five_step1_5_Template_app_meth_five_step1_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethFivePageComponent_app_meth_five_step2_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-five-step2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethFivePageComponent_app_meth_five_step2_6_Template_app_meth_five_step2_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.nextStep();
          })("onLast", function MethFivePageComponent_app_meth_five_step2_6_Template_app_meth_five_step2_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethFivePageComponent_app_meth_five_step3_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-five-step3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onLast", function MethFivePageComponent_app_meth_five_step3_7_Template_app_meth_five_step3_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _MethFivePageComponent = /*#__PURE__*/function () {
        function _MethFivePageComponent() {
          _classCallCheck(this, _MethFivePageComponent);

          this.method = 'Введение флуоресцентного тонера';
          this.step = 1;
        }

        _createClass(_MethFivePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.step--;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.step++;
          }
        }]);

        return _MethFivePageComponent;
      }();

      _MethFivePageComponent.ɵfac = function MethFivePageComponent_Factory(t) {
        return new (t || _MethFivePageComponent)();
      };

      _MethFivePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethFivePageComponent,
        selectors: [["app-meth-five-page"]],
        decls: 8,
        vars: 6,
        consts: [[1, "content", "method"], [1, "content", "step"], [3, "ngSwitch"], [3, "onNext", 4, "ngSwitchCase"], [3, "onNext", "onLast", 4, "ngSwitchCase"], [3, "onLast", 4, "ngSwitchCase"], [3, "onNext"], [3, "onNext", "onLast"], [3, "onLast"]],
        template: function MethFivePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MethFivePageComponent_app_meth_five_step1_5_Template, 1, 0, "app-meth-five-step1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MethFivePageComponent_app_meth_five_step2_6_Template, 1, 0, "app-meth-five-step2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MethFivePageComponent_app_meth_five_step3_7_Template, 1, 0, "app-meth-five-step3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.method);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("\u0428\u0430\u0433 " + ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _meth_five_step1_meth_five_step1_component__WEBPACK_IMPORTED_MODULE_0__.MethFiveStep1Component, _meth_five_step2_meth_five_step2_component__WEBPACK_IMPORTED_MODULE_1__.MethFiveStep2Component, _meth_five_step3_meth_five_step3_component__WEBPACK_IMPORTED_MODULE_2__.MethFiveStep3Component],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRoLWZpdmUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    59538:
    /*!*****************************************************************************!*\
      !*** ./src/app/meth-five-page/meth-five-step1/meth-five-step1.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFiveStep1Component": function MethFiveStep1Component() {
          return (
            /* binding */
            _MethFiveStep1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/rgb-smyk.service */
      4023);
      /* harmony import */


      var src_app_services_meth_five_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/meth-five-data.service */
      19699);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["m5s1c1"];

      function MethFiveStep1Component_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MethFiveStep1Component_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethFiveStep1Component_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0414\u0430\u043B\u0435\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          display: a0
        };
      };

      var _c2 = function _c2(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethFiveStep1Component = /*#__PURE__*/function () {
        function _MethFiveStep1Component(rgbCmykService, methFiveDataService) {
          _classCallCheck(this, _MethFiveStep1Component);

          this.rgbCmykService = rgbCmykService;
          this.methFiveDataService = methFiveDataService;
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.isChoosen = false;
          this.isLoading = false;
          this.isImageLoaded = false;
          this.reader = new FileReader();
          this.pic = new Image();
          this.imgDivHeight = 300;
          this.imgDivWidth = 0;
          this.imgUrl = '';
        }

        _createClass(_MethFiveStep1Component, [{
          key: "addPic",
          value: function addPic(files) {
            var _this5 = this;

            this.isImageLoaded = false;
            this.isLoading = true;
            this.isChoosen = false;

            this.reader.onload = function () {
              var ctx = _this5.canvas.nativeElement.getContext('2d');

              _this5.pic.onload = function () {
                _this5.methFiveDataService.fullZeroing();

                _this5.methFiveDataService.picParams = {
                  width: _this5.pic.width,
                  height: _this5.pic.height
                };
                _this5.canvas.nativeElement.width = _this5.pic.width;
                _this5.canvas.nativeElement.height = _this5.pic.height;
                ctx.drawImage(_this5.pic, 0, 0);
                _this5.imgUrl = _this5.canvas.nativeElement.toDataURL('image/jpeg');
                _this5.imgDivWidth = _this5.pic.width * (_this5.imgDivHeight / _this5.pic.height);

                _this5.devideOnChannels(ctx);

                _this5.renderImage(ctx);

                _this5.isImageLoaded = true;
                _this5.isLoading = false;
              };

              _this5.pic.src = _this5.reader.result;
            };

            this.reader.readAsDataURL(files[0]);
          }
        }, {
          key: "devideOnChannels",
          value: function devideOnChannels(ctx) {
            var pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < pixelData.data.length; i += 4) {
              var new_cmyk = this.rgbCmykService.rgb2cmyk(pixelData.data[i], pixelData.data[i + 1], pixelData.data[i + 2]);
              this.methFiveDataService.arrChannelC.push(Math.floor(new_cmyk.c));
              this.methFiveDataService.arrChannelM.push(Math.floor(new_cmyk.m));
              this.methFiveDataService.arrChannelY.push(Math.floor(new_cmyk.y));
              this.methFiveDataService.arrChannelK.push(Math.floor(new_cmyk.k));
            }
          }
        }, {
          key: "renderImage",
          value: function renderImage(ctx) {
            var imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < imageData.data.length; i += 4) {
              imageData.data[i + 0] = this.methFiveDataService.newImageArray[i + 0];
              imageData.data[i + 1] = this.methFiveDataService.newImageArray[i + 1];
              imageData.data[i + 2] = this.methFiveDataService.newImageArray[i + 2];
              imageData.data[i + 3] = this.methFiveDataService.newImageArray[i + 3];
            }

            ctx.putImageData(imageData, 0, 0);
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.onNext.emit(null);
          }
        }]);

        return _MethFiveStep1Component;
      }();

      _MethFiveStep1Component.ɵfac = function MethFiveStep1Component_Factory(t) {
        return new (t || _MethFiveStep1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__.RgbCmykService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_meth_five_data_service__WEBPACK_IMPORTED_MODULE_1__.MethFiveDataService));
      };

      _MethFiveStep1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MethFiveStep1Component,
        selectors: [["app-meth-five-step1"]],
        viewQuery: function MethFiveStep1Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onNext: "onNext"
        },
        decls: 11,
        vars: 10,
        consts: [[1, "choose_file"], ["for", "image_upload", 1, "upload_label"], ["type", "file", "id", "image_upload", 3, "change"], [3, "ngStyle"], [2, "display", "none"], ["m5s1c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], ["class", "loading", 4, "ngIf"], ["class", "btns", 4, "ngIf"], [1, "loading"], [1, "btns"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethFiveStep1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 (PNG, JPG)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MethFiveStep1Component_Template_input_change_3_listener($event) {
              return ctx.addPic($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "canvas", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MethFiveStep1Component_div_9_Template, 3, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MethFiveStep1Component_div_10_Template, 3, 0, "div", 9);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx.isImageLoaded ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](6, _c2, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isImageLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: [".choose_file[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.channels[_ngcontent-%COMP%] {\r\n    margin: 50px auto;\r\n    width: 1600px;\r\n}\r\n.channels__grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\r\n.canvas_gholder[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtZml2ZS1zdGVwMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6Im1ldGgtZml2ZS1zdGVwMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob29zZV9maWxlIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2hhbm5lbHMge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTYwMHB4O1xyXG59XHJcbi5jaGFubmVsc19fZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuLmNhbnZhc0ltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2FudmFzSW1hZ2VfX2ltZyB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggIzI1MjUyNTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNhbnZhc19naG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubG9hZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    41187:
    /*!*****************************************************************************!*\
      !*** ./src/app/meth-five-page/meth-five-step2/meth-five-step2.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFiveStep2Component": function MethFiveStep2Component() {
          return (
            /* binding */
            _MethFiveStep2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_meth_five_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/meth-five-data.service */
      19699);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["m5s2c1"];

      function MethFiveStep2Component_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          display: a0
        };
      };

      var _c2 = function _c2(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethFiveStep2Component = /*#__PURE__*/function () {
        function _MethFiveStep2Component(methFiveDataService) {
          _classCallCheck(this, _MethFiveStep2Component);

          this.methFiveDataService = methFiveDataService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.blurRadius = 3;
          this.trasholdL = 5;
          this.trasholdU = 99;
          this.isLoading = false;
          this.imgDivHeight = 600;
          this.imgDivWidth = 0;
          this.imgUrl = '';
        }

        _createClass(_MethFiveStep2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading = false;
            this.canvas.nativeElement.width = this.methFiveDataService.picParams.width;
            this.canvas.nativeElement.height = this.methFiveDataService.picParams.height;
            var ctx = this.canvas.nativeElement.getContext('2d');
            this.methFiveDataService.findEdges(this.blurRadius, this.trasholdL, this.trasholdU);
            this.renderImage(ctx);
            this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg');
            this.imgDivWidth = this.methFiveDataService.picParams.width * (this.imgDivHeight / this.methFiveDataService.picParams.height);
          }
        }, {
          key: "renderImage",
          value: function renderImage(ctx) {
            var imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < imageData.data.length; i += 4) {
              imageData.data[i + 0] = this.methFiveDataService.newImageArray[i + 0];
              imageData.data[i + 1] = this.methFiveDataService.newImageArray[i + 1];
              imageData.data[i + 2] = this.methFiveDataService.newImageArray[i + 2];
              imageData.data[i + 3] = this.methFiveDataService.newImageArray[i + 3];
            }

            ctx.putImageData(imageData, 0, 0);
          }
        }, {
          key: "changeValues",
          value: function changeValues() {
            console.log(this.isLoading);
            var ctx = this.canvas.nativeElement.getContext('2d');
            this.isLoading = true;
            this.methFiveDataService.findEdges(this.blurRadius, this.trasholdL, this.trasholdU);
            this.renderImage(ctx);
            this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg');
            this.isLoading = false;
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.methFiveDataService.generateFLUImage();
            this.onNext.emit(null);
          }
        }]);

        return _MethFiveStep2Component;
      }();

      _MethFiveStep2Component.ɵfac = function MethFiveStep2Component_Factory(t) {
        return new (t || _MethFiveStep2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_meth_five_data_service__WEBPACK_IMPORTED_MODULE_0__.MethFiveDataService));
      };

      _MethFiveStep2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MethFiveStep2Component,
        selectors: [["app-meth-five-step2"]],
        viewQuery: function MethFiveStep2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onLast: "onLast",
          onNext: "onNext"
        },
        decls: 26,
        vars: 15,
        consts: [[1, "choose_channelH", "content"], [1, "controls", "content"], [1, "control"], ["type", "range", "min", "0", "max", "20", 3, "ngModel", "ngModelChange", "change"], ["type", "range", "min", "0", "max", "100", 3, "ngModel", "ngModelChange", "change"], [1, "codeCanvas", 3, "ngStyle"], [2, "display", "none"], ["m5s2c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], ["class", "loading", 4, "ngIf"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [1, "btn", "btn_enabled", 3, "click"], [1, "loading"]],
        template: function MethFiveStep2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043B\u044F \u043A\u0430\u043D\u0430\u043B\u0430 FLU");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MethFiveStep2Component_Template_input_ngModelChange_6_listener($event) {
              return ctx.blurRadius = $event;
            })("change", function MethFiveStep2Component_Template_input_change_6_listener() {
              return ctx.changeValues();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MethFiveStep2Component_Template_input_ngModelChange_10_listener($event) {
              return ctx.trasholdL = $event;
            })("change", function MethFiveStep2Component_Template_input_change_10_listener() {
              return ctx.changeValues();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MethFiveStep2Component_Template_input_ngModelChange_14_listener($event) {
              return ctx.trasholdU = $event;
            })("change", function MethFiveStep2Component_Template_input_change_14_listener() {
              return ctx.changeValues();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "canvas", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MethFiveStep2Component_div_20_Template, 2, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethFiveStep2Component_Template_button_click_22_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethFiveStep2Component_Template_button_click_24_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0414\u0430\u043B\u0435\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("\u0420\u0430\u0437\u043C\u044B\u0442\u0438\u0435: " + ctx.blurRadius);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blurRadius);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("\u041D\u0438\u0436\u043D\u0438\u0439 \u043F\u043E\u0440\u043E\u0433: " + ctx.trasholdL);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.trasholdL);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043F\u043E\u0440\u043E\u0433: " + ctx.trasholdU);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.trasholdU);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx.isLoading ? "none" : "block"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](11, _c2, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: [".controls[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n@media (max-width: 600px) {\r\n    .controls[_ngcontent-%COMP%] {\r\n        padding: 0 20px;\r\n        flex-direction: column;\r\n    }\r\n    .control[_ngcontent-%COMP%] {\r\n        margin: 20px 0;\r\n    }\r\n    .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtZml2ZS1zdGVwMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoibWV0aC1maXZlLXN0ZXAyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbHMge1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5jYW52YXNJbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhbnZhc0ltYWdlX19pbWcge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4ICMyNTI1MjU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5sb2FkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29udHJvbHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmNvbnRyb2wge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRyb2wgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    56301:
    /*!*****************************************************************************!*\
      !*** ./src/app/meth-five-page/meth-five-step3/meth-five-step3.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFiveStep3Component": function MethFiveStep3Component() {
          return (
            /* binding */
            _MethFiveStep3Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_meth_five_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/meth-five-data.service */
      19699);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["m5s3c1"];

      var _c1 = function _c1(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethFiveStep3Component = /*#__PURE__*/function () {
        function _MethFiveStep3Component(api, methFiveDataService) {
          _classCallCheck(this, _MethFiveStep3Component);

          this.api = api;
          this.methFiveDataService = methFiveDataService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.imgDivHeight = 600;
          this.imgDivWidth = 0;
        }

        _createClass(_MethFiveStep3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.canvas.nativeElement.width = this.methFiveDataService.picParams.width;
            this.canvas.nativeElement.height = this.methFiveDataService.picParams.height;
            var ctx = this.canvas.nativeElement.getContext('2d');
            var imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < imageData.data.length; i += 4) {
              imageData.data[i + 0] = this.methFiveDataService.newImageArray[i + 0];
              imageData.data[i + 1] = this.methFiveDataService.newImageArray[i + 1];
              imageData.data[i + 2] = this.methFiveDataService.newImageArray[i + 2];
              imageData.data[i + 3] = this.methFiveDataService.newImageArray[i + 3];
            }

            ctx.putImageData(imageData, 0, 0);
            this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg');
            this.imgDivWidth = this.canvas.nativeElement.width * (this.imgDivHeight / this.canvas.nativeElement.height);
            var size = this.canvas.nativeElement.width + 'x' + this.canvas.nativeElement.height;
            var img = new File([this.api.dataURItoBlob(this.imgUrl)], 'm5result.png');
            this.api.addToDb('5', img, size).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "saveImage",
          value: function saveImage() {
            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = this.canvas.nativeElement.toDataURL();
            link.click();
          }
        }]);

        return _MethFiveStep3Component;
      }();

      _MethFiveStep3Component.ɵfac = function MethFiveStep3Component_Factory(t) {
        return new (t || _MethFiveStep3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_meth_five_data_service__WEBPACK_IMPORTED_MODULE_1__.MethFiveDataService));
      };

      _MethFiveStep3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MethFiveStep3Component,
        selectors: [["app-meth-five-step3"]],
        viewQuery: function MethFiveStep3Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onLast: "onLast"
        },
        decls: 9,
        vars: 5,
        consts: [[2, "display", "none"], ["m5s3c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethFiveStep3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethFiveStep3Component_Template_button_click_5_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethFiveStep3Component_Template_button_click_7_listener() {
              return ctx.saveImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](1, _c1, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
        styles: [".canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtZml2ZS1zdGVwMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJtZXRoLWZpdmUtc3RlcDMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW52YXNJbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhbnZhc0ltYWdlX19pbWcge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4ICMyNTI1MjU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    24692:
    /*!************************************************************!*\
      !*** ./src/app/meth-four-page/meth-four-page.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFourPageComponent": function MethFourPageComponent() {
          return (
            /* binding */
            _MethFourPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _meth_four_step1_meth_four_step1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./meth-four-step1/meth-four-step1.component */
      30793);
      /* harmony import */


      var _meth_four_step2_meth_four_step2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meth-four-step2/meth-four-step2.component */
      66814);
      /* harmony import */


      var _meth_four_step3_meth_four_step3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meth-four-step3/meth-four-step3.component */
      21330);

      function MethFourPageComponent_app_meth_four_step1_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-four-step1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethFourPageComponent_app_meth_four_step1_5_Template_app_meth_four_step1_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethFourPageComponent_app_meth_four_step2_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-four-step2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethFourPageComponent_app_meth_four_step2_6_Template_app_meth_four_step2_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.nextStep();
          })("onLast", function MethFourPageComponent_app_meth_four_step2_6_Template_app_meth_four_step2_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethFourPageComponent_app_meth_four_step3_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-four-step3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onLast", function MethFourPageComponent_app_meth_four_step3_7_Template_app_meth_four_step3_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _MethFourPageComponent = /*#__PURE__*/function () {
        function _MethFourPageComponent() {
          _classCallCheck(this, _MethFourPageComponent);

          this.method = 'Изъятие 20-30 уровней в диапазоне';
          this.step = 1;
        }

        _createClass(_MethFourPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.step--;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.step++;
          }
        }]);

        return _MethFourPageComponent;
      }();

      _MethFourPageComponent.ɵfac = function MethFourPageComponent_Factory(t) {
        return new (t || _MethFourPageComponent)();
      };

      _MethFourPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethFourPageComponent,
        selectors: [["app-meth-four-page"]],
        decls: 8,
        vars: 6,
        consts: [[1, "content", "method"], [1, "content", "step"], [3, "ngSwitch"], [3, "onNext", 4, "ngSwitchCase"], [3, "onNext", "onLast", 4, "ngSwitchCase"], [3, "onLast", 4, "ngSwitchCase"], [3, "onNext"], [3, "onNext", "onLast"], [3, "onLast"]],
        template: function MethFourPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MethFourPageComponent_app_meth_four_step1_5_Template, 1, 0, "app-meth-four-step1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MethFourPageComponent_app_meth_four_step2_6_Template, 1, 0, "app-meth-four-step2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MethFourPageComponent_app_meth_four_step3_7_Template, 1, 0, "app-meth-four-step3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.method);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("\u0428\u0430\u0433 " + ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _meth_four_step1_meth_four_step1_component__WEBPACK_IMPORTED_MODULE_0__.MethFourStep1Component, _meth_four_step2_meth_four_step2_component__WEBPACK_IMPORTED_MODULE_1__.MethFourStep2Component, _meth_four_step3_meth_four_step3_component__WEBPACK_IMPORTED_MODULE_2__.MethFourStep3Component],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRoLWZvdXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    30793:
    /*!*****************************************************************************!*\
      !*** ./src/app/meth-four-page/meth-four-step1/meth-four-step1.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFourStep1Component": function MethFourStep1Component() {
          return (
            /* binding */
            _MethFourStep1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/rgb-smyk.service */
      4023);
      /* harmony import */


      var src_app_services_meth_four_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/meth-four-data.service */
      64124);
      /* harmony import */


      var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/charts.service */
      21198);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      86178);

      var _c0 = ["m4s1c1"];

      function MethFourStep1Component_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethFourStep1Component_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MethFourStep1Component_div_20_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0414\u0430\u043B\u0435\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          display: a0
        };
      };

      var _c2 = function _c2(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethFourStep1Component = /*#__PURE__*/function () {
        function _MethFourStep1Component(rgbCmykService, methFourDataService, chartsService) {
          _classCallCheck(this, _MethFourStep1Component);

          this.rgbCmykService = rgbCmykService;
          this.methFourDataService = methFourDataService;
          this.chartsService = chartsService;
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.isChoosen = false;
          this.isLoading = false;
          this.isImageLoaded = false;
          this.reader = new FileReader();
          this.pic = new Image();
          this.imgDivHeight = 300;
          this.imgDivWidth = 0;
          this.imgUrl = '';
          this.choosenChannel = '';
          this.barChartOptions = {
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [];
          this.barChartLabels1 = [];
          this.barChartColor1 = [{
            borderColor: 'black',
            backgroundColor: 'cyan'
          }];
          this.barChartData1 = [{
            data: [],
            label: 'C Channel'
          }];
          this.barChartLabels2 = [];
          this.barChartColor2 = [{
            borderColor: 'black',
            backgroundColor: 'magenta'
          }];
          this.barChartData2 = [{
            data: [],
            label: 'M Channel'
          }];
          this.barChartLabels3 = [];
          this.barChartColor3 = [{
            borderColor: 'black',
            backgroundColor: 'yellow'
          }];
          this.barChartData3 = [{
            data: [],
            label: 'Y Channel'
          }];
          this.barChartLabels4 = [];
          this.barChartColor4 = [{
            borderColor: 'black',
            backgroundColor: 'black'
          }];
          this.barChartData4 = [{
            data: [],
            label: 'K Channel'
          }];
        }

        _createClass(_MethFourStep1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addPic",
          value: function addPic(files) {
            var _this6 = this;

            this.isImageLoaded = false;
            this.isLoading = true;
            this.isChoosen = false;

            this.reader.onload = function () {
              var ctx = _this6.canvas.nativeElement.getContext('2d');

              _this6.pic.onload = function () {
                _this6.choosenChannel = '';

                _this6.methFourDataService.fullZeroing();

                _this6.methFourDataService.picParams = {
                  width: _this6.pic.width,
                  height: _this6.pic.height
                };
                _this6.canvas.nativeElement.width = _this6.pic.width;
                _this6.canvas.nativeElement.height = _this6.pic.height;
                ctx.drawImage(_this6.pic, 0, 0);
                _this6.imgUrl = _this6.canvas.nativeElement.toDataURL('image/jpeg');
                _this6.imgDivWidth = _this6.pic.width * (_this6.imgDivHeight / _this6.pic.height);

                _this6.devideOnChannels(ctx);

                _this6.isImageLoaded = true;
                _this6.isLoading = false;
              };

              _this6.pic.src = _this6.reader.result;
            };

            this.reader.readAsDataURL(files[0]);
          }
        }, {
          key: "devideOnChannels",
          value: function devideOnChannels(ctx) {
            var pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            this.chartsService.renderChartsCMYK(4, pixelData.data);
            this.renderCharts(this.methFourDataService.amountChannelC, this.methFourDataService.amountChannelM, this.methFourDataService.amountChannelY, this.methFourDataService.amountChannelK);
          }
        }, {
          key: "renderCharts",
          value: function renderCharts(typeC, typeM, typeY, typeK) {
            var chartColumnNames = [];

            for (var i = 0; i <= 100; i++) {
              chartColumnNames[i] = i;
            }

            this.barChartLabels1 = chartColumnNames;
            this.barChartData1 = [{
              data: typeC,
              label: 'C Channel'
            }];
            this.barChartLabels2 = chartColumnNames;
            this.barChartData2 = [{
              data: typeM,
              label: 'M Channel'
            }];
            this.barChartLabels3 = chartColumnNames;
            this.barChartData3 = [{
              data: typeY,
              label: 'Y Channel'
            }];
            this.barChartLabels4 = chartColumnNames;
            this.barChartData4 = [{
              data: typeK,
              label: 'K Channel'
            }];
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.onNext.emit(null);
          }
        }]);

        return _MethFourStep1Component;
      }();

      _MethFourStep1Component.ɵfac = function MethFourStep1Component_Factory(t) {
        return new (t || _MethFourStep1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__.RgbCmykService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meth_four_data_service__WEBPACK_IMPORTED_MODULE_1__.MethFourDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_2__.ChartsService));
      };

      _MethFourStep1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethFourStep1Component,
        selectors: [["app-meth-four-step1"]],
        viewQuery: function MethFourStep1Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onNext: "onNext"
        },
        decls: 21,
        vars: 38,
        consts: [[1, "choose_file"], ["for", "image_upload", 1, "upload_label"], ["type", "file", "id", "image_upload", 3, "change"], [3, "ngStyle"], [2, "display", "none"], ["m4s1c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "channels"], [1, "channels__grid_cmyk"], [1, "canvas_gholder"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", "colors"], ["class", "loading", 4, "ngIf"], ["class", "btns", 4, "ngIf"], [1, "loading"], [1, "btns"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethFourStep1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 (PNG, JPG)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MethFourStep1Component_Template_input_change_3_listener($event) {
              return ctx.addPic($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "canvas", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, MethFourStep1Component_div_19_Template, 3, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, MethFourStep1Component_div_20_Template, 3, 0, "div", 13);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c1, ctx.isImageLoaded ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](34, _c2, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData1)("labels", ctx.barChartLabels1)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData2)("labels", ctx.barChartLabels2)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData3)("labels", ctx.barChartLabels3)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData4)("labels", ctx.barChartLabels4)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isImageLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        styles: [".choose_file[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\r\n.canvas_gholder[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtZm91ci1zdGVwMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJtZXRoLWZvdXItc3RlcDEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaG9vc2VfZmlsZSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhbnZhc0ltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2FudmFzSW1hZ2VfX2ltZyB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggIzI1MjUyNTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNhbnZhc19naG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubG9hZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    66814:
    /*!*****************************************************************************!*\
      !*** ./src/app/meth-four-page/meth-four-step2/meth-four-step2.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFourStep2Component": function MethFourStep2Component() {
          return (
            /* binding */
            _MethFourStep2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/rgb-smyk.service */
      4023);
      /* harmony import */


      var src_app_services_meth_four_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/meth-four-data.service */
      64124);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _MethFourStep2Component = /*#__PURE__*/function () {
        function _MethFourStep2Component(rgbCmykService, methFourDataService) {
          _classCallCheck(this, _MethFourStep2Component);

          this.rgbCmykService = rgbCmykService;
          this.methFourDataService = methFourDataService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.codeNum = '20';
        }

        _createClass(_MethFourStep2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            var _this7 = this;

            var min = Math.floor(Math.random() * (50 - 0));
            var max = min + +this.codeNum;
            var newPixel;

            var _loop = function _loop(i) {
              _this7.methFourDataService.arrChannelY.forEach(function (n, index, arr) {
                if (n == i) {
                  arr[index] = 0; //why not
                }
              });
            };

            for (var i = min; i < max; i++) {
              _loop(i);
            }

            for (var _i = 0; _i < this.methFourDataService.arrChannelC.length; _i++) {
              newPixel = this.rgbCmykService.cmyk2rgb(this.methFourDataService.arrChannelC[_i], this.methFourDataService.arrChannelM[_i], this.methFourDataService.arrChannelY[_i], this.methFourDataService.arrChannelK[_i]);
              this.methFourDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            }

            this.onNext.emit(null);
          }
        }]);

        return _MethFourStep2Component;
      }();

      _MethFourStep2Component.ɵfac = function MethFourStep2Component_Factory(t) {
        return new (t || _MethFourStep2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__.RgbCmykService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_meth_four_data_service__WEBPACK_IMPORTED_MODULE_1__.MethFourDataService));
      };

      _MethFourStep2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MethFourStep2Component,
        selectors: [["app-meth-four-step2"]],
        outputs: {
          onLast: "onLast",
          onNext: "onNext"
        },
        decls: 11,
        vars: 2,
        consts: [[1, "choose_channelH", "content"], [1, "codeInput", "content"], ["type", "range", "min", "20", "max", "30", 3, "ngModel", "ngModelChange"], [1, "num"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethFourStep2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0441\u0432\u0435\u0442\u043B\u043E\u0442\u044B \u0434\u043B\u044F \u0438\u0437\u044A\u044F\u0442\u0438\u044F \u0432 \u0436\u0451\u043B\u0442\u043E\u043C \u043A\u0430\u043D\u0430\u043B\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MethFourStep2Component_Template_input_ngModelChange_3_listener($event) {
              return ctx.codeNum = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethFourStep2Component_Template_button_click_7_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethFourStep2Component_Template_button_click_9_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0414\u0430\u043B\u0435\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.codeNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.codeNum, " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
        styles: [".codeInput[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n.codeInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    height: 30px;\r\n    width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtZm91ci1zdGVwMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoibWV0aC1mb3VyLXN0ZXAyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29kZUlucHV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jb2RlSW5wdXQgaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    21330:
    /*!*****************************************************************************!*\
      !*** ./src/app/meth-four-page/meth-four-step3/meth-four-step3.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFourStep3Component": function MethFourStep3Component() {
          return (
            /* binding */
            _MethFourStep3Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_meth_four_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/meth-four-data.service */
      64124);
      /* harmony import */


      var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/charts.service */
      21198);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      86178);

      var _c0 = ["m4s3c1"];

      var _c1 = function _c1(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethFourStep3Component = /*#__PURE__*/function () {
        function _MethFourStep3Component(api, methFourDataService, chartsService) {
          _classCallCheck(this, _MethFourStep3Component);

          this.api = api;
          this.methFourDataService = methFourDataService;
          this.chartsService = chartsService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.imgDivHeight = 600;
          this.imgDivWidth = 0;
          this.barChartOptions = {
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [];
          this.barChartLabels1 = [];
          this.barChartColor1 = [{
            borderColor: 'black',
            backgroundColor: 'cyan'
          }];
          this.barChartData1 = [{
            data: [],
            label: 'C Channel'
          }];
          this.barChartLabels2 = [];
          this.barChartColor2 = [{
            borderColor: 'black',
            backgroundColor: 'magenta'
          }];
          this.barChartData2 = [{
            data: [],
            label: 'M Channel'
          }];
          this.barChartLabels3 = [];
          this.barChartColor3 = [{
            borderColor: 'black',
            backgroundColor: 'yellow'
          }];
          this.barChartData3 = [{
            data: [],
            label: 'Y Channel'
          }];
          this.barChartLabels4 = [];
          this.barChartColor4 = [{
            borderColor: 'black',
            backgroundColor: 'black'
          }];
          this.barChartData4 = [{
            data: [],
            label: 'K Channel'
          }];
        }

        _createClass(_MethFourStep3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.canvas.nativeElement.width = this.methFourDataService.picParams.width;
            this.canvas.nativeElement.height = this.methFourDataService.picParams.height;
            var ctx = this.canvas.nativeElement.getContext('2d');
            var imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < imageData.data.length; i += 4) {
              imageData.data[i + 0] = this.methFourDataService.newImageArray[i + 0];
              imageData.data[i + 1] = this.methFourDataService.newImageArray[i + 1];
              imageData.data[i + 2] = this.methFourDataService.newImageArray[i + 2];
              imageData.data[i + 3] = this.methFourDataService.newImageArray[i + 3];
            }

            ctx.putImageData(imageData, 0, 0);
            this.chartsService.renderChartsCMYK(4, imageData.data);
            this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg');
            this.imgDivWidth = this.canvas.nativeElement.width * (this.imgDivHeight / this.canvas.nativeElement.height);
            var size = this.canvas.nativeElement.width + 'x' + this.canvas.nativeElement.height;
            var img = new File([this.api.dataURItoBlob(this.imgUrl)], 'm4result.png');
            this.api.addToDb('4', img, size).subscribe(function (res) {
              console.log(res);
            });
            this.renderCharts(this.methFourDataService.amountChannelC, this.methFourDataService.amountChannelM, this.methFourDataService.amountChannelY, this.methFourDataService.amountChannelK);
          }
        }, {
          key: "renderCharts",
          value: function renderCharts(typeC, typeM, typeY, typeK) {
            var chartColumnNames = [];

            for (var i = 0; i <= 100; i++) {
              chartColumnNames[i] = i;
            }

            this.barChartLabels1 = chartColumnNames;
            this.barChartData1 = [{
              data: typeC,
              label: 'C Channel'
            }];
            this.barChartLabels2 = chartColumnNames;
            this.barChartData2 = [{
              data: typeM,
              label: 'M Channel'
            }];
            this.barChartLabels3 = chartColumnNames;
            this.barChartData3 = [{
              data: typeY,
              label: 'Y Channel'
            }];
            this.barChartLabels4 = chartColumnNames;
            this.barChartData4 = [{
              data: typeK,
              label: 'K Channel'
            }];
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "saveImage",
          value: function saveImage() {
            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = this.canvas.nativeElement.toDataURL();
            link.click();
          }
        }]);

        return _MethFourStep3Component;
      }();

      _MethFourStep3Component.ɵfac = function MethFourStep3Component_Factory(t) {
        return new (t || _MethFourStep3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meth_four_data_service__WEBPACK_IMPORTED_MODULE_1__.MethFourDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_2__.ChartsService));
      };

      _MethFourStep3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethFourStep3Component,
        selectors: [["app-meth-four-step3"]],
        viewQuery: function MethFourStep3Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onLast: "onLast"
        },
        decls: 19,
        vars: 33,
        consts: [[2, "display", "none"], ["m4s3c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "channels"], [1, "channels__grid_cmyk"], [1, "canvas_gholder"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", "colors"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethFourStep3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MethFourStep3Component_Template_button_click_15_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MethFourStep3Component_Template_button_click_17_listener() {
              return ctx.saveImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](29, _c1, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData1)("labels", ctx.barChartLabels1)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData2)("labels", ctx.barChartLabels2)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData3)("labels", ctx.barChartLabels3)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData4)("labels", ctx.barChartLabels4)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor4);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective],
        styles: [".canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtZm91ci1zdGVwMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJtZXRoLWZvdXItc3RlcDMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW52YXNJbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhbnZhc0ltYWdlX19pbWcge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4ICMyNTI1MjU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    93704:
    /*!**********************************************************!*\
      !*** ./src/app/meth-one-page/meth-one-page.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethOnePageComponent": function MethOnePageComponent() {
          return (
            /* binding */
            _MethOnePageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _meth_one_step1_meth_one_step1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./meth-one-step1/meth-one-step1.component */
      66643);
      /* harmony import */


      var _meth_one_step2_meth_one_step2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meth-one-step2/meth-one-step2.component */
      14058);
      /* harmony import */


      var _meth_one_step3_meth_one_step3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meth-one-step3/meth-one-step3.component */
      94987);

      function MethOnePageComponent_app_meth_one_step1_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-one-step1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethOnePageComponent_app_meth_one_step1_5_Template_app_meth_one_step1_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethOnePageComponent_app_meth_one_step2_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-one-step2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethOnePageComponent_app_meth_one_step2_6_Template_app_meth_one_step2_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.nextStep();
          })("onLast", function MethOnePageComponent_app_meth_one_step2_6_Template_app_meth_one_step2_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethOnePageComponent_app_meth_one_step3_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-one-step3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onLast", function MethOnePageComponent_app_meth_one_step3_7_Template_app_meth_one_step3_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _MethOnePageComponent = /*#__PURE__*/function () {
        function _MethOnePageComponent() {
          _classCallCheck(this, _MethOnePageComponent);

          this.method = 'Изъятие нескольких уровней в диапазоне канала';
          this.step = 1;
        }

        _createClass(_MethOnePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.step--;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.step++;
          }
        }]);

        return _MethOnePageComponent;
      }();

      _MethOnePageComponent.ɵfac = function MethOnePageComponent_Factory(t) {
        return new (t || _MethOnePageComponent)();
      };

      _MethOnePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethOnePageComponent,
        selectors: [["app-meth-one-page"]],
        decls: 8,
        vars: 6,
        consts: [[1, "content", "method"], [1, "content", "step"], [3, "ngSwitch"], [3, "onNext", 4, "ngSwitchCase"], [3, "onNext", "onLast", 4, "ngSwitchCase"], [3, "onLast", 4, "ngSwitchCase"], [3, "onNext"], [3, "onNext", "onLast"], [3, "onLast"]],
        template: function MethOnePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MethOnePageComponent_app_meth_one_step1_5_Template, 1, 0, "app-meth-one-step1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MethOnePageComponent_app_meth_one_step2_6_Template, 1, 0, "app-meth-one-step2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MethOnePageComponent_app_meth_one_step3_7_Template, 1, 0, "app-meth-one-step3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.method);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("\u0428\u0430\u0433 " + ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _meth_one_step1_meth_one_step1_component__WEBPACK_IMPORTED_MODULE_0__.MethOneStep1Component, _meth_one_step2_meth_one_step2_component__WEBPACK_IMPORTED_MODULE_1__.MethOneStep2Component, _meth_one_step3_meth_one_step3_component__WEBPACK_IMPORTED_MODULE_2__.MethOneStep3Component],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRoLW9uZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    66643:
    /*!**************************************************************************!*\
      !*** ./src/app/meth-one-page/meth-one-step1/meth-one-step1.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethOneStep1Component": function MethOneStep1Component() {
          return (
            /* binding */
            _MethOneStep1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_meth_one_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/meth-one-data.service */
      93636);
      /* harmony import */


      var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/charts.service */
      21198);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      86178);

      var _c0 = ["m1s1c1"];

      function MethOneStep1Component_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
        }
      }

      function MethOneStep1Component_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
        }
      }

      function MethOneStep1Component_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
        }
      }

      function MethOneStep1Component_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a1, a2) {
        return {
          btn: true,
          btn_enabled: a1,
          btn_disabled: a2
        };
      };

      function MethOneStep1Component_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethOneStep1Component_div_23_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0414\u0430\u043B\u0435\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx_r5.isChoosen && ctx_r5.isImageLoaded))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx_r5.isChoosen && ctx_r5.isImageLoaded, !(ctx_r5.isChoosen && ctx_r5.isImageLoaded)));
        }
      }

      var _c2 = function _c2(a0) {
        return {
          display: a0
        };
      };

      var _c3 = function _c3(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethOneStep1Component = /*#__PURE__*/function () {
        function _MethOneStep1Component(methOneDataService, chartsService) {
          _classCallCheck(this, _MethOneStep1Component);

          this.methOneDataService = methOneDataService;
          this.chartsService = chartsService;
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.isChoosen = false;
          this.isLoading = false;
          this.isImageLoaded = false;
          this.reader = new FileReader();
          this.pic = new Image();
          this.imgDivHeight = 300;
          this.imgDivWidth = 0;
          this.imgUrl = '';
          this.choosenChannel = this.methOneDataService.choosenChannel;
          this.barChartOptions = {
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [];
          this.barChartLabels1 = [];
          this.barChartColor1 = [{
            borderColor: 'black',
            backgroundColor: 'red'
          }];
          this.barChartData1 = [{
            data: [],
            label: 'R Channel'
          }];
          this.barChartLabels2 = [];
          this.barChartColor2 = [{
            borderColor: 'black',
            backgroundColor: 'green'
          }];
          this.barChartData2 = [{
            data: [],
            label: 'G Channel'
          }];
          this.barChartLabels3 = [];
          this.barChartColor3 = [{
            borderColor: 'black',
            backgroundColor: 'blue'
          }];
          this.barChartData3 = [{
            data: [],
            label: 'B Channel'
          }];
        }

        _createClass(_MethOneStep1Component, [{
          key: "addPic",
          value: function addPic(files) {
            var _this8 = this;

            this.isImageLoaded = false;
            this.isLoading = true;
            this.isChoosen = false;

            this.reader.onload = function () {
              var ctx = _this8.canvas.nativeElement.getContext('2d');

              _this8.pic.onload = function () {
                _this8.choosenChannel = '';

                _this8.methOneDataService.fullZeroing();

                _this8.methOneDataService.picParams = {
                  width: _this8.pic.width,
                  height: _this8.pic.height
                };
                _this8.canvas.nativeElement.width = _this8.pic.width;
                _this8.canvas.nativeElement.height = _this8.pic.height;
                ctx.drawImage(_this8.pic, 0, 0);
                _this8.imgUrl = _this8.canvas.nativeElement.toDataURL('image/jpeg');
                _this8.imgDivWidth = _this8.pic.width * (_this8.imgDivHeight / _this8.pic.height);

                _this8.devideOnChannels(ctx);

                _this8.isImageLoaded = true;
                _this8.isLoading = false;
              };

              _this8.pic.src = _this8.reader.result;
            };

            this.reader.readAsDataURL(files[0]);
          }
        }, {
          key: "devideOnChannels",
          value: function devideOnChannels(ctx) {
            var pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            this.chartsService.renderChartsRGB(1, pixelData.data);
            this.renderCharts(this.methOneDataService.amountChannelR, this.methOneDataService.amountChannelG, this.methOneDataService.amountChannelB);
          }
        }, {
          key: "renderCharts",
          value: function renderCharts(typeR, typeG, typeB) {
            var chartColumnNames = [];

            for (var i = 0; i <= 255; i++) {
              chartColumnNames[i] = i;
            }

            this.barChartLabels1 = chartColumnNames;
            this.barChartData1 = [{
              data: typeR,
              label: 'R Channel'
            }];
            this.barChartLabels2 = chartColumnNames;
            this.barChartData2 = [{
              data: typeG,
              label: 'G Channel'
            }];
            this.barChartLabels3 = chartColumnNames;
            this.barChartData3 = [{
              data: typeB,
              label: 'B Channel'
            }];
          }
        }, {
          key: "chooseChannel",
          value: function chooseChannel(channel) {
            this.isChoosen = true;
            this.methOneDataService.choosenChannel = channel;
            this.choosenChannel = channel;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.onNext.emit(null);
          }
        }]);

        return _MethOneStep1Component;
      }();

      _MethOneStep1Component.ɵfac = function MethOneStep1Component_Factory(t) {
        return new (t || _MethOneStep1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_meth_one_data_service__WEBPACK_IMPORTED_MODULE_0__.MethOneDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_1__.ChartsService));
      };

      _MethOneStep1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MethOneStep1Component,
        selectors: [["app-meth-one-step1"]],
        viewQuery: function MethOneStep1Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onNext: "onNext"
        },
        decls: 24,
        vars: 34,
        consts: [[1, "choose_file"], ["for", "image_upload", 1, "upload_label"], ["type", "file", "id", "image_upload", 3, "change"], [3, "ngStyle"], [2, "display", "none"], ["m1s1c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "choose_channelH", "content"], [1, "channels"], [1, "channels__grid_rgb"], [1, "canvas_gholder", 3, "click"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", "colors"], ["class", "galka", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "btns", 4, "ngIf"], [1, "galka"], [1, "loading"], [1, "btns"], [3, "disabled", "ngClass", "click"]],
        template: function MethOneStep1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 (PNG, JPG)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MethOneStep1Component_Template_input_change_3_listener($event) {
              return ctx.addPic($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "canvas", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 RGB");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethOneStep1Component_Template_div_click_13_listener() {
              return ctx.chooseChannel("r");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "canvas", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MethOneStep1Component_div_15_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethOneStep1Component_Template_div_click_16_listener() {
              return ctx.chooseChannel("g");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "canvas", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MethOneStep1Component_div_18_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethOneStep1Component_Template_div_click_19_listener() {
              return ctx.chooseChannel("b");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "canvas", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MethOneStep1Component_div_21_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MethOneStep1Component_div_22_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MethOneStep1Component_div_23_Template, 3, 5, "div", 15);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c2, ctx.isImageLoaded ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](30, _c3, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData1)("labels", ctx.barChartLabels1)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "r");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData2)("labels", ctx.barChartLabels2)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData3)("labels", ctx.barChartLabels3)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isImageLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        styles: [".choose_file[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\r\n.canvas_gholder[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtb25lLXN0ZXAxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6Im1ldGgtb25lLXN0ZXAxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvb3NlX2ZpbGUge1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jYW52YXNJbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhbnZhc0ltYWdlX19pbWcge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4ICMyNTI1MjU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jYW52YXNfZ2hvbGRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    14058:
    /*!**************************************************************************!*\
      !*** ./src/app/meth-one-page/meth-one-step2/meth-one-step2.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethOneStep2Component": function MethOneStep2Component() {
          return (
            /* binding */
            _MethOneStep2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_meth_one_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/meth-one-data.service */
      93636);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _MethOneStep2Component = /*#__PURE__*/function () {
        function _MethOneStep2Component(methOneDataService) {
          _classCallCheck(this, _MethOneStep2Component);

          this.methOneDataService = methOneDataService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.num = '1';
        }

        _createClass(_MethOneStep2Component, [{
          key: "generateNewImage",
          value: function generateNewImage(newChannel, channel) {
            var newPixel;

            for (var i = 0; i < newChannel.length; i++) {
              switch (channel) {
                case 'r':
                  newPixel = {
                    r: newChannel[i],
                    g: this.methOneDataService.arrChannelG[i],
                    b: this.methOneDataService.arrChannelB[i],
                    a: this.methOneDataService.arrChannelA[i]
                  };
                  break;

                case 'g':
                  newPixel = {
                    r: this.methOneDataService.arrChannelR[i],
                    g: newChannel[i],
                    b: this.methOneDataService.arrChannelB[i],
                    a: this.methOneDataService.arrChannelA[i]
                  };
                  break;

                case 'b':
                  newPixel = {
                    r: this.methOneDataService.arrChannelR[i],
                    g: this.methOneDataService.arrChannelG[i],
                    b: newChannel[i],
                    a: this.methOneDataService.arrChannelA[i]
                  };
                  break;
              }

              this.methOneDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            }
          }
        }, {
          key: "randomUniqInt",
          value: function randomUniqInt(min, max, arr) {
            var newRandomInt = min + Math.floor((max - min) * Math.random());
            if (!arr.includes(newRandomInt)) return newRandomInt;else this.randomUniqInt(min, max, arr);
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            var newCodeNumArr;
            var randomColorValues = [];

            switch (this.methOneDataService.choosenChannel) {
              case 'r':
                newCodeNumArr = this.methOneDataService.arrChannelR;
                break;

              case 'g':
                newCodeNumArr = this.methOneDataService.arrChannelG;
                break;

              case 'b':
                newCodeNumArr = this.methOneDataService.arrChannelB;
                break;
            }

            for (var i = 0; i < +this.num; i++) {
              randomColorValues.push(this.randomUniqInt(0, 255, randomColorValues));
            }

            randomColorValues.forEach(function (n) {
              newCodeNumArr[n] += 1;
            });
            this.generateNewImage(newCodeNumArr, this.methOneDataService.choosenChannel);
            this.methOneDataService.newChoosenChannel = newCodeNumArr;
            this.onNext.emit(null);
          }
        }]);

        return _MethOneStep2Component;
      }();

      _MethOneStep2Component.ɵfac = function MethOneStep2Component_Factory(t) {
        return new (t || _MethOneStep2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_meth_one_data_service__WEBPACK_IMPORTED_MODULE_0__.MethOneDataService));
      };

      _MethOneStep2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MethOneStep2Component,
        selectors: [["app-meth-one-step2"]],
        outputs: {
          onLast: "onLast",
          onNext: "onNext"
        },
        decls: 11,
        vars: 2,
        consts: [[1, "choose_channelH", "content"], [1, "codeInput"], ["type", "range", "min", "1", "max", "5", 3, "ngModel", "ngModelChange"], [1, "num"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethOneStep2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0441\u0432\u0435\u0442\u043B\u043E\u0442\u044B \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MethOneStep2Component_Template_input_ngModelChange_3_listener($event) {
              return ctx.num = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethOneStep2Component_Template_button_click_7_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethOneStep2Component_Template_button_click_9_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0414\u0430\u043B\u0435\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.num);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.num, " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
        styles: [".codeInput[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n.codeInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    height: 30px;\r\n    width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtb25lLXN0ZXAyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJtZXRoLW9uZS1zdGVwMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGVJbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uY29kZUlucHV0IGlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    94987:
    /*!**************************************************************************!*\
      !*** ./src/app/meth-one-page/meth-one-step3/meth-one-step3.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethOneStep3Component": function MethOneStep3Component() {
          return (
            /* binding */
            _MethOneStep3Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_meth_one_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/meth-one-data.service */
      93636);
      /* harmony import */


      var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/charts.service */
      21198);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      86178);

      var _c0 = ["m1s3c1"];

      var _c1 = function _c1(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethOneStep3Component = /*#__PURE__*/function () {
        function _MethOneStep3Component(api, methOneDataService, chartsService) {
          _classCallCheck(this, _MethOneStep3Component);

          this.api = api;
          this.methOneDataService = methOneDataService;
          this.chartsService = chartsService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.imgDivHeight = 600;
          this.imgDivWidth = 0;
          this.barChartOptions = {
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [];
          this.barChartLabels1 = [];
          this.barChartColor1 = [{
            borderColor: 'black',
            backgroundColor: 'red'
          }];
          this.barChartData1 = [{
            data: [],
            label: 'R Channel'
          }];
          this.barChartLabels2 = [];
          this.barChartColor2 = [{
            borderColor: 'black',
            backgroundColor: 'green'
          }];
          this.barChartData2 = [{
            data: [],
            label: 'G Channel'
          }];
          this.barChartLabels3 = [];
          this.barChartColor3 = [{
            borderColor: 'black',
            backgroundColor: 'blue'
          }];
          this.barChartData3 = [{
            data: [],
            label: 'B Channel'
          }];
        }

        _createClass(_MethOneStep3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.canvas.nativeElement.width = this.methOneDataService.picParams.width;
            this.canvas.nativeElement.height = this.methOneDataService.picParams.height;
            var ctx = this.canvas.nativeElement.getContext('2d');
            var imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < imageData.data.length; i += 4) {
              imageData.data[i + 0] = this.methOneDataService.newImageArray[i + 0];
              imageData.data[i + 1] = this.methOneDataService.newImageArray[i + 1];
              imageData.data[i + 2] = this.methOneDataService.newImageArray[i + 2];
              imageData.data[i + 3] = this.methOneDataService.newImageArray[i + 3];
            }

            ctx.putImageData(imageData, 0, 0);
            this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg');
            this.imgDivWidth = this.canvas.nativeElement.width * (this.imgDivHeight / this.canvas.nativeElement.height);
            var size = this.canvas.nativeElement.width + 'x' + this.canvas.nativeElement.height;
            var img = new File([this.api.dataURItoBlob(this.imgUrl)], 'm1result.png');
            this.api.addToDb('1', img, size).subscribe(function (res) {
              console.log(res);
            });
            this.chartsService.renderChartsRGB(1, imageData.data);
            this.renderCharts(this.methOneDataService.amountChannelR, this.methOneDataService.amountChannelG, this.methOneDataService.amountChannelB);
          }
        }, {
          key: "renderCharts",
          value: function renderCharts(typeR, typeG, typeB) {
            var chartColumnNames = [];

            for (var i = 0; i <= 255; i++) {
              chartColumnNames[i] = i;
            }

            this.barChartLabels1 = chartColumnNames;
            this.barChartData1 = [{
              data: typeR,
              label: 'R Channel'
            }];
            this.barChartLabels2 = chartColumnNames;
            this.barChartData2 = [{
              data: typeG,
              label: 'G Channel'
            }];
            this.barChartLabels3 = chartColumnNames;
            this.barChartData3 = [{
              data: typeB,
              label: 'B Channel'
            }];
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "saveImage",
          value: function saveImage() {
            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = this.canvas.nativeElement.toDataURL();
            link.click();
          }
        }]);

        return _MethOneStep3Component;
      }();

      _MethOneStep3Component.ɵfac = function MethOneStep3Component_Factory(t) {
        return new (t || _MethOneStep3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meth_one_data_service__WEBPACK_IMPORTED_MODULE_1__.MethOneDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_2__.ChartsService));
      };

      _MethOneStep3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethOneStep3Component,
        selectors: [["app-meth-one-step3"]],
        viewQuery: function MethOneStep3Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onLast: "onLast"
        },
        decls: 17,
        vars: 26,
        consts: [[2, "display", "none"], ["m1s3c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "channels"], [1, "channels__grid_rgb"], [1, "canvas_gholder"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", "colors"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethOneStep3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MethOneStep3Component_Template_button_click_13_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MethOneStep3Component_Template_button_click_15_listener() {
              return ctx.saveImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](22, _c1, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData1)("labels", ctx.barChartLabels1)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData2)("labels", ctx.barChartLabels2)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData3)("labels", ctx.barChartLabels3)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective],
        styles: [".canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtb25lLXN0ZXAzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6Im1ldGgtb25lLXN0ZXAzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FudmFzSW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jYW52YXNJbWFnZV9faW1nIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAjMjUyNTI1O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    63025:
    /*!**************************************************************!*\
      !*** ./src/app/meth-three-page/meth-three-page.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethThreePageComponent": function MethThreePageComponent() {
          return (
            /* binding */
            _MethThreePageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _meth_three_step1_meth_three_step1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./meth-three-step1/meth-three-step1.component */
      64930);
      /* harmony import */


      var _meth_three_step2_meth_three_step2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meth-three-step2/meth-three-step2.component */
      16483);
      /* harmony import */


      var _meth_three_step3_meth_three_step3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meth-three-step3/meth-three-step3.component */
      76773);

      function MethThreePageComponent_app_meth_three_step1_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-three-step1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethThreePageComponent_app_meth_three_step1_5_Template_app_meth_three_step1_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethThreePageComponent_app_meth_three_step2_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-three-step2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethThreePageComponent_app_meth_three_step2_6_Template_app_meth_three_step2_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.nextStep();
          })("onLast", function MethThreePageComponent_app_meth_three_step2_6_Template_app_meth_three_step2_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethThreePageComponent_app_meth_three_step3_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-three-step3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onLast", function MethThreePageComponent_app_meth_three_step3_7_Template_app_meth_three_step3_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _MethThreePageComponent = /*#__PURE__*/function () {
        function _MethThreePageComponent() {
          _classCallCheck(this, _MethThreePageComponent);

          this.method = 'Введение 2D штрихового кода (QR) в цифровое изображение';
          this.step = 1;
        }

        _createClass(_MethThreePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.step--;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.step++;
          }
        }]);

        return _MethThreePageComponent;
      }();

      _MethThreePageComponent.ɵfac = function MethThreePageComponent_Factory(t) {
        return new (t || _MethThreePageComponent)();
      };

      _MethThreePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethThreePageComponent,
        selectors: [["app-meth-three-page"]],
        decls: 8,
        vars: 6,
        consts: [[1, "content", "method"], [1, "content", "step"], [3, "ngSwitch"], [3, "onNext", 4, "ngSwitchCase"], [3, "onNext", "onLast", 4, "ngSwitchCase"], [3, "onLast", 4, "ngSwitchCase"], [3, "onNext"], [3, "onNext", "onLast"], [3, "onLast"]],
        template: function MethThreePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MethThreePageComponent_app_meth_three_step1_5_Template, 1, 0, "app-meth-three-step1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MethThreePageComponent_app_meth_three_step2_6_Template, 1, 0, "app-meth-three-step2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MethThreePageComponent_app_meth_three_step3_7_Template, 1, 0, "app-meth-three-step3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.method);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("\u0428\u0430\u0433 " + ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _meth_three_step1_meth_three_step1_component__WEBPACK_IMPORTED_MODULE_0__.MethThreeStep1Component, _meth_three_step2_meth_three_step2_component__WEBPACK_IMPORTED_MODULE_1__.MethThreeStep2Component, _meth_three_step3_meth_three_step3_component__WEBPACK_IMPORTED_MODULE_2__.MethThreeStep3Component],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRoLXRocmVlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    64930:
    /*!********************************************************************************!*\
      !*** ./src/app/meth-three-page/meth-three-step1/meth-three-step1.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethThreeStep1Component": function MethThreeStep1Component() {
          return (
            /* binding */
            _MethThreeStep1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_meth_three_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/meth-three-data.service */
      25391);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["m3s1c1"];
      var _c1 = ["m3s1c2"];
      var _c2 = ["m3s1c3"];

      function MethThreeStep1Component_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 19);
        }
      }

      function MethThreeStep1Component_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 19);
        }
      }

      function MethThreeStep1Component_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 19);
        }
      }

      function MethThreeStep1Component_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c3 = function _c3(a1, a2) {
        return {
          btn: true,
          btn_enabled: a1,
          btn_disabled: a2
        };
      };

      function MethThreeStep1Component_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethThreeStep1Component_div_29_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0414\u0430\u043B\u0435\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx_r7.isChoosen && ctx_r7.isImageLoaded))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c3, ctx_r7.isChoosen && ctx_r7.isImageLoaded, !(ctx_r7.isChoosen && ctx_r7.isImageLoaded)));
        }
      }

      var _c4 = function _c4(a0) {
        return {
          display: a0
        };
      };

      var _c5 = function _c5(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _c6 = function _c6(a0) {
        return {
          backgroundImage: a0
        };
      };

      var _MethThreeStep1Component = /*#__PURE__*/function () {
        function _MethThreeStep1Component(methThreeDataService) {
          _classCallCheck(this, _MethThreeStep1Component);

          this.methThreeDataService = methThreeDataService;
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.isChoosen = false;
          this.isLoading = false;
          this.isImageLoaded = false;
          this.reader = new FileReader();
          this.pic = new Image();
          this.code = new Image();
          this.imgDivHeight = 300;
          this.imgDivWidth = 0;
          this.imgUrl = '';
          this.codeUrl = '';
          this.choosenChannel = '';
          this.channelUrlR = '';
          this.channelUrlG = '';
          this.channelUrlB = '';
        }

        _createClass(_MethThreeStep1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addPic",
          value: function addPic(files) {
            var _this9 = this;

            this.isImageLoaded = false;
            this.isLoading = true;
            this.isChoosen = false;

            this.reader.onload = function () {
              var ctx = _this9.canvas.nativeElement.getContext('2d');

              _this9.pic.onload = function () {
                _this9.choosenChannel = '';

                _this9.methThreeDataService.fullZeroing();

                _this9.methThreeDataService.picParams = {
                  width: _this9.pic.width,
                  height: _this9.pic.height
                };
                _this9.canvas.nativeElement.width = _this9.pic.width;
                _this9.canvas.nativeElement.height = _this9.pic.height;
                ctx.drawImage(_this9.pic, 0, 0);
                _this9.imgUrl = _this9.canvas.nativeElement.toDataURL('image/jpeg');
                _this9.imgDivWidth = _this9.pic.width * (_this9.imgDivHeight / _this9.pic.height);

                _this9.devideOnChannels(ctx);

                _this9.isImageLoaded = true;
                _this9.isLoading = false;
              };

              _this9.pic.src = _this9.reader.result;
            };

            this.reader.readAsDataURL(files[0]);
          }
        }, {
          key: "addCode",
          value: function addCode(files) {
            var _this10 = this;

            this.reader.onload = function () {
              var ctx = _this10.canvasCode.nativeElement.getContext('2d');

              _this10.code.onload = function () {
                _this10.choosenChannel = '';

                _this10.methThreeDataService.codeZeroing();

                _this10.methThreeDataService.codeParams = {
                  width: _this10.code.width,
                  height: _this10.code.height
                };
                _this10.canvasCode.nativeElement.width = _this10.code.width;
                _this10.canvasCode.nativeElement.height = _this10.code.height;
                ctx.drawImage(_this10.code, 0, 0);
                _this10.methThreeDataService.codeData = ctx.getImageData(0, 0, _this10.canvasCode.nativeElement.width, _this10.canvasCode.nativeElement.height);
                _this10.codeUrl = _this10.canvasCode.nativeElement.toDataURL('image/jpeg');
                _this10.imgDivWidth = _this10.code.width * (_this10.imgDivHeight / _this10.code.height);
              };

              _this10.code.src = _this10.reader.result;
            };

            this.reader.readAsDataURL(files[0]);
          }
        }, {
          key: "devideOnChannels",
          value: function devideOnChannels(ctx) {
            var pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            var ctxChannels = this.canvasChannels.nativeElement.getContext('2d');
            this.canvasChannels.nativeElement.width = this.canvas.nativeElement.width;
            this.canvasChannels.nativeElement.height = this.canvas.nativeElement.height;

            for (var i = 0; i < pixelData.data.length; i += 4) {
              this.methThreeDataService.arrChannelR.push(pixelData.data[i + 0]);
              this.methThreeDataService.arrChannelG.push(pixelData.data[i + 1]);
              this.methThreeDataService.arrChannelB.push(pixelData.data[i + 2]);
              this.methThreeDataService.arrChannelA.push(pixelData.data[i + 3]);
            }

            for (var _i2 = 0; _i2 < pixelData.data.length; _i2 += 4) {
              this.methThreeDataService.channelPixArrR.push(pixelData.data[_i2], 0, 0, 0);
              this.methThreeDataService.channelPixArrG.push(0, pixelData.data[_i2 + 1], 0, 0);
              this.methThreeDataService.channelPixArrB.push(0, 0, pixelData.data[_i2 + 2], 0);
              this.methThreeDataService.channelPixArrA.push(0, 0, 0, pixelData.data[_i2 + 3]);
            }

            for (var _i3 = 0; _i3 < pixelData.data.length; _i3 += 4) {
              pixelData.data[_i3 + 0] = this.methThreeDataService.channelPixArrR[_i3 + 0];
              pixelData.data[_i3 + 1] = this.methThreeDataService.channelPixArrR[_i3 + 1];
              pixelData.data[_i3 + 2] = this.methThreeDataService.channelPixArrR[_i3 + 2];
            }

            ctxChannels.putImageData(pixelData, 0, 0);
            this.channelUrlR = this.canvasChannels.nativeElement.toDataURL('image/jpeg');

            for (var _i4 = 0; _i4 < pixelData.data.length; _i4 += 4) {
              pixelData.data[_i4 + 0] = this.methThreeDataService.channelPixArrG[_i4 + 0];
              pixelData.data[_i4 + 1] = this.methThreeDataService.channelPixArrG[_i4 + 1];
              pixelData.data[_i4 + 2] = this.methThreeDataService.channelPixArrG[_i4 + 2];
            }

            ctxChannels.putImageData(pixelData, 0, 0);
            this.channelUrlG = this.canvasChannels.nativeElement.toDataURL('image/jpeg');

            for (var _i5 = 0; _i5 < pixelData.data.length; _i5 += 4) {
              pixelData.data[_i5 + 0] = this.methThreeDataService.channelPixArrB[_i5 + 0];
              pixelData.data[_i5 + 1] = this.methThreeDataService.channelPixArrB[_i5 + 1];
              pixelData.data[_i5 + 2] = this.methThreeDataService.channelPixArrB[_i5 + 2];
            }

            ctxChannels.putImageData(pixelData, 0, 0);
            this.channelUrlB = this.canvasChannels.nativeElement.toDataURL('image/jpeg');
          }
        }, {
          key: "chooseChannel",
          value: function chooseChannel(channel) {
            this.isChoosen = true;
            this.choosenChannel = channel;
            this.methThreeDataService.choosenChannel = channel;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.onNext.emit(null);
          }
        }]);

        return _MethThreeStep1Component;
      }();

      _MethThreeStep1Component.ɵfac = function MethThreeStep1Component_Factory(t) {
        return new (t || _MethThreeStep1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_meth_three_data_service__WEBPACK_IMPORTED_MODULE_0__.MethThreeDataService));
      };

      _MethThreeStep1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MethThreeStep1Component,
        selectors: [["app-meth-three-step1"]],
        viewQuery: function MethThreeStep1Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvasChannels = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvasCode = _t.first);
          }
        },
        outputs: {
          onNext: "onNext"
        },
        decls: 30,
        vars: 27,
        consts: [[1, "choose_file"], ["for", "image_upload", 1, "upload_label"], ["type", "file", "id", "image_upload", 3, "change"], ["for", "code_upload", 1, "upload_label"], ["type", "file", "id", "code_upload", 3, "change"], [3, "ngStyle"], [2, "display", "none"], ["m3s1c1", ""], ["m3s1c2", ""], ["m3s1c3", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "choose_channelH", "content"], [1, "channels", "content"], [1, "channels__grid_rgb"], [1, "imageChannels", 3, "ngStyle", "click"], ["class", "galka", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "btns", 4, "ngIf"], [1, "galka"], [1, "loading"], [1, "btns"], [3, "disabled", "ngClass", "click"]],
        template: function MethThreeStep1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 (PNG, JPG)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MethThreeStep1Component_Template_input_change_3_listener($event) {
              return ctx.addPic($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u0434 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 (PNG, JPG)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MethThreeStep1Component_Template_input_change_7_listener($event) {
              return ctx.addCode($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "canvas", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "canvas", 6, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "canvas", 6, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 RGB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethThreeStep1Component_Template_div_click_22_listener() {
              return ctx.chooseChannel("r");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MethThreeStep1Component_div_23_Template, 1, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethThreeStep1Component_Template_div_click_24_listener() {
              return ctx.chooseChannel("g");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MethThreeStep1Component_div_25_Template, 1, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethThreeStep1Component_Template_div_click_26_listener() {
              return ctx.chooseChannel("b");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MethThreeStep1Component_div_27_Template, 1, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MethThreeStep1Component_div_28_Template, 3, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MethThreeStep1Component_div_29_Template, 3, 5, "div", 18);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c4, ctx.isImageLoaded ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](13, _c5, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](17, _c5, "url(" + ctx.codeUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c6, "url(" + ctx.channelUrlR + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "r");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c6, "url(" + ctx.channelUrlG + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c6, "url(" + ctx.channelUrlB + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
        styles: [".choose_file[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.channels__grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n.canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\r\n.channels__grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n}\r\n.imageChannels[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background-size: cover;\r\n    height: 300px;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtdGhyZWUtc3RlcDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6Im1ldGgtdGhyZWUtc3RlcDEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaG9vc2VfZmlsZSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNoYW5uZWxzX19ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbn1cclxuLmNhbnZhc0ltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2FudmFzSW1hZ2VfX2ltZyB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggIzI1MjUyNTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNoYW5uZWxzX19ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuLmltYWdlQ2hhbm5lbHMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuLmxvYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    16483:
    /*!********************************************************************************!*\
      !*** ./src/app/meth-three-page/meth-three-step2/meth-three-step2.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethThreeStep2Component": function MethThreeStep2Component() {
          return (
            /* binding */
            _MethThreeStep2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_meth_three_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/meth-three-data.service */
      25391);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["m3s2c1"];

      var _c1 = function _c1(a1, a2) {
        return {
          btn: true,
          btn_enabled: a1,
          btn_disabled: a2
        };
      };

      var _MethThreeStep2Component = /*#__PURE__*/function () {
        function _MethThreeStep2Component(methThreeDataService) {
          _classCallCheck(this, _MethThreeStep2Component);

          this.methThreeDataService = methThreeDataService;
          this.isChoosen = false;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_MethThreeStep2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            var channelPixArr = [];
            this.canvas.nativeElement.width = this.methThreeDataService.picParams.width;
            this.canvas.nativeElement.height = this.methThreeDataService.picParams.height;
            var ctx = this.canvas.nativeElement.getContext('2d');
            var pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            switch (this.methThreeDataService.choosenChannel) {
              case 'r':
                channelPixArr = this.methThreeDataService.channelPixArrR;
                break;

              case 'g':
                channelPixArr = this.methThreeDataService.channelPixArrG;
                break;

              case 'b':
                channelPixArr = this.methThreeDataService.channelPixArrB;
                break;
            }

            for (var i = 0; i < pixelData.data.length; i += 4) {
              pixelData.data[i + 0] = channelPixArr[i + 0];
              pixelData.data[i + 1] = channelPixArr[i + 1];
              pixelData.data[i + 2] = channelPixArr[i + 2];
              pixelData.data[i + 3] = 255;
            }

            ctx.putImageData(pixelData, 0, 0);
            this.pixelArrObj = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            this.defaultPixelArr = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            var mouswMove$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.canvas.nativeElement, 'mousemove');
            var mouseout$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.canvas.nativeElement, 'mouseout');
            mouswMove$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (e) {
              return {
                x: e.offsetX,
                y: e.offsetY
              };
            })).subscribe(function (p) {
              _this11.showCode(p, ctx);
            });
          }
        }, {
          key: "showCode",
          value: function showCode(position, context) {
            context.putImageData(this.pixelArrObj, 0, 0);
            context.strokeStyle = 'gold';
            context.lineWidth = 10;
            context.strokeRect(position.x, position.y, this.methThreeDataService.codeParams.width, this.methThreeDataService.codeParams.height);
          }
        }, {
          key: "renderCode",
          value: function renderCode(e) {
            this.codePosition = {
              x: e.offsetX,
              y: e.offsetY
            };
            var ctx = this.canvas.nativeElement.getContext('2d');
            ctx.putImageData(this.defaultPixelArr, 0, 0);
            ctx.putImageData(this.methThreeDataService.codeData, e.offsetX, e.offsetY);
            this.pixelArrObj = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            this.isChoosen = true;
          }
        }, {
          key: "generateNewImage",
          value: function generateNewImage(newChannel, channel) {
            var newPixel;

            for (var i = 0; i < newChannel.length; i++) {
              switch (channel) {
                case 'r':
                  newPixel = {
                    r: newChannel[i],
                    g: this.methThreeDataService.arrChannelG[i],
                    b: this.methThreeDataService.arrChannelB[i],
                    a: this.methThreeDataService.arrChannelA[i]
                  };
                  break;

                case 'g':
                  newPixel = {
                    r: this.methThreeDataService.arrChannelR[i],
                    g: newChannel[i],
                    b: this.methThreeDataService.arrChannelB[i],
                    a: this.methThreeDataService.arrChannelA[i]
                  };
                  break;

                case 'b':
                  newPixel = {
                    r: this.methThreeDataService.arrChannelR[i],
                    g: this.methThreeDataService.arrChannelG[i],
                    b: newChannel[i],
                    a: this.methThreeDataService.arrChannelA[i]
                  };
                  break;
              }

              this.methThreeDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            }
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            var newCodeNumArr;
            var codeData = this.methThreeDataService.codeData.data;
            var startX = this.codePosition.x;
            var startY = this.codePosition.y;
            var codeHeight = this.methThreeDataService.codeParams.height;
            var codeWidth = this.methThreeDataService.codeParams.width;

            switch (this.methThreeDataService.choosenChannel) {
              case 'r':
                newCodeNumArr = this.methThreeDataService.arrChannelR;
                break;

              case 'g':
                newCodeNumArr = this.methThreeDataService.arrChannelG;
                break;

              case 'b':
                newCodeNumArr = this.methThreeDataService.arrChannelB;
                break;
            }

            var c = 0;

            for (var y = startY; y < startY + codeHeight; y++) {
              for (var x = startX; x < startX + codeWidth; x++) {
                if (codeData[c] == 0 && codeData[c + 1] == 0 && codeData[c + 2] == 0) {
                  newCodeNumArr[this.methThreeDataService.picParams.width * y + x] = 255;
                } // else {
                //   newCodeNumArr[this.methThreeDataService.picParams.width * y + x] = 0
                // }


                c += 4;
              }
            }

            this.generateNewImage(newCodeNumArr, this.methThreeDataService.choosenChannel);
            this.methThreeDataService.newChoosenChannel = newCodeNumArr;
            this.onNext.emit(null);
          }
        }]);

        return _MethThreeStep2Component;
      }();

      _MethThreeStep2Component.ɵfac = function MethThreeStep2Component_Factory(t) {
        return new (t || _MethThreeStep2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_meth_three_data_service__WEBPACK_IMPORTED_MODULE_0__.MethThreeDataService));
      };

      _MethThreeStep2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MethThreeStep2Component,
        selectors: [["app-meth-three-step2"]],
        viewQuery: function MethThreeStep2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onLast: "onLast",
          onNext: "onNext"
        },
        decls: 8,
        vars: 5,
        consts: [[1, "codeCanvas"], [3, "click"], ["m3s2c1", ""], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [3, "disabled", "ngClass", "click"]],
        template: function MethThreeStep2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "canvas", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethThreeStep2Component_Template_canvas_click_1_listener($event) {
              return ctx.renderCode($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethThreeStep2Component_Template_button_click_4_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethThreeStep2Component_Template_button_click_6_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0414\u0430\u043B\u0435\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isChoosen)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx.isChoosen, !ctx.isChoosen));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
        styles: [".codeCanvas[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtdGhyZWUtc3RlcDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0IiLCJmaWxlIjoibWV0aC10aHJlZS1zdGVwMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGVDYW52YXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    76773:
    /*!********************************************************************************!*\
      !*** ./src/app/meth-three-page/meth-three-step3/meth-three-step3.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethThreeStep3Component": function MethThreeStep3Component() {
          return (
            /* binding */
            _MethThreeStep3Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_meth_three_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/meth-three-data.service */
      25391);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["m3s3c1"];

      var _c1 = function _c1(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethThreeStep3Component = /*#__PURE__*/function () {
        function _MethThreeStep3Component(api, methThreeDataService) {
          _classCallCheck(this, _MethThreeStep3Component);

          this.api = api;
          this.methThreeDataService = methThreeDataService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.imgDivHeight = 600;
          this.imgDivWidth = 0;
        }

        _createClass(_MethThreeStep3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.canvas.nativeElement.width = this.methThreeDataService.picParams.width;
            this.canvas.nativeElement.height = this.methThreeDataService.picParams.height;
            var ctx = this.canvas.nativeElement.getContext('2d');
            var imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < imageData.data.length; i += 4) {
              imageData.data[i + 0] = this.methThreeDataService.newImageArray[i + 0];
              imageData.data[i + 1] = this.methThreeDataService.newImageArray[i + 1];
              imageData.data[i + 2] = this.methThreeDataService.newImageArray[i + 2];
              imageData.data[i + 3] = this.methThreeDataService.newImageArray[i + 3];
            }

            ctx.putImageData(imageData, 0, 0);
            this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg');
            this.imgDivWidth = this.canvas.nativeElement.width * (this.imgDivHeight / this.canvas.nativeElement.height);
            var size = this.canvas.nativeElement.width + 'x' + this.canvas.nativeElement.height;
            var img = new File([this.api.dataURItoBlob(this.imgUrl)], 'm3result.png');
            this.api.addToDb('3', img, size).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "saveImage",
          value: function saveImage() {
            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = this.canvas.nativeElement.toDataURL();
            link.click();
          }
        }]);

        return _MethThreeStep3Component;
      }();

      _MethThreeStep3Component.ɵfac = function MethThreeStep3Component_Factory(t) {
        return new (t || _MethThreeStep3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_meth_three_data_service__WEBPACK_IMPORTED_MODULE_1__.MethThreeDataService));
      };

      _MethThreeStep3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MethThreeStep3Component,
        selectors: [["app-meth-three-step3"]],
        viewQuery: function MethThreeStep3Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onLast: "onLast"
        },
        decls: 9,
        vars: 5,
        consts: [[2, "display", "none"], ["m3s3c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethThreeStep3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethThreeStep3Component_Template_button_click_5_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethThreeStep3Component_Template_button_click_7_listener() {
              return ctx.saveImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](1, _c1, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
        styles: [".canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtdGhyZWUtc3RlcDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoibWV0aC10aHJlZS1zdGVwMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhc0ltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2FudmFzSW1hZ2VfX2ltZyB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggIzI1MjUyNTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    40250:
    /*!**********************************************************!*\
      !*** ./src/app/meth-two-page/meth-two-page.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethTwoPageComponent": function MethTwoPageComponent() {
          return (
            /* binding */
            _MethTwoPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _meth_two_step1_meth_two_step1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./meth-two-step1/meth-two-step1.component */
      86123);
      /* harmony import */


      var _meth_two_step2_meth_two_step2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meth-two-step2/meth-two-step2.component */
      13677);
      /* harmony import */


      var _meth_two_step3_meth_two_step3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meth-two-step3/meth-two-step3.component */
      83000);

      function MethTwoPageComponent_app_meth_two_step1_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-two-step1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethTwoPageComponent_app_meth_two_step1_5_Template_app_meth_two_step1_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethTwoPageComponent_app_meth_two_step2_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-two-step2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNext", function MethTwoPageComponent_app_meth_two_step2_6_Template_app_meth_two_step2_onNext_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.nextStep();
          })("onLast", function MethTwoPageComponent_app_meth_two_step2_6_Template_app_meth_two_step2_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MethTwoPageComponent_app_meth_two_step3_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-meth-two-step3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onLast", function MethTwoPageComponent_app_meth_two_step3_7_Template_app_meth_two_step3_onLast_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.lastStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _MethTwoPageComponent = /*#__PURE__*/function () {
        function _MethTwoPageComponent() {
          _classCallCheck(this, _MethTwoPageComponent);

          this.method = 'Введение штрихового кода в тоновый диапазон канала RGB';
          this.step = 1;
        }

        _createClass(_MethTwoPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.step--;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.step++;
          }
        }]);

        return _MethTwoPageComponent;
      }();

      _MethTwoPageComponent.ɵfac = function MethTwoPageComponent_Factory(t) {
        return new (t || _MethTwoPageComponent)();
      };

      _MethTwoPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethTwoPageComponent,
        selectors: [["app-meth-two-page"]],
        decls: 8,
        vars: 6,
        consts: [[1, "content", "method"], [1, "content", "step"], [3, "ngSwitch"], [3, "onNext", 4, "ngSwitchCase"], [3, "onNext", "onLast", 4, "ngSwitchCase"], [3, "onLast", 4, "ngSwitchCase"], [3, "onNext"], [3, "onNext", "onLast"], [3, "onLast"]],
        template: function MethTwoPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MethTwoPageComponent_app_meth_two_step1_5_Template, 1, 0, "app-meth-two-step1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MethTwoPageComponent_app_meth_two_step2_6_Template, 1, 0, "app-meth-two-step2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MethTwoPageComponent_app_meth_two_step3_7_Template, 1, 0, "app-meth-two-step3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.method);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("\u0428\u0430\u0433 " + ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.step);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _meth_two_step1_meth_two_step1_component__WEBPACK_IMPORTED_MODULE_0__.MethTwoStep1Component, _meth_two_step2_meth_two_step2_component__WEBPACK_IMPORTED_MODULE_1__.MethTwoStep2Component, _meth_two_step3_meth_two_step3_component__WEBPACK_IMPORTED_MODULE_2__.MethTwoStep3Component],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRoLXR3by1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    86123:
    /*!**************************************************************************!*\
      !*** ./src/app/meth-two-page/meth-two-step1/meth-two-step1.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethTwoStep1Component": function MethTwoStep1Component() {
          return (
            /* binding */
            _MethTwoStep1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_meth_two_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/meth-two-data.service */
      98872);
      /* harmony import */


      var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/charts.service */
      21198);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      86178);

      var _c0 = ["m2s1c1"];

      function MethTwoStep1Component_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
        }
      }

      function MethTwoStep1Component_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
        }
      }

      function MethTwoStep1Component_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
        }
      }

      function MethTwoStep1Component_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a1, a2) {
        return {
          btn: true,
          btn_enabled: a1,
          btn_disabled: a2
        };
      };

      function MethTwoStep1Component_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethTwoStep1Component_div_23_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0414\u0430\u043B\u0435\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx_r5.isChoosen && ctx_r5.isImageLoaded))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx_r5.isChoosen && ctx_r5.isImageLoaded, !(ctx_r5.isChoosen && ctx_r5.isImageLoaded)));
        }
      }

      var _c2 = function _c2(a0) {
        return {
          display: a0
        };
      };

      var _c3 = function _c3(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethTwoStep1Component = /*#__PURE__*/function () {
        function _MethTwoStep1Component(methTwoDataService, chartsService) {
          _classCallCheck(this, _MethTwoStep1Component);

          this.methTwoDataService = methTwoDataService;
          this.chartsService = chartsService;
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.isChoosen = false;
          this.isLoading = false;
          this.isImageLoaded = false;
          this.reader = new FileReader();
          this.pic = new Image();
          this.imgDivHeight = 300;
          this.imgDivWidth = 0;
          this.imgUrl = '';
          this.choosenChannel = '';
          this.barChartOptions = {
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [];
          this.barChartLabels1 = [];
          this.barChartColor1 = [{
            borderColor: 'black',
            backgroundColor: 'red'
          }];
          this.barChartData1 = [{
            data: [],
            label: 'R Channel'
          }];
          this.barChartLabels2 = [];
          this.barChartColor2 = [{
            borderColor: 'black',
            backgroundColor: 'green'
          }];
          this.barChartData2 = [{
            data: [],
            label: 'G Channel'
          }];
          this.barChartLabels3 = [];
          this.barChartColor3 = [{
            borderColor: 'black',
            backgroundColor: 'blue'
          }];
          this.barChartData3 = [{
            data: [],
            label: 'B Channel'
          }];
        }

        _createClass(_MethTwoStep1Component, [{
          key: "addPic",
          value: function addPic(files) {
            var _this12 = this;

            this.isImageLoaded = false;
            this.isLoading = true;
            this.isChoosen = false;

            this.reader.onload = function () {
              var ctx = _this12.canvas.nativeElement.getContext('2d');

              _this12.pic.onload = function () {
                _this12.choosenChannel = '';

                _this12.methTwoDataService.fullZeroing();

                _this12.methTwoDataService.picParams = {
                  width: _this12.pic.width,
                  height: _this12.pic.height
                };
                _this12.canvas.nativeElement.width = _this12.pic.width;
                _this12.canvas.nativeElement.height = _this12.pic.height;
                ctx.drawImage(_this12.pic, 0, 0);
                _this12.imgUrl = _this12.canvas.nativeElement.toDataURL('image/jpeg');
                _this12.imgDivWidth = _this12.pic.width * (_this12.imgDivHeight / _this12.pic.height);

                _this12.devideOnChannels(ctx);

                _this12.isImageLoaded = true;
                _this12.isLoading = false;
              };

              _this12.pic.src = _this12.reader.result;
            };

            this.reader.readAsDataURL(files[0]);
          }
        }, {
          key: "devideOnChannels",
          value: function devideOnChannels(ctx) {
            var pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            this.chartsService.renderChartsRGB(2, pixelData.data);
            this.renderCharts(this.methTwoDataService.amountChannelR, this.methTwoDataService.amountChannelG, this.methTwoDataService.amountChannelB);
          }
        }, {
          key: "renderCharts",
          value: function renderCharts(typeR, typeG, typeB) {
            var chartColumnNames = [];

            for (var i = 0; i <= 255; i++) {
              chartColumnNames[i] = i;
            }

            this.barChartLabels1 = chartColumnNames;
            this.barChartData1 = [{
              data: typeR,
              label: 'R Channel'
            }];
            this.barChartLabels2 = chartColumnNames;
            this.barChartData2 = [{
              data: typeG,
              label: 'G Channel'
            }];
            this.barChartLabels3 = chartColumnNames;
            this.barChartData3 = [{
              data: typeB,
              label: 'B Channel'
            }];
          }
        }, {
          key: "chooseChannel",
          value: function chooseChannel(channel) {
            this.isChoosen = true;
            this.choosenChannel = channel;
            this.methTwoDataService.choosenChannel = channel;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.onNext.emit(null);
          }
        }]);

        return _MethTwoStep1Component;
      }();

      _MethTwoStep1Component.ɵfac = function MethTwoStep1Component_Factory(t) {
        return new (t || _MethTwoStep1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_meth_two_data_service__WEBPACK_IMPORTED_MODULE_0__.MethTwoDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_1__.ChartsService));
      };

      _MethTwoStep1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MethTwoStep1Component,
        selectors: [["app-meth-two-step1"]],
        viewQuery: function MethTwoStep1Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onNext: "onNext"
        },
        decls: 24,
        vars: 34,
        consts: [[1, "choose_file"], ["for", "image_upload", 1, "upload_label"], ["type", "file", "id", "image_upload", 3, "change"], [3, "ngStyle"], [2, "display", "none"], ["m2s1c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "choose_channelH", "content"], [1, "channels"], [1, "channels__grid_rgb"], [1, "canvas_gholder", 3, "click"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", "colors"], ["class", "galka", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "btns", 4, "ngIf"], [1, "galka"], [1, "loading"], [1, "btns"], [3, "disabled", "ngClass", "click"]],
        template: function MethTwoStep1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 (PNG, JPG)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MethTwoStep1Component_Template_input_change_3_listener($event) {
              return ctx.addPic($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "canvas", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 RGB");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethTwoStep1Component_Template_div_click_13_listener() {
              return ctx.chooseChannel("r");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "canvas", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MethTwoStep1Component_div_15_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethTwoStep1Component_Template_div_click_16_listener() {
              return ctx.chooseChannel("g");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "canvas", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MethTwoStep1Component_div_18_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MethTwoStep1Component_Template_div_click_19_listener() {
              return ctx.chooseChannel("b");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "canvas", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MethTwoStep1Component_div_21_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MethTwoStep1Component_div_22_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MethTwoStep1Component_div_23_Template, 3, 5, "div", 15);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c2, ctx.isImageLoaded ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](30, _c3, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData1)("labels", ctx.barChartLabels1)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "r");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData2)("labels", ctx.barChartLabels2)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData3)("labels", ctx.barChartLabels3)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.choosenChannel == "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isImageLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        styles: [".choose_file[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\r\n.canvas_gholder[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.loading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtdHdvLXN0ZXAxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6Im1ldGgtdHdvLXN0ZXAxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvb3NlX2ZpbGUge1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jYW52YXNJbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhbnZhc0ltYWdlX19pbWcge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4ICMyNTI1MjU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jYW52YXNfZ2hvbGRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    13677:
    /*!**************************************************************************!*\
      !*** ./src/app/meth-two-page/meth-two-step2/meth-two-step2.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethTwoStep2Component": function MethTwoStep2Component() {
          return (
            /* binding */
            _MethTwoStep2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_meth_two_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/meth-two-data.service */
      98872);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a1, a2) {
        return {
          btn: true,
          btn_enabled: a1,
          btn_disabled: a2
        };
      };

      var _MethTwoStep2Component = /*#__PURE__*/function () {
        function _MethTwoStep2Component(methTwoDataService) {
          _classCallCheck(this, _MethTwoStep2Component);

          this.methTwoDataService = methTwoDataService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.codeNum = '';
        }

        _createClass(_MethTwoStep2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "generateNewImage",
          value: function generateNewImage(newChannel, channel) {
            var newPixel;

            for (var i = 0; i < newChannel.length; i++) {
              switch (channel) {
                case 'r':
                  newPixel = {
                    r: newChannel[i],
                    g: this.methTwoDataService.arrChannelG[i],
                    b: this.methTwoDataService.arrChannelB[i],
                    a: this.methTwoDataService.arrChannelA[i]
                  };
                  break;

                case 'g':
                  newPixel = {
                    r: this.methTwoDataService.arrChannelR[i],
                    g: newChannel[i],
                    b: this.methTwoDataService.arrChannelB[i],
                    a: this.methTwoDataService.arrChannelA[i]
                  };
                  break;

                case 'b':
                  newPixel = {
                    r: this.methTwoDataService.arrChannelR[i],
                    g: this.methTwoDataService.arrChannelG[i],
                    b: newChannel[i],
                    a: this.methTwoDataService.arrChannelA[i]
                  };
                  break;
              }

              this.methTwoDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, newPixel.a);
            }
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            var newCodeNumArr;

            switch (this.methTwoDataService.choosenChannel) {
              case 'r':
                newCodeNumArr = this.methTwoDataService.arrChannelR;
                break;

              case 'g':
                newCodeNumArr = this.methTwoDataService.arrChannelG;
                break;

              case 'b':
                newCodeNumArr = this.methTwoDataService.arrChannelB;
                break;
            }

            this.codeNum.split('').forEach(function (i, idx) {
              if (+i == 0) {
                newCodeNumArr = newCodeNumArr.map(function (n) {
                  if (n == idx) {
                    return n += 1;
                  } else {
                    return n;
                  }
                });
              }
            });
            this.generateNewImage(newCodeNumArr, this.methTwoDataService.choosenChannel);
            this.methTwoDataService.newChoosenChannel = newCodeNumArr;
            this.onNext.emit(null);
          }
        }]);

        return _MethTwoStep2Component;
      }();

      _MethTwoStep2Component.ɵfac = function MethTwoStep2Component_Factory(t) {
        return new (t || _MethTwoStep2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_meth_two_data_service__WEBPACK_IMPORTED_MODULE_0__.MethTwoDataService));
      };

      _MethTwoStep2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MethTwoStep2Component,
        selectors: [["app-meth-two-step2"]],
        outputs: {
          onLast: "onLast",
          onNext: "onNext"
        },
        decls: 9,
        vars: 6,
        consts: [[1, "choose_channelH", "content"], [1, "codeInput"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [3, "disabled", "ngClass", "click"]],
        template: function MethTwoStep2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u043D\u0443\u043B\u0435\u0439 \u0438 \u0435\u0434\u0438\u043D\u0438\u0446");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MethTwoStep2Component_Template_input_ngModelChange_3_listener($event) {
              return ctx.codeNum = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethTwoStep2Component_Template_button_click_5_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MethTwoStep2Component_Template_button_click_7_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0414\u0430\u043B\u0435\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.codeNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.codeNum.length != 128)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx.codeNum.length == 128, ctx.codeNum.length != 128));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        styles: [".codeInput[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.codeInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    height: 30px;\r\n    width: 1200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtdHdvLXN0ZXAyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoibWV0aC10d28tc3RlcDIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RlSW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb2RlSW5wdXQgaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    83000:
    /*!**************************************************************************!*\
      !*** ./src/app/meth-two-page/meth-two-step3/meth-two-step3.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethTwoStep3Component": function MethTwoStep3Component() {
          return (
            /* binding */
            _MethTwoStep3Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_meth_two_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/meth-two-data.service */
      98872);
      /* harmony import */


      var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/charts.service */
      21198);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      86178);

      var _c0 = ["m2s3c1"];

      var _c1 = function _c1(a0, a1, a2) {
        return {
          backgroundImage: a0,
          width: a1,
          height: a2
        };
      };

      var _MethTwoStep3Component = /*#__PURE__*/function () {
        function _MethTwoStep3Component(api, methTwoDataService, chartsService) {
          _classCallCheck(this, _MethTwoStep3Component);

          this.api = api;
          this.methTwoDataService = methTwoDataService;
          this.chartsService = chartsService;
          this.onLast = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.imgDivHeight = 600;
          this.imgDivWidth = 0;
          this.barChartOptions = {
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [];
          this.barChartLabels1 = [];
          this.barChartColor1 = [{
            borderColor: 'black',
            backgroundColor: 'red'
          }];
          this.barChartData1 = [{
            data: [],
            label: 'R Channel'
          }];
          this.barChartLabels2 = [];
          this.barChartColor2 = [{
            borderColor: 'black',
            backgroundColor: 'green'
          }];
          this.barChartData2 = [{
            data: [],
            label: 'G Channel'
          }];
          this.barChartLabels3 = [];
          this.barChartColor3 = [{
            borderColor: 'black',
            backgroundColor: 'blue'
          }];
          this.barChartData3 = [{
            data: [],
            label: 'B Channel'
          }];
        }

        _createClass(_MethTwoStep3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var meth = 2;
            this.canvas.nativeElement.width = this.methTwoDataService.picParams.width;
            this.canvas.nativeElement.height = this.methTwoDataService.picParams.height;
            var ctx = this.canvas.nativeElement.getContext('2d');
            var imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            for (var i = 0; i < imageData.data.length; i += 4) {
              imageData.data[i + 0] = this.methTwoDataService.newImageArray[i + 0];
              imageData.data[i + 1] = this.methTwoDataService.newImageArray[i + 1];
              imageData.data[i + 2] = this.methTwoDataService.newImageArray[i + 2];
              imageData.data[i + 3] = this.methTwoDataService.newImageArray[i + 3];
            }

            ctx.putImageData(imageData, 0, 0);
            this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg');
            this.imgDivWidth = this.canvas.nativeElement.width * (this.imgDivHeight / this.canvas.nativeElement.height);
            var size = this.canvas.nativeElement.width + 'x' + this.canvas.nativeElement.height;
            var img = new File([this.api.dataURItoBlob(this.imgUrl)], 'm2result.png');
            this.api.addToDb('2', img, size).subscribe(function (res) {
              console.log(res);
            });
            this.chartsService.renderChartsRGB(meth, imageData.data);
            this.renderCharts(this.methTwoDataService.amountChannelR, this.methTwoDataService.amountChannelG, this.methTwoDataService.amountChannelB);
          }
        }, {
          key: "renderCharts",
          value: function renderCharts(typeR, typeG, typeB) {
            var chartColumnNames = [];

            for (var i = 0; i <= 255; i++) {
              chartColumnNames[i] = i;
            }

            this.barChartLabels1 = chartColumnNames;
            this.barChartData1 = [{
              data: typeR,
              label: 'R Channel'
            }];
            this.barChartLabels2 = chartColumnNames;
            this.barChartData2 = [{
              data: typeG,
              label: 'G Channel'
            }];
            this.barChartLabels3 = chartColumnNames;
            this.barChartData3 = [{
              data: typeB,
              label: 'B Channel'
            }];
          }
        }, {
          key: "lastStep",
          value: function lastStep() {
            this.onLast.emit(null);
          }
        }, {
          key: "saveImage",
          value: function saveImage() {
            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = this.canvas.nativeElement.toDataURL();
            link.click();
          }
        }]);

        return _MethTwoStep3Component;
      }();

      _MethTwoStep3Component.ɵfac = function MethTwoStep3Component_Factory(t) {
        return new (t || _MethTwoStep3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meth_two_data_service__WEBPACK_IMPORTED_MODULE_1__.MethTwoDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_2__.ChartsService));
      };

      _MethTwoStep3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MethTwoStep3Component,
        selectors: [["app-meth-two-step3"]],
        viewQuery: function MethTwoStep3Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        outputs: {
          onLast: "onLast"
        },
        decls: 17,
        vars: 26,
        consts: [[2, "display", "none"], ["m2s3c1", ""], [1, "canvasImage"], [1, "canvasImage__img", 3, "ngStyle"], [1, "channels"], [1, "channels__grid_rgb"], [1, "canvas_gholder"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", "colors"], [1, "btns"], [1, "btn", "btn_enabled", 2, "margin-right", "2px", 3, "click"], [1, "btn", "btn_enabled", 3, "click"]],
        template: function MethTwoStep3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MethTwoStep3Component_Template_button_click_13_listener() {
              return ctx.lastStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MethTwoStep3Component_Template_button_click_15_listener() {
              return ctx.saveImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](22, _c1, "url(" + ctx.imgUrl + ")", ctx.imgDivWidth + "px", ctx.imgDivHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData1)("labels", ctx.barChartLabels1)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData2)("labels", ctx.barChartLabels2)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData3)("labels", ctx.barChartLabels3)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective],
        styles: [".canvasImage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.canvasImage__img[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    width: 1000px;\r\n    border: 6px solid white;\r\n    box-shadow: 0px 3px 5px #252525;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGgtdHdvLXN0ZXAzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6Im1ldGgtdHdvLXN0ZXAzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FudmFzSW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jYW52YXNJbWFnZV9faW1nIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAjMjUyNTI1O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    86696:
    /*!************************************************!*\
      !*** ./src/app/reg-page/reg-page.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegPageComponent": function RegPageComponent() {
          return (
            /* binding */
            _RegPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _RegPageComponent = /*#__PURE__*/function () {
        function _RegPageComponent(auth, router) {
          _classCallCheck(this, _RegPageComponent);

          this.auth = auth;
          this.router = router;
        }

        _createClass(_RegPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
              login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
            });
          }
        }, {
          key: "reg",
          value: function reg() {
            var _this13 = this;

            this.auth.reg(this.form.value).subscribe(function (n) {
              console.log(n);

              _this13.router.navigate(['login']);
            });
          }
        }]);

        return _RegPageComponent;
      }();

      _RegPageComponent.ɵfac = function RegPageComponent_Factory(t) {
        return new (t || _RegPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _RegPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _RegPageComponent,
        selectors: [["app-reg-page"]],
        decls: 14,
        vars: 3,
        consts: [[1, "content"], [1, "log-form"], [1, "log-form__form"], [3, "formGroup", "submit"], [1, "secondary-text", 3, "routerLink"], ["type", "text", "placeholder", "\u041B\u043E\u0433\u0438\u043D", "formControlName", "login"], ["type", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "formControlName", "password", "autocomplete", "off"], ["type", "submit", 1, "btn", 3, "ngClass"]],
        template: function RegPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function RegPageComponent_Template_form_submit_3_listener() {
              return ctx.reg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0412\u0445\u043E\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/login");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.form.valid ? "btn_enabled" : "btn_disabled");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
        styles: [".log-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.log-form__form[_ngcontent-%COMP%] {\r\n    margin: 50px auto;\r\n    padding: 50px 20px;\r\n    border: 1px solid grey;\r\n    border-radius: 7px;\r\n    transition: .2s;\r\n}\r\n.log-form__form[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n.log-form__form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n}\r\n.log-form__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    height: 30px;\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 2px solid grey;\r\n    outline: none;\r\n}\r\n.log-form__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicmVnLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2ctZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmxvZy1mb3JtX19mb3JtIHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxufVxyXG4ubG9nLWZvcm1fX2Zvcm06aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4ubG9nLWZvcm1fX2Zvcm0gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmxvZy1mb3JtX19mb3JtIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubG9nLWZvcm1fX2Zvcm0gYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    5830:
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _ApiService = /*#__PURE__*/function () {
        function _ApiService(http) {
          _classCallCheck(this, _ApiService);

          this.http = http;
        }

        _createClass(_ApiService, [{
          key: "checkImg",
          value: function checkImg(img, size) {
            var fd = new FormData();
            fd.append('image', img, img.name);
            fd.append('size', size);
            return this.http.post('/api/check', fd);
          }
        }, {
          key: "addToDb",
          value: function addToDb(type, img, size) {
            var fd = new FormData();
            fd.append('image', img, img.name);
            fd.append('size', size);
            fd.append('type', type);
            return this.http.post('/api/methods/' + type, fd);
          }
        }, {
          key: "getHistory",
          value: function getHistory() {
            return this.http.get('/api/history');
          }
        }, {
          key: "m5updateEdges",
          value: function m5updateEdges(blurRadius, trasholdL, trasholdU) {
            return this.http.post('/api/methods/5', {
              blurRadius: blurRadius,
              trasholdL: trasholdL,
              trasholdU: trasholdU
            });
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ia = new Uint8Array(byteString.length);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {
              type: mimeString
            });
          }
        }]);

        return _ApiService;
      }();

      _ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ApiService,
        factory: _ApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    98063:
    /*!****************************************!*\
      !*** ./src/app/services/auth.guard.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Authguard": function Authguard() {
          return (
            /* binding */
            _Authguard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Authguard = /*#__PURE__*/function () {
        function _Authguard(auth, router) {
          _classCallCheck(this, _Authguard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(_Authguard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.auth.isAuth()) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
            } else {
              this.router.navigate(['/']);
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
            }
          }
        }]);

        return _Authguard;
      }();

      _Authguard.ɵfac = function Authguard_Factory(t) {
        return new (t || _Authguard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _Authguard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _Authguard,
        factory: _Authguard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    37556:
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.token = null;
        }

        _createClass(_AuthService, [{
          key: "login",
          value: function login(user) {
            var _this14 = this;

            return this.http.post('/api/auth/login', user).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(function (_ref) {
              var token = _ref.token;
              localStorage.setItem('auth-token', token);

              _this14.setToken(token);
            }));
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            this.token = token;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.token;
          }
        }, {
          key: "isAuth",
          value: function isAuth() {
            return !!this.token;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.setToken(null);
            localStorage.clear();
          }
        }, {
          key: "reg",
          value: function reg(user) {
            return this.http.post('/api/auth/reg', user);
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    21198:
    /*!********************************************!*\
      !*** ./src/app/services/charts.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartsService": function ChartsService() {
          return (
            /* binding */
            _ChartsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rgb-smyk.service */
      4023);
      /* harmony import */


      var _meth_one_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meth-one-data.service */
      93636);
      /* harmony import */


      var _meth_two_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meth-two-data.service */
      98872);
      /* harmony import */


      var _meth_four_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./meth-four-data.service */
      64124);

      var _ChartsService = /*#__PURE__*/function () {
        function _ChartsService(rgbCmykService, oneData, twoData, fourData) {
          _classCallCheck(this, _ChartsService);

          this.rgbCmykService = rgbCmykService;
          this.oneData = oneData;
          this.twoData = twoData;
          this.fourData = fourData;
        }

        _createClass(_ChartsService, [{
          key: "renderChartsRGB",
          value: function renderChartsRGB(meth, pData) {
            var method;

            switch (meth) {
              case 1:
                method = this.oneData;
                break;

              case 2:
                method = this.twoData;
                break;
            }

            method.amountChannelR = [];
            method.amountChannelG = [];
            method.amountChannelB = [];

            for (var i = 0; i < pData.length; i += 4) {
              method.arrChannelR.push(pData[i + 0]);
              method.arrChannelG.push(pData[i + 1]);
              method.arrChannelB.push(pData[i + 2]);
              method.arrChannelA.push(pData[i + 3]);
            }

            var _loop2 = function _loop2(_i6) {
              if (method.arrChannelR.includes(_i6)) {
                method.arrChannelR.forEach(function (n) {
                  if (n == _i6) {
                    method.amountChannelR[_i6] = (method.amountChannelR[_i6] || 0) + 1;
                  }
                });
              } else {
                method.amountChannelR[_i6] = 0;
              }

              if (method.arrChannelG.includes(_i6)) {
                method.arrChannelG.forEach(function (n) {
                  if (n == _i6) {
                    method.amountChannelG[_i6] = (method.amountChannelG[_i6] || 0) + 1;
                  }
                });
              } else {
                method.amountChannelG[_i6] = 0;
              }

              if (method.arrChannelB.includes(_i6)) {
                method.arrChannelB.forEach(function (n) {
                  if (n == _i6) {
                    method.amountChannelB[_i6] = (method.amountChannelB[_i6] || 0) + 1;
                  }
                });
              } else {
                method.amountChannelB[_i6] = 0;
              }
            };

            for (var _i6 = 0; _i6 <= 255; _i6++) {
              _loop2(_i6);
            }
          }
        }, {
          key: "renderChartsCMYK",
          value: function renderChartsCMYK(meth, pData) {
            var method;

            switch (meth) {
              case 4:
                method = this.fourData;
                break;
            }

            method.amountChannelC = [];
            method.amountChannelM = [];
            method.amountChannelY = [];
            method.amountChannelK = [];

            for (var i = 0; i < pData.length; i += 4) {
              var new_cmyk = this.rgbCmykService.rgb2cmyk(pData[i], pData[i + 1], pData[i + 2]);
              method.arrChannelC.push(Math.floor(new_cmyk.c));
              method.arrChannelM.push(Math.floor(new_cmyk.m));
              method.arrChannelY.push(Math.floor(new_cmyk.y));
              method.arrChannelK.push(Math.floor(new_cmyk.k));
            }

            var _loop3 = function _loop3(_i7) {
              if (method.arrChannelC.includes(_i7)) {
                method.arrChannelC.forEach(function (n) {
                  if (n == _i7) {
                    method.amountChannelC[_i7] = (method.amountChannelC[_i7] || 0) + 1;
                  }
                });
              } else {
                method.amountChannelC[_i7] = 0;
              }

              if (method.arrChannelM.includes(_i7)) {
                method.arrChannelM.forEach(function (n) {
                  if (n == _i7) {
                    method.amountChannelM[_i7] = (method.amountChannelM[_i7] || 0) + 1;
                  }
                });
              } else {
                method.amountChannelM[_i7] = 0;
              }

              if (method.arrChannelY.includes(_i7)) {
                method.arrChannelY.forEach(function (n) {
                  if (n == _i7) {
                    method.amountChannelY[_i7] = (method.amountChannelY[_i7] || 0) + 1;
                  }
                });
              } else {
                method.amountChannelY[_i7] = 0;
              }

              if (method.arrChannelK.includes(_i7)) {
                method.arrChannelK.forEach(function (n) {
                  if (n == _i7) {
                    method.amountChannelK[_i7] = (method.amountChannelK[_i7] || 0) + 1;
                  }
                });
              } else {
                method.amountChannelK[_i7] = 0;
              }
            };

            for (var _i7 = 0; _i7 <= 100; _i7++) {
              _loop3(_i7);
            }
          }
        }]);

        return _ChartsService;
      }();

      _ChartsService.ɵfac = function ChartsService_Factory(t) {
        return new (t || _ChartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__.RgbCmykService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_meth_one_data_service__WEBPACK_IMPORTED_MODULE_1__.MethOneDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_meth_two_data_service__WEBPACK_IMPORTED_MODULE_2__.MethTwoDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_meth_four_data_service__WEBPACK_IMPORTED_MODULE_3__.MethFourDataService));
      };

      _ChartsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _ChartsService,
        factory: _ChartsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    19699:
    /*!****************************************************!*\
      !*** ./src/app/services/meth-five-data.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFiveDataService": function MethFiveDataService() {
          return (
            /* binding */
            _MethFiveDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rgb-smyk.service */
      4023);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      5830);

      var _MethFiveDataService = /*#__PURE__*/function () {
        function _MethFiveDataService(rgbCmykService, api) {
          _classCallCheck(this, _MethFiveDataService);

          this.rgbCmykService = rgbCmykService;
          this.api = api;
          this.arrChannelC = [];
          this.arrChannelM = [];
          this.arrChannelY = [];
          this.arrChannelK = [];
          this.newArrChannelY = [];
          this.grandientAngles = [];
          this.newImageArray = [];
          this.expsArr = [];
          this.blurChannelArr = [];
          this.gradientsChannelArr = [];
          this.nonmaxChannelArr = [];
          this.trasholdsChannelArr = [];
          this.newFLUchannel = [];
        }

        _createClass(_MethFiveDataService, [{
          key: "fullZeroing",
          value: function fullZeroing() {
            this.picParams;
            this.arrChannelC = [];
            this.arrChannelM = [];
            this.arrChannelY = [];
            this.arrChannelK = [];
            this.newImageArray = [];
          }
        }, {
          key: "findEdgesXX",
          value: function findEdgesXX(blurRadius, trasholdL, trasholdU) {
            this.api.m5updateEdges(blurRadius, trasholdL, trasholdU).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "findEdges",
          value: function findEdges(blurRadius, trasholdL, trasholdU) {
            this.imageBlur(blurRadius);
            this.findGradients();
            this.nonmaximumRemove();
            this.trasholds(trasholdL, trasholdU);
            this.removeExp();
          }
        }, {
          key: "findPixel",
          value: function findPixel(oY, oX) {
            var c = this.arrChannelC[this.picParams.width * oY + oX];
            var m = this.arrChannelM[this.picParams.width * oY + oX];
            var y = this.arrChannelY[this.picParams.width * oY + oX];
            var k = this.arrChannelK[this.picParams.width * oY + oX];
            return {
              c: c,
              m: m,
              y: y,
              k: k
            };
          }
        }, {
          key: "findSquare",
          value: function findSquare(pixelIndedex, radius) {
            var rawY = Math.floor(pixelIndedex / this.picParams.width);
            var rawX = pixelIndedex % this.picParams.width;
            var startX = rawX - radius;
            var endX = rawX + radius;
            var startY = rawY - radius;
            var endY = rawY + radius;

            if (startX < 0) {
              startX = 0;
            }

            if (endX >= this.picParams.width) {
              endX = this.picParams.width - 1;
            }

            if (startY < 0) {
              startY = 0;
            }

            if (endY >= this.picParams.height) {
              endY = this.picParams.height - 1;
            }

            return {
              startX: startX,
              endX: endX,
              startY: startY,
              endY: endY
            };
          }
        }, {
          key: "imageBlur",
          value: function imageBlur(blurRadius) {
            var newPixelArrY = [];
            this.newImageArray = [];
            this.blurChannelArr = [];

            for (var i = 0; i < this.arrChannelY.length; i++) {
              var square = this.findSquare(i, blurRadius);
              var pixelCount = 0;
              newPixelArrY = [];

              for (var y = square.startY; y <= square.endY; y++) {
                for (var p = this.picParams.width * y + square.startX; p <= this.picParams.width * y + square.endX; p++) {
                  newPixelArrY.push(this.arrChannelY[p]);
                  pixelCount++;
                }
              }

              this.blurChannelArr[i] = Math.floor(newPixelArrY.reduce(function (sum, element) {
                return sum + element;
              }, 0) / pixelCount);
            }

            for (var _i8 = 0; _i8 < this.arrChannelY.length; _i8++) {
              var newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.blurChannelArr[_i8]);
              this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            }
          }
        }, {
          key: "findGradients",
          value: function findGradients() {
            var newPixelArrY = [];
            var gradientArrX = [];
            var gradientArrY = [];
            var matrixX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
            var matrixY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
            this.newImageArray = [];

            for (var i = 0; i < this.arrChannelY.length; i++) {
              var square = this.findSquare(i, 1);
              var pixelCount = 0;
              newPixelArrY = [];

              for (var y = square.startY; y <= square.endY; y++) {
                for (var p = this.picParams.width * y + square.startX; p <= this.picParams.width * y + square.endX; p++) {
                  newPixelArrY.push(this.blurChannelArr[p]);
                  pixelCount++;
                }
              }

              if (newPixelArrY.length < 9) {
                this.gradientsChannelArr[i] = 1;
                this.grandientAngles[i] = 404;
              } else {
                var sumX = 0;
                var sumY = 0;
                newPixelArrY.forEach(function (pix, index) {
                  sumX += pix * matrixX[index];
                  sumY += pix * matrixY[index];
                });
                gradientArrX[i] = Math.floor(sumX);
                gradientArrY[i] = Math.floor(sumY);
                this.gradientsChannelArr[i] = Math.floor(Math.sqrt(Math.pow(gradientArrX[i], 2) + Math.pow(gradientArrY[i], 2)));
                this.grandientAngles[i] = Math.atan2(Math.floor(sumY), Math.floor(sumX)) * 180 / Math.PI;
              }

              if (this.gradientsChannelArr[i] == 0) {
                this.grandientAngles[i] = 404;
              }
            } // console.log(this.gradientsChannelArr, 'XXXX', this.grandientAngles)


            for (var _i9 = 0; _i9 < this.arrChannelY.length; _i9++) {
              var newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.gradientsChannelArr[_i9]);
              this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            }
          }
        }, {
          key: "nonmaximumRemove",
          value: function nonmaximumRemove() {
            var _this15 = this;

            // let cyanHUI = []
            // let magHUI = []
            // let yellowHUI = []
            // let bHUI = []
            var max = {
              elm: 0,
              index: 0,
              gradient: -1
            };
            var newPixelArrY = []; // let newOfAngelArr = []

            this.nonmaxChannelArr = [];
            this.newImageArray = [];
            this.arrChannelY.forEach(function (n, i) {
              return _this15.nonmaxChannelArr[i] = 0;
            }); // let forgottenArr = []
            // this.arrChannelY.forEach((n, i) => {
            //   cyanHUI[i] = 0
            //   magHUI[i] = 0
            //   yellowHUI[i] = 0
            //   bHUI[i] = 0
            // })

            this.grandientAngles = this.grandientAngles.map(function (p, s) {
              if (p > -23 && p <= 22 || p > 159 && p <= 180 || p < -159) {
                // cyanHUI[s] = 255
                return 0;
              } else if (p > 23 && p <= 69 || p <= -114 && p > -159) {
                // magHUI[s] = 255
                return 135;
              } else if (p > 69 && p <= 114 || p <= -69 && p > -114) {
                // yellowHUI[s] = 255
                return 90;
              } else if (p > 114 && p <= 159 || p <= -23 && p > -69) {
                // bHUI[s] = 255
                return 45;
              } else {
                return 404;
              }
            }); // console.log(this.grandientAngles)
            // for (let i = 0; i < this.arrChannelY.length; i++) {
            //   this.newImageArray.push(cyanHUI[i], magHUI[i], yellowHUI[i], 255)
            // }

            for (var i = 0; i < this.arrChannelY.length; i++) {
              // if (!forgottenArr.includes(i)) {
              if (this.grandientAngles[i] != 404) {
                // console.log('fhfgj')
                newPixelArrY = [];
                var lineNewPixAngleIndex = i;
                var lineNewPixAngle = this.grandientAngles[i];
                var qGrandientAngle = this.grandientAngles[i];

                while (lineNewPixAngle == qGrandientAngle) {
                  var rawY = Math.floor(lineNewPixAngleIndex / this.picParams.width);
                  var rawX = lineNewPixAngleIndex % this.picParams.width; // console.log('XYYYYYIXWAW', rawX, rawY, lineNewPixAngle)

                  newPixelArrY.push({
                    elm: this.gradientsChannelArr[lineNewPixAngleIndex],
                    index: lineNewPixAngleIndex,
                    gradient: lineNewPixAngle
                  }); // forgottenArr.push(lineNewPixAngleIndex)

                  var newY = void 0;
                  var newX = void 0;

                  switch (this.grandientAngles[lineNewPixAngleIndex]) {
                    case 0:
                      newY = rawY;
                      newX = rawX + 1;
                      break;

                    case 45:
                      newY = rawY + 1;
                      newX = rawX - 1;
                      break;

                    case 90:
                      newY = rawY + 1;
                      newX = rawX;
                      break;

                    case 135:
                      newY = rawY + 1;
                      newX = rawX + 1;
                      break;
                  }

                  this.grandientAngles[lineNewPixAngleIndex] = 404; // if ((newX <= 0) || (newX >= (this.picParams.width - 1)) || (newY <= 0) || (newY >= (this.picParams.height - 1))) {
                  //   break
                  // }

                  lineNewPixAngle = this.grandientAngles[this.picParams.width * newY + newX]; // console.log('HUI', lineNewPixAngleIndex, newX, newY)

                  lineNewPixAngleIndex = this.picParams.width * newY + newX; // console.log('XXX', qGrandientAngle, lineNewPixAngle, lineNewPixAngleIndex)
                }

                max = newPixelArrY[0];

                for (var _i10 = 0; _i10 < newPixelArrY.length; _i10++) {
                  if (newPixelArrY[_i10].elm > max.elm) {
                    max = newPixelArrY[_i10];
                  }
                } // newPixelArrY.forEach(n => {
                //   if (newPixelArrY[n.index] < max.elm) {
                //     this.nonmaxChannelArr[n.index] = 0
                //   }
                // })


                this.nonmaxChannelArr[max.index] = max.elm;
              }
            } // console.log(this.nonmaxChannelArr)


            for (var _i11 = 0; _i11 < this.arrChannelY.length; _i11++) {
              var newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.nonmaxChannelArr[_i11]);
              this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            } //     // console.log(newPixelArrY)
            //     max = newPixelArrY[0];
            //     for (let i = 0; i < newPixelArrY.length; i++) {
            //       if (newPixelArrY[i].elm > max.elm) {
            //         max = newPixelArrY[i]
            //       }
            //     }
            //     newPixelArrY.forEach(n => {
            //       if (newPixelArrY[n.index] <= max.elm) {
            //         this.nonmaxChannelArr[n.index] = 0
            //       }
            //     })
            //     this.nonmaxChannelArr[max.index] = max.elm
            //   }
            // }
            // for (let i = 0; i < this.arrChannelY.length; i++) {
            //   let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.nonmaxChannelArr[i])
            //   this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
            // }
            // this.nonmaxChannelArr = this.gradientsChannelArr
            // let square = this.findSquare(i, 1)
            // newPixelArrY = []
            // for (let y = square.startY; y <= square.endY; y++) {
            //   for (let p = (this.picParams.width * y + square.startX); p <= (this.picParams.width * y + square.endX); p++) {
            //     newPixelArrY.push({elm: this.gradientsChannelArr[p], index: p, gradient: this.grandientAngles[p]})
            //   }
            // }
            // if (newPixelArrY.length < 9) {
            //   newPixelArrY = []
            //   for (let i = 0; i < 9; i++) {
            //     newPixelArrY.push({elm: 1, index: i, gradient: -1})
            //   }
            // }
            // switch(this.grandientAngles[i]) {
            //   case 0: 
            //     newOfAngelArr = [newPixelArrY[3], newPixelArrY[4], newPixelArrY[5]]
            //     newOfAngelArr = newOfAngelArr.filter(n => n.gradient == 0)
            //     if (newOfAngelArr.length == 0) {
            //       newOfAngelArr = [{elm: 0, index: i, gradient: -1}]
            //     }
            //     break
            //   case 45: 
            //     newOfAngelArr = [newPixelArrY[2], newPixelArrY[4], newPixelArrY[6]]
            //     newOfAngelArr = newOfAngelArr.filter(n => n.gradient == 45)
            //     break
            //   case 90: 
            //     newOfAngelArr = [newPixelArrY[1], newPixelArrY[4], newPixelArrY[7]]
            //     newOfAngelArr = newOfAngelArr.filter(n => n.gradient == 90)
            //     break
            //   case 135: 
            //     newOfAngelArr = [newPixelArrY[0], newPixelArrY[4], newPixelArrY[8]]
            //     newOfAngelArr = newOfAngelArr.filter(n => n.gradient == 135)
            //     break
            //   default: 
            //     newOfAngelArr = [{elm: 0, index: i, gradient: -1}]
            // }
            // max = newOfAngelArr[0];

          }
        }, {
          key: "trasholds",
          value: function trasholds(lowLimit, upLimit) {
            var _this16 = this;

            this.trasholdsChannelArr = [];
            this.newImageArray = [];
            this.expsArr = [];
            this.nonmaxChannelArr.forEach(function (v, i) {
              if (v > upLimit) {
                _this16.trasholdsChannelArr[i] = 100;
              }

              if (v < lowLimit) {
                _this16.trasholdsChannelArr[i] = 0;
              }

              if (v > lowLimit && v < upLimit) {
                _this16.trasholdsChannelArr[i] = 50;

                _this16.expsArr.push(i);
              }
            });

            for (var i = 0; i < this.arrChannelY.length; i++) {
              var newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.trasholdsChannelArr[i]);
              this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            }
          }
        }, {
          key: "removeExp",
          value: function removeExp() {
            var _this17 = this;

            var newPixelYSum;
            this.expsArr.forEach(function (i) {
              var square = _this17.findSquare(i, 1);

              newPixelYSum = 0;

              for (var y = square.startY; y <= square.endY; y++) {
                for (var p = _this17.picParams.width * y + square.startX; p <= _this17.picParams.width * y + square.endX; p++) {
                  newPixelYSum += _this17.trasholdsChannelArr[p];
                }
              }

              if (_this17.trasholdsChannelArr[i] == newPixelYSum) {
                _this17.trasholdsChannelArr[i] = 0;
              } else {
                _this17.trasholdsChannelArr[i] = 100;
              }
            });
            this.newFLUchannel = this.trasholdsChannelArr;

            for (var i = 0; i < this.arrChannelY.length; i++) {
              var newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.trasholdsChannelArr[i]);
              this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            }
          }
        }, {
          key: "generateFLUImage",
          value: function generateFLUImage() {
            var currentPixC;
            this.newImageArray = [];

            for (var i = 0; i < this.arrChannelY.length; i++) {
              if (this.newFLUchannel[i] == 0) {
                currentPixC = this.arrChannelY[i];
              } else {
                currentPixC = this.newFLUchannel[i];
              }

              var newPixel = this.rgbCmykService.cmyk2rgb(this.arrChannelC[i], this.arrChannelM[i], currentPixC, this.arrChannelK[i]);
              this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255);
            }
          }
        }]);

        return _MethFiveDataService;
      }();

      _MethFiveDataService.ɵfac = function MethFiveDataService_Factory(t) {
        return new (t || _MethFiveDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_rgb_smyk_service__WEBPACK_IMPORTED_MODULE_0__.RgbCmykService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
      };

      _MethFiveDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _MethFiveDataService,
        factory: _MethFiveDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    64124:
    /*!****************************************************!*\
      !*** ./src/app/services/meth-four-data.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethFourDataService": function MethFourDataService() {
          return (
            /* binding */
            _MethFourDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MethFourDataService = /*#__PURE__*/function () {
        function _MethFourDataService() {
          _classCallCheck(this, _MethFourDataService);

          this.arrChannelC = [];
          this.arrChannelM = [];
          this.arrChannelY = [];
          this.arrChannelK = [];
          this.amountChannelC = [];
          this.amountChannelM = [];
          this.amountChannelY = [];
          this.amountChannelK = [];
          this.newChoosenChannel = [];
          this.newImageArray = [];
        }

        _createClass(_MethFourDataService, [{
          key: "fullZeroing",
          value: function fullZeroing() {
            this.picParams;
            this.choosenChannel;
            this.arrChannelC = [];
            this.arrChannelM = [];
            this.arrChannelY = [];
            this.arrChannelK = [];
            this.amountChannelC = [];
            this.amountChannelM = [];
            this.amountChannelY = [];
            this.amountChannelK = [];
            this.newChoosenChannel = [];
            this.newImageArray = [];
          }
        }]);

        return _MethFourDataService;
      }();

      _MethFourDataService.ɵfac = function MethFourDataService_Factory(t) {
        return new (t || _MethFourDataService)();
      };

      _MethFourDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MethFourDataService,
        factory: _MethFourDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    93636:
    /*!***************************************************!*\
      !*** ./src/app/services/meth-one-data.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethOneDataService": function MethOneDataService() {
          return (
            /* binding */
            _MethOneDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MethOneDataService = /*#__PURE__*/function () {
        function _MethOneDataService() {
          _classCallCheck(this, _MethOneDataService);

          this.arrChannelR = [];
          this.arrChannelG = [];
          this.arrChannelB = [];
          this.arrChannelA = [];
          this.amountChannelR = [];
          this.amountChannelG = [];
          this.amountChannelB = [];
          this.amountChannelA = [];
          this.newChoosenChannel = [];
          this.newImageArray = [];
        }

        _createClass(_MethOneDataService, [{
          key: "fullZeroing",
          value: function fullZeroing() {
            this.picParams;
            this.choosenChannel;
            this.arrChannelR = [];
            this.arrChannelG = [];
            this.arrChannelB = [];
            this.arrChannelA = [];
            this.amountChannelR = [];
            this.amountChannelG = [];
            this.amountChannelB = [];
            this.amountChannelA = [];
            this.newChoosenChannel = [];
            this.newImageArray = [];
          }
        }]);

        return _MethOneDataService;
      }();

      _MethOneDataService.ɵfac = function MethOneDataService_Factory(t) {
        return new (t || _MethOneDataService)();
      };

      _MethOneDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MethOneDataService,
        factory: _MethOneDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    25391:
    /*!*****************************************************!*\
      !*** ./src/app/services/meth-three-data.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethThreeDataService": function MethThreeDataService() {
          return (
            /* binding */
            _MethThreeDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MethThreeDataService = /*#__PURE__*/function () {
        function _MethThreeDataService() {
          _classCallCheck(this, _MethThreeDataService);

          this.arrChannelR = [];
          this.arrChannelG = [];
          this.arrChannelB = [];
          this.arrChannelA = [];
          this.channelPixArrR = [];
          this.channelPixArrG = [];
          this.channelPixArrB = [];
          this.channelPixArrA = [];
          this.channelDataR = [];
          this.channelDataG = [];
          this.channelDataB = [];
          this.channelDataA = [];
          this.newChoosenChannel = [];
          this.newImageArray = [];
        }

        _createClass(_MethThreeDataService, [{
          key: "fullZeroing",
          value: function fullZeroing() {
            this.picParams;
            this.choosenChannel;
            this.arrChannelR = [];
            this.arrChannelG = [];
            this.arrChannelB = [];
            this.arrChannelA = [];
            this.channelPixArrR = [];
            this.channelPixArrG = [];
            this.channelPixArrB = [];
            this.channelPixArrA = [];
            this.channelDataR = [];
            this.channelDataG = [];
            this.channelDataB = [];
            this.channelDataA = [];
            this.newChoosenChannel = [];
            this.newImageArray = [];
          }
        }, {
          key: "codeZeroing",
          value: function codeZeroing() {
            this.codeParams;
            this.codeData = '';
          }
        }]);

        return _MethThreeDataService;
      }();

      _MethThreeDataService.ɵfac = function MethThreeDataService_Factory(t) {
        return new (t || _MethThreeDataService)();
      };

      _MethThreeDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MethThreeDataService,
        factory: _MethThreeDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    98872:
    /*!***************************************************!*\
      !*** ./src/app/services/meth-two-data.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethTwoDataService": function MethTwoDataService() {
          return (
            /* binding */
            _MethTwoDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MethTwoDataService = /*#__PURE__*/function () {
        function _MethTwoDataService() {
          _classCallCheck(this, _MethTwoDataService);

          this.arrChannelR = [];
          this.arrChannelG = [];
          this.arrChannelB = [];
          this.arrChannelA = [];
          this.amountChannelR = [];
          this.amountChannelG = [];
          this.amountChannelB = [];
          this.newChoosenChannel = [];
          this.newImageArray = [];
        }

        _createClass(_MethTwoDataService, [{
          key: "fullZeroing",
          value: function fullZeroing() {
            this.picParams;
            this.choosenChannel;
            this.arrChannelR = [];
            this.arrChannelG = [];
            this.arrChannelB = [];
            this.arrChannelA = [];
            this.amountChannelR = [];
            this.amountChannelG = [];
            this.amountChannelB = [];
            this.newChoosenChannel = [];
            this.newImageArray = [];
          }
        }]);

        return _MethTwoDataService;
      }();

      _MethTwoDataService.ɵfac = function MethTwoDataService_Factory(t) {
        return new (t || _MethTwoDataService)();
      };

      _MethTwoDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MethTwoDataService,
        factory: _MethTwoDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4023:
    /*!**********************************************!*\
      !*** ./src/app/services/rgb-smyk.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RgbCmykService": function RgbCmykService() {
          return (
            /* binding */
            _RgbCmykService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RgbCmykService = /*#__PURE__*/function () {
        function _RgbCmykService() {
          _classCallCheck(this, _RgbCmykService);
        }

        _createClass(_RgbCmykService, [{
          key: "rgb2cmyk",
          value: function rgb2cmyk(r, g, b, normalized) {
            var c = 1 - r / 255;
            var m = 1 - g / 255;
            var y = 1 - b / 255;
            var k = Math.min(c, Math.min(m, y));
            c = (c - k) / (1 - k);
            m = (m - k) / (1 - k);
            y = (y - k) / (1 - k);

            if (!normalized) {
              c = Math.round(c * 10000) / 100;
              m = Math.round(m * 10000) / 100;
              y = Math.round(y * 10000) / 100;
              k = Math.round(k * 10000) / 100;
            }

            c = isNaN(c) ? 0 : c;
            m = isNaN(m) ? 0 : m;
            y = isNaN(y) ? 0 : y;
            k = isNaN(k) ? 0 : k;
            return {
              c: c,
              m: m,
              y: y,
              k: k
            };
          }
        }, {
          key: "cmyk2rgb",
          value: function cmyk2rgb(c, m, y, k, normalized) {
            c = c / 100;
            m = m / 100;
            y = y / 100;
            k = k / 100;
            c = c * (1 - k) + k;
            m = m * (1 - k) + k;
            y = y * (1 - k) + k;
            var r = 1 - c;
            var g = 1 - m;
            var b = 1 - y;

            if (!normalized) {
              r = Math.round(255 * r);
              g = Math.round(255 * g);
              b = Math.round(255 * b);
            }

            return {
              r: r,
              g: g,
              b: b
            };
          }
        }]);

        return _RgbCmykService;
      }();

      _RgbCmykService.ɵfac = function RgbCmykService_Factory(t) {
        return new (t || _RgbCmykService)();
      };

      _RgbCmykService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _RgbCmykService,
        factory: _RgbCmykService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9489:
    /*!*****************************************************!*\
      !*** ./src/app/shared/classes/token.interceptor.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenInterceptor": function TokenInterceptor() {
          return (
            /* binding */
            _TokenInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);

      var _TokenInterceptor = /*#__PURE__*/function () {
        function _TokenInterceptor(auth) {
          _classCallCheck(this, _TokenInterceptor);

          this.auth = auth;
        }

        _createClass(_TokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            if (this.auth.isAuth()) {
              req = req.clone({
                setHeaders: {
                  Authorization: this.auth.getToken()
                }
              });
            }

            return next.handle(req);
          }
        }]);

        return _TokenInterceptor;
      }();

      _TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || _TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _TokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _TokenInterceptor,
        factory: _TokenInterceptor.ɵfac
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
          return console.error(err);
        });
      });
      /***/
    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 26431,
        "./af.js": 26431,
        "./ar": 81286,
        "./ar-dz": 1616,
        "./ar-dz.js": 1616,
        "./ar-kw": 9759,
        "./ar-kw.js": 9759,
        "./ar-ly": 43160,
        "./ar-ly.js": 43160,
        "./ar-ma": 62551,
        "./ar-ma.js": 62551,
        "./ar-sa": 79989,
        "./ar-sa.js": 79989,
        "./ar-tn": 6962,
        "./ar-tn.js": 6962,
        "./ar.js": 81286,
        "./az": 15887,
        "./az.js": 15887,
        "./be": 14572,
        "./be.js": 14572,
        "./bg": 3276,
        "./bg.js": 3276,
        "./bm": 93344,
        "./bm.js": 93344,
        "./bn": 58985,
        "./bn-bd": 83990,
        "./bn-bd.js": 83990,
        "./bn.js": 58985,
        "./bo": 94391,
        "./bo.js": 94391,
        "./br": 46728,
        "./br.js": 46728,
        "./bs": 5536,
        "./bs.js": 5536,
        "./ca": 41043,
        "./ca.js": 41043,
        "./cs": 70420,
        "./cs.js": 70420,
        "./cv": 33513,
        "./cv.js": 33513,
        "./cy": 6771,
        "./cy.js": 6771,
        "./da": 47978,
        "./da.js": 47978,
        "./de": 46061,
        "./de-at": 25204,
        "./de-at.js": 25204,
        "./de-ch": 2653,
        "./de-ch.js": 2653,
        "./de.js": 46061,
        "./dv": 85,
        "./dv.js": 85,
        "./el": 8579,
        "./el.js": 8579,
        "./en-au": 25724,
        "./en-au.js": 25724,
        "./en-ca": 10525,
        "./en-ca.js": 10525,
        "./en-gb": 52847,
        "./en-gb.js": 52847,
        "./en-ie": 67216,
        "./en-ie.js": 67216,
        "./en-il": 39305,
        "./en-il.js": 39305,
        "./en-in": 73364,
        "./en-in.js": 73364,
        "./en-nz": 79130,
        "./en-nz.js": 79130,
        "./en-sg": 11161,
        "./en-sg.js": 11161,
        "./eo": 50802,
        "./eo.js": 50802,
        "./es": 40328,
        "./es-do": 45551,
        "./es-do.js": 45551,
        "./es-mx": 75615,
        "./es-mx.js": 75615,
        "./es-us": 64790,
        "./es-us.js": 64790,
        "./es.js": 40328,
        "./et": 96389,
        "./et.js": 96389,
        "./eu": 52961,
        "./eu.js": 52961,
        "./fa": 26151,
        "./fa.js": 26151,
        "./fi": 7997,
        "./fi.js": 7997,
        "./fil": 58898,
        "./fil.js": 58898,
        "./fo": 37779,
        "./fo.js": 37779,
        "./fr": 28174,
        "./fr-ca": 3287,
        "./fr-ca.js": 3287,
        "./fr-ch": 38867,
        "./fr-ch.js": 38867,
        "./fr.js": 28174,
        "./fy": 50452,
        "./fy.js": 50452,
        "./ga": 45014,
        "./ga.js": 45014,
        "./gd": 74127,
        "./gd.js": 74127,
        "./gl": 72124,
        "./gl.js": 72124,
        "./gom-deva": 6444,
        "./gom-deva.js": 6444,
        "./gom-latn": 37953,
        "./gom-latn.js": 37953,
        "./gu": 76604,
        "./gu.js": 76604,
        "./he": 1222,
        "./he.js": 1222,
        "./hi": 74235,
        "./hi.js": 74235,
        "./hr": 622,
        "./hr.js": 622,
        "./hu": 37735,
        "./hu.js": 37735,
        "./hy-am": 90402,
        "./hy-am.js": 90402,
        "./id": 59187,
        "./id.js": 59187,
        "./is": 30536,
        "./is.js": 30536,
        "./it": 35007,
        "./it-ch": 94667,
        "./it-ch.js": 94667,
        "./it.js": 35007,
        "./ja": 62093,
        "./ja.js": 62093,
        "./jv": 80059,
        "./jv.js": 80059,
        "./ka": 66870,
        "./ka.js": 66870,
        "./kk": 80880,
        "./kk.js": 80880,
        "./km": 1083,
        "./km.js": 1083,
        "./kn": 68785,
        "./kn.js": 68785,
        "./ko": 21721,
        "./ko.js": 21721,
        "./ku": 37851,
        "./ku.js": 37851,
        "./ky": 1727,
        "./ky.js": 1727,
        "./lb": 40346,
        "./lb.js": 40346,
        "./lo": 93002,
        "./lo.js": 93002,
        "./lt": 64035,
        "./lt.js": 64035,
        "./lv": 56927,
        "./lv.js": 56927,
        "./me": 5634,
        "./me.js": 5634,
        "./mi": 94173,
        "./mi.js": 94173,
        "./mk": 86320,
        "./mk.js": 86320,
        "./ml": 11705,
        "./ml.js": 11705,
        "./mn": 31062,
        "./mn.js": 31062,
        "./mr": 92805,
        "./mr.js": 92805,
        "./ms": 11341,
        "./ms-my": 59900,
        "./ms-my.js": 59900,
        "./ms.js": 11341,
        "./mt": 37734,
        "./mt.js": 37734,
        "./my": 19034,
        "./my.js": 19034,
        "./nb": 9324,
        "./nb.js": 9324,
        "./ne": 46495,
        "./ne.js": 46495,
        "./nl": 70673,
        "./nl-be": 76272,
        "./nl-be.js": 76272,
        "./nl.js": 70673,
        "./nn": 72486,
        "./nn.js": 72486,
        "./oc-lnc": 46219,
        "./oc-lnc.js": 46219,
        "./pa-in": 2829,
        "./pa-in.js": 2829,
        "./pl": 78444,
        "./pl.js": 78444,
        "./pt": 53170,
        "./pt-br": 66117,
        "./pt-br.js": 66117,
        "./pt.js": 53170,
        "./ro": 96587,
        "./ro.js": 96587,
        "./ru": 39264,
        "./ru.js": 39264,
        "./sd": 42135,
        "./sd.js": 42135,
        "./se": 95366,
        "./se.js": 95366,
        "./si": 93379,
        "./si.js": 93379,
        "./sk": 46143,
        "./sk.js": 46143,
        "./sl": 196,
        "./sl.js": 196,
        "./sq": 21082,
        "./sq.js": 21082,
        "./sr": 91621,
        "./sr-cyrl": 98963,
        "./sr-cyrl.js": 98963,
        "./sr.js": 91621,
        "./ss": 41404,
        "./ss.js": 41404,
        "./sv": 55685,
        "./sv.js": 55685,
        "./sw": 3872,
        "./sw.js": 3872,
        "./ta": 54106,
        "./ta.js": 54106,
        "./te": 39204,
        "./te.js": 39204,
        "./tet": 83692,
        "./tet.js": 83692,
        "./tg": 86361,
        "./tg.js": 86361,
        "./th": 31735,
        "./th.js": 31735,
        "./tk": 1568,
        "./tk.js": 1568,
        "./tl-ph": 96129,
        "./tl-ph.js": 96129,
        "./tlh": 13759,
        "./tlh.js": 13759,
        "./tr": 81644,
        "./tr.js": 81644,
        "./tzl": 90875,
        "./tzl.js": 90875,
        "./tzm": 16878,
        "./tzm-latn": 11041,
        "./tzm-latn.js": 11041,
        "./tzm.js": 16878,
        "./ug-cn": 74357,
        "./ug-cn.js": 74357,
        "./uk": 74810,
        "./uk.js": 74810,
        "./ur": 86794,
        "./ur.js": 86794,
        "./uz": 28966,
        "./uz-latn": 77959,
        "./uz-latn.js": 77959,
        "./uz.js": 28966,
        "./vi": 35386,
        "./vi.js": 35386,
        "./x-pseudo": 23156,
        "./x-pseudo.js": 23156,
        "./yo": 68028,
        "./yo.js": 68028,
        "./zh-cn": 9330,
        "./zh-cn.js": 9330,
        "./zh-hk": 89380,
        "./zh-hk.js": 89380,
        "./zh-mo": 60874,
        "./zh-mo.js": 60874,
        "./zh-tw": 96508,
        "./zh-tw.js": 96508
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map