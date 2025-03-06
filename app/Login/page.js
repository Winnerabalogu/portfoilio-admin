import Login from '../../components/Login/Login';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Navbar/>
      <Login />
      <Footer/>
    </div>
  );
}