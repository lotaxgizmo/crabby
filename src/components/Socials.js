import React from 'react'
import dextools from '../assets/dextools.svg'
import tg from '../assets/tg.png'
import twitter from '../assets/twitter.svg'
import uniswap from '../assets/uniswap.svg'

function Socials() {
    return (
        <div className="flex  flex-row bg-[#0068B6d]/40 z-20 rounded-2xl justify-center itece bg-white/30 my-3">
            <a href="https://x.com/crabby0x60" target="_blank" rel="noopener noreferrer" className='l'>
                <img src={twitter} alt="" className='p-3' />
            </a>
            <a href="https://t.me/crabby0x60" target="_blank" rel="noopener noreferrer" className=''>
                <img src={tg} alt="" className='p-3 w-20' />

            </a>
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xc5f93997e111fc3dff6cb1f9ef84fd7040996de6" target="_blank" rel="noopener noreferrer" className='l'>
                <img src={dextools} alt="" className='p-3' />
            </a>
            <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x6096b8765eb48cd2193f840a977f3727e7800356" target="_blank" rel="noopener noreferrer" className='l'>
                <img src={uniswap} alt="" className='p-3' />
            </a>

        </div>
    )
}

export default Socials