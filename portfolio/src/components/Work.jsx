import { Card, Row, Col } from 'react-bootstrap';

const Work = () => {
 return (
  <div>
   <Card bg='warning' text='white' className='py-5'>
    <Card.Body>
     <h2>My Work</h2>
     <p className='lead'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
     </p>
    </Card.Body>
   </Card>

   <Card className='py-5'>
    <Card.Body>
     <h3>What Have I Built?</h3>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
      repudiandae debitis, nam iste amet.
     </p>
     <Row className='g-4'>
      <Col md={3}>
       <a
        href='https://unsplash.it/1200/768.jpg?image=252'
        target='_blank'
        rel='noopener noreferrer'>
        <img
         src='https://unsplash.it/600.jpg?image=252'
         alt=''
         className='img-fluid'
        />
       </a>
      </Col>
      <Col md={3}>
       <a
        href='https://unsplash.it/1200/768.jpg?image=253'
        target='_blank'
        rel='noopener noreferrer'>
        <img
         src='https://unsplash.it/600.jpg?image=253'
         alt=''
         className='img-fluid'
        />
       </a>
      </Col>
      <Col md={3}>
       <a
        href='https://unsplash.it/1200/768.jpg?image=254'
        target='_blank'
        rel='noopener noreferrer'>
        <img
         src='https://unsplash.it/600.jpg?image=254'
         alt=''
         className='img-fluid'
        />
       </a>
      </Col>
      <Col md={3}>
       <a
        href='https://unsplash.it/1200/768.jpg?image=255'
        target='_blank'
        rel='noopener noreferrer'>
        <img
         src='https://unsplash.it/600.jpg?image=255'
         alt=''
         className='img-fluid'
        />
       </a>
      </Col>
      <Col md={3}>
       <a
        href='https://unsplash.it/1200/768.jpg?image=256'
        target='_blank'
        rel='noopener noreferrer'>
        <img
         src='https://unsplash.it/600.jpg?image=256'
         alt=''
         className='img-fluid'
        />
       </a>
      </Col>
      <Col md={3}>
       <a
        href='https://unsplash.it/1200/768.jpg?image=257'
        target='_blank'
        rel='noopener noreferrer'>
        <img
         src='https://unsplash.it/600.jpg?image=257'
         alt=''
         className='img-fluid'
        />
       </a>
      </Col>
      <Col md={3}>
       <a
        href='https://unsplash.it/1200/768.jpg?image=258'
        target='_blank'
        rel='noopener noreferrer'>
        <img
         src='https://unsplash.it/600.jpg?image=258'
         alt=''
         className='img-fluid'
        />
       </a>
      </Col>
      <Col md={3}>
       <a
        href='https://unsplash.it/1200/768.jpg?image=259'
        target='_blank'
        rel='noopener noreferrer'>
        <img
         src='https://unsplash.it/600.jpg?image=259'
         alt=''
         className='img-fluid'
        />
       </a>
      </Col>
     </Row>
    </Card.Body>
   </Card>
  </div>
 );
};

export default Work;
