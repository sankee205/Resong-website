import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1000){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    useEffect(()=>{
        showButton();
        
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar" >
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    {<img src = "/images/yes_logo_edited.png" alt='' height='80'/>}
                    Resong
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/references" className='nav-links' onClick={closeMobileMenu}>
                                References
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button className='btn' buttonStyle='btn--outline' link='/contact' onClick={closeMobileMenu}>
                        Contact
                    </Button>}
                </div>
            </nav>
        </div>
    );
}

export default Navbar
