import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudentThunk } from './store'

class Student extends Component {
    constructor() {
        super()
        // this.click = this.click.bind(this)
        this.clickDelete = this.clickDelete.bind(this)
    }
    // click = (student) => {
    //     this.props.history.push(`/students/${student.id}`)
    // }
    clickDelete = (student) => {
        this.props.deleteStudent(student.id)
    }
    render() {
        const { student } = this.props
        // console.log(student)
        return (
            <li /*onClick={() => this.click(student)} */>
                <a href={`#/students/${student.id}`}>{student.firstName}</a>
                <i className="fas fa-trash" style={{ position: 'relative', left: 10 }} onClick={() => { this.clickDelete(student) }} />
            </li >
        )
    }
}

const mapDispatchToProps = dispatch => ({
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
})

export default connect(null, mapDispatchToProps)(Student);


