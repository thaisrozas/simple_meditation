import React from "react";

export default function Button(props){
    return (
        <>
            <button className="contentlanding-button">
            {props.nameButton}
            </button>
        </>
    )
}