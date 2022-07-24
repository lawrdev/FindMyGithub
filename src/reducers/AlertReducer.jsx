export const ALERT_ACTIONS = {
    SET_ALERT: 'SET_ALERT',
    REMOVE_ALERT: 'REMOVE_ALERT',
}

const alertReducer = (state, action) =>{
    switch(action.type) {
        case ALERT_ACTIONS.SET_ALERT:
            return action.payload
        case ALERT_ACTIONS.REMOVE_ALERT:
            return null
        default:
            return state
    }
}

export default alertReducer