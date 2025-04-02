import head from './Header.module.css';
import ImagesHeader from '../../Data/Data';
const Header = () => {
    // let[imgs , setImgs] = useState(ImagesHeader)
return (
    <>
    <div className={`${head.header} bg-[#212428] text-[#E2E2E3]`}>
    <div className={`${head.containerNav} container mx-auto`}>
        <div className="flex content-between pt-[130px]">
            <div className={`${head.text} pt-7`}>
            <h1 className='text-5xl text-[#CEDFF6] font-semibold'>Discover Collect And Sell Extraordinary NFT</h1>
            <p className='pt-7 text-[21px] pe-6 text-[#989CA2]'>Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
            onveranderd, overgenomen in elektronische
            letterzetting. Het is in de jaren</p>
            <div className={`${head.btns}`}>
                <button className={`${head.fBtn} cursor-pointer bg-[#FF014F] px-7 py-3`}>Explore More</button>
                <button className={`${head.fBtn} ms-5 cursor-pointer border-1 border-[#FF014F] px-7 py-3`}>Connect Wallet</button>
            </div>
            </div>
            <div className={`${head.imgs} w-[25%]`}>
                <div>
                <div className={`${head.lineImage} flex`}>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/1.jfif" alt="" />
                    </div>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/2.jfif" alt="" />
                    </div>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/3.jfif" alt="" />
                    </div>
                </div>
                <div className={`${head.lineImage} flex`}>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/4.jfif" alt="" />
                    </div>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/5.png" alt="" />
                    </div>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/6.png" alt="" />
                    </div>
                </div>
                <div className={`${head.lineImage} flex`}>
                    <div className={head.img1}>
                        <img className={`w-[450px]`} src="../../../public/ImagesHead/7.jfif" alt="" />
                    </div>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/8.jfif" alt="" />
                    </div>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/9.png" alt="" />
                    </div>
                    <div className={head.img1}>
                        <img src="../../../public/ImagesHead/10.jfif" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
)
}

export default Header
