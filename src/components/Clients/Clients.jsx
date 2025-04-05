import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";

const ClientReviews = () => {
  const clientSays = [
    {
      id: 1,
      description:
        "The delivery service is exceptional. My perfume arrived beautifully packaged and on time. The scent was even better than I expected!",
      name: "Edikan Johnson",
      position: "Returning Customer",
      image: "/src/assets/images/tape1 (1).jpg", // Replace with actual customer image
    },
    {
      id: 2,
      description:
        "Absolutely love their collection! The scents last long, and I always receive compliments when I wear them.",
      name: "James Wilson",
      position: "Fashion Influencer",
      image: "/src/assets/images/tape1 (6).jpg", // No image provided
    },
    {
      id: 3,
      description:
        "Great experience! The quiz helped me find the perfect scent for my personality. Fast delivery too!",
      name: "Sophia Lee",
      position: "Beauty Blogger",
      image: "/src/assets/images/tape1 (1).jpg", // Replace with actual customer image
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1, // Only one review at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="review-section w-full py-26 flex flex-col items-center -mb-41">
     {/* Title */}
      <h2 className="text-3xl font-semibold text-[#4c2a85]">
        What Our Customers Say
      </h2>

      {/* Reviews Carousel */}
      <div className="w-full max-w-3xl px-6">
        <Slider {...settings}>
          {clientSays.map((client) => (
            <div key={client.id} className="text-center px-6">
              <p className="text-lg text-gray-700 mb-6 font-light italic">
                "{client.description}"
              </p>

              {/* Customer Profile */}
              <div className="flex flex-col items-center">
                {client.image ? (
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-12 h-12 rounded-full mb-2"
                  />
                ) : (
                  <FaUserCircle className="w-12 h-12 text-gray-400 mb-2" />
                )}
                <h4 className="text-lg font-semibold text-gray-900">
                  {client.name}
                </h4>
                <p className="text-sm text-gray-500">{client.position}</p>
              </div>
            </div>
          ))}
        </Slider>

        
      </div>
    </div>

    
  );
};

export default ClientReviews;