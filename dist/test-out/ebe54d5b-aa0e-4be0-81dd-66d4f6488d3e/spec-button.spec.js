import {
  By,
  init_platform_browser
} from "./chunk-UQNM7CEO.js";
import "./chunk-X2HAOO2H.js";
import "./chunk-QVPPDP7U.js";
import "./chunk-7FBSTBSQ.js";
import "./chunk-5POXWGQG.js";
import {
  Button,
  init_button
} from "./chunk-IGPLU4P2.js";
import {
  TestBed,
  init_testing
} from "./chunk-FU54S24V.js";
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
    fdescribe("Button", () => {
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
