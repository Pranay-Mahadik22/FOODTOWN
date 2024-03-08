// import data from "../utils/config"
import { IMG_URL } from "../utils/config"

const Restaurantcard = ({cloudinaryImageId ,name,avgRating,sla,cuisines,areaName})=>{
  return(
      <div className="custom-card ">
          <div>
              <img src={IMG_URL+cloudinaryImageId} 
              alt="restroimg" 
              width="100%"
              style={{height:"150px",
              objectFit: "cover"}}/>
              
          </div>
          <div className="cuisines font">{name}</div>
          <div className="d-flex justify-content-between font">
              <div className="bg-success text-white px-2 font">⭐{avgRating}/10</div>
              <div>{sla?.deliveryTime} mins</div>
          </div>
          <div className="text-secondary cuisines">{cuisines}</div>
          <div className="text-secondary">📍{areaName}</div>
      </div>
  )
}

export default Restaurantcard

