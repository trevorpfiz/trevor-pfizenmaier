/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Trevor Pfizenmaier',
    description: "Trevor Pfizenmaier's personal website",
    author: {
      name: 'Trevor Pfizenmaier',
      url: 'https://trevorpfizenmaier.com/about/',
    },
    siteUrl: 'https://trevorpfizenmaier.com',
    rssMetadata: {
      site_url: 'https://trevorpfizenmaier.com',
      feed_url: 'https://trevorpfizenmaier.com/feed',
      title: 'Trevor Pfizenmaier',
      description: "Trevor Pfizenmaier's personal website",
      image_url:
        'https://images.ctfassets.net/a5080911f65k/4PGCoXYZtbtSImuv04OCmU/27369887bbeb4496540b1ca5a7986378/sparkbang13.png?w=250&h=250',
      copyright: 'Copyright © 2019 TwinZ',
    },
    siteVerification: {
      google: '',
    },
    image: {
      src:
        'https://images.ctfassets.net/a5080911f65k/4PGCoXYZtbtSImuv04OCmU/27369887bbeb4496540b1ca5a7986378/sparkbang13.png?w=250&h=250',
      alt: 'Spark',
      height: '250',
      width: '250',
    },
    organization: {
      name: 'TwinZ',
      url: 'https://trevorpfizenmaier.com',
      logo: {
        url:
          'https://images.ctfassets.net/a5080911f65k/4PGCoXYZtbtSImuv04OCmU/27369887bbeb4496540b1ca5a7986378/sparkbang13.png?w=250&h=250',
        alt: 'TwinZ logo',
        height: '250',
        width: '250',
      },
    },
    keywords: ['trevor', 'pfizenmaier', 'portfolio'],
    social: {
      twitter: '@ElektrikSpark',
    },
    socialLinks: {
      twitter: 'https://twitter.com/ElektrikSpark',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
