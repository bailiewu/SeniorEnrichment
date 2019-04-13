import React, { Component } from 'react';

export default class Student extends Component {
    render() {
        const { student } = this.props
        // console.log(student)
        return (
            <li >
                {student.firstName}
            </li >
        )
    }
}
