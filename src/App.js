import logo from './logo.svg';
import './App.css';
import Todo from './components/todoList/Todo';

function App() {
  return (
    <>
    <div className="outer-box" style={{
      width:'500px',margin:'4rem auto'
    }}>
    <Todo/>
    </div>
    </>
  );
}

export default App;
