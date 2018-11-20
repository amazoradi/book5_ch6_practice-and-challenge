const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(response => response.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(response => response.json())
  },
  deleteEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
  }
}
