import { name, rule } from "#eslint-plugin-functional/rules/no-loop-statements";
import { testRule } from "#eslint-plugin-functional/tests/helpers/testers";

import invalid from "./invalid";
import valid from "./valid";

const tests = {
  valid,
  invalid,
};

const tester = testRule(name, rule);

tester.typescript(tests);
tester.esLatest(tests);
tester.es2015(tests);
