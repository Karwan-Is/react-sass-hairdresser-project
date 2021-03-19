import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isDown, setIsDown] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setIsDown(!isDown)
    }

    return (
        <div className="header">
            <nav>
                <div className="nav-logo"><Link to='/' className="nav-logo">Hairdressers</Link></div>
                <ul className="dropdown">
                    <div className="drop-btn" onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={isDown ? "dropdown-content show-dropdown" : "dropdown-content hide-dropdown"}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='booking'>Booking</Link></li>
                        <li className="nav-right"><Link to='/register'>Register</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header