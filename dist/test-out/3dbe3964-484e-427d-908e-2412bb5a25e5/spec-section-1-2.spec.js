import {
  Section1,
  init_section_1
} from "./chunk-GXREIWMZ.js";
import {
  FormsModule,
  init_forms
} from "./chunk-QKGBKSSQ.js";
import "./chunk-JRNYA72K.js";
import "./chunk-YNZYKSQ4.js";
import {
  TestBed,
  init_testing
} from "./chunk-NG264RT6.js";
import {
  __async,
  __commonJS
} from "./chunk-SK4CH4QL.js";

// src/app/routes/home/section-1/section-1.spec.ts
var require_section_1_spec = __commonJS({
  "src/app/routes/home/section-1/section-1.spec.ts"(exports) {
    init_testing();
    init_section_1();
    init_forms();
    fdescribe("Section1", () => {
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
      it("should create section-1", () => {
        expect(component).toBeTruthy();
      });
      it("should console input value when ngOnit called", () => {
        fixture.detectChanges();
        expect(logSpy).toHaveBeenCalledWith("");
      });
      it("should console input value when onClick func is called", () => {
        component.inputValue = "Vatsal";
        component.onClick();
        fixture.detectChanges();
        expect(logSpy).toHaveBeenCalledWith("Vatsal");
      });
    });
  }
});
export default require_section_1_spec();
//# sourceMappingURL=spec-section-1-2.spec.js.map
