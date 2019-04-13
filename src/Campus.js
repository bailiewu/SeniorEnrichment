import React, { Component } from 'react';

export default class Campus extends Component {
    render() {
        const { campus } = this.props
        return (
            <div className="col">
                <div style={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: 'bold',
                    zIndex: 100,
                    left: 90,
                    top: 90
                }}>
                    {campus.name}
                </div >

                <img src={campus.imageUrl} style={{ width: 200, height: 200, position: 'relative' }} />

            </div>
        )
    }
}
