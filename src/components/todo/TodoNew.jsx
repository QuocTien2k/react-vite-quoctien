import { useState } from "react";
const TodoNew = () => {
    const handleClick = () => {
        alert(valueInput);
    }

    const [valueInput, setValueInput] = useState("Tien");

    const handleOnChange = (name) => {
        //console.log(name);

        setValueInput(name); // Thay đổi giá trị của state
    }
    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
            <button onClick={handleClick}>Add</button>
            <p>My name is {valueInput}</p>
        </div>
    )
}
export default TodoNew;
