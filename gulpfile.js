import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import { dest, series, src, watch } from 'gulp';

const sass = gulpSass(dartSass);

export function js(done)
{
    src("src/js/app.js")
        .pipe(dest('dist/js'))
    done()
}

export function css(done)
{
    src("src/scss/app.scss", {sourcemaps:true}) //para saber de donde viene cada estilo se habilita el sourcemaps
        .pipe(sass().on('error',sass.logError))
        .pipe(dest('dist/css', {sourcemaps:true}))
    done()
}
export function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}
//para exportar funciones
// export function hola(done){
//     console.log('Hola desde gulpfile')
//     done()
// }

export default series(js,css,dev)