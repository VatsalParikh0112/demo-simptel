import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-35QTXDGA.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\layout\footer\footer.html
var footer_default;
var init_footer = __esm({
  "angular:jit:template:src\\app\\layout\\footer\\footer.html"() {
    footer_default = '<footer class="bg-gray-800 p-4">\r\n  <p class="text-white">Footer Content</p>\r\n</footer>\r\n';
  }
});

// angular:jit:style:src\app\layout\footer\footer.css
var footer_default2;
var init_footer2 = __esm({
  "angular:jit:style:src\\app\\layout\\footer\\footer.css"() {
    footer_default2 = "/* src/app/layout/footer/footer.css */\n/*# sourceMappingURL=footer.css.map */\n";
  }
});

// src/app/layout/footer/footer.ts
function cov_1egeak4usm() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\layout\\footer\\footer.ts";
  var hash = "6fbc7c5d23e0b254dd7cf9e5ad31cb8ec260ee28";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\layout\\footer\\footer.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 13
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
          column: 11
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
      file: "footer.js",
      sourceRoot: "",
      sources: ["footer.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAQnC,IAAM,MAAM,GAAZ,MAAM,MAAM;CAElB,CAAA;AAFY,MAAM;IANlB,SAAS,CAAC;QACT,QAAQ,EAAE,YAAY;QACtB,OAAO,EAAE,EAAE;QACX,8BAA4B;;KAE7B,CAAC;GACW,MAAM,CAElB",
      sourcesContent: ["import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'app-footer',\r\n  imports: [],\r\n  templateUrl: './footer.html',\r\n  styleUrl: './footer.css'\r\n})\r\nexport class Footer {\r\n\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6fbc7c5d23e0b254dd7cf9e5ad31cb8ec260ee28"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1egeak4usm = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Footer;
var init_footer3 = __esm({
  "src/app/layout/footer/footer.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer();
    init_footer2();
    init_core();
    cov_1egeak4usm();
    cov_1egeak4usm().s[0]++;
    Footer = class Footer2 {
    };
    cov_1egeak4usm().s[1]++;
    Footer = __decorate([Component({
      selector: "app-footer",
      imports: [],
      template: footer_default,
      styles: [footer_default2]
    })], Footer);
  }
});

export {
  Footer,
  init_footer3 as init_footer
};
//# sourceMappingURL=chunk-3RIZP3CB.js.map
