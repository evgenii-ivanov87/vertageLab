import { Routes, Route } from 'react-router-dom';
import './App.css';
import EditPage from './component/EditPage';
import HeaderComponent from './component/HeaderComponent';
import HomePage from './component/HomePage';
import NewPage from './component/NewPage';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/new" element={<NewPage/>} />
      <Route path="/edit/:id" element={<EditPage/>} />
      </Routes>
    
    </>
  );
}

export default App;
