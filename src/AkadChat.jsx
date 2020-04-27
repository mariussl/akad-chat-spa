import React from 'react';
import {Login} from "./components/Login";
import {Chat} from "./components/Chat";
import 'bootstrap/dist/css/bootstrap.css';
import './AkadChat.css';
import {apiRoomUrl} from "./constants";

function Logout(props) {
   return (
      <a href="" onClick={props.onLogout}>loggout {props.name}</a>
   )
}

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

   login(user, roomname) {
      this.setState({
         isLoggedIn: true,
         loggedInAs: user,
         roomname: roomname
      });
   }

   logout() {
      this.setState(loggedOutState);
   }

   changeRoomname(event) {
      this.setState({
         roomname: event.target.value
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
               <Chat roomname={this.state.roomname} user={this.state.loggedInAs} /> :
               <Login onChangeRoomname={this.changeRoomname} roomname={this.state.roomname} onLogin={this.login} />}
         </div>
      );
   }
}

export default AkadChat;
