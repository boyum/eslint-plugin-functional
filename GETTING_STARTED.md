# Getting Started

## Installation

### JavaScript

```sh
# Install with npm
npm install -D eslint eslint-plugin-functional

# Install with yarn
yarn add -D eslint eslint-plugin-functional

# Install with pnpm
pnpm add -D eslint eslint-plugin-functional
```

### TypeScript

```sh
# Install with npm
npm install -D eslint @typescript-eslint/parser eslint-plugin-functional

# Install with yarn
yarn add -D eslint @typescript-eslint/parser eslint-plugin-functional

# Install with pnpm
pnpm add -D eslint @typescript-eslint/parser eslint-plugin-functional
```

## Usage

### Flat Config

If using the new [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new),
import from `eslint-plugin-functional/flat`.

```ts
import functional from "eslint-plugin-functional/flat";
```

### Classic Config

Add `functional` to the plugins section of your `.eslintrc` configuration file. Then configure the rules you want to use under the rules section.

```jsonc
{
  "plugins": ["functional"],
  "rules": {
    "functional/rule-name": "error"
  }
}
```

There are several rulesets provided by this plugin.
[See the README](./README.md#rulesets) for what they are and what rules are included in each.
Enable rulesets via the "extends" property of your `.eslintrc` configuration file.

Be sure to include the `"plugin:functional/disable-type-checked"` ruleset to disable rules that require TypeScript.

```jsonc
{
  // ...
  "extends": [
    "plugin:functional/external-vanilla-recommended",
    "plugin:functional/recommended",
    "plugin:functional/stylistic",
    "plugin:functional/disable-type-checked"
  ]
}
```

### With TypeScript

Add `@typescript-eslint/parser` to the "parser" filed in your `.eslintrc` configuration file.
To use type information, you will need to specify a path to your `tsconfig.json` file in the "project" property of "parserOptions".
Alternatively, you can just set "project" to `true` to automatically use the nearest `tsconfig.json` files.

```jsonc
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": true
  }
}
```

See [@typescript-eslint/parser's README.md](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#readme) for more information on the available parser options.

### Example Config

```jsonc
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": true
  },
  "env": {
    "es6": true
  },
  "plugins": [
    "@typescript-eslint",
    "functional"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:functional/external-typescript-recommended",
    "plugin:functional/recommended",
    "plugin:functional/stylistic"
  ]
}
```
