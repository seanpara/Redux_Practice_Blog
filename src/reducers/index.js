import {combineReducers} from 'redux'
import postsReducer from "./postsReducer.js"

// const selectedSongReducer = (selectedSong=null, action) => {
//   switch (action.type) {
//    case 'SONG_SELECTED':
//      return action.payload
//    default:
//      return selectedSong
//  } // end of switch
// }

export default combineReducers({
  posts: postsReducer
})
