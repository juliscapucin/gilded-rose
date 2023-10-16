import gsap from 'gsap';

type RouterActionType = () => void;

export const exitPageTransition = (routerAction: RouterActionType) => {
   const tl = gsap.timeline({ onComplete: () => routerAction() });

   tl.fromTo(
      '[data-animation-overlay]',
      { xPercent: -100 },
      { xPercent: 0, duration: 0.5, ease: 'power2.inOut' }
   ).fromTo('[data-animation-page]', { xPercent: 0 }, { xPercent: 30 }, 0.1);
};
