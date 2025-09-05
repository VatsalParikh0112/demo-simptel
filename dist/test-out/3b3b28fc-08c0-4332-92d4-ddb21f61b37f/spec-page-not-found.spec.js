import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-4QWUHEDH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\page-not-found\page-not-found.html
var page_not_found_default;
var init_page_not_found = __esm({
  "angular:jit:template:src\\app\\routes\\page-not-found\\page-not-found.html"() {
    page_not_found_default = "<p>page-not-found works!</p>\r\n";
  }
});

// angular:jit:style:src\app\routes\page-not-found\page-not-found.css
var page_not_found_default2;
var init_page_not_found2 = __esm({
  "angular:jit:style:src\\app\\routes\\page-not-found\\page-not-found.css"() {
    page_not_found_default2 = "/* src/app/routes/page-not-found/page-not-found.css */\n/*# sourceMappingURL=page-not-found.css.map */\n";
  }
});

// src/app/routes/page-not-found/page-not-found.ts
var PageNotFound;
var init_page_not_found3 = __esm({
  "src/app/routes/page-not-found/page-not-found.ts"() {
    "use strict";
    init_tslib_es6();
    init_page_not_found();
    init_page_not_found2();
    init_core();
    PageNotFound = class PageNotFound2 {
    };
    PageNotFound = __decorate([
      Component({
        selector: "app-page-not-found",
        imports: [],
        template: page_not_found_default,
        styles: [page_not_found_default2]
      })
    ], PageNotFound);
  }
});

// src/app/routes/page-not-found/page-not-found.spec.ts
var require_page_not_found_spec = __commonJS({
  "src/app/routes/page-not-found/page-not-found.spec.ts"(exports) {
    init_testing();
    init_page_not_found3();
    describe("PageNotFound", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [PageNotFound]
        }).compileComponents();
        fixture = TestBed.createComponent(PageNotFound);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_page_not_found_spec();
//# sourceMappingURL=spec-page-not-found.spec.js.map
