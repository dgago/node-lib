"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test("basic", () => {
    expect(index_1.sum()).toBe(0);
});
test("basic again", () => {
    expect(index_1.sum(1, 2)).toBe(3);
});
test("config", () => {
    const cfg = index_1.readConfig();
    expect(cfg.test.PORT).toBe(3000);
});
//# sourceMappingURL=index.test.js.map