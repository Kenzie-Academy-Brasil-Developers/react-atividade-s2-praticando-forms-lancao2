import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/user-register">
        <Register />
      </Route>
    </Switch>
  );
};
export default Routers;
