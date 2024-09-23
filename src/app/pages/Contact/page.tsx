import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
// import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";

// src/app/pages/contact
const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 min-w-full">
      <div className="flex flex-row justify-content items-center container mx-auto">
        {/* <div className="flex min-w-96">
          <Image className="rounded-3xl shadow-md flex-1 "
          alt="contact" src="https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          width={635} height={953}></Image>
        </div> */}
      <div className=" flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-contactBg bg-cover bg-center w-full h-44 sm:h-96 rounded-xl"></div>
        <h1 className="text-4xl font-extrabold text-gray-900">Get in Touch</h1>
        <p className="mt-4 text-lg leading-6 text-gray-500">참참컴퍼니에서 빠르고 정확한 비대면 개발을 만나보세요!</p>
        <div className="mt-8 tracking-wider leading-loose">
          {/* <div className="contactIconDiv">
            <PhoneIcon className="h-8 w-8"/>
          <Link href="tel:821234567890">+82 123-4567-890</Link>
          </div> */}
          <div className="contactIconDiv">
          <EnvelopeIcon className="h-8 w-8 mr-2"/>
          <Link href="mailto:charm8cham@gmail.com">charm8cham@gmail.com</Link>

          </div>

          <div className="contactIconDiv">
            <ChartBarIcon className="h-8 w-8 mr-2"/>
            <Link href="https://www.wishket.com/partners/p/charm8cham/">위시켓 파트너홈:참참컴퍼니</Link>
          </div>
          <div className="contactIconDiv">
            <MapPinIcon className="h-8 w-8 mr-2"/>
          <p> 부산광역시 해운대구 대천로67번길 12, 4층 401호 J64호</p>
          </div>
          <div className="contactIconDiv">
            <ClockIcon className="h-8 w-8 mr-2"/>
                    <p>월-금, 오전 9시 - 오후 6시</p>
          </div>


        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
