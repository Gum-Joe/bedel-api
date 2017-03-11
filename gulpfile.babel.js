// Gulp tasks
import gulp from "gulp";
import webpack from "webpack-stream";
import config from "./webpack.config";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";

// Compile webpack
gulp.task("webpack", () => {
  return gulp.src("./server/index.js")
    .pipe(webpack(config))
    .pipe(gulp.dest("dist/"));
});

// Compile using babel
gulp.task("compile:server", () => {
  return gulp.src("server/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("api/server"));
});

gulp.task("compile:client", () => {
  return gulp.src("client/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("api/client"));
});

gulp.task("compile", ["compile:server", "compile:client"]);

// Watch for compiling
gulp.task("compile:watch", () => {
  gulp.watch("server/**/*.js", ["compile:server"]);
  gulp.watch("client/**/*.js", ["compile:client"]);
});
