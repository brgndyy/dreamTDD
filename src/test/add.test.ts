const addNum = require("../add.ts");

test("두 수를 더하면 두 수의 합이 나와야함", () => {
  expect(addNum(1, 2)).toBe(3);
});
