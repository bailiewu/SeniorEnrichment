import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { getStudents } from './store'

class AddStudent extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            imageUrl: '',
            gpa: 0,
            disabled: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (obj) => {
        // console.log(obj.target.name)
        this.setState({ [obj.target.name]: obj.target.value }, () => {
            this.setState({ disabled: !!this.state.firstName && !!this.state.lastName && this.state.gpa >= 0 && this.state.gpa <= 4 })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { firstName, lastName, email, imageUrl, gpa } = this.state
        // this.setState({ disabled: !!name && !!address })
        console.log(this.state)
        axios.put('/api/students', { firstName, lastName, email, imageUrl, gpa })
            .then((newStudent) => newStudent.data)
            // .then(() => )
            // .then((newCampus) => this.props.history.push(`/campuses/${newCampus.id}`))
            .then(() => this.props.fetchStudents())
            .catch(er => console.error(er))
    }
    render() {
        const { name, address, description, disabled } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add New Student</h3>
                <div >
                    <label htmlFor="firstName">
                        First Name <input onChange={this.handleChange} value={name} type="text" name="firstName" />
                    </label>
                    <div />
                    <label htmlFor="lastName">
                        Last Name <input onChange={this.handleChange} value={address} type="text" name="lastName" />
                    </label>
                    <div />
                    <label htmlFor="email">
                        Email <input onChange={this.handleChange} value={description} type="text" name="email" />
                    </label>
                    <div />
                    <label htmlFor="imageUrl">
                        imageUrl <input onChange={this.handleChange} value={description} type="text" name="imageUrl" />
                    </label>
                    <div />
                    <label htmlFor="gpa">
                        GPA <input onChange={this.handleChange} value={description} type="text" name="gpa" />
                    </label>
                </div>
                <button type="submit" disabled={!disabled}>Add Student</button>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    fetchStudents: () => dispatch(getStudents())
})
export default connect(null, mapDispatchToProps)(AddStudent);
