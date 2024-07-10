export const initState = {
    themeId: 1,
}

export type ThemeStateType = {
    themeId: number
}

export const themeReducer = (state: ThemeStateType = initState, action: ChangeThemeActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeActionsType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
