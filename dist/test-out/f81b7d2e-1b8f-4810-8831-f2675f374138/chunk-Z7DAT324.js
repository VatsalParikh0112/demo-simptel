import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-IJMVPFYS.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\home\section-2\section-2.html
var section_2_default;
var init_section_2 = __esm({
  "angular:jit:template:src\\app\\routes\\home\\section-2\\section-2.html"() {
    section_2_default = '<div class=" text-2xl ">Section2</div>\r\n\r\n<p>Hello, {{ name }}!</p>\r\n<p>Your age is: {{ age }}</p>';
  }
});

// angular:jit:style:src\app\routes\home\section-2\section-2.css
var section_2_default2;
var init_section_22 = __esm({
  "angular:jit:style:src\\app\\routes\\home\\section-2\\section-2.css"() {
    section_2_default2 = "/* src/app/routes/home/section-2/section-2.css */\n/*# sourceMappingURL=section-2.css.map */\n";
  }
});

// src/app/routes/home/section-2/section-2.ts
function cov_2j7e6z3nmm() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\home\\section-2\\section-2.ts";
  var hash = "bdd9d6519991339f686bfc7d67d23f90c5255ebe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\home\\section-2\\section-2.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 11
        },
        end: {
          line: 6,
          column: 13
        }
      },
      "2": {
        start: {
          line: 7,
          column: 10
        },
        end: {
          line: 7,
          column: 11
        }
      },
      "3": {
        start: {
          line: 8,
          column: 28
        },
        end: {
          line: 11,
          column: 5
        }
      },
      "4": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 20,
          column: 13
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "section-2.js",
      sourceRoot: "",
      sources: ["section-2.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,KAAK,EAAwB,MAAM,eAAe,CAAC;AAQhE,IAAM,QAAQ,GAAd,MAAM,QAAQ;IACV,IAAI,GAAW,EAAE;IACjB,GAAG,GAAW,CAAC;;uBADvB,KAAK;sBACL,KAAK;;;AAFK,QAAQ;IANpB,SAAS,CAAC;QACT,QAAQ,EAAE,eAAe;QACzB,OAAO,EAAE,EAAE;QACX,8BAA+B;;KAEhC,CAAC;GACW,QAAQ,CAGpB",
      sourcesContent: ["import { Component, Input, Output, EventEmitter } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'app-section-2',\r\n  imports: [],\r\n  templateUrl: './section-2.html',\r\n  styleUrl: './section-2.css'\r\n})\r\nexport class Section2 {\r\n  @Input() name: string = '';\r\n  @Input() age: number = 0;\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bdd9d6519991339f686bfc7d67d23f90c5255ebe"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_2j7e6z3nmm = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Section2;
var init_section_23 = __esm({
  "src/app/routes/home/section-2/section-2.ts"() {
    "use strict";
    init_tslib_es6();
    init_section_2();
    init_section_22();
    init_core();
    cov_2j7e6z3nmm();
    cov_2j7e6z3nmm().s[0]++;
    Section2 = class Section22 {
      name = (cov_2j7e6z3nmm().s[1]++, "");
      age = (cov_2j7e6z3nmm().s[2]++, 0);
      static propDecorators = (cov_2j7e6z3nmm().s[3]++, {
        name: [{
          type: Input
        }],
        age: [{
          type: Input
        }]
      });
    };
    cov_2j7e6z3nmm().s[4]++;
    Section2 = __decorate([Component({
      selector: "app-section-2",
      imports: [],
      template: section_2_default,
      styles: [section_2_default2]
    })], Section2);
  }
});

export {
  Section2,
  init_section_23 as init_section_2
};
//# sourceMappingURL=chunk-Z7DAT324.js.map
