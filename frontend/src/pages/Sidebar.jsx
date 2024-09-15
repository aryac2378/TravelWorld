import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { FaPeopleCarry, FaUsers } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";
import ReactSlider from 'react-slider';
import Rating from './Rating';

const cardData = [
    {
        image: "/tour-images/tour-11.jpg",
        rating: "4",
        price: "319",
        title: "Rainbow Mountain Red Valley",
    },
    {
        image: "/tour-images/tour-12-500x360.jpg",
        rating: "4.5",
        price: "129",
        title: "Walking the Amalfi Coast",
    },
    {
        image: "/tour-images/tour-8-500x360.jpg",
        rating: "5",
        price: "129",
        title: "Discovery Island Kayak Tour",
    },
];

export default function Sidebar() {
    const [value, setValue] = useState([109, 619]);

    const Card = () => {
        return (
            <>
                {cardData.map((item) => (
                    <div key={item.title} className="flex gap-6 border-b last:border-0 pt-4">
                        <img src={item.image} alt="" width={90} height={65} className="rounded-lg" />
                        <span className="flex flex-col items-baseline gap-1">
                            <Rating rating={item.rating} />
                            <h4 className="text-base">{item.title}</h4>
                            <span className="text-gray-500 text-sm flex items-center gap-2">
                                From <span className="text-green">{item.price}.00</span>
                            </span>
                        </span>
                    </div>
                ))}
            </>
        );
    };

    return (
        <div className="flex flex-col gap-8 lg:w-1/3">
            <div className="p-4 w-full bg-white shadow-lg rounded-lg">
                <div className="mb-4 flex items-start border-b py-4">
                    <MdOutlineParagliding className="text-green text-5xl mr-2" />
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Destinations</h3>
                        <select className="w-full rounded outline-none">
                            <option value="">Locations</option>
                            <option value="">Location 1</option>
                            <option value="">Location 2</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <FaPeopleCarry className="text-green text-5xl mr-2" />
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Activity</h3>
                        <select className="w-full rounded outline-none">
                            <option value="">Booking Type</option>
                            <option value="">Type 1</option>
                            <option value="">Type 2</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <AiOutlineCalendar className="text-green text-5xl mr-2" />
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Date From</h3>
                        <input type="date" className="w-full rounded" />
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <FaUsers className="text-green text-5xl mr-2" />
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Guests</h3>
                        <input type="number" className="w-full rounded" defaultValue="0" />
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Price</h3>
                        <div className="flex justify-between mb-3">
                            <div className="bg-green text-white px-2 rounded">${value[0]}</div>
                            <div className="bg-green text-white px-2 rounded">${value[1]}</div>
                        </div>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="thumb"
                            trackClassName="track"
                            min={109}
                            max={619}
                            value={value}
                            onChange={(value) => setValue(value)}
                            ariaLabel={["Lower thumb", "Upper thumb"]}
                            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                            renderTrack={(props, state) => {
                                const { index } = state;
                                const { key, ...restProps } = props;
                                const trackStyle = index === 1 ? { backgroundColor: '#63ab45' } : { backgroundColor: '#999' };
                                return (
                                    <div key={key} {...restProps} style={{ ...restProps.style, ...trackStyle }} />
                                );
                            }}
                            renderThumb={(props, state) => {
                                const { key, ...restProps } = props;
                                return(
                                    <div key={key} {...restProps} style={{ ...restProps.style, backgroundColor: '#63ab45', borderRadius: '50%', width: '20px', height: '20px' }} />
                                )
                            }}
                        />


                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-lg">Languages</h3>
                    <div className="flex flex-col">
                        {["English", "French", "German", "Japanese", "Thailand"].map((language) => (
                            <label key={language} className="inline-flex items-center mt-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-green" />
                                <span className="ml-2">{language}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-lg">Amenities</h3>
                    <div className="flex flex-col">
                        {[
                            "Accepts Credit Cards",
                            "Car Parking",
                            "Free Coupons",
                            "Laundry Service",
                            "Outdoor Seating",
                            "Reservations",
                            "Restaurant",
                            "Smoking Allowed",
                            "Mireless Internet",
                        ].map((amenity) => (
                            <label key={amenity} className="inline-flex items-center mt-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-green" />
                                <span className="ml-2">{amenity}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button className="w-full bg-green text-white rounded-lg h-12 my-4 flex justify-center items-center font-bold gap-2 text-center">
                    <MdSearch />
                    Search
                </button>
            </div>

            <div className="rounded-lg border px-8 py-4">
                <h3 className="text-xl font-semibold pb-4">Last Minute</h3>
                <Card />
            </div>

            <div className="relative group overflow-hidden rounded-[10px] shadow-lg">
                <img
                    src="/tour-images/tour-2.jpg"
                    alt=""
                    className="w-full h-[350px] object-cover rounded-[10px] transition-transform duration-700 ease-in-out group-hover:scale-125"
                />
                <span className="bg-orange rounded-lg px-5 text-white text-xs absolute top-5 right-5 uppercase font-bold leading-8 whitespace-pre">
                    3 Tours
                </span>
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-5 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:bg-opacity-100">
                    <p className="text-green text-xl font-bold flex flex-col">Travel to{" "}</p>

                    <span className="text-white text-2xl group-hover:text-gray-800">United Kingdom</span>
                </div>
            </div>
        </div>
    );
}
