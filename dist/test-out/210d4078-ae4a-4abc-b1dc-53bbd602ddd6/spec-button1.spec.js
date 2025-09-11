import {
  Button1,
  init_button1
} from "./chunk-N7UNDNV7.js";
import {
  Router,
  init_router
} from "./chunk-COME2MOS.js";
import "./chunk-EA5IL4P5.js";
import "./chunk-QBUWWL7N.js";
import "./chunk-GNCOCR3Z.js";
import "./chunk-5N6WDKPD.js";
import "./chunk-XC7FPHGX.js";
import {
  TestBed,
  init_testing
} from "./chunk-35QTXDGA.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/button1/button1.spec.ts
var require_button1_spec = __commonJS({
  "src/app/shared/button1/button1.spec.ts"(exports) {
    init_testing();
    init_router();
    init_button1();
    describe("Button1", () => {
      let component;
      let fixture;
      let routerSpy;
      beforeEach(() => __async(null, null, function* () {
        const spy = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [Button1],
          providers: [{ provide: Router, useValue: spy }]
        }).compileComponents();
        fixture = TestBed.createComponent(Button1);
        component = fixture.componentInstance;
        routerSpy = TestBed.inject(Router);
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should render label in html", () => {
        expect(component.label()).toBe("");
      });
      it("should call router.navigate when redirect function is called ", () => {
        component.redirect();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/"]);
      });
    });
  }
});
export default require_button1_spec();
//# sourceMappingURL=spec-button1.spec.js.map
