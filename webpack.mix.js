const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application.
 |
 */

 mix.setPublicPath('public')
 	.options({
 		processCssUrls: false,
 	})
 	.less('resources/less/style.less', 'css')
 	.copy('resources/js/lib/*.js', 'public/js/lib')
 	.copy('resources/js/*.js', 'public/js')
 	.sourceMaps();
