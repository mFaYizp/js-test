import { test, expect, it, describe } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it's greater ", () => {
    expect(max(5, 3)).toBe(5);
  });

  it("should return the second argument if it's greater", () => {
    expect(max(8, 10)).toBe(10);
  });

  it("should return the first argument if argument are equal", () => {
    expect(max(8, 8)).toBe(8);
  });
});
