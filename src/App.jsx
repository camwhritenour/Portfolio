import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
