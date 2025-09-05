import {
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-4QWUHEDH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\shared\button-2\button-2.html
var button_2_default;
var init_button_2 = __esm({
  "angular:jit:template:src\\app\\shared\\button-2\\button-2.html"() {
    button_2_default = '<div role="button" (click)="changePage()" class=" flex p-2 m-2 w-6xl justify-center bg-black text-white rounded-xl cursor-pointer ">\r\n    {{label}}\r\n</div>';
  }
});

// angular:jit:style:src\app\shared\button-2\button-2.css
var button_2_default2;
var init_button_22 = __esm({
  "angular:jit:style:src\\app\\shared\\button-2\\button-2.css"() {
    button_2_default2 = "/* src/app/shared/button-2/button-2.css */\n/*# sourceMappingURL=button-2.css.map */\n";
  }
});

// src/app/shared/button-2/button-2.ts
var Button2;
var init_button_23 = __esm({
  "src/app/shared/button-2/button-2.ts"() {
    "use strict";
    init_tslib_es6();
    init_button_2();
    init_button_22();
    init_core();
    Button2 = class Button22 {
      label = "default value";
      goToContact = new EventEmitter();
      changePage() {
        const path = "/contact";
        this.goToContact.emit(path);
      }
      static propDecorators = {
        label: [{ type: Input }],
        goToContact: [{ type: Output }]
      };
    };
    Button2 = __decorate([
      Component({
        selector: "app-button-2",
        imports: [],
        template: button_2_default,
        styles: [button_2_default2]
      })
    ], Button2);
  }
});

export {
  Button2,
  init_button_23 as init_button_2
};
//# sourceMappingURL=chunk-6V25ZAUD.js.map
