const babel = require('@babel/core')
const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const glob = require('glob')
const format = require('prettier-eslint')
const libPath = path.resolve(__dirname, '../lib')
fse.ensureDirSync(libPath)

const files = glob.sync('src/**/*.js')
for (const file of files) {
  // 过滤测试源码
  if (file.includes('__tests__')) continue
  // 获取文件路径中的文件名
  const fileName = file.substring(file.lastIndexOf('/') + 1)
  // 生成平级目录结构，参考lodash结构（所有的文件都放在lib目录下）
  const filePath = `${libPath}/${fileName}`
  // Babel转义处理
  let { code } = babel.transformFileSync(file)
  // require('a/b/c') => require('./c')
  code = code.replace(/(?<=require\(")(.*)(?="\)\))/g, (match) => {
    if (!match) return match
    const paths = match.split('/')
    return `./${paths[paths.length - 1]}`
  })
  // Eslint处理
  const formattedCode = format({ text: code })
  fs.writeFileSync(filePath, formattedCode)
}
