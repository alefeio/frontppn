(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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

/***/ "./src/app/anuncio.service.ts":
/*!************************************!*\
  !*** ./src/app/anuncio.service.ts ***!
  \************************************/
/*! exports provided: AnuncioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioService", function() { return AnuncioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");




var AnuncioService = /** @class */ (function () {
    function AnuncioService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.anuncioUrl = this.apiService.urlApi;
    }
    AnuncioService.prototype.listar = function () {
        return this.http.get(this.anuncioUrl + "/anuncios");
    };
    AnuncioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AnuncioService);
    return AnuncioService;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApiService = /** @class */ (function () {
    function ApiService() {
        // public urlApi = 'http://localhost:3000'
        this.urlApi = 'https://apippn.herokuapp.com';
    }
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiService);
    return ApiService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoria/categoria.component */ "./src/app/categoria/categoria.component.ts");
/* harmony import */ var _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noticia/noticia.component */ "./src/app/noticia/noticia.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
/* harmony import */ var _trabalhe_trabalhe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trabalhe/trabalhe.component */ "./src/app/trabalhe/trabalhe.component.ts");
/* harmony import */ var _denuncie_denuncie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./denuncie/denuncie.component */ "./src/app/denuncie/denuncie.component.ts");









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contato', component: _contato_contato_component__WEBPACK_IMPORTED_MODULE_6__["ContatoComponent"] },
    { path: 'trabalhe', component: _trabalhe_trabalhe_component__WEBPACK_IMPORTED_MODULE_7__["TrabalheComponent"] },
    { path: 'denuncie', component: _denuncie_denuncie_component__WEBPACK_IMPORTED_MODULE_8__["DenuncieComponent"] },
    { path: 'categoria/:categoria', component: _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaComponent"] },
    { path: 'noticia/:url', component: _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_5__["NoticiaComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categoria/categoria.component */ "./src/app/categoria/categoria.component.ts");
/* harmony import */ var _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./noticia/noticia.component */ "./src/app/noticia/noticia.component.ts");
/* harmony import */ var _util_pipes_keep_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/pipes/keep-html */ "./src/app/util/pipes/keep-html.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _lado_direito_lado_direito_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lado-direito/lado-direito.component */ "./src/app/lado-direito/lado-direito.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
/* harmony import */ var _trabalhe_trabalhe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trabalhe/trabalhe.component */ "./src/app/trabalhe/trabalhe.component.ts");
/* harmony import */ var _denuncie_denuncie_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./denuncie/denuncie.component */ "./src/app/denuncie/denuncie.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_10__["CategoriaComponent"],
                _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_11__["NoticiaComponent"],
                _util_pipes_keep_html__WEBPACK_IMPORTED_MODULE_12__["EscapeHtmlPipe"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _lado_direito_lado_direito_component__WEBPACK_IMPORTED_MODULE_14__["LadoDireitoComponent"],
                _contato_contato_component__WEBPACK_IMPORTED_MODULE_15__["ContatoComponent"],
                _trabalhe_trabalhe_component__WEBPACK_IMPORTED_MODULE_16__["TrabalheComponent"],
                _denuncie_denuncie_component__WEBPACK_IMPORTED_MODULE_17__["DenuncieComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categoria.service.ts":
/*!**************************************!*\
  !*** ./src/app/categoria.service.ts ***!
  \**************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CategoriaService = /** @class */ (function () {
    function CategoriaService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.categoriasUrl = this.apiService.urlApi + "/categorias";
    }
    CategoriaService.prototype.listar = function () {
        return this.http.get(this.categoriasUrl);
    };
    CategoriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "./src/app/categoria/categoria.component.css":
/*!***************************************************!*\
  !*** ./src/app/categoria/categoria.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYS9jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/categoria/categoria.component.html":
/*!****************************************************!*\
  !*** ./src/app/categoria/categoria.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SECTION -->\n<div class=\"section\">\n  <!-- container -->\n  <div class=\"container\">\n    <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"row\">\n          <!-- post -->\n          <div class=\"col-md-3\" *ngFor=\"let pc of posts\">\n            <div class=\"post\">\n                <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.img\"><img [src]=\"pc.img\" alt=\"\"></a>\n              <div class=\"post-body\">\n                <div class=\"post-category\">\n                </div>\n                <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n                <ul class=\"post-meta\">\n                  <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                  <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                    </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <!-- /post -->\n        </div>\n\n        <!-- <div class=\"section-row loadmore text-center\">\n          <a href=\"#\" class=\"primary-button\">Load More</a>\n        </div> -->\n      </div>\n\n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n</div>\n<!-- /SECTION -->"

/***/ }),

/***/ "./src/app/categoria/categoria.component.ts":
/*!**************************************************!*\
  !*** ./src/app/categoria/categoria.component.ts ***!
  \**************************************************/
/*! exports provided: CategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function() { return CategoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var CategoriaComponent = /** @class */ (function () {
    function CategoriaComponent(route, location, postService) {
        this.route = route;
        this.location = location;
        this.postService = postService;
        this.posts = [];
        this.urlImg = 'http://www.portalparanews.com.br/imgBlog';
    }
    CategoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.postService.byCategoria(params['categoria']); }))
            .subscribe(function (posts) {
            _this.setPosts(posts);
            for (var p = 0; p < _this.posts.length; p++) {
                _this.posts[p].img = _this.urlImg + "/" + _this.posts[p].img;
                _this.posts[p].thumb = _this.urlImg + "/" + _this.posts[p].thumb;
            }
            console.log('Posts: ', posts);
        }, function () { return alert('Ocorreu um erro no servidor. Tente mais tarde!'); });
    };
    CategoriaComponent.prototype.setPosts = function (posts) {
        this.posts = posts;
    };
    CategoriaComponent.prototype.goBack = function () {
        this.location.back();
    };
    CategoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoria',
            template: __webpack_require__(/*! ./categoria.component.html */ "./src/app/categoria/categoria.component.html"),
            styles: [__webpack_require__(/*! ./categoria.component.css */ "./src/app/categoria/categoria.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], CategoriaComponent);
    return CategoriaComponent;
}());



/***/ }),

/***/ "./src/app/contato/contato.component.css":
/*!***********************************************!*\
  !*** ./src/app/contato/contato.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhdG8vY29udGF0by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contato/contato.component.html":
/*!************************************************!*\
  !*** ./src/app/contato/contato.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- section -->\n<div class=\"section\">\n\n  <!-- container -->\n  <div class=\"container\" style=\"margin-top: 20px\">\n    <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n\n        <!-- post tags -->\n        <!-- <div class=\"section-row\">\n            <div class=\"post-tags\">\n              <ul>\n                <li>TAGS:</li>\n                <li><a href=\"#\">Social</a></li>\n                <li><a href=\"#\">Lifestyle</a></li>\n                <li><a href=\"#\">Fashion</a></li>\n                <li><a href=\"#\">Health</a></li>\n              </ul>\n            </div>\n          </div> -->\n        <!-- /post tags -->\n\n        <!-- post reply -->\n        <div class=\"section-row\">\n          <div class=\"section-title\">\n            <h3 class=\"title\">Envie sua mensagem</h3>\n          </div>\n          <form [formGroup]=\"form\" (ngSubmit)=\"enviarContato()\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <textarea class=\"input\" placeholder=\"Mensagem\" formControlName=\"mensagem\"></textarea>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input class=\"input\" type=\"text\" placeholder=\"Nome\" formControlName=\"nome\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input class=\"input\" type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input class=\"input\" type=\"text\" placeholder=\"Telefone\" formControlName=\"tel\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input class=\"input\" type=\"text\" placeholder=\"Site\" formControlName=\"site\">\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <button class=\"primary-button\" type=\"submit\">Enviar</button>\n              </div>\n\n            </div>\n          </form>\n        </div>\n        <!-- /post reply -->\n      </div>\n      <div class=\"col-md-4\">\n        <!-- ad widget -->\n        <!-- <div class=\"aside-widget text-center\">\n            <a href=\"#\" style=\"display: inline-block;margin: auto;\">\n              <img class=\"img-responsive\" src=\"/assets/img/ad-3.jpg\" alt=\"\">\n            </a>\n          </div> -->\n        <!-- /ad widget -->\n\n        <!-- social widget -->\n        <!-- <div class=\"aside-widget\">\n            <div class=\"section-title\">\n              <h2 class=\"title\">Social Media</h2>\n            </div>\n            <div class=\"social-widget\">\n              <ul>\n                <li>\n                  <a href=\"#\" class=\"social-facebook\">\n                    <i class=\"fa fa-facebook\"></i>\n                    <span>21.2K<br>Followers</span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"social-twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                    <span>10.2K<br>Followers</span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"social-google-plus\">\n                    <i class=\"fa fa-google-plus\"></i>\n                    <span>5K<br>Followers</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div> -->\n        <!-- /social widget -->\n\n        <app-lado-direito></app-lado-direito>\n\n        <!-- Ad widget -->\n        <!-- <div class=\"aside-widget text-center\">\n            <a href=\"#\" style=\"display: inline-block;margin: auto;\">\n              <img class=\"img-responsive\" src=\"assets/img/ad-1.jpg\" alt=\"\">\n            </a>\n          </div> -->\n        <!-- /Ad widget -->\n      </div>\n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n</div>\n<!-- /SECTION -->"

/***/ }),

