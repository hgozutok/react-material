import {React,useEffect,useRef} from 'react'

function RefEx() {

    const inputEl = useRef(null);
    const inputLbl = useRef("12");
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.value=("dd");
      inputLbl.current.innerHTML=("123");
      console.log(inputLbl.current);
    };

    useEffect(() => {
  
        console.log(inputLbl.current);
    },[]);




    return (
        <div>
            <input ref={inputEl} type="text" />
            <label onClick={onButtonClick} ref={inputLbl}>{inputLbl.current}</label>
      <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )
}

export default RefEx
