const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(response => response.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(response => response.json())
  },
  deleteOwners(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
  }
}