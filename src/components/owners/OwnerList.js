import React, { Component } from "react"
import "./Owners.css"

class OwnerList extends Component {

  render() {
    return (
      <section className="owners list">
        <h2 className="card-title">Owners</h2>
        <div className="card_holder">
        {
          this.props.owners.map(owner =>
            <div key={owner.id} className="card">
             <section className="ownerName">
               {owner.name}
               </section> 
              <section className="ownerNumber">
              Contact info: {owner.phone}
                <a
                  href="#" onClick={() => this.props.deleteOwner(owner.id)}
                  className="card-link">Delete</a>
              </section>
            </div>
          )
        }
        </div>
      </section>
    )
  }
}

export default OwnerList