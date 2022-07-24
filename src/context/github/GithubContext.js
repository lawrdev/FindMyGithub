import { createContext, useReducer} from 'react'
import githubReducer from '../../reducers/GithubReducer'


// initialize
const GithubContext = createContext()

// export provider func
export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false,
        notFound: false,
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)
    return(
        <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </GithubContext.Provider>
    )
}
// export the context
export default GithubContext;