import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle/SectionTitle";

const Features = () => {
  const features = [
    {
      title: "Woody",
      description: "Warm, earthy and sophisticated. Perfect for those who love the scent of nature and the outdoors.",
      image: "/src/assets/features/product_1.png",
    },
    {
      title: "Floral",
      description: "Delicate blooms and romantic bouquets. Ideal for those who appreciate the beauty of flowers.",
      image: "/src/assets/features/product_2.png",
    },
    {
      title: "Oriental",
      description: "Rich, sensual and exotic blends. A great choice for those who enjoy bold and captivating scents.",
      image: "/src/assets/features/product_3.png",
    },
    {
      title: "Fresh",
      description: "Crisp, clean and energizing. Perfect for those who love a refreshing and invigorating fragrance.",
      image: "/src/assets/features/product_4.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="features-section bg-[#e6e1f9] py-10">
      <SectionTitle title="Fragrance Families" mb="-mb-30" />
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-10 items-center">
          {/* Left Section - Description */}
          <div className="text-left max-w-lg -ml-21">
            <h2 className="text-medium font-semibold font-poppins text-gray-800 ">Discover fragrance families</h2>
            <p className="text-black text-sm font-normal text-justify font-poppins">
            Fragrance families help categorize scents into distinct groups, making it easier to find a scent that suits you. 
              From the deep, earthy notes of woody fragrances to the light, fresh citrusy blends, each family evokes unique emotions 
              and memories. Explore the essence of each category and discover your signature scent. 
            </p>
          </div>

          {/* Right Section - Image Grid */}
          <div className="slider-container features_slider w-full h-full">
            <Slider {...settings}>
              {[0, 2].map((index) => (
                <div key={index} className="grid grid-cols-1 gap-24 justify-center items-center">
                  {[features[index], features[index + 1]].map((feature, subIndex) => (
                    <div
                      key={subIndex}
                      className={`relative w-[250px] h-full rounded-lg overflow-hidden flex justify-center items-end ${
                        subIndex % 2 === 0 ? "mt-0" : "mt-5"
                      }`}
                    >
                      {/* Image */}
                      <img
                        className="w-full h-full object-contain"
                        src={feature.image}
                        alt={feature.title}
                      />
                      
                      {/* Glassmorphism Text Overlay */}
                      <div className="absolute bottom-0 w-full bg-glass p-2 backdrop-blur-md text-white transition-opacity duration-500 hover:opacity-100 opacity-90">
                        <h3 className="text-lg text-black font-arapey font-semibold">{feature.title}</h3>
                        <p className="text-sm text-[#404040]">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
