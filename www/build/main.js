webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModelService = (function () {
    function ModelService() {
    }
    ModelService.prototype.getModel = function () {
        return window["travModel"];
    };
    return ModelService;
}());
ModelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ModelService);

//# sourceMappingURL=model.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RuleService = (function () {
    function RuleService() {
    }
    RuleService.prototype.getRules = function () {
        return [
            {
                group: 'address',
                type: 'dropdown',
                key: 'Oregon',
                label: 'State',
                dataBinding: 'root_Addr_State',
                options: [
                    { key: 'Oregon', value: 'Oregon' },
                    { key: 'Wisconsin', value: 'Wisconsin' },
                    { key: 'Colorado', value: 'Colorado' },
                    { key: 'Arizona', value: 'Arizona' }
                ],
                order: 4
            },
            {
                group: 'address',
                type: 'text',
                key: 'Street',
                label: 'Street',
                dataBinding: 'root_Addr_Street',
                value: '970 SW TUALATIN',
                required: true,
                order: 1
            },
            {
                group: 'address',
                type: 'text',
                key: 'Apt',
                dataBinding: 'root_Addr_Apt',
                label: 'Apt #',
                order: 2
            },
            {
                group: 'address',
                type: 'text',
                key: 'Addr_City',
                label: 'City',
                dataBinding: 'root_Addr_City',
                value: 'TUALATIN',
                order: 3
            },
            {
                group: 'address',
                type: 'text',
                key: 'Addr_County',
                dataBinding: 'root_Addr_County',
                label: 'County',
                order: 4
            },
            {
                group: 'address',
                type: 'text',
                key: 'Addr_ZipCode',
                dataBinding: 'root_Addr_ZipCode',
                label: 'Zip Code',
                value: '97062',
                order: 4
            },
            {
                group: 'address',
                type: 'label',
                key: 'Addr_MailingAddress',
                dataBinding: 'root_Addr_MailingAddress',
                value: 'Mailing Address differs from Residence?',
                order: 5
            },
            {
                group: 'address',
                type: 'radio',
                key: 'mailingYes',
                label: 'Yes',
                dataBinding: 'root_Addr_MailingInd',
                value: 'true',
                order: 6
            },
            {
                group: 'address',
                type: 'radio',
                key: 'mailingNo',
                label: 'No',
                dataBinding: 'root_Addr_MailingIndNo',
                value: 'false',
                order: 6
            },
            {
                group: 'customer',
                type: 'text',
                key: 'FirstName',
                required: 'true',
                label: 'First Name',
                dataBinding: 'root_FirstName',
                value: 'Peter',
                order: 1
            },
            {
                group: 'customer',
                type: 'text',
                key: 'LastName',
                label: 'Last Name',
                dataBinding: 'root_LastName',
                value: 'Andrews',
                disallow: 'true',
                order: 2
            },
            {
                group: 'customer',
                type: 'text',
                key: 'HomePhone',
                label: 'Home Phone',
                dataBinding: 'root_HomePhone',
                value: '(555)555-5666',
                order: 3
            },
            {
                group: 'customer',
                type: 'label',
                key: 'HomeOrMobile',
                dataBinding: 'root_HomeOrMobile',
                value: 'and/or',
                order: 4
            },
            {
                group: 'customer',
                type: 'text',
                key: 'MobilePhone',
                dataBinding: 'root_MobilePhone',
                label: 'Mobile Phone',
                order: 5
            },
            {
                group: 'customer',
                type: 'text',
                key: 'EmailAddress',
                dataBinding: 'root_EmailAddress',
                label: 'Email Address',
                order: 6
            }
        ];
    };
    return RuleService;
}());
RuleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], RuleService);

