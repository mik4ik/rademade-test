// import plugins
import {watch, parallel, series, gulp} from 'gulp';

import {dirs, sources} from './gulp_tasks/util/paths';

import bs from 'browser-sync';

// tasks list
import { buildSass } from './gulp_tasks/sass';
import { buildPug } from './gulp_tasks/pug';
import { buildFonts } from './gulp_tasks/fonts';
import { buildImg } from './gulp_tasks/img';
import { connectServer, browserSync } from './gulp_tasks/connect';



export const devWatch = () => {
  global.watch = true;
  watch(sources.styles, series(buildSass)).on('end', bs.reload);
  watch(sources.templates, series(buildPug)).on('end', bs.reload);
  watch(sources.fonts, series(buildFonts)).on('end', bs.reload);
  watch(sources.img, series(buildImg)).on('end', bs.reload);
};

// tasks build
export const build = series(buildSass, buildPug, buildFonts, buildImg , parallel(devWatch,connectServer,browserSync));
export default build;