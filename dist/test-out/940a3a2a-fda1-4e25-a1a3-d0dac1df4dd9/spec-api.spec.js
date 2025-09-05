import {
  Api,
  init_api
} from "./chunk-24EGRNYR.js";
import "./chunk-7FBSTBSQ.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_testing
} from "./chunk-FU54S24V.js";
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
