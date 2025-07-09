import { useState } from 'react'
import { Table } from './Table'
import './App.css'


function App() {
  return (
    <>
     <div className='flex gap-6'>
      <Table />
      <Table />
     </div>
    </>
  )
}

export default App
