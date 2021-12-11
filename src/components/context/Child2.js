import React from 'react'

function Child2(props) {

    const click = () => {
        props.clickHandler();
    }
    return (
        <div>
            Chil2
            <button onClick={click}>Click</button>
     

        </div>
    )
}

export default Child2
