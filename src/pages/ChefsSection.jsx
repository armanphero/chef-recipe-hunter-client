import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const ChefsSection = () => {
    const [chefs, setChef] = useState([]);
    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-puce-seven.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])
    // console.log(chefs);

    return (
        <div className='max-w-screen-xl mx-auto mt-10'>
            <h1 className='text-5xl text-[#faa63c] text-center font-semibold mb-10'>Choose Your Favourite Chef</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefsSection;