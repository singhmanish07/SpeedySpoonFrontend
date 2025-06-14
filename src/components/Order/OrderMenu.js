import React from 'react'
import { toast } from 'react-toastify'

function OrderMenu({ dish }) {
    const { itemname, itemimage, itemprice, itemdescription } = dish
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-[650px] my-5">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={itemimage} alt="Product" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{itemname}</div>

                    <div className="mt-4 text-base font-semibold text-gray-900">Price:  ₹{itemprice}</div>
                    <div className="mt-4 text-base font-semibold text-gray-900">GST: ₹{(itemprice / 18).toFixed(2)} </div>
                    <div className="mt-4 text-lg font-semibold text-gray-900">Total: <span className='font-bold'> ₹{(parseFloat(itemprice) + parseFloat((itemprice / 18).toFixed(2))).toFixed(2)}</span> </div>
                    <div className="mt-4 flex">
                        <button className="bg-primary text-white px-4 py-2 rounded mr-2 hover:bg-green-700" onClick={()=>toast.success("Order Placed")}>PLACE ORDER</button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:text-white hover:bg-primary text-base">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderMenu
