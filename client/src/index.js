import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginUser from "./containers/LoginUser";
import RegisterUser from "./containers/RegisterUser";
import BoatManagement from "./containers/BoatManagement";
import BoatDetails from "./containers/BoatDetails";
import ComponentNotFound from "./components/errorNotFound/ComponentNotFound";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BoatManagement} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/boats" component={BoatManagement} />
        <Route path="/boat/:id" component={BoatDetails} />
        <Route path="/login" component={LoginUser} />
        <Route component={ComponentNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
