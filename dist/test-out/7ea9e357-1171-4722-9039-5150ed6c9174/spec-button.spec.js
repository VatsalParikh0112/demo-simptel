import {
  By,
  init_platform_browser
} from "./chunk-SSETDE4N.js";
import "./chunk-NTWV227L.js";
import {
  Button,
  init_button
} from "./chunk-TMWGX3BC.js";
import "./chunk-KHG37MZI.js";
import "./chunk-YQNEF26H.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-4QWUHEDH.js";
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
        component.label = "default value";
        fixture.detectChanges();
        const buttonElement = fixture.debugElement.query(By.css("button")).nativeElement;
        expect(buttonElement.textContent).toContain("default value");
      });
      it("should emit msg when notify parent func is called", () => {
        spyOn(component.sendMessage, "emit");
        component.notifyParent;
        expect(component.sendMessage.emit).toHaveBeenCalledWith("message from child");
      });
    });
  }
});
export default require_button_spec();
//# sourceMappingURL=spec-button.spec.js.map
