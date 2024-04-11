import { test, expect, it, describe } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

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

describe("fizzBuzz", () => {
  it("should return fizzBuzz if it's divisible of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return fizz if it's divisible of 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("should return Buzz if it's divisible of 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return arg as a string if it's divisible of 5 or 3", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 120 if given 5", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return undefined if given negative", () => {
    expect(factorial(-5)).toBeUndefined();
  });
});
