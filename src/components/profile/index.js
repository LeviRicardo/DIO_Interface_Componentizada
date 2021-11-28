import React from "react";
import useGithub from "../../hooks/github.hooks";
import * as S from "./styled"



const Profile = () => {

    const {githubState} = useGithub()
        return(
        <>
            <S.Wrapper>
                <S.WrapperImg src="https://avatars.githubusercontent.com/u/51814378?v=4" alt="avatar"/>
                <S.WrapperInfoUser>
                    <div>
                        <h1>Nome</h1>
                        <S.WrapperUsername>
                            <h3>Username:</h3>
                            <a href="https://github.com/LeviRicardo" target="_blank" rel="noreferrer">LeviRicardo</a>
                        </S.WrapperUsername>    
                    </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
            </S.Wrapper>
        </>
    )
}

export default Profile