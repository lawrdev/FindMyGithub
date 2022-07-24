export const ACTIONS = {
    GET_USERS: 'GET_USERS',
    GET_USER_AND_REPOS: 'GET_USER_AND_REPOS',
    LOADING_TRUE: 'LOADING_TRUE',
    CLEAR_SEARCH: 'CLEAR_SEARCH',
}

const githubReducer = (state, action) =>{
    switch(action.type){
        case ACTIONS.GET_USERS:
            return{
                ...state,
                users: action.payload,
                isLoading: false
            }
        case ACTIONS.GET_USER_AND_REPOS:
            return{
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                isLoading: false
            }
        case ACTIONS.LOADING_TRUE:
            return{
                ...state,
                isLoading: true
            }
        case ACTIONS.CLEAR_SEARCH:
            return{
                ...state,
                users: []
            }
        default :
            return state
    }
}

export default githubReducer