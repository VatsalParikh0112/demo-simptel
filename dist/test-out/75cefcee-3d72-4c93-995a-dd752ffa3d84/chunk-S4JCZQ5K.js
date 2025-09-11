import {
  HttpClient,
  HttpParams,
  init_http
} from "./chunk-WNMIVGIK.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-IJMVPFYS.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/services/api.ts
function cov_u2jgnnedm() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\services\\api.ts";
  var hash = "f1871df369ba01cf761887c684547770ae81fdf0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\services\\api.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 10
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 10
        },
        end: {
          line: 6,
          column: 63
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 25
        }
      },
      "3": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 39
        }
      },
      "4": {
        start: {
          line: 14,
          column: 23
        },
        end: {
          line: 14,
          column: 64
        }
      },
      "5": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 51
        }
      },
      "6": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 46
        }
      },
      "7": {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 21,
          column: 64
        }
      },
      "8": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 51
        }
      },
      "9": {
        start: {
          line: 24,
          column: 28
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "10": {
        start: {
          line: 24,
          column: 34
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "11": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 32,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 22
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 14
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 20
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 13
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 18
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 17
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 19
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 20
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 29
          }
        },
        loc: {
          start: {
            line: 24,
            column: 34
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 24
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "api.js",
      sourceRoot: "",
      sources: ["api.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAC3C,OAAO,EAAE,UAAU,EAAE,UAAU,EAAE,MAAM,sBAAsB,CAAC;AAOvD,IAAM,GAAG,GAAT,MAAM,GAAG;IAGM;IAFZ,GAAG,GAAG,qDAAqD,CAAC;IAEpE,YAAoB,IAAiB;QAAjB,SAAI,GAAJ,IAAI,CAAa;IAAI,CAAC;IAE1C,OAAO;QACL,OAAO,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC;IACjC,CAAC;IAED,WAAW,CAAE,EAAU;QACrB,MAAM,MAAM,GAAG,IAAI,UAAU,EAAE,CAAC,GAAG,CAAC,IAAI,EAAE,EAAE,CAAC,QAAQ,EAAE,CAAC,CAAC;QACzD,OAAO,IAAI,CAAC,IAAI,CAAC,GAAG,CAAU,IAAI,CAAC,GAAG,EAAE,EAAC,MAAM,EAAC,CAAC,CAAC;IACpD,CAAC;IAED,OAAO,CAAC,IAAa;QACnB,OAAO,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,EAAE,IAAI,CAAC,CAAC;IACxC,CAAC;IAED,UAAU,CAAC,EAAW;QACpB,MAAM,MAAM,GAAG,IAAI,UAAU,EAAE,CAAC,GAAG,CAAC,IAAI,EAAE,EAAE,CAAC,QAAQ,EAAE,CAAC,CAAC;QACzD,OAAO,IAAI,CAAC,IAAI,CAAC,GAAG,CAAU,IAAI,CAAC,GAAG,EAAE,EAAC,MAAM,EAAC,CAAC,CAAC;IACpD,CAAC;;;;;AArBU,GAAG;IAHf,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GACW,GAAG,CAsBf",
      sourcesContent: ["import { Injectable } from '@angular/core';\r\nimport { HttpClient, HttpParams } from '@angular/common/http';\r\nimport { Observable } from 'rxjs';\r\nimport { users } from '../interfaces/users';\r\n\r\n@Injectable({\r\n  providedIn: 'root'\r\n})\r\nexport class Api {\r\n  private url = 'https://jsonplaceholder.typicode.com/users?_limit=3';\r\n\r\n  constructor(private http : HttpClient ) {}\r\n\r\n  getUser(){\r\n    return this.http.get(this.url);   \r\n  }\r\n  \r\n  getUserById (id: number) : Observable <users[]> {\r\n    const params = new HttpParams().set('id', id.toString());\r\n    return this.http.get<users[]>(this.url, {params});\r\n  }\r\n\r\n  addUser(user: users[]) : Observable <any> {\r\n    return this.http.post(this.url, user);\r\n  }\r\n\r\n  deleteUser(id : number) : Observable <any> {\r\n    const params = new HttpParams().set('id', id.toString());\r\n    return this.http.get<users[]>(this.url, {params});\r\n  }\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f1871df369ba01cf761887c684547770ae81fdf0"
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
var Api;
var init_api = __esm({
  "src/app/services/api.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    cov_u2jgnnedm();
    cov_u2jgnnedm().s[0]++;
    Api = class Api2 {
      http;
      url = (cov_u2jgnnedm().s[1]++, "https://jsonplaceholder.typicode.com/users?_limit=3");
      constructor(http) {
        cov_u2jgnnedm().f[0]++;
        cov_u2jgnnedm().s[2]++;
        this.http = http;
      }
      getUser() {
        cov_u2jgnnedm().f[1]++;
        cov_u2jgnnedm().s[3]++;
        return this.http.get(this.url);
      }
      getUserById(id) {
        cov_u2jgnnedm().f[2]++;
        const params = (cov_u2jgnnedm().s[4]++, new HttpParams().set("id", id.toString()));
        cov_u2jgnnedm().s[5]++;
        return this.http.get(this.url, {
          params
        });
      }
      addUser(user) {
        cov_u2jgnnedm().f[3]++;
        cov_u2jgnnedm().s[6]++;
        return this.http.post(this.url, user);
      }
      deleteUser(id) {
        cov_u2jgnnedm().f[4]++;
        const params = (cov_u2jgnnedm().s[7]++, new HttpParams().set("id", id.toString()));
        cov_u2jgnnedm().s[8]++;
        return this.http.get(this.url, {
          params
        });
      }
      static ctorParameters = (cov_u2jgnnedm().s[9]++, () => {
        cov_u2jgnnedm().f[5]++;
        cov_u2jgnnedm().s[10]++;
        return [{
          type: HttpClient
        }];
      });
    };
    cov_u2jgnnedm().s[11]++;
    Api = __decorate([Injectable({
      providedIn: "root"
    })], Api);
  }
});

export {
  Api,
  init_api
};
//# sourceMappingURL=chunk-S4JCZQ5K.js.map
