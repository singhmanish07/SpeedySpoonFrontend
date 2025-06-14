import Shimmer from "../Shimmer.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import RestaurantDetailsCard from "./resDetailsCard.js";
import MenuCard from "./MenuCard.js";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const RestaurantMenu = () => {

  const { resId } = useParams();
  const [restaurantDishes, setRestaurantDishes] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredMenu, setFilteredMenu] = useState([]);

  const handleSearchMenu = () => {
    if (searchInput) {
      const lowerCaseSearchInput = searchInput.toLowerCase();
      const lowerCaseRescuisine = restaurantDishes.map(item => ({
        ...item,
        itemname: item.itemname.toLowerCase()
      }));
      const filtered = lowerCaseRescuisine.filter(item => 
        item.itemname.includes(lowerCaseSearchInput)
      );
      setFilteredMenu(filtered);
    } else {
      setFilteredMenu(restaurantDishes);
    }
  };

  useEffect(() => {
    const fetchRestaurantDishes = async () => {
      try {
        const response = await fetch(process.env.API_URI + `/api/distributor/get-restaurant-dish/${resId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ resid: resId }),
          credentials: 'include',
        });
        const data = await response.json();
        setRestaurantInfo(data?.dish);
        setRestaurantDishes(data.dish.rescuisine);
        setFilteredMenu(data.dish.rescuisine); // Initialize filteredMenu with all dishes
      } catch (error) {
        console.error("Error fetching restaurant dishes:", error);
      }
    };
    fetchRestaurantDishes();
  }, [resId]);


  if (restaurantDishes === null) {
    return <Shimmer />;
  }
  
  return (
    <section className="">
      {console.log(restaurantInfo, "resInfo")}
      <RestaurantDetailsCard {...restaurantInfo} />

      <div className='w-[80%] mx-auto p-4 rounded-lg flex flex-col lg:flex-row  py-10 relative justify-between'>
        <p className='lg:text-3xl text-xl text-secondary font-bold'>All Offers from <span>{restaurantInfo?.resname}</span></p>
        <div className='flex justify-start items-center'>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 0, width: '25ch', borderRadius: '20px' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              id="standard-basic" 
              label="Search from Menu" 
              variant="standard" 
              onChange={(e) => setSearchInput(e.target.value)} 
              onKeyPress={(e) => { if (e.key === 'Enter') handleSearchMenu(); }}
            />
          </Box>
          <button 
            className='bg-primary rounded-md px-4 py-2 text-white font-semibold' 
            onClick={handleSearchMenu}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between p-5">
        {filteredMenu.map((dish) => (
          <MenuCard dish={dish} key={dish.itemname} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;
