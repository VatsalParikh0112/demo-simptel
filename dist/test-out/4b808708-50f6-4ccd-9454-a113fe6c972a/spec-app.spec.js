import {
  Navbar,
  init_navbar
} from "./chunk-UCTJJZIC.js";
import {
  Footer,
  init_footer
} from "./chunk-FXPQOTY6.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-PIZRLE2B.js";
import "./chunk-6NFVCL7N.js";
import "./chunk-S7KFBCDI.js";
import "./chunk-5VAK2ZIO.js";
import "./chunk-PA2DSR3M.js";
import "./chunk-5POXWGQG.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-XNFCQGWJ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<app-navbar />\r\n<router-outlet />\r\n<app-footer />";
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_navbar();
    init_footer();
    App = class App2 {
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, Navbar, Footer],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
