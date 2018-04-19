import * as config from "./config/config.json";

export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export const readConfig = () => {
  return config;
};
