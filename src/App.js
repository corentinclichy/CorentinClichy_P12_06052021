import './App.css';
import Content from './components/commons/Content';

// Components
import Header from './components/commons/Header';
import SideBar from './components/commons/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex content-container">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
