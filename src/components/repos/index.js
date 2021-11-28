import React from "react";
import * as S from "./styled";
import RepoItem from "../repo-item";

const Repos = () => {
    return(
        <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>
                <S.WrapperTab>Repos</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepoItem name="repo1" linkToRepo="https://github.com/LeviRicardo/Caesarscipher" fullName="LeviRicardo/Caesarcipher"/>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepoItem name="repo2" linkToRepo="https://github.com/LeviRicardo/LeviRicardo" fullName="LeviRicardo/LeviRicardo"/>
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )

}

export default Repos