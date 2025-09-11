import {
  Section1,
  init_section_1
} from "./chunk-4ID2NQ3Y.js";
import {
  FormsModule,
  init_forms
} from "./chunk-LWKPXK6F.js";
import "./chunk-5VAK2ZIO.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-XNFCQGWJ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/routes/home/section-1/section-1.spec.ts
var require_section_1_spec = __commonJS({
  "src/app/routes/home/section-1/section-1.spec.ts"(exports) {
    init_testing();
    init_section_1();
    init_forms();
    describe("Section1", () => {
      let component;
      let fixture;
      let logSpy;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Section1, FormsModule]
        }).compileComponents();
        fixture = TestBed.createComponent(Section1);
        component = fixture.componentInstance;
        logSpy = spyOn(console, "log").and.callThrough();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should log the initial empty inputValue on init", () => {
        fixture.detectChanges();
        expect(logSpy).toHaveBeenCalledWith("");
      });
      it("should log the updated inputValue when onClick func called", () => {
        const newMessage = "xyz";
        component.inputValue = newMessage;
        component.onClick();
        expect(logSpy).toHaveBeenCalledWith(newMessage);
      });
    });
  }
});
export default require_section_1_spec();
//# sourceMappingURL=spec-section-1-2.spec.js.map
