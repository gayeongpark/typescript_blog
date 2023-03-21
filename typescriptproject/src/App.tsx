import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './Container';
import './App.css';

function App() {
  return (
    <Container>
    <Routes>
      <Route path='/' element={<h1>Hello World!</h1>}/>
      <Route path='/new' element={<h1>This is new page!</h1>}/>
      <Route path='/:id'>
        <Route index element={<h1>Show</h1>}/>
        <Route path='edit' element={<h1>Edit</h1>}/>
      </Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </Container>
  );
}

export default App;
