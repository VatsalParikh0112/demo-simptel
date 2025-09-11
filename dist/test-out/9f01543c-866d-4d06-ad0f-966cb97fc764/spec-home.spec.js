import {
  Section3,
  init_section_3
} from "./chunk-E4EG3S36.js";
import {
  Section1,
  init_section_1
} from "./chunk-QXKCDK3S.js";
import {
  Section2,
  init_section_2
} from "./chunk-DMILJCSN.js";
import "./chunk-U72EJBPX.js";
import "./chunk-D3MJZKMG.js";
import "./chunk-TP2KW4NN.js";
import "./chunk-VRZOOBL7.js";
import "./chunk-A22RNYMK.js";
import "./chunk-ZHO4JMLU.js";
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
