import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Home from '../components/Home';
import Resume from '../components/Resume';
import Work from '../components/Work';

const HomePage = () => {
 return (
  <Container>
   <Header />
   <Work />
   {/* <Resume /> */}
   {/* <Home /> */}
  </Container>
 );
};

export default HomePage;
