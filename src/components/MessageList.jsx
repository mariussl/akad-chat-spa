import React from "react";
import {apiMessageUrl} from "../constants";

export class MessageList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messageList: [],
         roomName: null
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
            <div className="message user1">Hallo wie gehts dir?</div>
            <div className="message user2">Gut, danke - ist schönes Wetter heute oder?</div>
            <div className="message user1">Ja genau. Warst du schon einkaufen?</div>
            <div className="message user2">Ja bei uns gibt es Pizza :)</div>
            <div className="message user2">Oh jetzt fällt mir ein ich hab den Käse vergessen</div>
            <div className="message user1">Dann aber schnell noch zum Supermarkt</div>
         </div>
      )
   }
}

export default MessageList;