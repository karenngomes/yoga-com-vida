import React from 'react';

import Head from 'next/head';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Yoga com Vida Torres</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Aulas de Yoga com Vida Torres" />
        <meta name="keywords" content="Yoga, Saúde" />
        <meta name="author" content="Karen Gomes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/images/blue-logo.png"
        ></link>
      </Head>
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        {/* <Canvas /> */}
        <LazyShow>
          <>
            <Product />
            {/* <Canvas /> */}
          </>
        </LazyShow>
        <LazyShow>
          <>
            <Features />
            {/* <Canvas /> */}
          </>
        </LazyShow>
        <LazyShow>
          <Pricing />
        </LazyShow>
        <LazyShow>
          <>
            {/* <Canvas /> */}
            <About />
          </>
        </LazyShow>
        <Analytics />
      </div>
    </React.Fragment>
  );
};

export default App;
