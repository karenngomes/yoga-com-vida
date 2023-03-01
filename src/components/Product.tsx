import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h2
          className={`w-full my-2 text-4xl sm:text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-primary'}
            >
              {word}{' '}
            </span>
          ))}
        </h2>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-6/6 sm:w-1/2 p-6 my-auto`}>
            <h3 className={`text-3xl  font-bold leading-none mb-3`}>
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full m-auto sm:w-1/2 p-6`}>
            <img
              className="h-6/6 m-auto max-w-[60%]"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full m-auto sm:w-1/2 p-6`}>
            <img
              className="h-6/6 m-auto max-w-[60%]"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 my-auto`}>
            <div className={`align-middle`}>
              <h3 className={`text-3xl  font-bold leading-none mb-3`}>
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 sm:mb-8`}>
                {secondItem?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
