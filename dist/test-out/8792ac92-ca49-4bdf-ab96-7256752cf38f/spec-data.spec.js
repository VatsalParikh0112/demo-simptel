import {
  Dataservice,
  init_data
} from "./chunk-I6O4ET4B.js";
import {
  TestBed,
  init_testing
} from "./chunk-6SUJJR5C.js";
import "./chunk-TTULUY32.js";

// src/app/services/data.spec.ts
init_testing();
init_data();
fdescribe("Api", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dataservice]
    });
    service = TestBed.inject(Dataservice);
  });
  it("data service should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should return empty products when call initially", () => {
    expect(service.getProducts()).toEqual([]);
  });
  it("should add products", () => {
    service.addProducts("laptop");
    expect(service.getProducts()).toEqual(["laptop"]);
  });
  it("should clear all products", () => {
    service.addProducts("laptop");
    service.addProducts("phone");
    expect(service.getProducts().length).toBe(2);
    const cleared = service.clearProducts();
    expect(cleared).toEqual([]);
    expect(service.getProducts()).toEqual([]);
  });
  it("should remove selected products", () => {
    service.addProducts("laptop");
    service.addProducts("tablet");
    service.addProducts("phone");
    service.removeProduct("phone");
    expect(service.getProducts()).toEqual(["laptop", "tablet"]);
  });
});
//# sourceMappingURL=spec-data.spec.js.map
