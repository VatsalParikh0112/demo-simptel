import {
  Api,
  init_api
} from "./chunk-DV76KRS2.js";
import "./chunk-6JXGQUWB.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-5EHHTNS5.js";
import "./chunk-TTULUY32.js";

// src/app/services/api.spec.ts
init_testing();
init_api();
describe("Api", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("", () => {
  });
});
//# sourceMappingURL=spec-api.spec.js.map
