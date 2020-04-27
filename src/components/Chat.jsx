import React from "react";

export class Chat extends React.Component {
   render() {
      return (
         <div>
            <div className="row room-select">
               <div className="col-md-9">
                  <label htmlFor="room">Chat-Raum</label>
                  <select className="form-control" name="room" id="room" aria-describedby="room-help">
                     <option selected>Wohnzimmer</option>
                     <option>Allgemein</option>
                  </select>
               </div>
               <div className="col-md-3"></div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="chat-message-pane">
                     <div className="message user1">Hallo wie gehts dir?</div>
                     <div className="message user2">Gut, danke - ist schönes Wetter heute oder?</div>
                     <div className="message user1">Ja genau. Warst du schon einkaufen?</div>
                     <div className="message user2">Ja bei uns gibt es Pizza :)</div>
                     <div className="message user2">Oh jetzt fällt mir ein ich hab den Käse vergessen</div>
                     <div className="message user1">Dann aber schnell noch zum Supermarkt</div>
                  </div>
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