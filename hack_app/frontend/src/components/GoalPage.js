import React, { Component } from 'react';
//import './GoalPage.css';

export default class GoalPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (

            <div>
                 <h1>Select your current goal</h1>

                <div class="row">
                    <div class="column">
                        <div class="card">
                            <div class="card-text">
                            
                                <h3>Dealing with pandemic stress</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <button class="btn">Select this goal</button>  
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="card-text">
                                <h3>Getting healthier</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <button class="btn">Select this goal</button>  
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="card-text">
                                <h3>Getting better sleep</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <button class="btn">Select this goal</button>  
                        </div>
                    </div>
                </div>

            </div>
     
        
        );
    }
}