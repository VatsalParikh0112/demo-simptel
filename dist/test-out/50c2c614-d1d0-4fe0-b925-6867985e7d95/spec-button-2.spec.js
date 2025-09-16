import {
  Button2,
  init_button_2
} from "./chunk-6FM4CIZX.js";
import {
  TestBed,
  init_testing
} from "./chunk-G5PIT6SS.js";
import {
  __async,
  __commonJS
} from "./chunk-SK4CH4QL.js";

// src/app/shared/button-2/button-2.spec.ts
var require_button_2_spec = __commonJS({
  "src/app/shared/button-2/button-2.spec.ts"(exports) {
    init_testing();
    init_button_2();
    fdescribe("Button2", () => {
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
      it("should create button2", () => {
        expect(component).toBeTruthy();
      });
      it("should handle an empty label", () => {
        fixture.componentRef.setInput("label", "ClickMe");
        fixture.detectChanges();
        expect(component.label()).toBe("ClickMe");
      });
      it('should emit "/changePage" when changePage func is called', () => {
        spyOn(component.goToContact, "emit");
        component.changePage();
        expect(component.goToContact.emit).toHaveBeenCalledWith("/contact");
      });
    });
  }
});
export default require_button_2_spec();
//# sourceMappingURL=spec-button-2.spec.js.map
