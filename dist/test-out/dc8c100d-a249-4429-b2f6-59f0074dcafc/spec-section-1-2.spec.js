import {
  Section1,
  init_section_1
} from "./chunk-PS3RCJFA.js";
import "./chunk-OYM5K6GJ.js";
import "./chunk-7DRXM5VD.js";
import "./chunk-XC7FPHGX.js";
import {
  TestBed,
  init_testing
} from "./chunk-6SUJJR5C.js";
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
