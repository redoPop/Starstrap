import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import inject from 'gulp-inject';
import makeSass from 'gulp-sass';
import sassCompiler from 'sass';

const sass = makeSass(sassCompiler);

const source = () => (
  gulp.src('source/styles/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
);

const mdCSS = css => `\`\`\`css\n${css}\n\`\`\``;
const transform = (_, file) => mdCSS(String(file.contents));

gulp.task('default', () => (
  gulp.src('README.md')
    .pipe(inject(source(), { transform }))
    .pipe(gulp.dest('./'))
));
