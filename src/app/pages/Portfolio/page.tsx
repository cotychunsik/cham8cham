// Home.tsx
'use client';

import Image from "next/image";
import Link from "next/link";


export default function Portfolio() {
  return (
      <main className="flex-1 min-v-screen">
        <section id="HeroSection" className='pt-8 md:pt-12 lg:pt-20 pb-0 md:pb-0'>
          <div className="container px-6 mx-auto text-center">
            <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>
              Our Works
            </h1>
            <div className='max-w-xl mx-auto mt-2 text-lg font-light leading-tight text-gray-500 sm:text-xl md:text-2xl'>
              <p></p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container text-gray-500 text-center mt-10 leading-loose">
            <p>Charm&Cham Co.는 2024년 9월 결성된 스타트업으로 </p>
            <p>아직은 미흡하지만 걸음마를 떼는 아이처럼 차근차근 비전을 만들어가고 있습니다.</p>
            <p>아래 포트폴리오에서는 저희가 진행한 다양한 프로젝트와 그 결과물을 확인하실 수 있습니다.
            </p>
            </div>
          </div>

          <div className="relative max-h-full grid sm:grid-cols-3 mt-10 sm:overflow-clip grid-cols-1">
            <Link href="https://sample03-repo.vercel.app/">
              <Image alt="image1" src="/assets/banner/portfolio01.png"
              width={692} height={693} className="object-contain scale-150 "></Image>

            </Link>
                        <Link href="https://sample03-repo.vercel.app/pages/Portfolio">
              <Image alt="image1" src="https://images.unsplash.com/photo-1615528650248-8630bcd26814?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={692} height={693} objectFit="cover"></Image>
            </Link>
                                    <div className="">
              <Image alt="image1" src="https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={692} height={693} objectFit="cover"></Image>
            </div>
            </div>

        </section>

      </main>

  );
}
