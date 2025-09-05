import {
  Section1,
  init_section_1
} from "./chunk-YQZUDNUU.js";
import "./chunk-OSWBE45X.js";
import "./chunk-2AUP5XJE.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-5EHHTNS5.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/routes/home/section-1/section-1.spec.ts
var require_section_1_spec = __commonJS({
  "src/app/routes/home/section-1/section-1.spec.ts"(exports) {
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
    });
  }
});
export default require_section_1_spec();
//# sourceMappingURL=spec-section-1-2.spec.js.map
