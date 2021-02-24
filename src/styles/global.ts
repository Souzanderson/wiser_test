import { createGlobalStyle } from "styled-components";
import background from '../assets/images/backgroundcrop.png'

export default createGlobalStyle /*css*/`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #ffffff;
        color: ${props => props.theme['colors']['text']};
        font: 300 20px Roboto, sans-serif;
    }

    .subtitle{
        color: ${props => props.theme['colors']['subtitle']};
        font-size: 18px;
        font-weight: 400
    }

    .grid2{
        display: grid;
        grid-template-columns: 33vw 1fr;
        height: 100vh;
        width: 100vw;
    }

    .rgrid{
        background-image: url('${background}');
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%
    }

    .blur{
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,0) 0%, ${props => props.theme['colors']['primarytr']} 70%, rgba(14,0,13,0.7203256302521008) 100%);
        height: 100%;
        width: 100%
    }

    .lgrid{
        position: relative;
        overflow-y: scroll
    }

    .form{
        position: absolute;
        top: 50%;
        left: 25%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 33vw;
    }

    .title{
        font-size: 52px;
    }

    .textform{
        padding-top: 12px;
        padding-bottom: 12px;
        label{
            text-transform: uppercase;
            font-size: 14px;
            padding: 8px;
        }
    }

    .input {
        outline: none;
        background-color: unset;
        border: unset;
        width: 100%;
        width: -moz-available; /* WebKit-based browsers will ignore this. */
        width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
        width: fill-available;
        padding-right: 8px;
        padding-left: 8px;
        margin-top: 12px;
        font-family: Poppins;
        color: ${props => props.theme['colors']['primary']};
        background-color: #ffffff;
        padding: 12px;
        border-radius: 4px;
        border: 1px solid ${props => props.theme['colors']['subtitle']};
        // box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        resize: none;
    }
    
    .input:focus {
        border: 1px solid ${props => props.theme['colors']['primary']};
    }

    .invalid{
        border: 1px solid red !important;
    }

    .button {
        padding: 12px;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        text-transform: uppercase;
        background: rgb(135,13,130);
        background: linear-gradient(90deg, ${props => props.theme['colors']['primary']} 0%, ${props => props.theme['colors']['secondary']} 100%);
        border: 1px solid var(--color-tertiary);
        border-radius: 6px;
        margin-top: 12px;
        text-align: center;
        width: 100%;
        cursor: pointer;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
    
    .button:active {
        transform: scale(0.96);
    }

    .recover{
        text-align: center;
        font-size: 16px;
        a{
            color: ${props => props.theme['colors']['primary']}
        }
    }

    .error{
        color: red;
        font-size: 14px;
        font-weight: 300;
    }

    .sucess{
        padding: 8px;
        background: green;
        color: white;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        border-radius: 8px;
        animate: surge 1.2s linear
    }

    @keyframes surge{
        from{
            opacity: 0
        }
        to{
            opacity: 1
        }
    }

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #bcd4da;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme['colors']['primary']};
        border-radius: 10px;
    }
    
`