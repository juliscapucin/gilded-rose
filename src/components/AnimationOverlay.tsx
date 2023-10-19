'use client';

import { styled } from 'styled-components';

import { Loader } from '@/components';

const StyledAnimationOverlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 50;
 background-color: ${({ theme }) => theme.colors.secondary};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 color: ${({ theme }) => theme.colors.primary};
 font-size: 60px;
`;

export default function AnimationOverlay() {
 return (
  <StyledAnimationOverlay data-animation-overlay>
   <div>
    <span>Gilded</span>
    <span>–</span>
    <span>Rose</span>
   </div>
   <Loader />
  </StyledAnimationOverlay>
 );
}
