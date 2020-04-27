import React from "react";
import RoomSelect from "./RoomSelect";
import CreateMessage from "./CreateMessage";
import {apiMessageUrl} from "../constants";
import {apiUserUrl} from "../constants";

export class Chat extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         messageList: [],
         userColorMap: {}
      };
      this.load = this.load.bind(this);
   }

   load() {
      fetch(apiMessageUrl + "?roomname=" + this.props.roomname)
         .then(res => res.json())
         .then((data) => {
            this.setState({ messageList: data.payload })
            this.timerID = setTimeout(
               () => this.load(),
               1000
            );
         })
         .catch(console.log)
   }

   componentDidMount() {
      this.load();
      fetch(apiUserUrl)
         .then(res => res.json())
         .then((data) => {
            let userColorMap = {};
            data.payload.forEach(user => {
               userColorMap[user.name] = "#" + user.color;
            });
            this.setState({
               userColorMap: userColorMap
            })
         })
         .catch(console.log)
   }

   componentWillUnmount() {
      clearTimeout(this.timerID);
   }

   render() {
      return (
         <div>
            <div className="row room-select">
               <div className="col-md-9">
                  <label htmlFor="room">Chat-Raum</label>
                  <RoomSelect onChange={this.props.onChangeRoomname} selectedRoomname={this.props.roomname} />
               </div>
               <div className="col-md-3"/>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="chat-message-pane">
                     {this.state.messageList.map(
                        message =>
                           <div className="message">
                              <span style={{color: this.state.userColorMap[message.username]}}>
                                 {message.username}:
                              </span>
                              {message.text}
                           </div>
                     )}
                  </div>
               </div>
            </div>
            <CreateMessage roomname={this.props.roomname} username={this.props.username} />
         </div>
      )
   }
}

export default Chat;