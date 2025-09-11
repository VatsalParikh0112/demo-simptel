import {
  Api,
  init_api
} from "./chunk-DH6YFF4K.js";
import {
  HttpClient,
  init_http
} from "./chunk-PA2DSR3M.js";
import "./chunk-5POXWGQG.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-XNFCQGWJ.js";
import "./chunk-TTULUY32.js";

// src/app/services/api.spec.ts
init_testing();
init_api();
init_http();
init_esm();
fdescribe("Api", () => {
  let service;
  let HttpClientSpy;
  beforeEach(() => {
    const spy = jasmine.createSpyObj("HttpClient", ["get", "post"]);
    TestBed.configureTestingModule({
      providers: [
        Api,
        { provide: HttpClient, useValue: spy }
      ]
    });
    service = TestBed.inject(Api);
    HttpClientSpy = TestBed.inject(HttpClient);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should fetch users (GET)", () => {
    const mockUsers = [
      {
        id: 1,
        name: "John",
        email: "john@test.com",
        password: "1234567vv"
      }
    ];
    HttpClientSpy.get.and.returnValue(of(mockUsers));
    service.getUser().subscribe((res) => {
      expect(res).toEqual(mockUsers);
    });
    expect(HttpClientSpy.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users?_limit=3");
  });
});
//# sourceMappingURL=spec-api.spec.js.map
