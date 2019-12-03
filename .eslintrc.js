{
    "env": {
        "browser": false,
        "es6": true
    },

    "extends": {
        ["airbnb", "prettier", "plugin:node/recommended"]
    },

    "plugins": "prettier",
    ​
    "rules": {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off",
        "no-plusplus": "off",
        "no-undef": "off",
        "no-use-before-define": "off",
        "prefer-template": "off",
        "no-param-reassign": "off",
        "no-restricted-syntax": "off",
        "max-classes-per-file": "off"
    }
}