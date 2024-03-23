import React, { createContext, useState } from 'react';
import TableRow from './TableRow';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';

export const ModalContext = createContext({});
const Table = ({ recipes }) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});
    // console.log(recipes);
    const modalContextValue = {
        openModal,
        setOpenModal,
        modalData,
        setModalData
    }
    return (
        <>
            <ModalContext.Provider value={modalContextValue}>
                <div className="relative overflow-x-auto mt-10">
                    <h1 className='text-xl md:text-5xl text-[#faa63c] text-center font-semibold mb-10'>Chef's Best Recipes</h1>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase   dark:text-gray-400">
                            <tr className='border border-gray-400 font-bold text-gray-700'>
                                <th scope="col" className="px-6 py-3">
                                    Picture
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Add Favorite
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                recipes.map(recipe => <TableRow key={recipe.id} recipe={recipe} ></TableRow>)
                            }
                        </tbody>
                    </table>
                </div>
                <ToastContainer />
                <Modal />
            </ModalContext.Provider>
        </>


    );
};

export default Table;