import './App.css';
import Main from './Main';
import Addword from './Addword';
import {Route,Switch} from 'react-router-dom';


function App() {
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
