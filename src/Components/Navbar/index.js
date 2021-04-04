import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import * as ROUTES from '../../Constants/routes';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <div className="nav-div">
                <div className="n-d-1">
                    <Link to={ROUTES.LANDING}><span>p</span>ersonal<span>C</span>ollection</Link>
                </div>
                <div className="n-d-2">
                    {(location.pathname === ROUTES.LANDING || location.pathname === ROUTES.SIGN_IN) 
                        && 
                        <Link to={ROUTES.SIGN_IN} className="n-d-2-link-1">Sign-In</Link>}
                    {(location.pathname === ROUTES.LANDING || location.pathname === ROUTES.CREATE_ACCOUNT) 
                        && 
                        <Link to={ROUTES.CREATE_ACCOUNT} className="n-d-2-link-2">Create Account</Link>}
                    {(location.pathname === ROUTES.HOME || location.pathname === ROUTES.VIDEOS 
                        || location.pathname === ROUTES.PHOTOS)
                        && 
                        <>
                            <Link to={ROUTES.VIDEOS} className="n-d-2-link-1">Videos</Link>
                            <Link to={ROUTES.PHOTOS} className="n-d-2-link-2">Photos</Link>
                            <Link to={ROUTES.SIGN_OUT} className="n-d-2-link-3">Sign-Out</Link>
                        </>
                    }
                </div>
            </div>
        </nav>  
    )
}

export default Navbar
