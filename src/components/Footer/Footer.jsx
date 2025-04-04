import { Armchair, Banknote, CreditCard, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px] relative">
                <div className="lg:container mx-auto">
                    <div className="grid grid-cols-4">
                        <div>
                            {/* Logo Wrapper */}
                            <div className="logo_wrapper mb-7">
                                <Link
                                    to="/"
                                    className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
                                >
                                    <Armchair size="2rem" color="#029fae" /> comforty
                                </Link>
                            </div>
                            <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellat vero nulla!
                                Quibusdam, reiciendis maiores fugiat atque aliquam molestiae vero?
                            </p>
                            <div className="footer_social flex items-center gap-3">
                                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]">
                                    <Facebook size="1.5rem" color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Twitter size="1.5rem" color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Instagram size="1.5rem" color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Youtube size="1.5rem" color="#007580" />
                                </Link>
                            </div>
                        </div>
                        {/* Other Footer Sections */}
                        {/* ... */}
                    </div>
                </div>
            </div>
            <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-base text-[#9a9caa] font-normal font-inter">
                                @ 2025 Blogy- Designed & Developed by{" "}
                                <span className="text-[#272343]">Lifeonthecode</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <p className="flex items-center gap-2 text-[#9a9caa] text-xl">
                                Bank Note <Banknote size="2rem" />
                            </p>
                            <p className="flex items-center gap-2 text-[#9a9caa] text-xl">
                                Credit Card <CreditCard size="2rem" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;