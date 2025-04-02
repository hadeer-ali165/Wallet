import React, { useState } from 'react'
import cate from './Category.module.css';
import line from '../../../public/line.png'
import CategoryData from './../../Data/CategoryData';
const Category = () => {
  const [data , setData] = useState(CategoryData);
  const [originalData] = useState(CategoryData);
  const menueCategory = [...new Set(originalData.map((el) => el.category))];

  const filterData = (cat) => {
    if (cat === "Category") {
        setData(originalData); // Reset to original data when "All" is clicked
    } else {
        const newData = originalData.filter((items) => items.category === cat);
        setData(newData);
    }
};

  return (
    <>
    <div className="bg-[#212428] text-[#CEDFF6] pt-13">
      <div className={`${cate.containerNav} container mx-auto`}>
        <div className={cate.title}>
          <h2 className='text-[35px] font-semibold'>Trending In Category</h2>
          <img className={cate.line} src={line} alt="" />
        </div>
        <div className={`${cate.flexTxt} pt-5 flex`}>
          <p className='text-[19px] text-[#989CA2] w-[40%]'>when an unknown printer took a galley of type
          and scrambled it to make a type specimen
          book. It has survived not only five</p>
          <select
              className="bg-[#FF014F] py-2 px-5 outline-0 rounded-[5px]"
              onChange={(e) => filterData(e.target.value)} // Handle category change
            >
              <option value="Category">Category</option>
              {menueCategory.map((el) => (
                <option value={el} key={el} className="capitalize">
                  {el}
                </option>
              ))}
            </select>
        </div>
        <div className={`${cate.group} flex flex-wrap mt-7 text-center`}>
          {data.map((el)=>
          <div className={`${cate.box} mb-2 mt-5`}>
          <div className={`${cate.imgs} bg-[#212428] w-[250px] pt-3 h-[220px] rounded-[10px] relative`}>
          <img src={el.imgs} alt="" className={`${cate.bigCate} mx-auto w-[120px] pt-5`}/>
          <div className={`${cate.img2} mx-auto w-[50px] h-[50px]`}>
            <img src={el.smImg} alt="" className={`${cate.smimgs} w-[50px] h-[50px] rounded-[50%]`}/>
          </div>
          </div>
          <div className="txts pt-10">
          <h2 className='text-[18px] font-semibold'>{el.title}</h2>
          <h4 className='text-[15px] font-semibold'>{el.names}</h4>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Category
