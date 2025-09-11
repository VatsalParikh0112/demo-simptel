import {
  Button2,
  init_button_2
} from "./chunk-6OS7YJTV.js";
import {
  TestBed,
  init_testing
} from "./chunk-IJMVPFYS.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

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
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should render label in html", () => {
        expect(component.label()).toBe("");
      });
      it("should emit the path when function is called", () => {
        const emitSpy = spyOn(component.goToContact, "emit");
        const expectedPath = "/contact";
        component.changePage();
        expect(emitSpy).toHaveBeenCalledWith(expectedPath);
      });
    });
  }
});
export default require_button_2_spec();
//# sourceMappingURL=spec-button-2.spec.js.map
