import { useState } from 'react'
import './App.css'

function App() {
 const students = 430000;
 const dogruMu = true;
 const date = 'date';
 const url = 'https://picsum.photos/250/250';
  return (
    
    <div>
      <p>batuhan</p>
      <p>{students }</p>
      <p>Doğru mu ?  :{dogruMu}</p>
      {dogruMu ? <p>öğrenci sayyısı</p> : <p>kurs sayısı</p> }
      <input type={date} />
      <img src={url} alt="" />
      <div className='box'></div>
      <div style={{
        width:'200px',
        height: '200px',
        backgroundColor: 'red',
      }}></div>
    </div>
  )
}

export default App
