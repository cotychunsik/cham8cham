// Home.tsx

import Image from "next/image";
import Cards from './components/Cards' //features
// import CTA from './components/CTA';
import FAQ from "./pages/FAQ/page";
import AboutSlider from "./pages/AboutSection/page";

export default function Home() {
  return (
      <main className="flex-1">
        <section id="HeroSection" className='pt-8 md:pt-12 lg:pt-20 pb-0 md:pb-0'>
          <div className="container px-6 mx-auto text-center">
            <div className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl sm:block hidden '>
              <Image alt="wide logo" src="/assets/logo/widec8c.png" width={600} height={170} className="animate-fade mx-auto scale-50 sm:scale-75"></Image>
            </div>
            <div className='max-w-xl mx-auto mt-2 text-lg font-light leading-tight text-gray-500 sm:text-xl md:text-2xl'>
              <p className="hidden sm:block">Fast, Accurate, Professional</p>
            </div>
          </div>
          <AboutSlider/>
            {/* <Image alt='??' src={"/assets/banner/hero01.webp"} width={1024} height={1024} className='mx-auto relative rounded-xl shadow-xl scale-75 aspect-video object-cover'/> */}
        </section>
        <Cards/>
        {/* <CTA/> */}
        <FAQ/>

      </main>

  );
}
