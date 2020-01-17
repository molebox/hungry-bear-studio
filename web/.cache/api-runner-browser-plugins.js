module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"defaultLayouts":{"default":"D:\\HUNGRYBEARSTUDIO\\hungry-bear-studio\\web\\node_modules\\gatsby-theme-hbs-mdx-core\\src\\components\\posts-layout.js"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Hungry Bear Studio Web and Mobile Development","short_name":"Hungry Bear Studio","start_url":"/","background_color":"#A5A5A5","theme_color":"#A5A5A5","display":"standalone","icon":"src/assets/bear-favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
