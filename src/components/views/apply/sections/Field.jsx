import React from 'react';

export default function Field(props) {
    let input;
    switch (props.type) {
        case 'small':
            input = (
                <input
                    type="text"
                    name={props.name}
                    id={`form-${props.id}`}
                    placeholder={props.children}
                    ref={props.r}
                    required
                />
            );
            break;
        case 'number':
            input = (
                <input
                    type="number"
                    name={props.name}
                    id={`form-${props.id}`}
                    min="14"
                    max="100"
                    placeholder={props.children}
                    ref={props.r}
                    required
                />
            );
            break;
        case 'big':
            input = (
                <textarea
                    name={props.name}
                    id={`form-${props.id}`}
                    cols="30"
                    rows="6"
                    placeholder={props.children}
                    ref={props.r}
                    required
                />
            );
            break;
        default:
            input = (
                <input
                    type="text"
                    name={props.name}
                    id={`form-${props.id}`}
                    placeholder={props.children}
                    ref={props.r}
                    required
                />
            );
            break;
    }
    return (
        <div>
            <label htmlFor="name">{props.label}</label>
            {input}
        </div>
    );
}
