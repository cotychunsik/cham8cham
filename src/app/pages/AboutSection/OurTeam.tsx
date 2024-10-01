import { WithTranslation,withTranslation } from "next-i18next";
import Image from "next/image"; 
// import Link from "next/link";

function OurTeam({t}:WithTranslation) {
  return (
       <section id="testimonials">
        <div className="mx-auto max-w-7xl py-10 sm:px-6 sm:py-4 lg:px-8">
        <div className=" text-center">
          <h3 className="text-xl text-sky-600">Introduce</h3>
          <h1 className="text-5xl font-semibold">
            Our Awesome Team
          </h1>

        </div>
        {/* 여기서부터는 카드 */}
        <div className="flex flex-col sm:flex-row gap-10 my-10">
          <div className="mx-auto w-4/5 sm:flex-1 bg-slate-200 rounded-xl"> 

            <div className="flex-1 px-10 py-5">
          
              
              <div className="flex-1 flex justify-start items-center mb-4">
                <Image alt="photo by unsplash" src="https://images.unsplash.com/photo-1614393617228-b82d535b738b?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={700} height={352}
                objectFit="cover" className="w-12 h-12 mr-3 mt-5 rounded-full"></Image>
                <p className="font-semibold mt-4">{t('ourTeam1.name')}신영진, Design/PM</p>
                <div>
                
                </div>
              </div>
              <div className="flex flex-col text-gray-700 leading-relaxed gap-4 ">
                              <p>Adobe suite 중급<br/>

웹 UI/UX 디자인 및 퍼블리싱 담당<br/>

SI에서 기획 및 PO 경험 있음</p>

                <p>I have intermediate expertise in Adobe Suite, particularly InDesign, and extensive experience in editing design, including textbook creation with both InDesign and Hangul. I handle web UI/UX design and publishing and have also served as a planner and product owner (PO) in SI projects.</p>
              </div>
              
            </div>
        </div>
        <div className="mx-auto w-4/5 sm:flex-1 bg-slate-200 rounded-xl">
            <div className="flex-1 px-10 py-5">
          
              
              <div className="flex-1 flex justify-start items-center mb-4">
                <Image alt="photo by unsplash" src="https://images.unsplash.com/photo-1520626337972-ebf863448db6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={527} height={352}
                objectFit="cover" className="w-12 h-12 mr-3 mt-5 rounded-full"></Image>

                <div>
                <p className="font-semibold mt-4">이유진 [Backend Developer]</p>
                <a href="https://github.com/U-jinLee" className="text-sm text-gray-500 ">github@U-jinLee</a>
                </div>
              </div>
              <div className="flex flex-col text-gray-700 leading-relaxed gap-4 ">
                <p>JAVA 개발자<br/>

SI 근무로 다져진 
커뮤니케이션 능력, PO역량 보유

ERD 모델링 및 설계 <br/> 

SQLD 취득함 <br/>

영상편집 가능</p>
                <p>I am a JAVA developer with strong communication skills and product ownership (PO) capabilities honed through SI work. I have experience in ERD modeling and design, hold an SQLD certification, and possess video editing skills</p>
              </div>
              
            </div>
        </div>
          <div className="mx-auto w-4/5 sm:flex-1 bg-slate-200 rounded-xl">
            <div className="flex-1 px-10 py-5">
          
              
              <div className="flex-1 flex justify-start items-center mb-4">

                <Image alt="photo by unsplash" src="https://images.unsplash.com/photo-1463462927315-fb10af2c68d8" width={552} height={368}
                 className="w-12 h-12 mr-3 object-cover mt-5 rounded-full"></Image>
                <div>
                <p className="font-semibold mt-4">신현균 [기획AD]</p>
                <p className="text-sm text-gray-500 "></p>
                </div>
              </div>
              <div className="flex flex-col text-gray-700 leading-relaxed gap-4">
                <p>경영학 전공<br/>

마케팅, 기획력 우수<br/>

논리정연하고 단순명료한 
기획능력 보유</p>
                <p>I majored in Business Administration at Korea university, excelling in marketing and planning, with a talent for clear, concise, and logical project planning.</p>
              </div>
              
            </div>
         </div>
 
        </div>
      </div>
      </section>
  );
}
export default withTranslation('ourTeamPage')(OurTeam);