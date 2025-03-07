import Login from '../../components/Login/Login';
import Navbar from '../../components/LoginNav/LoginNav';

export default function login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Navbar />
      <Login />
    </div>
  );
}