import React from 'react'
import { Link, useStaticQuery, graphql}  from 'gatsby'
import { title, navBar } from './layout.module.css'


const Layout = ({ children, pageTitle }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  title
                  description
                }
            }
        }
    `)

    return (
        <div>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <h1 className={title}>Hi, I'm Michael</h1>
            <nav className={navBar}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </nav>
            <blockquote>{data.site.siteMetadata.description}</blockquote>
            { children }
        </div>
    )
}

export default Layout