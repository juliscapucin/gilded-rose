import gsap from 'gsap';
import { type } from 'os';

type RouterActionType = () => void;

export const exitPageTransition = (routerAction: RouterActionType) => {
   const tl = gsap.timeline({ onComplete: () => routerAction() });

   tl.to('.page', { xPercent: 100 });
};
