import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEmployees } from '../actions/userAction';
import PropTypes from 'prop-types';
import history from '../history';
export class Dashboard extends Component {
    constructor(props){
        super(props);
        this.props.getEmployees()
    }
    static propTypes = {
        users : PropTypes.object.isRequired,
        getEmployees : PropTypes.func.isRequired
    }
    logout = () => {
        localStorage.removeItem('user');
        history.push(`/login`)
    }
    render() {
        console.log(this.props.users.employees)
        const { employees } = this.props.users
        return (
            <div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <h3 className="text-center"> Dashboard</h3>
                <button type="button" className="btn btn-primary" onClick={this.logout}> Logout </button>
                <table className="table border">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
        {employees.length > 0 && employees.map(emp =>
            <tr key={emp.id}>
                <td scope="row">{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.gender}</td>
                <td>{emp.email}</td>
                <td>{emp.phoneNo}</td>
            </tr>
        )}
        </tbody>
    </table>
                </div>
                <div className="col-md-2"></div>
            </div>
    </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    getEmployees : () => dispatch(getEmployees())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
