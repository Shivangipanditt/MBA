export default function Hero_Section2() {
    return (
        <div className="bg-gray-100 py-1  px-1">
            <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 gap-1">
                {/* Box 1 */}
                <div className="bg-[#FB7C27] h-24 shadow-md md:h-28  text-center">
                    <div className="flex ml-4 mt-4 size  gap-2">
                        <img className="size-5 md:size-9" src="Features.webp" />
                        <h2 className="text-sm md:text-2xl  text-white font-bold mb-2">Features</h2>
                    </div>
                    <p className="text-white md:text-[15px] md:mr-9 text-sm mr-3">100% Placement Assistance</p>
                </div>

                {/* Box 2 */}
                <div className="bg-[#EF304C]  h-24 shadow-md md:h-28  text-center">
                    <div className="flex ml-4 mt-4 size  gap-2">
                        <img className="size-5 md:size-9" src="university-icon.webp" />
                        <h2 className="text-sm md:text-2xl  text-white font-bold mb-2">Approvals</h2>
                    </div>
                    <p className="text-white md:text-[15px]  text-sm mr-3">UGC-DEB , NAAC & AICTE Accredited</p>
                </div>

                {/* Box 3 */}
                <div className="bg-[#630098]  h-24 shadow-md md:h-28  text-center">
                    <div className="flex ml-4 mt-4 size  gap-2">
                        <img className="size-5 md:size-9" src="eligibility-ivon.webp" />
                        <h2 className="text-sm md:text-2xl  text-white font-bold mb-2">Facility</h2>
                    </div>
                    <p className="text-white md:text-[15px] md:mr-9 text-sm mr-3">Zero Cost EMI Available</p>
                </div>

                {/* Box 4 */}
                <div className="bg-[#005EB0]   h-24 shadow-md md:h-28  text-center">
                    <div className="flex ml-4 mt-4 size  gap-2">
                        <img className="size-5 md:size-9" src="fees-starting-icon.webp" />
                        <h2 className="text-sm md:text-2xl  text-white font-bold mb-2">Fees Starting at </h2>
                    </div>
                    <p className="text-white md:text-[15px] md:mr-9 text-sm mr-3">1500 /- Per Semester</p>
                </div>
            </div>
        </div>
    );
}
