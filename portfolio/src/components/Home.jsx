import { Card, ProgressBar } from 'react-bootstrap';

const Home = () => {
 return (
  <div>
   <Card bg='primary' text='white' className='py-5'>
    <Card.Body>
     <h2>Welcome To My Page</h2>
     <p className='lead'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
     </p>
    </Card.Body>
   </Card>

   <Card>
    <Card.Body className='py-5'>
     <h3>My Skills</h3>
     <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ea
      excepturi officia quisquam atque eos.
     </p>
     <hr />
     <h4>HTML 5</h4>
     <ProgressBar variant='success' now={100} className='mb-3' />
     <h4>CSS 3</h4>
     <ProgressBar variant='success' now={100} className='mb-3' />
     <h4>JavaScript</h4>
     <ProgressBar variant='success' now={90} className='mb-3' />
     <h4>PHP</h4>
     <ProgressBar variant='success' now={80} className='mb-3' />
     <h4>Python</h4>
     <ProgressBar variant='success' now={70} className='mb-3' />
    </Card.Body>
   </Card>
  </div>
 );
};

export default Home;
