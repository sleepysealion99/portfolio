import logo from './logo.svg';
import './home.css';
import react,  { useEffect, useState } from 'react';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Overlay from 'react-bootstrap/Overlay';
import avocadoYog from './images/avocado-yog.png';
import mochiUbec from './images/mochi-ube.png';
import mochiOreo from './images/mochi-oreo.png';
import mochiChestnut from './images/mochi-chestnut.png';
import whitePeach from './images/white-peach.png';
import avomango from './images/avomango.png';
import HoverPage from './hover';
import styled from '@emotion/styled';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import { color } from 'overlay';

const projectArr = [
  {
      name: 'avocado',
      img: "/avocado-yog.png",
      price: 5.95,
      ice: 1,
      gluten: 1,
  },
  {
      name: 'mochi ubec',
      img: "/avocado-yog.png",
      price: 6.35,
      ice: 0,
      gluten: 0,
  },
  {
      name: 'mochi oreo',
      img: "/avocado-yog.png",
      price: 6.25,
      ice: 0,
      gluten: 0,
  },
  {
      name: 'mochi chestnute',
      img: "/avocado-yog.png",
      price: 6.25,
      ice: 0,
      gluten: 0,
  },
  {
      name: 'white peach oolong tea w.moussee',
      img: "/avocado-yog.png",
      price: 5.5,
      ice: 1,
      gluten: 0,
  },
  {
      name: 'avomango sweet dew',
      img: "/avocado-yog.png",
      price: 6.5,
      ice: 1,
      gluten: 1,
  },
];

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,.5)",
  }
});

// const Paragraph = styled.p({
//   transform: "translate3d(0,50px,0)",
//   transition: "transform 350ms ease",
//   // "&:hover": {
//   //   transform: "translate3d(0,0,0)",
//   // }
// });

// const CTA = styled.a({
//   position: "absolute",
//   bottom: "20px",
//   left: "20px",
// });

// const Background = styled.div({
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   color: "#FFF",
//   position: "relative",
//   width: "500px",
//   height: "350px",
//   cursor: "pointer",
//   background: "url(${props => props.img})",
// });

// const BigTitle = styled.h2({
//   textTransform: "uppercase",
//   fontFamily: "Helvetica",
//   color: "black",
// });


function App() {

  // const navigate = useNavigate();

  // const navigateToContacts = () => {
  //     // 👇️ navigate to /contacts
  //   navigate('https://sleepysealion99.github.io/redesign/');
  // };
  const [projectData, setTeaData] = useState(projectArr);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          
          <div className="head">
            <div className="name">
              <h1>Irene Shao</h1>
            </div>
          </div>
          <div className="main">
            <div className="profile">
              <h2>Hi there! I'm Irene.</h2>
              <p>I'm a CS master student at Brown University. I 

Before that, I was at LinkedIn where I designed features to help hourly workers find work on LinkedIn. 

When I'm not working, you can find me fulfilling my PNW dreams hiking to alpine lakes or paddle-boarding, stuffing myself at a restaurant, or watching a sunset!

Check out my case studies below and feel free to send me an email or a message on Linkedin!</p>
            </div>
            <div className="projects">
              {projectData.map((item, index) => {
                return (
                    <div className="projectItem" key={index}>
                      
                        <div className="Background" style={{
                          backgroundImage: `url(${item.img})`
                        }}>
                          <div className="DisplayOver">
                            <div className="BigTitle">
                              <h2>{item.name}</h2>
                            </div>
                            <div className="Hover">
                              <div className="SubTitle">
                                <h2>You could vacation here!</h2>
                              </div>
                              <div className="Paragraph">
                                <p>More description about this really cool random desert photo from
                                unsplash!</p>
                              </div>
                              <div className="CTA"><a>View More +</a></div>
                            </div>
                          </div>
                        </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="footer">
              <h1>Crafted by Irene Shao</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
