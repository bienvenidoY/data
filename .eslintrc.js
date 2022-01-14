module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [

    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'parser': 'babel-eslint',
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'strict': 2,
    'semi': 0,
    'no-undef': 2, // 不能有未定义的变量
    'quotes': [1, 'single'], // 引号类型 `` "" ''
    'no-var': 0,
    'no-redeclare': 2, // 禁止重复声明变量
    'no-console': 'off',
    'no-multiple-empty-lines': [1, { 'max': 2 }], // 空行最多不能超过2行
    'no-trailing-spaces': ['error', { // 一行结束后面不要有空格
      'ignoreComments': true,
      'skipBlankLines': true
    }],
    'no-unused-vars': [2, { // 不能有声明后未被使用的变量或参数
      'vars': 'all',
      'args': 'after-used'
    }],
    'comma-dangle': 0,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }], // if while function 后面的{必须与if在同一行
    'space-infix-ops': 2,
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    'key-spacing': [2, { // 对象字面量中冒号的前后空格
      'beforeColon': false,
      'afterColon': true
    }],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'vue/no-use-v-if-with-v-for': ['error', {
      'allowUsingIterationVar': true
    }],
    'space-before-function-paren': ['error', { // 函数定义时括号前无空格
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'never'
    }],
    'spaced-comment': ['error', 'always', { // 注释风格
      'line': {
        'markers': ['/'],
        'exceptions': ['-', '+']
      },
      'block': {
        'markers': ['!'],
        'exceptions': ['*'],
        'balanced': true
      }
    }],
  }
};
