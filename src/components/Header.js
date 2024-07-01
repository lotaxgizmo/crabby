import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import buycrabby from '../assets/buycrabby.svg';

const MENU_ITEMS = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Crabbynomics', href: '#crabbynomics' },
    { name: 'Join us', href: '#joinus' },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='bg-[#fc8dd000] fixed top-0 z-50 w-full lg:w-auto'>
            <div className="flex flex-row justify-between py-5 px-10 bg-white/20 backdrop-blur-md rounded-b-[40px] z-50 w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="Logo" className="w-10 rounded-full" />
                </a>

                <div className="hidden md:flex flex-row justify-between items-center z-50">
                    <div className="list text-[#fc8dd000] flex flex-row mr-10 justify-between">
                        {MENU_ITEMS.map((item, index) => (
                            <a href={item.href} className="frost text-3xl mx-3 text-white " key={index}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x6096b8765eb48cd2193f840a977f3727e7800356" target="_blank" rel="noopener noreferrer">
                        <img src={buycrabby} alt="Buy Crabby" />
                    </a>
                </div>

                <div className="md:hidden flex items-center z-50">
                    <button
                        className="focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-8 h-8 text-[#000000]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-white/20 backdrop-blur-md z-50 flex flex-col items-center justify-center transition duration-300">
                    <button
                        className="absolute top-5 right-5 focus:outline-none"
                        onClick={closeMenu}
                    >
                        <svg
                            className="w-8 h-8 text-[#000000]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="list text-[#fc8dd000] flex flex-col items-center mb-5">
                        {MENU_ITEMS.map((item, index) => (
                            <a href={item.href} className="frost text-3xl my-3 z-50 text-black" key={index} onClick={closeMenu}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x6096b8765eb48cd2193f840a977f3727e7800356" target="_blank" rel="noopener noreferrer" className='mt-5'>
                        <img src={buycrabby} alt="Buy Crabby" />
                    </a>
                </div>
            )}
        </div>
    );
}

export default Header;
