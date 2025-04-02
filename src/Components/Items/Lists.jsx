import React, { useState } from 'react';
import items from './Items.module.css';
import ImagesHeader from '../../Data/Data'; // Ensure this has unique `id` for each item
import Cate from '../../Data/Cate';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Lists = ({ data }) => {
    const [activeItemId, setActiveItemId] = useState(null); // State to track active item

    return (
        <>
            <div className={`${items.flexItem} flex mt-6 flex-wrap`}>
                {data.map((el) => (
                    <div
                        key={el.id} // Ensure `el.id` is unique in `data`
                        className={`${items.box} bg-[#212428] mt-8`}
                    >
                        <div className={`${items.imgBox} relative`}>
                            <img src={el.bigImg} className={items.bigImg} alt="" />
                            <div
                                className={`${items.smBox} bg-[#212428] flex items-center absolute top-[20px] py-1 ps-1 pe-3`}
                            >
                                <img src={el.smImg} alt="" className={items.smimg} />
                                <p className="text-[11px] ps-2">{el.smtitle}</p>
                            </div>
                        </div>
                        <div className={`${items.boxtext} pt-2 pb-4 relative`}>
                            <h3 className="pb-4 ps-3 text-[17px]">{el.title}</h3>
                            {/* Button toggles CSS effect only for the clicked item */}
                            <button
                                className="border-1 border-[#FF014F] py-2 px-20 mx-auto block rounded-full cursor-pointer"
                                onClick={() => {
                                    // Toggle active state
                                    setActiveItemId(activeItemId === el.id ? null : el.id);
                                }}
                            >
                                Flow
                            </button>
                            {/* Apply CSS effect to only the active item */}
                            <div
                                className={`${items.icons} ${
                                    activeItemId === el.id ? items.show : ""
                                } flex items-center px-3 justify-between absolute bg-[#17191D] top-0 bottom-0 left-0 right-0 rounded-[10px] overflow-hidden`}
                            >
                                <div className="icon bg-[#3B5998] text-[#FFFFFF] cursor-pointer py-2 px-2 rounded-[50%]">
                                    <FaFacebookF />
                                </div>
                                <div className="icon bg-[#0077B5] text-[#FFFFFF] cursor-pointer py-2 px-2 rounded-[50%]">
                                    <FaLinkedinIn />
                                </div>
                                <div className="icon bg-[#00ACEE] text-[#FFFFFF] cursor-pointer py-2 px-2 rounded-[50%]">
                                    <FaTwitter />
                                </div>
                                <div className="icon bg-[#E1306C] text-[#FFFFFF] cursor-pointer py-2 px-2 rounded-[50%]">
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`${items.Boxtest} text-center flex flex-wrap justify-center items-center mt-13 pb-10`}>
                {Cate.map((el) => (
                    <div key={el.title} className={`${items.boxTxt} bg-[#212428] pt-3 mt-4 pb-5 rounded-[10px]`}>
                        <h3 className="font-semibold text-[22px]">{el.title}</h3>
                        <h3 className="font-semibold pb-2 text-[22px]">{el.num}</h3>
                        <button className="text-[16px] border-1 border-[#FF014F] rounded-[5px] w-[130px] py-1">
                            {el.btns}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Lists;
