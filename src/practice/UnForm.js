import React, { useRef } from "react"
function UnForm() {
    const refObject = useRef();
    function handleSubmit(e) {
        e.preventDefault()
        console.log((refObject.current.value))
    }
    return (
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={refObject} />
                <button>Submit</button>
            </form>
            <br/><br/><br/>
        </div>
    )
}
export default UnForm;