(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Typescript\testy\mix\src\main.ts */"zUnb");


/***/ }),

/***/ "9Hli":
/*!********************************************!*\
  !*** ./src/app/sprzet/sprzet.component.ts ***!
  \********************************************/
/*! exports provided: SprzetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprzetComponent", function() { return SprzetComponent; });
/* harmony import */ var _data_marki_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/marki.json */ "mjoC");
var _data_marki_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/marki.json */ "mjoC", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["marka", a1]; };
function SprzetComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, m_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", m_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SprzetComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, m_r3.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", m_r3.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class SprzetComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.marks = _data_marki_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
        this.getMarks();
    }
    getMarks() {
        this.httpClient.get('https://mixbocian.eu/mixbocianapi/marki.php').subscribe(resp => {
            this.marks = resp;
        });
    }
}
SprzetComponent.ɵfac = function SprzetComponent_Factory(t) { return new (t || SprzetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SprzetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SprzetComponent, selectors: [["app-sprzet"]], decls: 14, vars: 2, consts: [[1, "box"], ["id", "pic", 1, "alling"], [1, "wrasp", "mrg-100-d", "mrg-100-u"], [1, "gal_title"], [1, "zwrot"], ["id", "galer"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "wrasp", "mrg-100-d"], [3, "routerLink"], [1, "card"], [3, "src"]], template: function SprzetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Meble kuchenne");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SprzetComponent_a_7_Template, 3, 4, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sprz\u0119t AGD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SprzetComponent_a_13_Template, 3, 4, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.marks[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.marks[1]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\r\n  height: 260px;\r\n  width: 200px;\r\n  margin: 10px;\r\n  transition: transform ease-in-out 200ms;\r\n  border-radius: 5px !important;\r\n  box-sizing: border-box;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  background-color: unset;\r\n}\r\n\r\n@media screen and (max-width: 465px) {\r\n  .card[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    width: 130px;\r\n    height: 170px;\r\n    font-size: 12px;\r\n  }\r\n  .zwrot[_ngcontent-%COMP%]{\r\n    font-size: x-large;\r\n  }\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n  transition: transform ease-in-out 200ms;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  border-radius: 5px;\r\n  background-color: unset;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: rgba(255, 255, 255,.5);\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: rgba(255, 255, 255,.5);\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    text-transform: capitalize;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcnpldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHVDQUF1QztFQUN2QyxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qix3SUFBd0k7SUFDeEksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNwcnpldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjAwbXM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XHJcbiAgLmNhcmR7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC56d3JvdHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjAwbXM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jYXJkIGltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbn1cclxuLmNhcmQgcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsLjUpO1xyXG59XHJcbi5jYXJkIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LC41KTtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "B0Yu":
/*!*********************************!*\
  !*** ./src/app/data/posty.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"KitchenAid\",\"desc\":\"Test\",\"src\":[\"assets/img/1.jpg\",\"assets/img/2.jpg\"]},{\"title\":\"KitchenAid\",\"desc\":\"Test\",\"src\":[\"assets/img/1.jpg\",\"assets/img/2.jpg\"]},{\"title\":\"KitchenAid\",\"desc\":\"Test\",\"src\":[\"assets/img/1.jpg\"]}]");

/***/ }),

/***/ "Phzq":
/*!******************************************************!*\
  !*** ./src/app/lokalizacja/lokalizacja.component.ts ***!
  \******************************************************/
