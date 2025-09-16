import {
  Button1,
  init_button1
} from "./chunk-6BYBHNR2.js";
import {
  Router,
  init_router
} from "./chunk-VYGQZE4F.js";
import "./chunk-FF5CBA4F.js";
import "./chunk-RJRKKRDZ.js";
import "./chunk-GPW657JF.js";
import "./chunk-C2AW5P2B.js";
import "./chunk-DB6OHPQI.js";
import {
  TestBed,
  init_testing
} from "./chunk-G5PIT6SS.js";
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
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("button")?.textContent?.trim()).toBe("");
      });
      it("should display label when input is provided", () => {
        fixture.componentRef.setInput("label", "Home button");
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("button")?.textContent?.trim()).toBe("Home button");
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
