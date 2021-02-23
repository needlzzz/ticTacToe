const ISBN = require("./isbn");

describe("ISBN verifier", () => {
  it("valid isbn number", () => {
    const isbn = new ISBN("3-598-21508-8");
    expect(isbn.isValid()).toEqual(true);
  });
  it("invalid isbn check digit", () => {
    const isbn = new ISBN("3-598-21508-9");
    expect(isbn.isValid()).toEqual(false);
  });

  it("empty isbn string", () => {
    const isbn = new ISBN("");
    expect(() => isbn.isValid()).toThrow();
  });

});
