import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>    
    <ul>
      {data.allStrapiBlog.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.description}</p>
        </li>
      ))}
    </ul>    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
         query IndexQuery {
           allStrapiBlog {
             edges {
               node {
                 id
                 title
                 description
               }
             }
           }
         }
       `
