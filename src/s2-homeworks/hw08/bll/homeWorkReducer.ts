import {UserType} from '../HW8'


type sortNameACType = {
    type: 'sort',
    payload: 'up' | 'down'
}
type checkAgeACType = {
    type: 'check',
    payload: number
}

type ActionType = sortNameACType | checkAgeACType
//   | { type: 'sort'; payload: 'up' | 'down' }
//   | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const copySt = [...state]
            copySt.sort((a, b) => {
                if (a.name < b.name) {
                    return 1
                }
                if (a.name > b.name) {
                    return -1
                }
                return 0
            })
            return action.payload === 'up' ? copySt.reverse() : copySt

        }
        case 'check': {

        return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

export const sortNameAC = (payload: string): sortNameACType => {
    return {
        type: 'sort',
        payload: 'up' || 'down'
    } as const
}
export const checkAgeAC = (payload: number): checkAgeACType => {
    return {
        type: 'check',
        payload
    } as const
}