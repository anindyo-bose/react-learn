import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Header component
 *  - Logo
 *  - Navigation
 * Body
 *  - Search
 *  - ResturantContainer
 *    - ResturantCard
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJ8giiCmiHq5_yA_zwouIXEt0mkAkDyM-ww&s' alt='logo' />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )};

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);