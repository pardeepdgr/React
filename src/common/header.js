import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return(
        <nav>
            <IndexLink to='/' activeClassName='active'>Home</IndexLink>
            {" | "}
            <Link to='/counter' activeClassName='active'>Counter</Link>
        </nav>
    );
}

export default Header;