import Image from "next/image";
import Link from "next/link";

// src/app/components/HeroSection.tsx
const CTA = () => {
  return (
    <section className="bg-white py-12">
      <div className="flex flex-col sm:flex-row gap-3 container mx-auto max-w-screen-sm justify-between items-center sm:max-w-screen-lg ">

<div className="flex-1 px-4 sm:px-6 lg:px-8 text-right ">
        <h1 className="text-4xl font-extrabold text-gray-900">Explorer with Us</h1>
        <p className="mt-4 text-lg leading-6 text-slate-500">
          비대면의 한계를 넘어 새로운 가능성을 탐색하세요.
        </p>
        <p className="text-lg leading-6 text-slate-500">
          참참컴퍼니가 당신의 아이디어를 현실로 만들어 드립니다.
        </p>
        <div className="flex items-center justify-end mt-8 space-x-10 ">
          <Link href="#" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-600 hover:bg-teal-900">무료 상담 예약하기</Link>
          {/* <Link href="/" className=" text-gray-500 hover:text-gray-600">Learn More</Link> */}
        </div>
        
      </div>
      <div className="flex">
        <Image className="flex rounded-xl w-96" 
        alt="Call us" src="https://images.unsplash.com/photo-1567016507665-356928ac6679?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={953} height={953}></Image>
      </div>
      </div>
      
      
    </section>
  );
};

export default CTA;
