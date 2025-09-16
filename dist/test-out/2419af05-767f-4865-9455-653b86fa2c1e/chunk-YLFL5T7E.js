import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NG264RT6.js";
import {
  __esm,
  __name
} from "./chunk-SK4CH4QL.js";

// src/app/services/data.ts
var _a, Dataservice;
var init_data = __esm({
  "src/app/services/data.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    Dataservice = (_a = class {
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
    }, __name(_a, "Dataservice"), _a);
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
//# sourceMappingURL=chunk-YLFL5T7E.js.map
