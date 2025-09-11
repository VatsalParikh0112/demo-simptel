import {
  Router,
  init_router
} from "./chunk-KNNIIOSW.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-6SUJJR5C.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\layout\navbar\navbar.html
var navbar_default;
var init_navbar = __esm({
  "angular:jit:template:src\\app\\layout\\navbar\\navbar.html"() {
    navbar_default = `<nav class="bg-gray-200 py-[2vh] px-[1vw] flex justify-between">\r
  <div (click)="clickEvent('')" class="cursor-pointer">Logo</div>\r
  <ul class="flex space-x-4 gap-[20px]">\r
    <li (click)="clickEvent('')" class="cursor-pointer">Home</li>\r
    <li (click)="clickEvent('about')" class="cursor-pointer">About</li>\r
    <li (click)="clickEvent('contact')" class="cursor-pointer">Contact</li>\r
    <li (click)="clickEvent('api')" class="cursor-pointer">API</li>\r
  </ul>\r
  <div>bell</div>\r
</nav>`;
  }
});

// angular:jit:style:src\app\layout\navbar\navbar.css
var navbar_default2;
var init_navbar2 = __esm({
  "angular:jit:style:src\\app\\layout\\navbar\\navbar.css"() {
    navbar_default2 = "/* src/app/layout/navbar/navbar.css */\n/*# sourceMappingURL=navbar.css.map */\n";
  }
});

// src/app/layout/navbar/navbar.ts
function cov_1643fiaf4c() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\layout\\navbar\\navbar.ts";
  var hash = "0f7f5c3551e07abdcf1ba9b3547372ff0c2e86c7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\layout\\navbar\\navbar.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 13
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 51
        }
      },
      "2": {
        start: {
          line: 10,
          column: 13
        },
        end: {
          line: 10,
          column: 27
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
          column: 11
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
            column: 17
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
            column: 21
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
      file: "navbar.js",
      sourceRoot: "",
      sources: ["navbar.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,EAAE,MAAM,eAAe,CAAC;AAClD,OAAO,EAAE,MAAM,EAAE,MAAM,iBAAiB,CAAC;AASlC,IAAM,MAAM,GAAZ,MAAM,MAAM;IAEjB,UAAU;QACR,MAAM,IAAI,KAAK,CAAC,yBAAyB,CAAC,CAAC;IAC7C,CAAC;IACO,MAAM,GAAG,MAAM,CAAC,MAAM,CAAC,CAAC;IAEzB,UAAU,CAAC,IAAY;QAC5B,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC;IAC/B,CAAC;CACF,CAAA;AAVY,MAAM;IANlB,SAAS,CAAC;QACT,QAAQ,EAAE,YAAY;QACtB,OAAO,EAAE,EAAE;QACX,8BAA4B;;KAE7B,CAAC;GACW,MAAM,CAUlB",
      sourcesContent: ["import { Component, inject } from '@angular/core';\r\nimport { Router } from '@angular/router';\r\n\r\n\r\n@Component({\r\n  selector: 'app-navbar',\r\n  imports: [],\r\n  templateUrl: './navbar.html',\r\n  styleUrl: './navbar.css'\r\n})\r\nexport class Navbar {\r\n\r\n  navigateTo() {\r\n    throw new Error('Method not implemented.');\r\n  }\r\n  private router = inject(Router);\r\n\r\n  public clickEvent(path: string) {\r\n    this.router.navigate([path]);\r\n  }\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0f7f5c3551e07abdcf1ba9b3547372ff0c2e86c7"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1643fiaf4c = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Navbar;
var init_navbar3 = __esm({
  "src/app/layout/navbar/navbar.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar();
    init_navbar2();
    init_core();
    init_router();
    cov_1643fiaf4c();
    cov_1643fiaf4c().s[0]++;
    Navbar = class Navbar2 {
      navigateTo() {
        cov_1643fiaf4c().f[0]++;
        cov_1643fiaf4c().s[1]++;
        throw new Error("Method not implemented.");
      }
      router = (cov_1643fiaf4c().s[2]++, inject(Router));
      clickEvent(path) {
        cov_1643fiaf4c().f[1]++;
        cov_1643fiaf4c().s[3]++;
        this.router.navigate([path]);
      }
    };
    cov_1643fiaf4c().s[4]++;
    Navbar = __decorate([Component({
      selector: "app-navbar",
      imports: [],
      template: navbar_default,
      styles: [navbar_default2]
    })], Navbar);
  }
});

export {
  Navbar,
  init_navbar3 as init_navbar
};
//# sourceMappingURL=chunk-RL2JL46E.js.map
