import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWraper";
import {S} from "./Footer_Styles"

const SocialItemData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "linkedin"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Svetlana</S.Name>
                <S.SocialList>

                    {SocialItemData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};


