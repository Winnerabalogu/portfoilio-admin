import Table from '../../components/Table/Comments';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function comment() {
  return (
    <div className="app-container">
      <Navbar/>
      <Table />
      <Footer/>
    </div>
  );
}