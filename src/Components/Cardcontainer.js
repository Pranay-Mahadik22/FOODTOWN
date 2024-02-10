import Restaurantcard from "./Restaurantcard";
import data from "../utils/config";
const Cardcontainer = () => {
  const {imgURL,name, rating , deliveryTime , cuisines, location } = data[0];
  console.log("data", data[0]);
  return(
    <div className="container d-flex justify-content-between mt-4">
      <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
      <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
      <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
      <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
      <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
    </div>
  );
}




export default Cardcontainer;