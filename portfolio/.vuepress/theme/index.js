module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    // "@silvanite/markdown-classes",
    ["@silvanite/tailwind", {
      config: './tailwind.config.js',
      purgecss: {
        enabled: true,
      },
    }]
  ]
}
