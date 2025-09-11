import {
  Dataservice,
  init_data
} from "./chunk-UV25C4YT.js";
import {
  Button,
  init_button
} from "./chunk-P27YJU7Z.js";
import {
  Component,
  Input,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  input
} from "./chunk-35QTXDGA.js";
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

// src/app/routes/about/about.ts
function cov_cag5rv6ml() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\about\\about.ts";
  var hash = "3f5267f3f612eb465790df238b0cc747ea3c14f1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\about\\about.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 14
        },
        end: {
          line: 10,
          column: 30
        }
      },
      "2": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 28
        }
      },
      "3": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 12,
          column: 20
        }
      },
      "4": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 39
        }
      },
      "5": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 58
        }
      },
      "6": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 58
        }
      },
      "7": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 26,
          column: 9
        }
      },
      "8": {
        start: {
          line: 24,
          column: 12
        },
        end: {
          line: 24,
          column: 54
        }
      },
      "9": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 38
        }
      },
      "10": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 32,
          column: 9
        }
      },
      "11": {
        start: {
          line: 30,
          column: 12
        },
        end: {
          line: 30,
          column: 56
        }
      },
      "12": {
        start: {
          line: 31,
          column: 12
        },
        end: {
          line: 31,
          column: 38
        }
      },
      "13": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 35,
          column: 41
        }
      },
      "14": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 36,
          column: 34
        }
      },
      "15": {
        start: {
          line: 38,
          column: 28
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "16": {
        start: {
          line: 38,
          column: 34
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "17": {
        start: {
          line: 41,
          column: 28
        },
        end: {
          line: 44,
          column: 5
        }
      },
      "18": {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 54,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 29
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 25
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 15
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        loc: {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 22
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 31
          },
          end: {
            line: 33,
            column: 5
          }
        },
        line: 28
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        loc: {
          start: {
            line: 34,
            column: 20
          },
          end: {
            line: 37,
            column: 5
          }
        },
        line: 34
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 38,
            column: 28
          },
          end: {
            line: 38,
            column: 29
          }
        },
        loc: {
          start: {
            line: 38,
            column: 34
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 38
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 32,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 32,
            column: 9
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 29
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "about.js",
      sourceRoot: "",
      sources: ["about.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,KAAK,EAAU,MAAM,eAAe,CAAC;AACzD,OAAO,EAAE,WAAW,EAAE,MAAM,qBAAqB,CAAC;AAClD,OAAO,EAAE,MAAM,EAAE,MAAM,4BAA4B,CAAC;;AAU7C,IAAM,KAAK,GAAX,MAAM,KAAK;IAMI;cALV,KAAK,CAAC,QAAQ,EAAU;YAC1B,KAAK,CAAC,QAAQ,EAAU;IAEhC,WAAW,GAAa,EAAE,CAAC;IAE3B,YAAoB,WAAwB;QAAxB,gBAAW,GAAX,WAAW,CAAa;IAAI,CAAC;IAEzC,kBAAkB;QACxB,IAAI,CAAC,WAAW,GAAG,IAAI,CAAC,WAAW,CAAC,WAAW,EAAE,CAAC;IACpD,CAAC;IAED,QAAQ;QACN,IAAI,CAAC,WAAW,GAAG,IAAI,CAAC,WAAW,CAAC,WAAW,EAAE,CAAA;IACnD,CAAC;IAED,aAAa,CAAC,WAAmB;QAC/B,IAAI,WAAW,EAAE,CAAC;YAChB,IAAI,CAAC,WAAW,CAAC,WAAW,CAAC,WAAW,CAAC,CAAC;YAC1C,IAAI,CAAC,kBAAkB,EAAE,CAAC;QAC5B,CAAC;IACH,CAAC;IAED,aAAa,CAAC,WAAmB;QAC/B,IAAI,WAAW,EAAE,CAAC;YAChB,IAAI,CAAC,WAAW,CAAC,aAAa,CAAC,WAAW,CAAC,CAAC;YAC5C,IAAI,CAAC,kBAAkB,EAAE,CAAC;QAC5B,CAAC;IACH,CAAC;IAED,aAAa;QACX,IAAI,CAAC,WAAW,CAAC,aAAa,EAAE,CAAC;QACjC,IAAI,CAAC,kBAAkB,EAAE,CAAC;IAC5B,CAAC;;;;;;;;;AAjCU,KAAK;IAPjB,SAAS,CAAC;QACT,QAAQ,EAAE,WAAW;QACrB,UAAU,EAAE,IAAI;QAChB,OAAO,EAAE,CAAC,MAAM,CAAC;QACjB,8BAA2B;;KAE5B,CAAC;GACW,KAAK,CAkCjB",
      sourcesContent: ["import { Component, input, OnInit } from '@angular/core';\r\nimport { Dataservice } from '../../services/data';\r\nimport { Button } from '../../shared/button/button';\r\n\r\n\r\n@Component({\r\n  selector: 'app-about',\r\n  standalone: true,\r\n  imports: [Button],\r\n  templateUrl: './about.html',\r\n  styleUrl: './about.css'\r\n})\r\nexport class About implements OnInit {\r\n  aboutId = input.required<string>();\r\n  limit = input.required<string>();\r\n\r\n  productList: string[] = [];\r\n\r\n  constructor(private dataService: Dataservice) { }\r\n\r\n  private refreshProductList() {\r\n    this.productList = this.dataService.getProducts();\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.productList = this.dataService.getProducts()\r\n  }\r\n\r\n  addNewProduct(productName: string) {\r\n    if (productName) {\r\n      this.dataService.addProducts(productName);\r\n      this.refreshProductList();\r\n    }\r\n  }\r\n\r\n  removeProduct(productName: string) {\r\n    if (productName) {\r\n      this.dataService.removeProduct(productName);\r\n      this.refreshProductList();\r\n    }\r\n  }\r\n\r\n  clearProducts() {\r\n    this.dataService.clearProducts();\r\n    this.refreshProductList();\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3f5267f3f612eb465790df238b0cc747ea3c14f1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_cag5rv6ml = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
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
    cov_cag5rv6ml();
    cov_cag5rv6ml().s[0]++;
    About = class About2 {
      dataService;
      aboutId = (cov_cag5rv6ml().s[1]++, input.required());
      limit = (cov_cag5rv6ml().s[2]++, input.required());
      productList = (cov_cag5rv6ml().s[3]++, []);
      constructor(dataService) {
        cov_cag5rv6ml().f[0]++;
        cov_cag5rv6ml().s[4]++;
        this.dataService = dataService;
      }
      refreshProductList() {
        cov_cag5rv6ml().f[1]++;
        cov_cag5rv6ml().s[5]++;
        this.productList = this.dataService.getProducts();
      }
      ngOnInit() {
        cov_cag5rv6ml().f[2]++;
        cov_cag5rv6ml().s[6]++;
        this.productList = this.dataService.getProducts();
      }
      addNewProduct(productName) {
        cov_cag5rv6ml().f[3]++;
        cov_cag5rv6ml().s[7]++;
        if (productName) {
          cov_cag5rv6ml().b[0][0]++;
          cov_cag5rv6ml().s[8]++;
          this.dataService.addProducts(productName);
          cov_cag5rv6ml().s[9]++;
          this.refreshProductList();
        } else {
          cov_cag5rv6ml().b[0][1]++;
        }
      }
      removeProduct(productName) {
        cov_cag5rv6ml().f[4]++;
        cov_cag5rv6ml().s[10]++;
        if (productName) {
          cov_cag5rv6ml().b[1][0]++;
          cov_cag5rv6ml().s[11]++;
          this.dataService.removeProduct(productName);
          cov_cag5rv6ml().s[12]++;
          this.refreshProductList();
        } else {
          cov_cag5rv6ml().b[1][1]++;
        }
      }
      clearProducts() {
        cov_cag5rv6ml().f[5]++;
        cov_cag5rv6ml().s[13]++;
        this.dataService.clearProducts();
        cov_cag5rv6ml().s[14]++;
        this.refreshProductList();
      }
      static ctorParameters = (cov_cag5rv6ml().s[15]++, () => {
        cov_cag5rv6ml().f[6]++;
        cov_cag5rv6ml().s[16]++;
        return [{
          type: Dataservice
        }];
      });
      static propDecorators = (cov_cag5rv6ml().s[17]++, {
        aboutId: [{
          type: Input,
          args: [{
            isSignal: true,
            alias: "aboutId",
            required: true,
            transform: void 0
          }]
        }],
        limit: [{
          type: Input,
          args: [{
            isSignal: true,
            alias: "limit",
            required: true,
            transform: void 0
          }]
        }]
      });
    };
    cov_cag5rv6ml().s[18]++;
    About = __decorate([Component({
      selector: "app-about",
      standalone: true,
      imports: [Button],
      template: about_default,
      styles: [about_default2]
    })], About);
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
    var MockButton = class MockButton {
    };
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
