import styled,{css} from "styled-components";
import {useRef} from 'react';

export const useStyled = (callback) => {
    const Element = useRef(null);
    if (!Element.current) {
        Element.current = callback({styled, css});
    }

    return Element.current;
};
