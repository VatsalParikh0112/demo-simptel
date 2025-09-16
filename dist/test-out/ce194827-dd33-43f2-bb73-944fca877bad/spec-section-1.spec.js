import {
  Section1,
  init_section_1
} from "./chunk-6JVAEQWC.js";
import "./chunk-EK7TNUAC.js";
import {
  TestBed,
  init_testing
} from "./chunk-G5PIT6SS.js";
import {
  __async,
  __commonJS
} from "./chunk-SK4CH4QL.js";

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
      it("should create section-1/contact", () => {
        expect(component).toBeTruthy;
      });
    });
  }
});
export default require_section_1_spec();
//# sourceMappingURL=spec-section-1.spec.js.map
