import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NG264RT6.js";
import {
  __esm,
  __name
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\layout\footer\footer.html
var footer_default;
var init_footer = __esm({
  "angular:jit:template:src\\app\\layout\\footer\\footer.html"() {
    footer_default = '<footer class="bg-gray-800 p-4">\r\n  <p class="text-white">Footer Content</p>\r\n</footer>\r\n';
  }
});

// angular:jit:style:src\app\layout\footer\footer.css
var footer_default2;
var init_footer2 = __esm({
  "angular:jit:style:src\\app\\layout\\footer\\footer.css"() {
    footer_default2 = "/* src/app/layout/footer/footer.css */\n/*# sourceMappingURL=footer.css.map */\n";
  }
});

// src/app/layout/footer/footer.ts
var _a, Footer;
var init_footer3 = __esm({
  "src/app/layout/footer/footer.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer();
    init_footer2();
    init_core();
    Footer = (_a = class {
    }, __name(_a, "Footer"), _a);
    Footer = __decorate([
      Component({
        selector: "app-footer",
        imports: [],
        template: footer_default,
        styles: [footer_default2]
      })
    ], Footer);
  }
});

export {
  Footer,
  init_footer3 as init_footer
};
//# sourceMappingURL=chunk-RO6HNA42.js.map
