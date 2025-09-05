import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-QAU4AL26.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\api\api.html
var api_default;
var init_api = __esm({
  "angular:jit:template:src\\app\\routes\\api\\api.html"() {
    api_default = "";
  }
});

// angular:jit:style:src\app\routes\api\api.css
var api_default2;
var init_api2 = __esm({
  "angular:jit:style:src\\app\\routes\\api\\api.css"() {
    api_default2 = "/* src/app/routes/api/api.css */\n/*# sourceMappingURL=api.css.map */\n";
  }
});

// src/app/routes/api/api.ts
var API;
var init_api3 = __esm({
  "src/app/routes/api/api.ts"() {
    "use strict";
    init_tslib_es6();
    init_api();
    init_api2();
    init_core();
    API = class API2 {
    };
    API = __decorate([
      Component({
        selector: "app-api",
        imports: [],
        template: api_default,
        styles: [api_default2]
      })
    ], API);
  }
});

// src/app/routes/api/api.spec.ts
var require_api_spec = __commonJS({
  "src/app/routes/api/api.spec.ts"(exports) {
    init_testing();
    init_api3();
    describe("API", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [API]
        }).compileComponents();
        fixture = TestBed.createComponent(API);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_api_spec();
//# sourceMappingURL=spec-api-2.spec.js.map
