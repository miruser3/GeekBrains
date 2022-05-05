import './App.css';
import Creatmessage from './Message';

function App(props) {
  return (
    <div>
      <header className={`App-header ${props.showred ? 'header-red' : 'header-blue'}`}
      style={{ top: props.topPosition || '10px' }}>
        My First React App
        <h3>Hello, {props.name}</h3>
        
      </header>
      < Creatmessage />
    </div>
  );
}

export default App;