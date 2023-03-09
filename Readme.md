# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon


### Links

- Solution URL: [My Github Solution URL](https://github.com/JulietNnaji/Advice-Generator-App)
- Live Site URL: [The Advice Generator App deployed on Netlify](https://sprightly-arithmetic-2e690f.netlify.app/)

## My process
First I built the HTML code. Added some CSS, then made it responsive. When I was sure it was similar to the design, I added the Javascript and integrated the API.

### Built with

- CSS custom properties
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For CSS
- JavaScript
- JS Maths
- JS Events


### What I learned
I learned more on Media queries and put my javascript knowledge to test.

Proud of this HTML
```html
 <div class="desktop-view" style="margin-bottom: 10px;">
```
proud of this CSS
```css
.proud-of-this-css @media only screen and (max-width: 600px) {
    .desktop-view{
        display: none;
    }
    .container{
        padding: 45px 45px 20px 45px;
    }
.advice-container{
    max-width: 800px;
    padding: 35px 45px 0 45px;
}
.mobile-view-image{
   width: 100%;
}
}

@media only screen and (min-width: 600px) and (min-width: 601px) {
    .mobile-view{
        display: none;
    }
}
```
Proud of this JS
```js
function addQuote(quote) {
    quoteP.innerText = quote;
    let fontsNum = Math.floor((Math.random()* 100) + 1);
    adviceNumber.innerText = fontsNum;}
```

### Continued development

I should improve my knowledge of JS and make more responsive pages.


### Useful resources

- [Resource 1](https://www.w3schools.com/css/css_rwd_mediaqueries.asp ) - This helped me get a broader knowledge about responsive pages.

- [Resource 2](https://medium.com/@ppt.co.uk/project-walk-through-building-a-simple-advice-slip-generator-cab99c62b8bb) - This medium article helped me to learn how to integrate the API.

## Author

- Website - [Juliet Nnaji](https://www.github.com/julietnnaji)
- Frontend Mentor - [@julietnnaji](https://www.frontendmentor.io/profile/julietnnaji)
- Twitter - [@nnajijuliet17](https://www.twitter.com/nnajijuliet17)

## Acknowledgments

Thank you Frontend Mentor for these challenges.