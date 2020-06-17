import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiBlog.title}</h1>
    <p>{data.strapiBlog.description}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiBlog(id: { eq: $id }) {
      title
      description
    }
  }
`
