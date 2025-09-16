import {
  Section3,
  init_section_3
} from "./chunk-X6J7ZCIH.js";
import "./chunk-6FM4CIZX.js";
import {
  Router,
  init_router
} from "./chunk-VYGQZE4F.js";
import "./chunk-FF5CBA4F.js";
import "./chunk-RJRKKRDZ.js";
import "./chunk-EK7TNUAC.js";
import "./chunk-GPW657JF.js";
import "./chunk-C2AW5P2B.js";
import "./chunk-DB6OHPQI.js";
import {
  TestBed,
  init_testing
} from "./chunk-G5PIT6SS.js";
import {
  __async,
  __commonJS
} from "./chunk-SK4CH4QL.js";

// src/app/routes/home/section-3/section-3.spec.ts
var require_section_3_spec = __commonJS({
  "src/app/routes/home/section-3/section-3.spec.ts"(exports) {
    init_testing();
    init_section_3();
    init_router();
    describe("Section3", () => {
      let component;
      let fixture;
      let logSpy;
      const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Section3],
          providers: [{ provide: Router, useValue: routerSpy }]
        }).compileComponents();
        fixture = TestBed.createComponent(Section3);
        component = fixture.componentInstance;
        logSpy = spyOn(console, "log").and.callThrough();
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should return default empty", () => {
        expect(component.userName).toBe("");
      });
      it("should return userName to upperCase when userName func is called", () => {
        component["_userName"] = "vatsal";
        expect(component.userName).toBe("VATSAL");
      });
      it("should set userName when length is more than 2", () => {
        component.userName = "Vatsal";
        expect(component.userName).toBe("VATSAL");
        expect(console.log).toHaveBeenCalledWith("User name has been set to: Vatsal");
      });
      it("should set Guest when length is not more than 2 ", () => {
        component.userName = "ab";
        expect(component.userName).toBe("GUEST");
        expect(console.log).toHaveBeenCalledWith("Invalid user name. Defaulting to Guest.");
      });
      it("should return welcome message when welcomeUser func is called", () => {
        component["_userName"] = "Vatsal";
        expect(component.userName).toBe("VATSAL");
      });
      it("should console log event when console func is called", () => {
        component.console("Vatsal");
        expect(console.log).toHaveBeenCalledWith("Vatsal");
      });
      it("should redirect when redirect func is called", () => {
        component.redirect("/contact");
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/contact"]);
      });
    });
  }
});
export default require_section_3_spec();
//# sourceMappingURL=spec-section-3.spec.js.map
