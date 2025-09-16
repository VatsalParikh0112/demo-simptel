import {
  Router,
  init_router
} from "./chunk-IWWYQFDP.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NG264RT6.js";
import {
  __esm,
  __name,
  __publicField
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\layout\navbar\navbar.html
var navbar_default;
var init_navbar = __esm({
  "angular:jit:template:src\\app\\layout\\navbar\\navbar.html"() {
    navbar_default = `<nav class="bg-gray-200 py-[2vh] px-[1vw] flex justify-between">\r
  <div (click)="clickEvent('')" class="cursor-pointer">Logo</div>\r
  <ul class="flex space-x-4 gap-[20px]">\r
    <li (click)="clickEvent('')" class="cursor-pointer">Home</li>\r
    <li (click)="clickEvent('about')" class="cursor-pointer">About</li>\r
    <li (click)="clickEvent('contact')" class="cursor-pointer">Contact</li>\r
    <li (click)="clickEvent('api')" class="cursor-pointer">API</li>\r
  </ul>\r
  <div>bell</div>\r
</nav>`;
  }
});

// angular:jit:style:src\app\layout\navbar\navbar.css
var navbar_default2;
var init_navbar2 = __esm({
  "angular:jit:style:src\\app\\layout\\navbar\\navbar.css"() {
    navbar_default2 = "/* src/app/layout/navbar/navbar.css */\n/*# sourceMappingURL=navbar.css.map */\n";
  }
});

// src/app/layout/navbar/navbar.ts
var _a, Navbar;
var init_navbar3 = __esm({
  "src/app/layout/navbar/navbar.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar();
    init_navbar2();
    init_core();
    init_router();
    Navbar = (_a = class {
      router;
      navigateTo() {
        throw new Error("Method not implemented.");
      }
      constructor(router) {
        this.router = router;
      }
      clickEvent(path) {
        this.router.navigate([path]);
      }
    }, __name(_a, "Navbar"), __publicField(_a, "ctorParameters", /* @__PURE__ */ __name(() => [
      { type: Router }
    ], "ctorParameters")), _a);
    Navbar = __decorate([
      Component({
        selector: "app-navbar",
        imports: [],
        template: navbar_default,
        styles: [navbar_default2]
      })
    ], Navbar);
  }
});

export {
  Navbar,
  init_navbar3 as init_navbar
};
//# sourceMappingURL=chunk-TMXSZQFP.js.map
