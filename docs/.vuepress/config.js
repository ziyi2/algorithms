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
    config.resolve.alias.set(
      "algorithms-utils",
      path.resolve(__dirname, "../../src")
    );
    config.resolve.alias.set("@", path.resolve(__dirname, "../../src"));

    // config.module
    //   .rule("eslint")
    //   .pre()
    //   .exclude.add([/node_modules/])
    //   .add(path.resolve(__dirname, "../../src"))
    //   .end()
    //   .test(/\.ts$/)
    //   .use("eslint-loader")
    //   .loader("eslint-loader")
    //   .options({
    //     // extensions: [".ts"],
    //     // cache: true,
    //     emitWarning: true,
    //     emitError: true,
    //     // formatter: "stylish",
    //     formatter: require("eslint/lib/cli-engine/formatters/stylish"),
    //   });
  },
};
