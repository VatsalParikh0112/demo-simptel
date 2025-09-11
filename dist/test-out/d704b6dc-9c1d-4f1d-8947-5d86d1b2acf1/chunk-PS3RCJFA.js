import {
  FormsModule,
  init_forms
} from "./chunk-OYM5K6GJ.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6SUJJR5C.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\home\section-1\section-1.html
var section_1_default;
var init_section_1 = __esm({
  "angular:jit:template:src\\app\\routes\\home\\section-1\\section-1.html"() {
    section_1_default = '<input (click)="onClick()" class="border" type="text" [(ngModel)]="inputValue">\r\n<button class=" border p-2 " (click)="onClick()">log</button>';
  }
});

// angular:jit:style:src\app\routes\home\section-1\section-1.css
var section_1_default2;
var init_section_12 = __esm({
  "angular:jit:style:src\\app\\routes\\home\\section-1\\section-1.css"() {
    section_1_default2 = "/* src/app/routes/home/section-1/section-1.css */\n/*# sourceMappingURL=section-1.css.map */\n";
  }
});

// src/app/routes/home/section-1/section-1.ts
function cov_ixvzyqsia() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\home\\section-1\\section-1.ts";
  var hash = "fb3e6e76a042ba61a0686b0bc1dd63af23d72aa0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\home\\section-1\\section-1.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 7,
          column: 19
        }
      },
      "2": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 37
        }
      },
      "3": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 37
        }
      },
      "4": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 22,
          column: 13
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
            column: 15
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 14
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "section-1.js",
      sourceRoot: "",
      sources: ["section-1.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAC1C,OAAO,EAAE,WAAW,EAAE,MAAM,gBAAgB,CAAC;AAQtC,IAAM,QAAQ,GAAd,MAAM,QAAQ;IACnB,UAAU,GAAW,EAAE,CAAC;IAExB,QAAQ;QACN,OAAO,CAAC,GAAG,CAAC,IAAI,CAAC,UAAU,CAAC,CAAC;IAC/B,CAAC;IAED,OAAO;QACL,OAAO,CAAC,GAAG,CAAC,IAAI,CAAC,UAAU,CAAC,CAAC;IAC/B,CAAC;CACF,CAAA;AAVY,QAAQ;IANpB,SAAS,CAAC;QACT,QAAQ,EAAE,eAAe;QACzB,OAAO,EAAE,CAAC,WAAW,CAAC;QACtB,8BAA+B;;KAEhC,CAAC;GACW,QAAQ,CAUpB",
      sourcesContent: ["import { Component } from '@angular/core';\r\nimport { FormsModule } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'app-section-1',\r\n  imports: [FormsModule],\r\n  templateUrl: './section-1.html',\r\n  styleUrl: './section-1.css'\r\n})\r\nexport class Section1 {\r\n  inputValue: string = '';\r\n\r\n  ngOnInit() {\r\n    console.log(this.inputValue);\r\n  }\r\n\r\n  onClick() {\r\n    console.log(this.inputValue);\r\n  }\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fb3e6e76a042ba61a0686b0bc1dd63af23d72aa0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_ixvzyqsia = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Section1;
var init_section_13 = __esm({
  "src/app/routes/home/section-1/section-1.ts"() {
    "use strict";
    init_tslib_es6();
    init_section_1();
    init_section_12();
    init_core();
    init_forms();
    cov_ixvzyqsia();
    cov_ixvzyqsia().s[0]++;
    Section1 = class Section12 {
      inputValue = (cov_ixvzyqsia().s[1]++, "");
      ngOnInit() {
        cov_ixvzyqsia().f[0]++;
        cov_ixvzyqsia().s[2]++;
        console.log(this.inputValue);
      }
      onClick() {
        cov_ixvzyqsia().f[1]++;
        cov_ixvzyqsia().s[3]++;
        console.log(this.inputValue);
      }
    };
    cov_ixvzyqsia().s[4]++;
    Section1 = __decorate([Component({
      selector: "app-section-1",
      imports: [FormsModule],
      template: section_1_default,
      styles: [section_1_default2]
    })], Section1);
  }
});

export {
  Section1,
  init_section_13 as init_section_1
};
//# sourceMappingURL=chunk-PS3RCJFA.js.map
