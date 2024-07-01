import React from 'react'
import roll from '../assets/roll.svg'
import crabbynomics from '../assets/crabbynomics.svg'
import liquidtokenomics from '../assets/liquidtokenomics.svg'
import taxtokenomics from '../assets/taxtokenomics.svg'
import totalsupptokenomic from '../assets/totalsupptokenomic.svg'
import oceanbg from '../assets/oceanbg.svg'

function Crabbynomics() {
    return (
        <div id='crabbynomics' className=' bg-white flex flex-col items-center justify-center relative rounded-3xl'>

            <div className="crabbynomnom pad border-4 border-black rounded-3xl m-5 p-5 flex flex-col items-center justify-center relative">
                <img src={crabbynomics} alt="" />

                <img src={roll} alt="" className='w-full my-7' />



                <div className="three flex flex-col lg:flex-row justify-between items-center">
                    <img src={liquidtokenomics} alt="" className='p-2' />
                    <img src={taxtokenomics} alt="" className='p-2' />
                    <img src={totalsupptokenomic} alt="" className='p-2' />

                </div>
            </div>
        </div>
    )
}

export default Crabbynomics