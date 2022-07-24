import { useReducer, createContext, useState } from "react"
import alertReducer, {ALERT_ACTIONS} from '../../reducers/AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {

    const [showAlert, setShowAlert] = useState(false)

    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // set an alert
    const setAlert = (mssg, type) =>{
        dispatch({
            type: ALERT_ACTIONS.SET_ALERT,
            payload: {mssg, type}
        })
        setShowAlert(true)
        //set timer to remove alert after 3s
        setTimeout(() =>{
            dispatch({type: ALERT_ACTIONS.REMOVE_ALERT})
            setShowAlert(false)
        }, 3000)
    }

    return(
        <AlertContext.Provider  value={{alert: state, setAlert, showAlert, hideAlert: setShowAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext