import {
  Button,
  init_button
} from "./chunk-EK7TNUAC.js";
import {
  Component,
  EventEmitter,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-G5PIT6SS.js";
import {
  __esm,
  __name,
  __publicField
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\routes\contact\section-1\section-1.html
var section_1_default;
var init_section_1 = __esm({
  "angular:jit:template:src\\app\\routes\\contact\\section-1\\section-1.html"() {
    section_1_default = '<p>section-1 works!</p>\r\n\r\n<app-button (click)="notifyParent()" label="Send Message to Parent"></app-button>';
  }
});

// angular:jit:style:src\app\routes\contact\section-1\section-1.css
var section_1_default2;
var init_section_12 = __esm({
  "angular:jit:style:src\\app\\routes\\contact\\section-1\\section-1.css"() {
    section_1_default2 = "/* src/app/routes/contact/section-1/section-1.css */\n/*# sourceMappingURL=section-1.css.map */\n";
  }
});

// src/app/routes/contact/section-1/section-1.ts
function cov_1l4b2f1yq1() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\contact\\section-1\\section-1.ts";
  var hash = "1e308f65b601fd4776f1cb97f2ea1fcab4b00755";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\contact\\section-1\\section-1.ts",
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
          column: 19
        },
        end: {
          line: 7,
          column: 37
        }
      },
      "2": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 56
        }
      },
      "3": {
        start: {
          line: 11,
          column: 28
        },
        end: {
          line: 13,
          column: 5
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
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "section-1.js",
      sourceRoot: "",
      sources: ["section-1.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,YAAY,EAAE,MAAM,EAAE,MAAM,eAAe,CAAC;AAChE,OAAO,EAAE,MAAM,EAAE,MAAM,+BAA+B,CAAC;AAQhD,IAAM,QAAQ,GAAd,MAAM,QAAQ;IACT,YAAY,GAAG,IAAI,YAAY,EAAU;IAEnD,YAAY;QACV,IAAI,CAAC,YAAY,CAAC,IAAI,CAAC,uBAAuB,CAAC,CAAC;IAClD,CAAC;;+BAJA,MAAM;;;AADI,QAAQ;IANpB,SAAS,CAAC;QACT,QAAQ,EAAE,eAAe;QACzB,OAAO,EAAE,CAAC,MAAM,CAAC;QACjB,8BAA+B;;KAEhC,CAAC;GACW,QAAQ,CAMpB",
      sourcesContent: ["import { Component, EventEmitter, Output } from '@angular/core';\r\nimport { Button } from '../../../shared/button/button';\r\n\r\n@Component({\r\n  selector: 'app-section-1',\r\n  imports: [Button],\r\n  templateUrl: './section-1.html',\r\n  styleUrl: './section-1.css'\r\n})\r\nexport class Section1 {\r\n  @Output() messageEvent = new EventEmitter<string>();\r\n\r\n  notifyParent() {\r\n    this.messageEvent.emit('Hello from the child!');\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1e308f65b601fd4776f1cb97f2ea1fcab4b00755"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1l4b2f1yq1 = /* @__PURE__ */ __name(function() {
      return actualCoverage;
    }, "cov_1l4b2f1yq1");
  }
  return actualCoverage;
}
var _a, Section1;
var init_section_13 = __esm({
  "src/app/routes/contact/section-1/section-1.ts"() {
    "use strict";
    init_tslib_es6();
    init_section_1();
    init_section_12();
    init_core();
    init_button();
    __name(cov_1l4b2f1yq1, "cov_1l4b2f1yq1");
    cov_1l4b2f1yq1();
    cov_1l4b2f1yq1().s[0]++;
    Section1 = (_a = class {
      messageEvent = (cov_1l4b2f1yq1().s[1]++, new EventEmitter());
      notifyParent() {
        cov_1l4b2f1yq1().f[0]++;
        cov_1l4b2f1yq1().s[2]++;
        this.messageEvent.emit("Hello from the child!");
      }
    }, __name(_a, "Section1"), __publicField(_a, "propDecorators", (cov_1l4b2f1yq1().s[3]++, {
      messageEvent: [{
        type: Output
      }]
    })), _a);
    cov_1l4b2f1yq1().s[4]++;
    Section1 = __decorate([Component({
      selector: "app-section-1",
      imports: [Button],
      template: section_1_default,
      styles: [section_1_default2]
    })], Section1);
  }
});

export {
  Section1,
  init_section_13 as init_section_1
};
//# sourceMappingURL=chunk-EHQSCCEK.js.map
