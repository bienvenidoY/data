/* 动态引入quize文件夹下所有的 *.vue组件文件 */
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./', true, /\.vue$/)

// you do not need `import components from './components.vue'`
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'

  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/')[0]

  const value = modulesFiles(modulePath)

  modules[moduleName] = value.default
  return modules
}, {})


export default modules
