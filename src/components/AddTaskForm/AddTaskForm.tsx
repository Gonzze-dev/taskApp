import './AddTaskForm.css'

import Input from '../../UI/Input/Input'
import InputMultiLine from '../../UI/InputMultiLine/InputMultiLine'
import { ChangeEvent, useState } from 'react'

const AddTaskForm = () => {
  const [title, setTitlte] = useState('')
  const [date, setDate] = useState('')
  const [typeTask, setTypeTask] = useState('')
  const [briefDescription, setBriefDescription] = useState('')
  const [description, setDescription] = useState('')

  const hanlderTitle = (e: ChangeEvent<HTMLInputElement>) => setTitlte(e.target.value)
  const hanlderSetDate = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)
  const hanlderTypeTask = (e: ChangeEvent<HTMLInputElement>) => setTypeTask(e.target.value)
  const hanlderBriefDescription = (e: ChangeEvent<HTMLInputElement>) => setBriefDescription(e.target.value)
  const hanlderDescription = (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)



  return (
    <div className='AddTaskForm-container'>
          <div className='titleTaskDataTask-container'>
              <div className='titleTask-container'>
                <label htmlFor="titleTaskInput">Titulo</label>
                  <Input width={200}
                  type="text" 
                  id='titleTaskInput' 
                  placeholder='Titulo'
                  value={title}
                  onChange={hanlderTitle}/> 
              </div>
            
              <div className='dataTask-container'>
                <label htmlFor="dateTaskInput">Fecha</label>
                <Input width={100}
                type="text" 
                id='dateTaskInput' 
                placeholder='MM/DD/YYYY'
                value={date}
                onChange={hanlderSetDate}/> 
              </div>
            </div>
        
            <div className='typeTaskBriefDecriptionTask-container'>
              <div className='typeTask-container'>
                <label htmlFor="typeTaskInput">Tipo de tarea</label>
                <Input 
                width={100}
                type="text" 
                id='typeTaskInput' 
                placeholder='Tipo de tarea'
                value={typeTask}
                onChange={hanlderTypeTask}/>
              </div>
            
              <div className='briefDescriptionTask-container'>
                <label htmlFor="briefDescriptionTaskInput">Descripcion breve</label>
                <Input width={200}
                type="text" 
                id='briefDescriptionTaskInput' 
                placeholder='Descripcion breve de la tarea'
                value={briefDescription}
                onChange={hanlderBriefDescription}/>
              </div>
            </div>

            <div className='descriptionTask-container'>
              <label htmlFor="descriptionTaskInput">Descripcion</label>
              <InputMultiLine width={320}
                      height={100}
              id='descriptionTaskInput' 
              placeholder='Descripcion de la tarea'
              value={description}
              onChange={hanlderDescription}/>
        </div>

        
    </div>
  )
}

export default AddTaskForm