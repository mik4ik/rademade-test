//import plugins
import {src, dest, gulp} from 'gulp';

const bs = require('browser-sync').create();

//import variables
import { dirs } from './util/paths';

export const buildFonts = () => {

    return src(dirs.src + "/fonts/**/*")

        .pipe(dest(dirs.dest + '/fonts/'))
        .pipe(bs.stream());

};