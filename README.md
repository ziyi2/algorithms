# 从零开始配置 TypeScript 项目

## 前言

本文是[算法与 TypeScript 实现](https://github.com/ziyi2/algorithms)中 TypeScript 项目整体的环境配置过程介绍。主要包括了以下一些配置内容：

- Git Commit Message
- TypeScript
- ESLint
- Prettier
- Lint Staged
- Jest
- Npm Script Hook
- Vuepress
- Github Actions

如果你对以上的某些配置非常熟悉，则可以跳过阅读。如果你不清楚是否要继续阅读其中的一些配置信息，则可以通过**工程问题**来决定是否要继续阅读相关的内容。

[算法与 TypeScript 实现](https://github.com/ziyi2/algorithms) 关于当前配置的改造在 [feat/framework](https://github.com/ziyi2/algorithms/tree/feat/framework) 分支上，希望刚兴趣的同学可以 star 一波。[学习文档](https://ziyi2.github.io/algorithms/) 目前仍然是老版本的学习文档，之后会进行持续更新。

> **温馨提示**：如果你希望在项目中制作基于 TypeScript 实现的简单易用的工具函数库，你可以使用一些成熟的 "零配置" 脚手架，例如 [tsdx](https://github.com/formik/tsdx#readme)、[microbundle](https://github.com/developit/microbundle) 以及 [typescript-starter](https://github.com/bitjson/typescript-starter) 等。如果功能不能满足你的项目需求，你也可以基于这些工具进行团队的定制化改造，例如 [ts-lib-scripts](https://github.com/sinoui/ts-lib-scripts)。

## 配置问题

希望你读完这篇文章能够了解以下一些问题（很有可能成为工程配置方面的面试题哦，细节决定成败）：

- 在使用 Git 的时候如何规范 Git 的提交说明（Commit 信息）？
- 简述符合 Angular 规范的提交说明的结构组成？
- Commit 信息如何和 Github Issues 关联？
- 在设计一些库包时如何生成版本日志？
- TypeScript 如何自动生成库包的声明文件？
- TypeScript 目前是采用 TSLint 还是 ESLint 进行代码校验，为什么？
- 列举你知道的所有构建工具并说说这些工具的优缺点？这些构建工具在不同的场景下应该如何选型？
- Babel 对于 TypeScript 的支持有哪些限制？
- 列举你所知道的 ESLint 功能？
- 如何确保构建和上传的代码无 ESLint 错误信息？
- ESLint 和 Prettier 的区别是什么？两者在一起工作时会产生问题吗？
- Linters 有哪两种类型的校验规则？
- 如何有效的识别 ESLint 和 Prettier 可能产生冲突的格式规则？如何解决此类规则冲突问题？
- git hook 在项目中哪些作用？
- git hook 中客户端和服务端钩子各自用于什么作用？
- git hook 中常用的钩子有哪些？
- `pre-commit` 和 `commit-msg` 钩子的区别是什么？各自可用于做什么？
- husky 以及 ghook 等工具制作 git hook 的原理是什么？
- 如何设计一个通用的 git hook ？
- git hook 可以采用 Node 脚本进行设计吗？如何做到？
- lint-staged 的功能是什么？
- VS Code 配置中的用户和工作区有什么区别？
- VS Code 的插件可以只对当前项目生效吗？
- 谈谈你所理解的 npm scripts，它有哪些功能？
- 你所知道的测试有哪些测试类型？
- 你所知道的测试框架有哪些？
- 什么是 e2e 测试？有哪些 e2e 的测试框架？
- 假设现在有一个插入排序算法，如何对该算法进行单元测试？
- 假设你自己实现的 React 或 Vue 的组件库要设计演示文档，你会如何设计？设计的文档需要实现哪些功能？
- 在设计工具库包的时候你是如何设计 API 文档的？
- 在通常的脚手架项目中进行热更新（hot module replacement）时如何做到 ESLint 实时打印校验错误信息？
- Vuepress 有哪些功能特点？
- 你所知道的 CI / CD 工具有哪些？在项目中有接触过类似的流程吗？
- CI 和 CD 的区别是什么？
- Github Actions 的特点是什么？

除此之外如果你对其他相关的知识感兴趣（非本文相关的知识），希望你能额外深入去探索：

- TypeScript 的特点？
- CommonJS 和 ES Module 有哪些区别？
- Tree Shaking 的作用是什么？什么情况下可以使用 Tree Shaking 的能力？
- 如何引入 ES Module 库包？在构建层面和包描述文件层面需要注意哪些方面？
- 谈谈你对 TypeScript 声明文件的理解？在制作库包时如何对外识别声明文件？在外部使用时有哪些好处？
- 在制作工具包的时候如何考虑按需引入和全量引入的优雅引入设计？
- 你知道哪些制作工具函数库的脚手架？
- 了解 Vue CLI 3.x 的功能特点吗？如何基于 Vue CLI 3.x 定制符合团队项目的脚手架？
- 了解 react-scripts 吗？
- 工程化配置领域的设计可以有哪些设计阶段（例如 react-scripts 和 vue ui 在设计以及使用形态上的区别）？
- 工程化配置监控（使用版本信息、版本兼容性报错信息分析、使用功能分析等）？

> **温馨提示**：有些问题在本文中能够得到答案，有些问题需要自己扩展阅读或查看源码才能得到答案（作者同样是工程化配置领域的小白，以上的这些问题同样在问自己）。

## 配置框架

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffa9b1246e2346b6bcac52d0ffa59307~tplv-k3u1fbpfcp-zoom-1.image)

需要注意文档中的配置说明可能会省略某些细节步骤（例如某些依赖的 npm 包安装、某些配置文件说明等），如果想要知道更多细节信息，可查看各个配置的 Commit 提交信息：

- 项目初始化 ([afaa458](https://github.com/ziyi2/algorithms/commit/afaa4583009ea5ac3ead2f3bfc5c61103ce8533c))
- **framework:** 新增 Git Commit Message 规范提交能力 ([d04e259](https://github.com/ziyi2/algorithms/commit/d04e25977a7041b5e2d9d801934d554ab6815c42))
- **framework:** 新增 TypeScript 编译能力 ([ebecee9](https://github.com/ziyi2/algorithms/commit/ebecee96551f8ed49a7b48c61be3da6b79ae3974))
- **framework:** 新增 ESLint 代码校验能力 ([dca67d4](https://github.com/ziyi2/algorithms/commit/dca67d4da73259636c612e677d7d406903d7abd8))
- **framework:** 新增 Prettier 自动格式化能力 ([7f3487a](https://github.com/ziyi2/algorithms/commit/7f3487a65f3325a9964d1ee462941f138f299f42))
- **framework:** 新增 Lint Staged 上传校验能力 ([b440186](https://github.com/ziyi2/algorithms/commit/b440186dbd8ac4052fe3715882c8fe86c495a4ae))
- **framework:** 新增 Jest 单元测试能力 ([6f086f2](https://github.com/ziyi2/algorithms/commit/6f086f27ac16be565f2cd4f49a310ad277571e08))
- **framework:** 新增 Npm Scripts Hook 能力 ([93e597a](https://github.com/ziyi2/algorithms/commit/93e597a1cf9bc3d9ea6ba4c1e5ba18c4cb4575fe))
- **framework:** 新增 Vuepress 演示文档能力 ([66e38d1](https://github.com/ziyi2/algorithms/commit/66e38d1ec9965846d5e1928e58dcfcd9967307d7))
- **framework:** 新增 Github Actions 能力 ([1cc85a4](https://github.com/ziyi2/algorithms/commit/1cc85a4ae4d6c378e8896a35de60565e2f72f865))

> **温馨提示**：以上都是使用 `npm run changelog` 自动生成的版本日志信息，你也可以通过仓库的 [CHANGELOG.md](https://github.com/ziyi2/algorithms/blob/feat/framework/CHANGELOG.md) 进行查看。

### Git Commit Message

[Commitizen](https://github.com/commitizen/cz-cli) 是一个规范 Git 提交说明（Commit Message）的 CLI 工具，具体如何配置可查看 [Cz 工具集使用介绍](https://juejin.im/post/5cc4694a6fb9a03238106eb9)（这篇文章对于 Commit Message 的配置介绍已经非常详细清楚，因此这里不再过多介绍）。本项目中主要使用了以下一些工具：

- [cz-customizable](https://github.com/leonardoanalista/cz-customizable)
- [commitlint](https://commitlint.js.org/#/)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog)

配置后会产生以下一些特性：

- 使用 `git cz` 代替 `git commit` 进行符合 Angular 规范的 Commit Message 信息提交
- 代码提交之前会通过 [husky](https://github.com/typicode/husky) 配合 git hook 进行提交信息校验，一旦提交信息不符合 Angular 规范，则提交会失败
- 执行 `npm run changelog` 会在根目录下自动生成 `CHANGELOG.md` 版本日志

> **温馨提示**：husky 中文的意思是哈士奇，大家可以想象一下为什么这个工具叫哈士奇，是不是咬着你不放的意思（or more 🐶 woof!），一旦它咬着你的代码提交不放，这将会是非常有趣的一件事情，在后续的工具配置中，我们仍然将于哈士奇见面，看看它会具体咬什么东西！

例如当你提交了一个不符合规范的 Commit Message（此时提交失败）：

```javascript
PS C:\Code\Git\algorithms> git commit -m "这是一个不符合规范的 Commit Message"
husky > commit-msg (node v12.13.1)
⧗   input: 这是一个不符合规范的 Commit Message
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky > commit-msg hook failed (add --no-verify to bypass)
```

> **温馨提示**：如果不知道什么是 CLI （命令行接口），可查看 [使用 NPM 发布和使用 CLI 工具](https://juejin.im/post/5eb89053e51d454de54db501)。

### TypeScript

#### TypeScript 背景

工具函数库的实现采用 TypeScript，除了可以自动生成 ts 声明文件供外部更好的提示使用之外，也可以避免 JavaScript 动态性所带来的一些无法预料的错误信息（具体可查看 [Top 10 JavaScript errors from 1000+ projects (and how to avoid them)](https://rollbar.com/blog/top-10-javascript-errors/)），从而使算法的设计更加严谨。 TypeScript 的构建方式有很多种，除了原生编译器 tsc 以外，还包括 Webpack、Rollup、Babel 以及 Gulp 等（更多构建工具的集成可查看 [Integrating with Build Tools](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html)）:

- Webpack 主要用于页面应用的模块化构建，使用 Webpack 构建会增加构建库的体积，因此简单工具库的制作使用 Webpack 完全是 "杀鸡用牛刀"。
- Rollup 是一个构建工具库非常不错的轻量选择，它持有的 [Tree Shaking](https://github.com/rollup/rollup) 以及构建 [ES Module](https://github.com/rollup/rollup/wiki/ES6-modules) 的特性使得它被 tsdx、microbundle 甚至 Vue 等广泛使用。
- Babel 对于 TypeScript 可使用 [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) 去除 TypeScript 类型标记，但是不做类型编译检查，更多关于 Babel 对于 TypeScript 支持的限制可查看 [@babel/plugin-transform-typescript - Caveats](https://www.babeljs.cn/docs/babel-plugin-transform-typescript#caveats) 或 [Babel 7 or TypeScript](https://kulshekhar.github.io/ts-jest/user/babel7-or-ts)。
- Gulp 是一个非常轻量的构建工具，并且也是 TypeScript 官方推荐的构建工具，具体可查看 [TypeScript - Building](https://github.com/microsoft/TypeScript#building)，简单的 Gulp 配置可查看 [TypeScript 中文网 - Gulp](https://www.tslang.cn/docs/handbook/gulp.html)。

由于算法的函数工具库功能非常单一简单，因此采用 TypeScript 官方推荐的 Gulp 工具进行构建即可满足需求。

> **温馨提示**：更多构建工具可以了解 [esbuild](https://github.com/evanw/esbuild)、[parcel](https://github.com/parcel-bundler/parcel)以及 [backpack](https://github.com/jaredpalmer/backpack) 等。当然如果你想要更多了解这些构建工具的差异以及在什么项目环境下应该做如何选型，可以自行搜索前端构建工具的对比或差异，这里推荐一篇个人觉得总结不错的文章 [前端构建：3 类 13 种热门工具的选型参考](https://segmentfault.com/a/1190000017183743)。

#### TypeScript 配置

本项目会构建输出 CommonJS 工具包（npm 包）供外部使用，采用 TypeScript 设计并输出声明文件有助于外部更好的使用该资源包进行 API 的提示。TypeScript 编译采用官方文档推荐的 Gulp 工具并配合 [gulp-typescript](https://github.com/ivogabe/gulp-typescript) 和 [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html) 配置文件。在根目录下新建 `tsconfig.json` 文件并新增以下配置：

```javascript
{
  "compilerOptions": {
    // 指定 ECMAScript 目标版本 "ES3"（默认）， "ES5"， "ES6" / "ES2015"， "ES2016"， "ES2017" 或 "ESNext"。
    "target": "ES5",
    // 构建的目标代码删除所有注释，除了以 /!* 开头的版权信息
    "removeComments": true,
    // 可配合 gulp-typescript 生成相应的 .d.ts 文件
    "declaration": true,
    // 启用所有严格类型检查选项。启用 --strict 相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict， --strictNullChecks, --strictFunctionTypes 和 --strictPropertyInitialization
    "strict": true,
    // 禁止对同一个文件的不一致的引用
    "forceConsistentCasingInFileNames": true,
    // 报错时不生成输出文件
    "noEmitOnError": true
  }
}
```

> **温馨提示**：这里没有新增 `module` 配置信息，因为默认输出 CommonJS 规范，更多关于 TypeScript 配置信息可查看[TypeScript 官方文档 / 编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)。如果对于 CommonJS 和 ES modules 的区别不是很清晰，这里有一些非常好的文档可以供大家阅读：[ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)、[ES6 modules](https://github.com/rollup/rollup/wiki/ES6-modules)。如果想了解如何对外提供 ES Module 可以查看 [pkg.module](https://github.com/rollup/rollup/wiki/pkg.module)。

同时在根目录下新建 `gulpfile.js` 文件：

```javascript
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// 输出 CommonJS 规范到 dist 目录下
gulp.task("default", function () {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest("dist"));
});
```

在 `package.json` 中新增 npm script 脚本：

```javascript
"scripts": {
  "build": "rimraf dist && gulp"
},
```

其中 [rimfaf](https://github.com/isaacs/rimraf) 用于在构建之前清除 `dist` 目录文件内容。此时在 `src` 目录下新增 TypeScript 源码并使用 `npm run build` 命令可以进行项目构建并输出 CommonJS 规范的目标代码到 `dist` 目录下。

除此之外，此项目希望可以快速生成声明文件供外部进行代码提示，此时仍然可以借助 `gulp-typescript` 工具自动生成声明文件。在 `gulpfile.js` 中新增以下配置

```javascript
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const merge = require("merge2");

// 输出 CommonJS 规范到 dist 目录下
gulp.task("default", function () {
  const tsResult = tsProject.src().pipe(tsProject());

  return merge([
    tsResult.dts.pipe(gulp.dest("types")),
    tsResult.js.pipe(gulp.dest("dist")),
  ]);
});
```

修改 `build` 命令使其在构建之前同时可以删除 `types` 目录：

```javascript
"scripts": {
  "build": "rimraf dist types && gulp",
},
```

再次执行 `npm run build` 会在项目根目录下生成 `types` 文件夹，该文件夹主要存放自动生成的 TypeScript 声明文件。

需要注意发布 npm 包时默认会将当前项目的所有文件进行发布处理，但这里希望发布的包只包含使用者需要的编译文件 `dist` 和 `types`，因此可以通过`package.json` 中的 [`files`](https://docs.npmjs.com/files/package.json#files)（用于指定发布的 npm 包包含哪些文件） 字段信息进行控制：

```javascript
"files": [
  "dist",
  "types"
],
```

> **温馨提示**：发布的 npm 包中某些文件将忽视 `files` 字段信息的配置，包括 `package.json`、`LICENSE`、`README.md` 等。

除此之外，如果希望发布的 npm 包通过 `require('algorithms-utils')` 或 `import` 形式引入时指向 `dist/index.js` 文件，需要配置 `package.json` 中的 [`main`](https://docs.npmjs.com/files/package.json#main) 字段信息：

```javascript
"main": "dist/index.js"
```

> **温馨提示**： 对于工具包使用全量引入的方式并不是一个好的选择，可以通过具体的工具方法进行按需引入。

### ESLint

#### ESLint 背景

TypeScript 的代码检查工具主要有 TSLint 和 ESLint 两种。早期的 TypeScript 项目一般采用 TSLint 进行检查。TSLint 和 TypeScript 采用同样的 AST 格式进行编译，但主要问题是对于 JavaScript 生态的项目支持不够友好，因此 TypeScript 团队在 2019 年宣布全面转向 ESLint（具体可查看 TypeScript 官方仓库的 [`.eslintrc.json`](https://github.com/microsoft/TypeScript/blob/master/.eslintrc.jso) 配置），更多关于转向 ESLint 的原因可查看：

- <https://medium.com/palantir/tslint-in-2019-1a144c2317a9>
- <https://github.com/microsoft/TypeScript/issues/30553>

TypeScript 和 ESLint 使用不同的 AST 进行解析，因此为了在 ESLint 中支持 TypeScript 代码检查需要制作额外的[自定义解析器](https://cn.eslint.org/docs/developer-guide/working-with-custom-parsers)（Custom Parsers，ESLint 的自定义解析器功能需要基于 [ESTree](https://github.com/estree/estree)），目的是为了能够解析 TypeScript 语法并转成与 ESLint 兼容的 AST。[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint#getting-started--installation) 在这样的背景下诞生，它会处理所有 ESLint 特定的配置并调用 [@typescript-eslint/typescript-estree](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/typescript-estree) 生成 ESTree-compatible AST（需要注意不仅仅兼容 ESLint，也能兼容 Prettier）。

`@typescript-eslint` 是一个采用 [Learn](https://github.com/lerna/lerna) 进行设计的 Monorepo 结构仓库，除了上述提到的 npm 包之外，还包含以下两个重要的 npm 包：

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin): 配合 `@typescript-eslint/parser` 一起使用的 ESLint 插件，可以设置 TypeScript 的校验规则。
- [@typescript-eslint/eslint-plugin-tslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin-tslint): TSLint 向 ESLint 进行迁移的插件。

> **温馨提示**：如果你正在使用 TSLint，并且你希望兼容 ESLint 或者向 ESLint 进行过渡（TSLint 和 ESLint 并存）， 可查看 [Migrating from TSLint to ESLint](https://github.com/typescript-eslint/typescript-eslint#migrating-from-tslint-to-eslint)。除此之外，以上所介绍的这些包发布时版本一致（为了联合使用的兼容性），需要额外注意`@typescript-eslint` 对于 TypeScript 和 ESLint 的版本支持性，更多可查看 @typescript-eslint/parser 的仓库信息。

#### ESLint 配置

从背景的介绍中可以理解，对于全新的 TypeScript 项目（直接抛弃 TSLint）需要包含解析 AST 的解析器 @typescript-eslint/parser 和使用校验规则的插件 @typescript-eslint/eslint-plugin，这里需要在项目中进行安装：

```javascript
npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

在根目录新建 `.eslintrc.js` 配置文件，并设置以下配置：

```javascript
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
```

其中：

- `parser: '@typescript-eslint/parser'`：使用 ESLint 解析 TypeScript 语法
- `plugins: ['@typescript-eslint']`：在 ESLint 中加载插件 `@typescript-eslint/eslint-plugin`，该插件可用于配置 TypeScript 校验规则。
- `extends: [ ... ]`：在 ESLint 中使用[共享规则配置](https://cn.eslint.org/docs/developer-guide/shareable-configs)，其中 `eslint:recommended` 是 ESLint 内置的推荐校验规则配置（也被称作最佳规则实践），`plugin:@typescript-eslint/recommended` 是类似于 `eslint:recommended` 的 TypeScript 推荐校验规则配置。

> **温馨提示**：如果你稍微阅读一下 recommanded 源码你会发现，其实内部可以理解为推荐校验规则的集合。因此如果想基于 `@typescript-eslint/eslint-plugin` 进行自定义规则，则可参考 [TypeScript Supported Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)。

配置完成后在 `package.json` 中设置校验命令

```javascript
"scripts": {
  "lint": "eslint src",
}
```

此时如果在 `src` 目录下书写错误的语法，执行 `npm run lint` 就会输出错误信息：

```javascript
> eslint src


C:\Code\Git\algorithms\src\greet.ts
  2:16  warning  Missing return type on function  @typescript-eslint/explicit-module-boundary-types

✖ 1 problem (0 errors, 1 warning)
```

> **温馨提示**：输出的错误信息是通过 [ESLint Formatters](https://cn.eslint.org/docs/user-guide/formatters/) 生成，查看 ESLint 源代码并调试可发现默认采用的是 [stylish formatter](https://cn.eslint.org/docs/user-guide/formatters/#stylish) 。

#### ESLint 插件

如果不使用插件，很难发现代码可能存在 TypeScript 格式错误，因为在书写代码的时候除了手动执行 `npm run lint` 以外没有任何的实时提示信息（你当然也可以通过 `gulp`监听文件的变化并执行 `npm run lint`）。为了可以实时看到 TypeScript 错误信息，可以通过 VS Code 插件进行处理。安装 ESLint 插件后可进行代码的实时提示，具体如下图所示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ba4243fa7c14006986605984b5b7f81~tplv-k3u1fbpfcp-zoom-1.image)

当然为了防止不需要被校验的文件出现校验信息，可以通过 `.eslintignore` 文件进行配置（例如以下都是一些不需要格式校验的配置文件）：

```javascript
# gulp
gulpfile.js

# eslint
.eslintrc.js

# commitizen
commitlint.config.js

# jest
jest.config.js

# build
dist
```

此时可以发现之前执行 `lint` 命令的错误通过插件的形式可实时在 VS Code 编辑器中进行显示。除此之外，一些 ESLint 的格式校验错误（例如多余的`;` 等）可通过配置 Save Auto Fix 进行保存自动格式化处理。具体 VS Code 的配置可参考 [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 的文档说明，这边应该需要进行如下配置：

```javascript
"editor.codeActionsOnSave": {
  "source.fixAll": true,
  "source.fixAll.eslint": true
}
```

> **温馨提示**：VS Code 的配置分为两种类型（用户和工作区），针对上述通用的配置主要放在用户里，针对不同项目的不同配置则可以放入工作区进行处理。

#### ESLint 确保构建

VS Code 插件并不能确保代码上传或构建前无任何错误信息，此时仍然需要额外的流程能够避免错误。在构建前进行 ESLint 校验能够确保构建时无任何错误信息，一旦 ESLint 校验不通过则不允许进行源码的构建操作：

```javascript
"scripts": {
  "lint": "eslint src --max-warnings 0",
  "build": "npm run lint && rimraf dist types && gulp",
}
```

需要注意在构建时进行校验的严格控制，一旦 lint 抛出 warning 或者 error 则立马终止构建（详情可查看 [ESLint 退出代码](https://cn.eslint.org/docs/user-guide/command-line-interface#exit-codes)）。

> **温馨提示**：需要注意 Shell 中的 `&&` 和 `&` 是有差异的，`&&` 主要用于继发执行，只有前一个任务执行成功，才会执行下一个任务，`&` 主要用于并发执行，表示两个脚本同时执行。这里构建的命令需要等待 `lint` 命令执行通过才能进行，一旦 `lint` 失败那么构建命令将不再执行。

#### ESLint 确保代码上传

尽管可能配置了 ESLint 的校验脚本 以及 VS Code 插件，但是有些 ESLint 的规则校验是无法通过 Save Auto Fix 进行格式化修复的（例如质量规则），因此还需要一层保障能够确保代码提交之前所有的代码能够通过 ESLint 校验，这个配置将在 Lint Staged 中进行讲解。

### Prettier

#### Prettier 背景

Prettier 是一个统一代码格式风格的工具，如果你不清楚为什么需要使用 Prettier，可以查看 [Why Prettier?](https://prettier.io/docs/en/why-prettier.html)。很多人可能疑惑，ESLint 已经能够规范我们的代码风格，为什么还需要 Prettier？在 [Prettier vs Linters](https://prettier.io/docs/en/comparison.html) 中详细说明了两者的区别，Linters 有两种类型的规则：

- 格式规则（Formatting rules）：例如 [max-len](https://eslint.org/docs/rules/max-len)、[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing) 以及 [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs) 等
- 质量规则（Code-quality rules）：例如 [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)、[no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals) 以及 [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors) 等

ESLint 的规则校验同时包含了 **格式规则** 和 **质量规则**，但是大部分情况下只有 **格式规则** 可以通过 `--fix` 或 VS Code 插件的 Sava Auto Fix 功能一键修复，而 **质量规则** 更多的是发现代码可能出现的 Bug 从而防止代码出错，这类规则往往需要手动修复。因此 **格式规则** 并不是必须的，而 **质量规则** 则是必须的。Prettier 与 ESLint 的区别在于 Prettier 专注于统一的**格式规则**，从而减轻 ESLint 在**格式规则上**的校验，而对于**质量规则** 则交给专业的 ESLint 进行处理。总结一句话就是：Prettier for formatting and linters for catching bugs!（ESLint 是必须的，Prettier 是可选的！）

需要注意如果 ESLint（TSLint） 和 Prettier 配合使用时**格式规则**有重复且产生了冲突，那么在编辑器中使用 Sava Auto Fix 时会让你的一键格式化哭笑不得。此时应该让两者把各自注重的规则功能区分开，使用 ESLint 校验**质量规则**，使用 Prettier 校验**格式规则**，更多信息可查看 [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)。

> **温馨提示**：在 VS Code 中使用 ESLint 匹配到相应的规则时会产生黄色波浪线以及红色文件名进行错误提醒。Prettier 更希望你对格式规则无感知，从而不会让你觉得有任何使用的负担。如果想要了解更多 Prettier，还可以查看 Prettier 的背后思想 [Option Philosophy](https://prettier.io/docs/en/option-philosophy.html)，个人认为了解一个产品设计的**哲学**能更好的指导你使用该产品。

#### Prettier 配置

首先安装 Prettier 所需要的依赖：

```javascript
npm i  prettier eslint-config-prettier --save-dev
```

其中：

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): 用于解决 ESLint 和 Prettier 配合使用时容易产生的**格式规则**冲突问题，其作用就是关闭 ESLint 中配置的一些格式规则，除此之外还包括关闭 `@typescript-eslint/eslint-plugin`、`eslint-plugin-babel`、`eslint-plugin-react`、`eslint-plugin-vue`、`eslint-plugin-standard` 等格式规则。

理论上而言，在项目中开启 ESLint 的 `extends` 中设置的带有格式规则校验的规则集，那么就需要通过 `eslint-config-prettier` 插件关闭可能产生冲突的格式规则：

```javascript
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    // 用于关闭 ESLint 相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    "prettier",
    // 用于关闭 @typescript-eslint/eslint-plugin 插件相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
    "prettier/@typescript-eslint",
  ]
}
```

配置完成后，可以通过[命令行接口](https://prettier.io/docs/en/cli.html)运行 Prettier:

```javascript
"scripts": {
  "prettier": "prettier src test --write",
},
```

`--write` 参数类似于 ESLint 中的 `--fix`（在 ESLint 中使用该参数还是需要谨慎哈，建议还是使用 VS Code 的 Save Auto Fix 功能），主要用于自动修复格式错误。此时书写格式的错误代码：

```javascript
import great from "@/greet";

// 中间这么多空行
export default {
  great,
};
```

执行 `npm run prettier` 进行格式修复：

```javascript
PS C:\Code\Git\algorithms> npm run prettier

> algorithms-utils@1.0.0 prettier C:\Code\Git\algorithms
> prettier src test --write

src\greet.ts 149ms
src\index.ts 5ms
test\greet.spec.ts 11ms
```

修复之后的的文件格式如下：

```javascript
import great from "@/greet";

export default {
  great,
};
```

需要注意如果某些规则集没有对应的 `eslint-config-prettier` 关闭配置，那么可以先通过 [CLI helper tool](https://github.com/prettier/eslint-config-prettier#cli-helper-tool) 检测是否有重复的格式规则集在生效，然后可以通过手动配置 `eslintrc.js` 的形式进行关闭：

```javascript
PS C:\Code\Git\algorithms> npx eslint --print-config src/index.ts | npx eslint-config-prettier-check
No rules that are unnecessary or conflict with Prettier were found.
```

例如把 `eslint-config-prettier` 的配置去除，此时进行检查重复规则：

```javascript
PS C:\Code\Git\algorithms> npx eslint --print-config src/index.ts | npx eslint-config-prettier-check
The following rules are unnecessary or might conflict with Prettier:

- @typescript-eslint/no-extra-semi
- no-mixed-spaces-and-tabs

The following rules are enabled but cannot be automatically checked. See:
https://github.com/prettier/eslint-config-prettier#special-rules

- no-unexpected-multiline
```

此时假设 `eslint-config-prettier` 没有类似的关闭格式规则集（例如本项目中配置的 `plugin:jest/recommended` 可能存在规则冲突），那么可以通过配置 `.eslintrc.js` 的形式自己手动关闭相应冲突的格式规则。

> **温馨提示**：ESLint 可以对不同的文件支持不同的规则校验， 因此 `--print-config` 只能对应单个文件的冲突格式规则检查。 由于通常的项目是一套规则对应一整个项目，因此对于整个项目所有的规则只需要校验一个文件是否有格式规则冲突即可。

#### Prettier 插件

通过命令行接口 `--write` 的形式可以进行格式自动修复，但是类似 ESLint，我们更希望项目在实时编辑时可以通过保存就能自动格式化代码（鬼知道 `--fix` 以及 `--write` 格式了什么文件，当然更希望通过肉眼的形式立即感知代码的格式化变化），此时可以通过配置 VS Code 的 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 插件进行 Save Auto Fix，具体的配置查看插件文档。

#### Prettier 确保代码上传

和 ESLint 一样，尽管可能配置了 Prettier 的自动修复格式脚本以及 VS Code 插件，但是无法确保格式遗漏的情况，因此还需要一层保障能够确保代码提交之前能够进行 Prettier 格式化，这个配置将在 Lint Staged 中讲解，更多配置方案也可以查看 [Prettier - Pre-commit Hook](https://prettier.io/docs/en/precommit.html)。

### Lint Staged

#### Lint Staged 背景

在 Git Commit Message 中使用了 [commitlint](https://commitlint.js.org/#/) 工具配合 husky 可以防止生成不规范的 Git Commit Message，从而阻止用户进行不规范的 Git 代码提交，其原理就是监听了 Git Hook 的执行脚本（会在特定的 Git 执行命令诸如 `commit`、`push`、`merge` 等触发之前或之后执行相应的脚本钩子）。Git Hook 其实是进行项目约束非常好用的工具，它的作用包括但不限于：

- Git Commit Message 规范强制统一
- ESLint 规则统一，防止不符合规范的代码提交
- Prettier 自动格式化（类似的还包括 Style 样式格式等）
- 代码稳定性提交，提交之前确保测试用例全部通过
- 发送邮件通知
- CI 集成（服务端钩子）

Git Hook 的钩子非常多，但是在客户端中可能常用的钩子是以下两个：

- `pre-commit`：Git 中 `pre` 系列钩子允许终止即将发生的 Git 操作，而`post` 系列往往用作通知行为。`pre-commit` 钩子在键入提交信息（运行 `git commit` 或 `git cz`）前运行，主要用于检查当前即将被提交的代码快照，例如提交遗漏、测试用例以及代码等。该钩子如果以非零值退出则 Git 将放弃本次提交。当然你也可以通过配置命令行参数 `git commit --no-verify` 绕过钩子的运行。
- `commit-msg`：该钩子在用户输入 Commit Message 后被调用，接收存有当前 **Commit Message** 信息的临时文件路径作为唯一参数，因此可以利用该钩子来核对 Commit Meesage 信息（在 Git Commit Message 中使用了该钩子对提交信息进行了是否符合 Angular 规范的校验）。该钩子和 `pre-commit` 类似，一旦以非零值退出 Git 将放弃本次提交。

除了上述常用的客户端钩子，还有两个常用的服务端钩子：

- `pre-receive`：该钩子会在远程仓库接收 `git push` 推送的代码时执行（注意不是本地仓库），该钩子会比 `pre-commit` 更加有约束力（总会有这样或那样的开发人员不喜欢提交代码时所做的一堆检测，他们可能会选择绕过这些钩子）。`pre-receive` 钩子可用于接收代码时的强制规范校验，如果某个开发人员采用了绕过 `pre-commit` 钩子的方式提交了一堆 💩 一样的代码，那么通过设置该钩子可以拒绝代码提交。当然该钩子最常用的操作还是用于检查是否有权限推送代码、非快速向前合并等。
- `post-receive`：该钩子在推送代码成功后执行，适合用于发送邮件通知或者触发 CI 。

> **温馨提示**：想了解更多 Git Hook 信息可以查看 [Git Hook 官方文档](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90) 或 [Git 钩子：自定义你的工作流](https://github.com/geeeeeeeeek/git-recipes/wiki/5.4-Git-%E9%92%A9%E5%AD%90%EF%BC%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BD%A0%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81)。

需要注意初始化 Git 之后默认会在 `.git/hooks` 目录下生成所有 Git 钩子的 Shell 示例脚本，这些脚本是可以被定制化的。对于前端开发而言去更改这些示例脚本适配前端项目非常不友好（大多数前端开发同学压根不会设计 Shell 脚本，尽管这个对于制作工具是一件非常高效的事情），因此社区就出现了类似的增强工具，它们对外抛出的是简单的钩子配置（例如 [ghooks](https://github.com/ghooks-org/ghooks) 在 `package.json` 中只需要进行简单的[钩子属性配置](https://github.com/ghooks-org/ghooks#setup)），而在内部则通过替换 Git 钩子示例脚本的形式使得外部配置的钩子可以被执行，例如 [husky](https://github.com/typicode/husky)、ghooks 以及 [pre-commit](https://github.com/pre-commit/pre-commit) 等。

> **温馨提示**： Git Hook 还可以定制脚本执行的语言环境，例如对于前端而言当然希望使用熟悉的 Node 进行脚本设计，此时可以通过在脚本文件的头部设置 `#! /usr/bin/env node` 将 Node 作为可执行文件的环境解释器，如果你之前看过 [使用 NPM 发布和使用 CLI 工具](https://juejin.im/post/5eb89053e51d454de54db501) 可能会对这个环境解析器相对熟悉，这里也给出一个使用 Node 解释器的示例：[ghooks - hook.template.raw](https://github.com/ghooks-org/ghooks/blob/master/lib/hook.template.raw)，ghooks 的实现非常简单，感兴趣的同学可以仔细阅读一些源码的实现。

介绍 Git Hook 是为了让大家清晰的认知到使用 Hook 可以在前端的工程化项目中做很多事情（本来应该放在 Git Commit Message 中介绍相对合适，但是鉴于那个小节引用了另外一篇文章，因此将这个信息放在本小节进行科普）。

之前提到使用 Git Hook 可以进行 ESLint 规范约束，因此大家其实应该能够猜到使用 `pre-commit` 钩子（当然需要借助 Git Hook 增强工具，本项目中一律选择 `husky`）配合 ESLint 可以进行提交说明前的项目代码规则校验，但是如果项目越来越大，ESLint 校验的时间可能越来越长，这对于频繁的代码提交者而言可能是一件相对痛苦的事情，因此可以借助 `lint-staged` 工具（听这个工具的名字就能够猜测 lint 的是已经放入 Git Stage 暂存区中的代码，`ed` 在英文中表明已经做过）减少代码的检测量。

#### Lint Staged 配置

使用 [commitlint](https://commitlint.js.org/#/) 工具可以防止生成不规范的 Git Commit Message，从而阻止用户进行 Git 代码提交。但是如果想要防止团队协作时开发者提交不符合 ESLint 规则的代码则可以通过 [lint-staged](https://github.com/okonet/lint-staged) 工具来实现。`lint-staged` 可以在用户提交代码之前（生成 Git Commit Message 信息之前）使用 ESLint 检查 Git 暂存区中的代码信息（`git add` 之后的修改代码），一旦存在 💩 一样不符合校验规则的代码，则可以终止提交行为。需要注意的是 `lint-staged` 不会检查项目的全量代码（全量使用 ESLint 校验对于较大的项目可能会是一个相对耗时的过程），而只会检查添加到 Git 暂存区中的代码。根据官方文档执行以下命令自动生成配置项信息：

```javascript
npx mrm lint-staged
```

需要注意默认生成的配置文件是针对 JavaScript 环境的，手动修改 `package.json` 中的配置信息进行 TypeScript 适配：

```javascript
// 我们的哈士奇再次上场，这次它是要咬着你的 ESLint 不放了，这里我简称它的动作为 "咬 💩" ~~~
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  // 这里需要注意 ESLint 脚本的 --max-warnings 0
  // 否则就算存在 warning 也不会终止提交行为
  // 这里追加了 Prettier 的自动格式化，确保代码提交之前所有的格式能够修复
  "*.ts": ["npm run lint", "npm run prettier"]
}
```

此时如果将要提交的代码有 💩 , 则提交时会提示错误信息且提交会被强制终止：

```javascript
husky > pre-commit (node v12.13.1)
[STARTED] Preparing...
[SUCCESS] Preparing...
[STARTED] Running tasks...
[STARTED] Running tasks for *.ts
[STARTED] npm run lint-strict
[FAILED] npm run lint-strict [FAILED]
[FAILED] npm run lint-strict [FAILED]
[SUCCESS] Running tasks...
[STARTED] Applying modifications...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Reverting to original state because of errors...
[SUCCESS] Reverting to original state because of errors...
[STARTED] Cleaning up...
[SUCCESS] Cleaning up...

× npm run lint-strict:
ESLint found too many warnings (maximum: 0).
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! algorithms-utils@1.0.0 lint-strict: `eslint src --max-warnings 0 "C:/Code/Git/algorithms/src/greet.ts"`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the algorithms-utils@1.0.0 lint-strict script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\子弈\AppData\Roaming\npm-cache\_logs\2020-07-11T07_25_39_102Z-debug.log

> algorithms-utils@1.0.0 lint-strict C:\Code\Git\algorithms
> eslint src --max-warnings 0 "C:/Code/Git/algorithms/src/greet.ts"


C:\Code\Git\algorithms\src\greet.ts
  2:16  warning  Missing return type on function  @typescript-eslint/explicit-module-boundary-types
  2:34  warning  Argument 'name' should be typed  @typescript-eslint/explicit-module-boundary-types

✖ 2 problems (0 errors, 2 warnings)

husky > pre-commit hook failed (add --no-verify to bypass)
```

husky 在 `package.json` 中配置了 `pre-commit` 和 `commit-msg` 两个 [Git 钩子](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)，优先使用 `pre-commit` 钩子执行 ESLint 校验，如果校验失败则终止运行。如果校验成功则会继续执行 `commit-msg` 校验 Git Commit Message，例如以下是 ESLint 校验通过但是 Commit Message 校验失败的例子：

```javascript
PS C:\Code\Git\algorithms> git commit -m "这是一个不符合规范的 Commit Message"
// pre-commit 钩子 ESLint 校验通过
husky > pre-commit (node v12.13.1)
[STARTED] Preparing...
[SUCCESS] Preparing...
[STARTED] Running tasks...
[STARTED] Running tasks for *.ts
[STARTED] npm run lint-strict
[SUCCESS] npm run lint-strict
[SUCCESS] Running tasks for *.ts
[SUCCESS] Running tasks...
[STARTED] Applying modifications...
[SUCCESS] Applying modifications...
[STARTED] Cleaning up...
[SUCCESS] Cleaning up...
// commit-msg 钩子 Git Commit Message 校验失败
husky > commit-msg (node v12.13.1)
⧗   input: 这是一个不符合规范的 Commit Message
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky > commit-msg hook failed (add --no-verify to bypass)
```

### Jest

#### 测试背景

如果对于测试的概念和框架不是特别清楚，这里推荐一些可查看的文章：

- [JavaScript 程序测试](https://javascript.ruanyifeng.com/tool/testing.html) - 全面的测试基础知识
- [New to front-end testing? Start from the top of the pyramid!](https://dev.to/noriste/new-to-front-end-testing-start-from-the-top-of-the-pyramid-36kj) - 重点可以了解一下测试金字塔和测试置信度
- [[译] JavaScript 单元测试框架：Jasmine, Mocha, AVA, Tape 和 Jest 的比较](https://juejin.im/post/5acc721a6fb9a028b77b23c9) - 单元测试框架对比中文版（2018）
- [JavaScript unit testing frameworks in 2020: A comparison](https://raygun.com/blog/javascript-unit-testing-frameworks/) - 单元测试框架对比英文版（2020）

除此之外，如果想了解一些额外的测试技巧，这里推荐一些社区的最佳实践：

- [javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-zh-CN.md)
- [ui-testing-best-practices](https://github.com/NoriSte/ui-testing-best-practices)

由于这里只是 Node 环境工具库包的单元测试，在对比了各个测试框架之后决定采用 [Jest](https://jestjs.io/) 进行单元测试：

- 内置断言库可实现开箱即用（从 `it` 到 `expect`， Jest 将整个工具包放在一个地方）
- Jest 可以可靠地并行运行测试，并且为了让加速测试进程，Jest 会优先运行之前失败的测试用例
- 内置覆盖率报告，无需额外进行配置
- 优秀的报错信息

> **温馨提示**：前端测试框架很多，相比简单的单元测试，e2e 测试会更复杂一些（不管是测试框架的支持以及测试用例的设计）。之前使用过 Karma 测试管理工具配合 Mocha 进行浏览器环境测试，也使用过 PhantomJS 以及 Nightwatch（使用的都是皮毛），印象最深刻的是使用 [testcafe](https://github.com/DevExpress/testcafe) 测试框架（复杂的 API 官方文档），除此之外如果还感兴趣，也可以了解一下 [cypress](https://github.com/cypress-io/cypress) 测试框架。

#### Jest 配置

本项目的单元测试主要采用了 [Jest](https://jestjs.io/en/) 测试框架。Jest 如果需要对 TypeScript 进行支持，可以通过配合 Babel 的形式，具体可查看 [Jest - Using TypeScript](https://jestjs.io/docs/en/getting-started#using-typescript)，但是采用 Babel 会产生一些限制（具体可查看 [Babel 7 or TypeScript](https://kulshekhar.github.io/ts-jest/user/babel7-or-ts)）。由于本项目没有采用 Babel 进行转译，并且希望能够完美支持类型检查，因此采用 [ts-jest](https://kulshekhar.github.io/ts-jest/user/install#customizing) 进行单元测试。按照官方教程进行依赖安装和项目初始化：

```javascript
npm install --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init
```

子啊根目录的 `ject.config.js` 文件中进行 Jest 配置修改：

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // 输出覆盖信息文件的目录
  coverageDirectory: "./coverage/",
  // 覆盖信息的忽略文件模式
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  // 如果测试覆盖率未达到 100%，则测试失败
  // 这里可用于预防代码构建和提交
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  // 路径映射配置，具体可查看 https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping
  // 需要配合 TypeScript 路径映射，具体可查看：https://www.tslang.cn/docs/handbook/module-resolution.html
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
```

需要注意路径映射也需要配置 `tsconfig.json` 中的 `paths` 信息，同时注意将测试代码包含到 TypeScript 的编译目录中。配置完成后在 `package.json` 中配置测试命令：

```javascript
"scripts": {
  "lint": "eslint src --max-warnings 0",
  "test": "jest --bail --coverage",
  "build": "npm run lint && npm run jest && rimraf dist types && gulp",
}
```

需要注意 Jest 中的这些配置信息（更多配置信息可查看 [Jest CLI Options](https://jestjs.io/docs/zh-Hans/cli)）：

- `bail` 的配置作用相对类似于 ESLint 中的 `max-warnings`，设置为 `true` 则表明一旦发现单元测试用例错误则停止运行其余测试用例，从而可以防止运行用例过多时需要一直等待用例全部运行完毕的情况。
- `coverage` 主要用于在当前根目录下生成 `coverage` 代码的测试覆盖率报告，该报告还可以上传 [coveralls](https://coveralls.io/) 进行 Github 项目的 Badges 显示。

> **温馨提示**：Jest CLI Options 中的 `findRelatedTests` 可用于配合 `pre-commit` 钩子去运行最少量的单元测试用例，可配合 `lint-staged` 实现类似于 ESLint 的作用，更多细节可查看 [`lint-staged - Use environment variables with linting commands`](https://github.com/okonet/lint-staged#use-environment-variables-with-linting-commands)。

在当前根目录的 `test` 目录下新建 `greet.spec.ts` 文件，并设计以下测试代码：

```javascript
import greet from "@/greet";

describe("src/greet.ts", () => {
  it("name param test", () => {
    expect(greet("world")).toBe("Hello from world 1");
  });
});
```

> **温馨提示**：测试文件有两种放置风格，一种是新建 `test` 文件夹，然后将所有的测试代码集中在 `test` 目录下进行管理，另外一种是在各个源码文件的同级目录下新建 `__test__` 目录，进行就近测试。大部分的项目可能都会倾向于采用第一种目录结构（可以随便找一些 github 上的开源项目进行查看，这里 `ts-test` 则是采用了第二种测试结构）。除此之外，需要注意 Jest 通过配置 [`testMatch`](https://jestjs.io/docs/zh-Hans/configuration#testmatch-arraystring) 或 [`testRegex`](https://jestjs.io/docs/zh-Hans/configuration#testregex-string--arraystring) 可以使得项目识别特定格式文件作为测试文件进行运行（本项目采用默认配置可识别后缀为 `.spec` 的文件进行单元测试）。

#### Jest 确保构建

单独通过执行 `npm run test` 命令进行单元测试，这里演示执行构建命令时的单元测试（需要保证构建之前所有的单元测试用例都能通过）。如果测试失败，那么应该防止继续构建，例如进行失败的构建行为：

```javascript
PS C:\Code\Git\algorithms> npm run build

> algorithms-utils@1.0.0 build C:\Code\Git\algorithms
> npm run lint-strict && npm run jest && rimraf dist types && gulp


> algorithms-utils@1.0.0 lint-strict C:\Code\Git\algorithms
> eslint src --max-warnings 0


> algorithms-utils@1.0.0 jest C:\Code\Git\algorithms
> jest --coverage

 PASS  dist/test/greet.spec.js
 FAIL  test/greet.spec.ts
  ● src/greet.ts › name param test

    expect(received).toBe(expected) // Object.is equality

    Expected: "Hello from world 1"
    Received: "Hello from world"

      3 | describe("src/greet.ts", () => {
      4 |   it("name param test", () => {
    > 5 |     expect(greet("world")).toBe("Hello from world 1");
        |                            ^
      6 |   });
      7 | });
      8 |

      at Object.<anonymous> (test/greet.spec.ts:5:28)

----------|---------|----------|---------|---------|-------------------
| File       | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s   |
| ---------- | --------- | ---------- | --------- | --------- | ------------------- |
| All files  | 100       | 100        | 100       | 100       |
| greet.ts   | 100       | 100        | 100       | 100       |
| ---------- | --------- | ---------- | --------- | --------- | ------------------- |
Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        3.45 s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! algorithms-utils@1.0.0 jest: `jest --coverage`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the algorithms-utils@1.0.0 jest script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\子弈\AppData\Roaming\npm-cache\_logs\2020-07-12T13_42_11_628Z-debug.log
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! algorithms-utils@1.0.0 build: `npm run lint-strict && npm run jest && rimraf dist types && gulp`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the algorithms-utils@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\子弈\AppData\Roaming\npm-cache\_logs\2020-07-12T13_42_11_673Z-debug.log
```

需要注意由于是并行（`&&`）执行脚本，因此执行构建命令时（`npm run build`）会先执行 ESLint 校验，如果 ESLint 校验失败那么退出构建，否则继续进行 Jest 单元测试。如果单元测试失败那么退出构建，只有当两者都通过时才会进行源码构建。

#### Jest 确保代码上传

除了预防不负责任的代码构建以外，还需要预防不负责任的代码提交。配合 `lint-staged` 可以防止未跑通单元测试的代码进行远程提交：

```javascript
"scripts": {
  "lint": "eslint src --max-warnings 0",
  "test": "jest --bail --coverage",
},
"lint-staged": {
  "*.ts": [
    "npm run lint",
    "npm run test"
  ]
}
```

此时如果单元测试有误，都会停止代码提交：

```javascript
husky > pre-commit (node v12.13.1)
[STARTED] Preparing...
[SUCCESS] Preparing...
[STARTED] Running tasks...
[STARTED] Running tasks for *.ts
[STARTED] npm run lint
[SUCCESS] npm run lint
[STARTED] npm run jest
[FAILED] npm run jest [FAILED]
[FAILED] npm run jest [FAILED]
[SUCCESS] Running tasks...
[STARTED] Applying modifications...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Reverting to original state because of errors...
[SUCCESS] Reverting to original state because of errors...
[STARTED] Cleaning up...
[SUCCESS] Cleaning up...

× npm run jest:
FAIL test/greet.spec.ts
  src/greet.ts
    × name param test (4 ms)

  ● src/greet.ts › name param test

    expect(received).toBe(expected) // Object.is equality

    Expected: "Hello from world 1"
    Received: "Hello from world"

      3 | describe("src/greet.ts", () => {
      4 |   it("name param test", () => {
    > 5 |     expect(greet("world")).toBe("Hello from world 1");
        |                            ^
      6 |   });
      7 | });
      8 |

      at Object.<anonymous> (test/greet.spec.ts:5:28)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.339 s, estimated 3 s
Ran all test suites related to files matching /C:\\Code\\Git\\algorithms\\src\\index.ts|C:\\Code\\Git\\algorithms\\test\\greet.spec.ts/i.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! algorithms-utils@1.0.0 jest: `jest --bail --findRelatedTests --coverage "C:/Code/Git/algorithms/src/index.ts" "C:/Code/Git/algorithms/test/greet.spec.ts"`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the algorithms-utils@1.0.0 jest script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\子弈\AppData\Roaming\npm-cache\_logs\2020-07-12T14_33_51_183Z-debug.log

> algorithms-utils@1.0.0 jest C:\Code\Git\algorithms
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the algorithms-utils@1.0.0 jest script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\子弈\AppData\Roaming\npm-cache\_logs\2020-07-12T14_33_51_183Z-debug.log

> algorithms-utils@1.0.0 jest C:\Code\Git\algorithms
> jest --bail --findRelatedTests --coverage "C:/Code/Git/algorithms/src/index.ts" "C:/Code/Git/algorithms/test/greet.spec.ts"

----------|---------|----------|---------|---------|-------------------
| File       | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s   |
| ---------- | --------- | ---------- | --------- | --------- | ------------------- |
| All files  | 0         | 0          | 0         | 0         |
| ---------- | --------- | ---------- | --------- | --------- | ------------------- |
husky > pre-commit hook failed (add --no-verify to bypass)
git exited with error code 1
```

> **温馨提示**：想要了解更多关于 Jest 的生态可以查看 [awesome-jest](https://github.com/jest-community/awesome-jest)。

#### Jest 对于 ESLint 支持

`src` 目录下的源码通过配置 `@typescript-eslint/eslint-plugin` 可进行推荐规则的 ESLint 校验，为了使得 `test` 目录下的测试代码能够进行符合 Jest 推荐规则的 ESLint 校验，可以通过配置 [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) 进行支持（`ts-jest` 项目就是采用了该插件进行 ESLint 校验，具体可查看配置文件 [`ts-jest/.eslintrc.js`](https://github.com/kulshekhar/ts-jest/blob/master/.eslintrc.js#L12)），这里仍然采用推荐的规则配置：

```javascript
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // 新增推荐的 ESLint 校验规则
    // 所有规则集查看：https://github.com/jest-community/eslint-plugin-jest#rules（recommended 标识表明是推荐规则）
    "plugin:jest/recommended",
  ],
};
```

为了验证推荐规则是否生效，这里可以找一个 [`no-identical-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md) 规则进行验证：

```javascript
import greet from "@/greet";
describe("src/greet.ts", () => {
  it("name param test", () => {
    expect(greet("world")).toBe("Hello from world 1");
  });
});

// 这里输入了重复的 title
describe("src/greet.ts", () => {
  it("name param test", () => {
    expect(greet("world")).toBe("Hello from world 1");
  });
});
```

需要注意修改 `package.json` 中的 ESLint 校验范围：

```javascript
"scripts": {
  // 这里对 src 和 test 目录进行 ESLint 校验
  "lint": "eslint src test --max-warnings 0",
},
```

执行 `npm run lint` 进行单元测试的格式校验：

```javascript
PS C:\Code\Git\algorithms> npm run lint

> algorithms-utils@1.0.0 lint C:\Code\Git\algorithms
> eslint src test --max-warnings 0


C:\Code\Git\algorithms\test\greet.spec.ts
  9:10  error  Describe block title is used multiple times in the same describe block  jest/no-identical-title

✖ 1 problem (1 error, 0 warnings)

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! algorithms-utils@1.0.0 lint: `eslint src test --max-warnings 0`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the algorithms-utils@1.0.0 lint script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\子弈\AppData\Roaming\npm-cache\_logs\2020-07-13T02_25_12_043Z-debug.log
```

此时会发现 ESLint 抛出了相应的错误信息。需要注意采用此 ESLint 校验之后也会在 VS Code 中实时生成错误提示（相应的代码下会有红色波浪线，鼠标移入后会产生 Tooltip 提示该错误的相应规则信息，除此之外当前工程目录下对应的文件名也会变成红色），**此后的 Git 提交以及 Build 构建都会失败**！

> **温馨提示**：如果你希望 Jest 测试的代码需要一些格式规范，那么可以查看 [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting) 插件。

### Npm Script Hook

当你查看前端开源项目时第一时间可能会找 `package.json` 中的 `main`、`bin` 以及 `files` 等字段信息，除此之外如果还想深入了解项目的结构，可能还会查看 `scripts` 脚本字段信息用于了解项目的开发、构建、测试以及安装等流程。npm 的脚本功能非常强大，你可以利用脚本制作项目需要的任何流程工具。本文不会过多介绍 npm 脚本的功能，只是讲解一下其中用到的 [钩子](https://www.npmjs.cn/misc/scripts/#description) 功能。

目前在本项目中使用的一些脚本命令如下（就目前而言脚本相对较少，定义还蛮清晰的）：

```javascript
"lint": "eslint src test --max-warnings 0",
"test": "jest --bail --coverage",
"build": "npm run lint && npm run prettier && npm run test && rimraf dist types && gulp",
"changelog": "rimraf CHANGELOG.md && conventional-changelog -p angular -i CHANGELOG.md -s"
```

重点看下 `build` 脚本命令，会发现这个脚本命令包含了大量的继发执行脚本，但真正和 `build` 相关的只有 `rimraf dist types && gulp` 这两个脚本。这里通过 npm 的脚本钩子 `pre` 和 `post` 将脚本的功能区分开，从而使脚本的语义更加清晰（当然脚本越来越多的时候也可能容易增加开发者的认知负担）。npm 除了指定一些特殊的脚本钩子以外（例如 `prepublish`、`postpublish`、`preinstall`、`postinstall`等），还可以对任意脚本增加 `pre` 和 `post` 钩子，这里通过自定义钩子将并发执行的脚本进行简化：

```javascript
"lint": "eslint src test --max-warnings 0",
"test": "jest --bail --coverage",
"prebuild": "npm run lint && npm run prettier && npm run test",
"build": "rimraf dist types && gulp",
"changelog": "rimraf CHANGELOG.md && conventional-changelog -p angular -i CHANGELOG.md -s"
```

此时如果执行 `npm run build` 命令时事实上类似于执行了以下命令：

```javascript
npm run prebuild && npm run build
```

之后设计的脚本如果继发执行繁多，那么都会采用 npm scripts hook 进行设计。

> **温馨提示**：大家可能会奇怪什么地方需要类似于 `preinstall` 或 `preuninstall` 这样的钩子，例如查看 [husky - package.json](https://github.com/typicode/husky/blob/master/package.json)，husky 在安装的时候因为要植入 Git Hook 脚本从而带来了一些副作用（此时当然可以通过 `preinstall` 触发 Git Hook 脚本植入的逻辑）。如果不想使用 husky，那么卸载后需要清除植入的脚本从而不妨碍原有的 Git Hook 功能。 当然如果想要了解更多关于 npm 脚本的信息，可以查看 [npm-scripts](https://www.npmjs.cn/misc/scripts/) 或 [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html?utm_source=tuicool&utm_medium=referral)。

### Vuepress

#### Vuepress 背景

一般组件库或工具库都需要设计一个演示文档（提供良好的开发体验）。一般的工具库可以采用 [tsdoc](https://github.com/Microsoft/tsdoc)、[jsdoc](https://github.com/jsdoc/jsdoc) 或 [esdoc](https://github.com/esdoc/esdoc) 等工具进行 API 文档的自动生成，但往往需要符合一些注释规范，这些注释规范在某种程度上可能会带来开发负担，当然也可以交给 VS Code 的插件进行一键生成，例如 [Document This For jsdoc](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) 或 [TSDoc Comment](https://marketplace.visualstudio.com/items?itemName=kingsimba.tsdoc-comment)。

组件库 Element UI 采用 [vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader#with-vue-cli-3)(Convert Markdown file to Vue Component using markdown-it) 进行组件的 Demo 演示设计，但是配置相对复杂。更简单的方式是配合 [Vuepress](https://www.vuepress.cn/) 进行设计，它的功能非常强大，但前提是熟悉 Vue，因为可以在 Markdown 中使用 Vue 语法。当然如果是 React 组件库的 Demo 演示，则可以采用 [dumi](https://d.umijs.org/guide) 生成组件 Demo 演示文档（不知道没有更加好用的类 Vuepress 的 React 组件文档生成器， 更多和 React 文档相关也可以了解 [react-markdown](https://github.com/rexxars/react-markdown#readme)、[react-static](https://github.com/react-static/react-static) 等）。

由于之前采用过 Vuepress 设计 Vue 组件库的 Demo 演示文档，因此这里仍然沿用它来设计工具库包的 API 文档（如果你想自动生成 API 文档，也可以额外配合 tsdoc 工具）。采用 Vuepress 设计文档的主要特点如下：

- 可以在 Markdown 中直接使用 Vue（还可以自定义 Vue 文档视图组件）
- 内置了很多 Markdown 拓展
- 可以使用 Webpack 进行构建定制化配置
- 默认主题支持搜索能力
- 可以安装 Vuepress 插件（后续需要支持的 [Latex](https://www.latex-project.org/) 排版就可以利用现有的插件能力生成）
- 默认响应式

#### Vuepress 配置

先按照官方的 [快速上手](https://www.vuepress.cn/guide/getting-started.html#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B) 文档进行依赖安装和 npm scripts 脚本设置：

```javascript
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}
```

按照 Vuepress 官网**约定优于配置**的原则进行演示文档的[目录结构](https://www.vuepress.cn/guide/directory-structure.html)设计，官方的文档可能一下子难以理解，可以先设计一个最简单的目录：

```javascript
.
├── docs
│   ├── .vuepress
│   │   └── config.js       # 配置文件
│   └── README.md           # 文档首页
└── package.json
```

根据[默认主题 / 首页](https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)在 `docs/README.md` 进行首页设计：

```javascript
---
home: true
# heroImage: /hero.png
heroText: algorithms-utils
tagline: 算法与 TypeScript 实现
actionText: 开始学习
actionLink: /guide/
features:
  - title: 精简理论
    details: 精简《算法导论》的内容，帮助自己更容易学习算法理论知识。
  - title: 习题练习
    details: 解答《算法导论》的习题，帮助自己更好的实践算法理论知识。
  - title: 面题精选
    details: 搜集常见的面试题目，提升自己的算法编程能力以及面试通过率。
footer: MIT Licensed | Copyright © 2020-present 子弈
---
```

根据[配置](https://www.vuepress.cn/config/#%E9%85%8D%E7%BD%AE) 对 `docs/.vuepress/config.js` 文件进行基本配置：

```javascript
const packageJson = require("../../package.json");

module.exports = {
  // 配置网站标题
  title: packageJson.name,
  // 配置网站描述
  description: packageJson.description,
  // 配置基本路径
  base: "/algorithms/",
  // 配置基本端口
  port: "8080",
};
```

此时通过 `npm run docs:dev` 进行开发态文档预览：

```javascript
PS C:\Code\Git\algorithms> npm run docs:dev

> algorithms-utils@1.0.0 docs:dev C:\Code\Git\algorithms
> vuepress dev docs

wait Extracting site metadata...
tip Apply theme @vuepress/theme-default ...
tip Apply plugin container (i.e. "vuepress-plugin-container") ...
tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
tip Apply plugin @vuepress/search (i.e. "@vuepress/plugin-search") ...
tip Apply plugin @vuepress/nprogress (i.e. "@vuepress/plugin-nprogress") ...

√ Client
  Compiled successfully in 5.31s

i ｢wds｣: Project is running at http://0.0.0.0:8080/
i ｢wds｣: webpack output is served from /algorithms-utils/
i ｢wds｣: Content not from webpack is served from C:\Code\Git\algorithms\docs\.vuepress\public
i ｢wds｣: 404s will fallback to /index.html
success [23:13:14] Build 10b15a finished in 5311 ms!
> VuePress dev server listening at http://localhost:8080/algorithms-utils/
```

效果如下：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9097ed5468ba494db8bd74b7b607f0cf~tplv-k3u1fbpfcp-zoom-1.image)

当然除了以上设计的首页，在本项目中还会设计[导航栏](https://www.vuepress.cn/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F)、[侧边栏](https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)、使用[插件](https://www.vuepress.cn/plugin/)、[使用组件](https://www.vuepress.cn/guide/using-vue.html#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6)等。这里重点讲解一下 [Webpack 构建](https://www.vuepress.cn/config/#chainwebpack) 配置。

为了在 Markdown 文档中可以使用 `src` 目录的 TypeScript 代码，这里对 `.vuepress/config.js` 文件进行配置处理：

```javascript
const packageJson = require("../../package.json");
const sidebar = require("./config/sidebar.js");
const nav = require("./config/nav.js");
const path = require("path");

module.exports = {
  title: packageJson.name,
  description: packageJson.description,
  base: "/algorithms/",
  port: "8080",

  themeConfig: {
    nav,
    sidebar,
  },

  plugins: [
    "vuepress-plugin-cat",
    [
      "mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
    // 增加 Markdown 文档对于 TypeScript 语法的支持
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
  ],

  chainWebpack: (config) => {
    config.resolve.alias.set("image", path.resolve(__dirname, "public"));

    // 在文档中模拟库包的引入方式
    // 例如发布了 algorithms-utils 库包之后，
    // import greet from 'algorithms-utils/greet.ts' 在 Vuepress 演示文档中等同于
    // import greet from '~/src/greet.ts',
    // 其中 ~ 在这里只是表示项目根目录
    config.resolve.alias.set(
      "algorithms-utils",
      path.resolve(__dirname, "../../src")
    );
  },
};
```

> **温馨提示**：这里的 Webpack 配置采用了 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 链式操作，如果想要采用 Webpack 对象的配置方式则可以查看 [Vuepress - 构建流程 - configurewebpack](https://www.vuepress.cn/config/#configurewebpack)。

此时可以在 Vuepress 的 Markdown 文档中进行 TypeScript 引入的演示文档设计：

```javascript
# Test vuepress

::: danger 测试 Vuepress
引入 greet.ts 并进行调用测试。
:::

<template>
  <collapse title="查看答案">{{msg}}</collapse>
</template>

<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
  import greet from 'algorithms-utils/greet'
  const msg = greet('ziyi')
  export default {
    data() {
      return {
         msg
      }
    },
  }
</script>

```

启动 Vuepress 查看演示文档：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ebbac359cfd43f8be3f1bf3c114afce~tplv-k3u1fbpfcp-zoom-1.image)

可以发现在 Markdown 中引入的 `src/greet.ts` 代码生效了，最终通过 `npm run docs:build` 可以生成演示文档的静态资源进行部署和访问。

> **温馨提示**：更多本项目的 Vuepress 配置信息可查看 Commit 信息，除此之外如果还想知道更多 Vuepress 的生态，例如有哪些有趣插件或主题，可查看 [awesome-vuepress](https://github.com/vuepressjs/awesome-vuepress) 或 [Vuepress 社区](https://vuepress.github.io/zh/)。

#### 文档工具和规范

通常在书写文档的时候很多同学都不注重文档的洁癖，其实书写文档和书写代码一样需要一些格式规范。[markdownlint](https://github.com/DavidAnson/markdownlint) 是类似于 ESLint 的 Markdown 格式校验工具，通过它可以更好的规范我们书写的文档。当然 Markdown 的格式校验不需要像 ESLint 或者 Prettier 校验那样进行强约束，简单的能够做到提示和 Save Auto Fix 即可。

通过安装 Vs Code 插件 [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 并进行 Save Auto Fix 配置（在插件中明确列出了哪些规则是可以被 Fix 的）。安装完成后查看刚刚进行的测试文件：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca3dab37867a4d6f9af0189819115514~tplv-k3u1fbpfcp-zoom-1.image)

此时会发现插件生效了，但是在 Markdown 中插入 html 是必须的一个能力（Vuepress 支持的能力就是在 Markdown 中使用 Vue），因此可以通过 `.markdownlintrc` 文件将相应的规则屏蔽掉。

> **温馨提示**：如果你希望在代码提交之前或文档构建之前能够进行 Markdown 格式校验，则可以尝试它的命令行接口 [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)。除此之外，如果对文档的设计没有想法或者不清楚如何书写好的技术文档，可以查看 [技术文章的写作技巧分享](https://juejin.im/post/5ecbdff6e51d45783e17a7a1)，一定能让你有所收获。

### Github Actions

#### CI / CD 背景

> 前提提示：个人对于 CI / CD 可能相对不够熟悉，只是简单的玩过 Travis、Gitlab CI / CD 以及 Jenkins。

关于 CI / CD 的背景这里就不再过多介绍，有兴趣的同学可以看看以下一些好文：

- [Introduction to CI/CD with GitLab（中文版）](https://s0docs0gitlab0com.icopy.site/ee/ci/introduction/index.html)
- [GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- [Github Actions 官方文档](https://docs.github.com/en/actions)
- [当我有服务器时我做了什么 · 个人服务器运维指南](https://shanyue.tech/op/#%E9%A2%84%E8%A7%88)（这个系列有点佩服啊）

在 [Introduction to CI/CD with GitLab（中文版）](https://s0docs0gitlab0com.icopy.site/ee/ci/introduction/index.html) 中你可以清晰的了解到 CI 和 CD 的职责功能：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c857b6ba9c964299b7b231217ca42195~tplv-k3u1fbpfcp-zoom-1.image)

通过以下图可以更清晰的发现 Gitlab 在每个阶段可用的功能：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d36f0a4b655d4b13ae163380d57e223d~tplv-k3u1fbpfcp-zoom-1.image)

由于本项目依赖 Github，因此没法使用 Gitlab 默认集成的能力。之前的 Github 项目采用了 Travis 进行项目的 CI / CD 集成，现在因为有了更方便的 Github Actions，因此决定采用 Github 自带的 Actions 进行 CI / CD 能力集成（大家如果想更多了解这些 CI / CD 的差异请自行 Google 哈）。Github Actions 所带来的好处在于：

- 可复用的 Actions（以前你需要写复杂的脚本，现在可以复用别人写好的脚本，可以简单理解为 CI 脚本插件化）
- 支持更多的 [webhook](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)，这些当然是 Github 生态特有的竞争力

当然也会产生一些[限制](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#usage-limits)，这些限制主要是和执行时间以及次数相关。需要注意类似于 Jenkins 等支持本地连接运行，Github Actions 也支持连接到本地机器运行 workflow，因此部分限制可能不受本地运行的限制。

> **温馨提示**：本项目中使用到的 CI / CD 功能相对简单，如果想了解更多通用的 Actions，可查看 [官方 Actions](https://github.com/marketplace?type=actions) 和 [awesome-actions](https://github.com/sdras/awesome-actions)。最近在使用 Jenkins 做前端的自动化构建优化，后续可能会出一篇简单的教程文章（当然会跟普通讲解的用法会有所不同喽）。

#### Github Actions 配置

本项目的配置可能会包含以下三个方面：

- 自动更新静态资源流程
- 发布库包流程
- 提交 Pull Request 流程

这里主要讲解自动更新静态资源流程，大致需要分为以下几个步骤（以下都是在 Github 服务器上进行操作，你可以理解为新的服务环境）：

- 拉取当前 Github 仓库代码并切换到相应的分支
- 安装 Node 和 Npm 环境
- 安装项目的依赖
- 构建库包和演示文档的静态资源
- 发布演示文档的静态资源

通过查看 [官方 Actions](https://github.com/marketplace?type=actions) 和 [awesome-actions](https://github.com/sdras/awesome-actions)，找到所需的 Actions:

- [Checkout](https://github.com/actions/checkout): 从 Github 拉取仓库代码到 Github 服务器的 `$GITHUB_WORKSPACE` 目录下
- [cache](https://github.com/actions/cache): 缓存 npm
- [setup-node](https://github.com/actions/setup-node): 安装 Node 和 Npm 环境
- [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages): 在 Github 上发布静态资源

> **温馨提示**：可用的 Action 很多，这里只是设置了一个简单的流程。

在 `.github/workflows` 下新增 `mian.yml` 配置文件：

``` yml
# 以下都是官方文档的简单翻译
# 当前的 yml（.yaml） 文件是一个 workflow，是持续集成一次运行的一个过程，必须放置在项目的 .github/workflow 目录下
# 如果不清楚 .yml 文件格式语法，可以查看 https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes
# 初次编写难免会产生格式问题，可以使用 VS Code 插件进行格式检测，https://marketplace.visualstudio.com/items?itemName=OmarTawfik.github-actions-vscode

# 具体各个配置属性可查看 https: //docs.github.com/en/actions/reference/workflow-syntax-for-github-actions

# workflow 的执行仍然会受到一些限制，例如
#  - 每个 job 最多执行 6 小时（本地机器不受限制）
#  - 每个 workflow 最多执行 72 小时
#  - 并发 job 的数量会受到限制
#  - 更多查看 https: //docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#usage-limits

# name: 当前 workflow 的名称
name: Algorithms

# on:  指定 workflow 触发的 event
#
#      event 有以下几种类型
#         - webhook
#         - scheduled
#         - manual
on:
  # push: 一个 webhook event，用于提交代码时触发 workflow，也可以是触发列表，例如 [push, pull_request]

  #        workflows 触发的 event 大部分是基于 webhook 配置，以下列举几个常见的 webhook:
  #           - delete:  删除一个 branch 或 tag 时触发
  #           - fork / watch:  某人 fork / watch 项目时触发（你问有什么用，发送邮件通知不香吗？）
  #           - pull_request:  提交 PR 时触发
  #           - page_build:  提交 Github Pages-enabled 分支代码时触发
  #           - push:  提交代码到特定分支时触发
  #           - registry_package:  发布或跟新 package 时触发
  #           更多 webhook 可查看 https: //docs.github.com/en/actions/reference/events-that-trigger-workflows
  #           从这里可以看出 Git Actions 的一大特点就是 Gihub 官方提供的一系列 webhook
  push:
    # branches: 指定 push 触发的特定分支，这里你可以通过列表的形式指定多个分支
    branches:
      - feat/framework
    #
    # branches 的指定可以是通配符类型，例如以下配置可以匹配 refs/heads/releases/10
    # - 'releases/**'
    #
    # branches 也可以使用反向匹配，例如以下不会匹配 refs/heads/releases/10
    # - '!releases/**'
    #
    # branches-ignore:  只对 [push, pull_request] 两个 webhook 起作用，用于指定当前 webhook 不触发的分支
    # 需要注意在同一个 webhook 中不能和 branches 同时使用
    #
    # tags:  只对 [push, pull_request] 两个 webhook 起作用，用于指定当前 webhook 触发的 tag
    #
    # tags:
    #   - v1             # Push events to v1 tag
    #   - v1.*           # Push events to v1.0, v1.1, and v1.9 tags
    #
    # tags-ignore:  类似于 branches-ignore
    #
    # paths、paths-ignore...
    #
    # 更多关于特定过滤模式可查看 https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet
    #
    # 其他的 webhook 控制项还包括 types（不是所有的 webhook 都有 types），例如已 issues 为例，可以在 issues 被 open、reopened、closed 等情况下触发 workflow
    # 更多 webhook 的 types 可查看 https: //docs.github.com/en/actions/reference/events-that-trigger-workflows#webhook-events
    #
    # on:
    #   issues:
    #     types:  [opened, edited, closed]

  # 除此之外如果对于每个分支有不同的 webhook 触发，则可以通过以下形式进行多个 webhook 配置
  #
  # push:
  #   branches:
  #     - master
  # pull_request:
  #   branches:
  #     - dev
  #
  # 除了以上所说的 webhook event，还有 scheduled event 和 manual event
  # scheduled event:  用于定时构建，例如最小的时间间隔是 5 min 构建一次
  # 具体可查看 https: //docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events

# env:  指定环境变量（所有的 job 生效，每一个 job 可以独立通过 jobs.<job_id>.env、jobs.<job_id>.steps.env 配置）
# defaults / defaults.run: 所有的 job 生效，每一个 job 可以独立通过 jobs.<job_id>.defaults 配置
# deafults
# defaults.run

# jobs: 一个 workflow 由一个或多个 job 组成
jobs:
  # job id: 是 job 的唯一标识，可以通过 _ 进行连接，例如:  my_first_job，例如这里的 build 就是一个 job id
  build_and_deploy:
    # name: 在 Github 中显示的 job 名称
    name: Build And Deploy
    #
    # needs: 用于继发执行 job，例如当前 job build 必须在 job1 和 job2 都执行成功的基础上执行
    # needs: [job1, job2]
    #
    # runs-on: job 运行的环境配置，包括:
    #   - windows-latest
    #   - windows-2019
    #   - ubuntu-20.04
    #   - ubuntu-latest
    #   - ubuntu-18.04
    #   - ubuntu-16.04
    #   - macos-latest
    #   - macos-10.15
    #   - self-hosted（本地机器，具体可查看 https: //docs.github.com/en/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow）
    runs-on: ubuntu-latest
    #
    # outputs:  用于输出信息
    #
    # env:  用于设置环境变量
    #
    # defaults:  当前所有 step 的默认配置
    #
    # defaults.run

    # if: 满足条件执行当前 job

    # steps:  一个 job 由多个 step 组成，step 可以
    #   - 执行一系列 tasks
    #   - 执行命令
    #   - 执行 action
    #   - 执行公共的 repository
    #   - 在 Docker registry 中的 action
    steps:
      #
      # id: 类似于 job id
      #
      # if:  类似于 job if
      #
      # name:  当前 step 的名字
      - name: Checkout
        #
        # uses: 用于执行 action
        #
        #       action: 可以重复使用的单元代码
        #          - 为了 workflow 的安全和稳定建议指定 action 的发布版本或 commit SHA
        #          - 使用指定 action 的 major 版本，这样可以允许你接收 fixs 以及 安全补丁并同时保持兼容性
        #          - 尽量不建议使用 master 版本，因为 master 很有可能会被发布新的 major 版本从而破坏了 action 的兼容性
        #          - action 可能是 JavaScript 文件或 Docker 容器，如果是 Docker 容器，那么 runs-on 必须指定 Linux 环境
        #
        #         指定固定 commit SHA
        #         uses:  actions/setup-node@74bc508
        #         指定一个 major 发布版本
        #         uses:  actions/setup-node@v1
        #         指定一个 minor 发布版本
        #         uses:  actions/setup-node@v1.2
        #         指定一个分支
        #         uses:  actions/setup-node@master
        #         指定一个 Github 仓库子目录的特定分支、ref 或 SHA
        #         uses:  actions/aws/ec2@master
        #         指定当前仓库所在 workflows 的目录地址
        #         uses:  ./.github/actions/my-action
        #         指定在 Dock Hub 发布的 Docker 镜像地址
        #         uses:  docker: //alpine: 3.8
        #         A Docker image in a public registry
        #         uses:  docker: //gcr.io/cloud-builders/gradle

        # checkout action 主要用于向 github 仓库拉取源代码（需要注意 workflow 是运行在服务器上，因此需要向当前 github 拉取仓库源代码）
        # 它的功能包括但不限于
        #   - Fetch all history for all tags and branches
        #   - Checkout a different branch
        #   - Checkout HEAD^
        #   - Checkout multiple repos (side by side)
        #   - Checkout multiple repos (nested)
        #   - Checkout multiple repos (private)
        #   - Checkout pull request HEAD commit instead of merge commit
        #   - Checkout pull request on closed event
        #   - Push a commit using the built-in token

        # checkout action:  https: //github.com/actions/checkout
        uses: actions/checkout@v2
        # with: action 提供的输入参数
        with:
          # 指定 checkout 的分支、tag 或 SHA
          # 更多 checkout action 的配置可查看 https: //github.com/actions/checkout#usage
          ref: feat/ci
        # args: 用于 Docker 容器的 CMD 指令参数
        # entrypoint: Docker 容器 action（覆盖 Dockerfile 的 ENTRYPOINT） 和 JavaScript action 都可以使用
      #
      # run: 使用当前的操作系统的默认的 non-login shell 执行命令行程序
      # 运行单个脚本
      # run: npm install
      # 运行多个脚本
      # run: |
      #   npm ci
      #   npm run build
      #
      # working-directory: 用于指定当前脚本运行的目录
      # working-directory: ./temp
      #
      # shell: 可以指定 shell 类型进行执行，例如 bash、pwsh、python、sh、cmd、powershell
      # shell: bash
      #
      # env: 除了可以设置 workflow 以及 job 的 env，也可以设置 step 的 env（可以理解为作用域不同，局部作用域的优先级更高）
      #
      # comtinue-on-error: 默认当前 step 失败则会阻止当前 job 继续执行，设置 true 时当前 step 失败则可以跳过当前 job 的执行

      - name: Cache
        # cache action: https://github.com/actions/cache
        # cache 在这里主要用于缓存 npm，提升构建速率
        uses: actions/cache@v2
        # npm 缓存的路径可查看 https://docs.npmjs.com/cli/cache#cache
        # 由于这里 runs-on 是 ubuntu-latest，因此配置 ~/.npm
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      # github-script action: https://github.com/actions/github-script
      # 在 workflow 中使用 Script 语法调用 Github API 或引用 workflow context

      # setup-node action: https://github.com/actions/setup-node
      # 配置 Node 执行环境（当前构建的服务器默认没有 Node 环境，可以通过 Action 安装 Node）
      # 需要注意安装 Node 的同时会捆绑安装 npm，如果想了解为什么会捆绑，可以 Google 一下有趣的故事哦
      # 因此使用了该 action 后就可以使用 npm 的脚本在服务器进行执行啦
      # 这里也可以尝试 v2-beta 版本哦
      - name: Set Node
        uses: actions/setup-node@v1
        with:
          # 也可以通过 strategy.matrix.node 进行灵活配置
          # 这里本地使用 node 的 12 版本构建，因此这里就进行版本固定啦
          node-version: "12"

      - run: npm install
      - run: npm run build
      - run: npm run docs:build

      - name: Deploy
        # 用于发布静态站点资源
        # actions-gh-pages action: https://github.com/peaceiris/actions-gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          # GTIHUB_TOKEN：https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token
          # Github 会在 workflow 中自动生成 GIHUBT_TOKEN，用于认证 workflow 的运行
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # 静态资源目录设置
          publish_dir: ./docs/.vuepress/dist
          # 默认发布到 gh-pages 分支上，可以指定特定的发布分支
          publish_branch: gh-pages1 # default: gh-pages
          full_commit_message: ${{ github.event.head_commit.message }}
    #
    # timeout-minutes: 一个 job 执行的最大时间，默认是 6h，如果超过时间则取消执行
    #
    # strategy.matrix: 例如指定当前 job 的 node 版本列表、操作系统类型列表等
    # strategy.fail-fast
    # strategy.max-parallel
    # continue-on-error:  一旦当前 job 执行失败，那么 workflow 停止执行。设置为 true 可以跳过当前 job 执行
    # container: Docker 容器配置，包括 image、env、ports、volumes、options 等配置
    #
    # services: 使用 Docker 容器 Action 或者 服务 Action 必须使用 Linux 环境运行
```

> **温馨提示**：这里不再叙述具体的配置过程，更多可查看配置文件中贴出的链接信息。

上传 CI 的配置文件后，Github 就会进行自动构建，具体如下：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92dbefc60fa948f6bcf46db5d73fbcb5~tplv-k3u1fbpfcp-zoom-1.image)

正在构建或者构建完成后可查看每个构建的信息，如果初次构建失败则可以通过构建信息找出失败原因，并重新修改构建配置尝试再次构建。除此之外，每次构建失败 Github 都会通过邮件的形式进行通知：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b100ea8537f148df91c5f56214ee2ba5~tplv-k3u1fbpfcp-zoom-1.image)

如果构建成功，则每次你推送新的代码后，Github 服务会进行一系列流程并自动更新静态资源站点。

## 总结

希望大家看完这篇文档之后如果想使用其中某些工具能够养成以下一些习惯：

- 通篇阅读工具的文档，了解相同功能的不同工具的差异点

通篇阅读工具对应的官方 Github README 文档以及官方站点文档，了解该工具设计的核心哲学、核心功能、解决什么核心问题。前端的工具百花齐放，同样的功能可能可以采用多种不同的工具实现。如果想要在项目中使用适当的工具，就得知道这些工具的差异。完整的阅读相应的官方文档，有助于你理解各自的核心功能和差异。

- 在调研了各个工具的差异之后，选择认为合适的工具进行实践

在实践的过程中你会对该工具的使用越来越熟悉。此时如果遇到一些问题或者想要实现某些功能，在通篇阅读文档的基础上会变得相对容易。当然如果遇到一些报错信息无法解决，此时第一时间应该是搜索当前工具所对应的 Github Issues。除此之外，你也可以根据错误的堆栈信息追踪工具的源码，了解源码之后可能会对错误信息产生的原因更加清晰。

- 在完成以上两步之后，你应该总结工具的使用技巧啦，此时在此通读工具文档可能会产生不一样的收获

## 链接文档

- [使用 NPM 发布和使用 CLI 工具](https://juejin.im/post/5eb89053e51d454de54db501)
- [Top 10 JavaScript errors from 1000+ projects (and how to avoid them)](https://rollbar.com/blog/top-10-javascript-errors/)
- [前端构建：3 类 13 种热门工具的选型参考](https://segmentfault.com/a/1190000017183743)
- [Cz 工具集使用介绍](https://juejin.im/post/5cc4694a6fb9a03238106eb9)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)（强烈推荐阅读）
- [JavaScript 程序测试](https://javascript.ruanyifeng.com/tool/testing.html)
- [New to front-end testing? Start from the top of the pyramid!](https://dev.to/noriste/new-to-front-end-testing-start-from-the-top-of-the-pyramid-36kj)
- [JavaScript & Node.js Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-zh-CN.md)
- [[译] JavaScript 单元测试框架：Jasmine, Mocha, AVA, Tape 和 Jest 的比较](https://juejin.im/post/5acc721a6fb9a028b77b23c9)
- [JavaScript unit testing frameworks in 2020: A comparison](https://raygun.com/blog/javascript-unit-testing-frameworks/)
- [javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-zh-CN.md)
- [ui-testing-best-practices](https://github.com/NoriSte/ui-testing-best-practices)
- [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html?utm_source=tuicool&utm_medium=referral)
- [技术文章的写作技巧分享](https://juejin.im/post/5ecbdff6e51d45783e17a7a1)
- [Introduction to CI/CD with GitLab（中文版）](https://s0docs0gitlab0com.icopy.site/ee/ci/introduction/index.html)
- [GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- [当我有服务器时我做了什么 · 个人服务器运维指南](https://shanyue.tech/op/#%E9%A2%84%E8%A7%88)
