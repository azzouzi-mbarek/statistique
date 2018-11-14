(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _level_add_level_by_file_add_level_by_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level/add-level-by-file/add-level-by-file.component */ "./src/app/admin/level/add-level-by-file/add-level-by-file.component.ts");
/* harmony import */ var _country_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country/country-details/country-details.component */ "./src/app/admin/country/country-details/country-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./region/region.component */ "./src/app/admin/region/region.component.ts");
/* harmony import */ var _region_details_region_details_region_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./region/details-region/details-region.component */ "./src/app/admin/region/details-region/details-region.component.ts");
/* harmony import */ var _country_add_country_add_country_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country/add-country/add-country.component */ "./src/app/admin/country/add-country/add-country.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/admin/tabs/tabs.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./country/country.component */ "./src/app/admin/country/country.component.ts");
/* harmony import */ var _maps_upload_shape_upload_shape_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../maps/upload-shape/upload-shape.component */ "./src/app/maps/upload-shape/upload-shape.component.ts");
/* harmony import */ var _country_form_country_form_country_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./country/form-country/form-country.component */ "./src/app/admin/country/form-country/form-country.component.ts");
/* harmony import */ var _level_level_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./level/level.component */ "./src/app/admin/level/level.component.ts");
/* harmony import */ var _level_leveldetails_leveldetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./level/leveldetails/leveldetails.component */ "./src/app/admin/level/leveldetails/leveldetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'administrateur',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_5__["AfterLoginService"]],
        children: [
            { path: 'shape', component: _maps_upload_shape_upload_shape_component__WEBPACK_IMPORTED_MODULE_11__["UploadShapeComponent"] },
            { path: 'regions', component: _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"] },
            { path: 'tabs', component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"] },
            { path: 'regions/:id', component: _region_details_region_details_region_component__WEBPACK_IMPORTED_MODULE_7__["DetailsRegionComponent"] },
            { path: 'countries', component: _country_country_component__WEBPACK_IMPORTED_MODULE_10__["CountryComponent"] },
            { path: 'addCountries', component: _country_add_country_add_country_component__WEBPACK_IMPORTED_MODULE_8__["AddCountryComponent"] },
            { path: 'countries/:id', component: _country_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_1__["CountryDetailsComponent"] },
            { path: 'formCountry/:id', component: _country_form_country_form_country_component__WEBPACK_IMPORTED_MODULE_12__["FormCountryComponent"] },
            { path: 'addLevelByFile/:id/:level', component: _level_add_level_by_file_add_level_by_file_component__WEBPACK_IMPORTED_MODULE_0__["AddLevelByFileComponent"] },
            { path: 'levels/:id/:level', component: _level_level_component__WEBPACK_IMPORTED_MODULE_13__["LevelComponent"] },
            { path: 'levels/:id/:level/:id_level', component: _level_leveldetails_leveldetails_component__WEBPACK_IMPORTED_MODULE_14__["LeveldetailsComponent"] }
        ]
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <app-nav-left></app-nav-left>\n    <div id=\"page-wrapper\" class=\"gray-bg dashbard-1\">\n        <app-nav-bar-top></app-nav-bar-top>\n\n        <!--body-->\n        <router-outlet></router-outlet>\n\n        <!--body-->\n        <app-footer></app-footer>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(auth) {
        this.auth = auth;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.body.className = ' md-skin';
        this.auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _nav_bar_top_nav_bar_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar-top/nav-bar-top.component */ "./src/app/admin/nav-bar-top/nav-bar-top.component.ts");
/* harmony import */ var _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-left/nav-left.component */ "./src/app/admin/nav-left/nav-left.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/admin/footer/footer.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./region/region.component */ "./src/app/admin/region/region.component.ts");
/* harmony import */ var _region_display_region_display_region_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./region/display-region/display-region.component */ "./src/app/admin/region/display-region/display-region.component.ts");
/* harmony import */ var _region_details_region_details_region_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./region/details-region/details-region.component */ "./src/app/admin/region/details-region/details-region.component.ts");
/* harmony import */ var _admin_region_form_region_form_region_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../admin/region/form-region/form-region.component */ "./src/app/admin/region/form-region/form-region.component.ts");
/* harmony import */ var _country_add_country_add_country_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./country/add-country/add-country.component */ "./src/app/admin/country/add-country/add-country.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _maps_maps_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../maps/maps.module */ "./src/app/maps/maps.module.ts");
/* harmony import */ var _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-heading/page-heading.component */ "./src/app/admin/page-heading/page-heading.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_upload_file_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/upload-file.service */ "./src/app/services/upload-file.service.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/admin/tabs/tabs.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./country/country.component */ "./src/app/admin/country/country.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _country_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./country/country-details/country-details.component */ "./src/app/admin/country/country-details/country-details.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var ngx_easypiechart__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-easypiechart */ "./node_modules/ngx-easypiechart/fesm5/ngx-easypiechart.js");
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2modules-easypiechart */ "./node_modules/ng2modules-easypiechart/index.js");
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _derectives_easy_pie_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../derectives/easy-pie.directive */ "./src/app/derectives/easy-pie.directive.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_morris_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-morris-js */ "./node_modules/angular-morris-js/esm5/angular-morris-js.js");
/* harmony import */ var _country_form_country_form_country_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./country/form-country/form-country.component */ "./src/app/admin/country/form-country/form-country.component.ts");
/* harmony import */ var _level_add_level_by_file_add_level_by_file_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./level/add-level-by-file/add-level-by-file.component */ "./src/app/admin/level/add-level-by-file/add-level-by-file.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _level_level_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./level/level.component */ "./src/app/admin/level/level.component.ts");
/* harmony import */ var _level_leveldetails_leveldetails_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./level/leveldetails/leveldetails.component */ "./src/app/admin/level/leveldetails/leveldetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["CollapseModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_22__["PaginationModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                _maps_maps_module__WEBPACK_IMPORTED_MODULE_16__["MapsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_25__["NgxChartsModule"],
                ngx_easypiechart__WEBPACK_IMPORTED_MODULE_26__["NgxEasypiechartModule"],
                ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_27__["EasyPieChartModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"],
                angular_morris_js__WEBPACK_IMPORTED_MODULE_30__["MorrisJsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_33__["DataTablesModule"]
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _nav_bar_top_nav_bar_top_component__WEBPACK_IMPORTED_MODULE_6__["NavBarTopComponent"],
                _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_7__["NavLeftComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _derectives_easy_pie_directive__WEBPACK_IMPORTED_MODULE_28__["EasyPieDirective"],
                _region_region_component__WEBPACK_IMPORTED_MODULE_9__["RegionComponent"],
                _region_display_region_display_region_component__WEBPACK_IMPORTED_MODULE_10__["DisplayRegionComponent"],
                _region_details_region_details_region_component__WEBPACK_IMPORTED_MODULE_11__["DetailsRegionComponent"],
                _admin_region_form_region_form_region_component__WEBPACK_IMPORTED_MODULE_12__["FormRegionComponent"],
                _country_form_country_form_country_component__WEBPACK_IMPORTED_MODULE_31__["FormCountryComponent"],
                _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_17__["PageHeadingComponent"],
                _country_add_country_add_country_component__WEBPACK_IMPORTED_MODULE_13__["AddCountryComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_20__["TabsComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_21__["CountryComponent"],
                _country_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_24__["CountryDetailsComponent"],
                _level_add_level_by_file_add_level_by_file_component__WEBPACK_IMPORTED_MODULE_32__["AddLevelByFileComponent"],
                _level_level_component__WEBPACK_IMPORTED_MODULE_34__["LevelComponent"],
                _level_leveldetails_leveldetails_component__WEBPACK_IMPORTED_MODULE_35__["LeveldetailsComponent"]
            ],
            exports: [_derectives_easy_pie_directive__WEBPACK_IMPORTED_MODULE_28__["EasyPieDirective"]],
            entryComponents: [
                _country_form_country_form_country_component__WEBPACK_IMPORTED_MODULE_31__["FormCountryComponent"],
                _admin_region_form_region_form_region_component__WEBPACK_IMPORTED_MODULE_12__["FormRegionComponent"]
            ],
            providers: [_services_upload_file_service__WEBPACK_IMPORTED_MODULE_19__["UploadFileService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/country/add-country/add-country.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/country/add-country/add-country.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvdW50cnkvYWRkLWNvdW50cnkvYWRkLWNvdW50cnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/country/add-country/add-country.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/country/add-country/add-country.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>Regions</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a #h1Variable></a>\n      </li>\n    </ol>\n  </div>\n</div> -->\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <div class=\"ibox \">\n        <div class=\"ibox-content\">\n          <form #geojsonFrom=\"ngForm\" (ngSubmit)=\"OnSubmit()\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"btn-group col-12  \">\n                  <label title=\"Upload json file\" for=\"inputFile\" class=\"btn btn-default btn-block\">\n                    <input type=\"file\" id=\"inputFile\" class=\"hide pull-left\" (change)=\"handleFileInput($event.target.files ) \">\n                    Upload new Json/Geojson file\n                  </label>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div *ngIf=\"errorFile != null\" class=\"alert alert-danger \">\n                  {{ errorFile}}\n                </div>\n              </div>\n              <div class=\"col-6 offset-3\">\n                <button [disabled]=\"!enableSubmitForm\" type=\"submit\" title=\"Download image\" id=\"download\" class=\"btn btn-block btn-primary\">Download</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <app-upload-map [geoJsonInput]=\"geoJsonFile\"></app-upload-map>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/country/add-country/add-country.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/country/add-country/add-country.component.ts ***!
  \********************************************************************/
/*! exports provided: AddCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCountryComponent", function() { return AddCountryComponent; });
/* harmony import */ var _models_country_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/country.model */ "./src/app/models/country.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/country.service */ "./src/app/services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCountryComponent = /** @class */ (function () {
    function AddCountryComponent(_countryService, _modalService, _router, _route) {
        this._countryService = _countryService;
        this._modalService = _modalService;
        this._router = _router;
        this._route = _route;
        this.mapHeight = 900;
        this.fileToUpload = null;
        this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"]();
        this.countries = [];
        this.errors = [];
        this.filteredCountries = [];
        this.showFormAddJson = true;
        this.changeFileFlag = '';
        this.math = Math;
        this.errorFile = null;
        this.enableSubmitForm = false;
    }
    Object.defineProperty(AddCountryComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredCountries = this.filtreCountries(value);
        },
        enumerable: true,
        configurable: true
    });
    AddCountryComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    AddCountryComponent.prototype.creatCountry = function () {
        this.openModalFormCountry(false);
    };
    AddCountryComponent.prototype.onEditCountry = function (id) {
        var _this = this;
        this._countryService.getCountry(id).subscribe(function (countryData) {
            // @ts-ignore
            _this.country = countryData.data;
            _this.openModalFormCountry(true);
        }, function (error) {
            _this.errors = error;
        });
    };
    AddCountryComponent.prototype.onDeleteCountry = function (id) {
        var _this = this;
        this._countryService.deleteCountry(id).subscribe(function (data) {
            _this.getCountries();
            var i = _this.filteredCountries.findIndex(function (e) { return e.id === id; });
            if (i !== -1) {
                _this.filteredCountries.splice(i, 1);
            }
        }, function (error) { return console.log(error); });
    };
    AddCountryComponent.prototype.openModalFormCountry = function (edit) {
        var _this = this;
        var initialState = {
            title: edit ? 'Edit Country' : 'New Country',
            country: edit ? this.country : new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"](),
            edit: edit,
            errors: this.errors
        };
        // this.bsModalRef = this._modalService.show(FormCountryComponent, {
        //   initialState
        // });
        if (edit === false) {
            this.bsModalRef.content.onClose.subscribe(function (data) {
                _this._countryService.save(data).subscribe(function (countryApi) {
                    _this.getCountries();
                    _this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"]();
                    _this.errors = [];
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.bsModalRef.content.country = _this.country;
                    _this.bsModalRef.hide();
                }, function (error) {
                    _this.errors = error.error.errors;
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.errors = [];
                });
            });
        }
        else {
            this.bsModalRef.content.onClose.subscribe(function (data) {
                return _this._countryService.update(data).subscribe(function (countryData) {
                    _this.getCountries();
                    _this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"]();
                    _this.errors = [];
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.bsModalRef.content.country = _this.country;
                    _this.bsModalRef.hide();
                }, function (error) {
                    _this.errors = error.error.errors;
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.errors = [];
                });
            });
        }
    };
    AddCountryComponent.prototype.getCountries = function () {
        var _this = this;
        return this._countryService.getCountries().subscribe(function (countryApi) {
            // @ts-ignore
            _this.countrys = countryApi.data;
            if (_this.countries.length !== 0) {
                _this.showFormAddJson = true;
            }
            if (_this._route.snapshot.queryParamMap.has('searchTerm')) {
                _this.searchTerm = _this._route.snapshot.queryParamMap.get('searchTerm');
            }
            else if (_this.searchTerm) {
                _this.filteredCountries = _this.filtreCountries(_this.searchTerm);
            }
            else {
                _this.filteredCountries = _this.countries;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddCountryComponent.prototype.filtreCountries = function (searchString) {
        if (searchString === null) {
            this.filteredCountries = this.countries;
        }
        else {
            return this.countries.filter(function (country) {
                return country.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
            });
        }
    };
    AddCountryComponent.prototype.OnSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('geojson', this.fileToUpload, this.fileToUpload.name);
        this._countryService.save(formData).subscribe(function (data) {
            console.log('data uploaded');
            _this.enableSubmitForm = true;
            _this._router.navigate(['administrateur/countries']);
        }, function (error) {
            console.log(error);
        });
    };
    AddCountryComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        // get file form event
        this.fileToUpload = file.item(0);
        // get extension of uploaded file
        var extension = this.fileToUpload.name.split('.')[1].toLocaleLowerCase();
        // test file extension
        if (extension === 'json' || extension === 'geojson') {
            this.enableSubmitForm = true;
            // create a reader
            var reader = new FileReader();
            // read uploaded file as Text
            reader.readAsText(this.fileToUpload);
            // get JSON file on load to use ot before save it
            reader.onload = function (event) {
                // get Result and parse JSON FORMAT
                _this.geoJsonFile = event.target.result;
                _this.geoJsonFile = JSON.parse(_this.geoJsonFile);
                // turn error to null
                _this.errorFile = null;
            };
        }
        else {
            this.errorFile = 'File Uploaded not json/geojson';
            this.enableSubmitForm = false;
            this.geoJsonFile = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CountryForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], AddCountryComponent.prototype, "CountryForm", void 0);
    AddCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-country',
            template: __webpack_require__(/*! ./add-country.component.html */ "./src/app/admin/country/add-country/add-country.component.html"),
            styles: [__webpack_require__(/*! ./add-country.component.css */ "./src/app/admin/country/add-country/add-country.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddCountryComponent);
    return AddCountryComponent;
}());



/***/ }),

/***/ "./src/app/admin/country/country-details/country-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/country/country-details/country-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvdW50cnkvY291bnRyeS1kZXRhaWxzL2NvdW50cnktZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/country/country-details/country-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/country/country-details/country-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"wrapper wrapper-content\">\n    <div class=\"row animated fadeInRight\">\n      <div class=\"col-md-5\">\n        <div class=\"ibox \">\n          <div class=\"ibox-title text-center\">\n            <h2>{{ country?.properties.name }}</h2>\n          </div>\n          <div>\n            <div class=\"ibox-content no-padding border-left-right\">\n              <app-country-map *ngIf=\"country\" [country]=\"country\"></app-country-map>\n\n            </div>\n            <div class=\"ibox-content profile-content\">\n              <div class=\"row m-t-md\">\n                <h5>\n                  About {{ country?.properties.name }}\n                </h5>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                  et\n                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.\n                </p>\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n              <div class=\"row m-t-md\">\n                <div class=\"col-4\">\n\n                  <p class=\"font-bold\"><i class=\"fas fa-globe-africa\"></i> Subregion : {{ country?.properties.region }}</p>\n                </div>\n                <div class=\"col-4\">\n                  <p><i class=\"fas fa-city\"></i> Capital :</p>\n\n                </div>\n                <div class=\"col-4\">\n\n                  <p><i class=\"far fa-money-bill-alt\"></i> National currency :</p>\n                </div>\n                <div class=\"col-4\">\n\n                  <p><i class=\"far fa-money-bill-alt\"></i> Code ISO 3166-1 :</p>\n                </div>\n                <div class=\"col-4\">\n\n                  <p><i class=\"fas fa-phone\"></i> Indicatif Tele :</p>\n                </div>\n\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n              <div class=\"row\">\n\n\n\n                <div class=\"col-lg-6  \">\n                  <div class=\"row\">\n\n                    <div class=\"col-12  d-flex justify-content-center \">\n                      <ngx-charts-pie-grid [view]=\"optionsSurface.view\" [label]=\"optionsSurface.label\" [scheme]=\"optionsSurface.colorScheme\"\n                        [animations]=\"optionsSurface.animations\" [tooltipText]=\"optionsSurface.tooltipTemplate\"\n                        [tooltipDisabled]=\"optionsSurface.tooltipDisabled\" [results]=\"optionsSurface.data\"\n                        [designatedTotal]=\"optionsSurface.totalValue\">\n                      </ngx-charts-pie-grid>\n                    </div>\n                    <div class=\"col-12\">\n                      <h3 class=\"text-center\">Area From Africa Km2</h3>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"row\">\n\n                    <div class=\"col-12  d-flex justify-content-center \">\n                      <ngx-charts-pie-grid [view]=\"optionsPopulation.view\" [label]=\"optionsPopulation.label\" [scheme]=\"optionsPopulation.colorScheme\"\n                        [animations]=\"optionsPopulation.animations\" [tooltipText]=\"optionsPopulation.tooltipTemplate\"\n                        [tooltipDisabled]=\"optionsPopulation.tooltipDisabled\" [results]=\"optionsPopulation.data\"\n                        [designatedTotal]=\"optionsPopulation.totalValue\">\n                      </ngx-charts-pie-grid>\n                    </div>\n                    <div class=\"col-12  \">\n                      <h3 class=\"text-center\">Population From Africa</h3>\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"col-lg-7\">\n        <div class=\"tabs-container\">\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <!-- Levels -->\n            <li><a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#tab-1\">Levels</a></li>\n            <!-- fin  -->\n            <!-- Persons -->\n            <li><a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab-2\">Persons </a></li>\n          </ul>\n          <div class=\"tab-content\">\n            <!-- tab levels -->\n            <div role=\"tabpanel\" id=\"tab-1\" class=\"tab-pane active show\">\n              <div class=\"panel-body\">\n                <div class=\"container\">\n                  <!-- table levels -->\n                  <h2><i _ngcontent-c11=\"\" class=\"fa fa-bank\"></i> Local government of {{ country?.properties.name }}\n                  </h2>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum consequat tortor ut\n                  </p>\n\n                  <div class=\"row\">\n\n\n                    <div class=\"col-md-12\">\n                      <div class=\"ibox\">\n                        <div class=\"ibox-title\">\n                          <div class=\"d-flex justify-content-between col-12\">\n                            <h2>{{title | uppercase}}</h2>\n\n                            <button class=\"btn btn-info\" [routerLink]=\"['/administrateur/levels/' , country?.properties.id  , 1 ]\">Maps\n                              Levels</button>\n                          </div>\n                        </div>\n                        <div class=\"ibox-content\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTriggerLevels\" class=\"table table-hover\">\n                                <thead>\n                                  <tr>\n                                    <th>ID</th>\n                                    <th> name</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let level of levels\">\n                                    <td>{{ level.properties.id }}</td>\n                                    <td>{{level.properties.name}}</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"ibox-footer\">\n                          <div class=\"row text-center\">\n                            <div class=\"col-md-12\">\n\n                              <button class=\"btn btn-success m-r-xs\">Add New Level By From</button>\n                              <button [routerLink]=\"['/administrateur/addLevelByFile/' , country?.properties.id  , 1 ]\"\n                                class=\"btn btn-primary\">Add\n                                Level By GeoJson File\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n            <!-- tab Persons -->\n            <div role=\"tabpanel\" id=\"tab-2\" class=\"tab-pane\">\n              <div class=\"panel-body\">\n                <div class=\"container\">\n                  <!-- table levels -->\n                  <h2><i _ngcontent-c11=\"\" class=\"fa fa-bank\"></i> LeaderShips of {{ country?.name }} </h2>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum consequat tortor ut\n                  </p>\n\n                  <div class=\"row\">\n\n\n                    <div class=\"col-md-12\">\n                      <div class=\"ibox\">\n                        <div class=\"ibox-title\">\n                          LeaderShips\n                        </div>\n\n                        <div class=\"ibox-content \">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTriggerLevels\" class=\"table table-hover\">\n                                <thead>\n                                  <tr>\n                                    <th>ID</th>\n                                    <th>First name</th>\n                                    <th>Last name</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let person of persons\">\n                                    <td>{{ person.id }}</td>\n                                    <td>{{person.first_name}}</td>\n                                    <td>{{person.last_name}}</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"ibox-footer\">\n                          <div class=\"row text-center\">\n                            <div class=\"col-md-12\">\n\n                              <button class=\"btn btn-success m-r-xs\">Add New Person</button>\n\n                            </div>\n                          </div>\n                        </div>\n\n\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/country/country-details/country-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/country/country-details/country-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: CountryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailsComponent", function() { return CountryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var _maps_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../maps/map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/level.service */ "./src/app/services/level.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CountryDetailsComponent = /** @class */ (function () {
    function CountryDetailsComponent(_route, _countryService, _personService, _levelService, _router, _mapService) {
        this._route = _route;
        this._countryService = _countryService;
        this._personService = _personService;
        this._levelService = _levelService;
        this._router = _router;
        this._mapService = _mapService;
        this.dtOptions = {};
        this.dtTriggerLevels = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerPersons = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.title = 'Level 1';
        this.optionsSurface = {
            view: [],
            label: 'Total',
            totalValue: null,
            animations: true,
            tooltipDisabled: false,
            tooltipTemplate: null,
            colorScheme: { domain: [] },
            data: null
        };
        this.optionsPopulation = {
            view: [],
            label: 'Total',
            totalValue: null,
            animations: true,
            tooltipDisabled: false,
            tooltipTemplate: null,
            colorScheme: { domain: [] },
            data: null
        };
        this.dataGraphe = [];
        this.levels = [];
        this.persons = [];
    }
    CountryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._id = +params.get('id');
            _this._countryService.getCountry(_this._id).subscribe(function (countryApi) {
                _this.country = countryApi.data;
                // this.persons = this.country.persons;
                // this.dtTriggerPersons.next();
                _this.title = _this.country.properties.name + ' Levels 1';
                _this.getGraphSurface(_this.country);
                _this.getGraphPopulation(_this.country);
            }, function (error) {
                console.log(error);
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.getLevels(this._id);
        this.getPersons(this._id);
    };
    CountryDetailsComponent.prototype.getPersons = function (country_id) {
        var _this = this;
        this._personService.getPersons(country_id).subscribe(function (personApi) {
            _this.persons = personApi.data;
            _this.dtTriggerPersons.next();
        }, function (error) {
            console.log(error);
        });
    };
    CountryDetailsComponent.prototype.getLevels = function (country_id) {
        var _this = this;
        this._levelService.getLevels(country_id).subscribe(function (levelApi) {
            _this.levels = levelApi.data;
            _this.dtTriggerLevels.next();
        }, function (error) {
            console.log(error);
        });
    };
    CountryDetailsComponent.prototype.getGraphSurface = function (country) {
        var _this = this;
        this.optionsSurface.view = [200, 200];
        this.optionsSurface.label = 'Area';
        this.optionsSurface.totalValue = 30370000;
        this.optionsSurface.tooltipDisabled = false;
        this.optionsSurface.colorScheme.domain = [
            '#01a48f',
            '#00cbc6',
            '#41e6e1',
            '#b6f3f5'
        ];
        this.optionsSurface.tooltipTemplate = function () {
            return '<ng-template>' + _this.country.properties.area + ' km2' + '</ng-template>';
        };
        this.optionsSurface.data = [{ name: country.properties.name, value: this._mapService.getSurface(country.geometry) }];
    };
    CountryDetailsComponent.prototype.getGraphPopulation = function (country) {
        var _this = this;
        this.optionsPopulation.view = [200, 200];
        this.optionsPopulation.label = 'Population ' + country.properties.population_year;
        this.optionsPopulation.totalValue = 1216000000;
        this.optionsPopulation.tooltipDisabled = false;
        this.optionsPopulation.colorScheme.domain = [
            '#00b9ee',
            '#b6f3f5'
        ];
        this.optionsPopulation.tooltipTemplate = function () {
            return '<ng-template>' + _this.country.properties.population + ' ' + country.properties.population_year + '</ng-template>';
        };
        this.optionsPopulation.data = [{ name: country.properties.name, value: country.properties.population }];
    };
    CountryDetailsComponent.prototype.gotoAddLevelByFile = function (id) {
        this._router.navigate([id], {
            relativeTo: this._route
        });
    };
    CountryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-details',
            template: __webpack_require__(/*! ./country-details.component.html */ "./src/app/admin/country/country-details/country-details.component.html"),
            styles: [__webpack_require__(/*! ./country-details.component.css */ "./src/app/admin/country/country-details/country-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"],
            _services_person_service__WEBPACK_IMPORTED_MODULE_4__["PersonService"],
            _services_level_service__WEBPACK_IMPORTED_MODULE_6__["LevelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _maps_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]])
    ], CountryDetailsComponent);
    return CountryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/country/country.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/country/country.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/country/country.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/country/country.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\n\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div class=\"ibox-content m-b-sm border-bottom\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Search By Name...\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-2\">\n\n\n      <button [routerLink]=\"['/administrateur/formCountry/0']\" class=\"btn btn-info dim btn-large btn-block  btn-outline\"\n        type=\"button\">\n        <h3>New <br>Country</h3>\n      </button>\n\n\n\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n  <div class=row *ngIf=\"countries.length === 0\">\n    <div class=\"alert alert-warning col-12\">\n      No Countries.\n    </div>\n\n  </div>\n\n\n  <div class=\"row\" *ngIf=\"countries.length > 1\">\n\n\n    <div *ngFor=\"let cntry of filtredCountries  | paginate: { itemsPerPage: 4, currentPage: p }\" class=\"col-md-3\">\n\n\n\n      <div class=\"ibox\">\n        <div class=\"ibox-content product-box\">\n\n\n          <app-country-map *ngIf=\"cntry\" [country]=\"cntry\"></app-country-map>\n\n          <a (click)=\"gotoCountryDetails(cntry.properties.id)\">\n            <div class=\"product-desc\">\n              <span class=\"product-price\">\n                {{ cntry?.properties.iso_a3}}\n              </span>\n              <span class=\"product-name\"> {{ cntry?.properties.name}}</span>\n              <small class=\"text-muted\">Subregion : {{ cntry?.properties.region}} </small>\n\n\n            </div>\n          </a>\n\n        </div>\n        <div class=\"ibox-footer\">\n\n          <button (click)=\"editCountry()\" class=\"btn btn-block btn-warning\">Edit\n          </button>\n          <button class=\"btn btn-block btn-danger\">Delete\n          </button>\n\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"row\" *ngIf=\"countries.length > 1\">\n    <div class=\"pagination float-right\">\n\n\n      <pagination-controls class=\"my-pagination float-right\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/country/country.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/country/country.component.ts ***!
  \****************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _models_country_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/country.model */ "./src/app/models/country.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _form_country_form_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-country/form-country.component */ "./src/app/admin/country/form-country/form-country.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CountryComponent = /** @class */ (function () {
    function CountryComponent(_countryService, _modalService, _router, _route) {
        this._countryService = _countryService;
        this._modalService = _modalService;
        this._router = _router;
        this._route = _route;
        this.countries = [];
        this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"]();
        this.filtredCountries = [];
        this.errors = [];
        this.p = 1;
    }
    Object.defineProperty(CountryComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filtredCountries = this.filterCountries(value);
        },
        enumerable: true,
        configurable: true
    });
    CountryComponent.prototype.filterCountries = function (searchString) {
        if (searchString === null) {
            this.filtredCountries = this.countries;
        }
        else {
            return this.countries.filter(function (country) {
                return country.properties.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
            });
        }
    };
    CountryComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CountryComponent.prototype.gotoCountryDetails = function (id) {
        this._router.navigate([id], {
            relativeTo: this._route
        });
    };
    CountryComponent.prototype.getCountries = function () {
        var _this = this;
        this._countryService.getCountries().subscribe(function (countriesApi) {
            _this.countries = countriesApi.data;
            _this.filtredCountries = _this.countries;
        }, function (error) {
            _this.errors = error;
        });
    };
    CountryComponent.prototype.createCountry = function () {
        this.openModalFormCountry(false);
    };
    CountryComponent.prototype.editCountry = function () {
        this.openModalFormCountry(true);
    };
    CountryComponent.prototype.openModalFormCountry = function (edit) {
        var _this = this;
        var initialState = {
            title: edit ? 'Edit Country' : 'New Country',
            country: edit ? this.country : new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"](),
            edit: edit,
            errors: this.errors
        };
        this.bsModalRef = this._modalService.show(_form_country_form_country_component__WEBPACK_IMPORTED_MODULE_5__["FormCountryComponent"], {
            initialState: initialState,
            class: 'modal-lg'
        });
        if (edit === false) {
            this.bsModalRef.content.onClose.subscribe(function (data) {
                _this._countryService.save(data).subscribe(function (countryApi) {
                    _this.getCountries();
                    _this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"]();
                    _this.errors = [];
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.bsModalRef.content.country = _this.country;
                    _this.bsModalRef.hide();
                }, function (error) {
                    _this.errors = error.error.errors;
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.errors = [];
                });
            });
        }
        else {
            this.bsModalRef.content.onClose.subscribe(function (data) {
                return _this._countryService.update(data).subscribe(function (countryData) {
                    _this.getCountries();
                    _this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"]();
                    _this.errors = [];
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.bsModalRef.content.country = _this.country;
                    _this.bsModalRef.hide();
                }, function (error) {
                    _this.errors = error.error.errors;
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.errors = [];
                });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CountryForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], CountryComponent.prototype, "RegionForm", void 0);
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/admin/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/admin/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/admin/country/country.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/country/country.service.ts ***!
  \**************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryService = /** @class */ (function () {
    function CountryService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.baseUrl = this.url + '/countries/';
    }
    CountryService.prototype.getCountries = function () {
        return this._http
            .get(this.baseUrl)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService.prototype.deleteCountry = function (id) {
        return this._http
            .delete(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService.prototype.getCountry = function (id) {
        return this._http
            .get(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService.prototype.errorHandler = function (error) {
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    // save(country: Country): Observable<Country> {
    //   return this._http.post<Country>(this.baseUrl, country)
    //     .pipe(catchError(this.errorHandler));
    // }
    CountryService.prototype.save = function (country) {
        return this._http
            .post(this.baseUrl, country)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService.prototype.update = function (country) {
        return this._http
            .put(this.baseUrl + country.id, country)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/admin/country/form-country/form-country.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/country/form-country/form-country.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvdW50cnkvZm9ybS1jb3VudHJ5L2Zvcm0tY291bnRyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/country/form-country/form-country.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/country/form-country/form-country.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n  <form #CountryForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n    <app-ibox [title]=\"title\">\n\n\n      <div class=\"iBoxBody\">\n        <div class=\"row\">\n          <div class=\"col-md-6 border-right\">\n\n            <div class=\"form-group {{ errors.name ? 'has-error' : '' }} \">\n              <label for=\"name\">Name</label>\n              <input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"country.name\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.name\">\n              {{errors.name}}\n            </div>\n\n            <div class=\"form-group {{ errors.iso_a3 ? 'has-error' : '' }} \">\n              <label for=\"iso_a3\">Iso A3</label>\n              <input id=\"iso_a3\" type=\"text\" class=\"form-control\" name=\"iso_a3\" [(ngModel)]=\"country.iso_a3\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.iso_a3\">\n              {{errors.iso_a3}}\n            </div>\n\n\n            <div class=\"form-group {{ errors.iso_a2 ? 'has-error' : '' }} \">\n              <label for=\"iso_a2\">Iso A2</label>\n              <input id=\"iso_a2\" type=\"text\" class=\"form-control\" name=\"iso_a2\" [(ngModel)]=\"country.iso_a2\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.iso_a2\">\n              {{errors.iso_a2}}\n            </div>\n\n\n            <div class=\"form-group {{ errors.iso_n3 ? 'has-error' : '' }} \">\n              <label for=\"iso_n3\">Iso N3</label>\n              <input id=\"iso_n3\" type=\"text\" class=\"form-control\" name=\"iso_n3\" [(ngModel)]=\"country.iso_n3\">\n            </div>\n            <div class=\" alert alert-danger\" [hidden]=\"!errors.iso_n3\">\n              {{errors.iso_n3}}\n            </div>\n\n            <div class=\"form-group {{ errors.capital ? 'has-error' : '' }} \">\n              <label for=\"capital\">Capital</label>\n              <input id=\"capital\" type=\"text\" class=\"form-control\" name=\"capital\" [(ngModel)]=\"country.capital\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.capital\">\n              {{errors.capital}}\n            </div>\n\n\n            <div class=\"form-group {{ errors.devise ? 'has-error' : '' }} \">\n              <label for=\"devise\">Currency</label>\n              <input id=\"devise\" type=\"text\" class=\"form-control\" name=\"devise\" [(ngModel)]=\"country.devise\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.devise\">\n              {{errors.devise}}\n            </div>\n\n            <div class=\"form-group {{ errors.indicatif_tele ? 'has-error' : '' }} \">\n              <label for=\"indicatif_tele\">indicatif_tele</label>\n              <input id=\"indicatif_tele\" type=\"text\" class=\"form-control\" name=\"indicatif_tele\" [(ngModel)]=\"country.indicatif_tele\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.indicatif_tele\">\n              {{errors.indicatif_tele}}\n            </div>\n            <div class=\"form-group {{ errors.description ? 'has-error' : '' }} \">\n              <label for=\"description\">Description</label>\n              <textarea id=\"description\" rows=\"6\" class=\"form-control\" name=\"description\" [(ngModel)]=\"country.description\"></textarea>\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.description\">\n              {{errors.description}}\n            </div>\n\n          </div>\n\n\n          <!-- right side  -->\n          <div class=\"col-md-6\">\n            <label>Preview image</label>\n\n            <div class=\"col-12 text-center\">\n              <img [src]=\"imageUrl\" style=\"width:350px;height:160px\">\n\n            </div>\n            <div class=\"col-12 text-center\">\n              <div class=\"custom-file m-t-xs\">\n                <input id=\"logo\" type=\"file\" accept=\"image/*\" class=\"custom-file-input\" (change)=\"\n                  handleFlagInput($event.target.files)\">\n                <label for=\"logo\" class=\"custom-file-label\">Choose file...</label>\n              </div>\n            </div>\n            <div class=\"col-12\">\n              <div *ngIf=\"errorFlag != null\" class=\"alert alert-danger \">\n                {{ errorFlag }}\n              </div>\n            </div>\n            <div class=\"hr-line-dashed\"></div>\n            <label>Preview Map</label>\n            <app-upload-shape [geoJsonInput]=\"geoJsonFile\"></app-upload-shape>\n            <div class=\"col-12 text-center\">\n              <div class=\"custom-file m-t-xs\">\n                <input (change)=\"handleGeojsonFileInput($event.target.files)\" id=\"logo\" type=\"file\" class=\"custom-file-input\">\n                <label for=\"logo\" class=\"custom-file-label\">Choose file...</label>\n              </div>\n            </div>\n            <div class=\"col-12\">\n              <div *ngIf=\"errorFile != null\" class=\"alert alert-danger \">\n                {{ errorFile}}\n              </div>\n            </div>\n            <div class=\"hr-line-dashed\"></div>\n            <div class=\"col-12  \">\n\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Save</button>\n            </div>\n          </div>\n\n\n        </div>\n\n\n\n\n\n      </div>\n\n\n\n    </app-ibox>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/country/form-country/form-country.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/country/form-country/form-country.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCountryComponent", function() { return FormCountryComponent; });
/* harmony import */ var _models_country_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/country.model */ "./src/app/models/country.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../country.service */ "./src/app/admin/country/country.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormCountryComponent = /** @class */ (function () {
    function FormCountryComponent(_countryService, _router) {
        this._countryService = _countryService;
        this._router = _router;
        this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_0__["Country"]();
        this.errors = [];
        this.title = "Create Country";
        this.imageUrl = "/assets/default-image.png";
    }
    FormCountryComponent.prototype.ngOnInit = function () {
        this.inputCustom();
    };
    FormCountryComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        var props = Object.keys(this.country);
        var values = Object.values(this.country);
        formData.append("single_shape", "true");
        for (var i = 1; i < values.length; i++) {
            formData.append(props[i], values[i]);
        }
        if (this.fileToUpload) {
            formData.append("geojson", this.fileToUpload, this.fileToUpload.name);
        }
        if (this.imageToUpload) {
            formData.append("flag_url", this.imageToUpload, this.imageToUpload.name);
        }
        this._countryService.save(formData).subscribe(function (data) {
            console.log("data uploaded");
            _this._router.navigate(["administrateur/countries"]);
        }, function (error) {
            console.log(error);
        });
    };
    FormCountryComponent.prototype.handleFlagInput = function (file) {
        var _this = this;
        this.imageToUpload = file.item(0);
        var extension = this.imageToUpload.name.split(".")[1].toLocaleLowerCase();
        if (["jpg", "png", "jpeg"].includes(extension.toLowerCase())) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageUrl = event.target.result;
            };
            reader.readAsDataURL(this.imageToUpload);
            this.errorFlag = null;
        }
        else {
            this.errorFlag = "Choose file with JPEG - JPG - PNG Fromat !";
        }
    };
    FormCountryComponent.prototype.handleGeojsonFileInput = function (file) {
        var _this = this;
        // get file form event
        this.fileToUpload = file.item(0);
        // get extension of uploaded file
        var extension = this.fileToUpload.name.split(".")[1].toLocaleLowerCase();
        // test file extension
        if (extension === "json" || extension === "geojson") {
            // create a reader
            var reader = new FileReader();
            // read uploaded file as Text
            reader.readAsText(this.fileToUpload);
            // get JSON file on load to use ot before save it
            reader.onload = function (event) {
                //get Result and parse JSON FORMAT
                _this.geoJsonFile = event.target.result;
                _this.geoJsonFile = JSON.parse(_this.geoJsonFile);
                // turn error to null
                _this.errorFile = null;
            };
        }
        else {
            this.errorFile = "File Uploaded not json/geojson";
            this.errorFile = "Choose valid GeoJson/json File";
            this.geoJsonFile = null;
        }
    };
    FormCountryComponent.prototype.inputCustom = function () {
        $(".custom-file-input").on("change", function () {
            var fileName = $(this)
                .val()
                .split("\\")
                .pop();
            $(this)
                .next(".custom-file-label")
                .addClass("selected")
                .html(fileName);
        });
    };
    FormCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-country",
            template: __webpack_require__(/*! ./form-country.component.html */ "./src/app/admin/country/form-country/form-country.component.html"),
            styles: [__webpack_require__(/*! ./form-country.component.css */ "./src/app/admin/country/form-country/form-country.component.css")]
        }),
        __metadata("design:paramtypes", [_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FormCountryComponent);
    return FormCountryComponent;
}());



/***/ }),

/***/ "./src/app/admin/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"footer\">\n  <div class=\"float-right\">\n    10GB of <strong>250GB</strong> Free.\n  </div>\n  <div>\n    <strong>Copyright</strong> Example Company &copy; 2014-2018\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/admin/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/admin/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/admin/level/add-level-by-file/add-level-by-file.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/level/add-level-by-file/add-level-by-file.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xldmVsL2FkZC1sZXZlbC1ieS1maWxlL2FkZC1sZXZlbC1ieS1maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/level/add-level-by-file/add-level-by-file.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/level/add-level-by-file/add-level-by-file.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>Regions</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a #h1Variable></a>\n      </li>\n    </ol>\n  </div>\n</div> -->\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <div class=\"ibox \">\n        <div class=\"ibox-content\">\n          <form #geojsonFrom=\"ngForm\" (ngSubmit)=\"OnSubmit()\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"btn-group col-12  \">\n                  <label title=\"Upload json file\" for=\"inputFile\" class=\"btn btn-default btn-block\">\n                    <input type=\"file\" id=\"inputFile\" class=\"hide pull-left\" (change)=\"handleFileInput($event.target.files ) \">\n                    Upload new Json/Geojson file\n                  </label>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div *ngIf=\"errorFile != null\" class=\"alert alert-danger \">\n                  {{ errorFile}}\n                </div>\n              </div>\n              <div class=\"col-6 offset-3\">\n                <button [disabled]=\"!enableSubmitForm\" type=\"submit\" title=\"Download image\" id=\"download\" class=\"btn btn-block btn-primary\">Download</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-upload-level-map [geoJsonInput]=\"geoJsonFile\"></app-upload-level-map>\n"

/***/ }),

/***/ "./src/app/admin/level/add-level-by-file/add-level-by-file.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/level/add-level-by-file/add-level-by-file.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddLevelByFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLevelByFileComponent", function() { return AddLevelByFileComponent; });
/* harmony import */ var _models_level_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/level.model */ "./src/app/models/level.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/level.service */ "./src/app/services/level.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddLevelByFileComponent = /** @class */ (function () {
    function AddLevelByFileComponent(_levelService, _route, _router) {
        this._levelService = _levelService;
        this._route = _route;
        this._router = _router;
        this.errorFile = null;
        this.enableSubmitForm = false;
        this.country_id = null;
        this.level_id = null;
        this.level = _models_level_model__WEBPACK_IMPORTED_MODULE_0__["Level"];
        this.level_stage = null;
    }
    AddLevelByFileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            // this.level_id = +params.get('id');
            _this.country_id = +params.get('id');
            _this.level_stage = +params.get('level');
            // console.log(this.country_id);
        });
        this._route.queryParamMap.subscribe(function (params) {
            if (params.has('c')) {
                _this.country_id = +params.get('c');
                _this.level_id = +params.get('id');
                console.log(_this.country_id);
            }
        });
    };
    AddLevelByFileComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        // get file form event
        this.fileToUpload = file.item(0);
        // get extension of uploaded file
        var extension = this.fileToUpload.name.split('.')[1].toLocaleLowerCase();
        // test file extension
        if (extension === 'json' || extension === 'geojson') {
            this.enableSubmitForm = true;
            // create a reader
            var reader = new FileReader();
            // read uploaded file as Text
            reader.readAsText(this.fileToUpload);
            // get JSON file on load to use it before save it
            reader.onload = function (event) {
                // get Result and parse JSON FORMAT
                _this.geoJsonFile = event.target.result;
                _this.geoJsonFile = JSON.parse(_this.geoJsonFile);
                // turn error to null
                _this.errorFile = null;
            };
        }
        else {
            this.errorFile = 'File Uploaded not json/geojson';
            this.enableSubmitForm = false;
            this.geoJsonFile = null;
        }
    };
    AddLevelByFileComponent.prototype.OnSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('geojson', this.fileToUpload, this.fileToUpload.name);
        formData.append('level_id', this.level_id);
        // this._levelService.getLevel
        formData.append('country_id', this.country_id);
        formData.append('level_stage', this.level_stage);
        // formData.append("single_shape", "false");
        this._levelService.save(formData).subscribe(function (data) {
            console.log('data uploaded');
            _this.enableSubmitForm = true;
            _this._router.navigate(['administrateur/countries', _this.country_id]);
        }, function (error) {
            console.log(error);
        });
    };
    AddLevelByFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-level-by-file',
            template: __webpack_require__(/*! ./add-level-by-file.component.html */ "./src/app/admin/level/add-level-by-file/add-level-by-file.component.html"),
            styles: [__webpack_require__(/*! ./add-level-by-file.component.css */ "./src/app/admin/level/add-level-by-file/add-level-by-file.component.css")]
        }),
        __metadata("design:paramtypes", [_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddLevelByFileComponent);
    return AddLevelByFileComponent;
}());



/***/ }),

/***/ "./src/app/admin/level/level.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/level/level.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xldmVsL2xldmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/level/level.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/level/level.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\n\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div class=\"ibox-content m-b-sm border-bottom\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Search By Name...\">\n            </div>\n          </div>\n        </div>Level\n      </div>\n    </div>\n\n    <div class=\"col-md-2\">\n\n\n      <button class=\"btn btn-info dim btn-large btn-block  btn-outline\" type=\"button\">\n        <h3>New <br>Level</h3>\n      </button>\n\n\n\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n  <div class=row *ngIf=\"levels.length === 0\">\n    <div class=\"alert alert-warning col-12\">\n      No Levels.\n    </div>\n\n  </div>\n\n\n  <div class=\"row\" *ngIf=\"levels.length > 1\">\n\n\n    <div *ngFor=\"let level of filtredLevels  | paginate: { itemsPerPage: 15, currentPage: p }\" class=\"col-md-3\">\n\n\n\n      <div class=\"ibox\">\n        <div class=\"ibox-content product-box\">\n\n\n          <app-maps-levels *ngIf=\"level\" [level]=\"level\"></app-maps-levels>\n\n          <a (click)=\"gotoLevelDetails(level.properties.id)\">\n            <div class=\"product-desc\">\n              <span class=\"product-price\">\n                {{ level?.properties.name}}\n              </span>\n              <span class=\"product-name\"> {{ level?.properties.name}}</span>\n              <!-- <small class=\"text-muted\"> {{ level?.name}} </small> -->\n\n\n            </div>\n          </a>\n\n        </div>\n        <div class=\"ibox-footer\">\n\n          <button (click)=\"editLevel()\" class=\"btn btn-block btn-warning\">Edit\n          </button>\n          <button class=\"btn btn-block btn-danger\">Delete\n          </button>\n\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"row\" *ngIf=\"levels.length > 1\">\n    <div class=\"pagination float-right\">\n\n\n      <pagination-controls class=\"my-pagination float-right\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/level/level.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/level/level.component.ts ***!
  \************************************************/
/*! exports provided: LevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelComponent", function() { return LevelComponent; });
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/level.service */ "./src/app/services/level.service.ts");
/* harmony import */ var _maps_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maps/map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LevelComponent = /** @class */ (function () {
    function LevelComponent(_router, _route, _mapService, _levelService) {
        this._router = _router;
        this._route = _route;
        this._mapService = _mapService;
        this._levelService = _levelService;
        this.levels = [];
        this.filtredLevels = [];
        this.errors = [];
        this.country_id = null;
        this.level_id = null;
        this.p = 1;
    }
    Object.defineProperty(LevelComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filtredLevels = this.filterLevels(value);
        },
        enumerable: true,
        configurable: true
    });
    LevelComponent.prototype.filterLevels = function (searchString) {
        if (searchString === null) {
            this.filtredLevels = this.levels;
        }
        else {
            return this.levels.filter(function (level) {
                return level.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
            });
        }
    };
    LevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) { return _this.level_stage = +params.get('level'); });
        if (this.level_stage === 1) {
            console.log('ok');
            this._route.paramMap.subscribe(function (params) {
                _this.country_id = +params.get('id');
                _this._levelService.getLevels(_this.country_id).subscribe(function (levelsApi) {
                    _this.levels = levelsApi.data;
                    _this.filtredLevels = _this.levels;
                    console.log(_this.levels);
                }, function (error) { return console.log(error); });
            });
        }
        else {
            this._route.queryParamMap.subscribe(function (params) { return _this.country_id = +params.get('c'); });
            this._route.paramMap.subscribe(function (params) { _this.level_id = +params.get('id'); });
            this._levelService.getLevel(this.country_id, this.level_id).subscribe(function (level) {
                _this.level = level.data;
                _this.levels = _this.level.levels;
                _this.filtredLevels = _this.levels;
                console.log(_this.levels);
            }, function (error) { console.log(error); });
        }
    };
    LevelComponent.prototype.gotoLevelDetails = function (id) {
        this._router.navigate([id], {
            relativeTo: this._route
        });
    };
    LevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-level',
            template: __webpack_require__(/*! ./level.component.html */ "./src/app/admin/level/level.component.html"),
            styles: [__webpack_require__(/*! ./level.component.css */ "./src/app/admin/level/level.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _maps_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _services_level_service__WEBPACK_IMPORTED_MODULE_0__["LevelService"]])
    ], LevelComponent);
    return LevelComponent;
}());



/***/ }),

/***/ "./src/app/admin/level/leveldetails/leveldetails.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/level/leveldetails/leveldetails.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xldmVsL2xldmVsZGV0YWlscy9sZXZlbGRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/level/leveldetails/leveldetails.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/level/leveldetails/leveldetails.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"wrapper wrapper-content\">\n    <div class=\"row animated fadeInRight\">\n      <div class=\"col-md-5\">\n        <div class=\"ibox \">\n          <div class=\"ibox-title text-center\">\n            <h2>{{ level?.properties.name }}</h2>\n          </div>\n          <div>\n            <div class=\"ibox-content no-padding border-left-right\">\n              <app-country-map *ngIf=\"level\" [country]=\"level\"></app-country-map>\n\n            </div>\n            <div class=\"ibox-content profile-content\">\n              <div class=\"row m-t-md\">\n                <h5>\n                  About {{ level?.properties.name }}\n                </h5>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                  et\n                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.\n                </p>\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n              <div class=\"row m-t-md\">\n                <div class=\"col-4\">\n\n                  <!-- <p class=\"font-bold\"><i class=\"fas fa-globe-africa\"></i> Subregion : {{ level?.region }}</p> -->\n                </div>\n                <div class=\"col-4\">\n                  <p><i class=\"fas fa-city\"></i> Capital :</p>\n\n                </div>\n                <!-- <div class=\"col-4\">\n\n                  <p><i class=\"far fa-money-bill-alt\"></i> National currency :</p>\n                </div> -->\n                <div class=\"col-4\">\n\n                  <p><i class=\"far fa-money-bill-alt\"></i> Code ISO 3166-1 :</p>\n                </div>\n                <div class=\"col-4\">\n\n                  <p><i class=\"fas fa-phone\"></i> Indicatif Tele :</p>\n                </div>\n\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n              <div class=\"row\">\n\n\n\n                <div class=\"col-lg-6  \">\n                  <div class=\"row\">\n\n                    <div class=\"col-12  d-flex justify-content-center \">\n                      <ngx-charts-pie-grid [view]=\"optionsSurface.view\" [label]=\"optionsSurface.label\" [scheme]=\"optionsSurface.colorScheme\"\n                        [animations]=\"optionsSurface.animations\" [tooltipText]=\"optionsSurface.tooltipTemplate\"\n                        [tooltipDisabled]=\"optionsSurface.tooltipDisabled\" [results]=\"optionsSurface.data\"\n                        [designatedTotal]=\"optionsSurface.totalValue\">\n                      </ngx-charts-pie-grid>\n                    </div>\n                    <div class=\"col-12\">\n                      <h3 class=\"text-center\">Area From {{ country?.name }} Km2</h3>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"row\">\n\n                    <div class=\"col-12  d-flex justify-content-center \">\n                      <ngx-charts-pie-grid [view]=\"optionsPopulation.view\" [label]=\"optionsPopulation.label\" [scheme]=\"optionsPopulation.colorScheme\"\n                        [animations]=\"optionsPopulation.animations\" [tooltipText]=\"optionsPopulation.tooltipTemplate\"\n                        [tooltipDisabled]=\"optionsPopulation.tooltipDisabled\" [results]=\"optionsPopulation.data\"\n                        [designatedTotal]=\"optionsPopulation.totalValue\">\n                      </ngx-charts-pie-grid>\n                    </div>\n                    <div class=\"col-12  \">\n                      <h3 class=\"text-center\">Population from {{ country?.properties.name}} </h3>\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"col-lg-7\">\n        <div class=\"tabs-container\">\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <!-- Levels -->\n            <li><a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#tab-1\">Levels</a></li>\n            <!-- fin  -->\n            <!-- Persons -->\n            <li><a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab-2\">Persons </a></li>\n          </ul>\n          <div class=\"tab-content\">\n            <!-- tab levels -->\n            <div role=\"tabpanel\" id=\"tab-1\" class=\"tab-pane active show\">\n              <div class=\"panel-body\">\n                <div class=\"container\">\n                  <!-- table levels -->\n                  <h2><i _ngcontent-c11=\"\" class=\"fa fa-bank\"></i> Local government of {{ level?.properties.name }}\n                  </h2>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum consequat tortor ut\n                  </p>\n\n                  <div class=\"row\">\n\n\n                    <div class=\"col-md-12\">\n                      <div class=\"ibox\">\n                        <div class=\"ibox-title\">\n                          <div class=\"d-flex justify-content-between col-12\">\n                            <h2>{{title | uppercase}}</h2>\n\n                            <button class=\"btn btn-info\" [routerLink]=\"['/administrateur/levels/' , level?.properties.id  , 2 ]\"\n                              [queryParams]=\"{ c :level?.properties.country_id}\">Maps\n                              Levels</button>\n                          </div>\n                        </div>\n                        <div class=\"ibox-content\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTriggerLevels\" class=\"table table-hover\">\n                                <thead>\n                                  <tr>\n                                    <th>ID</th>\n                                    <th> name</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let level of levels\">\n                                    <td>{{ level.properties.id }}</td>\n                                    <td>{{level.properties.name}}</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"ibox-footer\">\n                          <div class=\"row text-center\">\n                            <div class=\"col-md-12\">\n\n                              <button class=\"btn btn-success m-r-xs\">Add New Level By From</button>\n                              <button [routerLink]=\"['/administrateur/addLevelByFile/' , level?.properties.id  , 2]\"\n                                [queryParams]=\"{ c :level?.properties.country_id}\" class=\"\n                                btn btn-primary\">Add\n                                Level By GeoJson File\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n            <!-- tab Persons -->\n            <div role=\"tabpanel\" id=\"tab-2\" class=\"tab-pane\">\n              <div class=\"panel-body\">\n                <div class=\"container\">\n                  <!-- table levels -->\n                  <h2><i _ngcontent-c11=\"\" class=\"fa fa-bank\"></i> LeaderShips of {{ level?.properties.name }} </h2>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum consequat tortor ut\n                  </p>\n\n                  <div class=\"row\">\n\n\n                    <div class=\"col-md-12\">\n                      <div class=\"ibox\">\n                        <div class=\"ibox-title\">\n                          LeaderShips\n                        </div>\n\n                        <div class=\"ibox-content \">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTriggerLevels\" class=\"table table-hover\">\n                                <thead>\n                                  <tr>\n                                    <th>ID</th>\n                                    <th>First name</th>\n                                    <th>Last name</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let person of persons\">\n                                    <td>{{ person.id }}</td>\n                                    <td>{{person.first_name}}</td>\n                                    <td>{{person.last_name}}</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"ibox-footer\">\n                          <div class=\"row text-center\">\n                            <div class=\"col-md-12\">\n\n                              <button class=\"btn btn-success m-r-xs\">Add New Person</button>\n\n                            </div>\n                          </div>\n                        </div>\n\n\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/level/leveldetails/leveldetails.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/level/leveldetails/leveldetails.component.ts ***!
  \********************************************************************/
/*! exports provided: LeveldetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeveldetailsComponent", function() { return LeveldetailsComponent; });
/* harmony import */ var _maps_map_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../maps/map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_level_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/level.service */ "./src/app/services/level.service.ts");
/* harmony import */ var src_app_services_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/admin/country/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeveldetailsComponent = /** @class */ (function () {
    function LeveldetailsComponent(_route, _levelService, _personService, _countryService, _router, _mapService) {
        this._route = _route;
        this._levelService = _levelService;
        this._personService = _personService;
        this._countryService = _countryService;
        this._router = _router;
        this._mapService = _mapService;
        this.dtOptions = {};
        this.dtTriggerLevels = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerPersons = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.title = 'Level 2';
        this.optionsSurface = {
            view: [],
            label: 'Total',
            totalValue: null,
            animations: true,
            tooltipDisabled: false,
            tooltipTemplate: null,
            colorScheme: { domain: [] },
            data: null
        };
        this.optionsPopulation = {
            view: [],
            label: 'Total',
            totalValue: null,
            animations: true,
            tooltipDisabled: false,
            tooltipTemplate: null,
            colorScheme: { domain: [] },
            data: null
        };
        this.dataGraphe = [];
        this.levels = [];
        this.persons = [];
        this.level_stage = null;
    }
    LeveldetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.country_id = +params.get('id');
            _this._countryService.getCountry(_this.country_id).subscribe(function (country) { _this.country = country.data; });
            _this.level_id = +params.get('id_level');
            _this.level_stage = +params.get('level');
            _this._levelService.getLevel(_this.country_id, _this.level_id).subscribe(function (levelApi) {
                _this.level = levelApi.data;
                // this.levels = this.level.levels;
                console.log(_this.level);
                _this.title = _this.level.properties.name + ' Levels 2';
                _this.getGraphSurface(_this.level, _this.country);
                _this.getGraphPopulation(_this.level, _this.country);
            }, function (error) {
                console.log(error);
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.getLevels(this.country_id, this.level_id);
        // this.getPersons(this._id);
    };
    LeveldetailsComponent.prototype.getPersons = function (level_id) {
        var _this = this;
        this._personService.getPersons(level_id).subscribe(function (personApi) {
            _this.persons = personApi.data;
            _this.dtTriggerPersons.next();
        }, function (error) {
            console.log(error);
        });
    };
    LeveldetailsComponent.prototype.getLevels = function (level_id, country_id) {
        var _this = this;
        this._levelService.getLevels(country_id, level_id).subscribe(function (levelApi) {
            _this.levels = levelApi.data;
            console.log(_this.levels);
            _this.dtTriggerLevels.next();
        }, function (error) {
            console.log(error);
        });
    };
    LeveldetailsComponent.prototype.getGraphSurface = function (level, country_id) {
        var _this = this;
        var surface_country = this._mapService.getSurface(this.country.geometry);
        this.optionsSurface.view = [200, 200];
        this.optionsSurface.label = 'Area';
        this.optionsSurface.totalValue = surface_country;
        this.optionsSurface.tooltipDisabled = false;
        this.optionsSurface.colorScheme.domain = [
            '#01a48f',
            '#00cbc6',
            '#41e6e1',
            '#b6f3f5'
        ];
        this.optionsSurface.tooltipTemplate = function () {
            return '<ng-template>' + _this.level.properties.area + ' km2' + '</ng-template>';
        };
        this.optionsSurface.data = [{ name: level.properties.name, value: this._mapService.getSurface(level.geometry) }];
    };
    LeveldetailsComponent.prototype.getGraphPopulation = function (level, country) {
        var _this = this;
        this.optionsPopulation.view = [200, 200];
        this.optionsPopulation.label = 'Population ' + level.properties.population_year;
        this.optionsPopulation.totalValue = 1216000000;
        this.optionsPopulation.tooltipDisabled = false;
        this.optionsPopulation.colorScheme.domain = [
            '#00b9ee',
            '#b6f3f5'
        ];
        this.optionsPopulation.tooltipTemplate = function () {
            return '<ng-template>' + _this.country.properties.population + ' ' + level.properties.population_year + '</ng-template>';
        };
        this.optionsPopulation.data = [{ name: level.properties.name, value: level.properties.population }];
    };
    LeveldetailsComponent.prototype.gotoAddLevelByFile = function (id) {
        this._router.navigate([id], {
            relativeTo: this._route
        });
    };
    LeveldetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leveldetails',
            template: __webpack_require__(/*! ./leveldetails.component.html */ "./src/app/admin/level/leveldetails/leveldetails.component.html"),
            styles: [__webpack_require__(/*! ./leveldetails.component.css */ "./src/app/admin/level/leveldetails/leveldetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"],
            src_app_services_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _maps_map_service__WEBPACK_IMPORTED_MODULE_0__["MapService"]])
    ], LeveldetailsComponent);
    return LeveldetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/nav-bar-top/nav-bar-top.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/nav-bar-top/nav-bar-top.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25hdi1iYXItdG9wL25hdi1iYXItdG9wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/nav-bar-top/nav-bar-top.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/nav-bar-top/nav-bar-top.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n  <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n      <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n\n      <form role=\"search\" class=\"navbar-form-custom\" action=\"search_results.html\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n        </div>\n      </form>\n    </div>\n    <ul class=\"nav navbar-top-links navbar-right\">\n      <li style=\"padding: 20px\">\n        <span class=\"m-r-sm text-muted welcome-message\">Welcome to INSPINIA+ Admin Theme.</span>\n      </li>\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\" href=\"#\">\n          <i class=\"fa fa-envelope\"></i> <span class=\"label label-warning\">16</span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-messages dropdown-menu-right\">\n          <li>\n            <div class=\"dropdown-messages-box\">\n              <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                <img alt=\"image\" class=\"rounded-circle\" src=\"assets/img/a7.jpg\">\n              </a>\n              <div class=\"media-body\">\n                <small class=\"float-right\">46h ago</small>\n                <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>\n                <small class=\"text-muted\">3 days ago at 7:58 pm - 10.06.2014</small>\n              </div>\n            </div>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <div class=\"dropdown-messages-box\">\n              <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                <img alt=\"image\" class=\"rounded-circle\" src=\"assets/img/a4.jpg\">\n              </a>\n              <div class=\"media-body \">\n                <small class=\"float-right text-navy\">5h ago</small>\n                <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>\n                <small class=\"text-muted\">Yesterday 1:21 pm - 11.06.2014</small>\n              </div>\n            </div>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <div class=\"dropdown-messages-box\">\n              <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                <img alt=\"image\" class=\"rounded-circle\" src=\"assets/img/profile.jpg\">\n              </a>\n              <div class=\"media-body \">\n                <small class=\"float-right\">23h ago</small>\n                <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>\n                <small class=\"text-muted\">2 days ago at 2:30 am - 11.06.2014</small>\n              </div>\n            </div>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <div class=\"text-center link-block\">\n              <a href=\"mailbox.html\" class=\"dropdown-item\">\n                <i class=\"fa fa-envelope\"></i> <strong>Read All Messages</strong>\n              </a>\n            </div>\n          </li>\n        </ul>\n      </li>\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\" href=\"#\">\n          <i class=\"fa fa-bell\"></i> <span class=\"label label-primary\">8</span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-alerts\">\n          <li>\n            <a href=\"mailbox.html\" class=\"dropdown-item\">\n              <div>\n                <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\n                <span class=\"float-right text-muted small\">4 minutes ago</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <a href=\"profile.html\" class=\"dropdown-item\">\n              <div>\n                <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n                <span class=\"float-right text-muted small\">12 minutes ago</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <a href=\"grid_options.html\" class=\"dropdown-item\">\n              <div>\n                <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n                <span class=\"float-right text-muted small\">4 minutes ago</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <div class=\"text-center link-block\">\n              <a href=\"notifications.html\" class=\"dropdown-item\">\n                <strong>See All Alerts</strong>\n                <i class=\"fa fa-angle-right\"></i>\n              </a>\n            </div>\n          </li>\n        </ul>\n      </li>\n\n\n      <li>\n        <a (click)=\"logout($event)\">\n          <i class=\"fa fa-sign-out\"></i> Log out\n        </a>\n      </li>\n      <li>\n        <a class=\"right-sidebar-toggle\">\n          <i class=\"fa fa-tasks\"></i>\n        </a>\n      </li>\n    </ul>\n\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/nav-bar-top/nav-bar-top.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/nav-bar-top/nav-bar-top.component.ts ***!
  \************************************************************/
/*! exports provided: NavBarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarTopComponent", function() { return NavBarTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.helpers */ "./src/app/app.helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavBarTopComponent = /** @class */ (function () {
    function NavBarTopComponent(auth, router, token) {
        this.auth = auth;
        this.router = router;
        this.token = token;
    }
    NavBarTopComponent.prototype.ngOnInit = function () {
    };
    NavBarTopComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.auth.changeAuthStatus(false);
        this.router.navigateByUrl('landing/home');
        this.token.remove();
    };
    NavBarTopComponent.prototype.toggleNavigation = function () {
        jQuery('body').toggleClass('mini-navbar');
        Object(_app_helpers__WEBPACK_IMPORTED_MODULE_4__["smoothlyMenu"])();
    };
    NavBarTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar-top',
            template: __webpack_require__(/*! ./nav-bar-top.component.html */ "./src/app/admin/nav-bar-top/nav-bar-top.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar-top.component.css */ "./src/app/admin/nav-bar-top/nav-bar-top.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], NavBarTopComponent);
    return NavBarTopComponent;
}());



/***/ }),

/***/ "./src/app/admin/nav-left/nav-left.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/nav-left/nav-left.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointerCursur {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbmF2LWxlZnQvbmF2LWxlZnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnRlckN1cnN1ciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/nav-left/nav-left.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/nav-left/nav-left.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\">\n  <ul class=\"metismenu\" id=\"menu\" style=\"display:none;\">\n    <li class=\"active\">\n      <a href=\"?\" aria-expanded=\"true\">\n        <span class=\"sidebar-nav-item-icon fa fa-github fa-lg\"></span>\n        <span class=\"sidebar-nav-item\">metisMenu</span>\n        <span class=\"fa arrow\"></span>\n      </a>\n      <ul aria-expanded=\"true\">\n        <li>\n          <a href=\"https://github.com/onokumus/metisMenu\">\n            <span class=\"sidebar-nav-item-icon fa fa-code-fork\"></span>\n            Fork\n          </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/onokumus/metisMenu\">\n            <span class=\"sidebar-nav-item-icon fa fa-star\"></span>\n            Star\n          </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/onokumus/metisMenu/issues\">\n            <span class=\"sidebar-nav-item-icon fa fa-exclamation-triangle\"></span>\n            Issues\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a href=\"?\" aria-expanded=\"false\">Menu 0 <span class=\"fa arrow\"></span></a>\n      <ul aria-expanded=\"false\">\n        <li><a href=\"?\">item 0.1</a></li>\n        <li><a href=\"?\">item 0.2</a></li>\n        <li><a href=\"http://onokumus.com\">onokumus</a></li>\n        <li><a href=\"?\">item 0.4</a></li>\n      </ul>\n    </li>\n    <li>\n      <a href=\"?\" aria-expanded=\"false\">Menu 1 <span class=\"glyphicon arrow\"></span></a>\n      <ul aria-expanded=\"false\">\n        <li><a href=\"?\">item 1.1</a></li>\n        <li><a href=\"?\">item 1.2</a></li>\n        <li>\n          <a href=\"?\" aria-expanded=\"false\">Menu 1.3 <span class=\"fa plus-times\"></span></a>\n          <ul aria-expanded=\"false\">\n            <li><a href=\"?\">item 1.3.1</a></li>\n            <li><a href=\"?\">item 1.3.2</a></li>\n            <li><a href=\"?\">item 1.3.3</a></li>\n            <li><a href=\"?\">item 1.3.4</a></li>\n          </ul>\n        </li>\n        <li><a href=\"?\">item 1.4</a></li>\n        <li>\n          <a href=\"?\" aria-expanded=\"false\">Menu 1.5 <span class=\"fa plus-minus\"></span></a>\n          <ul aria-expanded=\"false\">\n            <li><a href=\"?\">item 1.5.1</a></li>\n            <li><a href=\"?\">item 1.5.2</a></li>\n            <li><a href=\"?\">item 1.5.3</a></li>\n            <li><a href=\"?\">item 1.5.4</a></li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a href=\"?\" aria-expanded=\"false\">Menu 2 <span class=\"glyphicon arrow\"></span></a>\n      <ul aria-expanded=\"false\">\n        <li><a href=\"?\">item 2.1</a></li>\n        <li><a href=\"?\">item 2.2</a></li>\n        <li><a href=\"?\">item 2.3</a></li>\n        <li><a href=\"?\">item 2.4</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n\n<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n  <div class=\"sidebar-collapse\">\n    <ul class=\"nav metismenu\" id=\"side-menu\">\n      <li class=\"nav-header\">\n        <div class=\"dropdown profile-element\"> <span>\n            <img alt=\"image\" class=\"img-circle\" src=\"assets/img/profile_small.jpg\">\n          </span>\n          <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n            <span class=\"clear\"> <span class=\"block m-t-xs\"> <strong class=\"font-bold\">David Williams</strong>\n              </span> <span class=\"text-muted text-xs block\">Art Director <b class=\"caret\"></b></span> </span> </a>\n          <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n            <li><a href=\"profile.html\">Profile</a></li>\n            <li><a href=\"contacts.html\">Contacts</a></li>\n            <li><a href=\"mailbox.html\">Mailbox</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"login.html\">Logout</a></li>\n          </ul>\n        </div>\n        <div class=\"logo-element\">\n          IN+\n        </div>\n      </li>\n      <li class=\"\">\n        <a aria-expanded=\"true\"><i class=\"fas fa-globe-africa\"></i> <span class=\"nav-label\">Maps</span>\n          <span class=\"fa arrow\"></span></a>\n        <ul class=\"nav nav-second-level collapse\" style=\"\" aria-expanded=\"true\">\n          <li><a [routerLink]=\"['countries']\">Country</a></li>\n          <li><a [routerLink]=\"['addCountries']\">Add Country</a></li>\n          <li><a [routerLink]=\"['mapsManager']\">Maps</a></li>\n          <li><a [routerLink]=\"['regions']\">Regions</a></li>\n\n\n        </ul>\n      </li>\n\n\n\n\n    </ul>\n\n  </div>\n</nav>\n<!--\n<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <div class=\"dropdown profile-element\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                        <span class=\"block m-t-xs\"> <strong class=\"font-bold\">Example user</strong> </span>\n                        <span class=\"text-muted text-xs block\">Example <b class=\"caret\"></b> </span>\n                    </a>\n                    <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n                        <li><a href=\"#\">Logout</a></li>\n                    </ul>\n                </div>\n                <div class=\"logo-element\">\n                    IN+\n                </div>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('mainView')}\">\n                <a [routerLink]=\"['/mainView']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Main view</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('minorView')}\">\n                <a [routerLink]=\"['/minorView']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Minor view</span> </a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/login']\"><i class=\"fa fa-sign-in\"></i> <span class=\"nav-label\">Login</span> </a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/register']\"><i class=\"fa fa-pencil\"></i> <span class=\"nav-label\">Register</span> </a>\n            </li>\n        </ul>\n\n    </div>\n</nav> -->\n"

/***/ }),

/***/ "./src/app/admin/nav-left/nav-left.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/nav-left/nav-left.component.ts ***!
  \******************************************************/
/*! exports provided: NavLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function() { return NavLeftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavLeftComponent = /** @class */ (function () {
    function NavLeftComponent(auth, router, token) {
        this.auth = auth;
        this.router = router;
        this.token = token;
        this.menuExpanded = true;
        this.classActive = false;
        this.isCollapsed = false;
    }
    NavLeftComponent.prototype.ngOnInit = function () { };
    NavLeftComponent.prototype.ngAfterViewInit = function () {
        // jQuery('#side-menu').metisMenu();
        jQuery("#side-menu").metisMenu({
            toggle: true // disable the auto collapse. Default: true.
        });
        jQuery("#side-menu ul li").click(function () {
            // remove active class
            //  jQuery('#side-menu li a').removeClass('active');
            //  // add active class
            //  jQuery(this).addClass('active');
            //   // remove active class
            //   jQuery('#side-menu li ul').removeClass('in');
            //   // add active class
            //   jQuery(this).addClass('in');
            // jQuery(this).parent().addClass('active').siblings().removeClass('active');
            // $('#side-menu').removeClass('in');
            // $(this).addClass("active");
            // $(this).closest('ul').addClass('in');
        });
    };
    NavLeftComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    NavLeftComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.auth.changeAuthStatus(false);
        this.router.navigateByUrl("landing/home");
        this.token.remove();
    };
    NavLeftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-nav-left",
            template: __webpack_require__(/*! ./nav-left.component.html */ "./src/app/admin/nav-left/nav-left.component.html"),
            styles: [__webpack_require__(/*! ./nav-left.component.css */ "./src/app/admin/nav-left/nav-left.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], NavLeftComponent);
    return NavLeftComponent;
}());



/***/ }),

/***/ "./src/app/admin/page-heading/page-heading.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/page-heading/page-heading.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2UtaGVhZGluZy9wYWdlLWhlYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/page-heading/page-heading.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/page-heading/page-heading.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>Contacts 2</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"index.html\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        App Views\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <strong>Contacts 2</strong>\n      </li>\n    </ol>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/page-heading/page-heading.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/page-heading/page-heading.component.ts ***!
  \**************************************************************/
/*! exports provided: PageHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeadingComponent", function() { return PageHeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeadingComponent = /** @class */ (function () {
    function PageHeadingComponent() {
    }
    PageHeadingComponent.prototype.ngOnInit = function () {
    };
    PageHeadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-heading',
            template: __webpack_require__(/*! ./page-heading.component.html */ "./src/app/admin/page-heading/page-heading.component.html"),
            styles: [__webpack_require__(/*! ./page-heading.component.css */ "./src/app/admin/page-heading/page-heading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeadingComponent);
    return PageHeadingComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/details-region/details-region.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/region/details-region/details-region.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZ2lvbi9kZXRhaWxzLXJlZ2lvbi9kZXRhaWxzLXJlZ2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/region/details-region/details-region.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/region/details-region/details-region.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading col-lg-12\">\n  <div class=\"col-lg-6\">\n    <h2>{{ region.id + ' ' + region.name }}</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a> country</a>\n      </li>\n    </ol>\n  </div>\n\n\n  <div class=\"col-lg-6\">\n    <div>\n      <div class=\"ibox-content\">\n        <div class=\"btn-group pull-right\">\n\n          <button (click)=\"retour()\" class=\"btn btn-dark \">Retour</button>\n          <!--<button class=\"btn btn-white\" (click)=\"viewPrevRegion()\">Precedent</button>-->\n          <!--<button class=\"btn btn-white\" (click)=\"viewNextRegion()\">suivant</button>-->\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div class=col-lg-8>\n\n  <div class=\"col-lg-12 \">\n    <div class=\"ibox \">\n      <div class=\"ibox-title \">\n        <h5>Situation actuelle</h5>\n        <div class=\"ibox-tools \">\n          <a class=\"collapse-link \">\n            <i class=\"fa fa-chevron-up \"></i>\n          </a>\n\n        </div>\n      </div>\n      <div class=\"ibox-content table-responsive \">\n        <table class=\"table table-hover no-margins \">\n          <thead>\n            <tr>\n              <th>Date</th>\n              <th>Grade</th>\n              <th>Échelle</th>\n              <th>Echelon</th>\n              <th>Groupe</th>\n              <th>IGR</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><small>02/01/2015</small></td>\n              <td><small>Cadre</small></td>\n              <td><i class=\"fa fa-clock-o \"></i> 11:20pm</td>\n              <td>Samantha</td>\n              <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 24% </td>\n              <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 24% </td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-12 \">\n    <div class=\"ibox \">\n      <div class=\"ibox-title \">\n        <h5>Indemnités</h5>\n        <div class=\"ibox-tools \">\n          <a class=\"collapse-link \">\n            <i class=\"fa fa-chevron-up \"></i>\n          </a>\n\n        </div>\n      </div>\n      <div class=\"ibox-content table-responsive \">\n        <div class=row>\n\n          <div class=col-lg-6>\n            <table class=\"table table-hover table-bordered no-margins \">\n              <thead>\n                <tr>\n                  <th>Déjeuner</th>\n                  <th>Diner</th>\n                  <th>Découcher</th>\n                  <th>Total</th>\n\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><small>75</small></td>\n                  <td><small>80</small></td>\n                  <td><small>80</small></td>\n\n                  <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 300 </td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n          <div class=col-lg-6>\n            <table class=\"table table-hover table-bordered no-margins \">\n              <thead>\n                <tr>\n                  <th>Heure de vol</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class=\"text-navy \"> 300 </td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- situation panel -->\n"

/***/ }),

/***/ "./src/app/admin/region/details-region/details-region.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/region/details-region/details-region.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailsRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRegionComponent", function() { return DetailsRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _region_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../region.model */ "./src/app/admin/region/region.model.ts");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../region.service */ "./src/app/admin/region/region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsRegionComponent = /** @class */ (function () {
    function DetailsRegionComponent(_regionService, _route, _router) {
        this._regionService = _regionService;
        this._route = _route;
        this._router = _router;
        this.region = new _region_model__WEBPACK_IMPORTED_MODULE_1__["Region"]();
    }
    DetailsRegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._id = +params.get('id');
            _this._regionService.getRegion(_this._id).subscribe(function (regionApi) {
                _this.region = regionApi.data;
            });
        }, function (error) { console.log(error); });
    };
    DetailsRegionComponent.prototype.retour = function () {
        this._router.navigate(['administrateur/regions', { id: this._id }], { queryParamsHandling: 'preserve' });
    };
    DetailsRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-region',
            template: __webpack_require__(/*! ./details-region.component.html */ "./src/app/admin/region/details-region/details-region.component.html"),
            styles: [__webpack_require__(/*! ./details-region.component.css */ "./src/app/admin/region/details-region/details-region.component.css")]
        }),
        __metadata("design:paramtypes", [_region_service__WEBPACK_IMPORTED_MODULE_2__["RegionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsRegionComponent);
    return DetailsRegionComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/display-region/display-region.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/region/display-region/display-region.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZ2lvbi9kaXNwbGF5LXJlZ2lvbi9kaXNwbGF5LXJlZ2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/region/display-region/display-region.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/region/display-region/display-region.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ibox [title]=\"region.name\" [hideFooter]=\"false\" [hideBody]=\"false\">\n\n  <div class=\"iBoxBody\">\n\n  </div>\n\n\n  <div class=\" iBoxFooter\">\n    <div class=\"m-t-xs btn-group\">\n      <button (click)=\"viewDetailsRegion()\" class=\"btn   btn-info\"><i class=\"fa fa-eye\"></i> details</button>\n      <button (click)=\"editRegion()\" class=\"btn btn-warning\"><i class=\"fa fa-wrench\"></i> Modifier</button>\n      <button (click)=\"deleteRegion()\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i> Supprimer</button>\n\n    </div>\n  </div>\n\n\n\n\n</app-ibox>\n"

/***/ }),

/***/ "./src/app/admin/region/display-region/display-region.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/region/display-region/display-region.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisplayRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayRegionComponent", function() { return DisplayRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_region_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/region.model */ "./src/app/models/region.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../region.service */ "./src/app/admin/region/region.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayRegionComponent = /** @class */ (function () {
    function DisplayRegionComponent(_router, _route, _regionService) {
        this._router = _router;
        this._route = _route;
        this._regionService = _regionService;
        this.notifyEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DisplayRegionComponent.prototype.ngOnInit = function () { };
    DisplayRegionComponent.prototype.viewDetailsRegion = function () {
        this._router.navigate([this.region.id], { relativeTo: this._route });
    };
    DisplayRegionComponent.prototype.editRegion = function () {
        this.notifyEdit.emit(this.region.id);
    };
    DisplayRegionComponent.prototype.deleteRegion = function () {
        this.notifyDelete.emit(this.region.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplayRegionComponent.prototype, "searchTerm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_region_model__WEBPACK_IMPORTED_MODULE_1__["Region"])
    ], DisplayRegionComponent.prototype, "region", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DisplayRegionComponent.prototype, "notifyEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DisplayRegionComponent.prototype, "notifyDelete", void 0);
    DisplayRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-display-region",
            template: __webpack_require__(/*! ./display-region.component.html */ "./src/app/admin/region/display-region/display-region.component.html"),
            styles: [__webpack_require__(/*! ./display-region.component.css */ "./src/app/admin/region/display-region/display-region.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"]])
    ], DisplayRegionComponent);
    return DisplayRegionComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/form-region/form-region.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/region/form-region/form-region.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZ2lvbi9mb3JtLXJlZ2lvbi9mb3JtLXJlZ2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/region/form-region/form-region.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/region/form-region/form-region.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header b-r-sm\" [ngClass]=\"{ 'bg-primary' : !edit, 'bg-warning' : edit }\">\n  <h3 class=\"modal-title pull-left\">{{title}}</h3>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #RegionForm=\"ngForm\">\n\n\n\n    <div class=\"form-group {{ errors.name ? 'has-error' : '' }} \">\n      <label for=\"name\">Nom</label>\n      <input id=\"name\" type=\"text\" class=\"form-control\"  name=\"name\" [(ngModel)]=\"region.name\">\n    </div>\n    <div class=\"alert alert-danger\" [hidden]=\"!errors.name\">\n      {{errors.name}}\n    </div>\n\n\n\n  </form>\n</div>\n<div class=\"modal-footer\">\n    <!--{{RegionForm.value| json}}-->\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Fermer</button>\n  <button type=\"button\" [disabled]=!RegionForm.valid class=\"btn\" [ngClass]=\"edit ? 'btn-warning' :  'btn-primary'\"\n          (click)=\"onConfirm()\">Sauvegarder</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/region/form-region/form-region.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/region/form-region/form-region.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegionComponent", function() { return FormRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormRegionComponent = /** @class */ (function () {
    function FormRegionComponent(_modalRef) {
        this._modalRef = _modalRef;
        this.errors = [];
    }
    FormRegionComponent.prototype.onCancel = function () {
        this._modalRef.hide();
    };
    FormRegionComponent.prototype.onConfirm = function () {
        this.onClose.next(this.region);
    };
    FormRegionComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    };
    FormRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-region',
            template: __webpack_require__(/*! ./form-region.component.html */ "./src/app/admin/region/form-region/form-region.component.html"),
            styles: [__webpack_require__(/*! ./form-region.component.css */ "./src/app/admin/region/form-region/form-region.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], FormRegionComponent);
    return FormRegionComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/region.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/region/region.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height : 600px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gIGhlaWdodCA6IDYwMHB4XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/region/region.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/region/region.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>Regions</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a #h1Variable></a>\n      </li>\n    </ol>\n  </div>\n</div> -->\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n  <!-- liste des regions -->\n  <div *ngIf=\"!showFormAddJson\" class=\"row\">\n    <div class=\"col-md-6\">\n\n\n\n    </div>\n    <div class=\"col-md-6\">\n\n      <!-- barre de recherche -->\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"ibox\">\n            <div class=\"ibox-content\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Recherche par Nom\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- fin barre de recherche -->\n\n      <div class=\"col-lg-12\" *ngFor=\"let region of filteredRegions\">\n        <app-display-region [region]=\"region\" [searchTerm]=\"searchTerm\" (notifyEdit)=\"onEditRegion($event)\"\n          (notifyDelete)=\"onDeleteRegion($event)\">\n\n        </app-display-region>\n\n      </div>\n\n\n      <div class=\"col-lg-12\">\n\n        <a (click)=creatRegion()>\n          <div class=\"widget lazur-bg p-lg text-center\">\n            <div class=\"m-b-md\">\n              <i class=\"fa fa-plus-circle fa-4x\"></i>\n              <h1 class=\"m-xs\">Nouvelle Region</h1>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"showFormAddJson\" class=\"row\">\n\n\n    <div class=\"col-lg-12\">\n      <div class=\"ibox\">\n        <div class=\"ibox-content\">\n          <form #geojsonFrom=\"ngForm\" (ngSubmit)=\"OnSubmit()\">\n\n            <div class=\"row\">\n              <div class=\"col-12\">\n\n                <div class=\"btn-group col-12\">\n                  <label title=\"Upload json file\" for=\"inputFile\" class=\"btn btn-default btn-block\">\n                    <input type=\"file\" id=\"inputFile\" class=\"hide pull-left\" (change)=\"handleFileInput($event.target.files ) \">\n                    Upload new Json/Geojson file\n                  </label>\n                </div>\n              </div>\n              <div class=\"col-12\">\n\n                <div *ngIf=\"errorFile != null\" class=\"alert alert-danger \">\n                  {{ errorFile}}\n                </div>\n              </div>\n              <div *ngIf=\"hideButtonSubmit\" class=\"col-12\">\n                <button type=\"submit\" title=\"Download image\" id=\"download\" class=\"btn btn-block btn-primary\">Download</button>\n              </div>\n            </div>\n\n\n\n\n\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-12\">\n      <app-africa-map [geojson]=\"geoJsonFile\"></app-africa-map>\n    </div>\n\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/region/region.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/region/region.component.ts ***!
  \**************************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region.service */ "./src/app/admin/region/region.service.ts");
/* harmony import */ var _region_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region.model */ "./src/app/admin/region/region.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _form_region_form_region_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-region/form-region.component */ "./src/app/admin/region/form-region/form-region.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegionComponent = /** @class */ (function () {
    function RegionComponent(_regionService, _modalService, _router, _route) {
        this._regionService = _regionService;
        this._modalService = _modalService;
        this._router = _router;
        this._route = _route;
        this.fileToUpload = null;
        this.region = new _region_model__WEBPACK_IMPORTED_MODULE_2__["Region"]();
        this.regions = [];
        this.errors = [];
        this.filteredRegions = [];
        this.showFormAddJson = true;
        this.changeFileFlag = '';
        this.math = Math;
        this.errorFile = null;
        this.hideButtonSubmit = false;
    }
    Object.defineProperty(RegionComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredRegions = this.filtreRegions(value);
        },
        enumerable: true,
        configurable: true
    });
    RegionComponent.prototype.ngOnInit = function () {
        this.getRegions();
    };
    RegionComponent.prototype.creatRegion = function () {
        this.openModalFormRegion(false);
    };
    RegionComponent.prototype.onEditRegion = function (id) {
        var _this = this;
        this._regionService.getRegion(id).subscribe(function (regionData) {
            // @ts-ignore
            _this.region = regionData.data;
            _this.openModalFormRegion(true);
        }, function (error) {
            _this.errors = error;
        });
    };
    RegionComponent.prototype.onDeleteRegion = function (id) {
        var _this = this;
        this._regionService.deleteRegion(id).subscribe(function (data) {
            _this.getRegions();
            var i = _this.filteredRegions.findIndex(function (e) { return e.id === id; });
            if (i !== -1) {
                _this.filteredRegions.splice(i, 1);
            }
        }, function (error) { return console.log(error); });
    };
    RegionComponent.prototype.openModalFormRegion = function (edit) {
        var _this = this;
        var initialState = {
            title: edit ? 'Edit Region' : 'New Region',
            region: edit ? this.region : new _region_model__WEBPACK_IMPORTED_MODULE_2__["Region"](),
            edit: edit,
            errors: this.errors,
        };
        this.bsModalRef = this._modalService.show(_form_region_form_region_component__WEBPACK_IMPORTED_MODULE_4__["FormRegionComponent"], { initialState: initialState });
        if (edit === false) {
            this.bsModalRef.content.onClose.subscribe(function (data) {
                _this._regionService.save(data)
                    .subscribe(function (regionApi) {
                    _this.getRegions();
                    _this.region = new _region_model__WEBPACK_IMPORTED_MODULE_2__["Region"]();
                    _this.errors = [];
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.bsModalRef.content.region = _this.region;
                    _this.bsModalRef.hide();
                }, function (error) {
                    _this.errors = error.error.errors;
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.errors = [];
                });
            });
        }
        else {
            this.bsModalRef.content.onClose.subscribe(function (data) { return _this._regionService.update(data)
                .subscribe(function (regionData) {
                _this.getRegions();
                _this.region = new _region_model__WEBPACK_IMPORTED_MODULE_2__["Region"]();
                _this.errors = [];
                _this.bsModalRef.content.errors = _this.errors;
                _this.bsModalRef.content.region = _this.region;
                _this.bsModalRef.hide();
            }, function (error) {
                _this.errors = error.error.errors;
                _this.bsModalRef.content.errors = _this.errors;
                _this.errors = [];
            }); });
        }
    };
    RegionComponent.prototype.getRegions = function () {
        var _this = this;
        return this._regionService.getRegions().subscribe(function (regionApi) {
            // @ts-ignore
            _this.regions = regionApi.data;
            if (_this.regions.length !== 0) {
                _this.showFormAddJson = true;
            }
            if (_this._route.snapshot.queryParamMap.has('searchTerm')) {
                _this.searchTerm = _this._route.snapshot.queryParamMap.get('searchTerm');
            }
            else if (_this.searchTerm) {
                _this.filteredRegions = _this.filtreRegions(_this.searchTerm);
            }
            else {
                _this.filteredRegions = _this.regions;
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegionComponent.prototype.filtreRegions = function (searchString) {
        if (searchString === null) {
            this.filteredRegions = this.regions;
        }
        else {
            return this.regions.filter(function (region) {
                return region.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
            });
        }
    };
    RegionComponent.prototype.OnSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('geojson', this.fileToUpload, this.fileToUpload.name);
        this._regionService.save(formData).subscribe(function (data) {
            console.log('data uploaded');
            _this.hideButtonSubmit = true;
        }, function (error) { console.log(error); });
    };
    RegionComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var extension = this.fileToUpload.name.split('.')[1].toLocaleLowerCase();
        if (extension === 'json' || extension === 'geojson') {
            var reader = new FileReader();
            reader.readAsText(this.fileToUpload);
            reader.onload = function (event) {
                _this.geoJsonFile = event.target.result;
                _this.geoJsonFile = JSON.parse(_this.geoJsonFile);
                _this.errorFile = null;
                _this.hideButtonSubmit = true;
            };
        }
        else {
            this.errorFile = 'File Uploaded not json/geojson';
            this.hideButtonSubmit = false;
        }
        // reader.readAsDataURL(this.fileToUpload);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('RegionForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], RegionComponent.prototype, "RegionForm", void 0);
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/admin/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.css */ "./src/app/admin/region/region.component.css")],
        }),
        __metadata("design:paramtypes", [_region_service__WEBPACK_IMPORTED_MODULE_1__["RegionService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], RegionComponent);
    return RegionComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/region.model.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/region/region.model.ts ***!
  \**********************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
var Region = /** @class */ (function () {
    function Region() {
        this.id = null;
        this.name = null;
    }
    return Region;
}());



/***/ }),

/***/ "./src/app/admin/region/region.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/region/region.service.ts ***!
  \************************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegionService = /** @class */ (function () {
    function RegionService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.baseUrl = this.url + '/regions/';
    }
    RegionService.prototype.getRegions = function () {
        return this._http
            .get(this.baseUrl)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.deleteRegion = function (id) {
        return this._http
            .delete(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.getRegion = function (id) {
        return this._http
            .get(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.errorHandler = function (error) {
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    RegionService.prototype.save = function (region) {
        return this._http
            .post(this.baseUrl, region)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.update = function (region) {
        return this._http
            .put(this.baseUrl + region.id, region)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegionService);
    return RegionService;
}());



/***/ }),

/***/ "./src/app/admin/tabs/tabs.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/tabs/tabs.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3RhYnMvdGFicy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/tabs/tabs.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/tabs/tabs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n\n  <div class=\"row\">\n\n\n    <div class=\"col-lg-8 offset-2\">\n      <div class=\"ibox-content\">\n        <div class=\"col-lg-12\">\n          <div class=\"tabs-container\">\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n              <li><a class=\"nav-link \" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab1')\"> POPULATION</a></li>\n              <li><a class=\"nav-link\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab2')\">HEALTH</a></li>\n            </ul>\n            <div class=\"tab-content\">\n              <div role=\"tabpanel\" id=\"tab1\" #tab1 class=\"tab-pane\" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"bg-warning   p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"someRadioId1\" name=\"someGroupName1\" checked />\n                          <label for=\"someRadioId1\">tab 1</label>\n                        </div>\n                      </div>\n\n                      <div class=\"bg-warning p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"someRadioId2\" name=\"someGroupName1\" />\n                          <label for=\"someRadioId2\">Percentage of women aged 20-24 who were married before age 18 or 15</label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n\n                </div>\n              </div>\n              <div role=\"tabpanel\" #tab2 id=\"tab2\" class=\"tab-pane\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"bg-info   p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"someRadioId1\" name=\"someGroupName5\" checked />\n                          <label for=\"someRadioId1\">tab 2</label>\n                        </div>\n                      </div>\n\n                      <div class=\"bg-info p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"someRadioId2\" name=\"someGroupName5\" />\n                          <label for=\"someRadioId2\">Percentage of women aged 20-24 who were married before age 18 or\n                            15</label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/tabs/tabs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/tabs/tabs.component.ts ***!
  \**********************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabHover = 'tab1';
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.onMouseOver = function (id) {
        this.tabHover = id;
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/admin/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/admin/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing-routing.module */ "./src/app/landing/landing-routing.module.ts");
/* harmony import */ var _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/page-not-found/page-not-found.component */ "./src/app/error/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/landing/home', pathMatch: 'full' },
    { path: '**', component: _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _landing_landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"],
                _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'UCLG';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.helpers.ts":
/*!********************************!*\
  !*** ./src/app/app.helpers.ts ***!
  \********************************/
/*! exports provided: correctHeight, detectBody, smoothlyMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctHeight", function() { return correctHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectBody", function() { return detectBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothlyMenu", function() { return smoothlyMenu; });
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/hide
 *
 */
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeight = jQuery('nav.navbar-default').height();
    var wrapperHeigh = pageWrapper.height();
    if (navbarHeight > wrapperHeigh) {
        pageWrapper.css('min-height', navbarHeight + 'px');
    }
    if (navbarHeight < wrapperHeigh) {
        if (navbarHeight < jQuery(window).height()) {
            pageWrapper.css('min-height', jQuery(window).height() + 'px');
        }
        else {
            pageWrapper.css('min-height', navbarHeight + 'px');
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeigh) {
            pageWrapper.css('min-height', navbarHeight + 'px');
        }
        else {
            pageWrapper.css('min-height', jQuery(window).height() - 60 + 'px');
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.module */ "./src/app/landing/landing.module.ts");
/* harmony import */ var _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/page-not-found/page-not-found.component */ "./src/app/error/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _maps_maps_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maps/maps.module */ "./src/app/maps/maps.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _landing_landing_module__WEBPACK_IMPORTED_MODULE_6__["LandingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__["AdminModule"],
                _maps_maps_module__WEBPACK_IMPORTED_MODULE_9__["MapsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-reset/request-reset.component */ "./src/app/auth/request-reset/request-reset.component.ts");
/* harmony import */ var _response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response-reset/response-reset.component */ "./src/app/auth/response-reset/response-reset.component.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/before-login.service */ "./src/app/services/before-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_6__["BeforeLoginService"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_6__["BeforeLoginService"]] },
    { path: 'request-password-reset', component: _request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_4__["RequestResetComponent"] },
    { path: 'response-password-reset', component: _response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResponseResetComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/before-login.service */ "./src/app/services/before-login.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request-reset/request-reset.component */ "./src/app/auth/request-reset/request-reset.component.ts");
/* harmony import */ var _response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./response-reset/response-reset.component */ "./src/app/auth/response-reset/response-reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_10__["RequestResetComponent"],
                _response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_11__["ResponseResetComponent"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"],
                _services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"],
                _services_before_login_service__WEBPACK_IMPORTED_MODULE_8__["BeforeLoginService"],
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=row>\n  <br>\n  <br>\n  <br>\n\n  <!-- <div class=\"container\">\n      <a routerLink=\"/landing/home\"><img height=\"66\" width=\"275\" src=\"assets/img/logo-ucgl.png\" alt=\"UCLGA\" class=\"img-fluid rounded mx-auto d-block\"></a>\n  </div> -->\n  <div class=\"col-lg-12 text-center\">\n\n    <a (click)=goToLanding()>\n      <!-- <h1 class=\"logo-name\">UCLG AFRICA</h1> -->\n      <img style=\"padding-right: 15px\" src=\"assets/img/logo-ucgl.png\" alt=\"ucgl\">\n    </a>\n  </div>\n\n\n</div>\n\n<div class=\"middle-box text-center loginscreen animated fadeInDown\">\n  <div>\n\n    <h3>Welcome to UCLG AFRICA</h3>\n\n\n\n    <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\" class=\"m-t\" role=\"form\">\n      <div class=\"alert alert-danger\" [hidden]=\"!error\">\n        {{ errors }}\n      </div>\n\n\n      <div class=\"form-group\">\n        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"form.email\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\"   name=\"password\" [(ngModel)]=\"form.password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" [disabled]=\"!loginForm.valid\">Login</button>\n\n      <a routerLink=\"/request-password-reset\"><small>Forgot password?</small></a>\n      <p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\n      <a class=\"btn btn-sm btn-white btn-block\" routerLink=\"/signup\">Create an account</a>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, token, router) {
        this.auth = auth;
        this.token = token;
        this.router = router;
        this.form = {
            email: null,
            password: null
        };
        this.errors = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handelError(error); });
    };
    LoginComponent.prototype.handleResponse = function (data) {
        this.token.handle(data.access_token);
        this.auth.changeAuthStatus(true);
        this.router.navigateByUrl('/administrateur');
    };
    LoginComponent.prototype.handelError = function (error) {
        this.errors = error.error.error;
    };
    LoginComponent.prototype.goToLanding = function () {
        this.router.navigate(['landing/home']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/request-reset/request-reset.component.css":
/*!****************************************************************!*\
  !*** ./src/app/auth/request-reset/request-reset.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVxdWVzdC1yZXNldC9yZXF1ZXN0LXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/request-reset/request-reset.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/auth/request-reset/request-reset.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"passwordBox animated fadeInDown\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <div class=\"ibox-content\">\n\n        <h2 class=\"font-bold\">Forgot password</h2>\n\n        <p>\n          Enter your email address and your password will be reset and emailed to you.\n        </p>\n\n        <div class=\"row\">\n\n          <div class=\"col-lg-12\">\n            <form #resetPasswordForm=ngForm (ngSubmit)=\"onSubmit()\" class=\"m-t\" role=\"form\">\n              <div class=\"form-group\">\n                <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" required=\"\"\n                  [(ngModel)]=\"form.email\">\n              </div>\n              <div class=\"alert alert-danger\" [hidden]=\"!errors.email\">\n                {{ errors.email }}\n              </div>\n              <div class=\"alert alert-danger\" [hidden]=\"!error\">\n                {{ error }}\n              </div>\n              <button [disabled]=\"!resetPasswordForm.valid\" type=\"submit\" class=\"btn btn-primary block full-width m-b\">Send\n                new password</button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr />\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      Copyright Example Company\n    </div>\n    <div class=\"col-md-6 text-right\">\n      <small>© 2014-2015</small>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/request-reset/request-reset.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/request-reset/request-reset.component.ts ***!
  \***************************************************************/
/*! exports provided: RequestResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function() { return RequestResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestResetComponent = /** @class */ (function () {
    function RequestResetComponent(auth) {
        this.auth = auth;
        this.form = {
            email: null
        };
        this.errors = [];
        this.error = null;
    }
    RequestResetComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    RequestResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.sendPasswordResetLink(this.form).subscribe(function (data) {
            _this.errors = [];
            _this.handleResponse(data);
        }, function (error) { return _this.handelError(error); });
    };
    RequestResetComponent.prototype.handleResponse = function (data) {
        this.form.email = null;
    };
    RequestResetComponent.prototype.handelError = function (error) {
        if (error.error.errors) {
            this.error = null;
            this.errors = error.error.errors;
        }
        else {
            this.errors = [];
            this.error = error.error.error;
            console.log(error.error.error);
        }
    };
    RequestResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-reset',
            template: __webpack_require__(/*! ./request-reset.component.html */ "./src/app/auth/request-reset/request-reset.component.html"),
            styles: [__webpack_require__(/*! ./request-reset.component.css */ "./src/app/auth/request-reset/request-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RequestResetComponent);
    return RequestResetComponent;
}());



/***/ }),

/***/ "./src/app/auth/response-reset/response-reset.component.css":
/*!******************************************************************!*\
  !*** ./src/app/auth/response-reset/response-reset.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzcG9uc2UtcmVzZXQvcmVzcG9uc2UtcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/response-reset/response-reset.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/auth/response-reset/response-reset.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen   animated fadeInDown\">\n  <div>\n    <div>\n\n      <h1 class=\"logo-name\">IN+</h1>\n\n    </div>\n    <h3>Reset Password</h3>\n    <p>Create account to see it in action.</p>\n    <form #resetPasswordForm=ngForm (ngSubmit)=\"onSubmit()\" class=\"m-t\" role=\"form\">\n\n\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required name=\"email\" [(ngModel)]=\"form.email\">\n       <span class=\"text-danger\" [hidden]=\"!error.email\">{{ error.email}}</span>\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" name=\"password\" required=\"\" [(ngModel)]=\"form.password\">\n        <span class=\"text-danger\" [hidden]=\"!error.password\">{{ error.password}}</span>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"password_confirmation\" required=\"\" [(ngModel)]=\"form.password_confirmation\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" [disabled]=\"!resetPasswordForm.valid\">Reset Password</button>\n\n\n    </form>\n    <p class=\"m-t\">\n      <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/response-reset/response-reset.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/response-reset/response-reset.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResponseResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseResetComponent", function() { return ResponseResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponseResetComponent = /** @class */ (function () {
    function ResponseResetComponent(route, auth, router) {
        var _this = this;
        this.route = route;
        this.auth = auth;
        this.router = router;
        this.form = {
            email: null,
            password: null,
            password_confirmation: null,
            resetToken: null
        };
        this.error = [];
        route.queryParams.subscribe(function (params) {
            _this.form.resetToken = params['token'];
        });
    }
    ResponseResetComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    ResponseResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.changePassword(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handelError(error); });
    };
    ResponseResetComponent.prototype.handleResponse = function (data) {
        this.router.navigateByUrl('/login');
    };
    ResponseResetComponent.prototype.handelError = function (error) {
        this.error = error.error.errors;
    };
    ResponseResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-response-reset',
            template: __webpack_require__(/*! ./response-reset.component.html */ "./src/app/auth/response-reset/response-reset.component.html"),
            styles: [__webpack_require__(/*! ./response-reset.component.css */ "./src/app/auth/response-reset/response-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResponseResetComponent);
    return ResponseResetComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=row>\n    <br>\n    <br>\n    <div class=\"col-lg-12 text-center\">\n\n        <a (click)=goToLanding()>\n            <!-- <h1 class=\"logo-name\">UCLG AFRICA</h1> -->\n            <img style=\"padding-right: 15px\" src=\"assets/img/logo-ucgl.png\" alt=\"ucgl\">\n        </a>\n    </div>\n</div>\n\n<div class=\"middle-box text-center loginscreen   animated fadeInDown\">\n    <div>\n        <h3>Register to UCLG</h3>\n        <p>Create account to see it in action.</p>\n        <form #registerForm=ngForm (ngSubmit)=\"onSubmit()\" class=\"m-t\" role=\"form\">\n\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" autocomplete=Off placeholder=\"Name\" required=\"\" name=\"name\"\n                    [(ngModel)]=\"form.name\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.name\">\n                {{errors.name}}\n            </div>\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" autocomplete=Off placeholder=\"Email\" required=\"\" name=\"email\"\n                    [(ngModel)]=\"form.email\">\n\n            </div>\n\n\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.email\">\n                {{errors.email}}\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" autocomplete=Off placeholder=\"Password\" name=\"password\"\n                    required=\"\" [(ngModel)]=\"form.password\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.password\">\n                {{errors.password}}\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" autocomplete=Off placeholder=\"Confirm Password\" name=\"password_confirmation\"\n                    required=\"\" [(ngModel)]=\"form.password_confirmation\">\n            </div>\n            <!--<div class=\"form-group\">-->\n            <!--<div class=\"checkbox i-checks\"><label> <input type=\"checkbox\"><i></i> Agree the terms and policy </label></div>-->\n            <!--</div>-->\n            <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" [disabled]=\"!registerForm.valid\">Register</button>\n\n            <p class=\"text-muted text-center\">\n                <small>Already have an account?</small>\n            </p>\n            <a class=\"btn btn-sm btn-white btn-block\" routerLink=\"/login\">Login</a>\n        </form>\n        <p class=\"m-t\">\n\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, token, router) {
        this.auth = auth;
        this.token = token;
        this.router = router;
        this.form = {
            email: null,
            name: null,
            password: null,
            password_confirmation: null
        };
        this.errors = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.signup(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handelError(error); });
    };
    SignupComponent.prototype.handelError = function (error) {
        this.errors = error.error.errors;
    };
    SignupComponent.prototype.goToLanding = function () {
        this.router.navigate(['landing/home']);
    };
    SignupComponent.prototype.handleResponse = function (data) {
        this.token.handle(data.access_token);
        this.router.navigateByUrl('/administrateur');
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/derectives/easy-pie.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/derectives/easy-pie.directive.ts ***!
  \**************************************************/
/*! exports provided: EasyPieDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyPieDirective", function() { return EasyPieDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasyPieDirective = /** @class */ (function () {
    function EasyPieDirective(el) {
        this.el = el;
    }
    EasyPieDirective.prototype.ngOnChanges = function (changes) {
        this.doChecking();
    };
    EasyPieDirective.prototype.ngOnInit = function () {
        this.doChecking();
    };
    EasyPieDirective.prototype.doChecking = function () {
        if (this.options) {
            this.createPiewithOptions(this.options);
        }
        else {
            this.createPie("#eee", "#ccc", "#2196F3", 4, "butt", 148);
        }
    };
    EasyPieDirective.prototype.createPie = function (trackColor, scaleColor, barColor, lineWidth, lineCap, size) {
        $(this.el.nativeElement).easyPieChart({
            trackColor: trackColor,
            scaleColor: scaleColor,
            barColor: barColor,
            lineWidth: lineWidth,
            lineCap: lineCap,
            size: size
        });
    };
    EasyPieDirective.prototype.createPiewithOptions = function (options) {
        $(this.el.nativeElement).easyPieChart({
            trackColor: options.trackColor,
            scaleColor: options.scaleColor,
            barColor: options.barColor,
            lineWidth: options.lineWidth,
            lineCap: options.lineCap,
            size: options.size
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EasyPieDirective.prototype, "easypieUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EasyPieDirective.prototype, "options", void 0);
    EasyPieDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[easypie]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], EasyPieDirective);
    return EasyPieDirective;
}());



/***/ }),

/***/ "./src/app/error/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/error/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/error/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"middle-box text-center animated fadeInDown\">\n  <h1>404</h1>\n  <h3 class=\"font-bold\">Page Not Found</h3>\n\n  <div class=\"error-desc\">\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.\n    <form class=\"form-inline m-t\" role=\"form\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search for page\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/error/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/error/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/error/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/error/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/landing/comments-section/comments-section.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/landing/comments-section/comments-section.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvY29tbWVudHMtc2VjdGlvbi9jb21tZW50cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/comments-section/comments-section.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/landing/comments-section/comments-section.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"comments gray-section\" style=\"margin-top: 0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>What our partners say</h1>\n        <p>Donec sed odio dui. Etiam porta sem malesuada. </p>\n      </div>\n    </div>\n    <div class=\"row features-block\">\n      <div class=\"col-lg-4\">\n        <div class=\"bubble\">\n          \"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes\n          on purpose (injected humour and the like).\"\n        </div>\n        <div class=\"comments-avatar\">\n          <a href=\"\" class=\"float-left\">\n            <img alt=\"image\" src=\"assets/img/landing/avatar9.jpg\">\n          </a>\n          <div class=\"media-body\">\n            <div class=\"commens-name\">\n              Andrew Williams\n            </div>\n            <small class=\"text-muted\">Company X from California</small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"bubble\">\n          \"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes\n          on purpose (injected humour and the like).\"\n        </div>\n        <div class=\"comments-avatar\">\n          <a href=\"\" class=\"float-left\">\n            <img alt=\"image\" src=\"assets/img/landing/avatar1.jpg\">\n          </a>\n          <div class=\"media-body\">\n            <div class=\"commens-name\">\n              Andrew Williams\n            </div>\n            <small class=\"text-muted\">Company X from California</small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"bubble\">\n          \"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes\n          on purpose (injected humour and the like).\"\n        </div>\n        <div class=\"comments-avatar\">\n          <a href=\"\" class=\"float-left\">\n            <img alt=\"image\" src=\"assets/img/landing/avatar2.jpg\">\n          </a>\n          <div class=\"media-body\">\n            <div class=\"commens-name\">\n              Andrew Williams\n            </div>\n            <small class=\"text-muted\">Company X from California</small>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/landing/comments-section/comments-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/landing/comments-section/comments-section.component.ts ***!
  \************************************************************************/
/*! exports provided: CommentsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsSectionComponent", function() { return CommentsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsSectionComponent = /** @class */ (function () {
    function CommentsSectionComponent() {
    }
    CommentsSectionComponent.prototype.ngOnInit = function () {
    };
    CommentsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments-section',
            template: __webpack_require__(/*! ./comments-section.component.html */ "./src/app/landing/comments-section/comments-section.component.html"),
            styles: [__webpack_require__(/*! ./comments-section.component.css */ "./src/app/landing/comments-section/comments-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsSectionComponent);
    return CommentsSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/contact-section/contact-section.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/landing/contact-section/contact-section.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvY29udGFjdC1zZWN0aW9uL2NvbnRhY3Qtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/contact-section/contact-section.component.html":
/*!************************************************************************!*\
  !*** ./src/app/landing/contact-section/contact-section.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"gray-section contact\">\n  <div class=\"container\">\n    <div class=\"row m-b-lg\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>Contact Us</h1>\n        <p>The umbrella organization for African local governments, was founded in 2005 in the City of Tshwane, South\n          Africa as a result of the unification of three continental groups of local governments, namely the African\n          Union of Local Authorities (AULA); the Union des Villes Africaines (UVA); and the Africa Chapter of the Unao\n          dos Ciudades y Capitaes Lusofono Africana, (UCCL AFRICA).</p>\n      </div>\n    </div>\n    <div class=\"row m-b-lg justify-content-center\">\n      <div class=\"col-lg-3\">\n        <img height=\"70\" width=\"260\" src=\"assets/img/logo-ucgl.png\" alt=\"UCLGA\" class=\"img-fluid\">\n      </div>\n\n      <div class=\"col-lg-3 \">\n        <address>\n          <strong><span class=\"navy\">OUR LOCATION\n\n              .</span></strong><br /> 22 ESSAADYINE STREET,<br /> HASSAN, RABAT<br />KINGDOM OF MOROCCO\n          <abbr title=\"Phone\">P:</abbr> (123) 456-7890\n        </address>\n      </div>\n      <!-- <div class=\"col-lg-4\">\n        <p class=\"text-color\">\n          Consectetur adipisicing elit. Aut eaque, totam corporis laboriosam veritatis quis ad perspiciatis, totam corporis laboriosam\n          veritatis, consectetur adipisicing elit quos non quis ad perspiciatis, totam corporis ea,\n        </p>\n      </div> -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6  text-center\">\n        <div class=\"boxed-grey\">\n          <form id=\"contact-form\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"name\"> Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\" required=\"required\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"email\"> Email Address</label>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span> </span>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" required=\"required\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"subject\"> Subject</label>\n                  <select id=\"subject\" name=\"subject\" class=\"form-control\" required=\"required\">\n                    <option value=\"\">Choose One:</option>\n                    <option value=\"service\">General Customer Service</option>\n                    <option value=\"suggestions\">Suggestions</option>\n                    <option value=\"product\">Product Support</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"name\"> Message</label>\n                  <textarea name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\"\n                    placeholder=\"Message\"></textarea>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <button type=\"submit\" class=\"btn btn-skin pull-right\" id=\"btnContactUs\">\n                  Send Message\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n        <!-- <a href=\"info@uclga.org\" class=\"btn btn-primary\">Send us mail</a> -->\n      </div>\n      <div class=\"col-lg-6 text-center\">\n        <br>\n        <br>\n        <br>\n        <br>\n\n        <p class=\"m-t-sm\">\n          follow us on social platform\n        </p>\n        <ul class=\"list-inline social-icon\">\n          <li class=\"list-inline-item\"><a href=\"https://www.twitter.com/UCLGAfrica\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n          </li>\n          <li class=\"list-inline-item\"><a href=\"https://www.facebook.com/CGLUAfrique\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li class=\"list-inline-item\"><a href=\"http://www.linkedin.com/company/cglu-afrique?trk=top_nav_home\" target=\"_blank\"><i\n                class=\"fa fa-linkedin\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center m-t-lg m-b-lg\">\n        <p><strong>&copy; Copyright © 2018 UCLG Africa</strong><br />\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing/contact-section/contact-section.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/landing/contact-section/contact-section.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSectionComponent", function() { return ContactSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactSectionComponent = /** @class */ (function () {
    function ContactSectionComponent() {
    }
    ContactSectionComponent.prototype.ngOnInit = function () {
    };
    ContactSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-section',
            template: __webpack_require__(/*! ./contact-section.component.html */ "./src/app/landing/contact-section/contact-section.component.html"),
            styles: [__webpack_require__(/*! ./contact-section.component.css */ "./src/app/landing/contact-section/contact-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactSectionComponent);
    return ContactSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/directory/directory.component.css":
/*!***********************************************************!*\
  !*** ./src/app/landing/directory/directory.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvZGlyZWN0b3J5L2RpcmVjdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/directory/directory.component.html":
/*!************************************************************!*\
  !*** ./src/app/landing/directory/directory.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n  </div>\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-lg-9\">\r\n      <h2>Directory</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\">\r\n          <a routerLink=\"/landing/home\">Home</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n          <a #h1Variable></a>\r\n        </li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-navsearch></app-navsearch>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n\r\n      <app-navfilter></app-navfilter>\r\n\r\n    </div>\r\n    <div class=\"col-md-8\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/directory/directory.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/landing/directory/directory.component.ts ***!
  \**********************************************************/
/*! exports provided: DirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryComponent", function() { return DirectoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectoryComponent = /** @class */ (function () {
    function DirectoryComponent(http) {
        this.http = http;
    }
    DirectoryComponent.prototype.ngOnInit = function () {
    };
    DirectoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-directory',
            template: __webpack_require__(/*! ./directory.component.html */ "./src/app/landing/directory/directory.component.html"),
            styles: [__webpack_require__(/*! ./directory.component.css */ "./src/app/landing/directory/directory.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DirectoryComponent);
    return DirectoryComponent;
}());



/***/ }),

/***/ "./src/app/landing/directory/navfilter/navfilter.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/landing/directory/navfilter/navfilter.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvZGlyZWN0b3J5L25hdmZpbHRlci9uYXZmaWx0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/directory/navfilter/navfilter.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing/directory/navfilter/navfilter.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-page-filters\" class=\"col-xs-3 border-primary\">\r\n  <div class=\"filter-title mb-2\">\r\n    Refine your search: <a href=\"/search\" class=\"filter-clear pull-right\">Clear all</a>\r\n  </div>\r\n\r\n  <!-- Personnes -->\r\n  <div class=\"\">\r\n    <div class=\"bg-primary p-xs b-r-xl mb-2\"> Persons: <i class=\"pull-right glyphicon glyphicon-minus\"></i>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <ul class=\"\">\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Type </label>\r\n            <div class=\"col-md-8\">\r\n\r\n              <select class=\"select2_demo_3 form-control select2-hidden-accessible b-r-md\" tabindex=\"-1\"\r\n                      aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Bahamas</option>\r\n                <option value=\"Bahrain\">Bahrain</option>\r\n                <option value=\"Bangladesh\">Bangladesh</option>\r\n                <option value=\"Barbados\">Barbados</option>\r\n                <option value=\"Belarus\">Belarus</option>\r\n                <option value=\"Belgium\">Belgium</option>\r\n                <option value=\"Belize\">Belize</option>\r\n                <option value=\"Benin\">Benin</option>\r\n              </select>\r\n              <span class=\" select2-container\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label \">Institution d'appartenance</label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm b-r-md\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Age </label>\r\n            <div class=\"form-group col-md-8\" id=\"data_1\">\r\n              <div class=\"input-group date\">\r\n                <span class=\"input-group-addon b-r-md\"><i class=\"fa fa-calendar\"></i></span><input type=\"text\"\r\n                                                                                            class=\"form-control\"\r\n                                                                                            value=\"03/04/2014\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Statut </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm b-r-md\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">pays </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <select class=\" form-control select2-hidden-accessible b-r-md\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Maroc</option>\r\n                <option value=\"Bahrain\">algerie</option>\r\n                <option value=\"Bangladesh\">mali</option>\r\n                <option value=\"Barbados\">egypt</option>\r\n                <option value=\"Belarus\">tunisia</option>\r\n                <option value=\"Belgium\">togo</option>\r\n                <option value=\"Belize\">soumal</option>\r\n                <option value=\"Benin\">Benin</option>\r\n              </select>\r\n              <span class=\"select2 select2-container select2-container--default select2-container--below\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span></div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">ville </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm b-r-md\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label  class=\"col-sm-4 col-form-label\"> Africa Region </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <select class=\" form-control select2-hidden-accessible b-r-md\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Nord</option>\r\n                <option value=\"Bahrain\">Sud</option>\r\n                <option value=\"Bangladesh\">EST</option>\r\n                <option value=\"Barbados\">WEST</option>\r\n                <option value=\"Belarus\">Middel</option>\r\n              </select>\r\n              <span class=\"select2 select2-container select2-container--default select2-container--below\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- fin personnes -->\r\n\r\n\r\n  <!-- Institution -->\r\n  <div class=\"filter-category\">\r\n    <div class=\"bg-primary p-xs b-r-xl mb-2\"> Institution: <i class=\"pull-right glyphicon glyphicon-minus\"></i></div>\r\n    <div class=\"categ-content\">\r\n      <div class=\"categ-list show-always\">\r\n        <ul class=\"categ-items\">\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Category </label>\r\n            <div class=\"col-md-8\">\r\n\r\n              <select class=\"select2_demo_3 form-control select2-hidden-accessible\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Ministère</option>\r\n                <option value=\"Bahrain\">Collectivités</option>\r\n                <option value=\"Bangladesh\">Commune</option>\r\n                <option value=\"Barbados\">Region</option>\r\n                <option value=\"Belarus\">Province</option>\r\n\r\n              </select>\r\n              <span class=\"select2 select2-container select2-container--default select2-container--below\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"select2-dgom-container\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <label  class=\"col-sm-4 col-form-label\">Type </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label  class=\"col-sm-4 col-form-label\">pays </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <select class=\"select2_demo_3 form-control select2-hidden-accessible\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Maroc</option>\r\n                <option value=\"Bahrain\">algerie</option>\r\n                <option value=\"Bangladesh\">mali</option>\r\n                <option value=\"Barbados\">egypt</option>\r\n                <option value=\"Belarus\">tunisia</option>\r\n                <option value=\"Belgium\">togo</option>\r\n                <option value=\"Belize\">soumal</option>\r\n                <option value=\"Benin\">Benin</option>\r\n              </select>\r\n              <span class=\"select2 select2-container select2-container--default select2-container--below\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"select2-dgom-container\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span></div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">ville </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\"> Africa Region </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <select class=\"select2_demo_3 form-control select2-hidden-accessible\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Nord</option>\r\n                <option value=\"Bahrain\">Sud</option>\r\n                <option value=\"Bangladesh\">EST</option>\r\n                <option value=\"Barbados\">WEST</option>\r\n                <option value=\"Belarus\">Middel</option>\r\n              </select>\r\n              <span class=\"select2 select2-container select2-container--default select2-container--below\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"select2-dgom-container\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- fin institution -->\r\n\r\n\r\n  <!-- Collectivités locales -->\r\n  <div class=\"filter-category\">\r\n    <div class=\"bg-primary p-xs b-r-xl mb-2\"> Local Governments: <i class=\"pull-right glyphicon glyphicon-minus\"></i></div>\r\n\r\n\r\n    <div class=\"categ-content\">\r\n      <div class=\"categ-list show-always\">\r\n        <ul class=\"categ-items\">\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Category </label>\r\n            <div class=\"col-md-8\">\r\n\r\n              <select class=\"select2_demo_3 form-control select2-hidden-accessible\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Ministère</option>\r\n                <option value=\"Bahrain\">Collectivités</option>\r\n                <option value=\"Bangladesh\">Commune</option>\r\n                <option value=\"Barbados\">Region</option>\r\n                <option value=\"Belarus\">Province</option>\r\n\r\n              </select>\r\n              <span class=\"select2 select2-container select2-container--default select2-container--below\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"select2-dgom-container\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Type </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">N of Membres </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">N of Female Membres </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Surface </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label  class=\"col-sm-4 col-form-label\">pays </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <select class=\"select2_demo_3 form-control select2-hidden-accessible\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Maroc</option>\r\n                <option value=\"Bahrain\">algerie</option>\r\n                <option value=\"Bangladesh\">mali</option>\r\n                <option value=\"Barbados\">egypt</option>\r\n                <option value=\"Belarus\">tunisia</option>\r\n                <option value=\"Belgium\">togo</option>\r\n                <option value=\"Belize\">soumal</option>\r\n                <option value=\"Benin\">Benin</option>\r\n              </select>\r\n              <span class=\"select2 select2-container select2-container--default select2-container--below\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"select2-dgom-container\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span></div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">ville </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\"> Africa Region </label>\r\n            <div class=\"col-sm-8 justify-content-end\">\r\n              <select class=\"select2_demo_3 form-control select2-hidden-accessible\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option></option>\r\n                <option value=\"Bahamas\">Nord</option>\r\n                <option value=\"Bahrain\">Sud</option>\r\n                <option value=\"Bangladesh\">EST</option>\r\n                <option value=\"Barbados\">WEST</option>\r\n                <option value=\"Belarus\">Middel</option>\r\n              </select>\r\n              <span class=\"select2 select2-container select2-container--default select2-container--below\" dir=\"ltr\"\r\n                    style=\"width: 509.656px;\">\r\n                <span class=\"selection\">\r\n                  <span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-autocomplete=\"list\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                        aria-labelledby=\"select2-dgom-container\">\r\n                    <span class=\"select2-selection__rendered\" id=\"\">\r\n                    </span>\r\n                    <span class=\"select2-selection__arrow\" role=\"presentation\">\r\n                      <b role=\"presentation\"></b>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n                <span class=\"dropdown-wrapper\" aria-hidden=\"true\">\r\n                </span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- fin Collectivités -->\r\n\r\n\r\n</div>\r\n\r\n\r\n<script>\r\n  // Config box\r\n\r\n  // Enable/disable fixed top navbar\r\n  $('#fixednavbar').click(function () {\r\n    if ($('#fixednavbar').is(':checked')) {\r\n      $(\".navbar-static-top\").removeClass('navbar-static-top').addClass('navbar-fixed-top');\r\n      $(\"body\").removeClass('boxed-layout');\r\n      $(\"body\").addClass('fixed-nav');\r\n      $('#boxedlayout').prop('checked', false);\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"boxedlayout\", 'off');\r\n      }\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixednavbar\", 'on');\r\n      }\r\n    } else {\r\n      $(\".navbar-fixed-top\").removeClass('navbar-fixed-top').addClass('navbar-static-top');\r\n      $(\"body\").removeClass('fixed-nav');\r\n      $(\"body\").removeClass('fixed-nav-basic');\r\n      $('#fixednavbar2').prop('checked', false);\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixednavbar\", 'off');\r\n      }\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixednavbar2\", 'off');\r\n      }\r\n    }\r\n  });\r\n\r\n  // Enable/disable fixed top navbar\r\n  $('#fixednavbar2').click(function () {\r\n    if ($('#fixednavbar2').is(':checked')) {\r\n      $(\".navbar-static-top\").removeClass('navbar-static-top').addClass('navbar-fixed-top');\r\n      $(\"body\").removeClass('boxed-layout');\r\n      $(\"body\").addClass('fixed-nav').addClass('fixed-nav-basic');\r\n      $('#boxedlayout').prop('checked', false);\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"boxedlayout\", 'off');\r\n      }\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixednavbar2\", 'on');\r\n      }\r\n    } else {\r\n      $(\".navbar-fixed-top\").removeClass('navbar-fixed-top').addClass('navbar-static-top');\r\n      $(\"body\").removeClass('fixed-nav').removeClass('fixed-nav-basic');\r\n      $('#fixednavbar').prop('checked', false);\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixednavbar2\", 'off');\r\n      }\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixednavbar\", 'off');\r\n      }\r\n    }\r\n  });\r\n\r\n  // Enable/disable fixed sidebar\r\n  $('#fixedsidebar').click(function () {\r\n    if ($('#fixedsidebar').is(':checked')) {\r\n      $(\"body\").addClass('fixed-sidebar');\r\n      $('.sidebar-collapse').slimScroll({\r\n        height: '100%',\r\n        railOpacity: 0.9\r\n      });\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixedsidebar\", 'on');\r\n      }\r\n    } else {\r\n      $('.sidebar-collapse').slimscroll({\r\n        destroy: true\r\n      });\r\n      $('.sidebar-collapse').attr('style', '');\r\n      $(\"body\").removeClass('fixed-sidebar');\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixedsidebar\", 'off');\r\n      }\r\n    }\r\n  });\r\n\r\n  // Enable/disable collapse menu\r\n  $('#collapsemenu').click(function () {\r\n    if ($('#collapsemenu').is(':checked')) {\r\n      $(\"body\").addClass('mini-navbar');\r\n      SmoothlyMenu();\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"collapse_menu\", 'on');\r\n      }\r\n\r\n    } else {\r\n      $(\"body\").removeClass('mini-navbar');\r\n      SmoothlyMenu();\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"collapse_menu\", 'off');\r\n      }\r\n    }\r\n  });\r\n\r\n  // Enable/disable boxed layout\r\n  $('#boxedlayout').click(function () {\r\n    if ($('#boxedlayout').is(':checked')) {\r\n      $(\"body\").addClass('boxed-layout');\r\n      $('#fixednavbar').prop('checked', false);\r\n      $('#fixednavbar2').prop('checked', false);\r\n      $(\".navbar-fixed-top\").removeClass('navbar-fixed-top').addClass('navbar-static-top');\r\n      $(\"body\").removeClass('fixed-nav');\r\n      $(\"body\").removeClass('fixed-nav-basic');\r\n      $(\".footer\").removeClass('fixed');\r\n      $('#fixedfooter').prop('checked', false);\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixednavbar\", 'off');\r\n      }\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixednavbar2\", 'off');\r\n      }\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixedfooter\", 'off');\r\n      }\r\n\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"boxedlayout\", 'on');\r\n      }\r\n    } else {\r\n      $(\"body\").removeClass('boxed-layout');\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"boxedlayout\", 'off');\r\n      }\r\n    }\r\n  });\r\n\r\n  // Enable/disable fixed footer\r\n  $('#fixedfooter').click(function () {\r\n    if ($('#fixedfooter').is(':checked')) {\r\n      $('#boxedlayout').prop('checked', false);\r\n      $(\"body\").removeClass('boxed-layout');\r\n      $(\".footer\").addClass('fixed');\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"boxedlayout\", 'off');\r\n      }\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixedfooter\", 'on');\r\n      }\r\n    } else {\r\n      $(\".footer\").removeClass('fixed');\r\n\r\n      if (localStorageSupport) {\r\n        localStorage.setItem(\"fixedfooter\", 'off');\r\n      }\r\n    }\r\n  });\r\n\r\n  // SKIN Select\r\n  $('.spin-icon').click(function () {\r\n    $(\".theme-config-box\").toggleClass(\"show\");\r\n  });\r\n\r\n  // Default skin\r\n  $('.s-skin-0').click(function () {\r\n    $(\"body\").removeClass(\"skin-1\");\r\n    $(\"body\").removeClass(\"skin-2\");\r\n    $(\"body\").removeClass(\"skin-3\");\r\n  });\r\n\r\n  // Blue skin\r\n  $('.s-skin-1').click(function () {\r\n    $(\"body\").removeClass(\"skin-2\");\r\n    $(\"body\").removeClass(\"skin-3\");\r\n    $(\"body\").addClass(\"skin-1\");\r\n  });\r\n\r\n  // Inspinia ultra skin\r\n  $('.s-skin-2').click(function () {\r\n    $(\"body\").removeClass(\"skin-1\");\r\n    $(\"body\").removeClass(\"skin-3\");\r\n    $(\"body\").addClass(\"skin-2\");\r\n  });\r\n\r\n  // Yellow skin\r\n  $('.s-skin-3').click(function () {\r\n    $(\"body\").removeClass(\"skin-1\");\r\n    $(\"body\").removeClass(\"skin-2\");\r\n    $(\"body\").addClass(\"skin-3\");\r\n  });\r\n\r\n  if (localStorageSupport) {\r\n    var collapse = localStorage.getItem(\"collapse_menu\");\r\n    var fixedsidebar = localStorage.getItem(\"fixedsidebar\");\r\n    var fixednavbar = localStorage.getItem(\"fixednavbar\");\r\n    var fixednavbar2 = localStorage.getItem(\"fixednavbar2\");\r\n    var boxedlayout = localStorage.getItem(\"boxedlayout\");\r\n    var fixedfooter = localStorage.getItem(\"fixedfooter\");\r\n\r\n    if (collapse == 'on') {\r\n      $('#collapsemenu').prop('checked', 'checked')\r\n    }\r\n    if (fixedsidebar == 'on') {\r\n      $('#fixedsidebar').prop('checked', 'checked')\r\n    }\r\n    if (fixednavbar == 'on') {\r\n      $('#fixednavbar').prop('checked', 'checked')\r\n    }\r\n    if (fixednavbar2 == 'on') {\r\n      $('#fixednavbar2').prop('checked', 'checked')\r\n    }\r\n    if (boxedlayout == 'on') {\r\n      $('#boxedlayout').prop('checked', 'checked')\r\n    }\r\n    if (fixedfooter == 'on') {\r\n      $('#fixedfooter').prop('checked', 'checked')\r\n    }\r\n  }\r\n\r\n</script>\r\n\r\n<div class=\"datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-top\"\r\n     style=\"display: block; top: 2173px; left: 265px;\">\r\n  <div class=\"datepicker-days\" style=\"display: block;\">\r\n    <table class=\" table-condensed\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"cw\">&nbsp;</th>\r\n        <th class=\"prev\" style=\"visibility: visible;\">«</th>\r\n        <th colspan=\"5\" class=\"datepicker-switch\">March 2014</th>\r\n        <th class=\"next\" style=\"visibility: visible;\">»</th>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cw\">&nbsp;</th>\r\n        <th class=\"dow\">Su</th>\r\n        <th class=\"dow\">Mo</th>\r\n        <th class=\"dow\">Tu</th>\r\n        <th class=\"dow\">We</th>\r\n        <th class=\"dow\">Th</th>\r\n        <th class=\"dow\">Fr</th>\r\n        <th class=\"dow\">Sa</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td class=\"cw\">9</td>\r\n        <td class=\"old day\">23</td>\r\n        <td class=\"old day\">24</td>\r\n        <td class=\"old day\">25</td>\r\n        <td class=\"old day\">26</td>\r\n        <td class=\"old day\">27</td>\r\n        <td class=\"old day\">28</td>\r\n        <td class=\"day\">1</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"cw\">10</td>\r\n        <td class=\"day\">2</td>\r\n        <td class=\"day\">3</td>\r\n        <td class=\"active day\">4</td>\r\n        <td class=\"day\">5</td>\r\n        <td class=\"day\">6</td>\r\n        <td class=\"day\">7</td>\r\n        <td class=\"day\">8</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"cw\">11</td>\r\n        <td class=\"day\">9</td>\r\n        <td class=\"day\">10</td>\r\n        <td class=\"day\">11</td>\r\n        <td class=\"day\">12</td>\r\n        <td class=\"day\">13</td>\r\n        <td class=\"day\">14</td>\r\n        <td class=\"day\">15</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"cw\">12</td>\r\n        <td class=\"day\">16</td>\r\n        <td class=\"day\">17</td>\r\n        <td class=\"day\">18</td>\r\n        <td class=\"day\">19</td>\r\n        <td class=\"day\">20</td>\r\n        <td class=\"day\">21</td>\r\n        <td class=\"day\">22</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"cw\">13</td>\r\n        <td class=\"day\">23</td>\r\n        <td class=\"day\">24</td>\r\n        <td class=\"day\">25</td>\r\n        <td class=\"day\">26</td>\r\n        <td class=\"day\">27</td>\r\n        <td class=\"day\">28</td>\r\n        <td class=\"day\">29</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"cw\">14</td>\r\n        <td class=\"day\">30</td>\r\n        <td class=\"day\">31</td>\r\n        <td class=\"new day\">1</td>\r\n        <td class=\"new day\">2</td>\r\n        <td class=\"new day\">3</td>\r\n        <td class=\"new day\">4</td>\r\n        <td class=\"new day\">5</td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr>\r\n        <th colspan=\"8\" class=\"today\">Today</th>\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"7\" class=\"clear\" style=\"display: none;\">Clear</th>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <div class=\"datepicker-months\" style=\"display: none;\">\r\n    <table class=\"table-condensed\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"prev\" style=\"visibility: visible;\">«</th>\r\n        <th colspan=\"5\" class=\"datepicker-switch\">2014</th>\r\n        <th class=\"next\" style=\"visibility: visible;\">»</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan=\"7\"><span class=\"month\">Jan</span><span class=\"month\">Feb</span><span\r\n          class=\"month active\">Mar</span><span\r\n          class=\"month\">Apr</span><span class=\"month\">May</span><span class=\"month\">Jun</span><span\r\n          class=\"month\">Jul</span><span\r\n          class=\"month\">Aug</span><span class=\"month\">Sep</span><span class=\"month\">Oct</span><span\r\n          class=\"month\">Nov</span><span\r\n          class=\"month\">Dec</span></td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr>\r\n        <th colspan=\"8\" class=\"today\">Today</th>\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"7\" class=\"clear\" style=\"display: none;\">Clear</th>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <div class=\"datepicker-years\" style=\"display: none;\">\r\n    <table class=\"table-condensed\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"prev\" style=\"visibility: visible;\">«</th>\r\n        <th colspan=\"5\" class=\"datepicker-switch\">2010-2019</th>\r\n        <th class=\"next\" style=\"visibility: visible;\">»</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan=\"7\"><span class=\"year old\">2009</span><span class=\"year\">2010</span><span\r\n          class=\"year\">2011</span><span\r\n          class=\"year\">2012</span><span class=\"year\">2013</span><span class=\"year active\">2014</span><span class=\"year\">2015</span><span\r\n          class=\"year\">2016</span><span class=\"year\">2017</span><span class=\"year\">2018</span><span\r\n          class=\"year\">2019</span><span\r\n          class=\"year new\">2020</span></td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr>\r\n        <th colspan=\"8\" class=\"today\">Today</th>\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"7\" class=\"clear\" style=\"display: none;\">Clear</th>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/directory/navfilter/navfilter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/directory/navfilter/navfilter.component.ts ***!
  \********************************************************************/
/*! exports provided: NavfilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavfilterComponent", function() { return NavfilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavfilterComponent = /** @class */ (function () {
    function NavfilterComponent() {
    }
    NavfilterComponent.prototype.ngOnInit = function () {
    };
    NavfilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navfilter',
            template: __webpack_require__(/*! ./navfilter.component.html */ "./src/app/landing/directory/navfilter/navfilter.component.html"),
            styles: [__webpack_require__(/*! ./navfilter.component.css */ "./src/app/landing/directory/navfilter/navfilter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavfilterComponent);
    return NavfilterComponent;
}());



/***/ }),

/***/ "./src/app/landing/directory/navsearch/navsearch.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/landing/directory/navsearch/navsearch.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvZGlyZWN0b3J5L25hdnNlYXJjaC9uYXZzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/directory/navsearch/navsearch.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing/directory/navsearch/navsearch.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-primary rounded mb-2\">\r\n    <a class=\"navbar-brand\" href=\"#\">Data[3564]</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Link</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Dropdown\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n        </li>\r\n      </ul>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2 b-r-xl\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/directory/navsearch/navsearch.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/directory/navsearch/navsearch.component.ts ***!
  \********************************************************************/
/*! exports provided: NavsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavsearchComponent", function() { return NavsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavsearchComponent = /** @class */ (function () {
    function NavsearchComponent() {
    }
    NavsearchComponent.prototype.ngOnInit = function () {
    };
    NavsearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navsearch',
            template: __webpack_require__(/*! ./navsearch.component.html */ "./src/app/landing/directory/navsearch/navsearch.component.html"),
            styles: [__webpack_require__(/*! ./navsearch.component.css */ "./src/app/landing/directory/navsearch/navsearch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavsearchComponent);
    return NavsearchComponent;
}());



/***/ }),

/***/ "./src/app/landing/extra-features-section/extra-features-section.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/landing/extra-features-section/extra-features-section.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvZXh0cmEtZmVhdHVyZXMtc2VjdGlvbi9leHRyYS1mZWF0dXJlcy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/extra-features-section/extra-features-section.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/landing/extra-features-section/extra-features-section.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"features\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n\n        <h1>UCLG Africa</h1>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n        <a href=\"https://www.uclga.org/our-pillars/#top\" target=\"_blank\">\n          <h2>OUR PILLARS</h2>\n        </a>\n        <!-- <i class=\"fa fa-bar-chart big-icon float-right\"></i> -->\n        <p>UCLG Africa has developed a series of programs and interventions including the mobilization of strategies,\n          methods and tools to support our members under our three pillars: A. Institutional Strengthening and Capacity\n          Development; B. Advocacy and Mobilization; C. Corporate Learning and Knowledge Management. These\n          interventions are aimed at supporting the development of local governments to better serve their communities\n          by improving living conditions and driving development from the grassroots.</p>\n      </div>\n      <div class=\"col-lg-5 features-text\">\n        <a href=\"https://www.uclga.org/who-we-are/\" target=\"_blank\">\n          <h2>WHO WE ARE</h2>\n        </a>\n        <!-- <i class=\"fa fa-bolt big-icon float-right\"></i> -->\n        <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive\n          admin\n          dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection\n          of\n          reusable UI components and integrated with.</p>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n        <a href=\"https://www.uclga.org/who-we-are/\" target=\"_blank\">\n          <h2>OBJECTIVES</h2>\n        </a>\n        <!-- <i class=\"fa fa-clock-o big-icon float-right\"></i> -->\n        <p>The Governance, Advocacy & Decentralized Development Program for Africa (GADDEPA) is the strategic vision\n          for UCLG Africa, which aims to build Africa from the roots. ​​GADDEPA lays out the objectives of the\n          organization and how it aims to deliver across eleven key priority areas to drive decentralized co-operation.\n\n        </p>\n      </div>\n      <div class=\"col-lg-5 features-text\">\n        <a href=\"https://www.uclga.org/who-we-are/\" target=\"_blank\">\n          <h2>OUR VISION & MISSION</h2>\n        </a>\n        <!-- <i class=\"fa fa-users big-icon float-right\"></i> -->\n        <p>The vision of UCLG Africa is “Building African Unity and Driving African Development through the\n          Grassroots.”\n\n          <br> To achieve this vision UCLG Africa’s Mission Statement outlines its principal goals to:\n\n          <br>- Unite African local government; place it in the continental political and economic development context\n          and represent it in all relevant forums\n          <br>- Strive for the establishment of local government as a distinct sphere of government working in support\n          of national and other spheres of government in Africa\n          <br>- Ensure democracy, equality and respect for human rights at the local level...\n\n        </p>\n      </div>\n    </div>\n  </div>\n\n\n</section>\n\n<section class=\"features\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jXT9sba-5eM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe> -->\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing/extra-features-section/extra-features-section.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/landing/extra-features-section/extra-features-section.component.ts ***!
  \************************************************************************************/
/*! exports provided: ExtraFeaturesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraFeaturesSectionComponent", function() { return ExtraFeaturesSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtraFeaturesSectionComponent = /** @class */ (function () {
    function ExtraFeaturesSectionComponent() {
    }
    ExtraFeaturesSectionComponent.prototype.ngOnInit = function () {
    };
    ExtraFeaturesSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extra-features-section',
            template: __webpack_require__(/*! ./extra-features-section.component.html */ "./src/app/landing/extra-features-section/extra-features-section.component.html"),
            styles: [__webpack_require__(/*! ./extra-features-section.component.css */ "./src/app/landing/extra-features-section/extra-features-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraFeaturesSectionComponent);
    return ExtraFeaturesSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/features-section/features-section.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/landing/features-section/features-section.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvZmVhdHVyZXMtc2VjdGlvbi9mZWF0dXJlcy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/features-section/features-section.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/landing/features-section/features-section.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"partners\" class=\"container services\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 text-center\">\n      <img src=\"assets/img/landing/AFDB_logo-180x180.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <img src=\"assets/img/landing/african_union.jpg\" class=\"img-fluid  \" alt=\"\">\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <img src=\"assets/img/landing/Logo-CEEAC-180x180.png\" class=\"img-fluid rounded-circle \" alt=\"\">\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <img src=\"assets/img/landing/cedead.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n    </div>\n  </div>\n</section>\n\n<section class=\"container features\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <div class=\"navy-line\"></div>\n      <h1>OUR PARTNERS<br/> <span class=\"navy\"> with many custom components</span> </h1>\n      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 text-center wow fadeInLeft\">\n      <div>\n        <img src=\"assets/img/landing/cooperation-belge-au-developpement_logo-200x200.jpg\" class=\"img-fluid \" alt=\"\">\n      </div>\n      <div class=\"m-t-lg\">\n        <img src=\"assets/img/landing/SADC-Logo-180x180.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n      </div>\n    </div>\n    <div class=\"col-md-6 text-center  wow zoomIn\">\n        <img height=\"65\" width=\"255\" src=\"assets/img/landing/icon-partnership.png\" alt=\"partnership\" class=\"img-fluid img-fluid\">\n\n      <!-- <img src=\"assets/img/landing/perspective.png\" alt=\"dashboard\" class=\"img-fluid\"> -->\n    </div>\n    <div class=\"col-md-3 text-center wow fadeInRight\">\n      <div>\n        <img src=\"assets/img/landing/agence-de-loriental-logo-180x180.png\" class=\"img-fluid s \" alt=\"\">\n      </div>\n      <div class=\"m-t-lg\">\n        <img src=\"assets/img/landing/UNEP-Logo-180x180.jpg\" class=\"img-fluid  \" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <img src=\"assets/img/landing/Royaume-du-Maroc-logo-180x180.png\" class=\"img-fluid  \" alt=\"\">\n      <div class=\"navy-line\"></div>\n      <a href=\"\" target=\"_blank\"><h1>More</h1></a>\n      </div>\n  </div>\n  <!-- <div class=\"row features-block\">\n    <div class=\"col-lg-6 features-text wow fadeInLeft\">\n      <img src=\"assets/img/landing/avatar3.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n\n      <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin\n        dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable\n        UI components and integrated with latest jQuery plugins.</p>\n      <a href=\"\" class=\"btn btn-primary\">Learn more</a>\n    </div>\n    <div class=\"col-lg-6 text-right wow fadeInRight\">\n        <img src=\"assets/img/landing/avatar3.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n      </div>\n  </div> -->\n</section>"

/***/ }),

/***/ "./src/app/landing/features-section/features-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/landing/features-section/features-section.component.ts ***!
  \************************************************************************/
/*! exports provided: FeaturesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesSectionComponent", function() { return FeaturesSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesSectionComponent = /** @class */ (function () {
    function FeaturesSectionComponent() {
    }
    FeaturesSectionComponent.prototype.ngOnInit = function () {
    };
    FeaturesSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features-section',
            template: __webpack_require__(/*! ./features-section.component.html */ "./src/app/landing/features-section/features-section.component.html"),
            styles: [__webpack_require__(/*! ./features-section.component.css */ "./src/app/landing/features-section/features-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesSectionComponent);
    return FeaturesSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/landing/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/landing/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\r\n  <app-slider-section></app-slider-section>\r\n\r\n\r\n\r\n\r\n  <app-landing-map></app-landing-map>\r\n  <app-features-section></app-features-section>\r\n\r\n\r\n\r\n\r\n  <!-- <app-pricing-section></app-pricing-section> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/landing/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/landing/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/landing/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing-nav/landing-nav.component.css":
/*!***************************************************************!*\
  !*** ./src/app/landing/landing-nav/landing-nav.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy1uYXYvbGFuZGluZy1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/landing-nav/landing-nav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/landing/landing-nav/landing-nav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top navbar-expand-md\" role=\"navigation\">\r\n    <div class=\"container\">\r\n      <a routerLink=\"/landing/home\"><img height=\"55\" width=\"240\" src=\"assets/img/logo-ucgl.png\" alt=\"UCLGA\" class=\"img-fluid\"></a>\r\n      <!-- <a routerLink=\"/landing/home\"><img height=\"55\" width=\"240\" src=\"assets/img/logo-ucgl.png\" alt=\"UCLGA\"></a> -->\r\n\r\n      <div class=\"navbar-header page-scroll\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\">\r\n          <i class=\"fa fa-bars\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar\">\r\n        <ul class=\"nav navbar-nav \">\r\n          <li><a class=\"nav-link\" pageScroll routerLink=\"/landing/home\" routerLinkActive=\"active\" href=\"#home\">HOME</a></li>\r\n          <li><a class=\"nav-link\" pageScroll routerLink=\"/landing/home\" href=\"#maps\">MAPS</a></li>\r\n          <li><a class=\"nav-link\" pageScroll routerLink=\"/landing/directory\" routerLinkActive=\"active\">DIRECTORY</a></li>\r\n          <li><a class=\"nav-link\" pageScroll routerLink=\"/landing/transparency\" routerLinkActive=\"active\">TRANSPARENCY</a></li>\r\n          <li><a class=\"nav-link\" pageScroll routerLink=\"/landing/statistic\" routerLinkActive=\"active\" href=\"#inSlider\">STATISTICS</a></li>\r\n          <li><a class=\"nav-link\" pageScroll routerLinkActive=\"active\" href=\"#partners\">Partners</a></li>\r\n          <li><a class=\"nav-link\" pageScroll routerLinkActive=\"active\" href=\"#contact\">Contact</a></li>\r\n          <li *ngIf=\"loggedIn\"><a class=\"nav-link page-scroll\" (click)=\"goToAdmin()\">Admin</a></li>\r\n          <li *ngIf=\"!loggedIn\"><a class=\"nav-link page-scroll\" (click)=\"goToLogin()\">Login</a></li>\r\n          <li *ngIf=\"!loggedIn\"><a class=\"nav-link page-scroll\" (click)=\"goToSignup()\">SignUp</a></li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/landing-nav/landing-nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/landing/landing-nav/landing-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingNavComponent", function() { return LandingNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingNavComponent = /** @class */ (function () {
    function LandingNavComponent(token, auth, _router) {
        this.token = token;
        this.auth = auth;
        this._router = _router;
        this.page = '';
    }
    LandingNavComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.token.loggedIn();
    };
    LandingNavComponent.prototype.goToLogin = function () {
        this._router.navigate(['login']);
    };
    LandingNavComponent.prototype.goToAdmin = function () {
        this._router.navigate(['administrateur']);
    };
    LandingNavComponent.prototype.goToSignup = function () {
        this._router.navigate(['signup']);
    };
    LandingNavComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.auth.changeAuthStatus(false);
        this.token.remove();
        this.loggedIn = this.token.loggedIn();
    };
    LandingNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-nav',
            template: __webpack_require__(/*! ./landing-nav.component.html */ "./src/app/landing/landing-nav/landing-nav.component.html"),
            styles: [__webpack_require__(/*! ./landing-nav.component.css */ "./src/app/landing/landing-nav/landing-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingNavComponent);
    return LandingNavComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _statistic_country_statistic_country_statistic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistic/country-statistic/country-statistic.component */ "./src/app/landing/statistic/country-statistic/country-statistic.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistic/statistic.component */ "./src/app/landing/statistic/statistic.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/landing/home/home.component.ts");
/* harmony import */ var _directory_directory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directory/directory.component */ "./src/app/landing/directory/directory.component.ts");
/* harmony import */ var _transparency_transparency_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transparency/transparency.component */ "./src/app/landing/transparency/transparency.component.ts");
/* harmony import */ var _profil_person_profil_person_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profil-person/profil-person.component */ "./src/app/landing/profil-person/profil-person.component.ts");
/* harmony import */ var _profile_local_profile_local_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-local/profile-local.component */ "./src/app/landing/profile-local/profile-local.component.ts");
/* harmony import */ var _statistic_local_government_local_government_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./statistic/local-government/local-government.component */ "./src/app/landing/statistic/local-government/local-government.component.ts");
/* harmony import */ var _statistic_localy_elected_localy_elected_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./statistic/localy-elected/localy-elected.component */ "./src/app/landing/statistic/localy-elected/localy-elected.component.ts");
/* harmony import */ var _statistic_general_statistics_general_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./statistic/general-statistics/general-statistics.component */ "./src/app/landing/statistic/general-statistics/general-statistics.component.ts");
/* harmony import */ var _statistic_development_partners_development_partners_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./statistic/development-partners/development-partners.component */ "./src/app/landing/statistic/development-partners/development-partners.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var landingRoutes = [
    {
        path: 'landing', component: _landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
        children: [
            { path: 'statistic', component: _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_4__["StatisticComponent"] },
            { path: 'statistic/country/:id', component: _statistic_country_statistic_country_statistic_component__WEBPACK_IMPORTED_MODULE_0__["CountryStatisticComponent"] },
            { path: 'local-government', component: _statistic_local_government_local_government_component__WEBPACK_IMPORTED_MODULE_10__["LocalGovernmentComponent"] },
            { path: 'localy-elected', component: _statistic_localy_elected_localy_elected_component__WEBPACK_IMPORTED_MODULE_11__["LocalyElectedComponent"] },
            { path: 'general-statistics', component: _statistic_general_statistics_general_statistics_component__WEBPACK_IMPORTED_MODULE_12__["GeneralStatisticsComponent"] },
            { path: 'development-partners', component: _statistic_development_partners_development_partners_component__WEBPACK_IMPORTED_MODULE_13__["DevelopmentPartnersComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'directory', component: _directory_directory_component__WEBPACK_IMPORTED_MODULE_6__["DirectoryComponent"] },
            { path: 'profile-local-government/:id', component: _profile_local_profile_local_component__WEBPACK_IMPORTED_MODULE_9__["ProfileLocalComponent"] },
            { path: 'profile-person', component: _profil_person_profil_person_component__WEBPACK_IMPORTED_MODULE_8__["ProfilPersonComponent"] },
            { path: 'transparency', component: _transparency_transparency_component__WEBPACK_IMPORTED_MODULE_7__["TransparencyComponent"] }
        ]
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(landingRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LandingRoutingModule);
    return LandingRoutingModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-landing-nav></app-landing-nav>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-contact-section></app-contact-section>\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/ngx-page-scroll.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    function LandingComponent(token, _router, _route) {
        this.token = token;
        this._router = _router;
        this._route = _route;
        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_3__["PageScrollConfig"].defaultScrollOffset = 55;
    }
    LandingComponent.prototype.ngOnInit = function () {
        document.body.className = 'landing-page no-skin-config';
        document.body.setAttribute('id', 'page-top');
    };
    LandingComponent.prototype.goToLogin = function () {
        this._router.navigate(['login']);
    };
    LandingComponent.prototype.goToSignup = function () {
        this._router.navigate(['signup']);
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _maps_maps_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maps/maps.module */ "./src/app/maps/maps.module.ts");
/* harmony import */ var _transparency_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transparency/indicator/indicator.component */ "./src/app/landing/transparency/indicator/indicator.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/landing/landing-routing.module.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comments-section/comments-section.component */ "./src/app/landing/comments-section/comments-section.component.ts");
/* harmony import */ var _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-section/contact-section.component */ "./src/app/landing/contact-section/contact-section.component.ts");
/* harmony import */ var _features_section_features_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features-section/features-section.component */ "./src/app/landing/features-section/features-section.component.ts");
/* harmony import */ var _extra_features_section_extra_features_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./extra-features-section/extra-features-section.component */ "./src/app/landing/extra-features-section/extra-features-section.component.ts");
/* harmony import */ var _slider_section_slider_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slider-section/slider-section.component */ "./src/app/landing/slider-section/slider-section.component.ts");
/* harmony import */ var _second_features_section_second_features_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./second-features-section/second-features-section.component */ "./src/app/landing/second-features-section/second-features-section.component.ts");
/* harmony import */ var _team_section_team_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./team-section/team-section.component */ "./src/app/landing/team-section/team-section.component.ts");
/* harmony import */ var _testimonials_section_testimonials_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testimonials-section/testimonials-section.component */ "./src/app/landing/testimonials-section/testimonials-section.component.ts");
/* harmony import */ var _pricing_section_pricing_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pricing-section/pricing-section.component */ "./src/app/landing/pricing-section/pricing-section.component.ts");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/landing/maps/maps.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/landing/timeline/timeline.component.ts");
/* harmony import */ var _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./statistic/statistic.component */ "./src/app/landing/statistic/statistic.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/landing/home/home.component.ts");
/* harmony import */ var _statistic_chart_chart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./statistic/chart/chart.component */ "./src/app/landing/statistic/chart/chart.component.ts");
/* harmony import */ var _statistic_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./statistic/accordion/accordion.component */ "./src/app/landing/statistic/accordion/accordion.component.ts");
/* harmony import */ var _directory_directory_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directory/directory.component */ "./src/app/landing/directory/directory.component.ts");
/* harmony import */ var _directory_navsearch_navsearch_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directory/navsearch/navsearch.component */ "./src/app/landing/directory/navsearch/navsearch.component.ts");
/* harmony import */ var _transparency_transparency_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./transparency/transparency.component */ "./src/app/landing/transparency/transparency.component.ts");
/* harmony import */ var _directory_navfilter_navfilter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directory/navfilter/navfilter.component */ "./src/app/landing/directory/navfilter/navfilter.component.ts");
/* harmony import */ var _profil_person_profil_person_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profil-person/profil-person.component */ "./src/app/landing/profil-person/profil-person.component.ts");
/* harmony import */ var _profile_local_profile_local_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile-local/profile-local.component */ "./src/app/landing/profile-local/profile-local.component.ts");
/* harmony import */ var _statistic_local_government_local_government_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./statistic/local-government/local-government.component */ "./src/app/landing/statistic/local-government/local-government.component.ts");
/* harmony import */ var _statistic_localy_elected_localy_elected_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./statistic/localy-elected/localy-elected.component */ "./src/app/landing/statistic/localy-elected/localy-elected.component.ts");
/* harmony import */ var _statistic_general_statistics_general_statistics_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./statistic/general-statistics/general-statistics.component */ "./src/app/landing/statistic/general-statistics/general-statistics.component.ts");
/* harmony import */ var _statistic_development_partners_development_partners_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./statistic/development-partners/development-partners.component */ "./src/app/landing/statistic/development-partners/development-partners.component.ts");
/* harmony import */ var _landing_nav_landing_nav_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./landing-nav/landing-nav.component */ "./src/app/landing/landing-nav/landing-nav.component.ts");
/* harmony import */ var _shared_modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../shared/modal-select-country/modal-select-country.component */ "./src/app/shared/modal-select-country/modal-select-country.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _statistic_country_statistic_country_statistic_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./statistic/country-statistic/country-statistic.component */ "./src/app/landing/statistic/country-statistic/country-statistic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ModalSelectCountryComponent } from './../shared/modal-select-country/modal-select-country.component';

























// import { MapsModule } from '../maps/maps.module';











var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingRoutingModule"],
                ngx_page_scroll__WEBPACK_IMPORTED_MODULE_17__["NgxPageScrollModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_36__["NgxChartsModule"],
                _maps_maps_module__WEBPACK_IMPORTED_MODULE_1__["MapsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_0__["DataTablesModule"]
            ],
            declarations: [
                _landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _landing_nav_landing_nav_component__WEBPACK_IMPORTED_MODULE_34__["LandingNavComponent"],
                _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_8__["CommentsSectionComponent"],
                _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_9__["ContactSectionComponent"],
                _features_section_features_section_component__WEBPACK_IMPORTED_MODULE_10__["FeaturesSectionComponent"],
                _extra_features_section_extra_features_section_component__WEBPACK_IMPORTED_MODULE_11__["ExtraFeaturesSectionComponent"],
                _slider_section_slider_section_component__WEBPACK_IMPORTED_MODULE_12__["SliderSectionComponent"],
                _second_features_section_second_features_section_component__WEBPACK_IMPORTED_MODULE_13__["SecondFeaturesSectionComponent"],
                _team_section_team_section_component__WEBPACK_IMPORTED_MODULE_14__["TeamSectionComponent"],
                _testimonials_section_testimonials_section_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialsSectionComponent"],
                _pricing_section_pricing_section_component__WEBPACK_IMPORTED_MODULE_16__["PricingSectionComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_18__["MapsComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__["TimelineComponent"],
                _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_20__["StatisticComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _statistic_chart_chart_component__WEBPACK_IMPORTED_MODULE_22__["ChartComponent"],
                _statistic_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_23__["AccordionComponent"],
                _directory_directory_component__WEBPACK_IMPORTED_MODULE_24__["DirectoryComponent"],
                _directory_navsearch_navsearch_component__WEBPACK_IMPORTED_MODULE_25__["NavsearchComponent"],
                _transparency_transparency_component__WEBPACK_IMPORTED_MODULE_26__["TransparencyComponent"],
                _directory_navfilter_navfilter_component__WEBPACK_IMPORTED_MODULE_27__["NavfilterComponent"],
                _transparency_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_2__["IndicatorComponent"],
                _profil_person_profil_person_component__WEBPACK_IMPORTED_MODULE_28__["ProfilPersonComponent"],
                _profile_local_profile_local_component__WEBPACK_IMPORTED_MODULE_29__["ProfileLocalComponent"],
                _statistic_local_government_local_government_component__WEBPACK_IMPORTED_MODULE_30__["LocalGovernmentComponent"],
                _statistic_localy_elected_localy_elected_component__WEBPACK_IMPORTED_MODULE_31__["LocalyElectedComponent"],
                _statistic_general_statistics_general_statistics_component__WEBPACK_IMPORTED_MODULE_32__["GeneralStatisticsComponent"],
                _statistic_development_partners_development_partners_component__WEBPACK_IMPORTED_MODULE_33__["DevelopmentPartnersComponent"],
                _statistic_country_statistic_country_statistic_component__WEBPACK_IMPORTED_MODULE_37__["CountryStatisticComponent"],
            ],
            entryComponents: [
                _shared_modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_35__["ModalSelectCountryComponent"]
            ]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ }),

/***/ "./src/app/landing/maps/maps.component.css":
/*!*************************************************!*\
  !*** ./src/app/landing/maps/maps.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbWFwcy9tYXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/maps/maps.component.html":
/*!**************************************************!*\
  !*** ./src/app/landing/maps/maps.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"maps\">\n  <!-- <app-landing-map></app-landing-map> -->\n</div>\n"

/***/ }),

/***/ "./src/app/landing/maps/maps.component.ts":
/*!************************************************!*\
  !*** ./src/app/landing/maps/maps.component.ts ***!
  \************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/landing/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.css */ "./src/app/landing/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/landing/pricing-section/pricing-section.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/landing/pricing-section/pricing-section.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvcHJpY2luZy1zZWN0aW9uL3ByaWNpbmctc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/pricing-section/pricing-section.component.html":
/*!************************************************************************!*\
  !*** ./src/app/landing/pricing-section/pricing-section.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"pricing\">\n  <div class=\"container\">\n    <div class=\"row m-b-lg\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>App Pricing</h1>\n        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 wow zoomIn\">\n        <ul class=\"pricing-plan list-unstyled\">\n          <li class=\"pricing-title\">\n            Basic\n          </li>\n          <li class=\"pricing-desc\">\n            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n          </li>\n          <li class=\"pricing-price\">\n            <span>$16</span> / month\n          </li>\n          <li>\n            Dashboards\n          </li>\n          <li>\n            Projects view\n          </li>\n          <li>\n            Contacts\n          </li>\n          <li>\n            Calendar\n          </li>\n          <li>\n            AngularJs\n          </li>\n          <li>\n            <a class=\"btn btn-primary btn-xs\" href=\"#\">Signup</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-lg-4 wow zoomIn\">\n        <ul class=\"pricing-plan list-unstyled selected\">\n          <li class=\"pricing-title\">\n            Standard\n          </li>\n          <li class=\"pricing-desc\">\n            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n          </li>\n          <li class=\"pricing-price\">\n            <span>$22</span> / month\n          </li>\n          <li>\n            Dashboards\n          </li>\n          <li>\n            Projects view\n          </li>\n          <li>\n            Contacts\n          </li>\n          <li>\n            Calendar\n          </li>\n          <li>\n            AngularJs\n          </li>\n          <li>\n            <strong>Support platform</strong>\n          </li>\n          <li class=\"plan-action\">\n            <a class=\"btn btn-primary btn-xs\" href=\"#\">Signup</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-lg-4 wow zoomIn\">\n        <ul class=\"pricing-plan list-unstyled\">\n          <li class=\"pricing-title\">\n            Premium\n          </li>\n          <li class=\"pricing-desc\">\n            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n          </li>\n          <li class=\"pricing-price\">\n            <span>$160</span> / month\n          </li>\n          <li>\n            Dashboards\n          </li>\n          <li>\n            Projects view\n          </li>\n          <li>\n            Contacts\n          </li>\n          <li>\n            Calendar\n          </li>\n          <li>\n            AngularJs\n          </li>\n          <li>\n            <a class=\"btn btn-primary btn-xs\" href=\"#\">Signup</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row m-t-lg\">\n      <div class=\"col-lg-12 text-center m-t-lg\">\n        <p>*Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a\n          search for 'lorem ipsum' will uncover many web sites still in their infancy. <span class=\"navy\">Various versions</span>\n          have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n      </div>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/landing/pricing-section/pricing-section.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/landing/pricing-section/pricing-section.component.ts ***!
  \**********************************************************************/
/*! exports provided: PricingSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingSectionComponent", function() { return PricingSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingSectionComponent = /** @class */ (function () {
    function PricingSectionComponent() {
    }
    PricingSectionComponent.prototype.ngOnInit = function () {
    };
    PricingSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing-section',
            template: __webpack_require__(/*! ./pricing-section.component.html */ "./src/app/landing/pricing-section/pricing-section.component.html"),
            styles: [__webpack_require__(/*! ./pricing-section.component.css */ "./src/app/landing/pricing-section/pricing-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingSectionComponent);
    return PricingSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/profil-person/profil-person.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/landing/profil-person/profil-person.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvcHJvZmlsLXBlcnNvbi9wcm9maWwtcGVyc29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/profil-person/profil-person.component.html":
/*!********************************************************************!*\
  !*** ./src/app/landing/profil-person/profil-person.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row wrapper border-bottom white-bg page-heading\">\n      <div class=\"\">\n        <h2><br></h2>\n        <h2><br></h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row wrapper border-bottom white-bg page-heading\">\n      <div class=\"col-lg-9\">\n        <h2>Statistics</h2>\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"\">Person / profile</a>\n          </li>\n          <li class=\"breadcrumb-item\">\n            <a #h1Variable></a>\n          </li>\n        </ol>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n   <div class=\"col-md\">\n\n\n\n\n\n\n          <div class=\"ibox selected\">\n\n              <div class=\"ibox-content\">\n                  <div class=\"tab-content\">\n                      <div id=\"contact-1\" class=\"tab-pane active\">\n                          <div class=\"row m-b-lg\">\n                              <div class=\"col-lg-4 text-center\">\n                                  <h2>Nicki Smith</h2>\n\n                                  <div class=\"m-b-sm\">\n                                      <img alt=\"image\" class=\"rounded-circle\" src=\"assets/img/a2.jpg\" style=\"width: 150px\">\n                                  </div>\n                              </div>\n                              <div class=\"col-lg-8\">\n                                  <strong>\n                                      About me\n                                  </strong>\n\n                                  <p>\n                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                      tempor incididunt ut labore et dolore magna aliqua.\n                                  </p>\n                                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\"><i class=\"fa fa-envelope\"></i> Send Message\n                                  </button>\n                              </div>\n                          </div>\n                          <div class=\"client-detail\">\n                          <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 100%;\"><div class=\"full-height-scroll\" style=\"overflow: hidden; width: auto; height: 100%;\">\n\n                              <strong>Last activity</strong>\n\n                              <ul class=\"list-group clear-list\">\n                                  <li class=\"list-group-item fist-item\">\n                                      <span class=\"float-right\"> 09:00 pm </span>\n                                      Please contact me\n                                  </li>\n                                  <li class=\"list-group-item\">\n                                      <span class=\"float-right\"> 10:16 am </span>\n                                      Sign a contract\n                                  </li>\n                                  <li class=\"list-group-item\">\n                                      <span class=\"float-right\"> 08:22 pm </span>\n                                      Open new shop\n                                  </li>\n                                  <li class=\"list-group-item\">\n                                      <span class=\"float-right\"> 11:06 pm </span>\n                                      Call back to Sylvia\n                                  </li>\n                                  <li class=\"list-group-item\">\n                                      <span class=\"float-right\"> 12:00 am </span>\n                                      Write a letter to Sandra\n                                  </li>\n                              </ul>\n                              <strong>Notes</strong>\n                              <p>\n                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                  tempor incididunt ut labore et dolore magna aliqua.\n                              </p>\n                              <hr>\n                              <strong>Timeline activity</strong>\n                              <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline\">\n                                  <div class=\"vertical-timeline-block\">\n                                      <div class=\"vertical-timeline-icon gray-bg\">\n                                          <i class=\"fa fa-coffee\"></i>\n                                      </div>\n                                      <div class=\"vertical-timeline-content\">\n                                          <p>Conference on the sales results for the previous year.\n                                          </p>\n                                          <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                      </div>\n                                  </div>\n                                  <div class=\"vertical-timeline-block\">\n                                      <div class=\"vertical-timeline-icon gray-bg\">\n                                          <i class=\"fa fa-briefcase\"></i>\n                                      </div>\n                                      <div class=\"vertical-timeline-content\">\n                                          <p>Many desktop publishing packages and web page editors now use Lorem.\n                                          </p>\n                                          <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                      </div>\n                                  </div>\n                                  <div class=\"vertical-timeline-block\">\n                                      <div class=\"vertical-timeline-icon gray-bg\">\n                                          <i class=\"fa fa-bolt\"></i>\n                                      </div>\n                                      <div class=\"vertical-timeline-content\">\n                                          <p>There are many variations of passages of Lorem Ipsum available.\n                                          </p>\n                                          <span class=\"vertical-date small text-muted\"> 06:10 pm - 11.03.2014 </span>\n                                      </div>\n                                  </div>\n                                  <div class=\"vertical-timeline-block\">\n                                      <div class=\"vertical-timeline-icon navy-bg\">\n                                          <i class=\"fa fa-warning\"></i>\n                                      </div>\n                                      <div class=\"vertical-timeline-content\">\n                                          <p>The generated Lorem Ipsum is therefore.\n                                          </p>\n                                          <span class=\"vertical-date small text-muted\"> 02:50 pm - 03.10.2014 </span>\n                                      </div>\n                                  </div>\n                                  <div class=\"vertical-timeline-block\">\n                                      <div class=\"vertical-timeline-icon gray-bg\">\n                                          <i class=\"fa fa-coffee\"></i>\n                                      </div>\n                                      <div class=\"vertical-timeline-content\">\n                                          <p>Conference on the sales results for the previous year.\n                                          </p>\n                                          <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                      </div>\n                                  </div>\n                                  <div class=\"vertical-timeline-block\">\n                                      <div class=\"vertical-timeline-icon gray-bg\">\n                                          <i class=\"fa fa-briefcase\"></i>\n                                      </div>\n                                      <div class=\"vertical-timeline-content\">\n                                          <p>Many desktop publishing packages and web page editors now use Lorem.\n                                          </p>\n                                          <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 359.252px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                          </div>\n                      </div>\n                      <div id=\"contact-2\" class=\"tab-pane\">\n                          <div class=\"row m-b-lg\">\n                              <div class=\"col-lg-4 text-center\">\n                                  <h2>Edan Randall</h2>\n\n                                  <div class=\"m-b-sm\">\n                                      <img alt=\"image\" class=\"rounded-circle\" src=\"img/a3.jpg\" style=\"width: 62px\">\n                                  </div>\n                              </div>\n                              <div class=\"col-lg-8\">\n                                  <strong>\n                                      About me\n                                  </strong>\n\n                                  <p>\n                                      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default tempor incididunt model text.\n                                  </p>\n                                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\"><i class=\"fa fa-envelope\"></i> Send Message\n                                  </button>\n                              </div>\n                          </div>\n                          <div class=\"client-detail\">\n                              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 100%;\"><div class=\"full-height-scroll\" style=\"overflow: hidden; width: auto; height: 100%;\">\n\n                                  <strong>Last activity</strong>\n\n                                  <ul class=\"list-group clear-list\">\n                                      <li class=\"list-group-item fist-item\">\n                                          <span class=\"float-right\"> 09:00 pm </span>\n                                          Lorem Ipsum available\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 10:16 am </span>\n                                          Latin words, combined\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 08:22 pm </span>\n                                          Open new shop\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 11:06 pm </span>\n                                          The generated Lorem Ipsum\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 12:00 am </span>\n                                          Content here, content here\n                                      </li>\n                                  </ul>\n                                  <strong>Notes</strong>\n                                  <p>\n                                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.\n                                  </p>\n                                  <hr>\n                                  <strong>Timeline activity</strong>\n                                  <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline\">\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-bolt\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>There are many variations of passages of Lorem Ipsum available.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 06:10 pm - 11.03.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon navy-bg\">\n                                              <i class=\"fa fa-warning\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>The generated Lorem Ipsum is therefore.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 02:50 pm - 03.10.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                          </div>\n                      </div>\n                      <div id=\"contact-3\" class=\"tab-pane\">\n                          <div class=\"row m-b-lg\">\n                              <div class=\"col-lg-4 text-center\">\n                                  <h2>Jasper Carson</h2>\n\n                                  <div class=\"m-b-sm\">\n                                      <img alt=\"image\" class=\"rounded-circle\" src=\"img/a4.jpg\" style=\"width: 62px\">\n                                  </div>\n                              </div>\n                              <div class=\"col-lg-8\">\n                                  <strong>\n                                      About me\n                                  </strong>\n\n                                  <p>\n                                      Latin professor at Hampden-Sydney College in Virginia, looked  embarrassing hidden in the middle.\n                                  </p>\n                                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\"><i class=\"fa fa-envelope\"></i> Send Message\n                                  </button>\n                              </div>\n                          </div>\n                          <div class=\"client-detail\">\n                              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 100%;\"><div class=\"full-height-scroll\" style=\"overflow: hidden; width: auto; height: 100%;\">\n\n                                  <strong>Last activity</strong>\n\n                                  <ul class=\"list-group clear-list\">\n                                      <li class=\"list-group-item fist-item\">\n                                          <span class=\"float-right\"> 09:00 pm </span>\n                                          Aldus PageMaker including\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 10:16 am </span>\n                                          Finibus Bonorum et Malorum\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 08:22 pm </span>\n                                          Write a letter to Sandra\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 11:06 pm </span>\n                                          Standard chunk of Lorem\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 12:00 am </span>\n                                          Open new shop\n                                      </li>\n                                  </ul>\n                                  <strong>Notes</strong>\n                                  <p>\n                                      Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n                                  </p>\n                                  <hr>\n                                  <strong>Timeline activity</strong>\n                                  <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline\">\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-bolt\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>There are many variations of passages of Lorem Ipsum available.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 06:10 pm - 11.03.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon navy-bg\">\n                                              <i class=\"fa fa-warning\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>The generated Lorem Ipsum is therefore.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 02:50 pm - 03.10.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                          </div>\n                      </div>\n                      <div id=\"contact-4\" class=\"tab-pane\">\n                          <div class=\"row m-b-lg\">\n                              <div class=\"col-lg-4 text-center\">\n                                  <h2>Reuben Pacheco</h2>\n\n                                  <div class=\"m-b-sm\">\n                                      <img alt=\"image\" class=\"rounded-circle\" src=\"img/a5.jpg\" style=\"width: 62px\">\n                                  </div>\n                              </div>\n                              <div class=\"col-lg-8\">\n                                  <strong>\n                                      About me\n                                  </strong>\n\n                                  <p>\n                                      Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero,written in 45 BC. This book is a treatise on.\n                                  </p>\n                                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\"><i class=\"fa fa-envelope\"></i> Send Message\n                                  </button>\n                              </div>\n                          </div>\n                          <div class=\"client-detail\">\n                              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 100%;\"><div class=\"full-height-scroll\" style=\"overflow: hidden; width: auto; height: 100%;\">\n\n                                  <strong>Last activity</strong>\n\n                                  <ul class=\"list-group clear-list\">\n                                      <li class=\"list-group-item fist-item\">\n                                          <span class=\"float-right\"> 09:00 pm </span>\n                                          The point of using\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 10:16 am </span>\n                                          Lorem Ipsum is that it has\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 08:22 pm </span>\n                                          Text, and a search for 'lorem ipsum'\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 11:06 pm </span>\n                                          Passages of Lorem Ipsum\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> 12:00 am </span>\n                                          If you are going\n                                      </li>\n                                  </ul>\n                                  <strong>Notes</strong>\n                                  <p>\n                                      Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                  </p>\n                                  <hr>\n                                  <strong>Timeline activity</strong>\n                                  <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline\">\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-bolt\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>There are many variations of passages of Lorem Ipsum available.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 06:10 pm - 11.03.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon navy-bg\">\n                                              <i class=\"fa fa-warning\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>The generated Lorem Ipsum is therefore.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 02:50 pm - 03.10.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                          </div>\n                      </div>\n                      <div id=\"company-1\" class=\"tab-pane\">\n                          <div class=\"m-b-lg\">\n                                  <h2>Tellus Institute</h2>\n\n                                  <p>\n                                      Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero,written in 45 BC. This book is a treatise on.\n                                  </p>\n                                  <div>\n                                      <small>Active project completion with: 48%</small>\n                                      <div class=\"progress progress-mini\">\n                                          <div style=\"width: 48%;\" class=\"progress-bar\"></div>\n                                      </div>\n                                  </div>\n                          </div>\n                          <div class=\"client-detail\">\n                              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 100%;\"><div class=\"full-height-scroll\" style=\"overflow: hidden; width: auto; height: 100%;\">\n\n                                  <strong>Last activity</strong>\n\n                                  <ul class=\"list-group clear-list\">\n                                      <li class=\"list-group-item fist-item\">\n                                          <span class=\"float-right\"> <span class=\"label label-primary\">NEW</span> </span>\n                                          The point of using\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> <span class=\"label label-warning\">WAITING</span></span>\n                                          Lorem Ipsum is that it has\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> <span class=\"label label-danger\">BLOCKED</span> </span>\n                                          If you are going\n                                      </li>\n                                  </ul>\n                                  <strong>Notes</strong>\n                                  <p>\n                                      Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                  </p>\n                                  <hr>\n                                  <strong>Timeline activity</strong>\n                                  <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline\">\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-bolt\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>There are many variations of passages of Lorem Ipsum available.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 06:10 pm - 11.03.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon navy-bg\">\n                                              <i class=\"fa fa-warning\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>The generated Lorem Ipsum is therefore.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 02:50 pm - 03.10.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                          </div>\n                      </div>\n                      <div id=\"company-2\" class=\"tab-pane\">\n                          <div class=\"m-b-lg\">\n                              <h2>Penatibus Consulting</h2>\n\n                              <p>\n                                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.\n                              </p>\n                              <div>\n                                  <small>Active project completion with: 22%</small>\n                                  <div class=\"progress progress-mini\">\n                                      <div style=\"width: 22%;\" class=\"progress-bar\"></div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"client-detail\">\n                              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 100%;\"><div class=\"full-height-scroll\" style=\"overflow: hidden; width: auto; height: 100%;\">\n\n                                  <strong>Last activity</strong>\n\n                                  <ul class=\"list-group clear-list\">\n                                      <li class=\"list-group-item fist-item\">\n                                          <span class=\"float-right\"> <span class=\"label label-warning\">WAITING</span> </span>\n                                          Aldus PageMaker\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"><span class=\"label label-primary\">NEW</span> </span>\n                                          Lorem Ipsum, you need to be sure\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"> <span class=\"label label-danger\">BLOCKED</span> </span>\n                                          The generated Lorem Ipsum\n                                      </li>\n                                  </ul>\n                                  <strong>Notes</strong>\n                                  <p>\n                                      Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                  </p>\n                                  <hr>\n                                  <strong>Timeline activity</strong>\n                                  <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline\">\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-bolt\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>There are many variations of passages of Lorem Ipsum available.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 06:10 pm - 11.03.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon navy-bg\">\n                                              <i class=\"fa fa-warning\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>The generated Lorem Ipsum is therefore.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 02:50 pm - 03.10.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                          </div>\n                      </div>\n                      <div id=\"company-3\" class=\"tab-pane\">\n                          <div class=\"m-b-lg\">\n                              <h2>Ultrices Incorporated</h2>\n\n                              <p>\n                                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.\n                              </p>\n                              <div>\n                                  <small>Active project completion with: 72%</small>\n                                  <div class=\"progress progress-mini\">\n                                      <div style=\"width: 72%;\" class=\"progress-bar\"></div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"client-detail\">\n                              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 100%;\"><div class=\"full-height-scroll\" style=\"overflow: hidden; width: auto; height: 100%;\">\n\n                                  <strong>Last activity</strong>\n\n                                  <ul class=\"list-group clear-list\">\n                                      <li class=\"list-group-item fist-item\">\n                                          <span class=\"float-right\"> <span class=\"label label-danger\">BLOCKED</span> </span>\n                                          Hidden in the middle of text\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\"><span class=\"label label-primary\">NEW</span> </span>\n                                          Non-characteristic words etc.\n                                      </li>\n                                      <li class=\"list-group-item\">\n                                          <span class=\"float-right\">  <span class=\"label label-warning\">WAITING</span> </span>\n                                          Bonorum et Malorum\n                                      </li>\n                                  </ul>\n                                  <strong>Notes</strong>\n                                  <p>\n                                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.\n                                  </p>\n                                  <hr>\n                                  <strong>Timeline activity</strong>\n                                  <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline\">\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-bolt\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>There are many variations of passages of Lorem Ipsum available.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 06:10 pm - 11.03.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon navy-bg\">\n                                              <i class=\"fa fa-warning\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>The generated Lorem Ipsum is therefore.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 02:50 pm - 03.10.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-coffee\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Conference on the sales results for the previous year.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 2:10 pm - 12.06.2014 </span>\n                                          </div>\n                                      </div>\n                                      <div class=\"vertical-timeline-block\">\n                                          <div class=\"vertical-timeline-icon gray-bg\">\n                                              <i class=\"fa fa-briefcase\"></i>\n                                          </div>\n                                          <div class=\"vertical-timeline-content\">\n                                              <p>Many desktop publishing packages and web page editors now use Lorem.\n                                              </p>\n                                              <span class=\"vertical-date small text-muted\"> 4:20 pm - 10.05.2014 </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n\n\n\n\n\n   </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/landing/profil-person/profil-person.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/landing/profil-person/profil-person.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfilPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPersonComponent", function() { return ProfilPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilPersonComponent = /** @class */ (function () {
    function ProfilPersonComponent() {
    }
    ProfilPersonComponent.prototype.ngOnInit = function () {
    };
    ProfilPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profil-person',
            template: __webpack_require__(/*! ./profil-person.component.html */ "./src/app/landing/profil-person/profil-person.component.html"),
            styles: [__webpack_require__(/*! ./profil-person.component.css */ "./src/app/landing/profil-person/profil-person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilPersonComponent);
    return ProfilPersonComponent;
}());



/***/ }),

/***/ "./src/app/landing/profile-local/profile-local.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/landing/profile-local/profile-local.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvcHJvZmlsZS1sb2NhbC9wcm9maWxlLWxvY2FsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/profile-local/profile-local.component.html":
/*!********************************************************************!*\
  !*** ./src/app/landing/profile-local/profile-local.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" style=\"margin-top: 100px\">\n\n\n  <div class=\"container\">\n    <div class=\"wrapper wrapper-content\">\n      <div class=\"row animated fadeInRight\">\n        <div class=\"col-md-5\">\n          <div class=\"ibox \">\n            <div class=\"ibox-title text-center\">\n              <h2>{{ level?.properties.name }}</h2>\n            </div>\n            <div>\n              <div class=\"ibox-content no-padding border-left-right\">\n                <app-country-map *ngIf=\"level\" [country]=\"level\"></app-country-map>\n\n              </div>\n              <div class=\"ibox-content profile-content\">\n                <div class=\"row m-t-md\">\n                  <h5>\n                    About {{ level?.properties.name }}\n                  </h5>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et\n                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.\n                  </p>\n                </div>\n                <div class=\"hr-line-dashed\"></div>\n                <div class=\"row m-t-md\">\n                  <div class=\"col-4\">\n\n                    <!-- <p class=\"font-bold\"><i class=\"fas fa-globe-africa\"></i> Subregion : {{ level?.region }}</p> -->\n                  </div>\n                  <div class=\"col-4\">\n                    <p><i class=\"fas fa-city\"></i> Capital :</p>\n\n                  </div>\n                  <!-- <div class=\"col-4\">\n\n                  <p><i class=\"far fa-money-bill-alt\"></i> National currency :</p>\n                </div> -->\n                  <div class=\"col-4\">\n\n                    <p><i class=\"far fa-money-bill-alt\"></i> Code ISO 3166-1 :</p>\n                  </div>\n                  <div class=\"col-4\">\n\n                    <p><i class=\"fas fa-phone\"></i> Indicatif Tele :</p>\n                  </div>\n\n                </div>\n                <div class=\"hr-line-dashed\"></div>\n                <div class=\"row\">\n\n\n\n                  <div class=\"col-lg-6  \">\n                    <div class=\"row\">\n\n                      <div class=\"col-12  d-flex justify-content-center \">\n                        <ngx-charts-pie-grid [view]=\"optionsSurface.view\" [label]=\"optionsSurface.label\" [scheme]=\"optionsSurface.colorScheme\"\n                          [animations]=\"optionsSurface.animations\" [tooltipText]=\"optionsSurface.tooltipTemplate\"\n                          [tooltipDisabled]=\"optionsSurface.tooltipDisabled\" [results]=\"optionsSurface.data\"\n                          [designatedTotal]=\"optionsSurface.totalValue\">\n                        </ngx-charts-pie-grid>\n                      </div>\n                      <div class=\"col-12\">\n                        <h3 class=\"text-center\">Area From {{ country?.name }} Km2</h3>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"row\">\n\n                      <div class=\"col-12  d-flex justify-content-center \">\n                        <ngx-charts-pie-grid [view]=\"optionsPopulation.view\" [label]=\"optionsPopulation.label\" [scheme]=\"optionsPopulation.colorScheme\"\n                          [animations]=\"optionsPopulation.animations\" [tooltipText]=\"optionsPopulation.tooltipTemplate\"\n                          [tooltipDisabled]=\"optionsPopulation.tooltipDisabled\" [results]=\"optionsPopulation.data\"\n                          [designatedTotal]=\"optionsPopulation.totalValue\">\n                        </ngx-charts-pie-grid>\n                      </div>\n                      <div class=\"col-12  \">\n                        <h3 class=\"text-center\">Population from {{ country?.properties.name}} </h3>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n\n                </div>\n                <div class=\"hr-line-dashed\"></div>\n\n\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"col-lg-7\">\n          <div class=\"tabs-container\">\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n              <!-- Levels -->\n              <li><a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#tab-1\">Levels</a></li>\n              <!-- fin  -->\n              <!-- Persons -->\n              <li><a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab-2\">Persons </a></li>\n            </ul>\n            <div class=\"tab-content\">\n              <!-- tab levels -->\n              <div role=\"tabpanel\" id=\"tab-1\" class=\"tab-pane active show\">\n                <div class=\"panel-body\">\n                  <div class=\"container\">\n                    <!-- table levels -->\n                    <h2><i _ngcontent-c11=\"\" class=\"fa fa-bank\"></i> Local government of {{ level?.properties.name }}\n                    </h2>\n                    <p>\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum consequat tortor ut\n                    </p>\n\n                    <div class=\"row\">\n\n\n                      <div class=\"col-md-12\">\n                        <div class=\"ibox\">\n                          <div class=\"ibox-title\">\n                            <div class=\"d-flex justify-content-between col-12\">\n                              <h2>{{title | uppercase}}</h2>\n\n                              <button class=\"btn btn-info\" [routerLink]=\"['/administrateur/levels/' , level?.properties.id  , 2 ]\"\n                                [queryParams]=\"{ c :level?.properties.country_id}\">Maps\n                                Levels</button>\n                            </div>\n                          </div>\n                          <div class=\"ibox-content\">\n                            <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTriggerLevels\" class=\"table table-hover\">\n                                  <thead>\n                                    <tr>\n                                      <th>ID</th>\n                                      <th> name</th>\n                                    </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let level of levels\">\n                                      <td>{{ level.properties.id }}</td>\n                                      <td>{{level.properties.name}}</td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                              </div>\n                            </div>\n                          </div>\n\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n\n              </div>\n              <!-- tab Persons -->\n              <div role=\"tabpanel\" id=\"tab-2\" class=\"tab-pane\">\n                <div class=\"panel-body\">\n                  <div class=\"container\">\n                    <!-- table levels -->\n                    <h2><i _ngcontent-c11=\"\" class=\"fa fa-bank\"></i> LeaderShips of {{ level?.properties.name }} </h2>\n                    <p>\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum consequat tortor ut\n                    </p>\n\n                    <div class=\"row\">\n\n\n                      <div class=\"col-md-12\">\n                        <div class=\"ibox\">\n                          <div class=\"ibox-title\">\n                            LeaderShips\n                          </div>\n\n                          <div class=\"ibox-content \">\n                            <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTriggerLevels\" class=\"table table-hover\">\n                                  <thead>\n                                    <tr>\n                                      <th>ID</th>\n                                      <th>First name</th>\n                                      <th>Last name</th>\n                                    </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let person of persons\">\n                                      <td>{{ person.id }}</td>\n                                      <td>{{person.first_name}}</td>\n                                      <td>{{person.last_name}}</td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"ibox-footer\">\n                            <div class=\"row text-center\">\n                              <div class=\"col-md-12\">\n\n                                <button class=\"btn btn-success m-r-xs\">Add New Person</button>\n\n                              </div>\n                            </div>\n                          </div>\n\n\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/profile-local/profile-local.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/landing/profile-local/profile-local.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileLocalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLocalComponent", function() { return ProfileLocalComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_level_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/level.service */ "./src/app/services/level.service.ts");
/* harmony import */ var src_app_services_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var src_app_maps_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maps/map.service */ "./src/app/maps/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileLocalComponent = /** @class */ (function () {
    function ProfileLocalComponent(_route, _levelService, _personService, _countryService, _router, _mapService) {
        this._route = _route;
        this._levelService = _levelService;
        this._personService = _personService;
        this._countryService = _countryService;
        this._router = _router;
        this._mapService = _mapService;
        this.dtOptions = {};
        this.dtTriggerLevels = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.dtTriggerPersons = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.title = 'Level 2';
        this.optionsSurface = {
            view: [],
            label: 'Total',
            totalValue: null,
            animations: true,
            tooltipDisabled: false,
            tooltipTemplate: null,
            colorScheme: { domain: [] },
            data: null
        };
        this.optionsPopulation = {
            view: [],
            label: 'Total',
            totalValue: null,
            animations: true,
            tooltipDisabled: false,
            tooltipTemplate: null,
            colorScheme: { domain: [] },
            data: null
        };
        this.dataGraphe = [];
        this.levels = [];
        this.persons = [];
        this.level_stage = null;
    }
    ProfileLocalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParamMap.subscribe(function (params) {
            _this.country_id = +params.get('c');
            _this._route.paramMap.subscribe(function (params2) {
                _this.level_id = +params2.get('id');
                _this._levelService.getLevel(_this.country_id, _this.level_id).subscribe(function (levelApi) {
                    _this.level = levelApi.data;
                    console.log(_this.level);
                    _this.title = _this.level.properties.name + ' Levels 2';
                    // this.getGraphSurface(this.level, this.country);
                    // this.getGraphPopulation(this.level, this.country);
                }, function (error) {
                    console.log(error);
                });
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        // this.getLevels(this.country_id, this.level_id);
        // this.getPersons(this._id);
    };
    ProfileLocalComponent.prototype.getPersons = function (level_id) {
        var _this = this;
        this._personService.getPersons(level_id).subscribe(function (personApi) {
            _this.persons = personApi.data;
            _this.dtTriggerPersons.next();
        }, function (error) {
            console.log(error);
        });
    };
    ProfileLocalComponent.prototype.getLevels = function (level_id, country_id) {
        var _this = this;
        this._levelService.getLevels(country_id, level_id).subscribe(function (levelApi) {
            _this.levels = levelApi.data;
            console.log(_this.levels);
            _this.dtTriggerLevels.next();
        }, function (error) {
            console.log(error);
        });
    };
    ProfileLocalComponent.prototype.getGraphSurface = function (level, country_id) {
        var _this = this;
        var surface_country = this._mapService.getSurface(this.country.geometry);
        this.optionsSurface.view = [200, 200];
        this.optionsSurface.label = 'Area';
        this.optionsSurface.totalValue = surface_country;
        this.optionsSurface.tooltipDisabled = false;
        this.optionsSurface.colorScheme.domain = [
            '#01a48f',
            '#00cbc6',
            '#41e6e1',
            '#b6f3f5'
        ];
        this.optionsSurface.tooltipTemplate = function () {
            return '<ng-template>' + _this.level.properties.area + ' km2' + '</ng-template>';
        };
        this.optionsSurface.data = [{ name: level.properties.name, value: this._mapService.getSurface(level.geometry) }];
    };
    ProfileLocalComponent.prototype.getGraphPopulation = function (level, country) {
        var _this = this;
        this.optionsPopulation.view = [200, 200];
        this.optionsPopulation.label = 'Population ' + level.properties.population_year;
        this.optionsPopulation.totalValue = 1216000000;
        this.optionsPopulation.tooltipDisabled = false;
        this.optionsPopulation.colorScheme.domain = [
            '#00b9ee',
            '#b6f3f5'
        ];
        this.optionsPopulation.tooltipTemplate = function () {
            return '<ng-template>' + _this.country.properties.population + ' ' + level.properties.population_year + '</ng-template>';
        };
        this.optionsPopulation.data = [{ name: level.properties.name, value: level.properties.population }];
    };
    ProfileLocalComponent.prototype.gotoAddLevelByFile = function (id) {
        this._router.navigate([id], {
            relativeTo: this._route
        });
    };
    ProfileLocalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-local',
            template: __webpack_require__(/*! ./profile-local.component.html */ "./src/app/landing/profile-local/profile-local.component.html"),
            styles: [__webpack_require__(/*! ./profile-local.component.css */ "./src/app/landing/profile-local/profile-local.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_level_service__WEBPACK_IMPORTED_MODULE_3__["LevelService"],
            src_app_services_person_service__WEBPACK_IMPORTED_MODULE_4__["PersonService"],
            src_app_services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_maps_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]])
    ], ProfileLocalComponent);
    return ProfileLocalComponent;
}());



/***/ }),

/***/ "./src/app/landing/second-features-section/second-features-section.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/landing/second-features-section/second-features-section.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc2Vjb25kLWZlYXR1cmVzLXNlY3Rpb24vc2Vjb25kLWZlYXR1cmVzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/second-features-section/second-features-section.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/landing/second-features-section/second-features-section.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"features\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>Even more great feautres</h1>\n        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>\n      </div>\n    </div>\n    <div class=\"row features-block\">\n      <div class=\"col-lg-3 features-text wow fadeInLeft\">\n        <small>INSPINIA</small>\n        <h2>Perfectly designed </h2>\n        <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin\n          dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of\n          reusable UI components and integrated with latest jQuery plugins.</p>\n        <a href=\"\" class=\"btn btn-primary\">Learn more</a>\n      </div>\n      <div class=\"col-lg-6 text-right m-t-n-lg wow zoomIn\">\n        <img src=\"assets/img/landing/iphone.jpg\" class=\"img-fluid\" alt=\"dashboard\">\n      </div>\n      <div class=\"col-lg-3 features-text text-right wow fadeInRight\">\n        <small>INSPINIA</small>\n        <h2>Perfectly designed </h2>\n        <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin\n          dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of\n          reusable UI components and integrated with latest jQuery plugins.</p>\n        <a href=\"\" class=\"btn btn-primary\">Learn more</a>\n      </div>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/landing/second-features-section/second-features-section.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/landing/second-features-section/second-features-section.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SecondFeaturesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondFeaturesSectionComponent", function() { return SecondFeaturesSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondFeaturesSectionComponent = /** @class */ (function () {
    function SecondFeaturesSectionComponent() {
    }
    SecondFeaturesSectionComponent.prototype.ngOnInit = function () {
    };
    SecondFeaturesSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second-features-section',
            template: __webpack_require__(/*! ./second-features-section.component.html */ "./src/app/landing/second-features-section/second-features-section.component.html"),
            styles: [__webpack_require__(/*! ./second-features-section.component.css */ "./src/app/landing/second-features-section/second-features-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondFeaturesSectionComponent);
    return SecondFeaturesSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/slider-section/slider-section.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/landing/slider-section/slider-section.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc2xpZGVyLXNlY3Rpb24vc2xpZGVyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/slider-section/slider-section.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing/slider-section/slider-section.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"inSlider\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#inSlider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#inSlider\" data-slide-to=\"1\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>WHO WE ARE<br /> United Cities and Local<br /> Governments of Africa (UCLG Africa)<br />\n            </h1>\n            <p>\n              <a class=\"btn btn-lg btn-primary\" href=\"https://www.uclga.org/who-we-are/\" role=\"button\" target=\"_blank\">READ\n                MORE</a>\n            </p>\n          </div>\n          <!-- <div class=\"carousel-image wow zoomIn\">\n          <img src=\"assets/img/landing/laptop.png\" alt=\"laptop\" />\n        </div> -->\n        </div>\n        <!-- Set background for slide in css -->\n        <div class=\"header-back one\"></div>\n\n      </div>\n      <div class=\"carousel-item\">\n        <div class=\"container\">\n          <div class=\"carousel-caption blank\">\n            <h1>THE VOICE <br /> OF LOCAL AFRICA.\n            </h1>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"https://www.uclga.org/\" role=\"button\" target=\"_blank\">UCLGA...Learn\n                more</a></p>\n          </div>\n        </div>\n        <!-- Set background for slide in css -->\n        <div class=\"header-back two\"></div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#inSlider\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#inSlider\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n\n    </a>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/landing/slider-section/slider-section.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/slider-section/slider-section.component.ts ***!
  \********************************************************************/
/*! exports provided: SliderSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderSectionComponent", function() { return SliderSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderSectionComponent = /** @class */ (function () {
    function SliderSectionComponent() {
    }
    SliderSectionComponent.prototype.ngOnInit = function () {
    };
    SliderSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider-section',
            template: __webpack_require__(/*! ./slider-section.component.html */ "./src/app/landing/slider-section/slider-section.component.html"),
            styles: [__webpack_require__(/*! ./slider-section.component.css */ "./src/app/landing/slider-section/slider-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderSectionComponent);
    return SliderSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/accordion/accordion.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/landing/statistic/accordion/accordion.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc3RhdGlzdGljL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/statistic/accordion/accordion.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing/statistic/accordion/accordion.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"row\">\r\n         <div class=\"col-lg-3\">\r\n          <div class=\"card-header\" id=\"headingOne\">\r\n            <h5 class=\"mb-0\">\r\n              <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                Collapsible Group Item #1\r\n              </button>\r\n            </h5>\r\n            </div>\r\n         </div>\r\n         <div class=\"col-lg-3\">\r\n            <div class=\"card-header\" id=\"headingTwo\">\r\n              <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                  Collapsible Group Item #2\r\n                </button>\r\n              </h5>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <div class=\"card-header\" id=\"headingThree\">\r\n                  <h5 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                      Collapsible Group Item #3\r\n                    </button>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3\">\r\n                  <div class=\"card-header\" id=\"headingfour\">\r\n                    <h5 class=\"mb-0\">\r\n                      <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsefour\" aria-expanded=\"false\" aria-controls=\"collapsefour\">\r\n                        Collapsible Group Item #4\r\n                      </button>\r\n                    </h5>\r\n                  </div>\r\n                </div>\r\n          <div class=\"row\">\r\n          <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body ml-3\">\r\n                <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"\" name=\"\"> Option1 one is this and that—be sure toinclude why it's great </label></div>\r\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option 2 two can be something else and selecting it willdeselect option one </label></div>\r\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option3 two can be something else and selecting it willdeselect option one </label></div>\r\n            </div>\r\n              </div>\r\n              </div>         \r\n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body ml-2\">\r\n                <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"\" name=\"\"> Option4 one is this and that—be sure toinclude why it's great </label></div>\r\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option5 two can be something else and selecting it willdeselect option one </label></div>\r\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option6 two can be something else and selecting it willdeselect option one </label></div> \r\n           </div>\r\n          </div>\r\n          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n                <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"\" name=\"\"> Option7 one is this and that—be sure toinclude why it's great </label></div>\r\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option8 two can be something else and selecting it willdeselect option one </label></div>\r\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option9 two can be something else and selecting it willdeselect option one </label></div>            </div>\r\n          </div>\r\n            <div id=\"collapsefour\" class=\"collapse\" aria-labelledby=\"headingfour\" data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                      <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"\" name=\"\"> Option one is this and that—be sure toinclude why it's great </label></div>\r\n                      <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>\r\n                      <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/landing/statistic/accordion/accordion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/statistic/accordion/accordion.component.ts ***!
  \********************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/landing/statistic/accordion/accordion.component.html"),
            styles: [__webpack_require__(/*! ./accordion.component.css */ "./src/app/landing/statistic/accordion/accordion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/chart/chart.component.css":
/*!*************************************************************!*\
  !*** ./src/app/landing/statistic/chart/chart.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc3RhdGlzdGljL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/statistic/chart/chart.component.html":
/*!**************************************************************!*\
  !*** ./src/app/landing/statistic/chart/chart.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"ibox \">\r\n            <div class=\"ibox-title\">\r\n                <h5>Line Chart Example\r\n                    <small>With custom colors.</small>\r\n                </h5>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n                <div><iframe class=\"chartjs-hidden-iframe\" style=\"width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;\"></iframe>\r\n                    <canvas id=\"lineChart\" height=\"187\" width=\"403\" style=\"display: block; width: 359px; height: 167px;\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"ibox \">\r\n            <div class=\"ibox-title\">\r\n                <h5>Bar Chart Example</h5>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n                <div><iframe class=\"chartjs-hidden-iframe\" style=\"width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;\"></iframe>\r\n                    <canvas id=\"barChart\" height=\"187\" width=\"403\" style=\"display: block; width: 359px; height: 167px;\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-title\">\r\n                    <h5>Polar Area</h5>\r\n\r\n                    <div ibox-tools></div>\r\n                </div>\r\n                <div class=\"ibox-content\">\r\n                    <div>\r\n                        <canvas polarchart options=\"chart.polarOptions\" data=\"chart.polarData\" height=\"140\" responsive=true></canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-title\">\r\n                    <h5>Pie </h5>\r\n\r\n                    <div ibox-tools></div>\r\n                </div>\r\n                <div class=\"ibox-content\">\r\n                    <div>\r\n                        <canvas doughnutchart options=\"chart.doughnutOptions\" data=\"chart.doughnutData\" height=\"140\" responsive=true></canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-title\">\r\n                    <h5>Radar Chart Example</h5>\r\n                    <div ibox-tools></div>\r\n                </div>\r\n                <div class=\"ibox-content\">\r\n                    <div>\r\n                        <canvas radarchart options=\"chart.radarOptions\" data=\"chart.radarData\" responsive=true></canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/landing/statistic/chart/chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/landing/statistic/chart/chart.component.ts ***!
  \************************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/landing/statistic/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/landing/statistic/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/country-statistic/country-statistic.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/landing/statistic/country-statistic/country-statistic.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc3RhdGlzdGljL2NvdW50cnktc3RhdGlzdGljL2NvdW50cnktc3RhdGlzdGljLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/statistic/country-statistic/country-statistic.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/landing/statistic/country-statistic/country-statistic.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider-section></app-slider-section>\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-9\">\n      <h2>Statistics</h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/landing/home\">Home</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a #h1Variable></a>\n        </li>\n      </ol>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <app-statistc-map></app-statistc-map>\n\n    </div>\n  </div>\n\n\n\n\n\n\n\n  <div class=\"row\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        Local Gouverment :\n      </div>\n      <div class=\"panel-body text-center\">\n\n        <div class=\"row \">\n          <div class=\"col-lg-12 \">\n            <ngx-charts-bar-vertical-2d [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"multi\" [gradient]=\"gradient\"\n              [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\"\n              [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\">\n            </ngx-charts-bar-vertical-2d>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n  <div class=\"row\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        STATISTICS\n      </div>\n      <div class=\"panel-body\">\n\n\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <!-- <a [routerLink]=\"/landing/localy-elected\"> -->\n            <a>\n\n\n              <div class=\"ibox\">\n                <div class=\"ibox-content product-box\">\n\n\n                  <img class=\"w-100 h-200   \" src=\"assets/img/landing/eluslocaux.jpg\" alt=\"First slide\">\n\n                  <div class=\"product-desc\">\n                    <span class=\"product-price\">\n                      Elus locaux\n                    </span>\n\n                    <a class=\"product-name\"> Elus locaux</a>\n\n\n\n                    <p class=\"text-primary\">Cités et Gouvernements Locaux Unis d'Afrique (CGLU Afrique )​.\n                      L'organisation faîtière des\n                      gouvernements locaux africains a été fondée en 2005 dans la ville ...</p>\n\n\n\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-md-6\">\n            <a>\n              <!-- <a href=\"/landing/general-statistics\"> -->\n              <div class=\"ibox\">\n                <div class=\"ibox-content product-box\">\n\n\n                  <img class=\" w-100  h-200   \" src=\"assets/img/landing/statisticg.png\" alt=\"First slide\">\n\n                  <div class=\"product-desc\">\n                    <span class=\"product-price\">\n                      General Statistics\n                    </span>\n\n                    <a class=\"product-name\"> General Statistics</a>\n\n\n\n\n                    <p>Conference on the sales results for the previous year. Monica please examine sales trends in\n                      marketing and products.\n                      Below please find the current status of the\n                      sale.</p>\n\n\n                  </div>\n                </div>\n              </div>\n            </a>\n\n          </div>\n\n          <div class=\"col-md-6\">\n\n\n            <a>\n              <!-- <a href=\"/landing/local-government\"> -->\n              <div class=\"ibox\">\n                <div class=\"ibox-content product-box\">\n\n\n                  <img class=\"d-block w-100    \" src=\"assets/img/landing/A-sitting-of-the-Pan-African-Parliament-640x381.jpg\"\n                    alt=\"First slide\">\n\n                  <div class=\"product-desc\">\n                    <span class=\"product-price\">\n                      Local communities\n                    </span>\n\n                    <a class=\"product-name\"> Local communities</a>\n\n\n\n                    <div class=\"medium m-t-xs\">\n                      Cités et Gouvernements Locaux Unis d'Afrique (CGLU Afrique )​. L'organisation faîtière des\n                      gouvernements locaux africains a été fondée en 2005 dans la ville ...\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </a>\n\n          </div>\n          <div class=\"col-md-6\">\n            <!-- <a href=\"/landing/development-partners\"> -->\n            <a>\n              <div class=\"ibox\">\n                <div class=\"ibox-content product-box\">\n\n\n                  <img class=\"d-block w-100    \" src=\"assets/img/landing/developement.jpg\" alt=\"First slide\">\n\n                  <div class=\"product-desc\">\n                    <span class=\"product-price\">\n                      Development Partners\n                    </span>\n\n                    <a class=\"product-name\"> Development Partners</a>\n\n\n\n                    <div class=\"medium m-t-xs\">\n                      Cités et Gouvernements Locaux Unis d'Afrique (CGLU Afrique )​. L'organisation faîtière des\n                      gouvernements locaux africains a été fondée en 2005 dans la ville ...\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n\n\n\n\n\n      </div>\n\n    </div>\n\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/statistic/country-statistic/country-statistic.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/landing/statistic/country-statistic/country-statistic.component.ts ***!
  \************************************************************************************/
/*! exports provided: CountryStatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryStatisticComponent", function() { return CountryStatisticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryStatisticComponent = /** @class */ (function () {
    function CountryStatisticComponent() {
    }
    CountryStatisticComponent.prototype.ngOnInit = function () {
    };
    CountryStatisticComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-statistic',
            template: __webpack_require__(/*! ./country-statistic.component.html */ "./src/app/landing/statistic/country-statistic/country-statistic.component.html"),
            styles: [__webpack_require__(/*! ./country-statistic.component.css */ "./src/app/landing/statistic/country-statistic/country-statistic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryStatisticComponent);
    return CountryStatisticComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/data.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/statistic/data.ts ***!
  \*******************************************/
/*! exports provided: singleCL, singleEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCL", function() { return singleCL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleEL", function() { return singleEL; });
var singleCL = [
    {
        'name': 'Afrique du Nord',
        'value': 120
    },
    {
        'name': 'Afrique de l\'Ouest',
        'value': 160
    },
    {
        'name': 'Afrique de l\'Est',
        'value': 80
    },
    {
        'name': 'Afrique Centrale',
        'value': 90
    },
    {
        'name': 'Afrique du Sud',
        'value': 130
    }
];
var singleEL = [
    {
        'name': 'Afrique du Nord',
        'value': 1200
    },
    {
        'name': 'Afrique de l\'Ouest',
        'value': 1600
    },
    {
        'name': 'Afrique de l\'Est',
        'value': 2250
    },
    {
        'name': 'Afrique Centrale',
        'value': 1420
    },
    {
        'name': 'Afrique du Sud',
        'value': 1325
    }
];


/***/ }),

/***/ "./src/app/landing/statistic/development-partners/development-partners.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/landing/statistic/development-partners/development-partners.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc3RhdGlzdGljL2RldmVsb3BtZW50LXBhcnRuZXJzL2RldmVsb3BtZW50LXBhcnRuZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/statistic/development-partners/development-partners.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/landing/statistic/development-partners/development-partners.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"\">\n      <h2><br></h2>\n      <h2><br></h2>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-9\">\n      <h2>Statistics</h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/landing/home\">Home / Statistics</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a #h1Variable></a>\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"ml-2\">\n    <h1><i class=\"fa fa-line-chart\"></i>\n      Development Partners </h1>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <img class=\"d-block w-100 border rounded\"\n             src=\"assets/img/landing/developement.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"ibox col-md-6\">\n        <div class=\"ibox-content\">\n          <h2>\n            The European languages are members\n          </h2>\n\n\n          <p>\n            The languages only differ in their grammar, their pronunciation and their most common words. Everyone\n            realizes why a new common language would be desirable: one could refuse to pay expensive translators.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-lg \">\n        <div class=\"ibox-content\">\n          <div class=\"tabs-container\">\n            <ul class=\"nav nav-tabs  \" role=\"tablist\">\n              <li><a class=\"nav-link bg-primary border\" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\"\n                     data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab1')\"> Population</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab2')\">Superficie</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab3')\"> %outils de communication </a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab4')\"> Finances (Budget)</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab5.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab5')\"> collectivités avec Maire élu</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab6.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab6')\"> conseillers communaux</a></li>\n            </ul>\n            <div class=\"tab-content\">\n              <!--  body of Population -->\n              <div role=\"tabpanel\" id=\"tab1\" #tab1 class=\"tab-pane\"\n                   [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans1\" name=\"someGroupName1\" checked/>\n                          <label for=\"Plans1\">Rapport annuel disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans2\" name=\"someGroupName1\"/>\n                          <label for=\"Plans2\">Rapport sur le développement de la collectivité </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans3\" name=\"someGroupName1\"/>\n                          <label for=\"Plans3\">Rapport sur les manquements </label>\n                        </div>\n                      </div>\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans4\" name=\"someGroupName1\"/>\n                          <label for=\"Plans4\">Plan stratégique disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans5\" name=\"someGroupName1\"/>\n                          <label for=\"Plans5\">Plan financier disponible </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                </div>\n              </div>\n              <!-- body of Superficie -->\n              <div role=\"tabpanel\" #tab2 id=\"tab2\" class=\"tab-pane\"\n                   [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations1\" name=\"someGroupName5\" checked/>\n                          <label for=\"informations1\">Rôle et composition clairement définie </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations2\" name=\"someGroupName5\"/>\n                          <label for=\"informations2\">CV et biographies des maires disponibles </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations3\" name=\"someGroupName5\"/>\n                          <label for=\"informations3\">Email de la collectivité disponible </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations4\" name=\"someGroupName5\"/>\n                          <label for=\"informations4\">Déclaration disponible </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- body  %outils de communication -->\n              <div role=\"tabpanel\" #tab3 id=\"tab3\" class=\"tab-pane\"\n                   [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"   p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"taxes1\" name=\"someGroupName5\" checked/>\n                          <label for=\"taxes1\">Rapport sur les recettes de taxes </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"taxes2\" name=\"someGroupName5\"/>\n                          <label for=\"taxes2\">Publication transparence des taux </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of Finances (Budget)  -->\n              <div role=\"tabpanel\" #tab4 id=\"tab4\" class=\"tab-pane\"\n                   [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship1\" name=\"someGroupName5\" checked/>\n                          <label for=\"Relationship1\">Outils de communication disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship2\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship2\">Site web disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship3\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship3\">Journal d’information </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship4\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship4\">Newsletter disponible </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship5\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship5\">Pages réseaux sociaux disponibles </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship6\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship6\">Rencontres de la population</label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of collectivités avec Maire élu -->\n              <div role=\"tabpanel\" #tab5 id=\"tab5\" class=\"tab-pane\"\n                   [ngClass]=\"tab5.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"procurement1\" name=\"someGroupName5\" checked/>\n                          <label for=\"procurement1\">Service délivré à la population </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"procurement2\" name=\"someGroupName5\"/>\n                          <label for=\"procurement2\">Existence d’un document de procédures </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of conseillers communaux -->\n              <div role=\"tabpanel\" #tab6 id=\"tab6\" class=\"tab-pane\"\n                   [ngClass]=\"tab6.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Economic1\" name=\"someGroupName5\" checked/>\n                          <label for=\"Economic1\">Budget de la collectivité communiqué </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Economic2\" name=\"someGroupName5\"/>\n                          <label for=\"Economic2\">Recettes de la collectivité </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <app-maps></app-maps>\n"

/***/ }),

/***/ "./src/app/landing/statistic/development-partners/development-partners.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/landing/statistic/development-partners/development-partners.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DevelopmentPartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopmentPartnersComponent", function() { return DevelopmentPartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevelopmentPartnersComponent = /** @class */ (function () {
    function DevelopmentPartnersComponent() {
        this.tabHover = 'tab1';
    }
    DevelopmentPartnersComponent.prototype.ngOnInit = function () {
    };
    DevelopmentPartnersComponent.prototype.onMouseOver = function (id) {
        this.tabHover = id;
    };
    DevelopmentPartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-development-partners',
            template: __webpack_require__(/*! ./development-partners.component.html */ "./src/app/landing/statistic/development-partners/development-partners.component.html"),
            styles: [__webpack_require__(/*! ./development-partners.component.css */ "./src/app/landing/statistic/development-partners/development-partners.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevelopmentPartnersComponent);
    return DevelopmentPartnersComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/general-statistics/general-statistics.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/landing/statistic/general-statistics/general-statistics.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc3RhdGlzdGljL2dlbmVyYWwtc3RhdGlzdGljcy9nZW5lcmFsLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/statistic/general-statistics/general-statistics.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/landing/statistic/general-statistics/general-statistics.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"\">\n      <h2><br></h2>\n      <h2><br></h2>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-9\">\n      <h2>Statistics</h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/landing/home\">Home / Statistics</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a #h1Variable></a>\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"ml-2\">\n    <h1><i class=\"fa fa-pie-chart\"></i>\n      General Statistics </h1>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <img class=\"d-block w-100 border rounded\"\n             src=\"assets/img/landing/statisticg.png\" alt=\"First slide\">\n      </div>\n      <div class=\"ibox col-md-6\">\n        <div class=\"ibox-content\">\n          <h2>\n            The European languages are members\n          </h2>\n\n\n          <p>\n            The languages only differ in their grammar, their pronunciation and their most common words. Everyone\n            realizes why a new common language would be desirable: one could refuse to pay expensive translators.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-lg \">\n        <div class=\"ibox-content\">\n          <div class=\"tabs-container\">\n            <ul class=\"nav nav-tabs  \" role=\"tablist\">\n              <li><a class=\"nav-link bg-primary border\" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\"\n                     data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab1')\"> Population</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab2')\">Superficie</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab3')\"> %outils de communication </a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab4')\"> Finances (Budget)</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab5.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab5')\"> collectivités avec Maire élu</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab6.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab6')\"> conseillers communaux</a></li>\n            </ul>\n            <div class=\"tab-content\">\n              <!--  body of Population -->\n              <div role=\"tabpanel\" id=\"tab1\" #tab1 class=\"tab-pane\"\n                   [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans1\" name=\"someGroupName1\" checked/>\n                          <label for=\"Plans1\">Rapport annuel disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans2\" name=\"someGroupName1\"/>\n                          <label for=\"Plans2\">Rapport sur le développement de la collectivité </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans3\" name=\"someGroupName1\"/>\n                          <label for=\"Plans3\">Rapport sur les manquements </label>\n                        </div>\n                      </div>\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans4\" name=\"someGroupName1\"/>\n                          <label for=\"Plans4\">Plan stratégique disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans5\" name=\"someGroupName1\"/>\n                          <label for=\"Plans5\">Plan financier disponible </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                </div>\n              </div>\n              <!-- body of Superficie -->\n              <div role=\"tabpanel\" #tab2 id=\"tab2\" class=\"tab-pane\"\n                   [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations1\" name=\"someGroupName5\" checked/>\n                          <label for=\"informations1\">Rôle et composition clairement définie </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations2\" name=\"someGroupName5\"/>\n                          <label for=\"informations2\">CV et biographies des maires disponibles </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations3\" name=\"someGroupName5\"/>\n                          <label for=\"informations3\">Email de la collectivité disponible </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations4\" name=\"someGroupName5\"/>\n                          <label for=\"informations4\">Déclaration disponible </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- body  %outils de communication -->\n              <div role=\"tabpanel\" #tab3 id=\"tab3\" class=\"tab-pane\"\n                   [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"   p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"taxes1\" name=\"someGroupName5\" checked/>\n                          <label for=\"taxes1\">Rapport sur les recettes de taxes </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"taxes2\" name=\"someGroupName5\"/>\n                          <label for=\"taxes2\">Publication transparence des taux </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of Finances (Budget)  -->\n              <div role=\"tabpanel\" #tab4 id=\"tab4\" class=\"tab-pane\"\n                   [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship1\" name=\"someGroupName5\" checked/>\n                          <label for=\"Relationship1\">Outils de communication disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship2\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship2\">Site web disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship3\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship3\">Journal d’information </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship4\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship4\">Newsletter disponible </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship5\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship5\">Pages réseaux sociaux disponibles </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship6\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship6\">Rencontres de la population</label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of collectivités avec Maire élu -->\n              <div role=\"tabpanel\" #tab5 id=\"tab5\" class=\"tab-pane\"\n                   [ngClass]=\"tab5.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"procurement1\" name=\"someGroupName5\" checked/>\n                          <label for=\"procurement1\">Service délivré à la population </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"procurement2\" name=\"someGroupName5\"/>\n                          <label for=\"procurement2\">Existence d’un document de procédures </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of conseillers communaux -->\n              <div role=\"tabpanel\" #tab6 id=\"tab6\" class=\"tab-pane\"\n                   [ngClass]=\"tab6.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Economic1\" name=\"someGroupName5\" checked/>\n                          <label for=\"Economic1\">Budget de la collectivité communiqué </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Economic2\" name=\"someGroupName5\"/>\n                          <label for=\"Economic2\">Recettes de la collectivité </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <app-maps></app-maps>\n"

/***/ }),

/***/ "./src/app/landing/statistic/general-statistics/general-statistics.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/landing/statistic/general-statistics/general-statistics.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GeneralStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStatisticsComponent", function() { return GeneralStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeneralStatisticsComponent = /** @class */ (function () {
    function GeneralStatisticsComponent() {
        this.tabHover = 'tab1';
    }
    GeneralStatisticsComponent.prototype.ngOnInit = function () {
    };
    GeneralStatisticsComponent.prototype.onMouseOver = function (id) {
        this.tabHover = id;
    };
    GeneralStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-statistics',
            template: __webpack_require__(/*! ./general-statistics.component.html */ "./src/app/landing/statistic/general-statistics/general-statistics.component.html"),
            styles: [__webpack_require__(/*! ./general-statistics.component.css */ "./src/app/landing/statistic/general-statistics/general-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneralStatisticsComponent);
    return GeneralStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/local-government/local-government.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/landing/statistic/local-government/local-government.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc3RhdGlzdGljL2xvY2FsLWdvdmVybm1lbnQvbG9jYWwtZ292ZXJubWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/statistic/local-government/local-government.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/landing/statistic/local-government/local-government.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/landing/statistic/local-government/local-government.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/landing/statistic/local-government/local-government.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LocalGovernmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalGovernmentComponent", function() { return LocalGovernmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalGovernmentComponent = /** @class */ (function () {
    function LocalGovernmentComponent() {
        this.tabHover = 'tab1';
    }
    LocalGovernmentComponent.prototype.ngOnInit = function () {
    };
    LocalGovernmentComponent.prototype.onMouseOver = function (id) {
        this.tabHover = id;
    };
    LocalGovernmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-government',
            template: __webpack_require__(/*! ./local-government.component.html */ "./src/app/landing/statistic/local-government/local-government.component.html"),
            styles: [__webpack_require__(/*! ./local-government.component.css */ "./src/app/landing/statistic/local-government/local-government.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocalGovernmentComponent);
    return LocalGovernmentComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/localy-elected/localy-elected.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/landing/statistic/localy-elected/localy-elected.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc3RhdGlzdGljL2xvY2FseS1lbGVjdGVkL2xvY2FseS1lbGVjdGVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/landing/statistic/localy-elected/localy-elected.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/landing/statistic/localy-elected/localy-elected.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"\">\n      <h2><br></h2>\n      <h2><br></h2>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-9\">\n      <h2>Statistics</h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/landing/home\">Home / Satistics / Locally Elected</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a #h1Variable></a>\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"ml-2\">\n    <h1><i class=\"fa fa-group\"></i>\n      Locally Elected</h1>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <img class=\"d-block w-100 border rounded\" src=\"assets/img/landing/eluslocaux.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"ibox col-md-6\">\n        <div class=\"ibox-content\">\n          <h2>\n            The European languages are members\n          </h2>\n\n\n          <p>\n            The languages only differ in their grammar, their pronunciation and their most common words. Everyone\n            realizes why a new common language would be desirable: one could refuse to pay expensive translators.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-lg \">\n        <div class=\"ibox-content\">\n          <div class=\"tabs-container\">\n            <ul class=\"nav nav-tabs  \" role=\"tablist\">\n              <li><a class=\"nav-link bg-primary border\" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\"\n                     data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab1')\"> Population</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab2')\">Superficie</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab3')\"> %outils de communication </a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab4')\"> Finances (Budget)</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab5.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab5')\"> collectivités avec Maire élu</a></li>\n              <li><a class=\"nav-link bg-primary\" [ngClass]=\"tab6.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\n                     (mouseover)=\"onMouseOver('tab6')\">  conseillers communaux</a></li>\n            </ul>\n            <div class=\"tab-content\">\n              <!--  body of Population -->\n              <div role=\"tabpanel\" id=\"tab1\" #tab1 class=\"tab-pane\"\n                   [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans1\" name=\"someGroupName1\" checked/>\n                          <label for=\"Plans1\">Rapport annuel disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans2\" name=\"someGroupName1\"/>\n                          <label for=\"Plans2\">Rapport sur le développement de la collectivité </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans3\" name=\"someGroupName1\"/>\n                          <label for=\"Plans3\">Rapport sur les manquements </label>\n                        </div>\n                      </div>\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans4\" name=\"someGroupName1\"/>\n                          <label for=\"Plans4\">Plan stratégique disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\"p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Plans5\" name=\"someGroupName1\"/>\n                          <label for=\"Plans5\">Plan financier disponible </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                </div>\n              </div>\n              <!-- body of Superficie -->\n              <div role=\"tabpanel\" #tab2 id=\"tab2\" class=\"tab-pane\"\n                   [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations1\" name=\"someGroupName5\" checked/>\n                          <label for=\"informations1\">Rôle et composition clairement définie </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations2\" name=\"someGroupName5\"/>\n                          <label for=\"informations2\">CV et biographies des maires disponibles </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations3\" name=\"someGroupName5\"/>\n                          <label for=\"informations3\">Email de la collectivité disponible </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"informations4\" name=\"someGroupName5\"/>\n                          <label for=\"informations4\">Déclaration disponible </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- body  %outils de communication -->\n              <div role=\"tabpanel\" #tab3 id=\"tab3\" class=\"tab-pane\"\n                   [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"   p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"taxes1\" name=\"someGroupName5\" checked/>\n                          <label for=\"taxes1\">Rapport sur les recettes de taxes </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"taxes2\" name=\"someGroupName5\"/>\n                          <label for=\"taxes2\">Publication transparence des taux </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of Finances (Budget)  -->\n              <div role=\"tabpanel\" #tab4 id=\"tab4\" class=\"tab-pane\"\n                   [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship1\" name=\"someGroupName5\" checked/>\n                          <label for=\"Relationship1\">Outils de communication disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship2\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship2\">Site web disponible </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship3\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship3\">Journal d’information </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship4\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship4\">Newsletter disponible </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship5\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship5\">Pages réseaux sociaux disponibles </label>\n                        </div>\n                      </div>\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Relationship6\" name=\"someGroupName5\"/>\n                          <label for=\"Relationship6\">Rencontres de la population</label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of collectivités avec Maire élu -->\n              <div role=\"tabpanel\" #tab5 id=\"tab5\" class=\"tab-pane\"\n                   [ngClass]=\"tab5.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"procurement1\" name=\"someGroupName5\" checked/>\n                          <label for=\"procurement1\">Service délivré à la population </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"procurement2\" name=\"someGroupName5\"/>\n                          <label for=\"procurement2\">Existence d’un document de procédures </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- body of conseillers communaux -->\n              <div role=\"tabpanel\" #tab6 id=\"tab6\" class=\"tab-pane\"\n                   [ngClass]=\"tab6.id == tabHover ? 'active show' : ''\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n\n\n                    <div class=\"col-sm-12 \">\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Economic1\" name=\"someGroupName5\" checked/>\n                          <label for=\"Economic1\">Budget de la collectivité communiqué </label>\n                        </div>\n                      </div>\n\n                      <div class=\" p-xxs b-r-lg  \">\n                        <div class=\"icheck-default\">\n                          <input type=\"radio\" id=\"Economic2\" name=\"someGroupName5\"/>\n                          <label for=\"Economic2\">Recettes de la collectivité </label>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <app-maps></app-maps>\n"

/***/ }),

/***/ "./src/app/landing/statistic/localy-elected/localy-elected.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/landing/statistic/localy-elected/localy-elected.component.ts ***!
  \******************************************************************************/
/*! exports provided: LocalyElectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalyElectedComponent", function() { return LocalyElectedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalyElectedComponent = /** @class */ (function () {
    function LocalyElectedComponent() {
        this.tabHover = 'tab1';
    }
    LocalyElectedComponent.prototype.ngOnInit = function () {
    };
    LocalyElectedComponent.prototype.onMouseOver = function (id) {
        this.tabHover = id;
    };
    LocalyElectedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-localy-elected',
            template: __webpack_require__(/*! ./localy-elected.component.html */ "./src/app/landing/statistic/localy-elected/localy-elected.component.html"),
            styles: [__webpack_require__(/*! ./localy-elected.component.css */ "./src/app/landing/statistic/localy-elected/localy-elected.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocalyElectedComponent);
    return LocalyElectedComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/statistic.component.css":
/*!***********************************************************!*\
  !*** ./src/app/landing/statistic/statistic.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvc3RhdGlzdGljL3N0YXRpc3RpYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/statistic/statistic.component.html":
/*!************************************************************!*\
  !*** ./src/app/landing/statistic/statistic.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider-section></app-slider-section>\r\n<div class=\"container\">\r\n  <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-lg-9\">\r\n      <h2>Statistics</h2>\r\n      <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\">\r\n          <a routerLink=\"/landing/home\">Home</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n          <a #h1Variable></a>\r\n        </li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <app-statistc-map (messageEvent)=\"getOnclickObject($event)\"></app-statistc-map>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"panel\" *ngIf=\"layerObject === null\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n              <i class=\"fa fa-info-circle\"></i>Population\r\n            </div>\r\n            <div class=\"panel-body d-flex justify-content-center\">\r\n              <ngx-charts-bar-horizontal [scheme]=\"colorSchemePopulation\" [results]=\"singlePOP\" [xAxis]=\"showXAxis\"\r\n                [yAxis]=\"showYAxis\" [legend]=\"showLegendBarChart\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\">\r\n              </ngx-charts-bar-horizontal>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n              <i class=\"fa fa-info-circle\"></i>Nombre des Collectivites locales\r\n            </div>\r\n            <div class=\"panel-body d-flex justify-content-center\" style=\"height: 300px\">\r\n              <ngx-charts-advanced-pie-chart [scheme]=\"colorSchemeCL\" [results]=\"singleCL\">\r\n              </ngx-charts-advanced-pie-chart>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n              <i class=\"fa fa-info-circle\"></i>Nombre des Elus Locaux\r\n            </div>\r\n            <div class=\"panel-body d-flex justify-content-center\" style=\"height: 300px\">\r\n              <ngx-charts-advanced-pie-chart [scheme]=\"colorSchemeEL\" [results]=\"singleEL\">\r\n              </ngx-charts-advanced-pie-chart>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"tabs-container\" *ngIf=\"layerObject!==null\">\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n      <li><a class=\"nav-link   m-r-xxs\" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\r\n          (mouseover)=\"onMouseOver('tab1')\">Statistiques generales </a></li>\r\n      <li><a class=\"nav-link  m-r-xxs\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\r\n          (mouseover)=\"onMouseOver('tab2')\"> Elus locaux</a></li>\r\n      <li><a class=\"nav-link  m-r-xxs\" [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\r\n          (mouseover)=\"onMouseOver('tab3')\"> Collectivites locales</a></li>\r\n      <li><a class=\"nav-link  m-r-xxs\" [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\"\r\n          (mouseover)=\"onMouseOver('tab4')\"> Partenaires au developpement</a></li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n      <!--  Statistiques generales -->\r\n      <div role=\"tabpanel\" id=\"tab1\" #tab1 class=\"tab-pane\" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                  <i class=\"fa fa-info-circle\"></i>\r\n                </div>\r\n                <div class=\"panel-body d-flex justify-content-center\">\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"ibox\">\r\n                      <div class=\"ibox-content\">\r\n                        <h5>Nombre Collectivites niveau 1</h5>\r\n                        <h1 class=\"no-margins\">{{ layerObject.levels1_count}}</h1>\r\n                        <!-- <div class=\"stat-percent font-bold text-navy\">98% </div>\r\n                        <small>Total income</small> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"ibox\">\r\n                      <div class=\"ibox-content\">\r\n                        <h5>Nombre elus Locaux</h5>\r\n                        <h1 class=\"no-margins\">{{ layerObject.partie_genre_female }}</h1>\r\n                        <!-- <div class=\"stat-percent font-bold text-navy\">98% </div>\r\n                                            <small>Total income</small> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"ibox\">\r\n                      <div class=\"ibox-content\">\r\n                        <h5>Nombre des partenaires</h5>\r\n                        <h1 class=\"no-margins\">{{ layerObject.N_de_partenaires }}</h1>\r\n                        <!-- <div class=\"stat-percent font-bold text-navy\">98% </div>\r\n                                                                <small>Total income</small> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"ibox\">\r\n                      <div class=\"ibox-content\">\r\n                        <h5>Nombre des ministere</h5>\r\n                        <h1 class=\"no-margins\">{{layerObject.N_des_conseillers_communaux}}</h1>\r\n                        <!-- <div class=\"stat-percent font-bold text-navy\">98% </div>\r\n                                                                                    <small>Total income</small> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- body of informations GÉNÉRALES -->\r\n      <div role=\"tabpanel\" #tab2 id=\"tab2\" class=\"tab-pane\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-6\">\r\n\r\n              <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                  <i class=\"fa fa-info-circle\"></i>Parite genre\r\n                </div>\r\n                <div class=\"panel-body d-flex justify-content-center\" style=\"height: 300px\">\r\n                  <ngx-charts-pie-grid [view]=\"view\" [scheme]=\"colorSchemeCL\" [results]=\"singleParite\">\r\n                  </ngx-charts-pie-grid>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n\r\n              <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                  <i class=\"fa fa-info-circle\"></i>Statut (elu ou nomme)\r\n                </div>\r\n                <div class=\"panel-body d-flex justify-content-center\" style=\"height: 300px\">\r\n                  <ngx-charts-pie-grid [view]=\"view\" [scheme]=\"colorSchemeEL\" [results]=\"singleStatut\">\r\n                  </ngx-charts-pie-grid>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <!-- body  Local taxes, rates  -->\r\n      <div role=\"tabpanel\" #tab3 id=\"tab3\" class=\"tab-pane\" [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\">\r\n        <div class=\"panel-body\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- body of Relationship with citizen  -->\r\n      <div role=\"tabpanel\" #tab4 id=\"tab4\" class=\"tab-pane\" [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\">\r\n        <div class=\"panel-body\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/statistic/statistic.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/landing/statistic/statistic.component.ts ***!
  \**********************************************************/
/*! exports provided: StatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticComponent", function() { return StatisticComponent; });
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/landing/statistic/data.ts");
/* harmony import */ var src_app_services_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/region.service */ "./src/app/services/region.service.ts");
/* harmony import */ var src_app_maps_statistc_map_statistc_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/maps/statistc-map/statistc-map.component */ "./src/app/maps/statistc-map/statistc-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatisticComponent = /** @class */ (function () {
    function StatisticComponent(_countriesService, _regionsService) {
        this._countriesService = _countriesService;
        this._regionsService = _regionsService;
        this.countries = [];
        this.singlePOP = [];
        this.singleParite = [];
        this.singleStatut = [];
        this.tabHover = 'tab1';
        this.regions = [];
        this.layerObject = null;
        this.legendPosition = ['right', 'below'];
        // options
        this.showLegend = true;
        this.colorSchemeCL = {
            domain: ['#125f75', '#1995ad', '#a1d6e2', '#bcbabe', '#f1f1f2']
        };
        this.colorSchemeEL = {
            domain: ['#DE7A22', '#20948B', '#6AB187', '#F4CC70', '#f1f1f2']
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.view = [400, 200];
        // bar chart
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegendBarChart = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Population';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Region';
        this.colorSchemePopulation = {
            domain: ['#1F1F26', '#283655', '#4d648d', '#8799bb', '#d0e1f9']
        };
        Object.assign(this, { singleCL: _data__WEBPACK_IMPORTED_MODULE_2__["singleCL"], singleEL: _data__WEBPACK_IMPORTED_MODULE_2__["singleEL"] });
    }
    StatisticComponent.prototype.getOnclickObject = function ($event) {
        this.layerObject = $event;
        this.singleParite = [{
                name: 'male',
                value: this.layerObject.partie_genre_male
            },
            {
                name: 'female',
                value: this.layerObject.partie_genre_female
            }];
        this.singleStatut = [{
                name: 'Elu',
                value: this.layerObject.N_of_person_elu
            },
            {
                name: 'Nomme',
                value: this.layerObject.N_of_person_nomme
            }];
    };
    StatisticComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._regionsService.getRegions().subscribe(function (regionsApi) {
            _this.regions = regionsApi.data;
            _this.singlePOP = _this.getPopulationData(_this.regions);
            // this.singleParite = this.getParite(this.region);
        }, function (error) { console.log(error); });
    };
    StatisticComponent.prototype.getParite = function (country) {
    };
    StatisticComponent.prototype.getPopulationData = function (regions) {
        var population = [];
        regions.forEach(function (region) {
            var pop = { name: region.name, value: region.population };
            population.push(pop);
        });
        return population;
    };
    StatisticComponent.prototype.onMouseOver = function (id) {
        this.tabHover = id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_maps_statistc_map_statistc_map_component__WEBPACK_IMPORTED_MODULE_4__["StatistcMapComponent"]),
        __metadata("design:type", Object)
    ], StatisticComponent.prototype, "child", void 0);
    StatisticComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistic',
            template: __webpack_require__(/*! ./statistic.component.html */ "./src/app/landing/statistic/statistic.component.html"),
            styles: [__webpack_require__(/*! ./statistic.component.css */ "./src/app/landing/statistic/statistic.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_0__["CountryService"], src_app_services_region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"]])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "./src/app/landing/team-section/team-section.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/landing/team-section/team-section.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvdGVhbS1zZWN0aW9uL3RlYW0tc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/team-section/team-section.component.html":
/*!******************************************************************!*\
  !*** ./src/app/landing/team-section/team-section.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"gray-section team\">\n  <div class=\"container\">\n    <div class=\"row m-b-lg\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>Our Team</h1>\n        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 wow fadeInLeft\">\n        <div class=\"team-member\">\n          <img src=\"assets/img/landing/avatar3.jpg\" class=\"img-fluid rounded-circle img-small\" alt=\"\">\n          <h4><span class=\"navy\">Amelia</span> Smith</h4>\n          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n            </p>\n          <ul class=\"list-inline social-icon\">\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member wow zoomIn\">\n          <img src=\"assets/img/landing/avatar1.jpg\" class=\"img-fluid rounded-circle\" alt=\"\">\n          <h4><span class=\"navy\">John</span> Novak</h4>\n          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>\n          <ul class=\"list-inline social-icon\">\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-4 wow fadeInRight\">\n        <div class=\"team-member\">\n          <img src=\"assets/img/landing/avatar2.jpg\" class=\"img-fluid rounded-circle img-small\" alt=\"\">\n          <h4><span class=\"navy\">Peter</span> Johnson</h4>\n          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>\n          <ul class=\"list-inline social-icon\">\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center m-t-lg m-b-lg\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis,\n          totam corporis ea, alias ut unde.</p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/landing/team-section/team-section.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing/team-section/team-section.component.ts ***!
  \****************************************************************/
/*! exports provided: TeamSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSectionComponent", function() { return TeamSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamSectionComponent = /** @class */ (function () {
    function TeamSectionComponent() {
    }
    TeamSectionComponent.prototype.ngOnInit = function () {
    };
    TeamSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-section',
            template: __webpack_require__(/*! ./team-section.component.html */ "./src/app/landing/team-section/team-section.component.html"),
            styles: [__webpack_require__(/*! ./team-section.component.css */ "./src/app/landing/team-section/team-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamSectionComponent);
    return TeamSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/testimonials-section/testimonials-section.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/landing/testimonials-section/testimonials-section.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvdGVzdGltb25pYWxzLXNlY3Rpb24vdGVzdGltb25pYWxzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/testimonials-section/testimonials-section.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/landing/testimonials-section/testimonials-section.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonials\" class=\"navy-section testimonials\" style=\"margin-top: 0\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center wow zoomIn\">\n        <i class=\"fa fa-comment big-icon\"></i>\n        <h1>\n          What our users say\n        </h1>\n        <div class=\"testimonials-text\">\n          <i>\"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,\n            and\n            a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have\n            evolved\n            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\"</i>\n        </div>\n        <small>\n          <strong>12.08.2018 - Andy Smith</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/landing/testimonials-section/testimonials-section.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/landing/testimonials-section/testimonials-section.component.ts ***!
  \********************************************************************************/
/*! exports provided: TestimonialsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsSectionComponent", function() { return TestimonialsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsSectionComponent = /** @class */ (function () {
    function TestimonialsSectionComponent() {
    }
    TestimonialsSectionComponent.prototype.ngOnInit = function () {
    };
    TestimonialsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials-section',
            template: __webpack_require__(/*! ./testimonials-section.component.html */ "./src/app/landing/testimonials-section/testimonials-section.component.html"),
            styles: [__webpack_require__(/*! ./testimonials-section.component.css */ "./src/app/landing/testimonials-section/testimonials-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsSectionComponent);
    return TestimonialsSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/timeline/timeline.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing/timeline/timeline.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/timeline/timeline.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing/timeline/timeline.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-12 text-center\">\n        <h2>Our Partners</h2>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\">\n    <div class=\"row animated fadeInRight\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\" id=\"ibox-content\">\n\n                    <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline center-orientation\">\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Meeting</h2>\n                                <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.\n                                </p>\n                                <a href=\"#\" class=\"btn btn-sm btn-primary\"> More info</a>\n                                    <span class=\"vertical-date\">\n                                        Today <br/>\n                                        <small>Dec 24</small>\n                                    </span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon blue-bg\">\n                                <i class=\"fa fa-file-text\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Send documents to Mike</h2>\n                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>\n                                <a href=\"#\" class=\"btn btn-sm btn-success\"> Download document </a>\n                                    <span class=\"vertical-date\">\n                                        Today <br/>\n                                        <small>Dec 24</small>\n                                    </span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon lazur-bg\">\n                                <i class=\"fa fa-coffee\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Coffee Break</h2>\n                                <p>Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>\n                                <a href=\"#\" class=\"btn btn-sm btn-info\">Read more</a>\n                                <span class=\"vertical-date\"> Yesterday <br/><small>Dec 23</small></span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon yellow-bg\">\n                                <i class=\"fa fa-phone\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Phone with Jeronimo</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>\n                                <span class=\"vertical-date\">Yesterday <br/><small>Dec 23</small></span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon lazur-bg\">\n                                <i class=\"fa fa-user-md\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Go to the doctor dr Smith</h2>\n                                <p>Find some issue and go to doctor. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>\n                                <span class=\"vertical-date\">Yesterday <br/><small>Dec 23</small></span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon navy-bg\">\n                                <i class=\"fa fa-comments\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Chat with Monica and Sandra</h2>\n                                <p>Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>\n                                <span class=\"vertical-date\">Yesterday <br/><small>Dec 23</small></span>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<script>\n    // Local script for demo purpose only\n    $(document).ready(function(){\n        $('#lightVersion').click(function(event) {\n            event.preventDefault()\n            $('#ibox-content').removeClass('ibox-content');\n            $('#vertical-timeline').removeClass('dark-timeline');\n            $('#vertical-timeline').addClass('light-timeline');\n        });\n        $('#darkVersion').click(function(event) {\n            event.preventDefault()\n            $('#ibox-content').addClass('ibox-content');\n            $('#vertical-timeline').removeClass('light-timeline');\n            $('#vertical-timeline').addClass('dark-timeline');\n        });\n        $('#leftVersion').click(function(event) {\n            event.preventDefault()\n            $('#vertical-timeline').toggleClass('center-orientation');\n        });\n    });\n</script>\n"

/***/ }),

/***/ "./src/app/landing/timeline/timeline.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing/timeline/timeline.component.ts ***!
  \********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/landing/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/landing/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/landing/transparency/indicator/indicator.component.css":
/*!************************************************************************!*\
  !*** ./src/app/landing/transparency/indicator/indicator.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvdHJhbnNwYXJlbmN5L2luZGljYXRvci9pbmRpY2F0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/transparency/indicator/indicator.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/landing/transparency/indicator/indicator.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-lg \">\r\n      <div class=\"ibox-content\">\r\n          <div class=\"tabs-container\">\r\n            <ul class=\"nav nav-tabs  \" role=\"tablist\">\r\n              <li><a class=\"nav-link bg-primary m-r-xxs\" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab1')\"> Plans et planification</a></li>\r\n              <li><a class=\"nav-link bg-primary m-r-xxs\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab2')\">informations GÉNÉRALES </a></li>\r\n              <li><a class=\"nav-link bg-primary m-r-xxs\" [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab3')\"> Local taxes, rates</a></li>\r\n              <li><a class=\"nav-link bg-primary m-r-xxs\" [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab4')\"> Relationship with citizen</a></li>\r\n              <li><a class=\"nav-link bg-primary m-r-xxs\" [ngClass]=\"tab5.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab5')\"> Public procurement</a></li>\r\n              <li><a class=\"nav-link bg-primary m-r-xxs\" [ngClass]=\"tab6.id == tabHover ? 'active show' : ''\" data-toggle=\"tab\" (mouseover)=\"onMouseOver('tab6')\"> Economic and financial</a></li>\r\n            </ul>\r\n            <div class=\"tab-content\">\r\n              <!--  body of Plans et planification -->\r\n              <div role=\"tabpanel\" id=\"tab1\" #tab1 class=\"tab-pane\" [ngClass]=\"tab1.id == tabHover ? 'active show' : ''\">\r\n                <div class=\"panel-body\">\r\n\r\n                  <div class=\"row\">\r\n\r\n\r\n                    <div class=\"col-sm-12 \">\r\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Plans1\" name=\"someGroupName1\" checked />\r\n                          <label for=\"Plans1\">Rapport annuel disponible </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Plans2\" name=\"someGroupName1\" />\r\n                          <label for=\"Plans2\">Rapport sur le développement de la collectivité </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Plans3\" name=\"someGroupName1\" />\r\n                          <label for=\"Plans3\">Rapport sur les manquements  </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Plans4\" name=\"someGroupName1\" />\r\n                          <label for=\"Plans4\">Plan stratégique disponible  </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Plans5\" name=\"someGroupName1\" />\r\n                          <label for=\"Plans5\">Plan financier disponible   </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n                </div>\r\n              </div>\r\n              <!-- body of informations GÉNÉRALES -->\r\n              <div role=\"tabpanel\" #tab2 id=\"tab2\" class=\"tab-pane\" [ngClass]=\"tab2.id == tabHover ? 'active show' : ''\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n\r\n\r\n                    <div class=\"col-sm-12 \">\r\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"informations1\" name=\"someGroupName5\" checked />\r\n                          <label for=\"informations1\">Rôle et composition clairement définie </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"informations2\" name=\"someGroupName5\" />\r\n                          <label for=\"informations2\">CV et biographies des maires disponibles </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"informations3\" name=\"someGroupName5\" />\r\n                          <label for=\"informations3\">Email de la collectivité disponible  </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"informations4\" name=\"someGroupName5\" />\r\n                          <label for=\"informations4\">Déclaration disponible  </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- body  Local taxes, rates  -->\r\n              <div role=\"tabpanel\" #tab3 id=\"tab3\" class=\"tab-pane\" [ngClass]=\"tab3.id == tabHover ? 'active show' : ''\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n\r\n\r\n                    <div class=\"col-sm-12 \">\r\n                      <div class=\"   p-xxs b-r-lg m-b-xs\">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"taxes1\" name=\"someGroupName5\" checked />\r\n                          <label for=\"taxes1\">Rapport sur les recettes de taxes </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"taxes2\" name=\"someGroupName5\" />\r\n                          <label for=\"taxes2\">Publication transparence des taux </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- body of Relationship with citizen  -->\r\n              <div role=\"tabpanel\" #tab4 id=\"tab4\" class=\"tab-pane\" [ngClass]=\"tab4.id == tabHover ? 'active show' : ''\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n\r\n\r\n                    <div class=\"col-sm-12 \">\r\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Relationship1\" name=\"someGroupName5\" checked />\r\n                          <label for=\"Relationship1\">Outils de communication disponible  </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Relationship2\" name=\"someGroupName5\" />\r\n                          <label for=\"Relationship2\">Site web disponible  </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Relationship3\" name=\"someGroupName5\" />\r\n                          <label for=\"Relationship3\">Journal d’information  </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Relationship4\" name=\"someGroupName5\" />\r\n                          <label for=\"Relationship4\">Newsletter disponible  </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Relationship5\" name=\"someGroupName5\" />\r\n                          <label for=\"Relationship5\">Pages réseaux sociaux disponibles  </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Relationship6\" name=\"someGroupName5\" />\r\n                          <label for=\"Relationship6\">Rencontres de la population</label>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- body of Public procurement  -->\r\n              <div role=\"tabpanel\" #tab5 id=\"tab5\" class=\"tab-pane\" [ngClass]=\"tab5.id == tabHover ? 'active show' : ''\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n\r\n\r\n                    <div class=\"col-sm-12 \">\r\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"procurement1\" name=\"someGroupName5\" checked />\r\n                          <label for=\"procurement1\">Service délivré à la population  </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"procurement2\" name=\"someGroupName5\" />\r\n                          <label for=\"procurement2\">Existence d’un document de procédures </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- body of Economic and financial transparency  -->\r\n              <div role=\"tabpanel\" #tab6 id=\"tab6\" class=\"tab-pane\" [ngClass]=\"tab6.id == tabHover ? 'active show' : ''\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n\r\n\r\n                    <div class=\"col-sm-12 \">\r\n                      <div class=\"p-xxs b-r-lg m-b-xs\">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Economic1\" name=\"someGroupName5\" checked />\r\n                          <label for=\"Economic1\">Budget de la collectivité communiqué  </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\" p-xxs b-r-lg  \">\r\n                        <div class=\"icheck-default\">\r\n                          <input type=\"radio\" id=\"Economic2\" name=\"someGroupName5\" />\r\n                          <label for=\"Economic2\">Recettes de la collectivité  </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/transparency/indicator/indicator.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/landing/transparency/indicator/indicator.component.ts ***!
  \***********************************************************************/
/*! exports provided: IndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorComponent", function() { return IndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndicatorComponent = /** @class */ (function () {
    function IndicatorComponent() {
        this.tabHover = 'tab1';
    }
    IndicatorComponent.prototype.ngOnInit = function () {
    };
    IndicatorComponent.prototype.onMouseOver = function (id) {
        this.tabHover = id;
    };
    IndicatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-indicator',
            template: __webpack_require__(/*! ./indicator.component.html */ "./src/app/landing/transparency/indicator/indicator.component.html"),
            styles: [__webpack_require__(/*! ./indicator.component.css */ "./src/app/landing/transparency/indicator/indicator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndicatorComponent);
    return IndicatorComponent;
}());



/***/ }),

/***/ "./src/app/landing/transparency/transparency.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/landing/transparency/transparency.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvdHJhbnNwYXJlbmN5L3RyYW5zcGFyZW5jeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/transparency/transparency.component.html":
/*!******************************************************************!*\
  !*** ./src/app/landing/transparency/transparency.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\r\n    <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n    </div>\r\n    <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n      <div class=\"col-lg-9\">\r\n        <h2>Transparency</h2>\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a routerLink=\"/landing/home\">Home</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\">\r\n            <a #h1Variable></a>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <img class=\"d-block w-100 border rounded\" src=\"assets/img/landing/images.jpg\" alt=\"First slide\">\r\n    </div>\r\n    <div class=\"ibox col-md-6\">\r\n      <div class=\"ibox-content\">\r\n          <h2>\r\n            The European languages are members\r\n          </h2>\r\n\r\n\r\n        <p>\r\n          The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-indicator></app-indicator>\r\n<app-maps></app-maps>\r\n"

/***/ }),

/***/ "./src/app/landing/transparency/transparency.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing/transparency/transparency.component.ts ***!
  \****************************************************************/
/*! exports provided: TransparencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransparencyComponent", function() { return TransparencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransparencyComponent = /** @class */ (function () {
    function TransparencyComponent() {
    }
    TransparencyComponent.prototype.ngOnInit = function () {
    };
    TransparencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transparency',
            template: __webpack_require__(/*! ./transparency.component.html */ "./src/app/landing/transparency/transparency.component.html"),
            styles: [__webpack_require__(/*! ./transparency.component.css */ "./src/app/landing/transparency/transparency.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransparencyComponent);
    return TransparencyComponent;
}());



/***/ }),

/***/ "./src/app/maps/africa-map/africa-map.component.css":
/*!**********************************************************!*\
  !*** ./src/app/maps/africa-map/africa-map.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n.map {\n\n    height: 800px;\n}\n\n#map {\n    height:900px;\n    width: 100% ;\n    z-index:0;\n}\n\n.leaflet-container {\n    background-color:rgba(255,0,0,0.0);\n}\n\n.info {\n    padding: 6px 8px;\n    font: 14px/16px Arial, Helvetica, sans-serif;\n    background: white;\n    background: rgba(255,255,255,0.8);\n    box-shadow: 0 0 15px rgba(0,0,0,0.2);\n    border-radius: 5px;\n}\n\n.info h4 {\n    margin: 0 0 5px;\n    color: #777;\n}\n\n.legend {\n    line-height: 18px;\n    color: #555;\n}\n\n.legend i {\n    width: 18px;\n    height: 18px;\n    float: left;\n    margin-right: 8px;\n    opacity: 0.7;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9hZnJpY2EtbWFwL2FmcmljYS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTs7SUFFSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxtQ0FBbUM7Q0FDdEM7O0FBR0Q7SUFDSSxpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7O0FBR0Q7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtDQUNmOztBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9tYXBzL2FmcmljYS1tYXAvYWZyaWNhLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLm1hcCB7XG5cbiAgICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4jbWFwIHtcbiAgICBoZWlnaHQ6OTAwcHg7XG4gICAgd2lkdGg6IDEwMCUgO1xuICAgIHotaW5kZXg6MDtcbn1cblxuLmxlYWZsZXQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDAsMCwwLjApO1xufVxuXG5cbi5pbmZvIHtcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgIGZvbnQ6IDE0cHgvMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmluZm8gaDQge1xuICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICBjb2xvcjogIzc3Nztcbn1cblxuXG4ubGVnZW5kIHtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzU1NTtcbn1cbi5sZWdlbmQgaSB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/maps/africa-map/africa-map.component.html":
/*!***********************************************************!*\
  !*** ./src/app/maps/africa-map/africa-map.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"maps\">\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-8  \">\n        <br>\n        <div class=\"panel panel-primary\">\n\n          <div class=\"panel-body\">\n\n\n\n            <div id=\"map\"></div>\n\n\n\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n        <app-ibox [title]=\"title\" [hideTitle]=\"hideTitle\" [hideFooter]=\"hideFooter\" [hideBody]=\"hideBody\">\n\n\n          <div class=\"iBoxBody \">\n\n            <accordion [closeOthers]=\"oneAtATime\">\n              <accordion-group *ngFor=\"let region of regionsList | keyvalue\" (mouseenter)=\"omMouseEnterRegion(region.key)\"\n                (mouseleave)=\"onMouseLeaveRegion(region.key)\">\n                <span accordion-heading>\n                  <i class='fas fa-globe-africa'></i> &nbsp; {{region.key }}\n\n                  <span class=\"label label-success float-right\">{{ region.value.length }}</span>\n                </span>\n                <ul class=\"tag-list text-center\" style=\"padding:0\">\n                  <li class=\"list-group-item col-xs-6 col-sm-4   \" [ngClass]=\" i == countryHover ? 'active' : ''\"\n                    *ngFor=\"let country of region.value ; let i = index\" (mouseenter)=\" omMouseEnterRegion(region.key) ; omMouseEnterCountry(country.properties.name  , i)\"\n                    (mouseleave)=\"onMouseLeaveCountry(country.properties.name)\"> {{ country.properties.name }}\n                  </li>\n                </ul>\n\n              </accordion-group>\n\n            </accordion>\n          </div>\n\n\n\n\n\n\n        </app-ibox>\n      </div>\n\n\n\n\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/maps/africa-map/africa-map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/africa-map/africa-map.component.ts ***!
  \*********************************************************/
/*! exports provided: AfricaMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfricaMapComponent", function() { return AfricaMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_leaflet_label_leaflet_label_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../vendor/leaflet/label/leaflet.label.js */ "./src/vendor/leaflet/label/leaflet.label.js");
/* harmony import */ var _vendor_leaflet_label_leaflet_label_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_leaflet_label_leaflet_label_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AfricaMapComponent = /** @class */ (function () {
    function AfricaMapComponent(_mapService, _http, _modalService) {
        this._mapService = _mapService;
        this._http = _http;
        this._modalService = _modalService;
        // la couche geoson
        this.geoJsonLayer = null;
        this.countriesList = [];
        this.regionsList = [];
        // ibox params
        this.title = 'No GeoJson file uploaded';
        this.hideBody = true;
        this.hideTitle = false;
        this.hideFooter = true;
        this.oneAtATime = true;
        this.countryHover = null;
    }
    AfricaMapComponent.prototype.ngOnInit = function () {
        // initialiser la carte et la mettre dans un variable map
        this.map = this._mapService.initMap('map', 4, 'white');
    };
    AfricaMapComponent.prototype.ngOnChanges = function (changes) {
        var change = changes['geojson'];
        if (change.currentValue !== change.previousValue) {
            this.countriesList = this.geojson.features;
            var regionListGrouped = underscore__WEBPACK_IMPORTED_MODULE_6__["_"].groupBy(this.countriesList, function (country) {
                return country.properties.subregion;
            });
            this.regionsList = regionListGrouped;
            if (this.geoJsonLayer !== null) {
                this.geoJsonLayer.removeFrom(this.map);
            }
            this.geoJsonLayer = leaflet__WEBPACK_IMPORTED_MODULE_4__["geoJSON"](this.geojson, {
                style: this._mapService.styleRegion
            });
            this.geoJsonLayer.addTo(this.map);
            this.title =
                'Africa : ' +
                    Object.keys(this.regionsList).length +
                    ' Regions' +
                    ' / ' +
                    this.countriesList.length +
                    ' countries';
            this.hideBody = false;
        }
    };
    AfricaMapComponent.prototype.omMouseEnterRegion = function (region) {
        this.geoJsonLayer.eachLayer(function (layer) {
            if (layer.feature.properties.subregion === region) {
                layer.bringToFront();
                layer.setStyle({
                    fillColor: '#00b594',
                    fillOpacity: 1
                });
            }
        });
    };
    AfricaMapComponent.prototype.onMouseLeaveRegion = function (region) {
        var style = this._mapService.styleRegion;
        this.geoJsonLayer.eachLayer(function (layer) {
            layer.setStyle(style(layer.feature));
        });
    };
    AfricaMapComponent.prototype.omMouseEnterCountry = function (country, i) {
        var _this = this;
        this.geoJsonLayer.eachLayer(function (layer) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(layer.feature.properties.name)) {
            }
            else if (layer.feature.properties.name === country) {
                _this.map.flyToBounds(layer.getBounds(), { animate: true, duration: 3 });
                layer.bringToFront();
                layer.setStyle({
                    fillColor: '#15ff',
                    fillOpacity: 1
                });
            }
        });
        this.countryHover = i;
    };
    AfricaMapComponent.prototype.onMouseLeaveCountry = function (country) {
        var style = this._mapService.styleRegion;
        this.geoJsonLayer.eachLayer(function (layer) {
            layer.setStyle(style(layer.feature));
        });
        this.countryHover = false;
    };
    AfricaMapComponent.prototype.onMouseLeaveForBounds = function () {
        this.map.fitBounds();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AfricaMapComponent.prototype, "geojson", void 0);
    AfricaMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-africa-map',
            template: __webpack_require__(/*! ./africa-map.component.html */ "./src/app/maps/africa-map/africa-map.component.html"),
            styles: [__webpack_require__(/*! ./africa-map.component.css */ "./src/app/maps/africa-map/africa-map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], AfricaMapComponent);
    return AfricaMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/country-map/country-map.component.css":
/*!************************************************************!*\
  !*** ./src/app/maps/country-map/country-map.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  /* height: 300px; */\n  /* width: 100%;\n  z-index: 0; */\n}\n\n.leaflet-container {\n  background-color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9jb3VudHJ5LW1hcC9jb3VudHJ5LW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCO2dCQUNjO0NBQ2Y7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9tYXBzL2NvdW50cnktbWFwL2NvdW50cnktbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgLyogaGVpZ2h0OiAzMDBweDsgKi9cbiAgLyogd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7ICovXG59XG5cbi5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maps/country-map/country-map.component.html":
/*!*************************************************************!*\
  !*** ./src/app/maps/country-map/country-map.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mapDiv style=\"height: 350px ; width: 100% ;\n    z-index:0\" [id]=\"mapId\"></div>\n"

/***/ }),

/***/ "./src/app/maps/country-map/country-map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/maps/country-map/country-map.component.ts ***!
  \***********************************************************/
/*! exports provided: CountryMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryMapComponent", function() { return CountryMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryMapComponent = /** @class */ (function () {
    function CountryMapComponent(_mapService) {
        this._mapService = _mapService;
        this.map = null;
        this.mapId = null;
        this.countryLayer = null;
        this.geojson = null;
    }
    CountryMapComponent.prototype.ngOnChanges = function () {
        this.mapId = this.country.properties.iso_a3;
        this.map = this._mapService.initMap(this.mapContainer.nativeElement, 4);
        this.addCountryLayer();
    };
    CountryMapComponent.prototype.ngOnInit = function () {
    };
    CountryMapComponent.prototype.addCountryLayer = function () {
        this.countryLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](this.country, {
            style: this._mapService.styleUploadCountries
        }).addTo(this.map);
        this.map.fitBounds(this.countryLayer.getBounds());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CountryMapComponent.prototype, "country", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapDiv'),
        __metadata("design:type", Object)
    ], CountryMapComponent.prototype, "mapContainer", void 0);
    CountryMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-map',
            template: __webpack_require__(/*! ./country-map.component.html */ "./src/app/maps/country-map/country-map.component.html"),
            styles: [__webpack_require__(/*! ./country-map.component.css */ "./src/app/maps/country-map/country-map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], CountryMapComponent);
    return CountryMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/landing-map/landing-map.component.css":
/*!************************************************************!*\
  !*** ./src/app/maps/landing-map/landing-map.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n.map {\n\n    height: 500px;\n}\n\n#frugalmap {\n    height:580px;\n    width: 100% ;\n    z-index:0;\n}\n\n.leaflet-container {\n    background-color:rgba(255,0,0,0.0);\n}\n\n.info {\n    padding: 6px 8px;\n    font: 14px/16px Arial, Helvetica, sans-serif;\n    background: white;\n    background: rgba(255,255,255,0.8);\n    box-shadow: 0 0 15px rgba(0,0,0,0.2);\n    border-radius: 5px;\n}\n\n.info h4 {\n    margin: 0 0 5px;\n    color: #777;\n}\n\n.legend {\n    line-height: 18px;\n    color: #555;\n}\n\n.legend i {\n    width: 18px;\n    height: 18px;\n    float: left;\n    margin-right: 8px;\n    opacity: 0.7;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9sYW5kaW5nLW1hcC9sYW5kaW5nLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOztJQUVJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7Q0FDYjs7QUFFRDtJQUNJLG1DQUFtQztDQUN0Qzs7QUFHRDtJQUNJLGlCQUFpQjtJQUNqQiw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbGFuZGluZy1tYXAvbGFuZGluZy1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5tYXAge1xuXG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuI2ZydWdhbG1hcCB7XG4gICAgaGVpZ2h0OjU4MHB4O1xuICAgIHdpZHRoOiAxMDAlIDtcbiAgICB6LWluZGV4OjA7XG59XG5cbi5sZWFmbGV0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsMC4wKTtcbn1cblxuXG4uaW5mbyB7XG4gICAgcGFkZGluZzogNnB4IDhweDtcbiAgICBmb250OiAxNHB4LzE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5pbmZvIGg0IHtcbiAgICBtYXJnaW46IDAgMCA1cHg7XG4gICAgY29sb3I6ICM3Nzc7XG59XG5cblxuLmxlZ2VuZCB7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM1NTU7XG59XG4ubGVnZW5kIGkge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maps/landing-map/landing-map.component.html":
/*!*************************************************************!*\
  !*** ./src/app/maps/landing-map/landing-map.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"maps\">\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-12 text-center\">\n        <br>\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3>Search by country or region </h3>\n          </div>\n          <div class=\"panel-body\">\n            <a class=\"btn btn-default btn-rounded btn-block\" (click)=\"selectByContryModal()\">\n              Select region, country or territory</a>\n            <br>\n\n\n            <div id=\"frugalmap\"></div>\n\n\n\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/maps/landing-map/landing-map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/maps/landing-map/landing-map.component.ts ***!
  \***********************************************************/
/*! exports provided: LandingMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingMapComponent", function() { return LandingMapComponent; });
/* harmony import */ var _shared_modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/modal-select-country/modal-select-country.component */ "./src/app/shared/modal-select-country/modal-select-country.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_country_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/country.model */ "./src/app/models/country.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LandingMapComponent = /** @class */ (function () {
    function LandingMapComponent(mapService, _http, _modalService) {
        this.mapService = mapService;
        this._http = _http;
        this._modalService = _modalService;
        this.latitude = null;
        this.longitude = null;
        this.zoom = null;
        this.osm = 'OSM';
        // topo = 'topo';
        this.marker = 'Marker';
        this.positionZoom = 10;
        this.map = null;
        this.color = null;
        this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_6__["Country"]();
        this.map = this.mapService;
    }
    LandingMapComponent.prototype.selectByContryModal = function () {
        this.openModalSelect();
    };
    LandingMapComponent.prototype.openModalSelect = function () {
        var initialState = {
            title: 'select Country',
            countries: this.countriesList
        };
        this.bsModalRef = this._modalService.show(_shared_modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_0__["ModalSelectCountryComponent"], {
            initialState: initialState,
            class: 'modal-lg'
        });
    };
    LandingMapComponent.prototype.ngOnInit = function () {
        this.createMap();
    };
    LandingMapComponent.prototype.stylePopulation = function (feature) {
        var d = feature.properties.pop_est;
        return {
            // fillColor: this.mapService.getColor(feature.properties.density),
            fillColor: (function () {
                return d > 100000000
                    ? '#800026'
                    : d > 90000000
                        ? '#FFC720'
                        : d > 80000000
                            ? '#BD0026'
                            : d > 70000000
                                ? '#FF803E'
                                : d > 60000000
                                    ? '#E31A1C'
                                    : d > 40000000
                                        ? '#FC4E2A'
                                        : d > 20000000
                                            ? '#FD8D3C'
                                            : d > 15000000
                                                ? '#FCFFCD'
                                                : d > 2000000
                                                    ? '#FEB24C'
                                                    : //         d > 100000000 ? '#FED976' :
                                                        '#FFEDA0';
            })(),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    };
    LandingMapComponent.prototype.styleRegion = function (feature) {
        var d = feature.properties.subregion;
        return {
            // fillColor: this.mapService.getColor(feature.properties.density),
            fillColor: (function () {
                return d.toLowerCase() === 'western africa'
                    ? '#800026'
                    : d.toLowerCase() === 'northern africa'
                        ? '#FFC720'
                        : d.toLowerCase() === 'middle africa'
                            ? '#BD0026'
                            : d.toLowerCase() === 'eastern africa'
                                ? '#FF803E'
                                : d.toLowerCase() === 'southern africa'
                                    ? '#E31A1C'
                                    : '#FFEDA0';
            })(),
            weight: 2,
            opacity: 0.5,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    };
    LandingMapComponent.prototype.createMap = function () {
        var _this = this;
        var cities = leaflet__WEBPACK_IMPORTED_MODULE_5__["layerGroup"]();
        // const info = L.control();
        leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"]([this.map.getLatitude(), this.map.getLongitude()])
            .bindPopup('This is Littleton, CO.')
            .addTo(cities);
        var overlays = {
            Cities: cities
        };
        // tslint:disable-next-line:max-line-length
        var mbUrl = 
        // tslint:disable-next-line:max-line-length
        'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
        // const grayscale = L.tileLayer(mbUrl, { id: 'mapbox.light' });
        // const streets = L.tileLayer(mbUrl, { id: 'mapbox.streets' });
        var OSMLayer = leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"](osmUrl);
        var baseLayers = {
            // Grayscale: grayscale,
            // 'Streets  ': streets,
            'OSM      ': OSMLayer
        };
        var afriqueMap = leaflet__WEBPACK_IMPORTED_MODULE_5__["map"]('frugalmap', {
        // layers: [grayscale, cities]
        }).setView([this.map.getLatitude(), this.map.getLongitude()], 5);
        leaflet__WEBPACK_IMPORTED_MODULE_5__["control"].layers(baseLayers, overlays).addTo(afriqueMap);
        this._http.get('assets/geojson/afrique.json').subscribe(function (geojson) {
            _this.countriesList = geojson.features;
            var geojsonL = leaflet__WEBPACK_IMPORTED_MODULE_5__["geoJSON"](geojson, {
                // style: this.stylePopulation,
                style: _this.styleRegion,
                onEachFeature: function (feature, layer) {
                    layer.on({
                        click: function (e) {
                            afriqueMap.fitBounds(e.target.getBounds());
                            var layer2 = e.target;
                            layer2.bringToFront();
                            layer2.setStyle({
                                weight: 5,
                                color: '#1ab394',
                                dashArray: '',
                                fillOpacity: 0.7
                            });
                            info.update(layer.feature.properties);
                        },
                        mouseover: function (e) {
                            var layer2 = e.target;
                            layer2.bringToFront();
                            layer2.setStyle({
                                weight: 5,
                                color: '#1ab394',
                                dashArray: '',
                                fillOpacity: 0.7
                            });
                            info.update(layer.feature.properties);
                        },
                        mouseout: function (e) {
                            geojsonL.resetStyle(e.target);
                            info.update();
                        }
                    });
                }
            }).addTo(afriqueMap);
            geojsonL.eachLayer(function (layer) {
                layer.bindPopup(layer.feature.properties.name);
            });
            afriqueMap.fitBounds(geojsonL.getBounds());
            afriqueMap.setMaxZoom(10);
        });
        var info = new (leaflet__WEBPACK_IMPORTED_MODULE_5__["Control"].extend({
            options: { position: 'topright' }
        }))();
        info.onAdd = function (map) {
            this._div = leaflet__WEBPACK_IMPORTED_MODULE_5__["DomUtil"].create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };
        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML =
                '<div class="col-lg-12">' +
                    '<div class="widget style1 navy-bg">' +
                    '<div class="row">' +
                    '<div class="col-12">' +
                    '<span>Population   </span>' +
                    (props
                        ? '</br><b>' +
                            props.name +
                            '</b><br/>' +
                            props.subregion +
                            ' people  <sup></sup>' +
                            '</br><b>' +
                            props.lastcensus +
                            '</b><br/>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                        : ' ');
            // this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
            //   '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
            //   : 'Hover over a state');
        };
        info.addTo(afriqueMap);
    };
    LandingMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-map',
            template: __webpack_require__(/*! ./landing-map.component.html */ "./src/app/maps/landing-map/landing-map.component.html"),
            styles: [__webpack_require__(/*! ./landing-map.component.css */ "./src/app/maps/landing-map/landing-map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], LandingMapComponent);
    return LandingMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/map.service.ts":
/*!*************************************!*\
  !*** ./src/app/maps/map.service.ts ***!
  \*************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mapbox_geojson_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mapbox/geojson-area */ "./node_modules/@mapbox/geojson-area/index.js");
/* harmony import */ var _mapbox_geojson_area__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mapbox_geojson_area__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapService = /** @class */ (function () {
    function MapService(_http) {
        this._http = _http;
        this._latitude = 34.03155;
        this._longitude = -6.03155;
        this._zoom = 1;
        this.iconBlue = leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
        });
        // tslint:disable-next-line:max-line-length
        this.openTopoUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
        // imageryLayer = L.tileLayer(this.mapBoxUrl);
        this.OpenTopoMapLayer = leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"](this.openTopoUrl);
        // OSMLayer = L.tileLayer(this.osmUrl);
        this.africaMapBounds = leaflet__WEBPACK_IMPORTED_MODULE_4__["latLngBounds"]([[36, -21.6], [-33.3, 53]]);
    }
    MapService.prototype.getGeo = function () {
        this._http.get('assets/geojson/afrique.json').subscribe(function (geojson) {
            return geojson;
            // this.afriqueLayer = geoJSON(geo);
            // this.afriqueLayer = geo.features;
        });
    };
    MapService.prototype.getLongitude = function () {
        return this._longitude;
    };
    MapService.prototype.setLongitude = function (longitude) {
        return (this._longitude = longitude);
    };
    MapService.prototype.getLatitude = function () {
        return this._latitude;
    };
    MapService.prototype.setLatitude = function (latitude) {
        this._latitude = latitude;
    };
    MapService.prototype.getZoom = function () {
        return this._zoom;
    };
    MapService.prototype.setZoom = function (zoom) {
        this._zoom = zoom;
    };
    MapService.prototype.getJson = function () {
        return this._http
            .get(' /assets/geojson/afrique.geojson')
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MapService.prototype.errorHandler = function (error) {
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    MapService.prototype.initMap = function (divId, zoom, mainLayer) {
        if (mainLayer === void 0) { mainLayer = null; }
        // construction des base Layers
        // tslint:disable-next-line:max-line-length
        var mapBoxUrl = 'https://api.tiles.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiamVtbWxtZWQiLCJhIjoiY2puY2wxMG91MGJ1ajNwc2Z5aHRpaXcwZiJ9.PihyI84-WjzwYTp_WKDf_A';
        var topo = this.OpenTopoMapLayer;
        var imagery = leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"](mapBoxUrl);
        // const osm = L.tileLayer(this.osmUrl);
        var white = leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"]('');
        var baseLayers = {
            // Satellite: imagery,
            'Topo Maps': topo,
            White: white
        };
        // creation de la carte avec layer de base + zoom minimum sur afrique de 4
        var map = leaflet__WEBPACK_IMPORTED_MODULE_4__["map"](divId, {
            layers: [mainLayer === 'white' ? white : topo],
            zoomDelta: 0.25,
            zoomSnap: 0
            // maxBounds: this.africaMapBounds,
            // maxBoundsViscosity: 0.5
        });
        // fit bount to africa
        // map.fitBounds(this.africaMapBounds);
        // ajouter des layers
        leaflet__WEBPACK_IMPORTED_MODULE_4__["control"].layers(baseLayers).addTo(map);
        return map;
    };
    MapService.prototype.styleRegion = function (feature) {
        var d = feature.properties.region;
        return {
            fillColor: (function () {
                return d.toLowerCase() === 'western africa'
                    ? '#125f75'
                    : d.toLowerCase() === 'northern africa'
                        ? '#1995ad'
                        : d.toLowerCase() === 'middle africa'
                            ? '#a1d6e2'
                            : d.toLowerCase() === 'eastern africa'
                                ? '#bcbabe'
                                : d.toLowerCase() === 'southern africa'
                                    ? '#dddddd'
                                    : '#dddddd';
            })(),
            weight: 2,
            opacity: 0.5,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    };
    MapService.prototype.getSurface = function (obj) {
        return _mapbox_geojson_area__WEBPACK_IMPORTED_MODULE_5__["geometry"](obj) / 1000000;
    };
    MapService.prototype.styleUploadCountries = function (feature) {
        return {
            fillColor: '#00b594',
            weight: 2,
            opacity: 0.8,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        };
    };
    MapService.prototype.styleHide = function () {
        return {
            fillColor: '#e0e0e2',
            fillOpacity: 0.2,
            color: '#666a6c',
            weight: 2,
            opacity: 0.3,
            dashArray: '3',
        };
    };
    MapService.prototype.styleLevels = function (feature) {
        return {
            color: 'white',
            weight: 2,
            opacity: 0.8,
            fillColor: '#00b594',
            fillOpacity: 0.2,
            dashArray: '3',
        };
    };
    MapService.prototype.styleHover = function (feature) {
        return {
            weight: 3,
            fillColor: '#00b594',
            fillOpacity: 1
        };
    };
    MapService.prototype.formatGeoJson = function (geometry) {
        return {
            features: [
                {
                    type: 'Feature',
                    properties: {
                        name: 'polygone'
                    },
                    geometry: geometry
                }
            ]
        };
    };
    MapService.prototype.formatGeoJsonFeatures = function (features) {
        var json = { features: [] };
        features.forEach(function (element) {
            var obj = {
                type: 'Feature',
                properties: {
                    id: element.id,
                    name: element.name,
                    region: element.region,
                    adm1: element.levels_1
                },
                geometry: element.shape
            };
            json.features.push(obj);
        });
        return json;
    };
    // div info and legend
    MapService.prototype.createDiv = function (position) {
        return new (leaflet__WEBPACK_IMPORTED_MODULE_4__["Control"].extend({
            options: { position: position },
        }))();
    };
    MapService.prototype.getDiv = function (div) {
        return div.onAdd = function (map) {
            this._div = leaflet__WEBPACK_IMPORTED_MODULE_4__["DomUtil"].create('div', 'ibox'); // create a div with a class "info"
            this.update();
            return this._div;
        };
    };
    // region div legend
    MapService.prototype.updatePanelLevel = function (legend) {
        legend.update = function (props) {
            this._div.innerHTML =
                '<div class="col-12 ">' +
                    '<div class="ibox-content">' +
                    'panel' +
                    '</div>' +
                    '</div>';
        };
    };
    MapService.prototype.updateLegendRegion = function (legend) {
        legend.update = function (props) {
            this._div.innerHTML =
                '<div class="col-12 ">' +
                    '<div class="ibox-content">' +
                    '<ul class="category-list" style = "padding: 0" >' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x  " style="color: #1995ad" > </i>' +
                    'Northern Africa' +
                    '</li>' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x " style="color: #bcbabe" > </i>' +
                    'Easthern Africa' +
                    '</li>' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x " style="color: #125f75" > </i>' +
                    'Western Africa' +
                    '</li>' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x " style="color: #a1d6e2" > </i>' +
                    'Middle Africa' +
                    '</li>' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x " style="color: #dddddd" > </i>' +
                    'Southern Africa' +
                    '</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>';
        };
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/maps/maps-levels/maps-levels.component.css":
/*!************************************************************!*\
  !*** ./src/app/maps/maps-levels/maps-levels.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  /* height: 300px; */\n  /* width: 100%;\n  z-index: 0; */\n}\n\n.leaflet-container {\n  background-color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9tYXBzLWxldmVscy9tYXBzLWxldmVscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCO2dCQUNjO0NBQ2Y7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9tYXBzL21hcHMtbGV2ZWxzL21hcHMtbGV2ZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgLyogaGVpZ2h0OiAzMDBweDsgKi9cbiAgLyogd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7ICovXG59XG5cbi5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maps/maps-levels/maps-levels.component.html":
/*!*************************************************************!*\
  !*** ./src/app/maps/maps-levels/maps-levels.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mapDiv style=\"height: 350px ; width: 100% ;\n    z-index:0\" [id]=\"mapId\"></div>\n"

/***/ }),

/***/ "./src/app/maps/maps-levels/maps-levels.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/maps/maps-levels/maps-levels.component.ts ***!
  \***********************************************************/
/*! exports provided: MapsLevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsLevelsComponent", function() { return MapsLevelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsLevelsComponent = /** @class */ (function () {
    function MapsLevelsComponent(_mapService) {
        this._mapService = _mapService;
        this.map = null;
        this.mapId = null;
        this.levelLayer = null;
        this.geojson = null;
    }
    MapsLevelsComponent.prototype.ngOnChanges = function () {
        this.mapId = this.level.id;
        this.map = this._mapService.initMap(this.mapContainer.nativeElement, 4);
        this.addCountryLayer();
    };
    MapsLevelsComponent.prototype.addCountryLayer = function () {
        this.geojson = this._mapService.formatGeoJson(this.level.shape);
        this.levelLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](this.geojson, {
            style: this._mapService.styleUploadCountries
        }).addTo(this.map);
        this.map.fitBounds(this.levelLayer.getBounds());
    };
    MapsLevelsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapsLevelsComponent.prototype, "level", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapDiv'),
        __metadata("design:type", Object)
    ], MapsLevelsComponent.prototype, "mapContainer", void 0);
    MapsLevelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps-levels',
            template: __webpack_require__(/*! ./maps-levels.component.html */ "./src/app/maps/maps-levels/maps-levels.component.html"),
            styles: [__webpack_require__(/*! ./maps-levels.component.css */ "./src/app/maps/maps-levels/maps-levels.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], MapsLevelsComponent);
    return MapsLevelsComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _landing_map_landing_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-map/landing-map.component */ "./src/app/maps/landing-map/landing-map.component.ts");
/* harmony import */ var _africa_map_africa_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./africa-map/africa-map.component */ "./src/app/maps/africa-map/africa-map.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _upload_map_upload_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload-map/upload-map.component */ "./src/app/maps/upload-map/upload-map.component.ts");
/* harmony import */ var _country_map_country_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country-map/country-map.component */ "./src/app/maps/country-map/country-map.component.ts");
/* harmony import */ var _upload_shape_upload_shape_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-shape/upload-shape.component */ "./src/app/maps/upload-shape/upload-shape.component.ts");
/* harmony import */ var _upload_level_map_upload_level_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload-level-map/upload-level-map.component */ "./src/app/maps/upload-level-map/upload-level-map.component.ts");
/* harmony import */ var _statistic_map_general_statistic_map_general_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./statistic-map-general/statistic-map-general.component */ "./src/app/maps/statistic-map-general/statistic-map-general.component.ts");
/* harmony import */ var _maps_levels_maps_levels_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./maps-levels/maps-levels.component */ "./src/app/maps/maps-levels/maps-levels.component.ts");
/* harmony import */ var _statistc_map_statistc_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./statistc-map/statistc-map.component */ "./src/app/maps/statistc-map/statistc-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _landing_map_landing_map_component__WEBPACK_IMPORTED_MODULE_4__["LandingMapComponent"],
                _upload_map_upload_map_component__WEBPACK_IMPORTED_MODULE_7__["UploadMapComponent"],
                _upload_shape_upload_shape_component__WEBPACK_IMPORTED_MODULE_9__["UploadShapeComponent"],
                _africa_map_africa_map_component__WEBPACK_IMPORTED_MODULE_5__["AfricaMapComponent"],
                _country_map_country_map_component__WEBPACK_IMPORTED_MODULE_8__["CountryMapComponent"],
                _upload_level_map_upload_level_map_component__WEBPACK_IMPORTED_MODULE_10__["UploadLevelMapComponent"],
                _statistic_map_general_statistic_map_general_component__WEBPACK_IMPORTED_MODULE_11__["StatisticMapGeneralComponent"],
                _maps_levels_maps_levels_component__WEBPACK_IMPORTED_MODULE_12__["MapsLevelsComponent"],
                _statistc_map_statistc_map_component__WEBPACK_IMPORTED_MODULE_13__["StatistcMapComponent"]
            ],
            declarations: [
                _landing_map_landing_map_component__WEBPACK_IMPORTED_MODULE_4__["LandingMapComponent"],
                _africa_map_africa_map_component__WEBPACK_IMPORTED_MODULE_5__["AfricaMapComponent"],
                _upload_map_upload_map_component__WEBPACK_IMPORTED_MODULE_7__["UploadMapComponent"],
                _country_map_country_map_component__WEBPACK_IMPORTED_MODULE_8__["CountryMapComponent"],
                _upload_shape_upload_shape_component__WEBPACK_IMPORTED_MODULE_9__["UploadShapeComponent"],
                _upload_level_map_upload_level_map_component__WEBPACK_IMPORTED_MODULE_10__["UploadLevelMapComponent"],
                _statistic_map_general_statistic_map_general_component__WEBPACK_IMPORTED_MODULE_11__["StatisticMapGeneralComponent"],
                _maps_levels_maps_levels_component__WEBPACK_IMPORTED_MODULE_12__["MapsLevelsComponent"],
                _statistc_map_statistc_map_component__WEBPACK_IMPORTED_MODULE_13__["StatistcMapComponent"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/maps/statistc-map/statistc-map.component.css":
/*!**************************************************************!*\
  !*** ./src/app/maps/statistc-map/statistc-map.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leaflet-container {\n  background-color: rgba(255, 0, 0, 0.0);\n}\n\n\n.info {\n  padding: 6px 8px;\n  font: 14px/16px Arial, Helvetica, sans-serif;\n  background: white;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n}\n\n\n.info h4 {\n  margin: 0 0 5px;\n  color: #777;\n}\n\n\n.legend {\n  line-height: 18px;\n  color: #555;\n}\n\n\n.legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px;\n  opacity: 0.7;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9zdGF0aXN0Yy1tYXAvc3RhdGlzdGMtbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7Q0FDeEM7OztBQUdEO0VBQ0UsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxtQkFBbUI7Q0FDcEI7OztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7O0FBR0Q7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtDQUNiOzs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYXBzL3N0YXRpc3RjLW1hcC9zdGF0aXN0Yy1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjApO1xufVxuXG5cbi5pbmZvIHtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgZm9udDogMTRweC8xNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5mbyBoNCB7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cblxuLmxlZ2VuZCB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmxlZ2VuZCBpIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maps/statistc-map/statistc-map.component.html":
/*!***************************************************************!*\
  !*** ./src/app/maps/statistc-map/statistc-map.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <h3>Search by country or region </h3>\n  </div>\n  <div class=\"panel-body\">\n    <a class=\"btn btn-default btn-rounded btn-block\" (click)=\"openModalSelect()\">\n      Select region, country or territory</a>\n    <br>\n\n\n    <div style=\"height: 580px  ; width: 100%; z-index:0\" id=\"map\"></div>\n\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/maps/statistc-map/statistc-map.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/maps/statistc-map/statistc-map.component.ts ***!
  \*************************************************************/
/*! exports provided: StatistcMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatistcMapComponent", function() { return StatistcMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/modal-select-country/modal-select-country.component */ "./src/app/shared/modal-select-country/modal-select-country.component.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_level_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/level.service */ "./src/app/services/level.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StatistcMapComponent = /** @class */ (function () {
    function StatistcMapComponent(_mapService, _modalService, _countryservice, _levelsService, _router) {
        this._mapService = _mapService;
        this._modalService = _modalService;
        this._countryservice = _countryservice;
        this._levelsService = _levelsService;
        this._router = _router;
        this.map = null;
        this.countries = [];
        this.levels = [];
        this.panel = null;
        this.countriesLayer = null;
        this.levelsLayer = null;
        this.zoom = null;
        this.layerObject = null;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StatistcMapComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.layerObject);
    };
    StatistcMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialiser la map
        this.map = this._mapService.initMap('map', 4, 'white');
        //  get countries
        this._countryservice.getCountries().subscribe(function (countriesApi) {
            _this.countries = countriesApi.data;
            _this.addCountriesLayer(countriesApi.data);
        }, function (error) { console.log(error); });
        // console.log('zoom map : ' + this.map.getZoom());
    };
    StatistcMapComponent.prototype.addLevelsLayer = function (country_id, level_id) {
        var _this = this;
        if (level_id === void 0) { level_id = null; }
        var styleLevels = this._mapService.styleLevels;
        var styleUploadCountries = this._mapService.styleUploadCountries;
        var styleHover = this._mapService.styleHover;
        this._levelsService.getLevels(country_id, level_id).subscribe(function (levelsApi) {
            _this.levels = levelsApi;
            // console.log(this.levels);
            _this.levelsLayer = leaflet__WEBPACK_IMPORTED_MODULE_6__["geoJSON"](levelsApi.data, {
                style: styleLevels,
                onEachFeature: function (feature, layer) {
                    layer.bindTooltip(feature.properties.name);
                    layer.on({
                        'click': function (e) {
                            var l = e.target;
                            _this.map.fitBounds(l.getBounds());
                            _this.layerObject = feature.properties;
                            _this.sendMessage();
                        },
                        'dblclick': function (e) {
                            var l = e.target;
                            var id = e.target.feature.properties.id;
                            var country_i = e.target.feature.properties.country_id;
                            _this._router.navigate(['landing/profile-local-government', id], { queryParams: { c: country_i } });
                            // this._router.navigate(['landing/profile-local-government'], id);
                            // // legend.remove();
                            // // this.map.fitBounds(l.getBounds());
                            // this.levelsLayer.removeFrom(this.map);
                            // this.addLevelsLayer(feature.properties.country_id, id);
                            // this.map.fiBounds(this.levelsLayer.getBounds());
                        },
                        mouseover: function (e) {
                            // tslint:disable-next-line:no-shadowed-variable
                            var layer = e.target;
                            layer.openTooltip();
                            layer.setStyle(styleHover(layer.feature));
                            // info.update(layer.feature.properties);
                        },
                        mouseout: function (e) {
                            // tslint:disable-next-line:no-shadowed-variable
                            var layer = e.target;
                            layer.setStyle(styleUploadCountries(layer.feature));
                            // this.geojsonLevelLayer.removeFrom(this.map);
                        }
                    });
                }
            });
            _this.levelsLayer.bringToFront();
            _this.levelsLayer.addTo(_this.map);
        });
    };
    StatistcMapComponent.prototype.addCountriesLayer = function (countriesGeojson) {
        var _this = this;
        var styleRegion = this._mapService.styleRegion;
        var styleHover = this._mapService.styleHover;
        this.map.on('zoomstart', function () {
            var zoom = _this.map.getZoom();
            if (zoom < _this.zoom) {
                _this.countriesLayer.setStyle(_this._mapService.styleRegion);
                legend.addTo(_this.map);
                if (_this.levelsLayer !== null) {
                    _this.levelsLayer.removeFrom(_this.map);
                }
            }
        });
        this.countriesLayer = leaflet__WEBPACK_IMPORTED_MODULE_6__["geoJSON"](countriesGeojson, {
            style: styleRegion,
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h5>' +
                    feature.properties.name +
                    '</h5>N of Local G : '
                    + feature.properties.levels1_count);
                layer.on({
                    'click': function (e) {
                        legend.remove();
                        _this.zoom = _this.map.getZoom();
                        _this.countriesLayer.setStyle(_this._mapService.styleHide());
                        if (_this.levelsLayer !== null) {
                            _this.levelsLayer.removeFrom(_this.map);
                        }
                        var l = e.target;
                        _this.layerObject = feature.properties;
                        _this.sendMessage();
                        // l.setStyle(styleHover(l.feature));
                        _this.map.fitBounds(l.getBounds());
                        _this.addLevelsLayer(feature.properties.id);
                    },
                    'dblclick': function (e) {
                        var l = e.target;
                        _this.addLevelsLayer(feature.properties.id);
                    },
                    mouseover: function (e) {
                        // tslint:disable-next-line:no-shadowed-variable
                        var layer = e.target;
                        layer.openPopup();
                        layer.setStyle(styleHover(feature));
                    },
                    mouseout: function (e) {
                        // tslint:disable-next-line:no-shadowed-variable
                        var layer = e.target;
                        var zoom = _this.map.getZoom();
                        layer.setStyle(styleRegion(layer.feature));
                    }
                });
            }
        });
        // create legend of region
        var legend = this._mapService.createDiv('bottomleft');
        this._mapService.getDiv(legend);
        this._mapService.updateLegendRegion(legend);
        legend.addTo(this.map);
        this.map.fitBounds(this.countriesLayer.getBounds());
        this.countriesLayer.addTo(this.map);
    };
    StatistcMapComponent.prototype.openModalSelect = function () {
        var initialState = {
            title: 'select Country',
            countries: this.countries
        };
        this.bsModalRef = this._modalService.show(_shared_modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_2__["ModalSelectCountryComponent"], {
            initialState: initialState,
            class: 'modal-lg'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StatistcMapComponent.prototype, "messageEvent", void 0);
    StatistcMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistc-map',
            template: __webpack_require__(/*! ./statistc-map.component.html */ "./src/app/maps/statistc-map/statistc-map.component.html"),
            styles: [__webpack_require__(/*! ./statistc-map.component.css */ "./src/app/maps/statistc-map/statistc-map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"],
            src_app_services_level_service__WEBPACK_IMPORTED_MODULE_7__["LevelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StatistcMapComponent);
    return StatistcMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/statistic-map-general/statistic-map-general.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/maps/statistic-map-general/statistic-map-general.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leaflet-container {\n  background-color: rgba(255, 0, 0, 0.0);\n}\n\n\n.info {\n  padding: 6px 8px;\n  font: 14px/16px Arial, Helvetica, sans-serif;\n  background: white;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n}\n\n\n.info h4 {\n  margin: 0 0 5px;\n  color: #777;\n}\n\n\n.legend {\n  line-height: 18px;\n  color: #555;\n}\n\n\n.legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px;\n  opacity: 0.7;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9zdGF0aXN0aWMtbWFwLWdlbmVyYWwvc3RhdGlzdGljLW1hcC1nZW5lcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7Q0FDeEM7OztBQUdEO0VBQ0UsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxtQkFBbUI7Q0FDcEI7OztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7O0FBR0Q7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtDQUNiOzs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYXBzL3N0YXRpc3RpYy1tYXAtZ2VuZXJhbC9zdGF0aXN0aWMtbWFwLWdlbmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjApO1xufVxuXG5cbi5pbmZvIHtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgZm9udDogMTRweC8xNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5mbyBoNCB7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cblxuLmxlZ2VuZCB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmxlZ2VuZCBpIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maps/statistic-map-general/statistic-map-general.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/maps/statistic-map-general/statistic-map-general.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <h3>Search by country or region </h3>\n  </div>\n  <div class=\"panel-body\">\n    <a class=\"btn btn-default btn-rounded btn-block\" (click)=\"selectByContryModal()\">\n      Select region, country or territory</a>\n    <br>\n\n\n    <div style=\"height: 580px  ; width: 100%; z-index:0\" id=\"map\"></div>\n\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/maps/statistic-map-general/statistic-map-general.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/maps/statistic-map-general/statistic-map-general.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StatisticMapGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticMapGeneralComponent", function() { return StatisticMapGeneralComponent; });
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/level.service */ "./src/app/services/level.service.ts");
/* harmony import */ var _shared_modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/modal-select-country/modal-select-country.component */ "./src/app/shared/modal-select-country/modal-select-country.component.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StatisticMapGeneralComponent = /** @class */ (function () {
    function StatisticMapGeneralComponent(_mapService, _modalService, _countriesService, _levelsService) {
        this._mapService = _mapService;
        this._modalService = _modalService;
        this._countriesService = _countriesService;
        this._levelsService = _levelsService;
        this.levels = [];
        this.geoJsonLayer = null;
        this.geojsonLevelLayer = null;
        this.geoJsonLevel = null;
        this.map = null;
        this.info = null;
        this.geojsonCountries = null;
        this.countriesLayer = null;
    }
    StatisticMapGeneralComponent.prototype.ngOnChanges = function (changes) {
    };
    StatisticMapGeneralComponent.prototype.ngOnInit = function () {
        this.map = this._mapService.initMap('map', 4, 'white');
        this.getCountries();
    };
    StatisticMapGeneralComponent.prototype.getCountries = function () {
        var _this = this;
        this._countriesService.getCountries().subscribe(function (countriesApi) {
            _this.countries = countriesApi.data;
            console.log(_this.countries);
            _this.addCountriesLayer();
        }, function (error) { console.log(error); });
    };
    StatisticMapGeneralComponent.prototype.getLevels = function (country_id, level_id) {
        var _this = this;
        if (level_id === void 0) { level_id = null; }
        this._levelsService.getLevels(country_id, level_id).subscribe(function (levelsApi) {
            _this.levels = levelsApi.data;
            console.log(_this.levels);
        }, function (error) { console.log(error); });
    };
    StatisticMapGeneralComponent.prototype.addCountriesLayer = function () {
        var _this = this;
        var styleRegion = this._mapService.styleRegion;
        var styleHover = this._mapService.styleHover;
        this.geojsonCountries = this._mapService.formatGeoJsonFeatures(this.countries);
        this.countries.forEach(function (element) {
            _this.geoJsonLevel = _this._mapService.formatGeoJsonFeatures(element.levels);
            _this.geojsonLevelLayer = leaflet__WEBPACK_IMPORTED_MODULE_6__["geoJSON"](_this.geoJsonLevel);
            _this.geojsonLevelLayer.addTo(_this.map);
        });
        this.geoJsonLayer = leaflet__WEBPACK_IMPORTED_MODULE_6__["geoJSON"](this.geojsonCountries, {
            style: styleRegion,
            onEachFeature: function (feature, layer) {
                layer.bindTooltip(feature.properties.name);
                layer.on({
                    click: function (e) {
                        var layer2 = e.target;
                        _this.map.setMaxZoom(8);
                        _this.map.fitBounds(e.target.getBounds());
                        layer2.bringToFront();
                        layer2.setStyle({
                            weight: 5,
                            color: '#1ab394',
                            dashArray: '',
                            fillOpacity: 0.7
                        });
                        info.update(layer2.feature.properties);
                        _this.geojsonLevelLayer.bringToFront();
                    },
                    mouseover: function (e) {
                        // tslint:disable-next-line:no-shadowed-variable
                        var layer = e.target;
                        layer.openTooltip();
                        layer.setStyle(styleHover(layer.feature));
                        info.update(layer.feature.properties);
                    },
                    mouseout: function (e) {
                        // tslint:disable-next-line:no-shadowed-variable
                        var layer = e.target;
                        layer.setStyle(styleRegion(layer.feature));
                        // this.geojsonLevelLayer.removeFrom(this.map);
                    }
                });
            }
        }).addTo(this.map);
        // create info
        var info = this.createInfoDiv();
        this.getInfoDiv(info);
        this.updateInfo(info);
        info.addTo(this.map);
        var legend = this.createLegendDiv();
        this.getLegendRegionDiv(legend);
        this.updateLegendRegion(legend);
        legend.addTo(this.map);
        this.map.fitBounds(this.geoJsonLayer.getBounds());
    };
    StatisticMapGeneralComponent.prototype.createLegendDiv = function () {
        return new (leaflet__WEBPACK_IMPORTED_MODULE_6__["Control"].extend({
            options: { position: 'bottomleft' },
        }))();
    };
    StatisticMapGeneralComponent.prototype.createInfoDiv = function () {
        return new (leaflet__WEBPACK_IMPORTED_MODULE_6__["Control"].extend({
            options: { position: 'bottomright' },
        }))();
    };
    StatisticMapGeneralComponent.prototype.updateInfo = function (info) {
        info.update = function (props) {
            this._div.innerHTML =
                '<div class="col-lg-12">' +
                    '<div class="widget style1 bg-muted">' +
                    '<div class="row">' +
                    '<div class="col-12">' +
                    '<span>Local Government :  </span>' +
                    (props
                        ? '</br><b>' +
                            props.region +
                            '</b><br/>' +
                            props.name +
                            '   <sup></sup>' +
                            '</br><b>' +
                            props.adm1 +
                            ' Level 1' +
                            '</b><br/>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                        : ' ');
        };
    };
    StatisticMapGeneralComponent.prototype.getInfoDiv = function (info) {
        return info.onAdd = function (map) {
            this._div = leaflet__WEBPACK_IMPORTED_MODULE_6__["DomUtil"].create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };
    };
    StatisticMapGeneralComponent.prototype.getLegendRegionDiv = function (legend) {
        return legend.onAdd = function (map) {
            this._div = leaflet__WEBPACK_IMPORTED_MODULE_6__["DomUtil"].create('div', 'ibox'); // create a div with a class "info"
            this.update();
            return this._div;
        };
    };
    StatisticMapGeneralComponent.prototype.updateLegendRegion = function (legend) {
        legend.update = function (props) {
            this._div.innerHTML =
                '<div class="col-12 ">' +
                    '<div class="ibox-content">' +
                    '<ul class="category-list" style = "padding: 0" >' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x  " style="color: #66BF5C" > </i>' +
                    'Northern Africa' +
                    '</li>' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x " style="color: #00B9EE" > </i>' +
                    'Easthern Africa' +
                    '</li>' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x " style="color: #FFC846" > </i>' +
                    'Western Africa' +
                    '</li>' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x " style="color: #BD0026" > </i>' +
                    'Middle Africa' +
                    '</li>' +
                    '<li class="d-flex align-items-center" >' +
                    '<i class=" fas fa-stop fa-2x " style="color: #F663A4" > </i>' +
                    'Southern Africa' +
                    '</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>';
        };
    };
    StatisticMapGeneralComponent.prototype.addLevelsLayer = function (country_id) {
        var _this = this;
        var styleRegion = this._mapService.styleRegion;
        var styleHover = this._mapService.styleHover;
        this._levelsService.getLevels(country_id).subscribe(function (levelsApi) {
            _this.levels = levelsApi.data;
            // this.geoJsonLayer.removeFrom(this.map);
            _this.geoJsonLevel = _this._mapService.formatGeoJsonFeatures(_this.levels);
            console.log(_this.geoJsonLevel);
            _this.geojsonLevelLayer = leaflet__WEBPACK_IMPORTED_MODULE_6__["geoJSON"](_this.geoJsonLevel, {
            // style: styleHover,
            }).addTo(_this.map);
        }, function (error) { console.log(error); });
        // this.levels.forEach(element => {
        //   this.geoJsonLevel = this._mapService.formatGeoJson(element.shape);
        //   var route1Layer = L.geoJSON(this.geoJsonLevel);
        //   group.addLayer(route1Layer);
        // });
        // group.addTo(this.map);
    };
    StatisticMapGeneralComponent.prototype.selectByContryModal = function () {
        this.openModalSelect();
    };
    StatisticMapGeneralComponent.prototype.openModalSelect = function () {
        var initialState = {
            title: 'select Country',
            countries: this.countries
        };
        this.bsModalRef = this._modalService.show(_shared_modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_1__["ModalSelectCountryComponent"], {
            initialState: initialState,
            class: 'modal-lg'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], StatisticMapGeneralComponent.prototype, "countriesInput", void 0);
    StatisticMapGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-statistic-map-general',
            template: __webpack_require__(/*! ./statistic-map-general.component.html */ "./src/app/maps/statistic-map-general/statistic-map-general.component.html"),
            styles: [__webpack_require__(/*! ./statistic-map-general.component.css */ "./src/app/maps/statistic-map-general/statistic-map-general.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
            _services_level_service__WEBPACK_IMPORTED_MODULE_0__["LevelService"]])
    ], StatisticMapGeneralComponent);
    return StatisticMapGeneralComponent;
}());



/***/ }),

/***/ "./src/app/maps/upload-level-map/upload-level-map.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/maps/upload-level-map/upload-level-map.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " #map {\n\n\n   z-index: 0;\n }\n\n .leaflet-container {\n   background-color: rgba(255, 0, 0, 0.0);\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy91cGxvYWQtbGV2ZWwtbWFwL3VwbG9hZC1sZXZlbC1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQzs7O0dBR0UsV0FBVztFQUNaOztDQUVEO0dBQ0UsdUNBQXVDO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbWFwcy91cGxvYWQtbGV2ZWwtbWFwL3VwbG9hZC1sZXZlbC1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAjbWFwIHtcblxuXG4gICB6LWluZGV4OiAwO1xuIH1cblxuIC5sZWFmbGV0LWNvbnRhaW5lciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4wKTtcbiB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/maps/upload-level-map/upload-level-map.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/maps/upload-level-map/upload-level-map.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-lg-8\">\n    <div class=\"ibox\">\n      <div class=\"ibox-content bg-white\">\n        <div style=\"height: 900px\" id=\"map\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"col-lg-4\">\n\n    <app-ibox [title]=\"title\">\n      <div class=\"iBoxBody\">\n      </div>\n    </app-ibox>\n    <div class=\"d-flex justify-content-between flex-wrap\">\n\n      <span *ngFor=\"let level of levelList ; let i = index\" class=\"btn btn-white  m-b-xs\" [ngClass]=\" i == levelHover ? 'set_en active' : ''\"\n        (mouseenter)=\"omMouseEnterLevel(level.properties.ADM1 , i)\" (mouseleave)=\"onMouseLeaveLevel(level.properties.ADM1)\">\n        <!-- <img src='assets/img/flags/16/{{country.properties.name.replace(\" \" ,\"-\")}}.png'> -->\n        {{ level.properties.ADM1 }}</span>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/maps/upload-level-map/upload-level-map.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/maps/upload-level-map/upload-level-map.component.ts ***!
  \*********************************************************************/
/*! exports provided: UploadLevelMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadLevelMapComponent", function() { return UploadLevelMapComponent; });
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadLevelMapComponent = /** @class */ (function () {
    function UploadLevelMapComponent(_mapService) {
        this._mapService = _mapService;
        this.title = 'Levels 1 ';
        this.levelList = [];
        this.map = null;
        this.geoJsonLayer = null;
        this.levelHover = null;
    }
    UploadLevelMapComponent.prototype.ngOnInit = function () {
        this.map = this._mapService.initMap('map', 4);
    };
    UploadLevelMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.geoJsonInput !== null) {
            var change = changes['geoJsonInput'];
            if (change.currentValue !== change.previousValue) {
                this.levelList = this.geoJsonInput.features;
                if (this.geoJsonLayer !== null) {
                    this.geoJsonLayer.removeFrom(this.map);
                }
                var styleDefault_1 = this._mapService.styleUploadCountries;
                var styleHover_1 = this._mapService.styleHover;
                this.geoJsonLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](this.geoJsonInput, {
                    style: styleDefault_1,
                    onEachFeature: function (feature, layer) {
                        layer.bindTooltip(feature.properties.ADM1);
                        layer.on({
                            mouseover: function (e) {
                                var layer = e.target;
                                layer.openTooltip();
                                layer.setStyle(styleHover_1(layer.feature));
                            },
                            mouseout: function (e) {
                                var layer = e.target;
                                layer.setStyle(styleDefault_1(layer.feature));
                            }
                        });
                    }
                });
                this.geoJsonLayer.addTo(this.map);
                this.map.fitBounds(this.geoJsonLayer.getBounds());
                var countriesCount = this.levelList.length;
                this.title =
                    countriesCount === 0
                        ? 'No Country in this file !'
                        : countriesCount === 1
                            ? countriesCount + ' Level'
                            : countriesCount + ' Levels';
                // this.hideBody = false;
            }
        }
        else {
            this.geoJsonLayer.removeFrom(this.map);
            this.levelList = null;
            this.title = 'No GeoJson file uploaded';
        }
    };
    UploadLevelMapComponent.prototype.omMouseEnterLevel = function (level, i) {
        this.geoJsonLayer.eachLayer(function (layer) {
            if (layer.feature.properties.ADM1 === level) {
                // this.map.flyToBounds(layer.getBounds(), { animate: true, duration: 3 });
                layer.openTooltip();
                layer.bringToFront();
                layer.setStyle({
                    weight: 5,
                    color: '#00b9ee',
                    dashArray: '',
                    fillColor: '#00b9ee',
                    fillOpacity: 1
                });
            }
        });
        this.levelHover = i;
    };
    UploadLevelMapComponent.prototype.onMouseLeaveLevel = function (level) {
        var style = this._mapService.styleUploadCountries;
        this.geoJsonLayer.eachLayer(function (layer) {
            layer.closeTooltip();
            layer.setStyle(style(layer.feature));
        });
        this.levelHover = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UploadLevelMapComponent.prototype, "geoJsonInput", void 0);
    UploadLevelMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-level-map',
            template: __webpack_require__(/*! ./upload-level-map.component.html */ "./src/app/maps/upload-level-map/upload-level-map.component.html"),
            styles: [__webpack_require__(/*! ./upload-level-map.component.css */ "./src/app/maps/upload-level-map/upload-level-map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_0__["MapService"]])
    ], UploadLevelMapComponent);
    return UploadLevelMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/upload-map/upload-map.component.css":
/*!**********************************************************!*\
  !*** ./src/app/maps/upload-map/upload-map.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " #map {\n\n\n   z-index: 0;\n }\n\n .leaflet-container {\n   background-color: rgba(255, 0, 0, 0.0);\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy91cGxvYWQtbWFwL3VwbG9hZC1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQzs7O0dBR0UsV0FBVztFQUNaOztDQUVEO0dBQ0UsdUNBQXVDO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbWFwcy91cGxvYWQtbWFwL3VwbG9hZC1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAjbWFwIHtcblxuXG4gICB6LWluZGV4OiAwO1xuIH1cblxuIC5sZWFmbGV0LWNvbnRhaW5lciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4wKTtcbiB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/maps/upload-map/upload-map.component.html":
/*!***********************************************************!*\
  !*** ./src/app/maps/upload-map/upload-map.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-lg-8\">\n    <div class=\"ibox\">\n      <div class=\"ibox-content bg-white\">\n        <div style=\"height: 900px\" id=\"map\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4\">\n\n    <app-ibox [title]=\"title\" [hideTitle]=\"hideTitle\" [hideFooter]=\"hideFooter\" [hideBody]=\"hideBody\">\n      <div class=\"iBoxBody\">\n      </div>\n    </app-ibox>\n    <div class=\"d-flex justify-content-between flex-wrap\">\n\n      <span *ngFor=\"let country of countriesList ; let i = index\" class=\"btn btn-white  m-b-xs\" [ngClass]=\" i == countryHover ? 'set_en active' : ''\"\n        (mouseenter)=\"omMouseEnterCountry(country.properties.name  , i)\" (mouseleave)=\"onMouseLeaveCountry(country.properties.name)\">\n        <!-- <img src='assets/img/flags/16/{{country.properties.name.replace(\" \" ,\"-\")}}.png'> -->\n        {{country.properties.name }}</span>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/maps/upload-map/upload-map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/upload-map/upload-map.component.ts ***!
  \*********************************************************/
/*! exports provided: UploadMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMapComponent", function() { return UploadMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadMapComponent = /** @class */ (function () {
    function UploadMapComponent(_mapService, _http, _modalService) {
        this._mapService = _mapService;
        this._http = _http;
        this._modalService = _modalService;
        this.height = null;
        // la couche geoson
        this.geoJsonLayer = null;
        this.countriesList = [];
        // ibox params
        this.title = 'No GeoJson file uploaded';
        this.hideBody = true;
        this.hideTitle = false;
        this.hideFooter = true;
        this.oneAtATime = true;
        this.countryHover = null;
    }
    UploadMapComponent.prototype.ngOnInit = function () {
        // initialiser la carte et la mettre dans un variable map
        this.map = this._mapService.initMap('map', 4, 'white');
    };
    // test(layer) { return layer.properties.name; }
    UploadMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.geoJsonInput !== null) {
            var change = changes['geoJsonInput'];
            if (change.currentValue !== change.previousValue) {
                this.countriesList = this.geoJsonInput.features;
                if (this.geoJsonLayer !== null) {
                    this.geoJsonLayer.removeFrom(this.map);
                }
                var styleDefault_1 = this._mapService.styleUploadCountries;
                var styleHover_1 = this._mapService.styleHover;
                this.geoJsonLayer = leaflet__WEBPACK_IMPORTED_MODULE_4__["geoJSON"](this.geoJsonInput, {
                    style: styleDefault_1,
                    onEachFeature: function (feature, layer) {
                        layer.bindPopup(feature.properties.name);
                        layer.on({
                            mouseover: function (e) {
                                // tslint:disable-next-line:no-shadowed-variable
                                var layer = e.target;
                                layer.openPopup();
                                layer.setStyle(styleHover_1(layer.feature));
                            },
                            mouseout: function (e) {
                                // tslint:disable-next-line:no-shadowed-variable
                                var layer = e.target;
                                layer.setStyle(styleDefault_1(layer.feature));
                            }
                        });
                    }
                });
                this.geoJsonLayer.addTo(this.map);
                var countriesCount = this.countriesList.length;
                this.title =
                    countriesCount === 0
                        ? 'No Country in this file !'
                        : countriesCount === 1
                            ? countriesCount + ' Country'
                            : countriesCount + ' Countries';
                this.hideBody = false;
            }
        }
        else {
            this.geoJsonLayer.removeFrom(this.map);
            this.countriesList = null;
            this.title = 'No GeoJson file uploaded';
        }
    };
    UploadMapComponent.prototype.omMouseEnterRegion = function (region) {
        this.geoJsonLayer.eachLayer(function (layer) {
            if (layer.feature.properties.subregion === region) {
                layer.bringToFront();
                layer.setStyle({
                    fillColor: '#00b594',
                    fillOpacity: 1
                });
            }
        });
    };
    UploadMapComponent.prototype.onMouseLeaveRegion = function (region) {
        var style = this._mapService.styleRegion;
        this.geoJsonLayer.eachLayer(function (layer) {
            layer.setStyle(style(layer.feature));
        });
    };
    UploadMapComponent.prototype.omMouseEnterCountry = function (country, i) {
        this.geoJsonLayer.eachLayer(function (layer) {
            if (layer.feature.properties.name === country) {
                // this.map.flyToBounds(layer.getBounds(), { animate: true, duration: 3 });
                layer.bringToFront();
                layer.setStyle({
                    weight: 5,
                    color: '#217ca3',
                    dashArray: '',
                    fillColor: '#217ca3',
                    fillOpacity: 0.7
                });
            }
        });
        this.countryHover = i;
    };
    UploadMapComponent.prototype.onMouseLeaveCountry = function (country) {
        var style = this._mapService.styleUploadCountries;
        this.geoJsonLayer.eachLayer(function (layer) {
            layer.setStyle(style(layer.feature));
        });
        this.countryHover = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UploadMapComponent.prototype, "geoJsonInput", void 0);
    UploadMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-map',
            template: __webpack_require__(/*! ./upload-map.component.html */ "./src/app/maps/upload-map/upload-map.component.html"),
            styles: [__webpack_require__(/*! ./upload-map.component.css */ "./src/app/maps/upload-map/upload-map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], UploadMapComponent);
    return UploadMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/upload-shape/upload-shape.component.css":
/*!**************************************************************!*\
  !*** ./src/app/maps/upload-shape/upload-shape.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .leaflet-container {\n   background-color: rgba(255, 0, 0, 0.0);\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy91cGxvYWQtc2hhcGUvdXBsb2FkLXNoYXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7R0FDRSx1Q0FBdUM7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9tYXBzL3VwbG9hZC1zaGFwZS91cGxvYWQtc2hhcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAubGVhZmxldC1jb250YWluZXIge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMCk7XG4gfVxuIl19 */"

/***/ }),

/***/ "./src/app/maps/upload-shape/upload-shape.component.html":
/*!***************************************************************!*\
  !*** ./src/app/maps/upload-shape/upload-shape.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 350px ; width: 100% ;\n    z-index:0\" id=\"map\"></div>\n"

/***/ }),

/***/ "./src/app/maps/upload-shape/upload-shape.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/maps/upload-shape/upload-shape.component.ts ***!
  \*************************************************************/
/*! exports provided: UploadShapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadShapeComponent", function() { return UploadShapeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadShapeComponent = /** @class */ (function () {
    function UploadShapeComponent(_mapService) {
        this._mapService = _mapService;
        this.map = null;
        this.geoJsonLayer = null;
    }
    UploadShapeComponent.prototype.ngOnInit = function () {
        this.map = this._mapService.initMap("map", 1);
    };
    UploadShapeComponent.prototype.ngOnChanges = function (changes) {
        if (this.geoJsonInput !== null) {
            var change = changes["geoJsonInput"];
            if (change.currentValue !== change.previousValue) {
                if (this.geoJsonLayer !== null) {
                    this.geoJsonLayer.removeFrom(this.map);
                }
                var styleDefault_1 = this._mapService.styleUploadCountries;
                var styleHover_1 = this._mapService.styleHover;
                this.geoJsonLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](this.geoJsonInput, {
                    style: styleDefault_1,
                    onEachFeature: function (feature, layer) {
                        layer.bindPopup(feature.properties.name);
                        layer.on({
                            mouseover: function (e) {
                                var layer = e.target;
                                layer.openPopup();
                                layer.setStyle(styleHover_1(layer.feature));
                            },
                            mouseout: function (e) {
                                var layer = e.target;
                                layer.setStyle(styleDefault_1(layer.feature));
                            }
                        });
                    }
                });
                this.geoJsonLayer.addTo(this.map);
                this.map.fitBounds(this.geoJsonLayer.getBounds());
            }
        }
        else {
            this.geoJsonLayer.removeFrom(this.map);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UploadShapeComponent.prototype, "geoJsonInput", void 0);
    UploadShapeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-upload-shape",
            template: __webpack_require__(/*! ./upload-shape.component.html */ "./src/app/maps/upload-shape/upload-shape.component.html"),
            styles: [__webpack_require__(/*! ./upload-shape.component.css */ "./src/app/maps/upload-shape/upload-shape.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], UploadShapeComponent);
    return UploadShapeComponent;
}());



/***/ }),

/***/ "./src/app/models/country.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/country.model.ts ***!
  \*****************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/models/level.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/level.model.ts ***!
  \***************************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
var Level = /** @class */ (function () {
    function Level() {
        this.id = null;
        this.name = null;
        this.country_id = null;
        this.population = null;
        this.population_year = null;
        this.level_id = null;
        this.area = null;
        this.shape = null;
    }
    return Level;
}());



/***/ }),

/***/ "./src/app/models/region.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/region.model.ts ***!
  \****************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
var Region = /** @class */ (function () {
    function Region() {
        this.id = null;
        this.name = null;
    }
    return Region;
}());



/***/ }),

/***/ "./src/app/services/after-login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/after-login.service.ts ***!
  \*************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(Token) {
        this.Token = Token;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        return this.Token.loggedIn();
    };
    AfterLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, token) {
        this.http = http;
        this.token = token;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.loggedIn = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
    }
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService.prototype.signup = function (data) {
        return this.http.post(this.baseUrl + '/signup', data);
    };
    AuthService.prototype.login = function (data) {
        return this.http.post(this.baseUrl + '/login', data);
    };
    AuthService.prototype.sendPasswordResetLink = function (data) {
        return this.http.post(this.baseUrl + '/sendPasswordResetLink', data);
    };
    AuthService.prototype.changePassword = function (data) {
        return this.http.post(this.baseUrl + '/resetPassword', data);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/before-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/before-login.service.ts ***!
  \**************************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(Token, router) {
        this.Token = Token;
        this.router = router;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        return !this.Token.loggedIn();
    };
    BeforeLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryService = /** @class */ (function () {
    function CountryService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.baseUrl = this.url + '/countries/';
    }
    CountryService.prototype.getCountries = function () {
        return this._http
            .get(this.baseUrl)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService.prototype.deleteCountry = function (id) {
        return this._http
            .delete(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService.prototype.getCountry = function (id) {
        return this._http
            .get(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService.prototype.errorHandler = function (error) {
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    // save(country: Country): Observable<Country> {
    //   return this._http.post<Country>(this.baseUrl, country)
    //     .pipe(catchError(this.errorHandler));
    // }
    CountryService.prototype.save = function (country) {
        return this._http
            .post(this.baseUrl, country)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService.prototype.update = function (country) {
        return this._http
            .put(this.baseUrl + country.id, country)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/services/level.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/level.service.ts ***!
  \*******************************************/
/*! exports provided: LevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelService", function() { return LevelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LevelService = /** @class */ (function () {
    // private baseUrl = this.url + "/" + this.country_id + "/levels/";
    function LevelService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    LevelService.prototype.save = function (level) {
        var url = this.url + '/countries/' + level.get('country_id') + '/levels';
        return this._http
            .post(url, level)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    LevelService.prototype.errorHandler = function (error) {
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    LevelService.prototype.getLevels = function (country_id, level_id) {
        if (level_id === void 0) { level_id = null; }
        var url = null;
        if (level_id !== null) {
            url = this.url + '/countries/' + country_id + '/levels/' + level_id;
        }
        else {
            url = this.url + '/countries/' + country_id + '/levels';
        }
        return this._http.get(url).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    LevelService.prototype.getLevel = function (country_id, level_id) {
        if (level_id === void 0) { level_id = null; }
        console.log('c_id ' + country_id);
        var url = this.url + '/countries/' + country_id + '/levels/' + level_id;
        console.log('url ' + url);
        return this._http.get(url).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    LevelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LevelService);
    return LevelService;
}());



/***/ }),

/***/ "./src/app/services/person.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/person.service.ts ***!
  \********************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonService = /** @class */ (function () {
    // private baseUrl = this.url + "/" + this.country_id + "/levels/";
    function PersonService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    PersonService.prototype.save = function (person) {
        var url = this.url + '/countries/' + person.get('country_id') + '/persons';
        return this._http
            .post(url, person)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    PersonService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    PersonService.prototype.getPersons = function (country_id) {
        var url = this.url + '/countries/' + country_id + '/persons';
        return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/services/region.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/region.service.ts ***!
  \********************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegionService = /** @class */ (function () {
    function RegionService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.baseUrl = this.url + '/regions/';
    }
    RegionService.prototype.getRegions = function () {
        return this._http
            .get(this.baseUrl)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.deleteRegion = function (id) {
        return this._http
            .delete(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.getRegion = function (id) {
        return this._http
            .get(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.errorHandler = function (error) {
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    RegionService.prototype.save = function (region) {
        return this._http
            .post(this.baseUrl, region)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.update = function (region) {
        return this._http
            .put(this.baseUrl + region.id, region)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegionService);
    return RegionService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        this.iss = {
            login: this.baseUrl + '/login',
            signup: this.baseUrl + '/signup'
        };
    }
    TokenService.prototype.handle = function (token) {
        this.set(token);
    };
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
    };
    TokenService.prototype.isValid = function () {
        var token = this.get();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    };
    TokenService.prototype.payload = function (token) {
        var payload = token.split('.')[1];
        return this.decode(payload);
    };
    TokenService.prototype.decode = function (payload) {
        return JSON.parse(atob(payload));
    };
    TokenService.prototype.loggedIn = function () {
        return this.isValid();
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/services/upload-file.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/upload-file.service.ts ***!
  \*************************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadFileService = /** @class */ (function () {
    function UploadFileService() {
    }
    UploadFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/shared/ibox/ibox.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/ibox/ibox.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointerCursor {\n    cursor: pointer;\n}\n\n\n.ibox-title { \n\n\n    padding-right: 15px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2lib3gvaWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25COzs7QUFHRDs7O0lBR0ksb0JBQW9COztDQUV2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pYm94L2lib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyQ3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmlib3gtdGl0bGUgeyBcblxuXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/ibox/ibox.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/ibox/ibox.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox\">\n\n\n\n  <div [hidden]=\"hideTitle\" class=\"ibox-title     pointerCursor\" (click)=\"hideBody = !hideBody ; hideFooter = !hideFooter\">\n    <h2>{{ title | uppercase}}</h2>\n    <ng-content select=\".iBoxTitle\"></ng-content>\n  </div>\n\n\n\n\n  <div class=\"ibox-content \" [hidden]=\"hideBody\">\n\n    <ng-content select=\".iBoxBody\"></ng-content>\n\n  </div>\n\n  <div class=\"ibox-footer\" [hidden]=\"hideFooter\">\n\n    <ng-content select=\".iBoxFooter\"></ng-content>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/ibox/ibox.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/ibox/ibox.component.ts ***!
  \***********************************************/
/*! exports provided: IboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IboxComponent", function() { return IboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IboxComponent = /** @class */ (function () {
    function IboxComponent() {
        this.hideFooter = true;
    }
    IboxComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IboxComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], IboxComponent.prototype, "hideTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], IboxComponent.prototype, "hideBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], IboxComponent.prototype, "hideFooter", void 0);
    IboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ibox',
            template: __webpack_require__(/*! ./ibox.component.html */ "./src/app/shared/ibox/ibox.component.html"),
            styles: [__webpack_require__(/*! ./ibox.component.css */ "./src/app/shared/ibox/ibox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IboxComponent);
    return IboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-select-country/modal-select-country.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/shared/modal-select-country/modal-select-country.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC1zZWxlY3QtY291bnRyeS9tb2RhbC1zZWxlY3QtY291bnRyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/modal-select-country/modal-select-country.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/modal-select-country/modal-select-country.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary  \">\n  <h3 class=\"modal-title pull-left\">{{title}}</h3>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n\n\n  <ng-container *ngFor=\"let region of regions\">\n\n    <h3 class=\"text-info\"> <strong>{{region.name}} </strong></h3>\n\n    <div class=\"row\">\n      <ng-container *ngFor=\"let country of countries\">\n\n        <div class=\"col-lg-3\" *ngIf='region.name == country.properties.region'>\n          <ul class=\"folder-list m-b-md\" style=\"padding: 0\">\n            <li>\n              <a (click)=\"gotoCountryDetails(country.properties.id)\">\n                {{ country.properties.name }}\n              </a>\n            </li>\n          </ul>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"hr-line-dashed\"></div>\n  </ng-container>\n\n\n</div>\n<!-- <div class=\"modal-footer\">\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Fermer</button>\n  <button class=\"btn btn-block\" type=\"button\" (click)=\"onConfirm()\">Sauvegarder</button>\n</div> -->\n"

/***/ }),

/***/ "./src/app/shared/modal-select-country/modal-select-country.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/modal-select-country/modal-select-country.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalSelectCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSelectCountryComponent", function() { return ModalSelectCountryComponent; });
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/region.service */ "./src/app/services/region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/country.service */ "./src/app/services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalSelectCountryComponent = /** @class */ (function () {
    function ModalSelectCountryComponent(_modalRef, _regionService, _countryService, _route, _router) {
        this._modalRef = _modalRef;
        this._regionService = _regionService;
        this._countryService = _countryService;
        this._route = _route;
        this._router = _router;
    }
    ModalSelectCountryComponent.prototype.gotoCountryDetails = function (id) {
        this._modalRef.hide();
        this._router.navigate(['landing/statistic/country', id]);
    };
    ModalSelectCountryComponent.prototype.onCancel = function () {
        this._modalRef.hide();
    };
    ModalSelectCountryComponent.prototype.onConfirm = function () {
        // this.onClose.next(this.region);
    };
    ModalSelectCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countries.forEach(function (element) {
            console.log(element.properties.name);
        });
        this._regionService.getRegions().subscribe(function (region) {
            _this.regions = region.data;
        });
        this.onClose = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    };
    ModalSelectCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-modal-select-country',
            template: __webpack_require__(/*! ./modal-select-country.component.html */ "./src/app/shared/modal-select-country/modal-select-country.component.html"),
            styles: [__webpack_require__(/*! ./modal-select-country.component.css */ "./src/app/shared/modal-select-country/modal-select-country.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _services_region_service__WEBPACK_IMPORTED_MODULE_0__["RegionService"],
            src_app_services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ModalSelectCountryComponent);
    return ModalSelectCountryComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ibox_ibox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ibox/ibox.component */ "./src/app/shared/ibox/ibox.component.ts");
/* harmony import */ var _modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-select-country/modal-select-country.component */ "./src/app/shared/modal-select-country/modal-select-country.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _ibox_ibox_component__WEBPACK_IMPORTED_MODULE_2__["IboxComponent"],
                _modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_3__["ModalSelectCountryComponent"]
            ],
            exports: [
                _ibox_ibox_component__WEBPACK_IMPORTED_MODULE_2__["IboxComponent"],
                _modal_select_country_modal_select_country_component__WEBPACK_IMPORTED_MODULE_3__["ModalSelectCountryComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // baseUrl: 'http://192.168.33.20/api'
    baseUrl: 'http://ec2-18-191-253-63.us-east-2.compute.amazonaws.com/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/vendor/leaflet/label/leaflet.label.js":
/*!***************************************************!*\
  !*** ./src/vendor/leaflet/label/leaflet.label.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	Leaflet.label, a plugin that adds labels to markers and vectors for Leaflet powered maps.
	(c) 2012-2013, Jacob Toye, Smartrak

	https://github.com/Leaflet/Leaflet.label
	http://leafletjs.com
	https://github.com/jacobtoye
*/
(function (t, e) {  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined, e !== void 0 && e.L && (e.LeafletLabel = t(L)) })(function (t) { t.labelVersion = "0.2.4"; var e = t.Class.extend({ includes: t.Mixin.Events, options: { className: "", clickable: !1, direction: "right", noHide: !1, offset: [12, -15], opacity: 1, zoomAnimation: !0 }, initialize: function (e, i) { t.setOptions(this, e), this._source = i, this._animated = t.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1 }, onAdd: function (e) { this._map = e, this._pane = this.options.pane ? e._panes[this.options.pane] : this._source instanceof t.Marker ? e._panes.markerPane : e._panes.popupPane, this._container || this._initLayout(), this._pane.appendChild(this._container), this._initInteraction(), this._update(), this.setOpacity(this.options.opacity), e.on("moveend", this._onMoveEnd, this).on("viewreset", this._onViewReset, this), this._animated && e.on("zoomanim", this._zoomAnimation, this), t.Browser.touch && !this.options.noHide && (t.DomEvent.on(this._container, "click", this.close, this), e.on("click", this.close, this)) }, onRemove: function (t) { this._pane.removeChild(this._container), t.off({ zoomanim: this._zoomAnimation, moveend: this._onMoveEnd, viewreset: this._onViewReset }, this), this._removeInteraction(), this._map = null }, setLatLng: function (e) { return this._latlng = t.latLng(e), this._map && this._updatePosition(), this }, setContent: function (t) { return this._previousContent = this._content, this._content = t, this._updateContent(), this }, close: function () { var e = this._map; e && (t.Browser.touch && !this.options.noHide && (t.DomEvent.off(this._container, "click", this.close), e.off("click", this.close, this)), e.removeLayer(this)) }, updateZIndex: function (t) { this._zIndex = t, this._container && this._zIndex && (this._container.style.zIndex = t) }, setOpacity: function (e) { this.options.opacity = e, this._container && t.DomUtil.setOpacity(this._container, e) }, _initLayout: function () { this._container = t.DomUtil.create("div", "leaflet-label " + this.options.className + " leaflet-zoom-animated"), this.updateZIndex(this._zIndex) }, _update: function () { this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updatePosition(), this._container.style.visibility = "") }, _updateContent: function () { this._content && this._map && this._prevContent !== this._content && "string" == typeof this._content && (this._container.innerHTML = this._content, this._prevContent = this._content, this._labelWidth = this._container.offsetWidth) }, _updatePosition: function () { var t = this._map.latLngToLayerPoint(this._latlng); this._setPosition(t) }, _setPosition: function (e) { var i = this._map, n = this._container, o = i.latLngToContainerPoint(i.getCenter()), s = i.layerPointToContainerPoint(e), a = this.options.direction, l = this._labelWidth, h = t.point(this.options.offset); "right" === a || "auto" === a && s.x < o.x ? (t.DomUtil.addClass(n, "leaflet-label-right"), t.DomUtil.removeClass(n, "leaflet-label-left"), e = e.add(h)) : (t.DomUtil.addClass(n, "leaflet-label-left"), t.DomUtil.removeClass(n, "leaflet-label-right"), e = e.add(t.point(-h.x - l, h.y))), t.DomUtil.setPosition(n, e) }, _zoomAnimation: function (t) { var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round(); this._setPosition(e) }, _onMoveEnd: function () { this._animated && "auto" !== this.options.direction || this._updatePosition() }, _onViewReset: function (t) { t && t.hard && this._update() }, _initInteraction: function () { if (this.options.clickable) { var e = this._container, i = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"]; t.DomUtil.addClass(e, "leaflet-clickable"), t.DomEvent.on(e, "click", this._onMouseClick, this); for (var n = 0; i.length > n; n++)t.DomEvent.on(e, i[n], this._fireMouseEvent, this) } }, _removeInteraction: function () { if (this.options.clickable) { var e = this._container, i = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"]; t.DomUtil.removeClass(e, "leaflet-clickable"), t.DomEvent.off(e, "click", this._onMouseClick, this); for (var n = 0; i.length > n; n++)t.DomEvent.off(e, i[n], this._fireMouseEvent, this) } }, _onMouseClick: function (e) { this.hasEventListeners(e.type) && t.DomEvent.stopPropagation(e), this.fire(e.type, { originalEvent: e }) }, _fireMouseEvent: function (e) { this.fire(e.type, { originalEvent: e }), "contextmenu" === e.type && this.hasEventListeners(e.type) && t.DomEvent.preventDefault(e), "mousedown" !== e.type ? t.DomEvent.stopPropagation(e) : t.DomEvent.preventDefault(e) } }); return t.BaseMarkerMethods = { showLabel: function () { return this.label && this._map && (this.label.setLatLng(this._latlng), this._map.showLabel(this.label)), this }, hideLabel: function () { return this.label && this.label.close(), this }, setLabelNoHide: function (t) { this._labelNoHide !== t && (this._labelNoHide = t, t ? (this._removeLabelRevealHandlers(), this.showLabel()) : (this._addLabelRevealHandlers(), this.hideLabel())) }, bindLabel: function (i, n) { var o = this.options.icon ? this.options.icon.options.labelAnchor : this.options.labelAnchor, s = t.point(o) || t.point(0, 0); return s = s.add(e.prototype.options.offset), n && n.offset && (s = s.add(n.offset)), n = t.Util.extend({ offset: s }, n), this._labelNoHide = n.noHide, this.label || (this._labelNoHide || this._addLabelRevealHandlers(), this.on("remove", this.hideLabel, this).on("move", this._moveLabel, this).on("add", this._onMarkerAdd, this), this._hasLabelHandlers = !0), this.label = new e(n, this).setContent(i), this }, unbindLabel: function () { return this.label && (this.hideLabel(), this.label = null, this._hasLabelHandlers && (this._labelNoHide || this._removeLabelRevealHandlers(), this.off("remove", this.hideLabel, this).off("move", this._moveLabel, this).off("add", this._onMarkerAdd, this)), this._hasLabelHandlers = !1), this }, updateLabelContent: function (t) { this.label && this.label.setContent(t) }, getLabel: function () { return this.label }, _onMarkerAdd: function () { this._labelNoHide && this.showLabel() }, _addLabelRevealHandlers: function () { this.on("mouseover", this.showLabel, this).on("mouseout", this.hideLabel, this), t.Browser.touch && this.on("click", this.showLabel, this) }, _removeLabelRevealHandlers: function () { this.off("mouseover", this.showLabel, this).off("mouseout", this.hideLabel, this), t.Browser.touch && this.off("click", this.showLabel, this) }, _moveLabel: function (t) { this.label.setLatLng(t.latlng) } }, t.Icon.Default.mergeOptions({ labelAnchor: new t.Point(9, -20) }), t.Marker.mergeOptions({ icon: new t.Icon.Default }), t.Marker.include(t.BaseMarkerMethods), t.Marker.include({ _originalUpdateZIndex: t.Marker.prototype._updateZIndex, _updateZIndex: function (t) { var e = this._zIndex + t; this._originalUpdateZIndex(t), this.label && this.label.updateZIndex(e) }, _originalSetOpacity: t.Marker.prototype.setOpacity, setOpacity: function (t, e) { this.options.labelHasSemiTransparency = e, this._originalSetOpacity(t) }, _originalUpdateOpacity: t.Marker.prototype._updateOpacity, _updateOpacity: function () { var t = 0 === this.options.opacity ? 0 : 1; this._originalUpdateOpacity(), this.label && this.label.setOpacity(this.options.labelHasSemiTransparency ? this.options.opacity : t) }, _originalSetLatLng: t.Marker.prototype.setLatLng, setLatLng: function (t) { return this.label && !this._labelNoHide && this.hideLabel(), this._originalSetLatLng(t) } }), t.CircleMarker.mergeOptions({ labelAnchor: new t.Point(0, 0) }), t.CircleMarker.include(t.BaseMarkerMethods), t.Path.include({ bindLabel: function (i, n) { return this.label && this.label.options === n || (this.label = new e(n, this)), this.label.setContent(i), this._showLabelAdded || (this.on("mouseover", this._showLabel, this).on("mousemove", this._moveLabel, this).on("mouseout remove", this._hideLabel, this), t.Browser.touch && this.on("click", this._showLabel, this), this._showLabelAdded = !0), this }, unbindLabel: function () { return this.label && (this._hideLabel(), this.label = null, this._showLabelAdded = !1, this.off("mouseover", this._showLabel, this).off("mousemove", this._moveLabel, this).off("mouseout remove", this._hideLabel, this)), this }, updateLabelContent: function (t) { this.label && this.label.setContent(t) }, _showLabel: function (t) { this.label.setLatLng(t.latlng), this._map.showLabel(this.label) }, _moveLabel: function (t) { this.label.setLatLng(t.latlng) }, _hideLabel: function () { this.label.close() } }), t.Map.include({ showLabel: function (t) { return this.addLayer(t) } }), t.FeatureGroup.include({ clearLayers: function () { return this.unbindLabel(), this.eachLayer(this.removeLayer, this), this }, bindLabel: function (t, e) { return this.invoke("bindLabel", t, e) }, unbindLabel: function () { return this.invoke("unbindLabel") }, updateLabelContent: function (t) { this.invoke("updateLabelContent", t) } }), e }, window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jemmal/Desktop/dev/ucgl/www/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map