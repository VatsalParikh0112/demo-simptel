import {
  Navbar,
  init_navbar
} from "./chunk-SFVBLOQV.js";
import {
  Router,
  init_router
} from "./chunk-KNNIIOSW.js";
import "./chunk-WKMCOWVR.js";
import "./chunk-VIJCD5PI.js";
import "./chunk-7DRXM5VD.js";
import "./chunk-K42GGLJU.js";
import "./chunk-XC7FPHGX.js";
import {
  TestBed,
  init_testing
} from "./chunk-6SUJJR5C.js";
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
