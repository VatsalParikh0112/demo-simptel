import {
  Button2,
  init_button_2
} from "./chunk-N6LIEORZ.js";
import {
  Router,
  init_router
} from "./chunk-DS4CVMUK.js";
import {
  Button,
  init_button
} from "./chunk-IGPLU4P2.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-FU54S24V.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\routes\home\section-3\section-3.html
var section_3_default;
var init_section_3 = __esm({
  "angular:jit:template:src\\app\\routes\\home\\section-3\\section-3.html"() {
    section_3_default = '<br>\r\n<p>Section 3 works!</p>\r\n\r\n<div>\r\n    <app-button (sendMessage)="console($event)" label="shared button homeeeeeee"></app-button>\r\n</div>\r\n\r\n<div>\r\n    <h2>{{ userName }}</h2>\r\n    <p>{{ welcomeMessage }}</p>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n\r\n<div>\r\n    <app-button-2 label="Go To Contact" (goToContact)="redirect($event)" ></app-button-2>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\routes\home\section-3\section-3.css
var section_3_default2;
var init_section_32 = __esm({
  "angular:jit:style:src\\app\\routes\\home\\section-3\\section-3.css"() {
    section_3_default2 = "/* src/app/routes/home/section-3/section-3.css */\n/*# sourceMappingURL=section-3.css.map */\n";
  }
});

// src/app/routes/home/section-3/section-3.ts
var Section3;
var init_section_33 = __esm({
  "src/app/routes/home/section-3/section-3.ts"() {
    "use strict";
    init_tslib_es6();
    init_section_3();
    init_section_32();
    init_core();
    init_router();
    init_button();
    init_button_2();
    Section3 = class Section32 {
      router;
      _userName = "";
      get userName() {
        return this._userName.toUpperCase();
      }
      set userName(name) {
        if (name.length > 2) {
          this._userName = name;
          console.log(`User name has been set to: ${name}`);
        } else {
          this._userName = "Guest";
          console.log("Invalid user name. Defaulting to Guest.");
        }
      }
      get welcomeMessage() {
        return `Welcome, ${this.userName}!`;
      }
      console(event) {
        console.log(event);
      }
      constructor(router) {
        this.router = router;
      }
      redirect(path) {
        this.router.navigate([path]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
      static propDecorators = {
        userName: [{ type: Input }]
      };
    };
    Section3 = __decorate([
      Component({
        selector: "app-section-3",
        imports: [Button, Button2],
        template: section_3_default,
        styles: [section_3_default2]
      })
    ], Section3);
  }
});

export {
  Section3,
  init_section_33 as init_section_3
};
//# sourceMappingURL=chunk-VJGQBV4X.js.map
