import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutUs from 'pages/AboutUs';
import Faq from 'pages/Faq';
import Home from 'pages/Home';

import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className='xl:container xl:mx-auto px-4 py-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='faq' element={<Faq />} />
        </Routes>
      </main>

      <Footer />

      <h1>Hello there!</h1>
    </BrowserRouter>
  );
}
