import SignIn from "@/components/SignIn";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <div className="bg-gradient-to-tl from-[#8360C3] to-[#2EBF91] h-[976px] min-w-[704px] flex justify-center items-center m-6 rounded-2xl">
        <div className="bg-[#0C4E5F40] w-[600px] h-[872px] rounded-2xl relative">
          <div className="bg-[#FFFFFF] w-36 h-16 flex justify-center items-center rounded-full gap-3 m-10">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={27.5}
              height={27.5}
            />
            <h1 className="font-montserrat font-bold text-2xl text-black">
              Base
            </h1>
          </div>

          <p className="text-5xl text-white font-lato font-bold m-10 leading-normal">
            Generate detailed reports with just one click
          </p>

          <div className="absolute bottom-0 left-0 m-10">
            <ThemeSwitch />
          </div>
          <Image
            src="/images/girl_img.png"
            alt="Logo"
            width={381}
            height={438}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
