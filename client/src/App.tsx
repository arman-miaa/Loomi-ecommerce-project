
import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {


  return (
    <>
      <Navbar />
      <div className='min-h-[calc(100vh-577px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App
