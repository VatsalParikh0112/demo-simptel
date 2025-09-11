import {
  Section3,
  init_section_3
} from "./chunk-7LM553GP.js";
import {
  Section2,
  init_section_2
} from "./chunk-EAKM4ROB.js";
import {
  Section1,
  init_section_1
} from "./chunk-4ID2NQ3Y.js";
import "./chunk-LWKPXK6F.js";
import "./chunk-2AGP5IRF.js";
import "./chunk-LAZKEOPH.js";
import "./chunk-PIZRLE2B.js";
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

// angular:jit:template:src\app\routes\home\home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src\\app\\routes\\home\\home.html"() {
    home_default = '<app-section-1 />\r\n\r\n<div class=" text-red-400 test-2xl ">Home</div>\r\n\r\n<app-section-2 [name]="parentName" [age]="parentAge" />\r\n\r\n<app-section-3 userName="John Doe" />';
  }
});

// angular:jit:style:src\app\routes\home\home.css
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src\\app\\routes\\home\\home.css"() {
    home_default2 = "/* src/app/routes/home/home.css */\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/routes/home/home.ts
var Home;
var init_home3 = __esm({
  "src/app/routes/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_section_1();
    init_section_2();
    init_section_3();
    Home = class Home2 {
      parentName = "Alice";
      parentAge = 30;
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        standalone: true,
        imports: [Section1, Section2, Section3],
        template: home_default,
        styles: [home_default2]
      })
    ], Home);
  }
});

// src/app/routes/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/routes/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("when parentAge is called its age should be 30.", () => {
        expect(component.parentAge).toBe(30);
      });
      it("when parentname is called its name should be Alice.", () => {
        expect(component.parentName).toBe("Alice");
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map
