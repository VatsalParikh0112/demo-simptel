import {
  Button,
  init_button
} from "./chunk-HSHJ7MJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-QAU4AL26.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/button/button.spec.ts
var require_button_spec = __commonJS({
  "src/app/shared/button/button.spec.ts"(exports) {
    init_testing();
    init_button();
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
    });
  }
});
export default require_button_spec();
//# sourceMappingURL=spec-button.spec.js.map
