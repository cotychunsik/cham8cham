import Image from "next/image";
import { PaintBrushIcon } from "@heroicons/react/24/outline";

export default function About2() {
    return(

          <div className="mx-0 sm:mx-auto w-auto h-auto sm:max-w-7xl sm:h-auto lg:px-8 mb-10">
      <div className="relative mx-auto max-w-2xl  sm:gap-y-20 lg:mx-0 lg:max-w-none items-center">
        {/* 이미지와 오버레이 텍스트를 담는 컨테이너 */}
        <div className="relative w-screen h-fit sm:w-auto">
          {/* 이미지 */}
          <Image
            alt="About 참참컴퍼니"
            className="object-center object-cover sm:aspect-video w-screen h-[600px] sm:h-full"
            src={
              "https://images.unsplash.com/photo-1658494787699-a2e0ed4c1064?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={1114}
            height={626}

          />

          {/* dim 처리된 오버레이 */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* 텍스트 오버레이 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative text-center text-white p-8 max-w-2xl">
              <div className="text-indigo-700 h-14 w-14 mx-auto mb-4">
                <PaintBrushIcon className="text-indigo-200 sm:text-indigo-400" />
              </div>
              <h2 className="text-base font-semibold leading-7 text-indigo-200 sm:text-indigo-400">
               we approach carefully 
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                우리의 접근 방식
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-200">
                 모든 프로젝트는 각각의 목표와 도전 과제를 가지고 있으며, 저희의 접근 방식도 마찬가지로 유연합니다. 
                 고객의 목표를 깊이 이해하고, 이에 맞춘 맞춤형 솔루션을 설계하여 비전과 정확히 일치하는 결과물을 만들어냅니다. 
                 기획부터 실행까지, 저희는 변화나 새로운 요구 사항이 있을 때에도 항상 유연하게 대응합니다.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
            
    )
};
