import React, { Component } from "react"
import dog from "./DogIcon.png"
import "./Animals.css"
class AnimalList extends Component {
  animalOwner(taco) {
    // filter map find
    let animalOwners = this.props.animalOwners
      .filter(join => join.animalId === taco)
      .map(join => this.props.owners.find(owner => owner.id === join.ownerId).name)

    if (animalOwners.length === 0) {
      animalOwners = ["no one. This animal is up for adoption"]
    }

    return animalOwners
  }

  render() {
    return (
      <section className=" list">
        <h2 className="card-title"> Our Animals</h2>
        <div className="animals">
       
        {
          this.props.animals.map(animal =>
            
            <div key={animal.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <img src={dog} className="icon--dog" />
                  <p>
                    <strong>{animal.name}</strong> the {animal.type}.
                 </p>
                 <p>
                    Owner: {this.animalOwner(animal.id).join(" and ")}.
                 </p>
                  
                <a
                    href="#" onClick={() => this.props.deleteAnimal(animal.id)}
                    className="card-link">Delete</a>
                </h5>
              </div>
            </div>
          
          )
        }
        </div>
      </section>
    )
  }
}


export default AnimalList