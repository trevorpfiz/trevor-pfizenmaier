import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import SchemaOrg from './SchemaOrg'

function SEO({
  title,
  description,
  meta,
  image: metaImage,
  keywords,
  // extra
}) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
            url
          }
          siteUrl
          siteVerification {
            google
          }
          image {
            src
            alt
            height
            width
          }
          organization {
            name
            url
            logo {
              url
              width
              height
            }
          }
          keywords
          social {
            twitter
          }
          socialLinks {
            twitter
          }
        }
      }
    }
  `)

  const metaDescription = description || siteMetadata.description
  const image = metaImage ? metaImage : siteMetadata.image

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title={title}
        titleTemplate={`%s | ${siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: `keywords`,
            content: keywords || siteMetadata.keywords.join(`, `),
          },
          {
            name: `author`,
            content: siteMetadata.author.name,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:url`,
            content: siteMetadata.siteUrl,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:site_name`,
            content: siteMetadata.title,
          },
          {
            name: `twitter:creator`,
            content: siteMetadata.social.twitter,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: 'google-site-verification',
            content: siteMetadata.siteVerification.google,
          },
        ]
          .concat(
            image
              ? [
                  {
                    property: 'og:image',
                    content: image.src,
                  },
                  {
                    property: 'og:image:alt',
                    content: image.alt,
                  },
                  {
                    property: 'og:image:width',
                    content: image.width,
                  },
                  {
                    property: 'og:image:height',
                    content: image.height,
                  },
                  {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                  },
                  {
                    name: 'twitter:image',
                    content: image.src,
                  },
                  {
                    name: 'twitter:image:alt',
                    content: image.alt,
                  },
                ]
              : [
                  {
                    name: 'twitter:card',
                    content: 'summary',
                  },
                ]
          )
          .concat(
            // handle Secure Image
            image && image.src.indexOf('https') > -1
              ? [
                  {
                    name: 'twitter:image:secure_url',
                    content: image.src,
                  },
                  { property: 'og:image:secure_url', content: image.src },
                ]
              : []
          )
          .concat(meta)}
      >
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <script
          async
          src="//cdn.embedly.com/widgets/platform.js"
          charset="UTF-8"
        ></script>
      </Helmet>
      <SchemaOrg
        title={title}
        image={image.src}
        description={metaDescription}
        canonicalUrl={siteMetadata.siteUrl}
        author={siteMetadata.author}
        organization={siteMetadata.organization}
        defaultTitle={siteMetadata.title}
      />
    </>
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
  isBlogPost: PropTypes.bool,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default SEO
