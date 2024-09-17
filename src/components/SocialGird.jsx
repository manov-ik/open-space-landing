import SocialCard from "./SocialCard";

import harish from "../assets_c/harish.webp";
import jeyanth from "../assets_c/jeyanth.webp";
import rithesh from "../assets_c/rithesh.webp";
import swayam from "../assets_c/swayam.webp";
import noumaan from "../assets_c/noumaan.webp";
import manovikram from "../assets_c/manovikram.webp";
import hursun from "../assets_c/hursun.png";
import rakhul from "../assets_c/rakhul.png";
import vishal from "../assets_c/vishal.jpg";
import vaideeshswaren from "../assets_c/vaideeshswaren.webp";
import prajein from "../assets_c/prajein.png";
import openspaceh from "../assets_c/open-space-h.jpg";

const SocialGird = () => {
  return (
    <>
      <div className="text-white mt-36 max-mobile:mt-16 m-auto w-full flex items-center justify-center text-3xl">
        Initiators
      </div>

      <div className="flex w-[90%] m-auto flex-wrap justify-center mt-5 max-laptop:w-[90%] max-mobile:w-[90%]">
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={harish}
            title="Harish"
            github="https://github.com/harish-ps"
            insta="https://www.instagram.com/literally_harish/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={jeyanth}
            title="Jeyanth"
            github="https://github.com/jeyanth-jr"
            insta="https://www.instagram.com/jeyanth__jr/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={rithesh}
            title="Rithesh"
            github="https://github.com/Raxen001"
            insta="https://www.instagram.com/raxen001/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={swayam}
            title="Swayam"
            github="https://github.com/swayammedia"
            insta="https://www.instagram.com/swayam_ceo/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={noumaan}
            title="Noumaan"
            github="https://github.com/NoumaanAhamed"
            insta="https://www.instagram.com/ft.noumaan/"
          />
        </div>
      </div>

      <div className="text-white m-auto w-full flex items-center justify-center text-3xl ">
        Team And Club
      </div>

      <div className="flex w-[90%] m-auto flex-wrap justify-center mt-5 max-laptop:w-[90%] max-mobile:w-[90%]">
        <div className=" mx-5 mb-5 max-mobile:mx-auto">
          <SocialCard
            imageSrc={manovikram}
            title="Manovikram"
            github="https://github.com/manov-ik"
            insta="https://www.instagram.com/manov_ik/"
          />
        </div>
        <div className=" mx-5 mb-5 max-mobile:mx-auto">
          <SocialCard imageSrc={hursun} title="Hursun" github="" insta="" />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard imageSrc={rakhul} title="Rakhul" github="" insta="" />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard imageSrc={vishal} title="Vishal" github="" insta="" />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={vaideeshswaren}
            title="Vaideeshswaren"
            github=""
            insta=""
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard imageSrc={prajein} title="Prajein" github="" insta="" />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={openspaceh}
            title="<your_name>"
            github=""
            insta=""
          />
        </div>
      </div>
    </>
  );
};

export default SocialGird;
