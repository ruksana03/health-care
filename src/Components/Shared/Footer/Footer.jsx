import LogoLight from "../Logo/LogoLight";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="bg-first p-24 flex flex-col lg:flex-row justify-between gap-4">
            <div className="normalText">
                <LogoLight />
                <div className="my-2">
                    <p>123 Main Street Anytown, USA</p>
                    <p>Postal Code: 12345</p>
                </div>

                <div>
                    <p>Support: support@oyolloo.com</p>
                    <p>Available : 10:00am to 07:00pm</p>
                </div>
            </div>
            <div className="normalText">
                <p>Home</p>
                <p className="my-3">About us</p>
                <p className="my-3">Success Page</p>
                <p>Terms and condition</p>
            </div>
            <div className="normalText">
                <p>Services </p>
                <p className="my-3">Scheduling </p>
                <p className="my-3">Contact Us </p>
                <p>Patient</p>
            </div>
            <div className="normalText">
                <p>Follow Us</p>
                <div className="flex justify-between mt-3 mb-4">
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <IoLogoYoutube />
                </div>
                <p>@docplus 2024</p>
            </div>
        </div>
    );
};

export default Footer;

