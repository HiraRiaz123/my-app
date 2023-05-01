import React, { useState } from "react"
function TodoList() {
    const [task, setTask] = useState();
    const [listData, setListData] = useState([]);
    function addTask() {
        // setListData([...listData, task])
        // console.log(listData)
        if (!task) {
            alert('Input field is required')
        }
        else {
            setListData((listData) => {
                const updatedList = [...listData, task]
                console.log(updatedList)
                setTask('')
                return updatedList
            })
        }
    }
    function removeTask(i) {
        const removeOneTask = listData.filter((elem, id) => {
            return i != id;
        })
        setListData(removeOneTask)
    }

    function removeAll() {
        setListData([])
    }

    return (

        <div className="container">
            <h1>TodoList</h1>
            <input type="text" name="task" value={task} placeholder="Enter task" onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <h3>LIST IS HERE:{")"}</h3>
            {listData != [] && listData.map((data, i) => {
                return (
                    <>
                        <p key={i}>
                            <div>{data}<button onClick={() => removeTask(i)}>Remove</button></div>
                        </p>
                    </>
                )
            })}
            {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
        </div>
    )
}
export default TodoList;