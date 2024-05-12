

import ProgressBar from "@ramonak/react-progress-bar";
const HomeLanguages = () => {
    return (
        <>
            <div className="w-full -mt-[5%]  p-6 transition-all">
             <label className="text-[50px] text-gray-700 ">
                Languages
              </label>
              <div className="w-full l p-2 mt-2 flex flex-col gap-2">
                  <p>Node.js <ProgressBar completed={""} completedClassName="bg-emerald-300 w-[80%]"/></p>
                  
                  <p>React <ProgressBar completed={""} completedClassName="bg-emerald-300 w-[60%]"/></p>
                  
                  <p>JavaScript <ProgressBar completed={""} completedClassName="bg-emerald-300 w-[85%]"/></p>
                  
                  <p>Java <ProgressBar completed={""} completedClassName="bg-emerald-300 w-[65%]"/></p>
                  
                  <p>Tailwind <ProgressBar completed={""} completedClassName="bg-emerald-300 w-[90%]"/></p>
              </div>
             
            </div>
        </>
    )
}
export default HomeLanguages;