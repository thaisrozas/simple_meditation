import React from "react";
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Image,
    Nav,
  } from "react-bootstrap";

export default function Card(props){
    return (
        <>
            <article className="contentlanding-card">
                <Image className="contentlanding-card__image" src={props.link}/>
                <h3 className="contentlanding-card__description">{props.descriptionCard}</h3>
                <Image className="contentlanding-card__icon" src="verified_star.svg"/>
            </article>
        </>
    )
}