import React from 'react'
import { Link}  from 'gatsby'
import { title } from './layout.module.css'

const Layout = ({ children, pageTitle }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <h1 className={title}>Hi, I'm Michael</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            { children }
        </div>
    )
}

export default Layout