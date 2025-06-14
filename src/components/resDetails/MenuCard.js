

import React from 'react';
import { addItem } from '../../utils/CartSlice';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Order from '../../pages/Order';

const MenuCard = ({dish}) => {
  const { itemname, itemimage, itemprice, itemdescription }=dish
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handleCartItem = async (item) => {
    const response = await fetch(process.env.API_URI + '/api/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
      credentials: 'include',
    });

    const apiRespose = await response.json();
    if (apiRespose.success) {
      console.log(item, "item%%%")
      dispatch(addItem(item));
      const response = await fetch(process.env.API_URI + '/api/user/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
        credentials: 'include',
      });
      const apiRespose = await response.json();
      if (apiRespose.success) {
        toast.success(apiRespose.message);
      }
    } else {
      toast.error('You are not logged in');
      navigate('/user/login');
    }
  };


  return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-[650px] my-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={itemimage} alt="Product" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{itemname}</div>
            <p className="mt-2 text-gray-500">
              {itemdescription}
            </p>

            <div className="mt-4 text-xl font-bold text-gray-900">₹{itemprice} per plate</div>
            <div className="mt-4 flex">
              {/* <button className="bg-primary text-white px-4 py-2 rounded mr-2">Order Now</button> */}
              <Order dish={dish}/>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:text-white hover:bg-primary text-base" onClick={() => handleCartItem(dish)}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MenuCard;