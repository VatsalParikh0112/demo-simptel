import {
  Button,
  init_button
} from "./chunk-BE7T4HPJ.js";
import {
  Component,
  Injectable,
  Input,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  input
} from "./chunk-XNFCQGWJ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

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

// src/app/services/data.ts
var Dataservice;
var init_data = __esm({
  "src/app/services/data.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    Dataservice = class Dataservice2 {
      products = [];
      getProducts() {
        return this.products;
      }
      addProducts(product) {
        this.products.push(product);
      }
      clearProducts() {
        this.products = [];
        return this.products;
      }
      removeProduct(productToRemove) {
        const index = this.products.findIndex((item) => item === productToRemove);
        if (index > -1) {
          this.products.splice(index, 1);
        }
      }
    };
    Dataservice = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Dataservice);
  }
});

// src/app/routes/about/about.ts
var About;
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
    About = class About2 {
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
      static ctorParameters = () => [
        { type: Dataservice }
      ];
      static propDecorators = {
        aboutId: [{ type: Input, args: [{ isSignal: true, alias: "aboutId", required: true, transform: void 0 }] }],
        limit: [{ type: Input, args: [{ isSignal: true, alias: "limit", required: true, transform: void 0 }] }]
      };
    };
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
    init_testing();
    init_about3();
    describe("About", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [About]
        }).compileComponents();
        fixture = TestBed.createComponent(About);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_about_spec();
//# sourceMappingURL=spec-about.spec.js.map
