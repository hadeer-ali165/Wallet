import React from 'react'
import footer from './Footer.module.css'
const Footer = () => {
  return (
    <>
    <div className="bg-[#212428] text-[#CEDFF6] pt-25 pb-5">
        <div className={`${footer.containerNav} container mx-auto`}>
            <div className={`${footer.boxs} flex flex-wrap justify-between`}>
                <div className={`${footer.box1} w-[23%]`}>
                    <h2 className='text-[30px] font-semibold text-[#FF014F]'>LOGO</h2>
                    <p className=' capitalize text-[13px] py-3'>when an unknown printer type and scrambled it type specimen book</p>
                </div>
                <div className={`${footer.box} w-[23%]`}>
                    <h2 className='pb-0 font-semibold text-[25px]'>My Account</h2>
                    <p className='text-[14px] pt-6'> Wallet</p>
                    <p className='text-[14px] pt-6'> My Account</p>
                    <p className='text-[14px] pt-6'> Create Item</p>
                    <p className='text-[14px] pt-6'> Creator Dashdoard</p>
                </div>
                <div className={`${footer.box} w-[23%]`}>
                    <h2 className='pb-0 font-semibold text-[25px]'>Web Links</h2>
                    <p className='text-[14px] pt-6'> Product Details</p>
                    <p className='text-[14px] pt-6'> Rankings</p>
                    <p className='text-[14px] pt-6'> Collections</p>
                    <p className='text-[14px] pt-6'> User Profile</p>
                </div>
                <div className={`${footer.contact} w-[23%]`}>
                    <h2 className='pb-0 font-semibold text-[25px]'>Contact</h2>
                    <p className='text-[14px] pt-7'><span className=' text-[20px]'>Address :</span> Lalbag Road, Rangpur 5402</p>
                    <p className='text-[14px] pt-7'><span className=' text-[20px]'>Phone :</span> 333-222-2222</p>
                    <p className='text-[14px] pt-7'> <span className=' text-[20px]'>Email :</span>Support@gmail.com</p>
                </div>
            </div>
            <div className="txts pt-15 text-[15px] text-center">
                <p>Copyright © 2021. Created with love by OrdainIT</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
