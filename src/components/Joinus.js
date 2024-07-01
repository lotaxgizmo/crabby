import React from 'react'
import dexscreener from '../assets/dexscreener.svg'
import telegram from '../assets/telegram.svg'
import buycrabby from '../assets/buycrabby.svg'
import joinus from '../assets/joinus.svg'
import bikinibottom from '../assets/bikinibottom.svg'

function Joinus() {
    return (
        <div id='joinus' className='bluesea flex flex-col items-center justify-center relative '>
            <img src={joinus} alt="" className=' rotate-6 mt-10 px-4' />

            <div className="btns flex flex-col lg:flex-row items-center justify-center rotate-6">
                <img src={dexscreener} alt="" className='p-2' />
                <img src={telegram} alt="" className='p-2' />
                <img src={buycrabby} alt="" className='p-2' />

            </div>
            <img src={bikinibottom} alt="" className='' />
        </div>
    )
}

export default Joinus