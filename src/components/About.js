import React from 'react'

export default function About(props) {
    return (
        <div className={`container my-5 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>About Us</h1>
            <p className="my-3"><h3>
                Welcome to Text Utilities, your source for all Text-Manipulations.<br /> We're interested to provide you simple text tools for free.
                <br />We hope you enjoy our tool as much as we enjoy offering them to you.

            </h3>
            </p>
        </div>
    )
}
