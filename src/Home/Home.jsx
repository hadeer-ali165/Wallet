import Items from '../Components/Items/Items';
import Navbar from '../Components/Navbar/Navbar';
import Header from './../Components/Header/Header';
import Category from './../Components/Category/Category';
import Sellers from './../Components/Sellers/Sellers';
import Sell from './../Components/Sell/Sell';
import Products from './../Components/Products/Products';
import Collections from './../Components/Collections/Collections';
import Footer from './../Components/Footer/Footer';
const Home = () => {
  return (
    <>
    <div className="bg-[#212428]">
    <Navbar/>
    <Header/>
    <Items/>
    <Category/>
    <Sellers/>
    <Sell/>
    <Products/>
    <Collections/>
    <Footer/>
    </div>
    </>
  )
}

export default Home
