import { IMG_URL } from "../utils/Constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Items = ({imageId}) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <section>
      <div className="image">
        <img src={IMG_URL+imageId} alt="" className="h-48"/>
      </div>
  
    </section>
  );
};
export default Items;
