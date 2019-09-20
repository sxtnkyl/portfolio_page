import React, { useState, useEffect, useRef } from "react";
import Welcome from "./components/welcome/welcome";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Preload from "./components/preload";
import "./App.css";
import Leftnavdrawer from "./components/leftnavdrawer/leftNavDrawer";
import Backdrop from "./components/backdrop/backdrop";
import Togglenavbutton from "./components/togglenavbutton/togglenavbutton";
import Trianglecanvas from "./components/trianglecanvas/trianglecanvas";
import DownArrowButton from "./components/downarrow/downArrow";
import UpArrow from "./components/uparrow/upArrow";

const App = () => {
  const [navbarCount, setNavBarCount] = useState();
  useEffect(() => {
    //used to make navbar based on sections in portfolio
    //spread HTMLCollection to array, push each element.id to state, map state to list tags, setstate
    function countNavbarItems() {
      const cArray = [];
      const c = [...document.getElementById("sections").children];
      c.map(element => {
        return cArray.push({ id: element.id });
      });
      const navbarItems = cArray.map((item, i) => {
        let itemId = item.id.toUpperCase();
        return (
          <div id="navitem" key={i}>
            <a href={"#" + item.id}>
              <span className="navicon">{itemId}</span>
            </a>
          </div>
        );
      });
      setNavBarCount(navbarItems);
    }
    countNavbarItems();
  }, []);

  const [leftnavdraweropen, setLeftNavdrawerOpen] = useState(false);
  //leftnavbar funcs
  function opencloseLeftnav() {
    setLeftNavdrawerOpen(prevState => {
      return { leftnavdraweropen: !prevState.leftnavdraweropen };
    });
  }
  function backdropClick() {
    setLeftNavdrawerOpen(false);
  }

  //downArrow click triggers App's getView
  //getView calls the observerEntry for each section
  //useImperativeRef method
  //https://stackoverflow.com/questions/37949981/call-child-method-from-parent/37950970
  const welcomeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function getView() {
    const c = [];
    c.push(
      welcomeRef.current.getVport(),
      aboutRef.current.getVport(),
      projectsRef.current.getVport(),
      contactRef.current.getVport()
    );
    const cArray = c.filter(el => el.intersectionRatio > 0.002);
    //scroll to second thing
    if (cArray[0].target.nextSibling) {
      const nextEl = cArray[0].target.nextSibling.offsetTop;
      window.scrollTo(0, nextEl);
    }
  }

  return (
    <div className="App">
      <Leftnavdrawer showing={leftnavdraweropen} navbarItems={navbarCount} />
      <Backdrop click={backdropClick} showing={leftnavdraweropen} />
      <Togglenavbutton click={opencloseLeftnav} showing={leftnavdraweropen} />
      <DownArrowButton click={getView} />
      <UpArrow />

      <div id="sections">
        <Welcome ref={welcomeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>
      <Trianglecanvas />
      <Preload />
    </div>
  );
};

// CLASS COMPONENT STRUCTURE
// class App extends Component {
//   state = {
//     navbarCount: [],
//     leftnavdraweropen: false,
//     activeSection: []
//   };

//   componentDidMount() {
//     this.countNavbarItems();
//   }

//   //leftnavbar funcs
//   opencloseLeftnav = () => {
//     this.setState(prevState => {
//       return { leftnavdraweropen: !prevState.leftnavdraweropen };
//     });
//   };
//   backdropClick = () => {
//     this.setState({ leftnavdraweropen: false });
//   };

//   //used to make navbar based on sections in portfolio
//   //spread HTMLCollection to array, push each element.id to state, map state to list tags, setstate
//   countNavbarItems = () => {
//     const cArray = [];
//     const c = [...document.getElementById("sections").children];
//     c.map(element => {
//       return cArray.push({ id: element.id });
//     });
//     const navbarItems = cArray.map((item, i) => {
//       let itemId = item.id.toUpperCase();
//       return (
//         <div id="navitem" key={i}>
//           <a href={"#" + item.id}>
//             <span className="navicon">{itemId}</span>
//           </a>
//         </div>
//       );
//     });
//     this.setState({ navbarCount: navbarItems });
//     console.log(navbarItems);
//   };

//   //update active state via observer entry
//   //if arg !== active state && inIntersecting, set activeSection

//   //FUNCTION FOR downArrow:
//   //onClick checks if refs isIntersecting
//   //  const intersectingArr
//   //  if intersectingArr[0].intersectionRatio > .97
//   //    scroll to nextElementSibling
//   //  if intersectingArr[0].intersectionRatio < .97
//   //    scroll to intersectingArr[1].target

//   render() {
//     return (
//       <div className="App">
//         <Leftnavdrawer
//           showing={this.state.leftnavdraweropen}
//           navbarItems={this.state.navbarCount}
//         />
//         <Backdrop
//           click={this.backdropClick}
//           showing={this.state.leftnavdraweropen}
//         />
//         <Togglenavbutton
//           click={this.opencloseLeftnav}
//           showing={this.state.leftnavdraweropen}
//         />
//         <DownArrowButton />

//         <div id="sections">
//           <Welcome />
//           <About />
//           <RecentWork />
//           <Contact />
//         </div>
//         <Trianglecanvas />
//         <Preload />
//       </div>
//     );
//   }
// }

export default App;
