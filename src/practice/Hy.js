import React, { memo } from 'react';
function Hy(prop,subs
    ) {
    console.log("I m child")
    // const a = 10;
    return (
        <div>
            {
                /* <article><p>{(a) > 15 ? "False" : "True"}</p>
                    <p>{a + a}</p>
                </article> */
            }
            <article className='prop'>
                <br />
                <img className='avatar'
                    src={prop.imageUrl}
                    alt={'Photo of ' + prop.name}
                />
                <h1>This is {prop.name}</h1>
                <p>The gender of {prop.name} is {prop.gender}</p>
                <p>The age of {prop.name} is {prop.age}</p>
                <p>The weight of {prop.name} is {prop.weight}</p>
                <br />
            </article>
        </div>
    );
}
export default memo(Hy);