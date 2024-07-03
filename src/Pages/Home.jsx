import Banner from "../Components/Ui/Banner";
import ComprehensiveCare from "../Components/Ui/ComprehensiveCare";
import Faq from "../Components/Ui/Faq";
import Offer from "../Components/Ui/Offer";
import Service from "../Components/Ui/Service";
import Testimonials from "../Components/Ui/Testimonials";
import WhoWeAre from "../Components/Ui/WhoWeAre";



const Home = () => {
    return (
        <div>
            <Banner />
            <ComprehensiveCare />
            <WhoWeAre />
            <Service />
            <Testimonials />
            <Faq />
            <Offer />
        </div>
    );
};

export default Home;