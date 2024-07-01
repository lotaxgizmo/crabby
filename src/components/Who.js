import React from 'react'
import buycrabby from '../assets/buycrabby.svg'
import crabbyrock from '../assets/crabbyrock.svg'
import beach from '../assets/beach.svg'
import pepefrog from '../assets/pepefrog.svg'
import crabbywho from '../assets/crabbywho.svg'
import blurectangle from '../assets/blurectangle.png'

function Who() {
    return (
        <div id='about' className='bluesea flex flex-col items-start justify-center relative dmx-4 '>
            <div className='z-30 flex flex-col items-start justify-center mx-4 lg:mx-12 z-20'>
                <img src={crabbywho} alt="" />
                <p className="monts hidden lg:flex dlg:absolute text-2xl lg:text-4xl lg:pr-[499px] mb-10">
                    The crab's importance lies in its role as a formidable and memorable adversary or danger that the characters must overcome or avoid.
                    <br /> <br />
                    Its inclusion in the narrative contributes to the richness of the story's plot, offering moments of tension and excitement as the friends explore new environments and encounter unexpected challenges along the way.
                    <br />
                    <br />Thus, the crab plays a crucial part in shaping the adventurous spirit and narrative of "The Night Riders."
                </p>


                <p className="monts font-bold lg:hidden flex dlg:absolute text-2xl lg:text-4xl lg:pr-[499px] mb-10">
                    The crab's importance lies in its role as a formidable and memorable adversary or danger that the characters must overcome or avoid.
                    <br /> <br />
                    Its inclusion in the narrative contributes to the richness of the story's plot, offering moments of tension and excitement as the friends explore new environments and encounter unexpected challenges along the way.
                    <br />
                    <br />Thus, the crab plays a crucial part in shaping the adventurous spirit and narrative of "The Night Riders."
                </p>
                <img src={buycrabby} alt="" />
            </div>
            <img src={blurectangle} alt="" className='w-full absolute top-0' />
            <img src={beach} alt="" className='w-full z-10 ' />

            <div className="absolute lg:bottom  sbottom-0 flex justify-between items-center w-full mt-20 lg:mt-auto lg:z-20">
                <img src={pepefrog} alt="" className='w-40 lg:w-auto absolute left-0 animate-bounce' />
                <img src={crabbyrock} alt="" className='hidden lg:flex w-60 lg:w-auto absolute right-0' />
            </div>

        </div>
    )
}

export default Who