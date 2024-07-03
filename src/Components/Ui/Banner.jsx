import img from '../../assets/Rectangle5.png'

const Banner = () => {
    return (
        <div className='relative '>
            <img  src={img} alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020048] to-[#00C19D]  opacity-20 banner "></div>
        </div>
    );
};

export default Banner;