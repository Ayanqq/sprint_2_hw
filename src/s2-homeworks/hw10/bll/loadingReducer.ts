const initState = {
    isLoading: false,
}

export type initStateType = {
    isLoading: boolean
}

type ActionsType = LoadingActionType

export const loadingReducer = (state: initStateType = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            console.log('hello')
            return {...state, isLoading:action.isLoading}
        }
        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => (
    {
        type: 'CHANGE_LOADING',
        isLoading,
    }
)
