//functional component that takes an array containing the different "drawers"(objects) from TOOLS and displays the selected drawer's contents
//id "tc" = table cell
import React, { useState, useEffect } from "react";
import tools from "./Tools";
import { animated, useTrail } from "react-spring";

//WORKING VERSION
//rewrite of rewrite for toggle.
//trail animation updates on state change, future task: update trail on hover
//https://codesandbox.io/s/kw79lw0757 REVERSE TRAIL
const Toolbox = () => {
  //hold the active list, adds style border button to show selected list
  //in tag, className={active === id ? active : button}
  const [active, setActive] = useState(tools[0].category);
  useEffect(() => {
    //console.log("active button is", active);
  }, [active]);
  //rerenders trail animation
  const [toggle, set] = useState(true);
  useEffect(() => {
    //console.log(toggle);
  }, [toggle]);
  //which list are we looking at?
  const [list, setList] = useState(tools[0].skills);
  useEffect(() => {
    //console.log("list updated", list);
  }, [list]);

  const trail = useTrail(list.length, {
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  //if active is null, set active to target, setList, toggle
  //else if active is button clicked, untoggle
  //else, nothing, because something else is active
  function buttonClick(e) {
    if (active === null) {
      setActive(e.target.id);
      tools.find(obj => obj.category === e.target.id && setList(obj.skills));
      set(!toggle);
    } else if (active === e.target.id) {
      setActive(null);
      set(!toggle);
    } else return;
  }

  //dynamically render all the buttons, one for each obj in Tools
  const buttons = tools.map(function(obj, index) {
    return (
      <div
        key={index}
        id={obj.category}
        obj={obj}
        className={active === obj.category ? "active btn" : "btn"}
        onClick={e => buttonClick(e)}
      >
        {obj.category}
      </div>
    );
  });

  return (
    <div id="experienceTable">
      <div id="skillsSelectorButtons">{buttons}</div>
      <div id="skillsList">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={list[index]}
            id="tc"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div style={{ height }}>{list[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

//INITIAL ITERATION WITH SELECT/OPTIONS
// const Toolbox = () => {
//   //https://github.com/downshift-js/downshift
//   //for future use

//   //selected value for table display
//   const [selectedvalue, setSelectedvalue] = useState("placeholder");
//   useEffect(() => {
//     const item = tools.find(obj => obj.category === selectedvalue);
//     console.log(item);
//     if (typeof item !== "undefined") {
//       let skillList = item.skills;
//       console.log(skillList);
//       setContent(skillList);
//     }
//   }, [selectedvalue]);

//   //finds the options in tools
//   const [options, setOptions] = useState(null);
//   useEffect(() => {
//     function makeDropdown() {
//       const options = [];
//       tools.forEach(option => options.push(option.category));

//       const dropDownOptions = options.map((item, i) => (
//         <option id="option" key={i} value={item}>
//           {item}
//         </option>
//       ));
//       setOptions(
//         <select
//           value={selectedvalue}
//           onChange={e => setSelectedvalue(e.target.value)}
//         >
//           <option value="placeholder">--Please choose a category--</option>
//           {dropDownOptions}
//         </select>
//       );
//     }
//     makeDropdown();
//   }, [selectedvalue]);

//   //displays tools skills key for the option selected
//   const [content, setContent] = useState(["To see my skills!"]);
//   const skillTrail = useTrail(content.length, {
//     to: [{ opacity: 1, color: "black" }],
//     from: { opacity: 0, color: "red" }
//   });

//   return (
//     <div id="experienceTable">
//       {options}
//       <div id="table">
//         {skillTrail.map((animation, index) => (
//           <animated.div id="tc" style={{ animation }}>
//             {content[index]}
//           </animated.div>
//         ))}
//       </div>
//     </div>
//   );
// };

//initial rewrite
// const Toolbox = () => {
//   const things = [
//     {
//       category: "IDE/Scripting Languages",
//       skills: [
//         "Github/Gitbash",
//         "Visual Studio Code",
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "JS Canvas"
//       ]
//     },
//     {
//       category: "Front End",
//       skills: [
//         "React/React Hooks",
//         "React Spring",
//         "Styled Components",
//         "P5",
//         "Markdown",
//         "Bootstrap"
//       ]
//     }
//   ];

//   const [selectedList, setList] = useState(things[0].skills);
//   useEffect(() => {
//     console.log(selectedList);
//   }, [selectedList]);

//   const skillTrail = useTrail(selectedList.length, {
//     to: { opacity: 1, color: "blue" },
//     from: { opacity: 0, color: "red" },
//     config: { duration: 2000 }
//   });

//   const [trailItems, setTrail] = useState();
//   useEffect(() => {
//     let items = skillTrail.map((anima, index) => (
//       <animated.div id="tc" style={anima} key={index}>
//         {selectedList[index]}
//       </animated.div>
//     ));
//     setTrail(items);
//     console.log("trailITems set");
//   }, [selectedList]);

//   return (
//     <div id="experienceTable">
//       <select
//         onChange={e =>
//           things.find(
//             obj => obj.category === e.target.value && setList(obj.skills)
//           )
//         }
//       >
//         <option value="IDE/Scripting Languages">list 1</option>
//         <option value="Front End">list 2</option>
//       </select>
//       <div id="table">{trailItems}</div>
//     </div>
//   );
// };
// //WORKING VERSION
// //rewrite of rewrite for toggle. trail is not repeating on list change. issue is DOM rerender?
// //////////////make selected state, update trail on hover
// //https://codesandbox.io/s/kw79lw0757 REVERSE TRAIL
// const Toolbox = () => {
//   const items = ["Lorem", "ipsum", "dolor"];
//   const items2 = ["butt", "cheek", "saggy"];

//   //hold the active list, adds style border button to show selected list
//   //in tag, className={active === id ? active : button}
//   const [active, setActive] = useState("l1");
//   useEffect(() => {
//     console.log("active button is", active);
//   }, [active]);

//   const [toggle, set] = useState(true);
//   useEffect(() => {
//     console.log(toggle);
//   }, [toggle]);
//   const [list, setList] = useState(items);
//   useEffect(() => {
//     console.log("list updated", list);
//   }, [list]);

//   const config = { mass: 5, tension: 2000, friction: 200 };

//   const trail = useTrail(list.length, {
//     config,
//     opacity: toggle ? 1 : 0,
//     x: toggle ? 0 : 20,
//     height: toggle ? 80 : 0,
//     from: { opacity: 0, x: 20, height: 0 }
//   });

//   //if active is null, set active to target, setList, toggle
//   //else if active is button clicked, untoggle
//   //else, nothing, because something else is active
//   function b1(e) {
//     if (active === null) {
//       setActive(e.target.id);
//       setList(items);
//       set(!toggle);
//     } else if (active === e.target.id) {
//       setActive(null);
//       set(!toggle);
//     } else return;
//   }
//   function b2(e) {
//     if (active === null) {
//       setActive(e.target.id);
//       setList(items2);
//       set(!toggle);
//     } else if (active === e.target.id) {
//       setActive(null);
//       set(!toggle);
//     } else return;
//   }

//   return (
//     <div id="experienceTable">
//       <button
//         id="l1"
//         className={active === "l1" ? "active btn" : "btn"}
//         onClick={e => b1(e)}
//       >
//         list1
//       </button>
//       <button
//         id="l2"
//         className={active === "l2" ? "active btn" : "btn"}
//         onClick={e => b2(e)}
//       >
//         list2
//       </button>
//       <div id="table">
//         {trail.map(({ x, height, ...rest }, index) => (
//           <animated.div
//             key={list[index]}
//             id="tc"
//             style={{
//               ...rest,
//               transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
//             }}
//           >
//             <animated.div style={{ height }}>{list[index]}</animated.div>
//           </animated.div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Toolbox;
