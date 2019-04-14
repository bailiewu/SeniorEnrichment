import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCampusThunk } from './store'


class Campus extends Component {
    constructor() {
        super()
        // this.click = this.click.bind(this)
        this.clickDelete = this.clickDelete.bind(this)

    }
    // click = (campus) => {
    //     this.props.history.push(`/campuses/${campus.id}`)
    // }
    clickDelete = (campus) => {
        // console.log('Delete', campus.id)
        this.props.deleteCampus(campus.id)
        // this.props.history.push(`/campuses/`)
    }
    render() {
        const { campus } = this.props
        return (
            <div className="col"  >
                <div /*onClick={() => this.click(campus)}*/ /*style={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: 'bold',
                    zIndex: 100,
                    left: 90,
                    top: 90
                }} */>
                    <a href={`/#/campuses/${campus.id}`}>{campus.name}</a>
                    <i className="fas fa-trash" style={{ position: 'relative', left: 10 }} onClick={() => { this.clickDelete(campus) }} />

                </div >
                <img src={campus.imageUrl} style={{ width: 200, height: 200, position: 'relative' }} />
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCampus: (id) => dispatch(deleteCampusThunk(id))
})

export default connect(null, mapDispatchToProps)(Campus);
