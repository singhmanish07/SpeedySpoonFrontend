import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/Constant";

const RestaurantCard = ({
  resid,
  resname,
  reslocation,
  restype,
  resopentime,
  resclosetime,
  rescuisine,
  resimage,
}) => {
  return (
    <div className="md:h-[400px] md:w-[320px] sm:h-[380px] sm:w-[100%] w-full overflow-hidden m-6 my-3 rounded-md space-x-2 border-[1px] border-gray-300">
      <Link to={`/restaurant/${resid}`} className="space-y-4">
        <div className="space-y-2">
          <img
            src={resimage}
            alt={resname}
            className="h-60 w-full object-cover rounded-t-md"
          />
        </div>
        <div className="space-y-2 text-secondary px-4">
          <h3 className="text-base font-semibold">
            <span className="font-medium"></span>{resname}
          </h3>
          <div className="font-medium text-sm">
            <h4 className="overflow-hidden">
              {rescuisine.map((item, index) => (
                <span key={index}>{item.itemname} </span>
              ))}
            </h4>
            <h4>
              {reslocation.length > 30 ? reslocation.slice(0, 30) + '...' : reslocation}
            </h4>
            <h4>
              {resopentime} - {resclosetime}
            </h4>
            <h4>
              {restype}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
