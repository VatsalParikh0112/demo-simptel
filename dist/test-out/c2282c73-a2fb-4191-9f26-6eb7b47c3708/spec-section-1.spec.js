import {
  Section1,
  init_section_1
} from "./chunk-OHW3CFV4.js";
import "./chunk-Y3GW7BFK.js";
import {
  TestBed,
  init_testing
} from "./chunk-IJMVPFYS.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/routes/contact/section-1/section-1.spec.ts
var require_section_1_spec = __commonJS({
  "src/app/routes/contact/section-1/section-1.spec.ts"(exports) {
    init_testing();
    init_section_1();
    describe("Section1", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Section1]
        }).compileComponents();
        fixture = TestBed.createComponent(Section1);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should emit the correct message when notifyParent is called", () => {
        const emitSpy = spyOn(component.messageEvent, "emit");
        const expectedMessage = "Hello from the child!";
        component.notifyParent();
        expect(emitSpy).toHaveBeenCalledTimes(1);
        expect(emitSpy).toHaveBeenCalledWith(expectedMessage);
      });
    });
  }
});
export default require_section_1_spec();
//# sourceMappingURL=spec-section-1.spec.js.map
