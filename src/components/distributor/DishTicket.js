import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


function DishTicket({itemimage, itemname, itemprice, itemdescription}) {
  return (
    <div className='flex justify-around items-center my-10 relative '>
      <Card className="w-full max-w-[58rem] flex-row justify-start space-x-10 h-[270px] shadow-lg">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src={itemimage}
                  alt="dish image"
                  className="h-full w-full object-cover p-2"
                />
              </CardHeader>
              <CardBody className='p-2'>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                  {itemname}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                ₹{itemprice} per plate
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  {itemdescription}
                </Typography>
                <div className='absolute -bottom-1 right-0 flex justify-between space-x-10'>
                  <Link to="#" className="inline-block py-2 px-4 bg-blue-400 text-white rounded rounded-b-xl">
                    Edit Details
                  </Link>
                  <Link to="#" className="inline-block py-2 px-4 bg-red-500 text-white rounded rounded-b-xl">
                    Remove Dish
                  </Link>
                </div>
              </CardBody>
            </Card>
    </div>
  )
}

export default DishTicket
