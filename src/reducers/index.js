import { combineReducers } from 'redux';

const songReducer = ()=>{
    return[
        {title:"Like You", duration:'3:02'},
        {title:'Helplessly', duration:'4:13'},
        {title:'B.O.M.O', duration:'3:15'},
        {title:'Your Ocean', duration:'3:00'},
        {title:'By Your Side', duration:'4:33'},
        {title:'Made 4 2', duration:'3:45'}
    ];
};

const selectedSongReducer =(selectedSong= null, action){
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

combineReducers({
    songs:songReducer,
    selectedSong: selectedSongReducer
})