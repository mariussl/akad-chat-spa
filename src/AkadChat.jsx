import React from 'react';
import {Login} from "./components/Login";
import {Logout} from "./components/Logout";
import {Chat} from "./components/Chat";
import 'bootstrap/dist/css/bootstrap.css';
import './AkadChat.css';

const loggedOutState = {
   isLoggedIn: false,
   loggedInAs: {},
   roomname: "",
};

export class AkadChat extends React.Component {
   constructor(props) {
      super(props);
      this.state = loggedOutState;
      this.login = this.login.bind(this);
      this.changeRoomname = this.changeRoomname.bind(this);
   }

   login(user) {
      this.setState({
         isLoggedIn: true,
         loggedInAs: user
      });
   }

   logout() {
      this.setState(loggedOutState);
   }

   changeRoomname(roomname) {
      this.setState({
         roomname: roomname
      });
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-9"><h2>Der Akad Super Chat</h2></div>
               <div className="col-md-3 loginout">
                  {this.state.isLoggedIn ? <Logout name={this.state.loggedInAs.name} onLogout={this.logout} /> : "unangemeldet"}
               </div>
            </div>
            <div className="row">
               <div className="col-md-12"><h4>Dies ist ein einfacher Chat basierend auf React, PHP und Postgresql</h4></div>
            </div>
            {this.state.isLoggedIn ?
               <Chat onChangeRoomname={this.changeRoomname} roomname={this.state.roomname} username={this.state.loggedInAs.name} /> :
               <Login onChangeRoomname={this.changeRoomname} roomname={this.state.roomname} onLogin={this.login} />}
         </div>
      );
   }
}

export default AkadChat;
