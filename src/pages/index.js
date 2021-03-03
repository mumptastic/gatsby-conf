import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
     <h2>Home Page</h2>
     <StaticImage src="https://pbs.twimg.com/media/Evkn6fRWgAgxOWe?format=jpg&amp;name=4096x4096" alt="Laurie's doggo sitting in the sun." />
    </Layout>
  )
}

export default IndexPage
