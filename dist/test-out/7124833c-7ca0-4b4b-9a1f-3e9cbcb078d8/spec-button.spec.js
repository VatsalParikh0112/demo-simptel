import {
  Button,
  init_button
} from "./chunk-BE7T4HPJ.js";
import {
  By,
  init_platform_browser
} from "./chunk-6NFVCL7N.js";
import "./chunk-S7KFBCDI.js";
import "./chunk-5VAK2ZIO.js";
import "./chunk-PA2DSR3M.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-XNFCQGWJ.js";
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
    describe("Button", () => {
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
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should render label in html", () => {
        fixture.componentRef.setInput("label", "");
        fixture.detectChanges();
        const buttonElement = fixture.debugElement.query(By.css("button")).nativeElement;
        expect(buttonElement.textContent).toContain("");
      });
      it("should emit msg when notify parent func is called", () => {
        spyOn(component.sendMessage, "emit");
        component.notifyParent();
        expect(component.sendMessage.emit).toHaveBeenCalledWith("message from child");
      });
    });
  }
});
export default require_button_spec();
//# sourceMappingURL=spec-button.spec.js.map
