import {
  Dataservice,
  init_data
} from "./chunk-QUXGADWL.js";
import {
  TestBed,
  init_testing
} from "./chunk-G5PIT6SS.js";
import "./chunk-SK4CH4QL.js";

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
  it("data service should be called", () => {
    expect(service).toBeTruthy;
  });
  it("should return empty array initially", () => {
    expect(service.getProducts()).toEqual([]);
  });
  it("should return products after setting them value", () => {
    service.products = ["Apple", "Banana", "Mango"];
    expect(service.getProducts()).toEqual(["Apple", "Banana", "Mango"]);
  });
  it("should add products when addProducts func is called", () => {
    service.products = ["Apple", "Banana", "Mango"];
    service.addProducts("Orange");
    expect(service.getProducts()).toEqual(["Apple", "Banana", "Mango", "Orange"]);
  });
  it("should remove all products when removeProduct func is called", () => {
    service.products = ["Apple", "Banana", "Mango", "Orange"];
    service.clearProducts();
    expect(service.getProducts()).toEqual([]);
  });
  it("should remove products when removeProduct func is called", () => {
    service.products = ["Apple", "Banana", "Mango", "Orange"];
    service.removeProduct("Apple");
    expect(service.getProducts()).toEqual(["Banana", "Mango", "Orange"]);
  });
});
//# sourceMappingURL=spec-data.spec.js.map
