import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import Alert from '../shared/Alert'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'
import {ACTIONS} from '../../reducers/GithubReducer'

const UserSearch = () => {
    //  States
    const [text, setText] = useState('')
    // Contexts
    const {
        users,
        dispatch,
    } = useContext(GithubContext)
    const {
        showAlert, 
        setAlert,
        hideAlert
    } = useContext(AlertContext)

    // func for search input onChange
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    // func user search form submit
    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(text === ''){
            setAlert('Please provide us with a search', 'Error')
        }else{
            dispatch({type: ACTIONS.LOADING_TRUE })
            const users = await searchUsers(text)
            setText('')
            dispatch({type: ACTIONS.GET_USERS, payload: users})
        }
    }
    // func for clear btn
    const handleDelete = () =>{
        hideAlert(false)
        dispatch({type: ACTIONS.CLEAR_SEARCH})
    }

    return (
        <div className='max-w-xl mb-8 relative'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label my-1">
                            <span className="label-text text-lg font-semibold opacity-60">
                                Search for a github account
                            </span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="lawrdev" className="w-full pr-40 bg-gray-200 input input-lg text-black"
                            value={text} 
                            onChange={handleChange}
                            />
                            <button type="submit"
                                className="absolute top-0 right-0 rounded-l-none w-28 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="my-1">
            {/* clear button */}
            {users.length > 0 && (
                <div className="my-6">
                    <button onClick={handleDelete}
                    className="btn btn-outline btn-sm btn-error opacity-50 lowercase ">
                        Clear search
                    </button>
                </div> 
            )}
            {/* alert */}
            {(showAlert && users.length < 1) && <Alert />}
            </div>
        </div>
    )
}
 
export default UserSearch;