import React from 'react'
import welcome from '../assets/welcome.svg'
import crablogo from '../assets/crablogo1.jpg'
import greenback from '../assets/greenback.svg'
import fishy1 from '../assets/fishy1.svg'
import fishy2 from '../assets/fishy2.svg'
import fishy3 from '../assets/fishy3.svg'
import fishy4 from '../assets/fishy4.svg'
import seaback from '../assets/seaback.svg'


function Welcome() {
    return (
        <div className="mt-20 bluesea flex flex-col items-center justify-center relative px-4 mb-20 lg:mt-10">
            <img src={welcome} alt="" />

            <div className="relative flex flex-col items-center justify-center ">
                <div className="lg:absolute  top-0 lg:-top-20 lg:-right-20 overflow-hidden crab bg-[#3D00BF] rounded-full">
                    <img
                        src={crablogo}
                        alt=""
                        className=" w-20 lg:w-32 m-2"
                    />
                </div>
                <img src={greenback} alt="" className="hidden lg:flex" />

                <p className="monts hidden lg:flex lg:absolute   lg:text-3xl lg:mx-24">
                    In Matt Furie's "The Night Riders," the crab serves as a pivotal
                    element in the adventure experienced by the nocturnal frog and rat.
                    Specifically, the crab represents a significant obstacle or
                    challenge that the characters encounter during their journey.
                    <br />
                    It adds suspense and excitement to their dirtbike adventure as they
                    navigate through various landscapes from forest to bat cave to ghost
                    town to ocean.
                </p>
                <div className="lg:hidden flex backd bg-white lg:bg-transparent rounded-3xl p-4 lg:p-0">
                    <p className="monts lg:absolute text-xl lg:text-4xl lg:mx-24">
                        In Matt Furie's "The Night Riders," the crab serves as a pivotal
                        element in the adventure experienced by the nocturnal frog and rat.
                        Specifically, the crab represents a significant obstacle or
                        challenge that the characters encounter during their journey.
                        <br />
                        It adds suspense and excitement to their dirtbike adventure as they
                        navigate through various landscapes from forest to bat cave to ghost
                        town to ocean.
                    </p>
                </div>
            </div>

            <img
                src={fishy1}
                alt=""
                className=" absolute top-24 lg:top-5 lg:right-20 right-0  z-30 w-32 lg:w-auto"
            />
            <img
                src={fishy3}
                alt=""
                className="hidden lg:flex absolute bottom-20 lg:left-20 left-0  z-30"
            />
            <img
                src={fishy2}
                alt=""
                className="hidden lg:flex absolute bottom-40 right-20  z-30"
            />
            {/* <img src={fishy4} alt="" className='hidden lg:flex absolute bottom-40 right-20  z-30' /> */}
        </div>
    );
}

export default Welcome