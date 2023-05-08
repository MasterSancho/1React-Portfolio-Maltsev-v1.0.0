import { Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPencilAlt } from 'react-icons/fa';

const Contact = () => {
 return (
  <div>
   <Card bg='danger' text='white' className='py-5'>
    <Card.Body>
     <h2>Contact</h2>
     <p className='lead'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
     </p>
    </Card.Body>
   </Card>

   <Card className='py-5'>
    <Card.Body>
     <h3>Get In Touch</h3>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos illo,
      dicta id voluptates enim.
     </p>
     <Form>
      <Form.Group>
       <InputGroup size='lg'>
        <InputGroup.Text className='bg-danger text-white'>
         <FaUser />
        </InputGroup.Text>
        <FormControl className='bg-dark text-white' placeholder='Name' />
       </InputGroup>
      </Form.Group>

      <Form.Group>
       <InputGroup size='lg'>
        <InputGroup.Text className='bg-danger text-white'>
         <FaEnvelope />
        </InputGroup.Text>
        <FormControl
         type='email'
         className='bg-dark text-white'
         placeholder='Email'
        />
       </InputGroup>
      </Form.Group>

      <Form.Group>
       <InputGroup size='lg'>
        <InputGroup.Text className='bg-danger text-white'>
         <FaPencilAlt />
        </InputGroup.Text>
        <FormControl
         as='textarea'
         className='bg-dark text-white'
         placeholder='Name'
        />
       </InputGroup>
      </Form.Group>

      <Button
       className='btn btn-block w-100'
       variant='danger'
       size='lg'
       type='submit'
       value='#'>
       Submit
      </Button>
     </Form>
    </Card.Body>
   </Card>
  </div>
 );
};

export default Contact;
