// import { useState } from "react";

const Input = (props) => {

//    const [nametext, setNameText] = useState('name');
//   const [agetext, setAgeText] = useState('age');
//   const [hobbiestext, setHobbiesText] = useState('hobbies');


    return(
        <div>
            <input onChange={e => props.updateName(e.target.value)} placeholder='name'/>
            <br />
            <br />
            <input onChange={e => props.updateAge(e.target.value)} placeholder='age'/>
            <br />
            <br />
            <input onChange={e => props.updateHobbies(e.target.value)} placeholder='hobbies'/>
        </div>
    );
};

export default Input;