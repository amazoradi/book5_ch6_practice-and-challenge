import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import AnimalOwnersManager from "../modules/AnimalOwnersManager"



export default class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    animalOwners: []
  }

  componentDidMount() {
    const newState = {}

    AnimalManager.getAll()
      .then(animals => newState.animals = animals)
      .then(() => EmployeeManager.getAll())
      .then(employees => newState.employees = employees)
      .then(() => LocationManager.getAll())
      .then(locations => newState.locations = locations)
      .then(() => OwnerManager.getAll())
      .then(owners => newState.owners = owners)
      .then(() => AnimalOwnersManager.getAll())
      .then(animalOwners => newState.animalOwners = animalOwners)
      .then(() => this.setState(newState))
  }

  deleteAnimal = id => {
    AnimalManager.removeAndList(id)
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  fireEmployee = id => {
    EmployeeManager.removeAndList(id)
      .then(employees => this.setState({
        employees: employees
      })
      )
  }

  deleteOwner = id => {
    OwnerManager.removeAndList(id)
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} fireEmployee={this.fireEmployee} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
        }} />
      </React.Fragment>
    )
  }
}

