import { Route, Switch } from "react-router-dom";
import { AddCity } from "./pages/addCity";
import { AllCities } from "./pages/allCities";
import { Favorites } from "./pages/favorites";
import "./App.css";
import { Layout } from "./layout/layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllCities />
        </Route>
        <Route path="/add-new-city">
          <AddCity />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
