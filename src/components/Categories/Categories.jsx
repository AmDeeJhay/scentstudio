import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MoveRight, MoveLeft } from "lucide-react";
import SectionTitle from "./../SectionTitle/SectionTitle";
import { useRef } from "react";

const BestSellers = () => {
  const sliderRef = useRef(null);

  const products = [
    {
      title: "Asad",
      price: "₦25,000",
      image: "/src/assets/categories/categories_1.png",
    },
    {
      title: "Fearless",
      price: "₦15,400",
      image: "/src/assets/categories/categories_2.png",
    },
    {
      title: "Golden Oud",
      price: "₦7,500",
      image: "/src/assets/categories/categories_3.png",
    },
    {
      title: "Asad",
      price: "₦25,000",
      image: "/src/assets/categories/categories_1.png",
    },
    {
      title: "Fearless",
      price: "₦15,400",
      image: "/src/assets/categories/categories_2.png",
    },
    {
      title: "Golden Oud",
      price: "₦7,500",
      image: "/src/assets/categories/categories_3.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="best-sellers-section bg-[#fff] py-1 -mt-4">
        {/* Title & Navigation Buttons */}
        <div className="flex justify-between items-center mb-0">
          <SectionTitle title="BestSellers" />
          <div className="flex gap-2 px-20">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-2 bg-[#e6e1f9] hover:bg-[#ccc] rounded-lg"
            >
              <MoveLeft size={20} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-2 bg-[#e6e1f9] hover:bg-[#ccc] rounded-lg"
            >
              <MoveRight size={20} />
            </button>
          </div>
        </div>
      <div className="lg:container mx-auto px-10">

        {/* Product Slider */}
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-3 px-10">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-contain rounded-lg"
                  src={product.image}
                  alt={product.title}
                />
                
                {/* Glassmorphism Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-glass p-3 backdrop-blur-md flex justify-between items-center text-white">
                  <div>
                    <h4 className="text-lg font-semibold">{product.title}</h4>
                    <p className="text-sm">{product.price}</p>
                  </div>
                  <div className="flex gap-3">
                    <FaHeart className="cursor-pointer text-lg hover:text-red-500" />
                    <FaShoppingCart className="cursor-pointer text-lg hover:text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellers;
