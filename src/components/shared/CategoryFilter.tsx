import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { ProductAPIDataProps } from '../../utils/dummyCategories';

type categoriesProps = {
  categories: string[];
  apiData: ProductAPIDataProps;
};

function CategoryFilter({ categories, apiData }: categoriesProps) {
  const [activeItem, setActiveItem] = useState(0);

  let result = apiData.filter(
    (curProduct) => curProduct.category === categories[0],
  );

  const [data, setData] = useState(result);

  const filterResult = (category: string) => {
    result = apiData.filter((curProduct) => curProduct.category === category);
    setData(result);
  };

  // Category Onclick event handler for mobile devices
  const handlePrev = () => {
    const isFirstCategory = activeItem === 0;
    const newIndex = isFirstCategory ? categories.length - 1 : activeItem - 1;
    setActiveItem(newIndex);

    result = apiData.filter(
      (curProduct) => curProduct.category === categories[newIndex],
    );
    setData(result);
  };

  const handleNext = () => {
    const isLastSlide = activeItem === categories.length - 1;
    const newIndex = isLastSlide ? 0 : activeItem + 1;
    setActiveItem(newIndex);

    result = apiData.filter(
      (curProduct) => curProduct.category === categories[newIndex],
    );
    setData(result);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative hidden sm:flex flex-col sm:flex-row justify-between bg-white shadow-md p-1 border rounded-lg border-gray-400 dark:bg-transparent dark:bg-opacity-30 dark:border-cyan-600">
        {categories.map((item, index) => (
          <button
            type="button"
            key={uuidv4()}
            className={`px-8 py-1 cursor-pointer ${
              activeItem === index
                ? 'border rounded border-gray-400 dark:border-cyan-600  dark:text-cyan-500'
                : 'text-gray-400  dark:text-cyan-700'
            }`}
            onClick={() => {
              setActiveItem(index);
              filterResult(categories[index]);
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* For small screens */}
      <div className="flex sm:hidden w-full justify-between">
        <button type="button" onClick={handlePrev}>
          <BsChevronCompactLeft size={24} className="dark:text-cyan-500" />
        </button>
        <div className="px-12 py-1 border border-gray-400 bg-white  shadow-md rounded dark:bg-transparent dark:border-cyan-600  dark:text-cyan-500">
          {categories[activeItem]}
        </div>
        <button type="button" onClick={handleNext}>
          <BsChevronCompactRight size={24} className="dark:text-cyan-500" />
        </button>
      </div>
      {/* End For small screens */}

      {/* display of dummy api data */}
      <div className="flex sm:flex-row flex-col justify-between flex-wrap">
        {data.map((product) => (
          <NavLink to="" key={product.id}>
            <div key={product.id} className="w-full dark:text-white px-2 py-2">
              <div className="w-full h-30vh sm:h-[40vh]">
                <img
                  className="w-full h-full"
                  src={`${product.image}`}
                  alt=""
                />
              </div>
              <p>{product.name}</p>
              <p>{product.category}</p>
            </div>
          </NavLink>
        ))}
      </div>
      {/* End of display of dummy api data */}
    </div>
  );
}

export default CategoryFilter;
