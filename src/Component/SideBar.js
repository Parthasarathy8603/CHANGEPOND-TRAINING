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
      
              
        <div className='navBar' style={{width:'100%',height:'60px',backgroundColor:''}}>
        <div  >

          <button className='btn m-3 btn-danger' style={{width:'250px',height:'70px'}} > <Link to="/course-fee-details" style={{textDecoration:'none',color:'white'}}>
                Course Fee details
              </Link></button>
       
              <button className='btn m-5 btn-danger' style={{width:'250px',height:'70px'}} ><Link  to="/registration-fees" style={{textDecoration:'none',color:'white'}}>
                Course Fee Payment
              </Link></button>
        
              <button className='btn m-5 btn-danger' style={{width:'250px',height:'70px'}}><Link to="/exam-fees" style={{textDecoration:'none',color:'white'}}>
                Exam Fee Payment
              </Link></button>
                       
        </div>
          
        


          </div>      
    </div>
  );
}

export default SideBar;
