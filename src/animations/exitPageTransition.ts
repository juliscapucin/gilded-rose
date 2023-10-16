import gsap from 'gsap';

type RouterActionType = () => void;

export const exitPageTransition = (routerAction: RouterActionType) => {
   const page = document.querySelector('[data-animation-overlay]');

   const tl = gsap.timeline({ onComplete: () => routerAction() });

   tl.fromTo(
      page,
      { xPercent: -100 },
      { xPercent: 0, duration: 0.5, ease: 'power2.inOut' }
   );
};
