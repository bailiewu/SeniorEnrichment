import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampuses } from './store'
import Campus from './Campus'

class Campuses extends Component {
    componentDidMount() {
        this.props.fetchCampuses()
    }

    render() {
        const { campuses } = this.props
        return (
            <div className="row justify-content-around align-items-center">
                {campuses.map((campus) => (<Campus campus={campus} key={campus.id} />))}

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

