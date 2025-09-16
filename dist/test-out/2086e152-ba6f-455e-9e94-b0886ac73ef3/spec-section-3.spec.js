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
      it("should return value to upperCase when useName function is called", () => {
        component["_userName"] = "alice";
        expect(component.userName).toBe("ALICE");
      });
      it("should generate correct message for valid users", () => {
        component.userName = "Karma";
        expect(component.welcomeMessage).toBe("Welcome, KARMA!");
      });
      it("should generate default message for invalid users", () => {
        component.userName = "a";
        expect(component.welcomeMessage).toBe("Welcome, GUEST!");
      });
      it("should log provided event via console.log method", () => {
        const eventMessage = "Button is clicked";
        component.console(eventMessage);
        expect(logSpy).toHaveBeenCalledWith(eventMessage);
      });
      it("should call router.navigate with the provided path via the redirect method", () => {
        const path = "/home";
        component.redirect(path);
        expect(routerSpy.navigate).toHaveBeenCalledWith([path]);
      });
    });
  }
});
export default require_section_3_spec();
//# sourceMappingURL=spec-section-3.spec.js.map
