import {
  By,
  init_platform_browser
} from "./chunk-WKMCOWVR.js";
import "./chunk-VIJCD5PI.js";
import {
  Button,
  init_button
} from "./chunk-P6Z4KRN2.js";
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

// src/app/shared/button/button.spec.ts
var require_button_spec = __commonJS({
  "src/app/shared/button/button.spec.ts"(exports) {
    init_testing();
    init_button();
    init_platform_browser();
    describe("Button Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Button]
        }).compileComponents();
        fixture = TestBed.createComponent(Button);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should render default label when no input is provided", () => {
        const buttonElement = fixture.debugElement.query(By.css("button")).nativeElement;
        expect(buttonElement.textContent?.trim()).toBe("");
      });
      it("should render provided label in the button", () => {
        fixture.componentRef.setInput("label", "Click Me");
        fixture.detectChanges();
        const buttonElement = fixture.debugElement.query(By.css("button")).nativeElement;
        expect(buttonElement.textContent).toContain("Click Me");
      });
      it("should emit message when notifyParent() is called", () => {
        spyOn(component.sendMessage, "emit");
        component.notifyParent();
        expect(component.sendMessage.emit).toHaveBeenCalledWith("message from child");
      });
      it("should emit message when button is clicked", () => {
        spyOn(component.sendMessage, "emit");
        const buttonElement = fixture.debugElement.query(By.css("button")).nativeElement;
        buttonElement.click();
        expect(component.sendMessage.emit).toHaveBeenCalledWith("message from child");
      });
    });
  }
});
export default require_button_spec();
//# sourceMappingURL=spec-button.spec.js.map
