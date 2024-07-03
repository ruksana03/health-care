import { Outlet } from 'react-router-dom';
import '../App.css'
import Navbar from '../Components/Shared/Nav/Navbar';
import Footer from '../Components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen w-10/12 mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;