import {
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-WAH5LQNR.js";
import "./chunk-TTULUY32.js";

// src/app/services/api.spec.ts
init_testing();

// src/app/services/api.ts
init_tslib_es6();
init_core();
function cov_u2jgnnedm() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\services\\api.ts";
  var hash = "62cc766174f20337ddee466477b227937aef57a8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\services\\api.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 10
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 10
        },
        end: {
          line: 4,
          column: 63
        }
      },
      "2": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 12,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 5,
            column: 5
          }
        },
        loc: {
          start: {
            line: 5,
            column: 14
          },
          end: {
            line: 6,
            column: 5
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "api.js",
      sourceRoot: "",
      sources: ["api.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAOpC,IAAM,GAAG,GAAT,MAAM,GAAG;IACN,GAAG,GAAG,qDAAqD,CAAC;IAEpE,OAAO;IAEP,CAAC;CACF,CAAA;AANY,GAAG;IAHf,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GACW,GAAG,CAMf",
      sourcesContent: ["import { Injectable } from '@angular/core';\r\nimport { HttpClient } from '@angular/common/http';\r\nimport { Observable } from 'rxjs';\r\n\r\n@Injectable({\r\n  providedIn: 'root'\r\n})\r\nexport class Api {\r\n  private url = 'https://jsonplaceholder.typicode.com/users?_limit=3';\r\n\r\n  getUser(){\r\n    \r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "62cc766174f20337ddee466477b227937aef57a8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_u2jgnnedm = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_u2jgnnedm();
cov_u2jgnnedm().s[0]++;
var Api = class Api2 {
  url = (cov_u2jgnnedm().s[1]++, "https://jsonplaceholder.typicode.com/users?_limit=3");
  getUser() {
    cov_u2jgnnedm().f[0]++;
  }
};
cov_u2jgnnedm().s[2]++;
Api = __decorate([Injectable({
  providedIn: "root"
})], Api);

// src/app/services/api.spec.ts
describe("Api", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-api.spec.js.map
