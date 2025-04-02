import { useState } from "react"
import navbar from './Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";
const Navbar = () => {
    console.log(navbar)
    const [listItems , setListItems] = useState(["Home" , "Discover" , "Activity" , "Page" , "Contact Us"]);
    const[open , setOpen] = useState(false)
return (
    <>
    <div className="bg-[#212428] text-[#E2E2E3] fixed top-0 z-22 left-0 right-0 shadow-lg shadow-gray-900">
        <div className={`${navbar.containerNav} container mx-auto `}>
            <nav className={`flex justify-between py-3 items-center`}>
                <h3 className=" text-[#FF014F] text-[30px] font-bold">Logo</h3>
                <div className={`${navbar.search}`}>
                    <input type="search" placeholder="Search" className="bg-[#343842] border-0 outline-0 w-[175px] py-[10px] px-5 rounded-full"/>
                </div>
                <ul className={`${navbar.lists} ${open ? navbar.open : ""} flex sm:flex-col flex-col md:flex-row lg:flex-row items-center`}>
                    {listItems.map((el)=>
                    <li>{el}</li>
                    )}
                    <div className={`${navbar.btns} flex sm:flex-col flex-col md:flex-row lg:flex-row items-center`}>
                        <button className={`${navbar.f_btn} border-[#FF014F] border-1 rounded-full cursor-pointer`}>Create</button>
                        <button className={`${navbar.s_btn} ms-3 bg-[#FF014F] rounded-full cursor-pointer`}>Connect Wallet</button>
                    </div>
                </ul>
                <span className={`${navbar.icons} cursor-pointer text-[20px]`} onClick={()=> {setOpen(!open)}}><FiAlignJustify /></span>
            </nav>
        </div>
    </div>
    </>
)
}

export default Navbar
