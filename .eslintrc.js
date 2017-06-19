module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "curly": ["error", "all"],
        "quotes": [2, "single", {"avoidEscape": true,"allowTemplateLiterals": true}],
        "new-cap": [2, { "capIsNewExceptions": ["List", "Map", "Set", "Counterpart"] }],
        "no-unused-vars": [1, {"vars": "all", "args": "none"}],
        "indent": [2],
        "react/prop-types": [2, { "ignore": ["children"]}],
        "react/jsx-indent-props": [2,2],
        "react/jsx-filename-extension":[0],
        "jsx-quotes": ["error", "prefer-double"],
        "max-len": ["error", 120],
        "comma-dangle": ["error", "never"],
        "react/jsx-space-before-closing": ["error", "never"],
        "react/prefer-stateless-function": [0],
        "react/forbid-prop-types":[0],
        "no-else-return": [0],
        "object-shorthand": [0],
        "arrow-body-style": ["error", "always"],
        "no-underscore-dangle": [0],
        "prefer-template": [0],
        "no-console":0
    }
};