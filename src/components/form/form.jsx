import React, {useState, useEffect} from "react";
import './form.scss'

const Form = () => {
    const [nameState, setNameState] = useState('');
    const [emailState, setEmailState] = useState('');
    const [userData, setUserData] = useState([]);



    const handleSumbit = (e) => {
        e.preventDefault();
        setUserData([nameState,emailState])
    }
    
    return (
        <div className='form'>
            <form className='form__form'>
                <div>
                    <h4 className='form__form-label'>Name:</h4>
                    <input className='form__form-input' type='text' onChange={(e)=>{setNameState(e.target.value)}} value={nameState}/>
                    <h4 className='form__form-label'>Email:</h4>
                    <input className='form__form-input' onChange={(e)=>{setEmailState(e.target.value)}} type='text' value={emailState}/>
                </div>
                <button onClick={handleSumbit}>submit</button>
            </form>
            <div className='form__result'>
                <p>Name: {userData[0]}</p>
                <p>Email: {userData[1]}</p>
            </div>
        </div>
    );
};

export default Form;
