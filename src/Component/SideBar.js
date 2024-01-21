import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div
      className="bg-white text-blue"
      style={{
        backgroundImage: 'url(https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-6/258751624_2472293809568457_1538445468631759952_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=b50f6c&_nc_ohc=rLBnG2kwkEIAX9X0jA2&_nc_ht=scontent.fmaa2-3.fna&oh=00_AfBWFy65F6Wo_dJcWcFq9OWkBo5pLSq7fQbgZnV3ABlajA&oe=65B2363F)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#ffffff' // Ensure the background covers the entire viewport height
      }}
    >
      <Navbar collapseOnSelect expand="" variant="blue"
      style={{marginLeft:'100px',marginRight:'100px'}}
      >
      
        <Container  style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
          <Navbar.Brand as={Link} to="/course-fee-details">
            Course Fee Details
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/registration-fees">
                Course Fee Payment
              </Nav.Link>
              <Nav.Link as={Link} to="/exam-fees">
                Exam Fee Payment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <marquee behavior="scroll" direction="left" style={{ color:'lightgreen',fontSize: '50px', padding: '10px' }}>
       <b> Special Fee Discount: Get 10% off on course fees for a limited time! Apply now!</b>
      </marquee>
      <Container className="d-flex justify-content-between" style={{backgroundColor:'rgba(255,255,255,0.0)'}}>
        <Card className=" text-black" style={{marginLeft:'80px', backgroundColor:'rgba(25,255,25,0.7)'}}>
          
            <Card.Title>Fee Discount Details:</Card.Title>
            <Card.Text>
            <ol>
              <li>
                Register for your courses ahead of schedule and enjoy a special discount on your total course fees.
              </li>
              <li>
                Encourage your friends to join too! Group enrollments of 3 or more
                students receive a group discount on the total course fees. 
              </li>
              <li>
                We reward academic achievements! Exceptional students with
                outstanding grades may be eligible for an Academic Excellence Scholarship. 
              </li>
            </ol>
            </Card.Text>
          
        </Card>
        <Card className=" text-black"style={{ marginRight: '150px' ,marginLeft:'80px',backgroundColor:'rgba(255,25,25,0.7)'}} >
            <Card.Title>Fee Fine Details:</Card.Title>
            <Card.Text>
            <ol>
              <li>Late Payment Fine: A late payment fine will be applied for payments made after the due date.</li>
              <li>Incomplete Installment Fine: Fines may be imposed for incomplete installment payments.</li>
              <li>Missed Payment Penalty: Penalty charges will apply for missed payment deadlines.</li>
              <li>Defaulted Payment Fine: Failure to make payments may result in additional fines and consequences.</li>
            </ol>
            </Card.Text>
          
        </Card>
      </Container>
    </div>
  );
}

export default SideBar;
