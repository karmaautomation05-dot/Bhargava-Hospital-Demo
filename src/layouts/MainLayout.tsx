import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Chatbot from '../components/common/Chatbot';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default MainLayout;
