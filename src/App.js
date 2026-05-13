import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';  
import Footer from './components/Footer/Footer';
import Whatsapp from './components/Whatsapp/Whatsapp';

function App() {
  return (
    <ContactProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
