import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
// src/app/components/FeaturesSection.tsx
const FAQ = () => {
  return (
    <section className="min-h-fit bg-white py-16 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">자주하시는 질문</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-indigo-500 w-12 h-12 mx-auto">
                <QuestionMarkCircleIcon/>
               </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">미팅은 어떻게 이루어지나요?</h3>
              <p className="mt-4 text-base text-gray-500">전화, 화상미팅을 통해 진행합니다. 필요에 따라 장소 협의 후 대면 미팅도 가능합니다. </p>
            </div>
            <div className="text-center">
              <div className="text-indigo-500 w-12 h-12 mx-auto">
                <QuestionMarkCircleIcon/>
               </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">개발기간은 어느정도 소요되나요?</h3>
              <p className="mt-4 text-base text-gray-500">개발 기간은 프로젝트의 규모, 복잡성에 따라 상이합니다. 기능없는 퍼블리싱은 5장 내외로 working day 7일 이내에 완료됩니다. </p>
            </div>
            <div className="text-center">
              <div className="text-indigo-500 w-12 h-12 mx-auto">
                <QuestionMarkCircleIcon/>
               </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">기능 개발 가능한가요?</h3>
              <p className="mt-4 text-base text-gray-500">네, SI 경력 백엔드 개발자가 팀원에 있기 때문에 가능합니다.</p>
            </div>
            

            {/* 추가 기능은 이와 같은 형식으로 추가 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
