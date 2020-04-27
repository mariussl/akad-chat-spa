import React from 'react';
import RoomSelect from './components/RoomSelect';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
     <div className="container">
       <div className="row">
         <div className="col-md-9"><h2>Der Akad Super Chat</h2></div>
         <div className="col-md-3 loginout">nicht eingelogged</div>
       </div>
       <div className="row">
         <div className="col-md-12"><h4>Dies ist ein einfacher Chat basierend auf React, PHP und Postgresql</h4></div>
       </div>
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
         <div className="col-md-3"></div>
       </form>
       <div className="row">
         <div className="col-md-9">
           <p>
             <a className="btn btn-info" data-toggle="collapse" href="#create-user"
                role="button" aria-expanded="false" aria-controls="create-user">
               Das erste Mal hier?
             </a>
           </p>
         </div>
         <div className="col-md-3"></div>
       </div>
       <div className="collapse" id="create-user">
         <form className="row">
           <div className="col-md-3 form-group">
             <label htmlFor="new-username">Username</label>
             <input type="text" pattern="[A-Za-z0-9]{15}" className="form-control"
                    name="new-username" id="new-username" aria-describedby="new-username-help" />
               <small id="new-username-help" className="form-text text-muted">Der Username muss alphanumerisch
                 sein.</small>
           </div>
           <div className="col-md-3 form-group">
             <label htmlFor="color">Farbe</label>
             <input type="color" className="form-control"
                    name="color" id="color" aria-describedby="color-help" />
               <small id="color-help" className="form-text text-muted">Die Farbe in der Ihre Nachrichten
                 erscheinen.</small>
           </div>
           <div className="col-md-3 form-group padding-btn">
             <button type="submit" className="btn btn-primary">Registrieren</button>
           </div>
           <div className="col-md-3"></div>
         </form>
       </div>
     </div>
  );
}

export default App;
