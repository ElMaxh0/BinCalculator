import logo from './logo.svg';
import './App.css';
import { Menu } from './components/menu/menu';
import Main from './components/calculator/inteface';

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
    </div>
  );
}

export default App;
