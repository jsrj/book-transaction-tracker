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

/***/ "../../../../../src/app/api-items-list/api-items-list.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"gridData\" [height]=\"620\">\n    <kendo-grid-column width=\"60\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n            <span class=\"issue\" *ngIf=\"dataItem.quantity > dataItem.issued\"><i class=\"fa fa-sign-out\" (click)=\"issueBook(dataItem.title)\"></i>&nbsp; Issue </span>\n            <span class=\"delete\" *ngIf=\"dataItem.quantity <= 0\"><i class=\"fa fa-trash\" (click)=\"deleteItem(dataItem.id)\">                 </i>&nbsp; Delete</span>\n            <span class=\"oos\"  *ngIf=\"dataItem.quantity == dataItem.issued\"><i class=\"fa fa-times-circle\">                                </i>&nbsp; Out   </span>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"title\"        title=\"Title\"        width=\"150\"></kendo-grid-column>\n    <kendo-grid-column field=\"author\"       title=\"Author\"       width=\"90\" ></kendo-grid-column>\n    <kendo-grid-column field=\"bookCategory\" title=\"Genre\"        width=\"100\"></kendo-grid-column>\n    <kendo-grid-column field=\"publishDate\"  title=\"Publish Date\" width=\"90\" ></kendo-grid-column>\n    <kendo-grid-column field=\"isbn\"         title=\"ISBN\"         width=\"120\">\n      <ng-template kendoGridCellTemplate let-dataItem>\n        <a href=\"https://isbnsearch.org/isbn/{{dataItem.isbn}}\" target=\"_blank\">{{dataItem.isbn}}</a>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"quantity\"     title=\"In Stock\" width=\"80\">\n      <ng-template kendoGridCellTemplate let-dataItem>\n        <div (click)=\"selectForEdit(dataItem.id)\">\n          <span  *ngIf=\"selectedForEdit != dataItem.id\">{{dataItem.quantity}}</span>\n          <kendo-textbox-container *ngIf=\"selectedForEdit == dataItem.id\">\n            <form class=\"book-quantity-update\" (ngSubmit)=\"editQuantity(dataItem.id)\">\n                <kendo-numerictextbox\n                  class=\"override-numeric-input\"\n                  name=\"quantity\"\n                  [value]=\"dataItem.quantity\"\n                  [min]=\"0\"\n                  [max]=\"100\"\n                  [autoCorrect]=\"autoCorrect\"\n                  [(ngModel)]=\"updateQuantity\">\n                </kendo-numerictextbox>\n                <button type=\"submit\">OK</button>\n              </form>\n          </kendo-textbox-container>\n        </div>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"issued\"       title=\"Issued\"       width=\"50\" class=\"active-orders\">\n      <ng-template kendoGridCellTemplate let-dataItem>\n        <span (click)=\"ViewTransactionById(dataItem.id)\">{{dataItem.issued}} <i class=\"fa fa-eye\"></i></span>\n      </ng-template>\n    </kendo-grid-column>\n</kendo-grid>\n\n<br>\n<br>\n\n"

/***/ }),

