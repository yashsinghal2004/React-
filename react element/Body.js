import Rescard from "./Rescard";
import { useEffect, useState } from "react";
import resobj from "../utils/Resobj";



const Body = () => {
  //state variable:
  const [rest, setRest]= useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async ()=>{    
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6652559&lng=77.38197749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    
    
    const json=await data.json();
    //console.log(json);
    //optional chaining:
    //console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRest(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

    return (
        <div className="searrate"> 

            <div className="filter">
            <button className="filterbtn" onClick={()=>{
              const filteredlist=rest.filter((res)=>res.info.avgRating>4);
              setRest(filteredlist);
               }}>Top Rated Restaurants</button>
            </div>
            <div className="allrest">
              {
                rest.map((restaurant)=>(
                  <Rescard key={restaurant.info.id} resdata={restaurant} />
                ))
              }
            </div>
        </div>

    )
}
export default Body;