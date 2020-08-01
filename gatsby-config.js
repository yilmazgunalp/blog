module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
        {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Reinventing the wheel`,
    author: `yilmaz gunduzalp`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/WebDevOs`,
      },
      {
        name: `github`,
        url: `https://github.com/yilmazgunalp`,
      },
    ],
  },
}
