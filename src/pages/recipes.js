import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"

const recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipes
