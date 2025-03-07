import SignUp from '../../components/SignUp/SignUp';
import Navbar from '../../components/LoginNav/LoginNav';

export default function login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Navbar/>
      <SignUp />
    </div>
  );
}