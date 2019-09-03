# 如何使用该仓库

## :tada: 克隆项目

克隆项目后切换到`dev`分支

``` javascript
git clone https://github.com/ziyi2/algorithms.git
```

## :heavy_plus_sign: 安装依赖

``` javascript
npm install
```

## :rotating_light: 运行ESLint

``` javascript
npm run lint
```

## :white_check_mark: 执行测试

会在`coverage`目录下生成测试覆盖率报告

``` javascript
npm test
```

## :construction: 启动静态网站

启动静态网站会开启ESLintr热校验

``` javascript
npm run dev
```

## :bookmark: 生成静态HTML文件

会在`.vuepress/dist`目录下生成静态资源包

``` javascript
npm run build
```

## :rocket: 部署

生成静态HTML文件并更新到远程的`gh-pages`分支上

``` javascript
npm run deploy
```

## :package: 构建npm包

会在`lib`目录下生成平级目录结构的[API](/algorithms/api/_comparator)使用包

``` javascript
npm run lib
```

## :loud_sound: 生成日志

会在项目根目录下生成`CHANGELOG.md`日志文件

``` javascript
npm run changelog
```