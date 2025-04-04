
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {

    const products = [
        {
            id: 1,
            title: "Discover your Signature Scent",
            subTitle: "Explore our curated collection of premium<br />fragrances delivered to your doorstep",
            image: "/src/assets/images/smallperf.png",
        },
        {
            id: 2,
            title: "Discover your Signature Scent",
            subTitle: "Explore our curated collection of premium<br />fragrances delivered to your doorstep",
            image: "src/assets/images/banner_image.png"
        },
        {
            id: 3,
            title: "Discover your Signature Scent",
            subTitle: "Explore our curated collection of premium<br />fragrances delivered to your doorstep",
            image: "src/assets/images/banner_image.png"
        },
        {
            id: 4,
            title: "Discover your Signature Scent",
            subTitle: "Explore our curated collection of premium<br fragrances delivered to your doorstep",
            image: "src/assets/images/banner_image.png"
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="lg:container">
            <div className="slider-container slider_container">
                <Slider {...settings}>
                    {products?.map((product) => (
                        <div key={product?.id} className="banner_slide_item flex items-center justify-between px-24">

                            {/* banner text  */}
                            <div className="banner_text max-w-[40%]">
                                <h3 className="text-5xl text-[#272343] font-arapey capitalize max-w-[747px] w-full font-medium mb-1">{product?.title}</h3>
                                <p className="text-sm font-inter text-[#272343] Initial mb-2 font-medium" dangerouslySetInnerHTML={{ __html: product?.subTitle }}></p>                                    
                                <button className="max-w-[135px] w-full flex items-center justify-center gap-2 h-[40px] bg-[#029fae] rounded-full capitalize text-white text-xs font-poppins font-semibold cursor-pointer">shop now <MoveRight size="1.3rem"/></button>
                            </div>


                            {/* banner image  */}
                            <div className="banner_image  w-full h-full flex items-center justify-end max-w-[40%]">
                                <img src={product?.image} alt={product?.title} className="w-full h-full object-cover" />
                            </div>

                        </div>
                    ))} 
                </Slider>
            </div>
        </div>
    );
};

export default Banner;