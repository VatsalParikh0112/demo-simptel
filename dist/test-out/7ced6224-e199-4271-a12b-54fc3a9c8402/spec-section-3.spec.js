import {
  Section3,
  init_section_3
} from "./chunk-VK5NNEEJ.js";
import "./chunk-62WJWZPL.js";
import {
  Router,
  init_router
} from "./chunk-IWWYQFDP.js";
import "./chunk-WXNKG2KK.js";
import "./chunk-T33MDXG2.js";
import "./chunk-66TS2JJQ.js";
import "./chunk-JRNYA72K.js";
import "./chunk-NMFPFLPZ.js";
import "./chunk-YNZYKSQ4.js";
import {
  TestBed,
  init_testing
} from "./chunk-NG264RT6.js";
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
