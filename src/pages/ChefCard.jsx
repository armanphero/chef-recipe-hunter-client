import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    // console.log(chef);
    const { recipes, picture, name, likes, experience, id } = chef;
    return (

        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <LazyLoad threshold={0.95} className='w-full'>
                <img src={picture} className="rounded-t-lg" alt="" />
            </LazyLoad>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className='text-white font-medium'><span>Recipes: </span>{recipes}</p>
                <p className='text-white font-medium'><span>Experience: </span>{experience} years</p>
                <p className='text-white font-medium mb-3'><span>Likes: </span>{likes}</p>
                <Link to={`/chef/${id}`} className="text-white bg-[#faa63c] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   dark:focus:ring-blue-800 w-36">
                    View Recipes
                </Link>
            </div>
        </div>
    );
};

export default ChefCard;