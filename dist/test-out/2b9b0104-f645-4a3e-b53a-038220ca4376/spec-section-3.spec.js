import {
  Section3,
  init_section_3
} from "./chunk-A535BKRA.js";
import "./chunk-OJAUW2JR.js";
import "./chunk-5HH5P2TE.js";
import "./chunk-5VZDVAAZ.js";
import "./chunk-KU443DCB.js";
import "./chunk-TSMMHVVN.js";
import {
  TestBed,
  init_testing
} from "./chunk-WAH5LQNR.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/routes/home/section-3/section-3.spec.ts
var require_section_3_spec = __commonJS({
  "src/app/routes/home/section-3/section-3.spec.ts"(exports) {
    init_testing();
    init_section_3();
    describe("Section3", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Section3]
        }).compileComponents();
        fixture = TestBed.createComponent(Section3);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_section_3_spec();
//# sourceMappingURL=spec-section-3.spec.js.map
