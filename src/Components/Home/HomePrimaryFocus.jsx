import { CiGlobe } from "react-icons/ci";
import { SiGravatar } from "react-icons/si";
import { IoIosApps } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import FocusCards from "./FocusCards";
const HomePrimaryFocus = () => {
    return (
        <>
            <div className="w-full flex flex-wrap justify-between">
                <FocusCards title={"Web Design & Development"} icon={<CiGlobe className="text-[60px] text-emerald-500"/>} desc={"Creating attractive, easy-to-use websites that work well for businesses and individuals online."}/>
                <FocusCards title={"Full-Stack Solutions"} icon={<CgWebsite className="text-[60px] text-emerald-500"/>} desc={"Developing scalable web applications using JavaScript Frameworks, MongoDB Databases, Node js and react"}/>
                <FocusCards title={"Mobile Apps"} icon={<IoIosApps className="text-[60px] text-emerald-500"/>} desc={"Creating and developing engaging mobile apps and games for iOS and Android devices."}/>
                <FocusCards title={"Ai Powered Systems"} icon={<SiGravatar className="text-[60px] text-emerald-500"/>} desc={"Generating system which supports Ai."}/>
            </div>
        </>
    )
}
export default HomePrimaryFocus;