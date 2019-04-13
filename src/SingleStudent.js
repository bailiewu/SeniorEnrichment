import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default withRouter(class SingleStudent extends Component {
    constructor() {
        super()
        this.state = {}
        this.click = this.click.bind(this)
    }
    click(campus) {
        this.props.history.push(`/campuses/${campus.id}`)
    }
    componentDidMount() {
        const studentId = this.props.match.params.id
        axios.get(`/api/students/${studentId}`)
            .then((response) => response.data)
            .then(student => {
                // console.log(student)
                this.setState(student)
            })
    }

    render() {
        // console.log(this.state)
        const student = this.state
        return (
            <div className="col">
                <div >
                    <div style={{ fontSize: 32 }} >{student.firstName} {student.lastName}</div>

                    <img src={student.imageUrl} style={{ width: 200, position: 'relative' }} />
                    <div >
                        {student.email}
                    </div >
                    GPA: {student.gpa}
                </div >
                {student.campus ? <div onClick={() => { this.click(student.campus) }}>Attends {student.campus.name} campus.</div> : 'Does not attend school.'}

                {/* <img src={campus.imageUrl} style={{ width: 200, height: 200, position: 'relative' }} /> */}

            </div>
        )
    }
})
