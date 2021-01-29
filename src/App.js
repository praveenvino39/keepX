import "./App.css";
import MainScreen from "./Components/Screens/MainScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddScreen from "./Components/Screens/AddScreen";
import AddIngredient from "./Components/Screens/AddIngredient";
import ViewAvailable from "./Components/Screens/ViewAvailable";
import TakeIngredient from "./Components/Screens/TakeIngredient";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route path="/addingredient">
          <AddIngredient />
        </Route>
        <Route path="/addstock">
          <AddScreen />
        </Route>
        <Route path="/viewavailable">
          <ViewAvailable />
        </Route>
        <Route path="/takestock">
          <TakeIngredient />
        </Route>
      </Router>
    </div>
  );
}

export default App;
