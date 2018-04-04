module.exports = {
    "extends": "airbnb/base",
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        "no-underscore-dangle" : ["error", { "allowAfterThis": true }],
        "no-unused-vars" : "off", 
        "import/no-named-as-default" : "off", 
        "import/no-named-as-default-member" : "off",
        "react/prefer-stateless-function" : "off",
        "react/jsx-filename-extension" : "off",
        "class-methods-use-this" : "off",
        "no-param-reassign" : ["error", { "props": false }]
    }
};