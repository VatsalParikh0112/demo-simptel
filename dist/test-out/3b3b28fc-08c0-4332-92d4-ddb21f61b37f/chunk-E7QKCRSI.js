import {
  Button,
  init_button
} from "./chunk-TMWGX3BC.js";
import {
  Component,
  EventEmitter,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-4QWUHEDH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\contact\section-1\section-1.html
var section_1_default;
var init_section_1 = __esm({
  "angular:jit:template:src\\app\\routes\\contact\\section-1\\section-1.html"() {
    section_1_default = '<p>section-1 works!</p>\r\n\r\n<app-button (click)="notifyParent()" label="Send Message to Parent"></app-button>';
  }
});

// angular:jit:style:src\app\routes\contact\section-1\section-1.css
var section_1_default2;
var init_section_12 = __esm({
  "angular:jit:style:src\\app\\routes\\contact\\section-1\\section-1.css"() {
    section_1_default2 = "/* src/app/routes/contact/section-1/section-1.css */\n/*# sourceMappingURL=section-1.css.map */\n";
  }
});

// src/app/routes/contact/section-1/section-1.ts
var Section1;
var init_section_13 = __esm({
  "src/app/routes/contact/section-1/section-1.ts"() {
    "use strict";
    init_tslib_es6();
    init_section_1();
    init_section_12();
    init_core();
    init_button();
    Section1 = class Section12 {
      messageEvent = new EventEmitter();
      notifyParent() {
        this.messageEvent.emit("Hello from the child!");
      }
      static propDecorators = {
        messageEvent: [{ type: Output }]
      };
    };
    Section1 = __decorate([
      Component({
        selector: "app-section-1",
        imports: [Button],
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
//# sourceMappingURL=chunk-E7QKCRSI.js.map
