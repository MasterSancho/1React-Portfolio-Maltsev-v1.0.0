import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
 return (
  <>
   <Router>
    <Container>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/work' element={<Work />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </Container>
   </Router>
  </>
 );
};

export default App;
