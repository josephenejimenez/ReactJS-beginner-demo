// Lesson: Components
import FunctionalComp from './LComponents/Components/FunctionalComp';
import {ClassComp1} from './LComponents/Components/ClassComp';
import Click from './LComponents/Components/Click';
import Counter from './LComponents/Components/Counter';


function App() {
  return (
    // Lesson: Components
   <div>
      <h1>Hello! Welcome to Simplilearn</h1>
      <h1>This video is about Components</h1>
      <FunctionalComp/>
      {/* <ClassComp/> */}
      <ClassComp1/>
      <Click/>
      <Counter/>
   </div>
  );
}

export default App;
