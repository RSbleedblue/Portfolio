import { FaHourglassEnd } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiLeo } from "react-icons/gi";
const HomeBasicInfo = () => {
  return (
    <>
      <div className="w-[30%] p-2 flex items-center gap-4 shadow-xl rounded-lg">
        <div className="p-4 shadow-xl rounded-lg">
          <FaHourglassEnd className="text-emerald-600 " />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl text-emerald-900">Age</p>
          <p className="text-gray-600 text-sm">24 years</p>
        </div>
      </div>
      <div className="w-[30%] p-2 flex items-center gap-4 shadow-xl rounded-lg">
        <div className="p-4 shadow-xl rounded-lg">
          <FaLocationDot className="text-emerald-600 " />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl text-emerald-900">Location</p>
          <p className="text-gray-600 text-sm">Bihar, India</p>
        </div>
      </div>
      <div className="w-[30%] p-2 flex items-center gap-4 shadow-xl rounded-lg">
        <div className="p-4 shadow-xl rounded-lg">
          <GiLeo className="text-emerald-600 " />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl text-emerald-900">Zodiac</p>
          <p className="text-gray-600 text-sm">Leo</p>
        </div>
      </div>
    </>
  );
};
export default HomeBasicInfo;
