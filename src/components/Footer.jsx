import React from "react";

const Footer = () => {
  return (
    <footer className="py-[50px] bg-primary">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-baseline justify-between">
          <ul>
            <li className="mb-5 text-lg font-bold">About us</li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Our mission
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Our vision
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Our story
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Our team
            </li>
          </ul>
          <ul>
            <li className="mb-5 text-lg font-bold">Communication</li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Contact us
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Frequently Asked Questions
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Support
            </li>
          </ul>
          <ul>
            <li className="mb-5 text-lg font-bold">Our services</li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Service packages
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Table service
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Special occasions and events
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              All about food
            </li>
          </ul>
          <ul>
            <li className="mb-5 text-lg font-bold">Social media</li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Facebook
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Twitter
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Instagram
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              LinkedIn
            </li>
          </ul>
        </div>
        <hr className="border-t border-[#ccc] my-8" />
        <div className="flex justify-between items-center pt-5 border-t border-[#ccc] text-sm">
          <p>
            {/* By{" "}
            <a
              className="text-white underline"
              href="https://takeshy.works"
              target="_blank"
            >
              Takeshy{" "}
            </a> */}
            © 2023 Foody All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
