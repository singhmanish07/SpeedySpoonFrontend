import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import EditRes from './EditRes';

function RestaurantTicket({ restaurant }) {
    const { resid, resimage, resname, reslocation, restype, rescuisine, resopentime, resclosetime, resowner } = restaurant
    return (
        <div className='relative'>
            <Link to={`/distributor/restaurant-dish/${resid}`}>
                <div className='flex justify-around items-center'>
                    <div className='flex justify-around items-center relative'>
                        <Card className="w-[1000px] flex-row justify-start space-x-10 shadow-xl">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                                <img
                                    src={resimage}
                                    alt="Restaurant Image"
                                    className="h-[300px] w-full object-cover p-2"
                                />
                            </CardHeader>
                            <CardBody className='p-2'>
                                <Typography variant="h4" color="gray" className="mb-4 uppercase">
                                    {resname}
                                </Typography>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    {reslocation}
                                </Typography>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    {restype}
                                </Typography>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    {console.log(rescuisine, "###res")}
                                    {rescuisine.map((cuisine) => (cuisine.itemname))}
                                </Typography>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    {resopentime}-{resclosetime}
                                </Typography>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    Owner: {resowner}
                                </Typography>

                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Link>

            <div className='absolute -bottom-1 right-40 flex justify-between space-x-10'>
                <Link to={''}>
                    <EditRes className="inline-block py-2 px-4 bg-primary text-white rounded rounded-b-xl" preresvdetails={restaurant} />
                </Link>
                <Link to="#" className="inline-block py-2 px-4 bg-red-500 text-white rounded rounded-b-xl">
                    Remove Restaurant
                </Link>
            </div>
        </div>
    )
}

export default RestaurantTicket
