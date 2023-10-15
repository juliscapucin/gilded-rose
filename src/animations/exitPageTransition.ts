import gsap from 'gsap';

type RouterActionType = () => void;

export const exitPageTransition = (routerAction: RouterActionType) => {
   const page = document.querySelector('[data-animation-page]');

   const tl = gsap.timeline({ onComplete: () => routerAction() });

   tl.to(page, { xPercent: 100 });
};
