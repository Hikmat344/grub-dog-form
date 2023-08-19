'use client'
import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export const MobleNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size="25" className="text-black cursor-pointer hover:scale-110"/> :
          <AiOutlineMenu size="25" />
        }

      </div>
      {nav && <div className="sticky w-40 h-screen p-5 ease-in text-black bg-white">
        
        <div className="py-4 flex-col ">
          <ul className="uppercase text-sm">
            <a className="hover:underline duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='home'>Home</li>
            </a>
            <a className=" hover:scale-110 duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='work'>How it works</li>
            </a>
            <a className=" hover:scale-10 duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='about'>About Us</li>
            </a>
            <a className=" hover:scale-10 duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='meals'>Making Our Meals</li>
            </a>
            <a className="hover:underline duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='faq'>FAQ</li>
            </a>
            <a className="hover:underline duration-150 mt-10" onClick={handleNav} href={"#"}>
              <li className="py-4 font-semibold" id='login'>LogIn</li>
            </a>

          </ul>
        </div>
      </div>}
    </div>
  )
}
export default MobleNav;
