import React, { useContext } from 'react';
import { ModalContext } from './Table';

const Modal = () => {
    const { openModal, setOpenModal, modalData } = useContext(ModalContext);
    const { rating, picture, name, ingredients, cooking_method } = modalData;
    return (
        <>


            {/* // <!--Main modal-- > */}
            <div id="chef-recipe-details-modal" tabIndex="-1" aria-hidden="true" className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${openModal ? '' : 'hidden'}`}>
                <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {name}
                            </h3>
                            <button onClick={() => setOpenModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="chef-recipe-details-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-4 md:p-5 space-y-4">
                            <img src={picture} alt="" />
                            <h5 className='text-white font-semibold text-xl'>Ingredients:</h5>
                            <ol className='text-white'>
                                {
                                    ingredients &&
                                    ingredients.map((ingredient, index) => <li key={index}>{`${index + 1}. ${ingredient}`}</li>)
                                }
                            </ol>
                            <h5 className='text-white font-semibold text-xl'>Cooking Method:</h5>
                            <p className="text-base leading-relaxed text-white">
                                {cooking_method}
                            </p>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button type="button" onClick={()=> setOpenModal(false)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;