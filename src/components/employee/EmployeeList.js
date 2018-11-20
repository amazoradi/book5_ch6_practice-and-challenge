import React, { Component } from 'react'
import "./Employee.css"

class EmployeeList extends Component {
  render() {
    return (
      <section className="employees list">
        <h2 className="card-title">Our Employees</h2>
        <div className="card_holder">
        {
          this.props.employees.map(employee =>
            
            <div key={employee.id} className="card">
          {employee.name}
              <a
                href="#" onClick={() => this.props.fireEmployee(employee.id)}
                className="card-link">You're Fired</a>
        </div>
            
        )
      }
        </div>
      </section>
    );
  }
}


export default EmployeeList



