import React from 'react'
import Helmet from 'react-helmet'

export default React.memo(
  ({
    author,
    canonicalUrl,
    defaultTitle,
    description,
    image,
    organization,
    title,
  }) => {
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: canonicalUrl,
        name: title,
        alternateName: defaultTitle,
        description,
      },
    ]

    const schema = baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
