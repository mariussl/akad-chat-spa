import React from "react";
import {apiMessageUrl} from "../constants";

export class MessageList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messageList: []
      };
   }

   componentDidMount() {
      fetch(apiMessageUrl + "?roomname=" + this.props.roomname)
         .then(res => res.json())
         .then((data) => {
            this.setState({ messageList: data.payload })
         })
         .catch(console.log)
   }

   render() {
      return (
         <div className="chat-message-pane">
            {this.state.messageList.map(message => <div className="message">{message.text}</div>)}
         </div>
      )
   }
}

export default MessageList;