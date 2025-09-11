import {
  Navbar,
  init_navbar
} from "./chunk-ZQFA4HEI.js";
import "./chunk-PIZRLE2B.js";
import "./chunk-6NFVCL7N.js";
import "./chunk-S7KFBCDI.js";
import "./chunk-5VAK2ZIO.js";
import "./chunk-PA2DSR3M.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-XNFCQGWJ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/layout/navbar/navbar.spec.ts
var require_navbar_spec = __commonJS({
  "src/app/layout/navbar/navbar.spec.ts"(exports) {
    init_testing();
    init_navbar();
    fdescribe("Navbar", () => {
      let component;
      let fixture;
      const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [Navbar]
        }).compileComponents();
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should navigate to the given path when clickEvent is called", () => {
        const testPath = "/about";
        component.clickEvent(testPath);
        expect(routerSpy.navigate).toHaveBeenCalledWith([testPath]);
      });
      it("should throw an error when navigateTo is called", () => {
        expect(() => {
          component.navigateTo();
        }).toThrowError("Method not implemented.");
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-navbar.spec.js.map
