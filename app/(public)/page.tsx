import { BsStars } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { SiFoodpanda } from "react-icons/si";
import { BiFoodMenu } from "react-icons/bi";
import { GiCook, GiNoodles } from "react-icons/gi";
import Link from "next/link";
import { TbSalad } from "react-icons/tb";

export default function LandingPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center mt-16 relative overflow-hidden">
      {/* Decorative floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <IoFastFoodOutline className="absolute top-10 left-10 text-4xl text-gray-300 animate-float" />
        <MdOutlineEmojiFoodBeverage className="absolute top-20 right-20 text-4xl text-gray-300 animate-float-delayed" />
        <PiBowlFood className="absolute bottom-20 left-1/4 text-4xl text-gray-300 animate-float" />
        <SiFoodpanda className="absolute top-1/3 right-1/4 text-4xl text-gray-300 animate-float-delayed" />
        <BiFoodMenu className="absolute bottom-10 right-10 text-4xl text-gray-300 animate-float" />
        <GiCook className="absolute bottom-1/3 left-20 text-4xl text-gray-300 animate-float-delayed" />
        <GiNoodles className="absolute top-1/4 left-1/5 text-4xl text-gray-300 animate-float" />
        <TbSalad className="absolute top-1/2 right-30 text-4xl text-gray-300 animate-float" />
      </div>

      <div className="text-center max-w-3xl relative z-10">
        <h1 className="text-7xl font-mono text-gray-800 mb-6 tracking-tight animate-fade-in">
          Cook & Share
          <span className="block text-2xl mt-4 font-normal text-gray-600">
            Your Recipe Journey Begins Here
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Discover, Create, and Share Your Culinary Masterpieces with a
          Community of Food Enthusiasts
        </p>
      </div>
      <div className="animate-fade-in-up relative z-10">
        <div className="flex justify-center space-x-6">
          <Link href="/explore" className="flex items-center">
            <button className="bg-gray-800 text-white py-3 px-8 rounded-lg text-sm hover:bg-gray-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5">
              Explore Recipes
            </button>
          </Link>
          <button className="bg-white text-gray-800 py-3 px-8 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
            Generate with AI{" "}
            <BsStars className="animate-pulse hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
