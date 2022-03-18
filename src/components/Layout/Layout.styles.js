import styled, { createGlobalStyle } from "styled-components"

export const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 1188px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: blue;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Primary = styled.main`
  flex-grow: 1;
`

export const GlobalStyles = createGlobalStyle`

/* 
 *   1) CSS RESET. Source: https://piccalil.li/blog/a-modern-css-reset/ 
*/
/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
    margin-top: 0;
}

abbr[title] {
    border-bottom: dotted 1px;
    cursor: help;
    text-decoration: none;
}

/* Remove list styles on ul, ol elements with a list role, which suggests 
default styling will be removed */
ul[role="list"],
ol[role="list"] {
    list-style: none;
}

/* Set core root defaults */
html:focus-within {
    scroll-behavior: smooth;
}

/* Set core body defaults */
body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    margin: 0;

    background-color: #f8f8f8;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
        transition-delay: 0ms !important;
    }
}

/* 
 *   2) BASE
*/
    body { font-family: "Georgia", serif; line-height: 1.5; }
    h1,h2,h3,h4,h5,h6,a { font-family: "Roboto", sans-serif; }

`
