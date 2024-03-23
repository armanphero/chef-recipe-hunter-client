import React from 'react';
import banner_img from '../assets/banner-img.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import ChefsSection from './ChefsSection';
import Placeholder from '../shared/Placeholder';

const Home = () => {
    return (
        <>
            <div className='home min-h-[calc(100vh-89px)] z-10'>
                <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-1'>
                    <div className='flex items-center'>
                        <Lottie animationData={banner_img} />
                    </div>
                    <div className='flex flex-col justify-center md:row-start-1'>
                        <h1 className='text-5xl text-white font-semibold'>Wild Harvest: Chef Hunter's Adventures</h1>
                        <p className='text-balance text-base text-white my-5'>Embark on culinary adventures with Chef Hunter. From the wild to your plate, discover nature's bounty transformed into extraordinary dishes. Join us in celebrating the thrill of foraging and hunting, where every meal tells a story of flavor and adventure.</p>
                        <Link to='/login' className="text-white bg-[#faa63c] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   dark:focus:ring-blue-800 w-36">Login</Link>
                    </div>
                </div>
            </div>
            <ChefsSection />
        </>
    );
};

export default Home;