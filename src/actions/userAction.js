import Axios from "axios"
import loginJson from './login';
import employeeJson from './employees';
import history from '../history'
import { userConstants } from "../constants/ActionTypes";

export const login = (data) => dispatch => {
        console.log('data ', data)
        // console.log(`test login`, loginjson)
        if(data.email == loginJson.username && data.password == loginJson.password){
                console.log(`test login`, loginJson)
                localStorage.setItem('user', data)
                dispatch({type: userConstants.LOGIN_SUCCESS, peyload: data})
                history.push(`/`)
        }else{
            alert('Username and Password is wrong')
        }

}


export const getEmployees = () => dispatch => {
    return Axios.get(`employees.json`).then(res => {
        console.log(`res `, res)
        dispatch({type: userConstants.GET_EMPLOYEES, payload: res.data.user})
    })

}

