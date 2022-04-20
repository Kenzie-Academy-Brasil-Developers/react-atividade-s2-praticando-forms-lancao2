import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Success from "../pages/Success/index ";
import { useState } from "react";
const Routers = () => {
  const [userLoged, setUserLoged] = useState("")
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/user-register">
        <Register  setUserLoged={setUserLoged}/>
      </Route>
      <Route path="/page">
        <Success userLoged={userLoged}/>
      </Route>
    </Switch>
  );
};
export default Routers;
