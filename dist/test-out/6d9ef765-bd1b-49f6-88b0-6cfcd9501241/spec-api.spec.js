import {
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-QAU4AL26.js";
import "./chunk-TTULUY32.js";

// src/app/services/api.spec.ts
init_testing();

// src/app/services/api.ts
init_tslib_es6();
init_core();
var Api = class Api2 {
  url = "https://jsonplaceholder.typicode.com/users?_limit=3";
  getUser() {
  }
};
Api = __decorate([
  Injectable({
    providedIn: "root"
  })
], Api);

// src/app/services/api.spec.ts
describe("Api", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-api.spec.js.map
