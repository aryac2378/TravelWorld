import { BsSortAlphaDown } from "react-icons/bs";
import { RiPlanetLine } from "react-icons/ri";
import CardSlider from "./CardSlider";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ReactPaginate from 'react-paginate';
import { Tours } from "./Tours"



export default function Tour1() {
    const [sortAsc, setSortAsc] = useState(true)
    const [sortCriterion, setSortCriterion] = useState('name')
    const [currentPage, setcurrentPage] = useState(0);
    const itemsPerPage = 6;

    const tourData = [
        {
            image: "/tour-images/tour-8-500x360.jpg",
            name: "Discovery Island Kayak Tour",
            rating: "4.5",
            price: '109',
        },
        {
            image: "/tour-images/tour-6-500x360.jpg",
            name: "Beautiful Floating Villa",
            rating: "4.5",
            price: '116'
        },
        {
            image: "/tour-images/tour-2-500x360.jpg",
            name: "Yucatán Peninsula & Caribbean",
            rating: "5",
            price: '129'
        },
        {
            image: "/tour-images/tour-4-500x360.jpg",
            name: "Man Standing on a Rock",
            rating: "4.5",
            price: '116'
        },
        {
            image: "/tour-images/tour-5-500x360.jpg",
            name: "Cottages In The Middle Of Beach",
            rating: "4.5",
            price: '129'
        },
        {
            image: "/tour-images/tour-10-500x360.jpg",
            name: "North Island Adventure Tour",
            rating: "5",
            price: '129'
        },
        {
            image: "/tour-images/tour-9-500x360.jpg",
            name: "Java & Bali One Life Adventures",
            rating: "4",
            price: '129'
        },
        {
            image: "/tour-images/tour-1-500x360.jpg",
            name: "Boathouse Neughborhood",
            rating: "5",
            price: '129'
        },
        {
            image: "/tour-images/tour-12-500x360.jpg",
            name: "Walking The Amalfi Coast",
            rating: "4.5",
            price: '129'
        },
    ];

    const handleSortChange = (event) => {
        setSortCriterion(event.target.value)
        setSortAsc(true);
    }

    const sortData = (data) => {
        return data.sort((a, b) => {
            if (sortCriterion === 'name') {
                return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (sortCriterion === 'price') {
                return sortAsc ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price);
            } else if (sortCriterion === 'rating') {
                return sortAsc ? parseFloat(a.rating) - parseFloat(b.rating) : parseFloat(b.rating) - parseFloat(a.rating);
            }
            return 0;
        });
    }

    const sortedData = sortData([...tourData]);
    const offset = currentPage * itemsPerPage;
    const currentPageData = sortedData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(tourData.length / itemsPerPage);


    const handlePageClick = (data) => { setcurrentPage(data.selected); };

    return (
        <div>
            <section className="relative bg-black lg:h-[380px]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
                <img src="/tour-images/slider-1.jpg" alt="" className="absolute h-full w-full object-cover" />
                <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-[380px] max-w-[1380px] px-6 lg:pt-0 pt-16 mx-auto">
                    <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">Explore The World</span>
                    <p className=" text-white text-center text-2xl my-2 ">People don't take,Trips take people</p>
                </div>
            </section>
            <CardSlider />
            <section className="lg:flex gap-8 max-w-[1320px] mx-auto my-24 px-3">
                <Sidebar />

                <div className="lg:2/3">
                    <div className="flex lg:flex-row flex-col justify-between py-4 pb-2 text-[#82828A]">
                        <span className="flex gap-2">
                            <strong>{tourData.length}</strong> Tours
                        </span>
                        <span className="flex gap-2">
                            <span className="flex gap-2 items-center">
                                Sort By <BsSortAlphaDown className="cursor-pointer" onClick={() => setSortAsc(!sortAsc)} />
                            </span>
                            <select value={sortCriterion} onChange={handleSortChange} className="w-32 cursor-pointer outline-none border rounded-sm">
                                <option value="name">Title</option>
                                <option value="price">Price</option>
                                <option value="rating">Rating</option>
                            </select>

                        </span>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        {currentPageData?.map((item, index) => (
                            <Tours key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} />
                        ))}
                    </div>
                    <ReactPaginate
                        previousClassName="hidden"
                        nextLabel={"Next >>"}
                        nextClassName="border-2 rounded-[4px] px-4 h-10 flex items-center hover:border-green"
                        breakLabel="..."
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="flex items-center gap-3 pt-8"
                        pageLinkClassName="h-10 flex items-center px-4 rounded-[4px] border-2 hover:border-green"
                        activeLinkClassName="border-2 border-green rounded-[4px]"
                    />
                </div>
            </section>
            <div className="bg-[url('/bg-shape-04.png')] bg-green bg-no-repeat bg-cover relative z-10 lg:mb-0 -mb-24">
                <div className="lg:py-16 py-8 lg:px-3 px-4 lg:flex justify-between items-center max-w-[1320px] mx-auto">
                    <div className="flex items-center gap-4 lg:mb-0 mb-4">
                        <RiPlanetLine color="white" size={64} />
                        <span className="text-white">
                            <p className="text-sm">QUISEQUE VEL ORTOR</p>
                            <h4 className="lg:text-4xl text-2xl font-bold">
                                Ready to adventure and enjoy natural
                            </h4>
                        </span>
                    </div>
                    <button className="bg-white rounded-lg text-lg shadow py-4 px-8 font-bold">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
}

// import CommonSection from '../shared/CommonSection';
// import NewsLetter from '../shared/Newsletter';
// import CardSlider from './CardSlider';
// import '../styles/tour.css';

// export default function Tours() {
//     return (
//         <div>
//             <div className="card-slider-container">
//                 <CommonSection title={'All Tours'} /> 
//                 <CardSlider className="card-slider" />
//             </div>
//             <NewsLetter />
//         </div>
//     );
// }

