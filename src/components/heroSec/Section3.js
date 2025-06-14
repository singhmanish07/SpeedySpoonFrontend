import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection3 = () => {
  const [restaurants, setRestaurants] = useState(null);

  const fetchRestaurant = async () => {
    console.log("Called")
    try {
      const response = await fetch(process.env.API_URI + '/api/distributor/get-restaurant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        HeroSection3: JSON.stringify(),
        credentials: 'include',
      });
      const data = await response.json();
      setRestaurants(data.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };
  useEffect(()=>{
    fetchRestaurant();
  },[])
  
  if (restaurants === null) {
    return <Shimmer />;
  }

  return (
    <section className="text-secondary">
      <h2 className="text-2xl font-bold mb-6 px-12">Popular Restaurants</h2>
      <div className="flex flex-wrap justify-center md:mx-8 mx-2 text-wrap my-4 sm:flex-row flex-col">
        {restaurants?.map((restaurant) => (
          <Link to={`/restaurant/${restaurant?.resid}`} key={restaurant?.resid} className="lg:w-1/3 md:w-1/2 sm:w-1/1 xs:w-2/3 xs:m-auto w-[100%] flex flex-wrap flex-row box-border">
            <RestaurantCard {...restaurant} key={restaurant.resid} />
          </Link>
        ))}

      </div>
    </section>
  );
};

export default HeroSection3;
