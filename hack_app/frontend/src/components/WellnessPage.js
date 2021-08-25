import React, { Component } from 'react';

/*
export default class WellnessPageColumn extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.title</h3>
            </div>
        )
    }
}
*/

export default class WellnessPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            
            <div>
                <div className='greeting'>
                    <h2>Hey #name, what shall we do today? </h2>
                    <h2>Goal name: #name </h2>
                </div>
                <div className='content-container'>
                    <h3>Title 1</h3>
                    <div className="content">
                        <p className="content-description">Short description</p>
                        <a>A link</a>
                    </div>
                </div>
                <div className='content-container'>
                    <h3>Title 2</h3>
                    <div className="content">
                        <p className="content-description">Short description</p>
                        <a>A link</a>
                    </div>
                </div>
                <div className='content-container'>
                    <h3>Title 3</h3>
                    <div className="content">
                        <p className="content-description">Short description</p>
                        <a>A link</a>
                    </div>
                </div>
                <p className="quote">Quote of the day</p>
            </div>
            
        
        );
    }
}