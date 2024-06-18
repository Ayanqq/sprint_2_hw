const initState = {
    themeId: 1,
}

type InitStateType = {
    themeId: number,
}

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId:action.id}
        }
        // дописать

        default:
            return state
    }
}

type ActionsType = changeThemeId

type changeThemeId = {
    type:'SET_THEME_ID',
    id:number
}

export const changeThemeId = (id: number):changeThemeId => {
    return {
        type: 'SET_THEME_ID',
        id
    } as const
}// fix any
