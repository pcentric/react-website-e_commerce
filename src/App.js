import React from "react";
import "./App.css";

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Room";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
