import {
  Section2,
  init_section_2
} from "./chunk-WXDTILG3.js";
import {
  TestBed,
  init_testing
} from "./chunk-WAH5LQNR.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/routes/home/section-2/section-2.spec.ts
var require_section_2_spec = __commonJS({
  "src/app/routes/home/section-2/section-2.spec.ts"(exports) {
    init_testing();
    init_section_2();
    describe("Section2", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Section2]
        }).compileComponents();
        fixture = TestBed.createComponent(Section2);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_section_2_spec();
//# sourceMappingURL=spec-section-2.spec.js.map
