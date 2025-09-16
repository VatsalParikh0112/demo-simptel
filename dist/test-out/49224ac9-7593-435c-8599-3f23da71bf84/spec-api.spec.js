import {
  Api,
  init_api
} from "./chunk-7OWPW7FQ.js";
import {
  HttpClient,
  HttpParams,
  init_http
} from "./chunk-NMFPFLPZ.js";
import "./chunk-YNZYKSQ4.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-NG264RT6.js";
import "./chunk-SK4CH4QL.js";

// src/app/services/api.spec.ts
init_testing();
init_api();
init_http();
init_esm();
describe("Api", () => {
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
  it("should fetch the list of users when getUser is called (GET)", () => {
    let mockUsers = [
      {
        id: 1,
        name: "Vatsal",
        password: "vatsal123",
        email: "vatsal@mail.com"
      },
      {
        id: 2,
        name: "Poojan",
        password: "pooji123",
        email: "pooji@mail.com"
      }
    ];
    HttpClientSpy.get.and.returnValue(of(mockUsers));
    const expectedUrl = "https://jsonplaceholder.typicode.com/users?_limit=3";
    service.getUser().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });
    expect(HttpClientSpy.get).toHaveBeenCalled();
    expect(HttpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });
  it("should fetch users by ID (GET)", () => {
    const mockUsers = [
      {
        id: 1,
        name: "John",
        email: "john@test.com",
        password: "1234567vv"
      }
    ];
    const params = new HttpParams().set("id", "1");
    const expectedUrl = "https://jsonplaceholder.typicode.com/users?_limit=3";
    HttpClientSpy.get.and.returnValue(of(mockUsers));
    service.getUserById(1).subscribe((res) => {
      expect(res).toEqual(mockUsers);
    });
    expect(HttpClientSpy.get).toHaveBeenCalledWith(expectedUrl, { params });
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
