import { Row, Col, Image, Button } from 'react-bootstrap';
import {
 FaTwitter,
 FaFacebook,
 FaInstagram,
 FaGithub,
 FaHome,
 FaGraduationCap,
 FaFolderOpen,
 FaEnvelope,
} from 'react-icons/fa';

const Header = () => {
 return (
  <header>
   <Row className='g-0'>
    <Col lg={4} md={5}>
     <Image src='assets/portrait.jpg' className='img' alt='image' />
    </Col>

    <Col lg={8} md={7}>
     <div className='d-flex flex-column'>
      <div className='p-5 bg-dark text-white'>
       <div className='d-flex flex-row justify-content-between align-items-center'>
        <h1 className='display-4'>John Doe</h1>
        <div className='d-none d-md-block'>
         <a href='http://twitter.com' className='text-white'>
          <FaTwitter size={30} />
         </a>
        </div>
        <div>
         <a href='http://facebook.com' className='text-white'>
          <FaFacebook size={30} />
         </a>
        </div>
        <div>
         <a href='http://instagram.com' className='text-white'>
          <FaInstagram size={30} />
         </a>
        </div>
        <div>
         <a href='http://github.com' className='text-white'>
          <FaGithub size={30} />
         </a>
        </div>
       </div>
      </div>

      <div className='p-4 bg-black'>Experienced Full Stack Web Developer</div>

      <div>
       <div className='d-flex flex-row text-white align-items-stretch text-center'>
        <Button
         className='port-item p-4 bg-primary d-flex flex-column justify-content-center align-items-center'
         variant='primary'
         data-toggle='collapse'
         data-target='#home'
         aria-expanded='false'
         aria-controls='home'>
         <FaHome size={70} className='d-block' />
         <span className='d-none d-sm-block'>Home</span>
        </Button>

        <Button
         className='port-item p-4 bg-success d-flex flex-column justify-content-center align-items-center'
         data-toggle='collapse'
         data-target='#resume'
         aria-expanded='false'
         aria-controls='resume'>
         <FaGraduationCap size={70} className='d-block' />
         <span className='d-none d-sm-block'>Resume</span>
        </Button>

        <Button
         className='port-item p-4 bg-warning d-flex flex-column justify-content-center align-items-center'
         data-toggle='collapse'
         data-target='#work'
         aria-expanded='false'
         aria-controls='work'>
         <FaFolderOpen size={70} className='d-block' />
         <span className='d-none d-sm-block'>Work</span>
        </Button>

        <Button
         className='port-item p-4 bg-danger d-flex flex-column justify-content-center align-items-center'
         data-toggle='collapse'
         data-target='#contact'
         aria-expanded='false'
         aria-controls='contact'>
         <FaEnvelope size={70} className='d-block' />
         <span className='d-none d-sm-block'>Contact</span>
        </Button>
       </div>
      </div>
     </div>
    </Col>
   </Row>
  </header>
 );
};

export default Header;
