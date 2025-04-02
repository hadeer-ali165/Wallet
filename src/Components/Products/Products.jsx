import React, { useEffect, useState } from 'react'
import prod from './Products.module.css'
import ProductsData from './../../Data/ProductData';
const Products = () => {
    let countDownData = new Date("2025-05-16T23:59:59"); // Ensure correct date format

    let counterDate = () => {
        let newDate = new Date();
        let dateDiff = countDownData - newDate; // Difference in milliseconds
    
        let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); // Calculate days
        let setHour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
        let setMinute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
        let setSecond = Math.floor((dateDiff % (1000 * 60)) / 1000); // Calculate seconds
    
        return { day, setHour, setMinute, setSecond };
    };
    
    const [time, setTime] = useState(() => counterDate());
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(counterDate()); // Update state with new time values
        }, 1000);
        return () => {
            clearInterval(timer); // Clear interval when component unmounts
        };
    }, []);
    
    // console.log(time);

    const[data,setData] = useState(ProductsData);
    // console.log(time.setSecond)
  return (
    <>
    <div className="bg-[#212428] text-[#CEDFF6] pt-10">
        <div className={`${prod.containerNav} container mx-auto`}>
            <div className={`${prod.title}`}>
            <h2 className='text-[30px] font-semibold'>NFT Products Live Action <span className='text-[70px] text-[#FF014F]'>.</span></h2>
            <p className='w-[50%] pb-5 text-[16px] text-[#FFFFFF]'>when an unknown printer took a galley of type and scrambled it to
            make a type specimen book . It has survived not only five
            but also the leap into electronic typesetting</p>
            </div>
            <div className={`${prod.flexBox} flex flex-wrap`}>
                {data.map((el)=>
                <div className={`${prod.boxs} rounded-[10px] overflow-hidden mt-5 w-[250px] bg-[#212428]`}>
                    <div className="imgs">
                        <img src={el.img} alt="" className='w-[100%] h-[170px]'/>
                    </div>
                    <div className={`${prod.timer} flex px-3 py-2 text-[10px] font-semibold`}>
                        <div className="days bg-[#191B1F] px-2 py-1 rounded-[5px]">
                            <p className='pb-1'>{time.day < 10 ? `0${time.day}` : time.day}</p>
                            <p>D</p>
                        </div>
                        <span className='text-[20px] text-[#FF014F]'>:</span>
                        <div className="hour bg-[#191B1F] px-2 py-1 rounded-[5px]">
                            <p className='pb-1'>{time.setHour < 10 ? `0${time.setHour}` : time.setHour}</p>
                            <p>H</p>
                        </div>
                        <span className='text-[20px] text-[#FF014F]'>:</span>
                        <div className="minute bg-[#191B1F] px-2 py-1 rounded-[5px]">
                            <p className='pb-1'>{time.setMinute < 10 ? `0${time.setMinute}` : time.setMinute}</p>
                            <p>M</p>
                        </div>
                        <span className='text-[20px] text-[#FF014F]'>:</span>
                        <div className="socend bg-[#191B1F] px-2 py-1 rounded-[5px]">
                            <p className='pb-1'>{time.setSecond < 10 ? `0${time.setSecond}` : time.setSecond}</p>
                            <p>S</p>
                        </div>
                    </div>
                    <h4 className='text-[16px] px-3 pt-1 pb-2'>{el.title}</h4>
                    <div className={`${prod.txt} flex text-[8px] px-3`}>
                        <p>{el.txt}</p>
                        <p>{el.txt2}</p>
                    </div>
                    <button className='my-5 mx-3 border-[#FF014F] border-1 px-3 text-[13px] outline-0 cursor-pointer py-1 rounded-[5px]'>{el.btn}</button>
                </div>
                )}
            </div>
        </div>
    </div>
    </>
  )
}

export default Products
