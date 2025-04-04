import { Package, MapPin, LocateFixed } from "lucide-react";

const DeliveryInfo = () => {
    return (
        <div className="w-full bg-[#fff] py-12 px-4 lg:px-0 text-center -mt-18 mb-8">
            <h2 className="text-3xl text-[#272343] font-arapey font-medium mb-4">
                Luxury, Delivered to Your Door
            </h2>
            <p className="text-lg text-[#272343] max-w-2xl mx-auto leading-relaxed">
                Our premium delivery service ensures your fragrances arrive promptly and safely.
                Select your location, and we’ll handle the rest with meticulous care.
            </p>
            <div className="w-16 border-b-2 border-[#6b6580] mx-auto mt-4"></div>

            <div className="flex justify-center gap-16 mt-8">
                <div className="text-center">
                    <Package size={48} color="#6b6580" className="mx-auto" />
                    <p className="mt-2 text-[#272343] text-sm font-medium">Select your perfumes</p>
                </div>
                <div className="text-center">
                    <MapPin size={48} color="#6b6580" className="mx-auto" />
                    <p className="mt-2 text-[#272343] text-sm font-medium">Choose delivery location</p>
                </div>
                <div className="text-center">
                    <LocateFixed size={48} color="#6b6580" className="mx-auto" />
                    <p className="mt-2 text-[#272343] text-sm font-medium">Track in real-time</p>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;