/***/ "./src/app/contato/contato.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contato/contato.component.ts ***!
  \**********************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");





var ContatoComponent = /** @class */ (function () {
    function ContatoComponent(location, postService, fb) {
        this.location = location;
        this.postService = postService;
        this.fb = fb;
        this.form = this.fb.group({
            nome: [null],
            email: [null],
            tel: [null],
            site: [null],
            mensagem: [null]
        });
    }
    ContatoComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.postService.pegarIp();
    };
    ContatoComponent.prototype.enviarContato = function () {
        var dados = {
            nome: this.form.get('nome').value,
            email: this.form.get('email').value,
            tel: this.form.get('tel').value,
            site: this.form.get('site').value,
            mensagem: this.form.get('mensagem').value
        };
        console.log('mensagem enviada => ', dados);
        this.postService.enviarContato(dados)
            .subscribe(function () {
            alert('Sua mensagem foi enviada com sucesso! Obrigado por colaborar com o nosso Portal.');
        }, function (error) {
            console.error(error);
            alert('Erro ao enviar sua mensagem. Tente novamente!');
        });
    };
    ContatoComponent.prototype.goBack = function () {
        this.location.back();
    };
    ContatoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contato',
            template: __webpack_require__(/*! ./contato.component.html */ "./src/app/contato/contato.component.html"),
            styles: [__webpack_require__(/*! ./contato.component.css */ "./src/app/contato/contato.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ContatoComponent);
    return ContatoComponent;
}());



/***/ }),

/***/ "./src/app/denuncie/denuncie.component.css":
/*!*************************************************!*\
  !*** ./src/app/denuncie/denuncie.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbnVuY2llL2RlbnVuY2llLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/denuncie/denuncie.component.html":
/*!**************************************************!*\
  !*** ./src/app/denuncie/denuncie.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  denuncie works!\n</p>\n"

/***/ }),

/***/ "./src/app/denuncie/denuncie.component.ts":
/*!************************************************!*\
  !*** ./src/app/denuncie/denuncie.component.ts ***!
  \************************************************/
