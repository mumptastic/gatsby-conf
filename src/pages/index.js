import * as React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
     <h1>Home Page</h1>
     <Link to="/about">About Page</Link>
    </main>
  )
}

export default IndexPage
