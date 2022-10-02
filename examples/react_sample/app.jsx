//@ts-check

import { h } from 'preact';
import { render } from 'preact';
import React from "react";

import { useState, useEffect, useRef } from "preact/hooks";

import PhoneMaskInput from "svelte-mask";

/// linaria:
import { descStyle } from "./appStyled";

/// goober:
import { css, setup, styled } from "goober";

/// just *rollup-plugin-css-only*/ Just import the file to the bundle (dont triggers fs.watch if comment the line because for some reason considered part of svelte global style):
import "./styles.css";


/// postcss: I cann't tune it with the template. May be because of equivalent absent *babel-plugin-import* for buble (I dont know)

// const { * as t } = require('./style.css')
// import style from "./style.css";



setup(React.createElement);

const color = 'red'
const counter = css`
    color: ${color};
    &:hover{
        text-shadow: 0 0 15px green;;
    }
`;


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

    return <div className={'app'}>
        {/* <h3 className={title}>Svelte in preact integration:</h3> */}
        <p className={descStyle} style={{ cursor: 'pointer', userSelect: null }}>

            Enter complete number:
            <b className={counter}>
                {msg}
            </b>
        </p>
        <div ref={inputContainer}></div>
    </div>
};

render(<App />, document.body);