import React, { useContext, useEffect, useState } from 'react'
import './PassGen.css';
import Range from './Range';
import { AppContext } from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function PassGen() {

    const { range,
        string, setString,
        copyHandler,
        alphabets,
        specials,
        checkStrength,
        formData, setFormData,
        isVisible, eye, visibilityHandler } = useContext(AppContext);

    const [password, setPassword] = useState('Generate a password');



    const changeHandler = (e) => {
        const { id, checked } = e.target;
        setFormData(prev => { return ({ ...prev, [id]: checked }) });
    }
    const passGenerator = () => {
        let i = 0;
        if (!formData.alphabets && !formData.numerics && !formData.specials) {
            toast.warn('Select at least one option', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }); return;
        }
        setString("");
        while (i < range) {
            if (formData.alphabets) {
                setString(prev => prev + alphabets[Math.floor(Math.random() * 25)]);
                i++;
            }
            if (formData.numerics && i < range) {
                setString(prev => prev + Math.floor(Math.random() * 9));
                i++;
            }
            if (formData.specials && i < range) {
                setString(prev => prev + specials[Math.floor(Math.random() * 8)]);
                i++;
            }

        }

        setPassword('');
        for (let i = 0; i < range; i++) {
            setPassword(prev => prev + '*')
        }
        checkStrength();
    }

    return (
        <div className='passGen__container'>
            <h1 className='title'>Password Generator</h1>

            <div className='password'>
                <div>{isVisible ? string : password}</div>
                <img src={eye} alt='' onClick={visibilityHandler} ></img>
            </div>

            <div className='utility'>
                <div className='strength' ></div>
                <div className='copy' onClick={copyHandler}>Copy</div>
            </div>

            <Range />

            <div className='tools'>
                <div className='pass__length'>Password Length = {range}</div>
                <div className='options'>
                    <div className='option'>
                        <input type='checkbox' id='alphabets' onChange={changeHandler} checked={formData.alphabets}></input>
                        <label htmlFor='alphabets'>A-Z</label>
                    </div>

                    <div>
                        <input type='checkbox' id='numerics' onChange={changeHandler} checked={formData.numerics}></input>
                        <label htmlFor='numerics'>0-9</label>
                    </div>


                    <div>
                        <input type='checkbox' id='specials' onChange={changeHandler} checked={formData.specials}></input>
                        <label htmlFor='specials'>!@#</label>
                    </div>
                </div>
            </div>

            <button className='generate' onClick={passGenerator}> Generate</button>
            <ToastContainer />
        </div>
    )
}

export default PassGen  