import {
  Navbar,
  init_navbar
} from "./chunk-TMXSZQFP.js";
import {
  Router,
  init_router
} from "./chunk-IWWYQFDP.js";
import "./chunk-WXNKG2KK.js";
import "./chunk-T33MDXG2.js";
import "./chunk-JRNYA72K.js";
import "./chunk-NMFPFLPZ.js";
import "./chunk-YNZYKSQ4.js";
import {
  TestBed,
  init_testing
} from "./chunk-NG264RT6.js";
import {
  __async,
  __commonJS
} from "./chunk-SK4CH4QL.js";

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
