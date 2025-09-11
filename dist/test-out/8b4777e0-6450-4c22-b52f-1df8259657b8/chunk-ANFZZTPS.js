import {
  Router,
  init_router
} from "./chunk-KNNIIOSW.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6,
  input
} from "./chunk-6SUJJR5C.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

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
  var hash = "640cca52587e2f539f8cd7024abbe7a386703c92";
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
          line: 22,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 9,
          column: 21
        }
      },
      "2": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 29
        }
      },
      "3": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 36
        }
      },
      "4": {
        start: {
          line: 16,
          column: 28
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "5": {
        start: {
          line: 16,
          column: 34
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "6": {
        start: {
          line: 19,
          column: 28
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "7": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 30,
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
            column: 24
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 15
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 28
          },
          end: {
            line: 16,
            column: 29
          }
        },
        loc: {
          start: {
            line: 16,
            column: 34
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "button1.js",
      sourceRoot: "",
      sources: ["button1.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,KAAK,EAAE,MAAM,eAAe,CAAC;AACjD,OAAO,EAAE,MAAM,EAAE,MAAM,iBAAiB,CAAC;;AAQlC,IAAM,OAAO,GAAb,MAAM,OAAO;IAIE;YAFZ,KAAK,CAAS,EAAE,CAAC;IAEzB,YAAoB,MAAc;QAAd,WAAM,GAAN,MAAM,CAAQ;IAAI,CAAC;IAEvC,QAAQ;QACN,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC;IAC9B,CAAC;;;;;;;;AARU,OAAO;IANnB,SAAS,CAAC;QACT,QAAQ,EAAE,aAAa;QACvB,OAAO,EAAE,EAAE;QACX,8BAA6B;;KAE9B,CAAC;GACW,OAAO,CASnB",
      sourcesContent: ["import { Component, input } from '@angular/core';\r\nimport { Router } from '@angular/router';\r\n\r\n@Component({\r\n  selector: 'app-button1',\r\n  imports: [],\r\n  templateUrl: './button1.html',\r\n  styleUrl: './button1.css'\r\n})\r\nexport class Button1 {\r\n\r\n  label = input<string>('');\r\n\r\n  constructor(private router: Router) { }\r\n\r\n  redirect() {\r\n    this.router.navigate(['/']);\r\n  }\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "640cca52587e2f539f8cd7024abbe7a386703c92"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_orwe8fiy7 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Button1;
var init_button13 = __esm({
  "src/app/shared/button1/button1.ts"() {
    "use strict";
    init_tslib_es6();
    init_button1();
    init_button12();
    init_core();
    init_router();
    init_core();
    cov_orwe8fiy7();
    cov_orwe8fiy7().s[0]++;
    Button1 = class Button12 {
      router;
      label = (cov_orwe8fiy7().s[1]++, input(""));
      constructor(router) {
        cov_orwe8fiy7().f[0]++;
        cov_orwe8fiy7().s[2]++;
        this.router = router;
      }
      redirect() {
        cov_orwe8fiy7().f[1]++;
        cov_orwe8fiy7().s[3]++;
        this.router.navigate(["/"]);
      }
      static ctorParameters = (cov_orwe8fiy7().s[4]++, () => {
        cov_orwe8fiy7().f[2]++;
        cov_orwe8fiy7().s[5]++;
        return [{
          type: Router
        }];
      });
      static propDecorators = (cov_orwe8fiy7().s[6]++, {
        label: [{
          type: Input,
          args: [{
            isSignal: true,
            alias: "label",
            required: false,
            transform: void 0
          }]
        }]
      });
    };
    cov_orwe8fiy7().s[7]++;
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
//# sourceMappingURL=chunk-ANFZZTPS.js.map
