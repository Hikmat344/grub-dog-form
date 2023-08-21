'use client'
import React, { useState, useEffect } from 'react';
import dog1 from "../../../../public/Images/desdog1.png"
import dog2 from "../../../../public/Images/desdog2.png"
import bg1 from "../../../public/Images/bg1.svg"
// import bg2 from "../../../public/Images/"
import Image from 'next/image';
import { AiOutlineSend } from "react-icons/ai"

const Form: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    breed: string;

  }>({
    name: '',
    breed: '',
  });

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData') || 'null');
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center text-start w-sm w-full bg-none mt-5 mb-0 sm:mb-10'>
        <p className='font-bold font-mono text-lg mb-10 '>Tell Us About Your Dog</p>
        <div>

          <div className='max-w-sm w-full justify-between items-center gap-x-5' >
            <label className='w-24 inline-block' >Dog Name: </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter..."
              className='border w-470 h-8 border-borderclr rounded-md px-4 left-485px justify-self-auto hover:border-sky-600'
            />
          </div>

          <div className='max-w-sm w-full justify-between items-center gap-5'>
            <label className='w-24 inline-block'>breed: </label>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Enter..."
              className='border w-470 h-8 border-borderclr mt-10 rounded-md left-485px justify-items-center  px-4 hover:border-sky-600'
            />

          </div>

          <a href='#' className='flex justify-end text-sm mt-5 text-borderclr underline '>I have another dog</a>


        </div>

        <div className='flex justify-end gap-x-14 items-center ml-14 mt-5  '>
          <div className='rlative ' style={{ zIndex: -1 }}>

            <Image src={dog1} width={70} height={70} alt='dog image' className='object-cover shrink-0' />
            {/* <Image src={bg1} layout='fit' objectFit='cover' alt='background' className='object-cover mt-0' /> */}

          </div>
          <div className='rlative ' style={{ zIndex: -1 }}>

            <Image src={dog2} width={80} height={80} alt='dog image' className='object-cover shrink-0 scale-x-[-1]' />
            {/* <Image src={bg2} layout='fit' objectFit='cover' alt='background' className='object-cover mt-0' /> */}
          </div>



        </div>

        <div className='flex justify-between gap-x-24 items-center ml-14 mt-5 '>
          <div className='border-2 border-sliderclr items-center bg-white rounded-md p-1 text-xs'>
            Boy
          </div>
          <div>
            <div className='border-2 border-sliderclr items-center bg-white rounded-md p-1 text-xs'>
              Girl
            </div>
          </div>

        </div>


      </div>

      <div className='flex group mt-0 place-content-end shrink-0 mx-5'>
        <button type='submit' className='text-sliderclr font-semibold w-auto' >Continue  </button>
        <AiOutlineSend size='25' className='group-hover:scale-100 duration-500  fill-sliderclr' />
      </div>

    </div>
  );
};

export default Form;

