import { React, useState, useEffect, useRef } from "react";

function Usestate() {
    const [count, setcounter] = useState(0)
    const [name, setName] = useState("hira")
    const refElement = useRef("")
    useEffect(() => {
        console.log("I Only run once (When the component gets mounted)")
    }, [count])

    function updateCount() {
        setcounter(count + 1)
    }
    function Reset() {
        // setName("")
        refElement.current.focus()
        refElement.current.style.color = "red"
        refElement.current.value = "Hira Riaz"
    }
    return (
        <div className="usestate">
            <h1>Click Button {count} {(count) > 1 ? "Times" : "Time"}</h1>
            <button className="button" onClick={updateCount}>Click Me</button><br />
            <input type="text" ref={refElement} value={name} onChange={(e) => setName(e.target.value)} />
            <button className="button" onClick={Reset}>Check Me</button>

        </div>
    );
}
export default Usestate;





// scjakbbscjj
