import {
  Api,
  init_api
} from "./chunk-7OWPW7FQ.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-QKGBKSSQ.js";
import "./chunk-JRNYA72K.js";
import "./chunk-NMFPFLPZ.js";
import "./chunk-YNZYKSQ4.js";
import {
  Component,
  TestBed,
  __decorate,
  fakeAsync,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  tick
} from "./chunk-NG264RT6.js";
import {
  __async,
  __commonJS,
  __esm,
  __name,
  __publicField,
  __spreadValues
} from "./chunk-SK4CH4QL.js";

// angular:jit:template:src\app\routes\api\api.html
var api_default;
var init_api2 = __esm({
  "angular:jit:template:src\\app\\routes\\api\\api.html"() {
    api_default = '<h2>User Management</h2>\r\n\r\n<!-- Add User Form -->\r\n<form class=" flex flex-col gap-5 p-10 w-1/3 " [formGroup]="userForm" (ngSubmit)="onSubmit()">\r\n    <input class=" border p-2  " formControlName="name" placeholder="Name" />\r\n    <input class=" border p-2  " formControlName="email" placeholder="Email" type="email" />\r\n    <input class=" border p-2  " formControlName="password" placeholder="Password" type="password" />\r\n    <button class=" border " type="submit" [disabled]="userForm.invalid">Add User</button>\r\n</form>\r\n\r\n\r\n<div class=" flex justify-center items-center ">\r\n    <hr class=" w-10/12 " />\r\n</div>\r\n\r\n<button class=" border " (click)="loadUsers()">Fetch Users</button>\r\n\r\n<ul>\r\n    @for (u of user; track u.id) {\r\n    <li>\r\n        <strong>ID:</strong> {{ u.id }} |\r\n        <strong>Name:</strong> {{ u.name }} |\r\n        <strong>Email:</strong> {{ u.email }} |\r\n        <strong>Password:</strong> {{ u.password }}\r\n        <button (click)="removeUser(u.id)">Delete</button>\r\n    </li>\r\n    }\r\n</ul>';
  }
});

// angular:jit:style:src\app\routes\api\api.css
var api_default2;
var init_api3 = __esm({
  "angular:jit:style:src\\app\\routes\\api\\api.css"() {
    api_default2 = "/* src/app/routes/api/api.css */\n/*# sourceMappingURL=api.css.map */\n";
  }
});

// src/app/routes/api/api.ts
var _a, API;
var init_api4 = __esm({
  "src/app/routes/api/api.ts"() {
    "use strict";
    init_tslib_es6();
    init_api2();
    init_api3();
    init_core();
    init_forms();
    init_api();
    API = (_a = class {
      fb;
      api;
      user = [];
      userForm;
      constructor(fb, api) {
        this.fb = fb;
        this.api = api;
      }
      ngOnInit() {
        this.userForm = this.fb.group({
          name: ["", Validators.required],
          email: ["", [Validators.required, Validators.email]],
          password: ["", Validators.required]
        });
        this.loadUsers();
      }
      loadUsers() {
        this.api.getUser().subscribe((data) => {
          this.user = data.map((u) => ({
            id: u.id,
            name: u.name,
            email: u.email,
            password: u.password
          }));
        });
      }
      onSubmit() {
        if (this.userForm.valid) {
          const newId = this.user.length > 0 ? Math.max(...this.user.map((u) => u.id)) + 1 : 1;
          const newUser = __spreadValues({
            id: newId
          }, this.userForm.value);
          this.api.addUser(newUser).subscribe(() => {
            console.log("User added:", newUser);
            this.user.push(newUser);
            this.userForm.reset();
          });
        }
      }
      removeUser(id) {
        this.api.deleteUser(id).subscribe(() => {
          console.log(`User with id=${id} deleted`);
          this.user = this.user.filter((u) => u.id !== id);
        });
      }
    }, __name(_a, "API"), __publicField(_a, "ctorParameters", /* @__PURE__ */ __name(() => [
      { type: FormBuilder },
      { type: Api }
    ], "ctorParameters")), _a);
    API = __decorate([
      Component({
        selector: "app-api",
        imports: [ReactiveFormsModule],
        template: api_default,
        styles: [api_default2]
      })
    ], API);
  }
});

