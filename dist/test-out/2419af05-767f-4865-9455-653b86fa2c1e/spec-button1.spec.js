import {
  Button1,
  init_button1
} from "./chunk-WTQ225JB.js";
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
      it("Button should be created", () => {
        expect(component).toBeTruthy();
      });
      it("should display label when no label input is provided", () => {
        fixture.detectChanges();
        expect(component.label()).toBe("");
      });
      it("should display label when input is provided", () => {
        fixture.componentRef.setInput("label", "Home button");
        fixture.detectChanges();
        expect(component.label()).toBe("Home button");
      });
      it("should navigate to root when redirect func is called", () => {
        component.redirect();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/"]);
      });
      it("should redirect to root when button is clicked", () => {
        const button = fixture.nativeElement.querySelector("button");
        button.click();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/"]);
      });
    });
  }
});
export default require_button1_spec();
//# sourceMappingURL=spec-button1.spec.js.map
