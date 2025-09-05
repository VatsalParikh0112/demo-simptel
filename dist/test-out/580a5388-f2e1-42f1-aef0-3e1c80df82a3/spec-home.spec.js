import {
  Section3,
  init_section_3
} from "./chunk-MH2UGGFV.js";
import {
  Section1,
  init_section_1
} from "./chunk-YQZUDNUU.js";
import "./chunk-OSWBE45X.js";
import {
  Section2,
  init_section_2
} from "./chunk-IQLZBODD.js";
import "./chunk-L4D55OKL.js";
import "./chunk-KTA4YVCG.js";
import "./chunk-HB7QOBLV.js";
import "./chunk-FW6CPEPJ.js";
import "./chunk-2AUP5XJE.js";
import "./chunk-6JXGQUWB.js";
import "./chunk-5POXWGQG.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-5EHHTNS5.js";
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
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map
