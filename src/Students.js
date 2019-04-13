import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from './store'
import Student from './Student'

class Students extends Component {
    componentDidMount() {
        this.props.fetchStudents()
    }

    render() {
        const { students } = this.props
        // console.log(students)
        return (
            <ul >
                {students.map((student) => (<Student student={student} key={student.id} />))}

            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}
const mapDispatchToProps = dispatch => ({
    fetchStudents: () => dispatch(getStudents())
})

export default connect(mapStateToProps, mapDispatchToProps)(Students);

