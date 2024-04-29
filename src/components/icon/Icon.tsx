import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC <IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50px 50px"}
             fill="none" xmlns="http://w3.org/2000/svg">
            import iconsSprite from '../../assets/images/icons-sprite.svg'
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
