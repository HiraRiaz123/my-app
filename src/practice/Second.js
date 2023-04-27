import React, { useContext, useState, useMemo, useCallback } from "react";
import { data, data1, data2 } from "../App";
// import Hy from "./practice/Hy";
function Second() {
    const name = useContext(data);
    const age = useContext(data1);
    const weight = useContext(data2);
    const [add, setAdd] = useState(1);
    const [sub, setSub] = useState(100);
    const mul = useMemo(
        function Mul() {
            console.log("hyy");
            return add * 10;
        }, [add]
    )
    const subs = useCallback(
        () => {
            return sub - 2;
        }, [sub]
    )
    return (
        <div>
            {mul}<br />
            {subs()}<br />
            <span>{add}</span>
            <button onClick={() => setAdd(add + 1)}>ADD</button><br></br>
            <span>{sub}</span>
            <button onClick={() => setSub(sub - 1)}>SUB</button>
            <h1 className="h1">My Self</h1>
            <p className="p">My name is {name}</p>
            <p className="p">My age is {age}</p>
            <p className="p">My weight is {weight}</p>
            {/* <Hy subs={subs} /> */}
        </div>
    )
    // return (
    //     <news.Consumer>
    //         {
    //             (name) => {
    //                 return (
    //                     <newss.Consumer>
    //                         {
    //                             (age) => {
    //                                 return (
    //                                     <newsss.Consumer>
    //                                         {
    //                                             (weight) => {
    //                                                 return (
    //                                                     <div>
    //                                                         <h1 className="h1">
    //                                                             My Self
    //                                                         </h1>
    //                                                         <p className="p">My name is {name}</p>
    //                                                         <p className="p">My age is {age}</p>
    //                                                         <p className="p">My weigth is {weight}</p>
    //                                                     </div>
    //                                                 )
    //                                             }
    //                                         }
    //                                     </newsss.Consumer>
    //                                 )
    //                             }
    //                         }
    //                     </newss.Consumer>

    //                 )
    //             }
    //         }
    //     </news.Consumer>
    // )
}
export default Second;
