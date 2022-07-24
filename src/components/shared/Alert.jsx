import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {

    const {alert: {mssg, type}} = useContext(AlertContext)

    return (
        <div className="absolute top-full left-0 right-0">
            <div className="alert alert-sm bg-opacity-0 rounded-md text-red-300">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>
                        {`${type}! ${mssg}`}
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default Alert;