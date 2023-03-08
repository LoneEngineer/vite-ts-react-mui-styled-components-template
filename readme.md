# Motivation

The main purpose of this project is to provide a work solution which is based on:
* Vite.js
* Typescript
* React 18
* MUI Material 5  
* Styled-components as style engine for MUI 5
* i18next for localization with loading translations from server
* external configuration via injectable config.js (e.g. can be injected into dockerized app via volume mapping)

As we know, a lot of front-end stuff works very well isolated, but sometimes it's hard to make it worked together. I spend significant time before I end-up with working version.

Styling solution should support following features:
* isolated styled components (via 'styled' function)
* native MUI themes
* global styling (via 'createGlobalStyle' from styled-components) with theme parameterization

# TODO

* Docker
* React hook forms

# Unresolved issues

IntelliJ IDEA still displays an error on custom global style (based on theme)
because styled-component's DefaultTheme is empty and should be extended via
['declaration merging'](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) feature.
However, if I try to use ['client types'](https://vitejs.dev/guide/features.html#client-types) 
when IDEA shows correct type for a theme but loses rest of declarations from 'styled-components' module.
You can check src/styled.d.ts for this. If you know how to solve this issue - please let me know.

