// 通过增加返回类型 string 解决 ESLint 格式错误问题
export default function sayHello(name: string): string {
  return `Hello from ${name}`;
}
