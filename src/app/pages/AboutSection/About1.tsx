import Image from "next/image";
import { CubeIcon } from "@heroicons/react/24/outline";

export default function About1() {
  return (
    <div className=" mx-0 sm:mx-auto w-auto h-auto sm:max-w-7xl sm:h-auto  lg:px-8 mb-10">
      <div className="sm:relative mx-auto max-w-2xl sm:gap-y-20 lg:mx-0 lg:max-w-none items-center">
        {/* 이미지와 오버레이 텍스트를 담는 컨테이너 */}
        <div className="relative w-screen h-fit sm:w-auto">
          {/* 이미지 */}
          <Image
            alt="About 참참컴퍼니"
            className="object-center object-cover sm:aspect-video w-screen h-[600px] sm:h-full"
            src={
              "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={1114}
            height={626}
          />

          {/* dim 처리된 오버레이 */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* 텍스트 오버레이 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative text-center text-white p-10 max-w-2xl">
              <div className="text-indigo-700 h-14 w-14 mx-auto mb-4">
                <CubeIcon />
              </div>
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                We are Charm & Cham Co.
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                왜 참참컴퍼니 인가?
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-200">
                참참컴퍼니는 맞춤형 IT 솔루션을 제공하는 데 자부심을 가지고
                있으며, 단순히 기대를 충족하는 것을 넘어 더 나은 결과를
                목표로 합니다. 소규모의 민첩한 팀으로서 효율적인 소통과 빠른
                의사결정을 통해 프로젝트마다 손쉽게 대응할 수 있으며, 각
                클라이언트에게 집중적인 관심을 제공하는 것을 우선으로 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
