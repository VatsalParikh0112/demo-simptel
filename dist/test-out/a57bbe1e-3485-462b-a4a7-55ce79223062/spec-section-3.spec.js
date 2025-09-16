import {
  Section3,
  init_section_3
} from "./chunk-BRPXF72Q.js";
import "./chunk-66TS2JJQ.js";
import "./chunk-62WJWZPL.js";
import {
  Router,
  init_router
} from "./chunk-IWWYQFDP.js";
import "./chunk-WXNKG2KK.js";
import "./chunk-T33MDXG2.js";
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
    fdescribe("Section3", () => {
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
