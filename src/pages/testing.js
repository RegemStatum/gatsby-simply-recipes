import React from "react"
import { graphql } from "gatsby"

const Testing = ({ data }) => {
  return (
    <div>
      <p>{data.site.info.author}</p>
      <h2>testing</h2>
    </div>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          name
          age
        }
      }
    }
  }
`
export default Testing
