module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
		"ignorePatterns": [".eslintrc.js"],
    "rules": {
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
      "no-tabs": 0,
			"@typescript-eslint/no-misused-promises": [2, {
				"checksVoidReturn": {
					"attributes": false
				}
			}]
    }
}
