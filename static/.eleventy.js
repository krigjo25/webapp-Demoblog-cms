module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("static/css");

    return {
        dir: {
            input: "static/css",
            output: "_site/css"
        }
    }
}