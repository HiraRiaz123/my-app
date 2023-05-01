import React, { useEffect, useState } from "react"
function Register() {
    const data = { name: "", email: "", password: "" }
    const [input, setInput] = useState(data);
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        console.log("Registered")
    }, [flag])
    function handleInput(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!input.name || !input.email || !input.password) {
            alert("All Input fields are required")
        }
        else {
            setFlag(true)
        }
    }
    return (
        <div className="form">
            <span>{(flag) ? <h2>Hy {input.name} you are registered successfully</h2> : false}</span>
            <form onSubmit={handleSubmit}>
                <div className="body">
                    <h1>Registration Form</h1>
                    <input type="text" name="name" placeholder="Enter your name" value={input.name} onChange={handleInput} /><br /><br />
                    <input type="text" name="email" placeholder="Enter your email" value={input.email} onChange={handleInput} /><br /><br />
                    <input type="text" name="password" placeholder="Enter your password" value={input.password} onChange={handleInput} /><br /><br />
                    <button type="Submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;