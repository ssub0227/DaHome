import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title :'',
    videoId:'',
    isVideo:null,
}

const projectSlice = createSlice({
    name:'project',
    initialState,
    reducers:{
        setTitle:(state, action) => {state.title = action.payload},
        setVideoId:(state, action) => {state.videoId = action.payload},
        setIsVideo:(state, action) => {state.isVideo = action.payload}
    }
})

export const {setTitle, setVideoId, setIsVideo} = projectSlice.actions;
export default projectSlice.reducer;