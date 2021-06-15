let mix = require("laravel-mix");

mix
  .options({
    processCssUrls: false,
  })
  .js("src/app.js", "js")
  .sass("src/app.scss", "css")
  .copyDirectory("src/img", "dist/img")
  .setPublicPath("dist");
