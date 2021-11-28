import React, {createContext, useState} from "react";

export const GithubContext = createContext({
    user: {},
    repos: [],
    starred: [],
})



const GithubProvider = ({children})=>{

    const [githubState, setGithub] = useState({
        user: {
            login: undefined,
            name: "Levi",
            publicURL: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repos: [],
        starred: [],
    })
    const contextValue = {
        githubState,
    }

    return(
        <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
    )
}

export default GithubProvider