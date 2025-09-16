import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NG264RT6.js";
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
var _a, Section2;
var init_section_23 = __esm({
  "src/app/routes/home/section-2/section-2.ts"() {
    "use strict";
    init_tslib_es6();
    init_section_2();
    init_section_22();
    init_core();
    Section2 = (_a = class {
      name = "";
      age = 0;
    }, __name(_a, "Section2"), __publicField(_a, "propDecorators", {
      name: [{ type: Input }],
      age: [{ type: Input }]
    }), _a);
    Section2 = __decorate([
      Component({
        selector: "app-section-2",
        imports: [],
        template: section_2_default,
        styles: [section_2_default2]
      })
    ], Section2);
  }
});

export {
  Section2,
  init_section_23 as init_section_2
};
//# sourceMappingURL=chunk-2LC5TWLQ.js.map
