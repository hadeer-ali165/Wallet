import React, { useState } from 'react'
import items from './Items.module.css'
import ImagesHeader from '../../Data/Data';
import Cate from '../../Data/Cate'
const Lists = ({data}) => {
    let[cate,setCate] = useState(Cate);
    // let[myData , setData] = useState(ImagesHeader);
    console.log(data)
  return (
    <>
    <div className={`${items.flexItem} flex mt-6 flex-wrap`}>
        {data.map((el)=>
        <div className={`${items.box} bg-[#212428] mt-8`}>
        <div className={`${items.imgBox} relative`}>
        <img src={el.bigImg} className={items.bigImg} alt="" />
        <div className={`${items.smBox} bg-[#212428] flex items-center absolute top-[20px] py-1 ps-1 pe-3`}>
            <img src={el.smImg} alt="" className={items.smimg}/>
            <p className='text-[11px] ps-2'>{el.smtitle}</p>
        </div>
        </div>
        <div className={`${items.boxtext} pt-2 pb-4`}>
            <h3 className='pb-4 ps-3 text-[17px]'>{el.title}</h3>
            <button className='border-1 border-[#FF014F] py-2 px-20 mx-auto block rounded-full cursor-pointer'>Flow</button>
        </div>
    </div>
        )}
    </div>
    <div className={`${items.Boxtest} text-center flex flex-wrap justify-center items-center mt-13 pb-10`}>
        {cate.map((el)=>
        <div className={`${items.boxTxt} bg-[#212428] pt-3 mt-4 pb-5 rounded-[10px]`}>
        <h3 className=' font-semibold text-[22px]'>{el.title}</h3>
        <h3 className='font-semibold pb-2 text-[22px]'>{el.num}</h3>
        <button className='text-[16px] border-1 border-[#FF014F] rounded-[5px]  w-[130px] py-1'>{el.btns}</button>
    </div>
        )}
    </div>
    </>
  )
}

export default Lists
