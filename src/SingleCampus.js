import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default withRouter(class SingleCampus extends Component {
    constructor() {
        super()
        this.state = {}
        this.printStudents = this.printStudents.bind(this)
        this.click = this.click.bind(this)
    }
    click(student) {
        this.props.history.push(`/students/${student.id}`)
    }
    printStudents(students) {
        if (students.length < 1) return
        return (
            <div>
                <h4>Students</h4>
                {(students.map((student) => {
                    return (
                        <li key={student.id} style={{ margin: 5 }} onClick={() => this.click(student)}>
                            {student.firstName} {student.lastName}
                            <div />
                        </li>)
                }))}
            </div>)
    }

    componentDidMount() {
        const campusId = this.props.match.params.id
        axios.get(`/api/campuses/${campusId}`)
            .then((response) => response.data)
            .then(campus => {
                // console.log(campus)
                this.setState(campus)
            })
    }

    render() {
        // console.log(this.state)
        const campus = this.state
        // console.log(campus)
        return (
            <div className="col">
                <div >
                    <p style={{ fontSize: 32 }} >{campus.name} Campus</p>
                    {campus.address} <div />
                    <img src={campus.imageUrl} style={{ width: 200, height: 200, position: 'relative' }} />
                    <div >
                        {campus.description}
                    </div >
                    <hr />
                    {campus.students ? this.printStudents(campus.students) : 'This campus has no students.'}
                </div >

                {/* <img src={campus.imageUrl} style={{ width: 200, height: 200, position: 'relative' }} /> */}

            </div>
        )
    }
})