/***/ "../../../../../src/app/api-items-list/api-items-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: orange; }\n\n.k-textbox-container {\n  padding: unset !important; }\n\n.edit-button {\n  margin: 0 45% !important; }\n\n/* Overrides */\n.k-numerictextbox .k-numeric-wrap {\n  width: 65px !important;\n  margin: 0rem !important;\n  margin-top: -1.2rem !important;\n  padding: 6px !important; }\n\n.fa-trash {\n  color: red; }\n\n.fa-sign-out {\n  color: #0D8549; }\n\n.fa-times-circle {\n  color: darkred; }\n\n.override-numeric-input {\n  width: 100px; }\n\n.book-quantity-update {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n.fa-eye {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api-items-list/api-items-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_Http__ = __webpack_require__("../../../Http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiItemsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiItemsListComponent = (function () {
    function ApiItemsListComponent(_httpReq) {
        this._httpReq = _httpReq;
    }
    ApiItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.show = true;
        this.selectedForEdit = '';
        this.autoCorrect = false;
        // Polls the API to display current database information in 1 second intervals.
        // Change this to only fire off when a change is made by user before building.
        this.apiwatcher = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.getBookData();
            observer.next(_this.apiResponse);
            setInterval(function () {
                _this.getBookData();
                observer.next(_this.apiResponse);
            }, 2500);
        });
        // Sets the View to apiwatcher observable so that data can be refreshed without reloading entire app.
        this.apiwatcher.subscribe({
            next: function (info) { return _this.gridData = info; }
        });
    };
    ApiItemsListComponent.prototype.viewTransactionById = function (id) {
        alert("clicked on book id " + id);
    };
    ApiItemsListComponent.prototype.getBookData = function () {
        var _this = this;
        this._httpReq.get('http://localhost:5000/api/books').subscribe(function (res) {
            _this.apiResponse = res.json();
        });
    };
    ApiItemsListComponent.prototype.selectForEdit = function (id) {
        this.selectedForEdit = id;
    };
    ApiItemsListComponent.prototype.editQuantity = function (id) {
        var quantityUpdateModel = {
            quantity: this.updateQuantity
        };
        // This response needs to either be sent as a promise, or as a subscription or else the request will not submit.
        this._httpReq.patch("http://localhost:5000/api/books/" + id, quantityUpdateModel).toPromise();
        this.selectedForEdit = '';
        this.updateQuantity = null;
    };
    ApiItemsListComponent.prototype.issueBook = function (title) {
        var newTransactionTicket = {
            Book: title,
            TransactionDate: "generate-new",
            TransactionType: "ISSUE",
            Closed: 0
        };
        this._httpReq.post('http://localhost:5000/api/transactions', newTransactionTicket).toPromise();
    };
    ApiItemsListComponent.prototype.deleteItem = function (id) {
        this._httpReq.delete("http://localhost:5000/api/books/" + id).toPromise();
    };
    return ApiItemsListComponent;
}());
ApiItemsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-api-items-list',
        template: __webpack_require__("../../../../../src/app/api-items-list/api-items-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/api-items-list/api-items-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_Http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_Http__["b" /* Http */]) === "function" && _a || Object])
], ApiItemsListComponent);

var _a;
//# sourceMappingURL=api-items-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/api-transactions-list/api-transactions-list.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"gridData\" [height]=\"620\">\n  <kendo-grid-column width=\"180\">\n    <ng-template kendoGridCellTemplate let-orderItem>\n      <span class=\"return\" (click)=\"returnBook(orderItem.id)\" *ngIf=\"!orderItem.closed\"><i class=\"fa fa-sign-in\"></i> &nbsp; Return This Book </span>\n      <span class=\"closed\" *ngIf=\"orderItem.closed\"><i class=\"fa fa-thumbs-up\"></i> &nbsp; Turned In </span>\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-column field=\"id\"              title=\"Order ID\"   ></kendo-grid-column>\n  <kendo-grid-column field=\"book\"            title=\"Book Issued\"></kendo-grid-column>\n  <kendo-grid-column field=\"transactionDate\" title=\"Issue Date\" ></kendo-grid-column>\n  <kendo-grid-column field=\"updateDate\"      title=\"Return Date\"></kendo-grid-column>\n</kendo-grid>\n"

/***/ }),

