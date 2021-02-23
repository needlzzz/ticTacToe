const hammingDistance = require("hamming");

describe("hammingDistance", () => {
  test("every character different should be equal to string length", () => {
    expect(hammingDistance("pepsi", "fanta")).toBe(5);
  });

  test("when both strings are empty should return 0", () => {
    expect(hammingDistance("", "")).toBe(0);
  });
});
