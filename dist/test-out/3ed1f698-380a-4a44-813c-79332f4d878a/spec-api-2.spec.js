import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-CJZUBOJP.js";
import {
  Api,
  init_api
} from "./chunk-BBGUWURY.js";
import "./chunk-KHG37MZI.js";
import "./chunk-YQNEF26H.js";
import "./chunk-5POXWGQG.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-4QWUHEDH.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

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
var API;
var init_api4 = __esm({
  "src/app/routes/api/api.ts"() {
    "use strict";
    init_tslib_es6();
    init_api2();
    init_api3();
    init_core();
    init_forms();
    init_api();
    API = class API2 {
      api;
      fb;
      user = [];
      userForm;
      constructor(api, fb) {
        this.api = api;
        this.fb = fb;
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
      static ctorParameters = () => [
        { type: Api },
        { type: FormBuilder }
      ];
    };
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
    init_api4();
    describe("API", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [API]
        }).compileComponents();
        fixture = TestBed.createComponent(API);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_api_spec();
//# sourceMappingURL=spec-api-2.spec.js.map
