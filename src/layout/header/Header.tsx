import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWraper";
import {MobileMenu} from "./../header/headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import {DesktopMenu} from "./../header/headerMenu/desktopMenu/DesktopMenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResiz = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResiz);

        //Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResiz);
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu minuItems={items}/>
                                        : <DesktopMenu minuItems={items}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


