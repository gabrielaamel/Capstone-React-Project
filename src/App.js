import './App.css';
import { BrowserRouter } from 'react-router-dom'; // 1. Import the router

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
  <div className='container'>



      <Header/>
      <Nav/>
      <Main/>
      <Footer/>



  </div>
  </BrowserRouter>
  );
}

export default App;
