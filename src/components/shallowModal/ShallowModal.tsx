'use client';

import { useCallback, useRef, useEffect, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const StyledShallowModal = styled.div`
 position: fixed;
 z-index: 10;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 margin: auto;
 background-color: rgba(0, 0, 0, 0.6);
`;

const StyledShallowModalWrapper = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 100%;
 max-width: 600px;
 max-height: 80vh;
 overflow-y: auto;
 background-color: ${({ theme }) => theme.colors.background};
`;

export default function ShallowModal({
 children,
}: {
 children: React.ReactNode;
}) {
 const overlay = useRef(null);
 const wrapper = useRef(null);
 const router = useRouter();

 const onDismiss = useCallback(() => {
  router.back();
 }, [router]);

 const onClick: MouseEventHandler = useCallback(
  (e) => {
   if (e.target === overlay.current || e.target === wrapper.current) {
    if (onDismiss) onDismiss();
   }
  },
  [onDismiss, overlay, wrapper]
 );

 const onKeyDown = useCallback(
  (e: KeyboardEvent) => {
   if (e.key === 'Escape') onDismiss();
  },
  [onDismiss]
 );

 useEffect(() => {
  document.addEventListener('keydown', onKeyDown);
  return () => document.removeEventListener('keydown', onKeyDown);
 }, [onKeyDown]);

 console.log('shallow modal');

 return (
  <StyledShallowModal ref={overlay} onClick={onClick}>
   <div ref={wrapper}>{children}</div>
  </StyledShallowModal>
 );
}
