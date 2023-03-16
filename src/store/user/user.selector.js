import { createSelector } from 'reselect'

const selectCurrentUserReducer = (state) => state.user

export const selectCurrentUser = createSelector(
   [selectCurrentUserReducer],
   (currentUserSlice) => currentUserSlice.currentUser
)

// export const selectCurrentUser = (state) => {
//    console.log('state for current user selector', state)
//    return state.user.currentUser
// }
