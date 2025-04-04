import { Link, NavLink } from "react-router";
import { SprayCan,  User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="font-poppins fixed top-0 left-0 w-full z-50 bg-[#272343] shadow-md">
      {/* navbar middle */}
      <div className="navbar_middle flex items-center justify-between h-[65px] px-24">
        <div className="lg:container flex items-center justify-between">
          <div className="logo_wrapper flex items-center gap-2">
            <Link to="/" className="text-[#ffd501] text-2xl font-medium font-poppins capitalize flex items-center gap-2">
              <SprayCan size="2rem" color="#ffd501" />
              Scent99
            </Link>
          </div>

          {/* navbar bottom */}
          <div className="navbar_bottom flex items-center justify-center w-100 h-[50px] border rounded-full bg-white border-[#000]">
            <nav className="flex items-center gap-5">
              <NavLink to="/" className="text-sm text-[#029fae] font-poppins font-medium capitalize">Home</NavLink>
              <NavLink to="/product" className="text-sm text-[#029fae] font-poppins font-medium capitalize">Products</NavLink>
              <NavLink to="/categories" className="text-sm text-[#029fae] font-poppins font-medium capitalize">Categories</NavLink>
              <NavLink to="/about" className="text-sm text-[#029fae] font-poppins font-medium capitalize">About</NavLink>
              <NavLink to="/contact" className="text-sm text-[#029fae] font-poppins font-medium capitalize">Contact</NavLink>
            </nav>
          </div>

          {/* navbar middle right */}
          <div className="navbar_middle_right -px-8">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-2 rounded-full flex items-center gap-1">
                <User size="1rem" /> Sign up
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>

            {/* <button className="btn capitalize rounded-full flex items-center gap-1">
              <Heart size="1rem" />
            </button>

            <button className="btn capitalize rounded-full flex items-center gap-1">
              <ShoppingCart size="1rem" />
              cart <div className="badge badge-sm rounded-full bg-[#029fae]">2</div>
            </button> */}

           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;