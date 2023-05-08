import { Card, Row, Col } from 'react-bootstrap';

const Resume = () => {
 return (
  <div>
   <Card bg='success' text='white' className='py-5'>
    <Card.Body>
     <h2>My Resume</h2>
     <p className='lead'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
     </p>
    </Card.Body>
   </Card>

   <Card className='py-5'>
    <Card.Body>
     <h3>Where Have I Worked?</h3>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
      similique saepe inventore rem vitae esse.
     </p>
     <Row xs={1} md={3} className='g-4'>
      <Col>
       <Card>
        <Card.Body>
         <h4 className='card-title'>Devmasters</h4>
         <p className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          magnam.
         </p>
         <p className='p-2 mb-3 bg-dark text-white'>
          Position: Full Stack Developer
         </p>
         <p className='p-2 mb-3 bg-dark text-white'>Phone: (444) 444-4444</p>
        </Card.Body>
        <Card.Footer>
         <h6 className='text-muted'>Dates: 2015 - 2018</h6>
        </Card.Footer>
       </Card>
      </Col>

      <Col>
       <Card>
        <Card.Body>
         <h4 className='card-title'>123 Designs</h4>
         <p className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          magnam.
         </p>
         <p className='p-2 mb-3 bg-dark text-white'>Position: Web Designer</p>
         <p className='p-2 mb-3 bg-dark text-white'>Phone: (222) 222-2222</p>
        </Card.Body>
        <Card.Footer>
         <h6 className='text-muted'>Dates: 2013 - 2015</h6>
        </Card.Footer>
       </Card>
      </Col>

      <Col>
       <Card>
        <Card.Body>
         <h4 className='card-title'>Web Designer Pros</h4>
         <p className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          magnam.
         </p>
         <p className='p-2 mb-3 bg-dark text-white'>Position: Web Designer</p>
         <p className='p-2 mb-3 bg-dark text-white'>Phone: (333) 333-3333</p>
        </Card.Body>
        <Card.Footer>
         <h6 className='text-muted'>Dates: 2010 - 2013</h6>
        </Card.Footer>
       </Card>
      </Col>
     </Row>
    </Card.Body>
   </Card>
  </div>
 );
};

export default Resume;
