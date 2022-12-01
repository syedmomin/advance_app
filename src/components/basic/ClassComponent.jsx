import React, { Component } from 'react'

export class ClassConstructor extends Component {
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



export class ClassState extends Component {
    constructor() {
        super()
        this.state = {
            name: "Momin",
            age: 27
        }
    }
    render() {
        const { name, age } = this.state
        return (
            <div>
                <h3>State in react</h3>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </div>
        )
    }
}

export class ClassEvent extends Component {

    render() {
        const HelloFunction = (name) => {
            alert("Hello " + name);
        }
        return (
            <div>
                <input type="button" value="Click" onClick={() => HelloFunction(this.props.name)} />
            </div>
        )
    }
}


export class ClassLifeCycle extends Component {

    render() {

        return (
            <div>
                <h3>Lifecycle of Components</h3>
                <ul>
                    <li>Mounting</li>
                    <li>Updating</li>
                    <li>Error Handling</li>
                    <li>Unmounting</li>
                </ul>
                <h3>Mounting</h3>
                <ul>
                    <li>In React JS, Mounting means putting elements into the DOM.</li>
                    <li>In this phase, an instance of a component is being created and inserted into the DOM.</li>
                </ul>
                <h3>Updating</h3>
                <ul>
                    <li>In React JS, the next phase in the lifecycle is when a component is updated.</li>
                    <li>A component is updated whenever there is a change in the component’s state or props.</li>
                </ul>
                <h3>Unmounting</h3>
                <ul>
                    <li>In React JS, the next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</li>
                </ul>


            </div>
        )
    }
}

export class LifeCycleMounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "momin"
        }
        console.log("Mounting 1 Constructor Invoked..");
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, state);
        return null
    }
    componentDidMount() {
        console.log("Mounting 2 componentDidMount Invoked..");
    }
    render() {
        return (
            <>
                <h3>React has four built-in methods that gets called, in this order, when mounting a component:</h3>
                <strong>
                    <ul>
                        <li>constructor(props)</li>
                        <li>static getDerivedStateFromProps(props, state)</li>
                        <li>render()</li>
                        <li>componentDidMount()</li>
                    </ul>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h1>{this.props.city}</h1>
                    </div>
                </strong>
            </>
        )
    }
}

