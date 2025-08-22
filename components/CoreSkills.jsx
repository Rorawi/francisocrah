import React from "react";
import { FiImage } from "react-icons/fi";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { HiOutlinePlay } from "react-icons/hi2";
import { TiMediaPlayOutline } from "react-icons/ti";
import { FiFileText } from "react-icons/fi";


const CoreSkills = () => {
  return (
    <div className="max-w-7xl mx-auto  px-4 md:px-0 pt-[150px]">
      <h1 className="text-5xl text-center  font-bold text-[#111827] tlg:ext-[135px] mb-1 font-bagel pb-6 border-b border-gray-200">
        My Core Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-around gap-4 mt-6">
        <div className="border border-gray-200 rounded-lg p-4 min-h-54">
          <div className="flex justify-around flex-col h-full">
            <div>
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-green-100 rounded-full text-primary w-fit">
                  <FiImage className="text-green-600" />
                </div>
              </div>
              <p className="text-[#111827] font-medium text-center mb-8">
                Design Software
              </p>
            </div>

            <div className="mx-auto">
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobephotoshop className="text-[#08253C]" />
                <p>Adobe Photoshop</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobeillustrator className="text-[#4d1010]" />
                <p>Adobe Illustrator</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 min-h-54">
          <div className="flex justify-around flex-col h-full">
            <div>
              <div className="flex justify-center mb-2">
                <div className=" bg-pink-100 rounded-full text-primary w-8 h-8 flex justify-center items-center shrink-0">
                  <TiMediaPlayOutline className="text-pink-600 w-5 h-5 shrink-0"/>
                </div>
              </div>
              <p className="text-[#111827] font-medium text-center mb-8">
                Video Editing
              </p>
            </div>

            <div className="mx-auto">
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobephotoshop className="text-[#08253C]" />
                <p>Premiere Pro</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobeillustrator className="text-[#4d1010]" />
                <p>CapCut</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobeillustrator className="text-[#4d1010]" />
                <p>Wondershare</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobeillustrator className="text-[#4d1010]" />
                <p>Camtasia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 min-h-54">
          <div className="flex justify-around flex-col h-full">
            <div>
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-orange-100 rounded-full text-primary w-fit">
                  <FiFileText className="text-orange-600" />
                </div>
              </div>
              <p className="text-[#111827] font-medium text-center mb-8">
                Content Development
              </p>
            </div>

            <div className="mx-auto">
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobephotoshop className="text-[#08253C]" />
                <p>Premiere Pro</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobeillustrator className="text-[#4d1010]" />
                <p>CapCut</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobeillustrator className="text-[#4d1010]" />
                <p>Wondershare</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobeillustrator className="text-[#4d1010]" />
                <p>Camtasia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 min-h-54">
          <div className="flex justify-around flex-col h-full">
            <div>
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-blue-100 rounded-full text-primary w-fit">
                  <FiFileText className="text-blue-600" />
                </div>
              </div>
              <p className="text-[#111827] font-medium text-center mb-8">
                Office & Technical
              </p>
            </div>

            <div className="mx-auto">
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobephotoshop className="text-[#08253C]" />
                <p>MS Office Suite</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 min-h-54">
          <div className="flex justify-around flex-col h-full">
            <div>
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-purple-100 rounded-full text-primary w-fit">
                  <FiFileText className="text-purple-600" />
                </div>
              </div>
              <p className="text-[#111827] font-medium text-center mb-8">
                Technical Support
              </p>
            </div>

            <div className="mx-auto">
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobephotoshop className="text-[#08253C]" />
                <p>Hardware Installation</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobephotoshop className="text-[#08253C]" />
                <p>Software Installation</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <SiAdobephotoshop className="text-[#08253C]" />
                <p>Tech Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreSkills;
