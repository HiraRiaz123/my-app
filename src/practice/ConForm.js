import React, { useState } from "react"
function Form() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    function handleInput(e) {
        if (e.target.name == "first") {
            const cap = (e.target.value).toUpperCase();
            setFname(cap);
        }
        else {
            setLname(e.target.value)
        }
    }
    return (
        <div>
            <h1 className="h1">New Form</h1>
            <form>
                <label>First name:</label><br />
                <input type="text" name="first" value={fname} onChange={handleInput} /><br />
                <label>Last name:</label><br />
                <input type="text" name="last" value={lname} onChange={handleInput} /><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form;