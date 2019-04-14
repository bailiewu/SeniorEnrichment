import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from './store'
import Student from './Student'
import AddStudent from './AddStudent';

class Students extends Component {
    componentDidMount() {
        this.props.fetchStudents()
    }

    render() {
        const { students } = this.props
        return (
            <div>

                <ul >
                    {students.map((student) => (<Student student={student} key={student.id} />))}
                </ul>
                <AddStudent />
            </div>

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

