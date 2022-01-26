import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutUs from 'pages/AboutUs';
import Faq from 'pages/Faq';
import Home from 'pages/Home';

import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <h1>Hello there!</h1>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='faq' element={<Faq />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
