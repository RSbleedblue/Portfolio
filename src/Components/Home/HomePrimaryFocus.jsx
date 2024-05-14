import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { CiGlobe } from "react-icons/ci";
import { SiGravatar } from "react-icons/si";
import { IoIosApps } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";

const FocusCards = ({ icon, title, desc, onClick, layoutId }) => {
    return (
        <motion.div
            className="w-[48%] p-6 rounded-lg shadow-xl flex items-center justify-start gap-4 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.05 }}
            onClick={onClick}
            layoutId={layoutId} 
        >
            {icon}
            <div className="flex flex-col gap-1 items-start w-full">
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-sm text-gray-700 text-justify">{desc}</p>
            </div>
        </motion.div>
    );
};

const HomePrimaryFocus = () => {
    const [selectedId, setSelectedId] = useState(null);
    const items = [
        {
            id: 1,
            title: "Web Design & Development",
            subtitle: "Crafting User-Friendly and Visually Stunning Websites",
            icon: <CiGlobe className="text-[40px] text-emerald-500" />,
            desc: "Specializing in the creation of aesthetically pleasing, easy-to-navigate websites that enhance user experience and drive engagement for businesses and individuals."
        },
        {
            id: 2,
            title: "Full-Stack Solutions",
            subtitle: "Building Comprehensive Web Applications",
            icon: <CgWebsite className="text-[40px] text-emerald-500" />,
            desc: "Delivering robust and scalable web applications utilizing modern JavaScript frameworks, MongoDB databases, and Node.js, seamlessly integrated with React for a full-stack development solution."
        },
        {
            id: 3,
            title: "Mobile Apps",
            subtitle: "Developing Engaging Mobile Applications",
            icon: <IoIosApps className="text-[40px] text-emerald-500" />,
            desc: "Creating captivating mobile applications and games tailored for iOS and Android platforms, focusing on user engagement and seamless performance across devices."
        },
        {
            id: 4,
            title: "AI Powered Systems",
            subtitle: "Innovating with Artificial Intelligence",
            icon: <SiGravatar className="text-[40px] text-emerald-500" />,
            desc: "Designing and implementing advanced systems that leverage artificial intelligence to enhance functionality, efficiency, and user experience across various applications."
        }
    ];


    const selectedItem = items.find(item => item.id === selectedId);

    return (
        <LayoutGroup>
            <div className="w-full flex flex-wrap justify-between gap-4">
                {items.map(item => (
                    <FocusCards
                        key={item.id}
                        title={item.title}
                        icon={item.icon}
                        desc={item.desc}
                        onClick={() => setSelectedId(item.id)}
                        layoutId={item.id} 
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        layoutId={selectedId}
                        className="fixed inset-0 flex items-center justify-center transition-all delay-200 bg-opacity-70"
                        style={{ backdropFilter: 'blur(8px)' }}
                    >
                        <motion.div className="w-[30%] p-6 rounded-lg shadow-xl bg-white transition-all delay-200 flex flex-col gap-2">
                            <motion.h1 className="text-xl font-semibold">{selectedItem.subtitle}</motion.h1>
                            <motion.h2 className="text-sm text-gray-600">{selectedItem.title}</motion.h2>
                            <motion.p className="text-sm">{selectedItem.desc}</motion.p>
                            <motion.button
                                className="mt-4 p-2 bg-emerald-500 text-white rounded-lg"
                                onClick={() => setSelectedId(null)}
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </LayoutGroup>
    );
};

export default HomePrimaryFocus;
