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
 *    - Image
 *    - Name
 *    - Rating
 *    - Address
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

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <input type='text' placeholder='Search for resturants' />
                <button>Search</button>
            </div>
            <div className='resturantContainer'>
                <ResturantCard resName="Meghana Foods" cuisin="North Indian, Biryani, Asian"/>
                <ResturantCard resName="KFC" cuisin="Burger, Fast food"/>
            </div>
        </div>
    );
}

const ResturantCard = (props) => {
    return (
        <div className='resturantCard'>
            <img className='resturantImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJ8giiCmiHq5_yA_zwouIXEt0mkAkDyM-ww&s' alt='resturant' />
            <div className='resturantDetails'>
                <h3>{props.resName}</h3>
                <h4>{props.cuisin}</h4>
                <h4>Rating: 4.5</h4>
                <h4>30 minutes</h4>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);