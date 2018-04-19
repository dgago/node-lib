import { sum, readConfig } from "../index";

describe("sum tests", () => {
  it("should return zero", () => {
    expect(sum()).toBe(0);
  });

  it("should sum values", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("config tests", () => {
  it("should get port number", () => {
    const cfg: any = readConfig();
    expect(cfg.test.PORT).toBe(3000);
  });

  it("should get undefined", () => {
    const cfg: any = readConfig();
    expect(cfg.test.port).toBe(undefined);
  });
});
