import { test, assertEquals } from "./test_deps.ts";
import { multiplyNumbers } from "./mod.ts";

test(function testMultiplyNumbers() {
  assertEquals(multiplyNumbers(1,2), 2);
});
