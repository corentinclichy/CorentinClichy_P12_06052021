import { Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/commons/Header';
import UserPage from './page/UserPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/:id" component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
