const clean = require("gulp-clean");
const concat = require("gulp-concat");
const gulp = require("gulp");

gulp.task("declarations", () => {
  gulp
    .src("./dist/types/**/*.d.ts")
    .pipe(concat("index.d.ts"))
    .pipe(gulp.dest("./dist/"));

  gulp.src("./dist/types").pipe(clean());
});
