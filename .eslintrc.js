module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "import"
    ],
    "extends": [
        "airbnb"
    ],
    "env": {
        "browser": true,
        "node": true,
        "meteor": true
    },
    "rules": {
        "new-cap": [2, {"capIsNewExceptions": ["Match", "Match.ObjectIncluding"]}],
        "no-param-reassign": [2, {"props": false}],
        "lines-around-comment": [2, { "beforeLineComment": true, "allowObjectStart": true, "allowBlockStart": true }],
        "no-underscore-dangle": [0],
        "no-extra-boolean-cast": [0],
        "no-return-assign": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-namespace": [2],
        "import/order": [2, {"groups": [["builtin", "external"], ["internal", "parent", "sibling", "index"]]
        }],
        "import/newline-after-import": [2],
        "import/prefer-default-export": [2],
        "import/extensions": [0],
        "import/no-absolute-path": [0],
        "import/no-extraneous-dependencies": [0],
        "import/no-named-as-default" : [0],
        "import/no-unresolved": [0],
        "jsx-a11y/label-has-for": [0]
    }
};