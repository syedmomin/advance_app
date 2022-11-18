import PropTypes from 'prop-types';

export const Difference = () => {
    return (
        <>
            <h1>Diffrenece Between Class and Functional Component</h1>
            <table border={2}>
                <tr>
                    <th>Functional Components In React JS</th>
                    <th>Functional Components In React JS</th>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>Components are just like functions that return HTML elements.</li>
                            <li>In older React code bases, you may find Class components primarily used.</li>
                            <li>In React JS, it is now suggested to use Function components, which were added in React 16.8.</li>
                        </ul>
                    </td>
                    <td>
                        Latter
                    </td>
                </tr>
            </table>
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
            <h4>Props Type</h4>
            <h2>My name is {props.name} {props.desi} and age {props.age}</h2>
        </>
    )
}

// PropsType.PropTypes = {
//     name: PropTypes.string.isRequired,
//     desi: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired
//     }
    