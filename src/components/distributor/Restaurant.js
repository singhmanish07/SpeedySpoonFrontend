import React, { useEffect, useState } from 'react';
import RegisterRestaurant from './RegisterRes';
import RegisterDish from './RegisterDish';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantTicket from './RestaurantTicket';

function Restaurant() {
  const [registeredRes, setRegisteredRes] = useState([]);
  const [searchInput, setSearchInput] = React.useState(null)
  const [filterdRestaurant, setFilteredRestaurant] = React.useState(null)
  useEffect(() => {
    const fetchRegisteredRes = async () => {
      try {
        const response = await fetch(process.env.API_URI+'/api/distributor/get-registered-restaurant', {
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
        setRegisteredRes(apiresponse);

      } catch (error) {
        console.error("Error in fetching API data:", error.message);
      }
    };
    fetchRegisteredRes();
  }, []);


  const handleSearch = async (event) => {
    event.preventDefault();
    const filteredRes = registeredRes.filter((res) => {
      return res?.resname?.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredRestaurant(filteredRes);
  }


  return (
    <section className='relative'>
      <h2 className='text-4xl font-bold text-blue-900 text-center mt-10 p-2'>Registered Restaurant</h2>
      <div className=''>
        <div className='flex justify-center items-center space-x-10 my-4'>
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
          <RegisterRestaurant />
        </div>

        {filterdRestaurant ? (
          filterdRestaurant.map((restaurant) => {
            return (
              <div className='relative m-10' key={restaurant?.resid}>
                <RegisterDish resId={restaurant?.resid} />
                <RestaurantTicket restaurant={restaurant} />
              </div>
            );
          })
        ):(
          registeredRes.length > 0 ? (
            registeredRes.map((restaurant) => {
              return (
                <div className='relative m-10'>
                  <RegisterDish resId={restaurant?.resid} />
                  <RestaurantTicket restaurant={restaurant} />
                </div>
              );
            })
          ) : (
            <p>No registered restaurants found.</p>
          )
        )
        }
      </div>
    </section>
  );
}

export default Restaurant;
