import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext';
import Home from './views/Home/Home';
import StartProject from './views/StartProject/StartProject';
import ServiceDetail from './views/ServiceDetail/ServiceDetail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Whatsapp from './components/Whatsapp/Whatsapp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  useEffect(() => {
    document.getElementById('root').setAttribute('data-app-ready', 'true');
  }, []);

  return (
    <ContactProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comenzar' element={<StartProject />} />
        <Route path='/servicios/:slug' element={<ServiceDetail />} />
      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