// src/app/routes/api/api.spec.ts
var require_api_spec = __commonJS({
  "src/app/routes/api/api.spec.ts"(exports) {
    init_testing();
    init_forms();
    init_esm();
    init_api4();
    init_api();
    describe("API", () => {
      let component;
      let fixture;
      let mockAPI;
      const mockUsers = [
        { id: 1, name: "jhon", email: "jhon@test.com", password: "jhon123" },
        { id: 2, name: "jane", email: "jane@test.com", password: "jane234" }
      ];
      beforeEach(() => __async(null, null, function* () {
        mockAPI = jasmine.createSpyObj("Api", ["getUser", "addUser", "deleteUser"]);
        mockAPI.getUser.and.returnValue(of([]));
        mockAPI.addUser.and.returnValue(of(void 0));
        mockAPI.deleteUser.and.returnValue(of(void 0));
        yield TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, API],
          providers: [{ provide: Api, useValue: mockAPI }, FormBuilder]
        }).compileComponents();
        fixture = TestBed.createComponent(API);
        component = fixture.componentInstance;
      }));
      it("should create component", () => {
        expect(component).toBeTruthy();
      });
      it("Should initialize form on ngOnInit", () => {
        mockAPI.getUser.and.returnValue(of(mockUsers));
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.userForm).toBeDefined();
        expect(component.userForm.get("name")).toBeTruthy();
        expect(component.userForm.get("email")).toBeTruthy();
        expect(component.userForm.get("password")).toBeTruthy();
      });
      it("should load users from Api", () => {
        mockAPI.getUser.and.returnValue(of(mockUsers));
        component.loadUsers();
        expect(component.user.length).toBe(2);
        expect(component.user[0].name).toBe("jhon");
      });
      it("form should be invalid when empty", () => {
        component.ngOnInit();
        expect(component.userForm.valid).toBeFalsy();
      });
      it("form should be valid with proper input", () => {
        component.ngOnInit();
        component.userForm.setValue({
          name: "Alice",
          email: "alice@test.com",
          password: "pass123"
        });
        expect(component.userForm.valid).toBeTrue();
      });
      it("should add user when form is valid", () => {
        mockAPI.getUser.and.returnValue(of(mockUsers));
        component.ngOnInit();
        component.userForm.setValue({
          name: "New User",
          email: "new@email.com",
          password: "newpass"
        });
        const expectedUser = jasmine.objectContaining({
          name: "New User",
          email: "new@email.com",
          password: "newpass"
        });
        mockAPI.addUser.and.returnValue(of({
          id: 3,
          name: "New User",
          email: "new@email.com",
          password: "newpass"
        }));
        component.onSubmit();
        expect(mockAPI.addUser).toHaveBeenCalledWith(expectedUser);
        expect(component.user.length).toBe(3);
        expect(component.user.find((u) => u.name === "New User")).toBeTruthy();
      });
      it("should assign id = 1 when user list is empty", () => {
        mockAPI.getUser.and.returnValue(of([]));
        mockAPI.addUser.and.returnValue(of({
          id: 1,
          name: "First User",
          email: "first@email.com",
          password: "pass123"
        }));
        component.ngOnInit();
        component.userForm.setValue({
          name: "First User",
          email: "first@email.com",
          password: "pass123"
        });
        component.onSubmit();
        expect(component.user.length).toBe(1);
        expect(component.user[0].id).toBe(1);
      });
      it("should delete user", fakeAsync(() => {
        mockAPI.getUser.and.returnValue(of(mockUsers));
        mockAPI.deleteUser.and.returnValue(of(void 0));
        component.ngOnInit();
        tick();
        component.removeUser(1);
        tick();
        expect(mockAPI.deleteUser).toHaveBeenCalledWith(1);
        expect(component.user.find((u) => u.id === 1)).toBeUndefined();
      }));
    });
  }
});
export default require_api_spec();
//# sourceMappingURL=spec-api-2.spec.js.map
