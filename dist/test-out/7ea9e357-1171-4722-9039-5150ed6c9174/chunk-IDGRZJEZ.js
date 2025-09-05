import {
  Router,
  init_router
} from "./chunk-I43S5K4B.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-4QWUHEDH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\shared\button1\button1.html
var button1_default;
var init_button1 = __esm({
  "angular:jit:template:src\\app\\shared\\button1\\button1.html"() {
    button1_default = '<button (click)="redirect()" class=" p-2 m-2 rounded-xl border bg-amber-400 cursor-pointer ">\r\n    {{label}}\r\n</button>';
  }
});

// angular:jit:style:src\app\shared\button1\button1.css
var button1_default2;
var init_button12 = __esm({
  "angular:jit:style:src\\app\\shared\\button1\\button1.css"() {
    button1_default2 = "/* src/app/shared/button1/button1.css */\n/*# sourceMappingURL=button1.css.map */\n";
  }
});

// src/app/shared/button1/button1.ts
var Button1;
var init_button13 = __esm({
  "src/app/shared/button1/button1.ts"() {
    "use strict";
    init_tslib_es6();
    init_button1();
    init_button12();
    init_core();
    init_router();
    Button1 = class Button12 {
      router;
      label = "default";
      constructor(router) {
        this.router = router;
      }
      redirect() {
        this.router.navigate(["/"]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
      static propDecorators = {
        label: [{ type: Input }]
      };
    };
    Button1 = __decorate([
      Component({
        selector: "app-button1",
        imports: [],
        template: button1_default,
        styles: [button1_default2]
      })
    ], Button1);
  }
});

export {
  Button1,
  init_button13 as init_button1
};
//# sourceMappingURL=chunk-IDGRZJEZ.js.map
