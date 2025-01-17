import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { subtitle, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
            {subtitle}
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p> */}
        </div>

        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative min-h-[48px]">
                <dt className="flex items-center">
                  <div
                    className={`absolute flex items-center my-auto justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 my-auto text-lg leading-6 font-medium ">
                    {feature.name}
                  </p>
                </dt>
                {/* <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
