module.exports = {
  siteMetadata: {
  title: 'Teleport Gatsby Default Starter',
  description: 'Kick off your next, great Gatsby project.',
  author: 'teleportHQ',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  {
  resolve: 'gatsby-source-filesystem',
  options: {
  name: 'images',
  path: `${__dirname}/static/playground_assets`
  },
  resolve: 'gatsby-plugin-snipcartv3',
  options: {
  apiKey: 'ZjBiMTY5MjQtOGQ5OS00YTA2LTg4YzEtN2E3MTUxZjU1ODY0NjM3NDY3MDA5MTQwMjM3Nzk1'
  }
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  "gatsby-plugin-loadable-components-ssr",
  ],
  }