/***/ "../../../../../src/app/api-transactions-list/api-transactions-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".return {\n  color: orange;\n  cursor: pointer; }\n\n.closed {\n  color: #98D083; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api-transactions-list/api-transactions-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_Http__ = __webpack_require__("../../../Http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTransactionsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiTransactionsListComponent = (function () {
    function ApiTransactionsListComponent(_httpReq) {
        this._httpReq = _httpReq;
    }
    ApiTransactionsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Polls the API to display current database information in 1 second intervals.
        // Change this to only fire off when a change is made by user before building.
        this.apiwatcher = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.getOrderData();
            observer.next(_this.apiResponse);
            setInterval(function () {
                _this.getOrderData();
                observer.next(_this.apiResponse);
            }, 2500);
        });
        // Sets the View to apiwatcher observable so that data can be refreshed without reloading entire app.
        this.apiwatcher.subscribe({
            next: function (info) { return _this.gridData = info; }
        });
    };
    ApiTransactionsListComponent.prototype.getOrderData = function () {
        var _this = this;
        this._httpReq.get('http://localhost:5000/api/transactions').subscribe(function (res) { return _this.apiResponse = res.json(); });
    };
    ApiTransactionsListComponent.prototype.returnBook = function (id) {
        var returnTicket = {
            TransactionDate: "update",
            TransactionType: "RETURN"
        };
        this._httpReq.patch("http://localhost:5000/api/transactions/" + id, returnTicket).toPromise();
    };
    return ApiTransactionsListComponent;
}());
ApiTransactionsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-api-transactions-list',
        template: __webpack_require__("../../../../../src/app/api-transactions-list/api-transactions-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/api-transactions-list/api-transactions-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_Http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_Http__["b" /* Http */]) === "function" && _a || Object])
], ApiTransactionsListComponent);

