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

export default ResturantCard;