import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Table from './Table';

const ChefRecipes = () => {
    const { recipes, picture, name, likes, experience, bio, recipe_count } = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex items-center'>
                    <img src={picture} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-5xl font-semibold'>{name}</h1>
                    <p className='text-balance text-base my-5'>{bio}</p>
                    <p className='font-medium'><span>Recipe Count: </span>{recipe_count}</p>
                    <p className='font-medium'><span>Experience: </span>{experience} years</p>
                    <p className='font-medium mb-3'><span>Likes: </span>{likes}</p>
                    {/* <Link to='/login' className="text-white bg-[#faa63c] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   dark:focus:ring-blue-800 w-36">Login</Link> */}
                </div>
            </div>
            <Table recipes={recipes} />
        </div>
    );
};

export default ChefRecipes;