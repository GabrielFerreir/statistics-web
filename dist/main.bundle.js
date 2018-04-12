webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_data_insertion_data_insertion_component__ = __webpack_require__("../../../../../src/app/main/data-insertion/data-insertion.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__main_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'insert', component: __WEBPACK_IMPORTED_MODULE_4__main_data_insertion_data_insertion_component__["a" /* DataInsertionComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ui-toolbar class=\"fixed flat elevate-on-scroll primary elevate-on-s960\" id=\"app-header\">\r\n  <button class=\"ui-button flat icon\" (click)=\"menuOpen = true\" uiRipple>\r\n    <i class=\"material-icons\">menu</i>\r\n  </button>\r\n  <span class=\"title\">Home</span>\r\n</ui-toolbar>\r\n<ui-nav-drawer class=\"persistent\" [(open)]=\"menuOpen\">\r\n  <ui-toolbar class=\"flat\">\r\n    <button (click)=\"menuOpen = false\" class=\"ui-button flat icon\" uiRipple>\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </button>\r\n    <span class=\"title\">Home</span>\r\n  </ui-toolbar>\r\n  <div class=\"ui-nav-drawer-overflow\">\r\n    <div class=\"ui-list\">\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/'>Home</a>\r\n    </div>\r\n    <!-- <div class=\"ui-list\">\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/dashboard'>Dashborad</a>\r\n    </div> -->\r\n    <div class=\"ui-list\">\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/insert'>Inserir dados</a>\r\n    </div>\r\n  </div>\r\n</ui-nav-drawer>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(titleService, toolbarService) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["b" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["b" /* UiToolbarService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__main_main_module__["a" /* MainModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */]
        ],
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_table_component__ = __webpack_require__("../../../../../src/app/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__table_table_component__["a" /* TableComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__table_table_component__["a" /* TableComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<ui-card class=\"elevate-on-toolbar\">\r\n  <ui-toolbar class=\"flat\">\r\n    <span class=\"title\">{{ title }}</span>\r\n  </ui-toolbar>\r\n  <ui-data-table class=\"responsive\">\r\n    <tbody>\r\n    <tr>\r\n      <th uiDataTableOrderBy >Grupo</th>\r\n      <th uiDataTableOrderBy >N° Func</th>\r\n      <th uiDataTableOrderBy >Fe%</th>\r\n      <th uiDataTableOrderBy >F</th>\r\n      <th uiDataTableOrderBy >F%</th>\r\n    </tr>\r\n    <tr *ngFor=\"let item of data\">\r\n      <td data-title=\"Grupo\" >{{item.group}}</td>\r\n      <td data-title=\"N° Func\" class=\"align-right\"> {{item.qtd}} </td>\r\n      <td data-title=\"Fe%\" class=\"align-right\"> {{item.percent | percent: '1.2-2' }} </td>\r\n      <td data-title=\"F\" class=\"align-right\"> {{item.fac}} </td>\r\n      <td data-title=\"F%\" class=\"align-right\"> {{item.facP | percent: '1.2-2' }} </td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n    <tr>\r\n      <td colspan=\"4\" class=\"align-right\">\r\n        <div class=\"ui-button-container align-right\">\r\n                        <span class=\"pagination\">\r\n                            1-10 de 10\r\n                        </span>\r\n          <button class=\"ui-button flat icon\" uiRipple disabled>\r\n            <i class=\"material-icons\">keyboard_arrow_left</i>\r\n          </button>\r\n          <button class=\"ui-button flat icon\" uiRipple disabled>\r\n            <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          </button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tfoot>\r\n  </ui-data-table>\r\n</ui-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    return TableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('data'),
    __metadata("design:type", Object)
], TableComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('title'),
    __metadata("design:type", Object)
], TableComponent.prototype, "title", void 0);
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/components/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/table/table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/charts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartsService = (function () {
    function ChartsService() {
    }
    ChartsService.prototype.generateCharts = function (data, title, type, keys) {
        var obj = {
            chartType: type,
            dataTable: [
                ['Group', 'Data']
            ],
            options: { 'title': title }
        };
        var dataCharts = this.adjust(data, keys);
        dataCharts.forEach(function (item) {
            obj.dataTable.push(item);
        });
        return obj;
    };
    ChartsService.prototype.adjust = function (data, keys) {
        var result = [];
        data.map(function (item) {
            var obj = [];
            keys.forEach(function (key) {
                if (item[key] !== undefined) {
                    obj.push(item[key]);
                }
                else {
                    throw new Error(key + " n\u00E3o foi encontrada no objeto");
                }
            });
            result.push(obj);
            return;
        });
        return result;
    };
    return ChartsService;
}());
ChartsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChartsService);

