import { CARD_IMG } from "../utils/urls";

 const Rescard = (props) => {
    const { resdata } = props;
    const{
        name,
        sla,
        cuisines,
        avgRating
    }=resdata?.info;
    return (
        <div className="restaurant">

            <img className="restimg" src={CARD_IMG+resdata.info.cloudinaryImageId}  />

                <h2>{name}</h2>

                  <h4>{cuisines.join(", ")}</h4>
                  <div className="details">
                    <h3>{ sla.deliveryTime } mins</h3>
                    <h3>{avgRating} ⭐</h3>
            </div>

        </div>
    )
}
export default Rescard;
