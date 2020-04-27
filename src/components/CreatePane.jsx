import React from "react";

export class CreatePane extends React.Component {

   render() {
      if (this.props.toggled) {
         return (
            <div id="create-user">
               <form className="row">
                  <div className="col-md-3 form-group">
                     <label htmlFor="new-username">Username</label>
                     <input type="text" pattern="[A-Za-z0-9]{15}" className="form-control"
                            name="new-username" id="new-username" aria-describedby="new-username-help"/>
                     <small id="new-username-help" className="form-text text-muted">Der Username muss alphanumerisch
                        sein.</small>
                  </div>
                  <div className="col-md-3 form-group">
                     <label htmlFor="color">Farbe</label>
                     <input type="color" className="form-control"
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
      return null;
   }
}

export default CreatePane;