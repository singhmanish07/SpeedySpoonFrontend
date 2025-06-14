import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantCard from './RestaurantCard';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    handleSearch();
  }, []);

  async function handleSearch() {
    try {
      const response = await fetch(process.env.API_URI + '/api/distributor/get-restaurant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
        credentials: 'include',
      });
      const data = await response.json();
      setRestaurants(data.data);
      setFilteredRestaurants(data.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  useEffect(() => {
    const searchValue = searchInput.toLowerCase();
    const filtered = restaurants.filter(restaurant => 
      Object.values(restaurant).some(value =>
        String(value).toLowerCase().includes(searchValue)
      )
    );
    setFilteredRestaurants(filtered);
    console.log(filtered, "filtered");
  }, [searchInput, restaurants]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <section className="flex flex-col">
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        onSubmit={(e) => e.preventDefault()}
        className='center mx-auto my-10'
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Registered Restaurant"
          inputProps={{ 'aria-label': 'search registered restaurant' }}
          onChange={handleInputChange}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <div>
        {filteredRestaurants.length > 0 ? (
          <div className="flex flex-wrap justify-center md:mx-8 mx-2 text-wrap my-4 sm:flex-row flex-col">
            {filteredRestaurants.map((restaurant) => (
              <Link to={`/restaurant/${restaurant?.resid}`} key={restaurant?.resid} className="lg:w-1/3 md:w-1/2 sm:w-1/1 xs:w-2/3 xs:m-auto w-[100%] flex flex-wrap flex-row box-border">
                <RestaurantCard {...restaurant} />
              </Link>
            ))}
          </div>
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </section>
  );
};

export default Search;
