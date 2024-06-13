import ResturantCard from "./ResturantCard";

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
export default Body;