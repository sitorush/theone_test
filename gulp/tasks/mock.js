'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('mock', function() {

    return gulp.src(config.mock.src)
        .pipe(changed(config.mock.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.mock.dest))
        .pipe(browserSync.stream());

});
