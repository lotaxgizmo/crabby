import React from 'react'
import heroimg from '../assets/heroimg.svg'
import headertext2 from '../assets/headertext2.svg'
import headertext1 from '../assets/headertext1.svg'
import fish1 from '../assets/fish1.svg'
import fish2 from '../assets/fish2.svg'
import fish3 from '../assets/fish3.svg'
import seaback from '../assets/seaback.svg'
import seabackmobile from '../assets/seabackmobile.svg'
import socials from '../assets/socials.svg'
import buycrabby from '../assets/buycrabby.svg'

function Hero() {
    return (
        <div className='hero flex flex-col items-center justify-center relative pt-16'>
            <div className="ds flex flex-col items-center justify-center relative px-4 w-full">
                <img src={headertext1} alt="" className='lg:w-auto w-[320px] absolute top-0 -my-2s self-start z-[2]' />
                <img src={heroimg} alt="" className='lg:w-[450px] my-20 z-10' />
                <img src={headertext2} alt="" className='lg:w-auto w-[320px] absolute -bottom-10 -my-2s self-end z-20' />
            </div>


            <img src={fish1} alt="" className=' absolute top-24 lg:top-20 right-20  z-30 w-32 lg:w-auto' />
            <img src={fish3} alt="" className='hidden lg:flex absolute bottom-20 left-20  z-30' />
            <img src={fish2} alt="" className='hidden lg:flex absolute bottom-40 right-20  z-30' />

            <img src={seaback} alt="" className='hidden lg:flex absolute -bottom-[600px] w-full' />
            <img src={seabackmobile} alt="" className='lg:hidden flex absolute -bottom-[30px] w-full' />
            <img src={buycrabby} alt="" className='z-40 m-2 lg:-mt-20' />
            <img src={socials} alt="" className='z-40' />
        </div>
    )
}

export default Hero