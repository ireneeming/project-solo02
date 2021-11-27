import './App.css';
import React from 'react';
import Main from './Main';
import Addword from './Addword';
import {Route,Switch} from 'react-router-dom';
//import {db} from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {  loadWordFB,} from './redux/modules/words';

function App() {
  // React.useEffect(async ()=>{
  //   console.log("firestore연결완료",db);
  //   const query = await getDocs(collection(db, 'words'));
  //   console.log("query: ",query);
  //   query.forEach((doc)=>{
  //     console.log("id:",doc.id,"data:", doc.data());
  //   });
  // },[]);
  const dispatch = useDispatch();
  const my_list = useSelector((state)=>state.words.words_list);

  React.useEffect(()=>{
    //console.log(db);
   //addDoc( collection(db,'words'), {word: "new 단어222", desc: "firebase 에서", example:"추가한단어"});
    //const docRef = doc(db,"words","yrxmymY5usv6GBsd7USB");
    //updateDoc(docRef, {desc: "firebase 에서"});
    //deleteDoc(docRef);

    dispatch(loadWordFB());
    //console.log("오잉")
  },[]);
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path ='/addword' exact>
          <Addword />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
