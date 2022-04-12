import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="flex container mx-auto gap-6 h-[75vh] md:h-[90vh]  md:flex-row flex-col items-center mt-10">
      <div className="banner-text w-1/2 flex items-center">
        <div>
          {" "}
          <h1 className="text-5xl font-bold mb-5">
            Become a <span className="text-blue-600">Coding Hero</span>
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            expedita vitae eveniet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, veritatis.
          </p>
          <button onClick={() => navigate('/signup')} className="bg-blue-600 text-white py-2 px-8 mt-5 rounded-md font-semibold text-lg">Start Enrollment</button>
        </div>
      </div>
      <div className="banner-img w-1/2 flex items-center justify-center">
        <img
          className=""
          src="https://i.ibb.co/2K1HnSn/coding.jpg"
          alt="coding"
        />
      </div>
    </div>
  );
};

export default Home;
