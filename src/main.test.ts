import { checkHeaders, sum } from "./main";

const goodHeader = "title, author, isbn, publisher, date";
const badHeader = `"Grrreat Expectorations", "Watt Inda Dickens", "978-1853260049", "Random Haus", "2000-01-01"`;
test("checkHeader works as expected", () => {
  expect(checkHeaders(goodHeader)).toBe(true);
  expect(checkHeaders(badHeader)).toBe(false);
});
test.skip("second line with a record exists", () => {
  expect(sum()).toBe(0);
});
test.skip("second line has valid entries for each field", () => {
  expect(sum()).toBe(0);
});

// iterate through all lines and test they are valid
