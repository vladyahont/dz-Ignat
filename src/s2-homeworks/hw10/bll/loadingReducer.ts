const initState: initStateType = {
    isLoading: false,
}
export type initStateType = {
    isLoading: boolean
}
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): initStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {type: 'CHANGE_LOADING', isLoading}
}
