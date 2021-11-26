// words.js
import {db} from '../../firebase';
import {collection,doc,  getDoc, getDocs, addDoc, deleteDoc} from 'firebase/firestore';


// Actions타입

const LOAD_WORD = 'words/LOAD_WORD';
const ADD_WORD ='words/ADD_WORD'; 
const DELETE_WORD = 'words/DELETE_WORD';

const initialState = {
    words_list : [
        // {word: "단어1", desc: "설명1", example:"예제1"},
        // {word: "단어2", desc: "설명2", example:"예제2"},
        // {word: "단어3", desc: "설명3", example:"예제3"},
        // {word: "단어4", desc: "설명4", example:"예제4"},
        // {word: "단어5", desc: "설명5", example:"예제5"},
        
    ],
};
// Action Creators

export function loadword(words_fire){
    return {type:LOAD_WORD, words_fire}
}


export function addWord (words) {
  return { type: ADD_WORD , words };
}

export function deleteWord (words_index){
    return {type: DELETE_WORD, words_index}
}


//middlewares thunk 만들기 

//firestore 에서 데이터 불러오기
export const loadWordFB = () => {
    return async function(dispatch){
        const words_data = await getDocs(collection(db,"words"));
        //console.log("이게 firebase  인가: ", words_data);

        let words_fire = [];

        words_data.forEach((w)=>{
            words_fire.push({id:w.id,...w.data()});
        });
        //console.log("firebase",words_fire);
        dispatch(loadword(words_fire));
    }
}

export const addWordFB = (words) => {
    return async function(dispatch){
        const docRef = await addDoc(collection(db,'words'),words);
        
        //console.log(docRef);
        const words_data = {id:docRef.id, ...words}
        dispatch(addWord(words_data));
    }
}

export const deleteWordFB = (word_id) => {
    return async function(dispatch, getState){
        if(!word_id){
            window.alert('없습니다!');
            return;
        }
        const docRef = doc(db, 'words', word_id);
        await deleteDoc(docRef);

        const _word_list = getState().words.words_list;
        const word_list = _word_list.findIndex((w)=>{
            return w.id === word_id;
        });
        dispatch(deleteWord(word_list));
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      // do reducer stuff
      case "words/LOAD_WORD" : {
        return {words_list:action.words_fire};
       }
      case "words/ADD_WORD" : {
          const new_word_list = [...state.words_list,action.words];
          
          return {words_list:new_word_list}
      }
      case "words/DELETE_WORD" : {

       console.log(state, action);
          const new_word_list = state.words_list.filter((list,index)=>{
             
            return parseInt(action.word_id) !==index;
          });
          return {words_list: new_word_list};
      }
      
      default: return state;
    }
}
  