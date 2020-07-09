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
