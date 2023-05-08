import { Button, Row } from 'react-bootstrap';
import { FaCloud } from 'react-icons/fa';

const Footer = () => {
 return (
  <footer className='p-5 bg-dark text-white'>
   <Row md={6}>
    <Button href='#' variant='outline-light'>
     <FaCloud /> Download Resume
    </Button>
   </Row>
  </footer>
 );
};

export default Footer;
