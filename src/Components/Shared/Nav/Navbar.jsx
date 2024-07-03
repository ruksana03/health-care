import { NavLink } from "react-router-dom";
import LogoDark from "../Logo/LogoDark";
import { GoArrowUpRight } from "react-icons/go";


const Navbar = () => {
    return (
        <div className="flex justify-between w-10/12 h-[48px] mx-auto my-4">
            <div>
                 <LogoDark/> 
            </div>
            <div className=" flex justify-between gap-6 text-first">
             <NavLink to='/'>Home</NavLink>
             <NavLink to='/'>Services</NavLink>
             <NavLink to='/'>Blog</NavLink>
             <NavLink to='/'>About us</NavLink>
            </div>
            <div>
                <button className="border rounded-md px-4 border-first text-first flex justify-center items-center gap-2 py-2">
                    Appointment <GoArrowUpRight/>
                </button>
            </div>
          

        </div>
    );
};

export default Navbar;