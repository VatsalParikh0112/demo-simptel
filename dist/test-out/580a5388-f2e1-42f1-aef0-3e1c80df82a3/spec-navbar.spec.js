import {
  Navbar,
  init_navbar
} from "./chunk-X7AWFODK.js";
import "./chunk-HB7QOBLV.js";
import "./chunk-FW6CPEPJ.js";
import "./chunk-2AUP5XJE.js";
import "./chunk-6JXGQUWB.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-5EHHTNS5.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/layout/navbar/navbar.spec.ts
var require_navbar_spec = __commonJS({
  "src/app/layout/navbar/navbar.spec.ts"(exports) {
    init_testing();
    init_navbar();
    describe("Navbar", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Navbar]
        }).compileComponents();
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-navbar.spec.js.map
