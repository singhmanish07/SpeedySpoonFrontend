import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchMenu({ resname, rescuisine }) {
    const lowerCaseDishes = rescuisine.map(name => name.toLowerCase());
    

    return (
        <div className='w-[80%] mx-auto p-4 rounded-lg flex flex-col lg:flex-row  py-10 relative justify-between'>
            <p className='lg:text-3xl text-xl text-secondary font-bold'>All Offers from <span>{resname}</span></p>
            <div className='flex justify-start items-center'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 0, width: '25ch', borderRadius: '20px' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Search from Menu" variant="standard" />
                </Box>
                <button className='bg-primary rounded-md px-4 py-2 text-white font-semibold' onClick={handleSearchMenu}>Search</button>
            </div>
        </div>
    );
}
