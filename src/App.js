import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Chat from './component/Chat'
function App() {
  return (
    <Routes >
     
     <Route path = '/' element = {<Home/>} />
     <Route path='/chat' element = {<Chat/>} />
     
    </Routes>
  );
}

export default App;
