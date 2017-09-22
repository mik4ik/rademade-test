//import plugins
import {src, dest, gulp} from 'gulp';

const bs = require('browser-sync').create();

//import variables
import { dirs } from './util/paths';

export const buildImg = () => {

    return src(dirs.src + "/img/**/*")

        .pipe(dest(dirs.dest + '/img/'))
        .pipe(bs.stream());

};