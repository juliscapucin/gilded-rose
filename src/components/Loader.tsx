'use client';

import { styled } from 'styled-components';
import Image from 'next/image';

const StyledLoader = styled.div`
 position: absolute;
 z-index: -1;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 transform: translate3d(0, -70px, 0);

 img {
  filter: invert(0.5);
 }
`;

const Loading = () => {
 return (
  <StyledLoader>
   <Image src='assets/icons/loader.svg' width={50} height={50} alt='loader' />
  </StyledLoader>
 );
};

export default Loading;
