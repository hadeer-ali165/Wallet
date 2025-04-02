import React, { useState } from 'react'
import collec from './Collections.module.css'
import CollectionsData from '../../Data/CollectionData'
const Collections = () => {
    let[data,setData] = useState(CollectionsData);
  return (
    <>
    <div className="bg-[#212428] text-[#CEDFF6] pt-25">
        <div className={`${collec.containerNav} container mx-auto`}>
            <div className={`${collec.title}`}>
                <h2 className='text-[33px] font-semibold'>Start Your Own Collection Today</h2>
            </div>
            <div className={`${collec.txts} flex pt-4 items-start justify-between`}>
                <p className='w-[55%] text-[19px]'>Raroin is a shared liquidity NFT market smart contract which is
                used by multiple websites to provide the users the
                best possible experience.</p>
                <button className='text-[17px] bg-[#FF014F] py-2 rounded-full cursor-pointer px-2'>Start Collection</button>
            </div>
            <div className={`${collec.flexyBox} flex flex-wrap pt-10 justify-between`}>
                {data.map((el)=>
            <div className={`${collec.boxs} text-center mt-5 py-6 px-7 w-[250px] rounded-[10px] bg-[#212428]`}>
                <img className='w-[75px] mx-auto' src={el.imgs} alt="" />
                <h3 className=' text-[21px] font-semibold py-2'>{el.title}</h3>
                <p className='text-[13px] px-3 capitalize'>{el.txts}</p>
            </div>
                )}
            </div>
        </div>
    </div>
    </>
  )
}

export default Collections
