import React, { useState } from 'react'
import sell from './Sell.module.css'
import line from '../../../public/line.png'
import SellData from '../../Data/SellData'
const Sell = () => {
    const[sel,setSell] = useState(SellData);
  return (
    <>
    <div className="bg-[#212428] text-[#E2E2E3] pt-7">
        <div className={`${sell.containerNav} container  mx-auto`}>
            <div className={`${sell.title}`}>
                <h2 className='text-[31px] font-semibold'>Create And Sell Your NFTs</h2>
                <img src={line} alt="" />
            </div>
            <div className={`${sell.txt} pt-6 w-[50%]`}>
                <p className=' capitalize text-[18.5px]'>from a Lorem Ipsum passage, and going through the cites
                of the word in classical literature, discovered the
                ndoubtable source...</p>
            </div>
            <div className={`${sell.boxSell} flex pt-6 flex-wrap`}>
                {sel.map((el)=>
                <div className={`${sell.boxs} bg-[#212428] mt-7 w-[250px] rounded-[10px] py-5 pb-7 px-2`}>
                    <div className={`${sell.imgs} bg-[#191B20] rounded-circle w-[60px] h-[60px] flex items-center`}>
                    <img src={el.img} alt="" className='w-[40px]'/>
                    </div>
                    <h3 className='text-[20px] pt-5'>{el.title}</h3>
                    <p className='text-[14px] pt-2'>{el.txt}</p>
                </div>
                )}
            </div>
        </div>
    </div>
    </>
  )
}

export default Sell
