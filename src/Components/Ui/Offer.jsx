
import bg from '../../assets/Rectangle32.png'; 
import LogoLight from '../Shared/Logo/LogoLight';
import { GoArrowUpRight } from "react-icons/go";

const Offer = () => {
    return (
        <div
            className="relative flex justify-between  p-8 rounded-lg h-[477px] my-32"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-first opacity-100 rounded-lg"></div>
            
            <div className="text-white z-10 w-1/2 pt-10">
                <h1 className="head">Get Your First Appointment at 50% Off!</h1>
                <div className="flex flex-col md:flex-row space-x-4">
                    <button className="btn-style flex justify-center gap-4 items-center">
                        Appointment <GoArrowUpRight/>
                    </button>
                    <button className="btn-style2 flex justify-center gap-4 items-center">
                        Learn More <GoArrowUpRight/>
                    </button>
                </div>
            </div>
            <div className="z-10">
                <LogoLight/>
            </div>
            
        </div>
    );
};

export default Offer;
