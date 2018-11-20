import APIManager from "./APIManager"

class OwnerlManager extends APIManager {
  getOwner(id) {
    return this.get(id)
  }

  getAll() {
    return this.all()
  }

  removeAndList(id) {
    return this.delete(id).then(() => this.getAll())
  }
}


export default new OwnerlManager("owners")

