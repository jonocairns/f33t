import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {useInterval} from './interval';

const Image = () => {
  const [img, setImg] = useState(undefined);

  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
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
    const count = data.allFile.edges.length;

    const fetchRandom = (count) => {
      return Math.ceil(Math.random() * (count - 1))
    };

    useInterval(() => {
      setImg(data.allFile.edges[fetchRandom(count)].node.childImageSharp.fluid);
    }, 1000);


    if(!img) {
      setImg(data.allFile.edges[fetchRandom(count)].node.childImageSharp.fluid)
    }
  return <Img fluid={img} />
}

export default Image