/*! exports provided: DenuncieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenuncieComponent", function() { return DenuncieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DenuncieComponent = /** @class */ (function () {
    function DenuncieComponent() {
    }
    DenuncieComponent.prototype.ngOnInit = function () {
    };
    DenuncieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-denuncie',
            template: __webpack_require__(/*! ./denuncie.component.html */ "./src/app/denuncie/denuncie.component.html"),
            styles: [__webpack_require__(/*! ./denuncie.component.css */ "./src/app/denuncie/denuncie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DenuncieComponent);
    return DenuncieComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<footer class=\"fixed-bottom bg-dark text-light text-center\" style=\"padding: 10px;\">\n\n\t\t\t\t\t<div class=\"footer-copyright\">\n\t\t\t\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n&copy; {{dataHj | date: 'yyyy' }} - Portal Pará News - Todos os direitos reservados.\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n\t\t\t\t\t</div>\n\t\t\t\n\t</footer>\n\t<!-- /FOOTER -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.dataHj = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav-top{\n    height: 100px;\n    padding:30px 0;\n    display: block;\n}\n\n.logo{\n    text-align: center;\n    margin: 30px auto;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2LXRvcHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6MzBweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo row\">\n  <div class=\"col-sm-4 text-center\">\n    <small>\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive>Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contato\" routerLinkActive>Contato</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/trabalhe\" routerLinkActive>Trabalhe</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/denuncie\" routerLinkActive>Denuncie</a>\n        </li> -->\n      </ul>\n    </small>\n  </div>\n  <div class=\"col-sm-4 text-center\">\n    <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"logo\"><img\n        src=\"http://www.portalparanews.com.br/images/header-logo.png\" alt=\"\"></a>\n  </div>\n  <div class=\"col-sm-4 text-center\">\n    <input style=\"margin-top: 15px\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Pesquisar notícia\"\n      aria-label=\"Pesquisar\" (keyup)=\"pesquisar($event.target.value)\" [(ngModel)]=\"textoBusca\">\n    <ul class=\"list-group position-absolute\" style=\"top: 50px; right: 0; z-index: 1000;\" *ngIf=\"busca.length\">\n      <li class=\"list-group-item\" *ngFor=\"let b of busca\" (click)=\"limpaPesquisa()\"><a\n          [routerLink]=\"['noticia', b.url]\">{{b.titulo}}</a></li>\n    </ul>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark text-center\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#conteudoNavbarSuportado\"\n    aria-controls=\"conteudoNavbarSuportado\" aria-expanded=\"false\" aria-label=\"Alterna navegação\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"conteudoNavbarSuportado\">\n    <ul class=\"navbar-nav mr-auto text-center\" style=\"margin: auto\">\n      <li class=\"nav-item active\">\n      </li>\n      <li class=\"nav-item\" *ngFor=\"let c of categorias\">\n        <a class=\"nav-link\" *ngIf=\"c.nomeCateg\" [routerLink]=\"['/categoria', c.urlCateg]\"\n          routerLinkActive=\"active\">{{c.nomeCateg}}</a>\n      </li>\n      <!-- <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Ação</a>\n          <a class=\"dropdown-item\" href=\"#\">Outra ação</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Algo mais aqui</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Desativado</a>\n      </li> -->\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categoria.service */ "./src/app/categoria.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(categoriaService, postService) {
        this.categoriaService = categoriaService;
        this.postService = postService;
        this.categorias = [];
        this.busca = [];
        this.textoBusca = '';
        this.subjectPesquisa = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.listarCategorias();
                this.subjectPesquisa.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (valor) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(valor != '')) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.fazerPesquisa(valor)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                this.busca = [];
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    HeaderComponent.prototype.pesquisar = function (termoDaBusca) {
        this.subjectPesquisa.next(termoDaBusca);
    };
    HeaderComponent.prototype.limpaPesquisa = function () {
        this.subjectPesquisa.next('');
        this.textoBusca = '';
    };
    HeaderComponent.prototype.fazerPesquisa = function (valor) {
        var _this = this;
        this.postService.pesquisa(valor)
            .subscribe(function (dados) {
            _this.busca = dados;
            console.log(dados);
        });
    };
    HeaderComponent.prototype.listarCategorias = function () {
        var _this = this;
        this.categoriaService.listar()
            .subscribe(function (categorias) {
            console.log('categorias => ', categorias);
            _this.categorias = categorias;
            console.log('thisCategorias => ', _this.categorias);
        }, function (error) { return console.error(error); });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"], _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SECTION -->\n<div class=\"section\">\n  <!-- container -->\n  <div class=\"container\">\n    <!-- row -->\n    <div id=\"hot-post\" class=\"row hot-post\">\n      <div class=\"col-md-8 hot-post-left\">\n        <!-- post -->\n        <div class=\"post post-thumb\">\n          <a *ngIf=\"destaquesPrincipais[0]?.url\" class=\"post-img\"\n            [routerLink]=\"['/noticia', destaquesPrincipais[0].url]\">\n            <img *ngIf=\"destaquesPrincipais[0]?.img\" class=\"img-fluid\" [src]=\"destaquesPrincipais[0].img\" alt=\"\">\n            <img *ngIf=\"!destaquesPrincipais[0]?.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n          </a>\n          <div class=\"post-body\">\n            <div class=\"post-category\">\n              <a [routerLink]=\"['/categoria', destaquesPrincipais[0].urlCategoria]\"\n                *ngIf=\"destaquesPrincipais[0]?.categoria\">{{destaquesPrincipais[0].categoria}}</a>\n            </div>\n            <h3 class=\"post-title title-lg\"><a *ngIf=\"destaquesPrincipais[0]?.url\"\n                [routerLink]=\"['/noticia', destaquesPrincipais[0].url]\" [innerHTML]=\"destaquesPrincipais[0].titulo\"></a>\n            </h3>\n            <ul class=\"post-meta\">\n              <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n              <li *ngIf=\"destaquesPrincipais[0]?.data\"><span\n                  *ngIf=\"destaquesPrincipais[0]?.cidade\">{{destaquesPrincipais[0].cidade}}/{{destaquesPrincipais[0].uf}}\n                  - </span>{{destaquesPrincipais[0].data | date: 'dd/MM/yyyy'}} {{destaquesPrincipais[0].hora}}</li>\n            </ul>\n          </div>\n        </div>\n        <!-- /post -->\n      </div>\n      <div class=\"col-md-4 hot-post-right\">\n        <!-- post -->\n        <div class=\"post post-thumb\">\n          <a class=\"post-img\" [routerLink]=\"['/noticia', destaquesPrincipais[1].url]\" *ngIf=\"destaquesPrincipais[1]?.url\">\n            <img [src]=\"destaquesPrincipais[1].img\" alt=\"\" class=\"img-fluid\">\n            <img *ngIf=\"!destaquesPrincipais[1]?.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n          </a>\n          <div class=\"post-body\">\n            <div class=\"post-category\">\n              <a [routerLink]=\"['/categoria', destaquesPrincipais[1].urlCategoria]\"\n                *ngIf=\"destaquesPrincipais[1]?.categoria\">{{destaquesPrincipais[1].categoria}}</a>\n            </div>\n            <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', destaquesPrincipais[1].url]\"\n                *ngIf=\"destaquesPrincipais[1]?.titulo\">{{destaquesPrincipais[1].titulo}}</a>\n            </h3>\n            <ul class=\"post-meta\">\n              <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n              <li *ngIf=\"destaquesPrincipais[1]?.data\"><span\n                  *ngIf=\"destaquesPrincipais[1]?.cidade\">{{destaquesPrincipais[1].cidade}}/{{destaquesPrincipais[1].uf}}\n                  - </span>{{destaquesPrincipais[1].data | date: 'dd/MM/yyyy'}} {{destaquesPrincipais[1].hora}}</li>\n            </ul>\n          </div>\n        </div>\n        <!-- /post -->\n\n        <!-- post -->\n        <div class=\"post post-thumb\">\n          <a class=\"post-img\" [routerLink]=\"['/noticia', destaquesPrincipais[2].url]\" *ngIf=\"destaquesPrincipais[2]?.url\">\n            <img [src]=\"destaquesPrincipais[2].img\" class=\"img-fluid\" alt=\"\">\n            <img *ngIf=\"!destaquesPrincipais[2]?.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n          </a>\n          <div class=\"post-body\">\n            <div class=\"post-category\">\n              <a [routerLink]=\"['/categoria', destaquesPrincipais[2].urlCategoria]\"\n                *ngIf=\"destaquesPrincipais[2]?.categoria\">{{destaquesPrincipais[2].categoria}}</a>\n            </div>\n            <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', destaquesPrincipais[2].url]\"\n                *ngIf=\"destaquesPrincipais[2]?.titulo\">{{destaquesPrincipais[2].titulo}}</a></h3>\n            <ul class=\"post-meta\">\n              <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n              <li *ngIf=\"destaquesPrincipais[2]?.data\"><span\n                  *ngIf=\"destaquesPrincipais[2]?.cidade\">{{destaquesPrincipais[0].cidade}}/{{destaquesPrincipais[0].uf}}\n                  - </span>{{destaquesPrincipais[2].data | date: 'dd/MM/yyyy'}} {{destaquesPrincipais[2].hora}}</li>\n            </ul>\n          </div>\n        </div>\n        <!-- /post -->\n      </div>\n    </div>\n    <!-- /row -->\n\n    <!-- row -->\n    <div id=\"hot-post\" class=\"row hot-post\">\n      <div class=\"col-md-3 hot-post-right\" *ngFor=\"let dLateral of destaquesLaterais\">\n        <!-- post -->\n        <div class=\"post post-thumb\">\n          <a class=\"post-img\" [routerLink]=\"['/noticia', dLateral.url]\" *ngIf=\"dLateral?.url\">\n            <img *ngIf=\"dLateral?.img\" [src]=\"dLateral.img\" class=\"img-fluid\" alt=\"\">\n            <img *ngIf=\"!dLateral?.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n          </a>\n          <div class=\"post-body\">\n            <div class=\"post-category\">\n              <a [routerLink]=\"['/categoria', dLateral.urlCategoria]\"\n                *ngIf=\"dLateral?.categoria\">{{dLateral.categoria}}</a>\n            </div>\n            <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', dLateral.url]\"\n                *ngIf=\"dLateral?.titulo\">{{dLateral.titulo}}</a>\n            </h3>\n            <ul class=\"post-meta\">\n              <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n              <li *ngIf=\"dLateral?.data\"><span *ngIf=\"dLateral?.cidade\">{{dLateral.cidade}}/{{dLateral.uf}} -\n                </span>{{dLateral.data | date: 'dd/MM/yyyy'}} {{dLateral.hora}}</li>\n            </ul>\n          </div>\n        </div>\n        <!-- /post -->\n      </div>\n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n  \n  <!-- container -->\n  <div class=\"container\">\n    <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <!-- row -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"section-title\">\n              <h2 class=\"title text-danger\">Pará</h2>\n            </div>\n          </div>\n          <!-- post -->\n          <div class=\"col-md-6\" *ngFor=\"let not of noticPara\">\n            <div class=\"post\">\n              <a class=\"post-img\" [routerLink]=\"['/noticia', not.url]\" *ngIf=\"not?.url\">\n                <img [src]=\"not.img\" alt=\"\" class=\"img-fluid\" *ngIf=\"not?.img\">\n                <img *ngIf=\"!not.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n              </a>\n              <div class=\"post-body\">\n                <div class=\"post-category\">\n                  <a [routerLink]=\"['/categoria', not.urlCategoria]\" *ngIf=\"not?.categoria\">{{not.categoria}}</a>\n                </div>\n                <h3 class=\"post-title\" *ngIf=\"not?.titulo\"><a [routerLink]=\"['/noticia', not.url]\">{{not?.titulo}}</a>\n                </h3>\n                <ul class=\"post-meta\">\n                  <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                  <li *ngIf=\"not?.data\"><span *ngIf=\"not?.cidade\">{{not.cidade}} -\n                    </span>{{not.data | date: 'dd/MM/yyyy'}} {{not.hora}}</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <!-- /post -->\n        </div>\n        <!-- /row -->\n\n        <!-- row -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"section-title\">\n              <h2 class=\"title text-danger\">Nacional</h2>\n            </div>\n          </div>\n          <!-- post -->\n          <ng-container *ngFor=\"let pc of noticNacionais\">\n            <div class=\"col-md-4\">\n              <div class=\"post post-sm\">\n                <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" class=\"img-fluid\" *ngIf=\"pc?.url\">\n                  <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n                  <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n                </a>\n                <div class=\"post-body\">\n                  <div class=\"post-category\">\n                    <a [routerLink]=\"['/categoria', pc.urlCategoria]\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                  </div>\n                  <h3 class=\"post-title title-sm\"><a [routerLink]=\"['/noticia', pc.url]\"\n                      *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n                  <ul class=\"post-meta\">\n                    <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                    <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                      </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <!-- /post -->\n        </div>\n        <!-- /row -->\n\n        <!-- row -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"section-title\">\n              <h2 class=\"title text-danger\">Polícia</h2>\n            </div>\n          </div>\n          <!-- post -->\n          <ng-container *ngFor=\"let pc of policia\">\n            <div class=\"col-md-4\">\n              <div class=\"post post-sm\">\n                <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n                  <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n                  <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n                </a>\n                <div class=\"post-body\">\n                  <!-- <div class=\"post-category\">\n                          <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                        </div> -->\n                  <h3 class=\"post-title title-sm\"><a [routerLink]=\"['/noticia', pc.url]\"\n                      *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n                  <ul class=\"post-meta\">\n                    <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                    <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                      </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <!-- /post -->\n        </div>\n        <!-- /row -->\n\n        <!-- row -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"section-title\">\n              <h2 class=\"title text-danger\">Política</h2>\n            </div>\n          </div>\n          <!-- post -->\n          <ng-container *ngFor=\"let pc of politica\">\n            <div class=\"col-md-4\">\n              <div class=\"post post-sm\">\n                <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n                  <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n                  <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n                </a>\n                <div class=\"post-body\">\n                  <!-- <div class=\"post-category\">\n                        <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                      </div> -->\n                  <h3 class=\"post-title title-sm\"><a [routerLink]=\"['/noticia', pc.url]\"\n                      *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n                  <ul class=\"post-meta\">\n                    <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                    <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                      </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <!-- /post -->\n        </div>\n        <!-- /row -->\n\n        <!-- row -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"section-title\">\n              <h2 class=\"title text-danger\">Educação</h2>\n            </div>\n          </div>\n          <!-- post -->\n          <ng-container *ngFor=\"let pc of educacao\">\n            <div class=\"col-md-4\">\n              <div class=\"post post-sm\">\n                <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n                  <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n                  <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n                </a>\n                <div class=\"post-body\">\n                  <!-- <div class=\"post-category\">\n                      <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                    </div> -->\n                  <h3 class=\"post-title title-sm\"><a [routerLink]=\"['/noticia', pc.url]\"\n                      *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n                  <ul class=\"post-meta\">\n                    <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                    <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                      </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <!-- /post -->\n        </div>\n        <!-- /row -->\n\n        <!-- row -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"section-title\">\n              <h2 class=\"title text-danger\">Saúde</h2>\n            </div>\n          </div>\n          <!-- post -->\n          <ng-container *ngFor=\"let pc of saude\">\n            <div class=\"col-md-4\">\n              <div class=\"post post-sm\">\n                <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n                  <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n                  <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n                </a>\n                <div class=\"post-body\">\n                  <!-- <div class=\"post-category\">\n                      <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                    </div> -->\n                  <h3 class=\"post-title title-sm\"><a [routerLink]=\"['/noticia', pc.url]\"\n                      *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n                  <ul class=\"post-meta\">\n                    <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                    <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                      </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <!-- /post -->\n        </div>\n        <!-- /row -->\n\n        <!-- row -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"section-title\">\n              <h2 class=\"title text-danger\">Esporte</h2>\n            </div>\n          </div>\n          <!-- post -->\n          <ng-container *ngFor=\"let pc of esporte\">\n            <div class=\"col-md-4\">\n              <div class=\"post post-sm\">\n                <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n                  <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n                  <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n\n                </a>\n                <div class=\"post-body\">\n                  <!-- <div class=\"post-category\">\n                        <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                      </div> -->\n                  <h3 class=\"post-title title-sm\"><a [routerLink]=\"['/noticia', pc.url]\"\n                      *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n                  <ul class=\"post-meta\">\n                    <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                    <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                      </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <!-- /post -->\n        </div>\n        <!-- /row -->\n      </div>\n      <div class=\"col-md-4\">\n        <app-lado-direito></app-lado-direito>\n\n        <!-- newsletter widget -->\n        <!-- <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title text-danger\">Newsletter</h2>\n          </div>\n          <div class=\"newsletter-widget\">\n            <form>\n              <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>\n              <input class=\"input\" name=\"newsletter\" placeholder=\"Enter Your Email\">\n              <button class=\"primary-button\">Subscribe</button>\n            </form>\n          </div>\n        </div> -->\n        <!-- /newsletter widget -->\n\n        <!-- post widget -->\n        <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title text-danger\">Atualidades</h2>\n          </div>\n          <!-- post -->\n          <div class=\"post post-widget\" *ngFor=\"let pc of atualidades\">\n            <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n              <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n              <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n\n            </a>\n            <div class=\"post-body\">\n              <!-- <div class=\"post-category\">\n                <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n              </div> -->\n              <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n              <ul class=\"post-meta\">\n                <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                  </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n              </ul>\n            </div>\n          </div>\n          <!-- /post -->\n        </div>\n        <!-- /post widget -->\n\n        <!-- post widget -->\n        <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title text-danger\">Cultura</h2>\n          </div>\n          <!-- post -->\n          <div class=\"post post-widget\" *ngFor=\"let pc of cultura\">\n            <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n              <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n              <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n            </a>\n            <div class=\"post-body\">\n              <!-- <div class=\"post-category\">\n                <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n              </div> -->\n              <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n              <ul class=\"post-meta\">\n                <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                  </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n              </ul>\n            </div>\n          </div>\n          <!-- /post -->\n        </div>\n        <!-- /post widget -->\n\n        <!-- post widget -->\n        <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title text-danger\">Loterias</h2>\n          </div>\n          <!-- post -->\n          <div class=\"post post-widget\" *ngFor=\"let pc of loterias\">\n            <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n              <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n              <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n            </a>\n            <div class=\"post-body\">\n              <!-- <div class=\"post-category\">\n                  <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                </div> -->\n              <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n              <ul class=\"post-meta\">\n                <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                  </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n              </ul>\n            </div>\n          </div>\n          <!-- /post -->\n        </div>\n        <!-- /post widget -->\n\n        <!-- post widget -->\n        <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title text-danger\">Jogos</h2>\n          </div>\n          <!-- post -->\n          <div class=\"post post-widget\" *ngFor=\"let pc of jogos\">\n            <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n              <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n              <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n            </a>\n            <div class=\"post-body\">\n              <!-- <div class=\"post-category\">\n                  <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                </div> -->\n              <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n              <ul class=\"post-meta\">\n                <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                  </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n              </ul>\n            </div>\n          </div>\n          <!-- /post -->\n        </div>\n        <!-- /post widget -->\n\n        <!-- post widget -->\n        <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title text-danger\">Horóscopo</h2>\n          </div>\n          <!-- post -->\n          <div class=\"post post-widget\" *ngFor=\"let pc of horoscopo\">\n            <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n              <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n              <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n            </a>\n            <div class=\"post-body\">\n              <!-- <div class=\"post-category\">\n                  <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                </div> -->\n              <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n              <ul class=\"post-meta\">\n                <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                  </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n              </ul>\n            </div>\n          </div>\n          <!-- /post -->\n        </div>\n        <!-- /post widget -->\n\n        <!-- post widget -->\n        <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title text-danger\">Agenda Cultural</h2>\n          </div>\n          <!-- post -->\n          <div class=\"post post-widget\" *ngFor=\"let pc of agendaCultural\">\n            <a class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.url\">\n              <img [src]=\"pc.img\" class=\"img-fluid\" alt=\"\" *ngIf=\"pc?.img\">\n              <img *ngIf=\"!pc.img\" class=\"img-fluid\" src=\"/assets/img/sem-imagem.jpg\" alt=\"\">\n            </a>\n            <div class=\"post-body\">\n              <!-- <div class=\"post-category\">\n                  <a href=\"category.html\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n                </div> -->\n              <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a></h3>\n              <ul class=\"post-meta\">\n                <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n                  </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n              </ul>\n            </div>\n          </div>\n          <!-- /post -->\n        </div>\n        <!-- /post widget -->\n\n        <!-- category widget -->\n        <!-- <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title text-danger\">Categorias</h2>\n          </div>\n          <div class=\"category-widget\">\n            <ul>\n              <li *ngFor=\"let cat of categorias\"><a [routerLink]=\"['/categoria', cat.urlCateg]\">{{cat.nomeCateg}}</a></li>\n            </ul>\n          </div>\n        </div> -->\n        <!-- /category widget -->\n      </div>\n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n</div>\n<!-- /SECTION -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categoria.service */ "./src/app/categoria.service.ts");
/* harmony import */ var _anuncio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../anuncio.service */ "./src/app/anuncio.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService, categoriaService, anuncioService) {
        this.postService = postService;
        this.categoriaService = categoriaService;
        this.anuncioService = anuncioService;
        this.posts = [];
        this.categorias = [];
        this.destaquesPrincipais = [];
        this.destaquesLaterais = [];
        this.postsPopulares = [];
        this.maisCurtidas = [];
        this.maisComentadas = [];
        this.noticPara = [];
        this.noticNacionais = [];
        this.atualidades = [];
        this.esporte = [];
        this.educacao = [];
        this.saude = [];
        this.cultura = [];
        this.policia = [];
        this.politica = [];
        this.loterias = [];
        this.jogos = [];
        this.horoscopo = [];
        this.agendaCultural = [];
        this.urlImg = 'http://www.portalparanews.com.br/imgBlog';
        this.idsDestaques = [];
        this.teste = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        // this.listarPosts()
        this.listarDestaquesPrincipais();
        this.listarDestaquesLaterais();
        this.listarCategorias();
    };
    HomeComponent.prototype.forImg = function (param, posts) {
        for (var p = 0; p < param.length; p++) {
            param[p].img = this.urlImg + "/" + param[p].img;
            param[p].thumb = this.urlImg + "/" + param[p].thumb;
            this.idsDestaques.push(posts[p].id);
        }
    };
    HomeComponent.prototype.listarCategorias = function () {
        var _this = this;
        this.categoriaService.listar()
            .subscribe(function (categorias) { return _this.categorias = categorias; }, function (error) { return console.error(error); });
    };
    // public listarPosts() {
    //   this.postService.listarPosts()
    //     .subscribe(
    //       posts => {
    //         this.posts = posts
    //         this.forImg(this.posts)
    //         console.log(posts)
    //       }
    //     )
    // }
    HomeComponent.prototype.listarDestaquesPrincipais = function () {
        var _this = this;
        this.postService.listarDestaquesPrincipais()
            .subscribe(function (posts) {
            _this.destaquesPrincipais = posts;
            _this.forImg(_this.destaquesPrincipais, posts);
            console.log('Destaques principais => ', posts);
            console.log("IDS Destaques => " + _this.idsDestaques);
        });
    };
    HomeComponent.prototype.listarDestaquesLaterais = function () {
        var _this = this;
        var categ = '';
        this.postService.listarDestaquesLaterais()
            .subscribe(function (posts) {
            _this.destaquesLaterais = posts;
            _this.forImg(_this.destaquesLaterais, posts);
            console.log('Destaques laterais => ', posts);
            console.log("IDS Destaques 2 => " + _this.idsDestaques);
            _this.listarNoticasPara();
        });
    };
    HomeComponent.prototype.listarNoticasPara = function () {
        var _this = this;
        this.postService.listarNoticiasPara(this.idsDestaques)
            .subscribe(function (posts) {
            _this.noticPara = posts;
            _this.forImg(_this.noticPara, posts);
            console.log('Noticias Para => ', posts);
            _this.listarNoticiasNacionais();
        });
    };
    HomeComponent.prototype.listarNoticiasNacionais = function () {
        var _this = this;
        console.log('Mandando destaques => ', this.idsDestaques);
        this.postService.listarNoticiasNacionais(this.idsDestaques)
            .subscribe(function (posts) {
            _this.noticNacionais = posts;
            _this.forImg(_this.noticNacionais, posts);
            console.log('Noticias Nacionais => ', posts);
            _this.listarPolicia();
            _this.listarPolitica();
            _this.listarEducacao();
            _this.listarSaude();
            _this.listarEsporte();
            _this.listarAtualidades();
            _this.listarCultura();
            _this.listarLoterias();
            _this.listarJogos();
            _this.listarHoroscopo();
            _this.listarAgendaCultural();
        });
    };
    HomeComponent.prototype.listarAtualidades = function () {
        var _this = this;
        var categ = 'Atualidades';
        this.postService.porCategoria(this.idsDestaques, categ, 3)
            .subscribe(function (posts) {
            _this.atualidades = posts;
            _this.forImg(_this.atualidades, posts);
            console.log('Atualidades => ', posts);
        });
    };
    HomeComponent.prototype.listarEsporte = function () {
        var _this = this;
        var categ = 'Esporte';
        this.postService.porCategoria(this.idsDestaques, categ, 3)
            .subscribe(function (posts) {
            _this.esporte = posts;
            _this.forImg(_this.esporte, posts);
            console.log('Esportes => ', posts);
        });
    };
    HomeComponent.prototype.listarEducacao = function () {
        var _this = this;
        var categ = 'Educação';
        this.postService.porCategoria(this.idsDestaques, categ, 3)
            .subscribe(function (posts) {
            _this.educacao = posts;
            _this.forImg(_this.educacao, posts);
            console.log('Educacao => ', posts);
        });
    };
    HomeComponent.prototype.listarSaude = function () {
        var _this = this;
        var categ = 'Saúde';
        this.postService.porCategoria(this.idsDestaques, categ, 3)
            .subscribe(function (posts) {
            _this.saude = posts;
            _this.forImg(_this.saude, posts);
            console.log('Saúde => ', posts);
        });
    };
    HomeComponent.prototype.listarCultura = function () {
        var _this = this;
        var categ = 'Cultura';
        this.postService.porCategoria(this.idsDestaques, categ, 3)
            .subscribe(function (posts) {
            _this.cultura = posts;
            _this.forImg(_this.cultura, posts);
            console.log('Cultura => ', posts);
        });
    };
    HomeComponent.prototype.listarPolicia = function () {
        var _this = this;
        var categ = 'Polícia';
        this.postService.porCategoria(this.idsDestaques, categ, 3)
            .subscribe(function (posts) {
            _this.policia = posts;
            _this.forImg(_this.policia, posts);
            console.log('Política => ', posts);
        });
    };
    HomeComponent.prototype.listarPolitica = function () {
        var _this = this;
        var categ = 'Política';
        this.postService.porCategoria(this.idsDestaques, categ, 3)
            .subscribe(function (posts) {
            _this.politica = posts;
            _this.forImg(_this.politica, posts);
            console.log('Política => ', posts);
        });
    };
    HomeComponent.prototype.listarLoterias = function () {
        var _this = this;
        var categ = 'Loterias';
        this.postService.porCategoria(this.idsDestaques, categ, 1)
            .subscribe(function (posts) {
            _this.loterias = posts;
            _this.forImg(_this.loterias, posts);
            console.log('Atualidades => ', posts);
        });
    };
    HomeComponent.prototype.listarJogos = function () {
        var _this = this;
        var categ = 'Jogos';
        this.postService.porCategoria(this.idsDestaques, categ, 1)
            .subscribe(function (posts) {
            _this.jogos = posts;
            _this.forImg(_this.jogos, posts);
            console.log('Atualidades => ', posts);
        });
    };
    HomeComponent.prototype.listarHoroscopo = function () {
        var _this = this;
        var categ = 'Horóscopo';
        this.postService.porCategoria(this.idsDestaques, categ, 1)
            .subscribe(function (posts) {
            _this.horoscopo = posts;
            _this.forImg(_this.horoscopo, posts);
            console.log('Atualidades => ', posts);
        });
    };
    HomeComponent.prototype.listarAgendaCultural = function () {
        var _this = this;
        var categ = 'Agenda Cultural';
        this.postService.porCategoria(this.idsDestaques, categ, 1)
            .subscribe(function (posts) {
            _this.agendaCultural = posts;
            _this.forImg(_this.agendaCultural, posts);
            console.log('Atualidades => ', posts);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"],
            _anuncio_service__WEBPACK_IMPORTED_MODULE_4__["AnuncioService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lado-direito/lado-direito.component.css":
/*!*********************************************************!*\
  !*** ./src/app/lado-direito/lado-direito.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhZG8tZGlyZWl0by9sYWRvLWRpcmVpdG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/lado-direito/lado-direito.component.html":
/*!**********************************************************!*\
  !*** ./src/app/lado-direito/lado-direito.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- social widget -->\n<!-- <div class=\"aside-widget\">\n    <div class=\"section-title\">\n      <h2 class=\"title\">Social Media</h2>\n    </div>\n    <div class=\"social-widget\">\n      <ul>\n        <li>\n          <a href=\"#\" class=\"social-facebook\">\n            <i class=\"fa fa-facebook\"></i>\n            <span>21.2K<br>Followers</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"social-twitter\">\n            <i class=\"fa fa-twitter\"></i>\n            <span>10.2K<br>Followers</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"social-google-plus\">\n            <i class=\"fa fa-google-plus\"></i>\n            <span>5K<br>Followers</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div> -->\n<!-- /social widget -->\n\n<!-- post widget -->\n<div class=\"aside-widget\">\n  <div class=\"section-title\">\n    <h2 class=\"title text-danger\">Mais Acessadas</h2>\n  </div>\n  <!-- post -->\n  <div class=\"post post-widget\" *ngFor=\"let pc of postService.pPopulares\">\n    <a (click)=\"top()\" class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.img\"><img [src]=\"pc.img\"\n        alt=\"\"></a>\n    <div class=\"post-body\">\n      <div class=\"post-category\">\n        <a (click)=\"top()\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n      </div>\n      <h3 class=\"post-title\"><a (click)=\"top()\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a>\n      </h3>\n      <ul class=\"post-meta\">\n        <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n        <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n          </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n      </ul>\n      <ul class=\"post-meta\">\n        <li class=\"text-success\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{pc.visitas}}</li>\n      </ul>\n    </div>\n  </div>\n  <!-- /post -->\n</div>\n<!-- /post widget -->\n\n<!-- post widget -->\n<div class=\"aside-widget\">\n  <div class=\"section-title\">\n    <h2 class=\"title text-danger\">Mais Curtidas</h2>\n  </div>\n  <!-- post -->\n  <div class=\"post post-widget\" *ngFor=\"let pc of postService.mCurtidas\">\n    <a (click)=\"top()\" class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.img\"><img [src]=\"pc.img\"\n        alt=\"\"></a>\n    <div class=\"post-body\">\n      <div class=\"post-category\">\n        <a (click)=\"top()\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n      </div>\n      <h3 class=\"post-title\"><a (click)=\"top()\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a>\n      </h3>\n      <ul class=\"post-meta\">\n        <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n        <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n          </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n      </ul>\n      <ul class=\"post-meta\">\n        <li class=\"text-danger\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i> {{pc.totalCurtida}}</li>\n      </ul>\n    </div>\n  </div>\n  <!-- /post -->\n</div>\n<!-- /post widget -->\n\n<!-- post widget -->\n<div class=\"aside-widget\" *ngIf=\"postService.mComentadas.length\">\n  <div class=\"section-title\">\n    <h2 class=\"title text-danger\">Mais Comentadas</h2>\n  </div>\n  <!-- post -->\n  <div class=\"post post-widget\" *ngFor=\"let pc of postService.mComentadas\">\n    <a (click)=\"top()\" class=\"post-img\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.img\"><img [src]=\"pc.img\"\n        alt=\"\"></a>\n    <div class=\"post-body\">\n      <div class=\"post-category\">\n        <a (click)=\"top()\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.categoria\">{{pc.categoria}}</a>\n      </div>\n      <h3 class=\"post-title\"><a (click)=\"top()\" [routerLink]=\"['/noticia', pc.url]\" *ngIf=\"pc?.titulo\">{{pc.titulo}}</a>\n      </h3>\n      <ul class=\"post-meta\">\n        <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n        <li *ngIf=\"pc?.data\"><span *ngIf=\"pc?.cidade\">{{pc.cidade}} -\n          </span>{{pc.data | date: 'dd/MM/yyyy'}} {{pc.hora}}</li>\n      </ul>\n      <ul class=\"post-meta\">\n        <li class=\"text-primary\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i> {{pc.totalComentario}}</li>\n      </ul>\n    </div>\n  </div>\n  <!-- /post -->\n</div>\n<!-- /post widget -->\n\n<!-- ad widget-->\n<div class=\"aside-widget text-center bg-light\" style=\"width: 100%\">\n    <a *ngIf=\"anuncio?.link\" [href]=\"anuncio.link\" target=\"_blank\" style=\"display: inline-block;margin: auto;\">\n      <img *ngIf=\"anuncio?.img\" class=\"img-responsive\" [src]=\"anuncio.img\" alt=\"\">\n    </a>\n  </div>\n  <!-- /ad widget -->"

/***/ }),

/***/ "./src/app/lado-direito/lado-direito.component.ts":
/*!********************************************************!*\
  !*** ./src/app/lado-direito/lado-direito.component.ts ***!
  \********************************************************/
/*! exports provided: LadoDireitoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LadoDireitoComponent", function() { return LadoDireitoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _anuncio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../anuncio.service */ "./src/app/anuncio.service.ts");




var LadoDireitoComponent = /** @class */ (function () {
    function LadoDireitoComponent(postService, anuncioService) {
        this.postService = postService;
        this.anuncioService = anuncioService;
        this.urlImg = 'http://www.portalparanews.com.br/imgBlog';
    }
    LadoDireitoComponent.prototype.ngOnInit = function () {
        this.postService.postsPopulares();
        this.postService.maisCurtidas();
        this.postService.maisComentadas();
        this.anuncioLateral();
    };
    LadoDireitoComponent.prototype.anuncioLateral = function () {
        var _this = this;
        this.anuncioService.listar()
            .subscribe(function (anuncio) {
            _this.anuncio = anuncio[0];
            _this.anuncio.img = _this.urlImg + "/" + _this.anuncio.img;
            console.log(_this.anuncio);
        }, function (error) { return console.error(error); });
    };
    LadoDireitoComponent.prototype.top = function () {
        window.scroll(0, 0);
    };
    LadoDireitoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lado-direito',
            template: __webpack_require__(/*! ./lado-direito.component.html */ "./src/app/lado-direito/lado-direito.component.html"),
            styles: [__webpack_require__(/*! ./lado-direito.component.css */ "./src/app/lado-direito/lado-direito.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _anuncio_service__WEBPACK_IMPORTED_MODULE_3__["AnuncioService"]])
    ], LadoDireitoComponent);
    return LadoDireitoComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"gn-menu\" class=\"gn-menu-main\">\n  <li class=\"gn-trigger\">\n    <a class=\"gn-icon gn-icon-menu\"><span>Menu</span></a>\n    <nav class=\"gn-menu-wrapper\">\n      <div class=\"gn-scroller\">\n        <ul class=\"gn-menu\">\n          <li class=\"gn-search-item\">\n            <input placeholder=\"Search\" type=\"search\" class=\"gn-search\">\n            <a class=\"gn-icon gn-icon-search\"><span>Search</span></a>\n          </li>\n          <li>\n            <a class=\"gn-icon gn-icon-download\">Downloads</a>\n            <ul class=\"gn-submenu\">\n              <li><a class=\"gn-icon gn-icon-illustrator\">Vector Illustrations</a></li>\n              <li><a class=\"gn-icon gn-icon-photoshop\">Photoshop files</a></li>\n            </ul>\n          </li>\n          <li><a class=\"gn-icon gn-icon-cog\">Settings</a></li>\n          <li><a class=\"gn-icon gn-icon-help\">Help</a></li>\n          <li>\n            <a class=\"gn-icon gn-icon-archive\">Archives</a>\n            <ul class=\"gn-submenu\">\n              <li><a class=\"gn-icon gn-icon-article\">Articles</a></li>\n              <li><a class=\"gn-icon gn-icon-pictures\">Images</a></li>\n              <li><a class=\"gn-icon gn-icon-videos\">Videos</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div><!-- /gn-scroller -->\n    </nav>\n  </li>\n  <li><a href=\"http://tympanus.net/codrops\">Codrops</a></li>\n  <li><a class=\"codrops-icon codrops-icon-prev\" href=\"http://tympanus.net/Development/HeaderEffects/\"><span>Previous\n        Demo</span></a></li>\n  <li><a class=\"codrops-icon codrops-icon-drop\" href=\"http://tympanus.net/codrops/?p=16030\"><span>Back to the Codrops\n        Article</span></a></li>\n</ul>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/noticia/noticia.component.css":
/*!***********************************************!*\
  !*** ./src/app/noticia/noticia.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    max-width: 100%;\n    text-align: center;\n    margin: auto;\n}\n\n.section-row{\n    overflow: hidden;\n}\n\n.section-row img{\n    max-width:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNpYS9ub3RpY2lhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbm90aWNpYS9ub3RpY2lhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5zZWN0aW9uLXJvd3tcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VjdGlvbi1yb3cgaW1ne1xuICAgIG1heC13aWR0aDoxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/noticia/noticia.component.html":
/*!************************************************!*\
  !*** ./src/app/noticia/noticia.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta property=\"og:url\" content=\"{{urlAtual}}\" />\n<meta property=\"og:type\" content=\"website\" />\n<meta property=\"og:title\" content=\"Portal Pará News\" />\n<meta property=\"og:description\" content=\"{{post[0].titulo}}\" />\n<meta property=\"og:image\" content=\"{{post[0].thumb}}\" />\n\n<script>(function (d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = \"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0\";\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'facebook-jssdk'));</script>\n\n<!-- section -->\n<div class=\"section\">\n\n  <!-- PAGE HEADER -->\n  <div id=\"post-header\" class=\"page-header\">\n    <div *ngIf=\"post[0]?.img\" class=\"page-header-bg\"\n      [ngStyle]=\"{'background-image': 'url(' + post[0].img + ')', 'background-position': positionBg}\"\n      data-stellar-background-ratio=\"0.5\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <div class=\"post-category\">\n            <a href=\"category.html\" *ngIf=\"post[0]?.categoria\">{{post[0].categoria}}</a>\n          </div>\n          <h1 *ngIf=\"post[0]?.titulo\">{{post[0].titulo}}</h1>\n          <ul class=\"post-meta\">\n            <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n            <li *ngIf=\"post[0]?.data\"><span *ngIf=\"post[0]?.cidade\">{{post[0]?.cidade}} -\n              </span>{{post[0]?.data | date: 'dd/MM/yyyy'}} {{post[0]?.hora}}</li>\n          </ul>\n          <ul class=\"post-meta\">\n            <li><i class=\"fa fa-eye\"></i> {{post[0]?.visitas}}</li>\n            <li *ngIf=\"postService?.totalComentarios\"><i class=\"fa fa-comments\"></i> {{postService.totalComentarios}}\n            </li>\n            <li *ngIf=\"postService?.totalCurtidas\"><i class=\"fa fa-heart\"></i> {{postService.totalCurtidas}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /PAGE HEADER -->\n\n  <!-- container -->\n  <div class=\"container\" style=\"margin-top: 20px\">\n    <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <!-- post share -->\n        <div class=\"section-row\">\n          <div class=\"post-share\">\n            <a style=\"cursor: pointer\" *ngIf=\"post[0]?.totalCurtida\" class=\"social-pinterest text-white\"\n              (click)=\"curtir()\"><i class=\"fa fa-heart\"> {{postService.totalCurtidas}}</i></a>\n            <a style=\"cursor: pointer\" href=\"https://api.whatsapp.com/send?text={{post[0].titulo}} {{urlAtual}}\"\n              class=\"bg-success text-white\" target=\"_blank\"><i class=\"fa fa-whatsapp\"></i></a>\n            <a data-href=\"{{urlAtual}}\" data-layout=\"button_count\" class=\"social-facebook\"><i class=\"fa fa-facebook\"></i></a>\n            <a href=\"#\" class=\"social-twitter\"><i class=\"fa fa-twitter\"></i></a>\n            <!-- <a href=\"#\" class=\"social-pinterest\"><i class=\"fa fa-pinterest\"></i><span>Pin</span></a> -->\n            <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n\n            <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-lg btn-default text-right\">Voltar</button>\n          </div>\n        </div>\n        <!-- /post share -->\n\n        <!-- post content -->\n        <div class=\"section-row\" *ngIf=\"post[0]?.conteudo\">\n          <p [innerHTML]=\"post[0].conteudo | keepHtml\"></p>\n        </div>\n        <!-- /post content -->\n\n        <!-- post tags -->\n        <!-- <div class=\"section-row\">\n          <div class=\"post-tags\">\n            <ul>\n              <li>TAGS:</li>\n              <li><a href=\"#\">Social</a></li>\n              <li><a href=\"#\">Lifestyle</a></li>\n              <li><a href=\"#\">Fashion</a></li>\n              <li><a href=\"#\">Health</a></li>\n            </ul>\n          </div>\n        </div> -->\n        <!-- /post tags -->\n\n        <!-- post nav -->\n        <!-- <div class=\"section-row\">\n          <div class=\"post-nav\">\n            <div class=\"prev-post\">\n              <a class=\"post-img\" href=\"blog-post.html\"><img src=\"./img/widget-8.jpg\" alt=\"\"></a>\n              <h3 class=\"post-title\"><a href=\"#\">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>\n              <span>Previous post</span>\n            </div>\n\n            <div class=\"next-post\">\n              <a class=\"post-img\" href=\"blog-post.html\"><img src=\"./img/widget-10.jpg\" alt=\"\"></a>\n              <h3 class=\"post-title\"><a href=\"#\">Postea senserit id eos, vivendo periculis ei qui</a></h3>\n              <span>Next post</span>\n            </div>\n          </div>\n        </div> -->\n        <!-- /post nav  -->\n\n        <!-- post author -->\n        <!-- <div class=\"section-row\">\n          <div class=\"section-title\">\n            <h3 class=\"title\">About <a href=\"author.html\">John Doe</a></h3>\n          </div>\n          <div class=\"author media\">\n            <div class=\"media-left\">\n              <a href=\"author.html\">\n                <img class=\"author-img media-object\" src=\"./img/avatar-1.jpg\" alt=\"\">\n              </a>\n            </div>\n            <div class=\"media-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat.</p>\n              <ul class=\"author-social\">\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n        </div> -->\n        <!-- /post author -->\n\n        <!-- /related post -->\n        <div>\n          <div class=\"section-title\">\n            <h3 class=\"title\">Notícias Relacionadas</h3>\n          </div>\n          <div class=\"row\">\n            <!-- post -->\n            <div class=\"col-md-4\" *ngFor=\"let r of relacionados\">\n              <div class=\"post post-sm\">\n                <a class=\"post-img\" [routerLink]=\"['/noticia', r.url]\" *ngIf=\"r?.img\" (click)=\"top()\"><img [src]=\"r.img\"\n                    alt=\"\"></a>\n                <div class=\"post-body\">\n                  <div class=\"post-category\">\n                    <a [routerLink]=\"['/noticia', r.url]\" *ngIf=\"r?.categoria\" (click)=\"top()\">{{r.categoria}}</a>\n                  </div>\n                  <h3 class=\"post-title\"><a [routerLink]=\"['/noticia', r.url]\" *ngIf=\"r?.titulo\"\n                      (click)=\"top()\">{{r.titulo}}</a></h3>\n                  <ul class=\"post-meta\">\n                    <!-- <li><a href=\"author.html\">John Doe</a></li> -->\n                    <li *ngIf=\"r?.data\"><span *ngIf=\"r?.cidade\">{{r.cidade}} -\n                      </span>{{r.data | date: 'dd/MM/yyyy'}} {{r.hora}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <!-- /post -->\n          </div>\n        </div>\n        <!-- /related post -->\n\n        <!-- post comments -->\n        <div class=\"section-row\" *ngIf=\"comentarios?.length\">\n          <div class=\"section-title\">\n            <h3 class=\"title\">{{comentarios.length}} Comentário<span *ngIf=\"comentarios?.length > 1\">s</span></h3>\n          </div>\n          <div class=\"post-comments\">\n            <!-- comment -->\n            <div class=\"media\" *ngFor=\"let c of comentarios\">\n              <!-- <div class=\"media-left\">\n                <img class=\"media-object\" src=\"./img/avatar-2.jpg\" alt=\"\">\n              </div> -->\n              <div class=\"media-body\">\n                <div class=\"media-heading\">\n                  <h4 *ngIf=\"c?.nome\">{{c.nome}}</h4>\n                  <h4 *ngIf=\"!c?.nome\">Anônimo</h4>\n                  <span class=\"time\">{{c.data | date: 'dd/MM/yyyy'}} {{c.hora}}</span>\n                </div>\n                <p *ngIf=\"c?.comentario\">{{c.comentario}}</p>\n                <!-- <a href=\"#\" class=\"reply\">Reply</a> -->\n                <!-- comment -->\n                <!-- <div class=\"media media-author\">\n                  <div class=\"media-left\">\n                    <img class=\"media-object\" src=\"./img/avatar-1.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"media-body\">\n                    <div class=\"media-heading\">\n                      <h4>John Doe</h4>\n                      <span class=\"time\">5 min ago</span>\n                    </div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                      nisi ut aliquip ex ea commodo consequat.</p>\n                    <a href=\"#\" class=\"reply\">Reply</a>\n                  </div>\n                </div> -->\n                <!-- /comment -->\n              </div>\n            </div>\n            <!-- /comment -->\n          </div>\n        </div>\n        <!-- /post comments -->\n\n        <!-- post reply -->\n        <div class=\"section-row\">\n          <div class=\"section-title\">\n            <h3 class=\"title\">Deixe seu comentário</h3>\n          </div>\n          <form [formGroup]=\"form\" (ngSubmit)=\"enviarComentario()\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <textarea class=\"input\" placeholder=\"Comentário\" formControlName=\"comentario\"></textarea>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <input class=\"input\" type=\"text\" placeholder=\"Nome\" formControlName=\"nome\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <input class=\"input\" type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <input class=\"input\" type=\"text\" placeholder=\"Site\" formControlName=\"site\">\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <button class=\"primary-button\" type=\"submit\">Enviar</button>\n              </div>\n\n            </div>\n          </form>\n        </div>\n        <!-- /post reply -->\n      </div>\n      <div class=\"col-md-4\">\n        <!-- ad widget -->\n        <!-- <div class=\"aside-widget text-center\">\n          <a href=\"#\" style=\"display: inline-block;margin: auto;\">\n            <img class=\"img-responsive\" src=\"/assets/img/ad-3.jpg\" alt=\"\">\n          </a>\n        </div> -->\n        <!-- /ad widget -->\n\n        <!-- social widget -->\n        <!-- <div class=\"aside-widget\">\n          <div class=\"section-title\">\n            <h2 class=\"title\">Social Media</h2>\n          </div>\n          <div class=\"social-widget\">\n            <ul>\n              <li>\n                <a href=\"#\" class=\"social-facebook\">\n                  <i class=\"fa fa-facebook\"></i>\n                  <span>21.2K<br>Followers</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\" class=\"social-twitter\">\n                  <i class=\"fa fa-twitter\"></i>\n                  <span>10.2K<br>Followers</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\" class=\"social-google-plus\">\n                  <i class=\"fa fa-google-plus\"></i>\n                  <span>5K<br>Followers</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div> -->\n        <!-- /social widget -->\n\n        <app-lado-direito></app-lado-direito>\n\n        <!-- Ad widget -->\n        <!-- <div class=\"aside-widget text-center\">\n          <a href=\"#\" style=\"display: inline-block;margin: auto;\">\n            <img class=\"img-responsive\" src=\"assets/img/ad-1.jpg\" alt=\"\">\n          </a>\n        </div> -->\n        <!-- /Ad widget -->\n      </div>\n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n</div>\n<!-- /SECTION -->"

/***/ }),

/***/ "./src/app/noticia/noticia.component.ts":
/*!**********************************************!*\
  !*** ./src/app/noticia/noticia.component.ts ***!
  \**********************************************/
/*! exports provided: NoticiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaComponent", function() { return NoticiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var NoticiaComponent = /** @class */ (function () {
    function NoticiaComponent(route, location, postService, fb) {
        this.route = route;
        this.location = location;
        this.postService = postService;
        this.fb = fb;
        this.post = [];
        this.comentarios = [];
        this.relacionados = [];
        this.urlImg = 'http://www.portalparanews.com.br/imgBlog';
        this.urlAtual = 'http://www.portalparanews.com.br/noticia';
        this.positionBg = 'center center';
        this.form = this.fb.group({
            nome: [null],
            email: [null],
            site: [null],
            comentario: [null]
        });
    }
    NoticiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.postService.byUrl(params['url']); }))
            .subscribe(function (post) {
            _this.urlAtual = _this.urlAtual + "/" + post[0].url;
            console.log('urlAtual ', _this.urlAtual);
            _this.setPost(post);
            _this.post[0].img = _this.urlImg + "/" + _this.post[0].img;
            _this.post[0].thumb = _this.urlImg + "/" + _this.post[0].thumb;
            console.log('Post: ', post);
            _this.comentariosPost();
            _this.listarRelacionados(_this.post[0].url, _this.post[0].urlCategoria);
            _this.postService.totalCurtidasPost(_this.post[0].url);
            _this.postService.totalComentariosPost(_this.post[0].url);
        }, function () { return alert('Ocorreu um erro no servidor. Tente mais tarde!'); });
        this.postService.postsPopulares();
        this.postService.maisCurtidas();
        this.postService.maisComentadas();
        this.postService.pegarIp();
    };
    NoticiaComponent.prototype.enviarComentario = function () {
        var _this = this;
        var dados = {
            nome: this.form.get('nome').value,
            email: this.form.get('email').value,
            site: this.form.get('site').value,
            idPost: this.post[0].id,
            comentario: this.form.get('comentario').value
        };
        console.log('comentário enviado => ', dados);
        this.postService.enviarComentario(dados)
            .subscribe(function () {
            alert('Seu comentario foi enviado com sucesso! Obrigado por colaborar com o nosso Portal.');
            _this.comentariosPost();
            _this.postService.maisComentadas();
        }, function (error) {
            console.error(error);
            alert('Erro ao enviar seu comentario. Tente novamente!');
        });
    };
    NoticiaComponent.prototype.curtir = function () {
        var _this = this;
        this.postService.curtir(this.post[0].id)
            .subscribe(function () {
            _this.postService.totalCurtidas++;
            _this.postService.maisCurtidas();
        }, function (error) {
            console.error(error);
            alert('Erro ao enviar seu comentario. Tente novamente!');
        });
    };
    NoticiaComponent.prototype.setPost = function (post) {
        this.post = post;
    };
    NoticiaComponent.prototype.setCategoriaPost = function (cat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postService.setCatPost(cat)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NoticiaComponent.prototype.goBack = function () {
        this.location.back();
    };
    NoticiaComponent.prototype.comentariosPost = function () {
        var _this = this;
        this.postService.comentariosPost(this.post[0].id)
            .subscribe(function (coment) {
            _this.comentarios = coment;
            console.log('Comentários => ', _this.comentarios);
        });
    };
    NoticiaComponent.prototype.top = function () {
        window.scroll(0, 0);
    };
    NoticiaComponent.prototype.listarRelacionados = function (url, categ) {
        var _this = this;
        this.postService.relacionados(url, categ)
            .subscribe(function (posts) {
            _this.relacionados = posts;
            for (var p = 0; p < _this.relacionados.length; p++) {
                _this.relacionados[p].img = _this.urlImg + "/" + _this.relacionados[p].img;
                _this.relacionados[p].thumb = _this.urlImg + "/" + _this.relacionados[p].thumb;
            }
            console.log('Relacionados => ', posts);
        });
    };
    NoticiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-noticia',
            template: __webpack_require__(/*! ./noticia.component.html */ "./src/app/noticia/noticia.component.html"),
            styles: [__webpack_require__(/*! ./noticia.component.css */ "./src/app/noticia/noticia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], NoticiaComponent);
    return NoticiaComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");




var PostService = /** @class */ (function () {
    function PostService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.postsUrl = this.apiService.urlApi;
        this.categoriaPostSelecionado = '';
        this.pPopulares = [];
        this.mCurtidas = [];
        this.mComentadas = [];
        this.totalCurtidas = 0;
        this.totalComentarios = 0;
        this.urlImg = 'http://www.portalparanews.com.br/imgBlog';
    }
    PostService.prototype.pegarIp = function () {
        var _this = this;
        this.http.get('https://api.ipify.org?format=json')
            .subscribe(function (data) {
            _this.publicIP = data['ip'];
            console.log('IP => ', _this.publicIP);
        });
    };
    PostService.prototype.setPostsPopulares = function (posts) {
        this.pPopulares = posts;
        console.log('Posts Populares no Service => ', this.pPopulares);
    };
    PostService.prototype.setMaisCurtidas = function (posts) {
        this.mCurtidas = posts;
        console.log('Mais Curtidas no Service => ', this.mCurtidas);
    };
    PostService.prototype.setMaisComentadas = function (posts) {
        this.mComentadas = posts;
        console.log('Mais Comentadas no Service => ', this.mComentadas);
    };
    PostService.prototype.setCatPost = function (categoria) {
        this.categoriaPostSelecionado = categoria;
        console.log('Categoria post relacionado => ', categoria);
    };
    PostService.prototype.enviarComentario = function (dados) {
        var nome = dados.nome;
        var email = dados.email;
        var site = dados.site;
        var idPost = dados.idPost;
        var comentario = dados.comentario;
        var ip = this.publicIP;
        return this.http.post(this.postsUrl + "/comentario", { nome: nome, email: email, site: site, idPost: idPost, comentario: comentario, ip: ip });
    };
    PostService.prototype.enviarContato = function (dados) {
        var nome = dados.nome;
        var email = dados.email;
        var tel = dados.tel;
        var site = dados.site;
        var ip = this.publicIP;
        var mensagem = dados.mensagem;
        return this.http.post(this.postsUrl + "/contato", { nome: nome, email: email, tel: tel, site: site, ip: ip, mensagem: mensagem });
    };
    PostService.prototype.curtir = function (idPost) {
        var ip = this.publicIP;
        return this.http.post(this.postsUrl + "/curtir", { idPost: idPost, ip: ip });
    };
    PostService.prototype.listarPosts = function () {
        return this.http.get(this.postsUrl + "/posts");
    };
    PostService.prototype.listarDestaquesPrincipais = function () {
        return this.http.get(this.postsUrl + "/destaques-principais");
    };
    PostService.prototype.listarDestaquesLaterais = function () {
        return this.http.get(this.postsUrl + "/destaques-laterais");
    };
    PostService.prototype.postsPopulares = function () {
        var _this = this;
        return this.http.get(this.postsUrl + "/posts-populares")
            .subscribe(function (posts) {
            _this.setPostsPopulares(posts);
            _this.forImg(_this.pPopulares);
        });
    };
    PostService.prototype.maisCurtidas = function () {
        var _this = this;
        return this.http.get(this.postsUrl + "/mais-curtidas")
            .subscribe(function (posts) {
            _this.setMaisCurtidas(posts);
            _this.forImg(_this.mCurtidas);
        });
    };
    PostService.prototype.maisComentadas = function () {
        var _this = this;
        return this.http.get(this.postsUrl + "/mais-comentadas")
            .subscribe(function (posts) {
            _this.setMaisComentadas(posts);
            _this.forImg(_this.mComentadas);
        });
    };
    PostService.prototype.byCategoria = function (categoria) {
        return this.http.get(this.postsUrl + "/categoria/" + categoria);
    };
    PostService.prototype.byUrl = function (url) {
        return this.http.get(this.postsUrl + "/noticia/" + url);
    };
    PostService.prototype.totalCurtidasPost = function (url) {
        var _this = this;
        return this.http.get(this.postsUrl + "/total-curtidas-post/" + url)
            .subscribe(function (data) {
            _this.totalCurtidas = data[0].totalCurtida;
            console.log('IP => ', _this.publicIP);
        });
    };
    PostService.prototype.totalComentariosPost = function (url) {
        var _this = this;
        return this.http.get(this.postsUrl + "/total-comentarios-post/" + url)
            .subscribe(function (data) {
            _this.totalComentarios = data[0].totalComentario;
            console.log('IP => ', _this.publicIP);
        });
    };
    PostService.prototype.pesquisa = function (pesquisa) {
        return this.http.get(this.postsUrl + "/pesquisa/" + pesquisa);
    };
    PostService.prototype.comentariosPost = function (id) {
        return this.http.get(this.postsUrl + "/comentarios-post/" + id);
    };
    PostService.prototype.listarNoticiasPara = function (ids) {
        return this.http.post(this.postsUrl + "/noticias-para", ids);
    };
    PostService.prototype.listarNoticiasNacionais = function (ids) {
        console.log('NACIONAIS => ', ids);
        var idsD = '';
        for (var i = 0; i < ids.length; i++) {
            idsD += "/" + ids[i];
        }
        console.log('idsD => ', idsD);
        return this.http.post(this.postsUrl + "/noticias-nacionais", ids);
    };
    PostService.prototype.porCategoria = function (ids, categ, limite) {
        var obj = {
            ids: ids,
            categoria: categ,
            limite: limite
        };
        return this.http.post(this.postsUrl + "/por-categoria", obj);
    };
    PostService.prototype.relacionados = function (url, categoria) {
        return this.http.get(this.postsUrl + "/relacionados/" + url + "/" + categoria);
    };
    PostService.prototype.forImg = function (param) {
        for (var p = 0; p < param.length; p++) {
            param[p].img = this.urlImg + "/" + param[p].img;
            param[p].thumb = this.urlImg + "/" + param[p].thumb;
        }
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/trabalhe/trabalhe.component.css":
/*!*************************************************!*\
  !*** ./src/app/trabalhe/trabalhe.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWJhbGhlL3RyYWJhbGhlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/trabalhe/trabalhe.component.html":
/*!**************************************************!*\
  !*** ./src/app/trabalhe/trabalhe.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  trabalhe works!\n</p>\n"

/***/ }),

/***/ "./src/app/trabalhe/trabalhe.component.ts":
/*!************************************************!*\
  !*** ./src/app/trabalhe/trabalhe.component.ts ***!
  \************************************************/
/*! exports provided: TrabalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabalheComponent", function() { return TrabalheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrabalheComponent = /** @class */ (function () {
    function TrabalheComponent() {
    }
    TrabalheComponent.prototype.ngOnInit = function () {
    };
    TrabalheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trabalhe',
            template: __webpack_require__(/*! ./trabalhe.component.html */ "./src/app/trabalhe/trabalhe.component.html"),
            styles: [__webpack_require__(/*! ./trabalhe.component.css */ "./src/app/trabalhe/trabalhe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrabalheComponent);
    return TrabalheComponent;
}());



/***/ }),

/***/ "./src/app/util/pipes/keep-html.ts":
/*!*****************************************!*\
  !*** ./src/app/util/pipes/keep-html.ts ***!
  \*****************************************/
/*! exports provided: EscapeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeHtmlPipe", function() { return EscapeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var EscapeHtmlPipe = /** @class */ (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    EscapeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'keepHtml', pure: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], EscapeHtmlPipe);
    return EscapeHtmlPipe;
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
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/alefeio/Documents/Projetos/PPN/NovoPortal/client/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/alefeio/Documents/Projetos/PPN/NovoPortal/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map