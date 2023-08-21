import Image from 'next/image'
import React from 'react'
import logo from "../../../public/Images/logo.png"
import union from "../../../public/Images/Union.png"
import MobileNav from "../PageOne/MobileNav"
import dog from "../../../public/Images/dog.png"
import foot from "../../../public/Images/foot.svg"
import bon from "../../../public/Images/bon.svg"
import ReactSlider from 'react-slider'
import { Slider } from '@mui/material'
import Slide from './Slides'



export const Navbar = () => {
    return (
        <div className='mb-0 shrink-0'>
            <div className='flex justify-between'>
                <div className='bg-cover bg-center w-189 h-58'>
                    <div className='relative w-52 h-20 md:w-60 md:h-32 shrink-0 ' style={{ zIndex: -1 }}>
                        <Image src={union} layout='fit' objectFit='cover' alt='background' className='' />
                        <Image src={logo} layout='fit' objectFit='cover' alt='logo' className='absolute inset-0 object-cover mx-6 px-5 py-3 shrink-0' />
                    </div>

                </div>


                <div className='hidden md:flex md:justify-center md:items-center md:mt-10 md:gap-7 md:font-semibold '>
                    <a >Home</a>
                    <a>How it works</a>
                    <a>About Us</a>
                    <a>Making our meals</a>
                    <a>FAQ</a>
                </div>



                <div className='hidden md:flex md:mt-10 md:items-center md:mx-5 md:font-semibold'>
                    <a href='#'>Login</a>
                </div>

                <div className='md:hidden mt-5 mx-5'>
                    <MobileNav />
                </div>

            </div>
            {/* Hero bar */}
            <div className='flex justify-between bg-sliderclr w-screen h-28 mt-10 relative flex-shrink-0'>
                <div>
                    <Image src={dog} className='w-28 h-28 absolute inset-0 object-cover shrink-0 mx-8' alt='dog image' />
                </div>

                <div className='hidden md:flex md:justify-center md:items-center md:shrink-0 md:mt-10 '>
                    <Slide />
                </div>

                <div>
                    <Image src={foot} width={50} height={40} className='shrink-0 mr-0' alt='foot image' />
                    <div className='mr-10 mt-12'>
                        <Image src={bon} width={40} height={30} className='shrink-0' alt='bon image' />
                    </div>

                </div>
            </div>

            
        </div>
    )
}
