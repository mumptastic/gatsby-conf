import React from 'react'
import { Link}  from 'gatsby'
import { title } from './layout.module.css'
import { navBar } from './layout.module.css'

const Layout = ({ children, pageTitle }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <h1 className={title}>Hi, I'm Michael</h1>
            <nav className={navBar}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            
            { children }
        </div>
    )
}

export default Layout