var _a;
//# sourceMappingURL=api-transactions-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\n    <div class=\"form\">\n        <app-new-book-form style=\"width: fit-content; float: right; margin: -0.7rem 0;\"></app-new-book-form>\n        <div class=\"button-box\">\n          <button (click)=\"toggleActiveView()\">View {{otherViewTitle}}</button>\n        </div>\n    </div>\n    <h3>\n      {{title}}\n    </h3>\n</div>\n\n<div class=\"kendo-grid-container\" *ngIf=\"activeView == 'books'\">\n  <app-api-items-list></app-api-items-list>\n</div>\n<div class=\"kendo-grid-container\" *ngIf=\"activeView == 'transactions'\">\n  <app-api-transactions-list></app-api-transactions-list>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.topnav {\n  position: fixed;\n  top: 0rem;\n  z-index: 10;\n  margin-bottom: 6px;\n  box-shadow: 0px 0px 14px 1px black;\n  border-radius: 3px;\n  height: 4rem;\n  width: 100%;\n  background: #69AEFF;\n  overflow: unset;\n  clear: both; }\n  .topnav .form {\n    bottom: 5; }\n  .topnav h3 {\n    font-size: 1rem;\n    float: left;\n    color: white;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    display: inline;\n    margin: 1.5rem 10px; }\n  .topnav .button-box {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    float: right;\n    margin: 1rem;\n    margin-right: 2rem;\n    padding-right: 3rem;\n    border-right: 2px solid black; }\n    .topnav .button-box button {\n      height: 3em;\n      margin-top: -0.5rem;\n      color: aliceblue;\n      background: rebeccapurple;\n      border: none;\n      border-radius: 3px;\n      box-shadow: aliceblue 0px 0px 7px 0px; }\n\n#view-select {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  bottom: 0rem;\n  left: 45%;\n  position: fixed;\n  background: #4C5FB1;\n  height: 3rem;\n  border-radius: 7px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n  #view-select button {\n    background: transparent;\n    border: none;\n    padding: 5px;\n    color: white; }\n\n.kendo-grid-container {\n  height: 95vh;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Books Inventory Tracker';
        this.activeView = 'books';
        this.otherViewTitle = 'Orders';
    }
    AppComponent.prototype.toggleActiveView = function () {
        if (this.activeView == 'books') {
            this.activeView = 'transactions';
            this.otherViewTitle = 'Books';
        }
        else {
            this.activeView = 'books';
            this.otherViewTitle = 'Orders';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_Http__ = __webpack_require__("../../../Http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_popup__ = __webpack_require__("../../../../@progress/kendo-angular-popup/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__ = __webpack_require__("../../../../@progress/kendo-angular-inputs/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_items_list_api_items_list_component__ = __webpack_require__("../../../../../src/app/api-items-list/api-items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_book_form_new_book_form_component__ = __webpack_require__("../../../../../src/app/new-book-form/new-book-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_transactions_list_api_transactions_list_component__ = __webpack_require__("../../../../../src/app/api-transactions-list/api-transactions-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core Modules




// UI Modules





// App Components




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__api_items_list_api_items_list_component__["a" /* ApiItemsListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__new_book_form_new_book_form_component__["a" /* NewBookFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__api_transactions_list_api_transactions_list_component__["a" /* ApiTransactionsListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_Http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["a" /* GridModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_popup__["a" /* PopupModule */],
            __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__["a" /* InputsModule */],
            __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_buttons__["a" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_Http__["a" /* HttpModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/new-book-form/new-book-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"input-form\" (ngSubmit)=\"addNewBook()\">\n    <kendo-textbox-container floatingLabel=\"Title\">\n        <input kendoTextBox name=\"title\" [(ngModel)]=\"newBookTitle\" />\n    </kendo-textbox-container>\n\n    <kendo-textbox-container floatingLabel=\"Author\">\n        <input kendoTextBox name=\"author\" [(ngModel)]=\"newBookAuthor\" />\n    </kendo-textbox-container>\n\n    <kendo-textbox-container floatingLabel=\"Genre\">\n        <input kendoTextBox name=\"bookCategory\" [(ngModel)]=\"newBookCategory\" />\n    </kendo-textbox-container>\n\n    <kendo-textbox-container floatingLabel=\"Publish Date\">\n        <input kendoTextBox name=\"publishDate\" [(ngModel)]=\"newBookPublishDate\" />\n    </kendo-textbox-container>\n\n    <kendo-textbox-container floatingLabel=\"ISBN\">\n        <input kendoTextBox name=\"isbn\" [(ngModel)]=\"newBookISBN\" />\n    </kendo-textbox-container>\n\n    <kendo-textbox-container>\n        <button kendoButton class=\"k-textbox bitt-themed\" type=\"submit\"> Add New Book </button>\n    </kendo-textbox-container>\n  </form>\n"

/***/ }),

/***/ "../../../../../src/app/new-book-form/new-book-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-form {\n  margin-top: 0.5rem;\n  margin: 0.5rem 10px 0px; }\n\n.bitt-themed {\n  color: #F5F5F5;\n  background: #FFBE5B; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-book-form/new-book-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_Http__ = __webpack_require__("../../../Http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewBookFormComponent = (function () {
    function NewBookFormComponent(_httpReq) {
        this._httpReq = _httpReq;
    }
    NewBookFormComponent.prototype.ngOnInit = function () {
    };
    NewBookFormComponent.prototype.addNewBook = function () {
        var _this = this;
        var newBookModel = {
            title: this.newBookTitle,
            author: this.newBookAuthor,
            bookCategory: this.newBookCategory,
            publishDate: this.newBookPublishDate,
            isbn: this.newBookISBN
        };
        this._httpReq.post('http://localhost:5000/api/books', newBookModel).toPromise().then(function (res) {
            console.log(res);
            _this.newBookTitle = '';
            _this.newBookAuthor = '';
            _this.newBookCategory = '';
            _this.newBookPublishDate = '';
            _this.newBookISBN = '';
        });
    };
    return NewBookFormComponent;
}());
NewBookFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-new-book-form',
        template: __webpack_require__("../../../../../src/app/new-book-form/new-book-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-book-form/new-book-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_Http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_Http__["b" /* Http */]) === "function" && _a || Object])
], NewBookFormComponent);

var _a;
//# sourceMappingURL=new-book-form.component.js.map

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