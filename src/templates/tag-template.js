import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTemlate = ({ data, pageContext: { tag } }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <SEO title={tag}></SEO>
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData
        }
      }
    }
  }
`

export default TagTemlate
