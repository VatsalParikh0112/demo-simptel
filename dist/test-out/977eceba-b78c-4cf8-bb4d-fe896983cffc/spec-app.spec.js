import {
  Navbar,
  init_navbar
} from "./chunk-HWZRKOVH.js";
import {
  Footer,
  init_footer
} from "./chunk-2SPVYI6S.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-VYGQZE4F.js";
import {
  By,
  init_platform_browser
} from "./chunk-FF5CBA4F.js";
import "./chunk-RJRKKRDZ.js";
import "./chunk-GPW657JF.js";
import "./chunk-C2AW5P2B.js";
import "./chunk-DB6OHPQI.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-G5PIT6SS.js";
import {
  __async,
  __commonJS,
  __esm,
  __name
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = '<app-navbar />\r\n<router-outlet />\r\n\r\n<div class=" flex gap-10 items-center ">\r\n    <button id="increase" (click)="increase()" class=" bg-amber-300 text-xl border p-2 rounded cursor-pointer">Increasing Number</button>\r\n    <p class=" text-xl border p-2 px-4 rounded-xl bg-amber-100 ">{{num}}</p>\r\n    <button id="decrease" (click)="decrease()" class=" bg-amber-300 text-xl border p-2 rounded cursor-pointer">Decreasing Number</button>\r\n</div>\r\n\r\n<app-footer />';
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
function cov_18a6pspq7y() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\app.ts";
  var hash = "bc3bafdd7fb9dfcfbf488435aadd8e00dc871878";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\app.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 10
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 10
        },
        end: {
          line: 9,
          column: 11
        }
      },
      "2": {
        start: {
          line: 10,
          column: 10
        },
        end: {
          line: 10,
          column: 11
        }
      },
      "3": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 12,
          column: 29
        }
      },
      "4": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 19
        }
      },
      "5": {
        start: {
          line: 16,
          column: 18
        },
        end: {
          line: 16,
          column: 39
        }
      },
      "6": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 19
        }
      },
      "7": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 19
        }
      },
      "8": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 19
        }
      },
      "9": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 33,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 26
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 15
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 15
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
            column: 15
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 22
      }
    },
    branchMap: {},
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "app.js",
      sourceRoot: "",
      sources: ["app.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAC1C,OAAO,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAC/C,OAAO,EAAE,MAAM,EAAE,MAAM,wBAAwB,CAAC;AAChD,OAAO,EAAE,MAAM,EAAE,MAAM,wBAAwB,CAAC;AASzC,IAAM,GAAG,GAAT,MAAM,GAAG;IACd,GAAG,GAAY,CAAC,CAAC;IACjB,GAAG,GAAY,CAAC,CAAC;IAEjB,SAAS,CAAC,IAAY,EAAG,IAAY;QACnC,IAAI,GAAG,GAAG,IAAI,GAAG,IAAI,CAAC;QACtB,OAAO,GAAG,CAAC;IACb,CAAC;IAED,QAAQ;QACN,IAAI,GAAG,GAAG,IAAI,CAAC,SAAS,CAAC,CAAC,EAAG,EAAE,CAAC,CAAC;QACjC,OAAO,GAAG,CAAC;IACb,CAAC;IAED,QAAQ;QACN,IAAI,CAAC,GAAG,EAAE,CAAC;IACb,CAAC;IAED,QAAQ;QACN,IAAI,CAAC,GAAG,EAAE,CAAC;IACb,CAAC;CACF,CAAA;AArBY,GAAG;IANf,SAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,OAAO,EAAE,CAAC,YAAY,EAAE,MAAM,EAAE,MAAM,CAAC;QACvC,8BAAyB;;KAE1B,CAAC;GACW,GAAG,CAqBf",
      sourcesContent: ["import { Component } from '@angular/core';\r\nimport { RouterOutlet } from '@angular/router';\r\nimport { Navbar } from './layout/navbar/navbar';\r\nimport { Footer } from './layout/footer/footer';\r\n\r\n\r\n@Component({\r\n  selector: 'app-root',\r\n  imports: [RouterOutlet, Navbar, Footer],\r\n  templateUrl: './app.html',\r\n  styleUrl: './app.css'\r\n})\r\nexport class App {\r\n  val : number = 0;\r\n  num : number = 0;\r\n\r\n  calculate(num1: number , num2: number): number{\r\n    let val = num1 + num2;\r\n    return val;\r\n  }\r\n\r\n  saveData() {\r\n    let sum = this.calculate(5 , 15);\r\n    return sum;\r\n  }\r\n\r\n  increase() {\r\n    this.num++;\r\n  }\r\n\r\n  decrease() {\r\n    this.num--;\r\n  }\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bc3bafdd7fb9dfcfbf488435aadd8e00dc871878"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_18a6pspq7y = /* @__PURE__ */ __name(function() {
      return actualCoverage;
    }, "cov_18a6pspq7y");
  }
  return actualCoverage;
}
var _a, App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_navbar();
    init_footer();
    __name(cov_18a6pspq7y, "cov_18a6pspq7y");
    cov_18a6pspq7y();
    cov_18a6pspq7y().s[0]++;
    App = (_a = class {
      val = (cov_18a6pspq7y().s[1]++, 0);
      num = (cov_18a6pspq7y().s[2]++, 0);
      calculate(num1, num2) {
        cov_18a6pspq7y().f[0]++;
        let val = (cov_18a6pspq7y().s[3]++, num1 + num2);
        cov_18a6pspq7y().s[4]++;
        return val;
      }
      saveData() {
        cov_18a6pspq7y().f[1]++;
        let sum = (cov_18a6pspq7y().s[5]++, this.calculate(5, 15));
        cov_18a6pspq7y().s[6]++;
        return sum;
      }
      increase() {
        cov_18a6pspq7y().f[2]++;
        cov_18a6pspq7y().s[7]++;
        this.num++;
      }
      decrease() {
        cov_18a6pspq7y().f[3]++;
        cov_18a6pspq7y().s[8]++;
        this.num--;
      }
    }, __name(_a, "App"), _a);
    cov_18a6pspq7y().s[9]++;
    App = __decorate([Component({
      selector: "app-root",
      imports: [RouterOutlet, Navbar, Footer],
      template: app_default,
      styles: [app_default2]
    })], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    init_platform_browser();
    describe("App", () => {
      let component;
      let fixture;
      let deb;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
        fixture = TestBed.createComponent(App);
        deb = fixture.debugElement;
        component = fixture.componentInstance;
      }));
      it("should create the app", () => {
        expect(component).toBeTruthy();
      });
      it("should check when calculate function is called", () => {
        spyOn(component, "calculate");
        component.saveData();
        expect(component.calculate).toHaveBeenCalled();
      });
      it("should add 2 numbers when savedata func is called", () => {
        spyOn(component, "calculate").and.returnValues(20);
        let sum = component.saveData();
        expect(component.calculate).toHaveBeenCalledWith(5, 15);
        expect(sum).toBe(20);
      });
      it("should increase value when increase function is called", () => {
        const btnI = deb.query(By.css("#increase"));
        btnI.triggerEventHandler("click", {});
        fixture.detectChanges();
        expect(component.num).toBe(1);
      });
      it("should decrease value when decrease function is called", () => {
        component.num = 2;
        fixture.detectChanges();
        const btnD = deb.query(By.css("#decrease"));
        btnD.triggerEventHandler("click", {});
        fixture.detectChanges();
        expect(component.num).toBe(1);
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
