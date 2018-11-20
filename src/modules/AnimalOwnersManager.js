const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animalOwners/${id}`).then(response => response.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animalOwners`).then(response => response.json())
  }
}