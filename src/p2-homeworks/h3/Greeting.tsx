import React, {ChangeEvent} from "react";
import style from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any+
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=> void // need to fix an
    error: boolean // need to fix any+
    totalUsers: number // need to fix any+
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = style.error; // need to fix with (?:)


    return (
        <div className={style.someClass}>
            <input value={name} onChange={setNameCallback} className={style.inputClass} placeholder="enter name"/>
            <span>{error}</span>
            <button className={style.btn} onClick={addUser}>add</button>
            <span className={style.total}>total:{totalUsers}</span>
        </div>
    );
}

export default Greeting;
