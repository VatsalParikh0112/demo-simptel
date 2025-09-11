import {
  Api,
  init_api
} from "./chunk-GCVN4MWT.js";
import {
  HttpClient,
  HttpParams,
  init_http
} from "./chunk-K42GGLJU.js";
import "./chunk-XC7FPHGX.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-6SUJJR5C.js";
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
  it("should add user (POST)", () => {
    const newUser = [
      {
        id: 1,
        name: "John",
        email: "john@test.com",
        password: "1234567vv"
      }
    ];
    HttpClientSpy.post.and.returnValue(of(newUser));
    service.addUser(newUser).subscribe((res) => {
      expect(res).toEqual(newUser);
    });
    expect(HttpClientSpy.post).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users?_limit=3", newUser);
  });
  it("should delete user (GET with params)", () => {
    const mockUser = [
      {
        id: 1,
        name: "John",
        email: "john@test.com",
        password: "1234567vv"
      }
    ];
    const params = new HttpParams().set("id", "3");
    HttpClientSpy.get.and.returnValue(of(mockUser));
    service.deleteUser(3).subscribe((res) => {
      expect(res).toEqual(mockUser);
    });
    expect(HttpClientSpy.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users?_limit=3", { params });
  });
});
//# sourceMappingURL=spec-api.spec.js.map
