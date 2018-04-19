"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("sum tests", () => {
    it("should return zero", () => {
        expect(index_1.sum()).toBe(0);
    });
    it("should sum values", () => {
        expect(index_1.sum(1, 2)).toBe(3);
    });
});
describe("config tests", () => {
    it("should get port number", () => {
        const cfg = index_1.readConfig();
        expect(cfg.test.PORT).toBe(3000);
    });
    it("should get undefined", () => {
        const cfg = index_1.readConfig();
        expect(cfg.test.port).toBe(undefined);
    });
});
//# sourceMappingURL=index.test.js.map