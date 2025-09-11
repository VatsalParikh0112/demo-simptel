import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/routes/api/api.spec.ts
var require_api_spec = __commonJS({
  "src/app/routes/api/api.spec.ts"(exports) {
    fdescribe("API", () => {
      let Component;
      let fixture;
      let mockAPI;
      const mockUsers = [];
      beforeEach(() => __async(null, null, function* () {
        mockAPI = jasmine.createSpyObj("Api", ["getUser", "addUser", "deleteUser"]);
      }));
    });
  }
});
export default require_api_spec();
//# sourceMappingURL=spec-api-2.spec.js.map
