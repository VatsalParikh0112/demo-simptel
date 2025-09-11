import {
  Footer,
  init_footer
} from "./chunk-GNI6WPIN.js";
import {
  Navbar,
  init_navbar
} from "./chunk-CDX4O6EH.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-BQRIYNLX.js";
import "./chunk-LUXOWDA2.js";
import "./chunk-WPKVAXFA.js";
import "./chunk-JN3M3DGV.js";
import "./chunk-WNMIVGIK.js";
import "./chunk-XC7FPHGX.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-IJMVPFYS.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<app-navbar />\r\n<router-outlet />\r\n<app-footer />";
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
  var hash = "b52d32eef7f4bc6e13874f10eb7ec143300e5d17";
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
          line: 18,
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
          line: 11,
          column: 18
        },
        end: {
          line: 11,
          column: 29
        }
      },
      "3": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 19
        }
      },
      "4": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 15,
          column: 39
        }
      },
      "5": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 19
        }
      },
      "6": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 26,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        loc: {
          start: {
            line: 14,
            column: 15
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 14
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "app.js",
      sourceRoot: "",
      sources: ["app.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAC1C,OAAO,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAC/C,OAAO,EAAE,MAAM,EAAE,MAAM,wBAAwB,CAAC;AAChD,OAAO,EAAE,MAAM,EAAE,MAAM,wBAAwB,CAAC;AASzC,IAAM,GAAG,GAAT,MAAM,GAAG;IACd,GAAG,GAAY,CAAC,CAAC;IAEjB,SAAS,CAAC,IAAY,EAAG,IAAY;QACnC,IAAI,GAAG,GAAG,IAAI,GAAG,IAAI,CAAC;QACtB,OAAO,GAAG,CAAC;IACb,CAAC;IAED,QAAQ;QACN,IAAI,GAAG,GAAG,IAAI,CAAC,SAAS,CAAC,CAAC,EAAG,EAAE,CAAC,CAAC;QACjC,OAAO,GAAG,CAAC;IACb,CAAC;CACF,CAAA;AAZY,GAAG;IANf,SAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,OAAO,EAAE,CAAC,YAAY,EAAE,MAAM,EAAE,MAAM,CAAC;QACvC,8BAAyB;;KAE1B,CAAC;GACW,GAAG,CAYf",
      sourcesContent: ["import { Component } from '@angular/core';\r\nimport { RouterOutlet } from '@angular/router';\r\nimport { Navbar } from './layout/navbar/navbar';\r\nimport { Footer } from './layout/footer/footer';\r\n\r\n\r\n@Component({\r\n  selector: 'app-root',\r\n  imports: [RouterOutlet, Navbar, Footer],\r\n  templateUrl: './app.html',\r\n  styleUrl: './app.css'\r\n})\r\nexport class App {\r\n  val : number = 0;\r\n\r\n  calculate(num1: number , num2: number): number{\r\n    let val = num1 + num2;\r\n    return val;\r\n  }\r\n\r\n  saveData() {\r\n    let sum = this.calculate(5 , 15);\r\n    return sum;\r\n  }\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b52d32eef7f4bc6e13874f10eb7ec143300e5d17"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_18a6pspq7y = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var App;
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
    cov_18a6pspq7y();
    cov_18a6pspq7y().s[0]++;
    App = class App2 {
      val = (cov_18a6pspq7y().s[1]++, 0);
      calculate(num1, num2) {
        cov_18a6pspq7y().f[0]++;
        let val = (cov_18a6pspq7y().s[2]++, num1 + num2);
        cov_18a6pspq7y().s[3]++;
        return val;
      }
      saveData() {
        cov_18a6pspq7y().f[1]++;
        let sum = (cov_18a6pspq7y().s[4]++, this.calculate(5, 15));
        cov_18a6pspq7y().s[5]++;
        return sum;
      }
    };
    cov_18a6pspq7y().s[6]++;
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
    fdescribe("App", () => {
      let component;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
        const fixture = TestBed.createComponent(App);
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
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