//# sourceMappingURL=charts.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\r\n  <div style=\"display: flex\" *ngIf=\"dados.content\">\r\n    <div style=\"padding: 16px;\">\r\n      <app-table [data]=\"dados.content\" [title]=\"dados.title\"></app-table>\r\n    </div>\r\n    <div style=\"width: 50%; padding: 16px;\">\r\n      <ui-card class=\"elevate-on-toolbar\">\r\n        <google-chart [data]=\"charts01\"></google-chart>\r\n      </ui-card>\r\n    </div>\r\n  </div>\r\n\r\n  <ui-card class=\"elevate-on-toolbar\" *ngIf=\"!dados.content\">\r\n    <ui-card-content>\r\n      <div style=\"padding: 32px 0; text-align: center;\">\r\n          Nenhum dado foi encontrado!\r\n      </div>\r\n    </ui-card-content>\r\n  </ui-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__statistics_service__ = __webpack_require__("../../../../../src/app/main/statistics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_service__ = __webpack_require__("../../../../../src/app/main/charts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(statistics, charts, toolbarService) {
        this.statistics = statistics;
        this.charts = charts;
        this.toolbarService = toolbarService;
        this.dados = this.statistics.getDados();
        console.log(this.dados);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (this.dados.content) {
            console.log('Gera o grafico');
            this.charts01 = this.charts.generateCharts(this.dados.content, this.dados.title, 'PieChart', ['group', 'percent']);
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(480);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/main/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__statistics_service__["a" /* StatisticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__statistics_service__["a" /* StatisticsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__charts_service__["a" /* ChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__charts_service__["a" /* ChartsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["b" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["b" /* UiToolbarService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statistics_service__ = __webpack_require__("../../../../../src/app/main/statistics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_service__ = __webpack_require__("../../../../../src/app/main/charts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__statistics_service__["a" /* StatisticsService */], __WEBPACK_IMPORTED_MODULE_5__charts_service__["a" /* ChartsService */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/data-insertion/data-insertion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\r\n  <ui-card class=\"elevate-on-toolbar\">\r\n    <ui-toolbar class=\"flat\">\r\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n      <span class=\"title\">Entrada de dados</span>\r\n      <div class=\"align-right\">\r\n        <ui-switch-container>\r\n          <div class=\"info\">\r\n            Amostra\r\n          </div>\r\n          <ui-switch class=\"action\">\r\n            <input type=\"checkbox\" name=\"switchTest\" [checked]=\"switchTest == 'S'\" (change)=\"info.amostra=$event.target.checked ? 'S':'N'\">\r\n          </ui-switch>\r\n        </ui-switch-container>\r\n      </div>\r\n    </ui-toolbar>\r\n    <ui-card-content>\r\n      <form #form=\"ngForm\" class=\"ui-validate on-dirty on-submit\">\r\n        <ui-input-container>\r\n          <input id=\"title\" #title=\"ngModel\" type=\"text\" [(ngModel)]=\"info.title\" uiInput name=\"title\" required>\r\n          <label for=\"title\">Titulo</label>\r\n          <div class=\"ui-messages\">\r\n            <div *ngIf=\"title.errors && title.dirty\">\r\n              <div class=\"ui-message error\" [hidden]=\"!title.pristine && !title.errors.required\">\r\n                Digite o titulo\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ui-input-container>\r\n        <div class=\"ui-flex-container break-on-s840\">\r\n          <ui-option-container class=\"v-space-4 b-space-16\">\r\n            <ui-option>\r\n              <input name=\"legenda\" type=\"checkbox\" [(ngModel)]=\"info.lengenda\" [checked]=\"info.lengenda\">\r\n              <span>Legenda</span>\r\n            </ui-option>\r\n          </ui-option-container>\r\n          <div class=\"input-legend\">\r\n            <ui-input-container>\r\n              <ui-select id=\"sufixo\" #sufixo=\"ngModel\" name=\"sufixo\" [(ngModel)]=\"info.sufixo\" [options]=\"selectSufixo\" value=\"nome\" label=\"nome\"\r\n                uiInput></ui-select>\r\n              <label for=\"sufixo\">\r\n                Sufixo\r\n              </label>\r\n            </ui-input-container>\r\n          </div>\r\n\r\n        </div>\r\n        <ui-chips>\r\n          <ui-input-container>\r\n            <input id=\"dado\" #dado=\"ngModel\" type=\"text\" [(ngModel)]=\"info.currentDado\" uiInput name=\"dado\" (keydown.enter)=\"insertData()\">\r\n            <label for=\"dado\">Dado</label>\r\n          </ui-input-container>\r\n\r\n          <div class=\"container-chips\">\r\n            <div *ngFor=\"let dadoInserido of info.content; let index = index\" class=\"ui-chip js-chips-dado\">\r\n              <div class=\"icon chip-cont\">\r\n                {{ dadoInserido.qtd }}\r\n              </div>\r\n              {{ dadoInserido.group }}  {{ info.sufixo && info.sufixo !== 'Sem sufixo' ? ' ' + info.sufixo : '' }}\r\n              <div class=\"close ripple-rounded\" uiRipple (click)=\"removeData(index)\">\r\n                <i class=\"material-icons\">add_circle</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ui-chips>\r\n      </form>\r\n      <!-- <pre>\r\n          {{ info | json }}\r\n      </pre> -->\r\n    </ui-card-content>\r\n  </ui-card>\r\n  <div class=\"ui-fab-container\">\r\n    <a class=\"ui-button accent fab\" uiRipple (click)=\"onSubmit(form, info)\">\r\n      <i class=\"material-icons\">send</i>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/data-insertion/data-insertion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.input-legend {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end; }\n  .input-legend ui-input-container {\n    max-width: 200px; }\n\n.chip-cont {\n  background-color: #2196f3;\n  color: #FFF; }\n\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  .input-legend ui-input-container {\n    max-width: 100%; } }\n\n.container-chips {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.drag-drop-shadow {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background-color: #F00;\n  height: 32px;\n  border-radius: 16px;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 16px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-right: 12px;\n  margin-bottom: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/data-insertion/data-insertion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_smn_ui_index__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics_service__ = __webpack_require__("../../../../../src/app/main/statistics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInsertionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataInsertionComponent = (function () {
    function DataInsertionComponent(element, statisticsService, router, toolbarService, renderer) {
        this.element = element;
        this.statisticsService = statisticsService;
        this.router = router;
        this.toolbarService = toolbarService;
        this.renderer = renderer;
        this.info = {
            content: [
                { group: 'Azul1', qtd: 1 },
                { group: 'Azul2', qtd: 1 },
                { group: 'Azul3', qtd: 1 },
                { group: 'Azul4', qtd: 1 },
                { group: 'Azul5', qtd: 1 },
                { group: 'Azul6', qtd: 1 },
                { group: 'Azul7', qtd: 1 },
                { group: 'Azul8', qtd: 1 },
                { group: 'Azul9', qtd: 1 },
                { group: 'Azul10', qtd: 1 }
            ]
        };
        this.dragDrop = {};
        this.selectSufixo = [
            { id: 1, nome: 'Sem sufixo' },
            { id: 2, nome: 'Metro' },
            { id: 3, nome: 'Kg' },
            { id: 4, nome: 'Centimetros' }
        ];
    }
    DataInsertionComponent.prototype.ngOnInit = function () {
    };
    DataInsertionComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(480);
        this.addListenerMulti(document, 'mousemove touchmove', this.chipMove);
        this.addListenerMulti(document, 'mouseup touchend', this.chipUp);
        this.initDragDrop();
    };
    DataInsertionComponent.prototype.insertData = function () {
        if (this.info.currentDado && this.info.currentDado.length) {
            var dataTratada_1 = this.info.currentDado.trim().toLowerCase();
            var isExists_1 = false;
            this.info.content.forEach(function (dado) {
                if (dado.group === dataTratada_1) {
                    dado.qtd++;
                    isExists_1 = true;
                }
            });
            if (!isExists_1) {
                var obj = {
                    group: dataTratada_1,
                    qtd: 1
                };
                this.info.content.push(obj);
                console.log(this.info.content);
            }
            this.info.currentDado = null;
        }
        this.initDragDrop();
    };
    DataInsertionComponent.prototype.removeData = function (index) {
        if (this.info.content[index].qtd > 1) {
            this.info.content[index].qtd--;
            return;
        }
        this.info.content.splice(index, 1);
    };
    DataInsertionComponent.prototype.onSubmit = function (form, info) {
        console.log(info);
        // console.log(form);
        // this.saving = true;
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            __WEBPACK_IMPORTED_MODULE_1_ng_smn_ui_index__["a" /* UiElement */].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        this.statisticsService.identifyTypeVariable(this.info);
        this.router.navigate(['/dashboard']);
    };
    /* DRAG-DROP */
    DataInsertionComponent.prototype.initDragDrop = function () {
        var _this = this;
        var self = this;
        var chips;
        var timeOut = function () {
            return function () { return new Promise(function (resolve) { return setTimeout(function () {
                var introChips = self.element.nativeElement.querySelectorAll('.js-chips-dado');
                resolve(introChips);
            }); }); };
        };
        timeOut()().then(function (data) {
            chips = data;
            if (chips.length) {
                chips.forEach(function (chip) {
                    if (!chip.getAttribute('eventActive')) {
                        chip.setAttribute('eventActive', 'true');
                        _this.addListenerMulti(chip, 'mousedown touchdown', _this.chipDown);
                    }
                });
            }
        });
    };
    DataInsertionComponent.prototype.chipDown = function (el) {
        console.log('DOWN');
        this.dragDrop.isChipDown = true;
        this.dragDrop.chipSelected = el[1];
        this.dragDrop.offsetX = event['offsetX'];
        this.dragDrop.offsetY = event['offsetY'];
        // const el = event.target
        // event.target.classList.add('ui-chip');
        console.log(event);
        el[1].classList.add('selected');
        this.buildShadow();
    };
    DataInsertionComponent.prototype.chipMove = function () {
        if (this.dragDrop.isChipDown) {
            this.dragDrop.isMoved = true;
            var position = { x: event['clientX'] - this.dragDrop.offsetX, y: event['clientY'] - this.dragDrop.offsetY };
            var before = this.identifyLocalDrop(position);
            this.moveShadow(before);
            this.dragDrop.chipSelected.style.position = 'fixed';
            this.dragDrop.chipSelected.style.top = position.y + "px";
            this.dragDrop.chipSelected.style.left = position.x + "px";
            this.dragDrop.sombra = false;
        }
    };
    DataInsertionComponent.prototype.identifyLocalDrop = function (position) {
        var before;
        var isFind = false;
        var isFindY = false;
        var lineY;
        var chips = this.element.nativeElement.querySelectorAll('.js-chips-dado');
        for (var i = 0; i < chips.length; i++) {
            if (!chips[i].classList.contains('selected')) {
                if (chips[i].getBoundingClientRect().y + chips[i].getBoundingClientRect().height > position.y) {
                    if (!isFindY) {
                        isFindY = true;
                        lineY = chips[i].getBoundingClientRect().y;
                    }
                }
                if (chips[i].getBoundingClientRect().x > position.x && chips[i].getBoundingClientRect().y === lineY) {
                    if (!isFind) {
                        isFind = true;
                        before = chips[i];
                    }
                }
            }
        }
        return before;
    };
    DataInsertionComponent.prototype.chipUp = function (el) {
        if (this.dragDrop.isChipDown && this.dragDrop.isMoved) {
            this.dragDrop.isChipDown = false;
            this.dragDrop.chipSelected.classList.remove('selected');
            this.dragDrop.chipSelected.style = '';
            this.renderer.insertBefore(this.dragDrop.chipSelected.parentNode, this.dragDrop.chipSelected, this.dragDrop.shadow);
            this.removeSombra();
            this.dragDrop = {};
        }
    };
    DataInsertionComponent.prototype.addListenerMulti = function (el, eventNames, listener) {
        var self = this;
        var events = eventNames.split(' ');
        for (var i = 0; i < events.length; i++) {
            el.addEventListener(events[i], listener.bind(self, [this, el]), false);
        }
    };
    DataInsertionComponent.prototype.buildShadow = function () {
        var configSombra = {
            width: this.dragDrop.chipSelected.offsetWidth,
            height: this.dragDrop.chipSelected.offsetHeight
        };
        var shadow = this.renderer.createElement('div');
        shadow.classList.add('ui-chip', 'js-dragdrop-shadow');
        shadow.style.width = configSombra.width + "px";
        shadow.style.height = configSombra.height + "px";
        this.dragDrop.shadow = shadow;
    };
    DataInsertionComponent.prototype.moveShadow = function (before) {
        this.renderer.insertBefore(this.dragDrop.chipSelected.parentNode, this.dragDrop.shadow, before);
    };
    DataInsertionComponent.prototype.removeSombra = function () {
        var container = this.element.nativeElement.querySelector('.container-chips');
        var shadow;
        if (container) {
            shadow = container.querySelector('.js-dragdrop-shadow');
        }
        if (shadow) {
            container.removeChild(shadow);
        }
    };
    return DataInsertionComponent;
}());
DataInsertionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-data-insertion',
        template: __webpack_require__("../../../../../src/app/main/data-insertion/data-insertion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/data-insertion/data-insertion.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__statistics_service__["a" /* StatisticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__statistics_service__["a" /* StatisticsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ng_smn_ui_index__["b" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_smn_ui_index__["b" /* UiToolbarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Renderer2 */]) === "function" && _e || Object])
], DataInsertionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=data-insertion.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/data-insertion/data-insertion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_insertion_component__ = __webpack_require__("../../../../../src/app/main/data-insertion/data-insertion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInsertionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataInsertionModule = (function () {
    function DataInsertionModule() {
    }
    return DataInsertionModule;
}());
DataInsertionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__data_insertion_component__["a" /* DataInsertionComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], DataInsertionModule);

//# sourceMappingURL=data-insertion.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics_service__ = __webpack_require__("../../../../../src/app/main/statistics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_service__ = __webpack_require__("../../../../../src/app/main/charts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/main/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_insertion_data_insertion_module__ = __webpack_require__("../../../../../src/app/main/data-insertion/data-insertion.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_7__data_insertion_data_insertion_module__["a" /* DataInsertionModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__main_component__["a" /* MainComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__main_component__["a" /* MainComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__statistics_service__["a" /* StatisticsService */], __WEBPACK_IMPORTED_MODULE_5__charts_service__["a" /* ChartsService */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], MainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/statistics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsService = (function () {
    function StatisticsService() {
        this.response = {};
    }
    StatisticsService.prototype.getDados = function () {
        return this.response;
    };
    StatisticsService.prototype.countRepeat = function (info) {
        var obj = [];
        var func = {
            insere: function (group, qtd) {
                var condicao;
                obj.forEach(function (el) {
                    if (el.group === group) {
                        condicao = true;
                    }
                });
                if (!condicao) {
                    obj.push({ group: group, qtd: qtd });
                }
            }
        };
        for (var i = 0; i < info.length; i++) {
            var repeat = 0;
            for (var j = 0; j < info.length; j++) {
                if (info[i] === info[j]) {
                    repeat++;
                }
            }
            func.insere(info[i], repeat);
        }
        this.percent(obj);
        this.frequencyAmass(obj);
        this.frequencyPercent(obj);
        return obj;
    };
    StatisticsService.prototype.percent = function (obj) {
        var total = this.totalItems(obj, 'qtd');
        obj.forEach(function (el) {
            el.percent = el.qtd / total;
        });
    };
    StatisticsService.prototype.frequencyAmass = function (obj) {
        var acm = 0;
        obj.forEach(function (el) {
            acm += el.qtd;
            el.fac = acm;
        });
    };
    StatisticsService.prototype.frequencyPercent = function (obj) {
        var total = this.totalItems(obj, 'qtd');
        var acm = 0;
        obj.forEach(function (el) {
            acm += el.qtd / total;
            el.facP = acm;
        });
    };
    StatisticsService.prototype.qualitativaNominal = function (info) {
        this.percent(info.content);
        this.frequencyAmass(info.content);
        this.frequencyPercent(info.content);
        this.response = info;
    };
    StatisticsService.prototype.quantitativaDiscreta = function (info) {
        this.percent(info.content);
        this.frequencyAmass(info.content);
        this.frequencyPercent(info.content);
        this.response = info;
    };
    StatisticsService.prototype.identifyTypeVariable = function (info) {
        console.log(info);
        var isQuantitativa = null;
        var error;
        info.content.forEach(function (dado) {
            if (isQuantitativa === null) {
                isQuantitativa = !isNaN(dado.group);
            }
            else {
                if (isQuantitativa !== !isNaN(dado.group)) {
                    error = true;
                    return;
                }
            }
        });
        if (error) {
            console.log('Não conseguimos identificar se a variavel é quanti ou quali');
            return;
        }
        console.log(isQuantitativa ? 'Quantitativa' : 'Qualitativa');
        if (isQuantitativa) {
            if (info.content.length > 10) {
                console.log('Quantivativa continua');
            }
            else {
                console.log('Quantivativa discreta');
                this.quantitativaDiscreta(info);
            }
        }
        else {
            console.log('Identificou que a variavel é quali');
            console.log('Todas as variaveis quali estão sendo tratadas como nominal');
            this.qualitativaNominal(info);
        }
    };
    StatisticsService.prototype.totalItems = function (array, property) {
        var total = 0;
        array.forEach(function (obj) {
            total += obj[property];
        });
        return total;
    };
    return StatisticsService;
}());
StatisticsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StatisticsService);

//# sourceMappingURL=statistics.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["c" /* SMNUIModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["b" /* UiToolbarService */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map