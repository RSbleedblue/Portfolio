const FocusCards = ({ icon, title, desc }) => {
    return (
        <div className="w-[48%] p-6 rounded-lg shadow-xl flex items-center justify-start gap-4">
            {icon}
            <div className="flex flex-col gap-1 items-start w-full">
                <p className="text-l font-semibold">{title}</p>
                <p className="text-sm text-gray-700 text-justify">
                    {desc}
                </p>
            </div>
        </div>
    );
};
export default FocusCards;