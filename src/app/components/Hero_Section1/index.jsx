import { Button } from 'antd';

const HeroSection = () => {
    return (
        <section className="hero-section bg-[#f9f3f3bc] mt-10  flex flex-wrap items-center justify-center">
            {/* Left Section: Text */}
            <div className="w-full md:w-1/2   ">
                <div className="ml-5 md:ml-16 ">
                    <p className="text-[#0B2F9F] md:text-lg md:mb-2  mt-4">#GoOnlineWithSODE</p>
                    <h1 className="text-[#001A6E] md:mt-1 md:text-5xl font-bold text-3xl">Online/Distance MBA</h1>
                    <p className="text-2xl md:text-3xl md:mt-4 mt-2">(Master of Business Administration)</p>
                </div>

                <div className='p-1 mt-3 ml-4 md:ml-16 md:mt-8  flex  space-x-3'>
                    <Button className='bg-[#009933]  text-white text-sm px-4 py-5 rounded-md' >
                        Download Brochure
                    </Button>
                    <Button className='bg-[#009933] text-white text-sm px-4 py-5 rounded-md ' >
                        Compare Universities
                    </Button>
                </div>
                <div className='ml-4 mt-3'>
                    <span className='font-bold md:ml-11  '>Specialization:</span>
                    <p className='text-[#003399] md:ml-11 mt-2'> Finance | Marketing | Human Resource Management | Data Science | Digital Marketing | Business Analytics | International Business | Information Technology | Operations Management</p>
                </div>
            </div>
            {/* Right Section: Image */}
            <div className="w-full md:w-1/2  flex justify-center">
                {/* Mobile Image */}
                <img
                    src="MBA-Mobile-image-front-1.webp"
                    alt="Hero Section Mobile Image"
                    className="block md:hidden"
                />
                {/* Desktop Image */}
                <img
                    src="mba-distance-university-banner.webp"
                    alt="Hero Section Desktop Image"
                    className="hidden md:block "
                />
            </div>
        </section>
    );
};

export default HeroSection;
