import Restaurantcard from "./Restaurantcard";
import CarouselCard from "./Carousel";
import { useState, useEffect } from "react";
import {RES_URL} from "../utils/config";
import Shimmer from "./Shimmer";

const Cardcontainer = ()=>{
    // const {imgURL , name ,rating , deliveryTime , cuisines, Location} = data[0];
   // console.log("restaurantCollection", masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   // const carousel = masterData[0]?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    const [restaurant, setRestaurant]= useState([]);
    const [searchText,setSearchText]=useState("")
    const [masterData , setMasterData]=useState([])
    // const [filterData, setFilterData]=useState([]);
     const [carousel , setCarousel] = useState([]);
     const [category, setActiveCategory] = useState("")
     const [errorMessage, setErrorMessage] = useState("")

    // const [count, setCount]= useState(0);

    const getData =async()=>{
        try{
    const data = await fetch(RES_URL)
    const json = await data.json();
    console.log ("responseData", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setMasterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
}
        catch(err){
            console.log("error",err);
            setErrorMessage("Their is some error while fetching the data , please try again")
        }
}

const handelSearchText =(e)=>{
    setSearchText(e.target.value)
}

const handelRating = () =>{
    const filteredData = masterData.filter(resitem => resitem?.info?.avgRating>4.5);
    if(restaurant!== masterData && category === "rating"){
    handelReset();
    }
    
    else{setRestaurant(filteredData);
        setActiveCategory("rating")
    console.log("filteredData" , filteredData);
    }
}

const handelDeliveryTime = () =>{
    const filteredData = masterData.filter(resitem => resitem?.info?.sla?.deliveryTime<30);
    if(restaurant!== masterData && category === "delivery"){
        handelReset();
    }
    else{
        setRestaurant(filteredData);
    setActiveCategory("delivery");
    console.log("filteredData" , filteredData);
    }
}

const handelCategory = () =>{
    const filteredData = masterData.filter(resitem => resitem?.info?.veg);
   if(restaurant!== masterData && category === "veg"){
    handelReset();
   }
   
    else{
    setRestaurant(filteredData);
    setActiveCategory("veg");
    console.log("filteredData" , filteredData);
    }
}

const handelReset = ()=>{
    setActiveCategory("");
    setRestaurant(masterData);
}

    useEffect(()=>{
        console.log("useEffect called")
    getData();
     },[]);
    
     
     console.log ("component rendered");

     const searchRestaurant=()=>{
        console.log("restaurant" , restaurant);
        //const filteredData = restaurant.filter(resitem => resitem?.info?.name);
        const filteredData = masterData.filter(resitem => resitem?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
        setRestaurant(filteredData);
       // setFilterData(masterData);
     }
    return(
        <>
        <div className="container text-center">
        <input type="text" id="searchBox" placeholder="🔎" value={searchText} onChange={handelSearchText}/>
        <button onClick={searchRestaurant} id="search">Search</button>
        </div>
        {/* <button onClick={handelCount}>Increse count</button>
        <h1>Count is {count}</h1> */}
        
        <div className="container pt-4">
        <div className="d-flex imgscroll">
        {
                carousel.map((card)=>{
                    return(
                        <CarouselCard
                        img ={card?.imageId}
                        />
                    )
                })
            }
        </div>
        </div>
        <div className="container text-center ">
          <button className="btn btn-sm  mx-1" id="button1" style={{backgroundColor:category==="rating" ? "green" : ""}} onClick={handelRating}>Rating 4.5+</button>
          <button className="btn btn-sm  mx-1" id="button2" style={{backgroundColor:category==="delivery" ? "green" : ""}} onClick={handelDeliveryTime}>Fast delivery</button>
          <button className="btn btn-sm  mx-1" id="button3" style={{backgroundColor:category==="veg" ? "green" : ""}} onClick={handelCategory}>Pure veg</button>
          {category && <button className="btn btn-sm btn-dark mx-1" onClick={handelReset}>Reset</button>}
        </div>
        <div className=" container d-flex justify-content-between flex-wrap align-content-start mt-4 gap-4">
            {/* <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/> */}
            
            {
                errorMessage ? 
                <div class="alert alert-success">
             <strong>Warning!</strong>{errorMessage}.
                 </div> :
                 
                restaurant.length !==0 ?
            
                restaurant.map((card, index)=>{
                    return(
                        <Restaurantcard
                        key={card?.info?.id}
                        {...card?.info}
                            
                        />
                    )
                }): <Shimmer/>
                
            }
        </div>
        </>
    )
 }

export default Cardcontainer;