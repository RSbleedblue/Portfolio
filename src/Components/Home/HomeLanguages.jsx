import ProgressBar from "@ramonak/react-progress-bar";
const HomeLanguages = () => {
    return (
        <>
            <div className="w-full -mt-[5%]  p-6 transition-all">
                <label className="text-[50px] text-gray-700 ">
                    Languages
                </label>
                <div className="w-full l p-2 mt-2 flex flex-col gap-2">
                    <p>Node.js <ProgressBar completed={""} completedClassName="bg-rose-300 w-[70%]" /></p>

                    <p>React <ProgressBar completed={""} completedClassName="bg-sky-600 w-[70%]" /></p>

                    <p>JavaScript <ProgressBar completed={""} completedClassName="bg-sky-300 w-[85%]" /></p>

                    <p>Java <ProgressBar completed={""} completedClassName="bg-orange-300 w-[75%]" /></p>
                    <p>MongoDB <ProgressBar completed={""} completedClassName="bg-green-300 w-[82%]" /></p>

                    <p>Tailwind <ProgressBar completed={""} completedClassName="bg-yellow-300 w-[90%]" /></p>
                </div>

            </div>
        </>
    )
}
export default HomeLanguages;