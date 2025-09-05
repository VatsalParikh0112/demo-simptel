import {
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-WAH5LQNR.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\shared\button\button.html
var button_default;
var init_button = __esm({
  "angular:jit:template:src\\app\\shared\\button\\button.html"() {
    button_default = '<button class=" cursor-pointer rounded-xl text-white m-5 p-2 border bg-gray-500  ">\r\n    {{ label }}\r\n\r\n    <button (click)="notifyParent()" >vatsal</button>\r\n</button>';
  }
});

// angular:jit:style:src\app\shared\button\button.css
var button_default2;
var init_button2 = __esm({
  "angular:jit:style:src\\app\\shared\\button\\button.css"() {
    button_default2 = "/* src/app/shared/button/button.css */\n/*# sourceMappingURL=button.css.map */\n";
  }
});

// src/app/shared/button/button.ts
function cov_qx2xqoel7() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\shared\\button\\button.ts";
  var hash = "a651056fdbc6b131c71fb8c211118d2161038a1a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\shared\\button\\button.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 13
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 12
        },
        end: {
          line: 6,
          column: 27
        }
      },
      "2": {
        start: {
          line: 7,
          column: 18
        },
        end: {
          line: 7,
          column: 36
        }
      },
      "3": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 52
        }
      },
      "4": {
        start: {
          line: 11,
          column: 28
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "5": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 23,
          column: 11
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 19
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 8
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
      file: "button.js",
      sourceRoot: "",
      sources: ["button.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,YAAY,EAAE,KAAK,EAAE,MAAM,EAAE,MAAM,eAAe,CAAC;AAQhE,IAAM,MAAM,GAAZ,MAAM,MAAM;IACR,KAAK,GAAG,eAAe;IACtB,WAAW,GAAG,IAAI,YAAY,EAAU;IAGlD,YAAY;QACV,IAAI,CAAC,WAAW,CAAC,IAAI,CAAE,oBAAoB,CAAC,CAAA;IAC9C,CAAC;;wBANA,KAAK;8BACL,MAAM;;;AAFI,MAAM;IANlB,SAAS,CAAC;QACT,QAAQ,EAAE,YAAY;QACtB,OAAO,EAAE,EAAE;QACX,8BAA4B;;KAE7B,CAAC;GACW,MAAM,CAQlB",
      sourcesContent: [`import { Component, EventEmitter, Input, Output } from '@angular/core';\r
\r
@Component({\r
  selector: 'app-button',\r
  imports: [],\r
  templateUrl: './button.html',\r
  styleUrl: './button.css'\r
})\r
export class Button {\r
  @Input() label = 'default value';\r
  @Output() sendMessage = new EventEmitter<string>();\r
\r
\r
  notifyParent () {\r
    this.sendMessage.emit ("message from child")\r
  }\r
}\r
`]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a651056fdbc6b131c71fb8c211118d2161038a1a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_qx2xqoel7 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Button;
var init_button3 = __esm({
  "src/app/shared/button/button.ts"() {
    "use strict";
    init_tslib_es6();
    init_button();
    init_button2();
    init_core();
    cov_qx2xqoel7();
    cov_qx2xqoel7().s[0]++;
    Button = class Button2 {
      label = (cov_qx2xqoel7().s[1]++, "default value");
      sendMessage = (cov_qx2xqoel7().s[2]++, new EventEmitter());
      notifyParent() {
        cov_qx2xqoel7().f[0]++;
        cov_qx2xqoel7().s[3]++;
        this.sendMessage.emit("message from child");
      }
      static propDecorators = (cov_qx2xqoel7().s[4]++, {
        label: [{
          type: Input
        }],
        sendMessage: [{
          type: Output
        }]
      });
    };
    cov_qx2xqoel7().s[5]++;
    Button = __decorate([Component({
      selector: "app-button",
      imports: [],
      template: button_default,
      styles: [button_default2]
    })], Button);
  }
});

export {
  Button,
  init_button3 as init_button
};
//# sourceMappingURL=chunk-TSMMHVVN.js.map
