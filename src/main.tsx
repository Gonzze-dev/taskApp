import React from 'react'
import ReactDOM from 'react-dom/client'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import Modal from './components/Modal/Modal'
import './globalCss.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Modal onClose={() => console.log('Modal cerrado')}>
      <AddTaskForm/>
    </Modal>
  </React.StrictMode>,
)
