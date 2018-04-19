import { sum, readConfig } from "../index";

test("basic", () => {
  expect(sum()).toBe(0);
});

test("basic again", () => {
  expect(sum(1, 2)).toBe(3);
});

test("config", () => {
  const cfg: any = readConfig();
  expect(cfg.test.PORT).toBe(3000);
});