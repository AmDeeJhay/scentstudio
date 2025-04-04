import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";

const ClientReviews = () => {
  const clientSays = [
    {
      id: 1,
      description:
        "This is the best fragrance store I've ever shopped from! The quality, packaging, and customer service exceeded my expectations.",
      name: "Emily Carter",
      position: "Marketing Director",
    },
    {
      id: 2,
      description:
        "Absolutely love their collection! The scents last long, and I always receive compliments when I wear them.",
      name: "James Wilson",
      position: "Fashion Influencer",
    },
    {
      id: 3,
      description:
        "Great experience! The quiz helped me find the perfect scent for my personality. Fast delivery too!",
      name: "Sophia Lee",
      position: "Beauty Blogger",
    },
    {
      id: 4,
      description:
        "A luxurious experience from start to finish! The fragrance recommendations were spot on.",
      name: "Daniel Foster",
      position: "CEO, Luxe Brands",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:container mx-auto px-6 py-16">
      <SectionTitle title="What Our Clients Say" mb="mb-12" />

      <div className="slider-container w-full">
        <Slider {...settings}>
          {clientSays.map((client) => (
            <div key={client.id} className="p-6">
              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-105 duration-300">
                <p className="text-lg text-gray-700 mb-6 font-light italic">
                  "{client.description}"
                </p>
                <div className="flex items-center gap-4">
                  <FaUserCircle className="text-gray-500 text-4xl" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-500">{client.position}</p>
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

export default ClientReviews;
