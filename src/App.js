// // Application 1: Applicable only for Components,Properties 
// // Lesson: Components
// import FunctionalComp from './LComponents/Components/FunctionalComp';
// import {ClassComp1} from './LComponents/Components/ClassComp';
// import Click from './LComponents/Components/Click';
// import Counter from './LComponents/Components/Counter';

// Lesson: Properties 


// function App() {
//   return (

//   //   // Lesson: Components
//   //  <div>
//   //     <h1>Hello! Welcome to Simplilearn</h1>
//   //     <h1>This video is about Components</h1>
//   //     <FunctionalComp/>
//   //     {/* <ClassComp/> */}
//   //     <ClassComp1/>
//   //     <Click/>
//   //     <Counter/>
//   //  </div>

//   // // Lesson: Properties
//   //   <div>
//   //     
//   //   </div>
   
//   );
// }


// // End of Application 1

// Application 2: Applicable only for State
import React from "react";
import NewComp from "./LState/Components/NewComp";
import "./App.css"

class App extends React.Component {
  
    styles = {
        fontStyle: "bold",
        color: "teal"
    }

  render(){
    return (
        <div className="App">
            <h1 style={this.styles}>Welcome</h1>
            <NewComp/>
        </div>
    )
  }
};

export default App;