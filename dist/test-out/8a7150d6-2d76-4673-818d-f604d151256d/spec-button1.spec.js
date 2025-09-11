import {
  Button1,
  init_button1
} from "./chunk-EMD3K6BR.js";
import "./chunk-JJSVGMPK.js";
import "./chunk-UQNM7CEO.js";
import "./chunk-X2HAOO2H.js";
import "./chunk-QVPPDP7U.js";
import "./chunk-7FBSTBSQ.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-FU54S24V.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/button1/button1.spec.ts
var require_button1_spec = __commonJS({
  "src/app/shared/button1/button1.spec.ts"(exports) {
    init_testing();
    init_button1();
    describe("Button1", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Button1]
        }).compileComponents();
        fixture = TestBed.createComponent(Button1);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should render label ");
    });
  }
});
export default require_button1_spec();
//# sourceMappingURL=spec-button1.spec.js.map
