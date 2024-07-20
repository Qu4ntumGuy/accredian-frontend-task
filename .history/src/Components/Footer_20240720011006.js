import React from "react";
import accredian from "../Assets/accredain.svg";

import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="max-w-6xl mx-auto pb-10">
      <div className="py-8">
        <div className="flex border-b-2 border-gray-500 justify-between">
          <div className="w-36">
            <img src={accredian} alt="accredian" className="" />
          </div>
          <div className="px-20 pb-5 flex flex-col items-center">
            <div className="text-white text-sm font-medium border p-2 w-64 rounded-lg text-center bg-[#1A73E8]">
              Schedule 1-on-1 Call Now
            </div>
            <div className="text-white text-sm font-light">
              Speak with our Learning Advisor
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full text-white">
        <div className="pl-2 w-[37.5%] pr-12">
          <div className="text-xl w-full h-7">Programs</div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Data Science & AI
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Product Management
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Business Analytics
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Digital Transformation{" "}
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Business Management
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Product Management
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Strategy & Leadership
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Senior Management
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
          <div className="h-14 text-base font-semibold flex items-center justify-between">
            Fintech
            <span className="px-5">
              <AddIcon />
            </span>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-xl h-7">Contact Us</div>
          <div className="flex flex-col space-y-2 w-[90%] text-sm font-light my-2">
            <div>
              Email us (For Data Science Queries): admissions@accredian.com
            </div>
            <div>
              Email us (For Product Management Queries):pm@accredian.com
            </div>
            <div>
              Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
            </div>
            <div>Product Management Admission Helpline:+91 9625811095</div>
            <div>Enrolled Student Helpline: +91 7969322507</div>
            <div>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </div>
          </div>
          <div className="text-lg font-light">Why Accredian</div>
          <div className="text-xl font-thin my-2">Follow Us</div>
          <div className="flex space-x-5">
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className="w-48">
          <div className="text-xl w-full h-7">Accredian</div>
          <div className="text-sm font-light space-y-2 mt-2">
            <div>About</div>
            <div>Career</div>
            <div>Blog</div>
            <div>Admission Policy</div>
            <div>Referral Policy</div>
            <div>Privacy Policy</div>
            <div>Terms Of Service</div>
            <div>Master FAQs</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full text-sm text-white">
        <div className="py-10">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
