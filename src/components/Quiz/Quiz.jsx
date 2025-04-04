
// const Brand = () => {

//     const brands = [
//         {
//             id: 1,
//             image: "/src/assets/brands/brand_1.png"
//         },
//         {
//             id: 2,
//             image: "/src/assets/brands/brand_2.png"
//         },
//         {
//             id: 3,
//             image: "/src/assets/brands/brand_3.png"
//         },
//         {
//             id: 4,
//             image: "/src/assets/brands/brand_4.png"
//         },
//         {
//             id: 5,
//             image: "/src/assets/brands/brand_5.png"
//         },
//         {
//             id: 6,
//             image: "/src/assets/brands/brand_6.png"
//         }, 
//         {
//             id: 7,
//             image: "/src/assets/brands/brand_7.png"
//         },
 
//     ]

//     return (
//         <div className="lg:container mx-auto">
//             <div className="grid grid-cols-7 items-center gap-5 px-4">
//                 {
//                     brands?.map((brand) => (
//                         <div key={brand?.id} className="brand_item">
//                             <img className="w-auto h-auto" src={brand?.image} alt="brand" />
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Brand;

const FragranceQuiz = () => {
  return (
    <div
      className="relative bg-cover w-full bg-center py-16 px-6 mb-28 text-center"
      style={{ backgroundImage: "url('/src/assets/features/product_1.png')" }}
    >
      <div className="bg-white/40 backdrop-blur-md py-12 px-6 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-[#2D1B50] font-serif font-semibold">
          Not Sure Which Fragrance <br /> Is Right For You?
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Take our interactive scent profile quiz to discover perfumes
          that match your personality, preferences, and lifestyle.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#4C2A85] text-white text-sm font-medium rounded-md shadow-md">
          Find your scent
        </button>
      </div>
    </div>
  );
};
 
export default FragranceQuiz;
 
