export default function (eleventyConfig)
{
    eleventyConfig.addPassthroughCopy({"admin/config": "admin/config"});
    eleventyConfig.addPassthroughCopy({"static/css/index.css": "static/css"});
    
    return eleventyConfig;

}