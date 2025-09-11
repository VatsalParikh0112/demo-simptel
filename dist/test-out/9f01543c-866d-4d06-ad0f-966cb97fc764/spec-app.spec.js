import {
  Footer,
  init_footer
} from "./chunk-VMGNP3YM.js";
import {
  Navbar,
  init_navbar
} from "./chunk-LUIBJE72.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-U72EJBPX.js";
import "./chunk-D3MJZKMG.js";
import "./chunk-TP2KW4NN.js";
import "./chunk-LG7WSJNT.js";
import "./chunk-4MYL2ZRY.js";
import "./chunk-5POXWGQG.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-WR42GNM3.js";
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
      val = 0;
      calculate(num1, num2) {
        let val = num1 + num2;
        return val;
      }
      saveData() {
        let sum = this.calculate(5, 15);
        return sum;
      }
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
    fdescribe("App", () => {
      let component;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
        const fixture = TestBed.createComponent(App);
        component = fixture.componentInstance;
      }));
      it("should create the app", () => {
        expect(component).toBeTruthy();
      });
      it("should check when calculate function is called", () => {
        spyOn(component, "calculate");
        expect(component.saveData()).toHaveBeenCalled();
      });
      it("should add 2 numbers when savedata func is called", () => {
        spyOn(component, "calculate").and.returnValues(20);
        let sum = component.saveData();
        expect(component.calculate).toHaveBeenCalledWith(5, 15);
        expect(sum).toBe(20);
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