/*! exports provided: LokalizacjaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokalizacjaComponent", function() { return LokalizacjaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LokalizacjaComponent {
    constructor() { }
    ngOnInit() {
    }
}
LokalizacjaComponent.ɵfac = function LokalizacjaComponent_Factory(t) { return new (t || LokalizacjaComponent)(); };
LokalizacjaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LokalizacjaComponent, selectors: [["app-lokalizacja"]], decls: 7, vars: 0, consts: [[1, "box"], [1, "flexit", "mrg-100-u", "mrg-100-d"], ["id", "addf", 2, "border-radius", "15px"], [1, "text", "loc-text"], ["width", "100%", 1, "my-slide"], ["id", "map", "src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.0698001597581!2d17.91581989629516!3d50.67764229077549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47105255aac1b8b3%3A0xde3f8b9433bd32cc!2sStudio%20kuchni%20mix%20bocian!5e0!3m2!1sen!2spl!4v1585215111918!5m2!1sen!2spl", "width", "100%", "height", "100%", "frameborder", "2", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 1, "my-slide", 2, "border", "0", "z-index", "2"]], template: function LokalizacjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Znajd\u017A nas pod tym adresem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#trzydview[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n#addf[_ngcontent-%COMP%]{\r\n    \r\n    background: rgba(45, 45, 45, 0.8) !important;\r\n    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 67%);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.08);\r\n   }\r\n.loc-text[_ngcontent-%COMP%]{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;\r\n    font-weight: 100;\r\n    font-size: xx-large;\r\n    text-align: center;\r\n    background-color: #4e4e4e45 !important;\r\n    \r\n}\r\n.my-slide[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 400px;\r\n    flex: auto;\r\n}\r\n#map[_ngcontent-%COMP%]{\r\n    flex: none;\r\n}\r\n.flexit[_ngcontent-%COMP%]{\r\n    padding-left: 0 10px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxva2FsaXphY2phLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLDRDQUE0QztJQUM1Qyx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLDJDQUEyQztHQUM1QztBQUNIO0lBQ0ksbUpBQW1KO0lBQ25KLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNDQUFzQzs7QUFFMUM7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJsb2thbGl6YWNqYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Ryenlkdmlld3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiNhZGRme1xyXG4gICAgLyogbWF4LXdpZHRoOiAxMjAwcHggIWltcG9ydGFudDsgKi9cclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDQ1LCA0NSwgMC44KSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYigwIDAgMCAvIDY3JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICAgfVxyXG4ubG9jLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU0NSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLm15LXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGZsZXg6IGF1dG87XHJcbn1cclxuI21hcHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbn1cclxuLmZsZXhpdHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAxMHB4IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'mix';
    }
    ngOnInit() {
        document.querySelector("nav-link").addEventListener('click', () => {
            document.querySelector('.navbar-toggler').toggleAttribute('collapsed');
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 0, consts: [[1, "navbar", "navbar-expand-xl", "navbar-dark", "fixed-top", "navbar-custom"], [1, "container-fluid"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/img/logofirmowemixbocian_min.svg", "alt", "", 1, "logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLink", "prezentacja", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", 1, "nav-link"], ["routerLink", "sprzet", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", 1, "nav-link"], ["routerLink", "lokalizacja", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", 1, "nav-link"], ["routerLink", "spacer", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", 1, "nav-link"], ["routerLink", "kontakt", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prezentacja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sprz\u0119t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lokalizacja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wirtualny Spacer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".navbar-custom[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(\r\n    to bottom,\r\n    rgba(27, 27, 27, 0.9),\r\n    rgba(27, 27, 27, 0.8),\r\n    rgba(27, 27, 27, 0.7),\r\n    rgba(27, 27, 27, 0.5),\r\n    rgba(27, 27, 27, 0.3),\r\n    rgba(37, 37, 37, 0.01)\r\n  );\r\n}\r\n.nawig[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-size: xx-large;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  transition-property: transform;\r\n  transition: 0.25s ease;\r\n}\r\na[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.03);\r\n  \r\n}\r\na[_ngcontent-%COMP%]:focus {\r\n  color: rgb(255, 255, 255) !important;\r\n}\r\n.nav-link[_ngcontent-%COMP%]{\r\n  color: rgb(225, 225, 225, .9) !important;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n}\r\n@media screen and (max-width: 465px) {\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n  height: unset;\r\n  width: 100%;\r\n}\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7Ozs7Ozs7O0dBUUM7QUFDSDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjs7QUFFeEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCO0FBQ0E7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY3VzdG9tIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICByZ2JhKDI3LCAyNywgMjcsIDAuOSksXHJcbiAgICByZ2JhKDI3LCAyNywgMjcsIDAuOCksXHJcbiAgICByZ2JhKDI3LCAyNywgMjcsIDAuNyksXHJcbiAgICByZ2JhKDI3LCAyNywgMjcsIDAuNSksXHJcbiAgICByZ2JhKDI3LCAyNywgMjcsIDAuMyksXHJcbiAgICByZ2JhKDM3LCAzNywgMzcsIDAuMDEpXHJcbiAgKTtcclxufVxyXG4ubmF3aWcgbGkge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxudWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5hIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZTtcclxufVxyXG5hOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIFxyXG59XHJcbmE6Zm9jdXMge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1LCAuOSkgIWltcG9ydGFudDtcclxufVxyXG5uYXZ7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY1cHgpIHtcclxuLm5hdmJhci1icmFuZHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5sb2dve1xyXG4gIGhlaWdodDogdW5zZXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _prezentacja_prezentacja_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prezentacja/prezentacja.component */ "hP1L");
/* harmony import */ var _sprzet_sprzet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sprzet/sprzet.component */ "9Hli");
/* harmony import */ var _lokalizacja_lokalizacja_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lokalizacja/lokalizacja.component */ "Phzq");
/* harmony import */ var _spacer_spacer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spacer/spacer.component */ "jDLG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _marka_marka_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marka/marka.component */ "ukhP");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item/item.component */ "ZfIV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kontakt/kontakt.component */ "horU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _prezentacja_prezentacja_component__WEBPACK_IMPORTED_MODULE_3__["PrezentacjaComponent"],
        _sprzet_sprzet_component__WEBPACK_IMPORTED_MODULE_4__["SprzetComponent"],
        _lokalizacja_lokalizacja_component__WEBPACK_IMPORTED_MODULE_5__["LokalizacjaComponent"],
        _spacer_spacer_component__WEBPACK_IMPORTED_MODULE_6__["SpacerComponent"],
        _marka_marka_component__WEBPACK_IMPORTED_MODULE_8__["MarkaComponent"],
        _item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"],
        _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_12__["KontaktComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();


/***/ }),

