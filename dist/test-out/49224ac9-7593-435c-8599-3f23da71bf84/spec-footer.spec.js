import {
  Footer,
  init_footer
} from "./chunk-RO6HNA42.js";
import {
  TestBed,
  init_testing
} from "./chunk-NG264RT6.js";
import {
  __async,
  __commonJS
} from "./chunk-SK4CH4QL.js";

// src/app/layout/footer/footer.spec.ts
var require_footer_spec = __commonJS({
  "src/app/layout/footer/footer.spec.ts"(exports) {
    init_testing();
    init_footer();
    describe("Footer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Footer]
        }).compileComponents();
        fixture = TestBed.createComponent(Footer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_footer_spec();
//# sourceMappingURL=spec-footer.spec.js.map
