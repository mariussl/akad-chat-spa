import React from "react";
import RoomSelect from "./RoomSelect";
import MessageList from "./MessageList";

export class Chat extends React.Component {

   render() {
      return (
         <div>
            <div className="row room-select">
               <div className="col-md-9">
                  <label htmlFor="room">Chat-Raum</label>
                  <RoomSelect onChange={this.props.onChangeRoomname} selectedRoomname={this.props.roomname} />
               </div>
               <div className="col-md-3"></div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <MessageList roomname={this.props.roomname}/>
               </div>
            </div>
            <form className="row">
               <div className="col-md-12 input-group">
                  <input type="text" className="form-control" placeholder="Neue Nachricht"
                         name="create-message" id="create-message" aria-describedby="create-message-btn" />
                  <div className="input-group-append">
                     <button className="btn btn-outline-secondary" type="button" id="create-message-bt">absenden</button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default Chat;