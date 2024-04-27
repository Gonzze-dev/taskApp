import React from 'react'
import ReactDOM from 'react-dom/client'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import './globalCss.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AddTaskForm/>
  </React.StrictMode>,
)
