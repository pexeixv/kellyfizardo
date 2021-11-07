module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('_src/sass/styles.css')
    eleventyConfig.addPassthroughCopy('_src/img')
    eleventyConfig.addPassthroughCopy('_src/js')
    eleventyConfig.addPassthroughCopy('_src/font')
    eleventyConfig.addPassthroughCopy('_src/_redirects')
    eleventyConfig.addPassthroughCopy('_src/_data/posts.json')
    eleventyConfig.addPassthroughCopy('_src/sitemap.xml')

    eleventyConfig.addFilter('lowerAndHyphen', string => string.toLowerCase().replace(/\s/g, "-"))
    return {
        dir: {
            input: '_src',
            output: '_site'
        }
    }
}