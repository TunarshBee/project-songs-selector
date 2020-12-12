import { combineReducers } from 'redux';

const songReducer = ()=>{
    return[
        {title:"Like You", duration:'3:02'},
        {title:'Helplessly', duration:'4:13'},
        {title:'B.O.M.O', duration:'3:15'},
        {title:'Your Ocean', duration:'2:43'},
        {title:'By Your Side', duration:'4:33'},
        {title:'Made 4 2', duration:'3:45'}
    ];
};

const selectedSongReducer =(selectedSong= null, action)=>{
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs:songReducer,
    selectedSong: selectedSongReducer
})