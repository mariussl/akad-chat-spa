import React from "react";

export class Message extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messageList: []
      };
   }
}

export default Message;