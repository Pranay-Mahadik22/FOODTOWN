
import { IMG_URL } from "../utils/config";
const CarouselCard = ({img, name}) =>{
    return(
        <div className="Carousel">
            <div>
                <img src={IMG_URL+img}
                alt="restroimg"
                width="150px"
                style={{height:"auto",
            objectFit:"cover"}}
                />
                            </div>
        </div>
    )
}

export default CarouselCard;