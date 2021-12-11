import React,{useState} from 'react'
import { forwardRef, useRef, useImperativeHandle } from "react";

    const Child = forwardRef((props, ref) => {
        const [count, setCount] = useState(0)

        const Increment = () => {
            setCount(count + 1)
        }
       
        const Decrement = () => {

            setCount(count - 1)
        }

        const showAlert = () => {
            alert("Child Function Called")
        }

        useImperativeHandle(
            ref,
            () => ({
                showAlert,Increment,Decrement
            }),
        )
     

        return (
           <div>Child Component


           {count}
           
           
      </div>
        )
    })

    export default Child;