import Banner from "../../components/Banner/Banner";
import Delivery from "../../components/Delivery/Delivery";
import Quiz from "../../components/Quiz/Quiz";
import Categories from "../../components/Categories/Categories";
import Clients from "../../components/Clients/Clients";
// import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter"
import Luxury from "../../components/Luxury/Luxury";
import Features from './../../components/Features/Features';
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* Banner Component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner></Banner>
      </div>

      {/* delivery component */}
      <div className="w-full min-h-[#150px] bg-white shadow-md p-7">
        <Delivery></Delivery>
      </div>

      

      {/* features component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Features></Features>
      </div>


      {/* features component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Categories></Categories>
      </div>

      {/* Recent component  */}
      <div className="w-full flex items-center justify-center -mt-8 pb-[80px] pt-[80px]">
        <Luxury></Luxury>
      </div>

      {/* quiz component  */}
      <div className="brand flex items-center h-[171px] justify-center w-full mt-22 mb-22">
        <Quiz></Quiz>
      </div>

      {/* product component  */}
      {/* <div className="w-full flex items-center justify-center pb-[80px]">
        <Product></Product>
      </div> */}

      {/* client say component  */}
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px] pt-[80px]">

        <Clients></Clients>

      </div>

      {/* newsletter component  */}
      <div className="w-full flex items-center justify-center -mt-8 pb-[80px] pt-[80px]">
        <Newsletter></Newsletter>
      </div>

      {/* footer component  */}
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px] pt-[80px]">

        <Footer></Footer>

      </div>


    

    </div>
  );
};

export default Home;
