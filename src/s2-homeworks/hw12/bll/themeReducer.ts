const initState: initStateType = {
    themeId: 1,
}
type initStateType = {
    themeId: number
}
type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state = initState, action: changeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any


