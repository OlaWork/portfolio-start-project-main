import React from 'react';
import {Menu} from "./../menu/Menu";
import {S} from "./../HeaderMenu_Styles"


export const DesktopMenu:React.FC<{minuItems: Array<string>}> = (props:{minuItems: Array<string>}) => {
    return (
        <S.DesktopMenu>
            <Menu minuItems={props.minuItems}/>
        </S.DesktopMenu>
    );
};






