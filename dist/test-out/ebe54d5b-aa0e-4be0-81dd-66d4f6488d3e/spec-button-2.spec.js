import {
  Button2,
  init_button_2
} from "./chunk-NXYMQJXH.js";
import {
  By,
  init_platform_browser
} from "./chunk-UQNM7CEO.js";
import "./chunk-X2HAOO2H.js";
import "./chunk-QVPPDP7U.js";
import "./chunk-7FBSTBSQ.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-FU54S24V.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/button-2/button-2.spec.ts
var require_button_2_spec = __commonJS({
  "src/app/shared/button-2/button-2.spec.ts"(exports) {
    init_testing();
    init_button_2();
    init_platform_browser();
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
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should render label in html", () => {
        fixture.componentRef.setInput("label", "default value");
        fixture.detectChanges();
        const Button22 = fixture.debugElement.query(By.css("button")).nativeElement;
        expect(Button22.label()).toContain("default value");
      });
    });
  }
});
export default require_button_2_spec();
//# sourceMappingURL=spec-button-2.spec.js.map
