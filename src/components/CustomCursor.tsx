'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { styled } from 'styled-components';

const StyledCustomCursor = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 80px;
 height: 80px;
 pointer-events: none;
 z-index: 999;
 border-radius: 50%;
 background-color: ${({ theme }) => theme.colors.secondary};
 display: flex;
 justify-content: center;
 align-items: center;
`;

export default function CustomCursor({ isHovered }: { isHovered: boolean }) {
 const refCursor = useRef(null);
 const refFollower = useRef(null);

 useEffect(() => {
  const cursorDiv = refCursor.current;
  if (!cursorDiv) return;

  gsap.set(cursorDiv, {
   xPercent: -50,
   yPercent: -50,
  });

  const moveCursor = (e: MouseEvent) => {
   gsap.to(cursorDiv, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
   });
  };

  window.addEventListener('mousemove', moveCursor);

  return () => {
   window.removeEventListener('mousemove', moveCursor);
  };
 }, [refCursor.current]);

 return (
  isHovered && (
   <StyledCustomCursor ref={refCursor}>
    <div ref={refFollower}>
     <span>OPEN</span>
    </div>
   </StyledCustomCursor>
  )
 );
}
