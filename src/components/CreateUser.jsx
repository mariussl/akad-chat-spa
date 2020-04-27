import React from "react";
import {apiUserUrl} from "../constants";

function getRandomColor() {
   var chars = "0123456789ABCDEF";
   var color = "#";
   for (var i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * 16)];
   }
   return color;
}

export class CreateUser extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         name: "",
         color: getRandomColor()
      };
      this.createNameChange = this.createNameChange.bind(this);
      this.colorChange = this.colorChange.bind(this);
      this.createUser = this.createUser.bind(this);
   }

   createNameChange(event) {
      this.setState({
         name: event.target.value
      });
   }

   colorChange(event) {
      this.setState({
         color: event.target.value
      });
   }

   createUser(event) {
      if (this.state.name === "") {
         console.log("error")
      } else {
         fetch(apiUserUrl, {
            method: "post",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
         })
            .then(res => res.json())
            .then((data) => {
               if (parseInt(data.type, 10) === 1) {
                  this.props.onCreate(this.state.name);
               } else {
                  console.log("error");
               }
            })
            .catch(console.log)
      }
      event.preventDefault();
   }

   render() {
      return (
         <div id="create-user">
            <form onSubmit={this.createUser} className="row">
               <div className="col-md-3 form-group">
                  <label htmlFor="new-username">Username</label>
                  <input type="text" pattern="[A-Za-z0-9]{6,15}" className="form-control"
                         name="new-username" id="new-username" aria-describedby="new-username-help"
                         value={this.state.name} onChange={this.createNameChange} />
                  <small id="new-username-help" className="form-text text-muted">Der Username muss alphanumerisch
                     sein und 6-15 Zeichen enthalten.</small>
               </div>
               <div className="col-md-3 form-group">
                  <label htmlFor="color">Farbe</label>
                  <input type="color" className="form-control" value={this.state.color} onChange={this.colorChange}
                         name="color" id="color" aria-describedby="color-help"/>
                  <small id="color-help" className="form-text text-muted">Die Farbe in der Ihre Nachrichten
                     erscheinen.</small>
               </div>
               <div className="col-md-3 form-group padding-btn">
                  <button type="submit" className="btn btn-primary">Registrieren</button>
               </div>
               <div className="col-md-3"/>
            </form>
         </div>
      )
   }
}

export default CreateUser;