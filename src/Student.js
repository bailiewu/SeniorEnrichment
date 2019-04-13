import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(class Student extends Component {
    constructor() {
        super()
        this.click = this.click.bind(this)
    }
    click = (student) => {
        this.props.history.push(`/students/${student.id}`)
    }
    render() {
        const { student } = this.props
        // console.log(student)
        return (
            <li onClick={() => this.click(student)}>
                {student.firstName}
            </li >
        )
    }
})
