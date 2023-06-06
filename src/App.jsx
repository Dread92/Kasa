import React from 'react';
import Navbar from './components/Navbar.jsx';
import "./App.scss";
import Banner from './components/Banner.jsx';
import ApartmentsGrid from './components/ApartmentsGrid.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
       <Navbar/>
       <Main>
       <Banner/>
       <ApartmentsGrid/>
       </Main>
       <Footer/>
    </div>
  )
}

export default App