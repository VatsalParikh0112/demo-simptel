import {
  Api,
  init_api
} from "./chunk-GCVN4MWT.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-OYM5K6GJ.js";
import "./chunk-7DRXM5VD.js";
import "./chunk-K42GGLJU.js";
import "./chunk-XC7FPHGX.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-6SUJJR5C.js";
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
function cov_1fxtiklrag() {
  var path = "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\api\\api.ts";
  var hash = "8cc2a0459f5e2a2a4224749854e2bee39b62fd7e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\VatsalParikh\\OneDrive - Simptel\\Desktop\\Angular\\demo-simptel\\src\\app\\routes\\api\\api.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 10
        },
        end: {
          line: 60,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 11
        },
        end: {
          line: 10,
          column: 13
        }
      },
      "2": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 23
        }
      },
      "3": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 21
        }
      },
      "4": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 21,
          column: 11
        }
      },
      "5": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 25
        }
      },
      "6": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 32,
          column: 11
        }
      },
      "7": {
        start: {
          line: 26,
          column: 12
        },
        end: {
          line: 31,
          column: 16
        }
      },
      "8": {
        start: {
          line: 26,
          column: 41
        },
        end: {
          line: 31,
          column: 13
        }
      },
      "9": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 48,
          column: 9
        }
      },
      "10": {
        start: {
          line: 36,
          column: 26
        },
        end: {
          line: 38,
          column: 19
        }
      },
      "11": {
        start: {
          line: 37,
          column: 51
        },
        end: {
          line: 37,
          column: 55
        }
      },
      "12": {
        start: {
          line: 39,
          column: 28
        },
        end: {
          line: 42,
          column: 13
        }
      },
      "13": {
        start: {
          line: 43,
          column: 12
        },
        end: {
          line: 47,
          column: 15
        }
      },
      "14": {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 44,
          column: 52
        }
      },
      "15": {
        start: {
          line: 45,
          column: 16
        },
        end: {
          line: 45,
          column: 40
        }
      },
      "16": {
        start: {
          line: 46,
          column: 16
        },
        end: {
          line: 46,
          column: 38
        }
      },
      "17": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 54,
          column: 11
        }
      },
      "18": {
        start: {
          line: 52,
          column: 12
        },
        end: {
          line: 52,
          column: 54
        }
      },
      "19": {
        start: {
          line: 53,
          column: 12
        },
        end: {
          line: 53,
          column: 61
        }
      },
      "20": {
        start: {
          line: 53,
          column: 48
        },
        end: {
          line: 53,
          column: 59
        }
      },
      "21": {
        start: {
          line: 56,
          column: 28
        },
        end: {
          line: 59,
          column: 5
        }
      },
      "22": {
        start: {
          line: 56,
          column: 34
        },
        end: {
          line: 59,
          column: 5
        }
      },
      "23": {
        start: {
          line: 61,
          column: 0
        },
        end: {
          line: 68,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 25
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 15
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        loc: {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 33,
            column: 5
          }
        },
        line: 24
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 37
          },
          end: {
            line: 25,
            column: 38
          }
        },
        loc: {
          start: {
            line: 25,
            column: 47
          },
          end: {
            line: 32,
            column: 9
          }
        },
        line: 25
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 34
          }
        },
        loc: {
          start: {
            line: 26,
            column: 41
          },
          end: {
            line: 31,
            column: 13
          }
        },
        line: 26
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        loc: {
          start: {
            line: 34,
            column: 15
          },
          end: {
            line: 49,
            column: 5
          }
        },
        line: 34
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 37,
            column: 44
          },
          end: {
            line: 37,
            column: 45
          }
        },
        loc: {
          start: {
            line: 37,
            column: 51
          },
          end: {
            line: 37,
            column: 55
          }
        },
        line: 37
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 43,
            column: 48
          },
          end: {
            line: 43,
            column: 49
          }
        },
        loc: {
          start: {
            line: 43,
            column: 54
          },
          end: {
            line: 47,
            column: 13
          }
        },
        line: 43
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 50,
            column: 5
          }
        },
        loc: {
          start: {
            line: 50,
            column: 19
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 50
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 51,
            column: 42
          },
          end: {
            line: 51,
            column: 43
          }
        },
        loc: {
          start: {
            line: 51,
            column: 48
          },
          end: {
            line: 54,
            column: 9
          }
        },
        line: 51
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 53,
            column: 41
          },
          end: {
            line: 53,
            column: 42
          }
        },
        loc: {
          start: {
            line: 53,
            column: 48
          },
          end: {
            line: 53,
            column: 59
          }
        },
        line: 53
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 56,
            column: 28
          },
          end: {
            line: 56,
            column: 29
          }
        },
        loc: {
          start: {
            line: 56,
            column: 34
          },
          end: {
            line: 59,
            column: 5
          }
        },
        line: 56
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 48,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 48,
            column: 9
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 35
      },
      "1": {
        loc: {
          start: {
            line: 36,
            column: 26
          },
          end: {
            line: 38,
            column: 19
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 37,
            column: 18
          },
          end: {
            line: 37,
            column: 61
          }
        }, {
          start: {
            line: 38,
            column: 18
          },
          end: {
            line: 38,
            column: 19
          }
        }],
        line: 36
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "api.js",
      sourceRoot: "",
      sources: ["api.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAU,MAAM,eAAe,CAAC;AAClD,OAAO,EAAE,WAAW,EAAa,UAAU,EAAC,mBAAmB,EAAE,MAAM,gBAAgB,CAAC;AACxF,OAAO,EAAE,GAAG,EAAE,MAAM,oBAAoB,CAAC;AAUlC,IAAM,GAAG,GAAT,MAAM,GAAG;IAIM;IAAkB;IAHtC,IAAI,GAAe,EAAE,CAAC;IACtB,QAAQ,CAAa;IAErB,YAAoB,GAAQ,EAAU,EAAe;QAAjC,QAAG,GAAH,GAAG,CAAK;QAAU,OAAE,GAAF,EAAE,CAAa;IAAI,CAAC;IAE1D,QAAQ;QACN,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC,EAAE,CAAC,KAAK,CAAC;YAC5B,IAAI,EAAE,CAAC,EAAE,EAAE,UAAU,CAAC,QAAQ,CAAC;YAC/B,KAAK,EAAE,CAAC,EAAE,EAAE,CAAC,UAAU,CAAC,QAAQ,EAAE,UAAU,CAAC,KAAK,CAAC,CAAC;YACpD,QAAQ,EAAE,CAAC,EAAE,EAAE,UAAU,CAAC,QAAQ,CAAC;SACpC,CAAC,CAAC;QACH,IAAI,CAAC,SAAS,EAAE,CAAC;IACnB,CAAC;IAED,SAAS;QACP,IAAI,CAAC,GAAG,CAAC,OAAO,EAAE,CAAC,SAAS,CAAC,CAAC,IAAS,EAAE,EAAE;YACzC,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC,GAAG,CAAC,CAAC,CAAqD,EAAE,EAAE,CAAC,CAAC;gBAC/E,EAAE,EAAE,CAAC,CAAC,EAAE;gBACR,IAAI,EAAE,CAAC,CAAC,IAAI;gBACZ,KAAK,EAAE,CAAC,CAAC,KAAK;gBACd,QAAQ,EAAE,CAAC,CAAC,QAAQ;aACrB,CAAC,CAAC,CAAC;QACN,CAAC,CAAC,CAAC;IACL,CAAC;IAED,QAAQ;QACN,IAAI,IAAI,CAAC,QAAQ,CAAC,KAAK,EAAE,CAAC;YACxB,MAAM,KAAK,GACT,IAAI,CAAC,IAAI,CAAC,MAAM,GAAG,CAAC;gBAClB,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC;gBAC7C,CAAC,CAAC,CAAC,CAAC;YAER,MAAM,OAAO,GAAQ;gBACnB,EAAE,EAAE,KAAK;gBACT,GAAI,IAAI,CAAC,QAAQ,CAAC,KAA8B,CAAE,eAAe;aAClE,CAAC;YAEF,IAAI,CAAC,GAAG,CAAC,OAAO,CAAC,OAAO,CAAC,CAAC,SAAS,CAAC,GAAG,EAAE;gBACvC,OAAO,CAAC,GAAG,CAAC,aAAa,EAAE,OAAO,CAAC,CAAC;gBACpC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,CAAE,mBAAmB;gBAC7C,IAAI,CAAC,QAAQ,CAAC,KAAK,EAAE,CAAC;YACxB,CAAC,CAAC,CAAC;QACL,CAAC;IACH,CAAC;IAED,UAAU,CAAC,EAAU;QACnB,IAAI,CAAC,GAAG,CAAC,UAAU,CAAC,EAAE,CAAC,CAAC,SAAS,CAAC,GAAG,EAAE;YACrC,OAAO,CAAC,GAAG,CAAC,gBAAgB,EAAE,UAAU,CAAC,CAAC;YAC1C,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC,CAAkB,EAAE,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,EAAE,CAAC,CAAC;QACpE,CAAC,CAAC,CAAC;IACL,CAAC;;;;;;AAnDU,GAAG;IANf,SAAS,CAAC;QACT,QAAQ,EAAE,SAAS;QACnB,OAAO,EAAE,CAAC,mBAAmB,CAAC;QAC9B,8BAAyB;;KAE1B,CAAC;GACW,GAAG,CAsDf",
      sourcesContent: ["import { Component, OnInit } from '@angular/core';\r\nimport { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';\r\nimport { Api } from '../../services/api';\r\nimport { SlimUser } from '../../interfaces/users';\r\n\r\n\r\n@Component({\r\n  selector: 'app-api',\r\n  imports: [ReactiveFormsModule],\r\n  templateUrl: './api.html',\r\n  styleUrls: ['./api.css']\r\n})\r\nexport class API implements OnInit {\r\n  user: SlimUser[] = [];\r\n  userForm!: FormGroup;\r\n\r\n  constructor(private api: Api, private fb: FormBuilder) { }\r\n\r\n  ngOnInit(): void {\r\n    this.userForm = this.fb.group({\r\n      name: ['', Validators.required],\r\n      email: ['', [Validators.required, Validators.email]],\r\n      password: ['', Validators.required]\r\n    });\r\n    this.loadUsers();\r\n  }\r\n\r\n  loadUsers() {\r\n    this.api.getUser().subscribe((data: any) => {\r\n      this.user = data.map((u: { id: any; name: any; email: any; password: any; }) => ({\r\n        id: u.id,\r\n        name: u.name,\r\n        email: u.email,\r\n        password: u.password\r\n      }));\r\n    });\r\n  }\r\n\r\n  onSubmit() {\r\n    if (this.userForm.valid) {\r\n      const newId =\r\n        this.user.length > 0\r\n          ? Math.max(...this.user.map((u) => u.id)) + 1\r\n          : 1;\r\n\r\n      const newUser: any = {\r\n        id: newId,\r\n        ...(this.userForm.value as Omit<SlimUser, 'id'>)  // \u{1F448} CAST here\r\n      };\r\n\r\n      this.api.addUser(newUser).subscribe(() => {\r\n        console.log('User added:', newUser);\r\n        this.user.push(newUser);  // \u{1F44C} No more error\r\n        this.userForm.reset();\r\n      });\r\n    }\r\n  }\r\n\r\n  removeUser(id: number) {\r\n    this.api.deleteUser(id).subscribe(() => {\r\n      console.log(`User with id=${id} deleted`);\r\n      this.user = this.user.filter((u: { id: number; }) => u.id !== id);\r\n    });\r\n  }\r\n\r\n\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8cc2a0459f5e2a2a4224749854e2bee39b62fd7e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1fxtiklrag = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
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
    cov_1fxtiklrag();
    cov_1fxtiklrag().s[0]++;
    API = class API2 {
      api;
      fb;
      user = (cov_1fxtiklrag().s[1]++, []);
      userForm;
      constructor(api, fb) {
        cov_1fxtiklrag().f[0]++;
        cov_1fxtiklrag().s[2]++;
        this.api = api;
        cov_1fxtiklrag().s[3]++;
        this.fb = fb;
      }
      ngOnInit() {
        cov_1fxtiklrag().f[1]++;
        cov_1fxtiklrag().s[4]++;
        this.userForm = this.fb.group({
          name: ["", Validators.required],
          email: ["", [Validators.required, Validators.email]],
          password: ["", Validators.required]
        });
        cov_1fxtiklrag().s[5]++;
        this.loadUsers();
      }
      loadUsers() {
        cov_1fxtiklrag().f[2]++;
        cov_1fxtiklrag().s[6]++;
        this.api.getUser().subscribe((data) => {
          cov_1fxtiklrag().f[3]++;
          cov_1fxtiklrag().s[7]++;
          this.user = data.map((u) => {
            cov_1fxtiklrag().f[4]++;
            cov_1fxtiklrag().s[8]++;
            return {
              id: u.id,
              name: u.name,
              email: u.email,
              password: u.password
            };
          });
        });
      }
      onSubmit() {
        cov_1fxtiklrag().f[5]++;
        cov_1fxtiklrag().s[9]++;
        if (this.userForm.valid) {
          cov_1fxtiklrag().b[0][0]++;
          const newId = (cov_1fxtiklrag().s[10]++, this.user.length > 0 ? (cov_1fxtiklrag().b[1][0]++, Math.max(...this.user.map((u) => {
            cov_1fxtiklrag().f[6]++;
            cov_1fxtiklrag().s[11]++;
            return u.id;
          })) + 1) : (cov_1fxtiklrag().b[1][1]++, 1));
          const newUser = (cov_1fxtiklrag().s[12]++, __spreadValues({
            id: newId
          }, this.userForm.value));
          cov_1fxtiklrag().s[13]++;
          this.api.addUser(newUser).subscribe(() => {
            cov_1fxtiklrag().f[7]++;
            cov_1fxtiklrag().s[14]++;
            console.log("User added:", newUser);
            cov_1fxtiklrag().s[15]++;
            this.user.push(newUser);
            cov_1fxtiklrag().s[16]++;
            this.userForm.reset();
          });
        } else {
          cov_1fxtiklrag().b[0][1]++;
        }
      }
      removeUser(id) {
        cov_1fxtiklrag().f[8]++;
        cov_1fxtiklrag().s[17]++;
        this.api.deleteUser(id).subscribe(() => {
          cov_1fxtiklrag().f[9]++;
          cov_1fxtiklrag().s[18]++;
          console.log(`User with id=${id} deleted`);
          cov_1fxtiklrag().s[19]++;
          this.user = this.user.filter((u) => {
            cov_1fxtiklrag().f[10]++;
            cov_1fxtiklrag().s[20]++;
            return u.id !== id;
          });
        });
      }
      static ctorParameters = (cov_1fxtiklrag().s[21]++, () => {
        cov_1fxtiklrag().f[11]++;
        cov_1fxtiklrag().s[22]++;
        return [{
          type: Api
        }, {
          type: FormBuilder
        }];
      });
    };
    cov_1fxtiklrag().s[23]++;
    API = __decorate([Component({
      selector: "app-api",
      imports: [ReactiveFormsModule],
      template: api_default,
      styles: [api_default2]
    })], API);
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
