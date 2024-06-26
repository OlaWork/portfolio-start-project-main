import {theme} from "../styles/Theme";
import styled from "styled-components";

export const Link = styled.a`
font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    
    padding: 10px;
    
    position: relative;
    z-index: 0;
    
    &:hover{
        &::before{
            height: 10px;
        }
    }
    &::before{
        content: "";
        display: inline-block;
        
        position: absolute;
        bottom: 5px;
        left: 0px;
        right: 0px;
        background-color: ${theme.colors.accent};
        z-index: -1;
    }
`