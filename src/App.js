import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import DJs from './Components/DJs/DJs';
import Events from './Components/Events/Events';
import Podcast from './Components/Podcast/Podcast';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PrivacyPolicy from './Components/Privacy-Policy/PrivacyPolicy';
import Admin from './Components/Admin/Admin';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='djs' element={<DJs/>}/>
        <Route path='events' element={<Events/>}/>
        <Route path='podcasts' element={<Podcast/>}/>
        <Route path='about-us' element={<About/>}/>
        <Route path='contact-us' element={<Contact/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
