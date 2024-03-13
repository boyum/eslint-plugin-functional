import { type FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import externalVanillaRecommended from "#eslint-plugin-functional/configs/external-vanilla-recommended";

const tsConfig = {
  "@typescript-eslint/prefer-readonly": "error",
  "@typescript-eslint/switch-exhaustiveness-check": "error",
} satisfies FlatConfig.Config["rules"];

export default {
  ...externalVanillaRecommended,
  ...tsConfig,
} satisfies FlatConfig.Config["rules"];
