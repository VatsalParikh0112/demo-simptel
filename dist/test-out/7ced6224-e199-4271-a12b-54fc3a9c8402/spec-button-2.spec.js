import {
  Button2,
  init_button_2
} from "./chunk-62WJWZPL.js";
import {
  TestBed,
  init_testing
} from "./chunk-NG264RT6.js";
import {
  __async,
  __commonJS
} from "./chunk-SK4CH4QL.js";

// src/app/shared/button-2/button-2.spec.ts
var require_button_2_spec = __commonJS({
  "src/app/shared/button-2/button-2.spec.ts"(exports) {
    init_testing();
    init_button_2();
    describe("Button2", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Button2]
        }).compileComponents();
        fixture = TestBed.createComponent(Button2);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create button-2", () => {
        expect(component).toBeTruthy();
      });
      it("should display label when no label is provided", () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("button")?.textContent?.trim()).toBe("");
      });
      it("should display label when label is provided", () => {
        fixture.componentRef.setInput("label", "Home");
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("button")?.textContent?.trim()).toBe("Home");
      });
      it("should emit goto contact when button in templet is called", () => {
        let emittedValue;
        component.goToContact.subscribe((value) => {
          emittedValue = value;
        });
        component.changePage();
        expect(emittedValue).toBe("contact-page");
      });
      it("should emit goto contact when button in templet is clicked", () => {
        let emittedValue;
        component.goToContact.subscribe((value) => {
          emittedValue = value;
        });
        const button = fixture.nativeElement.querySelector("button");
        button.click();
        expect(emittedValue).toBe("contact-pa");
      });
    });
  }
});
export default require_button_2_spec();
//# sourceMappingURL=spec-button-2.spec.js.map
