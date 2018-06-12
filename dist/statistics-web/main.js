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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/dashboard/dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var _main_data_insertion_data_insertion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/data-insertion/data-insertion.component */ "./src/app/main/data-insertion/data-insertion.component.ts");
/* harmony import */ var _main_correlacao_regressao_correlacao_regressao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/correlacao-regressao/correlacao-regressao.component */ "./src/app/main/correlacao-regressao/correlacao-regressao.component.ts");
/* harmony import */ var _main_distribuicao_uniforme_distribuicao_uniforme_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/distribuicao-uniforme/distribuicao-uniforme.component */ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.ts");
/* harmony import */ var _main_correlacao_regressao_response_response_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/correlacao-regressao/response/response.component */ "./src/app/main/correlacao-regressao/response/response.component.ts");
/* harmony import */ var _main_distribuicao_binomial_distribuicao_binomial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/distribuicao-binomial/distribuicao-binomial.component */ "./src/app/main/distribuicao-binomial/distribuicao-binomial.component.ts");
/* harmony import */ var _main_distribuicao_nominal_distribuicao_nominal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/distribuicao-nominal/distribuicao-nominal.component */ "./src/app/main/distribuicao-nominal/distribuicao-nominal.component.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [
            { path: '', component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
            { path: 'dashboard', component: _main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            { path: 'insert', component: _main_data_insertion_data_insertion_component__WEBPACK_IMPORTED_MODULE_4__["DataInsertionComponent"] },
            {
                path: 'correlacao-regressao',
                children: [
                    { path: '', component: _main_correlacao_regressao_correlacao_regressao_component__WEBPACK_IMPORTED_MODULE_5__["CorrelacaoRegressaoComponent"] },
                    { path: 'response', component: _main_correlacao_regressao_response_response_component__WEBPACK_IMPORTED_MODULE_7__["ResponseComponent"] }
                ]
            },
            { path: 'distribuicao-uniforme', component: _main_distribuicao_uniforme_distribuicao_uniforme_component__WEBPACK_IMPORTED_MODULE_6__["DistribuicaoUniformeComponent"] },
            { path: 'distribuicao-binomial', component: _main_distribuicao_binomial_distribuicao_binomial_component__WEBPACK_IMPORTED_MODULE_8__["DistribuicaoBinomialComponent"] },
            { path: 'distribuicao-nominal', component: _main_distribuicao_nominal_distribuicao_nominal_component__WEBPACK_IMPORTED_MODULE_9__["DistribuicaoNominalComponent"] },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-toolbar class=\"fixed flat elevate-on-scroll primary elevate-on-s960\" id=\"app-header\">\r\n  <button class=\"ui-button flat icon\" (click)=\"menuOpen = true\" uiRipple>\r\n    <i class=\"material-icons\">menu</i>\r\n  </button>\r\n  <span class=\"title\">{{ title }}</span>\r\n</ui-toolbar>\r\n<ui-nav-drawer class=\"persistent\" [(open)]=\"menuOpen\">\r\n  <ui-toolbar class=\"flat\">\r\n    <button (click)=\"menuOpen = false\" class=\"ui-button flat icon\" uiRipple>\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </button>\r\n    <span class=\"title\">{{ title }}</span>\r\n  </ui-toolbar>\r\n  <div class=\"ui-nav-drawer-overflow\">\r\n    <div class=\"ui-list\">\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/'>Home</a>\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/insert'>Estatística discreta</a>\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/correlacao-regressao'>Correlação/Regressão</a>\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/distribuicao-uniforme'>Distribuição uniforme</a>\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/distribuicao-nominal'>Distribuição nominal</a>\r\n      <a class=\"ui-list-item\" uiRipple routerLink='/distribuicao-binomial'>Distribuição binomial</a>\r\n    </div>\r\n  </div>\r\n</ui-nav-drawer>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smn-ui/smn-ui.module */ "./src/app/smn-ui/smn-ui.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, toolbarService) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
        this.toolbarService.change.subscribe(function (title) {
            _this.title = title;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production })
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]],
            exports: [_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/graphic/graphic.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/graphic/graphic.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n  <section class=\"container__title\" *ngIf=\"title\">{{ title }}</section>\r\n  <div class=\"container__subtitle\" *ngIf=\"subtitle\">{{ subtitle }}</div>\r\n  <section class=\"container__content\">\r\n    <svg class=\"full-graphic\"></svg>\r\n\r\n    <section class=\"legends\" *ngIf=\"legend\">\r\n      <section class=\"legends__legend\" *ngFor=\"let leg of legend; let index = index\">\r\n        <div class=\"legends__legend__color\"\r\n             [ngStyle]=\"{'background-color': config.colors[index] ? config.colors[index] : '#CDCDCD' }\">\r\n        </div>\r\n        {{ leg }}\r\n      </section>\r\n    </section>\r\n  </section>\r\n</section>\r\n\r\n<ui-menu class=\"menu-info\" #menuInfo>\r\n  <ng-content></ng-content>\r\n</ui-menu>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/graphic/graphic.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/graphic/graphic.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .full-graphic {\n  width: 100%;\n  height: 273px;\n  overflow: visible; }\n  /deep/ .full-graphic__label {\n    overflow: visible; }\n  /deep/ .full-graphic__label__text {\n      font-size: 12px; }\n  /deep/ .full-graphic__graphic {\n    overflow: visible; }\n  /deep/ .full-graphic__line {\n    stroke: #000;\n    stroke-width: 1px; }\n  .container__title {\n  padding: 16px 16px 0;\n  font-size: 24px; }\n  .container__subtitle {\n  padding: 12px 16px 0;\n  font-size: 12px;\n  opacity: 0.65; }\n  .container__content {\n  padding: 16px;\n  font-size: 14px; }\n  .legends {\n  display: flex;\n  flex-wrap: wrap; }\n  .legends__legend {\n    display: flex;\n    align-items: center;\n    padding: 8px; }\n  .legends__legend__color {\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/components/graphic/graphic.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/graphic/graphic.component.ts ***!
  \*********************************************************/
/*! exports provided: GraphicCollumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicCollumnComponent", function() { return GraphicCollumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graphic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphic.service */ "./src/app/components/graphic/graphic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphicCollumnComponent = /** @class */ (function () {
    function GraphicCollumnComponent(elementRef, renderer2, graphicService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.graphicService = graphicService;
        this.drawer = {
            rendered: false,
            padding: 16,
            maxValue: null,
            elementsForItem: null,
            sizeCollum: null,
            sizeLabel: 32,
        };
        this.config = {};
    }
    GraphicCollumnComponent.prototype.ngOnInit = function () {
        this.setConfigs();
    };
    GraphicCollumnComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.generate(this.data);
        window.addEventListener('resize', function () {
            _this.generate(_this.data);
        });
        window.addEventListener('mousedown', function () {
            if (_this.content.querySelector('.full-graphic__show-more')) {
                _this.renderer2.removeChild(_this.content, _this.content.querySelector('.full-graphic__show-more'));
            }
            if (_this.content.querySelector('.full-graphic__active')) {
                _this.content.querySelector('.full-graphic__active').classList.remove('full-graphic__active');
            }
        });
    };
    GraphicCollumnComponent.prototype.generate = function (info) {
        // document.querySelector('.full-graphic').innerHTML = '';
        var _this = this;
        document.querySelector('.full-graphic') ?
            document.querySelector('.full-graphic').innerHTML = '' : null;
        this.setMaxValue(info);
        this.setNumberElementsForItem(info);
        this.content = this.elementRef.nativeElement.querySelector('svg');
        this.generateGraphics();
        this.generateLines();
        this.generateIndices(this.calculateIndices(this.drawer.maxValue), info);
        this.generateLabelX(info);
        this.createStyle(".full-graphic__active { fill: " + this.config.colorSelected + "; }");
        this.createStyle(".full-graphic__svg { overflow: hidden; }");
        this.createStyle(".full-graphic__svg--active { overflow: visible; }");
        this.createStyle(".full-graphic__svg__show-more { transform: scale(0); transition: All 180ms ease; }");
        this.createStyle(".full-graphic__svg__show-more--active { transform: scale(1); }");
        this.createStyle(".full-graphic__svg__show-more--inverse { transform-origin: top right; }");
        info.forEach(function (item, index) {
            _this.generateCollum(item.value, index, _this.config.colors);
        });
    };
    GraphicCollumnComponent.prototype.setConfigs = function () {
        if (this.params) {
            this.config.colorSelected = this.params.colorSelected ? this.params.colorSelected : '#999';
            this.config.lineWidth = this.params.lineWidth ? this.params.lineWidth : '1';
            this.config.lineColor = this.params.lineColor ? this.params.lineColor : '#CDCDCD';
            this.config.colors = this.params.colors ? this.params.colors : [];
            this.config.noSpace = this.params.noSpace ? 0 : 1;
        }
    };
    GraphicCollumnComponent.prototype.generateLines = function () {
        var _this = this;
        var height = this.content.querySelector('.full-graphic__graphic').height.baseVal.value;
        this.calculeSpaceWidth(this.data);
        this.calculateIndices(this.drawer.maxValue).forEach(function (num) {
            var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            var lineAttributes = {
                'y1': _this.calculatePosition(_this.drawer.maxValue, height, _this.drawer.maxValue - num),
                'y2': _this.calculatePosition(_this.drawer.maxValue, height, _this.drawer.maxValue - num),
                'x1': '0',
                'x2': _this.calculateWidthGraphic(),
                'stroke-width': _this.config.lineWidth,
                'stroke-dasharray': '3 8',
                'stroke': _this.config.lineColor
            };
            _this.setAttribute(line, lineAttributes);
            _this.renderer2.appendChild(_this.content.querySelector('.full-graphic__graphic'), line);
        });
    };
    GraphicCollumnComponent.prototype.generateCollum = function (info, index, color) {
        var _this = this;
        // Config<Object> | color<Array><string>
        var height = this.content.querySelector('.full-graphic__graphic').height.baseVal.value;
        var group = this.createElementNS('g');
        var svg = this.createElementNS('svg');
        this.setAttribute(svg, { 'x': this.drawer.sizeCollum + (index * this.drawer.sizeCollum * (this.drawer.elementsForItem + this.config.noSpace)) });
        this.renderer2.appendChild(group, svg);
        info.forEach(function (value, i) {
            var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            var size = _this.calculatePosition(_this.drawer.maxValue, height, value);
            var attributes = {
                'x': _this.drawer.sizeCollum > 0 ? (i * _this.drawer.sizeCollum) : 0,
                'y': height - size,
                'height': size,
                'width': _this.drawer.sizeCollum > 0 ? _this.drawer.sizeCollum : 0,
                'fill': color[i] ? color[i] : '#CDCDCD'
            };
            _this.setAttribute(rect, attributes);
            rect.addEventListener('click', function (event) {
                _this.openMenu(event, value, i, index);
            });
            _this.renderer2.appendChild(svg, rect);
        });
        this.renderer2.appendChild(this.content.querySelector('.full-graphic__graphic'), group);
    };
    GraphicCollumnComponent.prototype.calculatePosition = function (max, maxHeight, value) {
        return parseFloat(maxHeight) * parseFloat(value) / parseFloat(max);
    };
    GraphicCollumnComponent.prototype.calculeSpaceWidth = function (info) {
        this.drawer.sizeCollum = this.calculateWidthGraphic() / this.calculateQtdSpaces(info);
    };
    GraphicCollumnComponent.prototype.calculateQtdSpaces = function (info) {
        var _this = this;
        var acm = 0;
        info.forEach(function (item) {
            acm += item.value.length + _this.config.noSpace; // +1 === espaço entre as informações
        });
        var noSpace = this.config.noSpace ? 0 : 2;
        return acm + noSpace; // +1 === Espaço no começo do grafico
    };
    GraphicCollumnComponent.prototype.calculateIndices = function (max) {
        return [max, Math.round(max / 3) * 2, Math.round(max / 3), 0];
    };
    GraphicCollumnComponent.prototype.generateIndices = function (indices, info, config) {
        var _this = this;
        var group = this.createElementNS('g');
        var svg = this.createElementNS('svg');
        this.renderer2.appendChild(group, svg);
        var height = this.content.clientHeight - this.drawer.padding - this.drawer.sizeLabel;
        svg.classList.add('full-graphic__label');
        var svgAttributes = {
            'x': '0',
            'y': this.drawer.padding,
            'width': this.drawer.sizeLabel > 0 ? this.drawer.sizeLabel : 0,
            'height': height > 0 ? height : 0
        };
        this.setAttribute(svg, svgAttributes);
        // CONFIGS
        var color = config && config.color ? config.color : '#000';
        // LABELS VERTICAIS
        indices.forEach(function (indice) {
            var textV = _this.createElementNS('text');
            var y = _this.calculatePosition(_this.drawer.maxValue, _this.content.clientHeight - _this.drawer.padding - _this.drawer.sizeLabel, _this.drawer.maxValue - indice);
            textV.textContent = indice;
            var textVAttributes = {
                'x': '50%',
                'y': y,
                'text-anchor': 'middle',
                'alignment-baseline': 'middle',
                'fill': color
            };
            _this.setAttribute(textV, textVAttributes);
            textV.classList.add('full-graphic__label__text');
            _this.renderer2.appendChild(svg, textV);
        });
        this.renderer2.appendChild(this.content, group);
    };
    GraphicCollumnComponent.prototype.generateLabelX = function (info) {
        var _this = this;
        var group = this.createElementNS('g');
        var svg = this.createElementNS('svg');
        this.renderer2.appendChild(group, svg);
        var svgAttributes = {
            'x': this.drawer.sizeLabel,
            'y': this.content.querySelector('.full-graphic__graphic').height.baseVal.value + this.drawer.padding,
            'width': this.calculateWidthGraphic() > 0 ? this.calculateWidthGraphic() : 0,
            'height': this.drawer.sizeLabel > 0 ? this.drawer.sizeLabel : 0
        };
        this.setAttribute(svg, svgAttributes);
        this.renderer2.appendChild(this.content, group);
        info.forEach(function (item, index) {
            var pontoInicial = _this.drawer.sizeCollum + (index * _this.drawer.sizeCollum * (_this.drawer.elementsForItem + _this.config.noSpace));
            var x = pontoInicial + (_this.drawer.sizeCollum * _this.drawer.elementsForItem / 2);
            var textH = _this.createElementNS('text');
            textH.textContent = item.indice;
            var textHAttributes = {
                'x': x,
                'y': 16,
                'text-anchor': 'middle',
                'alignment-baseline': 'middle',
                'fill': '#000'
            };
            _this.setAttribute(textH, textHAttributes);
            textH.classList.add('full-graphic__label__text');
            _this.renderer2.appendChild(svg, textH);
        });
    };
    GraphicCollumnComponent.prototype.setMaxValue = function (info) {
        // VAMOS MAXIMO NA VERTICAL
        var numbers = [];
        info.forEach(function (item) {
            item.value.forEach(function (value) {
                numbers.push(value);
            });
        });
        this.drawer.maxValue = Math.max.apply(Math, numbers);
    };
    GraphicCollumnComponent.prototype.generateGraphics = function () {
        var group = this.createElementNS('g');
        var svg = this.createElementNS('svg');
        this.renderer2.appendChild(group, svg);
        var height = this.content.clientHeight - this.drawer.padding - this.drawer.sizeLabel;
        var attributes = {
            'x': this.drawer.sizeLabel,
            'y': this.drawer.padding,
            'width': this.calculateWidthGraphic() > 0 ? this.calculateWidthGraphic() : 0,
            'height': height > 0 ? height : 0
        };
        this.setAttribute(svg, attributes);
        svg.classList.add('full-graphic__graphic');
        this.renderer2.appendChild(this.content, group);
    };
    GraphicCollumnComponent.prototype.calculateWidthGraphic = function () {
        var descontos = this.drawer.sizeLabel;
        return this.content.clientWidth - descontos;
    };
    GraphicCollumnComponent.prototype.setNumberElementsForItem = function (info) {
        this.drawer.elementsForItem = info[0].value.length;
    };
    GraphicCollumnComponent.prototype.setAttribute = function (el, attributes) {
        var keys = Object.keys(attributes);
        keys.forEach(function (key) {
            el.setAttribute(key, attributes[key].toString());
        });
    };
    GraphicCollumnComponent.prototype.createElementNS = function (type) {
        return document.createElementNS('http://www.w3.org/2000/svg', type);
    };
    GraphicCollumnComponent.prototype.createStyle = function (code) {
        var style = document.createElement('style');
        style.innerHTML = code;
        this.renderer2.appendChild(this.content, style);
    };
    GraphicCollumnComponent.prototype.openMenu = function (event, value, indexLegenda, indexColumn) {
        event.target.classList.add('full-graphic__active');
        var legend = this.legend[indexLegenda];
        var column = this.data[indexColumn].indice;
        this.graphicService.info = {
            value: value,
            legend: legend,
            column: column
        };
        this.menuInfo.show(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], GraphicCollumnComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('subtitle'),
        __metadata("design:type", Object)
    ], GraphicCollumnComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], GraphicCollumnComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('legend'),
        __metadata("design:type", Object)
    ], GraphicCollumnComponent.prototype, "legend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('config'),
        __metadata("design:type", Object)
    ], GraphicCollumnComponent.prototype, "params", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuInfo'),
        __metadata("design:type", Object)
    ], GraphicCollumnComponent.prototype, "menuInfo", void 0);
    GraphicCollumnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'smn-graphic',
            template: __webpack_require__(/*! ./graphic.component.html */ "./src/app/components/graphic/graphic.component.html"),
            styles: [__webpack_require__(/*! ./graphic.component.scss */ "./src/app/components/graphic/graphic.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _graphic_service__WEBPACK_IMPORTED_MODULE_1__["GraphicService"]])
    ], GraphicCollumnComponent);
    return GraphicCollumnComponent;
}());



/***/ }),

/***/ "./src/app/components/graphic/graphic.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/graphic/graphic.module.ts ***!
  \******************************************************/
/*! exports provided: GraphicCollumnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicCollumnModule", function() { return GraphicCollumnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graphic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphic.component */ "./src/app/components/graphic/graphic.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _graphic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphic.service */ "./src/app/components/graphic/graphic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GraphicCollumnModule = /** @class */ (function () {
    function GraphicCollumnModule() {
    }
    GraphicCollumnModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [
                _graphic_component__WEBPACK_IMPORTED_MODULE_1__["GraphicCollumnComponent"]
            ],
            providers: [
                _graphic_service__WEBPACK_IMPORTED_MODULE_3__["GraphicService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            exports: [
                _graphic_component__WEBPACK_IMPORTED_MODULE_1__["GraphicCollumnComponent"]
            ]
        })
    ], GraphicCollumnModule);
    return GraphicCollumnModule;
}());



/***/ }),

/***/ "./src/app/components/graphic/graphic.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/graphic/graphic.service.ts ***!
  \*******************************************************/
/*! exports provided: GraphicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicService", function() { return GraphicService; });
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

var GraphicService = /** @class */ (function () {
    function GraphicService() {
        this.info = {
            value: null,
            legend: null,
            column: null
        };
    }
    GraphicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GraphicService);
    return GraphicService;
}());



/***/ }),

/***/ "./src/app/components/table/table.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-card class=\"elevate-on-toolbar\">\r\n  <ui-toolbar class=\"flat\">\r\n    <span class=\"title\">{{ title }}</span>\r\n  </ui-toolbar>\r\n  <ui-data-table class=\"responsive\">\r\n    <tbody>\r\n    <tr>\r\n      <th uiDataTableOrderBy >Grupo</th>\r\n      <th uiDataTableOrderBy class=\"align-right\">N° Func</th>\r\n      <th uiDataTableOrderBy class=\"align-right\">Fe%</th>\r\n      <th uiDataTableOrderBy class=\"align-right\">F</th>\r\n      <th uiDataTableOrderBy class=\"align-right\">F%</th>\r\n    </tr>\r\n    <tr *ngFor=\"let item of data\">\r\n      <td data-title=\"Grupo\" >{{item.group}}</td>\r\n      <td data-title=\"N° Func\" class=\"align-right\"> {{item.qtd}} </td>\r\n      <td data-title=\"Fe%\" class=\"align-right\"> {{item.percent | percent: '1.2-2' }} </td>\r\n      <td data-title=\"F\" class=\"align-right\"> {{item.fac}} </td>\r\n      <td data-title=\"F%\" class=\"align-right\"> {{item.facP | percent: '1.2-2' }} </td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot></tfoot>\r\n  </ui-data-table>\r\n</ui-card>\r\n"

/***/ }),

/***/ "./src/app/components/table/table.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
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

var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "title", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/components/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/functions/coeficiente-variacao.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/functions/coeficiente-variacao.service.ts ***!
  \***********************************************************/
/*! exports provided: CoeficienteVariacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoeficienteVariacaoService", function() { return CoeficienteVariacaoService; });
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

var CoeficienteVariacaoService = /** @class */ (function () {
    function CoeficienteVariacaoService() {
    }
    CoeficienteVariacaoService.prototype.calculate = function (DV, media) {
        return DV / media;
    };
    CoeficienteVariacaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CoeficienteVariacaoService);
    return CoeficienteVariacaoService;
}());



/***/ }),

/***/ "./src/app/functions/data-groups.service.ts":
/*!**************************************************!*\
  !*** ./src/app/functions/data-groups.service.ts ***!
  \**************************************************/
/*! exports provided: DataGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGroupsService", function() { return DataGroupsService; });
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

var DataGroupsService = /** @class */ (function () {
    function DataGroupsService() {
        this.NUM_CLASS = 0;
        this.groupValues = [];
    }
    DataGroupsService.prototype.init = function (content) {
        this.resetService();
        this.response = JSON.parse(JSON.stringify(content));
        return this;
    };
    DataGroupsService.prototype.resetService = function () {
        this.response = {};
        this.NUM_CLASS = 0;
        this.amplitude = null;
        this.classe = null;
        this.intervalClass = 0;
        this.groupValues = [];
    };
    DataGroupsService.prototype.orderBy = function () {
        this.response.sort(function (a, b) {
            return (parseFloat(a.group) < parseFloat(b.group)) ? -1 : ((parseFloat(a.group) > parseFloat(b.group)) ? 1 : 0);
        });
        return this;
    };
    DataGroupsService.prototype.getAmplitude = function () {
        var lastItem = this.response[this.response.length - 1].group;
        var firstItem = this.response[0].group;
        this.amplitude = (lastItem - firstItem) + 1; // POR QUE?
        return this;
    };
    DataGroupsService.prototype.getClassNumber = function () {
        var K = Math.trunc(Math.sqrt(this.response.length));
        var classes = [K - 1, K, K + 1];
        this.classe = classes[this.NUM_CLASS];
        return this;
    };
    DataGroupsService.prototype.getIntervalClass = function () {
        var checker;
        do {
            if (Number.isInteger(this.amplitude / this.classe)) {
                this.intervalClass = this.amplitude / this.classe;
                checker = true;
            }
            else {
                this.amplitude++;
            }
        } while (!checker);
        return this;
    };
    DataGroupsService.prototype.defineLimits = function () {
        var lastValue = parseFloat(this.response[0].group);
        for (var i = 1; i <= this.classe; i++) {
            this.groupValues.push({
                id: i,
                min: lastValue,
                max: lastValue + this.intervalClass
            });
            lastValue = lastValue + this.intervalClass;
        }
        return this;
    };
    DataGroupsService.prototype.setLimitsInObjects = function () {
        var _this = this;
        this.response.forEach(function (obj) {
            _this.groupValues.forEach(function (group) {
                if (obj.group >= group.min && obj.group < group.max) {
                    obj.class = group;
                }
            });
        });
        return this;
    };
    DataGroupsService.prototype.generateGroups = function () {
        var _this = this;
        var res = [];
        this.groupValues.forEach(function (group) {
            var temp = [];
            var qtdELementos = 0;
            _this.response.forEach(function (obj) {
                qtdELementos += obj.qtd;
                if (group.id === obj.class.id) {
                    temp.push(obj);
                }
            });
            // CASO NÂO TENHA NENHUM ELEMENTO NO GRUPO
            if (!temp.length) {
                temp = [{ group: { id: group.id, qtd: 0, percent: 0 } }];
            }
            var soma = {
                fac: 0, facP: 0, percent: 0,
                qtd: 0, group: '', class: { min: 0, max: 0, id: 0 }
            };
            temp.forEach(function (obje, index) {
                soma.fac = 1;
                soma.facP = 1;
                soma.percent += obje.percent || 0;
                soma.qtd += obje.qtd || 0;
                soma.group = group.min + " |-- " + group.max;
                soma.class = {
                    min: group.min,
                    max: group.max,
                    id: group.id
                };
                var anterior = res[res.length - 1];
                if (anterior) {
                    soma.fac = anterior['fac'] + soma.qtd;
                }
                else {
                    soma.fac = soma.qtd;
                }
                soma.facP = ((100 * soma.fac) / qtdELementos) / 100;
            });
            res.push(soma);
        });
        this.response = res;
        return this;
    };
    DataGroupsService.prototype.runAll = function () {
        this.orderBy()
            .getAmplitude()
            .getClassNumber()
            .getIntervalClass()
            .defineLimits()
            .setLimitsInObjects()
            .generateGroups();
        return this;
    };
    DataGroupsService.prototype.finish = function () {
        return this.response;
    };
    DataGroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataGroupsService);
    return DataGroupsService;
}());



/***/ }),

/***/ "./src/app/functions/desvio-padrao.service.ts":
/*!****************************************************!*\
  !*** ./src/app/functions/desvio-padrao.service.ts ***!
  \****************************************************/
/*! exports provided: DesvioPadraoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesvioPadraoService", function() { return DesvioPadraoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.service */ "./src/app/functions/media.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesvioPadraoService = /** @class */ (function () {
    function DesvioPadraoService(mediaService) {
        this.mediaService = mediaService;
    }
    DesvioPadraoService.prototype.init = function (content) {
        this.response = JSON.parse(JSON.stringify(content));
        return this;
    };
    DesvioPadraoService.prototype.calculateNumerador = function () {
        var _this = this;
        return this.response.content.reduce(function (res, num) {
            return res + (Math.pow(num.group - _this.mediaService.ponderada(_this.response.content), 2) * num.qtd);
        }, 0);
    };
    DesvioPadraoService.prototype.calculateDenominador = function () {
        return this.response.content.reduce(function (res, num) {
            return res + num.qtd;
        }, 0);
    };
    DesvioPadraoService.prototype.calculate = function (numerador, denominador) {
        denominador = this.response.amostra ? denominador - 1 : denominador;
        return Math.sqrt(numerador / denominador);
    };
    DesvioPadraoService.prototype.finish = function () {
        return this.calculate(this.calculateNumerador(), this.calculateDenominador());
    };
    DesvioPadraoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_media_service__WEBPACK_IMPORTED_MODULE_1__["MediaService"]])
    ], DesvioPadraoService);
    return DesvioPadraoService;
}());



/***/ }),

/***/ "./src/app/functions/media.service.ts":
/*!********************************************!*\
  !*** ./src/app/functions/media.service.ts ***!
  \********************************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
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

var MediaService = /** @class */ (function () {
    function MediaService() {
    }
    MediaService.prototype.ponderada = function (content) {
        var numerador = content.reduce(function (res, num) {
            return res + (num.group * num.qtd);
        }, 0);
        var denominador = content.reduce(function (res, num) {
            return res + num.qtd;
        }, 0);
        return numerador / denominador;
    };
    MediaService.prototype.continua = function (content) {
        var acm = content.reduce(function (res, value) {
            return res + (((value.class.max + value.class.min) / 2) * value.qtd);
        }, 0);
        return acm / content[content.length - 1].fac;
    };
    MediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MediaService);
    return MediaService;
}());



/***/ }),

/***/ "./src/app/functions/mediana.service.ts":
/*!**********************************************!*\
  !*** ./src/app/functions/mediana.service.ts ***!
  \**********************************************/
/*! exports provided: MedianaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedianaService", function() { return MedianaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.service */ "./src/app/functions/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedianaService = /** @class */ (function () {
    function MedianaService(utilsService) {
        this.utilsService = utilsService;
    }
    MedianaService.prototype.comum = function (content) {
        var somatorio = content[content.length - 1].fac;
        if (somatorio % 2 === 0) {
            var pos = [(somatorio / 2) - 1, (somatorio / 2)];
            var arrayData_1 = [];
            content.forEach(function (num) {
                for (var i = 0; i < num.qtd; i++) {
                    arrayData_1.push(num.group);
                }
            });
            return (parseFloat(arrayData_1[pos[0]]) + parseFloat(arrayData_1[pos[1]])) / 2;
        }
        else {
            var arrayData_2 = [];
            content.forEach(function (num) {
                for (var i = 0; i < num.qtd; i++) {
                    arrayData_2.push(num);
                }
            });
            return arrayData_2[(arrayData_2.length + 1) / 2].group;
        }
    };
    MedianaService.prototype.continua = function (groups, interval) {
        var somatorio = groups[groups.length - 1].fac;
        var arrayData = this.utilsService.listingItens(groups);
        if (somatorio % 2 === 0) {
            var res_1 = [];
            var pos = [somatorio / 2, somatorio / 2 + 1];
            pos.forEach(function (position) {
                var limiteInferior = arrayData[position].class.min;
                var freqAA = groups[arrayData[position].class.id - 2].fac;
                var freq = groups[arrayData[position].class.id - 1].qtd;
                var pre = ((parseFloat(somatorio) / 2) - parseFloat(freqAA)) / parseFloat(freq);
                res_1.push(limiteInferior + (pre * interval));
            });
            return (res_1[0] + res_1[1]) / 2;
        }
        else {
            var pos = (somatorio + 1) / 2;
            var limiteInferior = arrayData[pos].class.min;
            var freqAA = groups[arrayData[pos].class.id - 2].fac;
            var freq = groups[arrayData[pos].class.id - 1].qtd;
            var pre = ((parseFloat(somatorio) / 2) - parseFloat(freqAA)) / parseFloat(freq);
            return limiteInferior + (pre * interval);
        }
    };
    MedianaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]])
    ], MedianaService);
    return MedianaService;
}());



/***/ }),

/***/ "./src/app/functions/medidas-paratrizes.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/functions/medidas-paratrizes.service.ts ***!
  \*********************************************************/
/*! exports provided: MedidasParatrizesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidasParatrizesService", function() { return MedidasParatrizesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.service */ "./src/app/functions/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedidasParatrizesService = /** @class */ (function () {
    function MedidasParatrizesService(utilsService) {
        this.utilsService = utilsService;
    }
    MedidasParatrizesService.prototype.comum = function (content, type, value) {
        var unitaryValue = 100 / type;
        var findValue = value * unitaryValue;
        var size = content[content.length - 1].fac;
        var pos = (findValue * size) / 100;
        return this.findGroup(pos, content).group;
    };
    MedidasParatrizesService.prototype.findGroup = function (position, content) {
        for (var i = 0; i < content.length; i++) {
            if (position <= content[i].fac) {
                return content[i];
            }
        }
    };
    MedidasParatrizesService.prototype.continua = function (content, type, value) {
        var unitaryValue = 100 / type;
        var findValue = value * unitaryValue;
        var size = content[content.length - 1].fac;
        var pos = (findValue * size) / 100;
        var group = this.findGroup(pos, content);
        var limiteInferior = group.class.min;
        var freqAAnt = this.utilsService.findClassForId(content, group.class.id - 1).fac;
        var qtd = group.qtd;
        var h = group.class.max - group.class.min;
        var middle = (pos - freqAAnt) / qtd;
        return limiteInferior + (middle * h);
    };
    MedidasParatrizesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]])
    ], MedidasParatrizesService);
    return MedidasParatrizesService;
}());



/***/ }),

/***/ "./src/app/functions/moda.service.ts":
/*!*******************************************!*\
  !*** ./src/app/functions/moda.service.ts ***!
  \*******************************************/
/*! exports provided: ModaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaService", function() { return ModaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.service */ "./src/app/functions/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModaService = /** @class */ (function () {
    function ModaService(utilsService) {
        this.utilsService = utilsService;
    }
    ModaService.prototype.comum = function (content) {
        var maior = 1;
        for (var i = 0; i < content.length; i++) {
            if (content[i].qtd > maior) {
                maior = content[i].qtd;
            }
        }
        var maiores = [];
        var acm;
        for (var i in content) {
            if (maior === content[i].qtd) {
                maiores.push(content[i].group);
                acm++;
            }
        }
        if (acm === content.length) {
            return 'Não há modal';
        }
        return maiores;
    };
    ModaService.prototype.continua = function (groups) {
        var classeModal = [];
        var acm = 0;
        groups.forEach(function (group) {
            acm = group.qtd > acm ? group.qtd : acm;
        });
        groups.forEach(function (group) {
            if (group.qtd === acm) {
                classeModal.push(group);
            }
        });
        var modaConvencional = [];
        classeModal.forEach(function (modal) {
            var value = ((modal.class.max - modal.class.min) / 2) + modal.class.min;
            modaConvencional.push(value);
        });
        return modaConvencional;
    };
    ModaService.prototype.pearson = function (mediana, media) {
        return (3 * mediana) - (2 * media);
    };
    ModaService.prototype.king = function (groups) {
        var classeModal = this.getClassModal(groups);
        var limiteInferior = classeModal.class.min;
        var amplitude = classeModal.class.max - classeModal.class.min;
        var fPost = this.utilsService.findClassForId(groups, classeModal.class.id + 1) ? this.utilsService.findClassForId(groups, classeModal.class.id + 1)['qtd'] : 0;
        var fAnt = this.utilsService.findClassForId(groups, classeModal.class.id - 1) ? this.utilsService.findClassForId(groups, classeModal.class.id - 1)['qtd'] : 0;
        return limiteInferior + (amplitude * (fPost / (fAnt + fPost)));
    };
    ModaService.prototype.czuber = function (groups) {
        var classeModal = this.getClassModal(groups);
        var limiteInferior = classeModal.class.min;
        var amplitude = classeModal.class.max - classeModal.class.min;
        var fModal = classeModal.qtd;
        var fAnt = this.utilsService.findClassForId(groups, classeModal.class.id - 1) ? this.utilsService.findClassForId(groups, classeModal.class.id - 1)['qtd'] : 0;
        var fPost = this.utilsService.findClassForId(groups, classeModal.class.id + 1) ? this.utilsService.findClassForId(groups, classeModal.class.id + 1)['qtd'] : 0;
        return limiteInferior + (amplitude * ((fModal - fAnt) / ((2 * fModal) - (fAnt + fPost))));
    };
    ModaService.prototype.getClassModal = function (groups) {
        var classeModal = null;
        var maxValue = 0;
        groups.forEach(function (item) {
            if (item.qtd > maxValue) {
                maxValue = item.qtd;
                classeModal = item;
            }
        });
        return classeModal;
    };
    ModaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]])
    ], ModaService);
    return ModaService;
}());



/***/ }),

/***/ "./src/app/functions/table.service.ts":
/*!********************************************!*\
  !*** ./src/app/functions/table.service.ts ***!
  \********************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.service */ "./src/app/functions/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableService = /** @class */ (function () {
    function TableService(utils) {
        this.utils = utils;
    }
    TableService.prototype.init = function (content) {
        this.response = JSON.parse(JSON.stringify(content));
        this.utils.orderBy(this.response.content);
        return this;
    };
    TableService.prototype.setPercent = function () {
        var total = this.utils.totalItems(this.response.content, 'qtd');
        this.response.content.forEach(function (el) {
            el.percent = el.qtd / total;
        });
        return this;
    };
    TableService.prototype.setFrequencyAmass = function () {
        var acm = 0;
        this.response.content.forEach(function (el) {
            acm += el.qtd;
            el.fac = acm;
        });
        return this;
    };
    TableService.prototype.setFrequencyPercent = function () {
        var total = this.utils.totalItems(this.response.content, 'qtd');
        var acm = 0;
        this.response.content.forEach(function (el) {
            acm += el.qtd / total;
            el.facP = acm;
        });
        return this;
    };
    TableService.prototype.runAll = function () {
        this.setPercent()
            .setFrequencyAmass()
            .setFrequencyPercent();
        return this;
    };
    TableService.prototype.finish = function () {
        return this.response.content;
    };
    TableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "./src/app/functions/type-variable.service.ts":
/*!****************************************************!*\
  !*** ./src/app/functions/type-variable.service.ts ***!
  \****************************************************/
/*! exports provided: TypeVariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeVariableService", function() { return TypeVariableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.service */ "./src/app/functions/table.service.ts");
/* harmony import */ var _main_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/statistics.service */ "./src/app/main/statistics.service.ts");
/* harmony import */ var _desvio_padrao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desvio-padrao.service */ "./src/app/functions/desvio-padrao.service.ts");
/* harmony import */ var _moda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moda.service */ "./src/app/functions/moda.service.ts");
/* harmony import */ var _media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media.service */ "./src/app/functions/media.service.ts");
/* harmony import */ var _mediana_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mediana.service */ "./src/app/functions/mediana.service.ts");
/* harmony import */ var _data_groups_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-groups.service */ "./src/app/functions/data-groups.service.ts");
/* harmony import */ var _medidas_paratrizes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./medidas-paratrizes.service */ "./src/app/functions/medidas-paratrizes.service.ts");
/* harmony import */ var _coeficiente_variacao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coeficiente-variacao.service */ "./src/app/functions/coeficiente-variacao.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TypeVariableService = /** @class */ (function () {
    function TypeVariableService(statisticsService, tableService, desvioPadraoService, modaService, mediaService, medianaService, dataGroupsService, medidasSeparatrizesService, coeficienteVariacaoService) {
        this.statisticsService = statisticsService;
        this.tableService = tableService;
        this.desvioPadraoService = desvioPadraoService;
        this.modaService = modaService;
        this.mediaService = mediaService;
        this.medianaService = medianaService;
        this.dataGroupsService = dataGroupsService;
        this.medidasSeparatrizesService = medidasSeparatrizesService;
        this.coeficienteVariacaoService = coeficienteVariacaoService;
        this.MAX_VALUE_FOR_DISCRETA = 10;
    }
    /*
      2 | Continua
      1 | Discreta
      0 | Quali
     */
    TypeVariableService.prototype.identify = function (content, ordinal) {
        var isQuantitativa = null;
        var error;
        content.forEach(function (dado) {
            if (isQuantitativa === null) {
                isQuantitativa = !isNaN(dado.group);
            }
            else {
                if (isQuantitativa !== !isNaN(dado.group)) {
                    error = true;
                }
            }
        });
        if (error) {
            console.error('Não conseguimos identificar se a variavel é quanti ou quali');
            return this;
        }
        if (isQuantitativa) {
            var res = content.length > this.MAX_VALUE_FOR_DISCRETA ? 2 : 1;
            this.type = res;
            return this;
        }
        else {
            this.type = 0;
            return this;
        }
    };
    TypeVariableService.prototype.callFunction = function () {
        switch (this.type) {
            case 0:
                this.qualitativa();
                break;
            case 1:
                this.discreta();
                break;
            case 2:
                this.continua();
                break;
            default:
                console.error('Tipo invalido');
                this.response = null;
        }
        return this;
    };
    TypeVariableService.prototype.qualitativa = function () {
        var content = this.tableService.init(this.response)
            .runAll()
            .finish();
        var response = {
            title: this.response.title,
            content: content
        };
        this.response = response;
        return this;
    };
    TypeVariableService.prototype.discreta = function () {
        var content = this.tableService.init(this.response)
            .runAll()
            .finish();
        var DPR = this.desvioPadraoService.init(this.response).finish();
        var moda = this.modaService.comum(content);
        var media = this.mediaService.ponderada(content);
        var mediana = this.medianaService.comum(content);
        var coeficienteVariacao = this.coeficienteVariacaoService.calculate(DPR, media);
        var medidaSeparatriz = null;
        if (this.response.medidaSeparatriz && this.response.valueMedidaSeparatriz) {
            medidaSeparatriz = this.medidasSeparatrizesService.comum(content, this.response.medidaSeparatriz, this.response.valueMedidaSeparatriz);
        }
        var response = {
            title: this.response.title,
            content: content,
            DPR: DPR,
            moda: moda,
            media: media,
            mediana: mediana,
            medidaSeparatriz: medidaSeparatriz,
            coeficienteVariacao: coeficienteVariacao
        };
        this.response = response;
        return this;
    };
    TypeVariableService.prototype.continua = function () {
        var content = this.tableService.init(this.response)
            .runAll()
            .finish();
        var DPR = this.desvioPadraoService.init(this.response).finish();
        var groups = this.dataGroupsService.init(content).runAll().finish();
        var media = this.mediaService.continua(groups);
        var moda = this.modaService.continua(groups);
        var mediana = this.medianaService.continua(groups, this.dataGroupsService.intervalClass);
        var pearson = this.modaService.pearson(mediana, media);
        var king = this.modaService.king(groups);
        var czuber = this.modaService.czuber(groups);
        var medidaSeparatriz = null;
        var coeficienteVariacao = this.coeficienteVariacaoService.calculate(DPR, media);
        if (this.response.medidaSeparatriz && this.response.valueMedidaSeparatriz) {
            medidaSeparatriz = this.medidasSeparatrizesService.continua(groups, this.response.medidaSeparatriz, this.response.valueMedidaSeparatriz);
        }
        var response = {
            title: this.response.title,
            content: groups,
            DPR: DPR,
            media: media,
            mediana: mediana,
            medidaSeparatriz: medidaSeparatriz,
            moda: [
                { title: 'comum', value: moda },
                { title: 'pearson', value: pearson },
                { title: 'king', value: king },
                { title: 'czuber', value: czuber },
            ],
            coeficienteVariacao: coeficienteVariacao
        };
        this.response = response;
        return this;
    };
    TypeVariableService.prototype.setInService = function () {
        this.statisticsService.set(this.response);
    };
    TypeVariableService.prototype.run = function (info) {
        this.response = JSON.parse(JSON.stringify(info));
        if (this.response.tipoDeVariavel === 2) {
            this.type = 0;
            this.callFunction()
                .setInService();
        }
        else if (this.response.tipoDeVariavel === 3) {
            this.type = 1;
            this.callFunction()
                .setInService();
        }
        else if (this.response.tipoDeVariavel === 4) {
            this.type = 2;
            this.callFunction()
                .setInService();
        }
        else {
            this.identify(this.response.content)
                .callFunction()
                .setInService();
        }
    };
    TypeVariableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_statistics_service__WEBPACK_IMPORTED_MODULE_2__["StatisticsService"],
            _table_service__WEBPACK_IMPORTED_MODULE_1__["TableService"],
            _desvio_padrao_service__WEBPACK_IMPORTED_MODULE_3__["DesvioPadraoService"],
            _moda_service__WEBPACK_IMPORTED_MODULE_4__["ModaService"],
            _media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"],
            _mediana_service__WEBPACK_IMPORTED_MODULE_6__["MedianaService"],
            _data_groups_service__WEBPACK_IMPORTED_MODULE_7__["DataGroupsService"],
            _medidas_paratrizes_service__WEBPACK_IMPORTED_MODULE_8__["MedidasParatrizesService"],
            _coeficiente_variacao_service__WEBPACK_IMPORTED_MODULE_9__["CoeficienteVariacaoService"]])
    ], TypeVariableService);
    return TypeVariableService;
}());



/***/ }),

/***/ "./src/app/functions/utils.service.ts":
/*!********************************************!*\
  !*** ./src/app/functions/utils.service.ts ***!
  \********************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
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

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.totalItems = function (array, property) {
        var total = 0;
        array.forEach(function (obj) {
            total += obj[property];
        });
        return total;
    };
    UtilsService.prototype.listingItens = function (content) {
        var arrayData = [];
        content.forEach(function (num, index) {
            for (var i = 0; i < num.qtd; i++) {
                arrayData.push(num);
            }
        });
        return arrayData;
    };
    UtilsService.prototype.orderBy = function (el) {
        var response = el.sort(function (a, b) {
            return (parseFloat(a.group) < parseFloat(b.group)) ? -1 : ((parseFloat(a.group) > parseFloat(b.group)) ? 1 : 0);
        });
        return response;
    };
    UtilsService.prototype.findClassForId = function (classes, id) {
        for (var i = 0; i < classes.length; i++) {
            if (classes[i].class.id === id) {
                return classes[i];
            }
        }
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/main/correlacao-regressao/correlacao-regressao.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/correlacao-regressao/correlacao-regressao.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\r\n  <ui-card class=\"elevate-on-toolbar\">\r\n    <ui-toolbar class=\"flat\">\r\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n      <span class=\"title\">Correlação/Regressão</span>\r\n    </ui-toolbar>\r\n    <ui-card-content>\r\n      <div class=\"ui-flex-container break-on-s840\">\r\n        <ui-input-container>\r\n          <input id=\"x\" #x=\"ngModel\" type=\"number\" [(ngModel)]=\"info.x\" uiInput name=\"x\" required>\r\n          <label for=\"x\">X</label>\r\n          <div class=\"ui-messages\">\r\n            <div *ngIf=\"x.errors && x.dirty\">\r\n              <div class=\"ui-message error\" [hidden]=\"!x.pristine && !x.errors.required\">\r\n                Digite o X\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ui-input-container>\r\n        <ui-input-container>\r\n          <input id=\"y\" #y=\"ngModel\" type=\"number\" [(ngModel)]=\"info.y\" uiInput name=\"y\" required>\r\n          <label for=\"y\">Y</label>\r\n          <div class=\"ui-messages\">\r\n            <div *ngIf=\"y.errors && y.dirty\">\r\n              <div class=\"ui-message error\" [hidden]=\"!y.pristine && !y.errors.required\">\r\n                Digite o Y\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ui-input-container>\r\n      </div>\r\n      <div class=\"ui-button-container align-right\">\r\n        <button class=\"ui-button primary\" (click)=\"addInfo(info)\">Adicionar</button>\r\n      </div>\r\n    </ui-card-content>\r\n    <ui-data-table class=\"responsive\">\r\n      <tbody>\r\n      <tr>\r\n        <th>Xs</th>\r\n        <th>Ys</th>\r\n        <th></th>\r\n      </tr>\r\n      <tr *ngFor=\"let item of list; let index = index\">\r\n        <td data-title=\"Xs\" >{{item.x}}</td>\r\n        <td data-title=\"Ys\"> {{item.y}} </td>\r\n        <td data-title=\"Excluir\" class=\"align-right\">\r\n          <button class=\"ui-button flat icon error\" (click)=\"removeInfo(index)\"><i class=\"material-icons\">clear</i></button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"list && !list.length\">\r\n        <td colspan=\"2\" style=\"text-align: center;\">Não existem informações</td>\r\n      </tr>\r\n      </tbody>\r\n\r\n      <tfoot>\r\n      </tfoot>\r\n\r\n    </ui-data-table>\r\n  </ui-card>\r\n\r\n  <div class=\"ui-fab-container\">\r\n    <a class=\"ui-button accent fab\" uiRipple (click)=\"onSubmit(list)\">\r\n      <i class=\"material-icons\">send</i>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/correlacao-regressao/correlacao-regressao.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/correlacao-regressao/correlacao-regressao.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/correlacao-regressao/correlacao-regressao.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/correlacao-regressao/correlacao-regressao.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CorrelacaoRegressaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrelacaoRegressaoComponent", function() { return CorrelacaoRegressaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smn-ui/smn-ui.module */ "./src/app/smn-ui/smn-ui.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _correlacao_regressao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./correlacao-regressao.service */ "./src/app/main/correlacao-regressao/correlacao-regressao.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CorrelacaoRegressaoComponent = /** @class */ (function () {
    function CorrelacaoRegressaoComponent(element, toolbarService, _location, correlacaoService, router) {
        this.element = element;
        this.toolbarService = toolbarService;
        this._location = _location;
        this.correlacaoService = correlacaoService;
        this.router = router;
        this.letters = [
            { id: 1, nome: 'X' },
            { id: 2, nome: 'Y' }
        ];
        this.info = {};
        this.calc = {};
        this.list = [
            { x: 300000, y: 10 },
            { x: 400000, y: 8 },
            { x: 320000, y: 9 },
            { x: 450000, y: 6 },
        ];
    }
    CorrelacaoRegressaoComponent.prototype.ngOnInit = function () {
    };
    CorrelacaoRegressaoComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(840);
        this.toolbarService.set('Correlação e Regressão');
    };
    CorrelacaoRegressaoComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    CorrelacaoRegressaoComponent.prototype.addInfo = function (info) {
        var inset = JSON.parse(JSON.stringify(info));
        this.list.push(inset);
    };
    CorrelacaoRegressaoComponent.prototype.removeInfo = function (index) {
        this.list.splice(index, 1);
    };
    CorrelacaoRegressaoComponent.prototype.onSubmit = function (values) {
        this.correlacaoService.calculate(values);
        this.router.navigate(['/correlacao-regressao/response']);
    };
    CorrelacaoRegressaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-correlacao-regressao',
            template: __webpack_require__(/*! ./correlacao-regressao.component.html */ "./src/app/main/correlacao-regressao/correlacao-regressao.component.html"),
            styles: [__webpack_require__(/*! ./correlacao-regressao.component.scss */ "./src/app/main/correlacao-regressao/correlacao-regressao.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _correlacao_regressao_service__WEBPACK_IMPORTED_MODULE_4__["CorrelacaoRegressaoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CorrelacaoRegressaoComponent);
    return CorrelacaoRegressaoComponent;
}());



/***/ }),

/***/ "./src/app/main/correlacao-regressao/correlacao-regressao.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/correlacao-regressao/correlacao-regressao.module.ts ***!
  \**************************************************************************/
/*! exports provided: CorrelacaoRegressaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrelacaoRegressaoModule", function() { return CorrelacaoRegressaoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _correlacao_regressao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./correlacao-regressao.component */ "./src/app/main/correlacao-regressao/correlacao-regressao.component.ts");
/* harmony import */ var _correlacao_regressao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./correlacao-regressao.service */ "./src/app/main/correlacao-regressao/correlacao-regressao.service.ts");
/* harmony import */ var _response_response_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./response/response.component */ "./src/app/main/correlacao-regressao/response/response.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CorrelacaoRegressaoModule = /** @class */ (function () {
    function CorrelacaoRegressaoModule() {
    }
    CorrelacaoRegressaoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            ],
            declarations: [
                _correlacao_regressao_component__WEBPACK_IMPORTED_MODULE_2__["CorrelacaoRegressaoComponent"],
                _response_response_component__WEBPACK_IMPORTED_MODULE_4__["ResponseComponent"]
            ],
            providers: [
                _correlacao_regressao_service__WEBPACK_IMPORTED_MODULE_3__["CorrelacaoRegressaoService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], CorrelacaoRegressaoModule);
    return CorrelacaoRegressaoModule;
}());



/***/ }),

/***/ "./src/app/main/correlacao-regressao/correlacao-regressao.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/correlacao-regressao/correlacao-regressao.service.ts ***!
  \***************************************************************************/
/*! exports provided: CorrelacaoRegressaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrelacaoRegressaoService", function() { return CorrelacaoRegressaoService; });
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

var CorrelacaoRegressaoService = /** @class */ (function () {
    function CorrelacaoRegressaoService() {
        this.calc = {};
    }
    CorrelacaoRegressaoService.prototype.calculate = function (values) {
        var correlacao = this.correlacao(values.length, this.somatorioX(values), this.somatorioY(values), this.somatorioXY(values), this.somatorioX2(values), this.somatorioY2(values));
        var A = this.regressaoA(values.length, this.somatorioXY(values), this.somatorioX(values), this.somatorioY(values), this.somatorioY2(values));
        var B = this.regressaoB(values.length, this.somatorioX(values), this.somatorioY(values), A);
        this.calc.correlacao = correlacao;
        this.calc.nivel = this.nivelCorrelacao(correlacao);
        this.calc.A = A;
        this.calc.B = B;
    };
    CorrelacaoRegressaoService.prototype.somatorioX = function (values) {
        return values.reduce(function (acm, item) {
            return acm + item.x;
        }, 0);
    };
    CorrelacaoRegressaoService.prototype.somatorioY = function (values) {
        return values.reduce(function (acm, item) {
            return acm + item.y;
        }, 0);
    };
    CorrelacaoRegressaoService.prototype.somatorioXY = function (values) {
        return values.reduce(function (acm, item) {
            return acm + item.x * item.y;
        }, 0);
    };
    CorrelacaoRegressaoService.prototype.somatorioX2 = function (values) {
        return values.reduce(function (acm, item) {
            return acm + Math.pow(item.x, 2);
        }, 0);
    };
    CorrelacaoRegressaoService.prototype.somatorioY2 = function (values) {
        return values.reduce(function (acm, item) {
            return acm + Math.pow(item.y, 2);
        }, 0);
    };
    CorrelacaoRegressaoService.prototype.correlacao = function (n, X, Y, XY, X2, Y2) {
        var numerador = (n * XY) - (X * Y);
        var denominador = Math.sqrt((n * X2 - Math.pow(X, 2)) * (n * Y2 - Math.pow(Y, 2)));
        return -numerador / denominador;
    };
    CorrelacaoRegressaoService.prototype.nivelCorrelacao = function (percent) {
        if (percent >= 0 && percent < 0.3) {
            return 'Inevistente a muito fraca';
        }
        else if (percent >= 0.3 && percent < 0.6) {
            return 'Muita fraca a média';
        }
        else {
            return 'Média a forte';
        }
    };
    CorrelacaoRegressaoService.prototype.regressao = function (a, b, x, y) {
        return x ? a * x + b : (y - b) / a;
    };
    CorrelacaoRegressaoService.prototype.regressaoA = function (n, XY, X, Y, Y2) {
        var numerador = (n * XY) - (Y * X);
        var denominador = (n * Y2) - (Math.pow(Y, 2));
        return numerador / denominador;
    };
    CorrelacaoRegressaoService.prototype.regressaoB = function (n, X, Y, A) {
        var _Y = Y / n;
        var _X = (X / n) / 1000; // NÃO ME PERGUNTE O MOTIVO DISSO;
        return _X - A * _Y;
    };
    CorrelacaoRegressaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CorrelacaoRegressaoService);
    return CorrelacaoRegressaoService;
}());



/***/ }),

/***/ "./src/app/main/correlacao-regressao/response/response.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/correlacao-regressao/response/response.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\r\n  <ui-card class=\"elevate-on-toolbar\">\r\n    <ui-toolbar class=\"flat\">\r\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n      <span class=\"title\">Correlação/Regressão</span>\r\n    </ui-toolbar>\r\n    <ui-card-content>\r\n      <form #form=\"ngForm\" class=\"ui-validate on-dirty on-submit\">\r\n      <div class=\"ui-flex-container\">\r\n        <ui-input-container>\r\n          <ui-select id=\"letter\" #letter=\"ngModel\" name=\"letter\" [(ngModel)]=\"calc.letter\" [options]=\"letters\" value=\"id\" label=\"nome\"\r\n                     uiInput required></ui-select>\r\n          <label for=\"letter\">\r\n            Letra\r\n          </label>\r\n          <div class=\"ui-messages\">\r\n            <div *ngIf=\"letter.errors && letter.dirty\">\r\n              <div class=\"ui-message error\" [hidden]=\"!letter.pristine && !letter.errors.required\">\r\n                Selecione uma letra\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ui-input-container>\r\n        <ui-input-container>\r\n          <input id=\"value\" #value=\"ngModel\" type=\"number\" [(ngModel)]=\"calc.value\" uiInput name=\"value\" required>\r\n          <label for=\"value\">Valor</label>\r\n          <div class=\"ui-messages\">\r\n            <div *ngIf=\"value.errors && value.dirty\">\r\n              <div class=\"ui-message error\" [hidden]=\"!value.pristine && !value.errors.required\">\r\n                Digite o Valor\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ui-input-container>\r\n      </div>\r\n        <div class=\"ui-button-container align-right\">\r\n          <button class=\"ui-button primary\" (click)=\"onSubmit(form, calc.letter, calc.value)\">Calcular</button>\r\n        </div>\r\n      </form>\r\n    </ui-card-content>\r\n\r\n    <ui-card-content>\r\n      <span *ngIf=\"calc.result\">Resultado: {{ calc.result }}</span><br>\r\n      <span>Correlação: {{ calc.correlacao}}</span><br>\r\n      <span>Nivel: {{ calc.nivel}}</span><br>\r\n      <span>Equação: Y = - {{ calc.A }} * X + {{ calc.B }}</span><br>\r\n    </ui-card-content>\r\n\r\n  </ui-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/correlacao-regressao/response/response.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/correlacao-regressao/response/response.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/correlacao-regressao/response/response.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/correlacao-regressao/response/response.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComponent", function() { return ResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _correlacao_regressao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../correlacao-regressao.service */ "./src/app/main/correlacao-regressao/correlacao-regressao.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../smn-ui/smn-ui.module */ "./src/app/smn-ui/smn-ui.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResponseComponent = /** @class */ (function () {
    function ResponseComponent(element, toolbarService, _location, correlacaoService, router) {
        this.element = element;
        this.toolbarService = toolbarService;
        this._location = _location;
        this.correlacaoService = correlacaoService;
        this.router = router;
        this.letters = [
            { id: 1, nome: 'X' },
            { id: 2, nome: 'Y' }
        ];
        this.calc = this.correlacaoService.calc;
    }
    ResponseComponent.prototype.ngOnInit = function () {
    };
    ResponseComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(480);
    };
    ResponseComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    ResponseComponent.prototype.onSubmit = function (form, type, value) {
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        if (type === 1) {
            this.calc.result = this.correlacaoService.regressao(this.correlacaoService.calc.A, this.correlacaoService.calc.B, value, null);
        }
        else {
            this.calc.result = this.correlacaoService.regressao(this.correlacaoService.calc.A, this.correlacaoService.calc.B, null, value);
        }
    };
    ResponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-response',
            template: __webpack_require__(/*! ./response.component.html */ "./src/app/main/correlacao-regressao/response/response.component.html"),
            styles: [__webpack_require__(/*! ./response.component.scss */ "./src/app/main/correlacao-regressao/response/response.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiToolbarService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _correlacao_regressao_service__WEBPACK_IMPORTED_MODULE_1__["CorrelacaoRegressaoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ResponseComponent);
    return ResponseComponent;
}());



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s1280\">\r\n  <div class=\"content\" *ngIf=\"dados.content\">\r\n\r\n    <ui-card class=\"content__cards elevate-on-toolbar\">\r\n      <section class=\"content__cards__card\">\r\n        <h1 class=\"content__cards__card__title\">Média</h1>\r\n        <h1 class=\"content__cards__card__subtitle\">{{ dados.media | number:'1.2-2' }}</h1>\r\n      </section>\r\n      <section class=\"content__cards__card\">\r\n        <h1 class=\"content__cards__card__title\">Mediana</h1>\r\n        <h1 class=\"content__cards__card__subtitle\">{{ dados.mediana }}</h1>\r\n      </section>\r\n      <section class=\"content__cards__card\" (click)=\"nextModa()\">\r\n        <h1 class=\"content__cards__card__title\">Moda {{ dados.moda[numModa].title }}</h1>\r\n        <h1 class=\"content__cards__card__subtitle\">{{ dados.moda[numModa].value || dados.moda }}</h1>\r\n      </section>\r\n      <section class=\"content__cards__card\" *ngIf=\"dados.medidaSeparatriz\">\r\n        <h1 class=\"content__cards__card__title\">Medida Separatriz</h1>\r\n        <h1 class=\"content__cards__card__subtitle\">{{ dados.medidaSeparatriz | number:'1.2-2' }}</h1>\r\n      </section>\r\n      <section class=\"content__cards__card\">\r\n        <h1 class=\"content__cards__card__title\">Desvio Padrao</h1>\r\n        <h1 class=\"content__cards__card__subtitle\">{{ dados.DPR | number:'1.2-2' }}</h1>\r\n      </section>\r\n      <section class=\"content__cards__card\">\r\n        <h1 class=\"content__cards__card__title\">Coeficiente de variação</h1>\r\n        <h1 class=\"content__cards__card__subtitle\">{{ dados.coeficienteVariacao | number:'1.2-2' }}</h1>\r\n      </section>\r\n    </ui-card>\r\n\r\n    <div class=\"content__card\">\r\n      <app-table [data]=\"dados.content\" [title]=\"dados.title\"></app-table>\r\n    </div>\r\n    <div class=\"content__card\">\r\n      <ui-card class=\"elevate-on-toolbar\">\r\n        <smn-graphic [data]=\"graphic\"\r\n                     [legend]=\"[]\"\r\n                     [config]=\"{\r\n                   colorSelected: '#263238',\r\n                   lineColor: '#E0E0E0',\r\n                   colors: ['#78909C', '#546E7A'],\r\n                   noSpace: true\r\n             }\"\r\n                     [title]=\"'Grafico'\"\r\n                     [subtitle]=\"'Elementos de um grafico'\">\r\n          <section class=\"menu-info\">\r\n            <div class=\"menu-info__header\">\r\n              {{ graphicService.info.legend }}\r\n            </div>\r\n            <div class=\"menu-info__header\">\r\n              <b>Quantidade: {{ graphicService.info.value }}</b>\r\n            </div>\r\n            <div class=\"menu-info__header\">\r\n              Data: {{ graphicService.info.column }}\r\n            </div>\r\n          </section>\r\n        </smn-graphic>\r\n      </ui-card>\r\n    </div>\r\n    <div style=\"height: 80px;\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.menu-info {\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 100px;\n  max-width: 200px; }\n.menu-info__header {\n    width: 100%;\n    text-align: center;\n    padding: 8px;\n    font-size: 14px; }\n:host .content {\n  display: flex;\n  flex-wrap: wrap; }\n:host .content__card {\n    width: 100%;\n    padding: 16px; }\n:host .content__cards {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    background-color: transparent;\n    box-shadow: none; }\n:host .content__cards__card {\n      background-color: #F5F5F5;\n      padding: 16px 8px;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n      width: 100%;\n      margin: 0 8px; }\n:host .content__cards__card__title {\n        text-align: center;\n        font-size: 14px;\n        font-weight: 500;\n        opacity: 0.87;\n        padding-bottom: 8px;\n        color: rgba(0, 0, 0, 0.64); }\n:host .content__cards__card__subtitle {\n        text-align: center;\n        font-size: 16px;\n        color: rgba(0, 0, 0, 0.87); }\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  :host .content__card {\n    width: 100%; }\n  :host .content__cards {\n    flex-wrap: wrap; }\n    :host .content__cards__card {\n      width: 100%;\n      margin: 8px; } }\n"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _statistics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../statistics.service */ "./src/app/main/statistics.service.ts");
/* harmony import */ var _smn_ui_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../smn-ui/toolbar/toolbar.service */ "./src/app/smn-ui/toolbar/toolbar.service.ts");
/* harmony import */ var _components_graphic_graphic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/graphic/graphic.service */ "./src/app/components/graphic/graphic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(statistics, toolbarService, graphicService, router) {
        this.statistics = statistics;
        this.toolbarService = toolbarService;
        this.graphicService = graphicService;
        this.router = router;
        this.numModa = 0;
        this.dados = this.statistics.getDados();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dados.content) {
            this.graphic = this.dados.content.map(function (dado) {
                return {
                    indice: _this.dados.type !== 3 ? dado.group : dado.class.id,
                    value: [dado.qtd]
                };
            });
        }
        else {
            this.router.navigate(['/insert']);
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(1280);
        this.toolbarService.set('Dashboard');
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    DashboardComponent.prototype.nextModa = function () {
        if (typeof this.dados === 'object') {
            if (this.numModa < this.dados.moda.length - 1) {
                this.numModa++;
            }
            else {
                this.numModa = 0;
            }
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/main/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_statistics_service__WEBPACK_IMPORTED_MODULE_1__["StatisticsService"],
            _smn_ui_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _components_graphic_graphic_service__WEBPACK_IMPORTED_MODULE_3__["GraphicService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../statistics.service */ "./src/app/main/statistics.service.ts");
/* harmony import */ var _components_graphic_graphic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/graphic/graphic.module */ "./src/app/components/graphic/graphic.module.ts");
/* harmony import */ var _components_graphic_graphic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/graphic/graphic.service */ "./src/app/components/graphic/graphic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _components_graphic_graphic_module__WEBPACK_IMPORTED_MODULE_5__["GraphicCollumnModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]],
            providers: [_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"], _components_graphic_graphic_service__WEBPACK_IMPORTED_MODULE_6__["GraphicService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/main/data-insertion/data-insertion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/data-insertion/data-insertion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\r\n  <ui-card class=\"elevate-on-toolbar\">\r\n    <ui-toolbar class=\"flat\">\r\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n      <span class=\"title\">Entrada de dados</span>\r\n      <div class=\"align-right\">\r\n        <button class=\"ui-button flat icon\" uiRipple>\r\n          <i class=\"material-icons\">cloud_upload</i>\r\n        </button>\r\n      </div>\r\n    </ui-toolbar>\r\n    <ui-card-content>\r\n      <form #form=\"ngForm\" class=\"ui-validate on-dirty on-submit\">\r\n        <ui-input-container>\r\n          <input id=\"title\" #title=\"ngModel\" type=\"text\" [(ngModel)]=\"info.title\" uiInput name=\"title\" required>\r\n          <label for=\"title\">Titulo</label>\r\n          <div class=\"ui-messages\">\r\n            <div *ngIf=\"title.errors && title.dirty\">\r\n              <div class=\"ui-message error\" [hidden]=\"!title.pristine && !title.errors.required\">\r\n                Digite o titulo\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ui-input-container>\r\n        <div class=\"ui-flex-container break-on-s840\">\r\n          <ui-input-container>\r\n            <ui-select id=\"medidaSeparatriz\"\r\n                       #medidaSeparatriz=\"ngModel\"\r\n                       name=\"medidaSeparatriz\"\r\n                       [(ngModel)]=\"info.medidaSeparatriz\"\r\n                       [options]=\"selectMedidaSeparatriz\"\r\n                       value=\"id\" label=\"nome\"\r\n                       uiInput></ui-select>\r\n            <label for=\"medidaSeparatriz\">\r\n              Medida Separatriz\r\n            </label>\r\n          </ui-input-container>\r\n          <ui-input-container>\r\n            <input id=\"valueMedidaSeparatriz\"\r\n                   #valueMedidaSeparatriz=\"ngModel\"\r\n                   type=\"number\"\r\n                   [(ngModel)]=\"info.valueMedidaSeparatriz\"\r\n                   uiInput\r\n                   name=\"valueMedidaSeparatriz\">\r\n            <label for=\"valueMedidaSeparatriz\">Valor</label>\r\n          </ui-input-container>\r\n        </div>\r\n        <div class=\"ui-flex-container break-on-s840\">\r\n          <ui-option-container class=\"v-space-4 b-space-16\">\r\n            <ui-option>\r\n              <input name=\"legenda\" type=\"checkbox\" [(ngModel)]=\"info.ordinal\" [checked]=\"info.ordinal\">\r\n              <span>Ordinal</span>\r\n            </ui-option>\r\n          </ui-option-container>\r\n\r\n          <ui-option-container class=\"v-space-4 b-space-16\">\r\n            <ui-option>\r\n              <input name=\"legenda\" type=\"checkbox\" [(ngModel)]=\"info.amostra\" [checked]=\"info.amostra\">\r\n              <span>Amostra</span>\r\n            </ui-option>\r\n          </ui-option-container>\r\n            <ui-input-container>\r\n              <ui-select id=\"sufixo\" #sufixo=\"ngModel\" name=\"sufixo\" [(ngModel)]=\"info.sufixo\" [options]=\"selectSufixo\" value=\"nome\" label=\"nome\"\r\n                uiInput></ui-select>\r\n              <label for=\"sufixo\">\r\n                Sufixo\r\n              </label>\r\n            </ui-input-container>\r\n          <ui-input-container>\r\n            <ui-select id=\"tipoDeVariavel\" #tipoDeVariavel=\"ngModel\" name=\"tipoDeVarivel\" [(ngModel)]=\"info.tipoDeVariavel\" [options]=\"selectTipoVariavel\" value=\"id\" label=\"nome\"\r\n                       uiInput></ui-select>\r\n            <label for=\"tipoDeVariavel\">\r\n              Tipo de variavel\r\n            </label>\r\n          </ui-input-container>\r\n        </div>\r\n        <ui-chips>\r\n          <ui-input-container>\r\n            <input id=\"dado\" #dado=\"ngModel\" type=\"text\" [(ngModel)]=\"info.currentDado\" uiInput name=\"dado\" (keydown.enter)=\"insertData()\">\r\n            <label for=\"dado\">Dado</label>\r\n          </ui-input-container>\r\n\r\n          <div class=\"container-chips\">\r\n            <div *ngFor=\"let dadoInserido of info.content; let index = index\" [attr.data-value]=\"index\" class=\"ui-chip js-chips-dado\">\r\n              <div class=\"icon chip-cont\">\r\n                {{ dadoInserido.qtd }}\r\n              </div>\r\n              {{ dadoInserido.group }}  {{ info.sufixo && info.sufixo !== 'Sem sufixo' ? ' ' + info.sufixo : '' }}\r\n              <div class=\"close ripple-rounded\" uiRipple (click)=\"removeData(index)\">\r\n                <i class=\"material-icons\">add_circle</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ui-chips>\r\n      </form>\r\n    </ui-card-content>\r\n  </ui-card>\r\n  <div class=\"ui-fab-container\">\r\n    <a class=\"ui-button accent fab\" uiRipple (click)=\"onSubmit(form, info)\">\r\n      <i class=\"material-icons\">send</i>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n\r\n<br><br><br><br><br>\r\n"

/***/ }),

/***/ "./src/app/main/data-insertion/data-insertion.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/data-insertion/data-insertion.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.input-legend {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end; }\n.input-legend ui-input-container {\n    max-width: 200px; }\n.chip-cont {\n  background-color: #2196f3;\n  color: #FFF; }\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  .input-legend ui-input-container {\n    max-width: 100%; } }\n.container-chips {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap; }\n.drag-drop-shadow {\n  display: inline-flex;\n  background-color: #F00;\n  height: 32px;\n  border-radius: 16px;\n  align-items: center;\n  padding: 0 16px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-right: 12px;\n  margin-bottom: 12px; }\n"

/***/ }),

/***/ "./src/app/main/data-insertion/data-insertion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/data-insertion/data-insertion.component.ts ***!
  \*****************************************************************/
/*! exports provided: DataInsertionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInsertionComponent", function() { return DataInsertionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smn-ui/smn-ui.module */ "./src/app/smn-ui/smn-ui.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statistics.service */ "./src/app/main/statistics.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock.service */ "./src/app/main/data-insertion/mock.service.ts");
/* harmony import */ var _functions_type_variable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/type-variable.service */ "./src/app/functions/type-variable.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataInsertionComponent = /** @class */ (function () {
    function DataInsertionComponent(element, statisticsService, router, toolbarService, renderer, _location, MOCK, typeVariable) {
        this.element = element;
        this.statisticsService = statisticsService;
        this.router = router;
        this.toolbarService = toolbarService;
        this.renderer = renderer;
        this._location = _location;
        this.MOCK = MOCK;
        this.typeVariable = typeVariable;
        this.info = this.MOCK.vContinua2;
        this.dragDrop = {};
        this.selectMedidaSeparatriz = [
            { id: 4, nome: 'Quartil' },
            { id: 5, nome: 'Quintil' },
            { id: 10, nome: 'Decil' },
            { id: 100, nome: 'Percentil' }
        ];
        this.selectSufixo = [
            { id: 1, nome: 'Sem sufixo' },
            { id: 2, nome: 'Metro' },
            { id: 3, nome: 'Kg' },
            { id: 4, nome: 'Centimetros' }
        ];
        this.selectTipoVariavel = [
            { id: 1, nome: 'Automatico' },
            { id: 2, nome: 'Qualitativa' },
            { id: 3, nome: 'Discreta' },
            { id: 4, nome: 'Continua' }
        ];
    }
    DataInsertionComponent.prototype.ngOnInit = function () {
    };
    DataInsertionComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(840);
        this.toolbarService.set('Estatistica discreta');
        this.addListenerMulti(document, 'mousemove touchmove', this.chipMove);
        this.addListenerMulti(document, 'mouseup touchend', this.chipUp);
        this.initDragDrop();
    };
    DataInsertionComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
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
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        this.typeVariable.run(this.info);
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
                        _this.addListenerMulti(chip, 'mousedown touchstart', _this.chipDown);
                    }
                });
            }
        });
    };
    DataInsertionComponent.prototype.chipDown = function (el) {
        if (this.info.ordinal) {
            this.dragDrop.isChipDown = true;
            this.dragDrop.chipSelected = el[1];
            var elTarget = event.target;
            this.dragDrop.offsetX = event['offsetX'] || event['targetTouches'][0].pageX - elTarget.getBoundingClientRect().left;
            this.dragDrop.offsetY = (event['offsetY'] || event['targetTouches'][0].pageY - elTarget.getBoundingClientRect().top);
            el[1].classList.add('selected');
            this.buildShadow();
            this.dragDrop.value = JSON.parse(JSON.stringify(this.info.content[el[1].getAttribute('data-value')]));
            this.dragDrop.forDelete = el[1].getAttribute('data-value');
        }
    };
    DataInsertionComponent.prototype.chipMove = function () {
        if (this.dragDrop.isChipDown) {
            this.dragDrop.isMoved = true;
            this.disableScroll();
            var x = event['clientX'] || event['changedTouches'][0]['clientX'];
            var y = event['clientY'] || event['changedTouches'][0]['clientY'];
            var position = {
                x: x - this.dragDrop.offsetX,
                y: y - this.dragDrop.offsetY + this.getScrollY()
            };
            var before = this.identifyLocalDrop(position);
            this.moveShadow(before);
            this.dragDrop.chipSelected.style.position = 'fixed';
            this.dragDrop.chipSelected.style.top = position.y + "px";
            this.dragDrop.chipSelected.style.left = position.x + "px";
        }
    };
    DataInsertionComponent.prototype.identifyLocalDrop = function (position) {
        var before;
        var isFindX = false;
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
                    if (!isFindX) {
                        isFindX = true;
                        before = chips[i];
                    }
                }
            }
        }
        if (!isFindX) {
            var lastChip_1;
            chips.forEach(function (chip, index) {
                if (chip.getBoundingClientRect().y === lineY) {
                    lastChip_1 = index;
                }
            });
            return chips[lastChip_1 + 1];
            /*
              CASO ELE NÂO ENCONTRE UM ELEMENTO MAIOR NA MESMA LINHA
              ELE VAI PEGAR O ULTIMO ELEMENTO DA LINHA MAIS 1
              ASSIM ELE ENCONTRARA O ELEMENTO DA LINHA SEGUINTE
              OU RETORNARA UNDEFINED QUE FARA COM QUE ELE SEJA INSERIDO
              NA ULTIMA POSIÇÃO.
            */
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
            this.enableScroll();
            this.dragDrop = {};
            this.organizeArray();
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
    DataInsertionComponent.prototype.disableScroll = function () {
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        }
        window.onwheel = this.preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        window.ontouchmove = this.preventDefault; // mobile
        // document.onkeydown = this.preventDefaultForScrollKeys;
    };
    DataInsertionComponent.prototype.enableScroll = function () {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    };
    DataInsertionComponent.prototype.preventDefault = function (e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    };
    DataInsertionComponent.prototype.getScrollY = function () {
        return document.querySelector('html').scrollTop;
    };
    DataInsertionComponent.prototype.organizeArray = function () {
        var chips = this.element.nativeElement.querySelectorAll('.js-chips-dado');
        var newArray = [];
        for (var i = 0; i < chips.length; i++) {
            var obj = this.info.content[chips[i].getAttribute('data-value')];
            chips[i].setAttribute('data-value', i);
            newArray.push(obj);
        }
        this.info.content = newArray;
    };
    DataInsertionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-insertion',
            template: __webpack_require__(/*! ./data-insertion.component.html */ "./src/app/main/data-insertion/data-insertion.component.html"),
            styles: [__webpack_require__(/*! ./data-insertion.component.scss */ "./src/app/main/data-insertion/data-insertion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _statistics_service__WEBPACK_IMPORTED_MODULE_3__["StatisticsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _mock_service__WEBPACK_IMPORTED_MODULE_5__["MockService"],
            _functions_type_variable_service__WEBPACK_IMPORTED_MODULE_6__["TypeVariableService"]])
    ], DataInsertionComponent);
    return DataInsertionComponent;
}());



/***/ }),

/***/ "./src/app/main/data-insertion/data-insertion.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/data-insertion/data-insertion.module.ts ***!
  \**************************************************************/
/*! exports provided: DataInsertionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInsertionModule", function() { return DataInsertionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_insertion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-insertion.component */ "./src/app/main/data-insertion/data-insertion.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataInsertionModule = /** @class */ (function () {
    function DataInsertionModule() {
    }
    DataInsertionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            declarations: [_data_insertion_component__WEBPACK_IMPORTED_MODULE_1__["DataInsertionComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DataInsertionModule);
    return DataInsertionModule;
}());



/***/ }),

/***/ "./src/app/main/data-insertion/mock.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/data-insertion/mock.service.ts ***!
  \*****************************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
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

var MockService = /** @class */ (function () {
    function MockService() {
        this.vContinua = {
            title: 'Exercicio 1',
            content: [
                { group: '20', qtd: 1 },
                { group: '25', qtd: 1 },
                { group: '28', qtd: 1 },
                { group: '31', qtd: 1 },
                { group: '32', qtd: 3 },
                { group: '35', qtd: 1 },
                { group: '37', qtd: 1 },
                { group: '42', qtd: 2 },
                { group: '46', qtd: 1 },
                { group: '47', qtd: 1 },
                { group: '48', qtd: 1 },
                { group: '50', qtd: 1 },
                { group: '52', qtd: 1 },
                { group: '54', qtd: 1 },
                { group: '55', qtd: 1 },
                { group: '57', qtd: 1 },
                { group: '60', qtd: 1 }
            ]
        };
        this.vContinua2 = {
            title: 'Exercicio 1',
            content: [
                { group: '590', qtd: 1 },
                { group: '430', qtd: 1 },
                { group: '430', qtd: 1 },
                { group: '320', qtd: 1 },
                { group: '320', qtd: 1 },
                { group: '500', qtd: 1 },
                { group: '310', qtd: 1 },
                { group: '390', qtd: 1 },
                { group: '390', qtd: 1 },
                { group: '450', qtd: 1 },
                { group: '570', qtd: 1 },
                { group: '570', qtd: 1 },
                { group: '580', qtd: 1 },
                { group: '410', qtd: 1 },
                { group: '380', qtd: 1 },
                { group: '380', qtd: 1 },
                { group: '510', qtd: 1 },
                { group: '510', qtd: 1 },
                { group: '335', qtd: 1 },
                { group: '515', qtd: 1 },
                { group: '600', qtd: 1 },
                { group: '300', qtd: 1 },
                { group: '437', qtd: 1 },
                { group: '578', qtd: 1 },
                { group: '572', qtd: 1 },
                { group: '480', qtd: 1 },
                { group: '462', qtd: 1 },
                { group: '413', qtd: 1 },
                { group: '457', qtd: 1 },
                { group: '530', qtd: 1 },
            ]
        };
        this.quali = {
            title: 'Exercicio 3',
            content: [
                { group: 'Bom', qtd: 5 },
                { group: 'Regular', qtd: 5 },
                { group: 'Ruim', qtd: 0 },
                { group: 'Muito bom', qtd: 5 },
            ]
        };
        this.vContinua3 = {
            title: 'Exercicio 3',
            content: [
                { group: '20', qtd: 1 },
                { group: '25', qtd: 2 },
                { group: '26', qtd: 1 },
                { group: '28', qtd: 2 },
                { group: '30', qtd: 3 },
                { group: '32', qtd: 1 },
                { group: '34', qtd: 1 },
                { group: '35', qtd: 1 },
                { group: '41', qtd: 1 },
                { group: '42', qtd: 1 },
                { group: '44', qtd: 1 },
                { group: '45', qtd: 1 },
                { group: '47', qtd: 1 },
                { group: '48', qtd: 3 },
                { group: '52', qtd: 1 },
                { group: '53', qtd: 1 },
                { group: '55', qtd: 1 },
                { group: '62', qtd: 1 }
            ]
        };
        this.vContinua4 = {
            title: 'Exercicio 4',
            content: [
                { group: '10', qtd: 1 },
                { group: '11', qtd: 1 },
                { group: '12', qtd: 2 },
                { group: '13', qtd: 1 },
                { group: '14', qtd: 2 },
                { group: '15', qtd: 1 },
                { group: '17', qtd: 1 },
                { group: '18', qtd: 1 },
                { group: '30', qtd: 1 },
                { group: '35', qtd: 1 },
                { group: '34', qtd: 1 },
                { group: '32', qtd: 2 },
                { group: '31', qtd: 2 },
                { group: '37', qtd: 1 },
                { group: '38', qtd: 1 },
                { group: '39', qtd: 1 },
            ]
        };
        this.EXEMPLO_8_1 = {
            title: 'Exemplo 8.1',
            content: [
                { group: 7, qtd: 1 },
                { group: 13, qtd: 1 },
                { group: 5, qtd: 1 },
                { group: 12, qtd: 1 },
                { group: 16, qtd: 1 },
                { group: 4, qtd: 1 },
                { group: 9, qtd: 1 },
                { group: 15, qtd: 1 },
                { group: 6, qtd: 1 }
            ]
        };
        this.EXEMPLO_8_2 = {
            title: 'Exemplo 8.2',
            content: [
                { group: 2, qtd: 1 },
                { group: 3, qtd: 1 },
                { group: 4, qtd: 1 },
                { group: 8, qtd: 1 },
                { group: 9, qtd: 1 },
                { group: 10, qtd: 1 },
                { group: 11, qtd: 1 },
                { group: 12, qtd: 1 },
                { group: 16, qtd: 1 },
                { group: 19, qtd: 1 }
            ]
        };
    }
    MockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MockService);
    return MockService;
}());



/***/ }),

/***/ "./src/app/main/distribuicao-binomial/distribuicao-binomial.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/distribuicao-binomial/distribuicao-binomial.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <ui-toolbar class=\"flat\">\r\n            <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n            <span class=\"title\">Distribuição binomial</span>\r\n        </ui-toolbar>\r\n        <ui-card-content>\r\n            <form #form=\"ngForm\" class=\"ui-validate on-dirty on-submit\">\r\n\r\n                <div class=\"ui-flex-container break-on-s840\">\r\n\r\n                    <ui-input-container>\r\n                        <input id=\"totalProb\" #totalProb=\"ngModel\" type=\"number\" [(ngModel)]=\"info.totalProb\" uiInput name=\"totalProb\" required>\r\n                        <label for=\"totalProb\">Total de probabilidades</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"totalProb.errors && totalProb.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!totalProb.pristine && !totalProb.errors.required\">\r\n                                    Digite o Total de probabilidades\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                    <ui-input-container>\r\n                        <input id=\"totalSucess\" #totalSucess=\"ngModel\" type=\"number\" [(ngModel)]=\"info.totalSucess\" uiInput name=\"totalSucess\" required>\r\n                        <label for=\"totalSucess\">Total de sucessos desejados</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"totalSucess.errors && totalSucess.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!totalSucess.pristine && !totalSucess.errors.required\">\r\n                                    Digite o Total de sucessos desejados\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-flex-container break-on-s840\">\r\n\r\n                    <ui-input-container>\r\n                        <input id=\"probSucess\" #probSucess=\"ngModel\" type=\"number\" [(ngModel)]=\"info.probSucess\" uiInput name=\"probSucess\" required>\r\n                        <label for=\"probSucess\">Probabilidade de Sucesso</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"probSucess.errors && probSucess.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!probSucess.pristine && !probSucess.errors.required\">\r\n                                    Digite o valor de \"Probabilidade de Sucesso\"\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                    <ui-input-container>\r\n                        <input id=\"probFracasso\" #probFracasso=\"ngModel\" type=\"number\" [(ngModel)]=\"info.probFracasso\" uiInput name=\"probFracasso\"\r\n                            required>\r\n                        <label for=\"probFracasso\">Probabilidade de Fracasso</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"probFracasso.errors && probFracasso.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!probFracasso.pristine && !probFracasso.errors.required\">\r\n                                    Digite o valor de \"Probabilidade de Fracasso\"\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-flex-container break-on-s840\">\r\n\r\n                    <ui-input-container>\r\n                        <input id=\"pelomenos\" #pelomenos=\"ngModel\" type=\"number\" [(ngModel)]=\"info.pelomenos\" uiInput name=\"pelomenos\" required>\r\n                        <label for=\"pelomenos\">Pelo Menos</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"pelomenos.errors && pelomenos.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!pelomenos.pristine && !pelomenos.errors.required\">\r\n                                    Digite o valor de \"Pelo Menos\"\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                    <ui-input-container>\r\n                        <input id=\"maximo\" #maximo=\"ngModel\" type=\"number\" [(ngModel)]=\"info.maximo\" uiInput name=\"maximo\" required>\r\n                        <label for=\"maximo\">No Máximo</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"maximo.errors && maximo.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!maximo.pristine && !maximo.errors.required\">\r\n                                    Digite o valor de \"No Máximo\"\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n\r\n            </form>\r\n        </ui-card-content>\r\n\r\n        <div *ngIf=\"response\">\r\n            <ui-card-title>Resultado</ui-card-title>\r\n            <ui-card-content>\r\n                <ui-data-table  class=\"responsive\">\r\n                    <tbody >\r\n                        <tr >\r\n                            <th>Probabilidade = {{info.totalProb}}</th>\r\n                            <th>De {{info.pelomenos}} á {{info.totalProb}}></th>\r\n                            <th>Até {{info.maximo}}</th>\r\n                        </tr>\r\n                        <tr >\r\n                            <td>{{ response.probabilidadeTotal }}</td>\r\n                            <td>{{ response.pelomenos }} </td>\r\n                            <td>{{ response.maximo }} </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        \r\n                    </tfoot>\r\n                </ui-data-table>                \r\n            </ui-card-content>\r\n        </div>\r\n\r\n    </ui-card>\r\n\r\n    <div class=\"ui-fab-container\">\r\n        <a class=\"ui-button accent fab\" uiRipple (click)=\"onSubmit(form, info)\">\r\n      <i class=\"material-icons\">send</i>\r\n    </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/distribuicao-binomial/distribuicao-binomial.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/distribuicao-binomial/distribuicao-binomial.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/distribuicao-binomial/distribuicao-binomial.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/distribuicao-binomial/distribuicao-binomial.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DistribuicaoBinomialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuicaoBinomialComponent", function() { return DistribuicaoBinomialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smn-ui/smn-ui.module */ "./src/app/smn-ui/smn-ui.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _distribuicao_binomial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distribuicao-binomial.service */ "./src/app/main/distribuicao-binomial/distribuicao-binomial.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DistribuicaoBinomialComponent = /** @class */ (function () {
    function DistribuicaoBinomialComponent(element, toolbarService, _location, binomialService) {
        this.element = element;
        this.toolbarService = toolbarService;
        this._location = _location;
        this.binomialService = binomialService;
        this.info = {};
    }
    DistribuicaoBinomialComponent.prototype.ngOnInit = function () {
    };
    DistribuicaoBinomialComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(840);
        this.toolbarService.set('Distribuição Binomial');
    };
    DistribuicaoBinomialComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    DistribuicaoBinomialComponent.prototype.onSubmit = function (form, values) {
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        this.response = this.binomialService.calculate(values.totalProb, values.totalSucess, values.probSucess, values.probFracasso, values.pelomenos, values.maximo);
    };
    DistribuicaoBinomialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-distribuicao-binomial',
            template: __webpack_require__(/*! ./distribuicao-binomial.component.html */ "./src/app/main/distribuicao-binomial/distribuicao-binomial.component.html"),
            styles: [__webpack_require__(/*! ./distribuicao-binomial.component.scss */ "./src/app/main/distribuicao-binomial/distribuicao-binomial.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _distribuicao_binomial_service__WEBPACK_IMPORTED_MODULE_3__["DistribuicaoBinomialService"]])
    ], DistribuicaoBinomialComponent);
    return DistribuicaoBinomialComponent;
}());



/***/ }),

/***/ "./src/app/main/distribuicao-binomial/distribuicao-binomial.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/distribuicao-binomial/distribuicao-binomial.service.ts ***!
  \*****************************************************************************/
/*! exports provided: DistribuicaoBinomialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuicaoBinomialService", function() { return DistribuicaoBinomialService; });
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

var DistribuicaoBinomialService = /** @class */ (function () {
    function DistribuicaoBinomialService() {
    }
    DistribuicaoBinomialService.prototype.calculate = function (n, k, p, q, pelomenos, maximo) {
        return {
            probSucess: this.probSucess(p, q),
            probFracasso: this.probFracasso(p, q),
            fatorial: this.fatorial(n, k),
            probabilidadeTotal: this.probabilidadeTotal(n, k, p, q),
            fatorialp: this.fatorialP(n, pelomenos),
            pelomenos: this.pelomenos(pelomenos, n, p, q),
            fatorialm: this.fatorialM(n, maximo),
            maximo: this.maximo(maximo, n, p, q)
        };
    };
    DistribuicaoBinomialService.prototype.probabilidadeTotal = function (n, k, p, q) {
        var probabilidade = (this.fatorial(n, k)) * (Math.pow(this.probSucess(p, q), k)) * (Math.pow(this.probFracasso(p, q), n - k));
        return probabilidade;
    };
    DistribuicaoBinomialService.prototype.pelomenos = function (pelomenos, n, p, q) {
        var probP = 0;
        while (pelomenos <= n) {
            probP += (this.fatorialP(n, pelomenos)) * (Math.pow(this.probSucess(p, q), pelomenos)) * (Math.pow(this.probFracasso(p, q), n - pelomenos));
            pelomenos++;
        }
        return probP;
    };
    DistribuicaoBinomialService.prototype.maximo = function (maximo, n, p, q) {
        var probM = 0;
        while (maximo >= 0) {
            probM += (this.fatorialP(n, maximo)) * (Math.pow(this.probSucess(p, q), maximo)) * (Math.pow(this.probFracasso(p, q), n - maximo));
            maximo--;
        }
        return probM;
    };
    // Fatoriais
    DistribuicaoBinomialService.prototype.fatorialM = function (n, maximo) {
        var fatN = n;
        var fatK = maximo;
        var fatNK = (n - maximo);
        var fatorialNK = (n - maximo);
        if (n < 0 || maximo < 0 || fatNK < 0) {
            return -1;
        }
        else if (n == 0 || maximo == 0 || fatNK == 0) {
            return 1;
        }
        while (n-- > 2) {
            fatN *= n;
        }
        while (maximo-- > 2) {
            fatK *= maximo;
        }
        while (fatNK-- > 2) {
            fatorialNK *= fatNK;
        }
        return (fatN / (fatK * fatorialNK));
    };
    DistribuicaoBinomialService.prototype.fatorialP = function (n, pelomenos) {
        var fatN = n;
        var fatK = pelomenos;
        var fatNK = (n - pelomenos);
        var fatorialNK = (n - pelomenos);
        if (n < 0 || pelomenos < 0 || fatNK < 0) {
            return -1;
        }
        else if (n == 0 || pelomenos == 0 || fatNK == 0) {
            return 1;
        }
        while (n-- > 2) {
            fatN *= n;
        }
        while (pelomenos-- > 2) {
            fatK *= pelomenos;
        }
        while (fatNK-- > 2) {
            fatorialNK *= fatNK;
        }
        return (fatN / (fatK * fatorialNK));
    };
    DistribuicaoBinomialService.prototype.fatorial = function (n, k) {
        var fatN = n;
        var fatK = k;
        var fatNK = (n - k);
        var fatorialNK = (n - k);
        if (n < 0 || k < 0 || fatNK < 0) {
            return -1;
        }
        else if (n == 0 || k == 0 || fatNK == 0) {
            return 1;
        }
        while (n-- > 2) {
            fatN *= n;
        }
        while (k-- > 2) {
            fatK *= k;
        }
        while (fatNK-- > 2) {
            fatorialNK *= fatNK;
        }
        return (fatN / (fatK * fatorialNK));
    };
    // prob(n, k, p, q) {
    // }
    DistribuicaoBinomialService.prototype.probSucess = function (p, q) {
        return (p / (p + q));
    };
    DistribuicaoBinomialService.prototype.probFracasso = function (p, q) {
        return (q / (p + q));
    };
    DistribuicaoBinomialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DistribuicaoBinomialService);
    return DistribuicaoBinomialService;
}());



/***/ }),

/***/ "./src/app/main/distribuicao-nominal/distribuicao-nominal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/distribuicao-nominal/distribuicao-nominal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\n  <ui-card class=\"elevate-on-toolbar\">\n    <ui-toolbar class=\"flat\">\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\n        <i class=\"material-icons\">arrow_back</i>\n      </button>\n      <span class=\"title\">Distribuição Nominal</span>\n    </ui-toolbar>\n    <ui-card-content>\n      <form #form=\"ngForm\" class=\"ui-validate on-dirty on-submit\">\n        <div class=\"ui-flex-container break-on-s840\">\n          <ui-input-container>\n            <input id=\"media\" #inputMedia=\"ngModel\" type=\"number\" [(ngModel)]=\"info.media\" uiInput name=\"media\"\n                   required>\n            <label for=\"media\">Média</label>\n            <div class=\"ui-messages\">\n              <div *ngIf=\"inputMedia.errors && inputMedia.dirty\">\n                <div class=\"ui-message error\" [hidden]=\"!inputMedia.pristine && !inputMedia.errors.required\">\n                  Digite a média\n                </div>\n              </div>\n            </div>\n          </ui-input-container>\n          <ui-input-container>\n            <input id=\"dv\" #inputDV=\"ngModel\" type=\"number\" [(ngModel)]=\"info.dv\" uiInput name=\"dv\" required>\n            <label for=\"dv\">Desvio padrão</label>\n            <div class=\"ui-messages\">\n              <div *ngIf=\"inputDV.errors && inputDV.dirty\">\n                <div class=\"ui-message error\" [hidden]=\"!inputDV.pristine && !inputDV.errors.required\">\n                  Digite o desvio padrão\n                </div>\n              </div>\n            </div>\n          </ui-input-container>\n        </div>\n\n        <div class=\"ui-flex-container break-on-s840\">\n          <ui-input-container>\n            <ui-select id=\"type\"\n                       #inputType=\"ngModel\"\n                       name=\"medidaSeparatriz\"\n                       [(ngModel)]=\"info.type\"\n                       [options]=\"selectTypes\"\n                       value=\"id\" label=\"nome\"\n                       uiInput required></ui-select>\n            <label for=\"type\">Tipo</label>\n            <div class=\"ui-messages\">\n              <div *ngIf=\"inputType.errors && inputType.dirty\">\n                <div class=\"ui-message error\" [hidden]=\"!inputType.pristine && !inputType.errors.required\">\n                  Selecione um tipo de intervalo\n                </div>\n              </div>\n            </div>\n          </ui-input-container>\n          <ui-input-container *ngIf=\"info.type === 1 || info.type === 3\">\n            <input id=\"menor\" #inputMenor=\"ngModel\" type=\"number\" [(ngModel)]=\"info.menor\" uiInput name=\"menor\"\n                   required>\n            <label for=\"menor\">Menor que</label>\n            <div class=\"ui-messages\">\n              <div *ngIf=\"inputMenor.errors && inputMenor.dirty\">\n                <div class=\"ui-message error\" [hidden]=\"!inputMenor.pristine && !inputMenor.errors.required\">\n                  Digite o menor valor a ser pesquisado\n                </div>\n              </div>\n            </div>\n          </ui-input-container>\n          <ui-input-container *ngIf=\"info.type === 2 || info.type === 3\">\n            <input id=\"maior\" #inputMaior=\"ngModel\" type=\"number\" [(ngModel)]=\"info.maior\" uiInput name=\"maior\"\n                   required>\n            <label for=\"maior\">Maior que</label>\n            <div class=\"ui-messages\">\n              <div *ngIf=\"inputMaior.errors && inputMaior.dirty\">\n                <div class=\"ui-message error\" [hidden]=\"!inputMaior.pristine && !inputMaior.errors.required\">\n                  Digite o maior valor a ser pesquisado\n                </div>\n              </div>\n            </div>\n          </ui-input-container>\n        </div>\n      </form>\n    </ui-card-content>\n\n    <div *ngIf=\"info && info.response\">\n      <ui-card-title>Resultado</ui-card-title>\n      <ui-card-content>\n        Valor: {{ info.response.message ? info.response.message : info.response | percent }}\n      </ui-card-content>\n    </div>\n  </ui-card>\n\n  <div class=\"ui-fab-container\">\n    <a class=\"ui-button accent fab\" uiRipple (click)=\"onSubmit(form)\">\n      <i class=\"material-icons\">send</i>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/distribuicao-nominal/distribuicao-nominal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/distribuicao-nominal/distribuicao-nominal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/distribuicao-nominal/distribuicao-nominal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/distribuicao-nominal/distribuicao-nominal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DistribuicaoNominalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuicaoNominalComponent", function() { return DistribuicaoNominalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _distribuicao_nominal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distribuicao-nominal.service */ "./src/app/main/distribuicao-nominal/distribuicao-nominal.service.ts");
/* harmony import */ var _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../smn-ui/smn-ui.module */ "./src/app/smn-ui/smn-ui.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DistribuicaoNominalComponent = /** @class */ (function () {
    function DistribuicaoNominalComponent(distribuicaoNominalService, element, toolbarService, _location) {
        this.distribuicaoNominalService = distribuicaoNominalService;
        this.element = element;
        this.toolbarService = toolbarService;
        this._location = _location;
        this.selectTypes = [
            { id: 1, nome: 'Menor que' },
            { id: 2, nome: 'Maior que' },
            { id: 3, nome: 'Intervalo' }
        ];
        this.info = {};
    }
    DistribuicaoNominalComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(840);
        this.toolbarService.set('Distribuição nominal');
    };
    DistribuicaoNominalComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    DistribuicaoNominalComponent.prototype.onSubmit = function (form) {
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_2__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        if (this.info.type === 1) {
            this.info.response = this.distribuicaoNominalService.calculate(this.info.menor, null, this.info.media, this.info.dv);
        }
        else if (this.info.type === 2) {
            this.info.response = this.distribuicaoNominalService.calculate(null, this.info.maior, this.info.media, this.info.dv);
        }
        else if (this.info.type === 3) {
            this.info.response = this.distribuicaoNominalService.calculate(this.info.menor, this.info.maior, this.info.media, this.info.dv);
        }
    };
    DistribuicaoNominalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-distribuicao-nominal',
            template: __webpack_require__(/*! ./distribuicao-nominal.component.html */ "./src/app/main/distribuicao-nominal/distribuicao-nominal.component.html"),
            styles: [__webpack_require__(/*! ./distribuicao-nominal.component.scss */ "./src/app/main/distribuicao-nominal/distribuicao-nominal.component.scss")]
        }),
        __metadata("design:paramtypes", [_distribuicao_nominal_service__WEBPACK_IMPORTED_MODULE_1__["DistribuicaoNominalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], DistribuicaoNominalComponent);
    return DistribuicaoNominalComponent;
}());



/***/ }),

/***/ "./src/app/main/distribuicao-nominal/distribuicao-nominal.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/distribuicao-nominal/distribuicao-nominal.module.ts ***!
  \**************************************************************************/
/*! exports provided: DistribuicaoNominalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuicaoNominalModule", function() { return DistribuicaoNominalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _distribuicao_nominal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distribuicao-nominal.component */ "./src/app/main/distribuicao-nominal/distribuicao-nominal.component.ts");
/* harmony import */ var _distribuicao_nominal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distribuicao-nominal.service */ "./src/app/main/distribuicao-nominal/distribuicao-nominal.service.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DistribuicaoNominalModule = /** @class */ (function () {
    function DistribuicaoNominalModule() {
    }
    DistribuicaoNominalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_distribuicao_nominal_component__WEBPACK_IMPORTED_MODULE_1__["DistribuicaoNominalComponent"]],
            providers: [_distribuicao_nominal_service__WEBPACK_IMPORTED_MODULE_2__["DistribuicaoNominalService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DistribuicaoNominalModule);
    return DistribuicaoNominalModule;
}());



/***/ }),

/***/ "./src/app/main/distribuicao-nominal/distribuicao-nominal.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/distribuicao-nominal/distribuicao-nominal.service.ts ***!
  \***************************************************************************/
/*! exports provided: DistribuicaoNominalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuicaoNominalService", function() { return DistribuicaoNominalService; });
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

var DistribuicaoNominalService = /** @class */ (function () {
    function DistribuicaoNominalService() {
        this.TABLEPOSITIVA = [
            [0.5000, 0.5040, 0.5080, 0.5120, 0.5160, 0.5199, 0.5239, 0.5279, 0.5319, 0.5359],
            [0.5398, 0.5438, 0.5478, 0.5517, 0.5557, 0.5596, 0.5636, 0.5675, 0.5714, 0.5753],
            [0.5793, 0.5832, 0.5871, 0.5910, 0.5948, 0.5987, 0.6026, 0.6064, 0.6103, 0.6141],
            [0.6179, 0.6217, 0.6255, 0.6293, 0.6331, 0.6368, 0.6406, 0.6443, 0.6480, 0.6517],
            [0.6554, 0.6591, 0.6628, 0.6664, 0.6700, 0.6736, 0.6772, 0.6808, 0.6844, 0.6879],
            [0.6915, 0.6950, 0.6985, 0.7019, 0.7054, 0.7088, 0.7123, 0.7157, 0.7190, 0.7224],
            [0.7257, 0.7291, 0.7324, 0.7357, 0.7389, 0.7422, 0.7454, 0.7486, 0.7517, 0.7549],
            [0.7580, 0.7611, 0.7642, 0.7673, 0.7704, 0.7734, 0.7764, 0.7794, 0.7823, 0.7852],
            [0.7881, 0.7910, 0.7939, 0.7967, 0.7995, 0.8023, 0.8051, 0.8078, 0.8106, 0.8133],
            [0.8159, 0.8186, 0.8212, 0.8238, 0.8264, 0.8289, 0.8315, 0.8340, 0.8365, 0.8389],
            [0.8413, 0.8438, 0.8461, 0.8485, 0.8508, 0.8531, 0.8554, 0.8577, 0.8599, 0.8621],
            [0.8643, 0.8665, 0.8686, 0.8708, 0.8729, 0.8749, 0.8770, 0.8790, 0.8810, 0.8830],
            [0.8849, 0.8869, 0.8888, 0.8907, 0.8925, 0.8944, 0.8962, 0.8980, 0.8997, 0.9015],
            [0.9032, 0.9049, 0.9066, 0.9082, 0.9099, 0.9115, 0.9131, 0.9147, 0.9162, 0.9177],
            [0.9192, 0.9207, 0.9222, 0.9236, 0.9251, 0.9265, 0.9279, 0.9292, 0.9306, 0.9319],
            [0.9332, 0.9345, 0.9357, 0.9370, 0.9382, 0.9394, 0.9406, 0.9418, 0.9429, 0.9441],
            [0.9452, 0.9463, 0.9474, 0.9484, 0.9495, 0.9505, 0.9515, 0.9525, 0.9535, 0.9545],
            [0.9554, 0.9564, 0.9573, 0.9582, 0.9591, 0.9599, 0.9608, 0.9616, 0.9625, 0.9633],
            [0.9641, 0.9649, 0.9656, 0.9664, 0.9671, 0.9678, 0.9686, 0.9693, 0.9699, 0.9706],
            [0.9713, 0.9719, 0.9726, 0.9732, 0.9738, 0.9744, 0.9750, 0.9756, 0.9761, 0.9767],
            [0.9772, 0.9778, 0.9783, 0.9788, 0.9793, 0.9798, 0.9803, 0.9808, 0.9812, 0.9817],
            [0.9821, 0.9826, 0.9830, 0.9834, 0.9838, 0.9842, 0.9846, 0.9850, 0.9854, 0.9857],
            [0.9861, 0.9864, 0.9868, 0.9871, 0.9875, 0.9878, 0.9881, 0.9884, 0.9887, 0.9890],
            [0.9893, 0.9896, 0.9898, 0.9901, 0.9904, 0.9906, 0.9909, 0.9911, 0.9913, 0.9916],
            [0.9918, 0.9920, 0.9922, 0.9925, 0.9927, 0.9929, 0.9931, 0.9932, 0.9934, 0.9936],
            [0.9938, 0.9940, 0.9941, 0.9943, 0.9945, 0.9946, 0.9948, 0.9949, 0.9951, 0.9952],
            [0.9953, 0.9955, 0.9956, 0.9957, 0.9959, 0.9960, 0.9961, 0.9962, 0.9963, 0.9964],
            [0.9965, 0.9966, 0.9967, 0.9968, 0.9969, 0.9970, 0.9971, 0.9972, 0.9973, 0.9974],
            [0.9974, 0.9975, 0.9976, 0.9977, 0.9977, 0.9978, 0.9979, 0.9979, 0.9980, 0.9981],
            [0.9981, 0.9982, 0.9982, 0.9983, 0.9984, 0.9984, 0.9985, 0.9985, 0.9986, 0.9986],
            [0.9987, 0.9987, 0.9987, 0.9988, 0.9988, 0.9989, 0.9989, 0.9989, 0.9990, 0.9990],
            [0.9990, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9992, 0.9992, 0.9993, 0.9993],
            [0.9993, 0.9993, 0.9994, 0.9994, 0.9994, 0.9994, 0.9994, 0.9995, 0.9995, 0.9995],
            [0.9995, 0.9995, 0.9995, 0.9996, 0.9996, 0.9996, 0.9996, 0.9996, 0.9996, 0.9997],
            [0.9997, 0.9997, 0.9997, 0.9997, 0.9997, 0.9997, 0.9997, 0.9997, 0.9997, 0.9998],
            [0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998],
            [0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999],
            [0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999],
            [0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999],
            [1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000]
        ];
        this.TABLENEGATIVA = [
            [0.5000, 0.4960, 0.4920, 0.4880, 0.4840, 0.4801, 0.4761, 0.4721, 0.4681, 0.4641],
            [0.4602, 0.4562, 0.4522, 0.4483, 0.4443, 0.4404, 0.4364, 0.4325, 0.4286, 0.4247],
            [0.4207, 0.4168, 0.4129, 0.4090, 0.4052, 0.4013, 0.3974, 0.3936, 0.3897, 0.3859],
            [0.3821, 0.3783, 0.3745, 0.3707, 0.3669, 0.3632, 0.3594, 0.3557, 0.3520, 0.3483],
            [0.3446, 0.3409, 0.3372, 0.3336, 0.3300, 0.3264, 0.3228, 0.3192, 0.3156, 0.3121],
            [0.3085, 0.3050, 0.3015, 0.2981, 0.2946, 0.2912, 0.2877, 0.2843, 0.2810, 0.2776],
            [0.2743, 0.2709, 0.2676, 0.2643, 0.2611, 0.2578, 0.2546, 0.2514, 0.2483, 0.2451],
            [0.2420, 0.2389, 0.2358, 0.2327, 0.2296, 0.2266, 0.2236, 0.2206, 0.2177, 0.2148],
            [0.2119, 0.2090, 0.2061, 0.2033, 0.2005, 0.1977, 0.1949, 0.1922, 0.1894, 0.1867],
            [0.1841, 0.1814, 0.1788, 0.1762, 0.1736, 0.1711, 0.1685, 0.1660, 0.1635, 0.1611],
            [0.1587, 0.1562, 0.1539, 0.1515, 0.1492, 0.1469, 0.1446, 0.1423, 0.1401, 0.1379],
            [0.1357, 0.1335, 0.1314, 0.1292, 0.1271, 0.1251, 0.1230, 0.1210, 0.1190, 0.1170],
            [0.1151, 0.1131, 0.1112, 0.1093, 0.1075, 0.1056, 0.1038, 0.1020, 0.1003, 0.0985],
            [0.0968, 0.0951, 0.0934, 0.0918, 0.0901, 0.0885, 0.0869, 0.0853, 0.0838, 0.0823],
            [0.0808, 0.0793, 0.0778, 0.0764, 0.0749, 0.0735, 0.0721, 0.0708, 0.0694, 0.0681],
            [0.0668, 0.0655, 0.0643, 0.0630, 0.0618, 0.0606, 0.0594, 0.0582, 0.0571, 0.0559],
            [0.0548, 0.0537, 0.0526, 0.0516, 0.0505, 0.0495, 0.0485, 0.0475, 0.0465, 0.0455],
            [0.0446, 0.0436, 0.0427, 0.0418, 0.0409, 0.0401, 0.0392, 0.0384, 0.0375, 0.0367],
            [0.0359, 0.0351, 0.0344, 0.0336, 0.0329, 0.0322, 0.0314, 0.0307, 0.0301, 0.0294],
            [0.0287, 0.0281, 0.0274, 0.0268, 0.0262, 0.0256, 0.0250, 0.0244, 0.0239, 0.0233],
            [0.0228, 0.0222, 0.0217, 0.0212, 0.0207, 0.0202, 0.0197, 0.0192, 0.0188, 0.0183],
            [0.0179, 0.0174, 0.0170, 0.0166, 0.0162, 0.0158, 0.0154, 0.0150, 0.0146, 0.0143],
            [0.0139, 0.0136, 0.0132, 0.0129, 0.0125, 0.0122, 0.0119, 0.0116, 0.0113, 0.0110],
            [0.0107, 0.0104, 0.0102, 0.0099, 0.0096, 0.0094, 0.0091, 0.0089, 0.0087, 0.0084],
            [0.0082, 0.0080, 0.0078, 0.0075, 0.0073, 0.0071, 0.0069, 0.0068, 0.0066, 0.0064],
            [0.0062, 0.0060, 0.0059, 0.0057, 0.0055, 0.0054, 0.0052, 0.0051, 0.0049, 0.0048],
            [0.0047, 0.0045, 0.0044, 0.0043, 0.0041, 0.0040, 0.0039, 0.0038, 0.0037, 0.0036],
            [0.0035, 0.0034, 0.0033, 0.0032, 0.0031, 0.0030, 0.0029, 0.0028, 0.0027, 0.0026],
            [0.0026, 0.0025, 0.0024, 0.0023, 0.0023, 0.0022, 0.0021, 0.0021, 0.0020, 0.0019],
            [0.0019, 0.0018, 0.0018, 0.0017, 0.0016, 0.0016, 0.0015, 0.0015, 0.0014, 0.0014],
            [0.0013, 0.0013, 0.0013, 0.0012, 0.0012, 0.0011, 0.0011, 0.0011, 0.0010, 0.0010],
            [0.0010, 0.0009, 0.0009, 0.0009, 0.0008, 0.0008, 0.0008, 0.0008, 0.0007, 0.0007],
            [0.0007, 0.0007, 0.0006, 0.0006, 0.0006, 0.0006, 0.0006, 0.0005, 0.0005, 0.0005],
            [0.0005, 0.0005, 0.0005, 0.0004, 0.0004, 0.0004, 0.0004, 0.0004, 0.0004, 0.0003],
            [0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0002],
            [0.0002, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002],
            [0.0002, 0.0002, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001],
            [0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001],
            [0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001],
            [0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000]
        ];
    }
    DistribuicaoNominalService.prototype.calculate = function (x1, x2, media, dv) {
        if (x1 !== null && x2 !== null) {
            var inicial = this.calculateP(x1, media, dv);
            var final = this.calculateP(x2, media, dv);
            return final - inicial;
        }
        else if (x1 !== null && x2 === null) {
            var inicial = this.calculateP(x1, media, dv);
            return inicial;
        }
        else if (x2 !== null && x1 === null) {
            var final = this.calculateP(x2, media, dv);
            return 1 - final;
        }
    };
    DistribuicaoNominalService.prototype.tranform = function (value) {
        var isNegative = value < 0;
        var valorAproximado = isNegative ? value.toFixed(2) * -1 : value.toFixed(2);
        var first = null;
        try {
            first = valorAproximado.toString().split('.')[0] + '.' + valorAproximado.toString().split('.')[1][0];
        }
        catch (e) {
            return new Error('Dados invalidos');
        }
        var second = null;
        try {
            second = valorAproximado.toString().split('.')[1][1];
        }
        catch (e) {
            second = 0;
        }
        var line = this.findLine(first, isNegative);
        return this.findValueInLine(line, second);
    };
    DistribuicaoNominalService.prototype.findLine = function (value, isNegative) {
        value *= 10;
        if (!isNegative) {
            return this.TABLEPOSITIVA[value];
        }
        else {
            return this.TABLENEGATIVA[value];
        }
    };
    DistribuicaoNominalService.prototype.findValueInLine = function (line, value) {
        try {
            return value ? line[value] : line[0];
        }
        catch (e) {
            return new Error('Valores invalidos');
        }
    };
    DistribuicaoNominalService.prototype.calculateZ = function (x, media, dv) {
        return (x - media) / dv;
    };
    DistribuicaoNominalService.prototype.calculateP = function (x, media, dv) {
        var value = this.calculateZ(x, media, dv);
        return this.tranform(value);
    };
    DistribuicaoNominalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DistribuicaoNominalService);
    return DistribuicaoNominalService;
}());



/***/ }),

/***/ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\r\n  <ui-card class=\"elevate-on-toolbar\">\r\n    <ui-toolbar class=\"flat\">\r\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n      <span class=\"title\">Distribuição uniforme</span>\r\n    </ui-toolbar>\r\n    <ui-card-content>\r\n      <form #form=\"ngForm\" class=\"ui-validate on-dirty on-submit\">\r\n\r\n        <div class=\"ui-flex-container break-on-s840\">\r\n          <ui-input-container>\r\n            <input id=\"intervaloA\" #intervaloA=\"ngModel\" type=\"number\" [(ngModel)]=\"info.intervaloA\" uiInput name=\"intervaloA\" required>\r\n            <label for=\"intervaloA\">Intervalo A</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"intervaloA.errors && intervaloA.dirty\">\r\n                <div class=\"ui-message error\" [hidden]=\"!intervaloA.pristine && !intervaloA.errors.required\">\r\n                  Digite o intervalo A\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n          <ui-input-container>\r\n            <input id=\"intervaloB\" #intervaloB=\"ngModel\" type=\"number\" [(ngModel)]=\"info.intervaloB\" uiInput name=\"intervaloB\" required>\r\n            <label for=\"intervaloB\">Intervalo B</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"intervaloB.errors && intervaloB.dirty\">\r\n                <div class=\"ui-message error\" [hidden]=\"!intervaloB.pristine && !intervaloB.errors.required\">\r\n                  Digite o intervalo B\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n        </div>\r\n\r\n        <div class=\"ui-flex-container break-on-s840\">\r\n          <ui-input-container>\r\n            <input id=\"maior\" #maior=\"ngModel\" type=\"number\" [(ngModel)]=\"info.maior\" uiInput name=\"maior\" required>\r\n            <label for=\"maior\">Maior que</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"maior.errors && maior.dirty\">\r\n                <div class=\"ui-message error\" [hidden]=\"!maior.pristine && !maior.errors.required\">\r\n                  Digite o \"maior que\"\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n          <ui-input-container>\r\n            <input id=\"menor\" #menor=\"ngModel\" type=\"number\" [(ngModel)]=\"info.menor\" uiInput name=\"menor\" required>\r\n            <label for=\"menor\">Menor que</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"menor.errors && menor.dirty\">\r\n                <div class=\"ui-message error\" [hidden]=\"!menor.pristine && !menor.errors.required\">\r\n                  Digite o \"menor que\"\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n        </div>\r\n\r\n      </form>\r\n    </ui-card-content>\r\n\r\n    <div *ngIf=\"response\">\r\n      <ui-card-title>Resultado</ui-card-title>\r\n      <ui-card-content>\r\n        <span>Media: {{ response.media }}</span><br>\r\n        <span>CV: {{ response.CV }}</span><br>\r\n        <span>DP: {{ response.DP }}</span><br>\r\n        <span>Probalidade: {{ response.probalidade }}</span><br>\r\n      </ui-card-content>\r\n    </div>\r\n\r\n  </ui-card>\r\n\r\n  <div class=\"ui-fab-container\">\r\n    <a class=\"ui-button accent fab\" uiRipple (click)=\"onSubmit(form, info)\">\r\n      <i class=\"material-icons\">send</i>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DistribuicaoUniformeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuicaoUniformeComponent", function() { return DistribuicaoUniformeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smn-ui/smn-ui.module */ "./src/app/smn-ui/smn-ui.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _distribuicao_uniforme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distribuicao-uniforme.service */ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DistribuicaoUniformeComponent = /** @class */ (function () {
    function DistribuicaoUniformeComponent(element, toolbarService, _location, uniformeService) {
        this.element = element;
        this.toolbarService = toolbarService;
        this._location = _location;
        this.uniformeService = uniformeService;
        this.info = {};
    }
    DistribuicaoUniformeComponent.prototype.ngOnInit = function () {
    };
    DistribuicaoUniformeComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(840);
        this.toolbarService.set('Distribuição uniforme');
    };
    DistribuicaoUniformeComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    DistribuicaoUniformeComponent.prototype.onSubmit = function (form, values) {
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        this.response = this.uniformeService.calculate(values.intervaloA, values.intervaloB, values.menor, values.maior);
    };
    DistribuicaoUniformeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-distribuicao-uniforme',
            template: __webpack_require__(/*! ./distribuicao-uniforme.component.html */ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.html"),
            styles: [__webpack_require__(/*! ./distribuicao-uniforme.component.scss */ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _distribuicao_uniforme_service__WEBPACK_IMPORTED_MODULE_3__["DistribuicaoUniformeService"]])
    ], DistribuicaoUniformeComponent);
    return DistribuicaoUniformeComponent;
}());



/***/ }),

/***/ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/distribuicao-uniforme/distribuicao-uniforme.service.ts ***!
  \*****************************************************************************/
/*! exports provided: DistribuicaoUniformeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuicaoUniformeService", function() { return DistribuicaoUniformeService; });
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

var DistribuicaoUniformeService = /** @class */ (function () {
    function DistribuicaoUniformeService() {
    }
    DistribuicaoUniformeService.prototype.calculate = function (a, b, iA, iB) {
        return {
            media: this.media(a, b),
            DP: this.desvioPadrao(a, b),
            CV: this.CV(this.desvioPadrao(a, b), this.media(a, b)),
            probalidade: this.probalidade(a, b, iA - iB)
        };
    };
    DistribuicaoUniformeService.prototype.media = function (a, b) {
        return (b + a) / 2;
    };
    DistribuicaoUniformeService.prototype.desvioPadrao = function (a, b) {
        return Math.sqrt(Math.pow(b - a, 2) / 12);
    };
    DistribuicaoUniformeService.prototype.CV = function (DP, media) {
        return (DP / media);
    };
    DistribuicaoUniformeService.prototype.probalidade = function (a, b, valueInterval) {
        return -((1 / (a - b)) * valueInterval);
    };
    DistribuicaoUniformeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DistribuicaoUniformeService);
    return DistribuicaoUniformeService;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s840\">\n  <ui-card class=\"elevate-on-toolbar\">\n    <ui-card-title>Software de estatistica</ui-card-title>\n    <ui-card-content>\n      Trabalho multidisciplinar do 3° semestre do curso de ADS da Fatec Thomaz Novelino.\n      <br><br>\n      <div style=\"text-align: right;\">Profa: Maria Luísa Cervi Uzun</div>\n    </ui-card-content>\n  </ui-card>\n</div>\n"

/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smn_ui_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smn-ui/toolbar/toolbar.service */ "./src/app/smn-ui/toolbar/toolbar.service.ts");
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
    function HomeComponent(toolbarService) {
        this.toolbarService = toolbarService;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(840);
        this.toolbarService.set('Home');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_smn_ui_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smn_ui_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../smn-ui/toolbar/toolbar.service */ "./src/app/smn-ui/toolbar/toolbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(toolbarService) {
        this.toolbarService = toolbarService;
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateExtendedToolbar(480);
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_smn_ui_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics.service */ "./src/app/main/statistics.service.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/main/dashboard/dashboard.module.ts");
/* harmony import */ var _data_insertion_data_insertion_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-insertion/data-insertion.module */ "./src/app/main/data-insertion/data-insertion.module.ts");
/* harmony import */ var _distribuicao_uniforme_distribuicao_uniforme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./distribuicao-uniforme/distribuicao-uniforme.component */ "./src/app/main/distribuicao-uniforme/distribuicao-uniforme.component.ts");
/* harmony import */ var _correlacao_regressao_correlacao_regressao_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./correlacao-regressao/correlacao-regressao.module */ "./src/app/main/correlacao-regressao/correlacao-regressao.module.ts");
/* harmony import */ var _distribuicao_binomial_distribuicao_binomial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./distribuicao-binomial/distribuicao-binomial.component */ "./src/app/main/distribuicao-binomial/distribuicao-binomial.component.ts");
/* harmony import */ var _distribuicao_nominal_distribuicao_nominal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./distribuicao-nominal/distribuicao-nominal.module */ "./src/app/main/distribuicao-nominal/distribuicao-nominal.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
                _data_insertion_data_insertion_module__WEBPACK_IMPORTED_MODULE_6__["DataInsertionModule"],
                _correlacao_regressao_correlacao_regressao_module__WEBPACK_IMPORTED_MODULE_8__["CorrelacaoRegressaoModule"],
                _distribuicao_nominal_distribuicao_nominal_module__WEBPACK_IMPORTED_MODULE_10__["DistribuicaoNominalModule"]
            ],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _distribuicao_uniforme_distribuicao_uniforme_component__WEBPACK_IMPORTED_MODULE_7__["DistribuicaoUniformeComponent"], _distribuicao_binomial_distribuicao_binomial_component__WEBPACK_IMPORTED_MODULE_9__["DistribuicaoBinomialComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
            exports: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]],
            providers: [_statistics_service__WEBPACK_IMPORTED_MODULE_2__["StatisticsService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/statistics.service.ts":
/*!********************************************!*\
  !*** ./src/app/main/statistics.service.ts ***!
  \********************************************/
/*! exports provided: StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _functions_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/utils.service */ "./src/app/functions/utils.service.ts");
/* harmony import */ var _functions_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/table.service */ "./src/app/functions/table.service.ts");
/* harmony import */ var _functions_desvio_padrao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/desvio-padrao.service */ "./src/app/functions/desvio-padrao.service.ts");
/* harmony import */ var _functions_data_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/data-groups.service */ "./src/app/functions/data-groups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatisticsService = /** @class */ (function () {
    function StatisticsService(utils, table, desvioPadraoService, dataGroups) {
        this.utils = utils;
        this.table = table;
        this.desvioPadraoService = desvioPadraoService;
        this.dataGroups = dataGroups;
        this.response = {};
    }
    /*
      0 - Quali nominal
      1 - Quali ordinal
  
      2 - Quanti discreta
      3 - Quanti continua
    */
    StatisticsService.prototype.getDados = function () {
        return this.response;
    };
    StatisticsService.prototype.set = function (object) {
        this.response = object;
    };
    StatisticsService.prototype.get = function () {
        return this.response;
    };
    StatisticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_functions_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"],
            _functions_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"],
            _functions_desvio_padrao_service__WEBPACK_IMPORTED_MODULE_3__["DesvioPadraoService"],
            _functions_data_groups_service__WEBPACK_IMPORTED_MODULE_4__["DataGroupsService"]])
    ], StatisticsService);
    return StatisticsService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smn-ui/smn-ui.module */ "./src/app/smn-ui/smn-ui.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_2__["SMNUIModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            ],
            providers: [_smn_ui_smn_ui_module__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"]],
            bootstrap: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/smn-ui/autocomplete/autocomplete.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/autocomplete/autocomplete.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-card class=\"suggestions\" tabindex=\"-1\" [ngClass]=\"{'has-secondary': !!secondary}\" (uiInfiniteLoad)=\"loadMoreEmit()\">\r\n    <div class=\"suggestions-wrap\">\r\n        <div class=\"ui-progress\" [ngClass]=\"{'hide': !loading, 'accent': accentClass}\" style=\"position: absolute\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ul class=\"ui-list\">\r\n            <li class=\"multi-line\" uiRipple\r\n                *ngFor=\"let item of list; let index = index\"\r\n                (click)=\"selectItem(item)\"\r\n                [ngClass]=\"{'focused': index === focusedIndex, 'accent': accentClass}\"\r\n                [style.transition-delay]=\"(index > 5 ? 0: 100 + (index * 50)) + 'ms'\">\r\n                <div class=\"lines\" *ngIf=\"secondary\">\r\n                    <div class=\"primary\">{{item[primary] || item[secondary]}}</div>\r\n                    <div class=\"secondary\">{{item[primary] ? item[secondary] : null}}</div>\r\n                </div>\r\n                <span *ngIf=\"!secondary\" class=\"primary\">{{item[primary] || item}}</span>\r\n            </li>\r\n            <li *ngIf=\"!list.length\" class=\"not-found\">\r\n                <span *ngIf=\"ngModel\">Nenhum registro encontrado para \"{{ngModel}}\"</span>\r\n                <span *ngIf=\"!ngModel\">Nenhum registro encontrado</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</ui-card>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/autocomplete/autocomplete.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/autocomplete/autocomplete.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  display: block; }\n:host .suggestions {\n    box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.20);\n    overflow-y: auto; }\n:host .suggestions .suggestions-wrap .ui-list {\n      padding: 0; }\n:host .suggestions .suggestions-wrap .ui-list .not-found, :host .suggestions .suggestions-wrap .ui-list .not-found span {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n/deep/ .wrap-autocomplete {\n  position: absolute;\n  z-index: 2;\n  transition: top 280ms, left 280ms; }\n/deep/ .wrap-autocomplete .overlay {\n    overflow: hidden; }\n/deep/ .wrap-autocomplete ui-autocomplete > .suggestions:not(.nothing) {\n    transition: max-height 280ms cubic-bezier(0.4, 0, 0.6, 1), opacity 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    z-index: 3;\n    max-height: 0; }\n/deep/ .wrap-autocomplete ui-autocomplete > .suggestions:not(.nothing) .ui-list li {\n      transition: opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n      transition: opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n      transition: opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), transform 280ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n      opacity: 0;\n      -webkit-transform: translateY(-8px);\n              transform: translateY(-8px); }\n/deep/ .wrap-autocomplete.open ui-autocomplete > .suggestions:not(.nothing) {\n    max-height: 240px;\n    -webkit-animation: hide-overflow 280ms cubic-bezier(0.4, 0, 0.6, 1);\n            animation: hide-overflow 280ms cubic-bezier(0.4, 0, 0.6, 1); }\n/deep/ .wrap-autocomplete.open ui-autocomplete > .suggestions:not(.nothing).has-secondary {\n      max-height: 370px; }\n/deep/ .wrap-autocomplete.open ui-autocomplete > .suggestions:not(.nothing) .ui-list li {\n      opacity: 1;\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n/deep/ .wrap-autocomplete:not(.open) ui-autocomplete > .suggestions:not(.nothing) {\n    overflow: hidden; }\n@-webkit-keyframes hide-overflow {\n  0% {\n    overflow: hidden; }\n  99.99% {\n    overflow: hidden; }\n  100% {\n    overflow: auto; } }\n@keyframes hide-overflow {\n  0% {\n    overflow: hidden; }\n  99.99% {\n    overflow: hidden; }\n  100% {\n    overflow: auto; } }\n/deep/ .wrap-dialog + .wrap-autocomplete {\n  z-index: 5; }\n"

/***/ }),

/***/ "./src/app/smn-ui/autocomplete/autocomplete.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/smn-ui/autocomplete/autocomplete.component.ts ***!
  \***************************************************************/
/*! exports provided: UiAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiAutocompleteComponent", function() { return UiAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiAutocompleteComponent = /** @class */ (function () {
    function UiAutocompleteComponent() {
    }
    UiAutocompleteComponent.prototype.selectItem = function (item) {
        this.selectChange.emit(item);
    };
    UiAutocompleteComponent.prototype.loadMoreEmit = function () {
        var _this = this;
        setTimeout(function () { return _this.loadMore.emit(); });
    };
    UiAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/smn-ui/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.scss */ "./src/app/smn-ui/autocomplete/autocomplete.component.scss")]
        })
    ], UiAutocompleteComponent);
    return UiAutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/autocomplete/autocomplete.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/smn-ui/autocomplete/autocomplete.directive.ts ***!
  \***************************************************************/
/*! exports provided: UiAutocompleteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiAutocompleteDirective", function() { return UiAutocompleteDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete.component */ "./src/app/smn-ui/autocomplete/autocomplete.component.ts");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiAutocompleteDirective = /** @class */ (function () {
    function UiAutocompleteDirective(componentFactoryResolver, applicationRef, injector, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.elementRef = elementRef;
        this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadMoreEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modelValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.requiredChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiAutocompleteDirective_1 = UiAutocompleteDirective;
    UiAutocompleteDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.selectChange.subscribe(function (item) {
            _this.ngModel = item[_this.primary] || item;
            _this.modelValue = _this.modelProperty && item && typeof item === 'object' ? item[_this.modelProperty] : item;
            _this.ngModelChange.emit(_this.ngModel);
            _this.modelValueChange.emit(_this.modelValue);
            if (_this.select) {
                _this.select(item);
            }
            _this.elementRef.nativeElement.blur();
            _this.close();
        });
    };
    UiAutocompleteDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__["UiWindowRef"].nativeWindow, 'click resize', function (e) {
            if (_this.componentRef) {
                if (!(_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].is(e.target, '.wrap-autocomplete') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].closest(e.target, '.wrap-autocomplete') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].is(e.target, '.overlay') || e.target === _this.elementRef.nativeElement)) {
                    _this.close();
                }
            }
        });
    };
    UiAutocompleteDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.ngModel && !changes.ngModel.firstChange && this.componentRef) {
            this.componentRef.instance.ngModel = changes.ngModel.currentValue;
        }
        if (changes.list && !changes.list.firstChange && this.componentRef) {
            this.componentRef.instance.list = changes.list.currentValue;
            setTimeout(function () {
                var position = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].position(_this.elementRef.nativeElement);
                var coordinate = {
                    x: position.left,
                    y: position.top + 1
                };
                _this.setPosition(coordinate, _this.componentElement);
            });
        }
        if (changes.loading && !changes.loading.firstChange && this.componentRef) {
            this.componentRef.instance.loading = changes.loading.currentValue;
        }
    };
    UiAutocompleteDirective.prototype.createComponent = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["UiAutocompleteComponent"]);
        this.componentRef = componentFactory.create(this.injector);
    };
    UiAutocompleteDirective.prototype.getComponentAsElement = function () {
        return this.componentRef.hostView.rootNodes[0];
    };
    UiAutocompleteDirective.prototype.setInstances = function (component, componentRef) {
        var keysComponent = ['ngModel', 'list', 'primary', 'secondary', 'selectChange', 'loading', 'accentClass', 'loadMore'];
        keysComponent.forEach(function (key) {
            componentRef.instance[key] = component[key];
        });
    };
    UiAutocompleteDirective.prototype.render = function (element, coordinate) {
        var _this = this;
        this.createWrapElement();
        this.wrapElement.appendChild(element);
        document.body.appendChild(this.wrapElement);
        setTimeout(function () {
            _this.setPosition(coordinate, element);
            _this.wrapElement.classList.add('open');
        });
    };
    UiAutocompleteDirective.prototype.createWrapElement = function () {
        this.wrapElement = document.createElement('div');
        this.wrapElement.classList.add('wrap-autocomplete');
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        if (this.themeClass) {
            this.wrapElement.classList.add(this.themeClass);
        }
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'top', 0);
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'left', 0);
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'visibility', 'hidden');
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'transition', 'none');
        this.wrapElement.appendChild(overlay);
    };
    UiAutocompleteDirective.prototype.setFocusIndex = function (index) {
        this.componentRef.instance.focusedIndex = index;
    };
    UiAutocompleteDirective.prototype.close = function () {
        var _this = this;
        if (this.wrapElement) {
            this.wrapElement.classList.remove('open');
            setTimeout(function () {
                if (_this.componentRef) {
                    _this.applicationRef.detachView(_this.componentRef.hostView);
                    _this.componentRef = null;
                    _this.wrapElement.remove();
                }
            }, 280);
        }
    };
    UiAutocompleteDirective.prototype.initialize = function () {
        this.focusedIndex = undefined;
        this.accentClass = this.elementRef.nativeElement.classList.contains('accent');
        var position = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].position(this.elementRef.nativeElement);
        var coordinate = {
            x: position.left,
            y: position.top + 1
        };
        if (!this.componentRef) {
            this.createComponent();
            this.setInstances(this, this.componentRef);
            this.applicationRef.attachView(this.componentRef.hostView);
            this.componentElement = this.getComponentAsElement();
            this.render(this.componentElement, coordinate);
        }
    };
    UiAutocompleteDirective.prototype.setPosition = function (coordinate, element) {
        var wrap = element.querySelector('.suggestions-wrap');
        var maxHeightWrap = !!this.secondary ? 370 : 240;
        var horizontalCoveringArea = coordinate.x + wrap.clientWidth;
        var verticalCoveringArea = coordinate.y + (wrap.clientHeight > maxHeightWrap ? maxHeightWrap : wrap.clientHeight);
        var windowWidth = window.innerWidth + (document.body.scrollLeft || window.scrollX);
        var windowHeight = window.innerHeight + (document.body.scrollTop || window.scrollY);
        if (horizontalCoveringArea > windowWidth) {
            coordinate.x = windowWidth - (wrap.clientWidth + 8);
        }
        if (coordinate.x <= 8) {
            coordinate.x = 8;
        }
        if (verticalCoveringArea > windowHeight) {
            coordinate.y = coordinate.y - ((wrap.clientHeight > maxHeightWrap ? maxHeightWrap : wrap.clientHeight) + this.elementRef.nativeElement.clientHeight) - 14; // 14 = label focus
        }
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'top', coordinate.y + this.elementRef.nativeElement.clientHeight + "px");
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'left', coordinate.x + "px");
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'width', this.elementRef.nativeElement.clientWidth + "px");
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'visibility', '');
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].css(this.wrapElement, 'transition', '');
    };
    UiAutocompleteDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiAutocompleteDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiAutocompleteDirective.prototype.validate = function (control) {
        this.control = control;
        if (this.elementRef.nativeElement.hasAttribute('required') && !control.value) {
            return { required: true };
        }
        return null;
    };
    UiAutocompleteDirective.prototype.onInput = function () {
        if (!(this.ngModel && this.modelValue) || (this.ngModel !== this.modelValue)) {
            this.modelValue = null;
            this.modelValueChange.emit(this.modelValue);
            this.control.updateValueAndValidity();
        }
    };
    UiAutocompleteDirective.prototype.onFocus = function () {
        this.initialize();
    };
    UiAutocompleteDirective.prototype.onClick = function () {
        this.initialize();
    };
    UiAutocompleteDirective.prototype.onBlur = function (e) {
        if (e.relatedTarget !== this.componentElement.querySelector('ui-card.suggestions')) {
            this.close();
        }
    };
    UiAutocompleteDirective.prototype.onKeydown = function (e) {
        if (!this.componentRef) {
            return;
        }
        if (typeof this.focusedIndex === 'undefined') {
            this.focusedIndex = -1;
        }
        switch (e.which) {
            case 8:
            case 37:
                this.elementRef.nativeElement.focus();
                break;
            case 38:
                this.focusedIndex = !this.list.length ? null : this.focusedIndex ? this.focusedIndex - 1 : this.list.length - 1;
                this.setFocusIndex(this.focusedIndex);
                break;
            case 40:
                this.focusedIndex = !this.list.length ? null : this.list.length - 1 === this.focusedIndex ? 0 : this.focusedIndex + 1;
                this.setFocusIndex(this.focusedIndex);
                break;
            case 13:
                if (this.list && typeof this.focusedIndex === 'number' && this.focusedIndex !== -1) {
                    this.selectChange.emit(this.list[this.focusedIndex]);
                }
                event.preventDefault();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UiAutocompleteDirective.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiAutocompleteDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiAutocompleteDirective.prototype, "modelValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('model-property'),
        __metadata("design:type", Object)
    ], UiAutocompleteDirective.prototype, "modelProperty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], UiAutocompleteDirective.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiAutocompleteDirective.prototype, "primary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiAutocompleteDirective.prototype, "secondary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiAutocompleteDirective.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('theme-class'),
        __metadata("design:type", String)
    ], UiAutocompleteDirective.prototype, "themeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiAutocompleteDirective.prototype, "loadMore", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiAutocompleteDirective.prototype, "loadMoreEmmiter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiAutocompleteDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiAutocompleteDirective.prototype, "modelValueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiAutocompleteDirective.prototype, "selectChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiAutocompleteDirective.prototype, "requiredChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiAutocompleteDirective.prototype, "onInput", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiAutocompleteDirective.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiAutocompleteDirective.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiAutocompleteDirective.prototype, "onBlur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiAutocompleteDirective.prototype, "onKeydown", null);
    UiAutocompleteDirective = UiAutocompleteDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiAutocomplete]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiAutocompleteDirective_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiAutocompleteDirective);
    return UiAutocompleteDirective;
    var UiAutocompleteDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/avatar/avatar.animations.ts":
/*!****************************************************!*\
  !*** ./src/app/smn-ui/avatar/avatar.animations.ts ***!
  \****************************************************/
/*! exports provided: imageAnimation, animationLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageAnimation", function() { return imageAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationLetter", function() { return animationLetter; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var imageAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('image', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('280ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2800ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }))
    ])
]);
var animationLetter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('letter', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('280ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }))
    ])
]);


/***/ }),

/***/ "./src/app/smn-ui/avatar/avatar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/avatar/avatar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"image\" (load)=\"loadedImage()\" *ngIf=\"image\">\r\n<div class=\"wrap\" [class.grayscale]=\"grayscale\">\r\n    <div class=\"empty\" [ngStyle]=\"{'background-color': color, 'color': isBright(color) ? '#000' : '#FFF'}\">\r\n        {{name.charAt(0)}}\r\n    </div>\r\n    <div class=\"profile\" [style.background-image]=\"'url(' + newImage + ')'\" [@image] *ngIf=\"showImage\"></div>\r\n    <div class=\"profile\" [style.background-image]=\"'url(' + image + ')'\" [@image] *ngIf=\"grayscale\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/avatar/avatar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/avatar/avatar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  display: block; }\nimg {\n  display: none; }\n.wrap {\n  width: 44px;\n  height: 44px;\n  margin: 4px;\n  position: relative; }\n.profile, .empty {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 50%; }\n.empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  transition: background 280ms cubic-bezier(0, 0, 0.2, 1), color 280ms cubic-bezier(0, 0, 0.2, 1); }\n.profile {\n  background-size: cover;\n  background-position: center; }\n.grayscale {\n  -webkit-animation: grayscale 960ms 160ms forwards cubic-bezier(0, 0, 0.2, 1);\n          animation: grayscale 960ms 160ms forwards cubic-bezier(0, 0, 0.2, 1);\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%); }\n@-webkit-keyframes grayscale {\n  100% {\n    -webkit-filter: grayscale(0);\n            filter: grayscale(0); } }\n@keyframes grayscale {\n  100% {\n    -webkit-filter: grayscale(0);\n            filter: grayscale(0); } }\n"

/***/ }),

/***/ "./src/app/smn-ui/avatar/avatar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/avatar/avatar.component.ts ***!
  \***************************************************/
/*! exports provided: UiAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiAvatarComponent", function() { return UiAvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _avatar_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.animations */ "./src/app/smn-ui/avatar/avatar.animations.ts");
/* harmony import */ var _utils_providers_color_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/color.provider */ "./src/app/smn-ui/utils/providers/color.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiAvatarComponent = /** @class */ (function () {
    function UiAvatarComponent(element) {
        this.element = element;
    }
    UiAvatarComponent.prototype.ngOnInit = function () {
        this.newImage = this.image;
    };
    UiAvatarComponent.prototype.ngAfterViewInit = function () {
        this.setSize();
    };
    UiAvatarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.name && !changes.name.firstChange) {
            this.name = changes.name.currentValue;
        }
        if (changes.color && !changes.color.firstChange) {
            this.color = changes.color.currentValue;
        }
        if (changes.image && !changes.image.firstChange) {
            if (!changes.image.currentValue) {
                this.showImage = false;
                this.newImage = null;
            }
            this.image = changes.image.currentValue;
        }
        if (changes.size && !changes.size.firstChange) {
            this.size = changes.size.currentValue;
            this.setSize();
        }
    };
    UiAvatarComponent.prototype.isBright = function (color) {
        return _utils_providers_color_provider__WEBPACK_IMPORTED_MODULE_2__["UiColor"].isBright(color);
    };
    UiAvatarComponent.prototype.loadedImage = function () {
        this.showImage = true;
        this.animateImage();
    };
    UiAvatarComponent.prototype.animateImage = function () {
        var _this = this;
        this.grayscale = true;
        setTimeout(function () {
            _this.grayscale = false;
            _this.newImage = _this.image;
        }, 1120);
    };
    UiAvatarComponent.prototype.setSize = function () {
        if (this.size) {
            var wrap = this.element.nativeElement.querySelector('.wrap');
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].css(this.element.nativeElement.querySelector('.empty'), 'font-size', Math.round(this.size / 100 * 36.36) + "px");
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].css(wrap, 'width', this.size + "px");
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].css(wrap, 'height', this.size + "px");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiAvatarComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiAvatarComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiAvatarComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiAvatarComponent.prototype, "size", void 0);
    UiAvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/smn-ui/avatar/avatar.component.html"),
            styles: [__webpack_require__(/*! ./avatar.component.scss */ "./src/app/smn-ui/avatar/avatar.component.scss")],
            animations: [_avatar_animations__WEBPACK_IMPORTED_MODULE_1__["imageAnimation"], _avatar_animations__WEBPACK_IMPORTED_MODULE_1__["animationLetter"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiAvatarComponent);
    return UiAvatarComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/bottom-sheet/bottom-sheet.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/bottom-sheet/bottom-sheet.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\r\n    <div class=\"wrap-bottom-sheet\">\r\n        <div class=\"overlay\"></div>\r\n        <ui-card>\r\n            <ng-content>\r\n            </ng-content>\r\n        </ui-card>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/bottom-sheet/bottom-sheet.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/bottom-sheet/bottom-sheet.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.wrap-bottom-sheet {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center; }\n.wrap-bottom-sheet ui-card {\n    width: 100%;\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px 0 rgba(0,0,0,.20);\n    transition: -webkit-transform 195ms cubic-bezier(0.4, 0, 1, 1);\n    transition: transform 195ms cubic-bezier(0.4, 0, 1, 1);\n    transition: transform 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 195ms cubic-bezier(0.4, 0, 1, 1);\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px; }\n.wrap-bottom-sheet ui-card .header {\n      padding: 0 16px;\n      min-height: 56px;\n      display: flex;\n      align-items: center;\n      font-size: 16px;\n      font-weight: 500; }\n.wrap-bottom-sheet ui-card.grid ul:not(.ui-list) {\n      list-style: none;\n      display: flex;\n      flex-wrap: wrap; }\n.wrap-bottom-sheet ui-card.grid ul:not(.ui-list) .ui-divider {\n        min-width: 100%;\n        margin: 0; }\n.wrap-bottom-sheet ui-card.grid ul:not(.ui-list) li:not(.ui-divider) {\n        padding: 24px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        font-size: 14px;\n        cursor: default; }\n.wrap-bottom-sheet ui-card.grid ul:not(.ui-list) li:not(.ui-divider) .icon {\n          width: 48px;\n          height: 48px;\n          margin-bottom: 8px; }\n.wrap-bottom-sheet ui-card.grid ul:not(.ui-list) li:not(.ui-divider) .icon i {\n            font-size: 48px; }\n.wrap-bottom-sheet ui-card.grid ul.ui-list {\n      display: flex;\n      flex-wrap: wrap; }\n.wrap-bottom-sheet ui-card.grid ul.col-2 li:not(.ui-divider) {\n      min-width: 50%;\n      max-width: 50%; }\n.wrap-bottom-sheet ui-card.grid ul.col-3 li:not(.ui-divider) {\n      min-width: 33.33333333%;\n      max-width: 33.33333333%; }\n.wrap-bottom-sheet ui-card.grid ul.col-4 li:not(.ui-divider) {\n      min-width: 25%;\n      max-width: 25%; }\n.wrap-bottom-sheet ui-card.grid .header ~ ul {\n      padding-top: 0; }\n@media (max-width: 600px) {\n      .wrap-bottom-sheet ui-card {\n        max-width: 100% !important;\n        border-radius: 0; } }\n.wrap-bottom-sheet .overlay {\n    transition: opacity 280ms;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0; }\n.wrap-bottom-sheet.open ui-card {\n    transition: -webkit-transform 195ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 195ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 195ms cubic-bezier(0, 0, 0.2, 1);\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n.wrap-bottom-sheet.open .overlay {\n    transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: 1; }\n"

/***/ }),

/***/ "./src/app/smn-ui/bottom-sheet/bottom-sheet.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/smn-ui/bottom-sheet/bottom-sheet.component.ts ***!
  \***************************************************************/
/*! exports provided: UiBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBottomSheetComponent", function() { return UiBottomSheetComponent; });
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

var UiBottomSheetComponent = /** @class */ (function () {
    function UiBottomSheetComponent(elementRef) {
        this.elementRef = elementRef;
        this.closeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiBottomSheetComponent.prototype.close = function () {
        this.closeChange.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('card-size'),
        __metadata("design:type", Number)
    ], UiBottomSheetComponent.prototype, "cardSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UiBottomSheetComponent.prototype, "templateRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiBottomSheetComponent.prototype, "closeChange", void 0);
    UiBottomSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-bottom-sheet',
            template: __webpack_require__(/*! ./bottom-sheet.component.html */ "./src/app/smn-ui/bottom-sheet/bottom-sheet.component.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.component.scss */ "./src/app/smn-ui/bottom-sheet/bottom-sheet.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiBottomSheetComponent);
    return UiBottomSheetComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/bottom-sheet/bottom-sheet.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/smn-ui/bottom-sheet/bottom-sheet.directive.ts ***!
  \***************************************************************/
/*! exports provided: UiBottomSheetTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBottomSheetTriggerDirective", function() { return UiBottomSheetTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiBottomSheetTriggerDirective = /** @class */ (function () {
    function UiBottomSheetTriggerDirective(viewContainerRef, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
    }
    UiBottomSheetTriggerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.bottomSheet.closeChange.subscribe(function () {
            _this.close();
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(this.elementRef.nativeElement, this.triggerEvents || 'click', function () {
            _this.render();
        });
    };
    UiBottomSheetTriggerDirective.prototype.render = function () {
        var _this = this;
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.bottomSheet.templateRef);
        this.viewRef.detectChanges();
        this.viewRef.rootNodes.forEach(function (rootNode) {
            document.body.appendChild(rootNode);
            if (rootNode.clientWidth) {
                _this.open(rootNode);
            }
        });
    };
    UiBottomSheetTriggerDirective.prototype.open = function (element) {
        var _this = this;
        setTimeout(function () {
            var card = element.querySelector('ui-card');
            card.className += " " + _this.bottomSheet.elementRef.nativeElement.className;
            if (_this.themeClass) {
                element.classList.add(_this.themeClass);
            }
            if (_this.transparentOverlay) {
                element.classList.add('transparent-overlay');
            }
            if (_this.bottomSheet.cardSize) {
                card.style.maxWidth = _this.bottomSheet.cardSize + 'px';
            }
            if (!_this.transparentOverlay && _this.fabs) {
                _this.fabs.classList.add('hide');
            }
            element.querySelectorAll('.overlay')[0].addEventListener('click', function () {
                _this.close();
            });
            element.style.transform = '';
            element.classList.add('open');
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].disableScroll();
        });
    };
    UiBottomSheetTriggerDirective.prototype.close = function () {
        var _this = this;
        if (this.viewContainerRef.length) {
            var viewRef_1 = this.viewRef;
            if (this.fabs) {
                this.fabs.classList.remove('hide');
            }
            viewRef_1.rootNodes.forEach(function (rootNode) {
                if (rootNode.classList) {
                    rootNode.classList.remove('open');
                }
            });
            setTimeout(function () { return _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef_1)); }, 280);
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].enableScroll();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('trigger-events'),
        __metadata("design:type", String)
    ], UiBottomSheetTriggerDirective.prototype, "triggerEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('theme-class'),
        __metadata("design:type", String)
    ], UiBottomSheetTriggerDirective.prototype, "themeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('transparent-overlay'),
        __metadata("design:type", Boolean)
    ], UiBottomSheetTriggerDirective.prototype, "transparentOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uiBottomSheetTrigger'),
        __metadata("design:type", Object)
    ], UiBottomSheetTriggerDirective.prototype, "bottomSheet", void 0);
    UiBottomSheetTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiBottomSheetTrigger]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiBottomSheetTriggerDirective);
    return UiBottomSheetTriggerDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/button/button.service.ts":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/button/button.service.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");


_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].on(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow, 'scroll resize', function (e) {
    var fabContainers = document.querySelectorAll('.ui-fab-container');
    var len = fabContainers.length;
    if (len) {
        var scroll_1 = _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow.scrollY;
        for (var i = 0; i < len; i++) {
            var fabContainer = fabContainers[i];
            if (scroll_1 > 1) {
                fabContainer.classList.add('scrolled');
            }
            else {
                fabContainer.classList.remove('scrolled');
            }
        }
    }
});


/***/ }),

/***/ "./src/app/smn-ui/calendar/add-calendar.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/calendar/add-calendar.directive.ts ***!
  \***********************************************************/
/*! exports provided: UiAddCalendarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiAddCalendarDirective", function() { return UiAddCalendarDirective; });
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

var UiAddCalendarDirective = /** @class */ (function () {
    function UiAddCalendarDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    UiAddCalendarDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[addCalendar]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], UiAddCalendarDirective);
    return UiAddCalendarDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/calendar/calendar-content.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/calendar/calendar-content.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label\">\r\n    <button class=\"month-label\">\r\n        <span>{{months[calendar.month] + ' de ' + calendar.year | uiCapitalize}}</span>\r\n    </button>\r\n</div>\r\n<div class=\"week-header\">\r\n    <div class=\"week-day\" *ngFor=\"let day of days\">{{day.charAt(0).toUpperCase()}}</div>\r\n</div>\r\n<div class=\"days\">\r\n    <div class=\"day\" *ngFor=\"let day of calendar.days\">\r\n        <button type=\"button\"\r\n                class=\"ui-button icon\"\r\n                (click)=\"!isDisabled(day.value) && chooseDate(day.value)\"\r\n                [disabled]=\"isDisabled(day.value)\"\r\n                [ngClass]=\"{'primary': isDay(day.value) || day.today, 'flat': !isDay(day.value)}\"\r\n                *ngIf=\"day.month === calendar.month\">\r\n            {{day.date}}\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/calendar/calendar-content.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/calendar/calendar-content.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 296px;\n  display: block;\n  padding: 8px 0; }\n  :host .label {\n    height: 36px; }\n  :host .month-label {\n    background-color: transparent;\n    width: 100%;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 2px;\n    font-size: 14px; }\n  :host .week-header {\n    display: flex;\n    font-weight: bold;\n    padding: 0 8px; }\n  :host .days {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0 8px; }\n  :host .week-day,\n  :host .day {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 14.28%;\n    height: 40px;\n    font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/smn-ui/calendar/calendar-content.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/smn-ui/calendar/calendar-content.component.ts ***!
  \***************************************************************/
/*! exports provided: UiCalendarContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCalendarContentComponent", function() { return UiCalendarContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _datetime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datetime.service */ "./src/app/smn-ui/calendar/datetime.service.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiCalendarContentComponent = /** @class */ (function () {
    function UiCalendarContentComponent(datetimeService, elementRef) {
        this.datetimeService = datetimeService;
        this.elementRef = elementRef;
        this.chosen = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.days = datetimeService.days;
        this.months = datetimeService.months;
    }
    UiCalendarContentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.elementRef.nativeElement.querySelectorAll('.days button').forEach(function (item) {
            item.addEventListener('keydown', function (e) {
                var target = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].closest(e.target, '.day');
                var index = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].index(target);
                var toFocus;
                var toFocusIndex = 0;
                var toFocusAlt;
                setTimeout(function () {
                    switch (e.keyCode) {
                        // Seta para esquerda
                        case 37:
                            toFocus = _this.getSibling(index - 1);
                            if (!toFocus.length) {
                                toFocus = _this.elementRef.nativeElement.querySelectorAll('.days button:not([disabled])');
                                toFocusIndex = toFocus.length - 1;
                            }
                            toFocus[toFocusIndex].focus();
                            break;
                        // Seta para cima
                        case 38:
                            toFocus = _this.getSibling(index - 7);
                            toFocusAlt = _this.elementRef.nativeElement.querySelectorAll('.days button:not([disabled])')[0];
                            if (toFocus.length && index > _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].index(toFocus[0])) {
                                toFocus[0].focus();
                            }
                            else {
                                toFocusAlt.focus();
                            }
                            break;
                        // Seta para direita
                        case 39:
                            toFocus = _this.getSibling(index + 1);
                            if (!toFocus.length) {
                                _this.elementRef.nativeElement.querySelectorAll('.days button:not([disabled])')[0].focus();
                            }
                            else {
                                toFocus[0].focus();
                            }
                            break;
                        // // Seta para baixo
                        case 40:
                            toFocus = _this.getSibling(index + 7);
                            toFocusAlt = _this.elementRef.nativeElement.querySelectorAll('.days button:not([disabled])');
                            toFocusAlt = toFocusAlt[toFocusAlt.length - 1];
                            if (toFocus.length && index < _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].index(toFocus[0].parentNode)) {
                                toFocus[0].focus();
                            }
                            else {
                                toFocusAlt.focus();
                            }
                            break;
                    }
                });
            });
        });
        this.elementRef.nativeElement.addEventListener('keydown', function (e) {
            if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
                return false;
            }
        });
    };
    UiCalendarContentComponent.prototype.getSibling = function (index) {
        if (index < 0 || !this.elementRef.nativeElement.querySelectorAll('.day')[index]) {
            return [];
        }
        return this.elementRef.nativeElement.querySelectorAll('.day')[index].querySelectorAll('button:not([disabled])');
    };
    UiCalendarContentComponent.prototype.isDay = function (value) {
        var dateToCheck = this.chosenDate;
        if (!dateToCheck) {
            return;
        }
        return (dateToCheck.getDate() === value.getDate() &&
            dateToCheck.getMonth() === value.getMonth() &&
            dateToCheck.getFullYear() === value.getFullYear());
    };
    UiCalendarContentComponent.prototype.chooseDate = function (value) {
        if (value) {
            this.chosenDate = value;
            if (!this.confirmSelection) {
                this.ngModel = value;
            }
            var newValue = {
                value: value,
                confirmSelection: this.confirmSelection
            };
            this.chosen.next(newValue);
        }
    };
    UiCalendarContentComponent.prototype.isDisabled = function (value) {
        var minDate = this.minDate ? new Date(this.minDate).getTime() : null;
        var maxDate = this.maxDate ? new Date(this.maxDate).getTime() : null;
        var date = value.getTime();
        return (typeof minDate === 'number' && !isNaN(minDate) && date < minDate) || (typeof maxDate === 'number' && !isNaN(maxDate) && date > maxDate);
    };
    UiCalendarContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-calendar-content',
            template: __webpack_require__(/*! ./calendar-content.component.html */ "./src/app/smn-ui/calendar/calendar-content.component.html"),
            styles: [__webpack_require__(/*! ./calendar-content.component.scss */ "./src/app/smn-ui/calendar/calendar-content.component.scss")],
        }),
        __metadata("design:paramtypes", [_datetime_service__WEBPACK_IMPORTED_MODULE_2__["UiDatetimeService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiCalendarContentComponent);
    return UiCalendarContentComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/calendar/calendar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/smn-ui/calendar/calendar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!hideHeader\">\r\n    <div>\r\n        <div class=\"year\" >{{chosenDate && chosenDate.getFullYear()}}</div>\r\n        <span class=\"date-empty\" *ngIf=\"!chosenDate\">Selecione uma data</span>\r\n        <div class=\"date\" *ngIf=\"chosenDate\">\r\n            <span class=\"week-day\">{{shortDays[chosenDate.getDay()] | uiCapitalize}},</span> {{chosenDate.getDate()}} de {{months[chosenDate.getMonth()] | uiCapitalize}}\r\n        </div>\r\n    </div>\r\n</header>\r\n<div>\r\n    <div class=\"content\">\r\n        <div class=\"controls\">\r\n            <button class=\"prev ui-button icon flat\"\r\n                    (click)=\"prevMonth()\"\r\n                    [hidden]=\"!(!minDate || (calendar && calendar.days[0].time > minDate.getTime()))\"\r\n                    tabindex=\"0\"><i class=\"material-icons\">keyboard_arrow_left</i></button>\r\n            <button class=\"next ui-button icon flat\"\r\n                    (click)=\"nextMonth()\"\r\n                    [hidden]=\"!(!maxDate || (calendar && calendar.days[calendar.days.length - 1].time < maxDate.getTime()))\"\r\n                    tabindex=\"2\"><i class=\"material-icons\">keyboard_arrow_right</i></button>\r\n        </div>\r\n        <div class=\"calendar-cover\">\r\n            <div addCalendar></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"actions ui-button-container align-right\" *ngIf=\"confirmSelection\">\r\n        <button class=\"ui-button flat primary\" (click)=\"cancelDate()\">Cancelar</button>\r\n        <button class=\"ui-button flat primary\" (click)=\"selectDate(chosenDate)\">Ok</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/calendar/calendar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/smn-ui/calendar/calendar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n@-webkit-keyframes open {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes open {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\nui-calendar {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n  z-index: 0; }\nui-calendar header {\n    padding: 16px;\n    min-height: 72px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column; }\nui-calendar header .year {\n      font-size: 14px;\n      opacity: .8;\n      font-weight: 400; }\nui-calendar header .date-empty {\n      font-size: 18px;\n      font-weight: 500; }\nui-calendar header .date {\n      margin-top: 8px;\n      font-size: 26px;\n      font-weight: 500; }\nui-calendar .actions {\n    padding: 8px;\n    text-align: right;\n    cursor: default; }\nui-calendar .content {\n    position: relative; }\nui-calendar .content .calendar-cover {\n      position: relative;\n      overflow: hidden;\n      transition: 300ms ease-in-out; }\nui-calendar .content .controls {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      z-index: 1; }\nui-calendar .content .controls button {\n        position: absolute;\n        top: 0;\n        margin: 8px; }\nui-calendar .content .controls .prev {\n        left: 0; }\nui-calendar .content .controls .next {\n        right: 0; }\n@media (min-width: 600px), (min-width: 496px) and (orientation: landscape) {\n    ui-calendar:not(.portrait-only) {\n      flex-direction: row; }\n      ui-calendar:not(.portrait-only) header {\n        justify-content: flex-start;\n        width: 192px; }\n        ui-calendar:not(.portrait-only) header .week-day {\n          display: block; } }\n"

/***/ }),

/***/ "./src/app/smn-ui/calendar/calendar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/smn-ui/calendar/calendar.component.ts ***!
  \*******************************************************/
/*! exports provided: UiCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCalendarComponent", function() { return UiCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-content.component */ "./src/app/smn-ui/calendar/calendar-content.component.ts");
/* harmony import */ var _add_calendar_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-calendar.directive */ "./src/app/smn-ui/calendar/add-calendar.directive.ts");
/* harmony import */ var _datetime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datetime.service */ "./src/app/smn-ui/calendar/datetime.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/util/isDate */ "./node_modules/rxjs-compat/_esm5/util/isDate.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UiCalendarComponent = /** @class */ (function () {
    function UiCalendarComponent(componentFactoryResolver, datetimeService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.datetimeService = datetimeService;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chosen = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.days = datetimeService.days;
        this.shortDays = datetimeService.shortDays;
        this.months = datetimeService.months;
    }
    UiCalendarComponent.prototype.ngOnInit = function () {
        this.minDate = this.minDate && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(this.minDate)) ? new Date(this.minDate) : this.minDate;
        this.maxDate = this.maxDate && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(this.maxDate)) ? new Date(this.maxDate) : this.maxDate;
        this.chosenDate = this.ngModel && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(this.ngModel)) ? new Date(this.ngModel) : null;
        this.ngModel = this.ngModel && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(this.ngModel)) ? new Date(this.ngModel) : this.ngModel;
        this.viewDate = Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(this.ngModel) ? this.ngModel : this.initOnSelected || new Date();
        this.renderCalendar(this.viewDate);
    };
    UiCalendarComponent.prototype.ngOnChanges = function (value) {
        if (value.ngModel && !value.ngModel.firstChange && !isNaN(value.ngModel.currentValue)) {
            var ngModel = value.ngModel.currentValue = value.ngModel.currentValue && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(value.ngModel.currentValue)) ? new Date(value.ngModel.currentValue) : value.ngModel.currentValue;
            this.ngModel = this.chosenDate = this.componentRef.instance.chosenDate = this.componentRef.instance.ngModel = ngModel;
        }
        if (value.maxDate && !value.maxDate.firstChange) {
            var maxDate = value.maxDate.currentValue = value.maxDate.currentValue && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(value.maxDate.currentValue)) ? new Date(value.maxDate.currentValue) : value.maxDate.currentValue;
            this.componentRef.instance.maxDate = this.maxDate = maxDate;
        }
        if (value.minDate && !value.minDate.firstChange) {
            var minDate = value.minDate.currentValue = value.minDate.currentValue && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(value.minDate.currentValue)) ? new Date(value.minDate.currentValue) : value.minDate.currentValue;
            this.componentRef.instance.minDate = this.minDate = minDate;
        }
        if (value.confirmSelection) {
            this.confirmSelection = value.confirmSelection.currentValue;
        }
    };
    UiCalendarComponent.prototype.prevMonth = function () {
        this.viewDate.setMonth(this.viewDate.getMonth() - 1);
        this.renderCalendar(this.viewDate);
    };
    UiCalendarComponent.prototype.nextMonth = function () {
        this.viewDate.setMonth(this.viewDate.getMonth() + 1);
        this.renderCalendar(this.viewDate);
    };
    UiCalendarComponent.prototype.selectDate = function (value) {
        this.ngModel = this.componentRef.instance.ngModel = value;
        this.ngModelChange.emit(this.ngModel);
        this.select.emit(this.ngModel);
        this.chosen.next(this.ngModel);
    };
    UiCalendarComponent.prototype.cancelDate = function () {
        this.ngModel = this.chosenDate = this.componentRef.instance.ngModel = this.componentRef.instance.chosenDate = null;
        this.cancel.emit();
        this.ngModelChange.emit(this.ngModel);
    };
    UiCalendarComponent.prototype.renderCalendar = function (dateTarget) {
        var _this = this;
        var date = dateTarget;
        date.setHours(0, 0, 0, 0);
        date.setDate(1);
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        this.viewDate = date;
        var calendar = {
            year: date.getFullYear(),
            month: date.getMonth(),
            monthDays: date.getDate(),
            lastDayWeek: date.getDay(),
            lastDayWeekName: this.days[date.getDay()]
        };
        date.setDate(1);
        calendar.firstDayWeek = date.getDay();
        calendar.firstDayWeekName = this.days[date.getDay()];
        calendar.totalDays = calendar.monthDays + calendar.firstDayWeek + (6 - calendar.lastDayWeek);
        calendar.days = [];
        var firstDate = -calendar.firstDayWeek + 1;
        var lastDate = calendar.monthDays + (7 - calendar.lastDayWeek);
        for (var i = firstDate; i < lastDate; i++) {
            date = new Date(calendar.year, calendar.month, i);
            var today = new Date();
            today = date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
            calendar.days.push({
                month: date.getMonth(),
                date: date.getDate(),
                value: date,
                time: date.getTime(),
                today: today
            });
        }
        this.calendar = calendar;
        var keysComponent = ['calendar', 'ngModel', 'minDate', 'maxDate', 'chosenDate', 'confirmSelection'];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_calendar_content_component__WEBPACK_IMPORTED_MODULE_1__["UiCalendarContentComponent"]);
        var viewContainerRef = this.addCalendar.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        keysComponent.map(function (key) { return _this.componentRef.instance[key] = _this[key]; });
        this.componentRef.instance.chosen.subscribe(function (newValue) {
            if (newValue) {
                _this.chosenDate = newValue.value;
                if (!newValue.confirmSelection) {
                    _this.selectDate(newValue.value);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiCalendarComponent.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiCalendarComponent.prototype, "maxDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiCalendarComponent.prototype, "minDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiCalendarComponent.prototype, "hideHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiCalendarComponent.prototype, "initOnSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiCalendarComponent.prototype, "confirmSelection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiCalendarComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiCalendarComponent.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiCalendarComponent.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_add_calendar_directive__WEBPACK_IMPORTED_MODULE_2__["UiAddCalendarDirective"]),
        __metadata("design:type", _add_calendar_directive__WEBPACK_IMPORTED_MODULE_2__["UiAddCalendarDirective"])
    ], UiCalendarComponent.prototype, "addCalendar", void 0);
    UiCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/smn-ui/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/smn-ui/calendar/calendar.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _datetime_service__WEBPACK_IMPORTED_MODULE_3__["UiDatetimeService"]])
    ], UiCalendarComponent);
    return UiCalendarComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/calendar/datetime.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/calendar/datetime.service.ts ***!
  \*****************************************************/
/*! exports provided: UiDatetimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDatetimeService", function() { return UiDatetimeService; });
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

var UiDatetimeService = /** @class */ (function () {
    function UiDatetimeService() {
        this.days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
        this.shortDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
        this.months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        this.shortMonths = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dec'];
    }
    UiDatetimeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiDatetimeService);
    return UiDatetimeService;
}());



/***/ }),

/***/ "./src/app/smn-ui/clock/clock.animations.ts":
/*!**************************************************!*\
  !*** ./src/app/smn-ui/clock/clock.animations.ts ***!
  \**************************************************/
/*! exports provided: explosionAnimation, fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "explosionAnimation", function() { return explosionAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var explosionAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('explosion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(1.3)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('280ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(1)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('280ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(1.3)'
        }))
    ])
]);
var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('280ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('280ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }))
    ])
]);


/***/ }),

/***/ "./src/app/smn-ui/clock/clock.component.html":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/clock/clock.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!hideHeader\" [class.time-error]=\"!validate()\">\r\n    <div>\r\n        <span class=\"time-empty\" *ngIf=\"isEmpty()\">Selecione um horário</span>\r\n        <span *ngIf=\"!isEmpty() && !validate()\">Horário inválido</span>\r\n        <div class=\"time\" *ngIf=\"!isEmpty() && validate()\" (click)=\"getPositionPointer()\">\r\n            <span (click)=\"activeSelection = 'hours'\" [class.time-focused]=\"activeSelection === 'hours'\">{{formatToLpad(hour)}}</span>:<span (click)=\"activeSelection = 'minutes'\" [class.time-focused]=\"activeSelection === 'minutes'\">{{formatToLpad(minute)}}</span>\r\n        </div>\r\n    </div>\r\n</header>\r\n<div>\r\n    <div class=\"content\">\r\n        <div class=\"clock-cover\">\r\n            <div class=\"clock-wrap\" [class.has-pointer]=\"hasHourAndMinute() && validate()\">\r\n                <div class=\"pointer\"\r\n                     *ngIf=\"hasHourAndMinute() && validate()\"\r\n                     [ngStyle]=\"{'transform': 'rotate(' + pointerRotation + 'deg)', 'top':  getPositionTopPointer()}\"\r\n                     [@fade]>\r\n                    <div class=\"ball\" [class.show-core]=\"activeSelection === 'minutes' && minute % 5 !== 0\"></div>\r\n                </div>\r\n                <div *ngIf=\"activeSelection === 'hours'\" [@explosion]>\r\n                    <div class=\"hour\"\r\n                         *ngFor=\"let hour of hours\"\r\n                         [style.transform]=\"'rotate(' + (30 * (hour >= 12 ? hour - 12 : hour )) + 'deg)'\"\r\n                         (click)=\"selectHour(hour)\">\r\n                        <button class=\"ui-button icon flat\" [style.transform]=\"'rotate(-' + (30 * (hour >= 12 ? hour - 12 : hour )) + 'deg)'\">{{hour}}</button>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"activeSelection === 'minutes'\" [@explosion]>\r\n                    <div class=\"minute\"\r\n                         *ngFor=\"let minute of minutes; let index = index\"\r\n                         [style.transform]=\"'rotate(' + (30 * (index >= 12 ? index - 12 : index )) + 'deg)'\"\r\n                         (click)=\"selectMinute(minute)\">\r\n                        <button class=\"ui-button icon flat\" [style.transform]=\"'rotate(-' + (30 * (index >= 12 ? index - 12 : index )) + 'deg)'\">{{minute}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"actions ui-button-container align-right\" *ngIf=\"confirmSelection\">\r\n        <button class=\"ui-button flat primary\" uiRipple (click)=\"cancelTime()\">Cancelar</button>\r\n        <button class=\"ui-button flat primary\" uiRipple (click)=\"selectTime(true)\" [disabled]=\"!hasHourAndMinute()\">Ok</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/clock/clock.component.scss":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/clock/clock.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\nui-clock {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n  z-index: 0; }\nui-clock header {\n    padding: 16px;\n    min-height: 72px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column; }\nui-clock header .time-empty {\n      font-size: 18px;\n      font-weight: 500; }\nui-clock header .time {\n      margin-top: 8px;\n      font-size: 40px;\n      font-weight: 500;\n      text-align: center;\n      cursor: default; }\nui-clock .actions {\n    padding: 0 8px 8px;\n    text-align: right;\n    cursor: default; }\nui-clock .content {\n    position: relative; }\nui-clock .content .clock-cover {\n      overflow: hidden;\n      transition: 300ms ease-in-out;\n      margin: 24px; }\nui-clock .content .clock-cover .clock-wrap {\n        border-radius: 50%;\n        width: 250px;\n        height: 250px;\n        position: relative; }\nui-clock .content .clock-cover .clock-wrap > div:not(.pointer) {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          z-index: 1; }\nui-clock .content .clock-cover .clock-wrap::before {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          display: block;\n          width: 4px;\n          height: 4px;\n          margin: auto;\n          border-radius: 50%;\n          transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\nui-clock .content .clock-cover .clock-wrap .hour, ui-clock .content .clock-cover .clock-wrap .minute, ui-clock .content .clock-cover .clock-wrap .pointer {\n          position: absolute;\n          top: 8px;\n          left: 0;\n          right: 0;\n          bottom: 50%;\n          width: 36px;\n          margin: 0 auto;\n          pointer-events: none;\n          -webkit-transform-origin: bottom center;\n                  transform-origin: bottom center; }\nui-clock .content .clock-cover .clock-wrap .hour .ui-button, ui-clock .content .clock-cover .clock-wrap .minute .ui-button, ui-clock .content .clock-cover .clock-wrap .pointer .ui-button {\n            pointer-events: auto; }\nui-clock .content .clock-cover .clock-wrap .hour .ui-button::before, ui-clock .content .clock-cover .clock-wrap .minute .ui-button::before, ui-clock .content .clock-cover .clock-wrap .pointer .ui-button::before {\n              -webkit-transform: scale(1);\n                      transform: scale(1); }\nui-clock .content .clock-cover .clock-wrap .pointer {\n          z-index: 2;\n          transition: top 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), top 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), top 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\nui-clock .content .clock-cover .clock-wrap .pointer::before {\n            content: '';\n            width: 2px;\n            position: absolute;\n            top: 36px;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            margin: auto; }\nui-clock .content .clock-cover .clock-wrap .pointer .ball {\n            width: 36px;\n            height: 36px;\n            margin: auto;\n            border-radius: 50%;\n            position: absolute;\n            top: 0; }\nui-clock .content .clock-cover .clock-wrap .pointer .ball::before {\n              content: '';\n              width: 8px;\n              height: 8px;\n              margin: auto;\n              display: block;\n              border-radius: 50%;\n              position: absolute;\n              top: 0;\n              left: 0;\n              right: 0;\n              bottom: 0;\n              transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n              transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n              transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n              -webkit-transform: scale(0);\n                      transform: scale(0); }\nui-clock .content .clock-cover .clock-wrap .pointer .ball.show-core::before {\n              -webkit-transform: scale(1);\n                      transform: scale(1); }\nui-clock .content .clock-cover .clock-wrap .hour:nth-child(n+13) {\n          top: 40px; }\nui-clock .content .clock-cover .clock-wrap.has-pointer::before {\n          -webkit-transform: scale(1);\n                  transform: scale(1); }\n@media (min-width: 600px), (min-width: 496px) and (orientation: landscape) {\n    ui-clock:not(.portrait-only) {\n      flex-direction: row; }\n      ui-clock:not(.portrait-only) header {\n        width: 168px; }\n      ui-clock:not(.portrait-only) .clock-cover {\n        margin: 8px 24px; } }\n"

/***/ }),

/***/ "./src/app/smn-ui/clock/clock.component.ts":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/clock/clock.component.ts ***!
  \*************************************************/
/*! exports provided: UiClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiClockComponent", function() { return UiClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _clock_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock.animations */ "./src/app/smn-ui/clock/clock.animations.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiClockComponent = /** @class */ (function () {
    function UiClockComponent(element) {
        this.element = element;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chosen = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        var beforeMidday = Array.apply(null, { length: 12 }).map(Number.call, Number);
        var afterMidday = Array.apply(null, { length: 12 }).map(Number.call, Number).map(function (val) { return val + 12; });
        beforeMidday[0] = 12;
        afterMidday[0] = 0;
        this.hours = afterMidday.concat(beforeMidday);
        this.minutes = Array.apply(null, { length: 12 }).map(Number.call, Number).map(function (val) { return val * 5; });
        this.activeSelection = 'hours';
        this.pointerRotation = 0;
    }
    UiClockComponent.prototype.ngOnInit = function () {
        this.formatModel();
    };
    UiClockComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.element.nativeElement.tabIndex = 1;
        setTimeout(function () {
            _this.element.nativeElement.focus();
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].on(document, 'keydown', function (e) {
            if (!_this.focused) {
                return;
            }
            switch (e.keyCode) {
                case 13:
                    if (_this.activeSelection === 'hours') {
                        _this.selectHour(_this.hour);
                    }
                    else {
                        _this.selectMinute(_this.minute);
                    }
                    break;
                case 39:
                case 40:
                    if (_this.activeSelection === 'hours') {
                        _this.hour = _this.hour + 1 > 23 ? 0 : _this.hour + 1;
                    }
                    else {
                        _this.minute = _this.minute + 1 > 59 ? 0 : _this.minute + 1;
                    }
                    _this.getPositionPointer();
                    e.preventDefault();
                    break;
                case 37:
                case 38:
                    if (_this.activeSelection === 'hours') {
                        _this.hour = _this.hour - 1 < 0 ? 23 : _this.hour - 1;
                    }
                    else {
                        _this.minute = _this.minute - 1 < 0 ? 59 : _this.minute - 1;
                    }
                    _this.getPositionPointer();
                    e.preventDefault();
                    break;
            }
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].on(document, 'click', function (e) {
            _this.focused = (_this.element.nativeElement === e.target || _this.element.nativeElement === _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].closest(e.target, 'ui-clock')) && (_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].is(e.target, 'ui-clock') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].closest(e.target, 'ui-clock'));
        });
    };
    UiClockComponent.prototype.ngOnChanges = function (value) {
        if (value.ngModel && !value.ngModel.firstChange) {
            this.ngModel = value.ngModel.currentValue;
            this.formatModel();
        }
        if (value.confirmSelection) {
            this.confirmSelection = value.confirmSelection.currentValue;
        }
    };
    UiClockComponent.prototype.formatModel = function () {
        if (this.ngModel) {
            var time = this.ngModel.split(':');
            this.hour = parseInt(time[0], 10);
            this.minute = parseInt(time[1], 10);
            this.getPositionPointer();
        }
    };
    UiClockComponent.prototype.selectTime = function (close) {
        if (this.hasHourAndMinute()) {
            this.ngModel = this.formatToLpad(this.hour) + ":" + this.formatToLpad(this.minute);
            this.ngModelChange.emit(this.ngModel);
            this.select.emit(this.ngModel);
            this.chosen.next({ value: this.ngModel, close: close });
        }
    };
    UiClockComponent.prototype.cancelTime = function () {
        this.activeSelection = 'hours';
        this.hour = null;
        this.minute = null;
        this.ngModel = null;
        this.ngModelChange.emit(this.ngModel);
        this.cancel.emit();
    };
    UiClockComponent.prototype.selectHour = function (hour) {
        this.activeSelection = 'minutes';
        this.hour = hour;
        this.minute = this.minute || 0;
        this.getPositionPointer();
        if (!this.confirmSelection) {
            this.selectTime();
        }
    };
    UiClockComponent.prototype.selectMinute = function (minute) {
        this.activeSelection = 'hours';
        this.minute = minute;
        this.getPositionPointer();
        if (!this.confirmSelection) {
            this.selectTime(true);
        }
    };
    UiClockComponent.prototype.isEmpty = function () {
        return !(typeof this.hour === 'number' && typeof this.minute === 'number');
    };
    UiClockComponent.prototype.formatToLpad = function (value) {
        if (typeof value === 'number' && value.toString().length < 2) {
            value = "0" + value;
        }
        return value;
    };
    UiClockComponent.prototype.getPositionPointer = function () {
        if (!this.hasHourAndMinute()) {
            return;
        }
        var oldRotation = this.pointerRotation;
        oldRotation = oldRotation >= 360 ? oldRotation - (Math.floor(oldRotation / 360) * 360) : (oldRotation <= -360 ? oldRotation + (Math.floor(Math.abs(oldRotation) / 360) * 360) : oldRotation);
        var amountRotate;
        var actualRotate = this.activeSelection === 'hours' ? (30 * (this.hour >= 12 ? this.hour - 12 : this.hour)) : 6 * this.minute;
        if (actualRotate - oldRotation < -180) {
            amountRotate = 360 - oldRotation + actualRotate;
        }
        else if (actualRotate - oldRotation > 180) {
            amountRotate = -(360 - actualRotate + oldRotation);
        }
        else {
            amountRotate = actualRotate - oldRotation;
        }
        if (Math.abs(amountRotate) === 180) {
            amountRotate = actualRotate > oldRotation ? Math.abs(amountRotate) : -amountRotate;
        }
        this.pointerRotation += amountRotate;
    };
    UiClockComponent.prototype.getPositionTopPointer = function () {
        if (this.activeSelection === 'hours' && this.hour > 0 && this.hour < 13) {
            return '40px';
        }
        return '';
    };
    UiClockComponent.prototype.hasHourAndMinute = function () {
        return typeof this.hour === 'number' && typeof this.minute === 'number';
    };
    UiClockComponent.prototype.validate = function () {
        return (this.hour < 24 && this.minute < 60) || !this.hasHourAndMinute();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiClockComponent.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hide-header'),
        __metadata("design:type", Boolean)
    ], UiClockComponent.prototype, "hideHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('confirm-selection'),
        __metadata("design:type", Boolean)
    ], UiClockComponent.prototype, "confirmSelection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiClockComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiClockComponent.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiClockComponent.prototype, "ngModelChange", void 0);
    UiClockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-clock',
            template: __webpack_require__(/*! ./clock.component.html */ "./src/app/smn-ui/clock/clock.component.html"),
            styles: [__webpack_require__(/*! ./clock.component.scss */ "./src/app/smn-ui/clock/clock.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [_clock_animations__WEBPACK_IMPORTED_MODULE_2__["explosionAnimation"], _clock_animations__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiClockComponent);
    return UiClockComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/color-picker/color-picker.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/color-picker/color-picker.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-card>\r\n    <div class=\"colors\">\r\n        <div class=\"color\"\r\n             *ngFor=\"let color of colors\"\r\n             tabindex=\"1\"\r\n             [class.selected]=\"color.name === colorSelected.name\"\r\n             [ngStyle]=\"{'background-color': getColor(color.name, color.name === colorSelected.name ? value : 500), 'border': color.hasBorder ? '1px solid #424242' : 'none'}\"\r\n             (click)=\"selectColor(color)\">\r\n            <i class=\"material-icons\" [style.color]=\"getColorText(color.name, color.name === colorSelected.name ? value : 500)\" *ngIf=\"color.selected\">done</i>\r\n        </div>\r\n        <div class=\"color remove\" [class.selected]=\"!colorSelected.name\" (click)=\"deselectColors()\" tabindex=\"1\">\r\n            <i class=\"material-icons secondary-text\">block</i>\r\n        </div>\r\n    </div>\r\n    <ui-card-content [hidden]=\"!colorSelected.name\" *ngIf=\"!colorSelected.hideSlider\">\r\n        <ui-slider [range]=\"hues\"\r\n                   [(value)]=\"value\"\r\n                   [hideBalloon]=\"true\"\r\n                   [color]=\"getColor(colorSelected.name, value)\"\r\n                   [text-color]=\"getColorText(colorSelected.name, value)\"\r\n                   #hueColor></ui-slider>\r\n    </ui-card-content>\r\n</ui-card>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/color-picker/color-picker.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/color-picker/color-picker.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host ui-card {\n  max-width: 246px; }\n:host ui-card ui-card-content {\n    height: 34px;\n    overflow: hidden;\n    padding: 0 16px 0;\n    transition: height 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host ui-card ui-card-content[hidden] {\n      height: 0; }\n:host .colors {\n  padding: 8px 16px 16px 8px;\n  display: flex;\n  flex-wrap: wrap; }\n:host .colors .color {\n    width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    margin-left: 8px;\n    margin-top: 8px;\n    cursor: default;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: background-color 280ms cubic-bezier(0, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .colors .color.remove i {\n      font-size: 44px; }\n:host .colors .color i {\n      transition: color 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .colors .color.selected {\n      box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20); }\n:host /deep/ ui-slider:not(.nothing) {\n  margin-top: 16px; }\n:host /deep/ ui-slider:not(.nothing) .track {\n    height: 4px; }\n:host /deep/ ui-slider:not(.nothing) .thumb {\n    width: 16px;\n    height: 16px; }\n:host /deep/ ui-slider:not(.nothing) .points {\n    margin-top: -4px; }\n:host /deep/ ui-slider:not(.nothing) .points .point:not(.nothing) {\n      padding: 2px;\n      opacity: 0.54; }\n/deep/ .wrap-color-picker {\n  z-index: 5; }\n/deep/ .wrap-color-picker .overlay {\n    overflow: hidden; }\n/deep/ .wrap-color-picker ui-color-picker {\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    transition: opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 280ms cubic-bezier(0.4, 0, 0.6, 1), opacity 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 280ms cubic-bezier(0.4, 0, 0.6, 1), opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n    position: absolute;\n    z-index: 5; }\n/deep/ .wrap-color-picker.open ui-color-picker {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n@media (max-width: 600px) {\n    /deep/ .wrap-color-picker {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: flex;\n      background-color: transparent !important; }\n      /deep/ .wrap-color-picker .overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0);\n        transition: background 195ms cubic-bezier(0, 0, 0.2, 1); }\n      /deep/ .wrap-color-picker ui-color-picker {\n        position: relative;\n        top: 0 !important;\n        left: 0 !important;\n        margin: auto;\n        -webkit-transform-origin: bottom;\n                transform-origin: bottom;\n        transition: opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n        transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1);\n        transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n        -webkit-transform: scale(0.8) translateY(16px);\n                transform: scale(0.8) translateY(16px); }\n        /deep/ .wrap-color-picker ui-color-picker ui-card {\n          box-shadow: 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 49px 8px rgba(0,0,0,.12), 0 11px 15px 0 rgba(0,0,0,.20); }\n      /deep/ .wrap-color-picker.open .overlay {\n        background-color: rgba(0, 0, 0, 0.2); }\n      /deep/ .wrap-color-picker.open ui-color-picker {\n        transition: opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n        -webkit-transform: scale(1) translateY(0);\n                transform: scale(1) translateY(0); } }\n"

/***/ }),

/***/ "./src/app/smn-ui/color-picker/color-picker.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/smn-ui/color-picker/color-picker.component.ts ***!
  \***************************************************************/
/*! exports provided: UiColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiColorPickerComponent", function() { return UiColorPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_picker_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-picker.palette */ "./src/app/smn-ui/color-picker/color-picker.palette.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiColorPickerComponent = /** @class */ (function () {
    function UiColorPickerComponent(ngControl) {
        this.ngControl = ngControl;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.palette = _color_picker_palette__WEBPACK_IMPORTED_MODULE_1__["palette"];
        this.colors = _color_picker_palette__WEBPACK_IMPORTED_MODULE_1__["colors"];
        this.hues = Array.from({ length: 10 }, function (ngModel, index) { return index * 100; });
        this.hues[0] = 50;
        this.value = 500;
        this.colorSelected = {};
    }
    UiColorPickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setColorSelected(this.ngModel);
        this.hueColor.valueChange.subscribe(function (hue) {
            _this.ngModel = _this.getColor(_this.colorSelected.name, hue);
            _this.ngModelChange.emit(_this.ngModel);
        });
    };
    UiColorPickerComponent.prototype.getColor = function (color, hue) {
        if (hue === void 0) { hue = 500; }
        if (!color) {
            return;
        }
        return this.palette[color][hue].color;
    };
    UiColorPickerComponent.prototype.getColorText = function (color, hue) {
        if (hue === void 0) { hue = 500; }
        if (!color) {
            return;
        }
        return this.palette[color][hue].text;
    };
    UiColorPickerComponent.prototype.selectColor = function (colorSelected) {
        this.ngControl.control.markAsDirty();
        this.deselectColors();
        colorSelected.selected = true;
        this.colorSelected = colorSelected;
        this.ngModel = this.getColor(this.colorSelected.name, this.value);
        this.ngModelChange.emit(this.ngModel);
    };
    UiColorPickerComponent.prototype.deselectColors = function () {
        this.ngControl.control.markAsDirty();
        this.ngModel = this.getColor(null);
        this.ngModelChange.emit(this.ngModel);
        this.colorSelected = {};
        this.value = 500;
        this.colors.forEach(function (color) { return color.selected = false; });
    };
    UiColorPickerComponent.prototype.setColorSelected = function (color) {
        var _this = this;
        if (!color) {
            return;
        }
        Object.keys(this.palette).forEach(function (key) {
            Object.keys(_this.palette[key]).forEach(function (hue) {
                if (_this.palette[key][hue].color === color) {
                    _this.colors.forEach(function (item) {
                        if (item.name === key) {
                            setTimeout(function () {
                                item.selected = true;
                                _this.value = hue;
                                _this.colorSelected = item;
                            });
                        }
                    });
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiColorPickerComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hueColor'),
        __metadata("design:type", Object)
    ], UiColorPickerComponent.prototype, "hueColor", void 0);
    UiColorPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-color-picker',
            template: __webpack_require__(/*! ./color-picker.component.html */ "./src/app/smn-ui/color-picker/color-picker.component.html"),
            styles: [__webpack_require__(/*! ./color-picker.component.scss */ "./src/app/smn-ui/color-picker/color-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], UiColorPickerComponent);
    return UiColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/color-picker/color-picker.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/smn-ui/color-picker/color-picker.directive.ts ***!
  \***************************************************************/
/*! exports provided: UiColorPickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiColorPickerDirective", function() { return UiColorPickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_picker_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-picker.palette */ "./src/app/smn-ui/color-picker/color-picker.palette.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _color_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-picker.component */ "./src/app/smn-ui/color-picker/color-picker.component.ts");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiColorPickerDirective = /** @class */ (function () {
    function UiColorPickerDirective(element, componentFactoryResolver, applicationRef, injector) {
        this.element = element;
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.palette = _color_picker_palette__WEBPACK_IMPORTED_MODULE_1__["palette"];
    }
    UiColorPickerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.generateElementColor();
        this.setColorElement(this.ngModel);
        this.element.nativeElement.classList.add('elevate');
        this.element.nativeElement.parentNode.appendChild(this.elementColor);
        this.addEvents();
        this.ngModelChange.subscribe(function (color) {
            _this.setColorElement(color);
        });
    };
    UiColorPickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ngModel && !changes.ngModel.firstChange) {
            this.ngModel = changes.ngModel.currentValue;
            this.setColorElement(this.ngModel);
        }
    };
    UiColorPickerDirective.prototype.generateElementColor = function () {
        this.elementColor = document.createElement('div');
        this.elementColor.classList.add('ui-color');
        this.elementColor.setAttribute('tabindex', '1');
    };
    UiColorPickerDirective.prototype.setColorElement = function (color) {
        var icon = this.elementColor.querySelector('i');
        if (color) {
            if (icon) {
                icon.remove();
            }
            this.elementColor.setAttribute('style', "background-color: " + color);
        }
        else if (!icon) {
            icon = document.createElement('i');
            icon.classList.add('material-icons', 'secondary-text');
            icon.innerText = 'block';
            this.elementColor.appendChild(icon);
            this.elementColor.setAttribute('style', '');
        }
    };
    UiColorPickerDirective.prototype.addEvents = function () {
        var _this = this;
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(this.elementColor, 'click', function (e) {
            var position = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].position(_this.elementColor);
            var coordinate = {
                x: position.left,
                y: position.top
            };
            if (!_this.componentRef) {
                _this.createComponent();
                _this.setInstances(_this, _this.componentRef);
                _this.applicationRef.attachView(_this.componentRef.hostView);
                _this.componentElement = _this.getComponentAsElement();
                _this.render(_this.componentElement, coordinate);
                e.stopPropagation();
            }
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_4__["UiWindowRef"].nativeWindow, 'click resize scroll', function (e) {
            if (_this.componentRef) {
                if ((!(_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(e.target, '.wrap-color-picker') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].closest(e.target, '.wrap-color-picker')) && !(document.body.clientWidth <= 600 && e.type === 'scroll')) || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(e.target, '.overlay')) {
                    _this.close();
                }
            }
        });
    };
    UiColorPickerDirective.prototype.createComponent = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_color_picker_component__WEBPACK_IMPORTED_MODULE_3__["UiColorPickerComponent"]);
        this.componentRef = componentFactory.create(this.injector);
    };
    UiColorPickerDirective.prototype.getComponentAsElement = function () {
        return this.componentRef.hostView.rootNodes[0];
    };
    UiColorPickerDirective.prototype.setInstances = function (component, componentRef) {
        var keysComponent = ['ngModel', 'ngModelChange'];
        keysComponent.forEach(function (key) {
            componentRef.instance[key] = component[key];
        });
    };
    UiColorPickerDirective.prototype.render = function (element, coordinate) {
        var _this = this;
        this.createWrapElement();
        this.wrapElement.appendChild(element);
        document.body.appendChild(this.wrapElement);
        setTimeout(function () {
            if (_this.themeClass) {
                _this.wrapElement.classList.add(_this.themeClass);
            }
            _this.wrapElement.classList.add('open');
            _this.setPosition(coordinate);
        });
    };
    UiColorPickerDirective.prototype.createWrapElement = function () {
        this.wrapElement = document.createElement('div');
        this.wrapElement.classList.add('wrap-color-picker');
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        this.wrapElement.appendChild(overlay);
    };
    UiColorPickerDirective.prototype.setPosition = function (coordinate) {
        var horizontalCoveringArea = coordinate.x + this.componentElement.clientWidth;
        var verticalCoveringArea = coordinate.y + this.componentElement.clientHeight;
        var windowWidth = window.innerWidth + document.body.scrollLeft;
        var windowHeight = window.innerHeight + document.body.scrollTop;
        if (horizontalCoveringArea > windowWidth) {
            coordinate.x = windowWidth - (this.componentElement.clientWidth + 8);
        }
        if (coordinate.x <= 8) {
            coordinate.x = 8;
        }
        if (verticalCoveringArea > windowHeight) {
            coordinate.y = coordinate.y - this.componentElement.clientHeight;
        }
        this.componentElement.style.top = (coordinate.y) + 'px';
        this.componentElement.style.left = coordinate.x + 'px';
    };
    UiColorPickerDirective.prototype.close = function () {
        var _this = this;
        if (this.wrapElement) {
            this.wrapElement.classList.remove('open');
            setTimeout(function () {
                if (_this.componentRef) {
                    _this.componentRef.instance.colors.forEach(function (color) { return color.selected = false; });
                    _this.applicationRef.detachView(_this.componentRef.hostView);
                    _this.componentRef = null;
                    _this.wrapElement.remove();
                }
            }, 280);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiColorPickerDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('theme-class'),
        __metadata("design:type", Object)
    ], UiColorPickerDirective.prototype, "themeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiColorPickerDirective.prototype, "ngModelChange", void 0);
    UiColorPickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiColorPicker]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], UiColorPickerDirective);
    return UiColorPickerDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/color-picker/color-picker.palette.ts":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/color-picker/color-picker.palette.ts ***!
  \*************************************************************/
/*! exports provided: palette, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var textBlack = 'rgba(0, 0, 0, .87)';
var textWhite = '#fff';
var colors = [{
        name: 'red'
    }, {
        name: 'pink'
    }, {
        name: 'purple'
    }, {
        name: 'deepPurple'
    }, {
        name: 'indigo'
    }, {
        name: 'blue'
    }, {
        name: 'lightBlue'
    }, {
        name: 'cyan'
    }, {
        name: 'teal'
    }, {
        name: 'green'
    }, {
        name: 'lightGreen'
    }, {
        name: 'lime'
    }, {
        name: 'yellow'
    }, {
        name: 'amber'
    }, {
        name: 'orange'
    }, {
        name: 'deepOrange'
    }, {
        name: 'brown'
    }, {
        name: 'grey'
    }, {
        name: 'blueGrey'
    }, {
        name: 'black',
        hideSlider: true
    }, {
        name: 'white',
        hideSlider: true,
        hasBorder: true
    }];
var palette = {
    red: {
        50: {
            color: '#ffebee',
            text: textBlack
        },
        100: {
            color: '#ffcdd2',
            text: textBlack
        },
        200: {
            color: '#ef9a9a',
            text: textBlack
        },
        300: {
            color: '#e57373',
            text: textBlack
        },
        400: {
            color: '#ef5350',
            text: textWhite
        },
        500: {
            color: '#f44336',
            text: textWhite
        },
        600: {
            color: '#e53935',
            text: textWhite
        },
        700: {
            color: '#d32f2f',
            text: textWhite
        },
        800: {
            color: '#c62828',
            text: textWhite
        },
        900: {
            color: '#b71c1c',
            text: textWhite
        }
    },
    pink: {
        50: {
            color: '#fce4ec',
            text: textBlack
        },
        100: {
            color: '#f8bbd0',
            text: textBlack
        },
        200: {
            color: '#f48fb1',
            text: textBlack
        },
        300: {
            color: '#f06292',
            text: textWhite
        },
        400: {
            color: '#ec407a',
            text: textWhite
        },
        500: {
            color: '#e91e63',
            text: textWhite
        },
        600: {
            color: '#d81b60',
            text: textWhite
        },
        700: {
            color: '#c2185b',
            text: textWhite
        },
        800: {
            color: '#ad1457',
            text: textWhite
        },
        900: {
            color: '#880e4f',
            text: textWhite
        }
    },
    purple: {
        50: {
            color: '#f3e5f5',
            text: textBlack
        },
        100: {
            color: '#e1bee7',
            text: textBlack
        },
        200: {
            color: '#ce93d8',
            text: textBlack
        },
        300: {
            color: '#ba68c8',
            text: textWhite
        },
        400: {
            color: '#ab47bc',
            text: textWhite
        },
        500: {
            color: '#9c27b0',
            text: textWhite
        },
        600: {
            color: '#8e24aa',
            text: textWhite
        },
        700: {
            color: '#7b1fa2',
            text: textWhite
        },
        800: {
            color: '#6a1b9a',
            text: textWhite
        },
        900: {
            color: '#4a148c',
            text: textWhite
        }
    },
    deepPurple: {
        50: {
            color: '#ede7f6',
            text: textBlack
        },
        100: {
            color: '#d1c4e9',
            text: textBlack
        },
        200: {
            color: '#b39ddb',
            text: textBlack
        },
        300: {
            color: '#9575cd',
            text: textWhite
        },
        400: {
            color: '#7e57c2',
            text: textWhite
        },
        500: {
            color: '#673ab7',
            text: textWhite
        },
        600: {
            color: '#5e35b1',
            text: textWhite
        },
        700: {
            color: '#512da8',
            text: textWhite
        },
        800: {
            color: '#4527a0',
            text: textWhite
        },
        900: {
            color: '#311b92',
            text: textWhite
        }
    },
    indigo: {
        50: {
            color: '#e8eaf6',
            text: textBlack
        },
        100: {
            color: '#c5cae9',
            text: textBlack
        },
        200: {
            color: '#9fa8da',
            text: textBlack
        },
        300: {
            color: '#7986cb',
            text: textWhite
        },
        400: {
            color: '#5c6bc0',
            text: textWhite
        },
        500: {
            color: '#3f51b5',
            text: textWhite
        },
        600: {
            color: '#3949ab',
            text: textWhite
        },
        700: {
            color: '#303f9f',
            text: textWhite
        },
        800: {
            color: '#283593',
            text: textWhite
        },
        900: {
            color: '#1a237e',
            text: textWhite
        }
    },
    blue: {
        50: {
            color: '#e3f2fd',
            text: textBlack
        },
        100: {
            color: '#bbdefb',
            text: textBlack
        },
        200: {
            color: '#90caf9',
            text: textBlack
        },
        300: {
            color: '#64b5f6',
            text: textBlack
        },
        400: {
            color: '#42a5f5',
            text: textBlack
        },
        500: {
            color: '#2196f3',
            text: textWhite
        },
        600: {
            color: '#1e88e5',
            text: textWhite
        },
        700: {
            color: '#1976d2',
            text: textWhite
        },
        800: {
            color: '#1565c0',
            text: textWhite
        },
        900: {
            color: '#0d47a1',
            text: textWhite
        }
    },
    lightBlue: {
        50: {
            color: '#e1f5fe',
            text: textBlack
        },
        100: {
            color: '#b3e5fc',
            text: textBlack
        },
        200: {
            color: '#81d4fa',
            text: textBlack
        },
        300: {
            color: '#4fc3f7',
            text: textBlack
        },
        400: {
            color: '#29b6f6',
            text: textBlack
        },
        500: {
            color: '#03a9f4',
            text: textBlack
        },
        600: {
            color: '#039be5',
            text: textWhite
        },
        700: {
            color: '#0288d1',
            text: textWhite
        },
        800: {
            color: '#0277bd',
            text: textWhite
        },
        900: {
            color: '#01579b',
            text: textWhite
        }
    },
    cyan: {
        50: {
            color: '#e0f7fa',
            text: textBlack
        },
        100: {
            color: '#b2ebf2',
            text: textBlack
        },
        200: {
            color: '#80deea',
            text: textBlack
        },
        300: {
            color: '#4dd0e1',
            text: textBlack
        },
        400: {
            color: '#26c6da',
            text: textBlack
        },
        500: {
            color: '#00bcd4',
            text: textBlack
        },
        600: {
            color: '#00acc1',
            text: textBlack
        },
        700: {
            color: '#0097a7',
            text: textWhite
        },
        800: {
            color: '#00838f',
            text: textWhite
        },
        900: {
            color: '#006064',
            text: textWhite
        }
    },
    teal: {
        50: {
            color: '#e0f2f1',
            text: textBlack
        },
        100: {
            color: '#b2dfdb',
            text: textBlack
        },
        200: {
            color: '#80cbc4',
            text: textBlack
        },
        300: {
            color: '#4db6ac',
            text: textBlack
        },
        400: {
            color: '#26a69a',
            text: textBlack
        },
        500: {
            color: '#009688',
            text: textWhite
        },
        600: {
            color: '#00897b',
            text: textWhite
        },
        700: {
            color: '#00796b',
            text: textWhite
        },
        800: {
            color: '#00695c',
            text: textWhite
        },
        900: {
            color: '#004d40',
            text: textWhite
        }
    },
    green: {
        50: {
            color: '#e8f5e9',
            text: textBlack
        },
        100: {
            color: '#c8e6c9',
            text: textBlack
        },
        200: {
            color: '#a5d6a7',
            text: textBlack
        },
        300: {
            color: '#81c784',
            text: textBlack
        },
        400: {
            color: '#66bb6a',
            text: textBlack
        },
        500: {
            color: '#4caf50',
            text: textBlack
        },
        600: {
            color: '#43a047',
            text: textWhite
        },
        700: {
            color: '#388e3c',
            text: textWhite
        },
        800: {
            color: '#2e7d32',
            text: textWhite
        },
        900: {
            color: '#1b5e20',
            text: textWhite
        }
    },
    lightGreen: {
        50: {
            color: '#f1f8e9',
            text: textBlack
        },
        100: {
            color: '#dcedc8',
            text: textBlack
        },
        200: {
            color: '#c5e1a5',
            text: textBlack
        },
        300: {
            color: '#aed581',
            text: textBlack
        },
        400: {
            color: '#9ccc65',
            text: textBlack
        },
        500: {
            color: '#8bc34a',
            text: textBlack
        },
        600: {
            color: '#7cb342',
            text: textBlack
        },
        700: {
            color: '#689f38',
            text: textWhite
        },
        800: {
            color: '#558b2f',
            text: textWhite
        },
        900: {
            color: '#33691e',
            text: textWhite
        }
    },
    lime: {
        50: {
            color: '#f9fbe7',
            text: textBlack
        },
        100: {
            color: '#f0f4c3',
            text: textBlack
        },
        200: {
            color: '#e6ee9c',
            text: textBlack
        },
        300: {
            color: '#dce775',
            text: textBlack
        },
        400: {
            color: '#d4e157',
            text: textBlack
        },
        500: {
            color: '#cddc39',
            text: textBlack
        },
        600: {
            color: '#c0ca33',
            text: textBlack
        },
        700: {
            color: '#afb42b',
            text: textBlack
        },
        800: {
            color: '#9e9d24',
            text: textBlack
        },
        900: {
            color: '#827717',
            text: textWhite
        }
    },
    yellow: {
        50: {
            color: '#fffde7',
            text: textBlack
        },
        100: {
            color: '#fff9c4',
            text: textBlack
        },
        200: {
            color: '#fff59d',
            text: textBlack
        },
        300: {
            color: '#fff176',
            text: textBlack
        },
        400: {
            color: '#ffee58',
            text: textBlack
        },
        500: {
            color: '#ffeb3b',
            text: textBlack
        },
        600: {
            color: '#fdd835',
            text: textBlack
        },
        700: {
            color: '#fbc02d',
            text: textBlack
        },
        800: {
            color: '#f9a825',
            text: textBlack
        },
        900: {
            color: '#f57f17',
            text: textBlack
        }
    },
    amber: {
        50: {
            color: '#fff8e1',
            text: textBlack
        },
        100: {
            color: '#ffecb3',
            text: textBlack
        },
        200: {
            color: '#ffe082',
            text: textBlack
        },
        300: {
            color: '#ffd54f',
            text: textBlack
        },
        400: {
            color: '#ffca28',
            text: textBlack
        },
        500: {
            color: '#ffc107',
            text: textBlack
        },
        600: {
            color: '#ffb300',
            text: textBlack
        },
        700: {
            color: '#ffa000',
            text: textBlack
        },
        800: {
            color: '#ff8f00',
            text: textBlack
        },
        900: {
            color: '#ff6f00',
            text: textBlack
        }
    },
    orange: {
        50: {
            color: '#fff3e0',
            text: textBlack
        },
        100: {
            color: '#ffe0b2',
            text: textBlack
        },
        200: {
            color: '#ffcc80',
            text: textBlack
        },
        300: {
            color: '#ffb74d',
            text: textBlack
        },
        400: {
            color: '#ffa726',
            text: textBlack
        },
        500: {
            color: '#ff9800',
            text: textBlack
        },
        600: {
            color: '#fb8c00',
            text: textBlack
        },
        700: {
            color: '#f57c00',
            text: textBlack
        },
        800: {
            color: '#ef6c00',
            text: textWhite
        },
        900: {
            color: '#e65100',
            text: textWhite
        }
    },
    deepOrange: {
        50: {
            color: '#fbe9e7',
            text: textBlack
        },
        100: {
            color: '#ffccbc',
            text: textBlack
        },
        200: {
            color: '#ffab91',
            text: textBlack
        },
        300: {
            color: '#ff8a65',
            text: textBlack
        },
        400: {
            color: '#ff7043',
            text: textBlack
        },
        500: {
            color: '#ff5722',
            text: textWhite
        },
        600: {
            color: '#f4511e',
            text: textWhite
        },
        700: {
            color: '#e64a19',
            text: textWhite
        },
        800: {
            color: '#d84315',
            text: textWhite
        },
        900: {
            color: '#bf360c',
            text: textWhite
        }
    },
    brown: {
        50: {
            color: '#efebe9',
            text: textBlack
        },
        100: {
            color: '#d7ccc8',
            text: textBlack
        },
        200: {
            color: '#bcaaa4',
            text: textBlack
        },
        300: {
            color: '#a1887f',
            text: textWhite
        },
        400: {
            color: '#8d6e63',
            text: textWhite
        },
        500: {
            color: '#795548',
            text: textWhite
        },
        600: {
            color: '#6d4c41',
            text: textWhite
        },
        700: {
            color: '#5d4037',
            text: textWhite
        },
        800: {
            color: '#4e342e',
            text: textWhite
        },
        900: {
            color: '#3e2723',
            text: textWhite
        }
    },
    grey: {
        50: {
            color: '#fafafa',
            text: textBlack
        },
        100: {
            color: '#f5f5f5',
            text: textBlack
        },
        200: {
            color: '#eeeeee',
            text: textBlack
        },
        300: {
            color: '#e0e0e0',
            text: textBlack
        },
        400: {
            color: '#bdbdbd',
            text: textBlack
        },
        500: {
            color: '#9e9e9e',
            text: textBlack
        },
        600: {
            color: '#757575',
            text: textWhite
        },
        700: {
            color: '#616161',
            text: textWhite
        },
        800: {
            color: '#424242',
            text: textWhite
        },
        900: {
            color: '#212121',
            text: textWhite
        }
    },
    blueGrey: {
        50: {
            color: '#eceff1',
            text: textBlack
        },
        100: {
            color: '#cfd8dc',
            text: textBlack
        },
        200: {
            color: '#b0bec5',
            text: textBlack
        },
        300: {
            color: '#90a4ae',
            text: textBlack
        },
        400: {
            color: '#78909c',
            text: textWhite
        },
        500: {
            color: '#607d8b',
            text: textWhite
        },
        600: {
            color: '#546e7a',
            text: textWhite
        },
        700: {
            color: '#455a64',
            text: textWhite
        },
        800: {
            color: '#37474f',
            text: textWhite
        },
        900: {
            color: '#263238',
            text: textWhite
        }
    },
    black: {
        500: {
            color: '#000000',
            text: textWhite
        }
    },
    white: {
        500: {
            color: '#FFFFFF',
            text: textBlack
        }
    }
};



/***/ }),

/***/ "./src/app/smn-ui/data-table/data-table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/data-table/data-table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-table-overflow\">\r\n    <table class=\"ui-data-table\">\r\n        <ng-content></ng-content>\r\n    </table>\r\n</div>\r\n<table class=\"ui-data-table\" #tableFooter>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/data-table/data-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/data-table/data-table.component.ts ***!
  \***********************************************************/
/*! exports provided: UiDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDataTableComponent", function() { return UiDataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiDataTableComponent = /** @class */ (function () {
    function UiDataTableComponent(element) {
        this.element = element;
    }
    UiDataTableComponent.prototype.ngOnInit = function () {
        var self = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.element.nativeElement);
        var tfoot = self.querySelector('tfoot');
        if (tfoot) {
            this.tableFooter.nativeElement.appendChild(tfoot.nativeElement);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tableFooter'),
        __metadata("design:type", Object)
    ], UiDataTableComponent.prototype, "tableFooter", void 0);
    UiDataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/smn-ui/data-table/data-table.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiDataTableComponent);
    return UiDataTableComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/data-table/order-by.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/smn-ui/data-table/order-by.directive.ts ***!
  \*********************************************************/
/*! exports provided: UiDataTableOrderByDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDataTableOrderByDirective", function() { return UiDataTableOrderByDirective; });
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

var icon = document.createElement('i');
icon.classList.add('material-icons');
icon.innerHTML = 'arrow_downward';
var UiDataTableOrderByDirective = /** @class */ (function () {
    function UiDataTableOrderByDirective(element) {
        this.element = element;
    }
    UiDataTableOrderByDirective.prototype.ngAfterViewInit = function () {
        if (this.element.nativeElement.classList.contains('align-right')) {
            this.element.nativeElement.insertBefore(icon.cloneNode(true), this.element.nativeElement.firstChild);
        }
        else {
            this.element.nativeElement.appendChild(icon.cloneNode(true));
        }
    };
    UiDataTableOrderByDirective.prototype.onClick = function () {
        if (this.element.nativeElement.classList.contains('order_desc')
            || this.element.nativeElement.classList.contains('order_asc')) {
            if (this.element.nativeElement.classList.contains('order_asc')) {
                this.element.nativeElement.classList.add('order_desc');
                this.element.nativeElement.classList.remove('order_asc');
            }
            else if (this.element.nativeElement.classList.contains('order_desc')) {
                this.element.nativeElement.classList.remove('order_desc');
                this.element.nativeElement.classList.remove('order_asc');
            }
        }
        else {
            this.element.nativeElement.classList.add('order_asc');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiDataTableOrderByDirective.prototype, "onClick", null);
    UiDataTableOrderByDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: 'th[uiDataTableOrderBy]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiDataTableOrderByDirective);
    return UiDataTableOrderByDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/date-picker/date-picker-caller.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/smn-ui/date-picker/date-picker-caller.directive.ts ***!
  \********************************************************************/
/*! exports provided: UiDatePickerCallerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDatePickerCallerDirective", function() { return UiDatePickerCallerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _references_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./references.service */ "./src/app/smn-ui/date-picker/references.service.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calendar/calendar.component */ "./src/app/smn-ui/calendar/calendar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiDatePickerCallerDirective = /** @class */ (function () {
    function UiDatePickerCallerDirective(componentFactoryResolver, applicationRef, injector, referencesService, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.referencesService = referencesService;
        this.elementRef = elementRef;
    }
    UiDatePickerCallerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.datePicker = this.referencesService.get(this.datePickerCaller);
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(this.elementRef.nativeElement, this.pickerEvent || 'click', function (e) {
            _this.inputElement = document.querySelector("[date-picker-name=\"" + _this.datePickerCaller + "\"]");
            _this.referencesService.closeAll();
            var position = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].position(_this.inputElement);
            var coordinate = {
                x: position.left,
                y: _this.inputElement.offsetHeight + position.top
            };
            if (!_this.pickerOpen) {
                _this.renderDatePicker(_this.datePicker, coordinate);
                e.stopPropagation(); // Parando propagação do evento para os eventos do window
            }
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__["UiWindowRef"].nativeWindow, 'click resize scroll', function (e) {
            if (_this.pickerOpen) {
                if ((!(_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(e.target, '.wrap-date-picker') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].closest(e.target, '.wrap-date-picker'))
                    && !(document.body.clientWidth <= 600 && e.type === 'scroll')) || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(e.target, '.overlay')) {
                    _this.closePicker();
                }
            }
        });
    };
    UiDatePickerCallerDirective.prototype.getComponentAsElement = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    UiDatePickerCallerDirective.prototype.setInstances = function (component, componentRef) {
        var _this = this;
        var keysComponent = ['ngModel', 'maxDate', 'minDate', 'initOnSelected', 'confirmSelection', 'select'];
        keysComponent.map(function (key) { return componentRef.instance[key] = component[key]; });
        componentRef.instance.cancel.subscribe(function () { return _this.closePicker(); });
        component.chosen.subscribe(function (value) { return componentRef.instance.ngOnChanges(value); });
        componentRef.instance.chosen.subscribe(function (value) {
            _this.referencesService.updateModel(_this.datePickerCaller, value);
            if (_this.pickerOpen) {
                _this.inputElement.focus();
                _this.closePicker();
            }
        });
    };
    UiDatePickerCallerDirective.prototype.renderViewCalendar = function (element, coordinate, themeClass) {
        var _this = this;
        this.wrapDatePicker = document.createElement('div');
        this.wrapDatePicker.classList.add('wrap-date-picker');
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        if (themeClass) {
            this.wrapDatePicker.classList.add(themeClass);
        }
        this.wrapDatePicker.style.transform = 'scale(0)';
        element.classList.add('portrait-only');
        this.wrapDatePicker.appendChild(overlay);
        this.wrapDatePicker.appendChild(element);
        document.body.appendChild(this.wrapDatePicker);
        setTimeout(function () {
            var pickerHorizontalCoveringArea = coordinate.x + element.clientWidth;
            var pickerVerticalCoveringArea = coordinate.y + element.clientHeight;
            var windowWidth = _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__["UiWindowRef"].nativeWindow.innerWidth + (document.body.scrollLeft || window.scrollX);
            var windowHeight = _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__["UiWindowRef"].nativeWindow.innerHeight + (document.body.scrollTop || window.scrollY);
            if (pickerHorizontalCoveringArea > windowWidth) {
                coordinate.x = windowWidth - (element.clientWidth + 8);
            }
            if (pickerVerticalCoveringArea > windowHeight) {
                coordinate.y = windowHeight - (element.clientHeight + 8);
            }
            _this.wrapDatePicker.style.transform = '';
            element.style.position = 'absolute';
            element.style.top = coordinate.y + 'px';
            element.style.left = coordinate.x + 'px';
            _this.wrapDatePicker.classList.add('open');
            if (document.body.clientWidth <= 600) {
                document.body.style.overflowY = 'hidden';
            }
        });
    };
    UiDatePickerCallerDirective.prototype.renderDatePicker = function (component, coordinate) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["UiCalendarComponent"]);
        this.componentRef = componentFactory.create(this.injector);
        this.componentElement = this.getComponentAsElement(this.componentRef);
        this.setInstances(component, this.componentRef);
        this.applicationRef.attachView(this.componentRef.hostView);
        this.renderViewCalendar(this.componentElement, coordinate, component.themeClass);
        this.pickerOpen = true;
    };
    UiDatePickerCallerDirective.prototype.closePicker = function () {
        var _this = this;
        this.wrapDatePicker.classList.remove('open');
        setTimeout(function () {
            _this.pickerOpen = false;
            _this.applicationRef.detachView(_this.componentRef.hostView);
            document.body.style.overflowY = '';
            try {
                document.body.removeChild(_this.wrapDatePicker);
            }
            catch (e) {
            }
        }, 280);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiDatePickerCallerDirective.prototype, "pickerEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uiDatePickerCaller'),
        __metadata("design:type", String)
    ], UiDatePickerCallerDirective.prototype, "datePickerCaller", void 0);
    UiDatePickerCallerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiDatePickerCaller]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _references_service__WEBPACK_IMPORTED_MODULE_1__["UiReferencesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiDatePickerCallerDirective);
    return UiDatePickerCallerDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/date-picker/date-picker.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/date-picker/date-picker.directive.ts ***!
  \*************************************************************/
/*! exports provided: UiDatePickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDatePickerDirective", function() { return UiDatePickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _references_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./references.service */ "./src/app/smn-ui/date-picker/references.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/util/isDate */ "./node_modules/rxjs-compat/_esm5/util/isDate.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiDatePickerDirective = /** @class */ (function () {
    function UiDatePickerDirective(referencesService, element, changeDetectorRef) {
        this.referencesService = referencesService;
        this.element = element;
        this.changeDetectorRef = changeDetectorRef;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chosen = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.minDate = this.minDate && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_3__["isDate"])(new Date(this.minDate)) ? new Date(this.minDate) : this.minDate;
        this.maxDate = this.maxDate && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_3__["isDate"])(new Date(this.maxDate)) ? new Date(this.maxDate) : this.maxDate;
    }
    UiDatePickerDirective.prototype.ngOnInit = function () {
        this.referencesService.add(this.datePicker, this);
    };
    UiDatePickerDirective.prototype.ngAfterViewInit = function () {
        this.element.nativeElement.setAttribute('date-picker-name', this.datePicker);
    };
    UiDatePickerDirective.prototype.ngOnChanges = function (value) {
        this.chosen.next(value);
        if (value.ngModel && value.ngModel.currentValue === '') {
            this.ngModelChange.emit(null);
            this.changeDetectorRef.detectChanges();
        }
    };
    UiDatePickerDirective.prototype.ngOnDestroy = function () {
        this.referencesService.remove(this.datePicker);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiDatePickerDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiDatePickerDirective.prototype, "maxDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiDatePickerDirective.prototype, "minDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiDatePickerDirective.prototype, "initOnSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiDatePickerDirective.prototype, "confirmSelection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('theme-class'),
        __metadata("design:type", String)
    ], UiDatePickerDirective.prototype, "themeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uiDatePicker'),
        __metadata("design:type", String)
    ], UiDatePickerDirective.prototype, "datePicker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiDatePickerDirective.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiDatePickerDirective.prototype, "ngModelChange", void 0);
    UiDatePickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiDatePicker]'
        }),
        __metadata("design:paramtypes", [_references_service__WEBPACK_IMPORTED_MODULE_1__["UiReferencesService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UiDatePickerDirective);
    return UiDatePickerDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/date-picker/references.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/smn-ui/date-picker/references.service.ts ***!
  \**********************************************************/
/*! exports provided: UiReferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiReferencesService", function() { return UiReferencesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiReferencesService = /** @class */ (function () {
    function UiReferencesService() {
        this.datePickers = {};
    }
    UiReferencesService.prototype.add = function (name, component) {
        if (this.datePickers && this.datePickers[name]) {
            return;
        }
        this.datePickers[name] = component;
    };
    UiReferencesService.prototype.get = function (name) {
        return this.datePickers[name];
    };
    UiReferencesService.prototype.remove = function (name) {
        delete this.datePickers[name];
    };
    UiReferencesService.prototype.closeAll = function () {
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].trigger(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow, 'click');
    };
    UiReferencesService.prototype.getAll = function () {
        return this.datePickers;
    };
    UiReferencesService.prototype.updateModel = function (name, value) {
        this.datePickers[name].ngModel = value;
        this.datePickers[name].ngModelChange.emit(value);
    };
    UiReferencesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiReferencesService);
    return UiReferencesService;
}());



/***/ }),

/***/ "./src/app/smn-ui/dialog/dialog-trigger.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/dialog/dialog-trigger.directive.ts ***!
  \***********************************************************/
/*! exports provided: UiDialogTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDialogTriggerDirective", function() { return UiDialogTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiDialogTriggerDirective = /** @class */ (function () {
    function UiDialogTriggerDirective(viewContainerRef, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
    }
    UiDialogTriggerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dialog.closeChange.subscribe(function () {
            _this.close();
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(this.elementRef.nativeElement, this.triggerEvents || 'click', function () {
            _this.render();
        });
        this.clickOverlayToClose = this.clickOverlayToClose !== undefined ? this.clickOverlayToClose : true;
    };
    UiDialogTriggerDirective.prototype.render = function () {
        var _this = this;
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.dialog.templateRef);
        this.viewRef.detectChanges();
        this.viewRef.rootNodes.forEach(function (rootNode) {
            document.body.appendChild(rootNode);
            if (rootNode.clientWidth) {
                _this.open(rootNode);
            }
        });
    };
    UiDialogTriggerDirective.prototype.open = function (element) {
        var _this = this;
        this.opened = true;
        setTimeout(function () {
            var fabs = document.querySelectorAll('.ui-fab-container');
            if (_this.darkClass) {
                element.classList.add(_this.darkClass);
            }
            if (_this.themeClass) {
                element.classList.add(_this.themeClass);
            }
            if (_this.transparentOverlay) {
                element.classList.add('transparent-overlay');
            }
            if (_this.dialog.cardSize) {
                element.querySelectorAll('ui-card')[0].style.maxWidth = _this.dialog.cardSize + 'px';
                element.querySelectorAll('ui-card')[0].style.width = '100%';
            }
            if (!_this.transparentOverlay && fabs.length) {
                Array.prototype.forEach.call(fabs, function (fab) {
                    fab.classList.add('hide');
                });
            }
            if (_this.clickOverlayToClose) {
                element.querySelectorAll('.overlay')[0].addEventListener('click', function () {
                    _this.close();
                });
            }
            element.style.transform = '';
            element.classList.add('open');
            document.body.style.overflowY = 'hidden';
        });
    };
    UiDialogTriggerDirective.prototype.close = function () {
        var _this = this;
        this.opened = false;
        if (this.viewContainerRef.length) {
            var viewRef_1 = this.viewRef; // Salvando a referência para achar o index deste componente
            var fabs = document.querySelectorAll('.ui-fab-container');
            if (fabs.length) {
                Array.prototype.forEach.call(fabs, function (fab) {
                    fab.classList.remove('hide');
                });
            }
            viewRef_1.rootNodes.forEach(function (rootNode) {
                if (rootNode.classList) {
                    rootNode.classList.remove('open');
                }
            });
            setTimeout(function () { return _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef_1)); }, 280);
            document.body.style.overflowY = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('trigger-events'),
        __metadata("design:type", String)
    ], UiDialogTriggerDirective.prototype, "triggerEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dark-class'),
        __metadata("design:type", String)
    ], UiDialogTriggerDirective.prototype, "darkClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('theme-class'),
        __metadata("design:type", String)
    ], UiDialogTriggerDirective.prototype, "themeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('transparent-overlay'),
        __metadata("design:type", Boolean)
    ], UiDialogTriggerDirective.prototype, "transparentOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uiDialogTrigger'),
        __metadata("design:type", Object)
    ], UiDialogTriggerDirective.prototype, "dialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('click-overlay-to-close'),
        __metadata("design:type", Object)
    ], UiDialogTriggerDirective.prototype, "clickOverlayToClose", void 0);
    UiDialogTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiDialogTrigger]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiDialogTriggerDirective);
    return UiDialogTriggerDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\r\n    <div class=\"wrap-dialog\">\r\n        <div class=\"overlay\"></div>\r\n        <ui-card>\r\n            <ng-content>\r\n            </ng-content>\r\n        </ui-card>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/dialog/dialog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/dialog/dialog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.wrap-dialog {\n  position: fixed;\n  z-index: 5;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px; }\n.wrap-dialog ui-card {\n    -webkit-transform-origin: bottom;\n            transform-origin: bottom;\n    transition: opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n    transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1);\n    transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n    -webkit-transform: scale(0.8) translateY(16px);\n            transform: scale(0.8) translateY(16px);\n    box-shadow: 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 49px 8px rgba(0,0,0,.12), 0 11px 15px 0 rgba(0,0,0,.20);\n    opacity: 0;\n    max-width: 100%;\n    max-height: 100%;\n    overflow-y: auto; }\n.wrap-dialog .overlay {\n    transition: opacity 280ms;\n    left: 0;\n    top: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 0; }\n.wrap-dialog.open ui-card {\n    transition: opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n    -webkit-transform: scale(1) translateY(0);\n            transform: scale(1) translateY(0);\n    opacity: 1; }\n.wrap-dialog.open .overlay {\n    transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: 1; }\n"

/***/ }),

/***/ "./src/app/smn-ui/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: UiDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDialogComponent", function() { return UiDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiDialogComponent = /** @class */ (function () {
    function UiDialogComponent(elementRef) {
        this.elementRef = elementRef;
        this.closeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiDialogComponent.prototype.close = function () {
        var _this = this;
        this.opened = false;
        this.closeChange.emit();
        if (this.viewRef) {
            var fabs = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](document).querySelector('.ui-fab-container');
            if (fabs.length) {
                fabs.classList.remove('hide');
            }
            this.viewRef.rootNodes.forEach(function (rootNode) {
                if (rootNode.classList) {
                    rootNode.classList.remove('open');
                }
            });
            if (this.viewRef) {
                setTimeout(function () {
                    _this.viewRef.rootNodes.forEach(function (rootNode) {
                        rootNode.remove();
                    });
                    _this.viewRef.destroy();
                    _this.viewRef = null;
                }, 280);
            }
            document.body.style.overflowY = '';
        }
    };
    UiDialogComponent.prototype.show = function (config) {
        var _this = this;
        if (!this.viewRef) {
            var dialog = this;
            this.close();
            config = config || {};
            if (config.clickOverlayToClose === undefined) {
                config.clickOverlayToClose = true;
            }
            else if (config.clickOverlayToClose) {
                config.clickOverlayToClose = JSON.parse(config.clickOverlayToClose);
            }
            this.viewRef = dialog.templateRef.createEmbeddedView(dialog.templateRef);
            this.viewRef.detectChanges();
            this.viewRef.rootNodes.forEach(function (rootNode) {
                document.body.appendChild(rootNode);
                if (rootNode.clientWidth) {
                    _this.open(rootNode, config);
                }
            });
        }
    };
    UiDialogComponent.prototype.open = function (element, config) {
        var _this = this;
        this.opened = true;
        setTimeout(function () {
            var fabs = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](document).querySelector('.ui-fab-container');
            if (config.darkClass) {
                element.classList.add(config.darkClass);
            }
            if (config.themeClass) {
                element.classList.add(config.themeClass);
            }
            if (config.transparentOverlay) {
                element.classList.add('transparent-overlay');
            }
            if (config.cardSize || _this.cardSize) {
                element.querySelectorAll('ui-card')[0].style.maxWidth = (config.cardSize || _this.cardSize) + 'px';
                element.querySelectorAll('ui-card')[0].style.width = '100%';
            }
            if (!config.transparentOverlay && fabs.length) {
                fabs.classList.add('hide');
            }
            if (config.clickOverlayToClose) {
                element.querySelectorAll('.overlay')[0].addEventListener('click', function () {
                    _this.close();
                });
            }
            element.style.transform = '';
            element.classList.add('open');
            document.body.style.overflowY = 'hidden';
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('card-size'),
        __metadata("design:type", Number)
    ], UiDialogComponent.prototype, "cardSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiDialogComponent.prototype, "closeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UiDialogComponent.prototype, "templateRef", void 0);
    UiDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/smn-ui/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/smn-ui/dialog/dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiDialogComponent);
    return UiDialogComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/dialog/dialog.service.ts":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/dialog/dialog.service.ts ***!
  \*************************************************/
/*! exports provided: UiDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDialog", function() { return UiDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var viewRef;
var UiDialog = /** @class */ (function () {
    function UiDialog() {
    }
    UiDialog_1 = UiDialog;
    UiDialog.show = function (dialog, config) {
        UiDialog_1.hide();
        config = config || {};
        if (config.clickOverlayToClose === undefined) {
            config.clickOverlayToClose = true;
        }
        else if (config.clickOverlayToClose) {
            config.clickOverlayToClose = JSON.parse(config.clickOverlayToClose);
        }
        viewRef = dialog.templateRef.createEmbeddedView(dialog.templateRef);
        viewRef.detectChanges();
        viewRef.rootNodes.forEach(function (rootNode) {
            document.body.appendChild(rootNode);
            if (rootNode.clientWidth) {
                UiDialog_1.open(rootNode, config);
            }
        });
    };
    UiDialog.open = function (element, config) {
        setTimeout(function () {
            var fabs = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](document).querySelector('.ui-fab-container');
            if (config.darkClass) {
                element.classList.add(config.darkClass);
            }
            if (config.themeClass) {
                element.classList.add(config.themeClass);
            }
            if (config.transparentOverlay) {
                element.classList.add('transparent-overlay');
            }
            if (config.cardSize) {
                element.querySelectorAll('ui-card')[0].style.maxWidth = config.cardSize + 'px';
                element.querySelectorAll('ui-card')[0].style.width = '100%';
            }
            if (!config.transparentOverlay && fabs.length) {
                fabs.classList.add('hide');
            }
            if (config.clickOverlayToClose) {
                element.querySelectorAll('.overlay')[0].addEventListener('click', function () {
                    UiDialog_1.hide();
                });
            }
            element.style.transform = '';
            element.classList.add('open');
            document.body.style.overflowY = 'hidden';
        });
    };
    UiDialog.hide = function () {
        if (viewRef) {
            var fabs = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](document).querySelector('.ui-fab-container');
            if (fabs.length) {
                fabs.classList.remove('hide');
            }
            viewRef.rootNodes.forEach(function (rootNode) {
                if (rootNode.classList) {
                    rootNode.classList.remove('open');
                }
            });
            setTimeout(function () {
                viewRef.rootNodes.forEach(function (rootNode) {
                    rootNode.remove();
                });
                viewRef.destroy();
                viewRef = null;
            }, 280);
            document.body.style.overflowY = '';
        }
    };
    UiDialog = UiDialog_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UiDialog);
    return UiDialog;
    var UiDialog_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/ellipsis/ellipsis.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/smn-ui/ellipsis/ellipsis.directive.ts ***!
  \*******************************************************/
/*! exports provided: UiEllipsisDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiEllipsisDirective", function() { return UiEllipsisDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiEllipsisDirective = /** @class */ (function () {
    function UiEllipsisDirective(element) {
        this.element = element;
    }
    UiEllipsisDirective.prototype.ngOnInit = function () {
        var elementRef = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.element.nativeElement);
        this.uiEllipsis = this.uiEllipsis || 1;
        this.lineHeight = this.lineHeight || 17;
        elementRef.css('-webkit-line-clamp', this.uiEllipsis);
        elementRef.css('max-height', (this.lineHeight * this.uiEllipsis) + 'px');
        elementRef.css('line-height', this.lineHeight + 'px');
        elementRef.on('mousemove', function () {
            if (elementRef.nativeElement.scrollHeight > elementRef.nativeElement.clientHeight) {
                elementRef.nativeElement.setAttribute('title', elementRef.nativeElement.innerText);
            }
            else {
                elementRef.nativeElement.removeAttribute('title');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiEllipsisDirective.prototype, "uiEllipsis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Number)
    ], UiEllipsisDirective.prototype, "uiEllipsisChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('line-height'),
        __metadata("design:type", Number)
    ], UiEllipsisDirective.prototype, "lineHeight", void 0);
    UiEllipsisDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[uiEllipsis]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiEllipsisDirective);
    return UiEllipsisDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/input/autosize.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/smn-ui/input/autosize.directive.ts ***!
  \****************************************************/
/*! exports provided: UiInputAutosizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInputAutosizeDirective", function() { return UiInputAutosizeDirective; });
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

var MAX_LOOKUP_RETRIES = 3;
var UiInputAutosizeDirective = /** @class */ (function () {
    function UiInputAutosizeDirective(element) {
        this.element = element;
        this.retries = 0;
        if (this.element.nativeElement.tagName !== 'TEXTAREA') {
            this._findNestedTextArea();
        }
        else {
            this.textAreaEl = this.element.nativeElement;
        }
    }
    UiInputAutosizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    UiInputAutosizeDirective.prototype._findNestedTextArea = function () {
        var _this = this;
        this.textAreaEl = this.element.nativeElement.getElementsByTagName('textarea')[0];
        if (!this.textAreaEl) {
            if (this.retries >= MAX_LOOKUP_RETRIES) {
                console.error('textarea não encontrado');
            }
            else {
                this.retries++;
                setTimeout(function () {
                    _this._findNestedTextArea();
                }, 100);
            }
        }
    };
    UiInputAutosizeDirective.prototype.ngOnChanges = function (changes) {
        this.adjust();
    };
    UiInputAutosizeDirective.prototype.adjust = function () {
        if (!!this.textAreaEl) {
            this.textAreaEl.style.overflow = 'hidden';
            this.textAreaEl.style.height = 'auto';
            this.textAreaEl.style.height = this.textAreaEl.scrollHeight + 'px';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiInputAutosizeDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], UiInputAutosizeDirective.prototype, "onInput", null);
    UiInputAutosizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[autosize]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiInputAutosizeDirective);
    return UiInputAutosizeDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/input/input-container.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/input/input-container.component.ts ***!
  \***********************************************************/
/*! exports provided: UiInputContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInputContainerComponent", function() { return UiInputContainerComponent; });
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

var UiInputContainerComponent = /** @class */ (function () {
    function UiInputContainerComponent(element) {
        this.element = element;
    }
    UiInputContainerComponent.prototype.ngAfterViewInit = function () {
        var nativeElement = this.element.nativeElement;
        var inputWrap = nativeElement.getElementsByClassName('ui-input-wrap')[0];
        var icon = nativeElement.getElementsByClassName('icon')[0];
        var line = document.createElement('div');
        line.className = 'line';
        inputWrap.appendChild(line);
        if (icon) {
            var methodInsertIcon = icon === inputWrap.firstElementChild ? 'insertBefore' : 'appendChild';
            inputWrap.removeChild(icon);
            nativeElement[methodInsertIcon](icon, nativeElement.firstChild);
        }
    };
    UiInputContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-input-container',
            template: "\n    <div class=\"ui-input-wrap\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/smn-ui/input/input.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiInputContainerComponent);
    return UiInputContainerComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/input/input-file.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/smn-ui/input/input-file.directive.ts ***!
  \******************************************************/
/*! exports provided: UiInputFileDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInputFileDirective", function() { return UiInputFileDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiInputFileDirective = /** @class */ (function () {
    function UiInputFileDirective(element, ngControl) {
        this.element = element;
        this.ngControl = ngControl;
        this.filesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiInputFileDirective.prototype.onChange = function (e) {
        e.stopPropagation();
        e.preventDefault();
        this.ngControl.control.markAsDirty();
        this.ngControl.control.setErrors(null);
        this.model = [];
        var files = e.target.files;
        var accepts = this.accept ? this.accept.split(',') : [];
        var maxSize = this.maxSize ? this.toByte(this.maxSize) : null;
        var maxFileSize = this.maxFileSize ? this.toByte(this.maxFileSize) : null;
        var sum = 0;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            sum += file.size;
            var validMaxFileSize = this.validateMaxSize(file.size, maxFileSize);
            var validMaxSize = this.validateMaxSize(sum, maxSize);
            var fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1);
            var validType = this.validateType(file, fileExtension, accepts);
            if (validMaxFileSize) {
                this.ngControl.control.setErrors(Object.assign(this.ngControl.errors || {}, { maxFileSize: true }));
            }
            if (!validType) {
                this.ngControl.control.setErrors(Object.assign(this.ngControl.errors || {}, { accept: true }));
            }
            if (this.validateMaxSize(sum, maxSize)) {
                this.ngControl.control.setErrors(Object.assign(this.ngControl.errors || {}, { maxSize: true }));
            }
            if (validType && !validMaxFileSize && !validMaxSize) {
                this.model.push({});
                this.modelChange.emit(this.model);
                this.readFile(file, this.model[i], i);
            }
            else if (this.error) {
                this.error(file, {
                    type: !validType,
                    maxSize: validMaxSize,
                    maxFileSize: validMaxFileSize
                }, i);
            }
        }
        this.files = e.target.files;
        this.filesChange.emit(this.files);
        if (this.fileChange) {
            this.fileChange(this.files, this.ngControl.control.invalid);
        }
    };
    UiInputFileDirective.prototype.validateType = function (file, extension, accepts) {
        if (!accepts.length) {
            return true;
        }
        for (var j = 0; j < accepts.length; j++) {
            var accept = accepts[j].trim();
            var regex = accept.match(/^[^\*]*\*$/) ? new RegExp('^' + accept) : new RegExp('^' + accept + '$');
            if (file.type.match(regex) || extension.match(regex)) {
                return true;
            }
        }
        return false;
    };
    UiInputFileDirective.prototype.validateMaxSize = function (size, maxSize) {
        return (maxSize && size > maxSize);
    };
    UiInputFileDirective.prototype.toByte = function (sizeString) {
        sizeString = sizeString.toString();
        var unitMatch = sizeString.match(/[a-zA-Z]+/g);
        var unit = unitMatch ? unitMatch[0] : null;
        var sizeMatch = sizeString.match(/\d+/);
        var unitSize = sizeMatch ? parseInt(sizeMatch[0], 10) : null;
        var size = unitSize;
        switch (unit) {
            case 'KB':
                size = unitSize * 1024;
                break;
            case 'MB':
                size = unitSize * Math.pow(1024, 2);
                break;
            case 'GB':
                size = unitSize * Math.pow(1024, 3);
                break;
            case 'TB':
                size = unitSize * Math.pow(1024, 4);
                break;
            case 'PB':
                size = unitSize * Math.pow(1024, 5);
                break;
            case 'EB':
                size = unitSize * Math.pow(1024, 6);
                break;
            case 'ZB':
                size = unitSize * Math.pow(1024, 7);
                break;
            case 'YB':
                size = unitSize * Math.pow(1024, 8);
                break;
        }
        return size;
    };
    UiInputFileDirective.prototype.readFile = function (file, data, index) {
        var _this = this;
        var reader = new FileReader();
        data.resolved = 'false';
        reader.onload = function (e) {
            data.result = e.target.result;
            data.resolved = true;
            _this.modelChange.emit(_this.model);
            _this.read(file, data.result, index);
        };
        reader.onerror = function (e) {
            data.error = e.target.error;
            _this.modelChange.emit(_this.model);
        };
        reader.onprogress = function (e) {
            data.progress = {
                loaded: e.loaded,
                total: e.total,
                percent: Math.round((e.loaded / e.total) * 100)
            };
            _this.modelChange.emit(_this.model);
        };
        reader.readAsDataURL(file);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiInputFileDirective.prototype, "files", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiInputFileDirective.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiInputFileDirective.prototype, "accept", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], UiInputFileDirective.prototype, "read", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], UiInputFileDirective.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], UiInputFileDirective.prototype, "fileChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('max-size'),
        __metadata("design:type", String)
    ], UiInputFileDirective.prototype, "maxSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('max-file-size'),
        __metadata("design:type", String)
    ], UiInputFileDirective.prototype, "maxFileSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiInputFileDirective.prototype, "filesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiInputFileDirective.prototype, "modelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiInputFileDirective.prototype, "onChange", null);
    UiInputFileDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiInputFile]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]])
    ], UiInputFileDirective);
    return UiInputFileDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/input/input.component.scss":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/input/input.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\ntextarea {\n  resize: none; }\nui-input-container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\nui-input-container > * + * {\n    margin-left: 16px; }\nui-input-container .ui-input-wrap {\n    position: relative;\n    flex: 1;\n    padding-top: 16px;\n    margin-bottom: 26px; }\nui-input-container label {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 24px;\n    pointer-events: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 16px;\n    transition: 225ms;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\nui-input-container select {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\nui-input-container .ui-control {\n    display: block;\n    font-size: 16px;\n    font-weight: 400;\n    background-color: transparent;\n    padding: 8px 0;\n    width: 100%;\n    border-bottom-width: 1px;\n    border-style: solid;\n    border-radius: 0;\n    min-height: 35px; }\nui-input-container .ui-control:disabled, ui-input-container .ui-control:-moz-read-only:not(select) {\n      border-style: dotted; }\nui-input-container .ui-control:disabled, ui-input-container .ui-control:read-only:not(select) {\n      border-style: dotted; }\nui-input-container .ui-control:focus ~ label,\n    ui-input-container .ui-control:not(.ui-empty) ~ label,\n    ui-input-container .ui-control.elevate ~ label {\n      top: 4px;\n      font-size: 12px; }\nui-input-container .ui-control[required] ~ label::after {\n      content: '*';\n      margin-left: 2px; }\nui-input-container .ui-control[required]:focus ~ label::after {\n      color: #f44336; }\nui-input-container .ui-control.ng-invalid.ng-dirty ~ label {\n      -webkit-animation: shake 360ms;\n              animation: shake 360ms; }\nui-input-container .ui-control:focus ~ .line {\n      opacity: 1;\n      left: 0;\n      width: 100%; }\nui-input-container .line {\n    position: absolute;\n    bottom: -1px;\n    height: 2px;\n    left: 50%;\n    width: 0;\n    transition: all 225ms;\n    opacity: 0; }\nui-input-container .ui-messages {\n    display: block;\n    position: relative;\n    top: 6px; }\nui-input-container .ui-messages .ui-message {\n      font-size: 12px;\n      position: absolute;\n      left: 0;\n      right: 0; }\nui-input-container .ui-messages .ui-message.counter {\n        text-align: right; }\nui-input-container .ui-messages .ui-message.counter.error, ui-input-container .ui-messages .ui-message.error {\n        color: #f44336; }\nui-input-container .suffix {\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    right: 0;\n    margin-top: -4px;\n    cursor: default;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    top: 20px; }\nui-input-container .suffix.text {\n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n      margin-top: 0; }\nui-input-container .suffix ~ .ui-control {\n      padding-right: 32px; }\nui-input-container.no-pad .ui-input-wrap,\n  ui-input-container.no-space .ui-input-wrap {\n    padding-top: 0; }\nui-input-container.no-margin .ui-input-wrap,\n  ui-input-container.no-space .ui-input-wrap {\n    margin-bottom: 0; }\nui-input-container .ui-control.center {\n    text-align: center; }\nui-input-container .ui-control.right {\n    text-align: right; }\n/* Validate */\n.ui-validate:not(.on-dirty):not(.on-submit) .ui-control.ng-invalid,\n.ui-validate.on-dirty .ui-control.ng-dirty.ng-invalid,\n.ui-validate.on-submit.ng-submitted .ui-control.ng-invalid {\n  border-color: #f44336; }\n.ui-validate:not(.on-dirty):not(.on-submit) .ui-control.ng-invalid ~ label,\n.ui-validate.on-dirty .ui-control.ng-dirty.ng-invalid ~ label,\n.ui-validate.on-submit.ng-submitted .ui-control.ng-invalid ~ label {\n  color: #f44336; }\n.ui-validate:not(.on-dirty):not(.on-submit) .ui-control.ng-invalid ~ .line,\n.ui-validate.on-dirty .ui-control.ng-dirty.ng-invalid ~ .line,\n.ui-validate.on-submit.ng-submitted .ui-control.ng-invalid ~ .line {\n  background-color: #f44336; }\n/* Animations */\n@-webkit-keyframes shake {\n  25% {\n    -webkit-transform: translateX(3px);\n            transform: translateX(3px); }\n  50% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  75% {\n    -webkit-transform: translateX(1px);\n            transform: translateX(1px); } }\n@keyframes shake {\n  25% {\n    -webkit-transform: translateX(3px);\n            transform: translateX(3px); }\n  50% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  75% {\n    -webkit-transform: translateX(1px);\n            transform: translateX(1px); } }\nfieldset:disabled ui-input-container, fieldset:disabled ui-input-container * {\n  cursor: not-allowed; }\n"

/***/ }),

/***/ "./src/app/smn-ui/input/input.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/input/input.directive.ts ***!
  \*************************************************/
/*! exports provided: UiInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInputDirective", function() { return UiInputDirective; });
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

var UiInputDirective = /** @class */ (function () {
    function UiInputDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placeholder = element.nativeElement.placeholder;
    }
    UiInputDirective.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this.element.nativeElement, 'ui-control');
        this.setPlaceholder();
    };
    UiInputDirective.prototype.ngOnChanges = function () {
        this.isEmpty(this.ngModel);
    };
    UiInputDirective.prototype.onBlur = function () {
        this.isEmpty(this.ngModel);
    };
    UiInputDirective.prototype.onFocus = function () {
        this.isEmpty(this.ngModel);
        this.setPlaceholder(this.placeholder);
    };
    UiInputDirective.prototype.onFocusout = function () {
        this.setPlaceholder();
    };
    UiInputDirective.prototype.isEmpty = function (value) {
        // TODO: Try model e view value
        var self = this;
        function isEmpty() {
            var action = !value && !self.element.nativeElement.value ? 'addClass' : 'removeClass';
            if (self.ngModel && self.ngModel.trim && !self.ngModel.trim()) {
                action = 'addClass';
            }
            self.renderer[action](self.element.nativeElement, 'ui-empty');
        }
        isEmpty();
        setTimeout(isEmpty);
    };
    UiInputDirective.prototype.setPlaceholder = function (value) {
        value = this.persistPlaceholder ? this.placeholder : value || '';
        this.renderer.setProperty(this.element.nativeElement, 'placeholder', value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiInputDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiInputDirective.prototype, "persistPlaceholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiInputDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiInputDirective.prototype, "onBlur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiInputDirective.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiInputDirective.prototype, "onFocusout", null);
    UiInputDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiInput]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], UiInputDirective);
    return UiInputDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/lazy-load/lazy-load.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/smn-ui/lazy-load/lazy-load.directive.ts ***!
  \*********************************************************/
/*! exports provided: UiLazyLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiLazyLoadDirective", function() { return UiLazyLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiLazyLoadDirective = /** @class */ (function () {
    function UiLazyLoadDirective(element) {
        var _this = this;
        this.element = element;
        this.elementRef = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](element.nativeElement);
        this.elementRef.on('load', function () {
            _this.elementRef.classList.add('loaded');
        });
    }
    UiLazyLoadDirective.prototype.ngDoCheck = function () {
        if (!this.visible && this.elementRef.isInViewport()) {
            this.visible = true;
            this.elementRef.attribute('src', this.lazySrc);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('lazy-src'),
        __metadata("design:type", Object)
    ], UiLazyLoadDirective.prototype, "lazySrc", void 0);
    UiLazyLoadDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[uiLazyLoad][lazy-src]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiLazyLoadDirective);
    return UiLazyLoadDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/list/item/item.component.html":
/*!******************************************************!*\
  !*** ./src/app/smn-ui/list/item/item.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!item.childs && !item.url\" class=\"ui-list-item disabled\">\r\n    <span *ngIf=\"!!item.icon\" class=\"icon\">\r\n        <i *ngIf=\"item.icon.material\" class=\"material-icons\">{{item.icon.material}}</i>\r\n        <img *ngIf=\"!!item.icon.img\" [src]=\"item.icon.img\" style=\"width:24px;height:24px\"/>\r\n    </span>\r\n    {{item.name}}\r\n</div>\r\n<a *ngIf=\"!item.childs && item.url\" class=\"ui-list-item\" uiRipple\r\n   [routerLink]=\"item.url ? [item.url] : null\"\r\n   [routerLinkActive]=\"['active']\">{{item.name}}\r\n</a>\r\n<div *ngIf=\"item.childs\">\r\n    <div class=\"ui-list-item\" uiRipple [uiListItem]=\"childs\">\r\n                    <span *ngIf=\"!!item.icon\" class=\"icon\">\r\n                        <i *ngIf=\"item.icon.material\" class=\"material-icons\">{{item.icon.material}}</i>\r\n                        <img *ngIf=\"!!item.icon.img\" [src]=\"item.icon.img\" style=\"width:24px;height:24px\"/>\r\n                    </span>\r\n        {{item.name}}\r\n        <span class=\"arrow\"><i class=\"material-icons\">keyboard_arrow_down</i></span>\r\n    </div>\r\n    <div class=\"ui-list-item-group\" #childs>\r\n        <div>\r\n            <ui-list-items [items]=\"item.childs\"></ui-list-items>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/list/item/item.component.ts":
/*!****************************************************!*\
  !*** ./src/app/smn-ui/list/item/item.component.ts ***!
  \****************************************************/
/*! exports provided: UiListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiListItemComponent", function() { return UiListItemComponent; });
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

var UiListItemComponent = /** @class */ (function () {
    function UiListItemComponent() {
    }
    UiListItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiListItemComponent.prototype, "item", void 0);
    UiListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-list-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/smn-ui/list/item/item.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UiListItemComponent);
    return UiListItemComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/list/items/items.component.html":
/*!********************************************************!*\
  !*** ./src/app/smn-ui/list/items/items.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of items\">\r\n    <ui-list-item [item]=\"item\"></ui-list-item>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/list/items/items.component.ts":
/*!******************************************************!*\
  !*** ./src/app/smn-ui/list/items/items.component.ts ***!
  \******************************************************/
/*! exports provided: UiListItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiListItemsComponent", function() { return UiListItemsComponent; });
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

var UiListItemsComponent = /** @class */ (function () {
    function UiListItemsComponent() {
    }
    UiListItemsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiListItemsComponent.prototype, "items", void 0);
    UiListItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-list-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/smn-ui/list/items/items.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UiListItemsComponent);
    return UiListItemsComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/list/list-item.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/smn-ui/list/list-item.directive.ts ***!
  \****************************************************/
/*! exports provided: UiListItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiListItemDirective", function() { return UiListItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiListItemDirective = /** @class */ (function () {
    function UiListItemDirective(element) {
        this.element = element;
    }
    UiListItemDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var itemActive = _this.uiListItem.querySelectorAll('.ui-list-item.active')[0];
            if (itemActive) {
                _this.element.nativeElement.classList.toggle('expanded');
                _this.uiListItem.classList.toggle('expanded');
                toggleExpand(_this.uiListItem, _this.element.nativeElement);
            }
        });
    };
    UiListItemDirective.prototype.onClick = function () {
        this.element.nativeElement.classList.toggle('expanded');
        this.uiListItem.classList.toggle('expanded');
        toggleExpand(this.uiListItem, this.element.nativeElement);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiListItemDirective.prototype, "uiListItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiListItemDirective.prototype, "onClick", null);
    UiListItemDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[uiListItem]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiListItemDirective);
    return UiListItemDirective;
}());

function toggleExpand(elementList, elementTrigger) {
    if (!elementList.style.height || elementList.style.height === '0px') {
        var height = getHeight(elementList);
        elementList.style.height = (elementList.style.maxHeight ? (height > elementList.style.maxHeight.replace('px', '') ? elementList.style.maxHeight : height + 'px') : height + 'px');
        var listItemGroup = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].closest(elementList, '.ui-list-item-group');
        while (listItemGroup) {
            listItemGroup.style.height = getHeight(listItemGroup) + height + 'px';
            if (listItemGroup) {
                listItemGroup = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].closest(listItemGroup, '.ui-list-item-group');
            }
        }
    }
    else {
        var backupHeight = parseInt(elementList.style.height.replace('px', ''), 10);
        elementList.style.height = '';
        var listItemGroup = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].closest(elementList, '.ui-list-item-group');
        while (listItemGroup) {
            listItemGroup.style.height = getHeight(listItemGroup) - backupHeight + 'px';
            if (listItemGroup) {
                listItemGroup = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].closest(listItemGroup, '.ui-list-item-group');
            }
        }
    }
    setTimeout(function () {
        var list = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].closest(elementList, '.ui-list');
        if (list) {
            var overflow_1 = list.parentNode;
            if (_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].is(overflow_1, 'ui-list')) {
                overflow_1 = overflow_1.parentNode;
            }
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].animate(elementList, 'border-spacing', overflow_1.scrollTop, elementTrigger.offsetTop, 500, null, function (tick) {
                overflow_1.scrollTop = tick;
            });
        }
    }, 500);
}
function getHeight(element) {
    return Array.prototype.reduce.call(element.childNodes, function (p, c) { return p + (c.offsetHeight || 0); }, 0);
}


/***/ }),

/***/ "./src/app/smn-ui/list/list.component.html":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/list/list.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n    <div class=\"ui-list\">\r\n        <ng-content></ng-content>\r\n        <ui-list-items [items]=\"list\"></ui-list-items>\r\n    </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/list/list.component.ts":
/*!***********************************************!*\
  !*** ./src/app/smn-ui/list/list.component.ts ***!
  \***********************************************/
/*! exports provided: UiListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiListComponent", function() { return UiListComponent; });
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

var UiListComponent = /** @class */ (function () {
    function UiListComponent() {
    }
    UiListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.list) {
            console.error('É obrigatório fornecer a model "list"');
            return false;
        }
        if (!this.itemModel) {
            this.itemModel = {
                id: 'id',
                parentId: 'parentId',
                name: 'name',
                url: 'url',
                icon: 'icon'
            };
        }
        this.list.forEach(function (item) {
            Object.keys(_this.itemModel).forEach(function (key) {
                var old_key = _this.itemModel[key];
                renameObjectKey(item, old_key, key);
            });
        });
        this.list = iteratePristineMenu(this.list);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiListComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item-model'),
        __metadata("design:type", Object)
    ], UiListComponent.prototype, "itemModel", void 0);
    UiListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/smn-ui/list/list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], UiListComponent);
    return UiListComponent;
}());

function iteratePristineMenu(allItems) {
    var remainingList = [];
    var newMenu = allItems.filter(function (item) {
        if (item.parentId !== null) {
            remainingList.push(item);
        }
        return item.parentId === null;
    });
    return iterateOptionsMenu(newMenu, remainingList)[0];
}
function iterateOptionsMenu(list, fullList) {
    var remainingList;
    var _loop_1 = function (i) {
        remainingList = [];
        var target = list[i];
        var subMenus = fullList.filter(function (item) {
            if (item.parentId !== target.id) {
                remainingList.push(item);
            }
            return item.parentId === target.id;
        });
        if (subMenus.length) {
            target.childs = subMenus;
            remainingList = iterateOptionsMenu(target.childs, remainingList)[1];
        }
    };
    for (var i = 0; i < list.length; i++) {
        _loop_1(i);
    }
    return [list, remainingList];
}
function renameObjectKey(obj, oldName, newName) {
    if (!obj.hasOwnProperty(oldName) || oldName === newName) {
        return false;
    }
    obj[newName] = obj[oldName];
    delete obj[oldName];
    return true;
}


/***/ }),

/***/ "./src/app/smn-ui/menu/menu-trigger.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/smn-ui/menu/menu-trigger.directive.ts ***!
  \*******************************************************/
/*! exports provided: UiMenuTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMenuTriggerDirective", function() { return UiMenuTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiMenuTriggerDirective = /** @class */ (function () {
    function UiMenuTriggerDirective(viewContainerRef, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
    }
    UiMenuTriggerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.menu.closeChange.subscribe(function () {
            _this.close();
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(this.elementRef.nativeElement, this.triggerEvents || 'click', function () {
            if (!_this.persistentMenu) {
                _this.close();
            }
            setTimeout(function () {
                var position = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].position(_this.elementRef.nativeElement);
                var coordinate = {
                    x: position.left,
                    y: position.top
                };
                _this.render(coordinate);
            });
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_2__["UiWindowRef"].nativeWindow, 'mouseup resize scroll touchend', function (e) {
            if (_this.elementRef.nativeElement !== e.target) {
                if (!_this.persistentMenu) {
                    _this.close();
                }
            }
        });
    };
    UiMenuTriggerDirective.prototype.ngAfterViewChecked = function () {
    };
    UiMenuTriggerDirective.prototype.render = function (coordinate) {
        var _this = this;
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.menu.templateRef);
        this.viewRef.detectChanges();
        this.viewRef.rootNodes.forEach(function (rootNode) {
            document.body.appendChild(rootNode);
            if (rootNode.clientWidth) {
                _this.open(rootNode, coordinate);
            }
        });
    };
    UiMenuTriggerDirective.prototype.open = function (element, coordinate) {
        var _this = this;
        setTimeout(function () {
            var horizontalCoveringArea = coordinate.x + element.clientWidth;
            var verticalCoveringArea = coordinate.y + element.clientHeight;
            var windowWidth = window.innerWidth + document.body.scrollLeft;
            var windowHeight = document.body.clientHeight + (document.body.scrollTop || window.scrollY);
            if (_this.align === 'right' || _this.menuAlign === 'right') {
                coordinate.x -= element.clientWidth - _this.elementRef.nativeElement.clientWidth;
                horizontalCoveringArea = coordinate.x;
            }
            if (horizontalCoveringArea > windowWidth) {
                coordinate.x = windowWidth - (element.clientWidth + 8);
            }
            if (coordinate.x <= 8) {
                coordinate.x = 8;
            }
            if (verticalCoveringArea > windowHeight) {
                coordinate.y = windowHeight - (element.clientHeight + 8);
            }
            if (coordinate.y <= 0) {
                coordinate.y = 0;
            }
            if (_this.themeClass) {
                element.classList.add(_this.themeClass);
            }
            if (_this.align || _this.menuAlign) {
                element.classList.add(_this.align || _this.menuAlign);
            }
            element.style.transform = '';
            element.querySelector('ui-card').style.maxHeight = _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_2__["UiWindowRef"].nativeWindow.innerHeight + 'px';
            element.style.top = coordinate.y + 'px';
            element.style.left = coordinate.x + 'px';
            element.classList.add('open');
        });
    };
    UiMenuTriggerDirective.prototype.close = function () {
        var _this = this;
        if (this.viewContainerRef.length) {
            var viewRef_1 = this.viewRef; // Salvando a referência para achar o index deste componente
            viewRef_1.rootNodes.forEach(function (rootNode) {
                if (rootNode.classList) {
                    rootNode.classList.remove('open');
                }
            });
            setTimeout(function () { return _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef_1)); }, 280);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('trigger-events'),
        __metadata("design:type", Object)
    ], UiMenuTriggerDirective.prototype, "triggerEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('theme-class'),
        __metadata("design:type", Object)
    ], UiMenuTriggerDirective.prototype, "themeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMenuTriggerDirective.prototype, "align", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menu-align'),
        __metadata("design:type", Object)
    ], UiMenuTriggerDirective.prototype, "menuAlign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uiMenuTrigger'),
        __metadata("design:type", Object)
    ], UiMenuTriggerDirective.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMenuTriggerDirective.prototype, "persistentMenu", void 0);
    UiMenuTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMenuTrigger]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiMenuTriggerDirective);
    return UiMenuTriggerDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\r\n    <div class=\"wrap-menu\">\r\n        <ui-card>\r\n            <ng-content>\r\n            </ng-content>\r\n        </ui-card>\r\n    </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/smn-ui/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/menu/menu.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.wrap-menu {\n  position: absolute;\n  transition: opacity 280ms, -webkit-transform 280ms;\n  transition: transform 280ms, opacity 280ms;\n  transition: transform 280ms, opacity 280ms, -webkit-transform 280ms;\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n  z-index: 5; }\n.wrap-menu.right {\n    -webkit-transform-origin: top right;\n            transform-origin: top right; }\n.wrap-menu.top {\n    -webkit-transform-origin: top;\n            transform-origin: top; }\n.wrap-menu.open {\n    transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n.wrap-menu ui-card {\n    box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.20);\n    overflow-y: auto; }\n.wrap-menu .ui-menu-title {\n    font-size: 14px;\n    font-weight: 500;\n    padding: 8px 24px; }\n.wrap-menu .ui-menu-content {\n    padding: 8px 0;\n    min-width: 56px; }\n.wrap-menu .ui-menu-content.size-2x {\n      min-width: 112px; }\n.wrap-menu .ui-menu-content.size-3x {\n      min-width: 168px; }\n.wrap-menu .ui-menu-content.size-4x {\n      min-width: 224px; }\n.wrap-menu .ui-menu-content.size-5x {\n      min-width: 280px; }\n.wrap-menu .ui-menu-content.size-6x {\n      min-width: 336px; }\n.wrap-menu .ui-menu-content.size-7x {\n      min-width: 392px; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n      .wrap-menu .ui-menu-content.size-2x {\n        min-width: 128px; }\n      .wrap-menu .ui-menu-content.size-3x {\n        min-width: 192px; }\n      .wrap-menu .ui-menu-content.size-4x {\n        min-width: 256px; }\n      .wrap-menu .ui-menu-content.size-5x {\n        min-width: 320px; }\n      .wrap-menu .ui-menu-content.size-6x {\n        min-width: 384px; }\n      .wrap-menu .ui-menu-content.size-7x {\n        min-width: 448px; } }\n.wrap-menu .ui-menu-item {\n    height: 48px;\n    line-height: 48px;\n    padding: 0 16px;\n    white-space: nowrap;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: flex;\n    align-items: center;\n    color: inherit;\n    text-decoration: none; }\n.wrap-menu .ui-menu-item:not(a) {\n      cursor: default; }\n.wrap-menu .ui-menu-item .icon {\n      margin-right: 14px;\n      margin-left: -4px; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n      .wrap-menu .ui-menu-item {\n        height: 32px;\n        line-height: 32px;\n        font-size: 15px;\n        padding: 0 24px; } }\n.wrap-menu ui-subheader {\n    color: inherit;\n    padding: 0 16px; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n      .wrap-menu ui-subheader {\n        min-height: 32px;\n        padding: 0 24px; } }\nbody.ui-nav-drawer-persistent .wrap-menu {\n  z-index: 6; }\n"

/***/ }),

/***/ "./src/app/smn-ui/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/smn-ui/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: UiMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMenuComponent", function() { return UiMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiMenuComponent = /** @class */ (function () {
    function UiMenuComponent(viewContainerRef, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.closeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // OLD VERSION
    }
    UiMenuComponent.prototype.ngOnDestroy = function () {
        this.close();
    };
    UiMenuComponent.prototype.show = function (event, config) {
        if (config) {
            this.element = config.element || null;
            this.themeClass = config.class || null;
            this.menuAlign = config.align || null;
            this.persistentMenu = config.persistent || null;
        }
        this.createListener();
        var coordinate = {
            x: event.clientX,
            y: event.clientY + window.pageYOffset
        };
        if (this.element) {
            var position = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].position(this.element);
            coordinate = {
                x: position.left,
                y: position.top
            };
        }
        this.render(coordinate);
    };
    UiMenuComponent.prototype.render = function (coordinate) {
        var _this = this;
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.viewRef.detectChanges();
        this.viewRef.rootNodes.forEach(function (rootNode) {
            document.body.appendChild(rootNode);
            if (rootNode.clientWidth) {
                _this.open(rootNode, coordinate);
            }
        });
    };
    UiMenuComponent.prototype.open = function (element, coordinate) {
        var _this = this;
        setTimeout(function () {
            var horizontalCoveringArea = coordinate.x + element.clientWidth;
            var verticalCoveringArea = coordinate.y + element.clientHeight;
            var windowWidth = window.innerWidth + document.body.scrollLeft;
            var windowHeight = document.body.clientHeight + (document.body.scrollTop || window.scrollY);
            if (_this.menuAlign === 'right') {
                coordinate.x -= element.clientWidth - (_this.element ? _this.element.clientWidth : 0);
                horizontalCoveringArea = coordinate.x;
            }
            if (horizontalCoveringArea > windowWidth) {
                element.classList.add('right');
                coordinate.x = windowWidth - (element.clientWidth + 8);
            }
            if (coordinate.x <= 8) {
                coordinate.x = 8;
            }
            if (verticalCoveringArea > windowHeight) {
                coordinate.y = windowHeight - (element.clientHeight + 8);
            }
            if (coordinate.y <= 0) {
                coordinate.y = 0;
            }
            if (_this.themeClass) {
                element.classList.add(_this.themeClass);
            }
            if (_this.menuAlign) {
                element.classList.add(_this.menuAlign);
            }
            element.style.transform = '';
            element.querySelector('ui-card').style.maxHeight = _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow.innerHeight + 'px';
            element.style.top = coordinate.y + 'px';
            element.style.left = coordinate.x + 'px';
            element.classList.add('open');
        });
    };
    UiMenuComponent.prototype.close = function () {
        var _this = this;
        this.closeChange.emit(); // OLD VERSION
        if (this.viewContainerRef.length) {
            var viewRef_1 = this.viewRef; // Salvando a referência para achar o index deste componente
            viewRef_1.rootNodes.forEach(function (rootNode) {
                if (rootNode.classList) {
                    rootNode.classList.remove('open');
                }
            });
            setTimeout(function () { return _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef_1)); }, 280);
        }
    };
    UiMenuComponent.prototype.createListener = function () {
        var _this = this;
        if (!this.listenerExists) {
            this.listenerExists = true;
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow, 'mouseup resize scroll touchend', function (e) {
                if (_this.elementRef.nativeElement !== e.target) {
                    if (!_this.persistentMenu) {
                        _this.close();
                    }
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UiMenuComponent.prototype, "templateRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMenuComponent.prototype, "closeChange", void 0);
    UiMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/smn-ui/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/smn-ui/menu/menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiMenuComponent);
    return UiMenuComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/nav-drawer/nav-drawer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/nav-drawer/nav-drawer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <ng-content></ng-content>\r\n</nav>\r\n<div class=\"ui-nav-drawer-overlay\" (click)=\"closeMenuOverlay()\"></div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/nav-drawer/nav-drawer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/nav-drawer/nav-drawer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\nui-nav-drawer nav {\n  top: 0;\n  bottom: 0;\n  max-width: 320px;\n  position: fixed;\n  width: 100%;\n  z-index: 7;\n  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px 0 rgba(0,0,0,.20);\n  transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  left: -10px;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\nui-nav-drawer nav .ui-nav-drawer-overflow {\n    height: calc(100% - 64px);\n    overflow: auto;\n    margin-top: -1px;\n    position: relative; }\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n    ui-nav-drawer nav {\n      width: calc(100% - 56px); } }\nui-nav-drawer nav .ui-list {\n    padding-bottom: 0; }\nui-nav-drawer nav .ui-list .ui-list-item:not(.nothing) {\n      padding-left: 21px; }\nui-nav-drawer.persistent nav {\n  z-index: 4; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n    ui-nav-drawer.persistent nav {\n      box-shadow: 0 0 2px 0 rgba(0,0,0,.14), 0 2px 2px 0 rgba(0,0,0,.12), 0 1px 3px 0 rgba(0,0,0,.20); } }\nui-nav-drawer.open nav {\n  left: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\nui-nav-drawer:not(.persistent) .ui-nav-drawer-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  z-index: -1;\n  visibility: hidden; }\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  ui-nav-drawer .ui-nav-drawer-overlay {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    opacity: 0;\n    z-index: -1;\n    visibility: hidden; } }\nui-nav-drawer.open nav + .ui-nav-drawer-overlay {\n  -webkit-animation: openNav 280ms cubic-bezier(0, 0, 0.2, 1);\n          animation: openNav 280ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\nui-nav-drawer:not(.open) nav + .ui-nav-drawer-overlay {\n  -webkit-animation: closeNav 280ms cubic-bezier(0, 0, 0.2, 1);\n          animation: closeNav 280ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n@-webkit-keyframes openNav {\n  0% {\n    opacity: 0;\n    z-index: 3; }\n  100% {\n    opacity: 1;\n    z-index: 3; } }\n@keyframes openNav {\n  0% {\n    opacity: 0;\n    z-index: 3; }\n  100% {\n    opacity: 1;\n    z-index: 3; } }\n@-webkit-keyframes closeNav {\n  0% {\n    opacity: 1;\n    z-index: 3; }\n  99% {\n    opacity: 0;\n    z-index: 3; }\n  100% {\n    opacity: 0;\n    z-index: -1; } }\n@keyframes closeNav {\n  0% {\n    opacity: 1;\n    z-index: 3; }\n  99% {\n    opacity: 0;\n    z-index: 3; }\n  100% {\n    opacity: 0;\n    z-index: -1; } }\nbody {\n  transition: margin-left 280ms cubic-bezier(0, 0, 0.2, 1); }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n  body.ui-nav-drawer-persistent {\n    margin-left: 320px; } }\n"

/***/ }),

/***/ "./src/app/smn-ui/nav-drawer/nav-drawer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/nav-drawer/nav-drawer.component.ts ***!
  \***********************************************************/
/*! exports provided: UiNavDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiNavDrawerComponent", function() { return UiNavDrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _utils_providers_cookie_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/providers/cookie.provider */ "./src/app/smn-ui/utils/providers/cookie.provider.ts");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiNavDrawerComponent = /** @class */ (function () {
    function UiNavDrawerComponent(element) {
        var _this = this;
        this.element = element;
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openNav = function () {
            if (document.body.clientWidth <= 375 || (!_this.element.nativeElement.classList.contains('persistent') && _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow.scrollY > 1)) {
                var fabContainer = document.querySelectorAll('.ui-fab-container')[0];
                if (fabContainer) {
                    fabContainer.classList.add('hide');
                }
            }
            _this.element.nativeElement.classList.add('open');
            if (!_this.element.nativeElement.classList.contains('persistent')) {
                document.body.style.overflowY = 'hidden';
            }
            else {
                document.body.style.overflowY = '';
            }
        };
        this.closeNav = function () {
            var fabContainer = document.querySelectorAll('.ui-fab-container')[0];
            if (fabContainer) {
                fabContainer.classList.remove('hide');
            }
            _this.element.nativeElement.classList.remove('open');
            document.body.style.overflowY = '';
        };
    }
    UiNavDrawerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var body = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].closest(this.element.nativeElement, 'body');
        body.classList.add('notransition');
        setTimeout(function () {
            body.classList.remove('notransition');
            _this.element.nativeElement.querySelectorAll('.ui-nav-drawer-overlay')[0].style.visibility = 'visible';
        }, 300);
        var isPersistent = this.element.nativeElement.classList.contains('persistent');
        var isOpen = this.element.nativeElement.classList.contains('open');
        if (isPersistent && isOpen) {
            if (document.body.clientWidth > 375) {
                body.classList.add('ui-nav-drawer-persistent');
            }
        }
        else {
            body.classList.remove('ui-nav-drawer-persistent');
        }
        this.element.nativeElement.addEventListener('click', function (e) {
            if (!(isPersistent && window.innerWidth > 763) && _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(e.srcElement, 'a')) {
                _this.open = false;
                _this.openChange.emit(_this.open);
            }
        });
        if (this.open) {
            this.openNav();
        }
        else {
            this.closeNav();
        }
        var navDrawer = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_4__["UiElementRef"](this.element.nativeElement).querySelector('nav');
        var windowRef = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_4__["UiElementRef"](window);
        var navDrawerTouch;
        var mouseX;
        var mouseXMovement;
        windowRef.on('touchstart', function (e) {
            mouseX = e.touches[0].pageX;
            navDrawerTouch = (mouseX > 0 && mouseX < 40) ? 'open' : navDrawerTouch;
            navDrawerTouch = (mouseX > 320 && mouseX < 360) ? 'close' : navDrawerTouch;
        });
        windowRef.on('touchmove', function (e) {
            if (navDrawerTouch) {
                mouseXMovement = e.touches[0].pageX - mouseX;
                if (navDrawerTouch === 'open' && !_this.open) {
                    mouseXMovement = mouseXMovement > 320 ? 320 : mouseXMovement;
                    navDrawer.css('transform', 'translateX(' + (-320 + mouseXMovement) + 'px)');
                }
                else if (navDrawerTouch === 'close' && _this.open) {
                    mouseXMovement = mouseXMovement < -330 ? -330 : mouseXMovement;
                    mouseXMovement = mouseXMovement > 0 ? 0 : mouseXMovement;
                    navDrawer.css('transform', 'translateX(' + (mouseXMovement) + 'px)');
                }
            }
        });
        windowRef.on('touchend', function () {
            if (navDrawerTouch) {
                if (navDrawerTouch === 'open' && mouseXMovement > 20) {
                    navDrawer.css('transform', '');
                    _this.open = true;
                    _this.openChange.emit(_this.open);
                    _this.openNav();
                }
                else if (navDrawerTouch === 'close' && mouseXMovement < -20) {
                    navDrawer.css('transform', '');
                    _this.open = false;
                    _this.openChange.emit(_this.open);
                    _this.closeNav();
                }
                else {
                    navDrawer.css('transform', '');
                }
            }
            navDrawerTouch = undefined;
        });
    };
    UiNavDrawerComponent.prototype.ngOnChanges = function (changes) {
        var isNavDrawerPersistent = _utils_providers_cookie_provider__WEBPACK_IMPORTED_MODULE_3__["UiCookie"].get('NavDrawerPersistent') === 'true';
        if (isNavDrawerPersistent) {
            this.open = true;
            this.openNav();
        }
        if (changes.open) {
            var isOpen = changes.open.currentValue;
            this.open = isOpen;
            if (isOpen) {
                this.openNav();
            }
            else {
                this.closeNav();
            }
            var isPersistent = this.element.nativeElement.classList.contains('persistent');
            var body = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].closest(this.element.nativeElement, 'body');
            if (isPersistent && isOpen) {
                if (document.body.clientWidth > 375) {
                    body.classList.add('ui-nav-drawer-persistent');
                    _utils_providers_cookie_provider__WEBPACK_IMPORTED_MODULE_3__["UiCookie"].set('NavDrawerPersistent', 'true');
                }
            }
            else {
                body.classList.remove('ui-nav-drawer-persistent');
                _utils_providers_cookie_provider__WEBPACK_IMPORTED_MODULE_3__["UiCookie"].set('NavDrawerPersistent', 'false');
            }
            setTimeout(function () {
                _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].trigger(window, 'resize');
            }, 280);
        }
    };
    UiNavDrawerComponent.prototype.ngOnDestroy = function () {
        document.body.classList.add('notransition');
        document.body.classList.remove('ui-nav-drawer-persistent');
        setTimeout(function () {
            document.body.classList.remove('notransition');
        }, 1);
    };
    UiNavDrawerComponent.prototype.closeMenuOverlay = function () {
        if (this.open !== undefined) {
            this.open = false;
            this.openChange.emit(this.open);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiNavDrawerComponent.prototype, "open", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiNavDrawerComponent.prototype, "openChange", void 0);
    UiNavDrawerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-nav-drawer',
            template: __webpack_require__(/*! ./nav-drawer.component.html */ "./src/app/smn-ui/nav-drawer/nav-drawer.component.html"),
            styles: [__webpack_require__(/*! ./nav-drawer.component.scss */ "./src/app/smn-ui/nav-drawer/nav-drawer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiNavDrawerComponent);
    return UiNavDrawerComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/progress/radial/progress-radial.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/smn-ui/progress/radial/progress-radial.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg class=\"spinner-container\" viewBox=\"0 0 44 44\">\r\n    <circle class=\"path\" cx=\"22\" cy=\"22\" r=\"20\" fill=\"none\" stroke-width=\"4\"></circle>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/progress/radial/progress-radial.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/smn-ui/progress/radial/progress-radial.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 24px;\n  display: block; }\n  :host .spinner-container {\n    -webkit-animation: rotate 2s linear infinite;\n    animation: rotate 2s linear infinite;\n    z-index: 2; }\n  :host .spinner-container .path {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n    -webkit-animation: dash 1.5s ease-in-out infinite;\n    animation: dash 1.5s ease-in-out infinite; }\n  :host #startup .spinner-container .path,\n  :host #initial_startup .spinner-container .path {\n    stroke: #acb9bf; }\n  @keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n  @keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n  @-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n  :host-context(.ui-button.fab),\n:host-context(.ui-button.icon) {\n  position: absolute;\n  width: 100%;\n  top: 0; }\n"

/***/ }),

/***/ "./src/app/smn-ui/progress/radial/progress-radial.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/smn-ui/progress/radial/progress-radial.component.ts ***!
  \*********************************************************************/
/*! exports provided: UiProgressRadialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiProgressRadialComponent", function() { return UiProgressRadialComponent; });
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

var UiProgressRadialComponent = /** @class */ (function () {
    function UiProgressRadialComponent() {
    }
    UiProgressRadialComponent.prototype.ngOnInit = function () {
    };
    UiProgressRadialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-progress-radial.indeterminate',
            template: __webpack_require__(/*! ./progress-radial.component.html */ "./src/app/smn-ui/progress/radial/progress-radial.component.html"),
            styles: [__webpack_require__(/*! ./progress-radial.component.scss */ "./src/app/smn-ui/progress/radial/progress-radial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiProgressRadialComponent);
    return UiProgressRadialComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/ripple/ripple.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/ripple/ripple.directive.ts ***!
  \***************************************************/
/*! exports provided: UiRippleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiRippleDirective", function() { return UiRippleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _utils_functions_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions/debounce */ "./src/app/smn-ui/utils/functions/debounce.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var maxRipples = 10;
var ripples = 0;

var UiRippleDirective = /** @class */ (function () {
    function UiRippleDirective(element) {
        this.element = element;
        this.elRippleContainerTemplate = document.createElement('div');
        this.elRippleContainerTemplate.classList.add('ui-ripple-container');
        this.elRippleTemplate = document.createElement('div');
        this.elRippleTemplate.classList.add('ui-ripple-wave');
        this.elRippleContainerTemplateClone = this.elRippleContainerTemplate.cloneNode(true);
    }
    UiRippleDirective.prototype.onMousedown = function (e) {
        ripples = document.querySelectorAll('.ui-ripple-wave').length;
        if (!this.rippleDisable && !this.element.nativeElement.hasAttribute('disabled') && ripples < maxRipples) {
            var elementWidth = this.element.nativeElement.offsetWidth;
            var elementHeight = this.element.nativeElement.offsetHeight;
            var isIcon = this.element.nativeElement.classList.contains('icon');
            var isFab = this.element.nativeElement.classList.contains('fab');
            var isRounded = this.element.nativeElement.classList.contains('ripple-rounded');
            if (isIcon || isFab || isRounded) {
                this.elRippleContainerTemplateClone.style.borderRadius = '50%';
            }
            this.elRippleContainerTemplateClone.style.width = elementWidth + 'px';
            this.elRippleContainerTemplateClone.style.height = elementHeight + 'px';
            this.element.nativeElement.appendChild(this.elRippleContainerTemplateClone);
            var elRippleTemplateClone_1 = this.elRippleTemplate.cloneNode(true);
            var isElementHorizontal = elementWidth > elementHeight;
            var finalWidth = void 0;
            var finalHeight = void 0;
            var finalTop = void 0;
            var finalLeft = void 0;
            if (isElementHorizontal) {
                finalWidth = elementWidth * 3;
                finalHeight = elementWidth * 3;
            }
            else {
                finalWidth = elementHeight * 3;
                finalHeight = elementHeight * 3;
            }
            finalTop = -(finalWidth / 2);
            finalLeft = -(finalWidth / 2);
            elRippleTemplateClone_1.style.width = finalWidth + 'px';
            elRippleTemplateClone_1.style.height = finalHeight + 'px';
            var mousePos = getMousePosition(e);
            var elementPos = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].position(this.element.nativeElement);
            var pos = {
                y: mousePos.y - elementPos.top,
                x: mousePos.x - elementPos.left
            };
            if (isIcon || isFab || isRounded) {
                finalTop = finalTop + (elementWidth / 2);
                finalLeft = finalLeft + (elementWidth / 2);
            }
            else {
                finalTop = finalTop + pos.y;
                finalLeft = finalLeft + pos.x;
            }
            elRippleTemplateClone_1.style.top = finalTop + 'px';
            elRippleTemplateClone_1.style.left = finalLeft + 'px';
            this.elRippleContainerTemplateClone.insertBefore(elRippleTemplateClone_1, this.elRippleContainerTemplateClone.firstChild);
            this.elRippleContainerTemplateClone.classList.add('pressed');
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].animate(this.elRippleContainerTemplateClone, 'border-spacing', 0, 1, 800, null, function (tick) {
                elRippleTemplateClone_1.style.transform = "scale(" + tick + ")";
            });
            ripples++;
        }
    };
    UiRippleDirective.prototype.onMouseup = function () {
        var _this = this;
        Object(_utils_functions_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
            eraseRipples(_this);
        }, 800, true)();
    };
    UiRippleDirective.prototype.onMouseout = function () {
        var _this = this;
        Object(_utils_functions_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
            eraseRipples(_this);
        }, 2000, true)();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ripple-disable'),
        __metadata("design:type", Object)
    ], UiRippleDirective.prototype, "rippleDisable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiRippleDirective.prototype, "onMousedown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiRippleDirective.prototype, "onMouseup", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiRippleDirective.prototype, "onMouseout", null);
    UiRippleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiRipple]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiRippleDirective);
    return UiRippleDirective;
}());

function eraseRipples(thiss) {
    thiss.elRippleContainerTemplateClone.classList.remove('pressed');
    var elRipples = thiss.elRippleContainerTemplateClone.children;
    var len = elRipples.length;
    ripples = len;
    var _loop_1 = function (i) {
        var elRipple = elRipples[i];
        if (elRipple) {
            var elementOpacity = elRipple.style.opacity || '1';
            if (elementOpacity === '1') {
                _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].animate(elRipple, 'opacity', 1, 0, 800, function () {
                    try {
                        elRipple.parentNode.removeChild(elRipple);
                        ripples--;
                    }
                    catch (e) {
                    }
                    if (!ripples) {
                        try {
                            thiss.elRippleContainerTemplateClone.parentNode.removeChild(thiss.elRippleContainerTemplateClone);
                        }
                        catch (e) {
                        }
                    }
                }, null);
            }
        }
    };
    for (var i = 0; i < len; i++) {
        _loop_1(i);
    }
}
function getMousePosition(e) {
    var pos = {
        y: undefined,
        x: undefined
    };
    if (e.originalEvent && e.originalEvent.touches !== undefined) {
        pos.y = e.originalEvent.touches[0].pageY;
        pos.x = e.originalEvent.touches[0].pageX;
    }
    else if (e.pageX) {
        pos.y = e.pageY;
        pos.x = e.pageX;
    }
    else if (e && e.touches !== undefined) {
        pos.y = e.touches[0].pageY;
        pos.x = e.touches[0].pageX;
    }
    return pos;
}


/***/ }),

/***/ "./src/app/smn-ui/select/option/option.component.html":
/*!************************************************************!*\
  !*** ./src/app/smn-ui/select/option/option.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{label}}\r\n"

/***/ }),

/***/ "./src/app/smn-ui/select/option/option.component.scss":
/*!************************************************************!*\
  !*** ./src/app/smn-ui/select/option/option.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 36px;\n  display: flex;\n  align-items: center;\n  padding: 9px; }\n  :host:focus {\n    background-color: rgba(0, 0, 0, 0.1); }\n"

/***/ }),

/***/ "./src/app/smn-ui/select/option/option.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/smn-ui/select/option/option.component.ts ***!
  \**********************************************************/
/*! exports provided: UiSelectOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSelectOptionComponent", function() { return UiSelectOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select.component */ "./src/app/smn-ui/select/select.component.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UiSelectOptionComponent = /** @class */ (function () {
    function UiSelectOptionComponent(selectComponent, element) {
        this.selectComponent = selectComponent;
        this.element = element;
    }
    UiSelectOptionComponent.prototype.ngOnInit = function () {
        this.element.nativeElement.setAttribute('tabindex', 0);
        if (!this.internal) {
            this.selectComponent.optionsExternal.push({
                value: this.value,
                title: this.label
            });
        }
    };
    UiSelectOptionComponent.prototype.onClick = function () {
        this.selectComponent.ngModelChange.next(this.value);
        this.selectComponent.model = this.value;
        this.selectComponent.selected = this.label;
        this.element.nativeElement.blur();
    };
    UiSelectOptionComponent.prototype.onEnter = function (e) {
        if (e.keyCode === 13) {
            this.element.nativeElement.click();
        }
    };
    UiSelectOptionComponent.prototype.onBlur = function (event) {
        if (!event.relatedTarget || !(_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(event.relatedTarget, 'ui-select-option') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(event.relatedTarget, '.selected') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(event.relatedTarget, '.input-select'))) {
            this.selectComponent.close();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectOptionComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectOptionComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectOptionComponent.prototype, "internal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiSelectOptionComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiSelectOptionComponent.prototype, "onEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiSelectOptionComponent.prototype, "onBlur", null);
    UiSelectOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-select-option',
            template: __webpack_require__(/*! ./option.component.html */ "./src/app/smn-ui/select/option/option.component.html"),
            styles: [__webpack_require__(/*! ./option.component.scss */ "./src/app/smn-ui/select/option/option.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_select_component__WEBPACK_IMPORTED_MODULE_1__["UiSelectComponent"])),
        __metadata("design:paramtypes", [_select_component__WEBPACK_IMPORTED_MODULE_1__["UiSelectComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiSelectOptionComponent);
    return UiSelectOptionComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/select/select-filter.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/select/select-filter.pipe.ts ***!
  \*****************************************************/
/*! exports provided: UiSelectFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSelectFilterPipe", function() { return UiSelectFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_functions_unaccent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions/unaccent */ "./src/app/smn-ui/utils/functions/unaccent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiSelectFilterPipe = /** @class */ (function () {
    function UiSelectFilterPipe() {
    }
    UiSelectFilterPipe.prototype.transform = function (value, filterBy, name) {
        filterBy = filterBy ? Object(_utils_functions_unaccent__WEBPACK_IMPORTED_MODULE_1__["unaccent"])(filterBy.toLowerCase()) : null;
        return filterBy ? value.filter(function (item) {
            return Object(_utils_functions_unaccent__WEBPACK_IMPORTED_MODULE_1__["unaccent"])(item[name].toLowerCase()).indexOf(filterBy) !== -1;
        }) : value;
    };
    UiSelectFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'selectFilter',
            pure: false
        })
    ], UiSelectFilterPipe);
    return UiSelectFilterPipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/select/select.component.html":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/select/select.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"selected\">{{selected}}</div>\r\n<ng-template>\r\n    <div class=\"wrap-select\">\r\n        <div class=\"wrap-select-inner\">\r\n            <div class=\"selected\" tabindex=\"0\" (click)=\"close()\">{{selected}}</div>\r\n            <div class=\"ui-divider\"></div>\r\n            <div *ngIf=\"chosen\">\r\n                <div class=\"input-select-space\">\r\n                    <input type=\"text\" [(ngModel)]=\"search\" class=\"input-select\">\r\n                </div>\r\n                <div class=\"ui-divider\"></div>\r\n            </div>\r\n            <div class=\"options\">\r\n                <ng-content></ng-content>\r\n                <ui-select-option *ngFor=\"let item of optionsExternal\" [value]=\"value\" [label]=\"label\"\r\n                                  uiRipple></ui-select-option>\r\n                <ui-select-option *ngFor=\"let item of options | selectFilter : search : label\" [value]=\"item[value]\"\r\n                                  [label]=\"item[label]\" [internal]=\"true\"\r\n                                  uiRipple></ui-select-option>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<div [hidden]=\"!options || !isMobile()\">\r\n    <select #selectNative\r\n            style=\"transform: scale(1); position: absolute; left: 0; top: 0; width: 100%; height: 100%; opacity: 0\"\r\n            [(ngModel)]=\"selectedNative\"\r\n            (change)=\"onChangeSelect(selectedNative)\">\r\n        <option *ngFor=\"let option of options\" [ngValue]=\"option\">\r\n            {{option ? option[label] : null}}\r\n        </option>\r\n    </select>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/select/select.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/select/select.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  border-radius: 2px;\n  height: 36px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  padding: 9px;\n  position: relative;\n  font-size: 16px; }\n/deep/ .wrap-select {\n  display: block;\n  border-radius: 2px;\n  overflow: hidden;\n  max-height: 36px;\n  transition: max-height 280ms cubic-bezier(0, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0, 0, 0.2, 1);\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n  z-index: 5; }\n/deep/ .wrap-select.open {\n    max-height: 216px;\n    box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.20); }\n/deep/ .wrap-select .selected {\n    height: 36px;\n    display: flex;\n    align-items: center;\n    padding: 9px; }\n/deep/ .wrap-select .ui-divider {\n    margin: 0; }\n/deep/ .wrap-select .options {\n    overflow-y: auto;\n    max-height: 140px; }\n/deep/ .wrap-select .input-select-space {\n    padding: 3px;\n    height: 36px; }\n/deep/ .wrap-select .input-select-space input {\n      border-radius: 2px;\n      height: 100%;\n      width: 100%;\n      padding: 0 5px; }\n"

/***/ }),

/***/ "./src/app/smn-ui/select/select.component.ts":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/select/select.component.ts ***!
  \***************************************************/
/*! exports provided: UiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSelectComponent", function() { return UiSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiSelectComponent = /** @class */ (function () {
    function UiSelectComponent(element, viewContainerRef) {
        this.element = element;
        this.viewContainerRef = viewContainerRef;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMobile = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].isMobile;
        this.options = [];
        this.optionsExternal = [];
    }
    UiSelectComponent_1 = UiSelectComponent;
    UiSelectComponent.prototype.ngOnInit = function () {
        this.element.nativeElement.setAttribute('tabindex', 0);
        this.selectOption();
    };
    UiSelectComponent.prototype.ngAfterViewInit = function () {
    };
    UiSelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options || changes.ngModel) {
            this.selectOption();
        }
        if (changes.ngModel && !changes.ngModel.firstChange) {
            this.ngModel = changes.ngModel.currentValue;
            if (changes.ngModel.currentValue) {
                this.selectOption();
            }
            else {
                this.onChangeSelect(changes.ngModel.currentValue);
            }
        }
    };
    UiSelectComponent.prototype.onFocus = function () {
        var _this = this;
        this.close();
        var closestFieldset = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].closest(this.element.nativeElement, 'fieldset:disabled');
        if (!this.element.nativeElement.disabled && !closestFieldset) {
            if (this.isMobile()) {
                this.selectNative.nativeElement.focus();
            }
            else {
                setTimeout(function () {
                    var position = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].position(_this.element.nativeElement);
                    var coordinate = {
                        x: position.left,
                        y: position.top
                    };
                    _this.render(coordinate);
                });
            }
        }
    };
    UiSelectComponent.prototype.onBlur = function (event) {
        if (!event.relatedTarget || !(_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].is(event.relatedTarget, 'ui-select-option') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].closest(event.relatedTarget, '.wrap-select'))) {
            this.close();
        }
    };
    UiSelectComponent.prototype.render = function (coordinate) {
        var _this = this;
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.viewRef.detectChanges();
        this.viewRef.rootNodes.forEach(function (rootNode) {
            document.body.appendChild(rootNode);
            if (rootNode.clientWidth) {
                _this.open(rootNode, coordinate);
            }
        });
    };
    UiSelectComponent.prototype.open = function (element, coordinate) {
        var _this = this;
        setTimeout(function () {
            var horizontalCoveringArea = coordinate.x + element.clientWidth;
            var verticalCoveringArea = coordinate.y + element.clientHeight;
            var windowWidth = window.innerWidth + window.scrollX;
            var windowHeight = document.body.clientHeight + window.scrollY;
            if (horizontalCoveringArea > windowWidth) {
                coordinate.x = windowWidth - (element.clientWidth + 8);
            }
            if (coordinate.x <= 8) {
                coordinate.x = 8;
            }
            if (verticalCoveringArea > windowHeight) {
                coordinate.y = windowHeight - (element.clientHeight + 8);
            }
            if (coordinate.y <= 0) {
                coordinate.y = 0;
            }
            if (_this.darkClass) {
                element.classList.add(_this.darkClass);
            }
            element.style.transform = '';
            // element.querySelector('ui-card').style.maxHeight = window.innerHeight + 'px';
            element.style.top = coordinate.y + 'px';
            element.style.left = coordinate.x + 'px';
            element.style.left = coordinate.x + 'px';
            element.style.width = _this.element.nativeElement.clientWidth + 'px';
            element.querySelector('.selected').addEventListener('blur', function (event) {
                if (!event.relatedTarget || !(_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].is(event.relatedTarget, 'ui-select-option') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].is(event.relatedTarget, '.input-select'))) {
                    _this.close();
                }
            });
            if (_this.chosen) {
                element.querySelector('.input-select').addEventListener('blur', function (event) {
                    if (!event.relatedTarget || !(_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].is(event.relatedTarget, 'ui-select-option') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].is(event.relatedTarget, '.selected'))) {
                        _this.close();
                    }
                });
                element.querySelector('.input-select').click();
                element.scrollTo(0, 0);
            }
            else {
                element.querySelector('.selected').focus();
            }
            element.classList.add('open');
        });
    };
    UiSelectComponent.prototype.close = function () {
        var _this = this;
        if (this.viewContainerRef.length) {
            var viewRef_1 = this.viewRef; // Salvando a referência para achar o index deste componente
            viewRef_1.rootNodes.forEach(function (rootNode) {
                if (rootNode.classList) {
                    rootNode.classList.remove('open');
                }
            });
            setTimeout(function () { return _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef_1)); }, 280);
        }
    };
    UiSelectComponent.prototype.onChangeSelect = function (select) {
        if (select) {
            this.model = select[this.value];
            this.selected = select[this.label];
            this.ngModelChange.emit(select[this.value]);
        }
        else {
            this.search = select;
            this.model = select;
            this.selected = select;
            this.ngModelChange.emit(select);
        }
    };
    UiSelectComponent.prototype.selectOption = function () {
        var _this = this;
        this.options.forEach(function (option) {
            if (option[_this.value] === _this.ngModel) {
                _this.onChangeSelect(option);
            }
        });
    };
    UiSelectComponent.prototype.writeValue = function () {
    };
    UiSelectComponent.prototype.registerOnChange = function () {
    };
    UiSelectComponent.prototype.registerOnTouched = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dark-class'),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "darkClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "chosen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UiSelectComponent.prototype, "templateRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectNative'),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "selectNative", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSelectComponent.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"])
    ], UiSelectComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiSelectComponent.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiSelectComponent.prototype, "onBlur", null);
    UiSelectComponent = UiSelectComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/smn-ui/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/smn-ui/select/select.component.scss")],
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: UiSelectComponent_1,
                    multi: true,
                }],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], UiSelectComponent);
    return UiSelectComponent;
    var UiSelectComponent_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/selection-control/option/option.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/smn-ui/selection-control/option/option.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\r\n    <ng-content></ng-content>\r\n</label>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/selection-control/option/option.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/smn-ui/selection-control/option/option.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\nui-option-container {\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 32px;\n  align-items: center;\n  margin-bottom: 8px; }\nui-option-container .info {\n    color: rgba(0, 0, 0, 0.87);\n    display: block;\n    width: 100%;\n    margin-bottom: 8px;\n    font-size: 12px;\n    line-height: 16px; }\nui-option-container .info .secondary {\n      display: block;\n      color: rgba(0, 0, 0, 0.54); }\nui-option-container > ui-option {\n    flex: 0 0 auto;\n    max-width: 100%;\n    margin-right: 16px; }\nui-option {\n  position: relative;\n  display: inline-flex;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Radio button */\n  /* Disabled */ }\nui-option.no-space {\n    margin: 0; }\nui-option input {\n    width: 0;\n    height: 0;\n    position: absolute;\n    z-index: -9999;\n    opacity: 0; }\nui-option .ui-option-shell {\n    position: relative;\n    flex: 0 0 auto;\n    width: 18px;\n    height: 18px;\n    transition: 200ms ease-in-out; }\nui-option.small {\n    font-size: 14px; }\nui-option.small .ui-option-shell {\n    width: 14px;\n    height: 14px; }\nui-option.small input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-fill {\n    border-width: 7px; }\nui-option .ui-option-shell:not(:last-child) {\n    margin-right: 4px; }\nui-option input[type=\"checkbox\"] + .ui-option-shell, ui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-fill {\n    border-radius: 2px; }\nui-option input[type=\"radio\"] + .ui-option-shell, ui-option input[type=\"radio\"] + .ui-option-shell .ui-option-fill {\n    border-radius: 50%; }\nui-option .ui-option-shell::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -100%;\n    left: -100%;\n    right: -100%;\n    bottom: -100%;\n    /*background-color: rgba(0, 0, 0, 0.1);*/\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    border-radius: 50%;\n    transition: 100ms ease-in-out;\n    pointer-events: none; }\nui-option .ui-option:focus + .ui-option-shell::before, ui-option > label:active .ui-option-shell::before {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\nui-option input[type=\"checkbox\"]:not(:disabled):active + .ui-option-shell, ui-option > label:active .ui-option-shell {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); }\nui-option .ui-option-fill {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    right: -2px;\n    bottom: -2px;\n    margin: auto;\n    border-radius: 2px;\n    overflow: hidden;\n    transition: 100ms ease-in-out; }\nui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-fill {\n    border-width: 0;\n    border-style: solid;\n    /*border-color: rgba(0, 0, 0, 0.6);*/\n    transition: border 200ms ease-in-out; }\nui-option input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-fill {\n    border-width: 9px;\n    /*border-color: #2196F3;*/ }\nui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-mark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 50%;\n    height: 90%;\n    -webkit-transform: rotate(45deg) translate(22%, -26%);\n            transform: rotate(45deg) translate(22%, -26%);\n    opacity: 0;\n    transition: 50ms ease-in-out; }\nui-option input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-mark {\n    opacity: 1; }\nui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-mark::before,\n  ui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-mark::after {\n    content: '';\n    position: absolute;\n    display: block;\n    background-color: white;\n    transition: opacity 200ms ease-in-out, -webkit-transform 0s ease-in-out 100ms;\n    transition: transform 0s ease-in-out 100ms, opacity 200ms ease-in-out;\n    transition: transform 0s ease-in-out 100ms, opacity 200ms ease-in-out, -webkit-transform 0s ease-in-out 100ms; }\nui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-mark::before {\n    top: 87%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    -webkit-transform-origin: 0 50%;\n            transform-origin: 0 50%;\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0); }\nui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-mark::after {\n    top: 10%;\n    left: 70%;\n    right: 0;\n    bottom: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0); }\nui-option input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-mark::before {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n    transition: 50ms ease-in-out 200ms, opacity 0s linear; }\nui-option input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-mark::after {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n    transition: 50ms ease-in-out 250ms, opacity 0s linear; }\nui-option input[type=\"radio\"]:checked + .ui-option-shell {\n    /*border-color: #2196F3;*/ }\nui-option input[type=\"radio\"] + .ui-option-shell .ui-option-fill {\n    /*border: 0 solid rgba(0, 0, 0, 0.6);*/\n    transition: border 100ms ease-in-out 100ms, -webkit-transform 200ms ease-in-out;\n    transition: border 100ms ease-in-out 100ms, transform 200ms ease-in-out;\n    transition: border 100ms ease-in-out 100ms, transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out; }\nui-option input[type=\"radio\"]:checked + .ui-option-shell .ui-option-fill {\n    border-width: 9px;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    /*border-color: #2196F3;*/\n    transition: border 200ms ease-in-out, -webkit-transform 300ms cubic-bezier(0.42, 0, 0.53, 2) 100ms;\n    transition: border 200ms ease-in-out, transform 300ms cubic-bezier(0.42, 0, 0.53, 2) 100ms;\n    transition: border 200ms ease-in-out, transform 300ms cubic-bezier(0.42, 0, 0.53, 2) 100ms, -webkit-transform 300ms cubic-bezier(0.42, 0, 0.53, 2) 100ms; }\nui-option input:disabled + .ui-option-shell {\n    opacity: .6; }\nui-option input:disabled + * {\n    cursor: not-allowed;\n    -webkit-transform: scale(1) !important;\n            transform: scale(1) !important; }\nui-option input:disabled + .ui-option-shell::before {\n    display: none; }\nui-option input:disabled + div + span {\n    color: #bdbdbd; }\nui-option > label {\n    display: flex;\n    align-items: center;\n    min-height: 19px; }\n"

/***/ }),

/***/ "./src/app/smn-ui/selection-control/option/option.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/smn-ui/selection-control/option/option.component.ts ***!
  \*********************************************************************/
/*! exports provided: UiOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiOptionComponent", function() { return UiOptionComponent; });
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

var UiOptionComponent = /** @class */ (function () {
    function UiOptionComponent(element) {
        this.element = element;
    }
    UiOptionComponent.prototype.ngAfterViewInit = function () {
        var input = this.element.nativeElement.querySelector('input');
        input.classList.add('ui-option');
        var optionShell = '<div class="ui-option-shell"><div class="ui-option-fill"></div><div class="ui-option-mark"></div></div>';
        input.insertAdjacentHTML('afterend', optionShell);
        this.setColor();
    };
    UiOptionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.color && !changes.color.firstChange) {
            this.setColor();
        }
    };
    UiOptionComponent.prototype.setColor = function () {
        var optionFill = this.element.nativeElement.querySelector('.ui-option-fill');
        optionFill.style.borderColor = this.color || '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiOptionComponent.prototype, "color", void 0);
    UiOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-option',
            template: __webpack_require__(/*! ./option.component.html */ "./src/app/smn-ui/selection-control/option/option.component.html"),
            styles: [__webpack_require__(/*! ./option.component.scss */ "./src/app/smn-ui/selection-control/option/option.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiOptionComponent);
    return UiOptionComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/selection-control/switch/switch.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/smn-ui/selection-control/switch/switch.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\r\n    <ng-content></ng-content>\r\n</label>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/selection-control/switch/switch.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/smn-ui/selection-control/switch/switch.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ui-switch-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px; }\n  ui-switch-container .info {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: default;\n    margin-right: 10px; }\n  ui-switch-container .info .secondary {\n      display: block; }\n  ui-switch-container.no-space {\n    margin-bottom: 0; }\n  ui-switch {\n  position: relative;\n  width: 36px;\n  height: 24px;\n  display: inline-block; }\n  ui-switch input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    opacity: 0; }\n  ui-switch .switch-cover {\n    width: 0;\n    height: 0;\n    margin: auto; }\n  ui-switch .track {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    width: 34px;\n    height: 14px;\n    background-color: inherit;\n    opacity: 0.5;\n    border-radius: 7px;\n    transition: 300ms ease-in-out; }\n  ui-switch .thumb-container {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    height: 0;\n    margin: auto 0;\n    width: 20px;\n    background-color: inherit;\n    transition: right 300ms ease-in-out; }\n  ui-switch .thumb {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.2);\n    background-color: inherit;\n    transition: 300ms ease-in-out; }\n  ui-switch input:not(:checked) + .switch-cover .thumb-container {\n    right: 100%; }\n  ui-switch input:not(:checked) + .switch-cover .thumb {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.21), 0 1px 3px rgba(0, 0, 0, 0.3);\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  ui-switch input:not(:checked):not(:disabled) + .switch-cover .thumb {\n    background-color: white; }\n  ui-switch .thumb-container::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 50%;\n    right: 0;\n    bottom: 0;\n    width: 40px;\n    height: 40px;\n    margin: auto -20px;\n    border-radius: 50%;\n    background-color: inherit;\n    opacity: 0.2;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    transition: 300ms ease-in-out;\n    pointer-events: none; }\n  ui-switch input:not(:checked) + .switch-cover .thumb-container::before {\n    opacity: 0.1;\n    margin: auto 0; }\n  ui-switch input:focus + .switch-cover .thumb-container::before,\n  ui-switch input:active + .switch-cover .thumb-container::before {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  fieldset:disabled ui-switch-container .info {\n  color: rgba(0, 0, 0, 0.42); }\n  fieldset:disabled ui-switch-container .info .secondary {\n    color: rgba(0, 0, 0, 0.24); }\n"

/***/ }),

/***/ "./src/app/smn-ui/selection-control/switch/switch.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/smn-ui/selection-control/switch/switch.component.ts ***!
  \*********************************************************************/
/*! exports provided: UiSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
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

var UiSwitchComponent = /** @class */ (function () {
    function UiSwitchComponent(element) {
        this.element = element;
    }
    UiSwitchComponent.prototype.ngAfterViewInit = function () {
        var input = this.element.nativeElement.querySelectorAll('input')[0];
        input.classList.add('ui-switch');
        var switchShell = '<div class="switch-cover"><div class="track"></div><div class="thumb-container"><div class="thumb"></div></div></div>';
        input.insertAdjacentHTML('afterend', switchShell);
    };
    UiSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-switch',
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/smn-ui/selection-control/switch/switch.component.html"),
            styles: [__webpack_require__(/*! ./switch.component.scss */ "./src/app/smn-ui/selection-control/switch/switch.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiSwitchComponent);
    return UiSwitchComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/slider/slider-multi-handle.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/smn-ui/slider/slider-multi-handle.component.ts ***!
  \****************************************************************/
/*! exports provided: UiSliderMultiHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSliderMultiHandleComponent", function() { return UiSliderMultiHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiSliderMultiHandleComponent = /** @class */ (function () {
    function UiSliderMultiHandleComponent(elementRef) {
        this.elementRef = elementRef;
        this.beginChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.endChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this.viewFormat) {
            this.viewFormat = function (value) { return value; };
        }
    }
    UiSliderMultiHandleComponent.prototype.ngOnInit = function () {
        this.bodyElement = document.body;
        this.htmlElement = document.documentElement;
        this.multiHandle = true;
        this.percentageBlock = 100 / (this.range.length - 1);
        this.begin = this.begin || this.range[0];
        this.end = this.end || this.range[0];
        this.beginModel = this.closestNumber(this.begin).index || this.range[0];
        this.endModel = this.closestNumber(this.end).index || this.range[0];
    };
    UiSliderMultiHandleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.begin && !changes.begin.firstChange && !this.mouseDown) {
            this.beginModel = this.closestNumber(this.begin).index;
        }
        if (changes.end && !changes.end.firstChange && !this.mouseDown) {
            this.endModel = this.closestNumber(this.end).index;
        }
        if (changes.color && !changes.color.firstChange && !this.mouseDown) {
            this.color = changes.color.currentValue;
        }
        if (changes.textColor && !changes.textColor.firstChange && !this.mouseDown) {
            this.textColor = changes.textColor.currentValue;
        }
    };
    UiSliderMultiHandleComponent.prototype.ngAfterViewInit = function () {
        this.thumbs = this.elementRef.nativeElement.querySelectorAll('.thumb-container');
        this.beginElement = this.thumbs[0];
        this.endElement = this.thumbs[1];
        this.registerEventsListeners();
    };
    UiSliderMultiHandleComponent.prototype.registerEventsListeners = function () {
        var _this = this;
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(this.beginElement, 'mousedown touchstart', function (e) {
            if (_this.disabled) {
                return;
            }
            e.stopImmediatePropagation();
            _this.direction = 'begin';
            _this.toggleBalloon(true);
            _this.beginElement.classList.add('active');
            _this.endElement.classList.remove('active');
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(this.thumbs, 'mousedown touchstart', function (e) {
            if (_this.disabled) {
                return;
            }
            e.stopImmediatePropagation();
            _this.mouseDown = true;
            _this.toggleTackOn(true);
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].disableScroll();
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(this.endElement, 'mousedown touchstart', function (e) {
            if (_this.disabled) {
                return;
            }
            e.stopImmediatePropagation();
            _this.direction = 'end';
            _this.toggleBalloon(true, 0);
            _this.endElement.classList.add('active');
            _this.beginElement.classList.remove('active');
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(document, 'mouseup touchend', function (e) {
            if (_this.disabled) {
                return;
            }
            _this.beginElement.classList.remove('active');
            _this.endElement.classList.remove('active');
            if (_this.mouseDown && (e.pageX || e.originalEvent)) {
                _this.change(e, true);
            }
            _this.mouseDown = false;
            _this.toggleBalloon();
            _this.toggleTackOn();
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].enableScroll();
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(document, 'mousemove touchmove', function (e) {
            if (!_this.mouseDown || _this.disabled) {
                return;
            }
            _this.change(e);
        });
    };
    UiSliderMultiHandleComponent.prototype.change = function (event, mouseUp) {
        var currentPosition = event.pageX || (event.touches ? event.touches[0].pageX : null) || (event.changedTouches ? event.changedTouches[0].pageX : null);
        var position = this.getPositionInIndex(currentPosition);
        var newValue = this.closestNumber(this.range[Math.round(position)]);
        if (mouseUp) {
            position = newValue.index;
        }
        if (this.direction === 'begin' && this.beginModel >= this.endModel) {
            this[this.direction + "Model"] = newValue.index;
            this.direction = 'end';
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].trigger(this.endElement, 'mousedown');
            this.endElement.focus();
        }
        else if (this.direction === 'end' && this.endModel < this.beginModel) {
            this[this.direction + "Model"] = newValue.index;
            this.direction = 'begin';
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].trigger(this.beginElement, 'mousedown');
            this.beginElement.focus();
        }
        this[this.direction] = newValue.value;
        this[this.direction + "Model"] = position;
        this[this.direction + "Change"].emit(this[this.direction]);
    };
    UiSliderMultiHandleComponent.prototype.toggleBalloon = function (active, right) {
        var balloon = this.elementRef.nativeElement.querySelectorAll('.balloon-wrap')[0];
        if (balloon) {
            if (active) {
                balloon.style.right = typeof right === 'number' ? right : '';
                balloon.classList.add('active');
            }
            else {
                balloon.classList.remove('active');
            }
        }
    };
    UiSliderMultiHandleComponent.prototype.toggleTackOn = function (active) {
        var trackOn = this.elementRef.nativeElement.querySelectorAll('.track.on')[0];
        var method = active ? 'add' : 'remove';
        trackOn.classList[method]('no-transition');
    };
    UiSliderMultiHandleComponent.prototype.getPositionInIndex = function (position) {
        var trackOff = this.elementRef.nativeElement.querySelectorAll('.track.off')[0];
        position -= _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].position(trackOff).left;
        position = position / trackOff.clientWidth * 100;
        position = position > 100 ? 100 : position < 0 ? 0 : position;
        return ((this.range.length - 1) / 100) * position;
    };
    UiSliderMultiHandleComponent.prototype.closestNumber = function (number) {
        var current = this.range[0];
        var difference = Math.abs(number - current);
        var itemIndex = 0;
        var newDifference;
        for (var i = 0; i < this.range.length; i++) {
            newDifference = Math.abs(number - this.range[i]);
            if (newDifference < difference) {
                difference = newDifference;
                current = this.range[i];
                itemIndex = i;
            }
        }
        return { index: itemIndex, value: current };
    };
    UiSliderMultiHandleComponent.prototype.getPercentageLeft = function () {
        return this.percentageBlock * this.beginModel;
    };
    UiSliderMultiHandleComponent.prototype.getPercentageRight = function () {
        return this.percentageBlock * Math.abs(this.endModel - (this.range.length - 1));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiSliderMultiHandleComponent.prototype, "hideBalloon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiSliderMultiHandleComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiSliderMultiHandleComponent.prototype, "begin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiSliderMultiHandleComponent.prototype, "end", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UiSliderMultiHandleComponent.prototype, "range", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiSliderMultiHandleComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text-color'),
        __metadata("design:type", String)
    ], UiSliderMultiHandleComponent.prototype, "textColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiSliderMultiHandleComponent.prototype, "beginChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiSliderMultiHandleComponent.prototype, "endChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('view-format'),
        __metadata("design:type", Function)
    ], UiSliderMultiHandleComponent.prototype, "viewFormat", void 0);
    UiSliderMultiHandleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-slider[begin][end]',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/smn-ui/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/smn-ui/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiSliderMultiHandleComponent);
    return UiSliderMultiHandleComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"track off\"></div>\r\n<div class=\"points\" [ngClass]=\"{'disabled': disabled, 'show': mouseDown}\">\r\n    <div class=\"point\" *ngFor=\"let value of range\"></div>\r\n</div>\r\n<div class=\"track on\"\r\n     [ngClass]=\"{'disabled': disabled}\"\r\n     [ngStyle]=\"{'left': getPercentageLeft ? getPercentageLeft() + '%' : 0,\r\n                 'right': getPercentageRight ? getPercentageRight() + '%' : '',\r\n                 'width': getPercentage ? getPercentage() + '%': '',\r\n                 'background-color': color || ''}\">\r\n    <div class=\"balloon-wrap\" *ngIf=\"!hideBalloon\">\r\n        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"  x=\"0px\" y=\"0px\" width=\"36px\" height=\"36px\" viewBox=\"0 0 36 36\" enable-background=\"new 0 0 36 36\" xml:space=\"preserve\">\r\n            <path [style.fill]=\"color || ''\" d=\"M31.948,13.996c-0.146-5.378-4.016-8.907-4.016-8.907C23.222,0.624,18.163,0.993,18,1.006\r\n                c-0.163-0.013-5.222-0.382-9.931,4.083c0,0-3.87,3.528-4.016,8.907c0,0-0.497,3.41,1.572,7.205c0,0,0.864,2.126,4.765,6.678\r\n                c0,0,3.406,3.846,7.595,7.089v0.024c0.005-0.004,0.01-0.008,0.015-0.012c0.005,0.004,0.01,0.008,0.015,0.012v-0.024\r\n                c4.19-3.244,7.595-7.089,7.595-7.089c3.901-4.552,4.765-6.678,4.765-6.678C32.445,17.405,31.948,13.996,31.948,13.996z\"/>\r\n        </svg>\r\n        <div class=\"value\" [style.color]=\"textColor || ''\">\r\n            {{viewFormat(multiHandle ? direction === 'begin' ? begin : end : value)}}\r\n        </div>\r\n    </div>\r\n    <div class=\"thumb-container left\" tabindex=\"1\" *ngIf=\"multiHandle\" [style.background-color]=\"color || ''\">\r\n        <div class=\"thumb\"></div>\r\n    </div>\r\n    <div class=\"thumb-container right\" tabindex=\"1\" [style.background-color]=\"color || ''\">\r\n        <div class=\"thumb\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/slider/slider.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/slider/slider.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  display: block;\n  position: relative; }\n:host .track {\n    height: 2px; }\n:host .track.on {\n      position: absolute;\n      top: 0;\n      transition: left 280ms, right 280ms, width 280ms, background 280ms; }\n:host .track.on.no-transition {\n        transition: none; }\n:host .track.on.disabled {\n        background-color: transparent; }\n:host .track.on.disabled .thumb-container {\n          background-color: #bdbdbd; }\n:host .track.on.disabled .thumb-container:focus::before {\n            -webkit-transform: scale(0);\n                    transform: scale(0); }\n:host .track.on.disabled .thumb-container .thumb {\n            width: 8px;\n            height: 8px;\n            background-color: inherit; }\n:host .track.on .thumb-container {\n        position: absolute;\n        top: 1px;\n        border-radius: 50%;\n        transition: background-color 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), background-color 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), background-color 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .track.on .thumb-container.left {\n          left: 0;\n          -webkit-transform: scale(1) translate(-50%, -50%);\n                  transform: scale(1) translate(-50%, -50%); }\n:host .track.on .thumb-container.right {\n          right: 0;\n          -webkit-transform: scale(1) translate(50%, -50%);\n                  transform: scale(1) translate(50%, -50%); }\n:host .track.on .thumb-container .thumb {\n          position: relative;\n          width: 12px;\n          height: 12px;\n          border-radius: 50%;\n          transition: width 280ms cubic-bezier(0, 0, 0.2, 1), height 280ms cubic-bezier(0, 0, 0.2, 1), background 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: width 280ms cubic-bezier(0, 0, 0.2, 1), height 280ms cubic-bezier(0, 0, 0.2, 1), background 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: width 280ms cubic-bezier(0, 0, 0.2, 1), height 280ms cubic-bezier(0, 0, 0.2, 1), background 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .track.on .thumb-container::before {\n          content: '';\n          position: absolute;\n          width: 32px;\n          height: 32px;\n          top: -10px;\n          left: -10px;\n          border-radius: 50%;\n          -webkit-transform: scale(0);\n                  transform: scale(0);\n          transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          background-color: inherit;\n          opacity: 0.1; }\n:host .track.on .thumb-container:focus::before {\n          -webkit-transform: scale(1);\n                  transform: scale(1); }\n:host .track.on .thumb-container.active::before {\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\n:host .track.on .thumb-container.active .thumb {\n          width: 18px;\n          height: 18px; }\n:host .track.on .balloon-wrap {\n        position: absolute;\n        top: -42px;\n        transition: width 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), width 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), width 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        z-index: 1;\n        -webkit-transform: scale(0);\n                transform: scale(0);\n        -webkit-transform-origin: bottom;\n                transform-origin: bottom;\n        cursor: default;\n        margin-left: -18px;\n        margin-right: -18px;\n        width: 36px; }\n:host .track.on .balloon-wrap.active {\n          -webkit-transform: scale(1);\n                  transform: scale(1); }\n:host .track.on .balloon-wrap .value {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          display: flex;\n          justify-content: center;\n          font-size: 10px;\n          padding-top: 9px;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none; }\n:host .track.on .balloon-wrap ~ .thumb-container {\n        transition: background-color 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), background-color 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), background-color 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .track.on .balloon-wrap ~ .thumb-container::before {\n          transition: -webkit-transform 280ms 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: transform 280ms 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: transform 280ms 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .track.on .balloon-wrap ~ .thumb-container .thumb {\n          transition: width 280ms cubic-bezier(0, 0, 0.2, 1), height 280ms cubic-bezier(0, 0, 0.2, 1), background 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: width 280ms cubic-bezier(0, 0, 0.2, 1), height 280ms cubic-bezier(0, 0, 0.2, 1), background 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1);\n          transition: width 280ms cubic-bezier(0, 0, 0.2, 1), height 280ms cubic-bezier(0, 0, 0.2, 1), background 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .track.on .balloon-wrap ~ .thumb-container.active {\n          pointer-events: auto; }\n:host .track.on .balloon-wrap ~ .thumb-container.active .thumb {\n            width: 0;\n            height: 0; }\n:host .track.on .balloon-wrap ~ .thumb-container.active::before {\n            transition: none; }\n:host .points {\n    margin-top: -2px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n:host .points .point {\n      padding: 1px;\n      border-radius: 50%;\n      -webkit-transform: scale(0);\n              transform: scale(0); }\n:host .points.show .point {\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n:host .points.disabled .point {\n      background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/smn-ui/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: UiSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSliderComponent", function() { return UiSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiSliderComponent = /** @class */ (function () {
    function UiSliderComponent(elementRef) {
        this.elementRef = elementRef;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this.viewFormat) {
            this.viewFormat = function (value) { return value; };
        }
    }
    UiSliderComponent.prototype.ngOnInit = function () {
        this.percentageBlock = 100 / (this.range.length - 1);
        this.value = this.value || this.range[0];
        this.valueModel = this.closestNumber(this.value).index || this.range[0];
    };
    UiSliderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.value && !changes.value.firstChange && !this.mouseDown) {
            this.valueModel = this.closestNumber(changes.value.currentValue).index;
        }
        if (changes.color && !changes.color.firstChange && !this.mouseDown) {
            this.color = changes.color.currentValue;
        }
        if (changes.textColor && !changes.textColor.firstChange && !this.mouseDown) {
            this.textColor = changes.textColor.currentValue;
        }
    };
    UiSliderComponent.prototype.ngAfterViewInit = function () {
        this.valueElement = this.elementRef.nativeElement.querySelectorAll('.thumb-container')[0];
        this.registerEventsListeners();
    };
    UiSliderComponent.prototype.registerEventsListeners = function () {
        var _this = this;
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(this.valueElement, 'mousedown touchstart', function () {
            if (_this.disabled) {
                return;
            }
            _this.mouseDown = true;
            _this.toggleTackOn(true);
            _this.toggleBalloon(true, 0);
            _this.valueElement.classList.add('active');
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(document, 'mouseup touchend', function (e) {
            if (_this.disabled) {
                return;
            }
            _this.valueElement.classList.remove('active');
            if (_this.mouseDown && (e.pageX || e.originalEvent)) {
                _this.change(e, true);
            }
            _this.mouseDown = false;
            _this.toggleBalloon();
            _this.toggleTackOn();
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].on(document, 'mousemove touchmove', function (e) {
            if (!_this.mouseDown || _this.disabled) {
                return;
            }
            _this.change(e);
        });
    };
    UiSliderComponent.prototype.change = function (event, mouseUp) {
        var currentPosition = event.pageX || (event.touches ? event.touches[0].pageX : null) || (event.changedTouches ? event.changedTouches[0].pageX : null);
        var position = this.getPositionInIndex(currentPosition);
        var newValue = this.closestNumber(this.range[Math.round(position)]);
        if (mouseUp) {
            position = newValue.index;
        }
        this.value = newValue.value;
        this.valueModel = position;
        this.valueChange.emit(this.value);
    };
    UiSliderComponent.prototype.toggleBalloon = function (active, right) {
        var balloon = this.elementRef.nativeElement.querySelectorAll('.balloon-wrap')[0];
        if (balloon) {
            if (active) {
                balloon.style.right = typeof right === 'number' ? right : '';
                balloon.classList.add('active');
            }
            else {
                balloon.classList.remove('active');
            }
        }
    };
    UiSliderComponent.prototype.toggleTackOn = function (active) {
        var trackOn = this.elementRef.nativeElement.querySelectorAll('.track.on')[0];
        var method = active ? 'add' : 'remove';
        trackOn.classList[method]('no-transition');
    };
    UiSliderComponent.prototype.getPositionInIndex = function (position) {
        var trackOff = this.elementRef.nativeElement.querySelectorAll('.track.off')[0];
        position -= _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_1__["UiElement"].position(trackOff).left;
        position = position / trackOff.clientWidth * 100;
        position = position > 100 ? 100 : position < 0 ? 0 : position;
        return ((this.range.length - 1) / 100) * position;
    };
    UiSliderComponent.prototype.closestNumber = function (number) {
        var current = this.range[0];
        var difference = Math.abs(number - current);
        var itemIndex = 0;
        var newDifference;
        for (var i = 0; i < this.range.length; i++) {
            newDifference = Math.abs(number - this.range[i]);
            if (newDifference < difference) {
                difference = newDifference;
                current = this.range[i];
                itemIndex = i;
            }
        }
        return { index: itemIndex, value: current };
    };
    UiSliderComponent.prototype.getPercentage = function () {
        return this.percentageBlock * this.valueModel;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiSliderComponent.prototype, "hideBalloon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiSliderComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiSliderComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UiSliderComponent.prototype, "range", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiSliderComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text-color'),
        __metadata("design:type", String)
    ], UiSliderComponent.prototype, "textColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiSliderComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('view-format'),
        __metadata("design:type", Function)
    ], UiSliderComponent.prototype, "viewFormat", void 0);
    UiSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-slider[value]',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/smn-ui/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/smn-ui/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiSliderComponent);
    return UiSliderComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/smart-list/item/item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/smn-ui/smart-list/item/item.component.ts ***!
  \**********************************************************/
/*! exports provided: UiSmartListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSmartListItemComponent", function() { return UiSmartListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smart_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../smart-list.component */ "./src/app/smn-ui/smart-list/smart-list.component.ts");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UiSmartListItemComponent = /** @class */ (function () {
    function UiSmartListItemComponent(parent, element) {
        this.parent = parent;
        this.element = element;
    }
    UiSmartListItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.element.nativeElement.querySelectorAll('input').forEach(function (el) {
            el.addEventListener('focus', function (e) {
                _this.onFocus(e, self);
            });
            el.addEventListener('blur', function (e) {
                _this.onBlur(e, self);
            });
        });
    };
    UiSmartListItemComponent.prototype.onFocus = function (event, self) {
        var el = event.target;
        var elItem = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_2__["UiElementRef"](el).closest('ui-smart-list-item');
        var newIndex = Array.prototype.indexOf.call(self.parent.element.nativeElement.children, elItem.nativeElement);
        self.parent.currentFocusedElementIndex = newIndex > -1 ? newIndex : self.parent.currentFocusedElementIndex;
    };
    UiSmartListItemComponent.prototype.onBlur = function (event, self) {
        setTimeout(function () {
            var target = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_2__["UiElementRef"](event.target);
            if (!target.closest('body').nativeElement) {
                setTimeout(function () {
                    self.parent.element.nativeElement.children[self.parent.currentFocusedElementIndex].querySelector('input').focus();
                }, 100);
            }
        });
    };
    UiSmartListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-smart-list-item',
            template: __webpack_require__(/*! ../smart-list.component.html */ "./src/app/smn-ui/smart-list/smart-list.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_smart_list_component__WEBPACK_IMPORTED_MODULE_1__["UiSmartListComponent"])),
        __metadata("design:paramtypes", [_smart_list_component__WEBPACK_IMPORTED_MODULE_1__["UiSmartListComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiSmartListItemComponent);
    return UiSmartListItemComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/smart-list/smart-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/smart-list/smart-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content>\r\n</ng-content>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/smart-list/smart-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/smart-list/smart-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host /deep/ ui-smart-list-item {\n    display: block; }\n"

/***/ }),

/***/ "./src/app/smn-ui/smart-list/smart-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/smart-list/smart-list.component.ts ***!
  \***********************************************************/
/*! exports provided: UiSmartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSmartListComponent", function() { return UiSmartListComponent; });
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

var UiSmartListComponent = /** @class */ (function () {
    function UiSmartListComponent(differs, element) {
        this.differs = differs;
        this.element = element;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.differ = differs.find([]).create();
    }
    UiSmartListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.defaultItem) {
            this.defaultItem = {};
        }
        this.list = [Object.assign({}, this.defaultItem)];
        if (!this.model) {
            console.error('Você precisa declarar a model no seu componente');
        }
        this.objDiffer = {};
        this.list.forEach(function (elt, i) {
            _this.objDiffer[i] = _this.differs.find(elt).create();
        });
        this.model.forEach(function (item) {
            _this.list.push(item);
        });
    };
    UiSmartListComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var wasChanged = false;
        this.list.forEach(function (elt, i) {
            var objDiffer = _this.objDiffer[i];
            if (!objDiffer) {
                objDiffer = _this.objDiffer[i] = _this.differs.find(elt).create();
            }
            var objChanges = objDiffer.diff(elt);
            if (objChanges) {
                wasChanged = true;
                objChanges.forEachChangedItem(function (elt2) {
                    if (!elt2.currentValue && typeof elt2.currentValue !== 'number' && typeof elt2.currentValue !== 'boolean' && !elt[_this.autoDeleteException]) {
                        delete elt[elt2.key];
                    }
                });
                if (elt && _this.model.indexOf(elt) < 0 && (Object.keys(elt).length > Object.keys(_this.defaultItem).length)) {
                    _this.model.push(elt);
                }
                if (elt && (Object.keys(elt).length === Object.keys(_this.defaultItem).length) && equals(elt, _this.defaultItem) && _this.model.length && _this.model.indexOf(elt) > -1 && !elt[_this.autoDeleteException]) {
                    _this.model.splice(_this.model.indexOf(elt), 1);
                }
            }
        });
        if (wasChanged) {
            this.newItem();
        }
    };
    UiSmartListComponent.prototype.newItem = function () {
        var _this = this;
        var found = 0;
        this.list.forEach(function (item) {
            if (item && (Object.keys(item).length <= Object.keys(_this.defaultItem).length) && equals(item, _this.defaultItem)) {
                found++;
                var element = _this.list[_this.list.indexOf(item)];
                _this.list.splice(_this.list.indexOf(item), 1);
                _this.list.splice(_this.list.length, 0, element);
            }
        });
        if (!found) {
            this.list.push(Object.assign({}, this.defaultItem));
        }
        else {
            setTimeout(function () {
                _this.list.splice(_this.list.length - 1, 1);
                _this.newItem();
            });
        }
    };
    UiSmartListComponent.prototype.remove = function (i) {
        var _this = this;
        Object.keys(this.list[i]).forEach(function (key) {
            if (!Object.keys(_this.defaultItem).includes(key)) {
                delete _this.list[i][key];
            }
            else {
                _this.list[i][key] = _this.defaultItem[key];
            }
        });
        this.ngDoCheck();
    };
    UiSmartListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.model && changes.model.currentValue) {
            if (changes.model.currentValue.length) {
                changes.model.currentValue.forEach(function (item) {
                    if (_this.list && _this.list.indexOf(item) === -1) {
                        _this.list.push(item);
                    }
                });
            }
            else if (changes.model.currentValue && changes.model.previousValue) {
                this.list = [Object.assign({}, this.defaultItem)];
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSmartListComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('default-item'),
        __metadata("design:type", Object)
    ], UiSmartListComponent.prototype, "defaultItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('auto-delete-exception'),
        __metadata("design:type", Object)
    ], UiSmartListComponent.prototype, "autoDeleteException", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiSmartListComponent.prototype, "modelChange", void 0);
    UiSmartListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-smart-list',
            template: __webpack_require__(/*! ./smart-list.component.html */ "./src/app/smn-ui/smart-list/smart-list.component.html"),
            styles: [__webpack_require__(/*! ./smart-list.component.scss */ "./src/app/smn-ui/smart-list/smart-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiSmartListComponent);
    return UiSmartListComponent;
}());

function equals(x, y) {
    return JSON.stringify(x) === JSON.stringify(y);
}


/***/ }),

/***/ "./src/app/smn-ui/smn-ui.module.ts":
/*!*****************************************!*\
  !*** ./src/app/smn-ui/smn-ui.module.ts ***!
  \*****************************************/
/*! exports provided: debounce, unaccent, UiColor, UiCookie, UiElement, UiElementRef, UiSnackbar, UiToolbarService, UiWindowRef, UiCpfPipe, UiCnpjPipe, UiCepPipe, UiPhonePipe, UiInfiniteLoadService, UiDatetimeService, UiTimePipe, UiCurrencyPipe, UiMaskPhoneDirective, UiDialog, UiFilterPipe, SMNUIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMNUIModule", function() { return SMNUIModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _button_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/button.service */ "./src/app/smn-ui/button/button.service.ts");
/* harmony import */ var _utils_functions_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/functions/debounce */ "./src/app/smn-ui/utils/functions/debounce.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _utils_functions_debounce__WEBPACK_IMPORTED_MODULE_6__["debounce"]; });

/* harmony import */ var _utils_functions_unaccent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/functions/unaccent */ "./src/app/smn-ui/utils/functions/unaccent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unaccent", function() { return _utils_functions_unaccent__WEBPACK_IMPORTED_MODULE_7__["unaccent"]; });

/* harmony import */ var _calendar_add_calendar_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar/add-calendar.directive */ "./src/app/smn-ui/calendar/add-calendar.directive.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/smn-ui/calendar/calendar.component.ts");
/* harmony import */ var _calendar_calendar_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar/calendar-content.component */ "./src/app/smn-ui/calendar/calendar-content.component.ts");
/* harmony import */ var _utils_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/pipes/capitalize.pipe */ "./src/app/smn-ui/utils/pipes/capitalize.pipe.ts");
/* harmony import */ var _utils_providers_color_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/providers/color.provider */ "./src/app/smn-ui/utils/providers/color.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiColor", function() { return _utils_providers_color_provider__WEBPACK_IMPORTED_MODULE_12__["UiColor"]; });

/* harmony import */ var _utils_providers_cookie_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/providers/cookie.provider */ "./src/app/smn-ui/utils/providers/cookie.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiCookie", function() { return _utils_providers_cookie_provider__WEBPACK_IMPORTED_MODULE_13__["UiCookie"]; });

/* harmony import */ var _data_table_order_by_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-table/order-by.directive */ "./src/app/smn-ui/data-table/order-by.directive.ts");
/* harmony import */ var _date_picker_date_picker_caller_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./date-picker/date-picker-caller.directive */ "./src/app/smn-ui/date-picker/date-picker-caller.directive.ts");
/* harmony import */ var _date_picker_date_picker_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./date-picker/date-picker.directive */ "./src/app/smn-ui/date-picker/date-picker.directive.ts");
/* harmony import */ var _calendar_datetime_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./calendar/datetime.service */ "./src/app/smn-ui/calendar/datetime.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiDatetimeService", function() { return _calendar_datetime_service__WEBPACK_IMPORTED_MODULE_17__["UiDatetimeService"]; });

/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/smn-ui/dialog/dialog.component.ts");
/* harmony import */ var _dialog_dialog_trigger_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dialog/dialog-trigger.directive */ "./src/app/smn-ui/dialog/dialog-trigger.directive.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiElement", function() { return _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_20__["UiElement"]; });

/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiElementRef", function() { return _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_21__["UiElementRef"]; });

/* harmony import */ var _input_input_container_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./input/input-container.component */ "./src/app/smn-ui/input/input-container.component.ts");
/* harmony import */ var _input_input_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./input/input.directive */ "./src/app/smn-ui/input/input.directive.ts");
/* harmony import */ var _utils_validators_maxlength_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/validators/maxlength.directive */ "./src/app/smn-ui/utils/validators/maxlength.directive.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/smn-ui/menu/menu.component.ts");
/* harmony import */ var _menu_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./menu/menu-trigger.directive */ "./src/app/smn-ui/menu/menu-trigger.directive.ts");
/* harmony import */ var _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./nav-drawer/nav-drawer.component */ "./src/app/smn-ui/nav-drawer/nav-drawer.component.ts");
/* harmony import */ var _selection_control_option_option_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./selection-control/option/option.component */ "./src/app/smn-ui/selection-control/option/option.component.ts");
/* harmony import */ var _progress_radial_progress_radial_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./progress/radial/progress-radial.component */ "./src/app/smn-ui/progress/radial/progress-radial.component.ts");
/* harmony import */ var _date_picker_references_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./date-picker/references.service */ "./src/app/smn-ui/date-picker/references.service.ts");
/* harmony import */ var _ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ripple/ripple.directive */ "./src/app/smn-ui/ripple/ripple.directive.ts");
/* harmony import */ var _smart_list_smart_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./smart-list/smart-list.component */ "./src/app/smn-ui/smart-list/smart-list.component.ts");
/* harmony import */ var _smart_list_item_item_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./smart-list/item/item.component */ "./src/app/smn-ui/smart-list/item/item.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/smn-ui/snackbar/snackbar.component.ts");
/* harmony import */ var _snackbar_snackbar_container_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./snackbar/snackbar-container.component */ "./src/app/smn-ui/snackbar/snackbar-container.component.ts");
/* harmony import */ var _snackbar_snackbar_provider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./snackbar/snackbar.provider */ "./src/app/smn-ui/snackbar/snackbar.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiSnackbar", function() { return _snackbar_snackbar_provider__WEBPACK_IMPORTED_MODULE_36__["UiSnackbar"]; });

/* harmony import */ var _selection_control_switch_switch_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./selection-control/switch/switch.component */ "./src/app/smn-ui/selection-control/switch/switch.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/smn-ui/toolbar/toolbar.component.ts");
/* harmony import */ var _toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./toolbar/toolbar.service */ "./src/app/smn-ui/toolbar/toolbar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiToolbarService", function() { return _toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_39__["UiToolbarService"]; });

/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiWindowRef", function() { return _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_40__["UiWindowRef"]; });

/* harmony import */ var _utils_masks_date_mask_date_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./utils/masks/date/mask-date.directive */ "./src/app/smn-ui/utils/masks/date/mask-date.directive.ts");
/* harmony import */ var _utils_pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./utils/pipes/time-ago.pipe */ "./src/app/smn-ui/utils/pipes/time-ago.pipe.ts");
/* harmony import */ var _list_list_item_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./list/list-item.directive */ "./src/app/smn-ui/list/list-item.directive.ts");
/* harmony import */ var _utils_masks_cpf_mask_cpf_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./utils/masks/cpf/mask-cpf.directive */ "./src/app/smn-ui/utils/masks/cpf/mask-cpf.directive.ts");
/* harmony import */ var _utils_masks_cpf_cpf_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./utils/masks/cpf/cpf.pipe */ "./src/app/smn-ui/utils/masks/cpf/cpf.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiCpfPipe", function() { return _utils_masks_cpf_cpf_pipe__WEBPACK_IMPORTED_MODULE_45__["UiCpfPipe"]; });

/* harmony import */ var _utils_masks_cnpj_mask_cnpj_directive__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./utils/masks/cnpj/mask-cnpj.directive */ "./src/app/smn-ui/utils/masks/cnpj/mask-cnpj.directive.ts");
/* harmony import */ var _utils_masks_cnpj_cnpj_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./utils/masks/cnpj/cnpj.pipe */ "./src/app/smn-ui/utils/masks/cnpj/cnpj.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiCnpjPipe", function() { return _utils_masks_cnpj_cnpj_pipe__WEBPACK_IMPORTED_MODULE_47__["UiCnpjPipe"]; });

/* harmony import */ var _utils_masks_cep_mask_cep_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./utils/masks/cep/mask-cep.directive */ "./src/app/smn-ui/utils/masks/cep/mask-cep.directive.ts");
/* harmony import */ var _utils_masks_cep_cep_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./utils/masks/cep/cep.pipe */ "./src/app/smn-ui/utils/masks/cep/cep.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiCepPipe", function() { return _utils_masks_cep_cep_pipe__WEBPACK_IMPORTED_MODULE_49__["UiCepPipe"]; });

/* harmony import */ var _utils_masks_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./utils/masks/phone/phone.pipe */ "./src/app/smn-ui/utils/masks/phone/phone.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiPhonePipe", function() { return _utils_masks_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_50__["UiPhonePipe"]; });

/* harmony import */ var _utils_masks_phone_mask_phone_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./utils/masks/phone/mask-phone.directive */ "./src/app/smn-ui/utils/masks/phone/mask-phone.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiMaskPhoneDirective", function() { return _utils_masks_phone_mask_phone_directive__WEBPACK_IMPORTED_MODULE_51__["UiMaskPhoneDirective"]; });

/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./list/list.component */ "./src/app/smn-ui/list/list.component.ts");
/* harmony import */ var _list_items_items_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./list/items/items.component */ "./src/app/smn-ui/list/items/items.component.ts");
/* harmony import */ var _list_item_item_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./list/item/item.component */ "./src/app/smn-ui/list/item/item.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/smn-ui/slider/slider.component.ts");
/* harmony import */ var _slider_slider_multi_handle_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./slider/slider-multi-handle.component */ "./src/app/smn-ui/slider/slider-multi-handle.component.ts");
/* harmony import */ var _utils_infinite_load_infinite_load_directive__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./utils/infinite-load/infinite-load.directive */ "./src/app/smn-ui/utils/infinite-load/infinite-load.directive.ts");
/* harmony import */ var _utils_infinite_load_infinite_load_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./utils/infinite-load/infinite-load.service */ "./src/app/smn-ui/utils/infinite-load/infinite-load.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiInfiniteLoadService", function() { return _utils_infinite_load_infinite_load_service__WEBPACK_IMPORTED_MODULE_58__["UiInfiniteLoadService"]; });

/* harmony import */ var _autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./autocomplete/autocomplete.directive */ "./src/app/smn-ui/autocomplete/autocomplete.directive.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/smn-ui/autocomplete/autocomplete.component.ts");
/* harmony import */ var _utils_masks_integer_mask_integer_directive__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./utils/masks/integer/mask-integer.directive */ "./src/app/smn-ui/utils/masks/integer/mask-integer.directive.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/smn-ui/tabs/tabs.component.ts");
/* harmony import */ var _tabs_pages_tabs_pages_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./tabs/pages/tabs-pages.component */ "./src/app/smn-ui/tabs/pages/tabs-pages.component.ts");
/* harmony import */ var _lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./lazy-load/lazy-load.directive */ "./src/app/smn-ui/lazy-load/lazy-load.directive.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/smn-ui/data-table/data-table.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet.component */ "./src/app/smn-ui/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_directive__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet.directive */ "./src/app/smn-ui/bottom-sheet/bottom-sheet.directive.ts");
/* harmony import */ var _input_input_file_directive__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./input/input-file.directive */ "./src/app/smn-ui/input/input-file.directive.ts");
/* harmony import */ var _ellipsis_ellipsis_directive__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./ellipsis/ellipsis.directive */ "./src/app/smn-ui/ellipsis/ellipsis.directive.ts");
/* harmony import */ var _utils_validators_required_directive__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./utils/validators/required.directive */ "./src/app/smn-ui/utils/validators/required.directive.ts");
/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./color-picker/color-picker.component */ "./src/app/smn-ui/color-picker/color-picker.component.ts");
/* harmony import */ var _color_picker_color_picker_directive__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./color-picker/color-picker.directive */ "./src/app/smn-ui/color-picker/color-picker.directive.ts");
/* harmony import */ var _input_autosize_directive__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./input/autosize.directive */ "./src/app/smn-ui/input/autosize.directive.ts");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./clock/clock.component */ "./src/app/smn-ui/clock/clock.component.ts");
/* harmony import */ var _time_picker_time_picker_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./time-picker/time-picker.service */ "./src/app/smn-ui/time-picker/time-picker.service.ts");
/* harmony import */ var _time_picker_time_picker_directive__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./time-picker/time-picker.directive */ "./src/app/smn-ui/time-picker/time-picker.directive.ts");
/* harmony import */ var _time_picker_time_picker_caller_directive__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./time-picker/time-picker-caller.directive */ "./src/app/smn-ui/time-picker/time-picker-caller.directive.ts");
/* harmony import */ var _utils_masks_time_time_pipe__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./utils/masks/time/time.pipe */ "./src/app/smn-ui/utils/masks/time/time.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiTimePipe", function() { return _utils_masks_time_time_pipe__WEBPACK_IMPORTED_MODULE_78__["UiTimePipe"]; });

/* harmony import */ var _utils_masks_time_mask_time_directive__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./utils/masks/time/mask-time.directive */ "./src/app/smn-ui/utils/masks/time/mask-time.directive.ts");
/* harmony import */ var _utils_masks_currency_mask_currency_directive__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./utils/masks/currency/mask-currency.directive */ "./src/app/smn-ui/utils/masks/currency/mask-currency.directive.ts");
/* harmony import */ var _utils_masks_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./utils/masks/currency/currency.pipe */ "./src/app/smn-ui/utils/masks/currency/currency.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiCurrencyPipe", function() { return _utils_masks_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_81__["UiCurrencyPipe"]; });

/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./dialog/dialog.service */ "./src/app/smn-ui/dialog/dialog.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiDialog", function() { return _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_82__["UiDialog"]; });

/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./select/select.component */ "./src/app/smn-ui/select/select.component.ts");
/* harmony import */ var _select_option_option_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./select/option/option.component */ "./src/app/smn-ui/select/option/option.component.ts");
/* harmony import */ var _select_select_filter_pipe__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./select/select-filter.pipe */ "./src/app/smn-ui/select/select-filter.pipe.ts");
/* harmony import */ var _utils_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./utils/pipes/filter.pipe */ "./src/app/smn-ui/utils/pipes/filter.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiFilterPipe", function() { return _utils_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_86__["UiFilterPipe"]; });

/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./avatar/avatar.component */ "./src/app/smn-ui/avatar/avatar.component.ts");
/* harmony import */ var _utils_masks_float_mask_float_directive__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./utils/masks/float/mask-float.directive */ "./src/app/smn-ui/utils/masks/float/mask-float.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























































































var lib = [
    _calendar_add_calendar_directive__WEBPACK_IMPORTED_MODULE_8__["UiAddCalendarDirective"],
    _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__["UiCalendarComponent"],
    _calendar_calendar_content_component__WEBPACK_IMPORTED_MODULE_10__["UiCalendarContentComponent"],
    _utils_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_11__["UiCapitalizePipe"],
    _data_table_order_by_directive__WEBPACK_IMPORTED_MODULE_14__["UiDataTableOrderByDirective"],
    _date_picker_date_picker_caller_directive__WEBPACK_IMPORTED_MODULE_15__["UiDatePickerCallerDirective"],
    _date_picker_date_picker_directive__WEBPACK_IMPORTED_MODULE_16__["UiDatePickerDirective"],
    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_18__["UiDialogComponent"],
    _dialog_dialog_trigger_directive__WEBPACK_IMPORTED_MODULE_19__["UiDialogTriggerDirective"],
    _input_input_container_component__WEBPACK_IMPORTED_MODULE_22__["UiInputContainerComponent"],
    _input_input_directive__WEBPACK_IMPORTED_MODULE_23__["UiInputDirective"],
    _utils_validators_maxlength_directive__WEBPACK_IMPORTED_MODULE_24__["UiMaxlengthDirective"],
    _menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["UiMenuComponent"],
    _menu_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_26__["UiMenuTriggerDirective"],
    _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_27__["UiNavDrawerComponent"],
    _selection_control_option_option_component__WEBPACK_IMPORTED_MODULE_28__["UiOptionComponent"],
    _progress_radial_progress_radial_component__WEBPACK_IMPORTED_MODULE_29__["UiProgressRadialComponent"],
    _ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_31__["UiRippleDirective"],
    _smart_list_smart_list_component__WEBPACK_IMPORTED_MODULE_32__["UiSmartListComponent"],
    _smart_list_item_item_component__WEBPACK_IMPORTED_MODULE_33__["UiSmartListItemComponent"],
    _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_34__["UiSnackbarComponent"],
    _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_34__["UiSnackbarComponent"],
    _snackbar_snackbar_container_component__WEBPACK_IMPORTED_MODULE_35__["UiSnackbarContainerComponent"],
    _selection_control_switch_switch_component__WEBPACK_IMPORTED_MODULE_37__["UiSwitchComponent"],
    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_38__["UiToolbarComponent"],
    _menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["UiMenuComponent"],
    _menu_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_26__["UiMenuTriggerDirective"],
    _progress_radial_progress_radial_component__WEBPACK_IMPORTED_MODULE_29__["UiProgressRadialComponent"],
    _utils_masks_date_mask_date_directive__WEBPACK_IMPORTED_MODULE_41__["UiMaskDateDirective"],
    _utils_pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_42__["UiTimeAgoPipe"],
    _list_list_item_directive__WEBPACK_IMPORTED_MODULE_43__["UiListItemDirective"],
    _utils_masks_cpf_mask_cpf_directive__WEBPACK_IMPORTED_MODULE_44__["UiMaskCpfDirective"],
    _utils_masks_cpf_cpf_pipe__WEBPACK_IMPORTED_MODULE_45__["UiCpfPipe"],
    _utils_masks_cnpj_mask_cnpj_directive__WEBPACK_IMPORTED_MODULE_46__["UiMaskCnpjDirective"],
    _utils_masks_cnpj_cnpj_pipe__WEBPACK_IMPORTED_MODULE_47__["UiCnpjPipe"],
    _utils_masks_cep_mask_cep_directive__WEBPACK_IMPORTED_MODULE_48__["UiMaskCepDirective"],
    _utils_masks_cep_cep_pipe__WEBPACK_IMPORTED_MODULE_49__["UiCepPipe"],
    _utils_masks_phone_mask_phone_directive__WEBPACK_IMPORTED_MODULE_51__["UiMaskPhoneDirective"],
    _utils_masks_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_50__["UiPhonePipe"],
    _list_list_component__WEBPACK_IMPORTED_MODULE_52__["UiListComponent"],
    _list_items_items_component__WEBPACK_IMPORTED_MODULE_53__["UiListItemsComponent"],
    _list_item_item_component__WEBPACK_IMPORTED_MODULE_54__["UiListItemComponent"],
    _utils_masks_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_50__["UiPhonePipe"],
    _slider_slider_component__WEBPACK_IMPORTED_MODULE_55__["UiSliderComponent"],
    _slider_slider_multi_handle_component__WEBPACK_IMPORTED_MODULE_56__["UiSliderMultiHandleComponent"],
    _utils_infinite_load_infinite_load_directive__WEBPACK_IMPORTED_MODULE_57__["UiInfiniteLoadDirective"],
    _autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_59__["UiAutocompleteDirective"],
    _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_60__["UiAutocompleteComponent"],
    _utils_masks_integer_mask_integer_directive__WEBPACK_IMPORTED_MODULE_61__["UiMaskIntegerDirective"],
    _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_62__["UiTabsComponent"],
    _tabs_pages_tabs_pages_component__WEBPACK_IMPORTED_MODULE_63__["UiTabsPagesComponent"],
    _lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_64__["UiLazyLoadDirective"],
    _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_65__["UiDataTableComponent"],
    _lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_64__["UiLazyLoadDirective"],
    _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_66__["UiBottomSheetComponent"],
    _bottom_sheet_bottom_sheet_directive__WEBPACK_IMPORTED_MODULE_67__["UiBottomSheetTriggerDirective"],
    _input_input_file_directive__WEBPACK_IMPORTED_MODULE_68__["UiInputFileDirective"],
    _ellipsis_ellipsis_directive__WEBPACK_IMPORTED_MODULE_69__["UiEllipsisDirective"],
    _utils_validators_required_directive__WEBPACK_IMPORTED_MODULE_70__["UiRequiredDirective"],
    _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_71__["UiColorPickerComponent"],
    _color_picker_color_picker_directive__WEBPACK_IMPORTED_MODULE_72__["UiColorPickerDirective"],
    _input_autosize_directive__WEBPACK_IMPORTED_MODULE_73__["UiInputAutosizeDirective"],
    _color_picker_color_picker_directive__WEBPACK_IMPORTED_MODULE_72__["UiColorPickerDirective"],
    _clock_clock_component__WEBPACK_IMPORTED_MODULE_74__["UiClockComponent"],
    _time_picker_time_picker_directive__WEBPACK_IMPORTED_MODULE_76__["UiTimePickerDirective"],
    _time_picker_time_picker_caller_directive__WEBPACK_IMPORTED_MODULE_77__["UiTimePickerCallerDirective"],
    _utils_masks_time_time_pipe__WEBPACK_IMPORTED_MODULE_78__["UiTimePipe"],
    _utils_masks_time_mask_time_directive__WEBPACK_IMPORTED_MODULE_79__["UiMaskTimeDirective"],
    _utils_masks_currency_mask_currency_directive__WEBPACK_IMPORTED_MODULE_80__["UiMaskCurrencyDirective"],
    _utils_masks_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_81__["UiCurrencyPipe"],
    _select_select_component__WEBPACK_IMPORTED_MODULE_83__["UiSelectComponent"],
    _select_option_option_component__WEBPACK_IMPORTED_MODULE_84__["UiSelectOptionComponent"],
    _select_select_filter_pipe__WEBPACK_IMPORTED_MODULE_85__["UiSelectFilterPipe"],
    _utils_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_86__["UiFilterPipe"],
    _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_87__["UiAvatarComponent"],
    _utils_masks_float_mask_float_directive__WEBPACK_IMPORTED_MODULE_88__["UiMaskFloatDirective"]
];
var SMNUIModule = /** @class */ (function () {
    function SMNUIModule() {
    }
    SMNUIModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: lib.slice(),
            exports: lib.slice(),
            providers: [
                _utils_providers_color_provider__WEBPACK_IMPORTED_MODULE_12__["UiColor"],
                _calendar_datetime_service__WEBPACK_IMPORTED_MODULE_17__["UiDatetimeService"],
                _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_20__["UiElement"],
                _date_picker_references_service__WEBPACK_IMPORTED_MODULE_30__["UiReferencesService"],
                _snackbar_snackbar_provider__WEBPACK_IMPORTED_MODULE_36__["UiSnackbar"],
                _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_40__["UiWindowRef"],
                _utils_infinite_load_infinite_load_service__WEBPACK_IMPORTED_MODULE_58__["UiInfiniteLoadService"],
                _time_picker_time_picker_service__WEBPACK_IMPORTED_MODULE_75__["UiTimePickerService"],
                _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_82__["UiDialog"],
            ],
            entryComponents: [
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__["UiCalendarComponent"],
                _calendar_calendar_content_component__WEBPACK_IMPORTED_MODULE_10__["UiCalendarContentComponent"],
                _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_60__["UiAutocompleteComponent"],
                _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_71__["UiColorPickerComponent"],
                _clock_clock_component__WEBPACK_IMPORTED_MODULE_74__["UiClockComponent"]
            ]
        })
    ], SMNUIModule);
    return SMNUIModule;
}());



/***/ }),

/***/ "./src/app/smn-ui/snackbar/snackbar-container.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/smn-ui/snackbar/snackbar-container.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-snackbar *ngFor=\"let bar of bars\" [bar]=\"bar\" [ngClass]=\"{'center': bar.center}\">\r\n    {{bar.text}}\r\n</ui-snackbar>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/snackbar/snackbar-container.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/smn-ui/snackbar/snackbar-container.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  position: fixed;\n  height: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  transition: left 280ms;\n  z-index: 6; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n  :host-context(.ui-nav-drawer-persistent) {\n    left: 320px; } }\n"

/***/ }),

/***/ "./src/app/smn-ui/snackbar/snackbar-container.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/smn-ui/snackbar/snackbar-container.component.ts ***!
  \*****************************************************************/
/*! exports provided: UiSnackbarContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSnackbarContainerComponent", function() { return UiSnackbarContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _snackbar_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar.provider */ "./src/app/smn-ui/snackbar/snackbar.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiSnackbarContainerComponent = /** @class */ (function () {
    function UiSnackbarContainerComponent() {
        var _this = this;
        _snackbar_provider__WEBPACK_IMPORTED_MODULE_1__["UiSnackbar"].barsChange.subscribe(function (value) {
            _this.bars = value;
        });
    }
    UiSnackbarContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(window, 'resize', function () {
            if (_this.bars && _this.bars.length) {
                _snackbar_provider__WEBPACK_IMPORTED_MODULE_1__["UiSnackbar"].elevateFAB();
            }
        });
    };
    UiSnackbarContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-snackbar-container',
            template: __webpack_require__(/*! ./snackbar-container.component.html */ "./src/app/smn-ui/snackbar/snackbar-container.component.html"),
            styles: [__webpack_require__(/*! ./snackbar-container.component.scss */ "./src/app/smn-ui/snackbar/snackbar-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiSnackbarContainerComponent);
    return UiSnackbarContainerComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/snackbar/snackbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/smn-ui/snackbar/snackbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">\r\n    {{bar.text}}\r\n</div>\r\n<div class=\"action\" *ngIf=\"bar.action && bar.actionText\">\r\n    <button class=\"ui-button accent flat\" (click)=\"bar.action(hide)\" uiRipple>\r\n        {{bar.actionText}}\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/snackbar/snackbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/smn-ui/snackbar/snackbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #323232;\n  padding-left: 24px;\n  box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20);\n  margin: 0 auto;\n  width: 100%;\n  flex: 0 0 auto;\n  transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host:first-child {\n    -webkit-animation: enter-snackbar 280ms cubic-bezier(0, 0, 0.2, 1);\n            animation: enter-snackbar 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host + /deep/ ui-snackbar:not(.nothing) {\n    position: absolute;\n    z-index: -1;\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    bottom: initial; }\n:host.leave {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n    :host {\n      min-width: 288px;\n      margin: 16px 16px;\n      border-radius: 2px;\n      max-width: 568px;\n      width: auto; }\n      :host:not(.center) {\n        position: absolute;\n        bottom: 0; }\n        :host:not(.center).leave {\n          -webkit-transform: translateY(110%);\n                  transform: translateY(110%);\n          -webkit-transform: translateY(calc(100% + 16px));\n                  transform: translateY(calc(100% + 16px)); } }\n:host .text {\n    color: #FFF;\n    font-size: 14px;\n    padding: 14px 0;\n    min-height: 48px;\n    display: flex;\n    align-items: center; }\n:host .text {\n    margin-right: 24px; }\n:host button.ui-button {\n    min-width: 0;\n    margin-right: 8px; }\n:host.center {\n    margin: 0 auto;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n:host /deep/ [uiRipple].ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat.accent .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n  /deep/ .ui-button.elevating-snack {\n    -webkit-transform: translateY(0) !important;\n            transform: translateY(0) !important; } }\n@-webkit-keyframes enter-snackbar {\n  0% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n@keyframes enter-snackbar {\n  0% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n"

/***/ }),

/***/ "./src/app/smn-ui/snackbar/snackbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/smn-ui/snackbar/snackbar.component.ts ***!
  \*******************************************************/
/*! exports provided: UiSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSnackbarComponent", function() { return UiSnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _snackbar_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar.provider */ "./src/app/smn-ui/snackbar/snackbar.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiSnackbarComponent = /** @class */ (function () {
    function UiSnackbarComponent() {
    }
    UiSnackbarComponent.prototype.hide = function () {
        _snackbar_provider__WEBPACK_IMPORTED_MODULE_1__["UiSnackbar"].hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSnackbarComponent.prototype, "bar", void 0);
    UiSnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/smn-ui/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/smn-ui/snackbar/snackbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiSnackbarComponent);
    return UiSnackbarComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/snackbar/snackbar.provider.ts":
/*!******************************************************!*\
  !*** ./src/app/smn-ui/snackbar/snackbar.provider.ts ***!
  \******************************************************/
/*! exports provided: UiSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSnackbar", function() { return UiSnackbar; });
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

var timeout;
var bars = [];
var defaults = {
    duration: 5000,
    center: false,
    actionText: null
};
var UiSnackbar = /** @class */ (function () {
    function UiSnackbar() {
    }
    UiSnackbar.show = function (bar) {
        bar = Object.assign({}, defaults, bar);
        bars.push(bar);
        if (bars.length === 1) {
            this.timerBar(bar);
        }
        this.barsChange.emit(bars);
    };
    UiSnackbar.hide = function () {
        var _this = this;
        if (bars.length) {
            document.querySelectorAll('ui-snackbar-container > ui-snackbar')[0].classList.add('leave');
            setTimeout(function () {
                clearTimeout(timeout);
                _this.finishTimeout();
            }, 280);
        }
    };
    UiSnackbar.timerBar = function (bar) {
        var _this = this;
        if (bars.length) {
            this.elevateFAB();
            if (bar.duration !== Infinity) {
                timeout = setTimeout(function () {
                    var firstSnackbar = document.querySelectorAll('ui-snackbar-container > ui-snackbar')[0];
                    if (firstSnackbar) {
                        document.querySelectorAll('ui-snackbar-container > ui-snackbar')[0].classList.add('leave');
                    }
                    setTimeout(function () { return _this.finishTimeout(); }, 280);
                }, bar.duration);
            }
        }
    };
    ;
    UiSnackbar.finishTimeout = function () {
        bars.shift();
        this.setTranslateFAB(0, false);
        if (bars.length) {
            this.timerBar(bars[0]);
        }
        this.barsChange.emit(bars);
    };
    UiSnackbar.elevateFAB = function () {
        var _this = this;
        setTimeout(function () {
            var snackHeight;
            if (window.innerWidth <= 764) {
                snackHeight = document.querySelectorAll('ui-snackbar-container > ui-snackbar')[0].clientHeight;
            }
            else {
                snackHeight = 0;
            }
            _this.setTranslateFAB(snackHeight, true);
        });
    };
    UiSnackbar.setTranslateFAB = function (translate, addClass) {
        var fabs;
        if (window.innerWidth <= 764) {
            fabs = document.querySelectorAll('.ui-fab-container');
        }
        else {
            fabs = document.querySelectorAll('.ui-fab-container.scrolled');
        }
        [].forEach.call(document.querySelectorAll('.ui-fab-container'), function (fab) {
            fab.classList.remove('elevating-snack');
            fab.style.transform = '';
        });
        [].forEach.call(fabs, function (fab) {
            fab.classList[addClass ? 'add' : 'remove']('elevating-snack');
            if (translate) {
                fab.style.transform = "translateY(-" + translate + "px)";
            }
            else {
                fab.style.transform = '';
            }
        });
    };
    UiSnackbar.barsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    UiSnackbar = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiSnackbar);
    return UiSnackbar;
}());



/***/ }),

/***/ "./src/app/smn-ui/tabs/pages/tabs-pages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/tabs/pages/tabs-pages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/tabs/pages/tabs-pages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/tabs/pages/tabs-pages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  width: 100%;\n  transition: height 280ms cubic-bezier(0, 0, 0.2, 1);\n  overflow: hidden;\n  display: block; }\n:host .page-container {\n    overflow: hidden;\n    text-align: center;\n    display: flex;\n    justify-content: flex-start;\n    max-width: 100%;\n    max-width: 100vw; }\n:host .page-container:not(.no-transition) /deep/ .page {\n      transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n      transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n      transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .page-container /deep/ .page {\n      text-align: left;\n      flex-shrink: 0;\n      width: 100%;\n      margin-bottom: auto; }\n"

/***/ }),

/***/ "./src/app/smn-ui/tabs/pages/tabs-pages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/tabs/pages/tabs-pages.component.ts ***!
  \***********************************************************/
/*! exports provided: UiTabsPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTabsPagesComponent", function() { return UiTabsPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiTabsPagesComponent = /** @class */ (function () {
    function UiTabsPagesComponent(element) {
        this.element = element;
        this.onChangePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentPage = 1;
    }
    UiTabsPagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.tabs) {
            var tabs_1 = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.tabs.element.nativeElement).querySelector('.tab');
            var touchXMovement_1;
            var touchXStartPosition_1;
            var touchYMovement_1;
            var touchYStartPosition_1;
            var firstMovementCoord_1;
            var currentBannerIndex_1;
            var newPosition_1;
            var elBannerContainer_1 = this.element.nativeElement.querySelector('.page-container');
            elBannerContainer_1.addEventListener('touchstart', function (e) {
                currentBannerIndex_1 = tabs_1.indexOf(tabs_1.filter(function (tab) { return tab.is('.selected'); })[0]);
                touchXStartPosition_1 = e.touches[0].pageX;
                touchYStartPosition_1 = e.touches[0].pageY;
                elBannerContainer_1.classList.add('no-transition');
                if (_this.enableOverflow) {
                    var pageContainer = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](_this.element.nativeElement);
                    pageContainer.querySelector('.page-container .page').forEach(function (page) {
                        page.css('height', '');
                    });
                }
            });
            elBannerContainer_1.addEventListener('touchmove', function (e) {
                if (touchXStartPosition_1 < 0 || touchXStartPosition_1 > 40) {
                    touchXMovement_1 = touchXStartPosition_1 - e.touches[0].pageX;
                    touchYMovement_1 = touchYStartPosition_1 - e.touches[0].pageY;
                    if (!firstMovementCoord_1) {
                        if (touchXMovement_1 > 20 || touchXMovement_1 < -20) {
                            firstMovementCoord_1 = 'X';
                        }
                        else if (touchYMovement_1 > 20 || touchYMovement_1 < -20) {
                            firstMovementCoord_1 = 'Y';
                        }
                    }
                    if (touchXMovement_1 && firstMovementCoord_1 === 'X') {
                        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].disableScroll();
                        var i = currentBannerIndex_1;
                        var isNegative = i > 0 ? -1 : 1;
                        var currentPosition_1 = (i * 100) * isNegative;
                        _this.element.nativeElement.querySelectorAll('.page-container .page').forEach(function (page) {
                            newPosition_1 = currentPosition_1 - ((100 / page.clientWidth) * touchXMovement_1);
                            page.style.transform = "translate(" + newPosition_1 + "%)";
                        });
                    }
                }
            });
            elBannerContainer_1.addEventListener('touchend', function () {
                elBannerContainer_1.classList.remove('no-transition');
                if (touchXMovement_1) {
                    var newIndex = (Math.round(newPosition_1 / 100) * -1);
                    if (tabs_1[newIndex]) {
                        tabs_1[newIndex].trigger('click');
                    }
                    else {
                        _this.pagesGoToPage();
                    }
                }
                _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].enableScroll();
                firstMovementCoord_1 = undefined;
            });
        }
        this.pagesGoToPage(1);
    };
    UiTabsPagesComponent.prototype.pagesGoToPage = function (nextPage) {
        var _this = this;
        var tabs;
        if (this.tabs) {
            tabs = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.tabs.element.nativeElement).querySelector('.tab');
        }
        else {
            tabs = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.element.nativeElement).querySelector('.page');
        }
        if (tabs[nextPage - 1]) {
            var isNegative = (nextPage - 1) > 0 ? -1 : 1;
            var newPosition_2 = (nextPage - 1) * 100 * isNegative;
            this.element.nativeElement.querySelectorAll('.page-container .page').forEach(function (page) {
                page.style.transform = "translate(" + newPosition_2 + "%)";
            });
        }
        else {
            this.pagesGoToPage(tabs.indexOf(tabs.filter(function (tab) { return tab.is('.selected'); })[0]) + 1);
            // TODO: Verificar se isso realmente funciona
        }
        var pageContainer = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.element.nativeElement);
        var elNextPage = pageContainer.querySelector('.page-container .page')[nextPage - 1];
        pageContainer.querySelector('.page-container .page').forEach(function (page, i) {
            if (nextPage - 1 === i) {
                page.css('height', '');
            }
        });
        if (this.firstLoad) {
            var elCurrentPage = pageContainer.querySelector('.page-container .page')[this.currentPage - 1];
            pageContainer.css('height', elCurrentPage.nativeElement.clientHeight + 'px');
        }
        else {
            this.firstLoad = true;
        }
        if (elNextPage) {
            setTimeout(function () {
                pageContainer.css('height', elNextPage.nativeElement.clientHeight + 'px');
                clearTimeout(_this.timeOutTurnBack);
                _this.timeOutTurnBack = setTimeout(function () {
                    pageContainer.querySelector('.page-container .page').forEach(function (page, i) {
                        if (nextPage - 1 !== i) {
                            page.css('height', 0);
                        }
                    });
                    pageContainer.css('height', '');
                }, 280);
            });
        }
        if (typeof nextPage !== 'undefined') {
            this.currentPage = nextPage;
            if (this.onChangePage) {
                setTimeout(function () {
                    _this.onChangePage.emit();
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiTabsPagesComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('enable-overflow'),
        __metadata("design:type", Boolean)
    ], UiTabsPagesComponent.prototype, "enableOverflow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onchangepage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiTabsPagesComponent.prototype, "onChangePage", void 0);
    UiTabsPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-tabs-pages',
            template: __webpack_require__(/*! ./tabs-pages.component.html */ "./src/app/smn-ui/tabs/pages/tabs-pages.component.html"),
            styles: [__webpack_require__(/*! ./tabs-pages.component.scss */ "./src/app/smn-ui/tabs/pages/tabs-pages.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiTabsPagesComponent);
    return UiTabsPagesComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/tabs/tabs.component.html":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/tabs/tabs.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs\">\r\n    <div class=\"overflow\" (scroll)=\"tabsScroll()\">\r\n        <ng-content></ng-content>\r\n        <div class=\"indicator\"></div>\r\n    </div>\r\n    <div class=\"arrows\">\r\n        <div class=\"left\" [class.show]=\"showLeftArrow\">\r\n            <div class=\"ui-button icon flat\" uiRipple (click)=\"tabsScroll(-200)\">\r\n                <i class=\"material-icons\">keyboard_arrow_left</i>\r\n            </div>\r\n        </div>\r\n        <div class=\"right\" [class.show]=\"showRightArrow\">\r\n            <div class=\"ui-button icon flat\" uiRipple (click)=\"tabsScroll(200)\">\r\n                <i class=\"material-icons\">keyboard_arrow_right</i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/tabs/tabs.component.scss":
/*!*************************************************!*\
  !*** ./src/app/smn-ui/tabs/tabs.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  width: 100%;\n  display: block; }\n:host .tabs {\n    position: relative;\n    overflow: hidden;\n    z-index: 2;\n    width: 100%;\n    height: 48px; }\n:host .tabs .overflow {\n      overflow-y: auto;\n      position: relative;\n      width: 100%;\n      height: 100px;\n      display: flex;\n      transition: padding-left 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n      transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), padding-left 280ms cubic-bezier(0, 0, 0.2, 1);\n      transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), padding-left 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .tabs .overflow /deep/ .tab {\n        height: 48px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 0 12px;\n        text-transform: uppercase;\n        cursor: default;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        font-size: 14px;\n        font-weight: 500;\n        text-align: center;\n        transition: color 280ms cubic-bezier(0, 0, 0.2, 1), max-width 280ms cubic-bezier(0, 0, 0.2, 1); }\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n          :host .tabs .overflow /deep/ .tab {\n            min-width: 72px; } }\n:host:not(.scrollable) .tabs /deep/ .tab {\n          width: 100%; }\n@media (min-width: 763px) {\n          :host.scrollable:not(.no-padding) .tabs .overflow {\n            padding-left: 60px; } }\n@media (max-width: 1082px) {\n          :host-context(body.ui-nav-drawer-persistent).scrollable:not(.no-padding) .tabs .overflow {\n            padding-left: 0; } }\n:host.scrollable .tabs .overflow /deep/ .tab {\n          min-width: 160px;\n          max-width: 264px; }\n:host .tabs .overflow .indicator {\n        position: absolute;\n        height: 2px;\n        top: 46px;\n        transition: width 280ms cubic-bezier(0, 0, 0.2, 1), left 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .tabs .arrows {\n      position: absolute;\n      width: 100%;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 100%;\n      pointer-events: none;\n      display: flex;\n      align-items: center;\n      cursor: default; }\n:host .tabs .arrows .ui-button {\n        margin: 0; }\n:host .tabs .arrows .left, :host .tabs .arrows .right {\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host .tabs .arrows .left .ui-button, :host .tabs .arrows .right .ui-button {\n          pointer-events: auto;\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\n:host .tabs .arrows .left.show .ui-button, :host .tabs .arrows .right.show .ui-button {\n          -webkit-transform: scale(1);\n                  transform: scale(1); }\n:host .tabs .arrows .right {\n        margin-left: auto; }\n"

/***/ }),

/***/ "./src/app/smn-ui/tabs/tabs.component.ts":
/*!***********************************************!*\
  !*** ./src/app/smn-ui/tabs/tabs.component.ts ***!
  \***********************************************/
/*! exports provided: UiTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTabsComponent", function() { return UiTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/element-ref.provider */ "./src/app/smn-ui/utils/providers/element-ref.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiTabsComponent = /** @class */ (function () {
    function UiTabsComponent(element) {
        var _this = this;
        this.element = element;
        this.onScroll = function () { return _this.tabsScroll(0); };
    }
    UiTabsComponent.prototype.ngOnInit = function () {
    };
    UiTabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var tabs = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.element.nativeElement).querySelector('.tab');
        var indicator = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.element.nativeElement).querySelector('.indicator');
        var self = this;
        var timeout;
        function scrollToTab(tab, withoutAnimation) {
            tabs.forEach(function (tab2) {
                if (tab2 !== tab && tab2.classList.contains('selected')) {
                    indicator.css('left', tab2.offset().left + 'px');
                    indicator.css('width', tab2.css('width'));
                    tab2.classList.remove('selected');
                }
            });
            indicator.css('left', tab.offset().left + 'px');
            indicator.css('width', tab.css('width'));
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                tab.classList.add('selected');
                indicator.css('width', '');
                indicator.css('left', '');
            }, 280);
            var overflow = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](self.element.nativeElement).querySelector('.overflow');
            self.tabsScroll(tab.offset().left - overflow.nativeElement.scrollLeft, withoutAnimation);
        }
        tabs.forEach(function (tab) {
            _this.element.nativeElement.addEventListener('click', function (e) {
                if (e.target === tab.nativeElement) {
                    scrollToTab(tab);
                }
            });
        });
        var tabSelected = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.element.nativeElement).querySelector('.tab.first-selected');
        if (tabSelected.length) {
            scrollToTab(tabSelected, true);
            // tabSelected.nativeElement.click();
        }
        var windowRef = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](window);
        windowRef.trigger('scroll');
        windowRef.on('scroll resize', this.onScroll);
    };
    UiTabsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        setTimeout(function () {
            _this.ngAfterViewInit();
        });
    };
    UiTabsComponent.prototype.ngOnDestroy = function () {
        var windowRef = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](window);
        windowRef.off('scroll resize', this.onScroll);
    };
    UiTabsComponent.prototype.tabsScroll = function (value, withoutAnimation) {
        var _this = this;
        var overflow = new _utils_providers_element_ref_provider__WEBPACK_IMPORTED_MODULE_1__["UiElementRef"](this.element.nativeElement).querySelector('.overflow');
        var scrollLeft = overflow.nativeElement.scrollLeft;
        var maxScrollLeft = overflow.nativeElement.scrollWidth - overflow.nativeElement.clientWidth;
        if (typeof value !== 'undefined') {
            overflow.animate('borderSpacing', scrollLeft, scrollLeft + value, withoutAnimation ? 1 : 280, null, function (tick) {
                overflow.nativeElement.scrollLeft = tick;
                scrollLeft = overflow.nativeElement.scrollLeft;
                _this.showLeftArrow = (scrollLeft > 0);
                _this.showRightArrow = (scrollLeft < maxScrollLeft);
            });
        }
        else {
            this.showLeftArrow = (scrollLeft > 0);
            this.showRightArrow = (scrollLeft < maxScrollLeft);
        }
        if (!this.showRightArrow) {
            if (this.infiniteLoad) {
                this.infiniteLoad();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('infinite-load'),
        __metadata("design:type", Object)
    ], UiTabsComponent.prototype, "infiniteLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiTabsComponent.prototype, "watch", void 0);
    UiTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/smn-ui/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/smn-ui/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiTabsComponent);
    return UiTabsComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/time-picker/time-picker-caller.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/smn-ui/time-picker/time-picker-caller.directive.ts ***!
  \********************************************************************/
/*! exports provided: UiTimePickerCallerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTimePickerCallerDirective", function() { return UiTimePickerCallerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-picker.service */ "./src/app/smn-ui/time-picker/time-picker.service.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clock/clock.component */ "./src/app/smn-ui/clock/clock.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiTimePickerCallerDirective = /** @class */ (function () {
    function UiTimePickerCallerDirective(componentFactoryResolver, applicationRef, injector, timePickerService, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.timePickerService = timePickerService;
        this.elementRef = elementRef;
    }
    UiTimePickerCallerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.timePicker = this.timePickerService.get(this.timePickerCaller);
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(this.elementRef.nativeElement, this.pickerEvent || 'click', function (e) {
            _this.inputElement = document.querySelector("[time-picker-name=\"" + _this.timePickerCaller + "\"]");
            _this.timePickerService.closeAll();
            var position = _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].position(_this.inputElement);
            var coordinate = {
                x: position.left,
                y: _this.inputElement.offsetHeight + position.top
            };
            if (!_this.pickerOpen) {
                _this.renderTimePicker(_this.timePicker, coordinate);
                e.stopPropagation(); // Parando propagação do evento para os eventos do window
            }
        });
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__["UiWindowRef"].nativeWindow, 'click resize scroll', function (e) {
            if (_this.pickerOpen) {
                if ((!(_utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(e.target, '.wrap-time-picker') || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].closest(e.target, '.wrap-time-picker'))
                    && !(document.body.clientWidth <= 600 && e.type === 'scroll')) || _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].is(e.target, '.overlay')) {
                    _this.closePicker();
                }
            }
        });
    };
    UiTimePickerCallerDirective.prototype.getComponentAsElement = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    UiTimePickerCallerDirective.prototype.setInstances = function (component, componentRef) {
        var _this = this;
        var keysComponent = ['ngModel', 'confirmSelection', 'select'];
        keysComponent.map(function (key) { return componentRef.instance[key] = component[key]; });
        componentRef.instance.focused = true;
        component.chosen.subscribe(function (value) { return componentRef.instance.ngOnChanges(value); });
        componentRef.instance.cancel.subscribe(function () { return _this.closePicker(); });
        componentRef.instance.chosen.subscribe(function (objectValue) {
            _this.timePickerService.updateModel(_this.timePickerCaller, objectValue.value);
            if (_this.pickerOpen && objectValue.close) {
                _this.inputElement.focus();
                _this.closePicker();
            }
        });
    };
    UiTimePickerCallerDirective.prototype.renderViewClock = function (element, coordinate, themeClass) {
        var _this = this;
        this.wrapTimePicker = document.createElement('div');
        this.wrapTimePicker.classList.add('wrap-time-picker');
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        if (themeClass) {
            this.wrapTimePicker.classList.add(themeClass);
        }
        this.wrapTimePicker.style.transform = 'scale(0)';
        element.classList.add('portrait-only');
        this.wrapTimePicker.appendChild(overlay);
        this.wrapTimePicker.appendChild(element);
        document.body.appendChild(this.wrapTimePicker);
        setTimeout(function () {
            var pickerHorizontalCoveringArea = coordinate.x + element.clientWidth;
            var pickerVerticalCoveringArea = coordinate.y + element.clientHeight;
            var windowWidth = _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__["UiWindowRef"].nativeWindow.innerWidth + (document.body.scrollLeft || window.scrollX);
            var windowHeight = _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_3__["UiWindowRef"].nativeWindow.innerHeight + (document.body.scrollTop || window.scrollY);
            if (pickerHorizontalCoveringArea > windowWidth) {
                coordinate.x = windowWidth - (element.clientWidth + 8);
            }
            if (pickerVerticalCoveringArea > windowHeight) {
                coordinate.y = windowHeight - (element.clientHeight + 8);
            }
            _this.wrapTimePicker.style.transform = '';
            element.style.position = 'absolute';
            element.style.top = coordinate.y + 'px';
            element.style.left = coordinate.x + 'px';
            _this.wrapTimePicker.classList.add('open');
            if (document.body.clientWidth <= 600) {
                document.body.style.overflowY = 'hidden';
            }
        });
    };
    UiTimePickerCallerDirective.prototype.renderTimePicker = function (component, coordinate) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_clock_clock_component__WEBPACK_IMPORTED_MODULE_4__["UiClockComponent"]);
        this.componentRef = componentFactory.create(this.injector);
        this.componentElement = this.getComponentAsElement(this.componentRef);
        this.setInstances(component, this.componentRef);
        this.applicationRef.attachView(this.componentRef.hostView);
        this.renderViewClock(this.componentElement, coordinate, component.themeClass);
        this.pickerOpen = true;
    };
    UiTimePickerCallerDirective.prototype.closePicker = function () {
        var _this = this;
        this.wrapTimePicker.classList.remove('open');
        setTimeout(function () {
            _this.pickerOpen = false;
            _this.applicationRef.detachView(_this.componentRef.hostView);
            document.body.style.overflowY = '';
            try {
                document.body.removeChild(_this.wrapTimePicker);
            }
            catch (e) {
            }
        }, 280);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiTimePickerCallerDirective.prototype, "pickerEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uiTimePickerCaller'),
        __metadata("design:type", String)
    ], UiTimePickerCallerDirective.prototype, "timePickerCaller", void 0);
    UiTimePickerCallerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiTimePickerCaller]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _time_picker_service__WEBPACK_IMPORTED_MODULE_1__["UiTimePickerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiTimePickerCallerDirective);
    return UiTimePickerCallerDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/time-picker/time-picker.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/smn-ui/time-picker/time-picker.directive.ts ***!
  \*************************************************************/
/*! exports provided: UiTimePickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTimePickerDirective", function() { return UiTimePickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-picker.service */ "./src/app/smn-ui/time-picker/time-picker.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiTimePickerDirective = /** @class */ (function () {
    function UiTimePickerDirective(timePickerService, element) {
        this.timePickerService = timePickerService;
        this.element = element;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chosen = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UiTimePickerDirective.prototype.ngOnInit = function () {
        this.timePickerService.add(this.timePicker, this);
    };
    UiTimePickerDirective.prototype.ngAfterViewInit = function () {
        this.element.nativeElement.setAttribute('time-picker-name', this.timePicker);
    };
    UiTimePickerDirective.prototype.ngOnChanges = function (value) {
        this.chosen.next(value);
    };
    UiTimePickerDirective.prototype.ngOnDestroy = function () {
        this.timePickerService.remove(this.timePicker);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiTimePickerDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UiTimePickerDirective.prototype, "confirmSelection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('theme-class'),
        __metadata("design:type", String)
    ], UiTimePickerDirective.prototype, "themeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uiTimePicker'),
        __metadata("design:type", String)
    ], UiTimePickerDirective.prototype, "timePicker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiTimePickerDirective.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiTimePickerDirective.prototype, "ngModelChange", void 0);
    UiTimePickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiTimePicker]'
        }),
        __metadata("design:paramtypes", [_time_picker_service__WEBPACK_IMPORTED_MODULE_1__["UiTimePickerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiTimePickerDirective);
    return UiTimePickerDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/time-picker/time-picker.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/time-picker/time-picker.service.ts ***!
  \***********************************************************/
/*! exports provided: UiTimePickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTimePickerService", function() { return UiTimePickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiTimePickerService = /** @class */ (function () {
    function UiTimePickerService() {
        this.timePickers = {};
    }
    UiTimePickerService.prototype.add = function (name, component) {
        if (this.timePickers && this.timePickers[name]) {
            return;
        }
        this.timePickers[name] = component;
    };
    UiTimePickerService.prototype.get = function (name) {
        return this.timePickers[name];
    };
    UiTimePickerService.prototype.remove = function (name) {
        delete this.timePickers[name];
    };
    UiTimePickerService.prototype.closeAll = function () {
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].trigger(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow, 'click');
    };
    UiTimePickerService.prototype.getAll = function () {
        return this.timePickers;
    };
    UiTimePickerService.prototype.updateModel = function (name, value) {
        this.timePickers[name].ngModel = value;
        this.timePickers[name].ngModelChange.emit(value);
    };
    UiTimePickerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiTimePickerService);
    return UiTimePickerService;
}());



/***/ }),

/***/ "./src/app/smn-ui/toolbar/toolbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/smn-ui/toolbar/toolbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <ng-content></ng-content>\r\n</header>\r\n<div class=\"ui-toolbar-space\"></div>\r\n"

/***/ }),

/***/ "./src/app/smn-ui/toolbar/toolbar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/smn-ui/toolbar/toolbar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.ui-toolbar-space {\n  height: 56px;\n  transition: height 0.28s cubic-bezier(0, 0, 0.2, 1); }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-toolbar-space {\n      height: 64px;\n      min-height: 64px; } }\n@media (max-width: 375px) {\n    .ui-toolbar-space {\n      height: 56px;\n      min-height: 56px; } }\n@media only screen and (min-width: 376px) and (max-width: 763px) and (orientation: landscape) {\n    .ui-toolbar-space {\n      height: 48px;\n      min-height: 48px; } }\nui-toolbar {\n  display: block; }\nui-toolbar .ui-toolbar-space {\n    display: none; }\nui-toolbar header {\n    left: 0;\n    top: 0;\n    right: 0;\n    height: 56px;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,.14), 0 4px 5px 0 rgba(0,0,0,.12), 0 1px 10px 0 rgba(0,0,0,.20);\n    transition: box-shadow 0.335s cubic-bezier(0, 0, 0.2, 1), height 0.28s cubic-bezier(0, 0, 0.2, 1), padding-bottom 0.28s cubic-bezier(0, 0, 0.2, 1), background 0.28s cubic-bezier(0, 0, 0.2, 1);\n    display: flex;\n    align-items: center;\n    padding: 4px; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n      ui-toolbar header {\n        height: 64px;\n        min-height: 64px; } }\n@media (max-width: 375px) {\n      ui-toolbar header {\n        height: 56px;\n        min-height: 56px; } }\n@media only screen and (min-width: 376px) and (max-width: 763px) and (orientation: landscape) {\n      ui-toolbar header {\n        height: 48px;\n        min-height: 48px; } }\nui-toolbar header .ui-button {\n      margin: 12px; }\n@media only screen and (min-width: 376px) and (max-width: 763px) and (orientation: landscape) {\n        ui-toolbar header .ui-button {\n          margin: 6px; } }\nui-toolbar header .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat {\n        color: inherit; }\nui-toolbar header .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat i {\n          color: inherit; }\nui-toolbar header .title {\n      padding: 0 16px;\n      font-weight: 500;\n      cursor: default;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      /* number of lines to show */\n      line-height: 17px;\n      /* fallback */\n      max-height: 34px;\n      /* fallback */ }\nui-toolbar header .logo {\n      max-height: 30px;\n      margin: 0 20px 0 10px;\n      width: auto;\n      height: 100%;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n        ui-toolbar header .logo {\n          display: none; } }\nui-toolbar header .logo img {\n        height: 100%; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n        ui-toolbar header .logo:first-child {\n          margin-left: 15px; } }\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      ui-toolbar header .logo ~ .title {\n        border-left: none; } }\nui-toolbar.transparent:not(.no-shadow) .ui-toolbar-space {\n    position: relative; }\nui-toolbar.transparent:not(.no-shadow) .ui-toolbar-space:before {\n      z-index: 1;\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      height: 0;\n      transition: box-shadow 280ms cubic-bezier(0, 0, 0.2, 1);\n      box-shadow: 0 -50px 147px 69px rgba(0, 0, 0, 0.4); }\nui-toolbar.transparent:not(.scrolled) header {\n    background-color: transparent; }\nui-toolbar.fixed header {\n    position: fixed;\n    z-index: 2; }\nui-toolbar.fixed .ui-toolbar-space {\n    display: block; }\nui-toolbar.flat:not(.scrolled) header {\n    box-shadow: none; }\nui-toolbar .align-right {\n    margin-left: auto;\n    display: flex; }\nui-toolbar .align-right > div {\n      display: flex; }\nui-toolbar.size-2x:not(.scrolled) header {\n    box-shadow: none;\n    height: 154px;\n    padding-bottom: 99px; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n      ui-toolbar.size-2x:not(.scrolled) header {\n        height: 162px;\n        padding-bottom: 102px; } }\nui-toolbar.size-2x .ui-toolbar-space {\n    height: 98px; }\n@media only screen and (min-width: 376px) and (max-width: 763px) and (orientation: landscape) {\n      ui-toolbar.size-2x .ui-toolbar-space {\n        height: 66px; } }\n@media (max-width: 480px) {\n    ui-toolbar.size-2x.elevate-on-s480 header {\n      height: 56px !important;\n      padding-bottom: 4px !important;\n      -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n              animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; } }\n@media only screen and (max-width: 480px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s480 header {\n      height: 64px !important; } }\n@media (max-width: 480px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s480 header {\n      height: 56px !important; } }\n@media (max-width: 480px) {\n    @-webkit-keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    @keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    ui-toolbar.size-2x.elevate-on-s480 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (max-width: 480px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s480 .ui-toolbar-space {\n      height: 64px !important; } }\n@media (max-width: 480px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s480 .ui-toolbar-space {\n      height: 56px !important; } }\n@media (max-width: 600px) {\n    ui-toolbar.size-2x.elevate-on-s600 header {\n      height: 56px !important;\n      padding-bottom: 4px !important;\n      -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n              animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; } }\n@media only screen and (max-width: 600px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s600 header {\n      height: 64px !important; } }\n@media (max-width: 600px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s600 header {\n      height: 56px !important; } }\n@media (max-width: 600px) {\n    @-webkit-keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    @keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    ui-toolbar.size-2x.elevate-on-s600 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (max-width: 600px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s600 .ui-toolbar-space {\n      height: 64px !important; } }\n@media (max-width: 600px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s600 .ui-toolbar-space {\n      height: 56px !important; } }\n@media (max-width: 840px) {\n    ui-toolbar.size-2x.elevate-on-s840 header {\n      height: 56px !important;\n      padding-bottom: 4px !important;\n      -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n              animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; } }\n@media only screen and (max-width: 840px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s840 header {\n      height: 64px !important; } }\n@media (max-width: 840px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s840 header {\n      height: 56px !important; } }\n@media (max-width: 840px) {\n    @-webkit-keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    @keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    ui-toolbar.size-2x.elevate-on-s840 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (max-width: 840px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s840 .ui-toolbar-space {\n      height: 64px !important; } }\n@media (max-width: 840px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s840 .ui-toolbar-space {\n      height: 56px !important; } }\n@media (max-width: 960px) {\n    ui-toolbar.size-2x.elevate-on-s960 header {\n      height: 56px !important;\n      padding-bottom: 4px !important;\n      -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n              animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; } }\n@media only screen and (max-width: 960px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s960 header {\n      height: 64px !important; } }\n@media (max-width: 960px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s960 header {\n      height: 56px !important; } }\n@media (max-width: 960px) {\n    @-webkit-keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    @keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    ui-toolbar.size-2x.elevate-on-s960 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (max-width: 960px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s960 .ui-toolbar-space {\n      height: 64px !important; } }\n@media (max-width: 960px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s960 .ui-toolbar-space {\n      height: 56px !important; } }\n@media (max-width: 1280px) {\n    ui-toolbar.size-2x.elevate-on-s1280 header {\n      height: 56px !important;\n      padding-bottom: 4px !important;\n      -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n              animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; } }\n@media only screen and (max-width: 1280px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s1280 header {\n      height: 64px !important; } }\n@media (max-width: 1280px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s1280 header {\n      height: 56px !important; } }\n@media (max-width: 1280px) {\n    @-webkit-keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    @keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    ui-toolbar.size-2x.elevate-on-s1280 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (max-width: 1280px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s1280 .ui-toolbar-space {\n      height: 64px !important; } }\n@media (max-width: 1280px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s1280 .ui-toolbar-space {\n      height: 56px !important; } }\n@media (max-width: 1440px) {\n    ui-toolbar.size-2x.elevate-on-s1440 header {\n      height: 56px !important;\n      padding-bottom: 4px !important;\n      -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n              animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; } }\n@media only screen and (max-width: 1440px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s1440 header {\n      height: 64px !important; } }\n@media (max-width: 1440px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s1440 header {\n      height: 56px !important; } }\n@media (max-width: 1440px) {\n    @-webkit-keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    @keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    ui-toolbar.size-2x.elevate-on-s1440 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (max-width: 1440px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s1440 .ui-toolbar-space {\n      height: 64px !important; } }\n@media (max-width: 1440px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s1440 .ui-toolbar-space {\n      height: 56px !important; } }\n@media (max-width: 1600px) {\n    ui-toolbar.size-2x.elevate-on-s1600 header {\n      height: 56px !important;\n      padding-bottom: 4px !important;\n      -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n              animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; } }\n@media only screen and (max-width: 1600px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s1600 header {\n      height: 64px !important; } }\n@media (max-width: 1600px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s1600 header {\n      height: 56px !important; } }\n@media (max-width: 1600px) {\n    @-webkit-keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    @keyframes fixZindex {\n      0% {\n        z-index: 2; }\n      99% {\n        z-index: 2; }\n      100% {\n        z-index: 3; } }\n    ui-toolbar.size-2x.elevate-on-s1600 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (max-width: 1600px) and (min-width: 376px) and (min-width: 764px) {\n    ui-toolbar.size-2x.elevate-on-s1600 .ui-toolbar-space {\n      height: 64px !important; } }\n@media (max-width: 1600px) and (max-width: 375px) {\n    ui-toolbar.size-2x.elevate-on-s1600 .ui-toolbar-space {\n      height: 56px !important; } }\n@media (max-width: 375px) {\n    ui-toolbar.size-2x header:not(.nothing) {\n      height: 56px !important;\n      padding-bottom: 4px !important;\n      z-index: 3 !important; }\n    ui-toolbar.size-2x .ui-toolbar-space:not(.nothing) {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 800px) {\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s480 header {\n    height: 48px !important;\n    padding-bottom: 4px !important;\n    -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n            animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 800px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s480 header {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 800px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s480 header {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 800px) {\n  @-webkit-keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  @keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s480 .ui-toolbar-space {\n    height: 48px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 800px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s480 .ui-toolbar-space {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 800px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s480 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 920px) {\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s600 header {\n    height: 48px !important;\n    padding-bottom: 4px !important;\n    -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n            animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 920px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s600 header {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 920px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s600 header {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 920px) {\n  @-webkit-keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  @keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s600 .ui-toolbar-space {\n    height: 48px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 920px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s600 .ui-toolbar-space {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 920px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s600 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1160px) {\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s840 header {\n    height: 48px !important;\n    padding-bottom: 4px !important;\n    -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n            animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1160px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s840 header {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1160px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s840 header {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1160px) {\n  @-webkit-keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  @keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s840 .ui-toolbar-space {\n    height: 48px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1160px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s840 .ui-toolbar-space {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1160px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s840 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1280px) {\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s960 header {\n    height: 48px !important;\n    padding-bottom: 4px !important;\n    -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n            animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1280px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s960 header {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1280px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s960 header {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1280px) {\n  @-webkit-keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  @keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s960 .ui-toolbar-space {\n    height: 48px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1280px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s960 .ui-toolbar-space {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1280px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s960 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1600px) {\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1280 header {\n    height: 48px !important;\n    padding-bottom: 4px !important;\n    -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n            animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1600px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1280 header {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1600px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1280 header {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1600px) {\n  @-webkit-keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  @keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1280 .ui-toolbar-space {\n    height: 48px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1600px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1280 .ui-toolbar-space {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1600px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1280 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1760px) {\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1440 header {\n    height: 48px !important;\n    padding-bottom: 4px !important;\n    -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n            animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1760px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1440 header {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1760px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1440 header {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1760px) {\n  @-webkit-keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  @keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1440 .ui-toolbar-space {\n    height: 48px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1760px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1440 .ui-toolbar-space {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1760px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1440 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1920px) {\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1600 header {\n    height: 48px !important;\n    padding-bottom: 4px !important;\n    -webkit-animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n            animation: fixZindex 0.28s cubic-bezier(0, 0, 0.2, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1920px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1600 header {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1920px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1600 header {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1920px) {\n  @-webkit-keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  @keyframes fixZindex {\n    0% {\n      z-index: 2; }\n    99% {\n      z-index: 2; }\n    100% {\n      z-index: 3; } }\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1600 .ui-toolbar-space {\n    height: 48px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1920px) and (min-width: 376px) and (min-width: 764px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1600 .ui-toolbar-space {\n      height: 64px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 1920px) and (max-width: 375px) {\n    body.ui-nav-drawer-persistent ui-toolbar.size-2x.elevate-on-s1600 .ui-toolbar-space {\n      height: 56px !important; } }\n@media only screen and (min-width: 376px) and (min-width: 764px) and (max-width: 375px) {\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x header:not(.nothing) {\n    height: 56px !important;\n    padding-bottom: 4px !important;\n    z-index: 3 !important; }\n  body.ui-nav-drawer-persistent ui-toolbar.size-2x .ui-toolbar-space:not(.nothing) {\n    height: 56px !important; } }\n"

/***/ }),

/***/ "./src/app/smn-ui/toolbar/toolbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/toolbar/toolbar.component.ts ***!
  \*****************************************************/
/*! exports provided: UiToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiToolbarComponent", function() { return UiToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiToolbarComponent = /** @class */ (function () {
    function UiToolbarComponent(element) {
        var _this = this;
        this.element = element;
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].on(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow, 'scroll resize', function (e) {
            if (_this.element.nativeElement.classList.contains('elevate-on-scroll')) {
                var header = _this.element.nativeElement.querySelectorAll('header')[0];
                var scroll_1 = _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow.scrollY * 3.6;
                if (_this.element.nativeElement.classList.contains('size-2x')) {
                    if (e.type === 'scroll' && scroll_1 < 97) {
                        _this.element.nativeElement.classList.add('notransition');
                        header.style.paddingBottom = (102 - scroll_1) + 'px';
                        header.style.height = (162 - (scroll_1)) + 'px';
                        setTimeout(function () {
                            _this.element.nativeElement.classList.remove('notransition');
                        }, 500);
                    }
                    else {
                        header.style.paddingBottom = '';
                        header.style.height = '';
                    }
                    if (scroll_1 > 97) {
                        header.style.zIndex = 3;
                        _this.element.nativeElement.classList.add('scrolled');
                    }
                    else {
                        header.style.zIndex = 2;
                        _this.element.nativeElement.classList.remove('scrolled');
                    }
                }
                else {
                    if (_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow.scrollY > 1) {
                        _this.element.nativeElement.classList.add('scrolled');
                    }
                    else {
                        _this.element.nativeElement.classList.remove('scrolled');
                    }
                }
            }
        });
        // let form: any = document.querySelectorAll('form');
        // if (form.length) {
        //     form = <HTMLElement>form[0];
        //     const input = form.querySelectorAll('input')[0];
        //     input.addEventListener('focus', () => {
        //         form.classList.add('open');
        //     });
        //     input.addEventListener('blur', () => {
        //         form.classList.remove('open');
        //     });
        // }
    }
    UiToolbarComponent.prototype.ngAfterViewInit = function () {
    };
    UiToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/smn-ui/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/smn-ui/toolbar/toolbar.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiToolbarComponent);
    return UiToolbarComponent;
}());



/***/ }),

/***/ "./src/app/smn-ui/toolbar/toolbar.service.ts":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/toolbar/toolbar.service.ts ***!
  \***************************************************/
/*! exports provided: UiToolbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiToolbarService", function() { return UiToolbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/providers/window.provider */ "./src/app/smn-ui/utils/providers/window.provider.ts");
/* harmony import */ var _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var mainToolbar;
var defaultBreakpoint;
var sizes = [480, 600, 840, 960, 1280, 1440, 1600];
var UiToolbarService = /** @class */ (function () {
    function UiToolbarService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiToolbarService.prototype.get = function () {
        return this.sharedValue;
    };
    UiToolbarService.prototype.set = function (sharedValue) {
        this.sharedValue = sharedValue;
        this.change.emit(sharedValue);
    };
    UiToolbarService.prototype.registerMainToolbar = function (element) {
        mainToolbar = element;
        defaultBreakpoint = [];
        sizes.forEach(function (size) {
            if (mainToolbar.classList.contains("elevate-on-s" + size)) {
                defaultBreakpoint.push(size);
            }
        });
    };
    UiToolbarService.prototype.getMainToolbar = function () {
        if (!mainToolbar) {
            console.error('Você não registrou um toolbar principal.');
        }
        else {
            return mainToolbar;
        }
    };
    UiToolbarService.prototype.activateExtendedToolbar = function (breakpoint) {
        var _this = this;
        if (breakpoint) {
            if (!sizes.includes(breakpoint)) {
                console.error("O tamanho do \"breakpoint\" tem que ser um dos tamanhos suportados: " + sizes.join(', '));
            }
            else {
                sizes.forEach(function (size) { return _this.getMainToolbar().classList.remove("elevate-on-s" + size); });
                this.getMainToolbar().classList.add("elevate-on-s" + breakpoint);
            }
        }
        this.getMainToolbar().classList.add('size-2x');
        var header = this.getMainToolbar().querySelectorAll('header')[0];
        header.style.transition = 'all 280ms';
        setTimeout(function () {
            header.style.transition = '';
            _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].trigger(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow, 'scroll');
        }, 280);
    };
    UiToolbarService.prototype.deactivateExtendedToolbar = function () {
        var _this = this;
        sizes.forEach(function (size) { return _this.getMainToolbar().classList.remove("elevate-on-s" + size); });
        defaultBreakpoint.forEach(function (size) { return _this.getMainToolbar().classList.add("elevate-on-s" + size); });
        this.getMainToolbar().classList.remove('size-2x');
        this.getMainToolbar().classList.remove('scrolled');
        var header = this.getMainToolbar().querySelectorAll('header')[0];
        header.style.transition = 'all 280ms';
        header.style.height = '';
        header.style.paddingBottom = '';
        setTimeout(function () {
            header.style.transition = '';
        }, 280);
        _utils_providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].trigger(_utils_providers_window_provider__WEBPACK_IMPORTED_MODULE_1__["UiWindowRef"].nativeWindow, 'scroll');
    };
    UiToolbarService.prototype.activateTransparentToolbar = function (auxiliarClass) {
        this.getMainToolbar().classList.add('transparent');
        if (auxiliarClass) {
            this.getMainToolbar().classList.add(auxiliarClass);
        }
    };
    UiToolbarService.prototype.deactivateTransparentToolbar = function (auxiliarClass) {
        this.getMainToolbar().classList.remove('transparent');
        if (auxiliarClass) {
            this.getMainToolbar().classList.remove(auxiliarClass);
        }
    };
    UiToolbarService.prototype.activateElevatingToolbar = function (auxiliarClass) {
        this.getMainToolbar().classList.add('elevate-on-scroll');
        if (auxiliarClass) {
            this.getMainToolbar().classList.add(auxiliarClass);
        }
    };
    UiToolbarService.prototype.deactivateElevatingToolbar = function (auxiliarClass) {
        this.getMainToolbar().classList.remove('elevate-on-scroll');
        if (auxiliarClass) {
            this.getMainToolbar().classList.remove(auxiliarClass);
        }
    };
    UiToolbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiToolbarService);
    return UiToolbarService;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/functions/debounce.ts":
/*!****************************************************!*\
  !*** ./src/app/smn-ui/utils/functions/debounce.ts ***!
  \****************************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}


/***/ }),

/***/ "./src/app/smn-ui/utils/functions/unaccent.ts":
/*!****************************************************!*\
  !*** ./src/app/smn-ui/utils/functions/unaccent.ts ***!
  \****************************************************/
/*! exports provided: unaccent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unaccent", function() { return unaccent; });
/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var defaultDiacriticsRemovalMap = [
    {
        'base': 'A',
        'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
    },
    { 'base': 'AA', 'letters': '\uA732' },
    { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' },
    { 'base': 'AO', 'letters': '\uA734' },
    { 'base': 'AU', 'letters': '\uA736' },
    { 'base': 'AV', 'letters': '\uA738\uA73A' },
    { 'base': 'AY', 'letters': '\uA73C' },
    { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' },
    { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' },
    {
        'base': 'D',
        'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0'
    },
    { 'base': 'DZ', 'letters': '\u01F1\u01C4' },
    { 'base': 'Dz', 'letters': '\u01F2\u01C5' },
    {
        'base': 'E',
        'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
    },
    { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' },
    {
        'base': 'G',
        'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
    },
    {
        'base': 'H',
        'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
    },
    {
        'base': 'I',
        'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
    },
    { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' },
    {
        'base': 'K',
        'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
    },
    {
        'base': 'L',
        'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
    },
    { 'base': 'LJ', 'letters': '\u01C7' },
    { 'base': 'Lj', 'letters': '\u01C8' },
    { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' },
    {
        'base': 'N',
        'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
    },
    { 'base': 'NJ', 'letters': '\u01CA' },
    { 'base': 'Nj', 'letters': '\u01CB' },
    {
        'base': 'O',
        'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
    },
    { 'base': 'OI', 'letters': '\u01A2' },
    { 'base': 'OO', 'letters': '\uA74E' },
    { 'base': 'OU', 'letters': '\u0222' },
    { 'base': 'OE', 'letters': '\u008C\u0152' },
    { 'base': 'oe', 'letters': '\u009C\u0153' },
    { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' },
    { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' },
    {
        'base': 'R',
        'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
    },
    {
        'base': 'S',
        'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
    },
    {
        'base': 'T',
        'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
    },
    { 'base': 'TZ', 'letters': '\uA728' },
    {
        'base': 'U',
        'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
    },
    { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' },
    { 'base': 'VY', 'letters': '\uA760' },
    { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' },
    { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' },
    {
        'base': 'Y',
        'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
    },
    {
        'base': 'Z',
        'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
    },
    {
        'base': 'a',
        'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
    },
    { 'base': 'aa', 'letters': '\uA733' },
    { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' },
    { 'base': 'ao', 'letters': '\uA735' },
    { 'base': 'au', 'letters': '\uA737' },
    { 'base': 'av', 'letters': '\uA739\uA73B' },
    { 'base': 'ay', 'letters': '\uA73D' },
    { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' },
    { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' },
    {
        'base': 'd',
        'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
    },
    { 'base': 'dz', 'letters': '\u01F3\u01C6' },
    {
        'base': 'e',
        'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
    },
    { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' },
    {
        'base': 'g',
        'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
    },
    {
        'base': 'h',
        'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
    },
    { 'base': 'hv', 'letters': '\u0195' },
    {
        'base': 'i',
        'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
    },
    { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' },
    {
        'base': 'k',
        'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
    },
    {
        'base': 'l',
        'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
    },
    { 'base': 'lj', 'letters': '\u01C9' },
    { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' },
    {
        'base': 'n',
        'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
    },
    { 'base': 'nj', 'letters': '\u01CC' },
    {
        'base': 'o',
        'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
    },
    { 'base': 'oi', 'letters': '\u01A3' },
    { 'base': 'ou', 'letters': '\u0223' },
    { 'base': 'oo', 'letters': '\uA74F' },
    { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' },
    { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' },
    {
        'base': 'r',
        'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
    },
    {
        'base': 's',
        'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
    },
    {
        'base': 't',
        'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
    },
    { 'base': 'tz', 'letters': '\uA729' },
    {
        'base': 'u',
        'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
    },
    { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' },
    { 'base': 'vy', 'letters': '\uA761' },
    { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' },
    { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' },
    {
        'base': 'y',
        'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
    },
    {
        'base': 'z',
        'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
    }
];
var diacriticsMap = {};
for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
    var letters = defaultDiacriticsRemovalMap[i].letters;
    for (var j = 0; j < letters.length; j++) {
        diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
    }
}
// "what?" version ... http://jsperf.com/diacritics/12
function unaccent(str) {
    return str.replace(/[^\u0000-\u007E]/g, function (a) {
        return diacriticsMap[a] || a;
    });
}


/***/ }),

/***/ "./src/app/smn-ui/utils/infinite-load/infinite-load.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/smn-ui/utils/infinite-load/infinite-load.directive.ts ***!
  \***********************************************************************/
/*! exports provided: UiInfiniteLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInfiniteLoadDirective", function() { return UiInfiniteLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _infinite_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infinite-load.service */ "./src/app/smn-ui/utils/infinite-load/infinite-load.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiInfiniteLoadDirective = /** @class */ (function () {
    function UiInfiniteLoadDirective(element, infiniteLoad) {
        this.element = element;
        this.infiniteLoad = infiniteLoad;
        this.uiInfiniteLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.orientation = 'vertical';
    }
    UiInfiniteLoadDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.infiniteLoad.register(this.element.nativeElement, function () {
            _this.uiInfiniteLoad.emit();
        }, this.orientation);
    };
    UiInfiniteLoadDirective.prototype.ngDoCheck = function () {
        if (this.infiniteLoad.listener) {
            this.infiniteLoad.listener();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiInfiniteLoadDirective.prototype, "uiInfiniteLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiInfiniteLoadDirective.prototype, "orientation", void 0);
    UiInfiniteLoadDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiInfiniteLoad]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _infinite_load_service__WEBPACK_IMPORTED_MODULE_1__["UiInfiniteLoadService"]])
    ], UiInfiniteLoadDirective);
    return UiInfiniteLoadDirective;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/infinite-load/infinite-load.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/smn-ui/utils/infinite-load/infinite-load.service.ts ***!
  \*********************************************************************/
/*! exports provided: UiInfiniteLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInfiniteLoadService", function() { return UiInfiniteLoadService; });
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

var UiInfiniteLoadService = /** @class */ (function () {
    function UiInfiniteLoadService() {
    }
    UiInfiniteLoadService.prototype.register = function (element, func, orientation) {
        var _this = this;
        if (orientation === void 0) { orientation = 'vertical'; }
        this.element = element;
        this.func = func;
        this.listener = function () {
            if (orientation === 'vertical') {
                var heightOffset = (_this.element.scrollHeight || document.documentElement.scrollHeight) - (_this.element.clientHeight || _this.element.innerHeight);
                var scrollTop = _this.element.scrollTop || _this.element.scrollY;
                var safeZone = heightOffset * 0.1;
                if (scrollTop >= heightOffset - safeZone) {
                    func();
                }
            }
            else {
                var widthOffset = (_this.element.scrollWidth || document.documentElement.scrollWidth) - (_this.element.clientWidth || _this.element.innerWidth);
                var scrollLeft = _this.element.scrollLeft || _this.element.scrollX;
                var safeZone = widthOffset * 0.1;
                if (scrollLeft >= widthOffset - safeZone) {
                    func();
                }
            }
        };
        this.element.addEventListener('scroll', this.listener);
        this.readyToCheck = true;
    };
    UiInfiniteLoadService.prototype.destroy = function () {
        this.element.removeEventListener('scroll', this.listener);
        this.readyToCheck = false;
    };
    UiInfiniteLoadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiInfiniteLoadService);
    return UiInfiniteLoadService;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/cep/cep.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/cep/cep.pipe.ts ***!
  \****************************************************/
/*! exports provided: UiCepPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCepPipe", function() { return UiCepPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiCepPipe = /** @class */ (function () {
    function UiCepPipe() {
    }
    UiCepPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.toString().replace(/[^0-9]+/g, '');
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5);
        }
        if (value.length > 9) {
            value = value.substring(0, 9);
        }
        return value;
    };
    UiCepPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiCep'
        })
    ], UiCepPipe);
    return UiCepPipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/cep/mask-cep.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/cep/mask-cep.directive.ts ***!
  \**************************************************************/
/*! exports provided: UiMaskCepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskCepDirective", function() { return UiMaskCepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cep_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cep.pipe */ "./src/app/smn-ui/utils/masks/cep/cep.pipe.ts");
/* harmony import */ var _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiMaskCepDirective = /** @class */ (function () {
    function UiMaskCepDirective(elementRef, cepPipe) {
        this.elementRef = elementRef;
        this.cepPipe = cepPipe;
        this.symbolsPositions = [5, 9];
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskCepDirective_1 = UiMaskCepDirective;
    UiMaskCepDirective.prototype.ngOnChanges = function (changes) {
        if (!changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
    };
    UiMaskCepDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskCepDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = this.cepPipe.transform(this.ngModel);
        }
        this.input = false;
    };
    UiMaskCepDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = this.format(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.cepPipe.transform(this.elementRef.nativeElement.value);
    };
    UiMaskCepDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskCepDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskCepDirective.prototype.format = function (value) {
        value = value.toString().replace(/[^0-9]+/g, '');
        return value.substring(0, 8);
    };
    UiMaskCepDirective.prototype.validate = function (control) {
        this.control = control;
        if (control.value && this.format(control.value).length < 8) {
            return { parse: true };
        }
        return null;
    };
    UiMaskCepDirective.prototype.setDisabledState = function (isDisabled) {
        var method = isDisabled ? 'setAttribute' : 'removeAttribute';
        this.elementRef.nativeElement[method]('disabled', 'disabled');
    };
    UiMaskCepDirective.prototype.onKeydown = function () {
        this.beforeSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
    };
    UiMaskCepDirective.prototype.onInput = function ($event) {
        var afterSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
        _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.set(this.elementRef.nativeElement, this.beforeSelIndex, afterSelIndex, this.symbolsPositions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskCepDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskCepDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiMaskCepDirective.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiMaskCepDirective.prototype, "onInput", null);
    UiMaskCepDirective = UiMaskCepDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskCep][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskCepDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskCepDirective_1; }),
                    multi: true
                }, _cep_pipe__WEBPACK_IMPORTED_MODULE_2__["UiCepPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _cep_pipe__WEBPACK_IMPORTED_MODULE_2__["UiCepPipe"]])
    ], UiMaskCepDirective);
    return UiMaskCepDirective;
    var UiMaskCepDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/cnpj/cnpj.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/cnpj/cnpj.pipe.ts ***!
  \******************************************************/
/*! exports provided: UiCnpjPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCnpjPipe", function() { return UiCnpjPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiCnpjPipe = /** @class */ (function () {
    function UiCnpjPipe() {
    }
    UiCnpjPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.toString().replace(/[^0-9]+/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '.' + value.substring(2);
        }
        if (value.length > 6) {
            value = value.substring(0, 6) + '.' + value.substring(6);
        }
        if (value.length > 10) {
            value = value.substring(0, 10) + '/' + value.substring(10);
        }
        if (value.length > 15) {
            value = value.substring(0, 15) + '-' + value.substring(15);
        }
        if (value.length > 18) {
            value = value.substring(0, 18);
        }
        return value;
    };
    UiCnpjPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiCnpj'
        })
    ], UiCnpjPipe);
    return UiCnpjPipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/cnpj/mask-cnpj.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/cnpj/mask-cnpj.directive.ts ***!
  \****************************************************************/
/*! exports provided: UiMaskCnpjDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskCnpjDirective", function() { return UiMaskCnpjDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cnpj_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cnpj.pipe */ "./src/app/smn-ui/utils/masks/cnpj/cnpj.pipe.ts");
/* harmony import */ var _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiMaskCnpjDirective = /** @class */ (function () {
    function UiMaskCnpjDirective(elementRef, cnpjPipe) {
        this.elementRef = elementRef;
        this.cnpjPipe = cnpjPipe;
        this.symbolsPositions = [2, 6, 10, 15, 18];
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskCnpjDirective_1 = UiMaskCnpjDirective;
    UiMaskCnpjDirective.prototype.ngOnChanges = function (changes) {
        if (!changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
    };
    UiMaskCnpjDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskCnpjDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = this.cnpjPipe.transform(this.ngModel);
        }
        this.input = false;
    };
    UiMaskCnpjDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = this.format(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.cnpjPipe.transform(this.elementRef.nativeElement.value);
    };
    UiMaskCnpjDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskCnpjDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskCnpjDirective.prototype.format = function (value) {
        value = value.toString().replace(/[^0-9]+/g, '');
        return value.substring(0, 14);
    };
    UiMaskCnpjDirective.prototype.validate = function (control) {
        this.control = control;
        if (control.value && this.format(control.value).length < 14) {
            return { parse: true };
        }
        return null;
    };
    UiMaskCnpjDirective.prototype.setDisabledState = function (isDisabled) {
        var method = isDisabled ? 'setAttribute' : 'removeAttribute';
        this.elementRef.nativeElement[method]('disabled', 'disabled');
    };
    UiMaskCnpjDirective.prototype.onKeydown = function () {
        this.beforeSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
    };
    UiMaskCnpjDirective.prototype.onInput = function ($event) {
        var afterSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
        _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.set(this.elementRef.nativeElement, this.beforeSelIndex, afterSelIndex, this.symbolsPositions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiMaskCnpjDirective.prototype, "minDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiMaskCnpjDirective.prototype, "maxDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskCnpjDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskCnpjDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiMaskCnpjDirective.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiMaskCnpjDirective.prototype, "onInput", null);
    UiMaskCnpjDirective = UiMaskCnpjDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskCnpj][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskCnpjDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskCnpjDirective_1; }),
                    multi: true
                }, _cnpj_pipe__WEBPACK_IMPORTED_MODULE_2__["UiCnpjPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _cnpj_pipe__WEBPACK_IMPORTED_MODULE_2__["UiCnpjPipe"]])
    ], UiMaskCnpjDirective);
    return UiMaskCnpjDirective;
    var UiMaskCnpjDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/cpf/cpf.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/cpf/cpf.pipe.ts ***!
  \****************************************************/
/*! exports provided: UiCpfPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCpfPipe", function() { return UiCpfPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiCpfPipe = /** @class */ (function () {
    function UiCpfPipe() {
    }
    UiCpfPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.toString().replace(/[^0-9]+/g, '');
        if (value.length > 3) {
            value = value.substring(0, 3) + '.' + value.substring(3);
        }
        if (value.length > 7) {
            value = value.substring(0, 7) + '.' + value.substring(7);
        }
        if (value.length > 11) {
            value = value.substring(0, 11) + '-' + value.substring(11);
        }
        if (value.length > 14) {
            value = value.substring(0, 14);
        }
        return value;
    };
    UiCpfPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiCpf'
        })
    ], UiCpfPipe);
    return UiCpfPipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/cpf/mask-cpf.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/cpf/mask-cpf.directive.ts ***!
  \**************************************************************/
/*! exports provided: UiMaskCpfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskCpfDirective", function() { return UiMaskCpfDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cpf_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpf.pipe */ "./src/app/smn-ui/utils/masks/cpf/cpf.pipe.ts");
/* harmony import */ var _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiMaskCpfDirective = /** @class */ (function () {
    function UiMaskCpfDirective(elementRef, cpfPipe) {
        this.elementRef = elementRef;
        this.cpfPipe = cpfPipe;
        this.symbolsPositions = [3, 7, 11, 14];
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskCpfDirective_1 = UiMaskCpfDirective;
    UiMaskCpfDirective.prototype.ngOnChanges = function (changes) {
        if (!changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
    };
    UiMaskCpfDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskCpfDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = this.cpfPipe.transform(this.ngModel);
        }
        this.input = false;
    };
    UiMaskCpfDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = this.format(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.cpfPipe.transform(this.elementRef.nativeElement.value);
    };
    UiMaskCpfDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskCpfDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskCpfDirective.prototype.format = function (value) {
        value = value.toString().replace(/[^0-9]+/g, '');
        return value.substring(0, 11);
    };
    UiMaskCpfDirective.prototype.validate = function (control) {
        this.control = control;
        if (control.value && this.format(control.value).length < 11) {
            return { parse: true };
        }
        return null;
    };
    UiMaskCpfDirective.prototype.setDisabledState = function (isDisabled) {
        var method = isDisabled ? 'setAttribute' : 'removeAttribute';
        this.elementRef.nativeElement[method]('disabled', 'disabled');
    };
    UiMaskCpfDirective.prototype.onKeydown = function () {
        this.beforeSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
    };
    UiMaskCpfDirective.prototype.onInput = function ($event) {
        var afterSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
        _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.set(this.elementRef.nativeElement, this.beforeSelIndex, afterSelIndex, this.symbolsPositions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskCpfDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskCpfDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiMaskCpfDirective.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiMaskCpfDirective.prototype, "onInput", null);
    UiMaskCpfDirective = UiMaskCpfDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskCpf][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskCpfDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskCpfDirective_1; }),
                    multi: true
                }, _cpf_pipe__WEBPACK_IMPORTED_MODULE_2__["UiCpfPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _cpf_pipe__WEBPACK_IMPORTED_MODULE_2__["UiCpfPipe"]])
    ], UiMaskCpfDirective);
    return UiMaskCpfDirective;
    var UiMaskCpfDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/currency/currency.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/currency/currency.pipe.ts ***!
  \**************************************************************/
/*! exports provided: UiCurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCurrencyPipe", function() { return UiCurrencyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiCurrencyPipe = /** @class */ (function () {
    function UiCurrencyPipe() {
    }
    UiCurrencyPipe.prototype.transform = function (value, args) {
        if (!value && typeof value !== 'number') {
            return '';
        }
        if (typeof value === 'number') {
            value = value.toFixed(2);
        }
        var isNegative = !(value.toString().match(/[+]/) || !value.toString().match(/[-]/));
        // Removendo o que não é dígito qualquer zero adicional no começo da string
        value = value.toString().replace(/[^0-9]+/g, '').replace(/^0+/g, '');
        // Adiciona os zeros necessários à esquerda devido a formatação de dinheiro
        while (value.length < 3) {
            value = '0' + value.toString();
        }
        var newCurrency = '';
        value = value.split('');
        for (var i = 0; i < value.length; i++) {
            var valueChar = value[value.length - 1 - i];
            if (i === 2) {
                newCurrency = ',' + newCurrency;
            }
            else if (i > 3 && !((i - 2) % 3)) {
                newCurrency = '.' + newCurrency;
            }
            newCurrency = valueChar + newCurrency;
        }
        // ADICIONANDO O SINAL NEGATIVO
        newCurrency = isNegative ? '-' + newCurrency : newCurrency;
        return newCurrency;
    };
    UiCurrencyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiCurrency'
        })
    ], UiCurrencyPipe);
    return UiCurrencyPipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/currency/mask-currency.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/currency/mask-currency.directive.ts ***!
  \************************************************************************/
/*! exports provided: UiMaskCurrencyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskCurrencyDirective", function() { return UiMaskCurrencyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_element_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency.pipe */ "./src/app/smn-ui/utils/masks/currency/currency.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiMaskCurrencyDirective = /** @class */ (function () {
    function UiMaskCurrencyDirective(elementRef, currencyPipe) {
        this.elementRef = elementRef;
        this.currencyPipe = currencyPipe;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskCurrencyDirective_1 = UiMaskCurrencyDirective;
    UiMaskCurrencyDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ngModel && !changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
        if (typeof changes.max !== 'undefined') {
            this.max = changes.max.currentValue;
        }
        if (typeof changes.min !== 'undefined') {
            this.min = changes.min.currentValue;
        }
    };
    UiMaskCurrencyDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskCurrencyDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = this.formatViewValue(this.ngModel);
        }
        this.input = false;
    };
    UiMaskCurrencyDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = this.format(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.formatViewValue(this.elementRef.nativeElement.value);
    };
    UiMaskCurrencyDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskCurrencyDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskCurrencyDirective.prototype.format = function (value) {
        value = this.currencyPipe.transform(value);
        var removeGroupSep = new RegExp('[^\\d\\,-]+', 'g');
        value = value.toString().replace(removeGroupSep, '');
        value = parseFloat(value.replace(',', '.'));
        return typeof value === 'number' ? value : null;
    };
    UiMaskCurrencyDirective.prototype.formatViewValue = function (value) {
        var isDeletingZero = this.beforeViewValue === ('0,00') && value.length < this.beforeViewValue.length;
        value = isDeletingZero ? '' : value;
        return this.currencyPipe.transform(value);
    };
    UiMaskCurrencyDirective.prototype.validate = function (control) {
        this.control = control;
        // if (control.value && this.format(control.value).length < 11) {
        //     return {parse: true};
        // }
        if (typeof this.min !== 'undefined' && control.value && this.format(control.value) < this.min) {
            return { min: true };
        }
        if (typeof this.max !== 'undefined' && control.value && this.format(control.value) > this.max) {
            return { max: true };
        }
        return null;
    };
    UiMaskCurrencyDirective.prototype.setDisabledState = function (isDisabled) {
        var method = isDisabled ? 'setAttribute' : 'removeAttribute';
        this.elementRef.nativeElement[method]('disabled', 'disabled');
    };
    UiMaskCurrencyDirective.prototype.onKeydown = function () {
        this.beforeSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_2__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
    };
    UiMaskCurrencyDirective.prototype.onInput = function ($event) {
        // const afterSelIndex = UiElement.caretPosition.get(this.elementRef.nativeElement);
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.beforeViewValue = rawValue;
        this.renderViaInput(rawValue);
        // UiElement.caretPosition.set(this.elementRef.nativeElement, this.beforeSelIndex, afterSelIndex, this.symbolsPositions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskCurrencyDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskCurrencyDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiMaskCurrencyDirective.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiMaskCurrencyDirective.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiMaskCurrencyDirective.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiMaskCurrencyDirective.prototype, "onInput", null);
    UiMaskCurrencyDirective = UiMaskCurrencyDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskCurrency][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskCurrencyDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskCurrencyDirective_1; }),
                    multi: true
                }, _currency_pipe__WEBPACK_IMPORTED_MODULE_3__["UiCurrencyPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _currency_pipe__WEBPACK_IMPORTED_MODULE_3__["UiCurrencyPipe"]])
    ], UiMaskCurrencyDirective);
    return UiMaskCurrencyDirective;
    var UiMaskCurrencyDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/date/check-date.ts":
/*!*******************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/date/check-date.ts ***!
  \*******************************************************/
/*! exports provided: checkDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDate", function() { return checkDate; });
function checkDate(value) {
    if (!/^[\d, \/]+$/.test(value)) {
        return false;
    }
    var splittedDate = value.split('/');
    if (splittedDate.length !== 3) {
        return false;
    }
    var dayIndex;
    var monthIndex;
    var yearIndex;
    var mask = 'd/M/yy';
    mask = mask.split('/');
    for (var i = 0; i < 3; i++) {
        if (mask[i].indexOf('d') > -1) {
            dayIndex = i;
        }
        if (mask[i].indexOf('M') > -1) {
            monthIndex = i;
        }
        if (mask[i].indexOf('y') > -1) {
            yearIndex = i;
        }
    }
    if (isNaN(dayIndex) || isNaN(monthIndex) || isNaN(yearIndex)) {
        return false;
    }
    var date = splittedDate[dayIndex];
    var month = splittedDate[monthIndex];
    var year = splittedDate[yearIndex];
    if (!date || !month || !year) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }
    if (year.length < 4) {
        return false;
    }
    var dateCheck = new Date(year, month, 0).getDate();
    if (date > dateCheck || date < 1) {
        return false;
    }
    return new Date(year, month - 1, date);
}


/***/ }),

/***/ "./src/app/smn-ui/utils/masks/date/mask-date.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/date/mask-date.directive.ts ***!
  \****************************************************************/
/*! exports provided: UiMaskDateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskDateDirective", function() { return UiMaskDateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
/* harmony import */ var _check_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-date */ "./src/app/smn-ui/utils/masks/date/check-date.ts");
/* harmony import */ var rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/util/isDate */ "./node_modules/rxjs-compat/_esm5/util/isDate.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UiMaskDateDirective = /** @class */ (function () {
    function UiMaskDateDirective(elementRef, datePipe) {
        this.elementRef = elementRef;
        this.datePipe = datePipe;
        this.symbolsPositions = [2, 5];
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskDateDirective_1 = UiMaskDateDirective;
    UiMaskDateDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.minDate = this.minDate && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(this.minDate)) ? new Date(this.minDate) : this.minDate;
        this.maxDate = this.maxDate && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(this.maxDate)) ? new Date(this.maxDate) : this.maxDate;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskDateDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = this.format(this.datePipe.transform(this.ngModel, 'dd/MM/yyyy'));
        }
        this.input = false;
    };
    UiMaskDateDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = Object(_check_date__WEBPACK_IMPORTED_MODULE_4__["checkDate"])(this.format(rawValue)) || this.format(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.format(this.elementRef.nativeElement.value);
    };
    UiMaskDateDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskDateDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskDateDirective.prototype.format = function (date) {
        if (!date) {
            return '';
        }
        date = date.toString().replace(/[^0-9]+/g, '');
        if (date.length > this.symbolsPositions[0]) {
            date = date.substring(0, 2) + '/' + date.substring(2);
        }
        if (date.length > this.symbolsPositions[1]) {
            date = date.substring(0, 5) + '/' + date.substring(5, 9);
        }
        return date;
    };
    UiMaskDateDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ngModel && !changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
        if (changes.minDate && !changes.minDate.firstChange) {
            this.minDate = changes.minDate.currentValue && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(this.minDate)) ? new Date(this.minDate) : this.minDate;
        }
        if (changes.maxDate && !changes.maxDate.firstChange) {
            this.maxDate = changes.maxDate.currentValue && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(new Date(this.maxDate)) ? new Date(this.maxDate) : this.maxDate;
        }
        if ((changes.minDate && !changes.minDate.firstChange) || (changes.maxDate && !changes.maxDate.firstChange)) {
            this.control.updateValueAndValidity(this.control);
        }
    };
    UiMaskDateDirective.prototype.validate = function (control) {
        this.control = control;
        var value = this.elementRef.nativeElement.value;
        var dateControl = Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(control.value) ? control.value : new Date(control.value);
        if (value && !Object(_check_date__WEBPACK_IMPORTED_MODULE_4__["checkDate"])(value)) {
            return { parse: true };
        }
        else if (Object(_check_date__WEBPACK_IMPORTED_MODULE_4__["checkDate"])(value)) {
            dateControl.setHours(0, 0, 0, 0);
            if (this.minDate && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(this.minDate)) {
                this.minDate.setHours(0, 0, 0, 0);
                if (dateControl.getTime() < this.minDate.getTime()) {
                    return { minDate: true };
                }
            }
            if (this.maxDate && Object(rxjs_util_isDate__WEBPACK_IMPORTED_MODULE_5__["isDate"])(this.maxDate)) {
                this.maxDate.setHours(0, 0, 0, 0);
                if (dateControl.getTime() > this.maxDate.getTime()) {
                    return { maxDate: true };
                }
            }
        }
        return null;
    };
    UiMaskDateDirective.prototype.setDisabledState = function (isDisabled) {
        var method = isDisabled ? 'setAttribute' : 'removeAttribute';
        this.elementRef.nativeElement[method]('disabled', 'disabled');
    };
    UiMaskDateDirective.prototype.onKeydown = function () {
        this.beforeSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
    };
    UiMaskDateDirective.prototype.onInput = function ($event) {
        var afterSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
        _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.set(this.elementRef.nativeElement, this.beforeSelIndex, afterSelIndex, this.symbolsPositions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiMaskDateDirective.prototype, "minDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UiMaskDateDirective.prototype, "maxDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskDateDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskDateDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiMaskDateDirective.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiMaskDateDirective.prototype, "onInput", null);
    UiMaskDateDirective = UiMaskDateDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskDate][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskDateDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskDateDirective_1; }),
                    multi: true
                }, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], UiMaskDateDirective);
    return UiMaskDateDirective;
    var UiMaskDateDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/float/mask-float.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/float/mask-float.directive.ts ***!
  \******************************************************************/
/*! exports provided: UiMaskFloatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskFloatDirective", function() { return UiMaskFloatDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiMaskFloatDirective = /** @class */ (function () {
    function UiMaskFloatDirective(elementRef) {
        this.elementRef = elementRef;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskFloatDirective_1 = UiMaskFloatDirective;
    UiMaskFloatDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ngModel && !changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
        if (typeof changes.max !== 'undefined') {
            this.max = changes.max.currentValue;
        }
        if (typeof changes.min !== 'undefined') {
            this.min = changes.min.currentValue;
        }
    };
    UiMaskFloatDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskFloatDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = this.ngModel || '';
        }
        this.input = false;
    };
    UiMaskFloatDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = this.format(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.ngModel || '';
    };
    UiMaskFloatDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskFloatDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskFloatDirective.prototype.format = function (value) {
        var newValue = value.toString().replace(/[^0-9.]+/g, '');
        return newValue || undefined;
    };
    UiMaskFloatDirective.prototype.validate = function (control) {
        this.control = control;
        if (typeof this.min !== 'undefined' && control.value && this.format(control.value) < this.min) {
            return { min: true };
        }
        if (typeof this.max !== 'undefined' && control.value && this.format(control.value) > this.max) {
            return { max: true };
        }
        return null;
    };
    UiMaskFloatDirective.prototype.isNumber = function (value) {
        return !(!value && value != 0);
    };
    UiMaskFloatDirective.prototype.setDisabledState = function (isDisabled) {
        var method = isDisabled ? 'setAttribute' : 'removeAttribute';
        this.elementRef.nativeElement[method]('disabled', 'disabled');
    };
    UiMaskFloatDirective.prototype.onInput = function ($event) {
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskFloatDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskFloatDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskFloatDirective.prototype, "uiMaskFloat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiMaskFloatDirective.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiMaskFloatDirective.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiMaskFloatDirective.prototype, "onInput", null);
    UiMaskFloatDirective = UiMaskFloatDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskFloat][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskFloatDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskFloatDirective_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiMaskFloatDirective);
    return UiMaskFloatDirective;
    var UiMaskFloatDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/integer/mask-integer.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/integer/mask-integer.directive.ts ***!
  \**********************************************************************/
/*! exports provided: UiMaskIntegerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskIntegerDirective", function() { return UiMaskIntegerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiMaskIntegerDirective = /** @class */ (function () {
    function UiMaskIntegerDirective(elementRef) {
        this.elementRef = elementRef;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskIntegerDirective_1 = UiMaskIntegerDirective;
    UiMaskIntegerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ngModel && !changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
        if (typeof changes.max !== 'undefined') {
            this.max = changes.max.currentValue;
        }
        if (typeof changes.min !== 'undefined') {
            this.min = changes.min.currentValue;
        }
    };
    UiMaskIntegerDirective.prototype.ngOnInit = function () {
        switch (this.uiMaskInteger) {
            case 'smallint':
                this.min = -32768;
                this.max = 32768;
                break;
            case 'bigint':
                this.min = -9223372036854775808;
                this.max = 9223372036854775807;
                break;
            case 'integer':
                this.min = -2147483648;
                this.max = 2147483647;
                break;
        }
    };
    UiMaskIntegerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskIntegerDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = typeof this.ngModel === 'number' ? this.ngModel : '';
        }
        this.input = false;
    };
    UiMaskIntegerDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = this.format(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.ngModel || '';
    };
    UiMaskIntegerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskIntegerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskIntegerDirective.prototype.format = function (value) {
        var newValue = value.toString().replace(/[^0-9]+/g, '');
        return newValue || undefined;
    };
    UiMaskIntegerDirective.prototype.validate = function (control) {
        this.control = control;
        if (typeof this.min !== 'undefined' && control.value && this.format(control.value) < this.min) {
            return { min: true };
        }
        if (typeof this.max !== 'undefined' && control.value && this.format(control.value) > this.max) {
            return { max: true };
        }
        return null;
    };
    UiMaskIntegerDirective.prototype.setDisabledState = function (isDisabled) {
        var method = isDisabled ? 'setAttribute' : 'removeAttribute';
        this.elementRef.nativeElement[method]('disabled', 'disabled');
    };
    UiMaskIntegerDirective.prototype.onInput = function ($event) {
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskIntegerDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskIntegerDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskIntegerDirective.prototype, "uiMaskInteger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiMaskIntegerDirective.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UiMaskIntegerDirective.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiMaskIntegerDirective.prototype, "onInput", null);
    UiMaskIntegerDirective = UiMaskIntegerDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskInteger][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskIntegerDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskIntegerDirective_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiMaskIntegerDirective);
    return UiMaskIntegerDirective;
    var UiMaskIntegerDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/phone/mask-phone.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/phone/mask-phone.directive.ts ***!
  \******************************************************************/
/*! exports provided: UiMaskPhoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskPhoneDirective", function() { return UiMaskPhoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone.pipe */ "./src/app/smn-ui/utils/masks/phone/phone.pipe.ts");
/* harmony import */ var _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiMaskPhoneDirective = /** @class */ (function () {
    function UiMaskPhoneDirective(elementRef, phonePipe) {
        this.elementRef = elementRef;
        this.phonePipe = phonePipe;
        this.symbolsPositions = [0, 9, 11, 14];
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskPhoneDirective_1 = UiMaskPhoneDirective;
    UiMaskPhoneDirective.prototype.ngOnChanges = function (changes) {
        if (!changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
    };
    UiMaskPhoneDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskPhoneDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = this.phonePipe.transform(this.ngModel);
        }
        this.input = false;
    };
    UiMaskPhoneDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = this.format(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.phonePipe.transform(this.elementRef.nativeElement.value);
    };
    UiMaskPhoneDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskPhoneDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskPhoneDirective.prototype.format = function (value) {
        value = value.toString().replace(/[^0-9]+/g, '');
        return value.substring(0, 11);
    };
    UiMaskPhoneDirective.prototype.validate = function (control) {
        this.control = control;
        if (control.value && this.format(control.value).length < 10) {
            return { parse: true };
        }
        return null;
    };
    UiMaskPhoneDirective.prototype.onKeydown = function () {
        this.beforeSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
    };
    UiMaskPhoneDirective.prototype.onInput = function ($event) {
        var afterSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
        if (afterSelIndex === 4) {
            this.beforeSelIndex = 5;
            afterSelIndex = 6;
        }
        _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.set(this.elementRef.nativeElement, this.beforeSelIndex, afterSelIndex, this.symbolsPositions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskPhoneDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskPhoneDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiMaskPhoneDirective.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiMaskPhoneDirective.prototype, "onInput", null);
    UiMaskPhoneDirective = UiMaskPhoneDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskPhone][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskPhoneDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskPhoneDirective_1; }),
                    multi: true
                }, _phone_pipe__WEBPACK_IMPORTED_MODULE_2__["UiPhonePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _phone_pipe__WEBPACK_IMPORTED_MODULE_2__["UiPhonePipe"]])
    ], UiMaskPhoneDirective);
    return UiMaskPhoneDirective;
    var UiMaskPhoneDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/phone/phone.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/phone/phone.pipe.ts ***!
  \********************************************************/
/*! exports provided: UiPhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiPhonePipe", function() { return UiPhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiPhonePipe = /** @class */ (function () {
    function UiPhonePipe() {
    }
    UiPhonePipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.toString().replace(/[^0-9]+/g, '');
        if (value.length > 0) {
            value = '(' + value;
        }
        if (value.length > 3) {
            value = value.substring(0, 3) + ') ' + value.substring(3);
        }
        if (value.length > 9 && value.length < 14) {
            value = value.substring(0, 9) + '-' + value.substring(9);
        }
        else if (value.length > 13) {
            value = value.substring(0, 10) + '-' + value.substring(10);
        }
        if (value.length > 15) {
            value = value.substring(0, 15);
        }
        return value;
    };
    UiPhonePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiPhone'
        })
    ], UiPhonePipe);
    return UiPhonePipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/time/mask-time.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/time/mask-time.directive.ts ***!
  \****************************************************************/
/*! exports provided: UiMaskTimeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaskTimeDirective", function() { return UiMaskTimeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time.pipe */ "./src/app/smn-ui/utils/masks/time/time.pipe.ts");
/* harmony import */ var _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UiMaskTimeDirective = /** @class */ (function () {
    function UiMaskTimeDirective(elementRef, timePipe) {
        this.elementRef = elementRef;
        this.timePipe = timePipe;
        this.symbolsPositions = [2];
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UiMaskTimeDirective_1 = UiMaskTimeDirective;
    UiMaskTimeDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ngModel && !changes.ngModel.firstChange && (changes.ngModel.currentValue === null || changes.ngModel.currentValue === undefined)) {
            this.elementRef.nativeElement.value = '';
        }
        if (changes.minTime && !changes.minTime.firstChange) {
            this.minTime = changes.minTime.currentValue;
        }
        if (changes.maxTime && !changes.maxTime.firstChange) {
            this.maxTime = changes.maxTime.currentValue;
        }
    };
    UiMaskTimeDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        });
    };
    UiMaskTimeDirective.prototype.writeValue = function (rawValue) {
        if (this.control && this.loaded && rawValue) {
            this.control.markAsDirty();
        }
        if (!this.input) {
            this.elementRef.nativeElement.value = this.timePipe.transform(this.ngModel);
        }
        this.input = false;
    };
    UiMaskTimeDirective.prototype.renderViaInput = function (rawValue) {
        if (rawValue) {
            this.control.markAsDirty();
        }
        this.ngModel = this.timePipe.transform(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.timePipe.transform(this.elementRef.nativeElement.value);
    };
    UiMaskTimeDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiMaskTimeDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiMaskTimeDirective.prototype.format = function (value) {
        value = value.toString().replace(/[^0-9]+/g, '');
        return value.substring(0, 4);
    };
    UiMaskTimeDirective.prototype.validate = function (control) {
        this.control = control;
        if (control.value && this.format(control.value).length < 4) {
            return { parse: true };
        }
        if (control.value) {
            var time = control.value.split(':');
            if (time[0] > 23) {
                return { hour: true };
            }
            if (time[1] > 59) {
                return { minute: true };
            }
            if (this.minTime && this.format(this.minTime).length === 4 && this.format(control.value) < this.format(this.minTime)) {
                return { minTime: true };
            }
            if (this.maxTime && this.format(this.maxTime).length === 4 && this.format(control.value) > this.format(this.maxTime)) {
                return { maxTime: true };
            }
        }
        return null;
    };
    UiMaskTimeDirective.prototype.onKeydown = function () {
        this.beforeSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
    };
    UiMaskTimeDirective.prototype.onInput = function () {
        var afterSelIndex = _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.get(this.elementRef.nativeElement);
        var rawValue = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
        _providers_element_provider__WEBPACK_IMPORTED_MODULE_3__["UiElement"].caretPosition.set(this.elementRef.nativeElement, this.beforeSelIndex, afterSelIndex, this.symbolsPositions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiMaskTimeDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiMaskTimeDirective.prototype, "minTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiMaskTimeDirective.prototype, "maxTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiMaskTimeDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiMaskTimeDirective.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiMaskTimeDirective.prototype, "onInput", null);
    UiMaskTimeDirective = UiMaskTimeDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaskTime][ngModel]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskTimeDirective_1; }),
                    multi: true
                }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaskTimeDirective_1; }),
                    multi: true
                }, _time_pipe__WEBPACK_IMPORTED_MODULE_2__["UiTimePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _time_pipe__WEBPACK_IMPORTED_MODULE_2__["UiTimePipe"]])
    ], UiMaskTimeDirective);
    return UiMaskTimeDirective;
    var UiMaskTimeDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/masks/time/time.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/smn-ui/utils/masks/time/time.pipe.ts ***!
  \******************************************************/
/*! exports provided: UiTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTimePipe", function() { return UiTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiTimePipe = /** @class */ (function () {
    function UiTimePipe() {
    }
    UiTimePipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.toString().replace(/[^0-9]+/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + ':' + value.substring(2);
        }
        if (value.length > 5) {
            value = value.substring(0, 5);
        }
        return value;
    };
    UiTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiTime'
        })
    ], UiTimePipe);
    return UiTimePipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/pipes/capitalize.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/smn-ui/utils/pipes/capitalize.pipe.ts ***!
  \*******************************************************/
/*! exports provided: UiCapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCapitalizePipe", function() { return UiCapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiCapitalizePipe = /** @class */ (function () {
    function UiCapitalizePipe() {
    }
    UiCapitalizePipe.prototype.transform = function (value, args) {
        return value && value.length > 0 ? value[0].toUpperCase() + value.substr(1).toLowerCase() : value;
    };
    UiCapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiCapitalize'
        })
    ], UiCapitalizePipe);
    return UiCapitalizePipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/pipes/filter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/smn-ui/utils/pipes/filter.pipe.ts ***!
  \***************************************************/
/*! exports provided: UiFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFilterPipe", function() { return UiFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _functions_unaccent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/unaccent */ "./src/app/smn-ui/utils/functions/unaccent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiFilterPipe = /** @class */ (function () {
    function UiFilterPipe() {
    }
    UiFilterPipe.prototype.transform = function (value, filterBy, name) {
        filterBy = filterBy ? Object(_functions_unaccent__WEBPACK_IMPORTED_MODULE_1__["unaccent"])(filterBy.toLowerCase()) : null;
        return filterBy ? value.filter(function (item) {
            return Object(_functions_unaccent__WEBPACK_IMPORTED_MODULE_1__["unaccent"])(item[name].toLowerCase()).indexOf(filterBy) !== -1;
        }) : value;
    };
    UiFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiFilter',
            pure: false
        })
    ], UiFilterPipe);
    return UiFilterPipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/pipes/time-ago.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/smn-ui/utils/pipes/time-ago.pipe.ts ***!
  \*****************************************************/
/*! exports provided: UiTimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTimeAgoPipe", function() { return UiTimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs_add_operator_repeatWhen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/repeatWhen */ "./node_modules/rxjs-compat/_esm5/add/operator/repeatWhen.js");
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs-compat/_esm5/add/operator/startWith.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs-compat/_esm5/add/operator/takeWhile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UiTimeAgoPipe = /** @class */ (function () {
    function UiTimeAgoPipe(ref) {
        this.isDestroyed = false;
        this.async = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"](ref);
    }
    UiTimeAgoPipe.prototype.transform = function (obj, textBefore, textAfter, isMinified, isHence) {
        if (textBefore === void 0) { textBefore = ''; }
        if (textAfter === void 0) { textAfter = ''; }
        this.textBefore = textBefore;
        this.textAfter = textAfter;
        this.isMinified = isMinified;
        this.isHence = isHence;
        if (obj == null) {
            return '';
        }
        if (!(obj instanceof Date)) {
            try {
                obj = new Date(obj);
            }
            catch (e) {
                throw new Error('UiTimeAgo só funciona com datas');
            }
        }
        this.value = obj;
        if (!this.timer) {
            this.timer = this.getObservable();
        }
        return this.async.transform(this.timer);
    };
    UiTimeAgoPipe.prototype.now = function () {
        return new Date();
    };
    UiTimeAgoPipe.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    UiTimeAgoPipe.prototype.getObservable = function () {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"]
            .of(1)
            .repeatWhen(function (notifications) {
            return notifications.flatMap(function (x, i) {
                var sleep = i < 60 ? 1000 : 30000;
                return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].timer(sleep);
            });
        })
            .takeWhile(function (_) { return !_this.isDestroyed; })
            .map(function (x, i) { return _this.elapsed(); });
    };
    ;
    UiTimeAgoPipe.prototype.elapsed = function () {
        var now = this.now().getTime();
        var delta = (now - this.value.getTime()) / 1000;
        if (this.isHence) {
            delta = delta * -1;
        }
        if (delta < 60) {
            var realDelta = Math.floor(delta);
            var timeAgo = void 0;
            if (this.isMinified) {
                timeAgo = realDelta + "s";
            }
            else {
                timeAgo = realDelta + " segundo" + ((realDelta !== 1) ? 's' : '');
            }
            return "" + this.textBefore + timeAgo + this.textAfter;
        }
        else if (delta < 3600) {
            var realDelta = Math.floor(delta / 60);
            var timeAgo = void 0;
            if (this.isMinified) {
                timeAgo = realDelta + "m";
            }
            else {
                timeAgo = realDelta + " minuto" + ((realDelta !== 1) ? 's' : '');
            }
            return "" + this.textBefore + timeAgo + this.textAfter;
        }
        else if (delta < 86400) {
            var realDelta = Math.floor(delta / 3600);
            var timeAgo = void 0;
            if (this.isMinified) {
                timeAgo = realDelta + "h";
            }
            else {
                timeAgo = realDelta + " hora" + ((realDelta !== 1) ? 's' : '');
            }
            return "" + this.textBefore + timeAgo + this.textAfter;
        }
        else {
            var realDelta = Math.floor(delta / 86400);
            var timeAgo = void 0;
            if (this.isMinified) {
                timeAgo = realDelta + "d";
            }
            else {
                timeAgo = realDelta + " dia" + ((realDelta !== 1) ? 's' : '');
            }
            return "" + this.textBefore + timeAgo + this.textAfter;
        }
    };
    UiTimeAgoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uiTimeAgo',
            pure: false
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UiTimeAgoPipe);
    return UiTimeAgoPipe;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/providers/color.provider.ts":
/*!**********************************************************!*\
  !*** ./src/app/smn-ui/utils/providers/color.provider.ts ***!
  \**********************************************************/
/*! exports provided: UiColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiColor", function() { return UiColor; });
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

var UiColor = /** @class */ (function () {
    function UiColor() {
    }
    UiColor.isBright = function (hex, minDarkPerc) {
        return _isBright(hex, minDarkPerc);
    };
    UiColor.hexToRgb = function (hex) {
        return _hexToRgb(hex);
    };
    UiColor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiColor);
    return UiColor;
}());

function _isBright(hex, minDarkPerc) {
    var color = _hexToRgb(hex);
    if (!color) {
        return false;
    }
    var luminosityPerc = 1 - (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;
    return (luminosityPerc < (minDarkPerc || 0.3));
}
function _hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


/***/ }),

/***/ "./src/app/smn-ui/utils/providers/cookie.provider.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/utils/providers/cookie.provider.ts ***!
  \***********************************************************/
/*! exports provided: UiCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCookie", function() { return UiCookie; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiCookie = /** @class */ (function () {
    function UiCookie() {
    }
    UiCookie.get = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    UiCookie.has = function (name) {
        return !!this.get(name);
    };
    UiCookie.delete = function (name) {
        this.set(name, '', -1);
    };
    UiCookie.set = function (name, value, expireDays, path) {
        if (expireDays === void 0) { expireDays = 365; }
        if (path === void 0) { path = '/'; }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires + '; path=' + path;
    };
    UiCookie = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UiCookie);
    return UiCookie;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/providers/element-ref.provider.ts":
/*!****************************************************************!*\
  !*** ./src/app/smn-ui/utils/providers/element-ref.provider.ts ***!
  \****************************************************************/
/*! exports provided: UiElementRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementRef", function() { return UiElementRef; });
/* harmony import */ var _element_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.provider */ "./src/app/smn-ui/utils/providers/element.provider.ts");

var UiElementRef = /** @class */ (function () {
    function UiElementRef(element) {
        var _this = this;
        this.nativeElement = element;
        if (element) {
            if (element.length) {
                this.length = element.length;
                if (element === window) {
                    this[0] = new UiElementRef(element);
                }
                else {
                    element.forEach(function (item, i) {
                        _this[i] = new UiElementRef(item);
                    });
                }
            }
            else {
                this.length = 1;
                this[0] = element;
            }
        }
        this.classList = {
            remove: function removeClass(className) {
                return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].classList.remove(element, className);
            },
            add: function addClass(className) {
                return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].classList.add(element, className);
            },
            contains: function addClass(className) {
                return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].classList.contains(element, className);
            }
        };
    }
    UiElementRef.prototype.closest = function (selector) {
        return new UiElementRef(_element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].closest(this.nativeElement, selector));
    };
    UiElementRef.prototype.index = function () {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].index(this.nativeElement);
    };
    UiElementRef.prototype.trigger = function (eventToTrigger) {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].trigger(this.nativeElement, eventToTrigger);
    };
    UiElementRef.prototype.on = function (events, listener) {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].on(this.nativeElement, events, listener);
    };
    UiElementRef.prototype.off = function (events, listener) {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].off(this.nativeElement, events, listener);
    };
    UiElementRef.prototype.is = function (selector) {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].is(this.nativeElement, selector);
    };
    UiElementRef.prototype.position = function (withoutScroll) {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].position(this.nativeElement, withoutScroll);
    };
    UiElementRef.prototype.offset = function () {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].offset(this.nativeElement);
    };
    UiElementRef.prototype.animate = function (property, start_value, end_value, time, end, tick) {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].animate(this.nativeElement, property, start_value, end_value, time, end, tick);
    };
    UiElementRef.prototype.querySelector = function (selector) {
        var selected = this.nativeElement.querySelectorAll(selector);
        if (selected.length) {
            selected = selected.length === 1 ? selected[0] : selected;
            return new UiElementRef(selected);
        }
        return new UiElementRef(null);
    };
    UiElementRef.prototype.forEach = function (callback) {
        return Array.prototype.forEach.call(this, callback);
    };
    UiElementRef.prototype.filter = function (callback) {
        return Array.prototype.filter.call(this, callback);
    };
    UiElementRef.prototype.indexOf = function (element) {
        return Array.prototype.indexOf.call(this, element);
    };
    UiElementRef.prototype.css = function (styleProp, newValue) {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].css(this.nativeElement, styleProp, newValue);
    };
    UiElementRef.prototype.isInViewport = function () {
        return _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].isInViewport(this.nativeElement);
    };
    UiElementRef.prototype.attribute = function (name, value) {
        if (typeof value !== 'undefined') {
            return this.nativeElement.setAttribute(name, value);
        }
        else {
            return this.nativeElement.getAttribute(name);
        }
    };
    UiElementRef.prototype.height = function (newHeight) {
        if (typeof newHeight !== 'undefined') {
            _element_provider__WEBPACK_IMPORTED_MODULE_0__["UiElement"].css(this.nativeElement, 'height', newHeight);
        }
        return this.nativeElement.clientHeight;
    };
    UiElementRef.prototype.parent = function () {
        return new UiElementRef(this.nativeElement.parentNode);
    };
    UiElementRef.prototype.focus = function () {
        if (this.nativeElement && this.nativeElement.focus) {
            this.nativeElement.focus();
        }
    };
    return UiElementRef;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/providers/element.provider.ts":
/*!************************************************************!*\
  !*** ./src/app/smn-ui/utils/providers/element.provider.ts ***!
  \************************************************************/
/*! exports provided: UiElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElement", function() { return UiElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiElement = /** @class */ (function () {
    function UiElement() {
    }
    UiElement_1 = UiElement;
    UiElement.disableScroll = function () {
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    };
    UiElement.enableScroll = function () {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    };
    UiElement.closest = function (el, selector) {
        /* Source: http://stackoverflow.com/questions/18663941/finding-closest-element-without-jquery */
        var matchesFn = null;
        // find vendor prefix
        ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
            if (typeof document.body[fn] === 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        });
        var parent;
        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            }
            el = parent;
        }
        return null;
    };
    UiElement.index = function (el) {
        var nodes = el.parentNode.childNodes;
        var node;
        var count;
        var i = count = 0;
        while ((node = nodes.item(i++)) && node !== el) {
            if (node.nodeType === 1) {
                count++;
            }
        }
        return count;
    };
    UiElement.trigger = function (el, eventToTrigger) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent(eventToTrigger, true, false);
        el.dispatchEvent(event);
    };
    UiElement.on = function (el, events, listener) {
        var elements;
        if (el.constructor === NodeList) {
            elements = el;
        }
        else {
            elements = [el];
        }
        events = events.split(' ');
        Array.prototype.forEach.call(elements, function (el2) {
            events.forEach(function (event) { return el2.addEventListener(event, listener, false); });
        });
    };
    UiElement.off = function (el, events, listener) {
        events = events.split(' ');
        var iLen = events.length;
        for (var i = 0; i < iLen; i++) {
            if (events[i]) {
                el.removeEventListener(events[i], listener, false);
            }
        }
    };
    UiElement.is = function (el, selector) {
        var matches = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector;
        if (matches) {
            return (matches).call(el, selector);
        }
        else {
            return null;
        }
    };
    UiElement.position = function (el, withoutScroll) {
        /* http://javascript.info/tutorial/coordinates */
        if (el.getBoundingClientRect) {
            return getOffsetRect(el);
        }
        else {
            return getOffsetSum(el);
        }
        function getOffsetSum(elem) {
            /* Source: http://javascript.info/tutorial/coordinates */
            var top = 0, left = 0;
            while (elem) {
                top = top + parseInt(elem.offsetTop, 10);
                left = left + parseInt(elem.offsetLeft, 10);
                elem = elem.offsetParent;
            }
            return { top: top, left: left };
        }
        function getOffsetRect(elem) {
            /* http://javascript.info/tutorial/coordinates */
            var box = elem.getBoundingClientRect();
            var body = document.body;
            var docElem = document.documentElement;
            var scrollTop = 0;
            var scrollLeft = 0;
            if (!withoutScroll) {
                scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
                scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
            }
            var clientTop = docElem.clientTop || body.clientTop || 0;
            var clientLeft = docElem.clientLeft || body.clientLeft || 0;
            var top = box.top + scrollTop - clientTop;
            var left = box.left + scrollLeft - clientLeft;
            return { top: Math.round(top), left: Math.round(left) };
        }
    };
    UiElement.offset = function (el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    UiElement.animate = function (object, property, start_value, end_value, time, end, tick) {
        var propWithPx = ['width', 'height', 'left', 'top', 'border-radius', 'border-spacing', 'margin-left', 'margin-top'];
        var frame_rate = 0.06; // 60 FPS
        var frame = 0;
        var delta = (end_value - start_value) / time / frame_rate;
        var handle = setInterval(function () {
            frame++;
            var value = start_value + delta * frame;
            if (tick) {
                tick(value);
            }
            var hasPx = propWithPx.indexOf(property) > -1;
            object.style[property] = value + (hasPx ? 'px' : '');
            if ((start_value > end_value ? value.toFixed(2) <= end_value : value.toFixed(2) >= end_value)) {
                clearInterval(handle);
                if (end) {
                    end();
                }
            }
        }, 1 / frame_rate);
    };
    UiElement.css = function (el, styleProp, newValue) {
        if (typeof newValue !== 'undefined') {
            styleProp = styleProp.replace(/-([a-z])/g, function (g) {
                return g[1].toUpperCase();
            });
            el.style[styleProp] = newValue;
        }
        else {
            var value = void 0;
            var defaultView = (el.ownerDocument || document).defaultView;
            // W3C standard way:
            if (defaultView && defaultView.getComputedStyle) {
                // sanitize property name to css notation
                // (hyphen separated words eg. font-Size)
                styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
                return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
            }
            else if (el.currentStyle) {
                // sanitize property name to camelCase
                styleProp = styleProp.replace(/-(\w)/g, function (str, letter) {
                    return letter.toUpperCase();
                });
                value = el.currentStyle[styleProp];
                // convert other units to pixels on IE
                if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
                    return (function (value2) {
                        var oldLeft = el.style.left;
                        var oldRsLeft = el.runtimeStyle.left;
                        el.runtimeStyle.left = el.currentStyle.left;
                        el.style.left = value2 || 0;
                        value2 = el.style.pixelLeft + 'px';
                        el.style.left = oldLeft;
                        el.runtimeStyle.left = oldRsLeft;
                        return value2;
                    })(value);
                }
                return value;
            }
        }
    };
    UiElement.isInViewport = function (el) {
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth));
    };
    UiElement.focus = function (el) {
        el.focus();
        var headerSpace = document.querySelector('ui-toolbar header').clientHeight + 16;
        var elTop = UiElement_1.position(el, true).top;
        if (elTop < headerSpace) {
            window.scrollTo(0, UiElement_1.position(el).top - headerSpace);
        }
        return;
    };
    UiElement.isMobile = function () {
        var isMobile = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                isMobile = true;
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return isMobile;
    };
    UiElement.caretPosition = {
        get: function getCaretPosition(el) {
            // https://javascriptexamples.info/snippet/getset-cursor-in-html-textarea
            var documentt = {
                selection: undefined
            };
            Object.assign(documentt, document);
            var caretPos = 0;
            if (documentt.selection) {
                el.focus();
                var select = documentt.selection.createRange();
                select.moveStart('character', -el.value.length);
                caretPos = select.text.length;
            }
            else if (el.selectionStart || el.selectionStart === '0') {
                caretPos = el.selectionStart;
            }
            return caretPos;
        },
        set: function setCaretPosition(el, beforeSelIndex, afterSelIndex, symbolsPositions) {
            // https://javascriptexamples.info/snippet/getset-cursor-in-html-textarea
            var futureSelIndex;
            symbolsPositions = symbolsPositions ? symbolsPositions : [];
            if (el.selectionStart || el.selectionStart === '0') {
                futureSelIndex = afterSelIndex;
                for (var i = 0; i < symbolsPositions.length; i++) {
                    if (beforeSelIndex === symbolsPositions[i] && afterSelIndex === symbolsPositions[i] + 1) {
                        futureSelIndex = symbolsPositions[i] + 2;
                        break;
                    }
                }
                setTimeout(function () {
                    setCaret();
                });
            }
            function setCaret() {
                if (el.setSelectionRange) {
                    if (el.selectionStart) {
                        el.focus();
                        el.setSelectionRange(futureSelIndex, futureSelIndex);
                    }
                    else {
                        el.focus();
                    }
                }
                else if (el.createTextRange) {
                    var range = el.createTextRange();
                    range.collapse(true);
                    range.move('character', futureSelIndex);
                    range.moveEnd('character', futureSelIndex);
                    range.moveStart('character', futureSelIndex);
                    range.select();
                }
            }
        }
    };
    UiElement.classList = {
        remove: function removeClass(el, className) {
            return el.classList.remove(className);
        },
        add: function addClass(el, className) {
            return el.classList.add(className);
        },
        contains: function addClass(el, className) {
            return el.classList.contains(className);
        }
    };
    UiElement = UiElement_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UiElement);
    return UiElement;
    var UiElement_1;
}());

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// const keys = {37: 1, 38: 1, 39: 1, 40: 1};
var keys = { 38: 1, 40: 1 };
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}


/***/ }),

/***/ "./src/app/smn-ui/utils/providers/window.provider.ts":
/*!***********************************************************!*\
  !*** ./src/app/smn-ui/utils/providers/window.provider.ts ***!
  \***********************************************************/
/*! exports provided: UiWindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiWindowRef", function() { return UiWindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var UiWindowRef = /** @class */ (function () {
    function UiWindowRef() {
    }
    Object.defineProperty(UiWindowRef, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    UiWindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UiWindowRef);
    return UiWindowRef;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/validators/maxlength.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/smn-ui/utils/validators/maxlength.directive.ts ***!
  \****************************************************************/
/*! exports provided: UiMaxlengthDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMaxlengthDirective", function() { return UiMaxlengthDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiMaxlengthDirective = /** @class */ (function () {
    function UiMaxlengthDirective() {
    }
    UiMaxlengthDirective_1 = UiMaxlengthDirective;
    UiMaxlengthDirective.prototype.validate = function (control) {
        var value = control.value ? control.value.toString() : control.value;
        if (value && value.length > this.maxLength) {
            return {
                uiMaxlength: true
            };
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uiMaxlength'),
        __metadata("design:type", Object)
    ], UiMaxlengthDirective.prototype, "maxLength", void 0);
    UiMaxlengthDirective = UiMaxlengthDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uiMaxlength][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiMaxlengthDirective_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], UiMaxlengthDirective);
    return UiMaxlengthDirective;
    var UiMaxlengthDirective_1;
}());



/***/ }),

/***/ "./src/app/smn-ui/utils/validators/required.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/smn-ui/utils/validators/required.directive.ts ***!
  \***************************************************************/
/*! exports provided: UiRequiredDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiRequiredDirective", function() { return UiRequiredDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiRequiredDirective = /** @class */ (function () {
    function UiRequiredDirective() {
    }
    UiRequiredDirective_1 = UiRequiredDirective;
    UiRequiredDirective.prototype.validate = function (control) {
        var value = control.value;
        if (value && value.trim && !value.trim()) {
            return {
                required: true,
                uiMaxlength: false
            };
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('required'),
        __metadata("design:type", Object)
    ], UiRequiredDirective.prototype, "maxLength", void 0);
    UiRequiredDirective = UiRequiredDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[required][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiRequiredDirective_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], UiRequiredDirective);
    return UiRequiredDirective;
    var UiRequiredDirective_1;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GABRIEL\Documents\projects\statistics-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map