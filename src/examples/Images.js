import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="traceSVG"
          layout="constrained"
          className="example-img"
          as="div"
        />
        <br />
        <h2>gatsby image</h2>
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          width={300}
          layout="fixed"
          className="example-img"
          as="div"
        />
        <br />
        <h2>gatsby image</h2>
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="div"
        />
        <br />
        <h2>gatsby image</h2>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Images
