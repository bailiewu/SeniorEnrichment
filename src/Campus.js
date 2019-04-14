import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export default withRouter(class Campus extends Component {
    constructor() {
        super()
        this.click = this.click.bind(this)
    }
    click = (campus) => {
        this.props.history.push(`/campuses/${campus.id}`)
    }
    render() {
        const { campus } = this.props
        return (
            <div className="col" onClick={() => this.click(campus)}>
                <div /*style={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: 'bold',
                    zIndex: 100,
                    left: 90,
                    top: 90
                }} */> {campus.name}
                </div >
                <img src={campus.imageUrl} style={{ width: 200, height: 200, position: 'relative' }} />
            </div>

        )
    }
})
