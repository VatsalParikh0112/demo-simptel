import {
  Button,
  init_button
} from "./chunk-P6Z4KRN2.js";
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
} from "./chunk-6SUJJR5C.js";
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
function cov_jyek68znr() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\services\\data.ts";
  var hash = "10f246dc3e12ad088485d34ba9ab7147ccfd9f51";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\services\\data.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 17
        }
      },
      "2": {
        start: {
          line: 6,
          column: 8
        },
        end: {
          line: 6,
          column: 29
        }
      },
      "3": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 36
        }
      },
      "4": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 27
        }
      },
      "5": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 29
        }
      },
      "6": {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 79
        }
      },
      "7": {
        start: {
          line: 16,
          column: 54
        },
        end: {
          line: 16,
          column: 78
        }
      },
      "8": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "9": {
        start: {
          line: 18,
          column: 12
        },
        end: {
          line: 18,
          column: 43
        }
      },
      "10": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 26,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 5,
            column: 5
          }
        },
        loc: {
          start: {
            line: 5,
            column: 18
          },
          end: {
            line: 7,
            column: 5
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        loc: {
          start: {
            line: 8,
            column: 25
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 20
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 35
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 15
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 16,
            column: 46
          },
          end: {
            line: 16,
            column: 47
          }
        },
        loc: {
          start: {
            line: 16,
            column: 54
          },
          end: {
            line: 16,
            column: 78
          }
        },
        line: 16
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 19,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 19,
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
        line: 17
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
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "data.js",
      sourceRoot: "",
      sources: ["data.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAKpC,IAAM,WAAW,GAAjB,MAAM,WAAW;IACf,QAAQ,GAAa,EAAE,CAAC;IAE/B,WAAW;QACT,OAAO,IAAI,CAAC,QAAQ,CAAC;IACvB,CAAC;IAED,WAAW,CAAC,OAAe;QACzB,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC;IAC9B,CAAC;IAED,aAAa;QACX,IAAI,CAAC,QAAQ,GAAG,EAAE,CAAC;QACnB,OAAO,IAAI,CAAC,QAAQ,CAAC;IACvB,CAAC;IAED,aAAa,CAAC,eAAuB;QACnC,MAAM,KAAK,GAAG,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,IAAI,CAAC,EAAE,CAAC,IAAI,KAAK,eAAe,CAAC,CAAC;QACxE,IAAI,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC;YACf,IAAI,CAAC,QAAQ,CAAC,MAAM,CAAC,KAAK,EAAE,CAAC,CAAC,CAAC;QACjC,CAAC;IACH,CAAC;CACF,CAAA;AAtBY,WAAW;IAHvB,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GACW,WAAW,CAsBvB",
      sourcesContent: ["import { Injectable } from '@angular/core';\r\n\r\n@Injectable({\r\n  providedIn: 'root'\r\n})\r\nexport class Dataservice {\r\n  public products: string[] = [];\r\n\r\n  getProducts(): string[] {\r\n    return this.products;\r\n  }\r\n\r\n  addProducts(product: string) {\r\n    this.products.push(product);\r\n  }\r\n\r\n  clearProducts() {\r\n    this.products = [];\r\n    return this.products;\r\n  }\r\n\r\n  removeProduct(productToRemove: string) {\r\n    const index = this.products.findIndex(item => item === productToRemove);\r\n    if (index > -1) {\r\n      this.products.splice(index, 1); \r\n    }\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "10f246dc3e12ad088485d34ba9ab7147ccfd9f51"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_jyek68znr = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Dataservice;
var init_data = __esm({
  "src/app/services/data.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    cov_jyek68znr();
    cov_jyek68znr().s[0]++;
    Dataservice = class Dataservice2 {
      products = (cov_jyek68znr().s[1]++, []);
      getProducts() {
        cov_jyek68znr().f[0]++;
        cov_jyek68znr().s[2]++;
        return this.products;
      }
      addProducts(product) {
        cov_jyek68znr().f[1]++;
        cov_jyek68znr().s[3]++;
        this.products.push(product);
      }
      clearProducts() {
        cov_jyek68znr().f[2]++;
        cov_jyek68znr().s[4]++;
        this.products = [];
        cov_jyek68znr().s[5]++;
        return this.products;
      }
      removeProduct(productToRemove) {
        cov_jyek68znr().f[3]++;
        const index = (cov_jyek68znr().s[6]++, this.products.findIndex((item) => {
          cov_jyek68znr().f[4]++;
          cov_jyek68znr().s[7]++;
          return item === productToRemove;
        }));
        cov_jyek68znr().s[8]++;
        if (index > -1) {
          cov_jyek68znr().b[0][0]++;
          cov_jyek68znr().s[9]++;
          this.products.splice(index, 1);
        } else {
          cov_jyek68znr().b[0][1]++;
        }
      }
    };
    cov_jyek68znr().s[10]++;
    Dataservice = __decorate([Injectable({
      providedIn: "root"
    })], Dataservice);
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
