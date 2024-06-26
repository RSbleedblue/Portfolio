import VerticalLinearStepper from "../../sub-components/EducationLineStepper";
import HomeBasicInfo from "../../sub-components/HomebasicInfo";
import WorkLineStepper from "../../sub-components/WorkLineStepper";

import HomeLanguages from "./HomeLanguages";
import HomePrimaryFocus from "./HomePrimaryFocus";

const Home = ({ isExpanded }) => {
  return (
    <>
      <div className={`h-screen flex flex-col items-start gap-10 w-full transition-all p-6 ${isExpanded ? 'ml-[16%]' : 'ml-14'}`}>
        <div className="bg-white p-4 rounded-full ">
          <label className="text-[80px] text-gray-700 ">About</label>
        </div>
        <div className="flex w-full gap-24">
          <div className="w-[70%] -mt-10">
            <div className="w-full text-sm  p-2 text-justify text-gray-700 ">
              <p>
                Hello there! 👋 My name is Rivansh and I'm from Bihar, India. As
                a Full-Stack software developer, I specialize in creating
                visually appealing websites, Ui UX designs and apps. My passion
                for graphic design isn't just a hobby, it's a key ingredient in
                every project I work on.
              </p>
            </div>
            <div className="w-[90%] flex gap-4 items-center p-2">
              <HomeBasicInfo />
            </div>
          </div>
          <div className="w-[30%] -mt-[5%] rounded-lg shadow-xl p-6 transition-all">
            <HomeLanguages />
          </div>
        </div>
        <div className="w-[70%] -mt-[25%] p-4 shadow-xl rounded-lg">
          <label className="text-[40px] text-gray-700 ">
            Primary focus
          </label>
          <HomePrimaryFocus />
        </div>
        <div className="w-[70%]  p-4 shadow-xl rounded-lg">
          <label className="text-[40px] text-gray-700 ">
            Education
          </label>
          <div>
            <VerticalLinearStepper />
          </div>
        </div>
        <div className="w-[70%]  p-4 shadow-xl rounded-lg">
          <label className="text-[40px] text-gray-700 ">
            Work Experience
          </label>
          <div>
            <WorkLineStepper />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
