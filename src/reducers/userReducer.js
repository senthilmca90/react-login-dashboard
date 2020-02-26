import { userConstants } from "../constants/ActionTypes"

const initialState = {
    user: {},
    employees: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case  userConstants.LOGIN_SUCCESS:
        return { ...state, user: payload }

        case  userConstants.GET_EMPLOYEES:
        return { ...state, employees: payload }

    default:
        return state
    }
}
