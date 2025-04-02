import React, { useState } from 'react'
import items from './Items.module.css'
import lineImages from '../../../public/line.png';
import Lists from './Lists';
import ImagesHeader from '../../Data/Data';
const Items = () => {
    const [myData, setData] = useState(ImagesHeader);
    const [originalData] = useState(ImagesHeader); // Original unfiltered data
    const menueCategory = [...new Set(originalData.map((el) => el.category))];

    const filterData = (cat) => {
        if (cat === "All") {
            setData(originalData); // Reset to original data when "All" is clicked
        } else {
            const newData = originalData.filter((items) => items.category === cat);
            setData(newData);
        }
    };


  return (
    <>
    <div className="bg-[#212428] text-[#CEDFF6]">
        <div className={`${items.containerNav} container mx-auto`}>
        <div className={`${items.title}`}>
            <h2 className='text-[32px] font-semibold'>NFT Assets Itam</h2>
            <img src={lineImages} alt="" className={`${items.line}`}/>
        </div>
        <div className={`${items.flexy} flex mt-5`}>
            <p className='text-[16px] text-[#989CA2]'>kundi nalagpasan din nito ang paglaganap ng electronic
            typesetting at nanatiling parehas Sumikat ito noong
            1960s kasabay ng pag labas ng Letraset...</p>
            <div className="smNav">
                <ul className={`${items.lists} text-[15px] flex bg-[#212428]`}>
                <li onClick={() => filterData("All")} className='cursor-pointer'>All</li>
                                {menueCategory.map((el) => (
                                    <li
                                        key={el}
                                        className="capitalize cursor-pointer"
                                        onClick={() => filterData(el)}
                                    >
                                        {el}
                                    </li>
                                ))}
                </ul>
            </div>
        </div>
        <Lists data={myData}/>
        </div>
    </div>
    </>
  )
}

export default Items
