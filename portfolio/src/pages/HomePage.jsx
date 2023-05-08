import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Home from '../components/Home';
import Resume from '../components/Resume';
import Work from '../components/Work';
import Contact from '../components/Contact';

const HomePage = () => {
 return (
  <Container>
   <Header />
   {/* <Home /> */}
   {/* <Resume /> */}
   {/* <Work /> */}
   <Contact />
  </Container>
 );
};

export default HomePage;
