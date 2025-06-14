// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';

// export default function SearchRestaurant() {
//   const [searchInput, setSearchInput] = React.useState(null)
//   const restaurant = [];
//   const handleSearch = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(process.env.API_URI + '/api/distributor/get-registered-restaurant', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(),
//         credentials: 'include',
//       });
//       const apiresponse = await response.json();

//       apiresponse.map((res) => {
//         restaurant.push(res.resname);
//       })

//       const lowerCaseRestaurant = restaurant.map(name => name.toLowerCase());
//       const isRegistered = lowerCaseRestaurant.includes(searchInput.toLowerCase());
//     } catch (error) {
//       console.log("Error is: ", error.message)
//     }
//   }
//   return (
//     <Paper
//       component="form"
//       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//     >
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search Registered Restaurant"
//         inputProps={{ 'aria-label': 'search registered restaurant' }}
//         onChange={(e) => { setSearchInput(e.target.value) }}
//       />
//       <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
//         <SearchIcon />
//       </IconButton>
//     </Paper>
//   );
// }
