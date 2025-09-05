import {
  Section3,
  init_section_3
} from "./chunk-WODLZQ4Y.js";
import "./chunk-YD4NWABC.js";
import "./chunk-VXF2LDSD.js";
import "./chunk-NTOOIYGM.js";
import "./chunk-VDRUENN3.js";
import "./chunk-HSHJ7MJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-QAU4AL26.js";
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
