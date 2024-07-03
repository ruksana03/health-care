import img from '../../assets/Rectangle24.png'
import { MdOutlineArrowOutward } from "react-icons/md";

const WhoWeAre = () => {
    return (
        <div className=" p-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
                <button className="btn-style3 my-6">Who we are</button>
                <h2 className="text-3xl font-bold mb-4 lg:mr-48">We Help To Get Solutions</h2>
                <p className="text-[#4D4C7B] text-sm mb-4 lg:mr-32">
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="btn-style flex justify-center items-center gap-4">
                    Learn more <MdOutlineArrowOutward />
                </button>
            </div>
            <div className="md:w-1/2 p-4 flex flex-col items-center">
                <img src={img} alt="Doctor" className="rounded-lg shadow-lg relative" />
                <div className="bg-[#343268] text-white p-8 rounded-2xl shadow-lg absolute mt-44 md:mt-52 lg:right-96 lg:mt-[260px]  w-[332px]">
                    <h3 className="text-lg font-bold mb-2">Our mission is simple</h3>
                    <p className="text-sm">
                        To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;