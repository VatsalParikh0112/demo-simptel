import {
  Button1,
  init_button1
} from "./chunk-ZXMXCF7W.js";
import "./chunk-GQ6XR3NP.js";
import "./chunk-SSETDE4N.js";
import "./chunk-NTWV227L.js";
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
    });
  }
});
export default require_button1_spec();
//# sourceMappingURL=spec-button1.spec.js.map
