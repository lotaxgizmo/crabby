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
            s
            <div className="btns flex flex-col lg:flex-row items-center justify-center rotate-6">
                <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xc5f93997e111fc3dff6cb1f9ef84fd7040996de6" target="_blank" rel="noopener noreferrer" className='z-40'>
                    <img src={dexscreener} alt="" className='p-2' />
                </a>
                <a href="https://t.me/crabby0x60" target="_blank" rel="noopener noreferrer" className='z-40'>
                    <img src={telegram} alt="" className='p-2' />
                </a>
                <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x6096b8765eb48cd2193f840a977f3727e7800356" target="_blank" rel="noopener noreferrer" className='z-40'>
                    <img src={buycrabby} alt="" className='p-2' />
                </a>

            </div>
            <img src={bikinibottom} alt="" className='' />
        </div>
    )
}

export default Joinus