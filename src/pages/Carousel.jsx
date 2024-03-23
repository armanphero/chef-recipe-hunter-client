import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Carousel = () => {
    const [sliderRef] = useKeenSlider()


    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <img src="https://i.postimg.cc/NMZRBYVX/recipe16.jpg" alt="" />
            </div>
            <div className="keen-slider__slide number-slide2">
                <img src="https://i.postimg.cc/cLdwsFDF/recipe17.jpg" alt="" />
            </div>
            <div className="keen-slider__slide number-slide3">
                <img src="https://i.postimg.cc/pT4B0KJK/recipe5.jpg" alt="" />
            </div>
            {/* <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div> */}
        </div>

        // <div id="banner-carousel" className="relative w-full" data-carousel="slide">
        //     {/* <!-- Carousel wrapper --> */}
        //     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        //         {/* <!-- Item 1 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="https://i.postimg.cc/pT4B0KJK/recipe5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //         {/* <!-- Item 2 --> */}
        //         <div className=" duration-700 ease-in-out" data-carousel-item>
        //             <img src="https://i.postimg.cc/cLdwsFDF/recipe17.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //         {/* <!-- Item 3 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="https://i.postimg.cc/NMZRBYVX/recipe16.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //     </div>
        //     {/* <!-- Slider indicators --> */}
        //     <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        //     </div>
        //     {/* <!-- Slider controls --> */}
        //     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        //         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
        //             </svg>
        //             <span className="sr-only">Previous</span>
        //         </span>
        //     </button>
        //     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        //         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        //             </svg>
        //             <span className="sr-only">Next</span>
        //         </span>
        //     </button>
        // </div>

    );
};

export default Carousel;