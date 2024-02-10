
const Restaurantcard = ({url, name, rating, deliveryTime, cuisines, location }) => {
    // console.log("props",props);

    return(
        <div className="custom-card">
            <div>
                <img src={url}
                alt="resimage"
                width="100%"
                style={{height:"200px",
                objectfit:"cover"}}/>
            </div> 
            <p>{name}</p>
                <div className="d-flex justify-content-between">
                    <p>{rating}/10</p>
                    <p>{deliveryTime} min</p>
                </div>
                <p>{cuisines}</p>
                <p>{location} </p> 
             </div>
    );

}


export default Restaurantcard;