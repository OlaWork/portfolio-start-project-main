import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

const items =["Home", "Skills", "Works", "Testimony", "Contact"]



export const TabMenu = (props:{minuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>

                {props.minuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    //margin-bottom: 40px;
    ul{
        display: flex;
        //gap: 20px;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 1px solid green;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
    
`
