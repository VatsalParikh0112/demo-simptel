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
    init_router();
    init_navbar();
    describe("Navbar", () => {
      let component;
      let fixture;
      let routerSpy;
      let instance;
      beforeEach(() => __async(null, null, function* () {
        instance = new Navbar(routerSpy);
        const spy = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [Navbar],
          providers: [{ provide: Router, useValue: spy }]
        }).compileComponents();
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        routerSpy = TestBed.inject(Router);
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("throw error when navigateTo func called", () => {
        expect(() => instance.navigateTo()).toThrowError("Method not implemented.");
      });
      it("should navigate to path when clickEvent func called", () => {
        component.clickEvent("/about");
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/about"]);
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-navbar.spec.js.map
