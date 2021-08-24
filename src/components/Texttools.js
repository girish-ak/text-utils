import React, { useState } from 'react'

export default function Texttools(props) {
    const handleUpClick = () => {
        let uptext = text.toUpperCase();
        setText(uptext);
    }
    const handleLowClick = () => {
        let lowtext = text.toLowerCase();
        setText(lowtext);
    }
    const handleClearClick = () => {
        let newtext = '';
        setText(newtext);
    }
    const handleRevClick = () => {
        let newtext = text.split("").reverse().join("");
        setText(newtext);
    }
    const handleXspaceClick = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-5 col-md-6" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className={`form-control fs-4 bg-transparent border-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode === 'light' ? 'dark' : 'light'} my-3 border-2`} value={text} onChange={handleOnChange} id="inputbox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'warning'} mx-1 my-1`} onClick={handleUpClick} >Uppercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'warning'} mx-1 my-1`} onClick={handleLowClick}>Lowercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'warning'} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'warning'} mx-1 my-1`} onClick={handleRevClick}>Reverse</button>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'warning'} mx-1 my-1`} onClick={handleXspaceClick}>Remove Extra Spaces</button>


            </div>
            <div className="container my-3 col-md-6" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p><h5>{text.split(" ").filter((e) => { return e.length !== 0 }).length} words & {text.length} characters</h5></p>
                <p><h5>{(0.008 * (text.split(" ").length)).toFixed(2)} minute read</h5></p>

            </div>
        </>
    )
}
