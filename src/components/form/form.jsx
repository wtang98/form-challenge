import React, {useState, useEffect} from "react";
import './form.scss'

const Form = ({darkMode}) => {
    const [nameState, setNameState] = useState('');
    const [emailState, setEmailState] = useState('');
    const [userData, setUserData] = useState([]);
    const [emailError, setEmailError] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        if(emailState.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )){
            setUserData([nameState,emailState])
            setEmailError(false)
        }else{
            setEmailError(true)
        }
    }
    
    return (
        <div className='form'>
            <form className='form__form'>
                <div>
                    <h4 className='form__form-label'>Name:</h4>
                    <input className={`form__form-input ${darkMode && 'darkMode'}`} type='text' onChange={(e)=>{setNameState(e.target.value)}} value={nameState}/>
                    {emailError ? <h4 className='form__form-label'>Email: *error</h4>: <h4 className='form__form-label'>Email:</h4>}
                    <input className={`form__form-input ${darkMode && 'darkMode'} ${emailError && 'emailError'} `} onChange={(e)=>{setEmailState(e.target.value)}} type='text' value={emailState}/>
                </div>
                <button className={darkMode&& 'darkMode'} onClick={handleSumbit}>submit</button>
            </form>
            <div className='form__result'>
                <p>Name: {userData[0]}</p>
                <p>Email: {userData[1]}</p>
            </div>
        </div>
    );
};

export default Form;
