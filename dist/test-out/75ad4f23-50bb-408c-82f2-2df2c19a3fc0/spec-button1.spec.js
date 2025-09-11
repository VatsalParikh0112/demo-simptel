import {
  Button1,
  init_button1
} from "./chunk-IQPSX6NQ.js";
import {
  Router,
  init_router
} from "./chunk-U72EJBPX.js";
import "./chunk-D3MJZKMG.js";
import "./chunk-TP2KW4NN.js";
import "./chunk-LG7WSJNT.js";
import "./chunk-4MYL2ZRY.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-WR42GNM3.js";
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
