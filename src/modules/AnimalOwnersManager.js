import APIManager from "./APIManager"

class AnimalOWnersManager extends APIManager {
  getAnimalOwner(id) {
    return this.get(id)
  }

  getAll() {
    return this.all()
  }

  removeAndList(id) {
    return this.delete(id).then(() => this.getAll())
  }
}


export default new AnimalOWnersManager("animalOwners")

