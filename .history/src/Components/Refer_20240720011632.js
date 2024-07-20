import React from "react";
import referral from "../Assets/referral-2.svg";
import addFriend from "../Assets/add_friend.svg";
import reward from "../Assets/Layer_10.svg";
import bonus from "../Assets/bonus.svg";

function Refer() {
  return (
    <div className=" max-w-[85rem] mx-auto">
      <div className=" text-[27.6px] py-10 flex justify-center items-center align-middle font-semibold">
        How Do I <span className="text-[#1A73E8] ml-2">Refer?</span>
      </div>
      <div className="relative py-5 flex text-base font-medium">
        <div className=" absolute flex flex-col items-center justify-center top-40 left-48 w-48">
          <div className="w-full flex justify-center">
            <img src={addFriend} alt="add friend" className="mb-5" />
          </div>
          <p className="w-full  text-center">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>
        <div className=" absolute flex flex-col items-center justify-center top-40 left-[43%] w-48">
          <div className="w-full flex justify-center">
            <img src={reward} alt="reward" className="mb-5" />
          </div>
          <p className="w-full text-center">
            Earn rewards once your referral joins an Accredian program.
          </p>
        </div>
        <div className=" absolute flex flex-col items-center justify-center top-40 right-48 w-48">
          <div className="w-full flex justify-center">
            <img src={bonus} alt="bonus" className="mb-5" />
          </div>
          <p className="w-full text-center">
            Both parties receive a bonus 30 days after program enrollment.
          </p>
        </div>
        <img src={referral} alt="referral" className="" />
      </div>
      <div className="w-full py-10 flex justify-center">
        <button className="w-56 bg-[#1A73E8] hover:bg-blue-600 h-16 rounded-lg text-white">
          Refer Now
        </button>
      </div>
    </div>
  );
}

export default Refer;
