import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

export const Difference = () => {
    return (
        <>
            <h1>Diffrenece Between Class and Functional Component</h1>
            <Table striped bordered >
                <thead>
                    <tr>
                        <th>Functional Components In React JS</th>
                        <th>Class Components In React JS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>Components are just like functions that return HTML elements.</li>
                                <li>In older React code bases, you may find Class components primarily used.</li>
                                <li>In React JS, it is now suggested to use Function components, which were added in React 16.8.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>In React JS, these components are simple classes (made up of multiple functions that add functionality to the application).</li>
                                <li>In React JS, all class based components are child classes for the Component class of ReactJS (React.Component)..</li>
                                <li>In React JS, the class must implement a render() member function which returns a React component to be rendered, similar to a return value of a functional component.</li>
                                <li>In React JS, component name always starts with Capital Letter .</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export const PropsDes = (props) => {
    return (
        <>
            <h2>Check Props ---- {props.name}</h2>
        </>
    )
}


export const PropsType = (props) => {
    return (
        <>
            <h1>Props Type Validation</h1>
            <h2>My name is {props.name} {props.desi} and age {props.age}</h2>
        </>
    )
}
PropsType.prototype = {
    name: PropTypes.string,
    desi: PropTypes.string,
    age: PropTypes.number
}

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
export const Constructor = () => {

    const std = new Student("Momin", 21);
    // console.log(std.name);
    return (
        <>
            <h1>Define Constructor</h1>
            <ul>
                <li>  In React JS, the constructor is a method used to initialize an object’s state in a class.</li>
                <li>In React JS, constructor automatically called during the creation of an object in a class.</li>
            </ul>
            <h3>Class Constructor({std.name}--{std.age})</h3>

        </>
    )
}
