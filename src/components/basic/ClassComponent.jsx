import React, { Component } from 'react'

export default class ClassConstructor extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor From Developer");
    }
    render() {
        return (
            <div>
                <h1>Class Constructor</h1>
                <ul>
                    <li>In React JS, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.</li>
                    <li>In React JS, when you implement the constructor for a React component, you need to call super(props) method before any other statement.</li>
                    <li>In React JS, If you do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs.</li>
                </ul>
                <h3>Hello World {this.props.name}</h3>
            </div>
        )
    }
}