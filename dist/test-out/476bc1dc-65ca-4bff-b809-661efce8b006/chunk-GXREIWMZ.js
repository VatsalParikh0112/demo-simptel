import {
  FormsModule,
  init_forms
} from "./chunk-QKGBKSSQ.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NG264RT6.js";
import {
  __esm,
  __name
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\routes\home\section-1\section-1.html
var section_1_default;
var init_section_1 = __esm({
  "angular:jit:template:src\\app\\routes\\home\\section-1\\section-1.html"() {
    section_1_default = '<input (click)="onClick()" class="border" type="text" [(ngModel)]="inputValue">\r\n<button class=" border p-2 " (click)="onClick()">log</button>';
  }
});

// angular:jit:style:src\app\routes\home\section-1\section-1.css
var section_1_default2;
var init_section_12 = __esm({
  "angular:jit:style:src\\app\\routes\\home\\section-1\\section-1.css"() {
    section_1_default2 = "/* src/app/routes/home/section-1/section-1.css */\n/*# sourceMappingURL=section-1.css.map */\n";
  }
});

// src/app/routes/home/section-1/section-1.ts
var _a, Section1;
var init_section_13 = __esm({
  "src/app/routes/home/section-1/section-1.ts"() {
    "use strict";
    init_tslib_es6();
    init_section_1();
    init_section_12();
    init_core();
    init_forms();
    Section1 = (_a = class {
      inputValue = "";
      ngOnInit() {
        console.log(this.inputValue);
      }
      onClick() {
        console.log(this.inputValue);
      }
    }, __name(_a, "Section1"), _a);
    Section1 = __decorate([
      Component({
        selector: "app-section-1",
        imports: [FormsModule],
        template: section_1_default,
        styles: [section_1_default2]
      })
    ], Section1);
  }
});

export {
  Section1,
  init_section_13 as init_section_1
};
//# sourceMappingURL=chunk-GXREIWMZ.js.map
