import {
  Section3,
  init_section_3
} from "./chunk-A2QSA3C5.js";
import "./chunk-6V25ZAUD.js";
import "./chunk-GQ6XR3NP.js";
import "./chunk-SSETDE4N.js";
import "./chunk-NTWV227L.js";
import "./chunk-TMWGX3BC.js";
import "./chunk-KHG37MZI.js";
import "./chunk-YQNEF26H.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-4QWUHEDH.js";
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
