import React from "react";
import {apiMessageUrl, apiUserUrl} from "../constants";

export class CreateMessage extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         newMessageText: ""
      };
      this.changeMessageText = this.changeMessageText.bind(this);
      this.createNewMessage = this.createNewMessage.bind(this);
   }

   changeMessageText(event) {
      this.setState({
         newMessageText: event.target.value
      });
   }

   createNewMessage(event) {
      event.preventDefault();
      if (this.state.newMessageText.length > 0) {
         fetch(apiMessageUrl, {
            method: "post",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
               roomname: this.props.roomname,
               username: this.props.username,
               text: this.state.newMessageText
            })
         })
            .then(res => res.json())
            .then((data) => {
               if (parseInt(data.type, 10) === 1) {
                  console.log("success");
               } else {
                  console.log("error");
               }
            })
            .catch(console.log)
      }
   }

   render() {
      return (
         <form onSubmit={this.createNewMessage} className="row">
            <div className="col-md-12 input-group">
               <input type="text" className="form-control" placeholder="Neue Nachricht" pattern=".{1,250}"
                      value={this.state.newMessageText} onChange={this.changeMessageText}
                      name="create-message" id="create-message" aria-describedby="create-message-btn" />
               <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit" id="create-message-bt">absenden</button>
               </div>
            </div>
         </form>
      )
   }
}

export default CreateMessage;