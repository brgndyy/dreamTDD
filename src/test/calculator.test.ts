const MyCalculator = require("../calculator");

describe("Calculator", () => {
  it("inits with 0", () => {
    const cal = new MyCalculator();
    expect(cal.value).toBe(0);
  });
});
