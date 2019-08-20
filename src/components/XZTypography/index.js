import React from 'react';
import {useStyled} from "../hooks";

// Return the EM size
function getSizeEM(size) {
    switch (size) {
        case 1:
            return 2;
        case 2:
            return 1.5;
        case 3:
            return 1.17;
        case 4:
            return 1.12;
        case 5:
            return 0.83;
        case 6:
            return 0.75;
        default:
            return 1;
    }
}

function getLineHeight(size) {
    return (size*150)/100; //150% font size
}

export const Typography = ({children, size}) => {

    const Something = useStyled(({styled, css}) => styled.div`
    font-size: ${() => size ? getSizeEM(size)+'em' : '1em'};
    line-height: ${() => size ? getLineHeight(getSizeEM(size))+'em' : '1.5em'}; 
    text-transform: uppercase;
    display: inline-block;
`);

    return (
        <Something>
            {children}
        </Something>
    );
};
