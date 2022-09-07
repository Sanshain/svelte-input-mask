//@ts-check

import { h } from 'preact';
import { render } from 'preact';
import React from "react";

import { useState, useEffect, useRef } from "preact/hooks";

import PhoneMaskInput from "svelte-mask";

// import { css, setup, styled } from "goober";
// import "./styles.css";

// setup(React.createElement);

// const color = 'red'
// const counter = css`
//     color: ${color};
//     &:hover{
//         text-shadow: red;
//     }
// `;

// const Title = styled("h1")`
//   text-align: center;
// `;



const App =  () => {

    const inputContainer = useRef(null);

    useEffect(() => {
                                       
        let widget = new PhoneMaskInput({
            target: inputContainer.current,
            props: {
                onComplete: v => {
                    console.log(v);
                    setMsg(ov => v)
                }
            }
        })        
        return () => {};
    }, []);

    let [msg, setMsg] = useState('');

    return <div className="App">        
        <p style={{ cursor: 'pointer', userSelect: null }}>

            Enter complete number:
            <b className={'counter'}>
                {msg}
            </b>
        </p>
        <div ref={inputContainer}></div>
    </div>
};

render(<App />, document.body);