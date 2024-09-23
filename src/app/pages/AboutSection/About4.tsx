import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function About4() {
    return(

       <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
      <div className="relative mx-auto max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none items-center">
        {/* 이미지와 오버레이 텍스트를 담는 컨테이너 */}
        <div className="relative">
          {/* 이미지 */}
          <Image
            alt="About 참참컴퍼니"
            className="w-screen aspect-video object-cover"
            src={
              "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <SparklesIcon />
              </div>
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
               Remote and Accurate
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                비대면 협업의 우수성
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                                          참참컴퍼니는 비대면 협업에 특화된 팀으로, 장소에 구애받지 않고 고품질의 결과물을 제공합니다. 
                                          효과적인 소통, 프로젝트 관리 도구, 투명한 진행 상황 업데이트를 통해 물리적인 거리가 성과에 장애가 되지 않도록 하고 있습니다.



              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


             
    )
};
