import React from 'react';
import {Route, Switch } from "react-router-dom";
import {Login} from "./components/Login";
import {Chat} from "./components/Chat";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
     <div className="container">
       <div className="row">
         <div className="col-md-9"><h2>Der Akad Super Chat</h2></div>
         <div className="col-md-3 loginout">nicht eingelogged</div>
       </div>
       <div className="row">
         <div className="col-md-12"><h4>Dies ist ein einfacher Chat basierend auf React, PHP und Postgresql</h4></div>
       </div>
       <Switch>
         <Route path="/chat" component={Chat} exact />
         <Route component={Login} />
       </Switch>
     </div>
  );
}

export default App;
