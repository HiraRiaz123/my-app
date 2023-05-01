import React from 'react'
import { useState } from 'react'

function Map() {
    const [input, setInput] = useState({ name: "Hira", gender: "Female" })
    const data = [1, 2, 3, 4, 5, 5]
    const result = data.map((x, index) => <h1 key={index}>{x} {index}</h1>)
    const [array, setArray] = useState([]);
    function change(name) {
        setInput({ ...input, name: "Hira Riaz" })
    }
    function handleArray() {
        setArray([...array, {
            id: array.length,
            value: Math.random()
        }])

    }
    return (
        <div>
            {result}
            <h1>Hy my name is {input.name} and my gender is {input.gender}</h1>
            <button onClick={change}>Submit</button><br />
            <ol>
                {array.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ol>
            <button onClick={handleArray}>New Button for Array</button>
        </div>
    )
}

export default Map;
