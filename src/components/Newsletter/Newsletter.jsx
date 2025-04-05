const Newsletter = () => {
    return (
      <div className="bg-[#EDE7F6] p-32 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        {/* Left Section - Text & Input */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#272343]">Join Our Fragrance Journey</h2>
          <p className="text-[#636270] mt-2 text-sm md:text-base">Subscribe to our monthly newsletter and discover new signature scents.</p>
          
          <div className="mt-4 flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none" 
            />
            <button className="bg-[#5F3D9A] text-white px-6 py-2 text-sm md:text-base font-medium">Subscribe</button>
          </div>
        </div>
        
        {/* Right Section - Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img 
            src="/src/assets/newsletter_image.png" 
            alt="Perfume Bottles" 
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  