/***/ "ZfIV":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class ItemComponent {
    constructor(activeRoute, httpClient, _location) {
        this.activeRoute = activeRoute;
        this.httpClient = httpClient;
        this._location = _location;
    }
    ngOnInit() {
        this.activeRoute.params.subscribe((param) => {
            this.getMarks(param.id, param.id2, param.id3);
        });
    }
    getMarks(sel, nr, filtr) {
        console.log(filtr);
        if (filtr != 'default') {
            this.httpClient.get('https://mixbocian.eu/mixbocianapi/sprzety.php?s=' + sel + '&e=' + filtr).subscribe(resp => {
                this.curr = resp[nr];
                console.log(this.curr);
            });
        }
        else {
            this.httpClient.get('https://mixbocian.eu/mixbocianapi/sprzety.php?s=' + sel).subscribe(resp => {
                this.curr = resp[nr];
                console.log(this.curr);
            });
        }
    }
    backClicked() {
        this._location.back();
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], decls: 12, vars: 3, consts: [[1, "itmspace"], [1, "content_box", "mrg-200-u", "wrasp"], [3, "click"], [1, "title"], [1, "item_box"], [3, "src"], [1, "choosebox"], [3, "innerHTML"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_3_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cofnij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.curr.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.curr.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.curr.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".content_box[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    padding: 0 10px 0;\r\n}\r\n@media screen and (max-width: 980px){\r\n    .content_box[_ngcontent-%COMP%]{\r\n        transform: scale(.97);\r\n    }\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    font-size: 32px;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: 200;\r\n    color: aliceblue;\r\n    text-align: center;\r\n    padding: 20px 0 20px;\r\n}\r\n.item_box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    margin-bottom: 30px;\r\n    justify-content: space-evenly;\r\n}\r\n.item_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    max-width: 400px;\r\n    max-height: 500px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    border-radius: 5px;\r\n    background-color: #FFF;\r\n    margin-bottom: 20px;\r\n}\r\n.choosebox[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 420px;\r\n    min-height: 500px;\r\n    margin-left: 10px;\r\n    margin-top: 80px;\r\n    min-height: 300px;\r\n    padding: 10px;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    border-radius: 20px;\r\n    margin-bottom: 40px;\r\n    padding-left: 30px;\r\n    background-color: #5f5f5fcb;\r\n    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 67%);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.08);\r\n}\r\n.choosebox[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.choosebox[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    flex: 1;\r\n}\r\n.wrasp[_ngcontent-%COMP%]{\r\n    max-width: 960px;\r\n}\r\n.opis[_ngcontent-%COMP%]{\r\n    color: black !important;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    float: left;\r\n    margin-top: 10px;\r\n    background: rgba(45, 45, 45, 0.05);\r\n    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 67%);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.08);\r\n    color: aliceblue;\r\n    padding: 5px 10px;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    background: rgba(45, 45, 45, 0);\r\n    box-shadow: 0 4px 16px 0 rgb(255 255 255 / 20%);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.08);\r\n    color: rgba(255, 255, 255);\r\n    transition: .1s ease-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHdJQUF3STtJQUN4SSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHdJQUF3STtJQUN4SSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudF9ib3h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCl7XHJcbiAgICAuY29udGVudF9ib3h7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTcpO1xyXG4gICAgfVxyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4O1xyXG59XHJcbi5pdGVtX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uaXRlbV9ib3ggaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY2hvb3NlYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmY2I7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiKDAgMCAwIC8gNjclKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG59XHJcbi5jaG9vc2Vib3ggbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmNob29zZWJveCBuYXYgYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLndyYXNwe1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxufVxyXG4ub3Bpc3tcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbmJvZHl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDQ1LCA0NSwgMC4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiKDAgMCAwIC8gNjclKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDQ1LCA0NSwgMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiKDI1NSAyNTUgMjU1IC8gMjAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "hP1L":
/*!******************************************************!*\
  !*** ./src/app/prezentacja/prezentacja.component.ts ***!
  \******************************************************/
/*! exports provided: PrezentacjaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrezentacjaComponent", function() { return PrezentacjaComponent; });
/* harmony import */ var _data_posty_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/posty.json */ "B0Yu");
var _data_posty_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/posty.json */ "B0Yu", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
// import * as posty from "../data/posty.json";
// import posty from "../data/posty.json";





function PrezentacjaComponent_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r1.src[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PrezentacjaComponent_div_1_ngb_carousel_6_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", i_r6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PrezentacjaComponent_div_1_ngb_carousel_6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PrezentacjaComponent_div_1_ngb_carousel_6_1_ng_template_0_Template, 2, 1, "ng-template", 10);
} }
function PrezentacjaComponent_div_1_ngb_carousel_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PrezentacjaComponent_div_1_ngb_carousel_6_1_Template, 1, 0, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r1.src);
} }
function PrezentacjaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PrezentacjaComponent_div_1_img_5_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PrezentacjaComponent_div_1_ngb_carousel_6_Template, 2, 1, "ngb-carousel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.src.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.posts.length >= 1 && item_r1.src.length > 1);
} }
class PrezentacjaComponent {
    constructor(config, httpClient) {
        this.httpClient = httpClient;
        this.posts = _data_posty_json__WEBPACK_IMPORTED_MODULE_0__;
        config.interval = 0;
    }
    ngOnInit() {
        console.log(_data_posty_json__WEBPACK_IMPORTED_MODULE_0__);
        console.log(this.posts);
        // this.togglePaused();
        this.getPosts();
    }
    getPosts() {
        this.httpClient.get('https://mixbocian.eu/mixbocianapi/posty.php').subscribe(resp => {
            this.posts = resp;
            console.log(this.posts);
        });
    }
}
PrezentacjaComponent.ɵfac = function PrezentacjaComponent_Factory(t) { return new (t || PrezentacjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PrezentacjaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrezentacjaComponent, selectors: [["app-prezentacja"]], decls: 2, vars: 1, consts: [[1, "box"], ["class", "rown flexit mrg-200-u mrg-100-d", 4, "ngFor", "ngForOf"], [1, "rown", "flexit", "mrg-200-u", "mrg-100-d"], ["id", "addf"], [1, "text", "dark-theme"], [1, "my-slide", "w-100"], ["class", "d-block w-100", "alt", "Random first slide", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "Random first slide", 1, "d-block", "w-100", 3, "src"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"]], template: function PrezentacjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PrezentacjaComponent_div_1_Template, 7, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: [".slidbtn[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border: none;\r\n}\r\n.fade-carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]  {\r\n    opacity:0 !important; \r\n    transition: 5s opacity ease-in-out !important;\r\n    left:0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXplbnRhY2phLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkO0FBQ0E7SUFDSSxvQkFBb0I7SUFLWiw2Q0FBNkM7SUFDckQsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InByZXplbnRhY2phLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmZhZGUtY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5pdGVtICB7XHJcbiAgICBvcGFjaXR5OjAgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogNXMgb3BhY2l0eSBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gICAgICAgLW1vei10cmFuc2l0aW9uOiA1cyBvcGFjaXR5IGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IDVzIG9wYWNpdHkgZWFzZS1pbi1vdXQgIWltcG9ydGFudDsgXHJcbiAgICAgICAgIC1vLXRyYW5zaXRpb246IDVzIG9wYWNpdHkgZWFzZS1pbi1vdXQgIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDVzIG9wYWNpdHkgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6MCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "horU":
/*!**********************************************!*\
  !*** ./src/app/kontakt/kontakt.component.ts ***!
  \**********************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class KontaktComponent {
    constructor() { }
    ngOnInit() {
    }
}
KontaktComponent.ɵfac = function KontaktComponent_Factory(t) { return new (t || KontaktComponent)(); };
KontaktComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KontaktComponent, selectors: [["app-kontakt"]], decls: 26, vars: 0, consts: [[1, "box"], [1, "flexit", "mrg-100-u", "mrg-100-d"], ["id", "addf", 2, "border-radius", "15px"], [1, "text", "loc-text"], [1, "haerka"], [1, "cont"], ["href", "tel:+48603767271"], ["href", "tel:+48603767272"], ["href", "mailto:ibocian@poczta.fm"]], template: function KontaktComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Skontaktuj si\u0119 z nami");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Oddzia\u0142 w Opolu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "tel: 603 767 271");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Oddzia\u0142 w Pr\u00F3szkowie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "tel: 603 767 272");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ibocian@poczta.fm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#addf[_ngcontent-%COMP%]{\r\n    \r\n    background: rgba(45, 45, 45, 0.8) !important;\r\n    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 67%);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.08);\r\n    transform: scale(1.2);\r\n   }\r\n   @media screen and (max-width: 980px){\r\n    #addf[_ngcontent-%COMP%]{\r\n        transform: scale(1);\r\n    }\r\n}\r\n   @media screen and (max-width: 600px){\r\n        .cont[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n            font-size: small;\r\n            min-width: 140px !important;\r\n            \r\n        }\r\n}\r\n   .loc-text[_ngcontent-%COMP%]{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;\r\n    font-weight: 100;\r\n    font-size: xx-large;\r\n    text-align: center;\r\n    background-color: #4e4e4e45 !important;\r\n    \r\n}\r\n   #map[_ngcontent-%COMP%]{\r\n    flex: none;\r\n}\r\n   .flexit[_ngcontent-%COMP%]{\r\n    padding-left: 0 10px 0;\r\n}\r\n   .haerka[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n    background-color: rgba(240, 248, 255, 0.301);\r\n}\r\n   .cont[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    \r\n    padding: 0 10px;\r\n\r\n}\r\n   .cont[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n    min-width: 315px;\r\n}\r\n   .tel[_ngcontent-%COMP%], .tel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .mail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .mail[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n   .cont[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: brown;\r\n}\r\n   .cont[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    background: rgba(45, 45, 45, 0.164) !important;\r\n    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 67%);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.08);\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbnRha3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsNENBQTRDO0lBQzVDLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLHFCQUFxQjtHQUN0QjtHQUNBO0lBQ0M7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjtHQUNJO1FBQ0k7WUFDSSxnQkFBZ0I7WUFDaEIsMkJBQTJCOztRQUUvQjtBQUNSO0dBQ0E7SUFDSSxtSkFBbUo7SUFDbkosZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0NBQXNDOztBQUUxQztHQUNBO0lBQ0ksVUFBVTtBQUNkO0dBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7R0FDQTtJQUNJLGdCQUFnQjtJQUNoQiw0Q0FBNEM7QUFDaEQ7R0FDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZUFBZTs7QUFFbkI7R0FDQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7R0FDQTtJQUNJLGdCQUFnQjtBQUNwQjtHQUNBO0lBQ0ksWUFBWTtBQUNoQjtHQUNBO0lBQ0ksOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoia29udGFrdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNhZGRme1xyXG4gICAgLyogbWF4LXdpZHRoOiAxMjAwcHggIWltcG9ydGFudDsgKi9cclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDQ1LCA0NSwgMC44KSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYigwIDAgMCAvIDY3JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgfVxyXG4gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCl7XHJcbiAgICAjYWRkZntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgLmNvbnQgZGl2e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxufVxyXG4ubG9jLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU0NSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuI21hcHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbn1cclxuLmZsZXhpdHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAxMHB4IDA7XHJcbn1cclxuLmhhZXJrYXtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuMzAxKTtcclxufVxyXG4uY29udHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLyogZm9udC1zaXplOiAwLjhlbTsgKi9cclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuXHJcbn1cclxuLmNvbnQgZGl2e1xyXG4gICAgZmxleDogMTtcclxuICAgIG1pbi13aWR0aDogMzE1cHg7XHJcbn1cclxuLnRlbCwgLnRlbCBhLCAubWFpbCBhLCAubWFpbHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbnQgYTpob3ZlcntcclxuICAgIGNvbG9yOiBicm93bjtcclxufVxyXG4uY29udCBkaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCA0NSwgNDUsIDAuMTY0KSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjclKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "jDLG":
/*!********************************************!*\
  !*** ./src/app/spacer/spacer.component.ts ***!
  \********************************************/
/*! exports provided: SpacerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerComponent", function() { return SpacerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpacerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpacerComponent.ɵfac = function SpacerComponent_Factory(t) { return new (t || SpacerComponent)(); };
SpacerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpacerComponent, selectors: [["app-spacer"]], decls: 7, vars: 0, consts: [[1, "box"], [1, "flexit", "mrg-100-u", "mrg-100-d"], ["id", "addf", 2, "border-radius", "15px"], [1, "text", "loc-text"], [1, "my-slide", 2, "border-bottom-left-radius", "15px", "border-bottom-right-radius", "15px"], ["id", "trzydview", "src", "https://www.google.com/maps/embed?pb=!4v1601913685325!6m8!1m7!1sCAoSLEFGMVFpcE9EbzZvdWp2MHpFeEpMSV9wYUNvYUZkQmJpM3FGN3ZyQ2xjQkt4!2m2!1d50.67793940731152!2d17.91621051943469!3f57.06008960329438!4f-5.187308498939046!5f0.5045763900430877", "frameborder", "0", "allowfullscreen", "true", "aria-hidden", "false", "tabindex", "0"]], template: function SpacerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Zapraszamy do spaceru wirtualnego ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#trzydview[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n.addf[_ngcontent-%COMP%]{\r\n    max-width: 1200px !important;\r\n}\r\n.loc-text[_ngcontent-%COMP%]{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;\r\n    font-weight: 100;\r\n    font-size: xx-large;\r\n    text-align: center;\r\n    background-color: #4e4e4e45 !important;\r\n    \r\n}\r\n#addf[_ngcontent-%COMP%]{\r\n    background: rgba(45, 45, 45, 0.8) !important;\r\n    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 67%);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.08);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYWNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksbUpBQW1KO0lBQ25KLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNDQUFzQzs7QUFFMUM7QUFDQTtJQUNJLDRDQUE0QztJQUM1Qyx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLDJDQUEyQztBQUMvQyIsImZpbGUiOiJzcGFjZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0cnp5ZHZpZXd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuLmFkZGZ7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2MtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTQ1ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4jYWRkZntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDQ1LCA0NSwgMC44KSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYigwIDAgMCAvIDY3JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "mjoC":
/*!*********************************!*\
  !*** ./src/app/data/marki.json ***!
  \*********************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"name\":\"Alno\",\"src\":\"assets/marki/alno.png\"},{\"name\":\"Bauformat\",\"src\":\"assets/marki/bauformat.png\"},{\"name\":\"Burger\",\"src\":\"assets/marki/burger.png\"},{\"name\":\"Kuhlmann\",\"src\":\"assets/marki/kuhlmann.png\"},{\"name\":\"Impuls\",\"src\":\"assets/marki/impuls.png\"}],[{\"name\":\"Bosch\",\"src\":\"assets/marki/bosch.png\"},{\"name\":\"Blanco\",\"src\":\"assets/marki/blanco.png\"},{\"name\":\"Elica\",\"src\":\"assets/marki/elica.png\"},{\"name\":\"Faber\",\"src\":\"assets/marki/faber.png\"},{\"name\":\"Franke\",\"src\":\"assets/marki/franke.png\"},{\"name\":\"Gaggenau\",\"src\":\"assets/marki/gaggenau.png\"},{\"name\":\"KitchenAid\",\"src\":\"assets/marki/kitchenaid.png\"},{\"name\":\"Liebherr\",\"src\":\"assets/marki/liebherr.png\"},{\"name\":\"Miele\",\"src\":\"assets/marki/miele.png\"},{\"name\":\"Nivona\",\"src\":\"assets/marki/nivona.png\"},{\"name\":\"Siemens\",\"src\":\"assets/marki/siemens.png\"},{\"name\":\"Villeroy&Boch\",\"src\":\"assets/marki/villeroy_boch.png\"},{\"name\":\"Falmec\",\"src\":\"assets/marki/falmec.png\"}]]");

/***/ }),

/***/ "ukhP":
/*!******************************************!*\
  !*** ./src/app/marka/marka.component.ts ***!
  \******************************************/
/*! exports provided: MarkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkaComponent", function() { return MarkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function MarkaComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nie znaleziono \u017Cadnych wynik\u00F3w");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2, a3) { return ["item", a1, a2, a3]; };
function MarkaComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const j_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx_r1.nazwa, j_r3, ctx_r1.czyfiltr));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2.name);
} }
class MarkaComponent {
    constructor(activeRoute, httpClient, _location) {
        this.activeRoute = activeRoute;
        this.httpClient = httpClient;
        this._location = _location;
        this.filtr = '';
        this.czyfiltr = 'default';
    }
    ngOnInit() {
        this.activeRoute.params.subscribe((param) => {
            this.getMarks(param.id);
            this.nazwa = param.id;
            console.log(this.items);
        });
    }
    goBack() {
        this._location.back();
    }
    getMarks(sel) {
        if (this.filtr != '') {
            this.httpClient.get('https://mixbocian.eu/mixbocianapi/sprzety.php?s=' + sel + '&e=' + this.filtr).subscribe(resp => {
                this.items = resp;
                this.czyfiltr = this.filtr;
                console.log(resp);
            });
        }
        else {
            this.httpClient.get('https://mixbocian.eu/mixbocianapi/sprzety.php?s=' + sel).subscribe(resp => {
                this.items = resp;
                this.czyfiltr = 'default';
                console.log(resp);
            });
        }
    }
}
MarkaComponent.ɵfac = function MarkaComponent_Factory(t) { return new (t || MarkaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
MarkaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkaComponent, selectors: [["app-marka"]], decls: 16, vars: 4, consts: [[1, "box"], ["id", "pic", 1, "alling"], [1, "wrasp", "mrg-100-d", "mrg-100-u"], [1, "gal_title"], [1, "zwrot"], [1, "filtertools"], [1, "cofnij", 3, "click"], [1, "search"], ["type", "text", 1, "searchbar", 3, "ngModel", "ngModelChange"], [1, "searchbut", 3, "click"], ["id", "galer"], ["class", "notfound", 4, "ngIf"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "notfound"], [3, "routerLink"], [1, "card"], ["loading", "lazy", 3, "src"]], template: function MarkaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkaComponent_Template_button_click_7_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cofnij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MarkaComponent_Template_input_ngModelChange_10_listener($event) { return ctx.filtr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkaComponent_Template_button_click_11_listener() { return ctx.getMarks(ctx.nazwa); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Filtruj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MarkaComponent_div_14_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MarkaComponent_a_15_Template, 5, 7, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Produkty firmy ", ctx.nazwa, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filtr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\r\n  height: 260px;\r\n  width: 200px;\r\n  margin: 10px;\r\n  transition: transform ease-in-out 200ms;\r\n  border-radius: 5px !important;\r\n  box-sizing: border-box;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  background-color: unset;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n@media screen and (max-width: 465px) {\r\n  .card[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    width: 130px;\r\n    height: 170px;\r\n    font-size: 12px;\r\n  }\r\n  .zwrot[_ngcontent-%COMP%]{\r\n    font-size: x-large;\r\n  }\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.07);\r\n  transition: transform ease-in-out 200ms;\r\n  border-radius: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  object-fit: scale-down;\r\n  object-position: center;\r\n  width: 100%;\r\n  height: 80%;\r\n  flex: 5;\r\n  position: relative;\r\n  background-color: unset;\r\n}\r\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n    text-align: center;\r\n    color: rgba(255, 255, 255,.5);\r\n}\r\n.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: rgba(255, 255, 255,.5);\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    text-transform: capitalize;\r\n    \r\n}\r\n.searchbar[_ngcontent-%COMP%]{\r\n  flex: 5;\r\n  color: aliceblue;\r\n  border-radius: 5px;\r\n  height: 100%;\r\n}\r\n.searchbut[_ngcontent-%COMP%]{\r\n  width: 70px;\r\n  color: aliceblue;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-weight: 100;\r\n  background-color: #2c2c2c;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n  height: 2em;\r\n  float: right;\r\n  max-width: 300px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 2px 5px 0;\r\n}\r\n.filtertools[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n.notfound[_ngcontent-%COMP%]{\r\n  color: aliceblue;\r\n  font-weight: 200;\r\n  text-align: center;\r\n  height: 260px;\r\n  max-width: 400px;\r\n  margin: 10px;\r\n  transition: transform ease-in-out 200ms;\r\n  border-radius: 5px !important;\r\n  box-sizing: border-box;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  background-color: unset;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.cofnij[_ngcontent-%COMP%]{\r\n  float: left;\r\n  margin-left: 10px;\r\n  background: rgba(45, 45, 45, 0.05);\r\n  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 67%);\r\n  border-radius: 10px;\r\n  border: 1px solid rgba(255, 255, 255, 0.08);\r\n  color: aliceblue;\r\n  padding: 5px 10px;\r\n}\r\n.cofnij[_ngcontent-%COMP%]:hover{\r\n  background: rgba(45, 45, 45, 0);\r\n  box-shadow: 0 4px 16px 0 rgb(255 255 255 / 20%);\r\n  border-radius: 10px;\r\n  border: 1px solid rgba(255, 255, 255, 0.08);\r\n  color: rgba(255, 255, 255);\r\n  transition: .1s ease-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmthLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxPQUFPO0lBQ0wsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qix3SUFBd0k7SUFDeEksMEJBQTBCOztBQUU5QjtBQUNBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHdJQUF3STtFQUN4SSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsK0NBQStDO0VBQy9DLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJtYXJrYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjAwbXM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XHJcbiAgLmNhcmR7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC56d3JvdHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDIwMG1zO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY2FyZCBpbWcge1xyXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgZmxleDogNTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbn1cclxuLmNhcmQgcHtcclxuICBmbGV4OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwuNSk7XHJcbn1cclxuLmNhcmQgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsLjUpO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgXHJcbn1cclxuLnNlYXJjaGJhcntcclxuICBmbGV4OiA1O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uc2VhcmNoYnV0e1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uc2VhcmNoe1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nOiAycHggNXB4IDA7XHJcbn1cclxuLmZpbHRlcnRvb2xze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4ubm90Zm91bmR7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAyMDBtcztcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNvZm5pantcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCA0NSwgNDUsIDAuMDUpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2IoMCAwIDAgLyA2NyUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbi5jb2ZuaWo6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0NSwgNDUsIDQ1LCAwKTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiKDI1NSAyNTUgMjU1IC8gMjAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdHJhbnNpdGlvbjogLjFzIGVhc2Utb3V0O1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item/item.component */ "ZfIV");
/* harmony import */ var _lokalizacja_lokalizacja_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lokalizacja/lokalizacja.component */ "Phzq");
/* harmony import */ var _marka_marka_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marka/marka.component */ "ukhP");
/* harmony import */ var _prezentacja_prezentacja_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prezentacja/prezentacja.component */ "hP1L");
/* harmony import */ var _spacer_spacer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spacer/spacer.component */ "jDLG");
/* harmony import */ var _sprzet_sprzet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sprzet/sprzet.component */ "9Hli");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kontakt/kontakt.component */ "horU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: "prezentacja", component: _prezentacja_prezentacja_component__WEBPACK_IMPORTED_MODULE_4__["PrezentacjaComponent"] },
    { path: "", component: _prezentacja_prezentacja_component__WEBPACK_IMPORTED_MODULE_4__["PrezentacjaComponent"], pathMatch: 'full' },
    { path: "./", component: _prezentacja_prezentacja_component__WEBPACK_IMPORTED_MODULE_4__["PrezentacjaComponent"] },
    { path: "sprzet", component: _sprzet_sprzet_component__WEBPACK_IMPORTED_MODULE_6__["SprzetComponent"] },
    { path: "sprzet/marka/:id", component: _marka_marka_component__WEBPACK_IMPORTED_MODULE_3__["MarkaComponent"] },
    { path: "sprzet/marka/:id/item/:id/:id2/:id3", component: _item_item_component__WEBPACK_IMPORTED_MODULE_1__["ItemComponent"] },
    { path: "lokalizacja", component: _lokalizacja_lokalizacja_component__WEBPACK_IMPORTED_MODULE_2__["LokalizacjaComponent"] },
    { path: "spacer", component: _spacer_spacer_component__WEBPACK_IMPORTED_MODULE_5__["SpacerComponent"] },
    { path: "kontakt", component: _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_7__["KontaktComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
});


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map