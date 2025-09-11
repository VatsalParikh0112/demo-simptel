import {
  By,
  init_platform_browser
} from "./chunk-D3MJZKMG.js";
import "./chunk-TP2KW4NN.js";
import {
  Button,
  init_button
} from "./chunk-A22RNYMK.js";
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
      it("should have default label as empty string", () => {
        expect(component.label()).toBe("");
      });
      it("should update label when input is changed", () => {
        fixture.componentRef.setInput("label", "Click Me");
        fixture.detectChanges();
        expect(component.label()).toBe("Click Me");
        const buttons = fixture.debugElement.queryAll(By.css("button"));
        expect(buttons[0].nativeElement.textContent).toContain("Click Me");
        expect(buttons[1].nativeElement.textContent).toContain("Click Me");
      });
      it("should emit message when notifyParent() is called directly", () => {
        spyOn(component.sendMessage, "emit");
        component.notifyParent();
        expect(component.sendMessage.emit).toHaveBeenCalledWith("message from child");
      });
      it("should emit message when second button (with click handler) is clicked", () => {
        spyOn(component.sendMessage, "emit");
        const buttons = fixture.debugElement.queryAll(By.css("button"));
        buttons[1].nativeElement.click();
        expect(component.sendMessage.emit).toHaveBeenCalledWith("message from child");
      });
      it("should not emit before notifyParent() is called", () => {
        spyOn(component.sendMessage, "emit");
        expect(component.sendMessage.emit).not.toHaveBeenCalled();
      });
      it("should emit multiple times if notifyParent() is called multiple times", () => {
        spyOn(component.sendMessage, "emit");
        component.notifyParent();
        component.notifyParent();
        expect(component.sendMessage.emit).toHaveBeenCalledTimes(2);
      });
    });
  }
});
export default require_button_spec();
//# sourceMappingURL=spec-button.spec.js.map
