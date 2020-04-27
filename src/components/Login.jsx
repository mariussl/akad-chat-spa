import React from "react";
import RoomSelect from "./RoomSelect";
import CreateUser from "./CreateUser";
import {apiUserUrl} from "../constants";

export class Login extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         displayCreateUser: false,
         loginUsername : "",
      };
      this.toggleDisplayCreateUser = this.toggleDisplayCreateUser.bind(this);
      this.login = this.login.bind(this);
      this.loginByFormInput = this.loginByFormInput.bind(this);
      this.loginUsernameChange = this.loginUsernameChange.bind(this);
   }

   toggleDisplayCreateUser() {
      this.setState((state) => ({
         displayCreateUser: !state.displayCreateUser
      }));
   }

   loginUsernameChange(event) {
      this.setState({loginUsername: event.target.value});
   }

   loginByFormInput(event) {
      this.login(this.state.loginUsername);
      event.preventDefault();
   }

   login(name) {
      fetch(apiUserUrl + "?name=" + name)
         .then(res => res.json())
         .then((data) => {
            if ((parseInt(data.type, 10) === 1) && (data.payload.name === name)) {
               this.props.onLogin(data.payload);
            }
         })
         .catch(console.log)
   }

   render() {
      return (
         <div>
            <form className="row" onSubmit={this.loginByFormInput}>
               <div className="col-md-3 form-group">
                  <label htmlFor="existing-username">Username</label>
                  <input type="text" pattern="[A-Za-z0-9]{6,15}" className="form-control" value={this.state.loginUsername}
                         name="existing-username" id="existing-username" aria-describedby="existing-username-help"
                         onChange={this.loginUsernameChange} />
                  <small id="existing-username-help" className="form-text text-muted">Ihr bestehender Username</small>
               </div>
               <div className="col-md-3 form-group">
                  <label htmlFor="room">Chat-Raum</label>
                  <RoomSelect onChange={this.props.onChangeRoomname} selectedRoomname={this.props.roomname} />
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
                     <button type="button" className="btn btn-info" role="button" aria-expanded="false"
                             onClick={this.toggleDisplayCreateUser}>
                        Das erste Mal hier?
                     </button>
                  </p>
               </div>
               <div className="col-md-3"/>
            </div>
            {this.state.displayCreateUser && <CreateUser onCreate={this.login}/>}
         </div>
      )
   }
}

export default Login;
