import graph from '../../assets/graph.png'
import cf from '../../assets/cf.png';
import video from '../../assets/video.png';
import doller from '../../assets/doller.png'
import { FaStar } from "react-icons/fa6";

import person2 from '../../assets/images/person2.png';
import person3 from '../../assets/images/person3.png';
import person4 from '../../assets/images/person4.png';
import person5 from '../../assets/images/person5.png';

const ComprehensiveCare = () => {

    const images = [ person2, person4, person5, person3]


    return (
        <div className="flex flex-col lg:flex-row justify-around items-center p-8 gap-4 ">
            <div className=" bg-fourth rounded-xl shadow-md w-[216px] h-[312px] p-4">
                <h1 className="head2">90%</h1>
                <p className="text-first">Patient satisfaction rate, reflecting our commitment.</p>
                <div className="w-28 h-28 mx-auto mt-6">
                    <img src={graph} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <h1 className='head2 text-center mx-8'>Comprehensive Care for Every Patient</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                    <div className=" bg-third shadow-md rounded-xl w-[216px] h-[190px] mt-4 p-4">
                        <h1 className="head2">500+</h1>
                        <p className="text-first mr-6">Board-certified doctors</p>
                        <div className="w-full mx-auto  flex justify-end">
                            <img className='w-16 ' src={cf} alt="" />
                        </div>
                    </div>

                    <div className="bg-fourth shadow-md rounded-xl w-[216px] h-[162px] p-4 mt-11">
                        <h1 className="head2 flex items-center gap-6">4.8 <span className="text-second"><FaStar/></span></h1>
                        <p className="text-gray-600">Over 20,000 Patients</p>
                        <div className="flex justify-start -space-x-6 rtl:space-x-reverse mt-4">
                            {images.map((image, index) => (
                                <div key={index} className="w-12 h-12">
                                    <img className="rounded-full w-full h-full object-cover" src={image} alt={`Patient ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=" bg-third shadow-md rounded-xl w-[216px] h-[190px] mt-4 p-4">
                        <h1 className="head2">$5000</h1>
                        <p className="text-first mr-6">Money spend for poor patient</p>
                        <div className="w-full mx-auto  flex justify-end">
                            <img className='w-16 ' src={doller} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-fourth rounded-xl shadow-md w-[216px] h-[312px] p-4">
            <h1 className="head2">50+</h1>
                <p className="text-first">Free lession video for patient</p>
                <div className="w-28 h-28 mx-auto mt-8">
                    <img src={video} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveCare;