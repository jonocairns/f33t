import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {shuffle} from 'lodash';

const Image = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

    const items = shuffle(data.allFile.edges);

  return (
    <div className="card-columns">
      {items.map((e, i) => (
        <div key={e.node.id} className="card">
          <Img fluid={e.node.childImageSharp.fluid} className="card-img-top" />
        </div>
      ))}
    </div>
  );
}

export default Image
