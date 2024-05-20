const fs = require('fs')
// inquirer这个库来创建交互式的命令行界面
const inquirer = require('inquirer')
// 读取了文件vue.config.js为string格式
let vueConfig = fs.readFileSync('./vue.config.js', 'utf-8')
// 去找到target这一行代码
function findTarget(file) {
  console.log('file--', file);
}
// 命令行可选后端接口范围
const targetList = [
  {
    name: '张三',
    value: "\t\t\t\ttarget: 'http://33.33.33.33:3333',",
  },
  {
    name: '李四',
    value: "\t\t\t\ttarget: 'http://44.44.44.44:4444',",
  },
  {
    name: '王二',
    value: "\t\t\t\ttarget: 'http://22.22.22.22:2222',",
  },
  {
    name: '麻子',
    value: "\t\t\t\ttarget: 'http://55.55.55.55:5555',",
  },
]
// 选择方法
async function selectServe() {
  try {
    // 在命令行选择了
    const choose = await inquirer.prompt([
      {
        type: 'list',
        name: 'serve',
        message: '请选择开发环境下需要连接的后端服务',
        choices: targetList,
        default: targetList[0].value
      }
    ])
    // 找到target这一行
    let target = findTarget(vueConfig)
  } catch (error) {
    throw error
  }
}

selectServe()