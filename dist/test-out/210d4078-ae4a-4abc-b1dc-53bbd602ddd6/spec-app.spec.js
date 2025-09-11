import {
  Navbar,
  init_navbar
} from "./chunk-N6OZNZSK.js";
import {
  Footer,
  init_footer
} from "./chunk-3RIZP3CB.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-COME2MOS.js";
import "./chunk-EA5IL4P5.js";
import "./chunk-QBUWWL7N.js";
import "./chunk-GNCOCR3Z.js";
import "./chunk-5N6WDKPD.js";
import "./chunk-XC7FPHGX.js";
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

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<app-navbar />\r\n<router-outlet />\r\n<app-footer />";
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
function cov_18a6pspq7y() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\app.ts";
  var hash = "3114f91c72ed9c10b6c440ae1155e2e82f50f8bf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\app.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 10
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 17,
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
      file: "app.js",
      sourceRoot: "",
      sources: ["app.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAC1C,OAAO,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAC/C,OAAO,EAAE,MAAM,EAAE,MAAM,wBAAwB,CAAC;AAChD,OAAO,EAAE,MAAM,EAAE,MAAM,wBAAwB,CAAC;AASzC,IAAM,GAAG,GAAT,MAAM,GAAG;CACf,CAAA;AADY,GAAG;IANf,SAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,OAAO,EAAE,CAAC,YAAY,EAAE,MAAM,EAAE,MAAM,CAAC;QACvC,8BAAyB;;KAE1B,CAAC;GACW,GAAG,CACf",
      sourcesContent: ["import { Component } from '@angular/core';\r\nimport { RouterOutlet } from '@angular/router';\r\nimport { Navbar } from './layout/navbar/navbar';\r\nimport { Footer } from './layout/footer/footer';\r\n\r\n\r\n@Component({\r\n  selector: 'app-root',\r\n  imports: [RouterOutlet, Navbar, Footer],\r\n  templateUrl: './app.html',\r\n  styleUrl: './app.css'\r\n})\r\nexport class App {\r\n}"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3114f91c72ed9c10b6c440ae1155e2e82f50f8bf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_18a6pspq7y = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_navbar();
    init_footer();
    cov_18a6pspq7y();
    cov_18a6pspq7y().s[0]++;
    App = class App2 {
    };
    cov_18a6pspq7y().s[1]++;
    App = __decorate([Component({
      selector: "app-root",
      imports: [RouterOutlet, Navbar, Footer],
      template: app_default,
      styles: [app_default2]
    })], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
