import {
  Navbar,
  init_navbar
} from "./chunk-ZQFA4HEI.js";
import {
  Router,
  init_router
} from "./chunk-PIZRLE2B.js";
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
    init_router();
    describe("Navbar", () => {
      let component;
      let fixture;
      const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Navbar],
          providers: [
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create Navbar component", () => {
        expect(component).toBeTruthy();
      });
      it("should call router.navigate when correct path on clickEvent", () => {
        const path = "/home";
        component.clickEvent(path);
        expect(routerSpy.navigate).toHaveBeenCalledWith([path]);
      });
      it("should throw error when navigate to func called", () => {
        expect(() => component.navigateTo()).toThrowError("Method not implemented.");
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-navbar.spec.js.map
