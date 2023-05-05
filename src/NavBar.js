import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to='/app' >APP</Link> <br />
            <Link to='/app1' >APP1</Link> <br />
        </div>
    )
}

export default NavBar