//# sourceMappingURL=rules.service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mypref_mypref__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__mypref_mypref__["a" /* MyprefPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ajith/Documents/dev/DynamicForm/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="MyPref" tabIcon="flower"></ion-tab>  \n</ion-tabs>\n'/*ion-inline-end:"/Users/ajith/Documents/dev/DynamicForm/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/ajith/Documents/dev/DynamicForm/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ajith/Documents/dev/DynamicForm/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appcore_question_factory__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.questions = service.getQuestions('contact');
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/ajith/Documents/dev/DynamicForm/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <comps-customer></comps-customer>\n</ion-content>\n'/*ion-inline-end:"/Users/ajith/Documents/dev/DynamicForm/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__appcore_question_factory__["a" /* QuestionFactory */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ajith/Documents/dev/DynamicForm/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Customer Information</h2>\n  <comps-customer></comps-customer>\n  <comps-address></comps-address>\n</ion-content>\n'/*ion-inline-end:"/Users/ajith/Documents/dev/DynamicForm/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyprefPage = (function () {
    function MyprefPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.initializeItems();
    }
    MyprefPage.prototype.initializeItems = function () {
        this.cities = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    MyprefPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.cities = this.cities.filter(function (city) {
                return (city.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MyprefPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    return MyprefPage;
}());
MyprefPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-mypref",template:/*ion-inline-start:"/Users/ajith/Documents/dev/DynamicForm/src/pages/mypref/mypref.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        My Preferance\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n        <ion-card>\n                <ion-card-header>\n                  Explore Nearby\n                </ion-card-header>\n              \n                <ion-list>\n                  <button ion-item>\n                    <ion-icon name="cart" item-start></ion-icon>\n                    Shopping\n                  </button>\n              \n                  <button ion-item>\n                    <ion-icon name="medical" item-start></ion-icon>\n                    Hospital\n                  </button>\n              \n                  <button ion-item>\n                    <ion-icon name="cafe" item-start></ion-icon>\n                    Cafe\n                  </button>\n              \n                  <button ion-item>\n                    <ion-icon name="paw" item-start></ion-icon>\n                    Dog Park\n                  </button>\n              \n                  <button ion-item>\n                    <ion-icon name="beer" item-start></ion-icon>\n                    Pub\n                  </button>\n              \n                  <button ion-item>\n                    <ion-icon name="planet" item-start></ion-icon>\n                    Space\n                  </button>\n              \n                </ion-list>\n              </ion-card>\n              <ion-list no-lines>\n                  <button ion-item *ngFor ="let city of cities" (click)="itemSelected(item)">\n                      {{city}}\n                  </button>\n              </ion-list>\n              <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n              <ion-list>\n                  <ion-item *ngFor="let city of cities">\n                      {{city}}\n                  </ion-item>\n              </ion-list>\n  \n  </ion-content>'/*ion-inline-end:"/Users/ajith/Documents/dev/DynamicForm/src/pages/mypref/mypref.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], MyprefPage);

//# sourceMappingURL=mypref.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appcore_model_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comps_customer_customer__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appcore_rules_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comps_address_address__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appcore_question_factory__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appcore_dynamic_form_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appcore_dynamic_form_question_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mypref_mypref__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(195);
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
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_mypref_mypref__["a" /* MyprefPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_3__comps_address_address__["a" /* Address */],
            __WEBPACK_IMPORTED_MODULE_1__comps_customer_customer__["a" /* Customer */],
            __WEBPACK_IMPORTED_MODULE_5__appcore_dynamic_form_component__["a" /* DynamicFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__appcore_dynamic_form_question_component__["a" /* DynamicFormQuestionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_mypref_mypref__["a" /* MyprefPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_3__comps_address_address__["a" /* Address */],
            __WEBPACK_IMPORTED_MODULE_1__comps_customer_customer__["a" /* Customer */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__appcore_question_factory__["a" /* QuestionFactory */],
            __WEBPACK_IMPORTED_MODULE_2__appcore_rules_service__["a" /* RuleService */],
            __WEBPACK_IMPORTED_MODULE_0__appcore_model_service__["a" /* ModelService */],
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appcore_question_factory__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Customer = (function () {
    function Customer(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
    }
    ;
    Customer.prototype.ngOnInit = function () {
        this.questions = this.service.getQuestions(this.PanelName());
    };
    Customer.prototype.PanelName = function () {
        return 'customer';
    };
    return Customer;
}());
Customer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'comps-customer',
        template: "<ion-card>\n   <ion-card-header><b>Customer Information</b></ion-card-header>\n   <ion-card-content>\n       <dynamic-form [questions] =\"questions\" ></dynamic-form>\n   </ion-card-content>\n </ion-card>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__appcore_question_factory__["a" /* QuestionFactory */]])
], Customer);

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LabelQuestion = (function (_super) {
    __extends(LabelQuestion, _super);
    function LabelQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'label';
        _this.type = options['type'] || '';
        return _this;
    }
    return LabelQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-label.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckboxQuestion = (function (_super) {
    __extends(CheckboxQuestion, _super);
    function CheckboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'checkbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return CheckboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-checkbox.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RadioQuestion = (function (_super) {
    __extends(RadioQuestion, _super);
    function RadioQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'radio';
        _this.type = options['type'] || '';
        return _this;
    }
    return RadioQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-radio.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DropdownQuestion = (function (_super) {
    __extends(DropdownQuestion, _super);
    function DropdownQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return DropdownQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-dropdown.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextboxQuestion = (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textbox.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appcore_question_factory__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Address = (function () {
    function Address(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
    }
    Address.prototype.ngOnInit = function () {
        this.questions = this.service.getQuestions(this.PanelName());
    };
    Address.prototype.PanelName = function () {
        return 'address';
    };
    return Address;
}());
Address = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'comps-address',
        template: "<ion-card>\n   <ion-card-header><b>Residence Address</b></ion-card-header>\n   <ion-card-content>\n       <dynamic-form [questions] =\"questions\" ></dynamic-form>\n   </ion-card-content>\n </ion-card>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__appcore_question_factory__["a" /* QuestionFactory */]])
], Address);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_control_service__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    return DynamicFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], DynamicFormComponent.prototype, "questions", void 0);
DynamicFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dynamic-form',template:/*ion-inline-start:"/Users/ajith/Documents/dev/DynamicForm/src/appcore/dynamic-form.component.html"*/'<div>\n    <form (ngSubmit)="onSubmit()" [formGroup]="form">\n  \n      <div *ngFor="let question of questions" class="form-row">\n        <df-question [question]="question" [form]="form"></df-question>\n      </div>\n  \n      <div class="form-row">\n        <button type="submit" [disabled]="!form.valid">Save</button>\n      </div>\n    </form>\n  \n    <div *ngIf="payLoad" class="form-row">\n      <strong>Saved the following values</strong><br>{{payLoad}}\n    </div>\n  </div>'/*ion-inline-end:"/Users/ajith/Documents/dev/DynamicForm/src/appcore/dynamic-form.component.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__question_control_service__["a" /* QuestionControlService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_control_service__["a" /* QuestionControlService */]])
], DynamicFormComponent);

