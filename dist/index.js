"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("./config/config.json");
exports.sum = (...a) => a.reduce((acc, val) => acc + val, 0);
exports.readConfig = () => {
    return config;
};
//# sourceMappingURL=index.js.map