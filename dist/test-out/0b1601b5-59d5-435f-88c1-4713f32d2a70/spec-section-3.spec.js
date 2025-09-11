import {
  Section3,
  init_section_3
} from "./chunk-BQDYHAW4.js";
import "./chunk-KEQMZ5BK.js";
import "./chunk-W4GFGW2M.js";
import {
  Router,
  init_router
} from "./chunk-KNNIIOSW.js";
import "./chunk-WKMCOWVR.js";
import "./chunk-VIJCD5PI.js";
import "./chunk-7DRXM5VD.js";
import "./chunk-K42GGLJU.js";
import "./chunk-XC7FPHGX.js";
import {
  TestBed,
  init_testing
} from "./chunk-6SUJJR5C.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

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
