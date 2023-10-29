import "./App.css";
import BreadBottom from "./components/BreadBottom";
import BreadTop from "./components/BreadTop";
import Salad from "./components/Salad";
import Bacon from "./components/Bacon";
import Cheese from "./components/Cheese";
import Meat from "./components/Meat";
import BurgerContainer from "./components/BurgerContainer";
import BurgerDrop from "./components/BurgerDrop";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {/* <BurgerContainer /> */}
      </div>
      <BurgerDrop />
    </DndProvider>
  );
}

export default App;
