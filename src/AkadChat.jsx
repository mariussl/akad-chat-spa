import React from 'react';
import {Login} from "./components/Login";
import {Chat} from "./components/Chat";
import 'bootstrap/dist/css/bootstrap.css';
import './AkadChat.css';

export class AkadChat extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoggedIn: false,
         loggedInAs: {}
      };
      this.login = this.login.bind(this);
   }

   login(user) {
      console.log(user);
      this.setState({
         isLoggedIn: true,
         loggedInAs: user
      });
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-9"><h2>Der Akad Super Chat</h2></div>
               <div className="col-md-3 loginout">
                  {this.state.isLoggedIn ? "angemeldet als " + this.state.loggedInAs.name : "unangemeldet"}
               </div>
            </div>
            <div className="row">
               <div className="col-md-12"><h4>Dies ist ein einfacher Chat basierend auf React, PHP und Postgresql</h4></div>
            </div>
            {this.state.isLoggedIn ? <Chat user={this.loggedInAs} /> : <Login onLogin={this.login}/>}
         </div>
      );
   }
}

export default AkadChat;
