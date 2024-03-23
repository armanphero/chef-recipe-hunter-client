import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModalContext } from './Table';

const TableRow = ({ recipe }) => {
    const [addFavorite, setAddFavorite] = useState(false);
    const { openModal, setOpenModal, setModalData } = useContext(ModalContext);
    // console.log(recipe);
    const { name, picture } = recipe;
    const handleDetails = () => {
        setOpenModal(true);
        setModalData(recipe);
    }
    const handleAddFavorite = () => {
        toast(`${name} is your favorite`);
        setAddFavorite(true);
    }
    return (
        <tr className="border border-gray-400 text-gray-600 font-semibold">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                <img src={picture} alt="" className='w-32' />
            </th>
            <td className="px-6 py-4 md:text-xl">
                {name}
            </td>
            <td className="px-6 py-4">
                <button onClick={handleAddFavorite} disabled={addFavorite ? true : false} className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   dark:focus:ring-blue-800 w-36 ${addFavorite ? 'bg-gray-500' : 'bg-[#faa63c] hover:bg-blue-800 '}`}>
                    Add Favorite
                </button>
            </td>
            <td className="px-6 py-4">
                <button onClick={handleDetails} data-modal-target="chef-recipe-details-modal" data-modal-toggle="chef-recipe-details-modal" className="text-white bg-[#faa63c] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800 w-36" type="button">
                    Details
                </button>
            </td>
        </tr>
    );
};

export default TableRow;