import React from "react";

const Projects = () => {
  return (
    <div className="pt-[75px] container mx-auto lg:px-4 text-center max-w-[1600px]">
      <div className="flex justify-center items-stretch gap-20 mb-30">
        <div className="w-full lg:w-5/12 bg-[#5c1e31] text-white rounded-[34px] max-h-[550px] overflow-hidden">
          <div className="text-end p-6">
            <p>Church Flyer</p>
            <p className="text-2xl font-bold">Graphic Design</p>
          </div>
          <div className="relative h-full">
            <img
              src="/images/prophet.jpeg"
              alt=""
              className="h-full object-cover w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-7/12 bg-[#4da367] text-[#334442] rounded-[24px] max-h-[550px] overflow-hidden">
          <div className="text-end p-6">
             <p>Church Flyer</p>
            <p className="text-2xl font-bold">Graphic Design</p>
          </div>
          <div className="relative h-full">
            <img src="/images/prophet.jpeg" alt=""  />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-stretch gap-20 mb-10">
         <div className="w-full lg:w-7/12 bg-[#e5a078] text-[#334442] rounded-[34px] max-h-[550px] overflow-hidden">
          <div className="text-end p-6">
             <p>Church Flyer</p>
            <p className="text-2xl font-bold">Graphic Design</p>
          </div>
          <div className="relative h-full">
            <img src="/images/prophet.jpeg" alt=""  />
          </div>
        </div>
        <div className="w-full lg:w-5/12 bg-[#99cdf5] text-[#334442] rounded-[24px] max-h-[550px] overflow-hidden">
          <div className="text-end p-6">
            <p>Church Flyer</p>
            <p className="text-2xl font-bold">Graphic Design</p>
          </div>
          <div className="relative h-full">
            <img
              src="/images/prophet.jpeg"
              alt=""
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
