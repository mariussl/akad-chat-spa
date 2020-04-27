import React from "react";
import RoomSelect from "./RoomSelect";
import CreatePane from "./CreatePane";

export class Login extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         displayCreatePane: false
      };

      // This binding is necessary to make `this` work in the callback
      this.toggleDisplayCreatePane = this.toggleDisplayCreatePane.bind(this);
   }

   toggleDisplayCreatePane() {
      this.setState((state) => ({
         displayCreatePane: !state.displayCreatePane
      }));
   }

   render() {
      return (
         <div>
            <form className="row">
               <div className="col-md-3 form-group">
                  <label htmlFor="existing-username">Username</label>
                  <input type="text" pattern="[A-Za-z0-9]{15}" className="form-control"
                         name="existing-username" id="existing-username" aria-describedby="existing-username-help" />
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
                     <button className="btn btn-info" role="button" aria-expanded="false" onClick={this.toggleDisplayCreatePane}>
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
