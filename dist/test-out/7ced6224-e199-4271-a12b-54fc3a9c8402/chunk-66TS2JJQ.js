import {
  Component,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6,
  input,
  output
} from "./chunk-NG264RT6.js";
import {
  __esm,
  __name,
  __publicField
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\shared\button\button.html
var button_default;
var init_button = __esm({
  "angular:jit:template:src\\app\\shared\\button\\button.html"() {
    button_default = '<button class=" cursor-pointer rounded-xl text-white m-5 p-2 border bg-gray-500  ">\r\n    {{ label() }}\r\n\r\n</button>\r\n<button (click)="notifyParent()">{{ label () }}</button>';
  }
});

// angular:jit:style:src\app\shared\button\button.css
var button_default2;
var init_button2 = __esm({
  "angular:jit:style:src\\app\\shared\\button\\button.css"() {
    button_default2 = "/* src/app/shared/button/button.css */\n/*# sourceMappingURL=button.css.map */\n";
  }
});

// src/app/shared/button/button.ts
var _a, Button;
var init_button3 = __esm({
  "src/app/shared/button/button.ts"() {
    "use strict";
    init_tslib_es6();
    init_button();
    init_button2();
    init_core();
    init_core();
    Button = (_a = class {
      label = input("");
      sendMessage = output();
      notifyParent() {
        this.sendMessage.emit("message from child");
      }
    }, __name(_a, "Button"), __publicField(_a, "propDecorators", {
      label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: void 0 }] }],
      sendMessage: [{ type: Output, args: ["sendMessage"] }]
    }), _a);
    Button = __decorate([
      Component({
        selector: "app-button",
        imports: [],
        template: button_default,
        styles: [button_default2]
      })
    ], Button);
  }
});

export {
  Button,
  init_button3 as init_button
};
//# sourceMappingURL=chunk-66TS2JJQ.js.map
