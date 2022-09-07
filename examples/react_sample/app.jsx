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
                                       
        let widget = new PhoneMaskInput({ target: inputContainer.current })
        return () => {};
    }, []);

    let [msg, setMsg] = useState(10);

    return <div className="App">        
        <p onClick={() => setMsg(v => v + 1)} style={{ cursor: 'pointer', userSelect: null }}>

            Click to change the value:
            <b className={'counter'}>
                {msg}
            </b>
        </p>
        <div ref={inputContainer}></div>
    </div>
};

render(<App />, document.body);