//# sourceMappingURL=dynamic-form.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionControlService = (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](question.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
                : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](question.value || '');
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](group);
    };
    return QuestionControlService;
}());
QuestionControlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], QuestionControlService);

//# sourceMappingURL=question-control.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_base__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent(ms) {
        this.ms = ms;
        this.model = {};
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    DynamicFormQuestionComponent.prototype.ngOnInit = function () {
        this.model = this.ms.getModel();
    };
    DynamicFormQuestionComponent.prototype.getModelData = function () {
        var leafNode = this.getLeafModelNode1(this.model, this.question.dataBinding);
        var leaf = this.getLeafName(this.question.dataBinding);
        return leafNode[leaf];
    };
    DynamicFormQuestionComponent.prototype.setModelData = function (val) {
        var leafNode = this.getLeafModelNode1(this.model, this.question.dataBinding);
        var leaf = this.getLeafName(this.question.dataBinding);
        leafNode[leaf] = val;
    };
    DynamicFormQuestionComponent.prototype.getLeafModelNode = function (obj, path) {
        path = path.split('_');
        var len = path.length;
        for (var i = 0; i < len - 1; i++) {
            if (obj[path[i]] === undefined) {
                obj[path[i]] = {};
            }
            ;
            obj = obj[path[i]];
        }
        return obj;
    };
    DynamicFormQuestionComponent.prototype.getLeafName = function (path) {
        path = path.split('_');
        return path[path.length - 1];
    };
    DynamicFormQuestionComponent.prototype.getLeafModelNode1 = function (obj, path) {
        path = path.split('_');
        var len = path.length;
        for (var i = 0; i < len - 1; i++) {
            var node = path[i];
            if (node && node.match("@")) {
                var attrs = node.split('=');
                obj[attrs[0]] = attrs[1] || '';
            }
            else {
                if (obj[node] === undefined) {
                    obj[node] = {};
                }
                ;
                obj = obj[node];
            }
        }
        return obj;
    };
    return DynamicFormQuestionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__question_base__["a" /* QuestionBase */])
], DynamicFormQuestionComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */])
], DynamicFormQuestionComponent.prototype, "form", void 0);
DynamicFormQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'df-question',template:/*ion-inline-start:"/Users/ajith/Documents/dev/DynamicForm/src/appcore/dynamic-form-question.component.html"*/'<div [formGroup]="form">\n  <div *ngIf="!question.disallow">\n    <label [attr.for]="question.key">{{question.label}}</label>\n  \n    <div [ngSwitch]="question.controlType">\n      <input *ngSwitchCase="\'textbox\'" [formControlName]="question.key" \n              [id]="question.key" [type]="question.type" [ngModel] = "getModelData()"  (blur)="setModelData($event.target.value)" >\n  \n      <select [id]="question.key" *ngSwitchCase="\'dropdown\'" [formControlName]="question.key">\n        <option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</option>\n      </select>\n\n      <input *ngSwitchCase="\'radio\'" [formControlName]="question.key"\n      [id]="question.key" [type]="question.type">\n\n      <label *ngSwitchCase="\'label\'" [id]="question.key">{{question.value}}</label>\n  \n    </div>   \n    <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>\n  </div>\n</div>'/*ion-inline-end:"/Users/ajith/Documents/dev/DynamicForm/src/appcore/dynamic-form-question.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__model_service__["a" /* ModelService */]])
], DynamicFormQuestionComponent);

