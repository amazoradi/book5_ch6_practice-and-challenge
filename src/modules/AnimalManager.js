const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(response => response.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(response => response.json())
  }
}