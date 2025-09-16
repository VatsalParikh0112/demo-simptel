import {
  Router,
  init_router
} from "./chunk-VYGQZE4F.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6,
  inject,
  input
} from "./chunk-G5PIT6SS.js";
import {
  __esm,
  __name,
  __publicField
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\shared\button1\button1.html
var button1_default;
var init_button1 = __esm({
  "angular:jit:template:src\\app\\shared\\button1\\button1.html"() {
    button1_default = '<button (click)="redirect()" class=" p-2 m-2 rounded-xl border bg-amber-400 cursor-pointer ">\r\n    {{label()}}\r\n</button>';
  }
});

// angular:jit:style:src\app\shared\button1\button1.css
var button1_default2;
var init_button12 = __esm({
  "angular:jit:style:src\\app\\shared\\button1\\button1.css"() {
    button1_default2 = "/* src/app/shared/button1/button1.css */\n/*# sourceMappingURL=button1.css.map */\n";
  }
});

// src/app/shared/button1/button1.ts
function cov_orwe8fiy7() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\shared\\button1\\button1.ts";
  var hash = "b2ec8315b775d4347928595a0341a1be450245da";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\shared\\button1\\button1.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 14
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 8,
          column: 21
        }
      },
      "2": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 27
        }
      },
      "3": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 36
        }
      },
      "4": {
        start: {
          line: 13,
          column: 28
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "5": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 24,
          column: 12
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
            column: 15
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "button1.js",
      sourceRoot: "",
      sources: ["button1.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,MAAM,EAAE,SAAS,EAAE,KAAK,EAAG,MAAM,eAAe,CAAC;AAC1D,OAAO,EAAE,MAAM,EAAE,MAAM,iBAAiB,CAAC;;AAQlC,IAAM,OAAO,GAAb,MAAM,OAAO;YAEV,KAAK,CAAS,EAAE,CAAC;IACjB,MAAM,GAAG,MAAM,CAAC,MAAM,CAAC,CAAC;IAEhC,QAAQ;QACN,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC;IAC9B,CAAC;;;;;AAPU,OAAO;IANnB,SAAS,CAAC;QACT,QAAQ,EAAE,aAAa;QACvB,OAAO,EAAE,EAAE;QACX,8BAA6B;;KAE9B,CAAC;GACW,OAAO,CAQnB",
      sourcesContent: ["import { inject, Component, input  } from '@angular/core';\r\nimport { Router } from '@angular/router';\r\n\r\n@Component({\r\n  selector: 'app-button1',\r\n  imports: [],\r\n  templateUrl: './button1.html',\r\n  styleUrl: './button1.css'\r\n})\r\nexport class Button1 {\r\n\r\n  label = input<string>('');\r\n  private router = inject(Router);\r\n\r\n  redirect() {\r\n    this.router.navigate(['/']);\r\n  }\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b2ec8315b775d4347928595a0341a1be450245da"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_orwe8fiy7 = /* @__PURE__ */ __name(function() {
      return actualCoverage;
    }, "cov_orwe8fiy7");
  }
  return actualCoverage;
}
var _a, Button1;
var init_button13 = __esm({
  "src/app/shared/button1/button1.ts"() {
    "use strict";
    init_tslib_es6();
    init_button1();
    init_button12();
    init_core();
    init_router();
    init_core();
    __name(cov_orwe8fiy7, "cov_orwe8fiy7");
    cov_orwe8fiy7();
    cov_orwe8fiy7().s[0]++;
    Button1 = (_a = class {
      label = (cov_orwe8fiy7().s[1]++, input(""));
      router = (cov_orwe8fiy7().s[2]++, inject(Router));
      redirect() {
        cov_orwe8fiy7().f[0]++;
        cov_orwe8fiy7().s[3]++;
        this.router.navigate(["/"]);
      }
    }, __name(_a, "Button1"), __publicField(_a, "propDecorators", (cov_orwe8fiy7().s[4]++, {
      label: [{
        type: Input,
        args: [{
          isSignal: true,
          alias: "label",
          required: false,
          transform: void 0
        }]
      }]
    })), _a);
    cov_orwe8fiy7().s[5]++;
    Button1 = __decorate([Component({
      selector: "app-button1",
      imports: [],
      template: button1_default,
      styles: [button1_default2]
    })], Button1);
  }
});

export {
  Button1,
  init_button13 as init_button1
};
//# sourceMappingURL=chunk-6BYBHNR2.js.map
