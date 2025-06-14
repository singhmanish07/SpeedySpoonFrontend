import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DishTicket from './DishTicket';

function Dish() {
  const { resId } = useParams();
  const [dish, setDish] = useState([])
  const [filteredDish, setfilteredDish] = useState(null)
  const [searchInput, setSearchInput] = React.useState(null)

  useEffect(() => {
    const fetchRegisteredDish = async () => {
      try {
        const response = await fetch(process.env.API_URI + `/api/distributor/get-restaurant-dish/${resId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const apiresponse = await response.json();
        if (!response.ok) {
          throw new Error(apiresponse.message || 'Network response was not ok');
        }
        setDish(apiresponse?.dish?.rescuisine);

      } catch (error) {
        console.error("Error in fetching API data:", error.message);
      }
    };
    fetchRegisteredDish();
  }, []);


  const handleSearch = async (event) => {
    event.preventDefault();
    const filteredItem = dish.filter((dish) => {
      return dish?.itemname?.toLowerCase().includes(searchInput.toLowerCase());
    });
    setfilteredDish(filteredItem);
  }

  return (
    <div>
      <h2 className='text-4xl font-bold text-blue-900 text-center mt-10 p-2'>Registered Dishes</h2>
      <div className='flex justify-center items-center space-x-10 my-4 mt-10'>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Registered Restaurant"
            inputProps={{ 'aria-label': 'search registered restaurant' }}
            onChange={(e) => { setSearchInput(e.target.value) }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      {filteredDish ? (
        filteredDish.map((dish) => {
          return (
            <DishTicket {...dish} key={dish.itemname} />
          );
        })
      ) : (
        dish.length > 0 ? (
          dish.map((dish) => {
            return (
              <DishTicket {...dish} key={dish.itemname} />
            );
          })
        ) : (
          <p>No Dish is ADDED.</p>
        )
      )
      }

    </div>
  )
}

export default Dish
