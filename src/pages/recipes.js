import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes"></SEO>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipes
