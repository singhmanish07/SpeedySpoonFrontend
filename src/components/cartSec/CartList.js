import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/CartSlice";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const CartList = ({ item, updateTotalCost, cartItems }) => {
  const { itemname = '', iteminstock = '', itemdescription = '', itemimage = '', itemprice = '' } = item;

  const [counter, setCounter] = useState(1);
  const [cost, setCost] = useState(itemprice);

  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setCost((prevCost) => prevCost - itemprice);
      updateTotalCost(-itemprice);
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
    setCost((prevCost) => prevCost + itemprice);
    updateTotalCost(itemprice);
  };

  const handleRemove = async () => {
    dispatch(removeItem(item));
    updateTotalCost(-cost);

    await fetch(process.env.API_URI + '/api/user/add-array-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
      credentials: 'include',
    });
  };

  return (
    <section className="md:mx-20 mx-auto">
      <div className="flex justify-between text-center items-center px-4 my-4 border-orange-50 w-[70%] mx-auto">
        <div className="relative flex justify-start items-center text-secondary">
          <img src={itemimage} className="h-36 w-[260px] rounded-t-md" alt={itemname} />
          <div className="flex flex-col items-start text-start px-4">
            <h4 className="text-xl md:text-xl font-bold">{itemname}</h4>
            <h4 className="text-md font-semibold my-1 md:m-1">
              Stock: {iteminstock}
            </h4>
            <h4 className="text-md font-semibold my-1 md:m-1">
              {itemdescription?.slice(0, 40) + "..."}
            </h4>
            <h4 className="text-md font-semibold my-1 md:m-1">₹{itemprice} per plate</h4>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <FaMinus
            onClick={handleDecrement}
            className="text-primary text-3xl mx-2 hover:text-secondary cursor-pointer"
          />
          <span className="text-xl font-semibold px-4">{counter}</span>
          <IoMdAdd
            onClick={handleIncrement}
            className="text-primary text-3xl mx-2 hover:text-secondary cursor-pointer"
          />
          
          <MdDelete
            onClick={handleRemove} className="text-red-500 text-3xl mx-10 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default CartList;
