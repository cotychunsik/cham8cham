import Image from "next/image";
import { HomeModernIcon } from "@heroicons/react/24/outline";

export default function About3() {
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
              "https://images.unsplash.com/photo-1660663374499-9cbf2415ffb9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <HomeModernIcon />
              </div>
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
               Customize the Life
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                우리의 약속
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                              참참컴퍼니는 프로젝트 완료 후에도 고객의 성공을 위한 노력을 멈추지 않습니다. 
                              지속적인 피드백을 통해 작업 방식을 개선하고, 향후 프로젝트에서 더 나은 성과를 도출할 수 있도록 합니다. 
                              참참컴퍼니와 함께라면 단순히 팀을 고용하는 것이 아니라, 고객의 성장을 위한 장기적인 파트너를 얻게 되는 것입니다.


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};
