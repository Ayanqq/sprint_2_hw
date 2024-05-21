import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const myStateCopy = [...state]
            return myStateCopy.sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();

                const isUp = action.payload === 'up'

                if (nameA < nameB) {
                    return  isUp ? -1 : 1  ;
                }
                if (nameA > nameB) {
                    return  isUp ? 1 : -1 ;
                }

                return 0;
            });
            // // by name
            // if (action.payload === 'up') {
            //     return state.sort((a, b) => {
            //         let nameA = a.name.toUpperCase();
            //         let nameB = b.name.toUpperCase();
            //
            //         if (nameA < nameB) {
            //             return -1;
            //         }
            //         if (nameA > nameB) {
            //             return 1;
            //         }
            //
            //         return 0;
            //     });
            // }
            // if (action.payload === 'down') {
            //     return state.sort((a, b) => {
            //         let nameA = a.name.toUpperCase();
            //         let nameB = b.name.toUpperCase();
            //
            //         if (nameA > nameB) {
            //             return -1;
            //         }
            //         if (nameA < nameB) {
            //             return 1;
            //         }
            //
            //         return 0;
            //     });
            // }

            // return state
            // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
