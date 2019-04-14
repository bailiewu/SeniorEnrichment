import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampuses } from './store'
import Campus from './Campus'
import AddCampus from './AddCampus'

class Campuses extends Component {
    componentDidMount() {
        this.props.fetchCampuses()
    }

    render() {
        const { campuses } = this.props
        return (
            <div>
                <div className="row justify-content-around align-items-center" >
                    {campuses.map((campus) => (<Campus campus={campus} key={campus.id} />))}
                </div>
                <div style={{ margin: 20 }} />
                <AddCampus />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}
const mapDispatchToProps = dispatch => ({
    fetchCampuses: () => dispatch(getCampuses())
})

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);

