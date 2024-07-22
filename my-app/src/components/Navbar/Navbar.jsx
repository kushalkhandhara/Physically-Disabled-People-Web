import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.avif"

function Navbar1() 
{

  const [menu,setMenu] = useState("home");
  const [nav,setNav] = useState(false);

  //Scroll Navbar
  const changeValueOnScroll = () =>{
    const scrollValue = document?.documentElement?.scrollTop; 
    scrollValue>100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  
  return (


    <>
    <header>
      <Navbar expand="lg" className={`${nav===true ? "sticky" : "" }`}>
        <Container fluid>
          <Navbar.Brand  as={Link} to="/" className= {menu==="home"?"me-2 active" : "me-2"}   onClick={()=>{setMenu("home")}}>
            <img src={logo} className='img-fluid logo' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="  ms-auto">
                      <Nav.Link className= {menu==="home"?"me-2 active" : "me-2"}   onClick={()=>{setMenu("home")}}  as={Link} to="/"   >Home</Nav.Link>
                      
                      <Nav.Link className= {menu==="shop"?"me-2 active" : "me-2"}  onClick={()=>{setMenu("shop")}}  as={Link} to="/shop" >Shop</Nav.Link>
                      <Nav.Link className= {menu==="disablity"?"me-2 active" : "me-2"}  onClick={()=>{setMenu("disablity")}} as={Link} to="/disablity" >Disablity</Nav.Link>
                      <Nav.Link className= {menu==="jobs"?"me-2 active" : "me-2"}  onClick={()=>{setMenu("jobs")}}  as={Link} to="/jobs" >Jobs</Nav.Link>
                      <Nav.Link className= {menu==="motivate"?"me-2 active" : "me-2"}  onClick={()=>{setMenu("motivate")}} as={Link} to="/motivate" >Motivate</Nav.Link>
                      <Nav.Link className= {menu==="chat"?"me-2 active" : "me-2"}  onClick={()=>{setMenu("chat")}}  as={Link} to="/chat" >Chat</Nav.Link>
                      <Nav.Link className= {menu==="caretaker"?"me-2 active" : "me-2"}  onClick={()=>{setMenu("caretaker")}}  as={Link} to="/caretaker" >Care Taker</Nav.Link>
                      <Nav.Link className= {menu==="volunteer"?"me-2 active" : "me-2"}  onClick={()=>{setMenu("volunteer")}}  as={Link} to="/volunteer" >Volunteer</Nav.Link>
                      <Nav.Link className= {menu==="about"?"me-2 active" : "me-2"}  onClick={()=>{setMenu("about")}}  as={Link} to="/about" >About</Nav.Link>
                      <Nav.Link className= {menu==="contact"?"me-4 active" : "me-4"}  onClick={()=>{setMenu("contact")}}  as={Link} to="/contact" >Contact</Nav.Link>
      
                      <div className="d-flex align-items-center ">
                          <div className="cart-icon me-4">
                            <span className="badge rounded-pill bg-danger">99+</span>
                            <Link to="/cart">
                              <GiShoppingCart size={40} color="black" />
                            </Link>
                          </div>
                      </div>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  );
}

export default Navbar1;