import {
  Navbar,
  init_navbar
} from "./chunk-TMXSZQFP.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-IWWYQFDP.js";
import {
  Footer,
  init_footer
} from "./chunk-RO6HNA42.js";
import {
  By,
  init_platform_browser
} from "./chunk-WXNKG2KK.js";
import "./chunk-T33MDXG2.js";
import "./chunk-JRNYA72K.js";
import "./chunk-NMFPFLPZ.js";
import "./chunk-YNZYKSQ4.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-NG264RT6.js";
import {
  __async,
  __commonJS,
  __esm,
  __name
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = '<app-navbar />\r\n<router-outlet />\r\n\r\n<div class=" flex gap-10 items-center ">\r\n    <button id="increase" (click)="increase()" class=" bg-amber-300 text-xl border p-2 rounded cursor-pointer">Increasing Number</button>\r\n    <p class=" text-xl border p-2 px-4 rounded-xl bg-amber-100 ">{{num}}</p>\r\n    <button id="decrease" (click)="decrease()" class=" bg-amber-300 text-xl border p-2 rounded cursor-pointer">Decreasing Number</button>\r\n</div>\r\n\r\n<app-footer />';
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
var _a, App;
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
    App = (_a = class {
      val = 0;
      num = 0;
      calculate(num1, num2) {
        let val = num1 + num2;
        return val;
      }
      saveData() {
        let sum = this.calculate(5, 15);
        return sum;
      }
      increase() {
        this.num++;
      }
      decrease() {
        this.num--;
      }
    }, __name(_a, "App"), _a);
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
    init_platform_browser();
    describe("App", () => {
      let component;
      let fixture;
      let deb;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
        fixture = TestBed.createComponent(App);
        deb = fixture.debugElement;
        component = fixture.componentInstance;
      }));
      it("should create the app", () => {
        expect(component).toBeTruthy();
      });
      it("should check when calculate function is called", () => {
        spyOn(component, "calculate");
        component.saveData();
        expect(component.calculate).toHaveBeenCalled();
      });
      it("should add 2 numbers when savedata func is called", () => {
        spyOn(component, "calculate").and.returnValues(20);
        let sum = component.saveData();
        expect(component.calculate).toHaveBeenCalledWith(5, 15);
        expect(sum).toBe(20);
      });
      it("should increase value when increase function is called", () => {
        const btnI = deb.query(By.css("#increase"));
        btnI.triggerEventHandler("click", {});
        fixture.detectChanges();
        expect(component.num).toBe(1);
      });
      it("should decrease value when decrease function is called", () => {
        component.num = 2;
        fixture.detectChanges();
        const btnD = deb.query(By.css("#decrease"));
        btnD.triggerEventHandler("click", {});
        fixture.detectChanges();
        expect(component.num).toBe(1);
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
