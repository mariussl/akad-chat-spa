import React from "react";
import RoomSelect from "./RoomSelect";
import CreatePane from "./CreatePane";
import {apiUserUrl} from "../constants";

export class Login extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         displayCreatePane: false,
         loginUsername : ""
      };

      // This binding is necessary to make `this` work in the callback
      this.toggleDisplayCreatePane = this.toggleDisplayCreatePane.bind(this);
      this.login = this.login.bind(this);
      this.loginUsernameChange = this.loginUsernameChange.bind(this);
   }

   toggleDisplayCreatePane() {
      this.setState((state) => ({
         displayCreatePane: !state.displayCreatePane
      }));
   }

   loginUsernameChange(event) {
      this.setState({loginUsername: event.target.value});
   }

   login(event) {
      fetch(apiUserUrl + "?name=" + this.state.loginUsername)
         .then(res => res.json())
         .then((data) => {
            console.log(data);
            if ((parseInt(data.type, 10) === 1) && (data.payload.name === this.state.loginUsername)) {
               console.log("login");
            }
         })
         .catch(console.log)
      event.preventDefault();
   }

   render() {
      return (
         <div>
            <form className="row" onSubmit={this.login}>
               <div className="col-md-3 form-group">
                  <label htmlFor="existing-username">Username</label>
                  <input type="text" pattern="[A-Za-z0-9]{6,15}" className="form-control" value={this.state.loginUsername}
                         name="existing-username" id="existing-username" aria-describedby="existing-username-help"
                         onChange={this.loginUsernameChange} />
                  <small id="existing-username-help" className="form-text text-muted">Ihr bestehender Username</small>
               </div>
               <div className="col-md-3 form-group">
                  <label htmlFor="room">Chat-Raum</label>
                  <RoomSelect />
                  <small id="room-help" className="form-text text-muted">Der Raum in dem Sie chatten wollen.</small>
               </div>
               <div className="col-md-3 form-group padding-btn">
                  <button type="submit" className="btn btn-primary">Login</button>
               </div>
               <div className="col-md-3"/>
            </form>
            <div className="row">
               <div className="col-md-9">
                  <p>
                     <button type="button" className="btn btn-info" role="button" aria-expanded="false" onClick={this.toggleDisplayCreatePane}>
                        Das erste Mal hier?
                     </button>
                  </p>
               </div>
               <div className="col-md-3"/>
            </div>
            <CreatePane toggled={this.state.displayCreatePane}/>
         </div>
      )
   }
}

export default Login;
