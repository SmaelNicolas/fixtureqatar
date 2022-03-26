import { createGlobalStyle } from "styled-components";
import Qatar from "./Fonts/Qatar/Qatar2022Arabic-Bold.ttf";
import QatarHeavy from "./Fonts/Qatar/Qatar2022Arabic-Heavy.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: "Qatar";
	src: local("Qatar"),
		url(${Qatar}) format("opentype");
}
@font-face {
	font-family: "QatarHeavy";
	src: local("QatarHeavy"),
		url(${QatarHeavy}) format("opentype");
}

     :root {
        --robotoFont : 'Roboto', sans-serif;
        --QatarFont : 'Qatar', sans-serif;
        --QatarHeavyFont : 'QatarHeavy', sans-serif;

        --fs--bigger : clamp(2rem , 3vw + 1rem , 3.5rem);
        --fs--small: 0.75rem;
        --fs--normal : 1rem;
        --fs--medium : 1.25rem
        --fs--big: 1.75rem;


        --clrs--lblue : #49BCE3;
        --clrs--blue : #1077C3;
        --clrs--yellow : #FEC310;
        --clrs--Garnet : #9a1032;


     }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: var(--robotoFont);
        }

    body{
	width: calc(100vw - (100vw - 100%));
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e7e7e7;
    }
`;
