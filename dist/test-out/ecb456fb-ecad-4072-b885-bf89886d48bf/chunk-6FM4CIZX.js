import {
  Component,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6,
  input,
  output
} from "./chunk-G5PIT6SS.js";
import {
  __esm,
  __name,
  __publicField
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\shared\button-2\button-2.html
var button_2_default;
var init_button_2 = __esm({
  "angular:jit:template:src\\app\\shared\\button-2\\button-2.html"() {
    button_2_default = '<div role="button" (click)="changePage()"\r\n    class=" button flex p-2 m-2 w-6xl justify-center bg-black text-white rounded-xl cursor-pointer ">\r\n    {{label()}}\r\n</div>';
  }
});

// angular:jit:style:src\app\shared\button-2\button-2.css
var button_2_default2;
var init_button_22 = __esm({
  "angular:jit:style:src\\app\\shared\\button-2\\button-2.css"() {
    button_2_default2 = "/* src/app/shared/button-2/button-2.css */\n/*# sourceMappingURL=button-2.css.map */\n";
  }
});

// src/app/shared/button-2/button-2.ts
function cov_q3z6u4jaa() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\shared\\button-2\\button-2.ts";
  var hash = "58624b37a3429c9814c97c1784e5129cc1583f08";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\shared\\button-2\\button-2.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 7,
          column: 21
        }
      },
      "2": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 26
        }
      },
      "3": {
        start: {
          line: 10,
          column: 21
        },
        end: {
          line: 10,
          column: 31
        }
      },
      "4": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 36
        }
      },
      "5": {
        start: {
          line: 13,
          column: 28
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "6": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 25,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 9
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
      "0": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "button-2.js",
      sourceRoot: "",
      sources: ["button-2.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,KAAK,EAAE,MAAM,EAAE,MAAM,eAAe,CAAC;;AAQlD,IAAM,OAAO,GAAb,MAAM,OAAO;YACV,KAAK,CAAS,EAAE,CAAC;IACzB,WAAW,GAAG,MAAM,EAAU;IAE9B,UAAU;QACR,MAAM,IAAI,GAAG,UAAU,CAAC;QACxB,IAAI,CAAC,WAAW,CAAC,IAAI,CAAE,IAAI,CAAE,CAAC;IAChC,CAAC;;;;;;AAPU,OAAO;IANnB,SAAS,CAAC;QACT,QAAQ,EAAE,cAAc;QACxB,OAAO,EAAE,EAAE;QACX,8BAA8B;;KAE/B,CAAC;GACW,OAAO,CAQnB",
      sourcesContent: ["import { Component, input, output } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'app-button-2',\r\n  imports: [],\r\n  templateUrl: './button-2.html',\r\n  styleUrl: './button-2.css'\r\n})\r\nexport class Button2 {\r\n  label = input<string>('');\r\n  goToContact = output<string>();\r\n\r\n  changePage () {\r\n    const path = '/contact';\r\n    this.goToContact.emit( path );\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "58624b37a3429c9814c97c1784e5129cc1583f08"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_q3z6u4jaa = /* @__PURE__ */ __name(function() {
      return actualCoverage;
    }, "cov_q3z6u4jaa");
  }
  return actualCoverage;
}
var _a, Button2;
var init_button_23 = __esm({
  "src/app/shared/button-2/button-2.ts"() {
    "use strict";
    init_tslib_es6();
    init_button_2();
    init_button_22();
    init_core();
    init_core();
    __name(cov_q3z6u4jaa, "cov_q3z6u4jaa");
    cov_q3z6u4jaa();
    cov_q3z6u4jaa().s[0]++;
    Button2 = (_a = class {
      label = (cov_q3z6u4jaa().s[1]++, input(""));
      goToContact = (cov_q3z6u4jaa().s[2]++, output());
      changePage() {
        cov_q3z6u4jaa().f[0]++;
        const path = (cov_q3z6u4jaa().s[3]++, "/contact");
        cov_q3z6u4jaa().s[4]++;
        this.goToContact.emit(path);
      }
    }, __name(_a, "Button2"), __publicField(_a, "propDecorators", (cov_q3z6u4jaa().s[5]++, {
      label: [{
        type: Input,
        args: [{
          isSignal: true,
          alias: "label",
          required: false,
          transform: void 0
        }]
      }],
      goToContact: [{
        type: Output,
        args: ["goToContact"]
      }]
    })), _a);
    cov_q3z6u4jaa().s[6]++;
    Button2 = __decorate([Component({
      selector: "app-button-2",
      imports: [],
      template: button_2_default,
      styles: [button_2_default2]
    })], Button2);
  }
});

export {
  Button2,
  init_button_23 as init_button_2
};
//# sourceMappingURL=chunk-6FM4CIZX.js.map
