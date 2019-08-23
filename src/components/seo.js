/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {shuffle} from 'lodash'

function SEO({ description, lang, meta, title }) {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }

        allFile {
          edges {
            node {
              id
              publicURL
              childImageSharp {
                original {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    `
  )

      const image = shuffle(allFile.edges)[0].node;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={site.siteMetadata.title}
      description="Who doesnt like feet?"
      meta={[
        {
          property: `og:title`,
          content: 'Feet. Need I say more?',
        },
        {
          property: `og:description`,
          content: `Feed your inner podiatrist. Walk on over with those sexy sandals and procede to enjoy this perfectly curated selection of delious feet.`
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${image.childImageSharp.original.src}`,
        },
        {
          property: `og:image:width`,
          content: image.childImageSharp.original.width,
        },
        {
          property: `og:image:height`,
          content: image.childImageSharp.original.height,
        },

        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:title`,
          content: `Feet. Need I say more?`,
        },
        {
          property: `twitter:description`,
          content: `Feed your inner podiatrist. Walk on over with those sexy sandals and procede to enjoy this perfectly curated selection of delious feet.`,
        },
        {
          property: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${image.childImageSharp.original.src}`,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
