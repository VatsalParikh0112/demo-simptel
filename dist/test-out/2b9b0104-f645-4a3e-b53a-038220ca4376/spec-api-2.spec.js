import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-WAH5LQNR.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\api\api.html
var api_default;
var init_api = __esm({
  "angular:jit:template:src\\app\\routes\\api\\api.html"() {
    api_default = "";
  }
});

// angular:jit:style:src\app\routes\api\api.css
var api_default2;
var init_api2 = __esm({
  "angular:jit:style:src\\app\\routes\\api\\api.css"() {
    api_default2 = "/* src/app/routes/api/api.css */\n/*# sourceMappingURL=api.css.map */\n";
  }
});

// src/app/routes/api/api.ts
function cov_1fxtiklrag() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\api\\api.ts";
  var hash = "c5041f7adbdae7143e6610d70491740fd3afaa22";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\api\\api.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 10
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
          column: 8
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
      file: "api.js",
      sourceRoot: "",
      sources: ["api.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAUnC,IAAM,GAAG,GAAT,MAAM,GAAG;CAEf,CAAA;AAFY,GAAG;IANf,SAAS,CAAC;QACT,QAAQ,EAAE,SAAS;QACnB,OAAO,EAAE,EAAE;QACX,8BAAyB;;KAE1B,CAAC;GACW,GAAG,CAEf",
      sourcesContent: ["import { Component } from '@angular/core';\r\nimport { Api } from '../../services/api';\r\nimport { users } from '../../interfaces/users';\r\n\r\n@Component({\r\n  selector: 'app-api',\r\n  imports: [],\r\n  templateUrl: './api.html',\r\n  styleUrls: ['./api.css']\r\n})\r\nexport class API {\r\n\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c5041f7adbdae7143e6610d70491740fd3afaa22"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1fxtiklrag = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var API;
var init_api3 = __esm({
  "src/app/routes/api/api.ts"() {
    "use strict";
    init_tslib_es6();
    init_api();
    init_api2();
    init_core();
    cov_1fxtiklrag();
    cov_1fxtiklrag().s[0]++;
    API = class API2 {
    };
    cov_1fxtiklrag().s[1]++;
    API = __decorate([Component({
      selector: "app-api",
      imports: [],
      template: api_default,
      styles: [api_default2]
    })], API);
  }
});

// src/app/routes/api/api.spec.ts
var require_api_spec = __commonJS({
  "src/app/routes/api/api.spec.ts"(exports) {
    init_testing();
    init_api3();
    describe("API", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [API]
        }).compileComponents();
        fixture = TestBed.createComponent(API);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_api_spec();
//# sourceMappingURL=spec-api-2.spec.js.map
