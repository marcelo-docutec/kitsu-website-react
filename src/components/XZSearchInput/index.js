import React from 'react';
import {useStyled} from "../hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const XZSearchInput = () => {

    const SearchFrame = useStyled(({styled}) => styled.div`
        display: flex;
        background-color: white;
        border-radius: 11px;
        padding: 2px 10px;
        align-items: center;
        border: none;
`);

    const InputXZ = useStyled(({styled}) => styled.input`
        outline: none;
        border: none;
        min-width: 40px;
        font-family: Arial, sans-serif;
        font-size: 1em;
        &:focus {
          outline: none;
        }
`);

    return (
        <SearchFrame>
            <InputXZ/>
            <FontAwesomeIcon style={{color: 'black'}} icon={faSearch} size={'lg'}/>
        </SearchFrame>
    );
};
