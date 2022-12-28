import { Route, Navigate, Routes } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Login from './components/Login';
import Main from './tabs/main';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Main />}>
        <Route path='/home/first' element={<Page1 />} />
        <Route path='/home/second' element={<Page2 />} />
      </Route>
    </Routes>

  )
}
