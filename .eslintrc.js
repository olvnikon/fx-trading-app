module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb", "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "linebreak-style": "off",
    "no-underscore-dangle": ["error", {"allow": ["_id"]}],
    "flowtype/no-weak-types": [2, {
      "any": false,
      "Object": true,
      "Function": true
    }],
    "flowtype/delimiter-dangle": [2, "always-multiline"],
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": 2,
    "flowtype/newline-after-flow-annotation": [2, "never"],
    "flowtype/no-mutable-array": 2,
    "flowtype/object-type-delimiter": [2, "comma"],
    "flowtype/require-exact-type": 2,
    "flowtype/space-after-type-colon": 2,
    "flowtype/space-before-generic-bracket": [2, "never"],
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      {
        selector: 'MethodDefinition[kind=\'set\']',
        message: 'Property setters are not allowed'
      },
      {
        selector: 'MethodDefinition[kind=\'get\']',
        message: 'Property getters are not allowed'
      }
    ],
  }
};
