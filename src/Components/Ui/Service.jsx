
import cardImg1 from '../../assets/Rectangle27.png';
import cardImg2 from '../../assets/Rectangle27-2.png';
import cardImg3 from '../../assets/Rectangle27-3.png';
import { MdOutlineArrowOutward } from "react-icons/md";


const Service = () => {
    return (
        <div className="bg-third my-32 grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className='mr-24'>
                <button className="btn-style3">Service</button>
                <h1 className='head2 my-4'>Empowering Health, Enriching Lives</h1>
                <p className='mb-6 text-[#4D4C7B]'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                <button className='btn-style flex justify-center items-center gap-2'>Appointment <MdOutlineArrowOutward/></button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={cardImg1} alt="Advanced Technology" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute bottom-0 left-0 p-6 text-white bg-first opacity-70 w-2/3 m-4  rounded-2xl flex">
                    <div>
                        <h3 className="text-base font-bold mb-2 z-30">Advanced Technology</h3>
                        <p className="mb-4 text-xs">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                        </p>
                    </div>
                   
                    <button className=" mt-12 bg-second rounded-full w-12 flex items-center text-center p-2 h-8">
                        <MdOutlineArrowOutward className="" />
                    </button>
                </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={cardImg2} alt="Advanced Technology" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute bottom-0 left-0 p-6 text-white bg-first opacity-70 w-2/3 m-4  rounded-2xl flex">
                    <div>
                        <h3 className="text-base font-bold mb-2 z-30">Advanced Technology</h3>
                        <p className="mb-4 text-xs">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                        </p>
                    </div>
                   
                    <button className=" mt-12 bg-second rounded-full w-12 flex items-center text-center p-2 h-8">
                        <MdOutlineArrowOutward className="" />
                    </button>
                </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={cardImg3} alt="Advanced Technology" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute bottom-0 left-0 p-6 text-white bg-first opacity-70 w-2/3 m-4  rounded-md flex">
                    <div>
                        <h3 className="text-base font-bold mb-2 z-30">Advanced Technology</h3>
                        <p className="mb-4 text-xs">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                        </p>
                    </div>
                   
                    <button className=" mt-12 bg-second rounded-full w-12 flex items-center text-center p-2 h-8">
                        <MdOutlineArrowOutward className="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;