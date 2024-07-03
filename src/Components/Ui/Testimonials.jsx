import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";
import { GoStarFill } from "react-icons/go";

const testimonials = [
    {
        head: "Expertise and Compassion Combined",
        name: "Sarah D",
        title: "IT Professional",
        image: person1,
        feedback: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
        rating: 5
    },
    {
        head: "Life-Saving Care, Life-Changing Experience",
        name: "Michael R",
        title: "Business Executive",
        image: person2,
        feedback: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
        rating: 4
    },
    {
        head: "A Partner in Health and Wellness",
        name: "David S",
        title: "Lawyer",
        image: person3,
        feedback: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they’ve become my trusted partner in health and wellness.",
        rating: 5
    }
];

const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
};

const Testimonials = () => {
    return (
        <div className="p-4">
            <div className="mb-8">
                <button className="btn-style3">Testimonial</button>
                <h2 className="text-3xl font-bold mt-4">What they say about us</h2>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                        color: '#020043',
                    }}
                    modules={[Pagination]}
                    className="mySwiper custom-swiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-third p-6 rounded-lg h-60 mb-24 lg:mb-12">
                                <h1 className='font-bold'>{testimonial?.head}</h1>

                                <p className="text-[#4D4C7B] text-sm my-4 text-ellipsis overflow-hidden">
                                    {truncateText(testimonial.feedback, 31)}
                                </p>
                                <div className="flex items-center mb-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <div className='flex justify-center items-center gap-2 text-xs'>
                                            <h3 className="font-bold">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                                        </div>
                                        <div className="flex">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <GoStarFill key={i} className="w-4 h-4 text-second" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
