import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "What Are Your Office Hours?",
    answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
  },
  {
    question: "How Can I Schedule An Appointment?",
    answer: "You can schedule an appointment by calling our office or using our online scheduling system."
  },
  {
    question: "Do You Accept Insurance?",
    answer: "Yes, we accept most major insurance plans. Please contact our office to verify if your insurance is accepted."
  },
  {
    question: "What Should I Bring To My Appointment?",
    answer: "Please bring a valid ID, your insurance card, and any relevant medical records."
  },
  {
    question: "Do You Offer Telemedicine Appointments?",
    answer: "Yes, we offer telemedicine appointments for your convenience. Please contact our office to schedule a telemedicine visit."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mt-20">
        <button className='btn-style3'>Faq</button>
      <div className=" ">
        <h2 className="head2 text-first mb-6">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className={`flex justify-between items-center p-4 border-b cursor-pointer ${activeIndex === index ? 'bg-third' : 'bg-third'}`}
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                <span>{activeIndex === index ? ' ' : <IoIosArrowDown/>}</span>
              </div>
              {activeIndex === index && (
                <div className="p-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
