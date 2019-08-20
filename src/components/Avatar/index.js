import React from 'react';
import {useStyled} from "../hooks";

export const Avatar = ({image}) => {

  const Frame = useStyled(({styled}) => styled.div`
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-color: white;
      overflow: hidden;
  `);

  const ImageFrame = useStyled(({styled}) => styled.img`
      width: 100%;
      height: 100%;
  `);

  return (
    <Frame>
      <ImageFrame src={image} alt={'Avatar'}/>
    </Frame>
  );
};
