import React from 'react'
import buycrabby from '../assets/buycrabby.svg'
import styled from 'styled-components';

function Buycrabby() {
    const style = {
        color: 'red !important',
        position: 'relative',
        left: '0',
        top: '0'
    };
    const StyledDiv = styled.div`
  color: red !important;
`;

    return (

        <div className='flex flex-col justify-center items-center z-40 relative my-4'>
            <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x6096b8765eb48cd2193f840a977f3727e7800356" target="_blank" rel="noopener noreferrer" className='flex z-40   flex-col justify-center items-center'>
                <img src={buycrabby} alt="" sid='helpmegod' sclassName="helpmegod !relative !left-0 !top-0" sstyle={style} />
                {/* <StyledDiv>This is my component</StyledDiv> */}
            </a>

        </div>
    )
}

export default Buycrabby