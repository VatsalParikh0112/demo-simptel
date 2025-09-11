import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-XNFCQGWJ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/services/data.ts
var Dataservice;
var init_data = __esm({
  "src/app/services/data.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    Dataservice = class Dataservice2 {
      products = [];
      getProducts() {
        return this.products;
      }
      addProducts(product) {
        this.products.push(product);
      }
      clearProducts() {
        this.products = [];
        return this.products;
      }
      removeProduct(productToRemove) {
        const index = this.products.findIndex((item) => item === productToRemove);
        if (index > -1) {
          this.products.splice(index, 1);
        }
      }
    };
    Dataservice = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Dataservice);
  }
});

export {
  Dataservice,
  init_data
};
//# sourceMappingURL=chunk-N4XLQZSL.js.map
