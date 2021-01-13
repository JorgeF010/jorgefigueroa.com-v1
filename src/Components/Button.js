import React from 'react';
import styled from "styled-components";

class Button extends React.Component {
    render() {
        return <StyledButton href={this.props.link}>{this.props.bttnText}</StyledButton>;
    }
}

export default Button;

const StyledButton = styled.a `
        background-color: rgba(255, 255, 255,0);
        border: none;
        color: black;
        padding: 10px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 17px;
        margin: 4px 2px;
        font-weight: 600;
        border: solid 2px black;
        border-radius: 5px;
        cursor: pointer;

    &:hover {
        background-color: white;
        transition: all 300ms ease-in;
    }
`
