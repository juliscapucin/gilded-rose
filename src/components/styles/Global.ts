import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
   --max-width: 2000px;
   --breakpoint-mobile: 480px;
   --breakpoint-tablet: 768px;
   --breakpoint-desktop: 1024px;

   --border-radius: 4px;

   --font-primary: 'ff-real-headline-pro', sans-serif;
   --font-secondary: 'ff-real-text-pro', sans-serif;

   --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);

   --global-spacing: 8px;
   --header-height: 80px;
   --button-min-width: 300px;
   --top-margin: 200px;

   --text-display: 91px;
   --text-headline: 57px;
   --text-subtitle: 36px;

   --text-large: 18px;
   --text-medium: 16px;
   --text-small: 14px;
   --text-tiny: 12px;

   --font-weight-ultra-light: 100;
   --font-weight-light: 200;
   --font-weight-regular: 300;
   --font-weight-medium: 500;
   --font-weight-bold: 700;
}
@media screen and (max-width: 768px) {
  :root {
      --text-display: 64px;
      --text-headline: 42px;
      --text-subtitle: 32px;
   }
}

@media screen and (max-width: 480px) {
   :root {
      --text-display: 42px;
      --text-headline: 32px;
      --text-subtitle: 22px;
   }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: var(--max-width);
  overflow-x: hidden;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-light);
}

input, textarea, button {
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-light);
}

h1,h2,h3,h4,h5,h6 {
   font-family: var(--font-primary);
   font-weight: var(--font-weight-ultra-light);
   line-height: 0.9;
}

a {
  color: inherit;
  text-decoration: none;
}

button{
  cursor: pointer;
  background-color: transparent;
  border: none;
}


/* Scrollbar Styles */

/* Webkit-based Browsers (Chrome, Safari, Edge) */
/* Customize the scrollbar's track (background) */
::-webkit-scrollbar {
  width: 12px;
}

/* Customize the scrollbar's thumb (handle) */
::-webkit-scrollbar-thumb {
  background: #333; /* Change the thumb's background color */
  border-radius: 6px; /* Round the corners of the thumb */
}

/* Customize the scrollbar's track when hovering over it */
::-webkit-scrollbar-track:hover {
  background: #555;
}

/* Customize the scrollbar's thumb when hovering over it */
::-webkit-scrollbar-thumb:hover {
  background: #666;
}

/* Firefox */
/* Customize the scrollbar's track (background) in Firefox */
* {
  scrollbar-color: #333 #666; /* Change the track and thumb colors */
  scrollbar-width: thin; /* Set scrollbar width to thin */
}

/* Customize the scrollbar's thumb (handle) in Firefox */
*::-webkit-scrollbar-thumb {
  background: #333; /* Change the thumb's background color */
  border-radius: 6px; /* Round the corners of the thumb */
}

/* Customize the scrollbar's track when hovering over it in Firefox */
*::-webkit-scrollbar-track:hover {
  background: #555;
}

/* Customize the scrollbar's thumb when hovering over it in Firefox */
*::-webkit-scrollbar-thumb:hover {
  background: #666;
}

`;

export default GlobalStyles;
