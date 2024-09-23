
// src/app/components/Card.tsx
const Cards = () => {
  return (
    <section className=" bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Awsome Services</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>

              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Production</h3>
              <p className="mt-4 text-base text-gray-500">
                고객 중심의 명확하고 논리적인 서비스 설계로 최상의 사용자 경험을 제공합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="text-indigo-500">
                <svg className="h-12 w-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
</svg>

              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Design</h3>
              <p className="mt-4 text-base text-gray-500">직관적이면서도 세련된 UI/UX 디자인을 통해 사용자의 몰입도를 극대화합니다.</p>
            </div>
            
            <div className="text-center">
              <div className="text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>

              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Backend Dev</h3>
              <p className="mt-4 text-base text-gray-500">안정적이고 효율적인 시스템 아키텍처로 최적화된 성능과 보안성을 보장합니다.</p>
            </div>
            





            {/* 추가 기능은 이와 같은 형식으로 추가 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
