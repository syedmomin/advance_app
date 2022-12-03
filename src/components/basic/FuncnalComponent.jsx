import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import  from 'react-bootstrap/Table';
import { Button, Table } from 'react-bootstrap';
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


export const HookState = () => {
  const [firstValue, setValue] = useState({
    name: "syed Momin",
    age: 20
  })

  return (
    <>
      <h3>Hooks in react</h3>
      <h5>{firstValue.name}</h5>
      <h5>{firstValue.age}</h5>
    </>
  )
}



function StudentData({ std }) {
  return (
    <div>
      <h1>I am {std.name} and I am {std.age} years old.</h1>
    </div>
  )
}

export const ListandKey = () => {
  // const students = ["Adil","Kumar","Prem","Zain"];
  // let studentNames = students.map((std, index) => <li key={index}>{ std }</li>);
  // const numbers = [2,4,6,8];
  // const result = numbers.map(num => <h1>{num = num * 2}</h1>);
  const students = [
    {
      id: 1,
      name: "momin",
      age: 23
    },
    {
      id: 2,
      name: "abdul",
      age: 25
    },
    {
      id: 3,
      name: "syed",
      age: 27
    }
  ]

  return (
    <div>
      {students.map(std => <StudentData key={std.id} std={std} />)}
      {/* { <ul>{ studentNames }</ul> } */}

      {/* { students.map(std => <Student std={std}/> ) } */}
      {/* {result} */}
      {/* { students.map(std => <h1>{ std }</h1>) } */}
      {/* { numbers.map(num => <h1>{num = num * 2}</h1>) } */}
    </div>
  )
}

export const FunctionUseStateObject = () => {

  const [dummyObject, updateObject] = useState({
    name: "syed",
    age: 21,
    height: 6
  })
  let functionupdate = () => {
    updateObject({
      name: "momin",
      age: 21,
      height: 6.2
    })

    // spreed object in three dot 

    updateObject(dummySate  => {
      return{...dummySate,
        name:"momin"
      }
    })
  }
  return (
    <>
      <h1>{dummyObject.name}</h1>
      <h1>{dummyObject.age}</h1>
      <h1>{dummyObject.height}</h1>
      <Button variant="info" onClick={functionupdate}>
        Change State
      </Button>
    </>
  )
}



export const FunctionUseEffect = () => {

  let [count, setCount] = useState(0)
  let [name, setName] = useState('momin')

  // har chezz k side effect use effect
  // useEffect( () => {
  //     console.log("Hello I am Effect = " + count)
  // }, [] )
  // useEffect(() => {
  //   console.log("Hello I am Effect = " + count)
  // }, [count, name])

  useEffect(() => {
    console.log("Hello I am Effect = " + count)
  }, [count])

  useEffect(() => {
    console.log("Hello: " + name)
  }, [name])

  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>Update State</button>
      <button onClick={() => setName(name = 'dany')}>Update Name</button>
    </div>
  )
}




export const FunctionUseContact = () => {

  return (
    <>
      <h1>dsdsdsadsa</h1>
    </>
  )
}