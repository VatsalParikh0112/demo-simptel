import {
  Dataservice,
  init_data
} from "./chunk-YLFL5T7E.js";
import {
  Button,
  init_button
} from "./chunk-66TS2JJQ.js";
import {
  Component,
  Input,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  input
} from "./chunk-NG264RT6.js";
import {
  __async,
  __commonJS,
  __esm,
  __name,
  __publicField
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\routes\about\about.html
var about_default;
var init_about = __esm({
  "angular:jit:template:src\\app\\routes\\about\\about.html"() {
    about_default = `<p>about -- {{ aboutId() }} - {{limit()}} </p>\r
\r
\r
<div class=" flex flex-col p-10 items-center gap-10 ">\r
    <div class=" text-5xl p-2 ">Product List</div>\r
    <div class=" w-full flex flex-col items-center gap-10 justify-center ">\r
        <ul class=" list-disc flex flex-col items-center gap-5 w-1/2 ">\r
            @for (product of productList; track $index) {\r
\r
            <li class=" flex w-full gap-2 items-center justify-between ">\r
                <div class="border rounded-xl p-2 w-full">{{product}}</div>\r
                <button class=" border rounded-xl p-2 " (click)="removeProduct(product)">Remove</button>\r
            </li>\r
            }@empty {\r
            <div class=" text-xl underline ">Your product list is empty.</div>\r
            }\r
        </ul>\r
\r
        <button class=" border rounded-xl p-2 " (click)="clearProducts()">Clear all</button>\r
    </div>\r
\r
\r
    <h3 class=" text-5xl ">Add a New Product</h3>\r
    <input #newProduct class=" border rounded-xl p-2 placeholder:text-gray-400 "\r
        (keyup.enter)="addNewProduct(newProduct.value); newProduct.value = ''" placeholder="New product name">\r
    <button class=" border rounded-xl p-2 " (click)="addNewProduct(newProduct.value); newProduct.value = ''">Add</button>\r
</div>\r
\r
\r
<div>\r
    <app-button label="shared button about" ></app-button>\r
</div>`;
  }
});

// angular:jit:style:src\app\routes\about\about.css
var about_default2;
var init_about2 = __esm({
  "angular:jit:style:src\\app\\routes\\about\\about.css"() {
    about_default2 = "/* src/app/routes/about/about.css */\n/*# sourceMappingURL=about.css.map */\n";
  }
});

// src/app/routes/about/about.ts
var _a, About;
var init_about3 = __esm({
  "src/app/routes/about/about.ts"() {
    "use strict";
    init_tslib_es6();
    init_about();
    init_about2();
    init_core();
    init_data();
    init_button();
    init_core();
    About = (_a = class {
      dataService;
      aboutId = input.required();
      limit = input.required();
      productList = [];
      constructor(dataService) {
        this.dataService = dataService;
      }
      refreshProductList() {
        this.productList = this.dataService.getProducts();
      }
      ngOnInit() {
        this.productList = this.dataService.getProducts();
      }
      addNewProduct(productName) {
        if (productName) {
          this.dataService.addProducts(productName);
          this.refreshProductList();
        }
      }
      removeProduct(productName) {
        if (productName) {
          this.dataService.removeProduct(productName);
          this.refreshProductList();
        }
      }
      clearProducts() {
        this.dataService.clearProducts();
        this.refreshProductList();
      }
    }, __name(_a, "About"), __publicField(_a, "ctorParameters", /* @__PURE__ */ __name(() => [
      { type: Dataservice }
    ], "ctorParameters")), __publicField(_a, "propDecorators", {
      aboutId: [{ type: Input, args: [{ isSignal: true, alias: "aboutId", required: true, transform: void 0 }] }],
      limit: [{ type: Input, args: [{ isSignal: true, alias: "limit", required: true, transform: void 0 }] }]
    }), _a);
    About = __decorate([
      Component({
        selector: "app-about",
        standalone: true,
        imports: [Button],
        template: about_default,
        styles: [about_default2]
      })
    ], About);
  }
});

// src/app/routes/about/about.spec.ts
var require_about_spec = __commonJS({
  "src/app/routes/about/about.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_core();
    init_about3();
    init_data();
    init_button();
    var _a2;
    var MockButton = (_a2 = class {
    }, __name(_a2, "MockButton"), _a2);
    MockButton = __decorate([
      Component({ selector: "app-button", template: "", standalone: true })
    ], MockButton);
    describe("About", () => {
      let component;
      let fixture;
      let dataServiceSpy;
      beforeEach(() => __async(null, null, function* () {
        const spy = jasmine.createSpyObj("Dataservice", [
          "getProducts",
          "addProducts",
          "removeProduct",
          "clearProducts"
        ]);
        yield TestBed.configureTestingModule({
          imports: [About],
          // Import the standalone component under test
          providers: [
            // Provide our mock service instead of the real one
            { provide: Dataservice, useValue: spy }
          ]
        }).overrideComponent(About, {
          // Replace the real Button component with our mock version
          remove: { imports: [Button] },
          add: { imports: [MockButton] }
        }).compileComponents();
        fixture = TestBed.createComponent(About);
        component = fixture.componentInstance;
        dataServiceSpy = TestBed.inject(Dataservice);
        fixture.componentRef.setInput("aboutId", "123");
        fixture.componentRef.setInput("limit", "10");
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should get products from the service on ngOnInit", () => {
        const mockProducts = ["Milk", "Bread"];
        dataServiceSpy.getProducts.and.returnValue(mockProducts);
        fixture.detectChanges();
        expect(component.productList).toEqual(mockProducts);
        expect(dataServiceSpy.getProducts).toHaveBeenCalledTimes(1);
      });
      it("should call addProducts and refresh the list when addNewProduct is called with a valid name", () => {
        const newProduct = "Cheese";
        const updatedList = ["Milk", "Bread", "Cheese"];
        dataServiceSpy.getProducts.and.returnValue(updatedList);
        component.addNewProduct(newProduct);
        expect(dataServiceSpy.addProducts).toHaveBeenCalledOnceWith(newProduct);
        expect(dataServiceSpy.getProducts).toHaveBeenCalledTimes(1);
        expect(component.productList).toEqual(updatedList);
      });
      it("should NOT call addProducts if the product name is empty", () => {
        component.addNewProduct("");
        expect(dataServiceSpy.addProducts).not.toHaveBeenCalled();
      });
      it("should call removeProduct and refresh the list when removeProduct is called", () => {
        const productToRemove = "Bread";
        const updatedList = ["Milk"];
        dataServiceSpy.getProducts.and.returnValue(updatedList);
        component.removeProduct(productToRemove);
        expect(dataServiceSpy.removeProduct).toHaveBeenCalledOnceWith(productToRemove);
        expect(dataServiceSpy.getProducts).toHaveBeenCalledTimes(1);
        expect(component.productList).toEqual(updatedList);
      });
      it("should call clearProducts and refresh the list when clearProducts is called", () => {
        dataServiceSpy.getProducts.and.returnValue([]);
        component.clearProducts();
        expect(dataServiceSpy.clearProducts).toHaveBeenCalledTimes(1);
        expect(dataServiceSpy.getProducts).toHaveBeenCalledTimes(1);
        expect(component.productList).toEqual([]);
      });
    });
  }
});
export default require_about_spec();
//# sourceMappingURL=spec-about.spec.js.map
