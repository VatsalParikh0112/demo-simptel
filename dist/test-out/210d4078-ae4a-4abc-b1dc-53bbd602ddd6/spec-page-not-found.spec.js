import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-35QTXDGA.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\page-not-found\page-not-found.html
var page_not_found_default;
var init_page_not_found = __esm({
  "angular:jit:template:src\\app\\routes\\page-not-found\\page-not-found.html"() {
    page_not_found_default = "<p>page-not-found works!</p>\r\n";
  }
});

// angular:jit:style:src\app\routes\page-not-found\page-not-found.css
var page_not_found_default2;
var init_page_not_found2 = __esm({
  "angular:jit:style:src\\app\\routes\\page-not-found\\page-not-found.css"() {
    page_not_found_default2 = "/* src/app/routes/page-not-found/page-not-found.css */\n/*# sourceMappingURL=page-not-found.css.map */\n";
  }
});

// src/app/routes/page-not-found/page-not-found.ts
function cov_puwyge8yq() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\page-not-found\\page-not-found.ts";
  var hash = "e85b023fc775f336224b49ea5b387d6976695d1d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\page-not-found\\page-not-found.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 14,
          column: 17
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "page-not-found.js",
      sourceRoot: "",
      sources: ["page-not-found.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAQnC,IAAM,YAAY,GAAlB,MAAM,YAAY;CAExB,CAAA;AAFY,YAAY;IANxB,SAAS,CAAC;QACT,QAAQ,EAAE,oBAAoB;QAC9B,OAAO,EAAE,EAAE;QACX,8BAAoC;;KAErC,CAAC;GACW,YAAY,CAExB",
      sourcesContent: ["import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'app-page-not-found',\r\n  imports: [],\r\n  templateUrl: './page-not-found.html',\r\n  styleUrl: './page-not-found.css'\r\n})\r\nexport class PageNotFound {\r\n\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e85b023fc775f336224b49ea5b387d6976695d1d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_puwyge8yq = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var PageNotFound;
var init_page_not_found3 = __esm({
  "src/app/routes/page-not-found/page-not-found.ts"() {
    "use strict";
    init_tslib_es6();
    init_page_not_found();
    init_page_not_found2();
    init_core();
    cov_puwyge8yq();
    cov_puwyge8yq().s[0]++;
    PageNotFound = class PageNotFound2 {
    };
    cov_puwyge8yq().s[1]++;
    PageNotFound = __decorate([Component({
      selector: "app-page-not-found",
      imports: [],
      template: page_not_found_default,
      styles: [page_not_found_default2]
    })], PageNotFound);
  }
});

// src/app/routes/page-not-found/page-not-found.spec.ts
var require_page_not_found_spec = __commonJS({
  "src/app/routes/page-not-found/page-not-found.spec.ts"(exports) {
    init_testing();
    init_page_not_found3();
    describe("PageNotFound", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [PageNotFound]
        }).compileComponents();
        fixture = TestBed.createComponent(PageNotFound);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_page_not_found_spec();
//# sourceMappingURL=spec-page-not-found.spec.js.map
