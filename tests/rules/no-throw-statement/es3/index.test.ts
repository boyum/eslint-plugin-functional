import { name, rule } from "#/rules/no-throw-statements";
import { testRule } from "#/tests/helpers/testers";

import invalid from "./invalid";
import valid from "./valid";

const tests = {
  valid,
  invalid,
};

const tester = testRule(name, rule);

tester.typescript(tests);
tester.esLatest(tests);
tester.es3(tests);
