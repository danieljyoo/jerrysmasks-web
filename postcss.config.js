module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './public/**/*.html'
      ],
      // https://tailwindui.com/documentation
      defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [] 
    })
  ]
}