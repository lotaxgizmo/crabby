import React from 'react';

const ContractAddress = ({ address }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(address).then(() => {
            alert('Address copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className="z-20 contract-address-container">
            <button
                className="font-bold text-sm lg:text-3xl bg-[#0068B6] text-white rounded-xl p-3 w-10/12 lg:w-auto"
                onClick={handleCopy}
            >
                <p className='whitespace-normal break-words monts font-bold '>
                    {address}
                </p>
            </button>
        </div>
    );
};

export default ContractAddress;
