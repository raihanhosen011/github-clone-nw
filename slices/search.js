import { createSlice } from '@reduxjs/toolkit'

export const Search = createSlice({
    name:'search',
    initialState : {
      profile : [] ,
      repose : [] ,
      follower : [] ,
      following : [] ,
      overview : []
    },
    reducers : {
      getPro : (state,action) => {
        state.profile = [action.payload]
      }, 
      getOver : (state,action) => {
        state.repose = action.payload != null && [...action.payload]
      }, 
      getFollwer : (state,action) => {
        state.follower = action.payload != null && [...action.payload]
      }, 
      getFo: (state,action) => {
        state.following = action.payload != null && [...action.payload]
      }, 
      getOv: (state,action) => {
        state.overview = action.payload != null && [...action.payload]
      }, 
      NON : (state,action) => {return state} 
    }
})

export const {getPro,getOver,getFollwer,getFo,getOv,NON} = Search.actions
export default Search.reducer