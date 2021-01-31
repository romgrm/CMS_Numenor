import {GET_USERS, USERS_ERROR} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:5000/api/v1/cms`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }

}