import React, { useState } from 'react'
import seller from './Sellers.module.css';
import line from '../../../public/line.png';
import SellerData from '../../Data/SellerData';
const Sellers = () => {
    const[data,setData] = useState(SellerData);
return (
    <>
    <div className="bg-[#212428] text-[#CEDFF6] pt-15">
        <div className={`${seller.containerNav} container  mx-auto`}>
            <div className="title">
                <h2 className='text-[33px] font-semibold'>Top Sellers</h2>
                <img src={line} alt="" className='w-[185px]'/>
            </div>
            <div className={`${seller.flexy} flex pt-6`}>
                <p className='w-[40%] text-[19px]'>It has survived not only five centuries, but also
                he leap into electronic typesetting
                remaining essentially uncha</p>
                <button>Last 7 day</button>
            </div>
            <div className={`${seller.flexyItems} flex flex-wrap pb-10`}>
            {data.map((el)=>
                        <div className={`${seller.boxs} rounded-[10px] mt-10 bg-[#212428]`}>
                        <div className={`${seller.items} flex bg-[#212428] my-5 px-2 pt-[10px] pb-[10px] rounded-[6px]`}>
                            <img src={el.img1} className='w-[62px] h-[62px] rounded-[5px]' alt="" />
                            <div className='text-[13px] ps-3'>
                            <h6 className='font-semibold'>{el.title}</h6>
                            <p>{el.num2}</p>
                            <p>{el.num1}</p>
                            </div>
                        </div>
                        <div className={`${seller.items} flex bg-[#212428] my-5 px-2 pt-[10px] pb-[10px] rounded-[6px]`}>
                            <img src={el.img2} alt="" className='w-[62px] h-[62px]  rounded-[5px]'/>
                            <div className='text-[13px] ps-3'>
                            <h6 className='font-semibold'>{el.title}</h6>
                            <p>{el.num2}</p>
                            <p>{el.num1}</p>
                            </div>
                        </div>
                        <div className={`${seller.items} flex bg-[#212428] my-5 px-2 pt-[10px] pb-[10px] rounded-[6px]`}>
                            <img src={el.img3} alt="" className='w-[62px] h-[62px]  rounded-[5px]'/>
                            <div className='text-[13px] ps-3'>
                            <h6 className='font-semibold'>{el.title}</h6>
                            <p>{el.num2}</p>
                            <p>{el.num1}</p>
                            </div>
                        </div>
                        <div className={`${seller.items} flex bg-[#212428] my-5 px-2 pt-[10px] pb-[10px] rounded-[6px]`}>
                            <img src={el.img4} alt="" className='w-[62px] h-[62px]  rounded-[5px]'/>
                            <div className='text-[13px] ps-3'>
                            <h6 className='font-semibold'>{el.title}</h6>
                            <p>{el.num2}</p>
                            <p>{el.num1}</p>
                            </div>
                        </div>
                        <div className={`${seller.items} flex bg-[#212428] my-5 px-2 pt-[10px] pb-[10px] rounded-[6px]`}>
                            <img src={el.img5} alt="" className='w-[62px] h-[62px]  rounded-[5px]'/>
                            <div className='text-[13px] ps-3'>
                            <h6 className='font-semibold'>{el.title}</h6>
                            <p className=''>{el.num2}</p>
                            <p>{el.num1}</p>
                            </div>
                        </div>
                    </div>
            )}
            </div>
        </div>
    </div>
    </>
)
}

export default Sellers