//# sourceMappingURL=dynamic-form-question.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ajith/Documents/dev/DynamicForm/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ajith/Documents/dev/DynamicForm/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.disallow = !!options.disallow;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.dataBinding = options.dataBinding || '';
    }
    return QuestionBase;
}());

//# sourceMappingURL=question-base.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_label__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_checkbox__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_radio__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_dropdown__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_textbox__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionFactory = (function () {
    function QuestionFactory(service) {
        this.service = service;
        this.rules = service.getRules();
    }
    QuestionFactory.prototype.getQuestions = function (group) {
        var questions = [];
        this.rules.forEach(function (meta) {
            if (meta.group === group) {
                questions.push(BuildQuestion(meta));
            }
        });
        function BuildQuestion(meta) {
            switch (meta.type) {
                case 'text':
                    return new __WEBPACK_IMPORTED_MODULE_6__question_textbox__["a" /* TextboxQuestion */](meta);
                case 'dropdown':
                    return new __WEBPACK_IMPORTED_MODULE_5__question_dropdown__["a" /* DropdownQuestion */](meta);
                case 'radio':
                    return new __WEBPACK_IMPORTED_MODULE_3__question_radio__["a" /* RadioQuestion */](meta);
                case 'checkbox':
                    return new __WEBPACK_IMPORTED_MODULE_2__question_checkbox__["a" /* CheckboxQuestion */](meta);
                case 'label':
                    return new __WEBPACK_IMPORTED_MODULE_0__question_label__["a" /* LabelQuestion */](meta);
            }
        }
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    return QuestionFactory;
}());
QuestionFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rules_service__["a" /* RuleService */]])
], QuestionFactory);

//# sourceMappingURL=question.factory.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map