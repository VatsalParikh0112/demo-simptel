import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6,
  input
} from "./chunk-G5PIT6SS.js";
import {
  __esm,
  __name,
  __publicField
} from "./chunk-SK4CH4QL.js";

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
  var hash = "efb6b1a4dad0631c090bcb226b95770e3187bbc8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\home\\section-2\\section-2.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 11
        },
        end: {
          line: 7,
          column: 27
        }
      },
      "2": {
        start: {
          line: 8,
          column: 10
        },
        end: {
          line: 8,
          column: 26
        }
      },
      "3": {
        start: {
          line: 9,
          column: 28
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "4": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 21,
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
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAA+B,KAAK,EAAE,MAAM,eAAe,CAAC;;AAQvE,IAAM,QAAQ,GAAd,MAAM,QAAQ;WACZ,KAAK,CAAC,QAAQ,EAAU;UACzB,KAAK,CAAC,QAAQ,EAAU;;;;;;AAFnB,QAAQ;IANpB,SAAS,CAAC;QACT,QAAQ,EAAE,eAAe;QACzB,OAAO,EAAE,EAAE;QACX,8BAA+B;;KAEhC,CAAC;GACW,QAAQ,CAGpB",
      sourcesContent: ["import { Component, Input, Output, EventEmitter, input } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'app-section-2',\r\n  imports: [],\r\n  templateUrl: './section-2.html',\r\n  styleUrl: './section-2.css'\r\n})\r\nexport class Section2 {\r\n  name = input.required<string>();\r\n  age = input.required<number>();\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "efb6b1a4dad0631c090bcb226b95770e3187bbc8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_2j7e6z3nmm = /* @__PURE__ */ __name(function() {
      return actualCoverage;
    }, "cov_2j7e6z3nmm");
  }
  return actualCoverage;
}
var _a, Section2;
var init_section_23 = __esm({
  "src/app/routes/home/section-2/section-2.ts"() {
    "use strict";
    init_tslib_es6();
    init_section_2();
    init_section_22();
    init_core();
    init_core();
    __name(cov_2j7e6z3nmm, "cov_2j7e6z3nmm");
    cov_2j7e6z3nmm();
    cov_2j7e6z3nmm().s[0]++;
    Section2 = (_a = class {
      name = (cov_2j7e6z3nmm().s[1]++, input.required());
      age = (cov_2j7e6z3nmm().s[2]++, input.required());
    }, __name(_a, "Section2"), __publicField(_a, "propDecorators", (cov_2j7e6z3nmm().s[3]++, {
      name: [{
        type: Input,
        args: [{
          isSignal: true,
          alias: "name",
          required: true,
          transform: void 0
        }]
      }],
      age: [{
        type: Input,
        args: [{
          isSignal: true,
          alias: "age",
          required: true,
          transform: void 0
        }]
      }]
    })), _a);
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
//# sourceMappingURL=chunk-MW4TSDK3.js.map
