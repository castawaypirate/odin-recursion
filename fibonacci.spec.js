const fibonacci = require("./fibonacci");

describe("fibonacci", () => {
  test("should return undefined on string input", () => {
    expect(fibonacci("4")).toBe(undefined);
  });
});
