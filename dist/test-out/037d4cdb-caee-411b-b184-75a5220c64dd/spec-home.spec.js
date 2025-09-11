import {
  Section3,
  init_section_3
} from "./chunk-GLU4N2AE.js";
import "./chunk-W4GFGW2M.js";
import {
  Section2,
  init_section_2
} from "./chunk-Y2UHEZCM.js";
import {
  Section1,
  init_section_1
} from "./chunk-PS3RCJFA.js";
import "./chunk-KNNIIOSW.js";
import "./chunk-WKMCOWVR.js";
import "./chunk-VIJCD5PI.js";
import "./chunk-KEQMZ5BK.js";
import "./chunk-OYM5K6GJ.js";
import "./chunk-7DRXM5VD.js";
import "./chunk-K42GGLJU.js";
import "./chunk-XC7FPHGX.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-6SUJJR5C.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\home\home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src\\app\\routes\\home\\home.html"() {
    home_default = '<app-section-1 />\r\n\r\n<div class=" text-red-400 test-2xl ">Home</div>\r\n\r\n<app-section-2 [name]="parentName" [age]="parentAge" />\r\n\r\n<app-section-3 userName="John Doe" />';
  }
});

// angular:jit:style:src\app\routes\home\home.css
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src\\app\\routes\\home\\home.css"() {
    home_default2 = "/* src/app/routes/home/home.css */\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/routes/home/home.ts
function cov_2myg97ks67() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\home\\home.ts";
  var hash = "c004c1696528e41ebca2811f026a2f222d9e598f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\home\\home.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 11
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 17
        },
        end: {
          line: 9,
          column: 24
        }
      },
      "2": {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 10,
          column: 18
        }
      },
      "3": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 20,
          column: 9
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "home.js",
      sourceRoot: "",
      sources: ["home.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAC1C,OAAO,EAAE,QAAQ,EAAE,MAAM,uBAAuB,CAAC;AACjD,OAAO,EAAE,QAAQ,EAAE,MAAM,uBAAuB,CAAC;AACjD,OAAO,EAAE,QAAQ,EAAE,MAAM,uBAAuB,CAAC;AAS1C,IAAM,IAAI,GAAV,MAAM,IAAI;IAEf,UAAU,GAAW,OAAO,CAAC;IAC7B,SAAS,GAAW,EAAE,CAAC;CAExB,CAAA;AALY,IAAI;IAPhB,SAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,UAAU,EAAE,IAAI;QAChB,OAAO,EAAE,CAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ,CAAC;QACvC,8BAA0B;;KAE3B,CAAC;GACW,IAAI,CAKhB",
      sourcesContent: ["import { Component } from '@angular/core';\r\nimport { Section1 } from './section-1/section-1';\r\nimport { Section2 } from './section-2/section-2';\r\nimport { Section3 } from './section-3/section-3';\r\n\r\n@Component({\r\n  selector: 'app-home',\r\n  standalone: true,\r\n  imports: [Section1, Section2, Section3],\r\n  templateUrl: './home.html',\r\n  styleUrl: './home.css'\r\n})\r\nexport class Home {\r\n\r\n  parentName: string = 'Alice';\r\n  parentAge: number = 30;\r\n\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c004c1696528e41ebca2811f026a2f222d9e598f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_2myg97ks67 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Home;
var init_home3 = __esm({
  "src/app/routes/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_section_1();
    init_section_2();
    init_section_3();
    cov_2myg97ks67();
    cov_2myg97ks67().s[0]++;
    Home = class Home2 {
      parentName = (cov_2myg97ks67().s[1]++, "Alice");
      parentAge = (cov_2myg97ks67().s[2]++, 30);
    };
    cov_2myg97ks67().s[3]++;
    Home = __decorate([Component({
      selector: "app-home",
      standalone: true,
      imports: [Section1, Section2, Section3],
      template: home_default,
      styles: [home_default2]
    })], Home);
  }
});

// src/app/routes/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/routes/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    fdescribe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("when parentAge is called its age should be 30.", () => {
        expect(component.parentAge).toBe(30);
      });
      it("when parentname is called its name should be Alice.", () => {
        expect(component.parentName).toBe("Alice");
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map
